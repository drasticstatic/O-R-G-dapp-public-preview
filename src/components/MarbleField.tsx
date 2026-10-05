"use client";

import { useEffect, useRef } from "react";
import { useExperience, resolveTheme, type Theme, type Motion } from "@/lib/experience";

type Palette = { mode: number; base: string; inks: [string, string, string, string]; scale: number };

const PALETTES: Record<Theme, Palette> = {
  night: { mode: 0, base: "#100e1c", inks: ["#8b6cf6", "#e26db1", "#4fd1c5", "#e9be72"], scale: 0.5 },
  prism: { mode: 1, base: "#f5f3fa", inks: ["#ffb3c7", "#ffd9a0", "#a8e3f5", "#c9b8ff"], scale: 0.5 },
  stone: { mode: 2, base: "#ecebe6", inks: ["#22408a", "#a07a2c", "#4d5566", "#f7f6f2"], scale: 0.8 },
};

const SPEED: Record<Motion, number> = { still: 0, gentle: 0.28, vivid: 0.75 };

const VERT = `attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}`;

// Domain-warped fbm (marbled ink), with a vortex around the pointer like a stylus dragged through
// marbling ink. One field, three materials: luminous ink in dark water, pastel oil slick, veined stone.
const FRAG = `precision highp float;
uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;uniform float u_stir;uniform float u_mode;
uniform vec3 u_base;uniform vec3 u_ink0;uniform vec3 u_ink1;uniform vec3 u_ink2;uniform vec3 u_ink3;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.0-2.0*f);
return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y);}
float fbm(vec2 p){float v=0.0,a=0.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);
for(int i=0;i<5;i++){v+=a*noise(p);p=m*p;a*=0.5;}return v;}
vec3 ramp(float t){t=fract(t)*4.0;
if(t<1.0)return mix(u_ink0,u_ink1,smoothstep(0.0,1.0,t));
if(t<2.0)return mix(u_ink1,u_ink2,smoothstep(1.0,2.0,t));
if(t<3.0)return mix(u_ink2,u_ink3,smoothstep(2.0,3.0,t));
return mix(u_ink3,u_ink0,smoothstep(3.0,4.0,t));}
void main(){
vec2 uv=gl_FragCoord.xy/u_res;float asp=u_res.x/u_res.y;
vec2 p=vec2(uv.x*asp,uv.y)*2.2;vec2 m=vec2(u_mouse.x*asp,u_mouse.y)*2.2;
vec2 d=p-m;float sw=u_stir*2.6*exp(-dot(d,d)*2.4);float c=cos(sw),s=sin(sw);
p=m+mat2(c,-s,s,c)*d;float t=u_time;
vec2 q=vec2(fbm(p+vec2(0.0,0.07*t)),fbm(p+vec2(5.2,1.3)-0.05*t));
vec2 r=vec2(fbm(p+3.5*q+vec2(1.7,9.2)+0.12*t),fbm(p+3.5*q+vec2(8.3,2.8)-0.1*t));
float f=fbm(p+3.0*r);float bands=0.5+0.5*sin(f*14.0+r.x*6.0);
vec3 ink=ramp(f*1.3+r.y*0.8+q.x*0.4);vec3 col;
if(u_mode<0.5){float glow=pow(bands,6.0)*0.9+pow(f,3.0)*0.4;col=u_base+ink*glow+ink*0.06;}
else if(u_mode<1.5){col=mix(u_base,ink,0.5+0.38*bands);col=mix(col,vec3(1.0),0.18*pow(bands,4.0));}
else{float w=abs(sin(f*6.0+r.x*2.5));
float broad=1.0-smoothstep(0.0,0.28,w);float vein=1.0-smoothstep(0.0,0.045,w);
float fine=1.0-smoothstep(0.0,0.03,abs(sin(f*17.0+q.y*4.0)));
col=u_base-0.07*fbm(p*1.5+r);col=mix(col,mix(u_base,u_ink2,0.4),broad*0.4);
col=mix(col,u_ink0,vein*0.7);col=mix(col,u_ink1,fine*0.55*smoothstep(0.45,0.65,q.x));}
gl_FragColor=vec4(col,1.0);}`;

function rgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function MarbleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const exp = useExperience();
  const theme = resolveTheme(exp.light);
  const settings = useRef({ theme, motion: exp.motion });

  useEffect(() => {
    settings.current = { theme, motion: exp.motion };
    canvasRef.current?.dispatchEvent(new Event("org:redraw"));
  }, [theme, exp.motion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    delete canvas.dataset.fallback;
    const gl = canvas.getContext("webgl", { antialias: false, preserveDrawingBuffer: false });
    if (!gl) {
      canvas.dataset.fallback = "true";
      return;
    }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (gl.isContextLost() || !gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      canvas.dataset.fallback = "true";
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (name: string) => gl.getUniformLocation(prog, name);
    const U = {
      res: u("u_res"), time: u("u_time"), mouse: u("u_mouse"), stir: u("u_stir"), mode: u("u_mode"),
      base: u("u_base"), ink0: u("u_ink0"), ink1: u("u_ink1"), ink2: u("u_ink2"), ink3: u("u_ink3"),
    };

    const host = canvas.parentElement ?? canvas;
    let time = 7.3;
    let stir = 0;
    const mouse = { x: 0.62, y: 0.5, tx: 0.62, ty: 0.5 };
    let visible = true;
    let raf = 0;
    let last = performance.now();

    const resize = () => {
      const pal = PALETTES[settings.current.theme];
      const w = Math.min(1400, Math.max(1, canvas.clientWidth));
      const h = Math.max(1, canvas.clientHeight);
      canvas.width = Math.round(w * pal.scale);
      canvas.height = Math.round(h * pal.scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const draw = () => {
      const pal = PALETTES[settings.current.theme];
      gl.uniform2f(U.res, canvas.width, canvas.height);
      gl.uniform1f(U.time, time);
      gl.uniform2f(U.mouse, mouse.x, mouse.y);
      gl.uniform1f(U.stir, stir);
      gl.uniform1f(U.mode, pal.mode);
      gl.uniform3fv(U.base, rgb(pal.base));
      gl.uniform3fv(U.ink0, rgb(pal.inks[0]));
      gl.uniform3fv(U.ink1, rgb(pal.inks[1]));
      gl.uniform3fv(U.ink2, rgb(pal.inks[2]));
      gl.uniform3fv(U.ink3, rgb(pal.inks[3]));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const loop = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt * SPEED[settings.current.motion];
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      stir *= 0.965;
      draw();
      const flowing = SPEED[settings.current.motion] > 0;
      if (visible && !document.hidden && (flowing || stir > 0.002)) raf = requestAnimationFrame(loop);
    };

    const kick = () => {
      if (!raf && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = 1 - (e.clientY - rect.top) / rect.height;
      const moved = Math.hypot(nx - mouse.tx, ny - mouse.ty);
      mouse.tx = nx;
      mouse.ty = ny;
      stir = Math.min(1, stir + moved * 2.2);
      kick();
    };

    const onRedraw = () => {
      resize();
      draw();
      kick();
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      kick();
    });
    io.observe(canvas);
    const ro = new ResizeObserver(onRedraw);
    ro.observe(canvas);
    host.addEventListener("pointermove", onMove);
    canvas.addEventListener("org:redraw", onRedraw);
    document.addEventListener("visibilitychange", kick);

    resize();
    draw();
    kick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("org:redraw", onRedraw);
      document.removeEventListener("visibilitychange", kick);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`marble ${className}`} />;
}
