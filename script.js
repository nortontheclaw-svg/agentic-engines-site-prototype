const workflowPacks = [
  {
    id: "chief",
    name: "Chief of Staff",
    label: "Chief of Staff Workflow Pack",
    price: 15,
    copy: "Decision-ready briefs and follow-through without rebuilding the week from scattered notes.",
    fit: "Founders and executives trying to keep decisions, actions, and follow-through in view.",
    change: "Less re-explaining, fewer dropped threads, and a steadier weekly operating rhythm.",
    rhythm: "Briefs, actions, and weekly review loops.",
    items: [
      "Turns scattered notes into decision-ready briefs",
      "Keeps actions and follow-through visible between meetings",
      "Creates a repeatable weekly cadence instead of a prompt pile",
    ],
    heroSummary: "Decision-ready briefs and follow-through without rebuilding the week.",
    heroRhythm: "Weekly brief rhythm",
    heroFit: "For crowded operator calendars",
    heroBundle: "Start with the full system around the workflow you picked.",
  },
  {
    id: "thought",
    name: "Thought Leadership",
    label: "Thought Leadership Workflow Pack",
    price: 15,
    copy: "Rough ideas become structured posts, themes, and a publishing rhythm without flattening your point of view.",
    fit: "Founders, consultants, and experts building a more consistent publishing practice.",
    change: "Fewer blank-page starts, fewer good ideas lost in notes, and a clearer editorial loop.",
    rhythm: "Capture, shape, draft, and review.",
    items: [
      "Turns loose notes into sharper publishable drafts",
      "Builds a repeatable capture-to-post workflow",
      "Keeps voice and editorial control closer to intact",
    ],
    heroSummary: "Themes, drafts, and publishing momentum from ideas you already have.",
    heroRhythm: "Idea-to-post rhythm",
    heroFit: "For experts building a publishing habit",
    heroBundle: "Install the full system around the publishing workflow you chose.",
  },
  {
    id: "operator",
    name: "Solo Operator",
    label: "Solo Operator Workflow Pack",
    price: 15,
    copy: "Planning, prioritising, and shipping stay in one lighter operating rhythm instead of splitting across tabs and lists.",
    fit: "Freelancers, indie builders, and lean operators doing too many jobs at once.",
    change: "Less context switching, fewer rebuilt task lists, and less manual stitching across the week.",
    rhythm: "Plan, prioritise, and ship with visible handoffs.",
    items: [
      "Keeps weekly priorities visible and moving",
      "Turns fragmented tasks into a clearer operating queue",
      "Creates leverage without pretending to be fully autonomous",
    ],
    heroSummary: "Planning and shipping with less context drag and fewer rebuilt lists.",
    heroRhythm: "Plan-and-ship rhythm",
    heroFit: "For lean teams and solo builders",
    heroBundle: "Pick the operating workflow first, then install the rest around it.",
  },
];

const products = {
  install: {
    key: "install",
    title: "Install Kit / Baseplate",
    price: 9,
    description: "One command gets the environment, folders, and working structure right.",
  },
  tuning: {
    key: "tuning",
    title: "Tuning Kit",
    price: 10,
    description: "Shape voice, rules, and boundaries so the workflow feels more like your defaults.",
  },
  bundle: {
    key: "bundle",
    title: "Starter Bundle",
    price: 25,
    description: "Install Kit, selected Workflow Pack, and Tuning Kit in one cleaner starting point.",
  },
};

const workflowTitle = document.querySelector("#workflow-title");
const workflowPrice = document.querySelector("#workflow-price");
const workflowLabel = document.querySelector("#workflow-label");
const workflowCopy = document.querySelector("#workflow-copy");
const workflowFit = document.querySelector("#workflow-fit");
const workflowChange = document.querySelector("#workflow-change");
const workflowRhythm = document.querySelector("#workflow-rhythm");
const workflowList = document.querySelector("#workflow-list");
const workflowDots = document.querySelector("#workflow-dots");
const prevButton = document.querySelector("#workflow-prev");
const nextButton = document.querySelector("#workflow-next");
const heroWorkflowName = document.querySelector("#hero-workflow-name");
const heroWorkflowSummary = document.querySelector("#hero-workflow-summary");
const heroWorkflowRhythm = document.querySelector("#hero-workflow-rhythm");
const heroWorkflowFit = document.querySelector("#hero-workflow-fit");
const heroBundleCopy = document.querySelector("#hero-bundle-copy");

const addButtons = document.querySelectorAll("[data-add]");
const basketPanel = document.querySelector("#basket-panel");
const basketToggle = document.querySelector("#basket-toggle");
const basketCount = document.querySelector("#basket-count");
const basketSubtitle = document.querySelector("#basket-subtitle");
const basketNote = document.querySelector("#basket-note");
const basketItems = document.querySelector("#basket-items");
const basketTotal = document.querySelector("#basket-total");

let currentWorkflowIndex = 0;
let basket = [];

function getCurrentWorkflow() {
  return workflowPacks[currentWorkflowIndex];
}

function renderWorkflow() {
  const pack = getCurrentWorkflow();

  workflowTitle.textContent = pack.name;
  workflowPrice.textContent = `$${pack.price}`;
  workflowLabel.textContent = pack.label;
  workflowCopy.textContent = pack.copy;
  workflowFit.textContent = pack.fit;
  workflowChange.textContent = pack.change;
  workflowRhythm.textContent = pack.rhythm;
  workflowList.innerHTML = pack.items.map((item) => `<li>${item}</li>`).join("");

  heroWorkflowName.textContent = pack.name;
  heroWorkflowSummary.textContent = pack.heroSummary;
  heroWorkflowRhythm.textContent = pack.heroRhythm;
  heroWorkflowFit.textContent = pack.heroFit;
  heroBundleCopy.textContent = pack.heroBundle;

  renderDots();
  refreshBundleTitles();
}

function renderDots() {
  workflowDots.innerHTML = workflowPacks
    .map((pack, index) => {
      const isActive = index === currentWorkflowIndex;
      return `
        <button
          class="dot-button ${isActive ? "is-active" : ""}"
          type="button"
          aria-label="Show ${pack.name}"
          aria-pressed="${String(isActive)}"
          data-workflow-index="${index}"
        ></button>
      `;
    })
    .join("");

  workflowDots.querySelectorAll("[data-workflow-index]").forEach((button) => {
    button.addEventListener("click", () => {
      currentWorkflowIndex = Number(button.dataset.workflowIndex);
      renderWorkflow();
    });
  });
}

function createWorkflowItem() {
  const pack = getCurrentWorkflow();
  return {
    key: "workflow",
    title: `${pack.name} Workflow Pack`,
    price: pack.price,
    description: pack.copy,
    meta: pack.rhythm,
  };
}

function createBundleItem() {
  const pack = getCurrentWorkflow();
  return {
    key: "bundle",
    title: `Starter Bundle`,
    price: products.bundle.price,
    description: `Includes Install Kit, ${pack.name} Workflow Pack, and Tuning Kit.`,
    meta: `Selected workflow: ${pack.name}`,
  };
}

function refreshBundleTitles() {
  basket = basket.map((item) => {
    if (item.key !== "bundle") return item;
    return createBundleItem();
  });
  renderBasket();
}

function addToBasket(type) {
  let note = "Basket updated.";

  if (type === "bundle") {
    basket = [createBundleItem()];
    note = "Starter Bundle added. It replaces separate kit items to keep the basket clear.";
  } else {
    if (basket.some((item) => item.key === "bundle")) {
      basket = basket.filter((item) => item.key !== "bundle");
      note = "Starter Bundle removed. You are now building the basket item by item.";
    }

    const item =
      type === "workflow"
        ? createWorkflowItem()
        : {
            key: products[type].key,
            title: products[type].title,
            price: products[type].price,
            description: products[type].description,
          };

    basket = basket.filter((entry) => entry.key !== item.key);
    basket.push(item);
  }

  renderBasket(note);
  basketPanel.classList.remove("is-collapsed");
  basketToggle.setAttribute("aria-expanded", "true");
}

function removeFromBasket(key) {
  basket = basket.filter((item) => item.key !== key);
  renderBasket("Item removed from basket.");
}

function formatMoney(amount) {
  return `$${amount}`;
}

function renderBasket(statusMessage = "Add a product from any section to build the starter system.") {
  const count = basket.length;
  const total = basket.reduce((sum, item) => sum + item.price, 0);

  basketCount.textContent = String(count);
  basketSubtitle.textContent = count === 0 ? "Nothing added yet." : `${count} item${count > 1 ? "s" : ""} selected.`;
  basketNote.textContent = statusMessage;
  basketTotal.textContent = formatMoney(total);

  if (count === 0) {
    basketItems.innerHTML = `
      <article class="basket-item">
        <p class="basket-item-title">Basket is empty</p>
        <p>Add Install Kit, a Workflow Pack, Tuning Kit, or the Starter Bundle.</p>
      </article>
    `;
    return;
  }

  basketItems.innerHTML = basket
    .map((item) => {
      const meta = item.meta ? `<p class="basket-item-meta">${item.meta}</p>` : "";
      return `
        <article class="basket-item">
          <div class="basket-item-head">
            <p class="basket-item-title">${item.title}</p>
            <p class="basket-item-price">${formatMoney(item.price)}</p>
          </div>
          <p>${item.description}</p>
          ${meta}
          <div class="basket-item-foot">
            <span>Qty 1</span>
            <button class="remove-button" type="button" data-remove="${item.key}">Remove</button>
          </div>
        </article>
      `;
    })
    .join("");

  basketItems.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromBasket(button.dataset.remove));
  });
}

prevButton.addEventListener("click", () => {
  currentWorkflowIndex = (currentWorkflowIndex - 1 + workflowPacks.length) % workflowPacks.length;
  renderWorkflow();
});

nextButton.addEventListener("click", () => {
  currentWorkflowIndex = (currentWorkflowIndex + 1) % workflowPacks.length;
  renderWorkflow();
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => addToBasket(button.dataset.add));
});

basketToggle.addEventListener("click", () => {
  const willCollapse = !basketPanel.classList.contains("is-collapsed");
  basketPanel.classList.toggle("is-collapsed", willCollapse);
  basketToggle.setAttribute("aria-expanded", String(!willCollapse));
});

renderWorkflow();
renderBasket();
