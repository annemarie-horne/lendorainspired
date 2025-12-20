document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mortgageToggle");
  if (!toggle) return;

  const body = toggle.closest(".question-body");
  if (!body) return;

  // initial state: orange minus
  toggle.indeterminate = true;
  toggle.checked = false;
  body.classList.remove("is-expanded");

  // first click: indeterminate -> checked (green) + expand
  toggle.addEventListener("click", (e) => {
    if (toggle.indeterminate) {
      toggle.indeterminate = false;
      toggle.checked = true;
      body.classList.add("is-expanded");
      e.preventDefault(); // only on the first click
    }
  });

  // after that: normal toggle, keep UI in sync
  toggle.addEventListener("change", () => {
    // indeterminate should never come back after first interaction
    toggle.indeterminate = false;
    body.classList.toggle("is-expanded", toggle.checked);
  });
});
