var hesapA = {
    ad: 'Furkan Ogur',
    hesapNo: '123456789',
    bakiye: 2000,
    ekHesap: 1000
}

var hesapB = {
    ad: 'Yaşar Ogur',
    hesapNo: '123456987',
    bakiye: 45000,
    ekHesap: 7000
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`)

    if (hesap.bakiye >= miktar) {
        console.log('Paranızı Alabilirsiniz');
        hesap.bakiye = hesap.bakiye - miktar;
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if (toplam >= miktar) {
            if (confirm('Ek hesabınızı kullanmak istermisiniz')) {
                console.log('Paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekhesap
            } else {
                console.log(`${hesap.hesapNo} Nolu hesabınızda ${miktar} ₺ bulunmamaktadır.`);
            }
        } else {
            console.log('Üzgünüz bakiye yetersiz.')
        }
    }
}


paraCek(hesapA, 2000);
paraCek(hesapA, 1000);
// paraCek(hesapB, 2000);