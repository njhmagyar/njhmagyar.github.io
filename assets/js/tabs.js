const tabTriggers = document.querySelectorAll("[data-tab-trigger]");
const tabs = document.querySelectorAll("[data-tab]");
tabTriggers[0].classList.add("active");
tabs[0].hidden = false;

tabTriggers.forEach(trigger => {
  trigger.addEventListener("click", (e) => {
    tabTriggers.forEach(trigger => trigger.classList.remove("active"));
    tabs.forEach(tab => tab.hidden = true);
    let targetId = e.target.dataset["tabTrigger"];
    let tab = document.getElementById(targetId);
    if (tab) {
      tab.hidden = false;
      trigger.classList.add("active");
    }
  })
})