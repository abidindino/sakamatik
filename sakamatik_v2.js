const sakaMetinleri = [
    "tolga ve serkan bir gün pes atarken tabi osman da var osman durur mu yapıştırmış cevabı",
    "serkaaaan gel uğlum yimek hazırr(gece 2)",
    "beyler yeni bir oyun var uzaylıları vuruyosun serkan da demişki ben önden gidip kendimi yem edeyim hiçbir vasfım yok zaten çorumlu amirim ben demiş",
    "niçin benim gibi yakışıklı bir adama çakmak soruyosun",
    "ömer bir gün kayseride arabayla gezerken snapten müzik eşiliğinde video çekmek istemiş daha sonra trafik ışıklarında su satan çocuklardan birisi abi su ister misin diye sormuş ömer hayır diyince çocuk günde 4 yemek kaşığı yulaf ye o zaman gerzek demiş!",
    "tolga macromusicten eşleştiği kızla reelde buluşmak isteyince kızda hayır olmaz diyince bütün bir karpuzu alıp yemiş isahl olmuş kahpenin kızı biziishal yaptı demiş tabi osman gibi yakışıklı değil ",
    "Tolga trafik polisi olduktan sonra makoyu durdurmuş ve bakmadan sormuş ehliyet ruhsat lütfen mako da demişki aaa tolga naber ya tolga da demişki sanane lan işine bak şeftali mako bunu duyunca demişki ulan az mı lisede elmalı kurabiyen, yedik demiş tolga da demiş ki mako hadi uğraştırma (cebindeki silahı gösterip) avradı mahul bölgene sokarım",
    "Bir gün serkan huzursuz anal sendromu şikayetiyle hastanenin  analnomi bölümüne gitmiş doktor demiş ki nedir şikayetiniz serkan da demiş ki hocam kakamı tutamıyorum sürekli ortalık yerde sıçıyorum doktor da demiş ki sende huzursuz anal sendromu var serkan da demiş ki biliyodum ya bizde genetik",
    "eyes çiko eyes,eyes never lie",
    "ayberkle mako hollandaya giderken uçakta bir ingilizle tanışıyolar ingiliz diyo ki nerelisiniz mako diyo ki ben ağrılıyım ingiliz diyo ki he yani kürtsün mako diyo ki hayır ben polonyalıyım dont shoot me"
];

const sakaButonu = document.getElementById('sakaButonu');
const sakaMetniElementi = document.getElementById('sakaMetni');

sakaButonu.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sakaMetinleri.length);
    sakaMetniElementi.textContent = sakaMetinleri[randomIndex];
});