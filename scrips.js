window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("mousedown", toggleMenu);

    document.querySelector(".kort_img1").addEventListener("mouseover", swapImage);
    document.querySelector(".kort_img1").addEventListener("mouseout", swapImage);

    document.querySelector(".kort_img2").addEventListener("mouseover", swapImage);
    document.querySelector(".kort_img2").addEventListener("mouseout", swapImage);

    document.querySelector(".kort_img3").addEventListener("mouseover", swapImage);
    document.querySelector(".kort_img3").addEventListener("mouseout", swapImage);

}


function swapImage() {
    console.log("swapImage");
    this.firstElementChild.classList.toggle("hide");
    this.lastElementChild.classList.toggle("hide");
}

/*Brug til burgermenu!!*/

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("nav").classList.toggle("hidden");

    let erSkjult = document.querySelector("nav").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }


}
