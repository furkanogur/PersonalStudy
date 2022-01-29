function yasHesapla(dogumYili) {
    return 2022 - dogumYili;
}


let ageFurkan = yasHesapla(2001);
let ageElon = yasHesapla(1980);
let ageSteve = yasHesapla(1955);

console.log(ageFurkan);
console.log(ageElon);
console.log(ageSteve);


function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim }Emekli olmana ${emeklilik} yıl kaldı`);

    } else {
        console.log(`Zaten emekli oldunuz`);
    }

}

emekliligeKacYilKaldi(2001, "Furkan");
emekliligeKacYilKaldi(1980, "Elon");
emekliligeKacYilKaldi(1955, "Steve");