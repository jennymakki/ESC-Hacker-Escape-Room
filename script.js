function openNav() {
    const x = document.getElementById("myLinks");
    const overlay = document.querySelector(".overlay");
    const icon = document.querySelector(".icon");
    x.style.display = "block";
    overlay.style.opacity= "0.5";
    icon.style.opacity= "0.5";
  } 

function closeNav () {
    const myLinks = document.querySelector("#myLinks");
    const overlay = document.querySelector(".overlay");
    const icon = document.querySelector(".icon");
    myLinks.style.display = "none"; 
    overlay.style.opacity ="1";
    icon.style.opacity = "1";
}

