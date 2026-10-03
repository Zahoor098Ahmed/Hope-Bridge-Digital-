import type { CSSProperties } from "react";

import type { IconName } from "@/components/Icon";

export type FeatureGroup = { icon: IconName; title: string; items: string[] };
export type Step = { title: string; text: string };
export type Audience = { who: string; how: string };
export type Comparison = {
  columns: string[];
  rows: string[][];
  note?: string;
};
export type Faq = { q: string; a: string };

export type AppInfo = {
  slug: "angel-talk" | "bloomlearn" | "bloom-focus";
  name: string;
  emoji: string;
  accent: string;
  tagline: string;
  category: string;
  summary: string;
  intro: string;
  platforms: string[];
  languages: string[];
  highlights: string[];
  audience: Audience[];
  features: FeatureGroup[];
  steps: Step[];
  comparisonTitle: string;
  comparison: Comparison;
  why: { title: string; text: string }[];
  faq?: Faq[];
  disclaimer?: string;
  credits?: string;
  taglines: string[];
};

export const apps: AppInfo[] = [
  {
    slug: "angel-talk",
    name: "Angel Talk",
    emoji: "🗣️",
    accent: "#7a5af5",
    tagline: "A voice for every child.",
    category: "AAC · Communication",
    summary:
      "A gentle AAC app that helps non-verbal and speech-delayed children say what they need, feel and think by tapping pictures that speak out loud.",
    intro:
      "A child taps a picture and Angel Talk speaks it. Tap several pictures and it builds and speaks a full sentence, like “I want water” or “I feel tired”. Behind a parent PIN, caregivers can build the child's whole vocabulary in minutes, even just by speaking.",
    platforms: ["Web", "Android", "iOS"],
    languages: ["English", "العربية", "اردو", "हिन्दी", "Español", "Français"],
    highlights: [
      "Picture tiles that speak instantly, plus a sentence builder",
      "Build a whole board with one spoken sentence",
      "Full boards in English, Arabic, Urdu, Hindi, Spanish and French",
      "Social stories, visual schedule, games and calm tools in one app",
    ],
    audience: [
      { who: "Children with autism (ASD)", how: "Picture-first, predictable layout, calm colours, social stories and visual schedules to reduce anxiety." },
      { who: "Apraxia, speech delay or Down syndrome", how: "Tap-to-talk words and whole phrases while speech develops." },
      { who: "Non-verbal children and teens", how: "A full communication board for requests, feelings, people, places and actions." },
      { who: "Parents & families", how: "Build a personal board in about 90 seconds, with no technical skills needed." },
      { who: "Special-education teachers & schools", how: "Bulk-create classroom vocabulary, schedules and learning games." },
      { who: "Speech-language therapists", how: "Verb-form teaching, sentence building, therapy goals and a caregiver journal." },
      { who: "Arabic- and Urdu-speaking families", how: "A complete board in their home language, with tiles that can show two languages at once." },
    ],
    features: [
      {
        icon: "MessageCircle",
        title: "The child's talk board",
        items: [
          "Large picture tiles that speak instantly",
          "Sentence Builder strip: tap words in order, speak them in one go",
          "Whole Phrases mode for gestalt language processors",
          "“Say It For Me” board of everyday sentences",
          "Quick Access bar: Help · Water · Bathroom · Stop",
          "Natural boy, girl, woman or man voices with adjustable pitch and speed",
        ],
      },
      {
        icon: "Sparkles",
        title: "Smart verb teaching",
        items: [
          "Add a verb once and get all four forms: Go → Went → Gone → Going",
          "Colour-coded form badges (1st, 2nd, 3rd, 4th)",
          "Verbs A–Z shelves, every verb under its own letter",
          "Edit one form and the others update with it",
        ],
      },
      {
        icon: "Mic",
        title: "Build the board by voice",
        items: [
          "Say categories, sub-categories and words in one sentence",
          "Filler words are removed automatically",
          "Tolerates common speech-recognition mistakes",
          "Review and edit everything before it is saved",
          "Works with Arabic and Urdu voice commands",
        ],
      },
      {
        icon: "LayoutGrid",
        title: "Caregiver space",
        items: [
          "Add words one by one, by bulk paste or by voice",
          "About 14,800 ARASAAC symbols, plus gallery, camera, web search or AI pictures",
          "Your picture choices and deletions always stay",
          "Hide or show any word or shelf without deleting it",
          "Use counts, last used, backup and restore",
        ],
      },
      {
        icon: "BookOpen",
        title: "Learning, routine & calm",
        items: [
          "Read-aloud social stories: Dentist, Haircut, First Day of School and more",
          "Picture-based visual schedule for the day",
          "Learning games: letters, numbers, colours, shapes, animals, emotions",
          "Sensory Calmer with guided breathing",
          "Emergency Passcard for caregivers and emergency staff",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Parent tools & privacy",
        items: [
          "90-second onboarding builds “⭐ [Child's Name]'s World”",
          "Therapy goals, daily care and meltdown journal",
          "Content review queue and content filter",
          "PIN-protected adult area",
          "No forced account; the board is stored on the device and works offline",
        ],
      },
    ],
    steps: [
      { title: "Set up in about 90 seconds", text: "Choose the language and voice, and add your child's favourite foods, people and toys." },
      { title: "Build the board", text: "Use the ready-made shelves, or add your own words by typing, pasting or speaking." },
      { title: "Your child talks", text: "They tap pictures, build sentences and are heard." },
    ],
    comparisonTitle: "How Angel Talk compares",
    comparison: {
      columns: ["", "Angel Talk", "Premium AAC apps", "Free AAC boards"],
      rows: [
        ["Price", "Affordable, no lock-in", "Typically $250–$300, iOS-focused", "Free"],
        ["Arabic & Urdu boards", "✅ Full app and vocabulary", "❌ Not in most", "⚠️ Community translations"],
        ["Two languages on one tile", "✅", "❌ Rare", "❌ Rare"],
        ["Build a board by one voice command", "✅", "❌ Manual editing", "❌ Manual editing"],
        ["Automatic verb forms with badges", "✅", "⚠️ Mostly manual", "❌"],
        ["Stories, schedule, games and calm tools", "✅ All included", "❌ Usually separate apps", "❌"],
        ["90-second personalised setup", "✅", "❌ Long setup", "❌"],
        ["Works offline", "✅ Core board", "✅", "⚠️ Mostly online"],
      ],
      note: "Premium examples: Proloquo2Go, TouchChat, LAMP WFL. Free example: Cboard. Competitor details are based on publicly available information and may change.",
    },
    why: [
      { title: "Built for South-Asian and Arab families", text: "Urdu and Arabic are first-class languages, not an afterthought." },
      { title: "Faster to set up", text: "Say it once, and the board is ready." },
      { title: "Teaches language, not just requests", text: "Verb forms, sentence building and social stories grow with the child." },
      { title: "One app instead of five", text: "Talk board, schedule, stories, games and calm tools together." },
      { title: "Gentle and child-friendly", text: "Soft colours, large tiles and no clutter." },
      { title: "Caregivers stay in control", text: "Every picture, word and shelf can be edited. Nothing changes behind your back." },
    ],
    credits: "Symbols: ARASAAC (CC BY-NC-SA).",
    taglines: [
      "Every child has something to say. Angel Talk helps them say it.",
      "Speak it once. Their board is ready.",
    ],
  },
  {
    slug: "bloomlearn",
    name: "BloomLearn",
    emoji: "🌱",
    accent: "#18a57b",
    tagline: "Say it. See it. Learn it.",
    category: "Visual language & learning",
    summary:
      "BloomLearn turns words into pictures. Speak or type a sentence and BloomLearn draws it on screen right away, so children see what language means.",
    intro:
      "A child or teacher says “three red apples under the table”, and BloomLearn draws exactly that. Children see colours, numbers, actions and positions come to life, and they can keep talking to change the picture step by step.",
    platforms: ["Android"],
    languages: ["English", "العربية"],
    highlights: [
      "Any typed or spoken sentence becomes a picture",
      "Positions like under, behind and beside in one scene",
      "Maths you can see, including story problems",
      "Grade 1–5 lessons in English, Maths and Science",
    ],
    audience: [
      { who: "Young children (ages 4–10)", how: "Learn vocabulary, colours, numbers and positions by seeing them." },
      { who: "English learners", how: "Connect English words to pictures, with an Arabic interface for Arabic-speaking families." },
      { who: "Autism, speech delay or language difficulties", how: "Calm, simple, uncluttered pictures that give visual support for understanding language." },
      { who: "Primary teachers (Grades 1–5)", how: "Ready-made lessons by grade. Type any sentence and show the class a picture." },
      { who: "Therapists & special-education teachers", how: "A quick visual tool for prepositions, describing words and sentence building." },
      { who: "Parents", how: "Safe, private, ad-free practice at home, with a progress view." },
    ],
    features: [
      {
        icon: "Image",
        title: "Picture Talk",
        items: [
          "Speak or type a sentence and see it drawn right away",
          "Understands colours, sizes, numbers, things, animals and actions",
          "Positions: under, on, above, behind, in front of, beside, inside",
          "Keep talking to change it: “make it blue”, “put it under the chair”",
          "AI picture turns a scene into a storybook-style illustration",
          "Read aloud with adjustable speed",
        ],
      },
      {
        icon: "Calculator",
        title: "Maths you can see",
        items: [
          "“5 apples − 3 apples”, “3 × 2 apples”, “10 ÷ 2 candies”",
          "Short story problems work too",
          "Objects drawn for the child to count",
          "The answer stays hidden until the child taps Show answer",
        ],
      },
      {
        icon: "School",
        title: "School subjects",
        items: [
          "English, Maths and Science",
          "Organised by Grade 1–5, chapter and lesson",
          "Each lesson is a sentence the child sees as a picture",
          "A Prepositions chapter in every English grade",
        ],
      },
      {
        icon: "Award",
        title: "Progress that motivates",
        items: [
          "Sentences per day, streaks, levels and badges",
          "See which positions, colours and words the child has used",
          "Progress at a glance for parents and teachers",
        ],
      },
      {
        icon: "Shield",
        title: "Built for families & classrooms",
        items: [
          "Parent passcode protects Settings",
          "Progress saved only on the device; history can be switched off",
          "Instant pictures and the picture library work offline",
          "English and Arabic interface with right-to-left layout",
        ],
      },
    ],
    steps: [
      { title: "Say or type a sentence", text: "“The cat is under the table.” Any sentence, in the child's own words." },
      { title: "See it drawn", text: "BloomLearn draws the scene right away, with the cat really under the table." },
      { title: "Change it and learn", text: "Keep talking to change colours, numbers and positions, and watch the picture follow." },
    ],
    comparisonTitle: "How BloomLearn is different",
    comparison: {
      columns: ["", "BloomLearn", "AAC / symbol apps", "Kids' learning apps"],
      rows: [
        ["Any sentence becomes a picture", "✅", "❌ One symbol per word", "❌ Fixed content only"],
        ["Positions shown in one scene", "✅", "❌", "Limited, inside set games"],
        ["Edit the picture by talking", "✅", "❌", "❌"],
        ["Visual maths and story problems", "✅", "❌", "✅ Fixed exercises"],
        ["Grade 1–5 school lessons", "✅", "❌", "✅"],
        ["Arabic interface", "✅", "Some", "Few"],
        ["Data stays on the device, no ads", "✅", "✅ Mostly", "Often needs an account"],
        ["Price", "Free core features", "Often expensive", "Usually a subscription"],
      ],
      note: "AAC examples: Proloquo2Go, TD Snap, Avaz, Cboard, Tawasol. Learning app examples: Khan Academy Kids, ABCmouse, Lingokids, Starfall. Details based on publicly available information and may change.",
    },
    why: [
      { title: "Language becomes a picture", text: "“The cat is under the table” shows a cat under a table, not three separate symbols." },
      { title: "The child is in control", text: "They can say anything and change it. Open-ended play, not a fixed worksheet." },
      { title: "One app for home, school and therapy", text: "Vocabulary, grammar, maths and science together." },
      { title: "Designed for calm", text: "Flat, soft, clutter-free pictures suit sensitive and autistic learners." },
      { title: "Made with Arabic-speaking families in mind", text: "The interface is in English and Arabic." },
      { title: "Private by design", text: "Nothing is uploaded unless a parent turns on online features." },
    ],
    credits: "Pictograms: ARASAAC (CC BY-NC-SA) and OpenSymbols. Book pictures: Global Digital Library.",
    taglines: ["Say it. See it. Learn it."],
  },
  {
    slug: "bloom-focus",
    name: "Bloom Focus",
    emoji: "🎯",
    accent: "#ef7d4f",
    tagline: "Little minds. Big focus.",
    category: "Attention training · Therapy support",
    summary:
      "Playful attention training that adapts to every child, guided by their therapist and practised at home with their favourite heroes.",
    intro:
      "Children play short, game-based sessions that adapt in real time: harder when they are ready, gentler when they need support. Therapists build personalised activities and follow progress, while parents start the day's training at home and stay in touch through private messaging.",
    platforms: ["iOS", "Android", "Web"],
    languages: ["English"],
    highlights: [
      "15 adaptive focus games training 12+ attention skills",
      "40 heroes in 8 worlds cheer every win",
      "Therapist Activity Builder and Game Studio",
      "Feelings check-in and Calm Corner before every session",
    ],
    audience: [
      { who: "Children (about 4–12)", how: "Short, playful focus games with a hero buddy, stars, streaks and a Fun Zone reward." },
      { who: "Parents", how: "One “Let's go!” button, plain-language progress and private messaging with the therapist." },
      { who: "Therapists", how: "Learning profiles, an Activity Builder, Game Studio, activity plans and insights." },
      { who: "Clinics", how: "Multiple therapists, a shared library and onboarding support." },
    ],
    features: [
      {
        icon: "TrendingUp",
        title: "Always just right",
        items: [
          "Steps up when accuracy stays above 85%, back when it drops below 65%",
          "Separate difficulty ladders for speed, distractions, memory span and more",
          "Session length adapts to the child's day",
          "Calm mode: gentler visuals and fewer distractions",
        ],
      },
      {
        icon: "Star",
        title: "Their favourite hero, inside the game",
        items: [
          "Pick up to 3 heroes from 40, in 8 themed worlds",
          "Heroes say hello by name and cheer every win",
          "Make your own hero from a photo of a toy or pet",
          "Scene strength (Off / Subtle / Bold) respects sensory needs",
        ],
      },
      {
        icon: "Puzzle",
        title: "Game Studio",
        items: [
          "Make a game in 4 easy steps, no design skills needed",
          "Picture puzzle, word search, worksheet, find it, remember the order, listen for it",
          "Upload your own images, like a photo of the child's room or pet",
        ],
      },
      {
        icon: "MessagesSquare",
        title: "Private messaging",
        items: [
          "One-to-one threads, each linked to a specific child",
          "Photos, screenshots, voice notes and documents",
          "Therapy cards, quick replies and read ticks",
          "Real names on both sides",
        ],
      },
      {
        icon: "Heart",
        title: "Feelings first",
        items: [
          "Every session begins with “How are you feeling today?”",
          "Tired, worried or grumpy? The Calm Corner is offered first",
          "Therapists see check-ins too, so they understand the whole child",
        ],
      },
      {
        icon: "ChartColumn",
        title: "Progress everyone understands",
        items: [
          "Skill-by-skill progress in plain language for parents",
          "Session history with dates",
          "Streaks and stars for the child",
          "Insights and trends for the therapist",
        ],
      },
    ],
    steps: [
      { title: "The therapist sets the plan", text: "They create the child's profile, choose or build activities, and pick their heroes." },
      { title: "The child plays at home", text: "A parent taps “Let's go!”. The child checks in with how they feel, then plays today's 4 focus games." },
      { title: "Everyone sees progress", text: "Games adapt automatically. Parents see progress, therapists see insights, and everyone stays in touch." },
    ],
    comparisonTitle: "Three apps in one",
    comparison: {
      columns: ["", "For children", "For parents", "For therapists"],
      rows: [
        ["Start", "Feelings check-in with 3D faces", "One big “Let's go!” button", "A Today dashboard of who to see"],
        ["Daily use", "4 focus games with a hero buddy", "Activities from the therapist appear automatically", "Activity Builder and Game Studio"],
        ["Reward & care", "Fun Zone and Calm Corner", "Plain-language progress and streaks", "Personalised suggestions per child"],
        ["Staying connected", "Stars, streaks and confetti", "Private messaging with the therapist", "Insights and secure messaging"],
      ],
    },
    why: [
      { title: "Practice beyond the clinic", text: "Daily home practice, guided by the child's own therapist." },
      { title: "Adapts to every child", text: "Not one-size-fits-all: age, needs and sensory profile all count." },
      { title: "Everyone in one place", text: "Child, parent and therapist connected in one app." },
      { title: "Kid-safe", text: "No ads, no in-game purchases, no open chat for children." },
      { title: "Sensory-friendly", text: "Calm mode, gentle scenes and no flashing." },
      { title: "Your data stays yours", text: "Accounts are protected with secure sign-in." },
    ],
    faq: [
      { q: "What ages is Bloom Focus for?", a: "Children aged about 4 to 12. Each game adapts to the child's level, not only their age." },
      { q: "Do we need a therapist to use it?", a: "It works best when connected to a therapist, who personalises the plan and activities. Families can also follow the built-in daily training." },
      { q: "How long is a session?", a: "About 4–10 minutes a day. Short, focused practice works best for children." },
      { q: "What if my child has a hard day?", a: "Training starts with a feelings check-in. On tough days the Calm Corner is offered first, and calm mode makes games gentler." },
      { q: "Can my child use their favourite character?", a: "Yes. They can choose up to 3 heroes from 40, or make their own hero from a photo." },
      { q: "Can therapists make their own games?", a: "Yes. Game Studio lets therapists create picture puzzles, word searches, worksheets and more in 4 simple steps, using their own images." },
      { q: "Is messaging private?", a: "Yes. Each conversation is one-to-one between a family and their own therapist, about one child." },
      { q: "Is it a medical treatment?", a: "No. Bloom Focus supports therapy and home practice. It does not diagnose or treat any condition." },
    ],
    disclaimer:
      "Bloom Focus supports therapy and practice at home. It is not a medical device and does not diagnose or treat any condition. Always follow the guidance of your child's healthcare professional.",
    credits: "Hero artwork: Microsoft Fluent Emoji 3D (MIT licence).",
    taglines: ["Little minds. Big focus.", "Where therapy meets play, every day."],
  },
];

export const focusGames: [string, string][] = [
  ["Tap the Stars", "Sustained attention"],
  ["Flash Match", "Processing speed"],
  ["Find the Blue", "Visual attention"],
  ["Flock Focus", "Filtering distractions"],
  ["Memory Sequence", "Working memory"],
  ["Spatial Grid", "Spatial memory"],
  ["Go / No-Go", "Impulse control"],
  ["Color Clash", "Cognitive inhibition"],
  ["Switch Sort", "Cognitive flexibility"],
  ["Listen for Apple", "Auditory attention"],
  ["Follow the Path", "Following instructions"],
  ["Multi-Modal Focus", "Divided attention"],
  ["Puzzle Match", "Visual matching"],
  ["Block Builder", "Pattern copying"],
  ["Maze Path", "Planning & tracking"],
];

export const heroWorlds: { emoji: string; name: string; heroes: string[] }[] = [
  { emoji: "🚀", name: "Space Explorers", heroes: ["Captain Blastoff", "Astro Ace", "Zib Zorp", "Robo Bolt", "Saucer Sam"] },
  { emoji: "🦖", name: "Dino Land", heroes: ["Rexy Roarson", "Longneck Larry", "Zippy Zap", "Chompy Chomp", "Egg-bert"] },
  { emoji: "🐬", name: "Ocean Friends", heroes: ["Splash Dash", "Inky Winky", "Finn Fang", "Puffy McPuff", "Shelly Speedster"] },
  { emoji: "🦄", name: "Magic Kingdom", heroes: ["Sparkle Hoof", "Blaze Wing", "Twinkle Toes", "Wizard Whizbang", "Princess Sunbeam"] },
  { emoji: "🦸", name: "Super City", heroes: ["Super Zoom", "Turbo Tom", "Choo-Choo Charlie", "Flash Fireheart", "Detective Dot"] },
  { emoji: "🦁", name: "Jungle Pals", heroes: ["Leo the Brave", "Bamboo Bao", "Cheeky Chimp", "Polly Pop", "Stripes McRoar"] },
  { emoji: "🐶", name: "Farm Buddies", heroes: ["Pip the Pup", "Whiskers McPurr", "Cluck Norris", "Daisy Moo", "Oinky Doinky"] },
  { emoji: "⚽", name: "Sports Stars", heroes: ["Striker Sam", "Dunk Master", "Champ the Cup", "Ace Smash", "Captain Cuddles"] },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}

// Inline style that themes an element (and its children) with an app's colour,
// for the bg-accent / text-accent / bg-accent-soft utilities. The soft tint adapts to dark mode.
export function accent(color: string): CSSProperties {
  return {
    "--accent": color,
    "--accent-soft": `color-mix(in srgb, ${color} 14%, var(--color-surface))`,
  } as CSSProperties;
}
