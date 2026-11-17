"use strict";

const CATEGORIES = [
  { id: "random", label: "Random Category", icon: "fa-shuffle" },
  { id: "gk", label: "General Knowledge", icon: "fa-brain" },
  { id: "animals", label: "Animals", icon: "fa-paw" },
  { id: "math", label: "Mathematics", icon: "fa-calculator" },
  { id: "computers", label: "Computers", icon: "fa-laptop-code" },
  { id: "geo", label: "Geography", icon: "fa-earth-americas" },
  { id: "history", label: "History", icon: "fa-landmark" },
  { id: "science", label: "Science & Nature", icon: "fa-flask" },
  { id: "film", label: "Film", icon: "fa-film" },
  { id: "music", label: "Music", icon: "fa-music" },
  { id: "tv", label: "Television", icon: "fa-tv" },
  { id: "games", label: "Video Games", icon: "fa-gamepad" },
];

const DIFFICULTIES = [
  { id: "easy", label: "Easy Mode", icon: "fa-face-smile" },
  { id: "medium", label: "Medium Mode", icon: "fa-face-meh" },
  { id: "hard", label: "Hard Mode", icon: "fa-skull" },
];

const Q = (cat, diff, q, a, w) => ({ cat, diff, q, correct: a, wrong: w });
const TF = (cat, diff, q, v) => ({ cat, diff, q, correct: v ? "True" : "False", wrong: [v ? "False" : "True"] });

const QUESTION_BANK = [
  Q("gk", "easy", "How many days are in a leap year?", "366", ["365", "364", "367"]),
  TF("gk", "easy", "The Great Wall of China is visible from the Moon with the naked eye.", false),
  Q("gk", "medium", "Which is the largest ocean on Earth?", "Pacific", ["Atlantic", "Indian", "Arctic"]),
  Q("gk", "medium", "What is the currency of Japan?", "Yen", ["Won", "Yuan", "Dollar"]),
  Q("gk", "hard", "In which year did the Titanic sink?", "1912", ["1905", "1915", "1921"]),

  Q("animals", "easy", "Which animal is known as the King of the Jungle?", "Lion", ["Tiger", "Elephant", "Bear"]),
  TF("animals", "easy", "Dolphins are mammals.", true),
  Q("animals", "medium", "How many hearts does an octopus have?", "3", ["1", "2", "4"]),
  Q("animals", "medium", "Which is the fastest land animal?", "Cheetah", ["Lion", "Horse", "Leopard"]),
  Q("animals", "hard", "What is a group of crows called?", "A murder", ["A flock", "A pack", "A colony"]),

  Q("math", "easy", "What is 12 × 8?", "96", ["86", "98", "108"]),
  TF("math", "easy", "Zero is an even number.", true),
  Q("math", "medium", "What is the square root of 144?", "12", ["10", "14", "16"]),
  Q("math", "medium", "What is 15% of 200?", "30", ["25", "35", "20"]),
  Q("math", "hard", "What is 5! (5 factorial)?", "120", ["100", "24", "720"]),

  Q("computers", "easy", "What does CPU stand for?", "Central Processing Unit", ["Central Program Utility", "Computer Personal Unit", "Core Processing Unit"]),
  TF("computers", "easy", "RAM is a type of volatile memory.", true),
  Q("computers", "medium", "What does CSS stand for?", "Cascading Style Sheets", ["Creative Style System", "Computer Style Sheets", "Colorful Style Syntax"]),
  Q("computers", "medium", "Which company created JavaScript?", "Netscape", ["Microsoft", "Sun Microsystems", "Google"]),
  Q("computers", "hard", "Which data structure follows the LIFO principle?", "Stack", ["Queue", "Array", "Tree"]),

  Q("geo", "easy", "What is the capital of France?", "Paris", ["Berlin", "Madrid", "Rome"]),
  TF("geo", "easy", "Africa has more countries than any other continent.", true),
  Q("geo", "medium", "What is the longest river in Africa?", "The Nile", ["The Congo", "The Niger", "The Zambezi"]),
  Q("geo", "medium", "What is the capital of Australia?", "Canberra", ["Sydney", "Melbourne", "Perth"]),
  Q("geo", "hard", "Which is the smallest country in the world by area?", "Vatican City", ["Monaco", "San Marino", "Malta"]),

  Q("history", "easy", "Who was the first President of the United States?", "George Washington", ["Abraham Lincoln", "Thomas Jefferson", "John Adams"]),
  TF("history", "easy", "The ancient Egyptians built the pyramids.", true),
  Q("history", "medium", "In which year did World War II end?", "1945", ["1939", "1943", "1950"]),
  Q("history", "medium", "Which empire did Julius Caesar belong to?", "Roman", ["Greek", "Ottoman", "Persian"]),
  Q("history", "hard", "In which year did the Berlin Wall fall?", "1989", ["1985", "1991", "1987"]),

  Q("science", "easy", "Which planet is known as the Red Planet?", "Mars", ["Venus", "Jupiter", "Mercury"]),
  TF("science", "easy", "Water boils at 100°C at sea level.", true),
  Q("science", "medium", "What is the chemical symbol for gold?", "Au", ["Ag", "Gd", "Go"]),
  Q("science", "medium", "Which gas do plants absorb from the air?", "Carbon dioxide", ["Oxygen", "Nitrogen", "Hydrogen"]),
  Q("science", "hard", "What is the atomic number of carbon?", "6", ["8", "12", "14"]),

  Q("film", "easy", "Which film features a clownfish named Nemo?", "Finding Nemo", ["Shark Tale", "Moana", "Frozen"]),
  TF("film", "easy", "Titanic was directed by James Cameron.", true),
  Q("film", "medium", "Who directed Inception?", "Christopher Nolan", ["Steven Spielberg", "Ridley Scott", "Quentin Tarantino"]),
  Q("film", "medium", "Which film won Best Picture at the 2020 Oscars?", "Parasite", ["1917", "Joker", "Ford v Ferrari"]),
  Q("film", "hard", "Which was Disney's first full-length animated feature?", "Snow White and the Seven Dwarfs", ["Pinocchio", "Bambi", "Cinderella"]),

  Q("music", "easy", "How many strings does a standard guitar have?", "6", ["4", "5", "7"]),
  TF("music", "easy", "Mozart was born in Austria.", true),
  Q("music", "medium", "Which band released 'Bohemian Rhapsody'?", "Queen", ["The Beatles", "Led Zeppelin", "Pink Floyd"]),
  Q("music", "medium", "Which instrument has 88 keys?", "Piano", ["Organ", "Harp", "Accordion"]),
  Q("music", "hard", "Who composed 'The Four Seasons'?", "Vivaldi", ["Bach", "Handel", "Mozart"]),

  Q("tv", "easy", "Which animated family lives in Springfield?", "The Simpsons", ["The Griffins", "The Flintstones", "The Smiths"]),
  TF("tv", "easy", "The sitcom Friends ran for 10 seasons.", true),
  Q("tv", "medium", "Which HBO series is set in Westeros?", "Game of Thrones", ["The Witcher", "Vikings", "Rome"]),
  Q("tv", "medium", "Which character in Stranger Things has telekinetic powers?", "Eleven", ["Max", "Will", "Lucas"]),
  Q("tv", "hard", "What is Walter White's alias in Breaking Bad?", "Heisenberg", ["Scarface", "Gustavo", "Saul"]),

  Q("games", "easy", "Which character is Nintendo's famous plumber mascot?", "Mario", ["Luigi", "Sonic", "Link"]),
  TF("games", "easy", "Minecraft was created by Mojang.", true),
  Q("games", "medium", "In which game series do you play as Link?", "The Legend of Zelda", ["Metroid", "Kirby", "Fire Emblem"]),
  Q("games", "medium", "Which game is famous for the phrase 'Victory Royale'?", "Fortnite", ["PUBG", "Apex Legends", "Warzone"]),
  Q("games", "hard", "In which year was the original PlayStation released in Japan?", "1994", ["1992", "1996", "1998"]),
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const $ = (id) => document.getElementById(id);

class Question {
  constructor({ q, correct, wrong, diff, cat }) {
    this.text = q;
    this.correct = correct;
    this.difficulty = diff;
    this.category = CATEGORIES.find((c) => c.id === cat).label;
    this.answers = wrong.length === 1 ? ["True", "False"] : shuffle([correct, ...wrong]);
  }
  isCorrect(answer) {
    return answer === this.correct;
  }
}

class QuizAPI {
  static async fetchQuestions({ category, difficulty, amount }) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); 

    const inCategory = (x) => category === "random" || x.cat === category;
    const exact = shuffle(QUESTION_BANK.filter((x) => inCategory(x) && x.diff === difficulty));
    const sameCategory = shuffle(QUESTION_BANK.filter((x) => inCategory(x) && x.diff !== difficulty));
    const rest = shuffle(QUESTION_BANK.filter((x) => !inCategory(x)));

    return [...exact, ...sameCategory, ...rest].slice(0, amount).map((x) => new Question(x));
  }
}

class SoundFX {
  constructor() {
    this.ctx = null;
  }
  tone(freq, start, duration, type = "sine") {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + start + duration);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start(this.ctx.currentTime + start);
    osc.stop(this.ctx.currentTime + start + duration);
  }
  play(kind) {
    this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
    if (kind === "correct") {
      this.tone(660, 0, 0.12);
      this.tone(880, 0.12, 0.2);
    } else if (kind === "wrong") {
      this.tone(220, 0, 0.25, "sawtooth");
      this.tone(150, 0.2, 0.35, "sawtooth");
    } else if (kind === "win") {
      [523, 659, 784, 1047].forEach((f, i) => this.tone(f, i * 0.13, 0.25));
    }
  }
}

class Timer {
  constructor(seconds, onTick, onEnd) {
    this.seconds = seconds;
    this.onTick = onTick;
    this.onEnd = onEnd;
    this.id = null;
  }
  start() {
    this.stop();
    this.left = this.seconds;
    this.onTick(this.left);
    this.id = setInterval(() => {
      this.left--;
      this.onTick(this.left);
      if (this.left <= 0) {
        this.stop();
        this.onEnd();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.id);
    this.id = null;
  }
}

class Dropdown {
  constructor(root, items, defaultId) {
    this.root = root;
    this.items = items;
    this.value = defaultId;
    this.render();
    root.addEventListener("click", (e) => this.onClick(e));
    document.addEventListener("click", (e) => {
      if (!root.contains(e.target)) root.classList.remove("open");
    });
  }
  get current() {
    return this.items.find((i) => i.id === this.value);
  }
  render() {
    const c = this.current;
    this.root.innerHTML = `
      <div class="dd-selected" tabindex="0" role="button">
        <i class="fa-solid ${c.icon}"></i><span>${c.label}</span>
        <i class="fa-solid fa-chevron-down dd-arrow"></i>
      </div>
      <ul class="dd-list">
        ${this.items
          .map(
            (i) => `<li data-id="${i.id}" class="${i.id === this.value ? "selected" : ""}">
              <i class="fa-solid ${i.icon}"></i><span>${i.label}</span></li>`
          )
          .join("")}
      </ul>`;
  }
  onClick(e) {
    const li = e.target.closest("li");
    if (li) {
      this.value = li.dataset.id;
      this.render();
      return;
    }
    if (e.target.closest(".dd-selected")) this.root.classList.toggle("open");
  }
}

class QuizGame {
  static TIME_PER_QUESTION = 15;
  static NEXT_DELAY = 1600;

  constructor() {
    this.sound = new SoundFX();
    this.categoryDD = new Dropdown($("categoryDropdown"), CATEGORIES, "science");
    this.difficultyDD = new Dropdown($("difficultyDropdown"), DIFFICULTIES, "medium");
    this.timer = new Timer(QuizGame.TIME_PER_QUESTION, (t) => this.updateTimer(t), () => this.onTimeout());
    this.questions = [];
    this.index = 0;
    this.score = 0;
    this.locked = true;
    this.bindEvents();
  }

  bindEvents() {
    $("startBtn").addEventListener("click", () => this.start());
    $("againBtn").addEventListener("click", () => this.show("setup"));
    $("answers").addEventListener("click", (e) => {
      const btn = e.target.closest(".answer");
      if (btn) this.answer(btn.dataset.value);
    });
    $("playerName").addEventListener("keydown", (e) => e.key === "Enter" && this.start());
    document.addEventListener("keydown", (e) => {
      if (!$("game").classList.contains("active") || this.locked) return;
      const n = Number(e.key);
      const choice = this.questions[this.index].answers[n - 1];
      if (n >= 1 && choice !== undefined) this.answer(choice);
    });
  }

  show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
  }

  async start() {
    const name = $("playerName").value.trim();
    const amount = parseInt($("rounds").value, 10);
    const error = $("error");

    if (!name) return (error.textContent = "Enter your player name.");
    if (!amount || amount < 1 || amount > 50) return (error.textContent = "Rounds must be between 1 and 50.");
    error.textContent = "";

    this.player = name;
    this.show("loading");
    try {
      this.questions = await QuizAPI.fetchQuestions({
        category: this.categoryDD.value,
        difficulty: this.difficultyDD.value,
        amount,
      });
    } catch (err) {
      this.show("setup");
      error.textContent = "Could not load questions. Try again.";
      return;
    }
    this.index = 0;
    this.score = 0;
    $("gPlayer").textContent = this.player;
    $("gTotal").textContent = this.questions.length;
    this.show("game");
    this.showQuestion();
  }

  showQuestion() {
    const q = this.questions[this.index];
    this.locked = false;
    $("gRound").textContent = this.index + 1;
    $("gScore").textContent = this.score;
    $("qMeta").textContent = `${q.category} • ${q.difficulty}`;
    $("qText").textContent = q.text;
    $("answers").innerHTML = q.answers
      .map(
        (a, i) => `<button class="answer" data-value="${a}">
          <span class="num">${i + 1}</span><span>${a}</span></button>`
      )
      .join("");
    this.timer.start();
  }

  updateTimer(t) {
    const bar = $("timerBar");
    $("timeLeft").textContent = t;
    bar.style.width = (t / QuizGame.TIME_PER_QUESTION) * 100 + "%";
    bar.classList.toggle("danger", t <= 5);
  }

  answer(value) {
    if (this.locked) return;
    this.locked = true;
    this.timer.stop();
    const q = this.questions[this.index];
    const ok = q.isCorrect(value);

    if (ok) this.score++;
    this.sound.play(ok ? "correct" : "wrong");
    $("gScore").textContent = this.score;

    document.querySelectorAll(".answer").forEach((btn) => {
      btn.disabled = true;
      if (q.isCorrect(btn.dataset.value)) btn.classList.add("correct");
      else if (btn.dataset.value === value) btn.classList.add("wrong");
    });
    setTimeout(() => this.next(), QuizGame.NEXT_DELAY);
  }

  onTimeout() {
    this.answer(null); 
  }

  next() {
    this.index++;
    if (this.index < this.questions.length) this.showQuestion();
    else this.finish();
  }

  finish() {
    const total = this.questions.length;
    const pct = (this.score / total) * 100;
    $("rScore").textContent = this.score;
    $("rTotal").textContent = total;
    $("rTitle").textContent = `Game over, ${this.player}!`;
    $("rMsg").textContent =
      pct === 100 ? "Perfect score. Flawless!" : pct >= 60 ? "Great job. Keep it up!" : "Good try. Play again to improve.";
    this.sound.play("win");
    this.show("result");
  }
}

new QuizGame();