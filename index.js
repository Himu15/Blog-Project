const menuIcon = document.getElementById("menudropdown");
const menu = document.getElementById("menu-icon");

menuIcon?.addEventListener("click",() => {
    if(menu?.className === "hidden") {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
}
);
