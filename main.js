const prompt = require("prompt-sync")()
let PVJ = 100
let PVO = 100
let choice = 0
let attacks = [-10,15,-20,-30]
let min = [1,1,1,1]
let max = [2,3,3,4]
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
    choice = prompt("quelle attaque veux tu faires ? (si tu as oublierla liste des attaques tape h) ")
    while (choice != 1 && choice != 2 && choice != 3 && choice != 4 && choice != "h") {
        choice = prompt("Valeur incorrect!  ")
    }
    switch (choice) {
        case "1":
            Attack(1,0,attacks,min,max)
            break;
        case "2":
            Attack(1,1,attacks,min,max)
            break;
        case "3":
            Attack(1,2,attacks,min,max)
            break;
        case "4":
            Attack(1,3,attacks,min,max)
            break;

        default:
            console.log("Liste des Attaques Disponibles");
            console.log("Attaque 1 : Nom: Frappe Rapide / Puissance: 10 PV/ Précision: 50%");
            console.log("Attaque 2 : Nom: Soin Léger / Puissance: Soigne 15 PV / Précision: 33.33%");
            console.log("Attaque 3 : Nom: Coup Puissant / Puissance: 20 PV / Précision: 33.33% ");
            console.log("Attaque 4 : Nom: Frappe Dévastatrice / Puissance: 30 PV / Précision: 25% ");
            continue;
    }
    IA()  
}
if (PVJ>0) {
    console.log("Bravo tu as gagner contre un grille pain");
    
}else{
    console.log("Sombre merde tu as perdu");
    
}
function Attack(perso,num ,attacks,min,max) {
    console.log("Attaque : ",num+1);
    let prob = randomize(min[num], max[num])
    if (prob == 2) {
        console.log("cool");
        
        if (perso == 1) {
            if (num != 1) {
                console.log("Touché tu lui à enlevé",attacks[num], " PV");
                PVO += attacks[num]
            } else {
                console.log("Tu t'es régénéré ",attacks[num], " PV");
                PVJ += attacks[num]
            }
            
        } else {
            if (num !=1) {
                console.log("Touché il t'a enlevé",attacks[num], " PV");
                PVJ += attacks[num]
            } else {
                console.log("Il s'est régénéré ",attacks[num], " PV");
                PVO += attacks[num]
            }
            
        }
    } else {
        console.log("Raté");
    }

}
function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function IA() {
    let val = randomize(1,4)
    switch (val) {
        case 1 :
            Attack(2,0,attacks[0],min[0],max[0])
            break;
        case 2 :
            Attack(2,0,attacks[1],min[1],max[1])
            break;
        case 3 :
            Attack(2,0,attacks[2],min[2],max[2])
            break;
        case 4 :
            Attack(2,0,attacks[3],min[3],max[3])
            break;
    }
}