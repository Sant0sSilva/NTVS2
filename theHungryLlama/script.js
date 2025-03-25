function Menu(el) {
  let listMenu = document.getElementById("navMenu");

  el.name === "menu"
    ? ((el.name = "close"),
      listMenu.classList.add("top-[80px]"),
      listMenu.classList.add("opacity-100"))
    : ((el.name = "menu"),
      listMenu.classList.remove("top-[80px]"),
      listMenu.classList.remove("opacity-100"));
}
