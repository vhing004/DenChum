const tabs = document.querySelectorAll(".detail_tabs button");
const panes = document.querySelectorAll(".detail_panes-item");
// console.log(tabs);
// console.log(panes);
tabs.forEach((tab, index) => {
  const pane = panes[index];
    // console.log(pane);
  tab.onclick = function(){
    document.querySelector('.detail_tabs button.active').classList.remove("active")
    document.querySelector('.detail_panes-item.active').classList.remove("active")
    // console.log(pane);
    // console.log(tab);
    this.classList.add("active");
    pane.classList.add("active");
  };
});
