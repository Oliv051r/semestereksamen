window.addEventListener("load", sidenVises);

//variabler
let rand;

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


    //start falling på alle animation
    document.querySelector("#gladtunge_container").classList.add("falling");
    document.querySelector("#tunge_container").classList.add("falling");

    //placer på tilfældige positioner
    document.querySelector("#gladtunge_container").classList.add("pos0");
    document.querySelector("#tunge_container").classList.add("pos1");

    //giv delay
    document.querySelector("#gladtunge_container").classList.add("delay0");
    document.querySelector("#tunge_container").classList.add("delay1");

    //rammer bund, altså bliver ikke klikket på -->rammerbund
    document.querySelector("#gladtunge_container").addEventListener("animationiteration", rammerbund);
    document.querySelector("#tunge_container").addEventListener("animationiteration", rammerbund);


}

function rammerbund() {
    console.log("rammerbund");

    //fjern eksisterende position
    this.classList.remove("pos0");
    this.classList.remove("pos1");
    this.classList.remove("pos2");
    this.classList.remove("pos3");
    this.classList.remove("pos4");
    this.classList.remove("pos5");

    //fjern eksisterende delay
    this.classList.remove("delay0");
    this.classList.remove("delay1");
    this.classList.remove("delay2");
    this.classList.remove("delay3");
    this.classList.remove("delay4");
    this.classList.remove("delay5");


    //giv ny random delay

    //giv ny random position
    rand = Math.floor(Math.random() * 6);
    this.classList.add("pos" + rand);

    //genstart falling ??
    this.classList.remove("falling");
    this.offsetHeight;
    this.classList.add("falling");
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
