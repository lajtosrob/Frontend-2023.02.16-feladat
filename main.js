let a = document.getElementById("ájdí");
let b = document.getElementById("marka");
let c = document.getElementById("ev");

let counter = 1;
a.value = counter;
let ujsor;
feltolt = () => {
    if (b.value != "" && c.value != "") {
        ujsor = "<tr id='" + counter + "'><td>" + counter + "</td><td>" + b.value + "</td><td>" + c.value + "</td></tr>";
        document.getElementById("torzs").innerHTML += ujsor;
        document.getElementById("ájdí").value = "";
        document.getElementById("marka").value = "";
        document.getElementById("ev").value = "";
        counter++;
        a.value = counter;
    }
    else {
        alert("HIBA! Nem töltötte ki az adatokat!");
        return;

    }
}

function urit() {
    document.getElementById("torzs").innerHTML = "";
}

function torol() {
    document.getElementById(counter-1).innerHTML = "";
    counter--;
}