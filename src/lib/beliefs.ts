// Majority-held beliefs as published on orgspirituality.org/beliefs (snapshot 2026-10-05).
// Tallies are "members who agree / members who voted"; spacing typos from the source were fixed.

export type Point = { marker: string; text: string; agree?: number; votes?: number; by?: string };

export type Belief = {
  roman: string;
  text: string;
  agree?: number;
  votes?: number;
  by?: string;
  points?: Point[];
};

export const BELIEFS: Belief[] = [
  {
    roman: "I",
    text: "We think God, the universe, the Great Architect is limitless and infinite. As a result, any further definition would be incorrect.",
    agree: 3,
    votes: 3,
    by: "Chris",
  },
  {
    roman: "II",
    text: "We are grateful that we have love in this particular version of reality. It's a beautiful barometer, or a compass at the very least. At any time we can compare our actions to what love would do, and immediately we know the value of what we're up to. Any imperfections jump right out.",
    agree: 3,
    votes: 3,
    by: "Chris",
  },
  {
    roman: "III",
    text: "We're here to explore and learn, especially about love, and we're here to enjoy it, as wild and crazy as that sounds.",
    agree: 3,
    votes: 3,
    by: "Chris",
  },
  {
    roman: "IV",
    text: "Entheogens offer so much wisdom, power, humility, and freedom. We don't believe they let us communicate with entities in a spiritual realm. We know that they do. We're grateful for that and retain a childlike curiosity as to why. Any \"answer\" is just a bundle of more questions. It's one amazing ride that is worth supporting. If we all start connecting and comparing notes, we just might be surprised.",
    agree: 3,
    votes: 3,
    by: "Chris",
  },
  {
    roman: "V",
    text: "The Universal Creator gifted us entheogens, psychedelic and non-psychedelic, and intended them to have a multitude of uses, including but not limited to:",
    agree: 2,
    votes: 2,
    by: "Tripp",
    points: [
      { marker: "A.", text: "Theophany: seeing and communicating more clearly with The Universal Creator, spirits, entities, and angelic beings, which can all offer guidance." },
      { marker: "B.", text: "Therapies and medicines: healing of illness often leads to a stronger spiritual connection." },
      { marker: "C.", text: "Creativity: catalysts of ideas to better humanity, guiding scientific discoveries toward longer, better lives for all living beings." },
      { marker: "D.", text: "Responsible recreation: relaxation that uplifts the mood, and for many people the doorway to their first spiritual experience." },
      { marker: "E.", text: "Irresponsible recreation, in rare cases: never encouraged, yet many people have still had unexpected spiritual experiences this way." },
    ],
  },
  {
    roman: "VI",
    text: "That which created the universe and everything in it can be referred to by any word that conveys respect.",
    agree: 3,
    votes: 3,
    by: "Tripp",
    points: [
      { marker: "A.", text: "Names members use today: The Universal Creator, The Creator, God, YHWH (Yahweh), Universe, Great Architect. ORG will one day vote on the name used in official documents." },
    ],
  },
  {
    roman: "VII",
    text: "Christian beliefs held by members, each voted on separately:",
    points: [
      { marker: "A.", text: "Monotheism.", agree: 2, votes: 2, by: "Emily" },
      { marker: "B.", text: "God is omniscient.", agree: 2, votes: 2, by: "Emily" },
      { marker: "C.", text: "God is omnipotent.", agree: 2, votes: 2, by: "Emily" },
      { marker: "D.", text: "God is omnipresent and exists in all dimensions and planes.", agree: 2, votes: 2, by: "Emily" },
      { marker: "E.", text: "God is a spirit, and they that worship Him must worship Him in spirit and in truth (John 4:24).", agree: 1.5, votes: 2, by: "Emily" },
      { marker: "F.", text: "God is outside of time: the Alpha and the Omega.", agree: 1.5, votes: 2, by: "Emily" },
      { marker: "G.", text: "The trinity: one God in three persons, the Father, the Son, and the Holy Spirit.", agree: 1, votes: 2, by: "Emily" },
    ],
  },
  {
    roman: "VIII",
    text: "Plant medicine should be more widely available to people.",
    agree: 3,
    votes: 3,
    by: "Lauren",
  },
  {
    roman: "IX",
    text: "Plant medicine brings us closer to God and, just as importantly, brings us closer to ourselves.",
    agree: 3,
    votes: 3,
    by: "Lauren",
  },
];

export const SPIRITUAL_TRADITIONS = [
  "Perennialism",
  "Entheism",
  "Animism",
  "Omnism",
  "Panpsychism",
  "Pantheism",
  "Hylozoism",
];
