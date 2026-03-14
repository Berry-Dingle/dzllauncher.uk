// Small helpers only (no frameworks)
(function () {
  const copyBtns = document.querySelectorAll("[data-copy]");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const txt = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(txt);
        const old = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(() => (btn.textContent = old), 900);
      } catch (_) {
        // ignore
      }
    });
  });
})();
