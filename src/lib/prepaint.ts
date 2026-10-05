import { STORAGE_KEY } from "./experience-key";

// Inlined in <head> so the page paints in the visitor's chosen light on the first frame.
export const PREPAINT_SCRIPT = `(function(){
var d=document.documentElement,s=null,e={light:"night",motion:"gentle"};
try{s=localStorage.getItem("${STORAGE_KEY}");}catch(x){}
if(s){try{var p=JSON.parse(s);if(p.light)e.light=p.light;if(p.motion)e.motion=p.motion;}catch(x){}}
else{try{if(localStorage.getItem("org-theme")==="light")e.light="prism";}catch(x){}
if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)e.motion="still";}
var h=new Date().getHours();
var t=e.light==="day"?(h>=5&&h<11?"prism":h>=11&&h<17?"stone":"night"):e.light;
d.dataset.light=e.light;d.dataset.theme=t;d.dataset.motion=e.motion;
})();`;
