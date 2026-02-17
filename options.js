const textarea = document.getElementById("filters");
const radios = document.querySelectorAll("input[name='mode']");

const save = () => {
  const mode = document.querySelector("input[name='mode']:checked").value;
  browser.storage.local.set({ filters: textarea.value, mode });
};

browser.storage.local.get(["filters", "mode"]).then(({ filters, mode }) => {
  if (filters) textarea.value = filters;
  const radio = [...radios].find((r) => r.value === mode);
  if (radio) radio.checked = true;
});

textarea.addEventListener("input", save);
radios.forEach((r) => r.addEventListener("change", save));
