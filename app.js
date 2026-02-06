const sections = {
  vehicle: {
    title: "Vehicle",
    subtitle: "Customize how your car feels and responds.",
    cards: [
      {
        title: "Drive Modes",
        description: "Tune performance and energy usage.",
        settings: [
          { name: "Sport Mode", value: "Enabled" },
          { name: "Regen Braking", value: "Strong" },
          { name: "Eco Assist", value: "Adaptive" },
        ],
      },
      {
        title: "Lighting",
        description: "Exterior and ambient lighting controls.",
        settings: [
          { name: "Adaptive Headlights", toggle: true },
          { name: "Welcome Lights", toggle: true },
          { name: "Cabin Accent", value: "Ocean Blue" },
        ],
      },
      {
        title: "Charging",
        description: "Plan your charge schedule.",
        settings: [
          { name: "Target Charge", value: "80%" },
          { name: "Departure Ready", toggle: true },
          { name: "Home Location", value: "Saved" },
        ],
      },
    ],
  },
  driving: {
    title: "Driving & Assist",
    subtitle: "Configure driver assistance and autonomy.",
    cards: [
      {
        title: "Assistance",
        description: "Safety systems and alerts.",
        settings: [
          { name: "Lane Keep Assist", toggle: true },
          { name: "Traffic Jam Pilot", value: "Ready" },
          { name: "Collision Warning", toggle: true },
        ],
      },
      {
        title: "Steering",
        description: "Steering feel and response.",
        settings: [
          { name: "Steering Weight", value: "Normal" },
          { name: "Active Return", toggle: true },
          { name: "Off-road Assist", value: "Disabled" },
        ],
      },
    ],
  },
  climate: {
    title: "Climate",
    subtitle: "Comfort controls for every seat.",
    cards: [
      {
        title: "Cabin",
        description: "Temperature and airflow.",
        settings: [
          { name: "Driver Temp", value: "72°F" },
          { name: "Passenger Temp", value: "70°F" },
          { name: "Auto Fan", toggle: true },
        ],
      },
      {
        title: "Air Quality",
        description: "Filters and ionizer.",
        settings: [
          { name: "PM2.5 Filter", value: "Good" },
          { name: "Ionizer", toggle: true },
          { name: "Cabin Pre-condition", toggle: true },
        ],
      },
    ],
  },
  safety: {
    title: "Safety",
    subtitle: "Protect passengers with proactive tools.",
    cards: [
      {
        title: "Security",
        description: "Locking and intrusion settings.",
        settings: [
          { name: "Auto Lock", toggle: true },
          { name: "PIN to Drive", toggle: true },
          { name: "Sentry Mode", value: "Home only" },
        ],
      },
      {
        title: "Emergency",
        description: "SOS and roadside services.",
        settings: [
          { name: "Crash Detection", toggle: true },
          { name: "Emergency Contacts", value: "3 saved" },
          { name: "Roadside Assist", value: "Active" },
        ],
      },
    ],
  },
  apps: {
    title: "Apps & Accounts",
    subtitle: "Manage apps, profiles, and data.",
    cards: [
      {
        title: "Connected Apps",
        description: "Streaming and navigation.",
        settings: [
          { name: "Maps", value: "Google Maps" },
          { name: "Media", value: "YouTube Music" },
          { name: "App Updates", toggle: true },
        ],
      },
      {
        title: "Accounts",
        description: "Driver profiles and sync.",
        settings: [
          { name: "Primary Account", value: "jordan@example.com" },
          { name: "Sync Settings", toggle: true },
          { name: "Guest Mode", value: "Disabled" },
        ],
      },
    ],
  },
};

const cardTemplate = document.querySelector("#card-template");
const cardsContainer = document.querySelector("#cards");
const sectionTitle = document.querySelector("#section-title");
const subtitle = document.querySelector(".content__subtitle");

const renderSection = (sectionKey) => {
  const section = sections[sectionKey];
  if (!section) return;

  sectionTitle.textContent = section.title;
  subtitle.textContent = section.subtitle;
  cardsContainer.innerHTML = "";

  section.cards.forEach((card) => {
    const clone = cardTemplate.content.cloneNode(true);
    clone.querySelector("h2").textContent = card.title;
    clone.querySelector("p").textContent = card.description;

    const body = clone.querySelector(".card__body");
    card.settings.forEach((setting) => {
      const row = document.createElement("div");
      row.className = "setting";
      row.innerHTML = `<div>${setting.name}</div>`;

      if (setting.toggle) {
        const toggle = document.createElement("div");
        toggle.className = "toggle toggle--on";
        row.appendChild(toggle);
      } else {
        const status = document.createElement("div");
        status.className = "status";
        status.textContent = setting.value;
        row.appendChild(status);
      }

      body.appendChild(row);
    });

    cardsContainer.appendChild(clone);
  });
};

const navButtons = document.querySelectorAll(".nav__item");
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((item) => item.classList.remove("nav__item--active"));
    button.classList.add("nav__item--active");
    renderSection(button.dataset.section);
  });
});

renderSection("vehicle");
