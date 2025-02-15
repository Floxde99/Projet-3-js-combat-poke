const prompt = require("prompt-sync")()
let PVJ = 100
let PVO = 100
let choice = 0
while (PVJ >= 0 || PVO >= 0) {
    console.log("Tu as ", PVJ, " PV");
    console.log("Ton adversaire a ", PVO, " PV");
    choice = prompt("quelle attaque veux tu faires ? (si tu as oublierla liste des attaques tape h) ")
    while (choice != 1 && choice != 2 && choice != 3 && choice != 4 && choice != "h") {
        choice = prompt("Valeur incorrect!  ")
    }
    switch (choice) {
        case "1":
            attack1(1)
            break;
        case "2":
            attack2(1)
            continue;
        case "3":
            attack3(1)
            continue;
        case "4":
            attack4(1)
            continue;

        default:
            console.log("Liste des Attaques Disponibles");
            console.log("Attaque 1 : Nom: Frappe Rapide / Puissance: 10 PV/ Précision: 50%");
            console.log("Attaque 2 : Nom: Soin Léger / Puissance: Soigne 15 PV / Précision: 33.33%");
            console.log("Attaque 3 : Nom: Coup Puissant / Puissance: 20 PV / Précision: 33.33% ");
            console.log("Attaque 4 : Nom: Frappe Dévastatrice / Puissance: 30 PV / Précision: 25% ");
            continue;
    }
    console.log("tas gagner contre un pantin en bois qui ne bouge pas bravo ... enfin je crois");
    
    break;
}
function attack1(perso) {
    console.log("tu utilises: Frappe rapide");
    let prob = randomize(1, 2)
    if (prob == 2) {
        console.log("Touché tu lui à enlevé 10 PV");
        if (perso == 1) {
            PVO = PVO - 10
        } else {
            PVJ -= 10
        }
    } else {
        console.log("Raté");
    }

}
function attack2(perso) {
    console.log("tu utilises: Soin léger");
    let prob = randomize(1, 3)
    if (prob == 2) {
        console.log("Tu as régénéré 15PV");
        if (perso == 1) {
            PVJ += 15
        } else {
            PVO += 15
        }
    } else {
        console.log("Raté");
    }

}
function attack3(perso) {
    console.log("tu utilises: Coup puissant");
    let prob = randomize(1, 3)
    if (prob == 2) {
        console.log("Touché tu lui à enlevé 20 PV");
        if (perso == 1) {
            PVO -= 20
        } else {
            PVJ -= 20
        }
    } else {
        console.log("Raté");
    }

}
function attack4(perso) {
    console.log("tu utilises: Frappe dévastatrice");
    let prob = randomize(1, 4)
    if (prob == 2) {
        console.log("Touché tu lui à enlevé 30 PV");
        if (perso == 1) {
            PVO -= 30
        } else {
            PVJ -= 30
        }
    } else {
        console.log("Raté");
    }

}
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function IA(params) {

}