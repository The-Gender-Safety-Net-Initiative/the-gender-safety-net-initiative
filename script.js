
const steps = {
  start: {
    question: "",
    choices: [
      {
        icon: "ti-alert-triangle",
        text: "Sexual harassment & unwelcome conduct",
        next: "support_harassment",
      },
      {
        icon: "ti-mood-sad",
        text: "Gender-based discrimination or bullying",
        next: "support_discrimination",
      },
      {
        icon: "ti-users",
        text: "Hostile campus environment",
        next: "support_hostile",
      },
      {
        icon: "ti-help-circle",
        text: "Not sure what to call it",
        next: "unsure",
      },
    ],
  },
  unsure: {
    question: "Need help narrowing? Explore by:",
    choices: [
      {
        icon: "ti-hand-stop",
        text: "Physical safety & non-consensual contact",
        next: "support_harassment",
      },
      {
        icon: "ti-eye-off",
        text: "Different treatment based on gender or identity",
        next: "support_discrimination",
      },
      {
        icon: "ti-message-circle-off",
        text: "Unwelcome comments, jokes, or behaviour",
        next: "support_hostile",
      },
    ],
  },
  support_harassment: {
    question: "I am looking for:",
    subtext:
      "You are protected under the POSH Act (2013) and UGC regulations. Your institution must have an Internal Complaints Committee (ICC).",
    choices: [
      {
        icon: "ti-file-text",
        text: "Formal complaint process",
        next: "formal_icc",
      },
      {
        icon: "ti-ear",
        text: "Understanding my options",
        next: "options_first",
      },
      {
        icon: "ti-users",
        text: "Peer & informal support first",
        next: "peer_support",
      },
      {
        icon: "ti-heart",
        text: "Emotional support first",
        next: "emotional_support",
      },
      {
        icon: "ti-phone",
        text: "External helplines & organisations",
        next: "external_help",
      },
    ],
  },
  support_discrimination: {
    question: "I am looking for:",
    choices: [
      {
        icon: "ti-file-text",
        text: "Complaint process",
        next: "studentgrievancecommittee",
      },
      {
        icon: "ti-users",
        text: "Peer & community support",
        next: "peer_support",
      },
      {
        icon: "ti-ear",
        text: "Supportive faculty guidance",
        next: "faculty_ally",
      },
      {
        icon: "ti-heart",
        text: "Emotional support first",
        next: "emotional_support",
      },
      {
        icon: "ti-shield-half-filled",
        text: "Ragging or bullying based on gender/orientation",
        next: "sogi_ragging",
      },
    ],
  },
  support_hostile: {
    question: "I am looking for:",
    subtext:
      "There is no wrong answer — your experience matters regardless of how others might categorise it.",
    choices: [
      {
        icon: "ti-file-text",
        text: "Complaint process",
        next: "studentgrievancecommittee",
      },
      {
        icon: "ti-heart",
        text: "Emotional support first",
        next: "emotional_support",
      },
      {
        icon: "ti-users",
        text: "Peer & community support",
        next: "peer_support",
      },
      {
        icon: "ti-ear",
        text: "Understanding my options",
        next: "options_first",
      },
      {
        icon: "ti-user-check",
        text: "Supportive faculty guidance",
        next: "faculty_ally",
      },
      {
        icon: "ti-notebook",
        text: "Documentation guidance",
        next: "document_only",
      },
      {
        icon: "ti-shield-half-filled",
        text: "Ragging or bullying based on gender/orientation",
        next: "sogi_ragging",
      },
    ],
  },
  options_first: {
    question: "Understanding my options — focus on:",
    choices: [
      {
        icon: "ti-scale",
        text: "How the ICC complaint process works",
        next: "formal_icc",
      },
      {
        icon: "ti-shield",
        text: "Protections during a complaint",
        next: "protections",
      },
      {
        icon: "ti-clock",
        text: "Typical timelines & what to expect",
        next: "timelines",
      },
    ],
  },

  formal_icc: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "Formal pathway",
    title: "Filing a complaint with the ICC",
    body:
      "Your institution is legally required to have an Internal Complaints Committee (ICC) under the POSH Act, 2013 and UGC Regulations, 2015. You can file a written complaint within 3 months of the incident. The ICC must complete inquiry within 90 days. Your identity must be kept confidential.",
    resources: [
      {
        icon: "ti-map-pin",
        title: "ICC office",
        detail:
          "Ask your college admin, student union, or check the institution website for ICC contact details.",
      },
      {
        icon: "ti-file-description",
        title: "What to include",
        detail:
          "Date, time, location, description of incident, names of witnesses. Keep a personal copy.",
      },
      {
        icon: "ti-shield-check",
        title: "Your protections",
        detail:
          "You cannot be penalised for filing. Request transfer of classes if needed during inquiry.",
      },
      {
        icon: "ti-phone",
        title: "iCall helpline",
        detail:
          '<a href="https://icallhelpline.org" target="_blank" rel="noopener">1800-599-0019</a> — free, confidential counselling by TISS. Can help you prepare before filing.',
      },
    ],
  },
  emotional_support: {
    outcome: true,
    type: "safe",
    badge: "badge-success",
    badgeText: "Support first",
    title: "Getting emotional and mental health support",
    body:
      "You don't have to decide anything right now. Getting support is a valid first step. Many students find it helpful to speak to a counsellor before deciding whether to report.",
    resources: [
      {
        icon: "ti-phone",
        title: "iCall (TISS)",
        detail:
          '<a href="https://icallhelpline.org" target="_blank" rel="noopener">1800-599-0019</a> — free counselling, Monday–Saturday 8am–10pm.',
      },
      {
        icon: "ti-heart",
        title: "Vandrevala Foundation",
        detail: "1860-2662-345 — 24/7 mental health helpline.",
      },
      {
        icon: "ti-building-community",
        title: "College counselling centre",
        detail: "Conversations are confidential and do not trigger automatic reporting.",
      },
      {
        icon: "ti-users",
        title: "iCall online chat",
        detail:
          '<a href="https://icallhelpline.org" target="_blank" rel="noopener">icallhelpline.org</a> — text-based support if calling feels difficult.',
      },
    ],
  },
  peer_support: {
    outcome: true,
    type: "safe",
    badge: "badge-success",
    badgeText: "Peer support",
    title: "Connecting with peer and community support",
    body:
      "Peer networks provide immediate understanding and reduce isolation. Many campuses have gender cells, queer collectives, or student safety groups.",
    resources: [
      {
        icon: "ti-users",
        title: "Campus gender cell / student union",
        detail:
          "Can provide peer support and guidance without triggering formal proceedings.",
      },
      {
        icon: "ti-building-community",
        title: "Sappho for Equality",
        detail:
          'LGBTQ+ support — <a href="https://sapphokolkata.in" target="_blank" rel="noopener">sapphokolkata.in</a>',
      },
      {
        icon: "ti-heart",
        title: "The Humsafar Trust",
        detail:
          'LGBTQ+ counselling, Delhi & Mumbai — <a href="https://humsafar.org" target="_blank" rel="noopener">humsafar.info</a>',
      },
      {
        icon: "ti-file-text",
        title: "Keep a record",
        detail:
          "Note dates and details even if not ready to report. Protects you if you decide to act later.",
      },
    ],
  },
  faculty_ally: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "Informal pathway",
    title: "Finding a supportive faculty member",
    body:
      "A trusted professor can offer guidance and support before — or instead of — a formal complaint.",
    resources: [
      {
        icon: "ti-user-check",
        title: "Who to approach",
        detail:
          "Faculty on the student welfare committee, gender cell, or known to be approachable.",
      },
      {
        icon: "ti-message-circle",
        title: "What to say",
        detail:
          "You don't need all details ready. Start by saying you experienced something uncomfortable and want advice.",
      },
      {
        icon: "ti-shield",
        title: "Confidentiality",
        detail:
          "Faculty are not obligated to report without your consent unless there is a safety risk.",
      },
      {
        icon: "ti-phone",
        title: "iCall backup",
        detail:
          '<a href="https://icallhelpline.org" target="_blank" rel="noopener">1800-599-0019</a> — counsellors can also give guidance.',
      },
    ],
  },
  external_help: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "External support",
    title: "External helplines and organisations",
    body: "Several organisations provide confidential support outside your institution.",
    resources: [
      {
        icon: "ti-phone",
        title: "iCall (TISS)",
        detail:
          '<a href="https://icallhelpline.org" target="_blank" rel="noopener">1800-599-0019</a> — free, Mon–Sat 8am–10pm.',
      },
      {
        icon: "ti-phone",
        title: "One Stop Centre (Sakhi)",
        detail: "181 — government helpline for women facing violence or harassment.",
      },
      {
        icon: "ti-building",
        title: "National Commission for Women",
        detail:
          '<a href="https://ncwapps.nic.in/onlinecomplaintsv2/frmPubRegistration.aspx" target="_blank" rel="noopener">complaints.ncw.nic.in</a> — online complaint portal.',
      },
      {
        icon: "ti-school",
        title: "NTF Student Support Resources",
        detail:
          '<a href="https://ntf.education.gov.in/student-support-resources/" target="_blank" rel="noopener">ntf.education.gov.in</a> — national student wellbeing, safety, and support resources.',
      },
    ],
  },
  protections: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "Know your rights",
    title: "Protections during a complaint",
    body: "The POSH Act and UGC regulations provide specific protections for complainants.",
    resources: [
      {
        icon: "ti-eye-off",
        title: "Confidentiality",
        detail: "Your identity must not be disclosed to the public or media by the ICC.",
      },
      {
        icon: "ti-ban",
        title: "No retaliation",
        detail: "Any retaliation — marks, grades, opportunities — is itself a violation.",
      },
      {
        icon: "ti-home-move",
        title: "Interim relief",
        detail: "Request transfer of classes, hostel, or work assignment during inquiry.",
      },
      {
        icon: "ti-scale",
        title: "Appeal rights",
        detail:
          "Unsatisfied with ICC outcome? You can appeal to the appellate authority in your institution's policy.",
      },
    ],
  },
  timelines: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "What to expect",
    title: "Typical timeline of an ICC complaint",
    body: "Here is what the process looks like under POSH Act guidelines:",
    resources: [
      {
        icon: "ti-clock",
        title: "Filing window",
        detail:
          "3 months from the incident. ICC can extend by another 3 months if you show cause.",
      },
      {
        icon: "ti-clipboard-list",
        title: "Acknowledgement",
        detail: "ICC should acknowledge and send copy to respondent within 7 days.",
      },
      {
        icon: "ti-calendar",
        title: "Conciliation (optional)",
        detail: "You can request conciliation before inquiry. No monetary settlement is allowed.",
      },
      {
        icon: "ti-search",
        title: "Inquiry",
        detail: "ICC must complete inquiry within 90 days and submit report within 10 days after.",
      },
    ],
  },
  document_only: {
    outcome: true,
    type: "warn",
    badge: "badge-warn",
    badgeText: "Document for now",
    title: "Documenting incidents for future reference",
    body:
      "Even if not ready to act, documentation is powerful. A personal record protects you if incidents escalate.",
    resources: [
      {
        icon: "ti-notebook",
        title: "What to record",
        detail:
          "Date, time, location, what was said or done, names of anyone present. Save any messages or screenshots.",
      },
      {
        icon: "ti-lock",
        title: "Keep it secure",
        detail: "Use a private notes app with a password. Don't share publicly.",
      },
      {
        icon: "ti-calendar-event",
        title: "Timestamp everything",
        detail: "Write entries as soon as possible — precise memory fades quickly.",
      },
      {
        icon: "ti-arrow-right",
        title: "You can always escalate later",
        detail:
          "Documentation supports a formal complaint up to 3 months after an incident, sometimes longer.",
      },
    ],
  },
  sogi_ragging: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "Anti-ragging protection",
    title: "When ragging targets your gender identity or sexual orientation",
    body:
      "UGC anti-ragging regulations recognise abuse, bullying, or exclusion targeting a student's gender identity or sexual orientation as ragging — a distinct violation from sexual harassment, handled by your institution's Anti-Ragging Committee rather than the ICC.",
    resources: [
      {
        icon: "ti-shield-half-filled",
        title: "Anti-Ragging Committee",
        detail:
          "Every institution must have one. Serious incidents can also be reported to the UGC's national Anti-Ragging Helpline.",
      },
      {
        icon: "ti-clock",
        title: "Faster timeline",
        detail:
          "Serious ragging cases may require the institution to file an FIR within 24 hours of being reported — a much faster track than ICC inquiries.",
      },
{
        icon: "ti-file-text",
        title: "Register a complaint with the UGC",
        detail:
          '<a href="https://antiragging.in/complaint_register_form.html" target="_blank" rel="noopener">antiragging.in</a>',
      },
      {
        icon: "ti-heart",
        title: "Naz Foundation",
        detail:
          'LGBTQ+ rights and support — <a href="https://nazindia.org" target="_blank" rel="noopener">nazindia.org</a>',
      },
      {
        icon: "ti-building-community",
        title: "The Humsafar Trust",
        detail:
          'LGBTQ+ counselling, Delhi & Mumbai — <a href="https://humsafar.org" target="_blank" rel="noopener">humsafar.info</a>',
      },
    ],
  },
  studentgrievancecommittee: {
    outcome: true,
    type: "info",
    badge: "badge-info",
    badgeText: "Student Grievance Committee",
    title: "Contact college-specific WDC / Student Grievance Cell / Gender Forum",
    body:
      "Gender-based discrimination that does not constitute sexual harassment under POSH is not under ICC jurisdiction. Most institutions have a Women's Development Cell (WDC) or Student Grievance Committee that handles such complaints. These bodies vary by institution — some are formal, others function informally. A Gender Forum, if active in your college, may also be a first point of contact. If you are facing ragging, please refer to that option.",
    resources: [
      {
        icon: "ti-map-pin",
        title: "WDC / Student Grievance Cell",
        detail:
          "Contact your admin office, student union, or check your institution website to locate the relevant body.",
      },
      {
        icon: "ti-file-description",
        title: "Gender Forum",
        detail:
          "If your college has one, this may be a more accessible and informal first step.",
      },
{
        icon: "ti-phone",
        title: "TeleManas",
        detail: "Call the National Mental Health Helpline at 14416",
      }, // Closes the TeleManas resource object
    ], // Closes the resources array
  }, // <--- THIS WAS MISSING: Closes the studentgrievancecommittee object
}; // Closes the steps constant

const MAX_PROGRESS = 5;
let trail = [];
let currentStepId = "start";
let outcomeId = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function progressDots(activeCount, isComplete) {
  let html = '<div class="progress-trail" aria-hidden="true">';
  for (let i = 1; i <= MAX_PROGRESS; i += 1) {
    let className = "progress-dot";
    if (i < activeCount) className += " is-done";
    else if (i === activeCount) className += " is-active";
    if (isComplete && i <= activeCount) className += " is-done";
    html += `<span class="${className}"></span>`;
  }
  html += "</div>";
  return html;
}

function renderFilterPills(step, selectedIndex, rowIndex, isLocked) {
  return step.choices
    .map((choice, choiceIndex) => {
      const isSelected = selectedIndex === choiceIndex;
      const classes = ["filter-pill"];
      if (isLocked) {
        classes.push(isSelected ? "is-selected" : "is-unselected");
      }
      return `
        <button
          type="button"
          class="${classes.join(" ")}"
          data-action="${isLocked ? "reselect" : "select"}"
          data-row="${rowIndex}"
          data-choice="${choiceIndex}"
          ${isLocked && !isSelected ? "" : ""}
        >
          ${isSelected ? '<i class="ti ti-check pill-check" aria-hidden="true"></i>' : `<i class="ti ${choice.icon}" aria-hidden="true"></i>`}
          ${escapeHtml(choice.text)}
        </button>`;
    })
    .join("");
}

function renderActiveRow(step) {
  return `
    <div class="filter-row" data-row="active">
      <div class="filter-row-head">
        <div>
          <div class="filter-label">${escapeHtml(step.question)}</div>
          ${step.subtext ? `<div class="filter-subtext">${escapeHtml(step.subtext)}</div>` : ""}
        </div>
      </div>
      <div class="filter-options">
        ${step.choices
          .map(
            (choice, choiceIndex) => `
          <button
            type="button"
            class="filter-pill"
            data-action="select"
            data-choice="${choiceIndex}"
          >
            <i class="ti ${choice.icon}" aria-hidden="true"></i>
            ${escapeHtml(choice.text)}
          </button>`
          )
          .join("")}
      </div>
    </div>`;
}

function renderOutcome(outcome) {
  const resources = outcome.resources
    .map(
      (resource) => `
      <div class="resource-item">
        <i class="ti ${resource.icon}" aria-hidden="true"></i>
        <div>
          <strong>${escapeHtml(resource.title)}</strong>
          <span>${resource.detail}</span>
        </div>
      </div>`
    )
    .join("");

  return `
    <div class="outcome-panel">
      <span class="outcome-badge">${escapeHtml(outcome.badgeText)}</span>
      <h3 class="outcome-title">${escapeHtml(outcome.title)}</h3>
      <div class="outcome-body">${escapeHtml(outcome.body).replace(/\n/g, "<br><br>")}</div>
      <div class="resource-list">${resources}</div>
    </div>`;
}

function renderGuide() {
  const app = document.getElementById("guide-app");
  if (!app) return;

  const progressCount = Math.min(
    MAX_PROGRESS,
    Math.max(1, trail.length + (outcomeId ? 1 : 0))
  );

  let rowsHtml = trail
    .map((entry, index) => {
      const step = steps[entry.stepId];
      return `
        <div class="filter-row is-settled" data-row="${index}">
          <div class="filter-row-head">
            <div>
              <div class="filter-label">${escapeHtml(step.question)}</div>
              ${step.subtext && index === 0 ? `<div class="filter-subtext">${escapeHtml(step.subtext)}</div>` : ""}
            </div>
            <button type="button" class="filter-change" data-action="change" data-row="${index}">
              Change
            </button>
          </div>
          <div class="filter-options">
            ${renderFilterPills(step, entry.choiceIndex, index, true)}
          </div>
        </div>`;
    })
    .join("");

  if (!outcomeId) {
    const activeStep = steps[currentStepId];
    if (activeStep && !activeStep.outcome) {
      rowsHtml += renderActiveRow(activeStep);
    }
  }

  const outcomeHtml = outcomeId ? renderOutcome(steps[outcomeId]) : "";

  app.innerHTML = `
    <div class="guide-card">
      <div class="guide-card-header">
        <div class="guide-card-title">Show guidelines and support pathways for:</div>
        <div class="guide-card-subtitle">Filter by topic to explore options. You can revise any selection at any time.</div>
      </div>
      ${progressDots(progressCount, Boolean(outcomeId))}
      <div class="filter-stack">
        ${rowsHtml}
        ${outcomeHtml}
      </div>
      <div class="guide-actions">
        <button type="button" class="guide-btn" data-action="restart">
          <i class="ti ti-refresh" aria-hidden="true"></i>
          Clear filters
        </button>
      </div>
    </div>`;
}

function selectChoice(choiceIndex) {
  const step = steps[currentStepId];
  if (!step || step.outcome) return;

  const choice = step.choices[choiceIndex];
  if (!choice) return;

  trail.push({
    stepId: currentStepId,
    choiceIndex,
    next: choice.next,
  });

  const nextStep = steps[choice.next];
  if (nextStep && nextStep.outcome) {
    outcomeId = choice.next;
    currentStepId = choice.next;
  } else {
    outcomeId = null;
    currentStepId = choice.next;
  }

  renderGuide();
}

function changeFilter(rowIndex) {
  trail = trail.slice(0, rowIndex);
  outcomeId = null;
  currentStepId = rowIndex === 0 ? "start" : trail[rowIndex - 1].next;
  renderGuide();
}

function reselectChoice(rowIndex, choiceIndex) {
  if (trail[rowIndex]?.choiceIndex === choiceIndex) return;

  trail = trail.slice(0, rowIndex);
  outcomeId = null;
  currentStepId = rowIndex === 0 ? "start" : trail[rowIndex - 1].next;

  const step = steps[currentStepId];
  const choice = step?.choices[choiceIndex];
  if (!choice) return;

  trail.push({
    stepId: currentStepId,
    choiceIndex,
    next: choice.next,
  });

  const nextStep = steps[choice.next];
  if (nextStep && nextStep.outcome) {
    outcomeId = choice.next;
    currentStepId = choice.next;
  } else {
    outcomeId = null;
    currentStepId = choice.next;
  }

  renderGuide();
}

function restartGuide() {
  trail = [];
  currentStepId = "start";
  outcomeId = null;
  renderGuide();
}

function handleGuideClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  if (action === "select") {
    selectChoice(Number(target.dataset.choice));
    return;
  }

  if (action === "change") {
    changeFilter(Number(target.dataset.row));
    return;
  }

  if (action === "reselect") {
    reselectChoice(Number(target.dataset.row), Number(target.dataset.choice));
    return;
  }

  if (action === "restart") {
    restartGuide();
  }
}

function quickExit() {
  window.location.replace("https://www.google.com");
}

function initHeaderVisibility() {
  const updateHeaderState = () => {
    document.body.classList.toggle("has-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

function initQuickExit() {
  const button = document.getElementById("quick-exit");
  if (button) {
    button.addEventListener("click", quickExit);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      quickExit();
    }
  });
}

function initGuide() {
  const app = document.getElementById("guide-app");
  if (!app) return;

  app.addEventListener("click", handleGuideClick);
  renderGuide();
}

function initPanelSwitching() {
  const triggers = document.querySelectorAll(".panel-trigger");
  const panels = document.querySelectorAll(".page-panel");
  if (!triggers.length || !panels.length) return;

  function switchPanel(panelId, scrollToContent) {
    triggers.forEach((trigger) => {
      const isActive = trigger.dataset.panel === panelId;
      trigger.classList.toggle("is-active", isActive);
      trigger.setAttribute("aria-selected", isActive ? "true" : "false");
      if (trigger.classList.contains("nav-link")) {
        if (isActive) trigger.setAttribute("aria-current", "page");
        else trigger.removeAttribute("aria-current");
      }
    });

    panels.forEach((panel) => {
      const isActive = panel.id === `panel-${panelId}`;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    const hash = panelId === "rights" ? "#your-rights" : "#guidance";
    if (window.location.hash !== hash) {
      history.replaceState(null, "", hash);
    }

    if (scrollToContent) {
      document.getElementById("panel-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      switchPanel(trigger.dataset.panel, true);
    });
  });

  const initialPanel =
    window.location.hash === "#your-rights" || window.location.hash === "#rights"
      ? "rights"
      : "guidance";
  switchPanel(initialPanel, false);

  window.addEventListener("hashchange", () => {
    const panelId =
      window.location.hash === "#your-rights" || window.location.hash === "#rights"
        ? "rights"
        : "guidance";
    switchPanel(panelId, false);
  });
}

function initCollapsibles() {
  document.querySelectorAll(".info-panel-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const body = document.getElementById(btn.getAttribute("aria-controls"));
      if (body) body.hidden = expanded;
    });
  });
}

initQuickExit();
initHeaderVisibility();
initGuide();
initPanelSwitching();
initCollapsibles();
