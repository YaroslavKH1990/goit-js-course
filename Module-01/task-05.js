"use strict";

const country = prompt("Страна доставки?");
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica= 120;

if (country === null) {
    console.log("Отменено пользователем");
} else {
    switch (country.toLowerCase()) {
        case "китай":
            console.log(`Доставка в ${country} будет стоить ${china} кредитов`);
            break;
    
        case "чили":
            console.log(`Доставка в ${country} будет стоить ${chile} кредитов`);
            break;
    
        case "австралия":
            console.log(`Доставка в ${country} будет стоить ${australia} кредитов`);
            break;
    
        case "индия":
            console.log(`Доставка в ${country} будет стоить ${india} кредитов`);
            break;
    
        case "ямайка":
            console.log(`Доставка в ${country} будет стоить ${jamaica} кредитов`);
            break;
    
        default:
            console.log(`Доставка в вашей стране не доступна`);
    }
}
//--------------------------------------------------------------------------------------
// if (country === null) {
//     console.log("Отменено пользователем!");

// } else if (country.toLowerCase() === "китай") {
//     console.log(`Доставка в ${country} будет стоить ${china} кредитов`);

// } else if (country.toLowerCase() === "чили") {
//     console.log(`Доставка в ${country} будет стоить ${chile} кредитов`);

// } else if (country.toLowerCase() === "австралия") {
//     console.log(`Доставка в ${country} будет стоить ${australia} кредитов`);

// } else if (country.toLowerCase() === "индия") {
//     console.log(`Доставка в ${country} будет стоить ${india} кредитов`);

// } else if (country.toLowerCase() === "ямайка") {
//     console.log(`Доставка в ${country} будет стоить ${jamaica} кредитов`);

// } else {
//     alert("Доставка в вашей стране не доступна");
// };