window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    //start side på animationer
    document.querySelector("#kaffe_container").classList.add("side");
    document.querySelector("#kaf_container").classList.add("side");
    document.querySelector("#kaffe_container2").classList.add("side");
    document.querySelector("#kaf_container2").classList.add("side");

    //placer på tilfældelige positioner
    document.querySelector("#kaffe_container").classList.add("pos1");
    document.querySelector("#kaf_container").classList.add("pos0");
    document.querySelector("#kaffe_container2").classList.add("pos2");
    document.querySelector("#kaf_container2").classList.add("pos3");

}

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
