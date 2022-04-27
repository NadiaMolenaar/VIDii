// JavaScript Document
var wiel = document.querySelector("ol");

var jaar28 = document.querySelector("li:nth-of-type(1) button");
jaar28.addEventListener("click", showInfo1);

var jaar30 = document.querySelector("li:nth-of-type(2) button");
jaar30.addEventListener("click", showInfo2);

var jaar35 = document.querySelector("li:nth-of-type(3) button");
jaar35.addEventListener("click", showInfo3);

var jaar39 = document.querySelector("li:nth-of-type(4) button");
jaar39.addEventListener("click", showInfo4);

var jaar52 = document.querySelector("li:nth-of-type(5) button");
jaar52.addEventListener("click", showInfo5);

var jaar99 = document.querySelector("li:nth-of-type(6) button");
jaar99.addEventListener("click", showInfo6);

var jaar04 = document.querySelector("li:nth-of-type(7) button");
jaar04.addEventListener("click", showInfo7);

var jaar18 = document.querySelector("li:nth-of-type(8) button");
jaar18.addEventListener("click", showInfo8);

// var tijd = document.getElementById("tijd");
var paragraph = document.getElementById("p");
var infoLink = document.getElementById("a");


function showInfo1() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[0];
    document.getElementById("p").innerHTML=backgroundInfo[0];
    document.getElementById("a").innerHTML=naamVideo[0]
    document.getElementById("a").setAttribute("href", link[0]);
    
    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo2() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[1];
    document.getElementById("p").innerHTML=backgroundInfo[7];
    document.getElementById("a").innerHTML=naamVideo[0]
    document.getElementById("a").setAttribute("href", link[1]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo3() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[2];
    document.getElementById("p").innerHTML=backgroundInfo[6];
    document.getElementById("a").innerHTML=naamVideo[0]
    document.getElementById("a").setAttribute("href", link[2]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo4() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[3];
    document.getElementById("p").innerHTML=backgroundInfo[5];
    document.getElementById("a").innerHTML=naamVideo[0]
    document.getElementById("a").setAttribute("href", link[3]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo5() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[4];
    document.getElementById("p").innerHTML=backgroundInfo[4];
    document.getElementById("a").innerHTML=naamVideo[0]
    document.getElementById("a").setAttribute("href", link[4]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo6() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[5];
    document.getElementById("p").innerHTML=backgroundInfo[3];
    document.getElementById("a").innerHTML=naamVideo[1]
    document.getElementById("a").setAttribute("href", link[5]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo7() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[6];
    document.getElementById("p").innerHTML=backgroundInfo[2];
    document.getElementById("a").innerHTML=naamVideo[2]
    document.getElementById("a").setAttribute("href", link[6]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

function showInfo8() {
    // document.getElementById("tijd").innerHTML=tijdInJaar[7];
    document.getElementById("p").innerHTML=backgroundInfo[1];
    document.getElementById("a").innerHTML=naamVideo[1]
    document.getElementById("a").setAttribute("href", link[7]);

    wiel.classList.toggle("stoppen");
    // tijd.classList.toggle("show");
    paragraph.classList.toggle("show");
    infoLink.classList.toggle("show");
    console.log("Howdy!");
};

// Constante waarde, deze veranderd niet
// const tijdInJaar = [
//     "1928",
//     "1930",
//     "1935",
//     "1939",
//     "1952",
//     "1999",
//     "2004",
//     "2018"
// ];

const backgroundInfo = [
    "1928: De eerste versie van Mickey Mouse werd gemaakt in 1928. Velen zullen hem herkennen van de tekenfilm 'Steamboat Willie', waarin Mickey te zien is als kapitein.", 
    "1930: Nog geen 2 jaar later werd een vervolg gemaakt op Mickey die te zien was in 'The karnival kid'.",
    "1935: In 1935 was Mickey vernieuwd te zien in de film 'The band concert', waar hij de rol van bandleider speelt. Mickey heeft hier meer kleur op zijn gezicht en de films worden niet meer uitgevoerd in zwart-wit.",
    "1939: Net als ieder ander viert ook Mickey zijn verjaardag, in de film 'Mickey's surprise party' is te zien dat Mickey een schattigere uitstraling heeft en dat bewegingen vloeiender worden.",
    "1952: Vanaf 1952 gaat Mickey door het leven met een andere gezichtsuitdrukking; hij heeft weer wenkbrauwen. Dit is goed terug te zien in de film 'Pluto's Party', waar hij andere kledij heeft en zijn lichaam meer onderverdeeld is in hoeken, waardoor hij meer persoonlijkheid krijgt.",
    "1999: Bijna 50 jaar later komt Mickey terug als karakter in zijn eigen show 'Mickey Mouse Works'. Deze show bestaat uit 25 episodes, verdeeld over 2 seizoenen.",
    "2004: Vrij snel na Mickey's serie speelt hij een hoofdrol in zijn eigen film 'Mickey's twice upon a christmas'. Dit is d eerste film waarbij Mickey en de andere personages zijn gemaakt door middel van 3D-computeranimatie.",
    "2018: Vrij snel na Mickey's serie speelt hij een hoofdrol in zijn eigen film 'Mickey's twice upon a christmas'. Dit is d eerste film waarbij Mickey en de andere personages zijn gemaakt door middel van 3D-computeranimatie."
];

const link = [
    "https://www.youtube.com/watch?v=BBgghnQF6E4",
    "https://www.youtube.com/watch?v=fIa1Tvbh1qo",
    "https://www.youtube.com/watch?v=7FeP9SDXGKE",
    "https://www.youtube.com/watch?v=0OZmtWCjJ4M",
    "https://www.youtube.com/watch?v=Nr6V25b9Eaw",
    "https://www.youtube.com/watch?v=x99eq5sxWAo",
    "https://www.youtube.com/watch?v=x99eq5sxWAo",
    "https://www.youtube.com/watch?v=ucHs0yRrFqc"
];

const naamVideo = [
    "Zie de film!",
    "Zie de aflevering!",
    "Zie de trailer!"
];

// Zoeken naar link van 1935 of 1939

function toggleParagraph() {
    paragraph.classList.add("hide");
  };

// function toggleTijd() {
//     tijd.classList.add("hide");
// };
