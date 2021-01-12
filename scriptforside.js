window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


    //start falling på alle animation
    document.querySelector("#gladtunge_container").classList.add("falling");
    document.querySelector("#tunge_container").classList.add("fall");
    document.querySelector("#gladtunge_container2").classList.add("fald");
    document.querySelector("#tunge_container2").classList.add("falling");
    document.querySelector("#gladtunge_container3").classList.add("fall");
    document.querySelector("#tunge_container3").classList.add("fald");

    //placer på tilfældige positioner
    document.querySelector("#gladtunge_container").classList.add("pos1");
    document.querySelector("#tunge_container").classList.add("pos0");
    document.querySelector("#gladtunge_container2").classList.add("pos2");
    document.querySelector("#tunge_container2").classList.add("pos3");
    document.querySelector("#gladtunge_container3").classList.add("pos4");
    document.querySelector("#tunge_container3").classList.add("pos5");

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
