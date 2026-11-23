gdjs.ProfilCode = {};
gdjs.ProfilCode.localVariables = [];
gdjs.ProfilCode.idToCallbackMap = new Map();
gdjs.ProfilCode.GDPrZeminObjects1= [];
gdjs.ProfilCode.GDPrSecimObjects1= [];
gdjs.ProfilCode.GDPrBuyukObjects1= [];
gdjs.ProfilCode.GDPrSekmeObjects1= [];
gdjs.ProfilCode.GDPrDugmeObjects1= [];
gdjs.ProfilCode.GDPrYaziObjects1= [];
gdjs.ProfilCode.GDPrPulObjects1= [];
gdjs.ProfilCode.GDPrYuvaObjects1= [];
gdjs.ProfilCode.GDPrZemKareObjects1= [];
gdjs.ProfilCode.GDPrNoktaObjects1= [];
gdjs.ProfilCode.GDPrKarartmaObjects1= [];
gdjs.ProfilCode.GDPrPencereObjects1= [];
gdjs.ProfilCode.GDPrPDugmeObjects1= [];
gdjs.ProfilCode.GDPrRenkObjects1= [];
gdjs.ProfilCode.GDPrRutbeObjects1= [];
gdjs.ProfilCode.GDPrCubukObjects1= [];
gdjs.ProfilCode.GDPrAvatarObjects1= [];
gdjs.ProfilCode.GDPrAvPencereObjects1= [];
gdjs.ProfilCode.GDPrAvSecimObjects1= [];
gdjs.ProfilCode.GDPrRenkPenObjects1= [];
gdjs.ProfilCode.GDPrRenkSecObjects1= [];
gdjs.ProfilCode.GDPrPerdeObjects1= [];
gdjs.ProfilCode.GDPanelAvatarObjects1= [];
gdjs.ProfilCode.GDRutbeRozetObjects1= [];


gdjs.ProfilCode.userFunc0xf3f778 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Profil v31 (GALİBİYET/YILDIZ yazıları 21 px, yıldız yazısı x 508 — zemin matranc_przemin_v6/gece_v1'de yıldız simgesi 16 px sağda; sığmazsa yazı küçülür) · v30 (rütbe adı DAHİ (BÜYÜK USTA yerine)) · v29 (ROBOT GÖREVLERİ: pul/zemin satın alma ve değiştirme MatrancGorev'e bildirilir) · v28 (geri düğmesi PROFİL başlığının solunda, sabit (128, 93); ad penceresinde VAZGEÇ/KAYDET pul tarzı) · v27 (RÜTBE ROZETLERİ 512 px: PrRutbe kareleri rutbe2_0…6, ölçekler 160/512 ile küçültüldü) v26 (PUL DOLABI 30 yuva / 6 sıra, KAYDIRMALI; 13 yeni pul (kimlik 32–44, kayıt pulSahip3); DAMA, LOLİPOP, KARPUZ, PORTAKAL, TENİS, KEDİ, BRONZ, GÜMÜŞ kaldırıldı — ücretleri bir kez iade (pulIade10); sıra fiyatı 10/20/30/40/50/60; PrPul 60 kare matranc_prpul5_* (0–29 açık, 30–59 kilitli), PrPencere 53 kare matranc_pen6_* (0–15 zemin, 16–52 pul = kimlik+8), PrBuyuk 45 kare) · v25c (TOPOGRAFİK → KATMANLAR) · v25b (zemin adları: PASTEL, KONFETİ, UÇAK, KARBON) · v25 (16 ZEMİN: DÜZ RENK + 15, sıra fiyatı 20/30/40/50; yeni kayıtlar tema3/temaSahip3; ZEMİNLER listesi KAYDIRMALI (parmakla yukarı-aşağı); PrZemKare 48 kare matranc_zk3_*, PrPencere 40 kare matranc_pen5_* (0–15 zemin, 16–39 pul); YENİ nesne PrPerde) · v24 (PUL FİYATLARI: sıra başına 10/20/30/40/50 yıldız; PrPul görselleri matranc_prpul4_*, PrPencere matranc_pen4_*) · v23 (rozetler büyük: üstte KOLAY/ORTA/ZOR/UZMAN, altta ortada ÇEVRİM İÇİ; sayılar beyaz dairede lacivert 16; zemin matranc_przemin_uzman_v3.jpg) · v22 (UZMAN: galUzman) · v21 (10 KARAKTER: PrAvatar 10 kare, seçim penceresi 4-3-3) · v20 (PUL DOLABI SIRASI: BRONZ 15'lik satır sonu, GÜMÜŞ 20'lik satır sonu, ALTIN en son; NEON ve NAZAR 25'e; yuva ≠ kimlik → PR.YID) · v19 (geri düğmesi %15 büyük: ölçek 0.575) · v18 (zemin satın alma penceresi büyük önizlemeli: PrPencere 0–11 daha uzun, AL/VAZGEÇ ve yazı aşağıda) · v17 (geri düğmesi %35 büyük: ölçek 0.675, menüdeki profil düğmesiyle aynı yer ve boy) · v16 (ad penceresinde "gerçek adını ve soyadını yazma" notu) · v15 (12 ZEMİN 3×4: DÜZ RENK ücretsiz + 6 renk (GRİ eklendi), sıra fiyatı 10/20/30; yeni kayıtlar tema2/temaSahip2; PrZemKare 36 kare, PrPencere 36 kare: 0–11 zemin, 12–35 pul) · v14b (bütün dokunuşlara düğme sesi; satın almada kazanma sesi) · v14 (PUL DOLABI 5×5: 8 düz renk + 24 pul, sıra fiyatı 5/10/15/20/25 yıldız) · v13b (geri düğmesine ses) · v12 (FUTBOL pulu, pullar yıldızla satın alınır) · sahnesi v11 (9 zemin + RÜTBE sekmesi + AVATAR)
// Profil sahnesinde KOŞULSUZ, TEK bir JavaScript etkinliği olarak koyun. Başka etkinlik gerekmez.
// Nesneler (adlar eskisiyle aynı): PrZemin, PrDugme (0 geri, 1 kalem), PrSekme (0/1), PrPul (50 kare: 0–24 açık, 25–49 kilitli),
// PrSecim (0 ana, 1 yedek), PrBuyuk (32 kare), YENİ: PrRenkPen (1 görsel), PrRenkSec (1 görsel), PrYuva (4 kare), PrYazi (metin),
// PrZemKare (48 kare), PrNokta, PrRenk, PrKarartma, PrPencere (40 kare: 0–15 zemin, 16–39 pul), PrPerde (v25: 2 kare, 0 üst 1 alt), PrPDugme (3 kare), PrRutbe (7 kare), PrCubuk,
// PrAvatar (10 kare: 0–3 eski, 4–9 yeni karakterler), PrAvPencere, PrAvSecim.
// PrSekme artık 3 kare: 0 PULLAR, 1 ZEMİNLER, 2 RÜTBE.
if (window.MatrancProfil && window.MatrancProfil.sahne === runtimeScene) {
  window.MatrancProfil.kare(runtimeScene);
} else {
(function () {
  const PR = {};
  // pul kimlikleri: 0–7 DÜZ RENK (ücretsiz), 8–31 dolaptaki pullar (yuva 1–24 = kimlik 8–31)
  PR.AD = ["KIRMIZI", "YEŞİL", "MAVİ", "MOR", "TURKUAZ", "PEMBE", "SİYAH", "İNCİ",
           "ŞEKER", "DAMA", "ZİKZAK", "HEDEF", "LOLİPOP", "KARPUZ", "PORTAKAL", "KALP", "GÜLEN YÜZ",
           "KAR TANESİ", "GÜNEŞ", "PAPATYA", "UĞUR BÖCEĞİ", "NAZAR", "FUTBOL", "BASKETBOL", "TENİS", "VOLEYBOL", "NEON",
           "PANDA", "KEDİ", "BRONZ", "GÜMÜŞ", "ALTIN",
           "ROKET", "KAMUFLAJ", "YARIŞ", "DİNOZOR", "EJDERHA", "NİNJA", "ATEŞ", "MAGMA", "ATOM", "DÜMEN", "DEVRE", "ŞÖVALYE", "ROBOT"];
  // v26: dolaptaki yuva → pul kimliği (30 yuva: 0 DÜZ RENK klasörü, 1–29 pul; 5'li sıralar, sıra fiyatı 10/20/30/40/50/60)
  PR.YID = [0, 8, 10, 32, 11, 16, 17, 33, 21, 34, 27, 20, 19, 35, 15, 22, 25, 23, 18, 36, 37, 38, 39, 40, 41, 42, 26, 43, 44, 31];
  PR.YN = PR.YID.length;
  PR.KALK = [9, 12, 13, 14, 24, 28, 29, 30];                   // v26: kaldırılan pullar (eski fiyatları iade edilir)
  PR.KFIYAT = [10, 20, 20, 20, 40, 50, 30, 40];
  PR.PFIYAT = new Array(45).fill(0);
  for (let s = 1; s < PR.YN; s++) PR.PFIYAT[PR.YID[s]] = [10, 20, 30, 40, 50, 60][Math.floor(s / 5)];
  // v20: dolaptaki yuva → pul kimliği (kimlikler ve kayıtlar değişmedi, yalnız görünüş sırası)
  PR.ESKI = [0, 1, 2, 8, 15, 22, -1, 26, -1, 31];             // eski pul no → yeni kimlik (YILDIZ ve ÇİNİ kalktı)
  PR.GX = [130, 245, 360, 475, 590]; PR.GY = [703, 820, 937, 1054, 1171, 1288];
  PR.PV0 = 640; PR.PKMAX = PR.GY[5] + 58 - 1222 + 6;          // v26: pul listesi görünen üst sınırı, en fazla kaydırma
  PR.YUVA_Y = 553;
  PR.RPX = 360; PR.RPY = 760;                                   // RENGİNİ SEÇ penceresinin merkezi
  PR.RYER = [[-200, -54], [-67, -54], [66, -54], [199, -54], [-200, 76], [-67, 76], [66, 76], [199, 76]];
  PR.DEPO = "matranc";
  PR.LACI = "43;52;82";
  PR.KAHVE = "120;78;20";
  PR.MOD = [[334.3, 309], [421.2, 309], [498.7, 309], [597.9, 309], [492.2, 348]];   // KOLAY, ORTA, ZOR, UZMAN, ÇEVRİM İÇİ
  // v25 zemin kimlikleri (tema3) = dolaptaki sıra: 0 DÜZ RENK, 1 ORMAN, 2 GECE, 3 KİRAZ ÇİÇEĞİ, 4 DEVRE KARTI, 5 PASTEL,
  //   6 KATMANLAR, 7 KONFETİ, 8 FUTBOL, 9 BASKETBOL, 10 GÖKKUŞAĞI, 11 GECE ŞEHRİ, 12 LAV, 13 YAPBOZ, 14 UÇAK, 15 KARBON
  PR.ZAD = ["DÜZ RENK", "ORMAN", "GECE", "KİRAZ ÇİÇEĞİ", "DEVRE KARTI", "PASTEL", "KATMANLAR", "KONFETİ",
            "FUTBOL", "BASKETBOL", "GÖKKUŞAĞI", "GECE ŞEHRİ", "LAV", "YAPBOZ", "UÇAK", "KARBON"];
  PR.ZFIYAT = [0, 20, 20, 20, 30, 30, 30, 30, 40, 40, 40, 40, 50, 50, 50, 50];
  PR.ZESKI = [0, 0, 2, 3, 4, 5, -1, 9, -1];                     // çok eski tema no → tema2
  PR.ZYENI = [0, 3, 0, 1, 2, 8, 9, 0, 0, 13, 4, 10];             // tema2 → tema3 (DENİZ, KAMP, KUZEY IŞIKLARI kalktı → DÜZ RENK)
  PR.ZN = 16; PR.DUZN = 6;                                      // zemin sayısı, düz renk sayısı
  PR.SUT = [142, 287, 433, 578]; PR.SAT = [653, 859, 1065, 1271];
  PR.V0 = 550; PR.V1 = 1222;                                    // v25: kaydırılan zemin listesinin görünen aralığı (PrPerde bunun dışını örter)
  PR.KMAX = PR.SAT[3] + 98 - PR.V1 + 6;                         // en fazla kaydırma
  PR.SERIT = 1250;                                 // alt şerit (yazı / düz renk düğmeleri)
  PR.GRI = "110;116;140";
  PR.RUTBE = ["ÇIRAK", "HESAPÇI", "ÇARPAN", "STRATEJİST", "USTA", "DAHİ", "MATRANÇÖR"];
  PR.RESIK = [0, 1, 3, 7, 15, 30, 50];
  PR.rutbe = function (n) { let r = 0; for (let i = 0; i < 7; i++) if (n >= PR.RESIK[i]) r = i; return r; };
  PR.rutbeMetin = function () {
    const n = PR.gal[4], r = PR.rutbe(n);
    if (r === 6) return PR.RUTBE[r] + "  •  en yüksek rütbe!";
    return PR.RUTBE[r] + "  •  Sonraki: " + PR.RUTBE[r + 1] + " (" + (PR.RESIK[r + 1] - n) + " galibiyet)";
  };

  PR.oku = function (anahtar, varsayilan) {
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile(PR.DEPO, anahtar)) return varsayilan;
      const v = new gdjs.Variable();
      s.readNumberFromJSONFile(PR.DEPO, anahtar, PR.sahne, v);
      return v.getAsNumber();
    } catch (e) { return varsayilan; }
  };
  PR.yaz = function (anahtar, deger) {
    try { gdjs.evtTools.storage.writeNumberInJSONFile(PR.DEPO, anahtar, deger); } catch (e) {}
  };
  PR.gv = function (ad) { return PR.sahne.getGame().getVariables().get(ad); };

  PR.olustur = function (ad, cx, cy, olcek, kare, z) {
    const o = PR.sahne.createObject(ad);
    if (!o) return null;
    o.setScale(olcek); o.__olcek = olcek; o.__cx = cx; o.__cy = cy;
    if (kare !== undefined) { o.setAnimationFrame(kare); o.pauseAnimation(); }
    o.setZOrder(z || 10);
    PR.yerlestir(o);
    return o;
  };
  PR.yerlestir = function (o) { if (o) o.setPosition(o.__cx - o.getWidth() / 2, o.__cy - o.getHeight() / 2); };
  PR.kareYap = function (o, k) { if (o && o.getAnimationFrame() !== k) { o.setAnimationFrame(k); o.pauseAnimation(); } };
  PR.yazi = function (x, y, boyut, renk, hiza) {
    const t = PR.sahne.createObject("PrYazi");
    t.setCharacterSize(boyut); t.setColor(renk); t.setZOrder(30);
    t.__x = x; t.__y = y; t.__hiza = hiza || "orta";
    return t;
  };
  PR.metin = function (t, m) {
    if (!t) return;
    if (t.getText() !== m) t.setText(m);
    const x = t.__hiza === "sol" ? t.__x : t.__x - t.getWidth() / 2;
    t.setPosition(x, t.__y - t.getHeight() / 2);
  };
  PR.metinSig = function (t, m, enFazla) {           // v31: yazı sığmazsa 21'den 15'e kadar küçülür
    if (!t) return;
    if (t.getText() !== m || t.__sigM !== m) {
      t.__sigM = m; t.setText(m); let b = 21; t.setCharacterSize(b);
      while (b > 15 && t.getWidth() > enFazla) { b--; t.setCharacterSize(b); }
    }
    PR.metin(t, m);
  };
  PR.icinde = function (o, x, y) {
    return o && x >= o.getX() && x <= o.getX() + o.getWidth() && y >= o.getY() && y <= o.getY() + o.getHeight();
  };
  PR.zipla = function (o) { if (o) o.__zip = 1; };
  PR.ses = function (ad, v) { try { PR.sahne.getGame().getSoundManager().playSound(ad || "dugme.wav", false, v || 70, 1); } catch (e) {} };
  PR.toplam = function () { return PR.gal.reduce((a, b) => a + b, 0); };
  PR.acik = function (i) { return (i >= 0 && i <= 7) || (i >= 8 && i <= 31 && !PR.KALK.includes(i) && !!(PR.pSahip & (1 << (i - 8)))) || (i >= 32 && i <= 44 && !!(PR.pSahip3 & (1 << (i - 32)))); };
  PR.yuvaNo = function (i) { return i <= 7 ? 0 : PR.YID.indexOf(i); };
  PR.fiyat = function (pen) { return pen >= 100 ? PR.PFIYAT[pen - 100] : PR.ZFIYAT[pen]; };

  // ---------- kurulum
  PR.kur = function (runtimeScene) {
    PR.sahne = runtimeScene;
    PR.pencere = null; PR.mesajSon = 0; PR.mesaj = "";
    const L = runtimeScene.getLayer("");
    L.setCameraZoom(2); L.setCameraX(360); L.setCameraY(640);

    PR.gal = [PR.oku("galKolay", 0), PR.oku("galOrta", 0), PR.oku("galZor", 0), PR.oku("galUzman", 0), PR.oku("galCevrimici", 0)];
    // yıldız bakiyesi (ilk kez: mevcut galibiyetlerden hesaplanır)
    PR.yildiz = PR.oku("yildiz", -1);
    if (PR.yildiz < 0) { PR.yildiz = PR.gal[0] + 2 * PR.gal[1] + 3 * PR.gal[2] + 4 * PR.gal[3]; PR.yaz("yildiz", PR.yildiz); }
    // sahip olunan pullar: pulSahip2 (bit j = kimlik 8+j). İlk kez: eski kayıttan (pulSahip) aktarılır.
    PR.pSahip = Math.round(PR.oku("pulSahip2", -1));
    if (PR.pSahip < 0) {
      PR.pSahip = 0; const e = Math.round(PR.oku("pulSahip", 0));
      for (let i = 3; i < 10; i++) if ((e & (1 << i)) && PR.ESKI[i] >= 8) PR.pSahip |= (1 << (PR.ESKI[i] - 8));
      PR.yaz("pulSahip2", PR.pSahip);
    }
    PR.pSahip3 = Math.round(PR.oku("pulSahip3", 0));
    // v26: kaldırılan pulların ücretini bir kez iade et (Menü kodu 9.9 da yapar; hangisi önce çalışırsa)
    if (PR.oku("pulIade10", 0) !== 1) {
      let iade = 0; PR.KALK.forEach((k, j) => { if (PR.pSahip & (1 << (k - 8))) { iade += PR.KFIYAT[j]; PR.pSahip &= ~(1 << (k - 8)); } });
      if (iade > 0) { PR.yildiz += iade; PR.yaz("yildiz", PR.yildiz); PR.yaz("pulSahip2", PR.pSahip); PR.iadeMesaj = iade; }
      PR.yaz("pulIade10", 1);
    }
    PR.ana = Math.round(PR.oku("anaPul2", -1));
    PR.yedek = Math.round(PR.oku("yedekPul2", -1));
    if (PR.ana < 0) { const e = Math.round(PR.oku("anaPul", 0)); PR.ana = PR.ESKI[e] >= 0 ? PR.ESKI[e] : 0; }
    if (PR.yedek < 0) { const e = Math.round(PR.oku("yedekPul", 2)); PR.yedek = PR.ESKI[e] >= 0 ? PR.ESKI[e] : 2; }
    if (!PR.acik(PR.ana)) PR.ana = 0;
    if (!PR.acik(PR.yedek) || PR.yedek === PR.ana) PR.yedek = PR.ana === 2 ? 0 : 2;
    PR.yuva = 0;                                   // 0: ANA yuvası seçili, 1: YEDEK
    // zeminler: tema3 / temaSahip3 (bit i = zemin i). İlk kez: tema2 / temaSahip2 kaydından aktarılır (o da yoksa en eski kayıttan).
    PR.zSahip = Math.round(PR.oku("temaSahip3", -1));
    if (PR.zSahip < 0) {
      let s2 = Math.round(PR.oku("temaSahip2", -1));
      if (s2 < 0) {
        s2 = 1; const e = Math.round(PR.oku("temaSahip", 3));
        for (let i = 2; i < 9; i++) if ((e & (1 << i)) && PR.ZESKI[i] > 0) s2 |= (1 << PR.ZESKI[i]);
      }
      PR.zSahip = 1;
      for (let i = 1; i < 12; i++) if ((s2 & (1 << i)) && PR.ZYENI[i] > 0) PR.zSahip |= (1 << PR.ZYENI[i]);
      PR.yaz("temaSahip3", PR.zSahip);
    }
    PR.zSahip |= 1;                                            // DÜZ RENK her zaman açık
    PR.zemin = Math.round(PR.oku("tema3", -1));
    if (PR.zemin < 0) {
      let t2 = Math.round(PR.oku("tema2", -1));
      if (t2 < 0) { const e = Math.round(PR.oku("tema", 1)); t2 = PR.ZESKI[e] > 0 ? PR.ZESKI[e] : 0; }
      PR.zemin = PR.ZYENI[t2] || 0; PR.yaz("tema3", PR.zemin);
    }
    PR.duzRenk = Math.round(PR.oku("duzRenk", 0));
    if (!(PR.zemin >= 0 && PR.zemin < PR.ZN) || !(PR.zSahip & (1 << PR.zemin))) PR.zemin = 0;
    if (!(PR.duzRenk >= 0 && PR.duzRenk < PR.DUZN)) PR.duzRenk = 0;
    PR.pen = -1;                                               // açık satın alma penceresi (tema no)
    PR.sekme = 0;                                              // 0 PULLAR, 1 ZEMİNLER, 2 RÜTBE

    const zm = runtimeScene.createObject("PrZemin");
    if (zm) { zm.setScale(0.5); zm.setPosition(0, -360); zm.setZOrder(0); }
    PR.geri = PR.olustur("PrDugme", 71, 121, 0.575, 0, 20);
    PR.kalem = PR.olustur("PrDugme", 590, 212, 0.5, 1, 20);
    PR.sekmeO = PR.olustur("PrSekme", 360, 425, 0.5, 0, 12);    // v25: perdenin üstünde

    PR.kareler = [];                               // v26: 30 yuva (PR.YID)
    for (let i = 0; i < PR.YN; i++) {
      const r = Math.floor(i / 5), c = i % 5;
      const o = PR.olustur("PrPul", PR.GX[c], PR.GY[r], 0.5, i, 9);
      o.__i = i; o.__gy = PR.GY[r]; PR.kareler.push(o);
    }
    PR.secA = PR.olustur("PrSecim", 0, 0, 0.5, 0, 10);
    PR.secY = PR.olustur("PrSecim", 0, 0, 0.5, 1, 10);
    PR.pkay = 0;
    { const sr = Math.floor(PR.yuvaNo(PR.ana) / 5); if (sr >= 5) PR.pkay = PR.PKMAX; }
    PR.yuvaA = PR.olustur("PrYuva", 220, PR.YUVA_Y, 0.5, 0, 10);
    PR.yuvaY = PR.olustur("PrYuva", 500, PR.YUVA_Y, 0.5, 3, 10);

    PR.avNo = Math.round(PR.oku("avatar", 0)); if (!(PR.avNo >= 0 && PR.avNo <= 9)) PR.avNo = 0;   // v21: 10 karakter
    PR.avatar = PR.olustur("PrAvatar", 165, 270, 0.485, PR.avNo, 12);
    PR.rozet = PR.olustur("PrRutbe", 225, 322, 0.13125, PR.rutbe(PR.gal[4]), 14);
    PR.anaKart = PR.olustur("PrBuyuk", 146, PR.YUVA_Y, 0.32, PR.ana, 12);
    PR.yedekKart = PR.olustur("PrBuyuk", 426, PR.YUVA_Y, 0.32, PR.yedek, 12);

    PR.tAd = PR.yazi(270, 212, 30, PR.LACI, "sol");
    PR.tTop = PR.yazi(314, 270, 21, PR.LACI, "sol");          // v31
    PR.tYildiz = PR.yazi(508, 270, 21, PR.LACI, "sol");
    PR.tMod = PR.MOD.map(p => PR.yazi(p[0], p[1], 16, PR.LACI));
    PR.tAna = PR.yazi(202, PR.YUVA_Y + 16, 20, PR.LACI, "sol");
    PR.tYedek = PR.yazi(482, PR.YUVA_Y + 16, 20, PR.LACI, "sol");
    PR.tSon = PR.yazi(360, PR.SERIT, 16, PR.KAHVE);
    PR.tIpucu = PR.yazi(360, 622, 15, PR.GRI);
    // ZEMİNLER sekmesi
    PR.zkare = [];
    for (let i = 0; i < PR.ZN; i++) {
      const r = Math.floor(i / 4), c = i % 4;
      const o = PR.olustur("PrZemKare", PR.SUT[c], PR.SAT[r], 0.5, i * 3, 10);
      o.__i = i; PR.zkare.push(o);
    }
    // v25: kaydırma perdeleri (profil zemininin aynı parçaları; listenin görünen aralık dışını örter)
    PR.perde = [0, 1].map(k => {
      const o = runtimeScene.createObject("PrPerde");
      if (o) { o.setScale(0.5); o.setAnimationFrame(k); o.pauseAnimation(); o.setZOrder(11); o.setPosition(0, k === 0 ? 380 : PR.V1); }
      return o;
    });
    PR.kay = 0; PR.hiz = 0; PR.surukle = null;                 // kaydırma miktarı, hız, sürükleme durumu
    if (Math.floor(PR.zemin / 4) === 3) PR.kay = PR.KMAX;      // seçili zemin son sıradaysa liste aşağıda açılsın
    PR.renk = PR.olustur("PrRenk", 360, PR.SERIT, 0.5, undefined, 13);
    PR.nokta = PR.olustur("PrNokta", 0, 0, 0.5, undefined, 14);
    PR.kar = PR.olustur("PrKarartma", 360, 640, 1, undefined, 40);
    if (PR.kar) { PR.kar.setScale(80); PR.yerlestir(PR.kar); }
    PR.pencereO = PR.olustur("PrPencere", 360, 640, 0.5, 0, 41);
    PR.pAl = PR.olustur("PrPDugme", 252, 775, 0.5, 0, 42);
    PR.pVaz = PR.olustur("PrPDugme", 468, 775, 0.5, 2, 42);
    PR.tPen = PR.yazi(360, 708, 17, PR.KAHVE); PR.tPen.setZOrder(43);
    // RÜTBE sekmesi
    const rr = PR.rutbe(PR.gal[4]);
    PR.rBuyuk = PR.olustur("PrRutbe", 360, 590, 0.3125, rr, 12);
    PR.rSira = [];
    for (let i = 0; i < 7; i++) {
      const o = PR.olustur("PrRutbe", 360 + (i - 3) * 84, i === rr ? 977 : 985, i === rr ? 0.1640625 : 0.121875, i, 12);
      if (o) { o.setOpacity(i === rr ? 255 : 85); PR.rSira.push(o); }
    }
    PR.rIz = PR.olustur("PrCubuk", 0, 0, 1, undefined, 11);
    PR.rDol = PR.olustur("PrCubuk", 0, 0, 1, undefined, 12);
    if (PR.rIz) PR.rIz.setColor("230;226;216");
    if (PR.rDol) PR.rDol.setColor("250;196;50");
    PR.tRAd = PR.yazi(360, 745, 28, PR.LACI);
    PR.tRGal = PR.yazi(360, 790, 16, PR.GRI);
    PR.tRSon = PR.yazi(360, 878, 15, PR.KAHVE);
    PR.tRAdlar = []; PR.tREsik = [];
    for (let i = 0; i < 7; i++) {
      PR.tRAdlar.push(PR.yazi(360 + (i - 3) * 84, 1058, i === rr ? 13 : 11, i === rr ? PR.LACI : "160;164;178"));
      PR.tREsik.push(PR.yazi(360 + (i - 3) * 84, 1084, 11, "160;164;178"));
    }
    PR.rutbeObj = [PR.rBuyuk, PR.rIz, PR.rDol, PR.tRAd, PR.tRGal, PR.tRSon].concat(PR.rSira, PR.tRAdlar, PR.tREsik).filter(Boolean);
    // AVATAR SEÇ penceresi
    // v21: 10 karakter, 4-3-3 dizilim (ölçek 0.33)
    PR.AVYER = [[184.5, 582], [301.5, 582], [418.5, 582], [535.5, 582], [240, 704], [360, 704], [480, 704], [240, 826], [360, 826], [480, 826]];
    PR.avAcik = false;
    PR.avKar = PR.olustur("PrKarartma", 360, 640, 1, undefined, 50);
    if (PR.avKar) { PR.avKar.setScale(80); PR.yerlestir(PR.avKar); }
    PR.avPen = PR.olustur("PrAvPencere", 360, 690, 0.5, undefined, 51);
    PR.avKare = PR.AVYER.map((p, i) => { const o = PR.olustur("PrAvatar", p[0], p[1], 0.33, i, 52); if (o) o.__i = i; return o; }).filter(Boolean);
    PR.avSec = PR.olustur("PrAvSecim", 0, 0, 0.33, undefined, 53);
    // RENGİNİ SEÇ penceresi (DÜZ RENK yuvasına dokununca)
    PR.renkAcik = false;
    PR.rpKar = PR.olustur("PrKarartma", 360, 640, 1, undefined, 50);
    if (PR.rpKar) { PR.rpKar.setScale(80); PR.yerlestir(PR.rpKar); }
    PR.rpPen = PR.olustur("PrRenkPen", PR.RPX, PR.RPY, 0.5, undefined, 51);
    PR.rpSec = PR.olustur("PrRenkSec", 0, 0, 0.5, undefined, 52);
    PR.kilit = Date.now() + 300;
    if (PR.iadeMesaj) { PR.mesajVer("Kalkan pulların için " + PR.iadeMesaj + " yıldız iade edildi"); PR.mesajSon = Date.now() + 5000; PR.iadeMesaj = 0; }
    PR.ciz();
  };

  // ---------- görüntüyü güncelle
  PR.ciz = function () {
    for (const o of PR.kareler) PR.kareYap(o, (o.__i === 0 || PR.acik(PR.YID[o.__i])) ? o.__i : o.__i + PR.YN);
    const a = PR.kareler[PR.yuvaNo(PR.ana)], y = PR.kareler[PR.yuvaNo(PR.yedek)];
    PR.secA.__o = a; PR.secY.__o = y; PR.secY.__b = a === y ? 0.55 : 0.5;
    PR.secA.__cx = a.__cx; PR.secA.__cy = a.__cy; PR.secA.setScale(0.5); PR.yerlestir(PR.secA);
    PR.secY.__cx = y.__cx; PR.secY.__cy = y.__cy; PR.secY.setScale(PR.secY.__b); PR.yerlestir(PR.secY);   // ikisi de düz renkse yedek çerçevesi biraz büyük
    PR.kareYap(PR.avatar, PR.avNo); PR.kareYap(PR.anaKart, PR.ana); PR.kareYap(PR.yedekKart, PR.yedek);
    PR.kareYap(PR.yuvaA, PR.yuva === 0 ? 0 : 1);
    PR.kareYap(PR.yuvaY, PR.yuva === 1 ? 2 : 3);
    // sekmeler
    const pul = PR.sekme === 0;
    PR.kareYap(PR.sekmeO, PR.sekme);
    for (const o of PR.kareler.concat([PR.secA, PR.secY, PR.yuvaA, PR.yuvaY, PR.anaKart, PR.yedekKart, PR.tAna, PR.tYedek, PR.tIpucu])) if (o) o.hide(!pul);
    for (const o of PR.rutbeObj || []) o.hide(PR.sekme !== 2);
    (PR.perde || []).forEach((o, k) => { if (o) o.hide(!(PR.sekme === 1 || (PR.sekme === 0 && k === 1))); });   // v26: pul listesinde alt perde
    for (const o of PR.zkare) {
      o.hide(PR.sekme !== 1);
      const i = o.__i, durum = i === PR.zemin ? 0 : ((PR.zSahip & (1 << i)) ? 1 : 2);
      PR.kareYap(o, i * 3 + durum);
    }
    const renkGoster = PR.sekme === 1 && PR.zemin === 0 && Date.now() >= PR.mesajSon;
    if (PR.renk) PR.renk.hide(!renkGoster);
    if (PR.nokta) {
      PR.nokta.hide(!renkGoster);
      PR.nokta.__cx = 360 + (PR.duzRenk - 2.5) * 64; PR.nokta.__cy = PR.SERIT; PR.yerlestir(PR.nokta);
    }
    if (PR.tSon) PR.tSon.hide(renkGoster);
    for (const o of [PR.avKar, PR.avPen, PR.avSec].concat(PR.avKare || [])) if (o) o.hide(!PR.avAcik);
    for (const o of [PR.rpKar, PR.rpPen]) if (o) o.hide(!PR.renkAcik);
    if (PR.rpSec) {
      const p = PR.yuva === 0 ? PR.ana : PR.yedek;
      PR.rpSec.hide(!PR.renkAcik || p > 7);
      if (p <= 7) { PR.rpSec.__cx = PR.RPX + PR.RYER[p][0]; PR.rpSec.__cy = PR.RPY + PR.RYER[p][1]; PR.yerlestir(PR.rpSec); }
    }
    if (PR.avSec && PR.avAcik) { PR.avSec.__cx = PR.AVYER[PR.avNo][0]; PR.avSec.__cy = PR.AVYER[PR.avNo][1]; PR.yerlestir(PR.avSec); }
    const acik = PR.pen >= 0;
    for (const o of [PR.kar, PR.pencereO, PR.pAl, PR.pVaz, PR.tPen]) if (o) o.hide(!acik);
    if (acik) {
      PR.kareYap(PR.pencereO, PR.pen >= 100 ? PR.pen - 100 + 8 : PR.pen);   // v26: 0–15 zemin, 16–52 pul
      PR.kareYap(PR.pAl, PR.yildiz >= PR.fiyat(PR.pen) ? 0 : 1);
      // v18: zemin pencereleri daha uzun (büyük önizleme) → yeniden ortala, düğmeleri ve yazıyı aşağı al
      const zem = PR.pen < 100;
      PR.yerlestir(PR.pencereO);
      if (PR.pAl) { PR.pAl.__cy = zem ? 865 : 775; PR.yerlestir(PR.pAl); }
      if (PR.pVaz) { PR.pVaz.__cy = zem ? 865 : 775; PR.yerlestir(PR.pVaz); }
      if (PR.tPen) PR.tPen.__y = zem ? 798 : 708;
    }
  };
  PR.gorev = function (e) { try { window.MatrancGorev && window.MatrancGorev.olay(e, PR.sahne); } catch (x) {} };   // v29
  PR.zeminSec = function (i) {
    if (i !== PR.zemin) PR.gorev({ t: "zeminSec", id: i });
    PR.zemin = i; PR.yaz("tema3", i); PR.zipla(PR.zkare[i]); PR.ciz();
  };
  PR.satinAl = function () {
    if (PR.pen >= 100) {                                        // PUL satın alma
      const j = PR.pen - 100, fp = PR.PFIYAT[j];
      if (PR.yildiz < fp) return;
      PR.yildiz -= fp; PR.yaz("yildiz", PR.yildiz);
      if (j >= 32) { PR.pSahip3 |= (1 << (j - 32)); PR.yaz("pulSahip3", PR.pSahip3); }
      else { PR.pSahip |= (1 << (j - 8)); PR.yaz("pulSahip2", PR.pSahip); }
      PR.gorev({ t: "satin", tur: "pul", id: j });
      PR.pen = -1; PR.pulSec(j);
      PR.ses("oyun_kazanma.wav", 60);
      PR.mesajVer(PR.AD[j] + " pulu senin!");
      return;
    }
    const i = PR.pen, f = PR.ZFIYAT[i];
    if (PR.yildiz < f) return;
    PR.yildiz -= f; PR.yaz("yildiz", PR.yildiz);
    PR.zSahip |= (1 << i); PR.yaz("temaSahip3", PR.zSahip);
    PR.gorev({ t: "satin", tur: "zemin", id: i });
    PR.pen = -1; PR.zeminSec(i);
    PR.ses("oyun_kazanma.wav", 60);
    PR.mesajVer(PR.ZAD[i] + " zemini senin!");
  };

  PR.sonrakiMetin = function () {
    for (let s = 1; s < PR.YN; s++) if (!PR.acik(PR.YID[s])) return "Kilitli pula dokun, yıldızınla satın al";
    return "Bütün pullar senin!";
  };
  PR.mesajVer = function (m) { PR.mesaj = m; PR.mesajSon = Date.now() + 2200; };

  // ---------- pul seç (seçili yuvaya)
  PR.pulSec = function (i) {
    if (!PR.acik(i)) { PR.zipla(PR.kareler[PR.yuvaNo(i)]); PR.pen = 100 + i; PR.ciz(); return; }   // satın alma penceresi
    if ((PR.yuva === 0 ? PR.ana : PR.yedek) !== i) PR.gorev({ t: "pulSec", yuva: PR.yuva, id: i });   // v29
    if (PR.yuva === 0) {
      if (i === PR.yedek) PR.yedek = PR.ana;
      PR.ana = i; PR.zipla(PR.anaKart);
    } else {
      if (i === PR.ana) PR.ana = PR.yedek;
      PR.yedek = i; PR.zipla(PR.yedekKart);
    }
    PR.zipla(PR.kareler[PR.yuvaNo(i)]);
    PR.yaz("anaPul2", PR.ana); PR.yaz("yedekPul2", PR.yedek);
    try { PR.gv("anaPul").setNumber(PR.ana); PR.gv("yedekPul").setNumber(PR.yedek); } catch (e) {}
    PR.ciz();
  };

  // ---------- ad değiştirme penceresi (HTML)
  PR.adPenceresi = function () {
    if (PR.pencere) return;
    try { window.MatrancCevrimici.pulStil(); } catch (e) {}   // v28: pul tarzı düğmeler
    const d = document.createElement("div");
    d.style.cssText = "position:fixed;inset:0;background:rgba(20,30,60,.45);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:Poppins,Arial,sans-serif";
    d.innerHTML =
      '<div style="background:#FFFBF2;border:4px solid #fff;border-radius:22px;padding:22px 20px;width:78%;max-width:360px;box-shadow:0 10px 30px rgba(0,0,0,.3);text-align:center">' +
      '<div style="color:#2B3452;font-weight:700;font-size:20px;margin-bottom:12px">KULLANICI ADI</div>' +
      '<input id="prAd" maxlength="12" style="width:90%;font-size:20px;padding:10px;border:2px solid #E3D6BE;border-radius:12px;text-align:center;color:#2B3452;font-weight:700;outline:none">' +
      '<div style="display:flex;gap:8px;align-items:center;text-align:left;background:#EAF1FB;border-radius:12px;padding:8px 10px;margin:10px 0 0;font-size:13px;line-height:1.35;color:#3A4A75;font-weight:700">' +
      '<span style="font-size:18px">🔒</span><span>Gerçek adını ve soyadını yazma.<br>Kendine bir takma ad seç!</span></div>' +
      '<div id="prMsj" style="min-height:22px;color:#D9434C;font-size:14px;margin:8px 0"></div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
      '<button id="prVaz" class="mtr-pul g" style="flex:1;height:48px;font-size:16px"><span>VAZGEÇ</span></button>' +
      '<button id="prKay" class="mtr-pul y" style="flex:1;height:48px;font-size:16px"><span>KAYDET</span></button>' +
      '</div></div>';
    document.body.appendChild(d);
    PR.pencere = d;
    const inp = d.querySelector("#prAd"), msj = d.querySelector("#prMsj");
    inp.value = PR.gv("oyuncuAdi").getAsString();
    setTimeout(() => inp.focus(), 50);
    d.querySelector("#prVaz").onclick = () => PR.pencereKapat();
    d.querySelector("#prKay").onclick = () => {
      const yeni = inp.value.trim();
      if (!window.MatrancCevrimici || !window.MatrancCevrimici.adDegistir) { msj.textContent = "Bağlantı yok, sonra tekrar dene."; return; }
      msj.style.color = "#8A93A8"; msj.textContent = "Kaydediliyor…";
      PR.gv("adSonuc").setString("");
      window.MatrancCevrimici.adDegistir(yeni);
      const t0 = Date.now();
      const bak = setInterval(() => {
        const s = PR.gv("adSonuc").getAsString();
        if (!s && Date.now() - t0 < 10000) return;
        clearInterval(bak);
        PR.gv("adSonuc").setString("");
        msj.style.color = "#D9434C";
        if (s === "ok") { PR.pencereKapat(); return; }
        msj.textContent = ({
          gecersiz: "3-12 harf ya da rakam olmalı.",
          uygunsuz: "Bu ad kullanılamaz.",
          alinmis: "Bu ad alınmış, başka bir ad dene.",
          hata: "Bağlantı hatası, tekrar dene."
        })[s] || "Bağlantı hatası, tekrar dene.";
      }, 200);
    };
  };
  PR.pencereKapat = function () {
    if (PR.pencere) { PR.pencere.remove(); PR.pencere = null; PR.kilit = Date.now() + 300; }
  };

  // ---------- her kare
  PR.kare = function (runtimeScene) {
    if (!PR.sahne || PR.sahne !== runtimeScene) return;
    const zt = runtimeScene.getTimeManager().getTimeFromStart();
    if (PR._zt === zt) return;
    PR._zt = zt;
    if (PR.cikisAni && Date.now() - PR.cikisAni >= 150) {
      PR.cikisAni = 0;
      gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
      return;
    }
    // geri düğmesi: menüdeki profil düğmesiyle aynı yerde (her telefonda sol üst)
    const L = runtimeScene.getLayer("");
    PR.geri.__cx = 128;   // v28: PROFİL başlığının hemen solunda
    PR.geri.__cy = 93;
    // yazılar
    PR.metin(PR.tAd, PR.gv("oyuncuAdi").getAsString() || "…");
    PR.metinSig(PR.tTop, PR.toplam() + " galibiyet", 146);   // v31: yıldız simgesine (x 466) değmesin
    PR.metinSig(PR.tYildiz, PR.yildiz + " yıldız", 136);       // v31: kart kenarına taşmasın
    PR.tMod.forEach((t, i) => PR.metin(t, String(PR.gal[i])));
    PR.metin(PR.tAna, PR.AD[PR.ana]);
    PR.metin(PR.tYedek, PR.AD[PR.yedek]);
    const altYazi = PR.sekme === 0 ? PR.sonrakiMetin() : PR.sekme === 1 ? "Kilitli zemine dokun, yıldızınla satın al" : "Rütbe, çevrimiçi galibiyetlerle yükselir";
    if (PR.sekme === 2) {                                   // RÜTBE sekmesi yazıları + ilerleme çubuğu
      const n = PR.gal[4], r = PR.rutbe(n);
      PR.metin(PR.tRAd, PR.RUTBE[r]);
      PR.metin(PR.tRGal, n + " çevrimiçi galibiyet");
      PR.metin(PR.tRSon, r < 6 ? "Sonraki: " + PR.RUTBE[r + 1] + "  (" + (PR.RESIK[r + 1] - n) + " galibiyet)" : "En yüksek rütbedesin!");
      for (let i = 0; i < 7; i++) { PR.metin(PR.tRAdlar[i], PR.RUTBE[i].replace("BÜYÜK ", "B. ")); PR.metin(PR.tREsik[i], String(PR.RESIK[i])); }
      const oran = r < 6 ? (n - PR.RESIK[r]) / (PR.RESIK[r + 1] - PR.RESIK[r]) : 1;
      if (PR.rIz) { PR.rIz.setWidth(420); PR.rIz.setHeight(18); PR.rIz.setPosition(150, 831); }
      if (PR.rDol) { PR.rDol.setWidth(Math.max(34, 420 * oran)); PR.rDol.setHeight(18); PR.rDol.setPosition(150, 831); }
    }
    PR.metin(PR.tSon, Date.now() < PR.mesajSon ? PR.mesaj : altYazi);
    const rg = PR.sekme === 1 && PR.zemin === 0 && Date.now() >= PR.mesajSon;
    if (PR.renk && PR.renk.isHidden() === rg) PR.ciz();
    PR.metin(PR.tIpucu, "Yuvaya dokun, sonra aşağıdan bir pul seç");
    if (PR.tIpucu) PR.tIpucu.hide(PR.sekme !== 0);
    if (PR.pen >= 0) {
      const f = PR.fiyat(PR.pen);
      PR.metin(PR.tPen, PR.yildiz >= f ? "Sende " + PR.yildiz + " yıldız var" : (f - PR.yildiz) + " yıldız daha gerekli");
    }
    // v25: ZEMİNLER listesi kaydırma (parmakla sürükle, bırakınca hafifçe kayarak durur)
    let surukledi = false;
    if (PR.sekme === 1 && PR.pen < 0 && !PR.pencere) {
      const IN = gdjs.evtTools.input;
      const cx = IN.getCursorX(runtimeScene, "", 0), cy = IN.getCursorY(runtimeScene, "", 0);
      const basili = IN.isMouseButtonPressed(runtimeScene, "Left");
      if (basili) {
        if (!PR.surukle) { if (cy > PR.V0 && cy < PR.V1) PR.surukle = { y0: cy, k0: PR.kay, son: cy, oynadi: false }; }
        else {
          const dy = cy - PR.surukle.y0;
          if (Math.abs(dy) > 12) PR.surukle.oynadi = true;
          if (PR.surukle.oynadi) {
            PR.hiz = PR.surukle.son - cy; PR.surukle.son = cy;
            PR.kay = Math.max(0, Math.min(PR.KMAX, PR.surukle.k0 - dy));
          }
        }
      } else if (PR.surukle) {
        surukledi = PR.surukle.oynadi; PR.surukle = null;
        if (!surukledi) PR.hiz = 0;
      } else if (Math.abs(PR.hiz) > 0.3) {
        PR.kay = Math.max(0, Math.min(PR.KMAX, PR.kay + PR.hiz)); PR.hiz *= 0.9;
        if (PR.kay <= 0 || PR.kay >= PR.KMAX) PR.hiz = 0;
      } else PR.hiz = 0;
    } else if (PR.sekme === 0 && PR.pen < 0 && !PR.pencere && !PR.renkAcik && !PR.avAcik) {   // v26: PUL listesi kaydırma
      const IN = gdjs.evtTools.input;
      const cx = IN.getCursorX(runtimeScene, "", 0), cy = IN.getCursorY(runtimeScene, "", 0);
      const basili = IN.isMouseButtonPressed(runtimeScene, "Left");
      if (basili) {
        if (!PR.surukle) { if (cy > PR.PV0 && cy < PR.V1) PR.surukle = { y0: cy, k0: PR.pkay, son: cy, oynadi: false }; }
        else {
          const dy = cy - PR.surukle.y0;
          if (Math.abs(dy) > 12) PR.surukle.oynadi = true;
          if (PR.surukle.oynadi) { PR.hiz = PR.surukle.son - cy; PR.surukle.son = cy; PR.pkay = Math.max(0, Math.min(PR.PKMAX, PR.surukle.k0 - dy)); }
        }
      } else if (PR.surukle) {
        surukledi = PR.surukle.oynadi; PR.surukle = null;
        if (!surukledi) PR.hiz = 0;
      } else if (Math.abs(PR.hiz) > 0.3) {
        PR.pkay = Math.max(0, Math.min(PR.PKMAX, PR.pkay + PR.hiz)); PR.hiz *= 0.9;
        if (PR.pkay <= 0 || PR.pkay >= PR.PKMAX) PR.hiz = 0;
      } else PR.hiz = 0;
    } else { PR.surukle = null; PR.hiz = 0; }
    for (const o of PR.zkare) o.__cy = PR.SAT[Math.floor(o.__i / 4)] - PR.kay;
    // v26: pul kareleri kayar; üst kenara yaklaşınca solar (üstteki ANA/YEDEK yuvalarının altına girmez)
    const solma = (cy) => Math.max(0, Math.min(1, (cy - 58 - (PR.PV0 - 50)) / 50));
    for (const o of PR.kareler) { o.__cy = o.__gy - PR.pkay; if (PR.sekme === 0) o.setOpacity(255 * solma(o.__cy)); }
    for (const sc of [PR.secA, PR.secY]) if (sc && sc.__o) { sc.__cx = sc.__o.__cx; sc.__cy = sc.__o.__cy; PR.yerlestir(sc); if (PR.sekme === 0) sc.setOpacity(255 * solma(sc.__cy)); }
    // zıplama + yerleşim
    const hepsi = PR.kareler.concat(PR.zkare, PR.avKare || [], [PR.avatar, PR.anaKart, PR.yedekKart, PR.geri, PR.kalem, PR.rozet].filter(Boolean));
    for (const o of hepsi) {
      const taban = o.__olcek;
      if (o.__zip > 0) {
        o.__zip = Math.max(0, o.__zip - 0.08);
        o.setScale(taban * (1 - 0.12 * Math.sin(o.__zip * Math.PI)));
      } else if (o.getScaleX() !== taban) o.setScale(taban);
      PR.yerlestir(o);
    }
    // dokunma
    if (PR.pencere || (PR.kilit && Date.now() < PR.kilit)) return;
    if (!gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left")) return;
    if (surukledi) return;                       // v25: kaydırma bir dokunuş sayılmaz
    const x = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0);
    const y = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0);
    if (PR.avAcik) {                            // avatar penceresi açık
      for (const o of PR.avKare) {
        if (!PR.icinde(o, x, y)) continue;
        PR.ses(); PR.avNo = o.__i; PR.yaz("avatar", PR.avNo); PR.zipla(PR.avatar);
        try { const M = window.MatrancCevrimici; if (M && M.uid) firebase.firestore().collection("oyuncular").doc(M.uid).update({ avatar: PR.avNo }).catch(() => {}); } catch (e) {}
        PR.avAcik = false; PR.ciz(); return;
      }
      if (!PR.icinde(PR.avPen, x, y)) { PR.ses(); PR.avAcik = false; PR.ciz(); }
      return;
    }
    if (PR.renkAcik) {                          // RENGİNİ SEÇ penceresi açık
      for (let i = 0; i < 8; i++) {
        if (Math.abs(x - (PR.RPX + PR.RYER[i][0])) < 52 && Math.abs(y - (PR.RPY + PR.RYER[i][1]) - 10) < 58) { PR.ses(); PR.renkAcik = false; PR.pulSec(i); return; }
      }
      if (!PR.icinde(PR.rpPen, x, y)) { PR.ses(); PR.renkAcik = false; PR.ciz(); }
      return;
    }
    if (PR.pen >= 0) {                          // satın alma penceresi açık
      if (PR.icinde(PR.pAl, x, y)) { if (PR.yildiz >= PR.fiyat(PR.pen)) PR.satinAl(); else PR.ses(); }
      else if (PR.icinde(PR.pVaz, x, y) || !PR.icinde(PR.pencereO, x, y)) { PR.ses(); PR.pen = -1; PR.ciz(); }
      return;
    }
    if (PR.icinde(PR.geri, x, y)) {
      if (PR.cikiyor) return;                    // çift dokunmayı yok say
      PR.cikiyor = true;
      PR.pencereKapat();
      PR.ses();
      PR.cikisAni = Date.now();                  // ses duyulsun diye menüye 0,15 sn sonra dön (PR.kare içinde)
      return;
    }
    if (PR.icinde(PR.kalem, x, y) || PR.icinde(PR.tAd, x, y)) { PR.ses(); PR.zipla(PR.kalem); PR.adPenceresi(); return; }
    if (PR.rozet && PR.icinde(PR.rozet, x, y)) { PR.ses(); PR.zipla(PR.rozet); PR.sekme = 2; PR.ciz(); return; }
    if (PR.icinde(PR.avatar, x, y)) { PR.ses(); PR.zipla(PR.avatar); PR.avAcik = true; PR.ciz(); return; }
    if (PR.icinde(PR.sekmeO, x, y)) {
      PR.ses();
      PR.sekme = Math.max(0, Math.min(2, Math.floor((x - PR.sekmeO.getX()) / (PR.sekmeO.getWidth() / 3)))); PR.ciz(); return;
    }
    if (PR.sekme === 2) return;
    if (PR.sekme === 1) {
      if (PR.renk && !PR.renk.isHidden() && Math.abs(y - PR.SERIT) < 30 && Math.abs(x - 360) < 192) {   // DÜZ RENK düğmeleri (6)
        const j = Math.round((x - 360) / 64 + 2.5);
        if (j >= 0 && j < PR.DUZN) { PR.ses(); PR.duzRenk = j; PR.yaz("duzRenk", j); PR.zipla(PR.zkare[0]); PR.ciz(); }
        return;
      }
      if (y <= PR.V0 || y >= PR.V1) return;     // v25: perdenin altındaki karolar dokunulmaz
      for (const o of PR.zkare) {
        if (!PR.icinde(o, x, y)) continue;
        const i = o.__i;
        PR.ses();
        if (PR.zSahip & (1 << i)) PR.zeminSec(i);
        else { PR.pen = i; PR.ciz(); }
        return;
      }
      return;
    }
    if (PR.icinde(PR.yuvaA, x, y)) { PR.ses(); PR.yuva = 0; PR.zipla(PR.anaKart); PR.ciz(); return; }
    if (PR.icinde(PR.yuvaY, x, y)) { PR.ses(); PR.yuva = 1; PR.zipla(PR.yedekKart); PR.ciz(); return; }
    if (y <= PR.PV0 || y >= PR.V1) return;     // v26: listenin görünen alanı dışı dokunulmaz
    for (const o of PR.kareler) {
      if (!PR.icinde(o, x, y) || o.getOpacity() < 128) continue;
      PR.ses();
      if (o.__i === 0) { PR.zipla(o); PR.renkAcik = true; PR.ciz(); return; }   // DÜZ RENK → renk seç
      PR.pulSec(PR.YID[o.__i]); return;
    }
  };

  window.MatrancProfil = PR;
})();
window.MatrancProfil.kur(runtimeScene);
}

};
gdjs.ProfilCode.eventsList0 = function(runtimeScene) {

{


gdjs.ProfilCode.userFunc0xf3f778(runtimeScene);

}


};

gdjs.ProfilCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ProfilCode.GDPrZeminObjects1.length = 0;
gdjs.ProfilCode.GDPrSecimObjects1.length = 0;
gdjs.ProfilCode.GDPrBuyukObjects1.length = 0;
gdjs.ProfilCode.GDPrSekmeObjects1.length = 0;
gdjs.ProfilCode.GDPrDugmeObjects1.length = 0;
gdjs.ProfilCode.GDPrYaziObjects1.length = 0;
gdjs.ProfilCode.GDPrPulObjects1.length = 0;
gdjs.ProfilCode.GDPrYuvaObjects1.length = 0;
gdjs.ProfilCode.GDPrZemKareObjects1.length = 0;
gdjs.ProfilCode.GDPrNoktaObjects1.length = 0;
gdjs.ProfilCode.GDPrKarartmaObjects1.length = 0;
gdjs.ProfilCode.GDPrPencereObjects1.length = 0;
gdjs.ProfilCode.GDPrPDugmeObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkObjects1.length = 0;
gdjs.ProfilCode.GDPrRutbeObjects1.length = 0;
gdjs.ProfilCode.GDPrCubukObjects1.length = 0;
gdjs.ProfilCode.GDPrAvatarObjects1.length = 0;
gdjs.ProfilCode.GDPrAvPencereObjects1.length = 0;
gdjs.ProfilCode.GDPrAvSecimObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkPenObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkSecObjects1.length = 0;
gdjs.ProfilCode.GDPrPerdeObjects1.length = 0;
gdjs.ProfilCode.GDPanelAvatarObjects1.length = 0;
gdjs.ProfilCode.GDRutbeRozetObjects1.length = 0;

gdjs.ProfilCode.eventsList0(runtimeScene);
gdjs.ProfilCode.GDPrZeminObjects1.length = 0;
gdjs.ProfilCode.GDPrSecimObjects1.length = 0;
gdjs.ProfilCode.GDPrBuyukObjects1.length = 0;
gdjs.ProfilCode.GDPrSekmeObjects1.length = 0;
gdjs.ProfilCode.GDPrDugmeObjects1.length = 0;
gdjs.ProfilCode.GDPrYaziObjects1.length = 0;
gdjs.ProfilCode.GDPrPulObjects1.length = 0;
gdjs.ProfilCode.GDPrYuvaObjects1.length = 0;
gdjs.ProfilCode.GDPrZemKareObjects1.length = 0;
gdjs.ProfilCode.GDPrNoktaObjects1.length = 0;
gdjs.ProfilCode.GDPrKarartmaObjects1.length = 0;
gdjs.ProfilCode.GDPrPencereObjects1.length = 0;
gdjs.ProfilCode.GDPrPDugmeObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkObjects1.length = 0;
gdjs.ProfilCode.GDPrRutbeObjects1.length = 0;
gdjs.ProfilCode.GDPrCubukObjects1.length = 0;
gdjs.ProfilCode.GDPrAvatarObjects1.length = 0;
gdjs.ProfilCode.GDPrAvPencereObjects1.length = 0;
gdjs.ProfilCode.GDPrAvSecimObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkPenObjects1.length = 0;
gdjs.ProfilCode.GDPrRenkSecObjects1.length = 0;
gdjs.ProfilCode.GDPrPerdeObjects1.length = 0;
gdjs.ProfilCode.GDPanelAvatarObjects1.length = 0;
gdjs.ProfilCode.GDRutbeRozetObjects1.length = 0;


return;

}

gdjs['ProfilCode'] = gdjs.ProfilCode;
