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
  slug: "angel-talk" | "bloomlearn" | "bloom-focus" | "nexia-bridge";
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
    platforms: ["Android", "iOS"],
    languages: ["English", "العربية"],
    highlights: [
      "Picture tiles that speak instantly, plus a sentence builder",
      "Build a whole board with one spoken sentence",
      "Full boards in English and Arabic",
      "Social stories, visual schedule, games and calm tools in one app",
    ],
    audience: [
      { who: "Children with autism (ASD)", how: "Picture-first, predictable layout, calm colours, social stories and visual schedules to reduce anxiety." },
      { who: "Apraxia, speech delay or Down syndrome", how: "Tap-to-talk words and whole phrases while speech develops." },
      { who: "Non-verbal children and teens", how: "A full communication board for requests, feelings, people, places and actions." },
      { who: "Parents & families", how: "Build a personal board in about 90 seconds, with no technical skills needed." },
      { who: "Special-education teachers & schools", how: "Bulk-create classroom vocabulary, schedules and learning games." },
      { who: "Speech-language therapists", how: "Verb-form teaching, sentence building, therapy goals and a caregiver journal." },
      { who: "Arabic-speaking families", how: "A complete board in Arabic, with tiles that can show English and Arabic at once." },
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
          "Works with Arabic voice commands",
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
        ["Arabic boards", "✅ Full app and vocabulary", "❌ Not in most", "⚠️ Community translations"],
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
      { title: "Built for Arabic-speaking families", text: "Arabic is a first-class language, not an afterthought." },
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
    tagline: "Speech, visual scenes & video storytelling.",
    category: "AI Multimodal Learning",
    summary:
      "An interactive EdTech platform that turns children’s speech and lessons into visual scenes, math counting stages, and video-ready animated stories in English and Arabic.",
    intro:
      "BloomLearn bridges early childhood literacy, science, and mathematics with generative AI and assistive communication (AAC). Built with React Native and Expo for young learners, classrooms, and children with diverse learning needs, BloomLearn transforms spoken or written sentences into interactive on-device visual scenes, storybook illustrations, and video-ready animated lesson clips.",
    platforms: ["Android", "iOS"],
    languages: ["English", "العربية"],
    highlights: [
      "Voice-to-Visual scenes: speak or type any sentence",
      "Video-Ready AI lessons with cinematic child-safe prompts",
      "Full school curriculum: Grades 1–5 Science, Math & English",
      "Active recall Q&A with embedded questions and counting stages",
    ],
    audience: [
      { who: "Young children (ages 4–10)", how: "Learn vocabulary, colours, numbers, positions, and core sciences through interactive visual storytelling." },
      { who: "English & Arabic learners", how: "Connect words to visual concepts and pronunciation in English and Arabic, with full right-to-left (RTL) localization." },
      { who: "Autism, speech delay & diverse learners", how: "Calm, sensory-friendly visual scenes paired with internationally recognized ARASAAC communication symbols." },
      { who: "Primary teachers (Grades 1–5)", how: "Standard-aligned curriculum with 13+ deep-dive Science chapters, multi-part structured lessons, and active recall Q&A." },
      { who: "Therapists & special-education educators", how: "Targeted spatial prepositions, describing words, sentence building, and interactive counting manipulation." },
      { who: "Parents & homeschooling families", how: "Safe, private, ad-free learning protected by a 4-digit Parent PIN lock gate, working offline on-device." },
    ],
    features: [
      {
        icon: "Mic",
        title: "Voice-to-Visual Learning",
        items: [
          "Speak or type any sentence and watch it render into an interactive visual scene",
          "Understands colours, sizes, numbers, things, animals, and actions",
          "Positions: under, on, above, behind, in front of, beside, inside",
          "Dual visual intelligence: on-device ARASAAC symbol stage plus realistic storybook art",
          "Live on-device speech recognition with fallback to Whisper API for accents",
          "High-clarity native pronunciation in English and Arabic via text-to-speech",
        ],
      },
      {
        icon: "Video",
        title: "Video-Ready Learning Engine",
        items: [
          "Live storyboard generator with structured prompts for Sora, Runway Gen-3, Kling & Pika",
          "Explicit camera directions: aerial drone sweeps, slow tracking pans, macro views, and time-lapses",
          "Reveals unseen science: underground roots, chest x-ray lungs, and soil sedimentation layers",
          "Child-safe guardrails: predators stalk and observe naturally with zero violence or injury",
          "Calm, focused visual pacing engineered with zero visual sensory overload",
        ],
      },
      {
        icon: "School",
        title: "13 Master Science Chapters",
        items: [
          "Grade 3 Science master chapters aligned with Saudi MOE, Cambridge, Oxford & McGraw-Hill",
          "Modular hierarchy: Subjects → Grades → Chapters → Parts → Lessons",
          "Cohesive multi-sentence paragraph lessons with structured pedagogical pacing",
          "Living things, animal adaptations, soil horizons, weather systems, heat, and human body",
          "Regional context including Al-Qassim agriculture, Asir terraces, and Arabian desert habitats",
        ],
      },
      {
        icon: "Calculator",
        title: "Visual Mathematics & Word Problems",
        items: [
          "Converts equations (5 apples − 3 apples, 3 × 2 oranges) into interactive counting stages",
          "Natural story problem parser illustrates scenarios with contextual characters and items",
          "Objects drawn for the child to count and manipulate interactively",
          "Answers stay hidden until tapped, fostering independent active problem solving",
        ],
      },
      {
        icon: "BookOpen",
        title: "Active Recall & Comprehension",
        items: [
          "Targeted comprehension Q&A embedded directly into every curriculum lesson",
          "Immediate pedagogical reinforcement to solidify concept understanding",
          "Interactive counting manipulation and answer reveal mechanisms",
          "Progressive concept pacing designed to build confidence step-by-step",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Child Safety & Privacy Lock Gate",
        items: [
          "Protected Parent & Teacher Lock Gate secured with a 4-digit PIN",
          "Strictly moderated, child-safe prompts preventing unsuitable content generation",
          "Zero-latency ARASAAC pictogram stage works completely offline without internet",
          "Privacy-first architecture: learning progress and history stay securely on the device",
        ],
      },
    ],
    steps: [
      { title: "Say, type or choose a lesson", text: "Speak any sentence, solve a math equation, or pick from 13+ Grade 3 Science master chapters." },
      { title: "Watch it render on stage", text: "BloomLearn draws the ARASAAC pictogram stage, generates storybook illustrations, and formats video-ready prompts." },
      { title: "Interact, answer & explore", text: "Explore scientific cutaways, test comprehension with active recall Q&A, and manipulate math counters step by step." },
    ],
    comparisonTitle: "How BloomLearn is different",
    comparison: {
      columns: ["", "BloomLearn", "AAC / symbol apps", "Kids' learning apps"],
      rows: [
        ["Any sentence becomes an interactive scene", "✅ Real-time stage", "❌ One symbol per word", "❌ Fixed animations only"],
        ["Video-ready AI storyboards & prompts", "✅ Cinematic directives", "❌", "❌"],
        ["13+ Master Science chapters (Grades 1–5)", "✅ Cambridge, Oxford & MOE aligned", "❌", "⚠️ Limited or generic"],
        ["Active recall Q&A & visual math", "✅ Equation manipulatives", "❌", "✅ Fixed multiple-choice"],
        ["Scientific cutaways (lungs, roots, soil)", "✅ Macro & internal views", "❌", "❌ Rare"],
        ["Dual visuals: ARASAAC + AI storybook", "✅ Both on demand", "ARASAAC only", "Illustrations only"],
        ["Bilingual English & Arabic with full RTL", "✅ Native audio & context", "Some", "Few"],
        ["Parent & Teacher 4-digit PIN lock", "✅ Secure gate", "✅", "⚠️ Often needs account"],
        ["Works offline, zero-latency", "✅ Full core stage", "✅", "⚠️ Mostly online"],
      ],
      note: "AAC examples: Proloquo2Go, TD Snap, Avaz, Cboard, Tawasol. Learning app examples: Khan Academy Kids, ABCmouse, Lingokids, Starfall. Details based on publicly available information and may change.",
    },
    why: [
      { title: "Multimodal language & science", text: "Connects speech, ARASAAC symbols, realistic storybook art, and cinematic video storytelling into one cohesive experience." },
      { title: "Deep, standards-aligned curriculum", text: "13 complete Grade 3 Science chapters, early Math story problems, and English phonics aligned with Cambridge, Oxford, and Saudi MOE." },
      { title: "Video-ready AI engine", text: "Every lesson includes structured prompts with camera motions and scientific cutaways ready for next-generation video generators." },
      { title: "Active recall over passive watching", text: "Embedded Q&A and interactive manipulatives ensure children actively engage and comprehend every concept." },
      { title: "Bilingual & culturally attuned", text: "Built from the ground up for English and Arabic learners, incorporating regional ecosystems like desert adaptations and local agriculture." },
      { title: "Sensory-friendly & safe by design", text: "Zero sensory overload, child-safe guardrails against violence, offline availability, and a 4-digit parent PIN lock." },
    ],
    faq: [
      {
        q: "What makes BloomLearn's video feature unique?",
        a: "BloomLearn acts as a live storyboard and video prompt engine for next-generation AI video models like Sora, Runway Gen-3, Luma, Kling, and Pika. Every lesson includes cinematic camera directions (drone sweeps, macro cutaways, slow pans, time-lapses) and scientific perspectives like underground root absorption and lung respiration, with strict child-safe guardrails.",
      },
      {
        q: "Which curriculum standards does BloomLearn cover?",
        a: "BloomLearn covers Grades 1–5 across Science, Mathematics, and English, aligned with Saudi Ministry of Education (MOE), Cambridge Primary, Oxford, and McGraw-Hill frameworks. Grade 3 Science features 13 comprehensive master chapters.",
      },
      {
        q: "What topics are included in the 13 Grade 3 Science chapters?",
        a: "Chapters include Plants & Living Things, Animals, Animal Groups and Adaptations, Soil and Rocks, Air and Weather, Heat & Thermal Energy, Habitats and Environments, Food Chains & Food Webs, Water & States of Matter, Properties of Matter, Materials & Uses, The Human Body & Health, and Light and Shadows.",
      },
      {
        q: "How does the Visual Mathematics engine work?",
        a: "BloomLearn converts math equations (like 5 apples − 3 apples or 3 × 2 oranges) into interactive visual counting stages. Its natural word problem parser also illustrates story problems with contextual pictures and hides the answer until the child is ready to reveal it.",
      },
      {
        q: "Can BloomLearn work without an internet connection?",
        a: "Yes. BloomLearn's core interactive ARASAAC pictogram stage and symbol dictionary work completely offline on the device with zero latency. When connected to the internet, it can also generate storybook art and AI video prompts.",
      },
      {
        q: "How does BloomLearn protect children?",
        a: "BloomLearn features a secure 4-digit PIN lock gate for parents and teachers protecting settings and AI controls, strictly moderated child-safe generation guardrails, zero visual sensory overload, and an on-device privacy architecture where child progress remains on the device.",
      },
    ],
    credits: "Pictograms: ARASAAC (CC BY-NC-SA) and OpenSymbols. Book pictures: Global Digital Library. AI video prompts powered by BloomLearn engine.",
    taglines: [
      "Transforming early learning through speech, visual scenes & AI video storytelling.",
      "Say it. See it. Learn it.",
      "Where words, science and stories come alive.",
    ],
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
    platforms: ["Android", "iOS"],
    languages: ["English", "العربية"],
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
  {
    slug: "nexia-bridge",
    name: "Nexia Bridge",
    emoji: "🤝",
    accent: "#4f46e5",
    tagline: "One child. One team. One shared picture.",
    category: "Therapy & education platform",
    summary:
      "A therapy and education platform for autistic children where the parent, therapists, teachers and supervisor all work on one shared picture of the child, each in their own portal.",
    intro:
      "Every child has one team, and Nexia Bridge gives that team one shared record. Therapists plan and run sessions, teachers follow classroom progress, supervisors review the work, and parents see progress, do home practice and message the team, with each person seeing only what their role needs.",
    platforms: ["Android", "iOS"],
    languages: ["English", "العربية"],
    highlights: [
      "Eight portals: parent, behavior, speech, OT, remedial, teacher, supervisor and admin",
      "The therapist's Plan decides which tools and datasheets appear on Today",
      "WhatsApp-style family chat and home tasks between parents and therapists",
      "English and Arabic, with full right-to-left layout",
    ],
    audience: [
      { who: "Parents & caregivers", how: "See today's progress, targets and sessions, tick off home practice, message the therapist and open Child Mode." },
      { who: "Behavior (ABA) therapists", how: "Plan-driven datasheets, targets with mastery levels, graphs, the BIP with ABC log, function and reinforcers, and notes." },
      { who: "Speech therapists (SLP)", how: "Goals, drills and practice for sentences, articulation and recordings, with graphs and notes." },
      { who: "Occupational therapists", how: "Checklists, goals and tools such as the sensory diet and task analysis, chosen in the Plan." },
      { who: "Remedial & classroom teachers", how: "Today, goals or students, graphs, notes and a Family tab for staying in touch with parents." },
      { who: "Clinical supervisors", how: "Review new goals and sessions, observe staff, give feedback, and publish reports and templates." },
      { who: "Centres & administrators", how: "Manage accounts, centres, cases and invoices, seeing counts and summaries only, never clinical notes." },
    ],
    features: [
      {
        icon: "Users",
        title: "One child, one team",
        items: [
          "Everyone assigned to a child shares one record",
          "Parent, therapists, teachers and supervisor see the same picture",
          "A child switcher in the header for staff with several children",
          "Supervisors can ask the administrator to change a case's team",
        ],
      },
      {
        icon: "ClipboardList",
        title: "The Plan drives the tools",
        items: [
          "Therapists choose goals and tools in the Plan",
          "Today then shows only those tools and datasheets",
          "Targets with mastery levels and graphs of trends",
          "Speech exercises and OT tools such as the sensory diet",
        ],
      },
      {
        icon: "MessagesSquare",
        title: "Family chat & home tasks",
        items: [
          "WhatsApp-style chat between the parent and a therapist",
          "Read marks and small attachments, kept inside the app",
          "Therapists set home tasks; parents tick them off and add a note",
          "Colleague-only messages are never sent to parents",
        ],
      },
      {
        icon: "Mic",
        title: "Notes & dictation",
        items: [
          "SOAP-style session notes with an archive",
          "Type notes, or dictate them in the browser",
          "Session summaries saved from Today",
          "Supervisors review sessions and send feedback",
        ],
      },
      {
        icon: "ShieldCheck",
        title: "Everyone sees only their part",
        items: [
          "One portal per role: a parent never sees therapist tools",
          "Parents never see raw clinical logs or ABC events",
          "Administrators see counts and summaries, never notes or messages",
          "Parents decide which professionals can see their child",
        ],
      },
      {
        icon: "Building2",
        title: "For centres & supervisors",
        items: [
          "Review queue for new goals and saved sessions",
          "Staff observation, feedback, reports and templates",
          "Cases, centres, team transfers and archive",
          "Invoice records (draft, issued, paid, void) and an audit log",
        ],
      },
    ],
    steps: [
      { title: "The parent checks in", text: "Signs in, sees today's progress and home practice, ticks off tasks and sends a message." },
      { title: "The therapist plans and runs", text: "Builds the Plan, runs the session from Today, saves a summary, writes a note and replies to the family." },
      { title: "The supervisor reviews", text: "Approves new goals and sessions or sends feedback, observes staff and publishes reports." },
    ],
    comparisonTitle: "Who sees what",
    comparison: {
      columns: ["", "Parent", "Therapist / Teacher", "Supervisor", "Administrator"],
      rows: [
        ["Targets and goals", "Read", "Read and write", "Read and write", "Read"],
        ["Session summaries", "Read", "Read and write", "Read and review", "Summary only"],
        ["Home tasks", "Read, tick off, add a note", "Read and write", "Read", "Completion status"],
        ["ABC events", "❌", "Read and write", "Read", "❌"],
        ["Behavior plan (BIP)", "Read once not a draft", "Read and write", "Read", "Status"],
        ["Messages", "Family messages", "Read and write", "Read", "❌"],
        ["Case notes and observations", "❌", "Staff only", "Staff only", "❌"],
        ["Accounts, centres, billing", "❌", "❌", "❌", "✅"],
      ],
      note: "A parent can only ever see their own child.",
    },
    why: [
      { title: "One shared picture", text: "No more scattered updates: the whole team works from the same record of the child." },
      { title: "Right tools for each role", text: "Eight portals, each showing only what that person needs." },
      { title: "Parents stay in the loop", text: "Progress, targets, home practice and messages, without raw clinical logs." },
      { title: "Built for therapy teams", text: "ABA, speech, OT, remedial and classroom tools in one platform." },
      { title: "English and Arabic", text: "Arabic switches the whole layout to right-to-left." },
      { title: "Privacy by role", text: "Clear rules on who can see what, and parents decide who sees their child." },
    ],
    faq: [
      { q: "Who is Nexia Bridge for?", a: "Therapy and education teams working with autistic children: parents, behavior, speech and occupational therapists, remedial and classroom teachers, supervisors and centre administrators." },
      { q: "Can a parent see clinical notes?", a: "No. Parents see progress, targets, sessions, home practice and family messages. Case notes, observations and ABC events stay with staff." },
      { q: "Can the administrator read messages or notes?", a: "No. Administrators manage accounts, centres, cases and invoices, and see counts and summaries only." },
      { q: "Which languages does it support?", a: "English and Arabic. Arabic switches the whole layout to right-to-left." },
      { q: "Does it take payments?", a: "No. Billing records invoices (draft, issued, paid, void) but does not take payments." },
      { q: "Is there a mode for the child?", a: "Yes. Child Mode is a full-screen, large-button schedule for the child, with a button back to the adult portal." },
    ],
    disclaimer:
      "Nexia Bridge supports therapy and education teams. It does not diagnose or treat any condition.",
    taglines: ["One child. One team. One shared picture.", "Every professional, one shared picture of the child."],
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

export type ScienceChapter = {
  id: string;
  number: number;
  title: string;
  code: string;
  emoji: string;
  description: string;
  concepts: string[];
};

export const bloomScienceChapters: ScienceChapter[] = [
  {
    id: "sc3-plants",
    number: 1,
    title: "Plants & Living Things",
    code: "sc3-plants",
    emoji: "🌱",
    description: "Life processes, flowering vs non-flowering plants, seed germination, root absorption, and leaf functions.",
    concepts: ["Life processes", "Germination", "Root absorption", "Leaf functions"],
  },
  {
    id: "sc3-animals",
    number: 2,
    title: "Animals",
    code: "sc3-animals",
    emoji: "🐾",
    description: "Animal anatomy, skeletons, vertebrates vs invertebrates, life cycles, senses, and prehistoric fossils.",
    concepts: ["Vertebrates", "Invertebrates", "Life cycles", "Fossils"],
  },
  {
    id: "sc3-adaptations",
    number: 3,
    title: "Animal Groups & Adaptations",
    code: "sc3-adaptations",
    emoji: "🦋",
    description: "Metamorphosis, seasonal camouflage, hibernation, migration, blubber insulation, and group survival.",
    concepts: ["Camouflage", "Hibernation & migration", "Group survival", "Trait variation"],
  },
  {
    id: "sc3-soil",
    number: 4,
    title: "Soil and Rocks",
    code: "sc3-soil",
    emoji: "🪨",
    description: "Rock weathering, mineral properties, soil layers (topsoil, subsoil, bedrock), humus, and Saudi farming.",
    concepts: ["Soil layers", "Humus & earthworms", "Weathering", "Al-Qassim & Asir farming"],
  },
  {
    id: "sc3-air",
    number: 5,
    title: "Air and Weather",
    code: "sc3-air",
    emoji: "💨",
    description: "Properties of air, atmospheric layers, respiration, weather tools (anemometer, wind vane), and water cycle.",
    concepts: ["Properties of air", "Lungs & gills", "Weather tools", "Clean wind energy"],
  },
  {
    id: "sc3-heat",
    number: 6,
    title: "Heat & Thermal Energy",
    code: "sc3-heat",
    emoji: "🔥",
    description: "Heat sources, conduction, convection, radiation, thermal conductors vs insulators, and heat safety.",
    concepts: ["Conduction & convection", "Radiation", "Thermal insulators", "Heat safety"],
  },
  {
    id: "sc3-habitats",
    number: 7,
    title: "Habitats and Environments",
    code: "sc3-habitats",
    emoji: "🏜️",
    description: "Worldwide ecosystems, desert adaptations (camels, Arabian oryx, ghaf trees), and habitat protection.",
    concepts: ["Desert ecosystems", "Arabian oryx & ghaf", "Habitat conservation", "Ecosystem changes"],
  },
  {
    id: "sc3-foodchains",
    number: 8,
    title: "Food Chains & Food Webs",
    code: "sc3-foodchains",
    emoji: "🌾",
    description: "Producers, primary consumers, herbivores, carnivores, predators, prey dynamics, and decomposers.",
    concepts: ["Producers & consumers", "Predator & prey", "Food chains", "Decomposers"],
  },
  {
    id: "sc3-water",
    number: 9,
    title: "Water & States of Matter",
    code: "sc3-water",
    emoji: "💧",
    description: "Solid ice, liquid water, gaseous water vapor, boiling, freezing, condensation, and water conservation.",
    concepts: ["States of water", "Evaporation & condensation", "Freezing & boiling", "Water conservation"],
  },
  {
    id: "sc3-matter",
    number: 10,
    title: "Properties of Matter",
    code: "sc3-matter",
    emoji: "⚖️",
    description: "Mass, volume, density, sink or float buoyancy experiments, and solid, liquid, and gas molecular behavior.",
    concepts: ["Mass & volume", "Density & buoyancy", "States of matter", "Physical properties"],
  },
  {
    id: "sc3-materials",
    number: 11,
    title: "Materials & Their Uses",
    code: "sc3-materials",
    emoji: "🧱",
    description: "Natural vs synthetic materials, flexibility, transparency, thermal and electrical insulation, and recycling.",
    concepts: ["Natural vs synthetic", "Flexibility & strength", "Electrical insulation", "Recycling"],
  },
  {
    id: "sc3-body",
    number: 12,
    title: "The Human Body & Health",
    code: "sc3-body",
    emoji: "🫀",
    description: "Vital internal organs (heart, brain, stomach, lungs), skeleton framework, paired muscles, and dental nutrition.",
    concepts: ["Vital organs", "Skeleton & muscles", "Respiration & heart", "Dental & nutrition"],
  },
  {
    id: "sc3-light",
    number: 13,
    title: "Light and Shadows",
    code: "sc3-light",
    emoji: "💡",
    description: "Light sources, transparent, translucent vs opaque materials, shadow angles, and mirror reflection optics.",
    concepts: ["Light sources", "Transparent & opaque", "Shadow formation", "Mirrors & reflection"],
  },
];

export const bloomVideoFeatures = [
  {
    title: "Cinematic Visual Prompts",
    detail: "Every lesson embeds calibrated, high-definition prompts designed specifically for text-to-video generators (Sora, Runway Gen-3, Luma, Kling, Pika).",
  },
  {
    title: "Camera & Motion Directives",
    detail: "Explicit camera directives describe aerial drone sweeps, slow tracking pans, macro views, and time-lapses with natural physical movement.",
  },
  {
    title: "Abstract Scientific Cutaways",
    detail: "Visualizes the unseen: underground roots drinking water, lung oxygen absorption, soil sedimentation layers, and water droplet cycles.",
  },
  {
    title: "Child-Safe Guardrails",
    detail: "Zero scenes of violence or injury. Predator-prey interactions observe and stalk naturally with calm pacing and zero sensory overload.",
  },
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
