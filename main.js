const prompt = require("prompt-sync")()
let PVJ = 100
let PVO = 100
let choice = 0
let attacks = [10, 15, 20, 30]
let min = 1
let max = [2, 3, 3, 4]
console.log("Bienvenue dans le jeux de combat dont on a pas la licence :");
console.log("Tu vas devoir faire un choix entre 4 attaque et tu dois battre l'ordinateur");
console.log("Liste des Attaques Disponibles");
console.log("Attaque 1 : Nom: Frappe Rapide / Puissance: 10 PV/ Précision: 50%");
console.log("Attaque 2 : Nom: Soin Léger / Puissance: Soigne 15 PV / Précision: 33.33%");
console.log("Attaque 3 : Nom: Coup Puissant / Puissance: 20 PV / Précision: 33.33% ");
console.log("Attaque 4 : Nom: Frappe Dévastatrice / Puissance: 30 PV / Précision: 25% ");
while (PVJ > 0 && PVO > 0) {
    console.log("Tu as ", PVJ, " PV");
    console.log("Ton adversaire a ", PVO, " PV");
    choice = Number(prompt("quelle attaque veux tu faires ? (si tu as oublierla liste des attaques tape -1) "))
    while (choice != 1 && choice != 2 && choice != 3 && choice != 4 && choice != -1) {
        choice = Number(prompt("Valeur incorrect!  "))
    }
    Attack(1, choice, attacks, min, max[choice - 1])
    if (choice != -1) {
        IA()
    }
}
if (PVJ > 0) {
    console.log("Bravo tu as gagner contre un grille pain");
} else {
    console.log("Sombre merde tu as perdu");
}
function Attack(perso, num, attacks, min, max) {
    if (num == -1) {
        console.log("Liste des Attaques Disponibles");
        console.log("Attaque 1 : Nom: Frappe Rapide / Puissance: 10 PV/ Précision: 50%");
        console.log("Attaque 2 : Nom: Soin Léger / Puissance: Soigne 15 PV / Précision: 33.33%");
        console.log("Attaque 3 : Nom: Coup Puissant / Puissance: 20 PV / Précision: 33.33% ");
        console.log("Attaque 4 : Nom: Frappe Dévastatrice / Puissance: 30 PV / Précision: 25% ");
    } else {
        console.log("Attaque : ", num);
        let prob = randomize(min, max)
        if (prob == 2) {
            console.log("cool");
            if (perso == 1) {
                if (num != 2) {
                    console.log("Touché tu lui à enlevé", attacks[num - 1], " PV");
                    PVO -= attacks[num - 1]
                } else {
                    console.log("Tu t'es régénéré ", attacks[num - 1], " PV");
                    PVJ += attacks[num - 1]
                }
            } else {
                if (num != 2) {
                    console.log("Touché il t'a enlevé", attacks[num - 1], " PV");
                    PVJ -= attacks[num - 1]
                } else {
                    console.log("Il s'est régénéré ", attacks[num - 1], " PV");
                    PVO += attacks[num - 1]
                }
            }
        } else {
            console.log("Raté");
        }
    }
}
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function IA() {
    let val = randomize(1, 4)
    Attack(2, val, attacks, min, max[val])
}