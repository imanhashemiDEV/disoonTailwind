let change_theme = document.getElementById("change_theme");

change_theme.addEventListener("click", function () {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

let bar_menu = document.getElementById("bar_menu");
let responsive_menu = document.getElementById("responsive_menu");
let is_open=false
bar_menu.addEventListener("click", function () {
    if(is_open){
        responsive_menu.style.height="0"
        is_open=false
    }else{
        responsive_menu.style.height="8rem"
        is_open=true
    }
});
