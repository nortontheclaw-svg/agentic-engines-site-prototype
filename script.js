const workflowContent = {
  chief: {
    price: "$15 pack or bundle it for $25",
    title: "Chief of Staff Workflow Pack",
    copy:
      "Run your week with less chasing and better follow-through. Turns notes into briefs, actions, and decision-ready summaries.",
    fit: "Founders, executives, and busy operators who need a steadier weekly rhythm.",
    stop: "Less re-explaining, less agenda rebuilding, fewer dropped decisions.",
    items: [
      "Turns scattered notes into decision-ready briefs",
      "Keeps actions and follow-through visible between meetings",
      "Creates a repeatable weekly cadence instead of a prompt pile",
    ],
    cta: "Get Chief of Staff in the $25 bundle",
    heroName: "Chief of Staff",
    heroOutcome: "Decision-ready briefs, follow-through, and a steadier week.",
    heroBundle: "Pick a workflow and install the full system in one go.",
  },
  thought: {
    price: "$15 pack or bundle it for $25",
    title: "Thought Leadership Workflow Pack",
    copy:
      "Turn rough ideas into structured posts, themes, and publishing momentum without flattening your point of view.",
    fit: "Founders, consultants, and experts who want a clearer publishing rhythm.",
    stop: "Less staring at blank drafts and fewer good ideas lost in scattered notes.",
    items: [
      "Shapes rough notes into usable drafts faster",
      "Builds a repeatable capture, draft, and review loop",
      "Keeps voice and editorial control more intact",
    ],
    cta: "Get Thought Leadership in the $25 bundle",
    heroName: "Thought Leadership",
    heroOutcome: "Themes, drafts, and publishing momentum from rough notes.",
    heroBundle: "Choose the publishing workflow and install the stack around it.",
  },
  operator: {
    price: "$15 pack or bundle it for $25",
    title: "Solo Operator Workflow Pack",
    copy:
      "Build a lighter operating rhythm for planning, prioritising, and shipping without losing context across the week.",
    fit: "Freelancers, indie builders, and lean operators doing too many jobs at once.",
    stop: "Less context switching, fewer rebuilt task lists, and less manual stitching.",
    items: [
      "Keeps weekly priorities visible and moving",
      "Turns fragmented tasks into a clearer operating queue",
      "Creates leverage without pretending to be fully autonomous",
    ],
    cta: "Get Solo Operator in the $25 bundle",
    heroName: "Solo Operator",
    heroOutcome: "Planning, prioritising, and shipping with less context drag.",
    heroBundle: "Start with the workflow that helps run the week, not just answer questions.",
  },
};

const toggleButtons = document.querySelectorAll(".workflow-toggle");
const workflowPrice = document.querySelector("#workflow-price");
const workflowTitle = document.querySelector("#workflow-title");
const workflowCopy = document.querySelector("#workflow-copy");
const workflowFit = document.querySelector("#workflow-fit");
const workflowStop = document.querySelector("#workflow-stop");
const workflowList = document.querySelector("#workflow-list");
const workflowCta = document.querySelector("#workflow-cta");
const heroWorkflowName = document.querySelector("#hero-workflow-name");
const heroWorkflowOutcome = document.querySelector("#hero-workflow-outcome");
const heroWorkflowCtaCopy = document.querySelector("#hero-workflow-cta-copy");

function renderWorkflow(key) {
  const selected = workflowContent[key];
  if (!selected) return;

  workflowPrice.textContent = selected.price;
  workflowTitle.textContent = selected.title;
  workflowCopy.textContent = selected.copy;
  workflowFit.textContent = selected.fit;
  workflowStop.textContent = selected.stop;
  workflowList.innerHTML = selected.items.map((item) => `<li>${item}</li>`).join("");
  workflowCta.textContent = selected.cta;
  heroWorkflowName.textContent = selected.heroName;
  heroWorkflowOutcome.textContent = selected.heroOutcome;
  heroWorkflowCtaCopy.textContent = selected.heroBundle;

  toggleButtons.forEach((button) => {
    const isActive = button.dataset.workflow === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => renderWorkflow(button.dataset.workflow));
});
