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
   Uploaded File Functionality
--------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('filePreviewModal');
  const modalTitle = document.getElementById('filePreviewModalTitle');
  const modalBody = document.getElementById('filePreviewModalBody');
  const modalDescription = document.getElementById('filePreviewModalDescription');


  function openModal(title, description, content) {
    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.textContent = title;
    modalDescription.textContent = description || '';
    modalBody.innerHTML = content;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal || !modalBody) return;

    modal.setAttribute('hidden', '');
    modalBody.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal-preview]').forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const title = button.getAttribute('data-file-title') || 'Preview';
      const description = button.getAttribute('data-file-description') || '';
      const content = button.getAttribute('data-file-preview-content') || 'Preview area';

      openModal(title, description, content);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(function (element) {
    element.addEventListener('click', function () {
      closeModal();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  document.querySelectorAll('[data-attachment-viewer]').forEach(function (viewer) {
    const trigger = viewer.querySelector('[data-attachment-trigger]');
    const panel = viewer.querySelector('[data-attachment-panel]');
    const modeButtons = viewer.querySelectorAll('[data-view-mode]');
    const modePanels = viewer.querySelectorAll('[data-mode-panel]');
    const tabs = viewer.querySelectorAll('.attachment-tab');
    const tabPanels = viewer.querySelectorAll('.attachment-tab-panel');

    if (trigger && panel) {
      trigger.addEventListener('click', function () {
        const isHidden = panel.hasAttribute('hidden');

        if (isHidden) {
          panel.removeAttribute('hidden');
          trigger.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        } else {
          panel.setAttribute('hidden', '');
          trigger.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    modeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const mode = button.getAttribute('data-view-mode');

        modeButtons.forEach(function (btn) {
          btn.classList.remove('is-active');
        });

        modePanels.forEach(function (panelItem) {
          panelItem.classList.remove('is-active');
        });

        button.classList.add('is-active');

        const activePanel = viewer.querySelector('[data-mode-panel="' + mode + '"]');
        if (activePanel) {
          activePanel.classList.add('is-active');
        }
      });
    });

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const tabId = tab.getAttribute('data-tab');

        tabs.forEach(function (tabItem) {
          tabItem.classList.remove('is-active');
        });

        tabPanels.forEach(function (panelItem) {
          panelItem.classList.remove('is-active');
        });

        tab.classList.add('is-active');

        const activeTabPanel = viewer.querySelector('[data-tab-panel="' + tabId + '"]');
        if (activeTabPanel) {
          activeTabPanel.classList.add('is-active');
        }
      });
    });
  });
});







document.querySelectorAll('[data-comment-attachment-viewer]').forEach(function(viewer) {
  const trigger = viewer.querySelector('[data-comment-attachment-trigger]');
  const panel = viewer.querySelector('[data-comment-attachment-panel]');
  const modeButtons = viewer.querySelectorAll('[data-comment-view-mode]');
  const modePanels = viewer.querySelectorAll('[data-comment-mode-panel]');
  const tabs = viewer.querySelectorAll('[data-comment-tab]');
  const tabPanels = viewer.querySelectorAll('[data-comment-tab-panel]');

  if (trigger && panel) {
    trigger.addEventListener('click', function() {
      const isHidden = panel.hasAttribute('hidden');

      if (isHidden) {
        panel.removeAttribute('hidden');
        trigger.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        panel.setAttribute('hidden', '');
        trigger.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  modeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const mode = button.getAttribute('data-comment-view-mode');

      modeButtons.forEach(function(btn) {
        btn.classList.remove('is-active');
      });

      modePanels.forEach(function(panelItem) {
        panelItem.classList.remove('is-active');
      });

      button.classList.add('is-active');

      const activePanel = viewer.querySelector('[data-comment-mode-panel="' + mode + '"]');
      if (activePanel) {
        activePanel.classList.add('is-active');
      }
    });
  });

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const tabId = tab.getAttribute('data-comment-tab');

      tabs.forEach(function(tabItem) {
        tabItem.classList.remove('is-active');
      });

      tabPanels.forEach(function(panelItem) {
        panelItem.classList.remove('is-active');
      });

      tab.classList.add('is-active');

      const activeTabPanel = viewer.querySelector('[data-comment-tab-panel="' + tabId + '"]');
      if (activeTabPanel) {
        activeTabPanel.classList.add('is-active');
      }
    });
  });
});


/* ---------------------------------------------------
   Uploaded File Functionality
--------------------------------------------------- */






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





/* ---------------------------------------------------
   Upload: append files + show list + remove + badge
--------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".js-upload");

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes) || bytes <= 0) return "";
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    let n = bytes;
    while (n >= 1024 && i < units.length - 1) {
      n /= 1024;
      i++;
    }
    return `${n.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
  };

  const fileKey = (f) => `${f.name}__${f.size}__${f.lastModified}`;

  inputs.forEach((input) => {
    const id = input.dataset.uploadId || input.id;
    if (!id) return;

    const list = document.querySelector(`[data-upload-list="${id}"]`);
    if (!list) return;

    const badge = document.querySelector(`[data-upload-badge="${id}"]`);

    let filesState = [];

    const updateBadge = () => {
      if (!badge) return;
      const count = filesState.length;
      badge.textContent = String(count);
      badge.classList.toggle("is-hidden", count === 0);
    };

    const syncInputFiles = () => {
      const dt = new DataTransfer();
      filesState.forEach((f) => dt.items.add(f));
      input.files = dt.files;
    };

    const render = () => {
      list.innerHTML = "";

      if (filesState.length === 0) {
        updateBadge();
        return;
      }

      filesState.forEach((file, index) => {
        const li = document.createElement("li");
        li.className = "upload-item";

        const name = document.createElement("span");
        name.className = "upload-item__name";
        name.textContent = file.name;

        const meta = document.createElement("span");
        meta.className = "upload-item__meta";
        meta.textContent = formatBytes(file.size);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "upload-remove";
        btn.setAttribute("aria-label", `Remove ${file.name}`);
        btn.textContent = "×";

        btn.addEventListener("click", () => {
          filesState.splice(index, 1);
          syncInputFiles();
          render();
        });

        li.appendChild(name);
        if (meta.textContent) li.appendChild(meta);
        li.appendChild(btn);

        list.appendChild(li);
      });

      updateBadge();
    };

    input.addEventListener("change", () => {
      const newlyPicked = input.files ? Array.from(input.files) : [];
      if (newlyPicked.length === 0) return;

      const existingKeys = new Set(filesState.map(fileKey));

      newlyPicked.forEach((f) => {
        const k = fileKey(f);
        if (!existingKeys.has(k)) {
          filesState.push(f);
          existingKeys.add(k);
        }
      });

      syncInputFiles();
      render();

      // allow selecting the same file again later (still fires change)
      input.value = "";
    });

    render();
  });
});
