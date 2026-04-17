const workflowContent = {
  chief: {
    price: "$15 pack or bundle it for $25",
    title: "Chief of Staff Workflow Pack",
    copy:
      "A structured weekly operating system for priorities, meetings, synthesis, and follow-through that reduces chasing and keeps decisions moving.",
    fit: "Founders, executives, and busy operators who need a steadier weekly rhythm.",
    stop: "Re-explaining context, rebuilding agendas, and losing decisions between meetings.",
    items: [
      "Turns scattered notes into decision-ready briefs",
      "Tracks actions and follow-through across meetings",
      "Feels like a cadence, not a folder full of prompts",
    ],
    cta: "Get Chief of Staff in the $25 bundle",
  },
  thought: {
    price: "$15 pack or bundle it for $25",
    title: "Thought Leadership Workflow Pack",
    copy:
      "A publishing workflow for turning rough ideas into sharper articles, posts, and content sequences without flattening your point of view.",
    fit: "Founders, consultants, and experts who need consistent publishing with a clearer voice.",
    stop: "Starting every draft from zero and losing good ideas in scattered notes.",
    items: [
      "Shapes rough notes into usable drafts faster",
      "Builds a repeatable capture, draft, and review loop",
      "Keeps voice and editorial control more intact",
    ],
    cta: "Get Thought Leadership in the $25 bundle",
  },
  operator: {
    price: "$15 pack or bundle it for $25",
    title: "Solo Operator Workflow Pack",
    copy:
      "A practical system for the person doing too many jobs at once: planning, research, admin, and execution support in a single operating loop.",
    fit: "Freelancers, indie builders, and lean operators who want AI to help run the week, not just answer questions.",
    stop: "Context switching, rebuilding task lists, and manually stitching small jobs together.",
    items: [
      "Keeps weekly priorities visible and moving",
      "Turns fragmented tasks into a clearer operating queue",
      "Creates more leverage without pretending to be fully autonomous",
    ],
    cta: "Get Solo Operator in the $25 bundle",
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

  toggleButtons.forEach((button) => {
    const isActive = button.dataset.workflow === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => renderWorkflow(button.dataset.workflow));
});
