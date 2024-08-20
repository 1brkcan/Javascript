let ogrenci={
    ad:'Ömer',
    yas:17,
    email:'oiscanli@hotmail.com',
    sinif:11,
    dersler:['matematik','fizik','kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci['ad']);
ogrenci['ad']='Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);

