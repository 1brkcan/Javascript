// const dersler=[
//     {isim:'matematik',puan:90},
//     {isim:'fizik',puan:80},
//     {isim:'kimya',puan:85},
// ]


let ogrenci={
    ad:'Ömer',
    yas:17,
    email:'oiscanli@gmail.com',
    sinif:11,
    dersler:[
    {isim:'matematik',puan:90},
    {isim:'fizik',puan:80},
    {isim:'kimya',puan:85},],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı');
    },
    printLessons()
    {
        console.log(this.dersler);
        // console.log(this);
        this.dersler.forEach(a =>{
            console.log(a.isim,a.puan);
        })
    }
};
// console.log(this);
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();
