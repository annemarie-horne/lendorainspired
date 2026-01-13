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


/* ---------------------------------------------------
   Flatpickr
--------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  // Date only
  flatpickr(".js-date", {
    dateFormat: "d M Y",
    allowInput: true
  });

  // Date + Time
  flatpickr(".js-datetime", {
    enableTime: true,
    dateFormat: "d M Y H:i",
    time_24hr: true,
    allowInput: true
  });

  // Time only
  flatpickr(".js-time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    allowInput: true
  });

});
