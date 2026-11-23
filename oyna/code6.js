gdjs.AyarlarCode = {};
gdjs.AyarlarCode.localVariables = [];
gdjs.AyarlarCode.idToCallbackMap = new Map();
gdjs.AyarlarCode.GDAyZeminObjects1= [];
gdjs.AyarlarCode.GDAySegmentObjects1= [];
gdjs.AyarlarCode.GDAyAnahtarObjects1= [];
gdjs.AyarlarCode.GDAyGeriObjects1= [];
gdjs.AyarlarCode.GDAyTamamObjects1= [];
gdjs.AyarlarCode.GDAyHesapObjects1= [];
gdjs.AyarlarCode.GDAyHesapPencereObjects1= [];
gdjs.AyarlarCode.GDAyKarartObjects1= [];
gdjs.AyarlarCode.GDAyAdYaziObjects1= [];
gdjs.AyarlarCode.GDAyBilgiObjects1= [];
gdjs.AyarlarCode.GDAyNasilObjects1= [];
gdjs.AyarlarCode.GDPanelAvatarObjects1= [];
gdjs.AyarlarCode.GDRutbeRozetObjects1= [];


gdjs.AyarlarCode.userFunc0x1474f90 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Ayarlar sahnesi v21 (AKILLI TAHTA MODU: AyZemin animasyon 2 — alt kart 'TELEFONUNDA DA OYNA!' karekodlu; müzik/ses/titreşim anahtarları yok) · v20 (AKILLI TAHTA MODU: HESAP kartı ve oyuncu adı yazısı yok) · v19 (seçim düğmeleri ve anahtarlar %16 küçük: ölçek 0.42) · v18 (geri ve ⓘ düğmeleri AYARLAR başlığının iki yanında, sabit: (128, 113) ve (592, 113)) · v17 (v16'daki NASIL OYNANIR? düğmesi kaldırıldı — AyNasil nesnesi silinebilir; Nasıl Oynanır menüde) · v15 (hesap silinince telefonun bildirim adresi — bildirim/{uid} — ve maç maç galibiyet kayıtları — oyuncular/{uid}/galibiyetler — de silinir) · v14 (HESAP kartı 3 düğme: KODUM · GERİ YÜKLE · HESABI SİL — kurtarma kodu pencereleri çevrim içi kod v9.6'da; hesap silinince kurtarma kodu da silinir) · v13 (ARKA PLAN MÜZİĞİ anahtarı — kayıt muzikAcik, müzik kodu matranc_muzik_v1.js; SES kartı 3 satır; düzen 25 yukarı; zemin v13; genel ses hep 100) · v12 (OYUN kartında MAÇ SONU SORUSU: DEĞER | GENEL KÜLTÜR → kayıt soruTuru 0/1; AySegment kare 12–15; zemin v12; ses ve hesap kartı 120 aşağı) · v11 (geri ve ⓘ düğmeleri %15 büyük: ölçek 0.575; ikinci sıra üstten 180) · v9c (HAKKINDA: amaç cümlesi) · v9b (HAKKINDA'dan geliştirici adı kaldırıldı) · v9 (sağ üstte ⓘ → HAKKINDA penceresi) · v8b (HESAP kartı yerine oturdu) · v8 (HESABIMI SİL) · v7 (hamle süresi 45 sn)
// "Ayarlar" sahnesinde KOŞULSUZ, TEK bir JavaScript etkinliği olarak koyun. Başka etkinlik gerekmez.
// Nesneler: AyZemin, AySegment (12 kare), AyAnahtar (2 kare), AyGeri,
//           v9: AyBilgi (1 kare, ⓘ düğmesi)
//           v8: AyHesap (1 kare), AyHesapPencere (4 kare: 0 onay, 1 siliniyor, 2 hata, 3 silindi), AyKarart (1 kare), AyAdYazi (Metin).
// Hesap silinince: sunucudan oyuncular/{uid}, adlar/{ad}, bildirim/{uid}, kişinin davetleri ve giriş kimliği silinir;
// telefondaki çevrim içi galibiyet sayısı, arkadaş ve son rakip listeleri sıfırlanır. Yıldız, pul ve zeminler KALIR.
if (window.MatrancAyar && window.MatrancAyar.sahne === runtimeScene) {
  window.MatrancAyar.kare(runtimeScene);
} else {
(function () {
  const AY = {};
  AY.DEPO = "matranc";
  AY.SURE = [0, 45, 90];          // SÜRESİZ / 45 SN / 90 SN  (v7: 60 → 45)
  AY.TUR = [1, 2, 3];

  AY.gv = function (ad) { return AY.sahne.getGame().getVariables().get(ad); };
  AY.oku = function (anahtar, varsayilan) {   // v12
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile(AY.DEPO, anahtar)) return varsayilan;
      const v = new gdjs.Variable(); s.readNumberFromJSONFile(AY.DEPO, anahtar, AY.sahne, v); return v.getAsNumber();
    } catch (e) { return varsayilan; }
  };
  AY.yaz = function (anahtar, deger) {
    try { gdjs.evtTools.storage.writeNumberInJSONFile(AY.DEPO, anahtar, deger); } catch (e) {}
  };
  AY.olustur = function (ad, cx, cy, z) {
    const o = AY.sahne.createObject(ad);
    if (!o) return null;
    o.setScale(0.5); o.setZOrder(z || 10);
    o.__cx = cx; o.__cy = cy;
    return o;
  };
  AY.kareYap = function (o, k) {
    if (!o) return;
    if (o.getAnimationFrame() !== k) o.setAnimationFrame(k);
    o.pauseAnimation();
    o.setPosition(o.__cx - o.getWidth() / 2, o.__cy - o.getHeight() / 2);
  };
  AY.icinde = function (o, x, y) {
    return o && x >= o.getX() && x <= o.getX() + o.getWidth() && y >= o.getY() && y <= o.getY() + o.getHeight();
  };
  AY.ses = function () {
    try { if (AY.gv("sesAcik").getAsNumber() === 1) gdjs.evtTools.sound.playSound(AY.sahne, "dugme.wav", false, 20, 1); } catch (e) {}
  };

  AY.kur = function (runtimeScene) {
    AY.sahne = runtimeScene;
    const L = runtimeScene.getLayer("");
    L.setCameraZoom(2); L.setCameraX(360); L.setCameraY(640);
    const zm = runtimeScene.createObject("AyZemin");
    if (zm) { zm.setScale(0.5); zm.setPosition(0, -360); zm.setZOrder(0); }
    if (zm && window.MatrancTahta) { try { zm.setAnimation(2); zm.pauseAnimation(); } catch (e) {} }   // v21: tahta zemini
    AY.seg = [];
    for (let g = 0; g < 2; g++) {
      for (let i = 0; i < 3; i++) {
        const s = AY.olustur("AySegment", 360 + (i - 1) * 176, g === 0 ? 372 : 512, 10);
        if (s) { s.__g = g; s.__i = i; AY.seg.push(s); }
      }
    }
    // v12: MAÇ SONU SORUSU (0 DEĞER, 1 GENEL KÜLTÜR) — geniş iki segment
    for (let i = 0; i < 2; i++) {
      const s = AY.olustur("AySegment", i === 0 ? 228 : 492, 652, 10);
      if (s) { s.__g = 2; s.__i = i; AY.seg.push(s); }
    }
    AY.anMuz = AY.olustur("AyAnahtar", 545, 840, 10);   // v13
    AY.anSes = AY.olustur("AyAnahtar", 545, 910, 10);
    AY.anTit = AY.olustur("AyAnahtar", 545, 980, 10);
    // v19: pul tarzı seçim düğmeleri ve anahtarlar biraz küçük
    AY.seg.concat([AY.anMuz, AY.anSes, AY.anTit]).forEach(o => { if (o) o.setScale(0.42); });
    if (window.MatrancTahta) {                          // v21: tahtada müzik/ses/titreşim anahtarı yok
      [AY.anMuz, AY.anSes, AY.anTit].forEach(o => { try { if (o) o.deleteFromScene(runtimeScene); } catch (e) {} });
      AY.anMuz = null; AY.anSes = null; AY.anTit = null;
    }
    AY.geri = AY.olustur("AyGeri", 71, 237, 20);
    if (AY.geri) AY.geri.setScale(0.575);   // v11: %15 büyük
    // ---- v8: HESAP kartı ----
    AY.hesap = AY.olustur("AyHesap", 360, 1165, 10);
    AY.kareYap(AY.hesap, 0);
    AY.adYazi = null;
    try { const t = runtimeScene.createObject("AyAdYazi"); if (t) { AY.adYazi = t; t.setZOrder(11); } } catch (e) {}
    if (window.MatrancTahta) {                          // v20: tahtada hesap yok
      try { if (AY.hesap) AY.hesap.deleteFromScene(runtimeScene); } catch (e) {}
      try { if (AY.adYazi) AY.adYazi.deleteFromScene(runtimeScene); } catch (e) {}
      AY.hesap = null; AY.adYazi = null;
    }
    AY.pen = null; AY.kar = null; AY.durum = -1;     // -1 kapalı, 0 onay, 1 siliniyor, 2 hata, 3 silindi
    AY.bilgi = AY.olustur("AyBilgi", 649, 237, 20);   // v9
    if (AY.bilgi) AY.bilgi.setScale(0.575);   // v11: %15 büyük
    if (AY.bilgi) AY.bilgi.hide(true);
    AY.hk = null;
    AY.sayac = 0;
    if (AY.geri) AY.geri.hide(true);   // yerine oturana kadar gizli (sekme olmasın)
    AY.kilit = Date.now() + 300;      // menüden gelen dokunuş hemen tetiklemesin
    AY.ciz();
  };

  AY.ciz = function () {
    if (AY.gv("sureSaniye").getAsNumber() === 60) { AY.gv("sureSaniye").setNumber(45); AY.yaz("sureSaniye", 45); }
    const sure = AY.gv("sureSaniye").getAsNumber();
    const tur = AY.gv("hedefTur").getAsNumber() || 2;
    const soru = AY.oku("soruTuru", 0) === 1 ? 1 : 0;
    for (const s of AY.seg) {
      const secili = s.__g === 0 ? AY.SURE[s.__i] === sure : s.__g === 1 ? AY.TUR[s.__i] === tur : s.__i === soru;
      AY.kareYap(s, s.__g * 6 + s.__i * 2 + (secili ? 1 : 0));   // g=2 → kare 12–15
    }
    AY.kareYap(AY.anSes, AY.gv("sesAcik").getAsNumber() === 1 ? 1 : 0);
    AY.kareYap(AY.anTit, AY.gv("titresimAcik").getAsNumber() === 1 ? 1 : 0);
    AY.kareYap(AY.anMuz, AY.oku("muzikAcik", 1) === 0 ? 0 : 1);   // v13
    // v13: genel ses hep 100; ses efektleri müzik kodundaki kancayla susturulur (müzik ayrı)
    try { gdjs.evtTools.sound.setGlobalVolume(AY.sahne, 100); } catch (e) {}
    AY.adCiz();
  };

  // ---- v9: HAKKINDA (HTML pencere) ----
  AY.GIZLILIK = "https://sites.google.com/view/matranc-gizlilik/ana-sayfa";
  AY.EPOSTA = "matrancdestek@gmail.com";
  AY.ac = function (url) {
    try { gdjs.evtTools.window.openURL(url, AY.sahne); } catch (e) { try { window.open(url, "_blank"); } catch (e2) {} }
  };
  AY.hakkinda = function () {
    if (AY.hk) return;
    let surum = "";
    try { surum = String(AY.sahne.getGame().getGameData().properties.version || ""); } catch (e) {}
    const d = document.createElement("div");
    d.style.cssText = "position:fixed;inset:0;background:rgba(20,30,60,.45);display:flex;align-items:center;justify-content:center;z-index:9999;font-family:Poppins,Arial,sans-serif";
    const sat = "font-size:13px;color:#6C7590;font-weight:700;margin:3px 0";
    const btn = "flex:1;padding:12px;border:none;border-radius:999px;font-weight:700;font-size:15px;font-family:inherit;cursor:pointer";
    d.innerHTML =
      '<div style="background:#FFFBF2;border:4px solid #fff;border-radius:22px;padding:20px 18px;width:80%;max-width:380px;box-shadow:0 10px 30px rgba(0,0,0,.3);text-align:center;color:#2B3452">' +
      '<div style="font-weight:700;font-size:20px;margin-bottom:10px">HAKKINDA</div>' +
      '<div style="font-weight:800;font-size:18px">MATRANÇ</div>' +
      '<div style="' + sat + '">Stratejik Çarpma Oyunu' + (surum ? ' · Sürüm ' + surum : '') + '</div>' +
      '<div style="font-size:13px;line-height:1.45;color:#3A4A75;font-weight:700;background:#F3EEE3;border-radius:12px;padding:9px 10px;margin:10px 0">' +
      'MATRANÇ, çarpım tablosunu ezberle değil düşünerek öğretmek ve her maçın sonunda doğru davranış üzerine birlikte düşünmek için hazırlandı.</div>' +
      '<div style="' + sat + '">Görüş ve önerilerin için:</div>' +
      '<div id="ayEp" style="' + sat + ';color:#2F6FD0;text-decoration:underline;cursor:pointer">' + AY.EPOSTA + '</div>' +
      '<div style="display:flex;margin-top:12px"><button id="ayGz" style="' + btn + ';background:#2F6FD0;color:#fff">GİZLİLİK POLİTİKASI</button></div>' +
      '<div style="display:flex;margin-top:10px"><button id="ayKp" style="' + btn + ';background:#E2E6EE;color:#2B3452">KAPAT</button></div>' +
      '</div>';
    document.body.appendChild(d);
    AY.hk = d;
    d.querySelector("#ayEp").onclick = () => { AY.ses(); AY.ac("mailto:" + AY.EPOSTA); };
    d.querySelector("#ayGz").onclick = () => { AY.ses(); AY.ac(AY.GIZLILIK); };
    d.querySelector("#ayKp").onclick = () => { AY.ses(); AY.hakkindaKapat(); };
  };
  AY.hakkindaKapat = function () {
    if (AY.hk) { AY.hk.remove(); AY.hk = null; AY.kilit = Date.now() + 300; }
  };

  // ---- v8: HESAP ----
  AY.adCiz = function () {
    const t = AY.adYazi; if (!t) return;
    let ad = ""; try { ad = AY.gv("oyuncuAdi").getAsString(); } catch (e) {}
    const yaz = ad ? "Oyuncu adın: " + ad : "Çevrim içi hesap yok";
    if (t.getString() !== yaz) t.setString(yaz);
    try { if (t.getCharacterSize() !== 20) t.setCharacterSize(20); } catch (e) {}
    try { t.setColor("110;116;140"); } catch (e) {}
    try { t.setBold(true); } catch (e) {}
    t.setPosition(360 - t.getWidth() / 2, 1157 - t.getHeight() / 2);
  };
  AY.dugmede = function (x, y, cx, cy, w, h) { return Math.abs(x - cx) <= w / 2 + 6 && Math.abs(y - cy) <= h / 2 + 6; };
  AY.pencere = function (d) {
    AY.durum = d;
    if (d < 0) {
      if (AY.pen) { AY.pen.deleteFromScene(AY.sahne); AY.pen = null; }
      if (AY.kar) { AY.kar.deleteFromScene(AY.sahne); AY.kar = null; }
      return;
    }
    if (!AY.kar) {
      AY.kar = AY.sahne.createObject("AyKarart");
      if (AY.kar) { AY.kar.setZOrder(50); AY.kar.setPosition(-2000, -2000); AY.kar.setWidth(4720); AY.kar.setHeight(5280); }
    }
    if (!AY.pen) AY.pen = AY.olustur("AyHesapPencere", 360, 640, 60);
    AY.kareYap(AY.pen, d);
  };
  AY.sureli = function (p, ms) {
    return Promise.race([p, new Promise((_, r) => setTimeout(() => r(new Error("zaman aşımı")), ms))]);
  };
  AY.hesapSil = async function () {
    const M = window.MatrancCevrimici || null;
    let eskiUid = null;
    try {
      if (typeof firebase === "undefined" || !firebase.auth) throw new Error("Firebase yok");
      const k = firebase.auth().currentUser;
      if (!k) throw new Error("Giriş yok");
      const uid = k.uid, db = firebase.firestore();
      // çevrim içi kodun bu sırada kayıt yazmasını durdur
      if (M) { eskiUid = M.uid; if (M.nabiz) { clearInterval(M.nabiz); M.nabiz = null; } M.uid = null; }
      const oyRef = db.collection("oyuncular").doc(uid);
      const snap = await AY.sureli(oyRef.get({ source: "server" }), 15000);
      const adK = snap.exists ? snap.data().adKucuk : null;
      const silinecek = [];
      for (const alan of ["gonderenUid", "aliciUid"]) {
        const q = await AY.sureli(db.collection("davetler").where(alan, "==", uid).get(), 15000);
        q.forEach((d) => silinecek.push(d.ref));
      }
      // v14: kurtarma kodu belgesi
      try {
        const kod = M && M.kodOku ? M.kodOku() : "";
        if (kod) { const kRef = db.collection("kodlar").doc(kod); const ks = await AY.sureli(kRef.get(), 15000); if (ks.exists && ks.data().uid === uid) silinecek.push(kRef); }
      } catch (e) {}
      silinecek.push(db.collection("bildirim").doc(uid));           // v15: bildirim adresi
      try { const gq = await AY.sureli(oyRef.collection("galibiyetler").get(), 15000); gq.forEach((d) => silinecek.push(d.ref)); } catch (e) {}   // v15
      if (adK) {
        const adRef = db.collection("adlar").doc(adK);
        const a = await AY.sureli(adRef.get(), 15000);
        if (a.exists && a.data().uid === uid) silinecek.push(adRef);
      }
      for (let i = 0; i < silinecek.length; i += 400) {
        const b = db.batch(); silinecek.slice(i, i + 400).forEach((r) => b.delete(r));
        await AY.sureli(b.commit(), 15000);
      }
      if (snap.exists) await AY.sureli(oyRef.delete(), 15000);
      // giriş kimliğini sil (olmazsa çıkış yap; yeni açılışta yeni kimlik alınır)
      try { await AY.sureli(k.delete(), 10000); } catch (e) { try { await firebase.auth().signOut(); } catch (e2) {} }
      // telefondaki hesapla ilgili kayıtlar
      AY.yaz("galCevrimici", 0);
      try { gdjs.evtTools.storage.writeStringInJSONFile(AY.DEPO, "sonRakipler", "[]"); } catch (e) {}
      try { gdjs.evtTools.storage.writeStringInJSONFile(AY.DEPO, "arkadaslar", "[]"); } catch (e) {}
      try { gdjs.evtTools.storage.writeStringInJSONFile(AY.DEPO, "kurtarmaKodu", ""); } catch (e) {}   // v14
      try { AY.gv("oyuncuAdi").setString(""); } catch (e) {}
      if (M) M.ad = "";
      console.log("MATRANC hesap silindi");
      AY.pencere(3);
    } catch (e) {
      console.error("MATRANC hesap silme hatası:", e);
      if (M && eskiUid && !M.uid) { M.uid = eskiUid; try { M.nabizBaslat(); } catch (e2) {} }
      AY.pencere(2);
    }
  };

  AY.kare = function (runtimeScene) {
    if (!AY.sahne || AY.sahne !== runtimeScene) return;
    // geri oku: menüdeki ayarlar düğmesiyle aynı yer ve boy (her telefonda sol üst, ikinci sıra)
    const L = runtimeScene.getLayer("");
    if (AY.geri) {
      AY.geri.__cx = 128;   // v18: başlığın solunda
      AY.geri.__cy = 113;
      AY.kareYap(AY.geri, 0);
      AY.sayac++;
      if (AY.sayac >= 2 && AY.geri.isHidden()) AY.geri.hide(false);
    }
    if (AY.bilgi) {   // v9: geri düğmesinin karşısında, aynı yükseklikte
      AY.bilgi.__cx = 592;   // v18: başlığın sağında
      AY.bilgi.__cy = 113;
      AY.kareYap(AY.bilgi, 0);
      if (AY.sayac >= 2 && AY.bilgi.isHidden()) AY.bilgi.hide(false);
    }
    if (AY.hk) return;   // v9: HAKKINDA penceresi açıkken sahneye dokunulmaz
    AY.adCiz();     // v8: ad sonradan gelirse (bağlantı geç kurulursa) güncellensin

    if (Date.now() < AY.kilit) return;
    if (document.getElementById("mtrPencere")) return;   // v14: kod pencereleri açıkken
    if (!gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left")) return;
    const x = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0);
    const y = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0);

    // ---- v8: açık pencere varsa yalnız ona bakılır ----
    if (AY.durum >= 0) {
      if (AY.durum === 0) {
        if (AY.dugmede(x, y, 242, 760, 210, 70)) { AY.ses(); AY.pencere(1); AY.hesapSil(); }
        else if (AY.dugmede(x, y, 478, 760, 210, 70)) { AY.ses(); AY.pencere(-1); }
      } else if (AY.durum === 2) {
        if (AY.dugmede(x, y, 360, 760, 240, 70)) { AY.ses(); AY.pencere(-1); }
      } else if (AY.durum === 3) {
        if (AY.dugmede(x, y, 360, 760, 240, 70)) { AY.ses(); setTimeout(() => { try { window.location.reload(); } catch (e) {} }, 150); }
      }
      return;
    }
    // v14: HESAP kartı — KODUM | GERİ YÜKLE | HESABI SİL
    if (AY.hesap) {
      const M = window.MatrancCevrimici || null;
      if (AY.dugmede(x, y, 180, 1217, 166, 64)) { AY.ses(); if (M && M.kodPenceresi) M.kodPenceresi(); return; }
      if (AY.dugmede(x, y, 360, 1217, 166, 64)) { AY.ses(); if (M && M.geriYuklePenceresi) M.geriYuklePenceresi(); return; }
      if (AY.dugmede(x, y, 540, 1217, 166, 64)) { AY.ses(); AY.pencere(0); return; }
    }
    if (AY.icinde(AY.bilgi, x, y)) { AY.ses(); AY.hakkinda(); return; }

    if (AY.icinde(AY.geri, x, y)) {
      AY.ses();
      AY.hakkindaKapat();
      gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
      return;
    }
    for (const s of AY.seg) {
      if (AY.icinde(s, x, y)) {
        if (s.__g === 0) { AY.gv("sureSaniye").setNumber(AY.SURE[s.__i]); AY.yaz("sureSaniye", AY.SURE[s.__i]); }
        else if (s.__g === 1) { AY.gv("hedefTur").setNumber(AY.TUR[s.__i]); AY.yaz("hedefTur", AY.TUR[s.__i]); }
        else AY.yaz("soruTuru", s.__i);   // v12
        AY.ses(); AY.ciz(); return;
      }
    }
    if (AY.icinde(AY.anMuz, x, y)) {                    // v13: arka plan müziği
      const v = AY.oku("muzikAcik", 1) === 0 ? 1 : 0;
      if (window.MatrancMuzik && window.MatrancMuzik.ayarla) window.MatrancMuzik.ayarla(v); else AY.yaz("muzikAcik", v);
      AY.ciz(); AY.ses(); return;
    }
    for (const [o, ad] of [[AY.anSes, "sesAcik"], [AY.anTit, "titresimAcik"]]) {
      if (AY.icinde(o, x, y)) {
        const v = AY.gv(ad).getAsNumber() === 1 ? 0 : 1;
        AY.gv(ad).setNumber(v); AY.yaz(ad, v);
        AY.ciz(); AY.ses(); return;
      }
    }
  };

  window.MatrancAyar = AY;
})();
window.MatrancAyar.kur(runtimeScene);
}
};
gdjs.AyarlarCode.userFunc0xfe8ce8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - MÜZİK v2 (MATİ ile Öğren / Rehber sahnesinde de müzik susar) · v1 (arka plan müziği: açılış ve menülerde çalar, maçta yavaşça susar; ses efektleri müzikten ayrı)
// Bu dosyayı ŞU 5 SAHNEDE, olayların EN ALTINA koşulsuz birer JavaScript olayı olarak koyun:
//   Acilis, Menu, Ayarlar, İsimsiz sahne (oyun), Rehber (MATİ ile Öğren).  (Profil, Nasıl Oynanır, Çevrimiçi vb. sahnelerde müzik zaten çalmaya devam eder.)
// Gerekli kaynak: matranc_muzik.mp3 (Proje yöneticisi → Kaynaklar'a ekleyin; adı "matranc_muzik.mp3" kalsın).
// Kayıtlar: "muzikAcik" (1/0, varsayılan 1). Ses efektleri: genel değişken sesAcik (0 ise yalnız efektler susar).
// Müzik: "Warm Acoustic" — AtlasAudio (Pixabay İçerik Lisansı; döngü için başı/sonu birleştirildi).
(function () {
  const S = runtimeScene, game = S.getGame(), sm = game.getSoundManager();
  const KANAL = 1, SES = 40, KAYNAK = "matranc_muzik.mp3";
  const OYUN = ["İsimsiz sahne", "Untitled scene", "Rehber"]; // bu sahnelerde müzik susar (maç, MATİ ile Öğren)
  let MZ = window.MatrancMuzik;
  if (!MZ) {
    MZ = window.MatrancMuzik = { hedef: 0, ses: 0, calisiyor: false };
    // ---- ses efektleri müzikten ayrılsın: sesAcik = 0 iken yalnız efektler çalınmaz ----
    if (sm && !sm.__mtrEfekt) {
      const asil = sm.playSound.bind(sm);
      const kapali = () => { try { const g = game.getVariables(); return g.has("sesAcik") && g.get("sesAcik").getAsNumber() === 0; } catch (e) { return false; } };
      sm.playSound = function () {                            // susturulan efekt sessiz çalınır (titreşim kancası yine çalışsın)
        const a = Array.prototype.slice.call(arguments); if (kapali()) a[2] = 0;
        return asil.apply(null, a);
      };
      const asilK = sm.playSoundOnChannel ? sm.playSoundOnChannel.bind(sm) : null;
      if (asilK) sm.playSoundOnChannel = function () {
        const a = Array.prototype.slice.call(arguments); if (kapali()) a[3] = 0;
        return asilK.apply(null, a);
      };
      sm.__mtrEfekt = true;
    }
    MZ.oku = function () {
      try {
        const s = gdjs.evtTools.storage;
        if (!s.elementExistsInJSONFile("matranc", "muzikAcik")) return 1;
        const v = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", "muzikAcik", MZ.sahne, v); return v.getAsNumber() === 0 ? 0 : 1;
      } catch (e) { return 1; }
    };
    MZ.ayarla = function (acik) {                            // Ayarlar'daki anahtar çağırır
      try { gdjs.evtTools.storage.writeNumberInJSONFile("matranc", "muzikAcik", acik ? 1 : 0); } catch (e) {}
      MZ.acik = acik ? 1 : 0;
    };
  }
  MZ.sahne = S;
  if (MZ.acik === undefined) MZ.acik = MZ.oku();
  // genel ses hep 100 (eskiden "ses efektleri kapalı" genel sesi 0 yapıyordu → müzik de susuyordu)
  try { if (gdjs.evtTools.sound.getGlobalVolume(S) !== 100) gdjs.evtTools.sound.setGlobalVolume(S, 100); } catch (e) {}

  const macta = OYUN.indexOf(S.getName()) >= 0;
  MZ.hedef = !macta && MZ.acik ? SES : 0;
  let m = null; try { m = sm.getMusicOnChannel(KANAL); } catch (e) {}
  const caliyor = !!(m && m.playing && m.playing());
  const simdi = Date.now();
  if (MZ.hedef > 0 && !caliyor && !(MZ.basladi && simdi - MZ.basladi < 3000)) {   // başlat (sessizden yükselerek); yüklenirken tekrar başlatma
    try { gdjs.evtTools.sound.playMusicOnChannel(S, KAYNAK, KANAL, true, 0, 1); MZ.ses = 0; MZ.basladi = simdi; } catch (e) {}
  }
  // yumuşak geçiş: saniyede ~30 birim
  const dt = Math.min(0.1, S.getTimeManager().getElapsedTime() / 1000);
  if (MZ.ses < MZ.hedef) MZ.ses = Math.min(MZ.hedef, MZ.ses + 30 * dt);
  else if (MZ.ses > MZ.hedef) MZ.ses = Math.max(MZ.hedef, MZ.ses - 50 * dt);
  try { gdjs.evtTools.sound.setMusicOnChannelVolume(S, KANAL, MZ.ses); } catch (e) {}
  if (MZ.hedef === 0 && MZ.ses <= 0 && caliyor) { try { gdjs.evtTools.sound.stopMusicOnChannel(S, KANAL); } catch (e) {} MZ.basladi = 0; }
})();

};
gdjs.AyarlarCode.eventsList0 = function(runtimeScene) {

{


gdjs.AyarlarCode.userFunc0x1474f90(runtimeScene);

}


{


gdjs.AyarlarCode.userFunc0xfe8ce8(runtimeScene);

}


};

gdjs.AyarlarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AyarlarCode.GDAyZeminObjects1.length = 0;
gdjs.AyarlarCode.GDAySegmentObjects1.length = 0;
gdjs.AyarlarCode.GDAyAnahtarObjects1.length = 0;
gdjs.AyarlarCode.GDAyGeriObjects1.length = 0;
gdjs.AyarlarCode.GDAyTamamObjects1.length = 0;
gdjs.AyarlarCode.GDAyHesapObjects1.length = 0;
gdjs.AyarlarCode.GDAyHesapPencereObjects1.length = 0;
gdjs.AyarlarCode.GDAyKarartObjects1.length = 0;
gdjs.AyarlarCode.GDAyAdYaziObjects1.length = 0;
gdjs.AyarlarCode.GDAyBilgiObjects1.length = 0;
gdjs.AyarlarCode.GDAyNasilObjects1.length = 0;
gdjs.AyarlarCode.GDPanelAvatarObjects1.length = 0;
gdjs.AyarlarCode.GDRutbeRozetObjects1.length = 0;

gdjs.AyarlarCode.eventsList0(runtimeScene);
gdjs.AyarlarCode.GDAyZeminObjects1.length = 0;
gdjs.AyarlarCode.GDAySegmentObjects1.length = 0;
gdjs.AyarlarCode.GDAyAnahtarObjects1.length = 0;
gdjs.AyarlarCode.GDAyGeriObjects1.length = 0;
gdjs.AyarlarCode.GDAyTamamObjects1.length = 0;
gdjs.AyarlarCode.GDAyHesapObjects1.length = 0;
gdjs.AyarlarCode.GDAyHesapPencereObjects1.length = 0;
gdjs.AyarlarCode.GDAyKarartObjects1.length = 0;
gdjs.AyarlarCode.GDAyAdYaziObjects1.length = 0;
gdjs.AyarlarCode.GDAyBilgiObjects1.length = 0;
gdjs.AyarlarCode.GDAyNasilObjects1.length = 0;
gdjs.AyarlarCode.GDPanelAvatarObjects1.length = 0;
gdjs.AyarlarCode.GDRutbeRozetObjects1.length = 0;


return;

}

gdjs['AyarlarCode'] = gdjs.AyarlarCode;
