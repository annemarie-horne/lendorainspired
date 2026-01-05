document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".js-indeterminate-toggle");

  toggles.forEach(toggle => {
    const body = toggle.closest(".question-body");
    if (!body) return;

    // initial state: orange dash, collapsed
    toggle.indeterminate = true;
    toggle.checked = false;
    body.classList.remove("is-expanded");

    // first click: indeterminate → checked
    toggle.addEventListener("click", (e) => {
      if (toggle.indeterminate) {
        e.preventDefault();          // stop native toggle
        toggle.indeterminate = false;
        toggle.checked = true;
        body.classList.add("is-expanded");
      }
    });

    // subsequent clicks: normal toggle
    toggle.addEventListener("change", () => {
      toggle.indeterminate = false;
      body.classList.toggle("is-expanded", toggle.checked);
    });
  });
});