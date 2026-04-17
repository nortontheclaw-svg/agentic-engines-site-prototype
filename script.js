const workflowContent = {
  chief: {
    title: "Chief of Staff Agentic Engine",
    copy:
      "A structured operating system for weekly priorities, meeting prep, synthesis, and follow-through that adapts to how the principal actually works.",
    items: [
      "Turns scattered inputs into decision-ready briefs",
      "Maintains momentum across meetings and actions",
      "Feels like an operating cadence, not a prompt folder",
    ],
    cta: "Choose Chief of Staff",
  },
  thought: {
    title: "Thought Leadership Agentic Engine",
    copy:
      "A publishing workflow for founders and operators who need sharper idea capture, drafting, refinement, and content sequencing without losing their voice.",
    items: [
      "Shapes rough notes into publishable point-of-view",
      "Builds repeatable drafting and review loops",
      "Balances speed, consistency, and editorial control",
    ],
    cta: "Choose Thought Leadership",
  },
};

const toggleButtons = document.querySelectorAll(".workflow-toggle");
const workflowTitle = document.querySelector("#workflow-title");
const workflowCopy = document.querySelector("#workflow-copy");
const workflowList = document.querySelector("#workflow-list");
const workflowCta = document.querySelector("#workflow-cta");

function renderWorkflow(key) {
  const selected = workflowContent[key];
  if (!selected) return;

  workflowTitle.textContent = selected.title;
  workflowCopy.textContent = selected.copy;
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
