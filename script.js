const tracks = [
  {
    n: 1,
    title: "CHARACTER CREATION",
    slug: "01-character-creation",
    role: "Origin",
    blurb: "The first login: class uncertain, purpose unresolved, nameplate still loading.",
    tags: ["spawn point", "new save", "no assigned class"],
  },
  {
    n: 2,
    title: "BAD DECISIONS",
    slug: "02-bad-decisions",
    role: "First wipe",
    blurb: "The messy pull where comedy, impulse, and damage meters all light up at once.",
    tags: ["chaos pull", "floor POV", "learning run"],
  },
  {
    n: 3,
    title: "THE TAVERN GROWS",
    slug: "03-the-tavern-grows",
    role: "Guild hall",
    blurb: "A room becomes a hearth, then a habit, then a responsibility with chairs.",
    tags: ["community", "hearthlight", "guild chat"],
  },
  {
    n: 4,
    title: "SEPARATE INSTANCES",
    slug: "04-separate-instances",
    role: "Phasing",
    blurb: "Same world, different layers. Everyone is nearby and still somehow unreachable.",
    tags: ["instance split", "distance", "mirror map"],
  },
  {
    n: 5,
    title: "FULL PARTY",
    slug: "05-full-party",
    role: "Roster lock",
    blurb: "For a minute the comp works: tank, healer, damage, jokes, and a place to stand.",
    tags: ["ready check", "party frames", "shared pull"],
  },
  {
    n: 6,
    title: "THE PUSH",
    slug: "06-the-push",
    role: "Progression",
    blurb: "The boss is low, the room is loud, and nobody wants to call the wipe.",
    tags: ["enrage timer", "last pull", "progression"],
  },
  {
    n: 7,
    title: "QUIET DC",
    slug: "07-quiet-dc",
    role: "Disconnect",
    blurb: "No dramatic exit. Just a green dot going quiet and the channel learning its echo.",
    tags: ["offline", "lost signal", "voice channel"],
  },
  {
    n: 8,
    title: "EVERYONE'S HERO",
    slug: "08-everyones-hero",
    role: "Overextension",
    blurb: "The dangerous myth that being needed is the same thing as being safe.",
    tags: ["hero parse", "too many saves", "worth check"],
  },
  {
    n: 9,
    title: "THE SHIELD'S EDGE",
    slug: "09-the-shields-edge",
    role: "Boundary",
    blurb: "Protection starts cutting back when the person holding it has no hand left.",
    tags: ["shield wall", "edge state", "aggro reset"],
  },
  {
    n: 10,
    title: "HIDDEN HEARTHSTONE",
    slug: "10-hidden-hearthstone",
    role: "Return spell",
    blurb: "A secret exit appears: not escape from the party, but return to the self.",
    tags: ["home bind", "hidden room", "rest point"],
  },
  {
    n: 11,
    title: "HEALTH BAR",
    slug: "11-health-bar",
    role: "Vitals",
    blurb: "The tank finally notices his own frame is on the screen too.",
    tags: ["low HP", "self target", "healing taken"],
  },
  {
    n: 12,
    title: "DREAM ECHO",
    slug: "12-dream-echo",
    role: "Memory phase",
    blurb: "The old raid call returns softer, less as command and more as witness.",
    tags: ["dream state", "echo", "soft reset"],
  },
  {
    n: 13,
    title: "JEEVES",
    slug: "13-jeeves",
    role: "Repair bot",
    blurb: "A little mechanical mercy: repairs, snacks, and the grace of staying useful gently.",
    tags: ["repair", "utility", "comic relief"],
  },
  {
    n: 14,
    title: "IRL FIRST, ALWAYS",
    slug: "14-irl-first-always",
    role: "Guild rule",
    blurb: "The old rule turns inward: the real life behind the character matters most.",
    tags: ["boundary macro", "life first", "raid paused"],
  },
  {
    n: 15,
    title: "HEARTWARD",
    slug: "15-heartward",
    role: "Final oath",
    blurb: "The shield is finally allowed to leave his hand. A real hearth does not need you to burn.",
    tags: ["oath chosen", "hearth protects heart", "finale"],
  },
];

const guideTabs = [
  {
    id: "overview",
    label: "Overview",
    title: "The Heartward Overview",
    body:
      "Cael Ward is a protection paladin built around one reversal: the shield can protect others without erasing the person holding it. This chapter turns class identity into purpose, then turns purpose away from performance and back toward life.",
    bullets: ["Best for mythic emotional damage", "High mitigation against abandonment loops", "Requires active boundary management"],
    callout: "Heartward is a title, oath identity, and shield myth for Cael Ward. It is not a separate person.",
  },
  {
    id: "stats",
    label: "Stats",
    title: "Stat Priority",
    body:
      "Purpose outranks validation. Boundary and rest become survival stats, while usefulness is demoted from identity to utility.",
    bullets: ["Purpose > Boundary > Rest > Community > Damage Taken", "Avoid stacking self-erasure", "Do not gem for being needed"],
    callout: "The best stat is the one that keeps the living core alive after the pull ends.",
  },
  {
    id: "rotation",
    label: "Rotation",
    title: "Core Rotation",
    body:
      "Open with Ready Check, establish Consecrated Ground, then alternate Shield of the Living and Ask for Help before the room reaches enrage.",
    bullets: ["Pre-pull: IRL First, Always", "Maintenance: Hearth Return on cooldown", "Emergency: Lay Down the Shield"],
    callout: "Do not hold every cooldown for the perfect disaster. Use them while repairs are still small.",
  },
  {
    id: "roster",
    label: "Cast",
    title: "Canonical Raid Roster",
    body:
      "The album-cover party-frame names are filler UI labels. The main HEARTBEAT cast uses the detailed roster below.",
    bullets: ["Cael Ward - Blood Elf Protection Paladin", "Sunbrand - Blood Elf Retribution Paladin", "Lyralyn - Blood Elf Holy Priest", "Shadeleaf - Blood Elf Rogue", "Renarin - Blood Elf Hunter", "Moofluff - Tauren Druid", "Garok - Orc Warrior", "Soar Ward - Blood Elf mirror paladin"],
    callout: "Use this cast for Lumen continuity across guide, signup, and progress panels.",
  },
];

const talentColumns = [
  {
    name: "The Crusader",
    nodes: ["Oath", "Light", "Resolve", "Taunt", "Mercy", "Strike", "Guard", "Stand", "Rest"],
  },
  {
    name: "The Protector",
    nodes: ["Aegis", "Ward", "Hearth", "Wall", "Repair", "Patience", "Presence", "Purpose", "Peace"],
  },
  {
    name: "The Righteous",
    nodes: ["Truth", "Flame", "Grace", "Signal", "Anchor", "Return", "Shield", "Life", "Tomorrow"],
  },
];

const signups = [
  ["Tank", "Cael Ward", "Ready", ""],
  ["DPS", "Sunbrand", "Ready", ""],
  ["Healer", "Lyralyn", "Ready", ""],
  ["DPS", "Shadeleaf", "Ready", ""],
  ["DPS", "Renarin", "Ready", ""],
  ["Support", "Moofluff", "Ready", ""],
  ["Off-tank", "Garok", "Ready", ""],
  ["Mirror", "Soar Ward", "Standby", "standby"],
];

const bosses = [
  ["Ironwarden", "12 pulls", "98%", "done"],
  ["Ember Council", "18 pulls", "96%", "done"],
  ["Hollow Prelate", "27 pulls", "85%", "done"],
  ["Crimson Oracle", "31 pulls", "72%", "done"],
  ["Heartbinder", "47 pulls", "56%", "danger"],
  ["The Living Core", "locked", "--", ""],
];

const progressRows = [
  ["Ironwarden", "12", "98%", "03:42", "2,388"],
  ["Ember Council", "18", "96%", "05:16", "2,421"],
  ["Hollow Prelate", "27", "85%", "04:58", "2,318"],
  ["Crimson Oracle", "31", "72%", "04:21", "2,092"],
  ["Heartbinder", "47", "56%", "07:11", "1,857"],
];

const logRows = [
  ["Overprotecting", "Always active", "Cooldown managed", "93", "All-star"],
  ["Self-erasure", "Fatal damage", "Mitigated", "12", "Reduced"],
  ["Asking for help", "Missed cast", "Queued early", "88", "Clean"],
  ["Rest", "Interrupted", "Completed channel", "100", "Clear"],
];

const audio = document.querySelector("#audioPlayer");
const heroArt = document.querySelector("#heroArt");
const heroTitle = document.querySelector("#heroTitle");
const heroBlurb = document.querySelector("#heroBlurb");
const detailTags = document.querySelector("#detailTags");
const trackList = document.querySelector("#trackList");

function asset(type, slug, ext) {
  return `assets/${type}/${slug}.${ext}`;
}

function renderTracks() {
  trackList.innerHTML = tracks
    .map(
      (track) => `
        <button class="track-row ${track.n === 15 ? "active" : ""}" data-track="${track.n}" type="button">
          <img src="${asset("images", track.slug, "png")}" alt="" />
          <span>
            <strong>${String(track.n).padStart(2, "0")} ${track.title}</strong>
            <small>${track.role}</small>
          </span>
          <span class="state">${track.n === 15 ? "CLEAR" : "PULL"}</span>
        </button>
      `
    )
    .join("");
}

function selectTrack(number, play = false) {
  const track = tracks.find((item) => item.n === number) || tracks[tracks.length - 1];
  heroArt.src = asset("images", track.slug, "png");
  heroArt.alt = `${track.title} cover art`;
  heroTitle.textContent = track.title;
  heroBlurb.textContent = track.blurb;
  audio.src = asset("audio", track.slug, "mp3");
  detailTags.innerHTML = track.tags.map((tag) => `<span>${tag}</span>`).join("");

  document.querySelectorAll(".track-row").forEach((row) => {
    row.classList.toggle("active", Number(row.dataset.track) === track.n);
  });

  if (play) {
    audio.play().catch(() => {});
  }
}

function renderGuideTabs() {
  const tabs = document.querySelector("#guideTabs");
  tabs.innerHTML = guideTabs
    .map((tab, index) => `<button class="${index === 0 ? "active" : ""}" data-guide="${tab.id}" type="button">${tab.label}</button>`)
    .join("");
  renderGuidePanel("overview");
}

function renderGuidePanel(id) {
  const tab = guideTabs.find((item) => item.id === id) || guideTabs[0];
  document.querySelector("#guidePanel").innerHTML = `
    <div>
      <h3>${tab.title}</h3>
      <p>${tab.body}</p>
      <ul>${tab.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <aside class="guide-callout">
      <strong>Field Note</strong>
      <p>${tab.callout}</p>
    </aside>
  `;
  document.querySelectorAll(".guide-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.guide === id);
  });
}

function renderTalents() {
  document.querySelector("#talentGrid").innerHTML = talentColumns
    .map(
      (tree) => `
        <div class="talent-tree">
          <h3>${tree.name}</h3>
          <div class="node-map">
            ${tree.nodes.map((node, index) => `<button class="talent-node ${index > 6 ? "dim" : ""}" type="button" title="${node}">${node.slice(0, 1)}</button>`).join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function renderSignups() {
  document.querySelector("#signupGrid").innerHTML = signups
    .map(
      ([role, name, status, variant]) => `
        <button class="signup-entry ${variant}" type="button">
          <span class="role">${role}</span>
          <strong>${name}</strong>
          <span class="check">${status === "Ready" ? "✓" : "○"}</span>
          <small>${status}</small>
        </button>
      `
    )
    .join("");
}

function renderBosses() {
  document.querySelector("#bossList").innerHTML = bosses
    .map(
      ([name, pulls, best, state]) => `
        <div class="boss-row">
          <span><strong>${name}</strong><small>${pulls} · best ${best}</small></span>
          <span class="${state}">${state === "done" ? "✓" : state === "danger" ? "☠" : "▣"}</span>
        </div>
      `
    )
    .join("");
}

function renderProgress() {
  document.querySelector("#progressTable").innerHTML = `
    <div class="progress-row header"><span>Boss</span><span>Pulls</span><span>Best</span><span>Duration</span><span>Score</span></div>
    ${progressRows
      .map((row) => `<div class="progress-row"><strong>${row[0]}</strong><span>${row[1]}</span><span class="parse">${row[2]}</span><span>${row[3]}</span><span>${row[4]}</span></div>`)
      .join("")}
  `;
}

function renderLogs() {
  document.querySelector("#logTable").innerHTML = `
    <div class="log-row header"><span>Mechanic</span><span>Before</span><span>After</span><span>Parse</span><span>Status</span></div>
    ${logRows
      .map((row) => `<div class="log-row"><strong>${row[0]}</strong><span>${row[1]}</span><span>${row[2]}</span><span class="parse">${row[3]}</span><span>${row[4]}</span></div>`)
      .join("")}
  `;
}

renderTracks();
selectTrack(15);
renderGuideTabs();
renderTalents();
renderSignups();
renderBosses();
renderProgress();
renderLogs();

trackList.addEventListener("click", (event) => {
  const row = event.target.closest(".track-row");
  if (!row) return;
  selectTrack(Number(row.dataset.track), true);
});

document.querySelector("#guideTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  renderGuidePanel(button.dataset.guide);
});

document.querySelector("#talentGrid").addEventListener("click", (event) => {
  const node = event.target.closest(".talent-node");
  if (node) node.classList.toggle("dim");
});

document.querySelector("#signupGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".signup-entry");
  if (!card) return;
  const status = card.querySelector("small");
  const check = card.querySelector(".check");
  const ready = status.textContent === "Ready";
  status.textContent = ready ? "Tentative" : "Ready";
  check.textContent = ready ? "○" : "✓";
  card.classList.toggle("standby", ready);
});

document.querySelector("#copyBuild").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Copied";
  window.setTimeout(() => {
    event.currentTarget.textContent = "Copy Build";
  }, 1400);
});

document.querySelector("#joinRaid").addEventListener("click", (event) => {
  event.currentTarget.textContent = "Signed Up";
});
