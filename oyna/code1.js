gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDMenuZeminObjects1= [];
gdjs.MenuCode.GDMenuZeminObjects2= [];
gdjs.MenuCode.GDMenuZeminObjects3= [];
gdjs.MenuCode.GDBtn2OyuncuObjects1= [];
gdjs.MenuCode.GDBtn2OyuncuObjects2= [];
gdjs.MenuCode.GDBtn2OyuncuObjects3= [];
gdjs.MenuCode.GDBtnBilgisayarObjects1= [];
gdjs.MenuCode.GDBtnBilgisayarObjects2= [];
gdjs.MenuCode.GDBtnBilgisayarObjects3= [];
gdjs.MenuCode.GDBtnNasilObjects1= [];
gdjs.MenuCode.GDBtnNasilObjects2= [];
gdjs.MenuCode.GDBtnNasilObjects3= [];
gdjs.MenuCode.GDAyarlarBtnObjects1= [];
gdjs.MenuCode.GDAyarlarBtnObjects2= [];
gdjs.MenuCode.GDAyarlarBtnObjects3= [];
gdjs.MenuCode.GDBaslikObjects1= [];
gdjs.MenuCode.GDBaslikObjects2= [];
gdjs.MenuCode.GDBaslikObjects3= [];
gdjs.MenuCode.GDBtnProfilObjects1= [];
gdjs.MenuCode.GDBtnProfilObjects2= [];
gdjs.MenuCode.GDBtnProfilObjects3= [];
gdjs.MenuCode.GDUcurtmaObjects1= [];
gdjs.MenuCode.GDUcurtmaObjects2= [];
gdjs.MenuCode.GDUcurtmaObjects3= [];
gdjs.MenuCode.GDMenuLogoObjects1= [];
gdjs.MenuCode.GDMenuLogoObjects2= [];
gdjs.MenuCode.GDMenuLogoObjects3= [];
gdjs.MenuCode.GDTanitimKartObjects1= [];
gdjs.MenuCode.GDTanitimKartObjects2= [];
gdjs.MenuCode.GDTanitimKartObjects3= [];
gdjs.MenuCode.GDTanitimKarartmaObjects1= [];
gdjs.MenuCode.GDTanitimKarartmaObjects2= [];
gdjs.MenuCode.GDTanitimKarartmaObjects3= [];
gdjs.MenuCode.GDBtnAtolyeObjects1= [];
gdjs.MenuCode.GDBtnAtolyeObjects2= [];
gdjs.MenuCode.GDBtnAtolyeObjects3= [];
gdjs.MenuCode.GDPanelAvatarObjects1= [];
gdjs.MenuCode.GDPanelAvatarObjects2= [];
gdjs.MenuCode.GDPanelAvatarObjects3= [];
gdjs.MenuCode.GDRutbeRozetObjects1= [];
gdjs.MenuCode.GDRutbeRozetObjects2= [];
gdjs.MenuCode.GDRutbeRozetObjects3= [];


gdjs.MenuCode.userFunc0x10d2be8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Tanıtım kartı v3g (tahta yan boşlukları: sahne arkasına kamerayı kaplayan şehir + sayfa arkası katmanı) · v3f (tahta modunda oyunun iki yanındaki boşluk bulanık şehirle dolar) · v3e (AKILLI TAHTA MODU: web sürümünde (telefon uygulaması değilken) window.MatrancTahta = true; tahta modunda tanıtım kartı yok, İKİ OYUNCU'ya dokununca doğrudan tek cihaz oyunu başlar) · v3d (logo zıplaması menünün logo ölçeğini kullanır (MatrancMenuYer.logoTaban); dokunma alanı yalnız yazı, bulutlar değil) · v3c (YAYIN: TEST_HEDIYE = 0, test yıldızı verilmez) · v3b (bulanıklık HAFİFLETİLDİ: düşük kalite + yarım çözünürlük, değer yalnız değişince yazılır → logoya dokununca takılma azalır) · v3 (ARKA PLAN KARARIR + BULANIKLAŞIR: kart ve karartma 'Tanitim' katmanına taşınır, ana katmandaki 'Bulanik' bulanıklık efekti kartla birlikte açılır; katman/efekt yoksa yalnız karartma) v2t3 (+ eski 60 sn kaydı → 45) v2t2 (+ TEST: 500 yıldız, ORTA/ZOR açık) v2 (tek düğme NASIL OYNANIR?, açılış/kapanış animasyonu) v1b (ilk açılışta bir kez + MATRANÇ logosuna dokununca)
// "Menu" sahnesinin olaylarının EN ÜSTÜNE, KOŞULSUZ tek bir JavaScript olayı olarak koyun.
// Gerekli nesneler (nesne listesinde olsun, sahneye YERLEŞTİRMEYİN; kod kendisi oluşturur):
//   TanitimKart     (Sprite, 2 animasyon: #0 = ilk açılış, #1 = logodan açılan)
//   TanitimKarartma (Sprite, 1 görsel)
// Kullanılan mevcut nesne: MenuLogo
// ---- v3e: AKILLI TAHTA MODU bayrağı (bütün sahneler window.MatrancTahta'ya bakar) ----
// Telefon uygulamasında (Capacitor) HİÇBİR ZAMAN açılmaz. Web sürümünde (gd.games) HER ZAMAN açılır.
// GDevelop ÖNİZLEMESİNDE yalnız aşağıdaki değer true ise açılır (tahtayı denemek için true, telefon işleri için false yapın).
const ONIZLEMEDE_TAHTA = false;
if (window.MatrancTahta === undefined) {
  let t = false;
  try {
    const C = window.Capacitor, yerel = !!(C && C.isNativePlatform && C.isNativePlatform());
    const g = runtimeScene.getGame(), onizleme = !!(g.isPreview && g.isPreview());
    t = !yerel && (!onizleme || ONIZLEMEDE_TAHTA);
  } catch (e) {}
  window.MatrancTahta = t;
}
// v3g: TAHTA MODU — oyunun iki yanındaki boşluk bulanık şehirle dolar.
// İki yol birden: (1) oyun tuvali bütün ekranı kaplıyorsa her sahnenin en arkasına kamerayı kaplayan şehir resmi;
// (2) tuval ortada dar duruyorsa sayfanın arkasına sabit bulanık katman (tuvalin üst kutuları saydam yapılır).
if (window.MatrancTahta && !window.__mtrTahtaZemin) {
  window.__mtrTahtaZemin = true;
  const ADLAR = ["matranc_oyun_zemin_tahta_v1.jpg", "matranc_eslesme_zemin_v2.jpg", "matranc_menu_zemin_v28.jpg"];
  const doku = (sc) => { const im = sc.getGame().getImageManager(); for (const ad of ADLAR) { try { const tx = im.getPIXITexture(ad); if (tx && tx.width > 8) return tx; } catch (e) {} } return null; };
  // (1) her sahnenin taban katmanının en arkasına sprite
  try {
    gdjs.registerRuntimeScenePostEventsCallback((sc) => {
      try {
        const P = window.PIXI, L = sc.getLayer(""), kap = L.getRenderer().getRendererObject();
        if (!P || !kap) return;
        let sp = sc.__mtrArka;
        if (!sp || sp.parent !== kap) {
          const tx = doku(sc); if (!tx) return;
          sp = sc.__mtrArka = new P.Sprite(tx); sp.anchor.set(0.5); sp.zIndex = -1e9;
          kap.addChildAt(sp, 0); kap.sortableChildren = true;
        }
        const w = L.getCameraWidth(), h = L.getCameraHeight();
        const s = Math.max(w / sp.texture.width, h / sp.texture.height) * 1.02;
        sp.scale.set(s); sp.position.set(L.getCameraX(), L.getCameraY());
      } catch (e) {}
    });
  } catch (e) {}
  // (2) sayfa arkası
  try {
    const d = document.createElement("div"); d.id = "mtrTahtaZemin";
    d.style.cssText = "position:fixed;inset:-40px;z-index:0;pointer-events:none;background:linear-gradient(#5d9be8,#a9cdf5 55%,#e9eef8);" +
      "background-size:cover;background-position:center;filter:blur(18px) brightness(.92)";
    const tx = doku(runtimeScene), r = tx && tx.baseTexture && tx.baseTexture.resource, url = r && (r.src || (r.source && r.source.src));
    if (url) d.style.backgroundImage = "url('" + url + "')";
    document.body.insertBefore(d, document.body.firstChild);
    const tv = runtimeScene.getGame().getRenderer().getCanvas();
    if (tv) { tv.style.position = tv.style.position || "relative"; tv.style.zIndex = "1"; let e = tv.parentElement; while (e) { e.style.background = "transparent"; e = e.parentElement; } }
  } catch (e) {}
}
(function () {
  const S = runtimeScene;
  let T = window.MatrancTanitim;
  if (!T || T.sahne !== S) {
    T = window.MatrancTanitim = { sahne: S, acik: false, mod: 0, kart: null, kar: null, gecis: 0, zipla: 0, ilk: true };
  }
  const DEPO = "matranc", OLC = 700 / 1480;
  const st = gdjs.evtTools.storage;
  const varMi = (k) => { try { return st.elementExistsInJSONFile(DEPO, k); } catch (e) { return false; } };
  const sayi = (k) => { try { if (!varMi(k)) return 0; const v = new gdjs.Variable(); st.readNumberFromJSONFile(DEPO, k, S, v); return v.getAsNumber(); } catch (e) { return 0; } };
  const yaz = (k, v) => { try { st.writeNumberInJSONFile(DEPO, k, v); } catch (e) {} };
  const ses = () => { try { S.getGame().getSoundManager().playSound("dugme.wav", false, 20, 1); } catch (e) {} };
  const L = S.getLayer("");
  const kX = L.getCameraX(), kY = L.getCameraY(), kW = L.getCameraWidth(), kH = L.getCameraHeight();
  const im = S.getGame().getInputManager();
  const birakildi = () => { try { return im.isMouseButtonReleased(0); } catch (e) { return false; } };
  const imlec = () => [gdjs.evtTools.input.getCursorX(S, "", 0), gdjs.evtTools.input.getCursorY(S, "", 0)];
  // dokunmayı alttaki menü olaylarından gizle (kart açıkken butonlar çalışmasın)
  const yut = () => {
    try { if (im._releasedMouseButtons) im._releasedMouseButtons[0] = false; } catch (e) {}
    try { if (im._pressedMouseButtons) im._pressedMouseButtons[0] = false; } catch (e) {}
    try { if (im._endedTouches) im._endedTouches.length = 0; } catch (e) {}
  };
  const ilkNesne = (ad) => { try { const l = S.getObjects(ad); return l && l.length ? l[0] : null; } catch (e) { return null; } };
  // v3e: TAHTA MODU — tanıtım kartı yok; İKİ OYUNCU doğrudan tek cihaz oyununu başlatır (çevir-seç yok)
  if (window.MatrancTahta) {
    T.acik = false;
    if (birakildi()) {
      const [x, y] = imlec(), b = ilkNesne("Btn2Oyuncu"), K = window.MatrancMenuYer;
      if (b && !b.isHidden() && !(K && K.giris) && x >= b.getX() && x <= b.getX() + b.getWidth() && y >= b.getY() && y <= b.getY() + b.getHeight()) {
        const gv = (ad) => S.getGame().getVariables().get(ad);
        ["bilgisayar", "skorK", "skorY", "baslayan", "cevrimiciOyun"].forEach((ad) => { try { gv(ad).setNumber(0); } catch (e) {} });
        try { if (window.MatrancCevrimici) window.MatrancCevrimici.mektupMod = null; } catch (e) {}
        ses();
        gdjs.evtTools.runtimeScene.replaceScene(S, "İsimsiz sahne", false);
        yut();
      } else {
        // gizli düğmelere (MATİ, Nasıl Oynanır) dokunulmasın; Ayarlar düğmesi menü yerleşim kodunda çalışır
        const engel = ["BtnBilgisayar", "BtnNasil", "MenuLogo"].some((ad) => { const o = ilkNesne(ad); return o && x >= o.getX() && x <= o.getX() + o.getWidth() && y >= o.getY() && y <= o.getY() + o.getHeight(); });
        if (engel) yut();
      }
    }
    return;
  }

  T.bulanik = function (v) {   // v3: 0..1
    try {
      const A = S.getLayer("");
      if (!A.hasEffect || !A.hasEffect("Bulanik")) return;
      const ac = v > 0.01, b = Math.round(8 * v * 2) / 2;   // v3b: yarım adımlarla
      if (T.__bAc !== ac) { A.enableEffect("Bulanik", ac); T.__bAc = ac; }
      if (!ac || T.__b === b) return;
      T.__b = b;
      if (!T.__bAyar) {   // v3b: ucuz bulanıklık (bir kez)
        T.__bAyar = true;
        try { A.setEffectDoubleParameter("Bulanik", "quality", 2); } catch (e) {}
        try { A.setEffectDoubleParameter("Bulanik", "kernelSize", 5); } catch (e) {}
        try { A.setEffectDoubleParameter("Bulanik", "resolution", 0.5); } catch (e) {}
      }
      A.setEffectDoubleParameter("Bulanik", "blur", b);
    } catch (e) {}
  };
  T.sil = function () {
    T.bulanik(0);
    try { if (T.kar) T.kar.deleteFromScene(S); } catch (e) {}
    try { if (T.kart) T.kart.deleteFromScene(S); } catch (e) {}
    T.kar = T.kart = null; T.acik = false; T.kapaniyor = 0;
  };
  // kapat: hemen silmez, 0,22 sn'de küçülüp söner
  T.kapat = function () { if (T.acik && !T.kapaniyor) T.kapaniyor = Date.now(); };
  // ac: kart (fx, fy) noktasından doğar (logodan açılınca logonun ortası), ekranın ortasına büyüyerek gelir
  T.ac = function (mod, fx, fy) {
    T.sil();
    T.kar = S.createObject("TanitimKarartma");
    T.kart = S.createObject("TanitimKart");
    if (!T.kar || !T.kart) { T.sil(); return; }
    T.kar.setZOrder(1000); T.kart.setZOrder(1001);
    try { if (S.hasLayer("Tanitim")) { T.kar.setLayer("Tanitim"); T.kart.setLayer("Tanitim"); } } catch (e) {}   // v3
    try { T.kar.setColor("16;22;44"); } catch (e) {}                                                             // v3: koyu lacivert
    T.kart.setAnimation(mod); T.kart.setScale(OLC);
    T.mod = mod; T.acik = true; T.acilis = Date.now();
    T.fx = fx === undefined ? kX : fx; T.fy = fy === undefined ? kY : fy;
    T.kar.setOpacity(0); T.kart.setOpacity(0);
  };
  const gordu = () => yaz("tanitimGoruldu", 1);

  // 0) menüden "Nasıl Oynanır"a gecikmeli geçiş (ses duyulsun)
  if (T.gecis && Date.now() - T.gecis >= 150) {
    T.gecis = 0; gdjs.evtTools.runtimeScene.replaceScene(S, "NasilOynanir", false); return;
  }

  // 1) ilk açılış kontrolü (sahne her açıldığında bir kez bakılır)
  if (T.ilk) {
    T.ilk = false;
    // hamle süresi 60 → 45 sn'ye geçti: eski kayıtta 60 varsa 45 yap (menü ayarları bu karede okumadan önce)
    if (varMi("sureSaniye") && sayi("sureSaniye") === 60) {
      yaz("sureSaniye", 45);
      try { const g = S.getGame().getVariables(); if (g.has("sureSaniye")) g.get("sureSaniye").setNumber(45); } catch (e) {}
    }
    // TEST HEDİYESİ (v2): her cihaza bir kez → yıldız en az 500, ORTA ve ZOR açık (galKolay ve galOrta en az 3).
    // YAYINDAN ÖNCE TEST_HEDIYE = 0 yapılacak (ya da bu blok silinecek).
    const TEST_HEDIYE = 0;
    if (TEST_HEDIYE > 0 && !varMi("testHediye2")) {
      const y = varMi("yildiz") ? sayi("yildiz") : (sayi("galKolay") + 2 * sayi("galOrta") + 3 * sayi("galZor"));
      yaz("yildiz", Math.max(y, TEST_HEDIYE));
      yaz("galKolay", Math.max(sayi("galKolay"), 3));
      yaz("galOrta", Math.max(sayi("galOrta"), 3));
      yaz("testHediye2", 1);
    }
    if (!varMi("tanitimGoruldu")) {
      const eski = ["yildiz", "galKolay", "galOrta", "galZor", "galCevrimici"].some((k) => sayi(k) > 0);
      if (eski) gordu();               // güncellemeyle gelen eski oyuncu: gösterme
      else T.ac(0);
    }
  }

  // 2) logo zıplaması
  const logo = ilkNesne("MenuLogo");
  if (logo && T.zipla) {
    const t = (Date.now() - T.zipla) / 260;
    const cx = logo.getCenterXInScene(), cy = logo.getCenterYInScene();
    const MY = window.MatrancMenuYer, taban = (MY && MY.logoTaban) || 0.5;
    logo.setScale(taban * (t >= 1 ? 1 : 1 + 0.07 * Math.sin(Math.PI * t)));
    logo.setCenterPositionInScene ? logo.setCenterPositionInScene(cx, cy) : logo.setPosition(cx - logo.getWidth() / 2, cy - logo.getHeight() / 2);
    if (t >= 1) T.zipla = 0;
  }

  // 3) kart kapalıyken: logoya dokunma
  if (!T.acik) {
    if (logo && birakildi()) {
      const [x, y] = imlec();
      let ayarAcik = 0;
      try { if (S.getVariables().has("ayarAcik")) ayarAcik = S.getVariables().get("ayarAcik").getAsNumber(); } catch (e) {}
      const MY2 = window.MatrancMenuYer, pay = (MY2 && MY2.logoPay ? MY2.logoPay * (MY2.logoTaban || 0.5) : 0);   // v3d: bulut kenarı sayılmaz
      if (!ayarAcik && x >= logo.getX() + pay && x <= logo.getX() + logo.getWidth() - pay && y >= logo.getY() + pay && y <= logo.getY() + logo.getHeight() - pay) {
        ses(); T.zipla = Date.now(); T.ac(1, logo.getCenterXInScene(), logo.getCenterYInScene()); yut();
      }
    }
    return;
  }

  // 4) kart açık: yerleşim + animasyon
  T.kar.setPosition(kX - kW / 2 - 20, kY - kH / 2 - 20);
  T.kar.setWidth(kW + 40); T.kar.setHeight(kH + 40);
  const geriEase = (u) => { const c = 1.45; return 1 + (c + 1) * Math.pow(u - 1, 3) + c * Math.pow(u - 1, 2); };   // hafif taşıp yerine oturur
  const yumusak = (u) => 1 - Math.pow(1 - u, 3);
  let olc = 1, opak = 1, kx = kX, ky = kY;
  if (T.kapaniyor) {
    const u = Math.min(1, (Date.now() - T.kapaniyor) / 220), e = yumusak(u);
    olc = 1 - 0.12 * e; opak = 1 - e;
    if (u >= 1) { T.sil(); yut(); return; }
  } else {
    const SURE = T.mod === 1 ? 420 : 380;
    const u = Math.min(1, (Date.now() - T.acilis) / SURE);
    const b = T.mod === 1 ? 0.18 : 0.86;                 // logodan: küçükten; ilk açılış: hafif büyüme
    olc = b + (1 - b) * geriEase(u);
    const p = yumusak(u); kx = T.fx + (kX - T.fx) * p; ky = T.fy + (kY - T.fy) * p;
    opak = Math.min(1, u * 2.2);
  }
  T.kart.setScale(OLC * olc); T.kart.setOpacity(255 * opak);
  T.kar.setOpacity(255 * 0.45 * Math.min(1, opak * 1.15));   // v3: yarı saydam koyu perde
  T.bulanik(Math.min(1, opak * 1.15));
  try {   // v3: Tanitim katmanının kamerası ana katmanla aynı
    if (S.hasLayer("Tanitim")) { const U = S.getLayer("Tanitim"); U.setCameraX(L.getCameraX()); U.setCameraY(L.getCameraY()); U.setCameraZoom(L.getCameraZoom()); }
  } catch (e) {}
  T.kart.setPosition(kx - T.kart.getWidth() / 2, ky - T.kart.getHeight() / 2);
  if (T.kapaniyor || Date.now() - T.acilis < 250) { yut(); return; }   // animasyon sırasında dokunma yok

  // 5) kart açık: dokunmalar
  if (birakildi()) {
    const [x, y] = imlec();
    const px = (x - T.kart.getX()) / T.kart.getScaleX(), py = (y - T.kart.getY()) / T.kart.getScaleY();   // kart görseli üzerindeki piksel
    const icinde = (cx, cy, yw, yh) => Math.abs(px - cx) <= yw && Math.abs(py - cy) <= yh;
    if (T.mod === 0) {
      if (icinde(740, 1572, 340, 90)) { ses(); gordu(); T.kapat(); T.gecis = Date.now(); }        // NASIL OYNANIR?
    } else {
      ses(); T.kapat();                                                                          // her yere dokunmak kapatır
    }
  }
  yut();   // kart açıkken (veya kapandığı karede) hiçbir dokunma menüye geçmesin
})();
};
gdjs.MenuCode.userFunc0xee3c78 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Çevrim içi (sürüm 10.15c: akıllı tahtada Ayarlar zemini hep animasyon 2 (gece kancası dokunmaz); kod kontrolünde Çevrimiçi sahnesi v29, Ayarlar v21) (sürüm 10.15b: gece kancası her çağrıda GÜNCEL kodun listesini kullanır — önizleme yeniden başlamadan kod değişince eski liste kalıyordu) (sürüm 10.15a: gece/gündüz kancası Profil PrPerde (2 kare: üst/alt örtü) de değişir, kare korunur) (sürüm 10.15: İKİLİ SKOR (ikili/{uidA_uidB}, sunucu fonksiyonu v9 sayar; rövanş panelinde ve mektup bitiş penceresinde "Aranızdaki skor"), RÜTBE HEDİYESİ (her yeni rütbe 20 yıldız; ilk açılışta geçilmiş rütbeler toplu; oyuncular/{uid}.rutbeHediye), mektup bilgi etiketi taşmaz (2 satıra iner), gece/gündüz zemin: Profil PrZemin, Ayarlar AyZemin, Nasıl Oynanır NasilZemin 19.00–06.00 animasyon 1; kod kontrolü güncel) (sürüm 10.14: GERİ ALMA JOKERİ uzaktan kapatma — Firestore ayarlar/surum.joker = false → window.MatrancJokerKapali; kod kontrolünde atölye v12, pullar v77; iPhone üst pay 62 px) (sürüm 10.13a: kod kontrolünde açılış v10i) (sürüm 10.13: OYUN KAPATILINCA HÜKMEN (rakip uygulamayı kapatır/arka plana alır → 15 sn dönmezse kazanırsın, neden 'kapandi'); MEKTUP: çıkış penceresi 2. hâl (CikisPanel animasyon 1: "Maç kaldığı yerden devam eder."), alttaki "Sıra sende / Sıra X'te" etiketleri kalktı; BİLDİRİME DOKUNUNCA doğrudan o mektup maçı / Mektup ekranı; MEKTUP İLK HAMLE DAVETLE (yazı-tura yok, gönderen kırmızı; sunucu v8); iPhone'da HTML üst düğmeler çentiğin altında (--mtrUst); kod kontrolünde açılış v10h, yerleşim v12g, Çevrimiçi sahnesi v24, atölye v11, görevler v4) (sürüm 10.12g: kod kontrolünde açılış v10g) (sürüm 10.12f: kod kontrolünde açılış v10f) (sürüm 10.12e: kod kontrolünde tanıtım v3g) (sürüm 10.12d: kod kontrolünde tanıtım v3f) (sürüm 10.12c: kod kontrolündeki yanlış uyarı düzeldi — bu kodun kendi sürüm notlarında geçen eski sürüm adlarını "eski kopya" sanıyordu) (sürüm 10.12b: kod kontrolü eski kopyanın hangi sahnede olduğunu yazar) (sürüm 10.12a: kod kontrolünde pullar v76b) (sürüm 10.12: AKILLI TAHTA MODUNDA (window.MatrancTahta) Firebase'e hiç bağlanılmaz — hesap, ad, davet, mektup yok; kod kontrolünde tanıtım v3e, yerleşim v12f, ayarlar v20, pullar v76) (sürüm 10.11j: biten mektup maçı SONUÇ — hamleler perdenin arkasında SESSİZ kurulur, perde kalkınca son hamle normal hızda oynanır (kazanma animasyonu görünür); sahne değişince ses geri gelir) (sürüm 10.11i: kod kontrolünde menü yerleşim v12e) (sürüm 10.11h: App Store bağlantısı (güncelleme uyarısı ve davet metni iPhone'da da çalışır); kod kontrolünde görevler v3b, atölye v10b) (sürüm 10.11g: tablet teşhis kutusu kapatıldı) (sürüm 10.11f: kod kontrolünde pullar v75) (sürüm 10.11e: teşhiste Bulanik efekti durumu; kod kontrolünde Menü yerleşim v12d) (sürüm 10.11d: tablet teşhisine çizim hatası ve WebGL bağlam kaybı eklendi) (sürüm 10.11c: MEKTUP ROZETİ yalnız sırası sende olan maçlar + gelen davetler; BİTEN MAÇLAR listesinde son 5 maç (görülmüşler de; görülmemişte YENİ), ✕ ile listeden kaldırılır (yalnız bu cihazda); TABLET TEŞHİSİ: Android tablette teşhis kutusu açık, ana menüde ilk 6 sn ekranın ortasını kaplayan öğe yazılır) (sürüm 10.11b: biten mektup maçı açılınca "Mektup açılıyor" perdesi açık kalıyordu (son hamle maçı bitirince tahta hazır sayılmıyordu) → maç bitince perde kalkar, maç görüldü sayılır; kod kontrolünde pullar v74b) (sürüm 10.11a: kod kontrolünde Oyunda pullar v74, ROBOT ATÖLYESİ v10) (sürüm 10.11: geçiş perdesine güvenlik (açık kalırsa 0,8 sn sonra kalkar); MEKTUP — biten maç görülünce rozet hemen düşer (sonuç anında görüldü sayılır); daha önce görülmüş biten maç tekrar izlenince değer sorusu/ödül yok (mektupMod.izle); maç açılırken bütün hamleler (son rakip hamlesi dahil) koyu perdenin arkasında hızlı kurulur, açılınca rakibin son hamlesi etikette yazar) (sürüm 10.10v: kod kontrolünde Oyunda pullar v72) (sürüm 10.10u: kod kontrolünde Menü yerleşim v12b, Tanıtım kartı v3d) (sürüm 10.10t: kod kontrolünde ROBOT ATÖLYESİ v9b) (sürüm 10.10s: kod kontrolünde Menü yerleşim v12, ROBOT ATÖLYESİ v9) (sürüm 10.10r: Mektup ekranı geri düğmesi SARI pul, lacivert ok) (sürüm 10.10q: YAYIN HAZIRLIĞI — kod kontrolünde Tanıtım kartı v3c, ROBOT ATÖLYESİ v8b) (sürüm 10.10p: kod kontrolünde ROBOT ATÖLYESİ v8) (sürüm 10.10o: kod kontrolünde Çevrimiçi sahnesi v22) (sürüm 10.10n: kod kontrolünde ROBOT ATÖLYESİ v7 ve GÜNLÜK GÖREVLER v3) (sürüm 10.10m: kod kontrolünde ROBOT ATÖLYESİ v6d) (sürüm 10.10l: kod kontrolünde ROBOT ATÖLYESİ v6c) (sürüm 10.10k: kod kontrolünde ROBOT ATÖLYESİ v6b) (sürüm 10.10j: kod kontrolünde ROBOT ATÖLYESİ v6) (sürüm 10.10i: kod kontrolünde ROBOT ATÖLYESİ v5) (sürüm 10.10h: kod kontrolünde ROBOT ATÖLYESİ v4d) (sürüm 10.10g: kod kontrolünde ROBOT ATÖLYESİ v4c) (sürüm 10.10f: kod kontrolünde ROBOT ATÖLYESİ v4b) (sürüm 10.10e: kod kontrolünde ROBOT ATÖLYESİ v4) (sürüm 10.10d: kod kontrolünde ROBOT ATÖLYESİ v3b) (sürüm 10.10c: kod kontrolünde ROBOT ATÖLYESİ v3) (sürüm 10.10b: kod kontrolünde ROBOT ATÖLYESİ v2b) (sürüm 10.10a: kod kontrolünde GÜNLÜK GÖREVLER v2) (sürüm 10.10: kod kontrolünde GÜNLÜK GÖREVLER v1, pullar v71, Profil v29, ROBOT ATÖLYESİ v2) (sürüm 10.9b: kod kontrolünde Çevrimiçi sahnesi v21) (sürüm 10.9a: geçişte ÇIKIŞ BEKLEMESİ YOK, sahne hemen değişir; yeni sahne 0,15 sn yumuşak aydınlanmayla açılır) (sürüm 10.9: BÜTÜN SAHNE GEÇİŞLERİ YUMUŞAK — çıkarken 0,2 sn lacivert kararma, yeni sahnede 0,3 sn aydınlanma; GDevelop olaylarına dokunmadan, sahne değiştirme komutu sarılarak) (sürüm 10.8b: kod kontrolünde ROBOT ATÖLYESİ v1c) (sürüm 10.8a: kod kontrolünde ROBOT ATÖLYESİ v1b) (sürüm 10.8: kod kontrolünde Menü yerleşim v11 + ROBOT ATÖLYESİ v1) (sürüm 10.7d: kod kontrolünde Tanıtım kartı v3b) (sürüm 10.7c: Mektup sahnesindeki ← düğmesi diğer sahnelerdeki mavi pul geri düğmesinin aynısı; Çevrimiçi listesindeki DAVET ET / ÇAĞIR / arkadaş düğmelerini bozan eski 3B kuralları kaldırıldı) (sürüm 10.7b: Mektup sahnesinde üst düğmeler aşağı, alt düğme yukarı, ← ve 📖 düğmeleri büyük, ← oku iri; hikâye düğmesiyle açılınca düğmede KAPAT yazar) (sürüm 10.7: MEKTUP MAÇI AYRI SAHNE — "Mektup" sahnesinde tam ekran liste (mektupPanel(true)), kartlar masanın üstünde; mektup maçından dönüş Mektup sahnesine) (sürüm 10.6b: tanıtım sayfası mektup penceresindeki 📖 HİKÂYE düğmesiyle istenince tekrar açılır; zarf çizimi ve oyunun yazı tipi) (sürüm 10.6: MEKTUP MAÇI tek seferlik TANITIM sayfası (mtrMektupTanitim) + HAMLE SÜRESİ 12/24/48 saat (davette mektupSaat, varsayılan 24; sunucu v7) + yeni maç ekranında ← ile ARA çakışması giderildi) (sürüm 10.5: BÜTÜN PENCERE DÜĞMELERİ PUL TARZI — mtr-btn yeşil, mtr-koyu gri (vazgeç), mtr-kirmizi kırmızı) (sürüm 10.4l: kod kontrolünde Nasıl Oynanır v8) (sürüm 10.4k: kod kontrolünde Nasıl Oynanır v7) (sürüm 10.4j: kod kontrolünde Çevrimiçi sahnesi v19) (sürüm 10.4i: kod kontrolünde Menü yerleşim v10) (sürüm 10.4h: kod kontrolünde Ayarlar v19) (sürüm 10.4g: iç sürüm numarası düzeltildi) (sürüm 10.4f: kod kontrolünde Ayarlar v18) (sürüm 10.4e: kod kontrolünde Profil v28) (sürüm 10.4d: kod kontrolünde Çevrimiçi sahnesi v18) (sürüm 10.4c: kod kontrolünde açılış v10e) (sürüm 10.4b: kod kontrolünde tanıtım kartı v3) (sürüm 10.4a: kod kontrolünde Menü yerleşim v9) (sürüm 10.4: ÇEKİL — devam eden mektup maçında bayrak düğmesi → onay → bitti {kaybedenRenk, neden: 'cekildi'}; rakibe 'çekildi' bildirimi (fonksiyon v6); kod kontrolünde Çevrimiçi sahnesi v17) (sürüm 10.3b: hamle gönderilince pencere YOK — üst etikette 5 sn 'Hamlen gönderildi · çıkabilirsin, maç devam eder', sonra 'Sıra X'te') (sürüm 10.3a: MEKTUP KRİTİK DÜZELTME — tahta kurulumu son hamlenin animasyonu bitmeden 'hazır' sayılıyordu, bu da kendi eski hamleni İKİNCİ KEZ gönderiyordu; artık animasyon bitince hazır; kendi hamle gönderimi yalnız elle yapılan hamlede; sırası uymayan (bozuk) hamle 1,5 sn sonra atlanır) (sürüm 10.3: MEKTUP 4. adım — bitiren hamlede son/kazananRenk (sunucu kapatır); BİTEN MAÇLAR bölümü (SONUÇ: maç sonuna kadar oynatılır, kart + değer sorusu + galibiyet), görülenler yerelde işaretlenir; aynı rakibe karşı günde en fazla 1 mektup galibiyeti rütbeye işler; sayı = sıra sende + gelen davet + görülmemiş biten maç) (sürüm 10.2e: mektup açılırken eski hamlelerin tekrarı '✉️ Mektup açılıyor...' perdesinin arkasında 6× hızla; perde kalkınca yalnız rakibin son hamlesi normal hızda) (sürüm 10.2d: AD SAHİPLİĞİ ONARIMI — açılışta adın sunucudaki sahibi (adlar) bu hesap değilse hesaba yeni boş ad verilir (galibiyet/avatar korunur); böylece davet ve mektuplar doğru hesaba gider) (sürüm 10.2c: mektup daveti göndermeden önce adın GÜNCEL sahibi (adlar/{ad}) bulunur — listelerdeki eski hesap kimliğine davet gitmesin) (sürüm 10.2b: mektupta bilgisayar = 0 — önceki MATİ maçından kalan değer yüzünden MATİ yeşil adına oynuyordu) (sürüm 10.2a: mektupta eşleşme/yazı-tura ekranı YOK (doğrudan oyun); tahta kurulumu sahne oturunca başlar (1,5 sn + kart kapalı); takılma izi) (sürüm 10.2: MEKTUP MAÇI 3. adım — OYNA/BAK maç ekranını açar: tahta bütün hamlelerden hızlıca kurulur, rakibin son hamlesi normal hızda oynar; kendi hamlen gönderilince ✉️ penceresi; mektupta süre/kopma/ayrılma hükmeni ve rövanş YOK) (sürüm 10.1: MEKTUP MAÇI'nın HER ŞEYİ penceresinde — YENİ MEKTUP MAÇI görünümü (arama + Arkadaşlarım + Son oynadıklarım, GÖNDER); kişi satırlarındaki zarflar kaldırıldı; kod kontrolünde Çevrimiçi sahnesi v16) (sürüm 10.0a: kod kontrolünde Çevrimiçi sahnesi v15b) (sürüm 10.0: MEKTUP MAÇI 2. adım — M.mektupDinle/M.mektupDavetEt/M.mektupPanel, pul tarzı HTML düğmeler M.pulStil; canlı davet dinleyicisi ve eski çağrı temizliği mektup davetlerine dokunmaz; kod kontrolünde Çevrimiçi sahnesi v15) (sürüm 9.9b: kod kontrolünde Menü yerleşim v7, Ayarlar v17) (sürüm 9.9a: kod kontrolünde pul v70, Menü yerleşim v5, Profil v27, Ayarlar v16) (sürüm 9.9: 45 PUL — yeni pullar 32–44 (pulSahip3), 8 pul kaldırıldı ve ücreti yıldız olarak İADE edilir (bir kez, kayıt pulIade10); kod kontrolünde pul v68, Profil v26, Eşleşme v5) (sürüm 9.8m: kod kontrolünde Ayarlar v15) (sürüm 9.8l: kod kontrolünde açılış v10d) (sürüm 9.8k: kod kontrolünde açılış v10c) (sürüm 9.8j: kod kontrolünde açılış v10b) (sürüm 9.8i: kod kontrolünde açılış v10, menü yerleşim v4) (sürüm 9.8h: kod kontrolünde menü yerleşim v3) (sürüm 9.8g: kod kontrolünde uçurtma yerine menü yerleşim v2) (sürüm 9.8f: kod kontrolünde açılış v9b) (sürüm 9.8e: kod kontrolünde açılış v9) (sürüm 9.8d: kod kontrolünde açılış v8) (sürüm 9.8c: ÇAĞIR artık yalnız BİLDİRİM gönderir — WhatsApp/paylaşım ekranı açılmaz, oyundan çıkılmaz; bekleme penceresinde "Mesajı yeniden gönder / kopyala" bağlantıları kaldırıldı) (sürüm 9.8b: Android'de yüksek önemli "Çağrılar" bildirim kanalı — kilit ekranında görünür, sesli, ekranın üstünde açılır) (sürüm 9.8: ANLIK BİLDİRİM — Capacitor uygulamasında bildirim izni istenir, telefonun bildirim adresi bildirim/{uid} belgesine yazılır; sunucu fonksiyonu çağrı/davet gelince bildirim gönderir. GDevelop'un kendi derlemesinde ve önizlemede hiçbir şey yapmaz. Kurallar v7 gerekir) (sürüm 9.7i: iPhone yolu GERİ ALINDI — Paylaş uzantısı da navigator.share kullanıyor ama dokunuştan sonraki karede (izin yok); iPhone'da paylaşım yine doğrudan dokunuşta açılır, açık bir paylaşım varken ikincisi denenmez, olmazsa "kopyalandı" notu) (sürüm 9.7h: 9.7g hatası — sürdürülen çağrı yanlışlıkla iptal ediliyordu) (sürüm 9.7g: ÇAĞRI YENİDEN AÇILIŞTA SÜRER — WhatsApp'a geçerken telefon oyunu kapatırsa, geri dönüşte süresi dolmamış çağrı iptal edilmez, "… bekleniyor" şeridiyle devam eder; ÇAĞIR'dan sonraki 10 dk içinde açılış animasyonu atlanır (açılış v7)) (sürüm 9.7f: çağrı mesajının başında "Bağlantıya tıklamana gerek yok") (sürüm 9.7e: çağrı mesajı — önce "MATRANÇ'ı aç", mağaza bağlantıları yalnız "oyun yüklü değilse" başlığı altında) (sürüm 9.7d: iPhone'da ÇAĞIR da Paylaş uzantısıyla (yerel paylaşım menüsü) açılır; olmazsa tarayıcı paylaşımı, o da olmazsa mesaj kopyalanır + WhatsApp) (sürüm 9.7c: kod kontrolünde pul v67d) (sürüm 9.7b: kurtarma kodu başka telefona taşındıysa bu telefon kendine YENİ kod alır — eski kodla yedek denemesi "izin yok" hatası vermez) (sürüm 9.7: HİLEYE KARŞI — galibiyet sunucuda maç maç sayılır: oyuncular/{uid}/galibiyetler/{oyunId} + gal +1 tek işlemde; normal bitişte oyunlar.sonuc = {kazanan}; telefondaki sayı açılışta sunucudakine eşitlenir; kodla geri yüklemede galibiyet de taşınır — Firestore kuralları v6 gerekir) (sürüm 9.6b: kod kontrolünde pul v67c) (sürüm 9.6: İLERLEME YEDEĞİ + KURTARMA KODU — bütün kayıt Firestore kodlar/{KOD} belgesine yedeklenir; Ayarlar'dan KODUM / GERİ YÜKLE) (sürüm 9.5: KOD SÜRÜM KONTROLÜ — yalnız önizlemede, bütün sahnelerdeki kodların sürümünü denetler, eski/eksik olanı ve TEST_HEDIYE'yi uyarır) (sürüm 9.4: "HAMLE YAP!" uyarısı sesli — 30. saniyede bir bip, son 10 saniyede her saniye; SÜRE EKRAN KAPALIYKEN DE AKAR — çevrim içi süreli oyunda ekran kilitlenip açılınca, kendi sıranda geçen süre hamle sayacına eklenir; süre dolduysa otomatik hamle hemen yapılır) (sürüm 9.3: bütün pencere düğmeleri dokulu 3B — oyundaki düğmelerle aynı gövde) (sürüm 9.2: GÜNCELLEME UYARISI — Firestore ayarlar/surum {android, ios}; eskiyse ana menüde günde bir kez "Yeni sürüm var!") (sürüm 9.1d: Android'de ÇAĞIR telefonun PAYLAŞ menüsünü açar — Paylaş uzantısı + paylasIste/paylasMetin olayları gerekir) (sürüm 9.1c: Android'de ÇAĞIR WhatsApp uygulamasını doğrudan açar) (sürüm 9.1b: canlı üç boyutlu düğmeler, "Seni …", karakter resimleri pr_avatar) (sürüm 9.1: ÇAĞIR — çevrimdışı arkadaşı WhatsApp'tan çağırma; çağrı 10 dk açık, çağıran menüde gezebilir, çağrılan oyunu açınca "seni çağırıyor" penceresi) (sürüm 9.0e: alttaki "SIRA SENDE / RAKİBİN SIRASI" yazısı kaldırıldı — sıra üstteki etikette görünüyor; çıkış ve "HAMLE YAP!" uyarıları kaldı) (sürüm 9.0d: 10 karakter, avatar 0–9) (9.0c: + çük/popo/pipi…) (9.0b: geniş ad filtresi) (9.0: ENGELLE/ŞİKÂYET, ad filtresi, bağlantı koptu şeridi, sürüm kontrolü, sinyal 60 sn) (8.9: 32 pul — pulSahip2/anaPul2/yedekPul2) (8.8: ARKADAŞLARIM) (8.7: çevrimiçi/çevrimdışı anında) (8.6: SON OYNADIKLARIN listesi) (8.5: hükmen metni) (8.4: hükmen galibiyet en az 6 hamleden sonra sayılır + 2 yıldız) (8.3: aynı pulda davet eden ana pulunu korur) (8.2: oyuncuların seçtiği pullar çevrimiçi maçta görünür) (8.1: sarı teşhis kutusu kapalı) (8.0): süresizde 3 dk sınır + uyarı, yeni pencere tasarımı, Oyuncu adları, aramada avatar + rütbe, DEĞER SORUSU beklemesi, EMOJİ + rakip avatarı, kimlik, ad, arama, çevrimiçi göstergesi, davet, eşleşme, RÜTBE (çevrimiçi galibiyet)
// Menu sahnesinde "Sahnenin başında" etkinliğinin ALT ETKİNLİĞİ olarak çalışır.
// Kullandığı genel değişkenler (Metin): oyuncuAdi, cevrimiciDurum, adSonuc, aramaSonuc, bulunanAd, bulunanUid
//                               (Sayı):  bulunanCevrimici
// Okuduğu genel değişkenler: sureSaniye, hedefTur, bilgisayar
// Eşleşmede yazdığı genel değişkenler: cevrimiciOyun (Sayı 0/1), cevrimiciOyunId (Metin),
//   rakipAd (Metin), benimRenk (Sayı: 0 belirsiz, 1 kırmızı, 2 yeşil), ayarYazisi (Metin),
//   sureSaniye, hedefTur
//   oyunlar/{davetId} → { davetciUid, davetliUid, kirmiziUid, yesilUid, sure, tur, olusturma }
//   oyunlar/{davetId}/hamleler/{n} → { n, renk (1/2), tur, k1, k2, hedef, kaynak, oto, zaman }
//   oyunlar/{id}.rovans → { 1: "evet"/"hayir", 2: ... }   oyunlar/{id}.sonraki → rövanş oyununun id'si
//   oyunlar/{davetId}.bitti → { kaybedenRenk, neden: "sure2" / "bekleme" / "kopma" / "ayrildi" / "kapandi" (v10.13) }
//   davetler/{id}     → { gonderenUid, gonderenAd, aliciUid, aliciAd, sure, tur,
//                         durum: bekliyor / kabul / red / iptal / zamanasimi / mesgul,
//                         olusturma, olusturmaMs, [v9.1 çağrı: cagri: true, bitisMs] }
//
// Firestore yapısı:
//   oyuncular/{uid}   → { ad, adKucuk, sonGorulme, gal, avatar }   (gal: çevrimiçi galibiyet → rütbe)
//   oyunlar/{id}/emojiler/{otomatik} → { renk (1/2), e (0-4), zaman }
// Rakibin avatarı: genel değişken rakipAvatar (Sayı, bilinmiyorsa -1)
// Rakibin galibiyeti: genel değişken rakipGal (Sayı, bilinmiyorsa -1)
//   adlar/{adKucuk}   → { uid }      (aynı adın iki kişiye verilmemesi için)

const game = runtimeScene.getGame();
if (window.MatrancCevrimici) window.MatrancCevrimici.sahneRef = runtimeScene;
const gv = (ad) => game.getVariables().get(ad);

const SURUM = "10.15c";
if (!window.MatrancCevrimici || window.MatrancCevrimici.surum !== SURUM) {
  const M = { surum: SURUM, emojiKuyruk: [] };
  // v10.13: iPhone'da HTML ekranların üst sırası durum çubuğunun / Dinamik Ada'nın altına iner (max(env(safe-area-inset-top),var(--mtrUst,0px)) WebView'da 0 olabiliyor)
  M.ustPayKur = () => {
    try {
      const ua = navigator.userAgent || "", ios = /iPhone|iPod/.test(ua);
      const yerel = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
      const uzun = Math.max(screen.width, screen.height) >= 812;          // çentikli / Dinamik Adalı iPhone
      const pay = ios && yerel ? (uzun ? 62 : 22) : 0;
      document.documentElement.style.setProperty("--mtrUst", pay + "px");
    } catch (e) {}
  };
  M.ustPayKur();

  // ---- TEŞHİS İZİ (sorun çözülünce kapatılacak): ekranın altında son olaylar ----
  M.IZ_ACIK = (() => { try { return !!(game.isPreview && game.isPreview()); } catch (e) { return false; } })();
  M.TABLET_TESHIS = false;   // v10.11g: tablet sorunu çözüldü (Bulanik efekti) → teşhis kutusu KAPALI
  if (M.TABLET_TESHIS) M.IZ_ACIK = true;   // v10.2a: teşhis kutusu YALNIZ önizlemede (mektup testi için)
  M.iz = (t) => {
    console.log("MATRANC iz: " + t);
    if (!M.IZ_ACIK) return;
    let k = document.getElementById("mtrIz");
    if (!k) {
      k = document.createElement("div"); k.id = "mtrIz";
      k.style.cssText = "position:fixed;left:6px;right:6px;top:6px;z-index:2147483647;background:rgba(255,224,102,.95);" +
        "color:#111;font:12px monospace;padding:6px 8px;border-radius:6px;white-space:pre-wrap;max-height:40vh;overflow:auto";
      k.onclick = () => k.remove();
      document.body.appendChild(k);
    }
    M.izSatirlar = (M.izSatirlar || []).concat(new Date().toLocaleTimeString() + "  " + t).slice(-10);
    k.textContent = M.izSatirlar.join("\n");
  };

  // Sistem adlarına benzeyen ve ayrılmış kelimeler. Uygunsuz kelime listesi Aşama 8'de eklenecek.
  M.YASAK = ["admin", "moderator", "yonetici", "yönetici", "matranc", "matranç", "destek"];

  // ---- v9.0: UYGUNSUZ AD FİLTRESİ ----
  // Ad önce sadeleştirilir: küçük harf, Türkçe harf → düz harf, rakam hileleri (0→o, 1→i, 3→e, 4→a, 5→s, 7→t, 8→b, 9→g),
  // art arda tekrar eden harfler teke iner ("yarrrak" → "yarak"). Liste de bu sade biçimde yazılır.
  M.sadelestir = (ad, rakamSil) => {
    const tr = { "ç": "c", "ğ": "g", "ı": "i", "i̇": "i", "ö": "o", "ş": "s", "ü": "u", "â": "a", "î": "i", "û": "u" };
    const rk = { "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "8": "b", "9": "g" };
    let t = (ad || "").toLocaleLowerCase("tr").split("").map((c) => tr[c] || (rakamSil ? "" : rk[c]) || c).join("");
    t = t.replace(/[^a-z]/g, "");
    return t.replace(/(.)\1+/g, "$1");
  };
  // İçinde geçtiği her yerde yasak (4+ harf)
  M.KUFUR = ["orospu", "orsp", "amcik", "aminakoy", "aminako", "anani", "ananin", "sikis", "sikik", "siktir", "sikim", "sikir",
    "siker", "sikey", "yarak", "yarag", "dalyarak", "tasak", "tasag", "pezevenk", "pezo", "kahpe", "kaltak", "yavsak", "gavat", "ibne",
    "puust", "pust", "serefsiz", "gerizekali", "salak", "aptal", "piclik", "kerhane", "fahise", "sokarim", "sokayim", "bokum", "boktan",
    "gotun", "gotum", "gotveren", "zenci", "seks", "sex", "penis", "vajina", "fuck", "shit", "bitch", "bich", "cunt",
    "pusy", "whore", "slut", "dick", "cock", "asshole", "bastard", "niga", "niger", "hitler", "rape", "terorist", "isid",
    // v9.0b ek liste
    "aminakodum", "amcig", "orspu", "orosbu", "sktir", "siktr", "sikko", "yarami", "yaragi", "dangalak", "hiyar", "lavuk", "kancik",
    "surtuk", "kasar", "denyo", "dumbuk", "oglanci", "travesti", "otuzbir", "mastur", "porn", "horny", "tits", "faggot", "retard",
    "motherf", "sucker", "kerhane", "gavat", "pezeveng", "kodumun", "kodugum", "sikeyim", "sokuk", "ebeni", "bacini", "avradini",
    // v9.0c çocuk dili / beden
    "popo", "pipi", "osur", "gogus", "donsuz", "kulot", "sutyen", "ciplak"];
  // Yalnız adın tamamıysa ya da adın BAŞINDAYSA yasak (kısa kökler: "Işık", "Ocak" gibi adlar takılmasın)
  M.KUFUR_KISA = ["sik", "amk", "aq", "mk", "got", "pic", "oc", "mal", "fck", "sg", "siq", "amq", "ami", "pk", "skm", "sks", "sktr", "oe", "cuk", "kic", "kaka", "cis", "meme", "bok"];
  M.KUFUR_TAM = ["oc", "aq", "mk", "sg", "mal", "ami", "oe", "kaka", "cis", "meme", "bok"];   // bunlar yalnız adın TAMAMIYSA (Ocak, Malik, Amir… serbest)
  M.KUFUR = M.KUFUR.map((w) => w.replace(/(.)\1+/g, "$1"));
  M.uygunsuzMu = (ad) => {
    const t = M.sadelestir(ad).replace(/isik/g, "ix").replace(/seksen/g, "x").replace(/^cukur/, "x");      // "Işık", "Seksen", "Çukur" serbest
    if (!t) return false;
    const tSil = M.sadelestir(ad, true);      // sondaki rakamlar atılmış hâli ("Kaka99" → "kaka")
    if (M.KUFUR.some((w) => t.includes(w))) return true;
    for (const w of M.KUFUR_KISA) {
      if (M.KUFUR_TAM.includes(w)) { if (t === w || tSil === w) return true; }
      else if (t === w || t.startsWith(w)) return true;
    }
    return false;
  };

  // ---- v9.0: SÜRÜM ----
  // Oyunun sürümü GDevelop'taki "Oyun özellikleri → Sürüm" alanından okunur (ör. 1.0.0).
  // İlk iki sayı (1.0) aynıysa birlikte oynanabilir. Oyun kuralı/çevrim içi değişen güncellemelerde ORTADAKİ sayı artırılır (1.1.0).
  M.uygSurum = () => { try { return String(game.getGameData().properties.version || "0"); } catch (e) { return "0"; } };
  M.anaSurum = (v) => String(v || "0").split(".").slice(0, 2).map((x) => parseInt(x, 10) || 0);
  M.surumKarsi = (a, b) => { const x = M.anaSurum(a), y = M.anaSurum(b); return x[0] !== y[0] ? x[0] - y[0] : (x[1] || 0) - (y[1] || 0); };
  // ---------- v9.2: güncelleme uyarısı ----------
  M.surum3 = (v) => String(v || "0").split(".").slice(0, 3).map((x) => parseInt(x, 10) || 0);
  M.surumKarsi3 = (a, b) => { const x = M.surum3(a), y = M.surum3(b); for (let i = 0; i < 3; i++) { const f = (x[i] || 0) - (y[i] || 0); if (f) return f; } return 0; };
  M.guncelBekleyen = null;
  M.guncellemeKontrol = async () => {
    try {
      const s = await firebase.firestore().collection("ayarlar").doc("surum").get();
      if (!s.exists) return;
      const d = s.data() || {}, ios = M.iosMu();
      window.MatrancJokerKapali = d.joker === false;   // v10.14: geri alma jokeri uzaktan kapatma
      const son = String((ios ? d.ios : d.android) || "").trim();
      const url = ios ? M.MAGAZA_IOS : M.MAGAZA_ANDROID;
      if (!son || !url || M.surumKarsi3(son, M.uygSurum()) <= 0) return;
      const bugun = new Date().toISOString().slice(0, 10);
      let son_sorulan = ""; try { son_sorulan = localStorage.getItem("mtrGuncelSor") || ""; } catch (e) {}
      if (son_sorulan === bugun + "|" + son) return;          // bugün bu sürüm için zaten soruldu
      M.guncelBekleyen = { son: son, url: url, bugun: bugun };
      if (!M.guncelZaman) M.guncelZaman = setInterval(M.guncelGoster, 1000);
    } catch (e) { console.log("MATRANC güncelleme kontrolü: " + e); }
  };
  M.guncelGoster = () => {
    const G = M.guncelBekleyen;
    if (!G) { clearInterval(M.guncelZaman); M.guncelZaman = 0; return; }
    if (M.sahneAdi() !== "Menu" || document.getElementById("mtrPencere") || document.getElementById("mtrBant")) return;   // yalnız ana menüde, başka pencere yokken
    M.guncelBekleyen = null;
    const not = () => { try { localStorage.setItem("mtrGuncelSor", G.bugun + "|" + G.son); } catch (e) {} };
    M.pencereAc();
    const p = document.getElementById("mtrPencere"); if (!p) return;
    p.querySelector(".mtr-mesaj").innerHTML =
      '<svg width="78" height="78" viewBox="0 0 100 100" style="display:block;margin:0 auto 8px"><circle cx="50" cy="50" r="46" fill="#45d465" stroke="#178a35" stroke-width="5"/>' +
      '<path d="M50 22 L50 62" stroke="#fff" stroke-width="11" stroke-linecap="round"/><path d="M31 46 L50 66 L69 46" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M30 76 L70 76" stroke="#fff" stroke-width="8" stroke-linecap="round"/></svg>' +
      '<div style="font-size:28px;font-weight:800;color:#2b3452;margin-bottom:6px">Yeni sürüm var!</div>' +
      '<div style="font-size:16px;font-weight:700;color:#5a6280;line-height:1.45">MATRANÇ ' + M.yaziTemiz(G.son) + ' hazır.<br>Yeniliklerden yararlanmak için<br>oyunu güncelle.</div>';
    const satir = p.querySelector(".mtr-satir"); satir.innerHTML = "";
    const b1 = document.createElement("button"); b1.className = "mtr-btn mtr-koyu"; b1.textContent = "SONRA";
    b1.onclick = () => { M.sesCal(); not(); M.pencereKapat(); };
    const b2 = document.createElement("button"); b2.className = "mtr-btn"; b2.textContent = "GÜNCELLE";
    b2.onclick = () => { M.sesCal(); not(); M.pencereKapat(); M.urlAc(G.url); };
    satir.appendChild(b1); satir.appendChild(b2);
  };
  M.YENI_SURUM_YAZI = "Oyunun yeni bir sürümü var!\nÇevrimiçi oynamak için MATRANÇ'ı mağazadan güncelle.";

  M.durumYaz = (d) => { gv("cevrimiciDurum").setString(d); console.log("MATRANC durum: " + d); };
  M.kucuk = (ad) => ad.toLocaleLowerCase("tr");
  M.rastgeleAd = () => "Oyuncu" + (10000 + Math.floor(Math.random() * 90000));
  M.zaman = () => firebase.firestore.FieldValue.serverTimestamp();

  // Firebase'in yüklenip başlatılmasını bekle (en fazla 15 saniye)
  M.firebaseBekle = () => new Promise((coz, reddet) => {
    const bas = Date.now();
    const dene = () => {
      if (typeof firebase !== "undefined" && firebase.apps && firebase.apps.length > 0) return coz();
      if (Date.now() - bas > 15000) return reddet(new Error("Firebase yüklenmedi (projede Firebase eylemi/koşulu var mı?)"));
      setTimeout(dene, 200);
    };
    dene();
  });

  // Kayıtlı kimliği bekle; hiç yoksa anonim giriş yap (kimlik cihazda hatırlanır)
  M.girisBekle = () => new Promise((coz, reddet) => {
    const iptal = firebase.auth().onAuthStateChanged(async (k) => {
      iptal();
      try { coz(k || (await firebase.auth().signInAnonymously()).user); }
      catch (e) { reddet(e); }
    }, reddet);
  });

  // Boş bir "OyuncuNNNNN" adı bulup oyuncuya ayırır
  M.yeniAdAyir = async (uid) => {
    const db = firebase.firestore();
    const oyuncuRef = db.collection("oyuncular").doc(uid);
    for (let i = 0; i < 10; i++) {
      const ad = M.rastgeleAd();
      const adRef = db.collection("adlar").doc(M.kucuk(ad));
      const oldu = await db.runTransaction(async (t) => {
        const s = await t.get(adRef);
        if (s.exists) return false;
        t.set(adRef, { uid: uid });
        t.set(oyuncuRef, { ad: ad, adKucuk: M.kucuk(ad), sonGorulme: M.zaman(), surum: M.uygSurum() });
        return true;
      });
      if (oldu) return ad;
    }
    throw new Error("Boş ad bulunamadı");
  };

  // v10.2d: mevcut oyuncuya yeni boş ad (yalnız ad alanları değişir; galibiyet, avatar, pul korunur)
  M.adOnar = async (uid) => {
    const db = firebase.firestore(), oyuncuRef = db.collection("oyuncular").doc(uid);
    for (let i = 0; i < 10; i++) {
      const ad = M.rastgeleAd(), adRef = db.collection("adlar").doc(M.kucuk(ad));
      const oldu = await db.runTransaction(async (t) => {
        const s = await t.get(adRef);
        if (s.exists) return false;
        t.set(adRef, { uid: uid });
        t.update(oyuncuRef, { ad: ad, adKucuk: M.kucuk(ad) });
        return true;
      });
      if (oldu) return ad;
    }
    throw new Error("Boş ad bulunamadı");
  };

  // Oyun açılınca: giriş + kullanıcı adı (yoksa yeni ad)
  M.kimlikHazirla = async () => {
    try {
      M.durumYaz("baglaniyor");
      await M.firebaseBekle();
      const k = await M.girisBekle();
      M.uid = k.uid;
      const db = firebase.firestore();
      const oyuncuRef = db.collection("oyuncular").doc(k.uid);
      const snap = await oyuncuRef.get();
      if (snap.exists && snap.data().ad) {
        M.ad = snap.data().ad;
        await oyuncuRef.update({ sonGorulme: M.zaman(), cevrimici: true, surum: M.uygSurum() });
        M.galEsitle(snap.data().gal);   // v9.7: sunucudaki sayı geçerli
        setTimeout(() => { try { M.rutbeKontrol(Number(snap.data().gal) || 0); } catch (e) {} }, 1500);   // v10.15: ilk açılışta toplu rütbe hediyesi
        // v10.2d: ad başka hesaba kayıtlıysa (eski cihaz / kod geri yükleme kalıntısı) bu hesaba yeni ad
        try {
          const a = await db.collection("adlar").doc(M.kucuk(M.ad)).get();
          if (!a.exists || a.data().uid !== k.uid) {
            const eskiAd = M.ad;
            if (!a.exists) await db.collection("adlar").doc(M.kucuk(M.ad)).set({ uid: k.uid });
            else M.ad = await M.adOnar(k.uid);
            M.iz("ad onarımı: " + eskiAd + (M.ad !== eskiAd ? " → " + M.ad : " (kaydı yenilendi)"));
          }
        } catch (e) { M.iz("AD ONARIM HATASI: " + (e && e.message ? e.message : e)); }
        M.avatarGonder();
        M.pulGonder();
        // eski "PlayerNNNNN" adlarını "OyuncuNNNNN" yap (ad boştaysa)
        const eski = /^Player(\d{3,6})$/.exec(M.ad || "");
        if (eski) {
          const r = await M.adDegistir("Oyuncu" + eski[1]);
          gv("adSonuc").setString("");
          console.log("MATRANC ad dönüşümü: " + r);
        }
      } else {
        M.ad = await M.yeniAdAyir(k.uid);
      }
      gv("oyuncuAdi").setString(M.ad);
      M.durumYaz("hazir");
      M.nabizBaslat();
      M.musaitlikTakibi();
      M.davetDinle();
      M.mektupDinle();          // v10.0
      M.eskiCagrilariKapat();   // v9.1
      M.guncellemeKontrol();    // v9.2
      M.yedekBaslat();          // v9.6
      M.bildirimKur();          // v9.8
    } catch (e) {
      console.error("MATRANC kimlik hatası:", e);
      M.sonHata = (e && e.code ? e.code + " | " : "") + (e && e.message ? e.message : String(e));
      M.durumYaz("hata");
    }
  };

  // Ad değiştirme (Aşama 2'deki ekrandan çağrılacak)
  // Sonuç adSonuc değişkenine yazılır: ok / gecersiz / uygunsuz / alinmis / hata
  M.adDegistir = async (yeniAd) => {
    const sonuc = (s) => { gv("adSonuc").setString(s); console.log("MATRANC ad değiştirme: " + s); return s; };
    yeniAd = (yeniAd || "").trim();
    if (!/^[A-Za-z0-9ÇĞİÖŞÜçğıöşü]{3,12}$/.test(yeniAd)) return sonuc("gecersiz");
    const kucuk = M.kucuk(yeniAd);
    if (M.YASAK.some((w) => kucuk.includes(w)) || M.uygunsuzMu(yeniAd)) return sonuc("uygunsuz");
    if (!M.uid) return sonuc("hata");
    const db = firebase.firestore();
    const yeniRef = db.collection("adlar").doc(kucuk);
    const eskiRef = M.ad ? db.collection("adlar").doc(M.kucuk(M.ad)) : null;
    const oyuncuRef = db.collection("oyuncular").doc(M.uid);
    try {
      const durum = await db.runTransaction(async (t) => {
        const s = await t.get(yeniRef);
        if (s.exists && s.data().uid !== M.uid) return "alinmis";
        if (eskiRef && eskiRef.id !== kucuk) t.delete(eskiRef);
        t.set(yeniRef, { uid: M.uid });
        t.update(oyuncuRef, { ad: yeniAd, adKucuk: kucuk });
        return "ok";
      });
      if (durum === "ok") { M.ad = yeniAd; gv("oyuncuAdi").setString(yeniAd); }
      return sonuc(durum);
    } catch (e) {
      console.error("MATRANC ad değiştirme hatası:", e);
      return sonuc("hata");
    }
  };

  // "Buradayım" sinyali: oyun açıkken 60 saniyede bir sonGorulme güncellenir (v9.0: 15 → 60 sn; arka plandayken gönderilmez)
  M.nabizBaslat = () => {
    if (M.nabiz) return;
    M.nabiz = setInterval(() => {
      if (!M.uid || document.visibilityState === "hidden") return;
      firebase.firestore().collection("oyuncular").doc(M.uid)
        .update(Object.assign({ sonGorulme: M.zaman(), musait: M.musaitMi(), cevrimici: document.visibilityState !== "hidden" }, M.pulOku())).catch(() => {});
    }, 60000);
    // oyun kapanınca / arka plana alınınca hemen "çevrimdışı", geri gelince hemen "çevrimiçi"
    if (!window.__mtrVarlik) {
      window.__mtrVarlik = true;
      const yaz = (on) => {
        if (!M.uid) return;
        try {
          firebase.firestore().collection("oyuncular").doc(M.uid)
            .update(on ? Object.assign({ sonGorulme: M.zaman(), musait: M.musaitMi(), cevrimici: true }, M.pulOku()) : { cevrimici: false }).catch(() => {});
        } catch (e) {}
      };
      document.addEventListener("visibilitychange", () => yaz(document.visibilityState === "visible"));
      window.addEventListener("pagehide", () => yaz(false));
      window.addEventListener("pageshow", () => yaz(true));
    }
  };

  // Arkadaş arama. Sonuç aramaSonuc değişkenine yazılır:
  //   bulundu / yok / kendin / gecersiz / hata
  // Bulunursa: bulunanAd, bulunanUid, bulunanCevrimici (1 = son 60 sn içinde oyunda)
  M.ara = async (metin) => {
    const sonuc = (s) => { gv("aramaSonuc").setString(s); console.log("MATRANC arama: " + s); return s; };
    gv("bulunanAvatar").setNumber(-1); gv("bulunanGal").setNumber(-1);
    metin = (metin || "").trim();
    if (!/^[A-Za-z0-9ÇĞİÖŞÜçğıöşü]{3,12}$/.test(metin)) return sonuc("gecersiz");
    if (!M.uid) return sonuc("hata");
    const kucuk = M.kucuk(metin);
    if (M.ad && kucuk === M.kucuk(M.ad)) return sonuc("kendin");
    try {
      const db = firebase.firestore();
      const a = await db.collection("adlar").doc(kucuk).get();
      if (!a.exists) return sonuc("yok");
      const uid = a.data().uid;
      const o = await db.collection("oyuncular").doc(uid).get();
      if (!o.exists) return sonuc("yok");
      const d = o.data();
      const son = d.sonGorulme && d.sonGorulme.toMillis ? d.sonGorulme.toMillis() : 0;
      gv("bulunanAd").setString(d.ad);
      gv("bulunanUid").setString(uid);
      gv("bulunanCevrimici").setNumber(d.cevrimici !== false && Date.now() - son < M.CEVRIMICI_ESIK ? 1 : 0);
      const av = Number(d.avatar); gv("bulunanAvatar").setNumber(av >= 0 && av <= 9 ? Math.round(av) : 0);
      gv("bulunanGal").setNumber(Number(d.gal || 0));
      return sonuc("bulundu");
    } catch (e) {
      console.error("MATRANC arama hatası:", e);
      return sonuc("hata");
    }
  };


  // =====================================================================
  //  DAVET (Aşama 3)
  // =====================================================================
  M.OYUN_SAHNESI = "İsimsiz sahne";
  M.DAVET_SURESI = 30;   // saniye

  M.sahneAdi = () => {
    try { return game.getSceneStack().getCurrentScene().getName(); } catch (e) { return ""; }
  };
  // Oyun sahnesinde ve bilgisayara karşı DEĞİLSE (tek cihaz / çevrim içi oyun) müsait değil
  M.musaitMi = () => {
    const ad = M.sahneAdi();
    if (ad === "Eslesme") return false;
    if (ad === M.OYUN_SAHNESI && gv("bilgisayar").getAsNumber() === 0) return false;   // tek cihaz / çevrim içi
    return true;
  };

  M.musaitlikTakibi = () => {
    if (M.musaitSayac) return;
    M.sonMusait = null;
    M.musaitSayac = setInterval(() => {
      const m = M.musaitMi();
      if (m !== M.sonMusait && M.uid) {
        M.sonMusait = m;
        firebase.firestore().collection("oyuncular").doc(M.uid).update({ musait: m }).catch(() => {});
      }
      if (!m && M.gelenDavet) { if (M.gelenDavet.cagri) M.bantKapat(); else M.davetCevapla("mesgul"); }
      try { M.cagriKontrol(m); M.gidenCagriTik(); } catch (e) { console.error("MATRANC çağrı:", e); }   // v9.1
    }, 1000);
  };

  M.sesCal = () => {
    try { game.getSoundManager().playSound("dugme.wav", false, 40, 1); } catch (e) {}
  };
  M.ayarYazi = (sure, tur) => (sure > 0 ? sure + " SN" : "SÜRESİZ") + "  ·  " + tur + " TUR";

  // ---------- v9.3: dokulu 3B düğme gövdeleri (oyundaki EVET/ARA/VAZGEÇ ile aynı üretim; yazı üstüne yazılır, boy uzar) ----------
  M.HAP = {"yesilL": "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", "yesilR": "UklGRrwGAABXRUJQVlA4WAoAAAAQAAAAUQAAowAAQUxQSH4CAAABoCTbtmnbGnOu+WwkbZUBXwWwVQI9lOMkXwG+zeQz6vBt29pzrTm+dUbEz72IiAnAJfaaman5fYuIMJOxevXqlfjjCNfw5Zdffvr04w/devX6BQAsXAD//OuXHrxtNwBrNm9VVZmZnSR/Pnt4D4Cw+eKf18hOcjpx4zIgTMLvqyfJV+5eBoQKktU7+fLdy2Aug+To5Mt3AyGEHJ08vQ/uQsiR/P4wEErITj6yASGFNfGNyxFSyCRvRzMpHIOH4SaF1Xk/3KSQP/P+tsC08GfOsFBMTf0OhBbW4PUILRzjo23mWpg838K0cOIMIaayH0TTwsGXFrtpYXKGEFPjhy3mWpg8jhBT47st5lqYPI4QU+P7beZamJwhxIx6Y6WZFiZvRKipx+UUP18L08LkTQg598sZfGmhiWH9tBcuJnk9Qs5M0BNyBl9cZqal+N1ayPl8mRr26SCamOStCDnXC7rhf9qNeuoaNcWv1sPkrNLziZzksxZQ8wD03CWn5wE0LcWPlsG0JF/wgJpjUFM/bYdr6bzoDVqSRxBaany1Fa4l+SQCWjqvRNPSeQYNai5T03kGDWLqMjWdZ9AgpfoPu821TDyMgJTk+RYmZdRH28yhpKZ+PQJSJs6wAFKS97cFJmXiebhBycQ3trlDSfKNrXAoSZ7eioCQ0fkA4BCS5Azu0FET370ZzaCjk6e3YgHm8Z/qg98fBgIy+iBP7oc7RFQf5ImrgMC8/p3qSfLEVYA7FFRPkt89dhXgDXP8u6rKzCL589kjuwBrmOvM7PzjT54+vBtAa5hzkvz6y0+ffvDWgysBWDjm/oYbbrhm/eqV+H0Lh9AW0QwiIyLMDJduDFZQOCAYBAAAcBoAnQEqUgCkAD4pFIhCoaEhEuoErBgChLKAa25c40Pbfx5/Jnq2+K5Lr5Tmr5gO254nPT38xP60f8D2wPRF6AH9V/uHq3epB6AHmj/5P9sfgS/bT9yfgL/kv9l/8t18Ogb0HX4bTTrCIqU3prWbn5Sm4gI/VN126UTtnjP+rneS49sa4vizoUHbU42MSft7LCUKeOz6d4OHGZY+rUYYBIxHvFFGqAuxZxMVWH/FYGO5HaVGNyyYbFAQ6TAulRHZ2TlQeUgJ93jn/20xZ2kJnfvMLLYnd3d3d3dzAAD+/w1kIvxArPI998yJkP/uq9fRjJgvkLHnCY48yvhT6n213vy164LY5d7Qmz64JdifbK2LBCcfLOAlgyK2o/aKdZCJp5su4lv9lfH5zOIdskIfadjxgetiZTSH6u8HtAIUjhP4GPLbnY+SmpcN1uRi3Kq8M+/xTohFc4ln2ryDU8RWDP8J8boD+fyL1mwYmowezTwD+oaxUmvmI53rpWSvi4QX6/78BofYKubfptSV1L1/yS5ki7kQJvWa0ox4fS2tzjFcLX02J7m6VbQtB+/Q8xvc2AUuenW35XwOnfW3CE8Dm8bof2CyxhAI9gSk4BhTQpNiOCNjVquBUNbS41DKjAG1YHn0nvMzXXn/Nx2rDx0YLzX/1Ny78CThAF8ypOM6fa//8gAG71K/TQFQ6NImaxwjx8XDTz5bhHlGN+ptXb0FD24JHi9WFl9hQqxTam22dpIk6GYywg2nHGu48/+SciUnF0kQLSrGkE2UQs68F95aOEIUxP2vW6nvNO89ZEziE/F/pTStk4yiivcA7FIMWndv/DmuB0y+SnQEZi7Y2jTmnHNJ+rzEeY9MqmUP4lkVEyc6tX1VU0EC9YH/v/xeiWHVAkkZB6f+rnqhIlCGaI28BS0+phgZHM0+s2COl1cOG+l/dF6Z3fP4njbp40+18V3HvAXz1XSOOH7bMN3mX3Q/EWTgSq43Eum8aMHo5PMij62H/pzfV6G7r7t4PUcd19KxXBbuvOp36rn//rWX/9aM//+srLs9UIn41VoA4Fv1x3jDxxiB3eK78+/mRSKHFJ84ofJCXqcWVwWixQRXS2KgYQqYavrP8T5n79DPoutNNfJxEdcevUhAS6ry0IRtaRiP4M4SzgsTbFQX+uQEvsSzHmO2RmPhtj6sF8pvHq2mRX/u0KNpMb2b9b9Og/30tS9TCoA5NSSEeHdlaUR4/9m/+4Yb8s3KD/a4XPp/ETIEX3UvQC5MiXko3HbJt7yixiEbbVGsTBK7tiwxIkiMykcLSSn/ujpri1oAZrnSD5vNMvF8suuCXtxSdTj/AKv8n2oL/Ad//6XT//SwH//pQqcG3Www8s1SB/5ZLzd9cCcIwdZQAAAAAAAAAA==", "yesilM": "UklGRhwBAABXRUJQVlA4WAoAAAAQAAAABwAAowAAQUxQSCQAAAABUBNJUnRUIQBz+JeAgDfqmCeKiIxjJ4JCY7PY37qzqQSZODZWUDgg0gAAAJAIAJ0BKggApAA+KRCGQiGhDFyuAAwBQllAM3z9waHxFL/7gGCAf4D+Ae//dgH+ApXdn/6jwtey1pW/uLrX5hDpw2AF/GK/VriCnFAAAP7/DWdPqBCtNj6dE0aHeSjPfv4lhyATn+/EsOQCf0TzlptaQlVYCvWSKkp0bD32Um2PssyKyvg/a0OZXvZE4OrGrXkQXAtDIRvG6hGPRsmw/7oCgWgSZYiLhQYWSjYRJUQZ65tcxCrqNf90dwrXj0pvihbyo/O7TGeo1v1nGhkBMYAAAA==", "maviL": "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", "maviR": "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", "maviM": "UklGRi4BAABXRUJQVlA4WAoAAAAQAAAABwAAowAAQUxQSCQAAAABUBNJUnRUIQBz+JeAgDfqmCeKiIxjJ4JCY7PY37qzqQSZODZWUDgg5AAAABAIAJ0BKggApAA+KRCGQiGhDFyuAAwBQllAM/TjolfuFL/7cf+A/IDFM/4B7f92AfwBvfwrBXpXbo6Q2WLRg3LwHwAKZXByvYAA/v8Ngf/xjh///rur9Zs4QhdZ/XIPMQGpyURz+nIy31JGfZtuU7HJ9pAEoa1KxcxMIBt9uaB/idzjDyFWO1/AT4qL1iCedIRXMk4aFFJdwPcapUXDC1iLhgxnzngmOvHRUuFDPzNRJgEe5HnF1txz5Tw4x/KxSddM4Po2vL/7Vy+ey+mUy/de78bDb+HTHky/9/rjOb4wAAAAAA==", "kirmiziL": "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", "kirmiziR": "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", "kirmiziM": "UklGRiIBAABXRUJQVlA4WAoAAAAQAAAABwAAowAAQUxQSCQAAAABUBNJUnRUIQBz+JeAgDfqmCeKiIxjJ4JCY7PY37qzqQSZODZWUDgg2AAAAHAIAJ0BKggApAA+KRCGQiGhDF6qAAwBQljAM7jr8o/xFL/7gGCAf4D+Ae//dgH+Apz37/DcAGtmUQVXDxB9ouR+OIO1zqce2zB1UAAA/v8NZ9gV/8+7HtlfIfpn//jt78qw/D8cxb8qw/D8a0uMqWbjKqE5mOnK/MfYPgWosXhTD+Nd+Bf3kqrOLHNbESpEWyDrm1U6EG1xUMGmB10o1mmf9g2cuZYatrofttCcTJO6+r25ivnB9G0P/tXPuX8JKb4oW8qN3/0xsiQESv+3aiywylhSNAAAAA==", "griL": "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", "griR": "UklGRrYFAABXRUJQVlA4WAoAAAAQAAAAUQAAowAAQUxQSH4CAAABoCTbtmnbGnOu+WwkbZUBXwWwVQI9lOMkXwG+zeQz6vBt29pzrTm+dUbEz72IiAnAJfaaman5fYuIMJOxevXqlfjjCNfw5Zdffvr04w/devX6BQAsXAD//OuXHrxtNwBrNm9VVZmZnSR/Pnt4D4Cw+eKf18hOcjpx4zIgTMLvqyfJV+5eBoQKktU7+fLdy2Aug+To5Mt3AyGEHJ08vQ/uQsiR/P4wEErITj6yASGFNfGNyxFSyCRvRzMpHIOH4SaF1Xk/3KSQP/P+tsC08GfOsFBMTf0OhBbW4PUILRzjo23mWpg838K0cOIMIaayH0TTwsGXFrtpYXKGEFPjhy3mWpg8jhBT47st5lqYPI4QU+P7beZamJwhxIx6Y6WZFiZvRKipx+UUP18L08LkTQg598sZfGmhiWH9tBcuJnk9Qs5M0BNyBl9cZqal+N1ayPl8mRr26SCamOStCDnXC7rhf9qNeuoaNcWv1sPkrNLziZzksxZQ8wD03CWn5wE0LcWPlsG0JF/wgJpjUFM/bYdr6bzoDVqSRxBaany1Fa4l+SQCWjqvRNPSeQYNai5T03kGDWLqMjWdZ9AgpfoPu821TDyMgJTk+RYmZdRH28yhpKZ+PQJSJs6wAFKS97cFJmXiebhBycQ3trlDSfKNrXAoSZ7eioCQ0fkA4BCS5Azu0FET370ZzaCjk6e3YgHm8Z/qg98fBgIy+iBP7oc7RFQf5ImrgMC8/p3qSfLEVYA7FFRPkt89dhXgDXP8u6rKzCL589kjuwBrmOvM7PzjT54+vBtAa5hzkvz6y0+ffvDWgysBWDjm/oYbbrhm/eqV+H0Lh9AW0QwiIyLMDJduDFZQOCASAwAA0BQAnQEqUgCkAD4pFIdCoaEKjSYuDAFCWkA1mBu1FFm9tnz4fnb76BvKdaE+jM6TnQJbakQPe/exjMiP33VCuOPwqIqSBdiAGgUcvVvDseYR28IHOJvBopWcE1czVcl5ZxkRuvUa6KaYt6nZtWzaBhX+YKW3jc6rb4ir3kYU/bhyXoCQ24jAbOLDKmXwFsE9FKlpFrPptePVIge+ut4V9Sg/v9UZz1SZEj6Qf4OoAAD+/tAcCz/8tHq/SWyBCoK7oHJ119Ar2yu9+W22CVDh+mUKmzy/zryMUKnqlicFVMaU/eYyzmex/IKUB+9SVEL6wZaVPrAKDVaRaW/CrXsxURGAML+O17iickxVXR4dXvnf+QLzQnWzziFMHmQTTnBJb1ObpkYyCQxCoezSIkmAZtpV0eE8WuoAtY+DOZ0Ra9GMHnXPKGhEqlvVOkdxfI/iU/WOoTN08SHHt60RngE2BSASGUpf1F15zs5r9MruAjmKxcCG2Fhcir/M6VUd6lXDkcZkZ3biGntqo/xXad/iFu+NGKqTK3Xo7qJLUU/st5Iy4zQw5orWAgwZPzE+VGZxbOGTpoEM4LuL8bkUo5ReruKCgkdSSBoCjiKLBVxDJc/YdwsbSmpBvqMieAC+xfhzcg3EhD/dYz2lXH/1atO2FfDj8kbfuKS417764UAdiQgMlN4X+CcurkCjdxSRmPKvE72JKHh2DoxQxeW9P6mKL/wbFRz/08M2zEYb5LvDGohtxsYvoE8TUhdITJrQqhCnIOZVd/0mP//fK//98R///e7MR2MRAaq2z7yNOnYJJk3w3jEZkT+JA3zMXVBqzlsM+pTRElQ8P66WepkP3qtIPVqv9fLpk1j3M/1/NULC0sZcD4fDBZy1hYWsExd1kBbsXf8V04N4P5FOD0/poBoqxGa1XKAeX2tJDy9rPWMogCN2PAWRzn9+xE9gGqvoDAFArRF+YnMw9Hx8kpXUzg7anelmaET8cPUAk0pBaSo1zYA3kw0gZuLr/e3//9yG//uNR//7iAkss6r6JpegAAAAAAAA", "griM": "UklGRuYAAABXRUJQVlA4WAoAAAAQAAAABwAAowAAQUxQSCQAAAABUBNJUnRUIQBz+JeAgDfqmCeKiIxjJ4JCY7PY37qzqQSZODZWUDggnAAAABAGAJ0BKggApAA+JRCGQiGhDFoADAEiWkA0kX/7bjWf/poChJpLqtcsibI8JjWpwNPv3cP3X5XsAAD+/u6rt/WhJRr1p+Un8N178F4WWsAmn946AhXfS6v6uqazV12L9pCfSPNpb2u1D7fxbdWaK9wLTXz4pFFkOhqi0y0efmtuDTVmaDkf8MLwBS9MynJ/8PQyzBh4SvuhPgwAAA==", "sariL": "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", "sariR": "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", "sariM": "UklGRj4BAABXRUJQVlA4WAoAAAAQAAAABwAAowAAQUxQSCQAAAABUBNJUnRUIQBz+JeAgDfqmCeKiIxjJ4JCY7PY37qzqQSZODZWUDgg9AAAAJAJAJ0BKggApAA+KRCGQiGhDF4CAAwBQljAM0DpkhHsH4zbk3J3//+4l/gP4Bhmf+A/gHv/3ar/gG9/DJrEYAe9mCsMuciRiwnWLBiYpDjB45ck4EAA/v8NZtP/+WirdV3LipRmXA9lxUozIzuFxkEjky++1+sy3mIqjps8peOCNfsCPb64yYYCPPcpxdfqgO8URiZll3P9ZQF+2qF5LJ0OzdKJ7HywJcaUApuBonzK7v1dM4Pv4ssAJHjaUlXFwcvEnymzuOA8v7xNtlUHtcNDb1Xz4HvRv/xDuzXt794/n48rTJPxzmZ0cbb0EqeHNwAAAAA="};
  M.dugme3BStil = () => {
    if (document.getElementById("mtrDugme3B2")) return;
    const st = document.createElement("style"); st.id = "mtrDugme3B2";
    st.textContent = '.mtr-btn{position:relative;isolation:isolate;background:none!important;box-shadow:none!important;border:0!important;overflow:visible!important}.mtr-btn::before{content:"";position:absolute;z-index:-1;pointer-events:none;display:block!important;top:calc(var(--h) * -.354);bottom:calc(var(--h) * -.354);left:calc(var(--h) * -.354);right:calc(var(--h) * -.354);background-repeat:no-repeat;background-position:left top,right top,center top;background-size:auto 100%,auto 100%,calc(100% - var(--h) * 1.6) 100%;filter:drop-shadow(0 calc(var(--h) * .11) calc(var(--h) * .09) rgba(0,0,0,.32))}' +
      '.mtr-btn::before{background-image:url(data:image/webp;base64,'+M.HAP.yesilL+'),url(data:image/webp;base64,'+M.HAP.yesilR+'),url(data:image/webp;base64,'+M.HAP.yesilM+')!important}' +
      '.mtr-btn.mtr-koyu::before{background-image:url(data:image/webp;base64,'+M.HAP.maviL+'),url(data:image/webp;base64,'+M.HAP.maviR+'),url(data:image/webp;base64,'+M.HAP.maviM+')!important}' +
      '.mtr-btn.mtr-kirmizi::before{background-image:url(data:image/webp;base64,'+M.HAP.kirmiziL+'),url(data:image/webp;base64,'+M.HAP.kirmiziR+'),url(data:image/webp;base64,'+M.HAP.kirmiziM+')!important}' +
      '.mtr-btn{--h:50px;height:var(--h)!important;line-height:var(--h)!important;padding:0 26px!important;text-shadow:0 2px 0 rgba(0,0,0,.3)!important}' +
      '.mtr-dikey .mtr-btn{--h:56px;padding:0 18px!important}' +
      '.mtr-btn::after{display:none!important}' +
      '.mtr-btn:active{transform:translateY(3px);filter:brightness(.94)}' +
      // v10.5: bütün pencere düğmeleri PUL TARZI (yeşil onay · gri vazgeç (mtr-koyu) · kırmızı tehlike)
      '.mtr-btn{--a:#a8f5b4;--b:#3fcf62;--k:#178a35;--i:#36bd57;color:#fff!important;isolation:isolate;overflow:visible!important;height:50px!important;line-height:50px!important;padding:0 26px!important;border:0!important;border-radius:999px!important;background:linear-gradient(var(--a),var(--b))!important;box-shadow:0 5px 0 var(--k),0 7px 10px rgba(0,0,0,.22),inset 0 2px 0 rgba(255,255,255,.7)!important;text-shadow:0 2px 0 rgba(0,0,0,.2)!important;filter:none!important}.mtr-btn::before{content:""!important;display:block!important;position:absolute!important;z-index:-1!important;top:5px!important;bottom:5px!important;left:5px!important;right:5px!important;border-radius:999px!important;background:var(--i)!important;background-image:none!important;filter:none!important;box-shadow:inset 0 3px 3px rgba(0,0,0,.14),inset 0 -2px 0 rgba(255,255,255,.4)!important}.mtr-btn::after{display:none!important}.mtr-btn:active{transform:translateY(3px)!important;box-shadow:0 2px 0 var(--k),inset 0 2px 0 rgba(255,255,255,.7)!important}.mtr-btn.mtr-koyu{--a:#eef1f7;--b:#c3cad8;--k:#959db0;--i:#cdd3df;color:#5a6280!important;text-shadow:0 1px 0 rgba(255,255,255,.5)!important}.mtr-btn.mtr-kirmizi{--a:#ff9da0;--b:#e8494d;--k:#a8272b;--i:#d9393d}.mtr-dikey .mtr-btn{height:54px!important;line-height:54px!important}.mtr-btn.mtr-koyu::before,.mtr-btn.mtr-kirmizi::before{background-image:none!important;background-color:var(--i)!important}';
    document.head.appendChild(st);
  };
  // ---------- görünüm (oyunun tarzında, ekranın üstüne çizilen katman) ----------
  M.stilEkle = () => {
    M.dugme3BStil();
    if (document.getElementById("mtrStil")) return;
    const st = document.createElement("style");
    st.id = "mtrStil";
    st.textContent = `
      .mtr-kart{position:fixed;left:50%;transform:translateX(-50%);z-index:99999;
        width:min(92vw,440px);box-sizing:border-box;padding:20px 18px 18px;border-radius:26px;
        background:linear-gradient(#fdfbf6,#f3eee3);border:0;color:#2c3862;
        font-family:Poppins,"Poppins-Bold",-apple-system,"Segoe UI",Roboto,sans-serif;text-align:center;
        box-shadow:0 16px 36px rgba(10,12,30,.45),inset 0 -5px 0 rgba(0,0,0,.05)}
      .mtr-bant{top:calc(10px + max(env(safe-area-inset-top,0px),var(--mtrUst,0px)));animation:mtrIn .25s ease-out;
        border-top:6px solid #2f8fe0}
      .mtr-orta{top:50%;transform:translate(-50%,-50%);animation:mtrPop .22s cubic-bezier(.3,1.6,.5,1)}
      @keyframes mtrIn{from{transform:translate(-50%,-120%)}to{transform:translate(-50%,0)}}
      @keyframes mtrPop{from{transform:translate(-50%,-50%) scale(.85);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}}
      .mtr-perde{position:fixed;inset:0;z-index:99998;background:rgba(16,20,40,.5)}
      .mtr-baslik{font-weight:800;font-size:18px;line-height:1.35}
      .mtr-alt{display:inline-block;margin-top:8px;padding:4px 14px;border-radius:999px;background:#e8eef8;
        font-size:14px;color:#2c3862;font-weight:700;letter-spacing:.3px}
      .mtr-mesaj{font-weight:800;font-size:18px;line-height:1.4;white-space:pre-line}
      .mtr-satir{display:flex;gap:12px;justify-content:center;margin-top:16px}
      .mtr-btn{position:relative;overflow:hidden;font:inherit;font-weight:800;font-size:17px;letter-spacing:.6px;white-space:nowrap;border:0;border-radius:999px;
        padding:13px 28px;cursor:pointer;color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.22);
        background:linear-gradient(180deg,#8af59a 0%,#45d465 42%,#22b046 100%);
        box-shadow:inset 0 2px 0 rgba(255,255,255,.65),inset 0 -4px 0 rgba(0,0,0,.14),0 6px 0 #178a35,0 10px 16px rgba(20,90,40,.35)}
      .mtr-btn::after{content:"";position:absolute;left:10%;right:10%;top:4px;height:38%;border-radius:999px;
        background:linear-gradient(rgba(255,255,255,.55),rgba(255,255,255,0));pointer-events:none}
      .mtr-btn:active{transform:translateY(4px);box-shadow:inset 0 2px 0 rgba(255,255,255,.65),inset 0 -4px 0 rgba(0,0,0,.14),0 2px 0 #178a35,0 4px 8px rgba(20,90,40,.3)}
      .mtr-koyu{color:#fff;text-shadow:0 2px 0 rgba(0,0,0,.22);background:linear-gradient(180deg,#8cc8ff 0%,#3d9cf0 45%,#1f74d0 100%);
        box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -4px 0 rgba(0,0,0,.14),0 6px 0 #14559e,0 10px 16px rgba(20,60,120,.35)}
      .mtr-koyu:active{box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -4px 0 rgba(0,0,0,.14),0 2px 0 #14559e,0 4px 8px rgba(20,60,120,.3)}
      .mtr-sure{margin-top:12px;font-size:13px;color:#828aa0;font-weight:600}
      .mtr-link{margin-top:10px;font-size:13px;color:#a8333a;font-weight:700;text-decoration:underline;cursor:pointer}
      .mtr-kirmizi{background:linear-gradient(180deg,#ff9a9c 0%,#f2555a 45%,#cf2f35 100%);
        box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -4px 0 rgba(0,0,0,.14),0 6px 0 #9c1f24,0 10px 16px rgba(120,20,30,.35)}
      .mtr-kirmizi:active{box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -4px 0 rgba(0,0,0,.14),0 2px 0 #9c1f24,0 4px 8px rgba(120,20,30,.3)}
      .mtr-dikey{display:flex;flex-direction:column;gap:12px;margin-top:16px}
      .mtr-dikey .mtr-btn{width:100%;font-size:20px;padding:15px}
      .mtr-av{width:84px;height:84px;border-radius:50%;margin:0 auto 6px;background:#dfe5f2 center/cover no-repeat;border:4px solid #fff;
        box-shadow:0 3px 8px rgba(0,0,0,.15);display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:800;color:#2c3862}
      .mtr-ad{font-weight:800;font-size:22px}
      .mtr-durum{font-size:14px;font-weight:700;color:#8c92a6}.mtr-durum.on{color:#3aa557}
      .mtr-acik{font-size:14px;color:#6c7590;font-weight:700;margin-top:8px;line-height:1.45;white-space:pre-line}
      .mtr-sec{display:flex;align-items:center;gap:10px;text-align:left;padding:12px 14px;border-radius:16px;background:#fff;
        border:2.5px solid #e2e7f1;font-size:15px;font-weight:700;margin-top:10px;cursor:pointer}
      .mtr-sec.on{border-color:#2f8fe0;background:#eef5fd}
      .mtr-yuv{width:18px;height:18px;border-radius:50%;border:3px solid #b9c2d6;flex:none;box-sizing:border-box}
      .mtr-sec.on .mtr-yuv{border-color:#2f8fe0;background:radial-gradient(#2f8fe0 45%,#fff 50%)}
      #mtrKopma{position:fixed;top:calc(12px + max(env(safe-area-inset-top,0px),var(--mtrUst,0px)));left:50%;transform:translateX(-50%);z-index:99995;
        display:flex;align-items:center;gap:10px;padding:10px 18px;border-radius:999px;background:#fff4dc;border:2.5px solid #f2a93b;
        color:#8a5a10;font:800 15px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 8px 18px rgba(0,0,0,.2);white-space:nowrap}
      #mtrKopma .don{width:16px;height:16px;border:3px solid #f2a93b;border-top-color:transparent;border-radius:50%;box-sizing:border-box;
        animation:mtrDon 0.9s linear infinite}
      @keyframes mtrDon{to{transform:rotate(360deg)}}`;
    document.head.appendChild(st);
  };

  // ---------- DAVET EDİLEN tarafı: gelen davetleri dinle, şerit göster ----------
  M.davetDinle = () => {
    if (M.davetAboneligi || !M.uid) return;
    M.davetAboneligi = firebase.firestore().collection("davetler")
      .where("aliciUid", "==", M.uid).where("durum", "==", "bekliyor")
      .onSnapshot((snap) => {
        snap.docChanges().forEach((ch) => {
          const d = ch.doc.data(), id = ch.doc.id;
          if (d.mektup) return;                                   // v10.0: mektup davetleri ayrı dinlenir
          if (ch.type === "added") {
            // Çok eski bekleyen davetler (gönderenin uygulaması kapanmış olabilir)
            const eskidi = d.cagri ? Date.now() > (d.bitisMs || 0) : Date.now() - (d.olusturmaMs || 0) > 120000;   // v9.1: çağrı 10 dk
            if (eskidi) { ch.doc.ref.update({ durum: "zamanasimi" }).catch(() => {}); return; }
            if (M.engelliMi(d.gonderenUid)) { ch.doc.ref.update({ durum: "red" }).catch(() => {}); return; }      // v9.0: engellenen
            if (M.surumKarsi(d.gonderenSurum || "0", M.uygSurum()) !== 0) {                                         // v9.0: farklı sürüm
              ch.doc.ref.update({ durum: "surum" }).catch(() => {});
              if (M.surumKarsi(d.gonderenSurum || "0", M.uygSurum()) > 0 && M.musaitMi() && !M.gelenDavet) M.pencereAc().bitir(M.YENI_SURUM_YAZI);
              return;
            }
            if (d.cagri) { M.cagriEkle(id, d); return; }                                                      // v9.1: çağrı kuyruğa
            if (!M.musaitMi() || M.gelenDavet) { ch.doc.ref.update({ durum: "mesgul" }).catch(() => {}); return; }
            M.iz("davet geldi: " + d.gonderenAd);
            M.bantGoster(id, d);
          } else if (ch.type === "removed") {
            if (M.cagrilar && M.cagrilar[id]) M.cagriSil(id);           // v9.1
            if (M.gelenDavet && M.gelenDavet.id === id) M.bantKapat();   // iptal / zaman aşımı
          }
        });
      }, (e) => console.error("MATRANC davet dinleme hatası:", e));
  };

  M.bantGoster = (id, d) => {
    M.stilEkle();
    M.gelenDavet = { id: id, d: d, ref: firebase.firestore().collection("davetler").doc(id) };
    const b = document.createElement("div");
    b.id = "mtrBant"; b.className = "mtr-kart mtr-bant";
    b.innerHTML = '<div class="mtr-baslik"></div><div class="mtr-alt"></div>' +
      '<div class="mtr-satir"><button class="mtr-btn">KABUL ET</button><button class="mtr-btn mtr-koyu">REDDET</button></div>' +
      '<div class="mtr-sure"></div><div class="mtr-link">Bu oyuncuyu engelle</div>';
    b.querySelector(".mtr-baslik").textContent = d.gonderenAd + " seni oyuna davet ediyor";
    b.querySelector(".mtr-link").onclick = () => {          // v9.0
      M.sesCal();
      M.engelleOnay(d.gonderenUid, d.gonderenAd, () => { if (M.gelenDavet && M.gelenDavet.id === id) M.davetCevapla("red"); });
    };
    b.querySelector(".mtr-alt").textContent = M.ayarYazi(d.sure, d.tur);
    const btn = b.querySelectorAll("button");
    btn[0].onclick = () => { M.iz("KABUL tıklandı"); M.sesCal(); M.davetCevapla("kabul"); };
    btn[1].onclick = () => { M.sesCal(); M.davetCevapla("red"); };
    document.body.appendChild(b);
    M.sesCal();
    let kalan = M.DAVET_SURESI;
    const sureEl = b.querySelector(".mtr-sure");
    sureEl.textContent = kalan + " sn";
    M.bantSayac = setInterval(() => {
      kalan--; sureEl.textContent = kalan + " sn";
      if (kalan <= 0) M.bantKapat();
    }, 1000);
  };

  M.bantKapat = () => {
    clearInterval(M.bantSayac);
    const b = document.getElementById("mtrBant");
    if (b) b.remove();
    const cp = document.getElementById("mtrCagriPerde");   // v9.1
    if (cp) cp.remove();
    M.gelenDavet = null;
  };

  M.davetCevapla = (cevap) => {
    const g = M.gelenDavet;
    if (!g) return;
    M.bantKapat();
    g.ref.update({ durum: cevap }).catch((e) => console.error("MATRANC davet cevap hatası:", e));
    if (cevap === "kabul") M.oyunaGecis(g.id, g.d, "davetli");
  };

  // ---------- Ortak pencere (ortada, arkası kararmış) ----------
  M.pencereAc = () => {
    M.stilEkle();
    M.pencereKapat();
    const perde = document.createElement("div"); perde.className = "mtr-perde"; perde.id = "mtrPerde";
    const p = document.createElement("div"); p.className = "mtr-kart mtr-orta"; p.id = "mtrPencere";
    p.innerHTML = '<div class="mtr-mesaj"></div><div class="mtr-satir"></div>';
    document.body.appendChild(perde); document.body.appendChild(p);
    const nesne = {
      yaz: (t) => { p.querySelector(".mtr-mesaj").textContent = t; },
      dugme: (yazi, fn, koyu) => {
        const satir = p.querySelector(".mtr-satir"); satir.innerHTML = "";
        if (!yazi) return;
        const b = document.createElement("button");
        b.className = "mtr-btn" + (koyu ? " mtr-koyu" : ""); b.textContent = yazi;
        b.onclick = () => { M.sesCal(); fn(); };
        satir.appendChild(b);
      },
      bitir: (t) => { nesne.yaz(t); nesne.dugme("TAMAM", M.pencereKapat); }
    };
    return nesne;
  };
  M.pencereKapat = () => {
    ["mtrPerde", "mtrPencere"].forEach((i) => { const e = document.getElementById(i); if (e) e.remove(); });
  };

  // ---------- DAVET EDEN tarafı ----------
  M.davetGonder = async () => {
    if (M.gidenDavet || !M.uid) return;
    const aliciUid = gv("bulunanUid").getAsString();
    const aliciAd = gv("bulunanAd").getAsString();
    const sure = gv("sureSaniye").getAsNumber();
    const tur = gv("hedefTur").getAsNumber() || 2;
    const p = M.pencereAc();
    p.yaz(aliciAd + " kontrol ediliyor...");
    p.dugme(null);
    try {
      const db = firebase.firestore();
      const o = await db.collection("oyuncular").doc(aliciUid).get();
      const od = o.exists ? o.data() : {};
      const son = od.sonGorulme && od.sonGorulme.toMillis ? od.sonGorulme.toMillis() : 0;
      if (od.cevrimici === false || Date.now() - son > M.CEVRIMICI_ESIK) { M.pencereKapat(); return M.cagir(aliciUid, aliciAd); }   // v9.1: çevrimdışı → ÇAĞIR
      if (od.musait === false) return p.bitir(aliciAd + " şu an bir oyunda");
      const sk = M.surumKarsi(M.uygSurum(), od.surum || "0");                                  // v9.0: sürüm kontrolü
      if (sk < 0) return p.bitir(M.YENI_SURUM_YAZI);
      if (sk > 0) return p.bitir(aliciAd + " oyunun eski bir sürümünü kullanıyor.\nBirlikte oynamak için oyununu güncellemesi gerekiyor.");

      const ref = await db.collection("davetler").add({
        gonderenUid: M.uid, gonderenAd: M.ad, aliciUid: aliciUid, aliciAd: aliciAd,
        sure: sure, tur: tur, durum: "bekliyor", olusturma: M.zaman(), olusturmaMs: Date.now(), gonderenSurum: M.uygSurum()
      });
      M.gidenDavet = { ref: ref };
      let kalan = M.DAVET_SURESI;
      const bekleYaz = () => p.yaz(aliciAd + " davet edildi\n" + M.ayarYazi(sure, tur) + "\n\nCevap bekleniyor... " + kalan);
      bekleYaz();
      p.dugme("İPTAL", () => { ref.update({ durum: "iptal" }).catch(() => {}); M.gidenBitir(); M.pencereKapat(); }, true);
      M.gidenSayac = setInterval(() => {
        kalan--;
        if (kalan <= 0) { ref.update({ durum: "zamanasimi" }).catch(() => {}); M.gidenBitir(); p.bitir("Cevap gelmedi"); }
        else bekleYaz();
      }, 1000);
      M.gidenAbone = ref.onSnapshot((s) => {
        const durum = s.exists ? s.data().durum : "";
        if (durum) M.iz("davet durumu: " + durum);
        if (durum === "kabul") { M.gidenBitir(); M.pencereKapat(); M.oyunaGecis(ref.id, s.data(), "davetci"); }
        else if (durum === "red") { M.gidenBitir(); p.bitir("Davet reddedildi"); }
        else if (durum === "mesgul") { M.gidenBitir(); p.bitir(aliciAd + " şu an bir oyunda"); }
        else if (durum === "surum") { M.gidenBitir(); p.bitir(aliciAd + " oyunun farklı bir sürümünü kullanıyor.\nİkinizin de oyunu güncel olmalı."); }
      });
    } catch (e) {
      console.error("MATRANC davet gönderme hatası:", e);
      M.gidenBitir();
      p.bitir("Bağlantı hatası");
    }
  };

  M.gidenBitir = () => {
    clearInterval(M.gidenSayac);
    if (M.gidenAbone) M.gidenAbone();
    M.gidenAbone = null;
    M.gidenDavet = null;
  };

  // ---------- Davet kabul edildi: eşleşme ekranına geçiş ve yazı-tura (Aşama 4) ----------
  M.ESLESME_SAHNESI = "Eslesme";
  // Sahne değişikliği GDevelop'un etkinlikleri çalışırken yapılmalı; Firebase cevabının
  // içinden doğrudan yapılırsa bir sonraki karede unutuluyor. Bu yüzden bir "bekleyen sahne"
  // notu bırakılır, her karenin etkinlikleri bittikten hemen sonra geçiş yapılır.
  M.sahneDegistir = (ad) => {
    M.iz("sahne değişiyor → " + ad + "  (şu an: " + M.sahneAdi() + ")");
    if (game.hasScene && !game.hasScene(ad)) {
      M.iz("SAHNE BULUNAMADI: " + ad);
      M.pencereAc().bitir('"' + ad + '" adlı sahne bulunamadı.\nSahnenin adını kontrol edin.');
      return false;
    }
    M.bekleyenSahne = ad;
    return true;
  };
  // v10.9: yumuşak sahne geçişi (bir kez kurulur)
  M.gecisKur = () => {
    if (window.MatrancGecis) return;
    const G = window.MatrancGecis = { bekleyen: null, son: null, iceri: false, KARAR: 0, ACIL: 150 };
    const perde = () => {
      let p = document.getElementById("mtrGecis");
      if (!p) {
        p = document.createElement("div"); p.id = "mtrGecis";
        p.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:#16213f;opacity:0;pointer-events:none;transition:opacity " + G.KARAR + "ms ease";
        document.body.appendChild(p);
      }
      return p;
    };
    G.karart = () => { const p = perde(); p.style.transition = "opacity " + G.KARAR + "ms ease"; p.style.pointerEvents = "auto"; p.style.opacity = "1"; };
    G.ac = () => {
      const p = perde(); p.style.transition = "none"; p.style.opacity = "1"; p.style.pointerEvents = "none";
      p.style.opacity = "0.85";
      requestAnimationFrame(() => requestAnimationFrame(() => { p.style.transition = "opacity " + G.ACIL + "ms ease-out"; p.style.opacity = "0"; }));
      G.acT = Date.now();
      setTimeout(() => { const q = document.getElementById("mtrGecis"); if (q && q.style.pointerEvents !== "auto") { q.style.transition = "none"; q.style.opacity = "0"; } }, G.ACIL + 400);   // v10.11: güvenlik — perde açık kalmasın (tablette siyah ekran)
    };
    const RS = gdjs.evtTools.runtimeScene, orj = RS.replaceScene;
    G.gercek = (sc, ad, temiz) => { G.iceri = true; try { orj.call(RS, sc, ad, temiz); } finally { G.iceri = false; } };
    // v10.9a: komut sarılmaz, sahne hemen değişir; yalnız yeni sahnenin ilk karesinde perde açılır
    gdjs.registerRuntimeScenePreEventsCallback((sc) => {
      if (G.son !== sc) { try { M.mektupSessiz(false); } catch (e) {} }   // v10.11j: sahne değişince ses mutlaka geri gelir
      if (G.son === sc) {                                       // v10.11: perde 0,8 sn sonra hâlâ görünüyorsa kaldır
        if (G.acT && Date.now() - G.acT > 800) { const q = document.getElementById("mtrGecis"); if (q && q.style.opacity !== "0" && q.style.pointerEvents !== "auto") { q.style.transition = "none"; q.style.opacity = "0"; M.iz("geçiş perdesi zorla açıldı"); } G.acT = 0; }
        return;
      }
      const ilk = !G.son; G.son = sc;
      if (!ilk) G.ac();
      else { const p = document.getElementById("mtrGecis"); if (p) { p.style.opacity = "0"; p.style.pointerEvents = "none"; } }
    });
  };
  // v10.11c: GEÇİCİ TABLET TEŞHİSİ — ana menünün ilk 6 sn'sinde ekranın ortasında hangi öğe var, perde/tuval durumu
  M.teshisKur = () => {
    if (!M.TABLET_TESHIS || window.__mtrTeshis) return; window.__mtrTeshis = true;
    window.addEventListener("error", (e) => { try { M.iz("HATA: " + (e.message || e) + " @" + (e.lineno || "")); } catch (x) {} });
    // v10.11d: çizim hatası ve WebGL bağlam kaybı da yazılsın
    try {
      const RS = gdjs.RuntimeScene.prototype, orj = RS.render;
      if (orj && !RS.__mtrSarili) { RS.__mtrSarili = true; let son = 0;
        RS.render = function () { try { return orj.apply(this, arguments); } catch (e) { if (Date.now() - son > 1000) { son = Date.now(); M.iz("ÇİZİM HATASI (" + (this.getName ? this.getName() : "?") + "): " + (e && e.message ? e.message : e)); } } };
      }
    } catch (x) { M.iz("çizim sarılamadı"); }
    setTimeout(() => { try { const tv = document.querySelector("canvas");
      if (tv) { tv.addEventListener("webglcontextlost", () => M.iz("WEBGL BAĞLAMI KAYBOLDU"));
        tv.addEventListener("webglcontextrestored", () => M.iz("webgl bağlamı geri geldi")); } } catch (x) {} }, 500);
    let sahne = null, bas = 0, son = 0;
    gdjs.registerRuntimeScenePostEventsCallback((sc) => {
      if (sc !== sahne) { sahne = sc; bas = Date.now(); son = 0; try { M.iz("sahne: " + sc.getName()); } catch (x) {} }
      let ad = ""; try { ad = sc.getName(); } catch (x) {}
      if (ad !== "Menu" || Date.now() - bas > 6000 || Date.now() - son < 1000) return;
      son = Date.now();
      try {
        const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2), cs = el ? getComputedStyle(el) : null;
        const tv = sc.getGame().getRenderer().getCanvas(), r = tv ? tv.getBoundingClientRect() : null;
        const p = document.getElementById("mtrGecis");
        const zm = sc.getObjects("MenuZemin")[0];
        M.iz("orta: " + (el ? el.tagName + (el.id ? "#" + el.id : "") + " op " + cs.opacity + " bg " + cs.backgroundColor : "yok") +
          " | tuval " + (r ? Math.round(r.width) + "x" + Math.round(r.height) + " @" + Math.round(r.top) : "?") +
          " | perde " + (p ? p.style.opacity : "-") + " | bulanık " + (function () { try { const A = sc.getLayer(""); return A.hasEffect("Bulanik") ? (A.isEffectEnabled ? (A.isEffectEnabled("Bulanik") ? "AÇIK" : "kapalı") : "?") : "yok"; } catch (x) { return "?"; } })() + " | zemin " + (zm ? (zm.isHidden() ? "gizli" : "op " + zm.getOpacity() + " ölç " + zm.getScaleX().toFixed(2) + " y " + Math.round(zm.getY())) : "yok"));
      } catch (x) { M.iz("teşhis hatası: " + x.message); }
    });
  };
  M.sahneGeciciKur = () => {
    if (window.MatrancSahneGecici) return;   // bir kez kurulur (sürüm değişse de)
    window.MatrancSahneGecici = true;
    gdjs.registerRuntimeScenePostEventsCallback((sahne) => {
      const M2 = window.MatrancCevrimici;
      if (!M2 || !M2.bekleyenSahne) return;
      const ad = M2.bekleyenSahne;
      M2.bekleyenSahne = null;
      try {
        gdjs.evtTools.runtimeScene.replaceScene(sahne, ad, false);
        M2.iz("geçiş yapıldı → " + ad);
      } catch (e) {
        M2.iz("SAHNE HATASI: " + (e && e.message ? e.message : e));
      }
    });
  };

  // ---- RÜTBE: çevrimiçi galibiyet (cihazda "galCevrimici", Firebase'de oyuncular/{uid}.gal)
  M.galOku = () => {
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile("matranc", "galCevrimici")) return 0;
      const v = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", "galCevrimici", M.sahneRef || null, v); return v.getAsNumber();
    } catch (e) { return null; }
  };
  // v9.7: galibiyet sunucuda maç maç sayılır (kurallar v6). Eski çağrılar (pul kodu, hükmen) galGonder(n) der; n artık kullanılmaz.
  M.galGonder = () => { M.galKaydet(); };
  M.galYerel = (n) => { try { gdjs.evtTools.storage.writeNumberInJSONFile("matranc", "galCevrimici", n); } catch (e) {} };
  M.galEsitle = (sunucu) => {
    const n = Math.max(0, Math.round(Number(sunucu || 0)));
    if (M.galOku() !== n) { M.galYerel(n); M.iz("galibiyet sunucuyla eşitlendi: " + n); }
  };
  M.galSayilan = {};
  M.galKaydet = async () => {
    const id = M.oyun && M.oyun.id;
    if (!M.uid || !id || M.galSayilan[id]) return;
    // v10.3: mektupta aynı rakibe karşı günde en fazla 1 galibiyet rütbeye işler
    let mektupRakip = null;
    if (M.oyun.mektup) {
      const mo = M.mektup.oyun[id] || {};
      mektupRakip = mo.kirmiziUid === M.uid ? mo.yesilUid : mo.kirmiziUid;
      const bugun = new Date().toISOString().slice(0, 10);
      let kay = {}; try { kay = JSON.parse(localStorage.getItem("mtrMektupGal") || "{}"); } catch (e) {}
      if (mektupRakip && kay[mektupRakip] === bugun) { M.galSayilan[id] = true; M.iz("mektup: bugün bu rakibe karşı galibiyet zaten sayıldı"); setTimeout(() => M.galEsitle && firebase.firestore().collection("oyuncular").doc(M.uid).get().then((s) => M.galEsitle(s.exists ? s.data().gal : 0)).catch(() => {}), 1500); return; }
    }
    M.galSayilan[id] = true;
    const db = firebase.firestore();
    const oyunRef = db.collection("oyunlar").doc(id), oyRef = db.collection("oyuncular").doc(M.uid), galRef = oyRef.collection("galibiyetler").doc(id);
    try {
      const yeni = await db.runTransaction(async (t) => {
        const o = await t.get(oyunRef), g = await t.get(galRef), p = await t.get(oyRef);
        if (!o.exists || g.exists) return null;
        const d = o.data() || {};
        const renk = d.kirmiziUid === M.uid ? 1 : (d.yesilUid === M.uid ? 2 : 0);
        if (!renk) return null;
        const hukmen = !!d.bitti && d.bitti.kaybedenRenk !== renk;
        if (!hukmen) {
          if (d.bitti) return null;                                        // hükmen kaybettim
          if (d.sonuc && d.sonuc.kazanan !== M.uid) return null;           // sonuç başka yazılmış
          if (!d.sonuc) t.update(oyunRef, { sonuc: { kazanan: M.uid } });
        }
        const n = Math.round(Number((p.exists && p.data().gal) || 0)) + 1;
        t.set(galRef, { zaman: M.zaman() });
        t.update(oyRef, { gal: n, sonGal: id });
        return n;
      });
      if (yeni) {
        M.galYerel(yeni); M.iz("galibiyet sayıldı: " + yeni);
        setTimeout(() => { try { M.rutbeKontrol(yeni); } catch (e) {} }, 2200);   // v10.15
        if (mektupRakip) { try { const kay = JSON.parse(localStorage.getItem("mtrMektupGal") || "{}"); kay[mektupRakip] = new Date().toISOString().slice(0, 10); localStorage.setItem("mtrMektupGal", JSON.stringify(kay)); } catch (e) {} }
      }
      else M.iz("galibiyet sayılmadı (" + id + ")");
    } catch (e) { M.galSayilan[id] = false; M.iz("GALİBİYET HATASI: " + (e && e.message ? e.message : e)); }
  };
  M.avatarOku = () => {
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile("matranc", "avatar")) return 0;
      const v = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", "avatar", M.sahneRef || null, v); return Math.round(v.getAsNumber());
    } catch (e) { return 0; }
  };
  M.avatarGonder = () => {
    if (!M.uid) return;
    const a = M.avatarOku(); if (!(a >= 0 && a <= 9)) return;
    try { firebase.firestore().collection("oyuncular").doc(M.uid).update({ avatar: a }).catch(() => {}); } catch (e) {}
  };
  // ---- Seçili pullar (Profil: anaPul / yedekPul). Çevrimiçi maçta rakip de bunları görür.
  M.PUL_ESIK = [0, 0, 0, 3, 6, 10, 15, 20, 30, 40];
  M.pulOku = () => {
    try {
      const s = gdjs.evtTools.storage;
      const oku = (k, v) => { if (!s.elementExistsInJSONFile("matranc", k)) return v; const x = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", k, M.sahneRef || null, x); return x.getAsNumber(); };
      const ESKI = [0, 1, 2, 8, 15, 22, -1, 26, -1, 31];          // eski pul no → yeni kimlik
      let sahip = Math.round(oku("pulSahip2", -1));
      if (sahip < 0) { sahip = 0; const e = Math.round(oku("pulSahip", 0)); for (let i = 3; i < 10; i++) if ((e & (1 << i)) && ESKI[i] >= 8) sahip |= (1 << (ESKI[i] - 8)); }
      // v9.9: kaldırılan pulların ücretini bir kez iade et (Profil'e girmeden de)
      const KALK = [9, 12, 13, 14, 24, 28, 29, 30], KFIYAT = [10, 20, 20, 20, 40, 50, 30, 40];
      if (oku("pulIade10", 0) !== 1) {
        let iade = 0; KALK.forEach((k, i) => { if (sahip & (1 << (k - 8))) { iade += KFIYAT[i]; sahip &= ~(1 << (k - 8)); } });
        const yaz = (k, v) => { try { s.writeNumberInJSONFile("matranc", k, v); } catch (e) {} };
        if (iade > 0) { const y = oku("yildiz", -1); if (y >= 0) yaz("yildiz", y + iade); yaz("pulSahip2", sahip); }
        yaz("pulIade10", 1);
      }
      const s3 = Math.round(oku("pulSahip3", 0));
      const gecerli = (p) => (p >= 0 && p <= 7) || (p >= 8 && p <= 31 && !KALK.includes(p) && !!(sahip & (1 << (p - 8)))) || (p >= 32 && p <= 44 && !!(s3 & (1 << (p - 32))));
      let ana = Math.round(oku("anaPul2", -1)), yedek = Math.round(oku("yedekPul2", -1));
      if (ana < 0) { const e = Math.round(oku("anaPul", 0)); ana = ESKI[e] >= 0 ? ESKI[e] : 0; }
      if (yedek < 0) { const e = Math.round(oku("yedekPul", 2)); yedek = ESKI[e] >= 0 ? ESKI[e] : 2; }
      if (!gecerli(ana)) ana = 0;
      if (!gecerli(yedek) || yedek === ana) yedek = ana === 2 ? 0 : 2;
      return { pul: ana, yedek: yedek };
    } catch (e) { return { pul: 0, yedek: 2 }; }
  };
  M.pulGonder = () => {
    if (!M.uid) return;
    try { firebase.firestore().collection("oyuncular").doc(M.uid).update(M.pulOku()).catch(() => {}); } catch (e) {}
  };

  // ---- SON OYNADIKLARIN: maç başlayınca rakip kendiliğinden kaydedilir (yalnız bu cihazda; kayıt "sonRakipler")
  M.SON_ANAHTAR = "sonRakipler";
  M.CEVRIMICI_ESIK = 150000;  // son sinyalden bu kadar ms geçtiyse çevrimdışı say (v9.0: sinyal 60 sn'de bir)
  M.sonRakipOku = () => {
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile("matranc", M.SON_ANAHTAR)) return [];
      const v = new gdjs.Variable(); s.readStringFromJSONFile("matranc", M.SON_ANAHTAR, M.sahneRef || null, v);
      const l = JSON.parse(v.getAsString() || "[]");
      return Array.isArray(l) ? l.filter((x) => x && typeof x.u === "string" && x.u && !M.engelliMi(x.u)) : [];
    } catch (e) { return []; }
  };
  M.sonRakipYaz = (l) => { try { gdjs.evtTools.storage.writeStringInJSONFile("matranc", M.SON_ANAHTAR, JSON.stringify(l.slice(0, 8))); } catch (e) {} };
  M.sonRakipEkle = (uid, ad) => {
    if (!uid || uid === M.uid) return;
    const l = M.sonRakipOku().filter((x) => x.u !== uid);
    l.unshift({ u: uid, a: ad || "" }); M.sonRakipYaz(l);
  };
  M.sonRakipSil = (uid) => M.sonRakipYaz(M.sonRakipOku().filter((x) => x.u !== uid));
  // ---- ARKADAŞLARIM: tek taraflı, yalnız bu cihazda (kayıt "arkadaslar", en fazla 20)
  M.ARK_ANAHTAR = "arkadaslar";
  M.arkadasOku = () => {
    try {
      const s = gdjs.evtTools.storage;
      if (!s.elementExistsInJSONFile("matranc", M.ARK_ANAHTAR)) return [];
      const v = new gdjs.Variable(); s.readStringFromJSONFile("matranc", M.ARK_ANAHTAR, M.sahneRef || null, v);
      const l = JSON.parse(v.getAsString() || "[]");
      return Array.isArray(l) ? l.filter((x) => x && typeof x.u === "string" && x.u && !M.engelliMi(x.u)) : [];
    } catch (e) { return []; }
  };
  M.arkadasYaz = (l) => { try { gdjs.evtTools.storage.writeStringInJSONFile("matranc", M.ARK_ANAHTAR, JSON.stringify(l.slice(0, 20))); } catch (e) {} };
  M.arkadasMi = (uid) => M.arkadasOku().some((x) => x.u === uid);
  M.arkadasEkle = (uid, ad) => {
    if (!uid || uid === M.uid) return false;
    const l = M.arkadasOku(); if (l.some((x) => x.u === uid)) return true;
    if (l.length >= 20) return false;
    l.push({ u: uid, a: ad || "" }); M.arkadasYaz(l); return true;
  };
  M.arkadasSil = (uid) => M.arkadasYaz(M.arkadasOku().filter((x) => x.u !== uid));
  // =====================================================================
  //  v9.0: ENGELLE / ŞİKÂYET ET
  // =====================================================================
  M.ENG_ANAHTAR = "engellenenler";     // yalnız bu cihazda (en fazla 200)
  M.engelOku = () => {
    if (M.__engel && Date.now() - M.__engel.t < 1000) return M.__engel.l;
    let l = [];
    try {
      const s = gdjs.evtTools.storage;
      if (s.elementExistsInJSONFile("matranc", M.ENG_ANAHTAR)) {
        const v = new gdjs.Variable(); s.readStringFromJSONFile("matranc", M.ENG_ANAHTAR, M.sahneRef || null, v);
        const x = JSON.parse(v.getAsString() || "[]"); if (Array.isArray(x)) l = x.filter((y) => y && typeof y.u === "string");
      }
    } catch (e) {}
    M.__engel = { t: Date.now(), l: l };
    return l;
  };
  M.engelliMi = (uid) => !!uid && M.engelOku().some((x) => x.u === uid);
  M.engelle = (uid, ad) => {
    if (!uid || uid === M.uid || M.engelliMi(uid)) return;
    const l = M.engelOku().concat([{ u: uid, a: ad || "" }]).slice(-200);
    try { gdjs.evtTools.storage.writeStringInJSONFile("matranc", M.ENG_ANAHTAR, JSON.stringify(l)); } catch (e) {}
    M.__engel = null;
    M.iz("engellendi: " + ad);
  };
  // Ortada özel içerikli pencere (oyuncu kartı, şikâyet, engel onayı)
  M.pencereHtml = (html) => {
    M.stilEkle(); M.pencereKapat();
    const perde = document.createElement("div"); perde.className = "mtr-perde"; perde.id = "mtrPerde";
    const p = document.createElement("div"); p.className = "mtr-kart mtr-orta"; p.id = "mtrPencere";
    p.innerHTML = html;
    document.body.appendChild(perde); document.body.appendChild(p);
    return p;
  };
  M.yaziTemiz = (t) => String(t || "").replace(/[<>&"']/g, "");
  // Listede bir oyuncuya dokununca
  M.oyuncuPencere = (uid, ad, avUrl, cevrimici) => {
    if (!uid) return;
    ad = M.yaziTemiz(ad) || "?";
    const p = M.pencereHtml(
      '<div class="mtr-av"' + (avUrl ? ' style="background-image:url(\'' + avUrl + '\')"' : "") + ">" + (avUrl ? "" : ad.charAt(0).toUpperCase()) + "</div>" +
      '<div class="mtr-ad">' + ad + "</div>" +
      '<div class="mtr-durum' + (cevrimici ? " on" : "") + '">' + (cevrimici ? "çevrimiçi" : "çevrimdışı") + "</div>" +
      '<div class="mtr-dikey"><button class="mtr-btn mtr-koyu" data-k="s">⚑&nbsp; ŞİKÂYET ET</button>' +
      '<button class="mtr-btn mtr-kirmizi" data-k="e">⊘&nbsp; ENGELLE</button><button class="mtr-btn" data-k="k">KAPAT</button></div>');
    p.querySelector('[data-k="s"]').onclick = () => { M.sesCal(); M.sikayetPencere(uid, ad); };
    p.querySelector('[data-k="e"]').onclick = () => { M.sesCal(); M.engelleOnay(uid, ad); };
    p.querySelector('[data-k="k"]').onclick = () => { M.sesCal(); M.pencereKapat(); };
  };
  M.engelleOnay = (uid, ad, sonra) => {
    ad = M.yaziTemiz(ad) || "Bu oyuncu";
    const p = M.pencereHtml('<div class="mtr-mesaj">' + ad + ' engellensin mi?</div>' +
      '<div class="mtr-acik">Sana davet gönderemez,\nlistelerinde görünmez.</div>' +
      '<div class="mtr-satir"><button class="mtr-btn mtr-kirmizi">ENGELLE</button><button class="mtr-btn mtr-koyu">VAZGEÇ</button></div>');
    const b = p.querySelectorAll("button");
    b[0].onclick = () => { M.sesCal(); M.engelle(uid, ad); if (sonra) sonra(); M.pencereKapat(); };
    b[1].onclick = () => { M.sesCal(); M.pencereKapat(); };
  };
  M.sikayetPencere = (uid, ad) => {
    let neden = "ad";
    const p = M.pencereHtml('<div class="mtr-mesaj">' + ad + ' neden şikâyet ediliyor?</div>' +
      '<div class="mtr-sec on" data-n="ad"><span class="mtr-yuv"></span>Uygunsuz kullanıcı adı</div>' +
      '<div class="mtr-sec" data-n="davranis"><span class="mtr-yuv"></span>Rahatsız edici davranış</div>' +
      '<div class="mtr-satir"><button class="mtr-btn mtr-kirmizi">GÖNDER</button><button class="mtr-btn mtr-koyu">VAZGEÇ</button></div>');
    p.querySelectorAll(".mtr-sec").forEach((el) => el.onclick = () => {
      neden = el.dataset.n; p.querySelectorAll(".mtr-sec").forEach((x) => x.classList.toggle("on", x === el));
    });
    const b = p.querySelectorAll("button");
    b[1].onclick = () => { M.sesCal(); M.pencereKapat(); };
    b[0].onclick = () => {
      M.sesCal(); b[0].disabled = true;
      const s = M.pencereAc(); s.yaz("Gönderiliyor...");
      firebase.firestore().collection("sikayetler").add({
        sikayetEden: M.uid, sikayetEdenAd: M.ad || "", sikayetEdilen: uid, sikayetEdilenAd: ad, neden: neden,
        zaman: M.zaman(), zamanMs: Date.now()
      }).then(() => s.bitir("Teşekkürler!\nŞikâyetin bize ulaştı, inceleyeceğiz."))
        .catch((e) => { console.error("MATRANC şikâyet hatası:", e); s.bitir("Gönderilemedi.\nİnternet bağlantını kontrol et."); });
    };
  };

  // ---- v9.0: BAĞLANTI KOPTU şeridi (yalnız çevrimiçi maçta) ----
  M.kopmaBant = (goster) => {
    let e = document.getElementById("mtrKopma");
    if (!goster) { if (e) e.remove(); return; }
    if (e) return;
    M.stilEkle();
    e = document.createElement("div"); e.id = "mtrKopma";
    e.innerHTML = '<span class="don"></span>Bağlantı koptu · yeniden bağlanılıyor…';
    document.body.appendChild(e);
  };
  M.kopmaGuncelle = () => {
    const kopuk = navigator.onLine === false || !!(M.oyun && M.oyun.onbellek);
    if (kopuk) { if (!M.kopmaBas) M.kopmaBas = Date.now(); }
    else M.kopmaBas = 0;
    M.kopmaBant(!!M.kopmaBas && Date.now() - M.kopmaBas > 2500);     // kısa kesintilerde şerit çıkmasın
  };

  // listeden tek dokunuşla davet
  M.davetEt = (uid, ad) => {
    if (!uid) return;
    gv("bulunanUid").setString(uid); gv("bulunanAd").setString(ad || "");
    M.davetGonder();
  };

  M.rakipGalAl = (rakipUid) => {
    gv("rakipGal").setNumber(-1);
    gv("rakipAvatar").setNumber(-1);
    gv("rakipPul").setNumber(-1);
    gv("rakipYedek").setNumber(-1);
    if (!rakipUid) return;
    firebase.firestore().collection("oyuncular").doc(rakipUid).get()
      .then((s) => {
        const d = s.exists ? s.data() : {};
        gv("rakipGal").setNumber(Number(d.gal || 0));
        const a = Number(d.avatar);
        gv("rakipAvatar").setNumber(a >= 0 && a <= 9 ? Math.round(a) : 0);
        const p = Number(d.pul), y = Number(d.yedek);
        gv("rakipPul").setNumber(p >= 0 && p <= 44 ? Math.round(p) : -1);
        gv("rakipYedek").setNumber(y >= 0 && y <= 44 ? Math.round(y) : -1);
      })
      .catch(() => {});
  };

  M.oyunaGecis = async (davetId, d, rol) => {
    M.iz("oyunaGecis başladı, rol: " + rol);
    if (M.gidenCagri) { const G = M.gidenCagri; if (!G.ref || G.ref.id !== davetId) M.cagriIptal(); else M.cagriTemizle(); }   // v9.1
    M.pulGonder();
    gv("benDavetci").setNumber(rol === "davetci" ? 1 : 0);
    M.sonRakipEkle(rol === "davetci" ? d.aliciUid : d.gonderenUid, rol === "davetci" ? d.aliciAd : d.gonderenAd);
    M.rakipGalAl(rol === "davetci" ? d.aliciUid : d.gonderenUid);
    M.pencereKapat();
    M.aktifOyun = { id: davetId, rol: rol };
    gv("cevrimiciOyun").setNumber(1);
    gv("cevrimiciOyunId").setString(davetId);
    gv("rakipAd").setString(rol === "davetci" ? d.aliciAd : d.gonderenAd);
    gv("benimRenk").setNumber(0);
    gv("sureSaniye").setNumber(d.sure);
    gv("hedefTur").setNumber(d.tur);
    gv("ayarYazisi").setString(M.ayarYazi(d.sure, d.tur));
    M.sahneDegistir(M.ESLESME_SAHNESI);

    const ref = firebase.firestore().collection("oyunlar").doc(davetId);
    try {
      if (rol === "davetci") {
        // Yazı-turayı yalnızca davet eden atar
        const benKirmizi = Math.random() < 0.5;
        const rakipUid = d.aliciUid;
        await ref.set({
          davetciUid: M.uid, davetliUid: rakipUid,
          kirmiziUid: benKirmizi ? M.uid : rakipUid,
          yesilUid: benKirmizi ? rakipUid : M.uid,
          sure: d.sure, tur: d.tur, olusturma: M.zaman()
        });
        gv("benimRenk").setNumber(benKirmizi ? 1 : 2);
        M.iz("yazı-tura yazıldı, benimRenk = " + (benKirmizi ? 1 : 2));
      } else {
        // Davet edilen sonucu bekler
        const iptal = ref.onSnapshot((s) => {
          if (!s.exists) return;
          iptal();
          gv("benimRenk").setNumber(s.data().kirmiziUid === M.uid ? 1 : 2);
          M.iz("yazı-tura okundu, benimRenk = " + gv("benimRenk").getAsNumber());
        }, (e) => console.error("MATRANC eşleşme dinleme hatası:", e));
      }
    } catch (e) {
      console.error("MATRANC yazı-tura hatası:", e);
      M.iz("YAZI-TURA HATASI: " + (e && e.message ? e.message : e));
    }
  };

  // =====================================================================
  //  HAMLE EŞİTLEME (Aşama 5)
  //  Oyun sahnesinde, cevrimiciOyun = 1 iken her karede çalışır.
  //  • Sıra rakipteyken aiDurum = 7 yapılır: insan dokunma etkinlikleri kilitlenir.
  //  • Kendi hamlen bitince (sıra rakibe geçince) hamle Firebase'e yazılır.
  //  • Rakibin hamlesi gelince çarklar ayarlanır ve aiDurum = 3 yapılır;
  //    hamleyi bilgisayar hamlesi etkinlikleri uygular.
  // =====================================================================
  M.BEKLE_AI = 7;
  M.sv = (sahne, ad) => sahne.getVariables().get(ad);

  M.tahtaOku = (sahne) => {
    const t = {};
    for (const k of sahne.getObjects("kutucuk")) {
      const v = k.getVariables();
      t[v.get("değer").getAsNumber()] = v.get("sahip").getAsNumber();
    }
    return t;
  };
  M.turNo = () => gv("skorK").getAsNumber() + gv("skorY").getAsNumber();

  M.oyunBaglan = () => {
    // v10.13: MEKTUP TASLAĞI — ilk hamle davetle gidecek; Firebase'de henüz oyun yok, yalnız yerel tahta
    if (M.mektupMod && M.mektupMod.taslak) {
      if (!M.oyun || !M.oyun.taslak)
        M.oyun = { id: "taslak", taslak: true, mektup: true, ilkTamam: true, gelen: [], uygulanan: 0, sonN: 0, abone: null, otoSayac: { 1: 0, 2: 0 }, islenen: 0, bitti: null };
      return;
    }
    const id = gv("cevrimiciOyunId").getAsString();
    if (!id || (M.oyun && M.oyun.id === id)) return;
    if (M.oyun && M.oyun.abone) M.oyun.abone();
    if (M.oyun && M.oyun.bittiAbone) M.oyun.bittiAbone();
    if (M.oyun && M.oyun.emojiAbone) M.oyun.emojiAbone();
    if (M.oyun && M.oyun.metaAbone) M.oyun.metaAbone();
    if (M.oyun && M.oyun.rakipAbone) M.oyun.rakipAbone();   // v10.13
    M.oyun = { id: id, gelen: [], uygulanan: 0, sonN: 0, abone: null, otoSayac: { 1: 0, 2: 0 }, islenen: 0, bitti: null,
      mektup: !!(M.mektupMod && M.mektupMod.id === id), ilkTamam: false };   // v10.2
    const oyunRef = firebase.firestore().collection("oyunlar").doc(id);
    M.oyun.metaAbone = oyunRef.onSnapshot({ includeMetadataChanges: true }, (s) => {   // v9.0: sunucuya bağlı mı?
      if (M.oyun && M.oyun.id === id) M.oyun.onbellek = s.metadata.fromCache;
    }, () => {});
    M.oyun.bittiAbone = oyunRef.onSnapshot((s) => {
      try { if (s.exists) M.ikiliBasla(s.data().kirmiziUid, s.data().yesilUid); } catch (e) {}   // v10.15
      const b = s.exists ? s.data().bitti : null;
      if (b && M.oyun && M.oyun.id === id && !M.oyun.bitti) M.hukmenGoster(b);
      // v10.13: rakibin uygulaması kapanınca / arka plana geçince (oyuncular/{uid}.cevrimici = false) hükmen sayacı
      if (s.exists && M.oyun && M.oyun.id === id && !M.oyun.mektup && !M.oyun.rakipAbone) {
        const dd = s.data(), ben = gv("benimRenk").getAsNumber();
        const rUid = ben === 1 ? dd.yesilUid : dd.kirmiziUid;
        if (rUid) {
          let ilk = true;
          M.oyun.rakipAbone = firebase.firestore().collection("oyuncular").doc(rUid).onSnapshot((r) => {
            const o2 = M.oyun; if (!o2 || o2.id !== id) return;
            const acik = !r.exists || r.data().cevrimici !== false;
            if (ilk) { ilk = false; if (!acik) M.iz("rakip başlangıçta çevrimdışı görünüyor (sayılmaz)"); return; }   // eski değer: yalnız oyun sırasında olan değişiklik sayılır
            if (!acik && !o2.rakipYok) { o2.rakipYok = Date.now(); M.iz("rakip oyundan ayrıldı (uygulama kapandı / arka planda)"); }
            if (acik && o2.rakipYok) { o2.rakipYok = 0; M.iz("rakip geri döndü"); }
          }, () => {});
        }
      }
    });
    M.oyun.abone = firebase.firestore().collection("oyunlar").doc(id).collection("hamleler")
      .orderBy("n").onSnapshot((snap) => {
        const yeni = snap.docChanges().filter((ch) => ch.type === "added").map((ch) => ch.doc.data()).sort((a, b) => a.n - b.n);
        // Hükmen yenilgi: bir oyuncunun kendi sırası iki kez üst üste süre dolarak geçerse
        yeni.forEach((h) => {
          if (h.n <= M.oyun.islenen) return;
          M.oyun.islenen = h.n;
          M.oyun.otoSayac[h.renk] = h.oto ? M.oyun.otoSayac[h.renk] + 1 : 0;
          if (M.oyun.otoSayac[h.renk] >= 2) M.hukmenYaz(h.renk, "sure2");
        });
        snap.docChanges().forEach((ch) => {
          if (ch.type !== "added") return;
          const h = ch.doc.data();
          M.oyun.sonN = Math.max(M.oyun.sonN, h.n);              // iki oyuncunun hamleleri tek sırada numaralanır
          if (h.renk === gv("benimRenk").getAsNumber() && !(M.oyun.mektup && !M.oyun.ilkTamam)) return;  // kendi hamlemiz (v10.2: mektupta ilk okumada tahtayı kurmak için alınır)
          if (h.n > M.oyun.uygulanan && !M.oyun.gelen.some((x) => x.n === h.n)) {
            M.oyun.gelen.push(h);
            M.oyun.gelen.sort((a, b) => a.n - b.n);
            M.iz("rakip hamlesi geldi #" + h.n + "  " + h.k1 + "×" + h.k2 + (h.kaynak ? "  takas " + h.kaynak + "→" + h.hedef : ""));
          }
        });
        if (M.oyun && M.oyun.id === id && !M.oyun.ilkTamam) { M.oyun.ilkTamam = true; M.iz("ilk hamle listesi alındı: " + M.oyun.gelen.length); }   // v10.2
      }, (e) => M.iz("HAMLE DİNLEME HATASI: " + (e && e.message ? e.message : e)));
    // EMOJİ: ilk okumadaki eski emojiler atlanır, sonra gelen her yeni emoji kuyruğa girer
    M.emojiKuyruk = [];
    let emIlk = true;
    M.oyun.emojiAbone = oyunRef.collection("emojiler").onSnapshot((snap) => {
      if (emIlk) { emIlk = false; M.iz("emoji dinleme başladı"); return; }
      snap.docChanges().forEach((ch) => {
        if (ch.type !== "added" || ch.doc.metadata.hasPendingWrites) return;
        const d = ch.doc.data();
        M.emojiKuyruk.push({ renk: d.renk, e: d.e });
        M.iz("emoji geldi: renk " + d.renk + ", emoji " + d.e);
      });
    }, (e) => M.iz("EMOJİ DİNLEME HATASI: " + (e && e.message ? e.message : e)));
    M.iz("çevrim içi oyuna bağlanıldı");
  };

  M.emojiGonder = (e) => {
    const o = M.oyun; if (!o) { M.iz("EMOJİ: oyun bağlantısı yok"); return; }
    firebase.firestore().collection("oyunlar").doc(o.id).collection("emojiler")
      .add({ renk: gv("benimRenk").getAsNumber(), e: e, zaman: M.zaman() })
      .then(() => M.iz("emoji gönderildi: " + e))
      .catch((err) => M.iz("EMOJİ GÖNDERME HATASI: " + (err && err.message ? err.message : err)));
  };

  M.hamleGonder = (h) => {
    const o = M.oyun; if (!o) return;
    if (o.taslak) { M.mektupTaslakGonder(h); return; }   // v10.13
    o.sonN += 1;
    h.n = o.sonN; h.zaman = M.zaman();
    firebase.firestore().collection("oyunlar").doc(o.id).collection("hamleler").doc(String(h.n)).set(h)
      .then(() => M.iz("hamle gönderildi #" + h.n + "  " + h.k1 + "×" + h.k2 + (h.kaynak ? "  takas " + h.kaynak + "→" + h.hedef : "") + (h.oto ? "  (süre doldu)" : "")))
      .catch((e) => M.iz("HAMLE GÖNDERME HATASI: " + (e && e.message ? e.message : e)));
  };

  M.siraEtiketi = (metin, renk) => {
    M.stilEkle();
    let e = document.getElementById("mtrSira");
    if (!metin) { if (e) e.remove(); return; }
    if (!e) {
      e = document.createElement("div"); e.id = "mtrSira";
      e.style.cssText = "position:fixed;left:50%;transform:translateX(-50%);bottom:calc(14px + env(safe-area-inset-bottom,0px));" +
        "z-index:99990;padding:9px 18px;border-radius:22px;font:800 14px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;line-height:1.35;" +
        "background:#fdfbf6;border:3px solid #c3cde0;color:#2c3862;box-shadow:0 6px 16px rgba(10,12,30,.3);white-space:normal;text-align:center;" +
        "width:max-content;max-width:calc(100vw - 28px);box-sizing:border-box";   // v10.15: uzun yazı ekrandan taşmaz, 2 satıra iner
      document.body.appendChild(e);
    }
    if (e.textContent !== metin) e.textContent = metin;
    e.style.borderColor = renk;
  };

  M.oyunKaresi = (sahne) => {
    try { M.bildirimKaresi(sahne); } catch (e) {}   // v10.13
    M.eslesmeKaresi(sahne);
    const ad = sahne.getName ? sahne.getName() : "";
    if (ad !== M.OYUN_SAHNESI || gv("cevrimiciOyun").getAsNumber() !== 1) {
      if (M.durum) {
        // Oyun bitmeden oyun sahnesinden çıkıldı → kesin ayrılma, hemen hükmen yenilgi
        if (ad !== M.OYUN_SAHNESI && M.oyunSuruyor() && !M.mektupMod) M.hukmenYaz(gv("benimRenk").getAsNumber(), "ayrildi");
        if (ad !== M.OYUN_SAHNESI && M.mektupMod && ad !== M.ESLESME_SAHNESI) M.mektupBirak();   // v10.2
        M.durum = null; M.siraEtiketi(null);
      }
      M.kopmaBas = 0; M.kopmaBant(false);
      return;
    }
    M.kopmaGuncelle();
    if (M.rovansGecis) return;
    M.oyunBaglan();
    const o = M.oyun; if (!o) return;
    // Sahne yeniden başladıysa (yeni tur) izleme durumunu sıfırla
    if (!M.durum || M.durum.sahne !== sahne) {
      M.durum = { sahne: sahne, oncekiSira: null, oncekiTahta: null, oncekiTur: M.turNo(), bekleyen: null };
    }
    const D = M.durum;
    if (o.mektup) { M.mektupKaresi(sahne, D, o); return; }          // v10.2
    if (o.bitti) { M.sv(sahne, "aiDurum").setNumber(9); return; }   // hükmen bitti: oyun dondu
    const benimIdx = gv("benimRenk").getAsNumber() - 1;   // 0 kırmızı, 1 yeşil
    if (benimIdx < 0) return;
    const rakipIdx = 1 - benimIdx;
    const sira = M.sv(sahne, "sıradakiOyuncu").getAsNumber();
    const aiDurum = M.sv(sahne, "aiDurum").getAsNumber();
    const oyunBitti = M.sv(sahne, "oyunBitti").getAsNumber();
    const tahta = M.tahtaOku(sahne);
    const k1 = sahne.getObjects("kadran1")[0], k2 = sahne.getObjects("kadran2")[0];

    // 1) Kendi hamlem bitti mi? (sıra benden rakibe geçti) → birkaç kare sonra gönder
    if (D.oncekiSira === benimIdx && sira === rakipIdx && D.oncekiTahta) {
      D.bekleyen = { oncesi: D.oncekiTahta, kare: 3, oto: !!D.oncekiSureDolu,
        k1: k1.getVariables().get("secilenSayi").getAsNumber(),
        k2: k2.getVariables().get("secilenSayi").getAsNumber(), tur: D.oncekiTur };
    }
    if (D.bekleyen && --D.bekleyen.kare <= 0) {
      const b = D.bekleyen; D.bekleyen = null;
      const benimSahip = benimIdx + 1;
      let hedef = 0, kaynak = 0;
      for (const d in tahta) {
        if (tahta[d] === benimSahip && b.oncesi[d] !== benimSahip) hedef = Number(d);
        if (b.oncesi[d] === benimSahip && tahta[d] !== benimSahip) kaynak = Number(d);
      }
      M.hamleGonder({ renk: benimSahip, tur: b.tur, k1: b.k1, k2: b.k2, hedef: hedef, kaynak: kaynak, oto: b.oto });
    }

    // 2) Sıra rakipteyse dokunmaları kilitle (menü penceresi açıksa — aiDurum 8 — dokunma)
    if (sira === rakipIdx && oyunBitti === 0 && aiDurum === 0) M.sv(sahne, "aiDurum").setNumber(M.BEKLE_AI);

    // 3) Rakibin hamlesi geldiyse uygula
    const h = o.gelen[0];
    if (h && h.tur > M.turNo() && !D.turUyarisi) { D.turUyarisi = true; M.iz("hamle #" + h.n + " sonraki tur için, bekletiliyor"); }
    if (h && h.tur < M.turNo()) { o.gelen.shift(); o.uygulanan = h.n; }   // eski turdan kalmış
    else if (h && h.tur === M.turNo() && sira === rakipIdx && oyunBitti === 0 &&
             M.sv(sahne, "aiDurum").getAsNumber() === M.BEKLE_AI) {
      o.gelen.shift(); o.uygulanan = h.n;
      k1.getVariables().get("secilenSayi").setNumber(h.k1);
      k1.getVariables().get("hedefAci").setNumber((h.k1 - 1) * 36 + 18);
      k2.getVariables().get("secilenSayi").setNumber(h.k2);
      k2.getVariables().get("hedefAci").setNumber((h.k2 - 1) * 36 + 18);
      M.sv(sahne, "seciliID").setNumber(h.kaynak || 0);
      gdjs.evtTools.runtimeScene.resetTimer(sahne, "ai");
      M.sv(sahne, "aiDurum").setNumber(3);
      M.iz("rakip hamlesi uygulanıyor #" + h.n);
    }

    // 4) Süre ve hükmen yenilgi
    M.sureKontrol(sahne, D, sira, benimIdx, rakipIdx, oyunBitti);

    // 5) Oyun (maç) bitti mi? → rövanş paneli
    M.macSonuKontrol(sahne, D, oyunBitti);

    // 6) Çevrim içinde çıkış penceresi oyunu durdurmasın (süre akmaya devam eder)
    const menuAcik = M.sv(sahne, "menuAcik").getAsNumber() === 1;
    if (menuAcik) { try { gdjs.evtTools.runtimeScene.setTimeScale(sahne, 1); } catch (e) {} }

    // 7) Sıra etiketi
    if (menuAcik) M.siraEtiketi("ÇIKARSAN OYUNU HÜKMEN KAYBEDERSİN", "#e2464a");
    else if (oyunBitti !== 0) M.siraEtiketi(null);
    else if (M.oyun && M.oyun.rakipYok && !M.oyun.bitti) {   // v10.13
      const kalan = Math.max(1, Math.ceil(M.KAPANMA_SN - (Date.now() - M.oyun.rakipYok) / 1000));
      M.siraEtiketi("Rakip oyundan ayrıldı · " + kalan + " sn içinde dönmezse kazanırsın", "#e2a23b");
    }
    else if (sira === benimIdx) {
      const kalan = M.BEKLEME_SINIRI - M.hamleSuresi(sahne);
      if (gv("sureSaniye").getAsNumber() === 0 && kalan <= M.UYARI_SN && kalan > 0) {
        M.siraEtiketi("HAMLE YAP!  " + Math.ceil(kalan) + " sn", "#e2464a");
        const sn = Math.ceil(kalan);                       // v9.4: sesli uyarı — 30. saniyede bir kez, son 10 saniyede her saniye
        if (sn !== M.uyariSn) {
          M.uyariSn = sn;
          if (sn === M.UYARI_SN || sn <= 10) { try { game.getSoundManager().playSound("sure_uyari.wav", false, 70, 1); } catch (e) {} }
        }
        const e = document.getElementById("mtrSira");
        if (e) { e.style.background = Math.floor(kalan * 2) % 2 ? "#e2464a" : "#f0646a"; e.style.color = "#fff"; }
      } else {
        M.siraEtiketi(null);                               // v9.0e: sıra yalnız üstteki etikette
        M.uyariSn = 0;
      }
    }
    else {
      M.siraEtiketi(null);                                 // v9.0e: sıra yalnız üstteki etikette
    }

    D.oncekiSira = sira;
    D.oncekiTahta = tahta;
    D.oncekiTur = M.turNo();
    const sureSn = gv("sureSaniye").getAsNumber();
    D.oncekiSureDolu = sureSn > 0 && sira === benimIdx && M.hamleSuresi(sahne) >= sureSn - 0.3;
  };

  // =====================================================================
  //  SÜRE VE HÜKMEN YENİLGİ (Aşama 6)
  // =====================================================================
  M.BEKLEME_SINIRI = 180;     // süresiz oyunda kendi sırasında en fazla bekleme (sn) — 3 dakika
  M.UYARI_SN = 30;            // son 30 sn: "HAMLE YAP!" geri sayımı
  M.KOPMA_PAYI = 20;          // rakipten haber gelmezse ek bekleme payı (sn)
  M.KAPANMA_SN = 15;          // v10.13: rakip uygulamayı kapatınca / arka plana alınca bu kadar sn dönmezse hükmen

  M.hamleSuresi = (sahne) => {
    try { return gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(sahne, "hamle"); } catch (e) { return 0; }
  };

  // Hükmen yenilgiyi Firebase'e yaz (iki taraf da yazmaya çalışabilir; ilk yazan geçerli)
  M.hukmenYaz = (kaybedenRenk, neden) => {
    const o = M.oyun; if (!o || o.bitti) return;
    const ref = firebase.firestore().collection("oyunlar").doc(o.id);
    firebase.firestore().runTransaction(async (t) => {
      const s = await t.get(ref);
      if (s.exists && s.data().bitti) return;
      t.update(ref, { bitti: { kaybedenRenk: kaybedenRenk, neden: neden } });
    }).catch((e) => M.iz("HÜKMEN YAZMA HATASI: " + (e && e.message ? e.message : e)));
    M.iz("hükmen: renk " + kaybedenRenk + " kaybetti (" + neden + ")");
  };

  M.HUKMEN_MIN_HAMLE = 6;     // hükmen galibiyetin sayılması için maçta yapılmış en az hamle (iki oyuncu toplam)
  M.hukmenGoster = (b) => {
    const o = M.oyun; if (!o || o.bitti) return;
    o.bitti = b;
    const ben = gv("benimRenk").getAsNumber();
    const kazandim = b.kaybedenRenk !== ben;
    // Hükmen galibiyet ancak maçta en az M.HUKMEN_MIN_HAMLE hamle yapıldıysa sayılır (hileye karşı):
    // o zaman galibiyet (rütbe) + 2 yıldız. Daha erken biterse hiçbiri verilmez.
    const sayilir = kazandim && (o.sonN || 0) >= M.HUKMEN_MIN_HAMLE;
    if (sayilir) {
      const n = (M.galOku() || 0) + 1;
      try { gdjs.evtTools.storage.writeNumberInJSONFile("matranc", "galCevrimici", n); } catch (e) {}
      M.galGonder(n);
      try {
        const MP = window.MatrancPul;
        if (MP && typeof MP.yildiz === "number" && MP.yaz) { MP.yildiz += 2; MP.yaz("yildiz", MP.yildiz); }
        else {
          const st = gdjs.evtTools.storage, v = new gdjs.Variable();
          let y = 0; if (st.elementExistsInJSONFile("matranc", "yildiz")) { st.readNumberFromJSONFile("matranc", "yildiz", M.sahneRef || null, v); y = v.getAsNumber(); }
          st.writeNumberInJSONFile("matranc", "yildiz", y + 2);
        }
      } catch (e) {}
    }
    const nedenler = kazandim
      ? { cekildi: "Rakip maçtan çekildi.", mektupSure: "Rakip hamle süresi içinde hamle yapmadı.", sure2: "Rakibin süresi iki kez üst üste doldu.", bekleme: "Rakip 3 dakika boyunca hamle yapmadı.", ayrildi: "Rakip oyundan ayrıldı.", kopma: "Rakipten uzun süre haber alınamadı.", kapandi: "Rakip oyunu kapattı ve " + M.KAPANMA_SN + " saniye içinde dönmedi." }
      : { cekildi: "Maçtan çekildin.", mektupSure: "Hamle süren içinde hamle yapmadın.", sure2: "Süren iki kez üst üste doldu.", bekleme: "3 dakika boyunca hamle yapmadın.", ayrildi: "Oyundan ayrıldın.", kopma: "Bağlantın koptu.", kapandi: "Oyunu kapattın." };
    M.siraEtiketi(null);
    const p = M.pencereAc();
    const ek = !kazandim ? "" : (sayilir ? "\n\n+2 yıldız kazandın!" : "\n\nMaç çok erken bittiği için galibiyet ve yıldız sayılmadı (toplam en az 6 hamle).");
    p.yaz((kazandim ? "OYUNU KAZANDIN!" : "OYUNU KAYBETTİN") + "\n(hükmen)\n\n" + (nedenler[b.neden || b.sebep] || "") + ek);
    if (o.mektup) { M.mektupGorYaz(o.id); p.dugme("MEKTUP MAÇLARIM", () => { M.pencereKapat(); M.mektupBirak(); M.sahneDegistir(M.MEKTUP_SAHNESI); }); }   // v10.2/1 · v10.70.3
    else p.dugme("MENÜ", () => { M.pencereKapat(); M.sahneDegistir("Menu"); });
    try { game.getSoundManager().playSound(kazandim ? "oyun_kazanma.wav" : "dugme.wav", false, 60, 1); } catch (e) {}
  };

  // Her karede (oyunKaresi içinden) süre kontrolleri
  M.sureKontrol = (sahne, D, sira, benimIdx, rakipIdx, oyunBitti) => {
    const o = M.oyun;
    const sure = gv("sureSaniye").getAsNumber();
    // Sıra değiştiyse sayaçları başlat
    if (sira !== D.sureSira) { D.sureSira = sira; D.siraBasiGercek = Date.now(); }
    M.sonSiraBenim = sira === benimIdx && oyunBitti === 0 && !o.bitti;     // v9.4: ekran kapanınca sıra kimdeydi?
    if (oyunBitti !== 0 || o.bitti) return;
    // Kendi sıram: süresiz oyunda 3 dakika hamle yapmazsam hükmen kaybederim
    if (sira === benimIdx && sure === 0 && M.hamleSuresi(sahne) >= M.BEKLEME_SINIRI) {
      M.hukmenYaz(benimIdx + 1, "bekleme");
    }
    // Rakibin sırası: rakipten haber gelmeden çok uzun süre geçtiyse (uygulaması kapanmış / internet yok)
    if (sira === rakipIdx && M.sv(sahne, "aiDurum").getAsNumber() === M.BEKLE_AI) {
      const sinir = (sure > 0 ? 2 * sure : M.BEKLEME_SINIRI) + M.KOPMA_PAYI;
      if ((Date.now() - D.siraBasiGercek) / 1000 >= sinir) M.hukmenYaz(rakipIdx + 1, sure > 0 ? "kopma" : "bekleme");
    }
    // v10.13: rakip uygulamayı kapattı → M.KAPANMA_SN içinde dönmezse hükmen (sıra kimde olursa olsun)
    if (o.rakipYok && (Date.now() - o.rakipYok) / 1000 >= M.KAPANMA_SN) M.hukmenYaz(rakipIdx + 1, "kapandi");
  };

  // v9.4: ekran kilitlenince / uygulama arka plana geçince oyun döngüsü durur ve "hamle" sayacı da durur.
  // Ekran açılınca, KENDİ sıramda geçen gerçek süreyi sayaca ekleriz: süre dolduysa olaylar otomatik hamleyi hemen yapar,
  // böylece rakip, benim ekranım kapalıyken akması gereken süreyi bir daha beklemez.
  M.gizliDinle = () => {
    if (window.MatrancGizliDinle) return;
    window.MatrancGizliDinle = true;
    document.addEventListener("visibilitychange", () => {
      const M2 = window.MatrancCevrimici; if (!M2) return;
      if (document.hidden) { M2.gizliBas = Date.now(); M2.gizliBenim = !!M2.sonSiraBenim; return; }
      const bas = M2.gizliBas; M2.gizliBas = 0;
      if (!bas || !M2.gizliBenim) return;
      try {
        const D = M2.durum, sahne = D && D.sahne;
        if (!sahne || sahne.getName() !== M2.OYUN_SAHNESI || gv("cevrimiciOyun").getAsNumber() !== 1) return;
        if (gv("sureSaniye").getAsNumber() <= 0 || !M2.sonSiraBenim) return;      // süresiz oyunda 3 dk kuralı zaten gerçek zamanla işliyor
        const t = sahne.getTimeManager().getTimer("hamle");
        const ek = Date.now() - bas;
        if (t && ek > 300) { t.setTime(t.getTime() + ek); M2.iz("ekran kapalıydı: hamle sayacına +" + Math.round(ek / 1000) + " sn"); }
      } catch (e) { M2.iz("GİZLİ SÜRE HATASI: " + (e && e.message ? e.message : e)); }
    });
  };

  M.oyunIzleyiciKur = () => {
    if (window.MatrancOyunIzleyici) return;
    window.MatrancOyunIzleyici = true;
    gdjs.registerRuntimeScenePostEventsCallback((sahne) => {
      const M2 = window.MatrancCevrimici;
      if (!M2 || !M2.oyunKaresi) return;
      try { M2.oyunKaresi(sahne); } catch (e) { M2.iz("OYUN İZLEME HATASI: " + (e && e.message ? e.message : e)); }
    });
  };

  // Oyun (maç) hâlâ sürüyor mu? (hükmen bitmemiş ve kimse hedef tur sayısına ulaşmamış)
  M.oyunSuruyor = () => {
    const o = M.oyun; if (!o || o.bitti) return false;
    const hedef = gv("hedefTur").getAsNumber() || 2;
    return gv("skorK").getAsNumber() < hedef && gv("skorY").getAsNumber() < hedef;
  };

  // Uygulama / sayfa kapanırken: kesin ayrılma (hızlı, tek yazma; sayfa kapanmadan gitmesi için)
  M.kapanisDinle = () => {
    if (window.MatrancKapanis) return;
    window.MatrancKapanis = true;
    window.addEventListener("pagehide", () => {
      const M2 = window.MatrancCevrimici;
      if (M2 && M2.rovans) { try { M2.rovansYaz("hayir"); } catch (e) {} }
      if (!M2 || !M2.durum || !M2.oyunSuruyor() || M2.mektupMod) return;   // v10.2: mektupta ayrılmak serbest
      try {
        firebase.firestore().collection("oyunlar").doc(M2.oyun.id)
          .update({ bitti: { kaybedenRenk: gv("benimRenk").getAsNumber(), neden: "ayrildi" } });
      } catch (e) {}
    });
  };

  // =====================================================================
  //  OYUN SONU ve RÖVANŞ (Aşama 7)
  // =====================================================================
  M.macSonuKontrol = (sahne, D, oyunBitti) => {
    if (oyunBitti === 0 || M.oyunSuruyor()) { M.rovansPanelKapat(); return; }
    if (!D.macSonuZaman) {
      D.macSonuZaman = Date.now();
      M.iz("maç bitti: skor " + gv("skorK").getAsNumber() + "-" + gv("skorY").getAsNumber() + ", hedef " + gv("hedefTur").getAsNumber());
    }
    // Kartın "YENİ OYUN" ve "ANA MENÜ" düğmeleri yerine rövanş paneli kullanılır
    ["KartButon", "MenuButon"].forEach((n) => sahne.getObjects(n).forEach((x) => x.hide(true)));
    // değer sorusu açıkken rövanş paneli beklesin (soru kapanınca 2,5 sn sonra açılır)
    if (window.MatrancDeger && window.MatrancDeger.bekle()) { D.macSonuZaman = Date.now(); return; }
    if (Date.now() - D.macSonuZaman < 2500) return;     // önce kart ve konfeti görünsün
    if (!M.rovans || M.rovans.id !== M.oyun.id) M.rovansBaslat();
  };

  M.rovansBaslat = () => {
    const id = M.oyun.id;
    M.iz("rövanş dinleniyor: " + id);
    M.rovans = { id: id, durum: null };
    const ref = firebase.firestore().collection("oyunlar").doc(id);
    M.rovans.abone = ref.onSnapshot((s) => {
      if (!M.rovans || M.rovans.id !== id || !s.exists) return;
      const d = s.data(), r = d.rovans || {};
      const ben = String(gv("benimRenk").getAsNumber()), o = ben === "1" ? "2" : "1";
      M.rovans.veri = d;
      if (r[o] === "hayir") M.rovansPanel("ayrildi");
      else if (r[ben] === "evet" && r[o] === "evet") M.rovansKur(d);
      else if (r[ben] === "evet") M.rovansPanel("bekle");
      else if (r[o] === "evet") M.rovansPanel("istek");
      else M.rovansPanel("sor");
    }, (e) => M.iz("RÖVANŞ DİNLEME HATASI: " + (e && e.message ? e.message : e)));
  };

  M.rovansYaz = (cevap) => {
    if (!M.rovans) return;
    const alan = {}; alan["rovans." + gv("benimRenk").getAsNumber()] = cevap;
    firebase.firestore().collection("oyunlar").doc(M.rovans.id).update(alan).catch((e) => M.iz("RÖVANŞ HATASI: " + e.message));
  };

  M.anaMenuyeDon = () => {
    M.rovansYaz("hayir");
    M.rovansPanelKapat(true);
    M.sahneDegistir("Menu");
  };


  // ================= v10.15: İKİLİ SKOR =================
  // ikili/{uidA_uidB} = { [uidA]: galibiyet, [uidB]: galibiyet } — sunucu fonksiyonu (v9) her oyun bitince sayar
  M.ikili = { cift: null, veri: null, abone: null };
  M.ikiliBasla = (kUid, yUid) => {
    if (!M.uid || !kUid || !yUid || kUid === yUid) return;
    const cift = [kUid, yUid].sort().join("_");
    if (M.ikili.cift === cift) return;
    if (M.ikili.abone) { try { M.ikili.abone(); } catch (e) {} }
    M.ikili = { cift: cift, veri: null, rakip: kUid === M.uid ? yUid : kUid, abone: null };
    M.ikili.abone = firebase.firestore().collection("ikili").doc(cift).onSnapshot((d) => {
      if (M.ikili.cift !== cift) return;
      M.ikili.veri = d.exists ? d.data() : {};
      M.ikiliPanelYaz();
    }, () => {});
  };
  M.ikiliYazi = () => {
    const I = M.ikili; if (!I || !I.veri || !I.rakip) return "";
    const ben = Math.round(Number(I.veri[M.uid]) || 0), o = Math.round(Number(I.veri[I.rakip]) || 0);
    if (!ben && !o) return "";
    const benAd = M.ad || gv("oyuncuAdi").getAsString() || "Sen", rAd = gv("rakipAd").getAsString() || "Rakip";
    return "🏆 Aranızdaki skor: " + benAd + " " + ben + " – " + o + " " + rAd;
  };
  M.ikiliPanelYaz = () => {
    const p = document.getElementById("mtrRovans"); if (!p) return;
    const e = p.querySelector(".mtr-ikili"); if (!e) return;
    const t = M.ikiliYazi(); e.textContent = t; e.style.display = t ? "block" : "none";
  };

  // ================= v10.15: RÜTBE HEDİYESİ =================
  // Her yeni rütbe 20 yıldız. Verilen en yüksek rütbe oyuncular/{uid}.rutbeHediye'de (telefon değişse de tekrar verilmez).
  // Bu alan hiç yoksa (güncellemeden önceki oyuncular) geçilmiş bütün rütbeler bir kez toplu verilir.
  M.RUTBE_AD = ["ÇIRAK", "HESAPÇI", "ÇARPAN", "STRATEJİST", "USTA", "DAHİ", "MATRANÇÖR"];
  M.RUTBE_ESIK = [0, 1, 3, 7, 15, 30, 50];
  M.rutbeNo = (n) => { let r = 0; for (let i = 0; i < M.RUTBE_ESIK.length; i++) if (n >= M.RUTBE_ESIK[i]) r = i; return r; };
  M.yildizEkle = (k) => {
    try {
      const MP = window.MatrancPul;
      if (MP && typeof MP.yildiz === "number" && MP.yaz) { MP.yildiz += k; MP.yaz("yildiz", MP.yildiz); return; }
      const st = gdjs.evtTools.storage, v = new gdjs.Variable();
      let y = 0; if (st.elementExistsInJSONFile("matranc", "yildiz")) { st.readNumberFromJSONFile("matranc", "yildiz", M.sahneRef || null, v); y = v.getAsNumber(); }
      st.writeNumberInJSONFile("matranc", "yildiz", y + k);
    } catch (e) {}
  };
  M.rutbeKontrol = async (n) => {
    if (!M.uid || M.rutbeIsleniyor) return;
    const r = M.rutbeNo(Math.max(0, Math.round(Number(n) || 0)));
    if (r <= 0) return;
    M.rutbeIsleniyor = true;
    try {
      const ref = firebase.firestore().collection("oyuncular").doc(M.uid);
      const d = await ref.get();
      const verilen = d.exists && typeof d.data().rutbeHediye === "number" ? d.data().rutbeHediye : 0;
      if (r <= verilen) return;
      await ref.update({ rutbeHediye: r });
      const adet = r - verilen, k = adet * 20;
      M.yildizEkle(k);
      M.iz("rütbe hediyesi: " + M.RUTBE_AD[r] + " +" + k + " yıldız");
      M.rutbePencere(r, k, adet, Math.max(0, Math.round(Number(n) || 0)));
    } catch (e) { M.iz("rütbe hediyesi hatası: " + (e && e.message ? e.message : e)); }
    finally { M.rutbeIsleniyor = false; }
  };
  M.rutbeResim = (r) => {
    try {
      const res = (game.getGameData().resources || {}).resources || [];
      for (const re of [new RegExp("rutbe2_" + r + "\\.", "i"), new RegExp("rutbe_" + r + "\\.", "i")])
        for (const x of res) if (re.test((x.name || "") + " " + (x.file || ""))) return x.file || "";
    } catch (e) {}
    return "";
  };
  M.rutbePencere = (r, k, adet, n) => {
    M.stilEkle();
    const eski = document.getElementById("mtrRutbe"); if (eski) eski.remove();
    const d = document.createElement("div"); d.id = "mtrRutbe";
    d.style.cssText = "position:fixed;inset:0;z-index:100000;background:rgba(10,12,40,.6);display:flex;align-items:center;justify-content:center;font-family:Poppins,-apple-system,'Segoe UI',Roboto,sans-serif";
    const son = r < 6 ? "Sonraki rütbe: " + M.RUTBE_AD[r + 1] + " (" + (M.RUTBE_ESIK[r + 1] - n) + " galibiyet sonra)" : "En yüksek rütbedesin!";
    const url = M.rutbeResim(r);
    d.innerHTML = "<div style='position:relative;width:86%;max-width:380px;background:linear-gradient(#fffdf6,#f4eee0);border-radius:30px;padding:54px 20px 22px;text-align:center;box-shadow:0 10px 0 #d9cfbd,0 22px 40px rgba(0,0,0,.45)'>" +
      "<div style='position:absolute;left:50%;top:-24px;transform:translateX(-50%);white-space:nowrap;background:linear-gradient(#ffd75a,#f5b51f);color:#5a3a00;font-weight:800;font-size:20px;padding:11px 28px;border-radius:999px;box-shadow:0 6px 0 #c98f12'>🎉 RÜTBE ATLADIN!</div>" +
      (url ? "<img src='" + url + "' style='width:140px;filter:drop-shadow(0 10px 14px rgba(0,0,0,.35))'>" : "") +
      "<div style='font-weight:800;font-size:28px;color:#2c3862;margin-top:6px;letter-spacing:1px'>" + M.RUTBE_AD[r] + "</div>" +
      "<div style='font-weight:700;font-size:13.5px;color:#7a8099;margin-top:2px'>" + son + "</div>" +
      "<div style='display:inline-block;margin-top:16px;background:#fff3c8;border:2px solid #f1d27a;border-radius:999px;padding:8px 20px;font-weight:800;font-size:22px;color:#2c3862'>⭐ +" + k + " yıldız hediye</div>" +
      (adet > 1 ? "<div style='font-weight:700;font-size:13px;color:#7a8099;margin-top:6px'>Geçtiğin " + adet + " rütbenin hediyesi bir arada!</div>" : "") +
      "<div style='margin-top:18px'><button class='mtr-btn' id='mtrRutbeTamam'>HARİKA!</button></div></div>";
    document.body.appendChild(d);
    try { M.sesCal && M.sesCal(); } catch (e) {}
    d.querySelector("#mtrRutbeTamam").onclick = (e) => { e.stopPropagation(); try { M.sesCal(); } catch (x) {} d.remove(); };
  };

  // ================= v10.15: GECE/GÜNDÜZ ZEMİNİ (Profil, Ayarlar, Nasıl Oynanır) =================
  // 19.00–06.00 arası zemin nesnesinin animasyon 1'i (gece) gösterilir; animasyon yoksa gündüz kalır.
  M.GECE_ZEMIN = { Profil: ["PrZemin", "PrPerde"], Ayarlar: ["AyZemin"], NasilOynanir: ["NasilZemin"] };
  M.geceMi = () => { const h = new Date().getHours(); return h >= 19 || h < 6; };
  if (!window.__mtrGeceZeminKanca2) {
    window.__mtrGeceZeminKanca2 = true;
    try {
      gdjs.registerRuntimeScenePostEventsCallback((sahne) => {
        try {
          const MM = window.MatrancCevrimici || M, G = MM.GECE_ZEMIN || {};
          const ad = sahne.getName ? sahne.getName() : "", ham = G[ad]; if (!ham) return;
          const adlar = Array.isArray(ham) ? ham : [ham];
          const h = new Date().getHours(), gece = (h >= 19 || h < 6) ? 1 : 0;
          const imza = gece + "|" + adlar.map((n) => sahne.getObjects(n).length).join(",");
          if (sahne.__mtrGeceZ === imza) return;
          sahne.__mtrGeceZ = imza;
          adlar.forEach((n) => sahne.getObjects(n).forEach((o) => {
            try {   // animasyon 1 yoksa GDevelop yok sayar (gündüz kalır); kare (PrPerde üst/alt) korunur
              const hedef = (window.MatrancTahta && n === "AyZemin") ? 2 : gece;   // v10.15c: tahta zemini
              if (o.getAnimation() !== hedef) { const k = o.getAnimationFrame(); o.setAnimation(hedef); o.setAnimationFrame(k); o.pauseAnimation(); }
            } catch (e) {}
          }));
        } catch (e) {}
      });
    } catch (e) {}
  }

  M.rovansPanel = (tur) => {
    if (M.rovans.panelTur === tur) return;
    M.rovans.panelTur = tur;
    M.iz("rövanş paneli: " + tur);
    M.stilEkle();
    let p = document.getElementById("mtrRovans");
    if (!p) {
      p = document.createElement("div"); p.id = "mtrRovans"; p.className = "mtr-kart";
      p.style.cssText = "top:auto;bottom:calc(16px + env(safe-area-inset-bottom,0px))";
      p.innerHTML = '<div class="mtr-ikili" style="font-weight:800;font-size:15px;color:#2c3862;background:#fff3c8;border:2px solid #f1d27a;border-radius:999px;padding:6px 14px;margin:0 auto 8px;width:max-content;max-width:100%;display:none"></div><div class="mtr-mesaj"></div><div class="mtr-satir"></div>';
      document.body.appendChild(p);
    }
    M.ikiliPanelYaz();   // v10.15
    const rakip = gv("rakipAd").getAsString();
    const yazi = { sor: "Rövanş ister misin?", bekle: "Rövanş isteği gönderildi.\n" + rakip + " bekleniyor...",
                   istek: rakip + " rövanş istiyor!", ayrildi: rakip + " oyundan ayrıldı." }[tur];
    p.querySelector(".mtr-mesaj").textContent = yazi;
    const satir = p.querySelector(".mtr-satir"); satir.innerHTML = "";
    const dugme = (t, fn, koyu) => {
      const b = document.createElement("button"); b.className = "mtr-btn" + (koyu ? " mtr-koyu" : "");
      b.textContent = t; b.onclick = () => { M.sesCal(); fn(); }; satir.appendChild(b);
    };
    if (tur === "sor") dugme("RÖVANŞ", () => M.rovansYaz("evet"));
    if (tur === "istek") dugme("KABUL ET", () => M.rovansYaz("evet"));
    dugme("ANA MENÜ", M.anaMenuyeDon, true);
  };

  M.rovansPanelKapat = (tamamen) => {
    const p = document.getElementById("mtrRovans"); if (p) p.remove();
    if (M.rovans) M.rovans.panelTur = null;
    if (tamamen && M.rovans) { if (M.rovans.abone) M.rovans.abone(); M.rovans = null; }
  };

  // İki taraf da kabul etti → yeni oyun
  M.rovansKur = async (d) => {
    if (M.rovans.kuruluyor) return;
    M.rovans.kuruluyor = true;
    const eskiId = M.rovans.id, yeniId = eskiId + "R";
    const tur = gv("hedefTur").getAsNumber() || 2;
    const turSayisi = gv("skorK").getAsNumber() + gv("skorY").getAsNumber();   // biten oyundaki tur sayısı
    const davetci = d.davetciUid === M.uid;
    gv("benDavetci").setNumber(davetci ? 1 : 0);
    M.rovansPanelKapat(true);
    M.rovansGecis = true;
    M.atlaYaziTura = tur !== 1;               // 2-3 turlu oyunda yazı-tura yok
    gv("cevrimiciOyunId").setString(yeniId);
    gv("benimRenk").setNumber(0);
    M.sahneDegistir(M.ESLESME_SAHNESI);
    const ref = firebase.firestore().collection("oyunlar").doc(yeniId);
    try {
      if (davetci) {
        let kirmizi;
        if (tur === 1) kirmizi = Math.random() < 0.5 ? d.kirmiziUid : d.yesilUid;      // yeniden yazı-tura
        else kirmizi = (turSayisi % 2 === 1) ? d.yesilUid : d.kirmiziUid;             // son turu başlatmayan başlar
        const yesil = kirmizi === d.kirmiziUid ? d.yesilUid : d.kirmiziUid;
        await ref.set({ davetciUid: d.davetciUid, davetliUid: d.davetliUid, kirmiziUid: kirmizi, yesilUid: yesil,
                        sure: d.sure, tur: d.tur, olusturma: M.zaman(), oncekiOyun: eskiId });
        gv("benimRenk").setNumber(kirmizi === M.uid ? 1 : 2);
      } else {
        const iptal = ref.onSnapshot((s) => {
          if (!s.exists) return; iptal();
          gv("benimRenk").setNumber(s.data().kirmiziUid === M.uid ? 1 : 2);
        });
      }
      M.iz("rövanş kuruldu → " + yeniId + (M.atlaYaziTura ? " (yazı-tura yok)" : ""));
    } catch (e) { M.iz("RÖVANŞ KURMA HATASI: " + (e && e.message ? e.message : e)); }
  };

  // Eşleşme ekranında: yazı-tura atlanacaksa zamanlayıcıyı ileri al; rövanş geçişini bitir
  M.eslesmeKaresi = (sahne) => {
    if (!sahne.getName || sahne.getName() !== M.ESLESME_SAHNESI) return;
    M.rovansGecis = false;
    if (M.atlaYaziTura) {
      // Yazı-tura yok: dönen pulu hiç gösterme; renk gelince pulu doğrudan o renkte göster
      const renk = gv("benimRenk").getAsNumber();
      sahne.getObjects("YaziTuraPul").forEach((p) => {
        if (renk === 0) p.hide(true);
        else { p.setAnimation(renk); p.hide(false); }
      });
      if (renk !== 0) {
        try {
          const t = sahne.getTimeManager().getTimer("e");
          if (t && t.getTime() < 2200) t.setTime(2200);
        } catch (e) {}
        M.atlaYaziTura = false;
      }
    }
  };


  // =====================================================================
  //  v9.1: ÇAĞRI — çevrimdışı arkadaşı çağırma (v9.8c: yalnız anlık bildirimle; eski paylaşım kodu kullanılmıyor)
  //  Telefon numarası istenmez/saklanmaz: oyun yalnızca hazır mesajı verir, kişiyi oyuncu kendisi seçer.
  //  Çağrı = davetler belgesi + { cagri: true, bitisMs } ; 10 dk açık kalır.
  //  Çağıran menüde gezebilir (altta "… bekleniyor" şeridi); çağrılan oyunu açınca, çağıran
  //  çevrimiçi ve müsaitse "seni çağırıyor" penceresi çıkar → OYNA = davet kabulü.
  // =====================================================================
  M.CAGRI_SURESI = 600;   // saniye
  M.MAGAZA_ANDROID = "https://play.google.com/store/apps/details?id=com.matranc.oyun";
  M.MAGAZA_IOS = "https://apps.apple.com/app/id6827108845";   // v10.11h: App Store bağlantısı (Apple Kimliği 6827108845)
  M.cagrilar = {};        // gelen çağrılar: id → { id, d, ref, g: gönderenin durumu, abone }
  M.gidenCagri = null;    // giden çağrı: { uid, ad, bitis, ref, abone, av }

  M.iosMu = () => /iPad|iPhone|iPod/.test(navigator.userAgent || "") || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  M.mmss = (ms) => { const t = Math.max(0, Math.ceil(ms / 1000)); return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0"); };
  M.cagriMetni = () => {
    let t = "Bağlantıya tıklamana gerek yok!\nMATRANÇ'ta seni bekliyorum! 🎲\nTelefonundan MATRANÇ'ı aç, çağrım ekrana gelecek.\nKullanıcı adım: " + (M.ad || "") +
            "\n\nOyun yüklü değilse buradan indir:\nAndroid: " + M.MAGAZA_ANDROID;
    if (M.MAGAZA_IOS) t += "\niPhone: " + M.MAGAZA_IOS;
    return t;
  };
  M.urlAc = (url) => {
    try { game.getRenderer().openURL(url); }                       // GDevelop: telefonda dış uygulamada açar
    catch (e) { try { window.open(url, "_system"); } catch (e2) {} }
  };
  M.DONUS_ANAHTAR = "mtrCagriDonus";
  M.cagriPaylas = () => {
    try { localStorage.setItem(M.DONUS_ANAHTAR, String(Date.now())); } catch (e) {}   // v9.7g: dönüşte açılış animasyonu atlansın
    const metin = M.cagriMetni();
    const wa = () => M.urlAc("https://wa.me/?text=" + encodeURIComponent(metin));
    // v9.7i: iPhone — paylaşım DOKUNUŞUN İÇİNDE açılmalı (uzantı bir sonraki karede açtığı için iPhone izin vermez)
    if (M.iosMu()) {
      const not = (t) => { const k = document.querySelector('#mtrPencere [data-k="c"]'); if (k) k.textContent = t; };   // paylaşım dokunuşun İLK işi olmalı (iPhone)
      if (navigator.share && !M.paylasiliyor) {
        M.paylasiliyor = true;
        navigator.share({ text: metin })
          .then(() => { M.paylasiliyor = false; })
          .catch((e) => { M.paylasiliyor = false; M.iz("iPhone paylaşım: " + (e && e.name)); if (!e || e.name !== "AbortError") not("Buraya dokun: mesajı kopyala, WhatsApp'ta yapıştır"); });
      } else { M.kopyala(metin); not("Mesaj kopyalandı ✓ WhatsApp'ta yapıştır"); }
      return;
    }
    // v9.1d Android: telefonun PAYLAŞ menüsü. GDevelop "Paylaş" uzantısı olayla çalışır:
    //   genel değişkenler paylasIste (Sayı) / paylasMetin (Metin). Kod paylasIste = 1 yapar;
    //   Menu ve Cevrimici sahnesindeki olay paylaşımı açıp 0 yapar (desteklenmiyorsa 2 yapar).
    //   0,5 sn içinde 0 olmazsa (olay yok / desteklenmiyor) eski yola (WhatsApp) düşülür.
    try {
      const GV = game.getVariables();
      GV.get("paylasMetin").setString(metin); GV.get("paylasIste").setNumber(1);
      setTimeout(() => {
        const d = GV.get("paylasIste").getAsNumber();
        if (d !== 0) { GV.get("paylasIste").setNumber(0); M.iz("Paylaş uzantısı açılmadı (" + d + ")"); eskiYol(); }
      }, 500);
      return;
    } catch (e) {}
    eskiYol();
  };
  const eskiYol = () => {
    const metin = M.cagriMetni();
    M.kopyala(metin);                                    // mesaj panoya da kopyalansın (gerekirse yapıştırılır)
    const wa = () => M.urlAc("https://wa.me/?text=" + encodeURIComponent(metin));
    // v9.1c Android: WhatsApp uygulamasını DOĞRUDAN aç (wa.me web sayfası "WhatsApp'ı yükle" diyordu).
    // 1,5 sn içinde oyun arka plana geçmezse (WhatsApp yok) eski yol: wa.me
    let gitti = false;
    const gizlendi = () => { if (document.hidden) gitti = true; };
    document.addEventListener("visibilitychange", gizlendi);
    window.addEventListener("blur", () => { gitti = true; }, { once: true });
    M.urlAc("whatsapp://send?text=" + encodeURIComponent(metin));
    setTimeout(() => { document.removeEventListener("visibilitychange", gizlendi); if (!gitti) wa(); }, 1500);
  };
  M.kopyala = (t) => {
    const eski = () => {
      try {
        const a = document.createElement("textarea"); a.value = t; a.style.cssText = "position:fixed;left:-999px;opacity:0";
        document.body.appendChild(a); a.select(); document.execCommand("copy"); a.remove();
      } catch (e) {}
    };
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).catch(eski); return; } } catch (e) {}
    eski();
  };
  M.avatarUrl = (n) => {
    if (!M.__avUrl) {                                  // 9.1b: karakter resimleri pr_avatar_0..3 / pr_avatar_c4..c9 (yoksa panel_avatar)
      M.__avUrl = {};
      try {
        const res = (game.getGameData().resources || {}).resources || [];
        const bul = (re) => { for (const rs of res) { const ad = (rs.name || "") + " " + (rs.file || ""); if (re.test(ad)) return rs.file || ""; } return ""; };
        for (let k = 0; k <= 9; k++) {
          const c = k <= 3 ? "" : "c";
          M.__avUrl[k] = bul(new RegExp("pr_avatar_" + c + k + "\\.", "i")) || bul(new RegExp("panel_avatar_" + c + k + "\\.", "i"));
        }
      } catch (e) {}
    }
    n = Math.round(Number(n));
    return n >= 0 && M.__avUrl[n] ? M.__avUrl[n] : "";
  };
  M.avHtml = (url, ad) => '<div class="mtr-av"' + (url ? ' style="background-image:url(\'' + url + '\')"' : "") + ">" + (url ? "" : (ad || "?").charAt(0).toUpperCase()) + "</div>";
  M.cagriStil = () => {
    if (document.getElementById("mtrCagriStil")) return;
    const st = document.createElement("style"); st.id = "mtrCagriStil";
    st.textContent =
      "#mtrCagri{position:fixed;bottom:calc(14px + env(safe-area-inset-bottom,0px));left:50%;transform:translateX(-50%);z-index:99995;" +
      "display:flex;align-items:center;gap:10px;padding:8px 8px 8px 16px;border-radius:999px;background:#fdfbf6;border:2.5px solid #3aa557;" +
      "color:#2c3862;font:800 15px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 8px 18px rgba(0,0,0,.22);white-space:nowrap;cursor:pointer}" +
      "#mtrCagri .don{width:14px;height:14px;border:3px solid #3aa557;border-top-color:transparent;border-radius:50%;box-sizing:border-box;animation:mtrDon .9s linear infinite}" +
      "#mtrCagri button{border:0;border-radius:50%;width:28px;height:28px;background:#e8ecf4;color:#6c7590;font:800 15px Poppins,sans-serif;cursor:pointer;padding:0}" +
      ".mtr-geri{margin-top:10px;font-size:22px;font-weight:800;color:#d6464a}" +
      ".mtr-link.mavi{color:#2f6fd0}.mtr-link.gri{color:#8c92a6;text-decoration:none;font-size:15px}";
    document.head.appendChild(st);
  };

  // ---------- ÇAĞIRAN tarafı ----------
  M.cagir = async (uid, ad) => {
    if (!uid || !M.uid || uid === M.uid) return;
    if (M.gidenDavet) return;
    ad = M.yaziTemiz(ad) || "Arkadaşın";
    if (M.gidenCagri) M.cagriIptal();
    const sure = gv("sureSaniye").getAsNumber(), tur = gv("hedefTur").getAsNumber() || 2;
    const G = M.gidenCagri = { uid: uid, ad: ad, bitis: Date.now() + M.CAGRI_SURESI * 1000, ref: null, abone: null, av: -1 };
    M.cagriBekleGoster();
    firebase.firestore().collection("oyuncular").doc(uid).get()
      .then((s) => { if (s.exists && M.gidenCagri === G) { G.av = Number(s.data().avatar); if (document.getElementById("mtrCagriBekle")) M.cagriBekleGoster(); } })
      .catch(() => {});
    try {
      const ref = await firebase.firestore().collection("davetler").add({
        gonderenUid: M.uid, gonderenAd: M.ad, aliciUid: uid, aliciAd: ad, sure: sure, tur: tur,
        durum: "bekliyor", olusturma: M.zaman(), olusturmaMs: Date.now(), gonderenSurum: M.uygSurum(),
        cagri: true, bitisMs: G.bitis
      });
      if (M.gidenCagri !== G) { ref.update({ durum: "iptal" }).catch(() => {}); return; }
      G.ref = ref;
      M.iz("çağrı gönderildi → " + ad);
      M.cagriDinle(G, ref, ad);
    } catch (e) {
      console.error("MATRANC çağrı hatası:", e);
      if (M.gidenCagri === G) { M.cagriTemizle(); M.pencereKapat(); M.pencereAc().bitir("Çağrı gönderilemedi.\nİnternet bağlantını kontrol et."); }
    }
  };
  M.cagriDinle = (G, ref, ad) => {
      G.abone = ref.onSnapshot((s) => {
        if (M.gidenCagri !== G) return;
        const d = s.exists ? s.data() : {}, durum = d.durum || "";
        if (durum) M.iz("çağrı durumu: " + durum);
        if (durum === "kabul") { M.cagriTemizle(); M.pencereKapat(); M.oyunaGecis(ref.id, d, "davetci"); }
        else if (durum === "red") { M.cagriTemizle(); M.cagriNotu(ad + " şimdi oynayamıyor.\nDaha sonra yeniden çağırabilirsin."); }
        else if (durum === "surum") { M.cagriTemizle(); M.cagriNotu(ad + " oyunun farklı bir sürümünü kullanıyor.\nİkinizin de oyunu güncel olmalı."); }
        else if (durum === "zamanasimi") { M.cagriTemizle(); M.cagriNotu(ad + " gelmedi.\nÇağrının süresi doldu."); }
        else if (durum === "iptal") M.cagriTemizle();
      }, () => {});
  };
  // "… bekleniyor" penceresi (TAMAM: menüde gezmeye devam, çağrı açık kalır)
  M.cagriBekleGoster = () => {
    const G = M.gidenCagri; if (!G) return;
    M.cagriStil();
    const p = M.pencereHtml(
      M.avHtml(M.avatarUrl(G.av), G.ad) +
      '<div class="mtr-ad">' + G.ad + ' bekleniyor…</div>' +
      '<div class="mtr-acik">Çağrın bildirim olarak gönderildi.\nMenüde gezebilirsin; ' + G.ad + ' oyunu açınca maç başlar.</div>' +
      '<div class="mtr-geri"></div>' +
      '<div class="mtr-satir"><button class="mtr-btn" data-k="t">TAMAM</button><button class="mtr-btn mtr-koyu" data-k="v">VAZGEÇ</button></div>');
    p.id = "mtrPencere"; p.dataset.cagri = "1";
    const isaret = document.createElement("span"); isaret.id = "mtrCagriBekle"; isaret.style.display = "none"; p.appendChild(isaret);
    p.querySelector('[data-k="t"]').onclick = () => { M.sesCal(); M.pencereKapat(); };
    p.querySelector('[data-k="v"]').onclick = () => { M.sesCal(); M.cagriIptal(); M.pencereKapat(); };
    M.gidenCagriTik();
  };
  M.cagriIptal = () => {
    const G = M.gidenCagri; if (!G) return;
    if (G.ref) G.ref.update({ durum: "iptal" }).catch(() => {});
    M.cagriTemizle();
  };
  M.cagriTemizle = () => {
    const G = M.gidenCagri;
    if (G && G.abone) { try { G.abone(); } catch (e) {} }
    M.gidenCagri = null;
    try { localStorage.removeItem(M.DONUS_ANAHTAR); } catch (e) {}
    const e = document.getElementById("mtrCagri"); if (e) e.remove();
    if (document.getElementById("mtrCagriBekle")) M.pencereKapat();
  };
  // Bilgi notu: müsait olunca gösterilir (maçtaysa maç bitince)
  M.cagriNotu = (t) => { M.cagriNot = t; };
  // Her saniye: geri sayım, alttaki şerit, süre dolunca kapatma
  M.gidenCagriTik = () => {
    const G = M.gidenCagri;
    let e = document.getElementById("mtrCagri");
    if (!G) { if (e) e.remove(); return; }
    const kalan = G.bitis - Date.now();
    if (kalan <= 0) {
      if (G.ref && !G.bittiYazildi) { G.bittiYazildi = true; G.ref.update({ durum: "zamanasimi" }).catch(() => {}); }   // dinleyici "gelmedi" notunu yazar
      if (!G.ref || kalan < -5000) { M.cagriTemizle(); M.cagriNotu(G.ad + " gelmedi.\nÇağrının süresi doldu."); }
      return;
    }
    const g = document.querySelector("#mtrPencere .mtr-geri"); if (g) g.textContent = M.mmss(kalan);
    const sahne = M.sahneAdi();
    const goster = sahne !== M.OYUN_SAHNESI && sahne !== M.ESLESME_SAHNESI && !document.getElementById("mtrPencere") && !document.getElementById("mtrBant");
    if (!goster) { if (e) e.remove(); return; }
    if (!e) {
      M.stilEkle(); M.cagriStil();
      e = document.createElement("div"); e.id = "mtrCagri";
      e.innerHTML = '<span class="don"></span><span class="y"></span><button title="Vazgeç">✕</button>';
      e.querySelector("button").onclick = (ev) => { ev.stopPropagation(); M.sesCal(); M.cagriIptal(); };
      e.onclick = () => { M.sesCal(); M.cagriBekleGoster(); };
      document.body.appendChild(e);
    }
    e.querySelector(".y").textContent = G.ad + " bekleniyor · " + M.mmss(kalan);
  };
  // Uygulama yeniden açıldığında: önceki oturumdan kalan çağrılar kapatılır (çağıran artık beklemiyor)
  M.eskiCagrilariKapat = () => {
    if (M.__eskiCagriKapandi || !M.uid) return;
    M.__eskiCagriKapandi = true;
    firebase.firestore().collection("davetler").where("gonderenUid", "==", M.uid).where("durum", "==", "bekliyor").get()
      .then((q) => {
        // v9.7g: en yeni, süresi dolmamış ÇAĞRI sürdürülür (WhatsApp'tan dönerken oyun yeniden açılmış olabilir); diğerleri iptal
        let devam = null;
        q.forEach((doc) => {
          const d = doc.data() || {};
          if (d.cagri && (d.bitisMs || 0) > Date.now() + 15000 && !M.gidenCagri && !M.gidenDavet && (!devam || (d.olusturmaMs || 0) > (devam.data().olusturmaMs || 0))) devam = doc;
        });
        q.forEach((doc) => {
          if ((doc.data() || {}).mektup) return;                 // v10.0: mektup davetine dokunma
          const G = M.gidenCagri;
          if ((devam && doc.id === devam.id) || (G && G.ref && G.ref.id === doc.id)) return;   // kimlikle karşılaştır (forEach her seferinde yeni nesne verir)
          doc.ref.update({ durum: "iptal" }).catch(() => {});
        });
        if (devam) {
          const d = devam.data();
          const G = M.gidenCagri = { uid: d.aliciUid, ad: d.aliciAd || "Arkadaşın", bitis: d.bitisMs, ref: devam.ref, abone: null, av: -1 };
          M.iz("çağrı sürdürülüyor → " + G.ad);
          M.cagriDinle(G, devam.ref, G.ad);
          firebase.firestore().collection("oyuncular").doc(G.uid).get()
            .then((s) => { if (s.exists && M.gidenCagri === G) G.av = Number(s.data().avatar); }).catch(() => {});
          M.gidenCagriTik();
        } else { try { localStorage.removeItem(M.DONUS_ANAHTAR); } catch (e) {} }
      })
      .catch(() => {});
  };

  // ---------- ÇAĞRILAN tarafı ----------
  M.cagriEkle = (id, d) => {
    if (M.cagrilar[id]) return;
    const c = M.cagrilar[id] = { id: id, d: d, ref: firebase.firestore().collection("davetler").doc(id), g: null, abone: null };
    c.abone = firebase.firestore().collection("oyuncular").doc(d.gonderenUid).onSnapshot((s) => {
      const o = s.exists ? s.data() : {};
      const son = o.sonGorulme && o.sonGorulme.toMillis ? o.sonGorulme.toMillis() : 0;
      c.g = { ac: o.cevrimici !== false, musait: o.musait !== false, son: son, av: o.avatar };
    }, () => {});
    M.iz("çağrı geldi: " + d.gonderenAd);
  };
  M.cagriBirak = (id) => {
    const c = M.cagrilar[id]; if (!c) return;
    try { if (c.abone) c.abone(); } catch (e) {}
    delete M.cagrilar[id];
  };
  M.cagriSil = (id) => {
    M.cagriBirak(id);
    if (M.gelenDavet && M.gelenDavet.id === id) M.bantKapat();
  };
  M.cagriKontrol = (musait) => {
    const simdi = Date.now();
    for (const id in M.cagrilar) {
      const c = M.cagrilar[id];
      if (simdi > (c.d.bitisMs || 0)) { c.ref.update({ durum: "zamanasimi" }).catch(() => {}); M.cagriSil(id); }
    }
    const pencereVar = !!document.getElementById("mtrPencere") || !!document.getElementById("mtrBant");
    if (M.cagriNot && musait && !pencereVar) { const t = M.cagriNot; M.cagriNot = null; M.pencereAc().bitir(t); return; }
    if (!musait || pencereVar || M.gelenDavet || M.gidenDavet) return;
    const ESIK = M.CEVRIMICI_ESIK || 150000;
    const aday = Object.keys(M.cagrilar).map((k) => M.cagrilar[k])
      .filter((c) => c.g && c.g.ac && c.g.musait && simdi - c.g.son < ESIK)
      .sort((a, b) => (b.d.olusturmaMs || 0) - (a.d.olusturmaMs || 0))[0];
    if (aday) M.cagriGoster(aday);
  };
  M.cagriGoster = (c) => {
    const d = c.d, id = c.id;
    M.stilEkle(); M.cagriStil();
    M.gelenDavet = { id: id, d: d, ref: c.ref, cagri: true };
    const ad = M.yaziTemiz(d.gonderenAd) || "Bir arkadaşın";
    const perde = document.createElement("div"); perde.className = "mtr-perde"; perde.id = "mtrCagriPerde";
    const b = document.createElement("div"); b.id = "mtrBant"; b.className = "mtr-kart mtr-orta";
    b.innerHTML = M.avHtml(M.avatarUrl(c.g ? c.g.av : -1), ad) +
      '<div class="mtr-ad">' + ad + '</div>' +
      '<div class="mtr-mesaj" style="font-size:17px">Seni MATRANÇ oynamaya çağırıyor!</div>' +
      '<div class="mtr-alt">' + M.ayarYazi(d.sure, d.tur) + '</div>' +
      '<div class="mtr-dikey"><button class="mtr-btn" data-k="o">OYNA</button></div>' +
      '<div class="mtr-link gri" data-k="s">Şimdi değil</div>' +
      '<div class="mtr-link" data-k="e">Bu oyuncuyu engelle</div>';
    document.body.appendChild(perde); document.body.appendChild(b);
    b.querySelector('[data-k="o"]').onclick = () => { M.sesCal(); M.cagriBirak(id); M.davetCevapla("kabul"); };
    b.querySelector('[data-k="s"]').onclick = () => { M.sesCal(); M.cagriBirak(id); M.davetCevapla("red"); };
    b.querySelector('[data-k="e"]').onclick = () => {
      M.sesCal();
      M.engelleOnay(d.gonderenUid, d.gonderenAd, () => { if (M.gelenDavet && M.gelenDavet.id === id) { M.cagriBirak(id); M.davetCevapla("red"); } });
    };
    M.sesCal();
  };

  // =====================================================================
  //  v9.8 ANLIK BİLDİRİM (yalnız Capacitor uygulamasında; @capacitor-firebase/messaging)
  // =====================================================================
  M.bildirimEklenti = () => {
    try {
      const C = window.Capacitor;
      if (!C || !C.isNativePlatform || !C.isNativePlatform()) return null;
      return (C.Plugins && C.Plugins.FirebaseMessaging) || (C.registerPlugin ? C.registerPlugin("FirebaseMessaging") : null);
    } catch (e) { return null; }
  };
  M.bildirimYaz = (alan) => {
    if (!M.uid) return;
    const veri = Object.assign({ zaman: M.zaman(), platform: (window.Capacitor && window.Capacitor.getPlatform) ? window.Capacitor.getPlatform() : "?" }, alan);
    firebase.firestore().collection("bildirim").doc(M.uid).set(veri, { merge: true }).catch((e) => M.iz("bildirim kaydı: " + e.message));
  };
  // ---- v10.13: BİLDİRİME DOKUNUNCA doğrudan hedef ----
  // Açılış kodu (v10h) da aynı dinleyiciyi kurar (soğuk açılışta erken); hedef localStorage "mtrBildirimHedef"te
  M.bildirimDinleKur = () => {
    if (window.__mtrBildirimDinle) return;
    const FM = M.bildirimEklenti(); if (!FM) return;
    window.__mtrBildirimDinle = true;
    try {
      FM.addListener("notificationActionPerformed", (e) => {
        try {
          const d = (e && e.notification && e.notification.data) || {};
          localStorage.setItem("mtrBildirimHedef", JSON.stringify({ tur: d.tur || "", oyunId: d.oyunId || "", davetId: d.davetId || "", t: Date.now() }));
          M.iz("bildirime dokunuldu: " + (d.tur || "?"));
        } catch (x) {}
      });
    } catch (x) { window.__mtrBildirimDinle = false; }
  };
  M.MEKTUP_TURLER = ["mektupHamle", "mektupHatirlatma", "mektupBitti", "mektupBasladi"];
  M.bildirimKaresi = (sahne) => {
    let h = null;
    try { h = JSON.parse(localStorage.getItem("mtrBildirimHedef") || "null"); } catch (e) {}
    if (!h) return;
    const sil = () => { try { localStorage.removeItem("mtrBildirimHedef"); } catch (e) {} };
    if (!h.t || Date.now() - h.t > 3 * 60 * 1000) { sil(); return; }      // eski
    const ad = sahne.getName ? sahne.getName() : "";
    if (ad === M.OYUN_SAHNESI || ad === M.ESLESME_SAHNESI || ad === "Acilis" || !M.uid) return;   // oyun sürerken bölme
    if (M.MEKTUP_TURLER.includes(h.tur) && h.oyunId) {
      if (!M.mektup.dinliyor) { try { M.mektupDinle(); } catch (e) {} }
      if (M.mektup.oyun[h.oyunId]) { sil(); M.iz("bildirim → mektup maçı " + h.oyunId); M.mektupAc(h.oyunId, false); return; }
      if (Date.now() - h.t > 12000) { sil(); if (ad !== M.MEKTUP_SAHNESI) M.sahneDegistir(M.MEKTUP_SAHNESI); }   // maç yüklenmediyse listeye
      return;
    }
    if (h.tur === "mektupDavet") { sil(); if (ad !== M.MEKTUP_SAHNESI) M.sahneDegistir(M.MEKTUP_SAHNESI); return; }
    sil();   // diğerleri (çağrı/davet): mevcut pencereler kendiliğinden gelir
  };
  M.bildirimKur = async () => {
    if (M.bildirimKuruldu || !M.uid) return;
    const FM = M.bildirimEklenti(); if (!FM) return;
    M.bildirimKuruldu = true;
    try {
      let izin = await FM.checkPermissions();
      if (izin.receive !== "granted") izin = await FM.requestPermissions();
      if (izin.receive !== "granted") { M.bildirimYaz({ hata: "izin yok: " + izin.receive }); return; }
      // v9.8b: Android — yüksek önemli kanal (sunucu bildirimi channelId "cagri" ile gönderir)
      try {
        if (window.Capacitor.getPlatform() === "android" && FM.createChannel) {
          await FM.createChannel({ id: "cagri", name: "Çağrılar", description: "Arkadaşın seni MATRANÇ oynamaya çağırınca",
                                   importance: 5, visibility: 1, vibration: true, lights: true, lightColor: "#2F8FE0" });
        }
      } catch (e) { M.iz("kanal: " + ((e && e.message) || e)); }
      const t = await FM.getToken();
      if (t && t.token) { M.bildirimYaz({ token: t.token, hata: "" }); M.iz("bildirim adresi kaydedildi"); }
      FM.addListener("tokenReceived", (e) => { if (e && e.token) M.bildirimYaz({ token: e.token }); });
      M.bildirimDinleKur();   // v10.13: dokunulan bildirimin hedefi (mektup maçı) saklanır, uygun anda açılır
    } catch (e) {
      M.bildirimKuruldu = false;
      M.bildirimYaz({ hata: String((e && e.message) || e).slice(0, 200) });
    }
  };

  // =====================================================================
  //  v9.6 İLERLEME YEDEĞİ + KURTARMA KODU
  //  Telefondaki bütün kayıt ("matranc" dosyası) kodlar/{KOD} belgesine yedeklenir (değiştikçe, en sık 60 sn'de bir).
  //  KOD 8 harf (karışan harfler yok). Yeni cihazda kodu girince: belge yeni kimliğe geçer, kullanıcı adı devralınır,
  //  kayıt telefona yazılır ve oyun yeniden başlar.
  // =====================================================================
  M.KOD_ABC = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  M.kodUret = () => { let k = ""; const a = new Uint32Array(8); try { crypto.getRandomValues(a); } catch (e) { for (let i = 0; i < 8; i++) a[i] = Math.floor(Math.random() * 1e9); } for (let i = 0; i < 8; i++) k += M.KOD_ABC[a[i] % 32]; return k; };
  M.kodGorunum = (k) => k ? k.slice(0, 4) + "-" + k.slice(4) : "";
  M.kodTemiz = (t) => String(t || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  M.depoOku = () => {
    try { const s = gdjs.evtTools.storage; if (s.loadedFiles && s.loadedFiles.containsKey && s.loadedFiles.containsKey("matranc")) return JSON.stringify(s.loadedFiles.get("matranc")); } catch (e) {}
    try { return localStorage.getItem("GDJS_matranc") || ""; } catch (e) { return ""; }
  };
  M.depoYaz = (v) => {
    try { localStorage.setItem("GDJS_matranc", v); } catch (e) {}
    try { const s = gdjs.evtTools.storage; if (s.loadedFiles && s.loadedFiles.containsKey && s.loadedFiles.containsKey("matranc")) s.loadedFiles.put("matranc", JSON.parse(v)); } catch (e) {}
  };
  M.kodOku = () => {
    try { const s = gdjs.evtTools.storage; if (!s.elementExistsInJSONFile("matranc", "kurtarmaKodu")) return ""; const v = new gdjs.Variable(); s.readStringFromJSONFile("matranc", "kurtarmaKodu", M.sahneRef || null, v); return M.kodTemiz(v.getAsString()); } catch (e) { return ""; }
  };
  M.kodYaz = (k) => { try { gdjs.evtTools.storage.writeStringInJSONFile("matranc", "kurtarmaKodu", k); } catch (e) {} };
  M.kodHazirla = async () => {                       // kodu yoksa üret ve sunucuda yer ayır
    let kod = M.kodOku();
    const db = firebase.firestore();
    if (kod.length === 8 && !M.kodDogrulandi) {        // v9.7b: kod hâlâ bu telefonun mu? (başka telefon kodla geri yüklediyse değil)
      try {
        const s = await db.collection("kodlar").doc(kod).get({ source: "server" });
        if (s.exists && s.data().uid !== M.uid) { M.iz("kurtarma kodu başka telefona taşınmış → yeni kod"); M.kodYaz(""); M.sonYedek = null; kod = ""; }
        else M.kodDogrulandi = true;
      } catch (e) { M.iz("kod kontrolü: " + (e && e.message ? e.message : e)); }
    }
    if (kod.length === 8) return kod;
    for (let i = 0; i < 6; i++) {
      const k = M.kodUret();
      try { await db.collection("kodlar").doc(k).set({ uid: M.uid, ad: M.ad || "", veri: "", zaman: M.zaman(), surum: M.uygSurum() }); M.kodYaz(k); M.kodDogrulandi = true; return k; }
      catch (e) { M.iz("kod denemesi: " + (e && e.message ? e.message : e)); }   // kod doluysa yeniden dene
    }
    throw new Error("Kod oluşturulamadı");
  };
  M.yedekAl = async (zorla) => {
    if (!M.uid || !M.ad || M.yedekMesgul || M.geriYukleniyor) return;
    M.yedekMesgul = true;
    try {
      const kod = await M.kodHazirla();
      const veri = M.depoOku();
      if (!veri || (!zorla && veri === M.sonYedek)) return;
      await firebase.firestore().collection("kodlar").doc(kod).update({ uid: M.uid, ad: M.ad, veri: veri, zaman: M.zaman(), surum: M.uygSurum() });
      M.sonYedek = veri; M.iz("yedek alındı (" + veri.length + " bayt)");
    } catch (e) { M.iz("YEDEK HATASI: " + (e && e.message ? e.message : e)); if (e && e.code === "permission-denied") M.kodDogrulandi = false; }
    finally { M.yedekMesgul = false; }
  };
  M.yedekBaslat = () => {
    if (M.yedekZaman) return;
    setTimeout(() => M.yedekAl(), 4000);
    M.yedekZaman = setInterval(() => M.yedekAl(), 60000);
    document.addEventListener("visibilitychange", () => { if (document.hidden) M.yedekAl(); });
  };
  M.geriYukle = async (girdi) => {
    const kod = M.kodTemiz(girdi);
    if (kod.length !== 8) throw new Error("Kod 8 karakter olmalı.");
    if (!M.uid) throw new Error("İnternet bağlantısı yok. Bağlanınca tekrar dene.");
    if (kod === M.kodOku()) throw new Error("Bu zaten bu telefondaki hesabın kodu.");
    const db = firebase.firestore(), ref = db.collection("kodlar").doc(kod);
    const s = await ref.get({ source: "server" });
    if (!s.exists) throw new Error("Bu kodla bir hesap bulunamadı. Kodu kontrol et.");
    const d = s.data() || {};
    if (!d.veri) throw new Error("Bu hesabın henüz yedeği yok.");
    M.geriYukleniyor = true;
    const eskiUid = d.uid, eskiAd = d.ad || "";
    await ref.update({ uid: M.uid, eskiUid: eskiUid, zaman: M.zaman() });                // kodu bu telefona al
    if (eskiAd) {
      const adRef = db.collection("adlar").doc(M.kucuk(eskiAd));
      try { const a = await adRef.get(); if (a.exists && a.data().uid === eskiUid) await adRef.update({ uid: M.uid, kod: kod }); } catch (e) { M.iz("ad devralma: " + e); }
      if (M.ad && M.kucuk(M.ad) !== M.kucuk(eskiAd)) {                                   // bu telefonun geçici adını bırak
        try { const bRef = db.collection("adlar").doc(M.kucuk(M.ad)); const b = await bRef.get(); if (b.exists && b.data().uid === M.uid) await bRef.delete(); } catch (e) {}
      }
      let eskiGal = 0;                                                                    // v9.7: galibiyet sayısı da taşınır
      try { const eo = await db.collection("oyuncular").doc(eskiUid).get(); if (eo.exists) eskiGal = Math.round(Number(eo.data().gal || 0)); } catch (e) {}
      await db.collection("oyuncular").doc(M.uid).set({ ad: eskiAd, adKucuk: M.kucuk(eskiAd), gal: eskiGal, kod: kod }, { merge: true });
    }
    const benimEski = M.kodOku();                                                         // bu telefonun boş kodunu sil
    if (benimEski && benimEski !== kod) { try { await db.collection("kodlar").doc(benimEski).delete(); } catch (e) {} }
    M.depoYaz(d.veri); M.kodYaz(kod);
    setTimeout(() => { try { window.location.reload(); } catch (e) {} }, 300);
  };
  // ---- pencereler (Ayarlar'daki KODUM / GERİ YÜKLE) ----
  M.kodPenceresi = async () => {
    const p = M.pencereAc(); const kart = document.getElementById("mtrPencere"); if (!kart) return;
    const m = kart.querySelector(".mtr-mesaj");
    m.innerHTML = '<div style="font-size:24px;font-weight:800;color:#2b3452">Kurtarma kodun</div><div class="mtrKod" style="margin:14px auto 10px;padding:12px 0;border-radius:16px;background:#eef2fa;border:2px dashed #9fb0d6;font:800 30px/1 \'Courier New\',monospace;letter-spacing:4px;color:#2b3452">…</div>' +
      '<div style="font-size:15px;font-weight:700;color:#5a6280;line-height:1.45">Bu kodu bir kâğıda yaz ve sakla.<br>Telefon değişirse ya da oyunu silersen<br>her şeyini bu kodla geri alırsın.<br><span style="color:#d9464b">Kodunu kimseyle paylaşma!</span></div>';
    p.dugme("TAMAM", M.pencereKapat);
    try {
      if (!M.uid || !M.ad) throw new Error();
      const kod = await M.kodHazirla(); M.yedekAl(true);
      const k = kart.querySelector(".mtrKod"); if (k) k.textContent = M.kodGorunum(kod);
      const satir = kart.querySelector(".mtr-satir");
      const kb = document.createElement("button"); kb.className = "mtr-btn mtr-koyu"; kb.textContent = "KOPYALA";
      kb.onclick = () => { M.sesCal(); M.kopyala(M.kodGorunum(kod)); kb.textContent = "KOPYALANDI"; };
      satir.insertBefore(kb, satir.firstChild);
    } catch (e) {
      const k = kart.querySelector(".mtrKod"); if (k) { k.textContent = "—"; }
      m.lastChild.innerHTML = "Kod için internet bağlantısı gerekli.<br>Bağlanınca tekrar dene.";
    }
  };
  M.geriYuklePenceresi = () => {
    const p = M.pencereAc(); const kart = document.getElementById("mtrPencere"); if (!kart) return;
    const m = kart.querySelector(".mtr-mesaj");
    m.innerHTML = '<div style="font-size:24px;font-weight:800;color:#2b3452">Kodla geri yükle</div>' +
      '<div style="font-size:15px;font-weight:700;color:#5a6280;line-height:1.45;margin:8px 0 10px">Eski hesabının kurtarma kodunu yaz.</div>' +
      '<input class="mtrKodGir" maxlength="9" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="XXXX-XXXX" style="box-sizing:border-box;width:100%;margin:0 auto 10px;padding:12px 0;border-radius:16px;background:#fff;border:3px solid #3d9cf0;font:800 28px/1 \'Courier New\',monospace;letter-spacing:3px;color:#2b3452;text-align:center;outline:none">' +
      '<div class="mtrKodNot" style="font-size:14px;font-weight:700;color:#d98a12;line-height:1.4">Bu telefondaki yıldız, pul ve zeminlerin<br>yerine eski hesabın gelir.</div>';
    const inp = kart.querySelector(".mtrKodGir"), not = kart.querySelector(".mtrKodNot");
    inp.addEventListener("input", () => { const t = M.kodTemiz(inp.value).slice(0, 8); const g = t.length > 4 ? t.slice(0, 4) + "-" + t.slice(4) : t; if (inp.value !== g) inp.value = g; });
    const satir = kart.querySelector(".mtr-satir"); satir.innerHTML = "";
    const vz = document.createElement("button"); vz.className = "mtr-btn mtr-koyu"; vz.textContent = "VAZGEÇ"; vz.onclick = () => { M.sesCal(); M.pencereKapat(); };
    const gy = document.createElement("button"); gy.className = "mtr-btn"; gy.textContent = "GERİ YÜKLE";
    let onay = false;
    gy.onclick = async () => {
      M.sesCal();
      if (M.kodTemiz(inp.value).length !== 8) { not.style.color = "#d9464b"; not.textContent = "Kod 8 karakter olmalı (ör. K7MQ-2XPA)."; return; }
      if (!onay) { onay = true; gy.textContent = "EMİN MİSİN?"; gy.className = "mtr-btn mtr-kirmizi"; not.style.color = "#d9464b"; not.innerHTML = "Bu telefondaki kayıt silinip yerine<br>eski hesabın gelecek. Emin misin?"; return; }
      gy.disabled = true; vz.disabled = true; not.style.color = "#5a6280"; not.textContent = "Geri yükleniyor…";
      try { await M.geriYukle(inp.value); not.style.color = "#2f9e57"; not.textContent = "Hesabın geri geldi! Oyun yeniden başlıyor…"; }
      catch (e) { M.geriYukleniyor = false; gy.disabled = false; vz.disabled = false; onay = false; gy.textContent = "GERİ YÜKLE"; gy.className = "mtr-btn"; not.style.color = "#d9464b"; not.textContent = (e && e.message) || "Geri yüklenemedi. İnterneti kontrol edip tekrar dene."; }
    };
    satir.appendChild(vz); satir.appendChild(gy);
    setTimeout(() => { try { inp.focus(); } catch (e) {} }, 200);
  };

  // =====================================================================
  //  v9.5 KOD SÜRÜM KONTROLÜ (yalnız ÖNİZLEMEDE; oyunculara hiçbir şey gösterilmez)
  //  Her sahnedeki JavaScript olayının ilk satırını okur ve aşağıdaki tabloyla karşılaştırır.
  //  Yeni bir kod sürümü verdiğimde bu tablo da güncellenir.
  // =====================================================================
  M.BEKLENEN_KODLAR = [
    ["İsimsiz sahne: pullar", /Oyunda pullar (v[\w.]+)/, "v78"],
    ["İsimsiz sahne: otomatik hamle", /Otomatik hamle \(sürüm ([\d.]+)/, "9"],
    ["Menu: çevrim içi", /Çevrim içi \(sürüm ([\w.]+)/, SURUM],
    ["Menu: tanıtım kartı", /Tanıtım kartı (v\w+)/, "v3g"],
    ["Menu: yerleşim", /MENÜ YERLEŞİM (v\w+)/, "v12h"],
    ["Acilis", /AÇILIŞ SAHNESİ (v\w+)/, "v10i"],
    ["Profil", /MATRANÇ - Profil (v\w+)/, "v31"],
    ["NasilOynanir", /Nasıl Oynanır SAHNESİ kodu (v\w+)/, "v8"],
    ["Rehber", /REHBERLİ OYUN (v\w+)/, "v3b"],
    ["Eslesme", /Eşleşme SAHNESİ görünüm kodu (v\w+)/, "v5"],
    ["Cevrimici", /Çevrimiçi SAHNESİ görünüm kodu (v\w+)/, "v29"],
    ["Ayarlar", /Ayarlar sahnesi (v\w+)/, "v21"],
    ["Mektup", /MEKTUP SAHNESİ kodu (v\w+)/, "v1"],   // v10.7
    ["Atolye", /ROBOT ATÖLYESİ (v\w+)/, "v13"],   // v10.8
    ["Menu: görevler", /GÜNLÜK GÖREVLER (v\w+)/, "v4"],   // v10.10
    ["Müzik (5 sahne)", /MÜZİK (v\w+)/, "v2", 5]
  ];
  M.kodKontrol = () => {
    try {
      if (!(game.isPreview && game.isPreview())) return;          // yalnız önizleme
      if (window.__mtrKodKontrolYapildi) return; window.__mtrKodKontrolYapildi = true;
      const ilkSatirlar = [];
      for (const k in gdjs) {
        if (!/Code$/.test(k) || !gdjs[k] || typeof gdjs[k] !== "object") continue;
        for (const f in gdjs[k]) {
          const fn = gdjs[k][f];
          if (typeof fn !== "function") continue;
          let t = ""; try { t = fn.toString(); } catch (e) { continue; }
          const m = /\/\/ MATRANÇ - [^\n]*/.exec(t); if (m) ilkSatirlar.push({ satir: m[0], metin: t, yer: k.replace(/Code$/, "").replace(/_32/g, " ") });   // v10.12b: hangi sahne
        }
      }
      const sorun = [];
      for (const [ad, desen, beklenen, adet] of M.BEKLENEN_KODLAR) {
        const esler = ilkSatirlar.filter((x) => ad === "Menu: çevrim içi" || !/^\/\/ MATRANÇ - Çevrim içi/.test(x.satir))   // v10.12c: bu kodun kendi sürüm notlarındaki eski sürüm adları sayılmaz
          .map((x) => { const m = desen.exec(x.satir); return m ? { v: m[1], yer: x.yer } : null; }).filter(Boolean);
        const bulunan = esler.map((x) => x.v);
        if (!bulunan.length) { sorun.push(ad + ": KOD BULUNAMADI (beklenen " + beklenen + ")"); continue; }
        const eski = esler.filter((x) => x.v !== beklenen);
        if (eski.length) sorun.push(ad + ": " + eski.map((x) => x.v + " (" + x.yer + " sahnesinde)").join(", ") + " var, olması gereken " + beklenen);
        if (adet && bulunan.length < adet) sorun.push(ad + ": " + bulunan.length + " sahnede var, " + adet + " olmalı");
      }
      const th = ilkSatirlar.map((x) => /const TEST_HEDIYE = (\d+)/.exec(x.metin)).filter(Boolean)[0];
      const uyari = th && Number(th[1]) > 0 && !/onizleme && TEST_HEDIYE/.test(th.input) ? "Tanıtım kartı: TEST_HEDIYE = " + th[1] + " (YAYINDAN ÖNCE 0 olmalı)" : "";
      const e = document.createElement("div"); e.id = "mtrKodKontrol";
      const tamam = !sorun.length;
      e.style.cssText = "position:fixed;left:8px;right:8px;top:8px;z-index:100000;padding:10px 14px;border-radius:14px;" +
        "font:700 13px/1.45 Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;box-shadow:0 6px 16px rgba(0,0,0,.3);" +
        "background:" + (tamam ? (uyari ? "#d98a12" : "#2f9e57") : "#d9464b");
      e.innerHTML = "<b>KOD KONTROLÜ (yalnız önizlemede görünür)</b><br>" +
        (tamam ? "Bütün kodlar güncel ✓" : sorun.map((x) => "• " + x).join("<br>")) +
        (uyari ? "<br>⚠ " + uyari : "") + "<br><span style='opacity:.8'>Kapatmak için dokun</span>";
      e.onclick = () => e.remove();
      document.body.appendChild(e);
      if (tamam && !uyari) setTimeout(() => { if (e.parentNode) e.remove(); }, 4000);
      console.log("MATRANC kod kontrolü:", sorun, uyari);
    } catch (err) { console.log("MATRANC kod kontrolü hatası: " + err); }
  };

  // =====================================================================
  //  v10.0: MEKTUP MAÇI (2. adım: liste, davet, kabul) — oyunu kabulde SUNUCU kurar (fonksiyon v4)
  // =====================================================================
  M.MEKTUP_SINIR = 3;
  M.mektup = { oyun: {}, gelen: {}, giden: {}, av: {}, dinliyor: false };
  M.pulStil = () => {
    if (document.getElementById("mtrPulStil")) return;
    const st = document.createElement("style"); st.id = "mtrPulStil";
    st.textContent =
      ".mtr-pul{--a:#ffe066;--b:#ffc21f;--k:#d98400;--i:#ffc933;--y:#1e2a5a;position:relative;border:none;cursor:pointer;font:800 14px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;" +
      "color:var(--y);padding:0 16px;height:42px;border-radius:999px;background:linear-gradient(var(--a),var(--b));white-space:nowrap;flex:none;" +
      "box-shadow:0 5px 0 var(--k),0 7px 10px rgba(0,0,0,.22),inset 0 2px 0 rgba(255,255,255,.7);-webkit-tap-highlight-color:transparent}" +
      ".mtr-pul::before{content:'';position:absolute;inset:5px;border-radius:999px;background:var(--i);box-shadow:inset 0 3px 3px rgba(0,0,0,.14),inset 0 -2px 0 rgba(255,255,255,.4)}" +
      ".mtr-pul>span{position:relative;display:flex;align-items:center;justify-content:center;gap:8px}" +
      ".mtr-pul:active{transform:translateY(3px);box-shadow:0 2px 0 var(--k),inset 0 2px 0 rgba(255,255,255,.7)}" +
      ".mtr-pul.y{--a:#a8f5b4;--b:#3fcf62;--k:#178a35;--i:#36bd57;--y:#fff}.mtr-pul.y>span{text-shadow:0 2px 0 rgba(0,0,0,.2)}" +
      ".mtr-pul.r{--a:#ff9da0;--b:#e8494d;--k:#a8272b;--i:#d9393d;--y:#fff}" +
      ".mtr-pul.g{--a:#e7ebf3;--b:#c3cad8;--k:#959db0;--i:#cdd3df;--y:#5a6280}" +
      ".mtr-pul.yuv{width:42px;padding:0}.mtr-pul.buyuk{height:52px;font-size:20px;padding:0 26px}" +
      "#mtrMektup{position:fixed;inset:0;z-index:99990;background:rgba(16,20,40,.5);display:flex;align-items:center;justify-content:center;" +
      "font-family:Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;color:#2c3862;-webkit-user-select:none;user-select:none}" +
      "#mtrMektup .k{width:min(90vw,370px);max-height:80vh;box-sizing:border-box;background:linear-gradient(#fdfbf6,#f3eee3);border-radius:26px;padding:46px 14px 16px;position:relative;box-shadow:0 18px 40px rgba(10,12,30,.45);display:flex;flex-direction:column}" +
      "#mtrMektup .bas{position:absolute;top:-25px;left:50%;transform:translateX(-50%)}" +
      "#mtrMektup .kp{position:absolute;right:12px;top:12px;height:34px;width:34px}" +
      "#mtrMektup .lst{overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:0 2px 8px}" +
      "#mtrMektup .bl{font-size:12.5px;font-weight:800;color:#8c92a6;margin:8px 4px 2px;letter-spacing:.5px}" +
      "#mtrMektup .s{display:flex;align-items:center;gap:9px;background:#fff;border-radius:16px;padding:9px 10px 12px;margin:8px 0;box-shadow:0 2px 0 #e3e0d6}" +
      "#mtrMektup .av{width:44px;height:44px;border-radius:50%;flex:none;background:#8fb3e8 center/cover no-repeat;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:19px}" +
      "#mtrMektup .ad{flex:1;min-width:0;line-height:1.2}#mtrMektup .ad b{font-size:16px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
      "#mtrMektup .ad div{font-size:12.5px;font-weight:600;color:#969cb0}#mtrMektup .ad div.on{color:#2f9e5b}" +
      "#mtrMektup .bos{text-align:center;font-weight:600;color:#8c92a6;font-size:14.5px;line-height:1.45;padding:18px 8px}" +
      "#mtrMektup .alt{text-align:center;font-size:12.5px;font-weight:600;color:#969cb0;margin-top:6px}";
    document.head.appendChild(st);
  };
  M.zarfSvg = (w, h, beyaz) => "<svg width='" + w + "' height='" + h + "' viewBox='0 0 24 18' style='display:block'><rect x='1.5' y='1.5' width='21' height='15' rx='2.5' fill='" + (beyaz ? "#fff" : "#fff") +
    "' stroke='#1e2a5a' stroke-width='2.6'/><path d='M3 3.5 L12 10.5 L21 3.5' fill='none' stroke='#1e2a5a' stroke-width='2.6' stroke-linejoin='round' stroke-linecap='round'/></svg>";

  // ---- dinleme: mektup oyunlarım + gelen/giden mektup davetleri ----
  M.mektupDinle = () => {
    if (M.mektup.dinliyor || !M.uid) return;
    M.mektup.dinliyor = true;
    const db = firebase.firestore(), X = M.mektup;
    const oyunDinle = (alan) => db.collection("oyunlar").where(alan, "==", M.uid).where("mektup", "==", true)
      .onSnapshot((q) => {
        q.docChanges().forEach((ch) => {
          if (ch.type === "removed") delete X.oyun[ch.doc.id];
          else {
            const o = ch.doc.data(); X.oyun[ch.doc.id] = o;
            const rUid = o.kirmiziUid === M.uid ? o.yesilUid : o.kirmiziUid, rAd = o.kirmiziUid === M.uid ? o.yesilAd : o.kirmiziAd;
            if (rUid && !M.arkadasMi(rUid) && !M.engelliMi(rUid)) M.arkadasEkle(rUid, rAd || "Arkadaşın");   // kabul → iki taraf arkadaş
          }
        });
        M.mektupGuncelle();
      }, (e) => M.iz("MEKTUP OYUN DİNLEME HATASI: " + (e && e.message ? e.message : e)));
    const davetDinle = (alan, kova) => db.collection("davetler").where(alan, "==", M.uid).where("mektup", "==", true).where("durum", "==", "bekliyor")
      .onSnapshot((q) => {
        q.docChanges().forEach((ch) => {
          if (ch.type === "removed") { delete X[kova][ch.doc.id]; return; }
          const d = ch.doc.data();
          if (kova === "gelen" && M.engelliMi(d.gonderenUid)) { ch.doc.ref.update({ durum: "red" }).catch(() => {}); return; }
          X[kova][ch.doc.id] = d;
        });
        M.mektupGuncelle();
      }, (e) => M.iz("MEKTUP DAVET DİNLEME HATASI: " + (e && e.message ? e.message : e)));
    X.abone = [oyunDinle("davetciUid"), oyunDinle("davetliUid"), davetDinle("aliciUid", "gelen"), davetDinle("gonderenUid", "giden")];
    M.iz("mektup dinleme başladı");
  };
  M.mektupAcikOyunlar = () => Object.keys(M.mektup.oyun).map((id) => Object.assign({ id: id }, M.mektup.oyun[id]))
    .filter((o) => o.mektupAcik === true && !o.bitti && !o.sonuc);
  M.mektupGorOku = () => { try { return JSON.parse(localStorage.getItem("mtrMektupGoruldu") || "[]"); } catch (e) { return []; } };
  M.mektupGorYaz = (id) => { try { const l = M.mektupGorOku(); if (!l.includes(id)) { l.push(id); localStorage.setItem("mtrMektupGoruldu", JSON.stringify(l.slice(-60))); try { gv("mektupSayi").setNumber(M.mektupSayi()); } catch (e2) {} } } catch (e) {} };   // v10.11: rozet sayısı hemen güncellenir
  M.mektupBitis = (o) => o.mektupBitisMs || (o.bitti && o.bitti.zaman) || 0;
  M.mektupBitenler = () => {
    const gor = M.mektupGorOku(), simdi = Date.now();
    return Object.keys(M.mektup.oyun).map((id) => Object.assign({ id: id }, M.mektup.oyun[id]))
      .filter((o) => (o.mektupAcik === false || o.bitti || o.sonuc) && !gor.includes(o.id) && simdi - M.mektupBitis(o) < 3 * 86400000 && M.mektupBitis(o) > 0);
  };
  M.mektupSayi = () => M.mektupAcikOyunlar().filter((o) => o.mektupSiraUid === M.uid).length + Object.keys(M.mektup.gelen).length;   // v10.11c: biten maçlar rozete girmez
  // v10.11c: BİTEN MAÇLAR listesi — son 5 biten maç (görülmüşler de), ✕ ile gizlenenler hariç
  M.mektupGizliOku = () => { try { return JSON.parse(localStorage.getItem("mtrMektupGizli") || "[]"); } catch (e) { return []; } };
  M.mektupGizle = (id) => { try { const l = M.mektupGizliOku(); if (!l.includes(id)) { l.push(id); localStorage.setItem("mtrMektupGizli", JSON.stringify(l.slice(-80))); } } catch (e) {} M.mektupGorYaz(id); M.mektupCiz(); };
  M.mektupBitenListe = () => {
    const giz = M.mektupGizliOku();
    return Object.keys(M.mektup.oyun).map((id) => Object.assign({ id: id }, M.mektup.oyun[id]))
      .filter((o) => (o.mektupAcik === false || o.bitti || o.sonuc) && M.mektupBitis(o) > 0 && !giz.includes(o.id))
      .sort((a, b) => M.mektupBitis(b) - M.mektupBitis(a)).slice(0, 5);
  };
  M.mektupKullanilan = () => M.mektupAcikOyunlar().length + Object.keys(M.mektup.giden).length;
  M.mektupGuncelle = () => {
    try { gv("mektupSayi").setNumber(M.mektupSayi()); } catch (e) {}
    if (document.getElementById("mtrMektup")) M.mektupCiz();
  };

  // ---- davet gönder (kişi satırındaki zarf düğmesi) ----
  M.mektupDavetEt = async (uid, ad) => {
    const p = M.pencereAc();
    if (!M.uid) return p.bitir("Bağlantı yok, biraz sonra tekrar dene");
    // v10.2c: listedeki kimlik eski olabilir (oyuncu telefon değiştirdi / kodla geri yükledi) → adın güncel sahibi
    try {
      const a = await firebase.firestore().collection("adlar").doc(M.kucuk(ad || "")).get();
      if (a.exists && a.data().uid && a.data().uid !== uid) {
        const eski = uid; uid = a.data().uid;
        M.iz("mektup: " + ad + " kimliği güncellendi");
        try {
          if (M.arkadasMi(eski)) { M.arkadasSil(eski); M.arkadasEkle(uid, ad); }
          if (M.sonRakipSil) { M.sonRakipSil(eski); M.sonRakipEkle(uid, ad); }
        } catch (e) {}
      }
    } catch (e) {}
    if (!uid || uid === M.uid) return p.bitir("Bu oyuncuya mektup gönderilemez");
    if (M.engelliMi(uid)) return p.bitir(ad + " engellendi");
    const varMi = M.mektupAcikOyunlar().some((o) => o.kirmiziUid === uid || o.yesilUid === uid)
      || Object.values(M.mektup.giden).some((d) => d.aliciUid === uid) || Object.values(M.mektup.gelen).some((d) => d.gonderenUid === uid);
    if (varMi) return p.bitir(ad + " ile zaten bir mektup maçın ya da bekleyen davetin var.");
    if (M.mektupKullanilan() >= M.MEKTUP_SINIR) return p.bitir("Aynı anda en fazla " + M.MEKTUP_SINIR + " mektup maçın olabilir.\nBirini bitirince yenisini başlatabilirsin.");
    // v10.13: davet hemen gitmez — önce ilk hamle yapılır, mektup bu hamleyle birlikte gönderilir (yazı-tura yok, gönderen kırmızı)
    M.pencereKapat();
    M.mektupTaslakBasla(uid, ad);
  };
  M.mektupTaslakBasla = (uid, ad) => {
    M.mektupKapat();
    if (M.oyun && !M.oyun.taslak) M.mektupBirak();
    M.mektupMod = { id: "taslak", taslak: true, aliciUid: uid, aliciAd: ad, rakipAd: ad, saat: M.mektup.sure || 24 };
    M.oyun = null;
    M.aktifOyun = { id: "taslak", rol: "davetci" };
    M.rovansGecis = false;
    gv("benDavetci").setNumber(1);
    try { M.rakipGalAl(uid); } catch (e) {}
    gv("bilgisayar").setNumber(0);
    gv("cevrimiciOyun").setNumber(1);
    gv("cevrimiciOyunId").setString("taslak");
    gv("rakipAd").setString(ad);
    gv("benimRenk").setNumber(1);                        // gönderen kırmızı, ilk hamle onun
    gv("sureSaniye").setNumber(0);
    gv("hedefTur").setNumber(1);
    gv("ayarYazisi").setString("MEKTUP MAÇI");
    M.iz("mektup taslağı: " + ad + " için ilk hamle");
    M.sahneDegistir(M.OYUN_SAHNESI);
  };
  // v10.13: ilk hamle yapıldı → davet bu hamleyle birlikte gönderilir
  M.mektupTaslakGonder = async (hm) => {
    const MM = M.mektupMod; if (!MM || !MM.taslak || MM.gonderildi) return;
    MM.gonderildi = true;
    const p = M.pencereAc();
    p.yaz("✉️ Mektubun hazırlanıyor...");
    const bitir = (metin) => {
      p.yaz(metin);
      const satir = document.querySelector("#mtrPencere .mtr-satir"); if (satir) satir.innerHTML = "";
      p.dugme("MEKTUP MAÇLARIM", () => { M.pencereKapat(); M.mektupBirak(); M.sahneDegistir(M.MEKTUP_SAHNESI); });
    };
    try {
      await firebase.firestore().collection("davetler").add({
        gonderenUid: M.uid, gonderenAd: M.ad, aliciUid: MM.aliciUid, aliciAd: MM.aliciAd, mektup: true, durum: "bekliyor", mektupSaat: MM.saat,
        ilkHamle: { renk: 1, tur: hm.tur || 1, k1: hm.k1, k2: hm.k2, hedef: hm.hedef, kaynak: hm.kaynak || 0 },
        olusturma: M.zaman(), olusturmaMs: Date.now(), zamanMs: Date.now(), gonderenSurum: M.uygSurum()
      });
      if (!M.arkadasMi(MM.aliciUid)) M.arkadasEkle(MM.aliciUid, MM.aliciAd);
      M.mektup.gorunum = "ana";
      M.iz("mektup ilk hamleyle gönderildi: " + hm.k1 + "×" + hm.k2 + " → " + hm.hedef);
      bitir("✉️ Mektubun yola çıktı!\n" + MM.aliciAd + " kabul edince ilk hamlen tahtaya işlenecek ve sıra ona geçecek.\nHamle süresi: " + MM.saat + " saat\n(24 saat içinde cevap gelmezse davet düşer.)");
    } catch (e) {
      M.iz("MEKTUP DAVET HATASI: " + (e && e.message ? e.message : e));
      bitir("Bağlantı hatası, mektup gönderilemedi.\nBiraz sonra yeniden dene.");
    }
  };
  M.mektupCevapla = (id, kabul) => {
    const d = M.mektup.gelen[id]; if (!d) return;
    if (kabul && M.mektupKullanilan() >= M.MEKTUP_SINIR) {
      M.pencereAc().bitir("Aynı anda en fazla " + M.MEKTUP_SINIR + " mektup maçın olabilir.\nÖnce birini bitir.");
      return;
    }
    firebase.firestore().collection("davetler").doc(id).update({ durum: kabul ? "kabul" : "red" })
      .then(() => M.iz("mektup daveti " + (kabul ? "kabul" : "red") + ": " + d.gonderenAd))
      .catch((e) => M.iz("MEKTUP CEVAP HATASI: " + (e && e.message ? e.message : e)));
    delete M.mektup.gelen[id]; M.mektupCiz();
  };
  // v10.4: maçtan çekil (rakip kazanır, hak boşalır)
  M.mektupCekil = (id) => {
    const o = M.mektup.oyun[id]; if (!o) return;
    const benK = o.kirmiziUid === M.uid, rAd = (benK ? o.yesilAd : o.kirmiziAd) || "Rakip";
    const p = M.pencereAc();
    p.yaz(rAd + " ile mektup maçından çekilmek istiyor musun?\n\nÇekilirsen maçı " + rAd + " kazanır.");
    const satir = document.querySelector("#mtrPencere .mtr-satir"); satir.innerHTML = "";
    const b1 = document.createElement("button"); b1.className = "mtr-btn mtr-koyu"; b1.textContent = "VAZGEÇ"; b1.onclick = () => { M.sesCal(); M.pencereKapat(); };
    const b2 = document.createElement("button"); b2.className = "mtr-btn"; b2.textContent = "ÇEKİL"; b2.style.background = "linear-gradient(#ff8a8e,#e2464a)";
    b2.onclick = () => {
      M.sesCal(); M.pencereKapat();
      firebase.firestore().collection("oyunlar").doc(id).update({ bitti: { kaybedenRenk: benK ? 1 : 2, neden: "cekildi", zaman: Date.now() } })
        .then(() => { M.mektupGorYaz(id); M.iz("mektup maçından çekildin: " + id); M.mektupCiz(); })
        .catch((e) => { M.iz("ÇEKİL HATASI: " + (e && e.message ? e.message : e)); M.pencereAc().bitir("Bağlantı hatası"); });
    };
    satir.append(b1, b2);
  };
  M.mektupIptal = (id) => {
    firebase.firestore().collection("davetler").doc(id).update({ durum: "iptal" }).catch(() => {});
    delete M.mektup.giden[id]; M.mektupCiz();
  };
  // v10.2: OYNA / BAK → maç ekranı (eşleşme ekranı yazı-turasız geçilir)
  M.mektupAc = (id, bak) => {
    const o = M.mektup.oyun[id]; if (!o) return;
    if (M.mektupBitenler().some((x) => x.id === id) && !o.sonuc && !o.bitti) { M.mektupGorYaz(id); M.mektupCiz(); return; }   // sonucu bilinmeyen biten maç
    const benK = o.kirmiziUid === M.uid, rUid = benK ? o.yesilUid : o.kirmiziUid, rAd = (benK ? o.yesilAd : o.kirmiziAd) || "Rakip";
    M.mektupKapat();
    if (M.oyun && M.oyun.id === id) M.mektupBirak();
    const bittiMi = o.mektupAcik === false || !!o.bitti || !!o.sonuc;
    M.mektupMod = { id: id, bak: !!bak, rakipAd: rAd, izle: bittiMi && M.mektupGorOku().includes(id), bittiMac: bittiMi };   // v10.11j: bittiMac   // v10.11: izle = daha önce görülmüş biten maç (ödül/soru yok)
    M.aktifOyun = { id: id, rol: o.davetciUid === M.uid ? "davetci" : "davetli" };
    M.rovansGecis = false;
    try { M.pulGonder(); } catch (e) {}
    gv("benDavetci").setNumber(o.davetciUid === M.uid ? 1 : 0);
    M.sonRakipEkle(rUid, rAd); M.rakipGalAl(rUid);
    gv("bilgisayar").setNumber(0);                       // v10.2b: MATİ oynamasın
    gv("cevrimiciOyun").setNumber(1);
    gv("cevrimiciOyunId").setString(id);
    gv("rakipAd").setString(rAd);
    gv("benimRenk").setNumber(benK ? 1 : 2);
    gv("sureSaniye").setNumber(0);
    gv("hedefTur").setNumber(1);
    gv("ayarYazisi").setString("MEKTUP MAÇI");
    M.iz("mektup maçı açılıyor: " + id + (bak ? " (bak)" : ""));
    M.sahneDegistir(M.OYUN_SAHNESI);                     // v10.2a: yazı-tura ekranı yok
  };
  M.mektupBirak = () => {
    const o = M.oyun;
    if (o) { ["abone", "bittiAbone", "emojiAbone", "metaAbone", "rakipAbone"].forEach((k) => { try { o[k] && o[k](); } catch (e) {} }); }
    M.oyun = null; M.durum = null; M.mektupMod = null;
    M.mektupPerde(false);
    M.siraEtiketi(null);
    try { if (M.mektupSahne) M.mektupSahne.getTimeManager().setTimeScale(1); } catch (e) {}
    gv("cevrimiciOyun").setNumber(0);
  };
  // v10.11j: perde varken oyun sesleri kısılır (hızlı kurulumdaki tık sesleri duyulmasın)
  M.mektupSessiz = (ac) => {
    try {
      const SM = gdjs.RuntimeGame && runtimeScene.getGame().getSoundManager();
      if (!SM || !SM.setGlobalVolume) return;
      if (ac) { if (M.__eskiSes == null) { M.__eskiSes = SM.getGlobalVolume ? SM.getGlobalVolume() : 100; SM.setGlobalVolume(0); } }
      else if (M.__eskiSes != null) { SM.setGlobalVolume(M.__eskiSes); M.__eskiSes = null; }
    } catch (e) {}
  };
  M.mektupPerde = (goster) => {
    let e = document.getElementById("mtrMektupPerde");
    M.mektupSessiz(!!goster);
    if (!goster) { if (e) e.remove(); return; }
    if (e) return;
    M.pulStil();
    e = document.createElement("div"); e.id = "mtrMektupPerde";
    e.style.cssText = "position:fixed;inset:0;z-index:99980;display:flex;align-items:center;justify-content:center;background:#141c3a;" +
      "font-family:Poppins,-apple-system,'Segoe UI',Roboto,sans-serif";
    ["touchstart", "touchend", "mousedown", "mouseup", "click"].forEach((ev) => e.addEventListener(ev, (x) => x.stopPropagation()));
    e.innerHTML = "<div style='display:flex;flex-direction:column;align-items:center;gap:14px'>" +
      "<div style='animation:mtrZarf 1s ease-in-out infinite'>" + M.zarfSvg(84, 63) + "</div>" +
      "<div style='color:#fff;font-weight:800;font-size:22px;letter-spacing:.5px'>Mektup açılıyor...</div></div>" +
      "<style>@keyframes mtrZarf{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-8px) rotate(4deg)}}</style>";
    document.body.appendChild(e);
    setTimeout(() => {   // güvenlik: 15 sn'de açılmazsa geri dönüş düğmesi
      const k = document.getElementById("mtrMektupPerde"); if (!k || k !== e) return;
      M.iz("MEKTUP PERDESİ 15 SN'DE KALKMADI");
      const b = document.createElement("button"); b.className = "mtr-pul g"; b.style.marginTop = "18px";
      b.innerHTML = "<span>MEKTUP MAÇLARIM</span>";
      b.onclick = (x) => { x.stopPropagation(); M.mektupBirak(); M.sahneDegistir(M.MEKTUP_SAHNESI); };
      k.firstChild.appendChild(b);
    }, 15000);
  };
  M.mektupHiz = (sahne, h) => { try { const tm = sahne.getTimeManager(); if (tm.getTimeScale() !== h) tm.setTimeScale(h); } catch (e) {} };
  M.mektupKaresi = (sahne, D, o) => {
    const MM = M.mektupMod || {};
    M.mektupSahne = sahne;
    if (gv("bilgisayar").getAsNumber() !== 0) gv("bilgisayar").setNumber(0);   // v10.2b
    const benim = gv("benimRenk").getAsNumber(), benimIdx = benim - 1, rakipIdx = 1 - benimIdx;
    const sira = M.sv(sahne, "sıradakiOyuncu").getAsNumber();
    const aiDurum = M.sv(sahne, "aiDurum").getAsNumber();
    const oyunBitti = M.sv(sahne, "oyunBitti").getAsNumber();
    const menuAcik = M.sv(sahne, "menuAcik").getAsNumber() === 1;
    const rAd = MM.rakipAd || gv("rakipAd").getAsString() || "Rakip";
    // v10.13: çıkış penceresi — mektupta 2. hâl ("Maç kaldığı yerden devam eder."); taslakta 1. hâl (mektup gönderilmez)
    let panel2 = false;
    try {
      const cp = sahne.getObjects("CikisPanel")[0];
      if (cp) { const ist = o.taslak ? 0 : 1; if (cp.getAnimation() !== ist) cp.setAnimation(ist); panel2 = cp.getAnimation() === 1; }
    } catch (e) {}
    if (o.bitti) { M.mektupHiz(sahne, 1); M.sv(sahne, "aiDurum").setNumber(9); return; }
    const k1 = sahne.getObjects("kadran1")[0], k2 = sahne.getObjects("kadran2")[0];
    const uygula = (h) => {
      o.gelen.shift(); o.uygulanan = h.n;
      k1.getVariables().get("secilenSayi").setNumber(h.k1); k1.getVariables().get("hedefAci").setNumber((h.k1 - 1) * 36 + 18);
      k2.getVariables().get("secilenSayi").setNumber(h.k2); k2.getVariables().get("hedefAci").setNumber((h.k2 - 1) * 36 + 18);
      M.sv(sahne, "seciliID").setNumber(h.kaynak || 0);
      gdjs.evtTools.runtimeScene.resetTimer(sahne, "ai");
      M.sv(sahne, "aiDurum").setNumber(3);
    };
    // 1) Tahtayı kur: bütün eski hamleler (iki rengin) hızlı, rakibin SON hamlesi normal hızda
    // v10.11b: maç tahta kurulurken BİTTİYSE (biten maçı açınca) perde kalkar; sonuç kartı, soru ve bitiş penceresi normal akar
    if (!MM.hazir && oyunBitti !== 0 && o.ilkTamam && aiDurum !== 3 && !M.oyunSuruyor()) {
      MM.hazir = true; M.mektupHiz(sahne, 1); M.mektupPerde(false);
      D.oncekiSira = sira; D.oncekiTahta = M.tahtaOku(sahne); D.oncekiTur = M.turNo(); D.oncekiAi = aiDurum;
      M.iz("mektup tahtası hazır (maç bitmiş)");
    }
    if (!MM.hazir) {
      if (menuAcik) { M.mektupHiz(sahne, 0); return; }
      if (aiDurum === 0) M.sv(sahne, "aiDurum").setNumber(M.BEKLE_AI);
      if (!MM.sahneBas) MM.sahneBas = Date.now();
      const kart = sahne.getObjects("Kart")[0];
      if (!o.ilkTamam || Date.now() - MM.sahneBas < (o.taslak ? 300 : 1500) || (kart && !kart.isHidden())) { if (!o.taslak) M.mektupPerde(true); M.siraEtiketi(null); return; }
      // takılma izi: hamle 6 sn'de bitmediyse teşhis kutusuna yaz
      if (aiDurum === 3 && MM.uygZaman && Date.now() - MM.uygZaman > 6000 && !MM.takildi) {
        MM.takildi = true;
        M.iz("MEKTUP TAKILDI: hamle #" + o.uygulanan + " sıra " + sira + " aiDurum " + aiDurum + " oyunBitti " + oyunBitti + " kalan " + o.gelen.length);
      }
      const h = o.gelen[0];
      if (!h && aiDurum !== 3) {                              // v10.3a: son hamlenin animasyonu bitmeden hazır sayma
        MM.hazir = true; M.mektupHiz(sahne, 1); M.mektupPerde(false);
        if (MM.sonRakip) MM.sonEtiket = { t: Date.now(), yazi: "✉️ " + rAd + ": " + MM.sonRakip.k1 + " × " + MM.sonRakip.k2 + " = " + (MM.sonRakip.k1 * MM.sonRakip.k2) };   // v10.11
        D.oncekiSira = sira; D.oncekiTahta = M.tahtaOku(sahne); D.oncekiTur = M.turNo(); D.oncekiAi = aiDurum;
        if (sira === benimIdx && oyunBitti === 0) M.sv(sahne, "aiDurum").setNumber(0);
        M.iz("mektup tahtası hazır, " + o.uygulanan + ". hamleye kadar");
      } else if (h && oyunBitti === 0 && (aiDurum === 0 || aiDurum === M.BEKLE_AI) && h.renk - 1 !== sira) {
        // v10.3a: bozuk kayıt (aynı rengin art arda iki hamlesi) → 1,5 sn sonra atla
        if (!MM.uyusmazBas || MM.uyusmazN !== h.n) { MM.uyusmazBas = Date.now(); MM.uyusmazN = h.n; M.iz("MEKTUP SIRA UYUŞMADI: hamle #" + h.n + " renk " + h.renk + ", tahtada sıra " + sira); }
        else if (Date.now() - MM.uyusmazBas > 1500) { o.gelen.shift(); o.uygulanan = h.n; MM.uyusmazBas = 0; M.iz("bozuk hamle atlandı #" + h.n); }
        return;
      }
      if (h && oyunBitti === 0 && (aiDurum === 0 || aiDurum === M.BEKLE_AI) && h.renk - 1 === sira) {
        const son = o.gelen.length === 1 && !!MM.bittiMac;     // v10.11j: biten maçta SON hamle perde kalktıktan sonra normal hızda (kazanma animasyonuyla); süren maçta hepsi perdenin arkasında
        if (son) { M.mektupHiz(sahne, 1); M.mektupPerde(false); }
        if (o.gelen.length === 1 && h.renk !== benim) MM.sonRakip = h;   // v10.11: açılınca etikette gösterilir
        if (!son) { M.mektupHiz(sahne, 6); M.mektupPerde(true); }   // v10.11: perdenin arkasında, hızlı
        MM.uygZaman = Date.now(); MM.takildi = false;
        M.iz("mektup tahta: #" + h.n + " renk " + h.renk + " " + h.k1 + "×" + h.k2 + (h.kaynak ? " takas " + h.kaynak + "→" + h.hedef : "") + (son ? " (son, normal hız)" : ""));
        M.siraEtiketi(null);
        uygula(h);
      }
      return;
    }
    M.mektupPerde(false);
    if (menuAcik) {   // v10.13: pencere kendi yazısını gösteriyorsa alttaki etiket yok
      if (o.taslak) M.siraEtiketi("Çıkarsan mektup gönderilmez", "#e2464a");
      else M.siraEtiketi(panel2 ? null : "Maç kaldığı yerden devam eder", "#2c3862");
      return;
    }
    // 2) Kendi hamlem bitti mi? → gönder
    const tahta = M.tahtaOku(sahne);
    if (D.oncekiSira === benimIdx && sira === rakipIdx && D.oncekiTahta && !D.bekleyen && D.oncekiAi !== 3 && aiDurum !== 3) {   // v10.3a: yalnız elle yapılan hamle
      D.bekleyen = { oncesi: D.oncekiTahta, kare: 3, k1: k1.getVariables().get("secilenSayi").getAsNumber(), k2: k2.getVariables().get("secilenSayi").getAsNumber(), tur: D.oncekiTur };
    }
    if (D.bekleyen && --D.bekleyen.kare <= 0) {
      const b = D.bekleyen; D.bekleyen = null;
      let hedef = 0, kaynak = 0;
      for (const d in tahta) {
        if (tahta[d] === benim && b.oncesi[d] !== benim) hedef = Number(d);
        if (b.oncesi[d] === benim && tahta[d] !== benim) kaynak = Number(d);
      }
      const bitti = oyunBitti !== 0 && !M.oyunSuruyor();
      const sK = gv("skorK").getAsNumber(), sY = gv("skorY").getAsNumber();
      const hm = { renk: benim, tur: b.tur, k1: b.k1, k2: b.k2, hedef: hedef, kaynak: kaynak, oto: false };
      if (bitti) { hm.son = true; hm.kazananRenk = sK > sY ? 1 : sY > sK ? 2 : 0; M.mektupGorYaz(o.id); }   // v10.3
      M.hamleGonder(hm);
      MM.gonderZaman = Date.now();
    }
    // 3) Hamle gönderildi ve oyun sürüyorsa: bilgi penceresi
    const yeniGonderildi = MM.gonderZaman && Date.now() - MM.gonderZaman < 5000 && oyunBitti === 0;   // v10.3b: pencere yerine etiket
    // 4) Rakibin canlı gelen hamlesi (tahtaya bakarken)
    if (sira === rakipIdx && oyunBitti === 0 && aiDurum === 0) M.sv(sahne, "aiDurum").setNumber(M.BEKLE_AI);
    const h = o.gelen[0];
    if (h && h.renk - 1 === rakipIdx && sira === rakipIdx && oyunBitti === 0 && M.sv(sahne, "aiDurum").getAsNumber() === M.BEKLE_AI) {
      uygula(h); MM.gonderZaman = 0;
    }
    // 5) Maç bitti → kart ve değer sorusundan sonra bilgi penceresi (rövanş yok)
    if (oyunBitti !== 0 && !M.oyunSuruyor()) {
      if (!MM.goruldu) { MM.goruldu = true; M.mektupGorYaz(o.id); }   // v10.11: sonuç ekrana gelince görüldü (çıkış düğmesiyle çıksa da)
      ["KartButon", "MenuButon"].forEach((n) => sahne.getObjects(n).forEach((x) => x.hide(true)));
      if (!D.macSonuZaman || (window.MatrancDeger && window.MatrancDeger.bekle())) D.macSonuZaman = Date.now();
      else if (!MM.bittiPencere && Date.now() - D.macSonuZaman > 2500) {
        MM.bittiPencere = true;
        M.mektupGorYaz(o.id);                                    // v10.3: sonuç görüldü
        const p = M.pencereAc();
        p.yaz("✉️ Mektup maçı bitti!" + (M.ikiliYazi() ? "\n\n" + M.ikiliYazi() : ""));   // v10.15
        p.dugme("MEKTUP MAÇLARIM", () => { M.pencereKapat(); M.mektupBirak(); M.sahneDegistir(M.MEKTUP_SAHNESI); });
      }
      M.siraEtiketi(null);
    } else if (o.taslak) M.siraEtiketi(MM.gonderildi ? null : "✉️ İlk hamleni yap, mektubun " + rAd + "'e gitsin", "#2f9e57");   // v10.13
    else if (yeniGonderildi) M.siraEtiketi("✉️ Hamlen gönderildi · çıkabilirsin, maç devam eder", "#2f9e57");
    else if (MM.sonEtiket && Date.now() - MM.sonEtiket.t < 4000 && sira === benimIdx) M.siraEtiketi(MM.sonEtiket.yazi, "#2c3862");   // v10.11: rakibin son hamlesi
    else M.siraEtiketi(null);   // v10.13: "Sıra sende / Sıra X'te" yok — üstteki SIRA etiketi yeterli
    D.oncekiSira = sira; D.oncekiTahta = tahta; D.oncekiTur = M.turNo(); D.oncekiAi = M.sv(sahne, "aiDurum").getAsNumber();
  };


  // ---- MEKTUP MAÇLARIM penceresi (v10.1: her şey burada — ana görünüm + YENİ MEKTUP MAÇI görünümü) ----
  M.mektupAvatar = (uid) => {
    const X = M.mektup;
    if (X.av[uid] === undefined) {
      X.av[uid] = -1;
      firebase.firestore().collection("oyuncular").doc(uid).get()
        .then((s) => { X.av[uid] = s.exists ? Number(s.data().avatar) : -1; if (document.getElementById("mtrMektup")) M.mektupCiz(); }).catch(() => {});
    }
    return X.av[uid] >= 0 ? M.avatarUrl(X.av[uid]) : "";
  };
  // v10.6: Mektup Maçı'na ilk girişte bir kez çıkan tanıtım sayfası
  M.MEKTUP_TANITIM_RESIM = "data:image/jpeg;base64,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";
  M.mektupTanitim = (sonra, tekrar) => {   // v10.7b: tekrar = hikâye düğmesiyle açıldı (düğmede KAPAT)
    M.pulStil(); M.dugme3BStil();
    const d = document.createElement("div"); d.id = "mtrMektupTanitim";
    d.style.cssText = "position:fixed;inset:0;z-index:99991;background:rgba(16,22,44,.6);display:flex;align-items:center;justify-content:center;font-family:Poppins,'Poppins-Bold',-apple-system,'Segoe UI',Roboto,sans-serif";
    ["touchstart", "touchend", "mousedown", "mouseup", "click"].forEach((ev) => d.addEventListener(ev, (e) => e.stopPropagation()));
    const p = (s, k) => "<p style='margin:7px 4px;color:" + (k ? "#1E2A5A;font-weight:800" : "#4A5275;font-weight:600") + ";font-size:14px;line-height:1.45'>" + s + "</p>";
    d.innerHTML = "<div style='width:88%;max-width:420px;max-height:92vh;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#FFFBF2;border-radius:26px;box-shadow:0 8px 0 #d9cfbd,0 14px 30px rgba(0,0,0,.4);padding:14px 14px 20px;box-sizing:border-box;text-align:center'>" +
      "<img src='" + M.MEKTUP_TANITIM_RESIM + "' style='width:100%;border-radius:18px;display:block;box-shadow:0 4px 12px rgba(0,0,0,.25)'>" +
      "<h2 style='margin:14px 0 6px;color:#1E2A5A;font-size:21px;font-weight:800;letter-spacing:.5px'>MEKTUPLA GELEN HAMLE</h2>" +
      p("Yaklaşık 200 yıl önce telefon da internet de yoktu. Birbirinden uzak yaşayan satranç ustaları hamlelerini bir kâğıda yazar, mektupla gönderirdi. Mektuplar atlı posta arabalarıyla şehirden şehre taşınırdı.") +
      p("1824'te Edinburgh ve Londra satranç kulüpleri böyle bir maç başlattı. Mektuplar yıllarca gidip geldi ve maç tam 4 yıl sürdü. Sonunda Edinburgh kazandı!") +
      p("Acele olmadığı için ustalar her hamleyi günlerce düşünebilirdi. Bu yüzden mektup maçları satrancın en derin oyunları olarak bilinir. Bu gelenek bugün de sürüyor: 1951'den beri dünya çapında mektup satrancı turnuvaları yapılıyor.") +
      p("Şimdi sıra sende! Hamleni düşün, yap, mektubun rakibine uçsun. <span style='display:inline-block;vertical-align:-3px'>" + M.zarfSvg(22, 16) + "</span>", true) +
      "<button class='mtr-btn' style='margin-top:12px;width:78%;font-family:inherit'>" + (tekrar ? "KAPAT" : "BAŞLAYALIM!") + "</button></div>";
    d.querySelector("button").onclick = (e) => {
      e.stopPropagation(); M.sesCal();
      try { localStorage.setItem("mtrMektupTanitim", "1"); } catch (x) {}
      d.remove(); if (sonra) sonra();
    };
    document.body.appendChild(d);
  };
  M.MEKTUP_SAHNESI = "Mektup";   // v10.7
  M.mektupTamStil = () => {
    if (document.getElementById("mtrMektupTam")) return;
    const st = document.createElement("style"); st.id = "mtrMektupTam";
    const T = "#mtrMektup.tam";
    st.textContent =
      T + "{background:none;display:block}" +
      T + " .k{position:fixed;inset:0;width:auto;max-height:none;background:none;border-radius:0;box-shadow:none;padding:calc(37vh + max(env(safe-area-inset-top),var(--mtrUst,0px))) 18px calc(42px + env(safe-area-inset-bottom))}" +
      T + " .bas{top:calc(40px + max(env(safe-area-inset-top),var(--mtrUst,0px)))}" +
      T + " .kp{left:14px;right:auto;top:calc(38px + max(env(safe-area-inset-top),var(--mtrUst,0px)));height:56px!important;width:56px!important}" +
      T + " .kp{height:62px!important;background:url(data:image/webp;base64,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) center/contain no-repeat!important;box-shadow:none!important;padding:0!important}" +
      T + " .kp::before," + T + " .kp::after{display:none!important}" + T + " .kp span{display:none!important}" +
      T + " .hk{left:auto!important;right:14px;top:calc(38px + max(env(safe-area-inset-top),var(--mtrUst,0px)))!important;height:56px!important;width:56px!important}" +
      T + " .hk svg{width:26px!important;height:23px!important}" +
      T + " .lst{flex:1;min-height:0}" +
      T + " .bl{display:inline-block;font-size:12px;color:#fff3dc;background:rgba(60,30,10,.62);border-radius:999px;padding:3px 12px;margin:8px 2px 0;letter-spacing:.6px;box-shadow:0 1px 0 rgba(255,220,160,.25)}" +
      T + " .s{background:linear-gradient(#fffaf0,#f6ead2);margin:7px 0;box-shadow:0 3px 0 #d9c39c,0 8px 16px rgba(40,15,0,.35)}" +
      T + " .bos{color:#fff3dc;text-shadow:0 1px 3px rgba(0,0,0,.8)}" +
      T + " .alt{color:#fff3dc;font-weight:700;margin-top:8px;text-shadow:0 1px 3px rgba(0,0,0,.7)}" +
      T + " .ara{margin-top:0!important}" +
      T + " .ara input{box-shadow:0 6px 14px rgba(40,15,0,.35)}";
    document.head.appendChild(st);
  };
  // v10.7: tam = Mektup sahnesinde tam ekran (← Çevrimiçi'ye döner)
  M.mektupPanel = (tam) => {
    if (tam !== undefined) M.mektupTamMi = !!tam;
    tam = !!M.mektupTamMi;
    let gordu = true; try { gordu = localStorage.getItem("mtrMektupTanitim") === "1"; } catch (x) {}
    if (!gordu) { if (!document.getElementById("mtrMektupTanitim")) M.mektupTanitim(() => M.mektupPanel()); return; }
    M.pulStil(); if (tam) M.mektupTamStil();
    M.mektupKapat();
    M.mektup.gorunum = "ana"; M.mektup.aramaSonuc = null; M.mektup.aramaMesaj = "";
    const d = document.createElement("div"); d.id = "mtrMektup"; if (tam) d.className = "tam";
    ["touchstart", "touchend", "mousedown", "mouseup", "click"].forEach((ev) => d.addEventListener(ev, (e) => e.stopPropagation()));
    d.innerHTML = "<div class='k'><div class='bas'></div><button class='mtr-pul g yuv kp'><span></span></button>" +
      "<button class='mtr-pul yuv hk' title='Hikâye' style='position:absolute;left:12px;top:12px;height:34px;width:34px'><span>" +
      "<svg width='18' height='16' viewBox='0 0 18 16' style='display:block'><path d='M9 3.2C7.2 1.8 4.6 1.4 1.5 1.8v11.4c3.1-.4 5.7 0 7.5 1.4 1.8-1.4 4.4-1.8 7.5-1.4V1.8C13.4 1.4 10.8 1.8 9 3.2z' fill='#fff' stroke='#1E2A5A' stroke-width='1.6' stroke-linejoin='round'/><path d='M9 3.2v11.4' stroke='#1E2A5A' stroke-width='1.6'/></svg>" +
      "</span></button>" +
      "<div class='ara' style='display:none;gap:8px;margin:16px 0 6px'><input maxlength='12' placeholder='Oyuncu adı yaz' autocomplete='off' " +
      "style='flex:1;min-width:0;box-sizing:border-box;border:2px solid #e3e0d6;border-radius:999px;padding:9px 14px;font:600 16px Poppins,sans-serif;color:#2c3862;background:#fff;outline:none'>" +
      "<button class='mtr-pul aB'><span>ARA</span></button></div><div class='lst'></div><div class='yt'></div><div class='alt'></div></div>";
    if (!tam) d.addEventListener("click", (e) => { if (e.target === d) M.mektupKapat(); });
    d.querySelector(".kp").onclick = (e) => {
      e.stopPropagation(); M.sesCal();
      if (M.mektup.gorunum === "yeni") { M.mektup.gorunum = "ana"; M.mektupCiz(); }
      else { M.mektupKapat(); if (tam) M.sahneDegistir("Cevrimici"); }
    };
    d.querySelector(".hk").onclick = (e) => { e.stopPropagation(); M.sesCal(); M.mektupTanitim(null, true); };   // v10.6b · v10.7b
    const inp = d.querySelector("input"), ara = () => M.mektupAra(inp.value);
    d.querySelector(".aB").onclick = (e) => { e.stopPropagation(); M.sesCal(); ara(); };
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); ara(); } });
    document.body.appendChild(d);
    M.mektupCiz();
  };
  M.mektupKapat = () => { const e = document.getElementById("mtrMektup"); if (e) e.remove(); };
  M.mektupAra = async (metin) => {
    const X = M.mektup; metin = (metin || "").trim();
    const yaz = (m, s) => { X.aramaMesaj = m; X.aramaSonuc = s || null; M.mektupCiz(); };
    if (!/^[A-Za-z0-9ÇĞİÖŞÜçğıöşü]{3,12}$/.test(metin)) return yaz("Ad 3–12 harf ya da rakam olmalı");
    if (M.ad && M.kucuk(metin) === M.kucuk(M.ad)) return yaz("Bu senin adın 🙂");
    yaz("Aranıyor...");
    try {
      const db = firebase.firestore();
      const a = await db.collection("adlar").doc(M.kucuk(metin)).get();
      if (!a.exists) return yaz("Bu adla bir oyuncu bulunamadı");
      const uid = a.data().uid, o = await db.collection("oyuncular").doc(uid).get();
      if (!o.exists) return yaz("Bu adla bir oyuncu bulunamadı");
      const od = o.data(); X.av[uid] = Number(od.avatar);
      if (M.engelliMi(uid)) return yaz(od.ad + " engellendi");
      yaz("", { u: uid, a: od.ad });
    } catch (e) { yaz("Bağlantı hatası"); }
  };
  M.mektupCiz = () => {
    const kok = document.getElementById("mtrMektup"); if (!kok) return;
    const t = (s) => M.yaziTemiz(s), X = M.mektup, simdi = Date.now(), yeni = X.gorunum === "yeni";
    kok.querySelector(".bas").innerHTML = "<button class='mtr-pul buyuk'><span>" + (yeni ? "" : M.zarfSvg(30, 22)) + (yeni ? "YENİ MEKTUP MAÇI" : "MEKTUP MAÇLARIM") + "</span></button>";
    const tam = kok.classList.contains("tam");
    kok.querySelector(".kp span").textContent = (yeni || tam) ? "←" : "✕";
    kok.querySelector(".hk").style.display = yeni ? "none" : "";   // v10.6b: hikâye düğmesi yalnız ana görünümde
    kok.querySelector(".ara").style.display = yeni ? "flex" : "none";
    const satir = (uid, ad, alt, altOn, dugmeler) => {
      const url = M.mektupAvatar(uid);
      return "<div class='s'><div class='av'" + (url ? " style=\"background-image:url('" + url + "')\"" : "") + ">" + (url ? "" : t(ad).charAt(0).toUpperCase()) + "</div>" +
        "<div class='ad'><b>" + t(ad) + "</b><div class='" + (altOn ? "on" : "") + "'>" + alt + "</div></div>" + dugmeler + "</div>";
    };
    const saat = (ms) => { const s = Math.max(0, ms) / 3600000; return s < 1 ? Math.max(1, Math.round(s * 60)) + " dk" : Math.floor(s) + " sa"; };
    const oyunlar = M.mektupAcikOyunlar();
    let h = "";
    if (yeni) {
      // meşgul olanlar: zaten maç ya da bekleyen davet olan kişiler
      const mesgul = {};
      oyunlar.forEach((o) => { mesgul[o.kirmiziUid] = 1; mesgul[o.yesilUid] = 1; });
      Object.values(X.giden).forEach((d) => mesgul[d.aliciUid] = 1);
      Object.values(X.gelen).forEach((d) => mesgul[d.gonderenUid] = 1);
      const gonder = (x) => mesgul[x.u]
        ? "<button class='mtr-pul g' disabled><span>MAÇ VAR</span></button>"
        : "<button class='mtr-pul y' data-gonder='" + x.u + "' data-ad='" + t(x.a) + "'><span>GÖNDER</span></button>";
      // v10.6: hamle süresi seçimi (12 / 24 / 48 saat, varsayılan 24)
      if (![12, 24, 48].includes(X.sure)) X.sure = 24;
      h += "<div class='bl'>HAMLE SÜRESİ</div><div style='display:flex;gap:7px;margin:4px 0 14px'>" +
        [12, 24, 48].map((s) => "<button class='mtr-pul " + (X.sure === s ? "y" : "g") + "' data-sure='" + s + "' style='flex:1;padding:0 6px'><span>" + s + " SAAT</span></button>").join("") + "</div>";
      if (X.aramaMesaj) h += "<div class='bos' style='padding:6px 8px'>" + t(X.aramaMesaj) + "</div>";
      if (X.aramaSonuc) { h += "<div class='bl'>ARAMA SONUCU</div>" + satir(X.aramaSonuc.u, X.aramaSonuc.a, "oyuncu", false, gonder(X.aramaSonuc)); }
      const ark = M.arkadasOku().filter((x) => !M.engelliMi(x.u)), arkSet = {}; ark.forEach((x) => arkSet[x.u] = 1);
      const son = M.sonRakipOku().filter((x) => !arkSet[x.u] && !M.engelliMi(x.u)).slice(0, 6);
      if (ark.length) { h += "<div class='bl'>ARKADAŞLARIM</div>"; ark.forEach((x) => h += satir(x.u, x.a, "arkadaşın", false, gonder(x))); }
      if (son.length) { h += "<div class='bl'>SON OYNADIKLARIM</div>"; son.forEach((x) => h += satir(x.u, x.a, "son oynadığın", false, gonder(x))); }
      if (!ark.length && !son.length && !X.aramaSonuc) h += "<div class='bos'>Arkadaşının adını yukarıya yazıp ara.</div>";
    } else {
      const gelen = Object.keys(X.gelen), giden = Object.keys(X.giden);
      if (gelen.length) {
        h += "<div class='bl'>GELEN DAVET</div>";
        gelen.forEach((id) => { const d = X.gelen[id];
          h += satir(d.gonderenUid, d.gonderenAd || "?", (d.ilkHamle ? "ilk hamlesini yaptı, seni bekliyor" : "mektup maçına çağırıyor") + " · ⏱ " + (Number(d.mektupSaat) || 48) + " sa", false,
            "<button class='mtr-pul y' data-kabul='" + id + "'><span>KABUL</span></button><button class='mtr-pul r yuv' data-red='" + id + "'><span>✕</span></button>"); });
      }
      if (oyunlar.length) {
        h += "<div class='bl'>DEVAM EDEN MAÇLAR</div>";
        oyunlar.sort((a, b) => (b.mektupSiraUid === M.uid) - (a.mektupSiraUid === M.uid) || (a.sonHamleMs || 0) - (b.sonHamleMs || 0)).forEach((o) => {
          const benK = o.kirmiziUid === M.uid, rUid = benK ? o.yesilUid : o.kirmiziUid, rAd = (benK ? o.yesilAd : o.kirmiziAd) || "Rakip";
          const bende = o.mektupSiraUid === M.uid, gecen = simdi - (o.sonHamleMs || simdi);
          const cek = "<button class='mtr-pul g yuv' data-cekil='" + o.id + "' title='Çekil'><span>" + "<svg width='18' height='20' viewBox='0 0 18 20' style='display:block'><path d='M3 2v17' stroke='#5a6280' stroke-width='2.6' stroke-linecap='round'/><path d='M4 3h10l-2.5 3.5L14 10H4z' fill='#fff' stroke='#5a6280' stroke-width='2' stroke-linejoin='round'/></svg>" + "</span></button>";   // v10.4
          h += bende
            ? satir(rUid, rAd, "● Sıra sende · " + saat((Number(o.mektupSaat) || 48) * 3600000 - gecen) + " kaldı", true, cek + "<button class='mtr-pul y' data-oyna='" + o.id + "'><span>OYNA</span></button>")
            : satir(rUid, rAd, "Sıra " + t(rAd) + "'de · " + saat(gecen) + " önce", false, cek + "<button class='mtr-pul g' data-bak='" + o.id + "'><span>BAK</span></button>");
        });
      }
      const biten = M.mektupBitenListe(), gorulen = M.mektupGorOku();   // v10.11c
      if (biten.length) {
        h += "<div class='bl'>BİTEN MAÇLAR</div>";
        biten.forEach((o) => {
          const benK = o.kirmiziUid === M.uid, rUid = benK ? o.yesilUid : o.kirmiziUid, rAd = (benK ? o.yesilAd : o.kirmiziAd) || "Rakip";
          const kaz = o.sonuc && o.sonuc.kazanan ? (o.sonuc.kazanan === M.uid) : (o.bitti ? o.bitti.kaybedenRenk !== (benK ? 1 : 2) : null);
          const yeniMi = !gorulen.includes(o.id);
          h += satir(rUid, rAd, (yeniMi ? "<span style='background:#e2464a;color:#fff;border-radius:6px;padding:0 5px;margin-right:4px;font-size:10px'>YENİ</span>" : "") +
            (kaz === true ? "🏆 Kazandın!" : kaz === false ? "Maç bitti · " + t(rAd) + " kazandı" : "Maç bitti"), kaz === true,
            "<button class='mtr-pul g yuv' data-gizle='" + o.id + "' title='Listeden kaldır'><span>✕</span></button><button class='mtr-pul " + (yeniMi ? "y" : "g") + "' data-oyna='" + o.id + "'><span>SONUÇ</span></button>");
        });
      }
      if (giden.length) {
        h += "<div class='bl'>GÖNDERDİĞİN DAVETLER</div>";
        giden.forEach((id) => { const d = X.giden[id];
          h += satir(d.aliciUid, d.aliciAd || "?", (d.ilkHamle ? "ilk hamlen yolda · " : "") + "cevap bekleniyor · ⏱ " + (Number(d.mektupSaat) || 48) + " sa", false, "<button class='mtr-pul g yuv' data-iptal='" + id + "'><span>✕</span></button>"); });
      }
      if (!h) h = "<div class='bos'>Henüz mektup maçın yok.<br>Aşağıdan bir arkadaşına mektup gönder!</div>";
      const dolu = M.mektupKullanilan() >= M.MEKTUP_SINIR;
      X.ytHtml = "<button class='mtr-pul buyuk' data-yeni='1' style='width:100%;margin-top:10px" + (dolu ? ";opacity:.55" : "") + "'><span>+ YENİ MEKTUP MAÇI</span></button>";
    }
    kok.querySelector(".yt").innerHTML = yeni ? "" : (X.ytHtml || "");   // v10.7: alt kısımda sabit
    const lst = kok.querySelector(".lst"), kay = X.sonGorunum === X.gorunum ? lst.scrollTop : 0;
    lst.innerHTML = h; lst.scrollTop = kay; X.sonGorunum = X.gorunum;
    kok.querySelector(".alt").textContent = yeni ? "Davet 24 saat içinde kabul edilmezse düşer"
      : "Aynı anda en fazla " + M.MEKTUP_SINIR + " maç · " + M.mektupKullanilan() + "/" + M.MEKTUP_SINIR;
    const bagla = (ad, fn) => kok.querySelectorAll(".lst [data-" + ad + "], .yt [data-" + ad + "]").forEach((b) => b.onclick = (e) => { e.stopPropagation(); M.sesCal(); fn(b.getAttribute("data-" + ad), b); });
    bagla("kabul", (id) => M.mektupCevapla(id, true));
    bagla("red", (id) => M.mektupCevapla(id, false));
    bagla("iptal", (id) => M.mektupIptal(id));
    bagla("oyna", (id) => M.mektupAc(id, false));
    bagla("bak", (id) => M.mektupAc(id, true));
    bagla("cekil", (id) => M.mektupCekil(id));
    bagla("gizle", (id) => M.mektupGizle(id));   // v10.11c
    bagla("gonder", (uid, b) => M.mektupDavetEt(uid, b.getAttribute("data-ad")));
    bagla("sure", (s) => { X.sure = Number(s); M.mektupCiz(); });   // v10.6
    bagla("yeni", () => {
      if (M.mektupKullanilan() >= M.MEKTUP_SINIR) { M.pencereAc().bitir("Aynı anda en fazla " + M.MEKTUP_SINIR + " mektup maçın olabilir.\nBirini bitirince yenisini başlatabilirsin."); return; }
      X.gorunum = "yeni"; X.aramaSonuc = null; X.aramaMesaj = ""; X.sure = 24; M.mektupCiz();
      setTimeout(() => { const i = kok.querySelector("input"); if (i) i.value = ""; }, 0);
    });
  };
  if (!M.__mektupSaat) M.__mektupSaat = setInterval(() => { if (document.getElementById("mtrMektup")) M.mektupCiz(); }, 30000);

  window.MatrancCevrimici = M;
  M.sahneGeciciKur();
  try { M.gecisKur(); } catch (e) { M.iz("GEÇİŞ KURULAMADI: " + (e && e.message ? e.message : e)); }   // v10.9
  try { M.teshisKur(); } catch (e) {}   // v10.11c
  M.oyunIzleyiciKur();
  M.kapanisDinle();
  M.gizliDinle();   // v9.4
  setTimeout(() => M.kodKontrol(), 1500);   // v9.5
  M.iz("kod " + SURUM + " yüklendi");
}

gv("cevrimiciOyun").setNumber(0);   // menüye dönüldü: çevrim içi oyun yok
if (!window.MatrancTahta) window.MatrancCevrimici.kimlikHazirla();   // v10.12: tahtada çevrim içi yok
};
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "sesAcik");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "sesAcik", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "titresimAcik");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "titresimAcik", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "hedefTur");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "hedefTur", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(8));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "sureSaniye");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "sureSaniye", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MenuCode.userFunc0xee3c78(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "galKolay");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "galKolay", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "galOrta");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "galOrta", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("matranc", "galZor");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("matranc", "galZor", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6));
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects = Hashtable.newFrom({"Btn2Oyuncu": gdjs.MenuCode.GDBtn2OyuncuObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects = Hashtable.newFrom({"Btn2Oyuncu": gdjs.MenuCode.GDBtn2OyuncuObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects = Hashtable.newFrom({"Btn2Oyuncu": gdjs.MenuCode.GDBtn2OyuncuObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnNasilObjects1Objects = Hashtable.newFrom({"BtnNasil": gdjs.MenuCode.GDBtnNasilObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects = Hashtable.newFrom({"BtnBilgisayar": gdjs.MenuCode.GDBtnBilgisayarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects = Hashtable.newFrom({"Btn2Oyuncu": gdjs.MenuCode.GDBtn2OyuncuObjects1});
gdjs.MenuCode.userFunc0x11f4ce0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - TİTREŞİM v1
// "Menu" sahnesinde KOŞULSUZ, ayrı bir JavaScript etkinliği olarak koyun (bir kez kurulur, bütün sahnelerde çalışır).
// Oyunun kendi seslerine bağlanır: ses çalınınca (ses kapalı olsa bile) titreşim anahtarı açıksa kısa titreşim yapar.
//   pul_yerlesme → çok kısa "tık"     sure_uyari → kısa uyarı
//   tur_kazanma  → iki kısa titreşim   oyun_kazanma → üç vuruşlu kutlama
// iPhone'da titreşim süresi ayarlanamadığı için yalnız tur/oyun kazanmada titrer (her pulda uzun titreşim rahatsız eder).
// Titreşim önizlemede (özellikle iPhone'da) hissedilmeyebilir; mağazadan/dahili testten kurulan uygulamada çalışır.
(function () {
  const game = runtimeScene.getGame();
  if (window.__mtrTitresim === game) return;
  window.__mtrTitresim = game;
  const iOS = /iPhone|iPad|iPod/i.test(navigator.userAgent || "") ||
              (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const DESEN = {
    pul_yerlesme: iOS ? null : 25,
    sure_uyari:   iOS ? null : 40,
    tur_kazanma:  iOS ? 1 : [60, 70, 60],
    oyun_kazanma: iOS ? 1 : [80, 60, 80, 60, 160]
  };
  const acik = () => {
    try { return game.getVariables().get("titresimAcik").getAsNumber() === 1; } catch (e) { return true; }
  };
  let son = 0;
  const titret = (d) => {
    if (d == null || !acik()) return;
    const simdi = Date.now(); if (simdi - son < 60) return; son = simdi;   // aynı anda iki ses çalarsa tek titreşim
    try {
      if (gdjs.deviceVibration && gdjs.deviceVibration.startVibrationPattern && Array.isArray(d)) { gdjs.deviceVibration.startVibrationPattern(d); return; }
      if (gdjs.deviceVibration && gdjs.deviceVibration.startVibration && !Array.isArray(d)) { gdjs.deviceVibration.startVibration(d); return; }
    } catch (e) {}
    try { if (navigator.vibrate) navigator.vibrate(d); } catch (e) {}
  };
  const sm = game.getSoundManager();
  const orj = sm.playSound;
  sm.playSound = function (ad) {
    try {
      const k = String(ad || "").toLowerCase();
      for (const s in DESEN) if (k.indexOf(s) >= 0) { titret(DESEN[s]); break; }
    } catch (e) {}
    return orj.apply(this, arguments);
  };
  window.MatrancTitret = titret;   // gerekirse başka kodlardan da çağrılabilir
  console.log("MATRANC titreşim kuruldu" + (iOS ? " (iPhone: yalnız kazanma)" : ""));
})();
};
gdjs.MenuCode.userFunc0xd0f978 = function GDJSInlineCode(runtimeScene) {
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
gdjs.MenuCode.asyncCallback23057012 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(23057012, gdjs.MenuCode.asyncCallback23057012);
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Share__Share.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(22).getAsString(), "", "MATRANÇ", null), (runtimeScene) => (gdjs.MenuCode.asyncCallback23057012(runtimeScene, asyncObjectsList)), 23057012, asyncObjectsList);
}
}

}


};gdjs.MenuCode.userFunc0xeef7e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - MENÜ YERLEŞİM v12h (MEKTUP ROZETİ: sahne kapanırken / duraklarken HEMEN silinir — Profil vb. yüklenirken kırmızı 1 ekranda kalmaz) · v12g (GECE MENÜSÜ: 19.00–06.00 arası MenuZemin animasyon 1 = aynı şehrin gece hâli; animasyon yoksa gündüz kalır) · v12f (AKILLI TAHTA MODU: yalnız logo, İKİ OYUNCU ve Ayarlar; MATİ, Nasıl Oynanır, Profil, Robot Atölyesi, mektup rozeti gizli) · v12e (Profil/Ayarlar altın çerçeveli düğmeler: çap sabit 88) · v12d (tanıtım kartı kapalıyken Bulanik efekti her karede kapalı tutulur) · v12c (mektup rozeti tanıtım kartı açıkken gizli) · v12b (BULUTLU IŞIKLI LOGO: MenuLogo → matranc_logo_bulut_v1.png (1720×994), ölçek sabit 0.375 → harfler v12 ile aynı boyda) · v12 (YENİ ŞEHİR: logo %25 küçük ve gökyüzünde (360/134.5); NASIL OYNANIR yazılı sarı hap düğme (BtnNasil → btn_nasil_hap_v1.png, genişlik 337); ROBOT ATÖLYESİ: menü zemini sağdaki kulenin yuvarlak penceresine yaklaşır → parlama → Atolye; atölyeden dönüşte pencereden geri çekilir) · v11 (ROBOT ATÖLYESİ düğmesi zıpladıktan sonra "Atolye" sahnesini açar) · v10 (PROFİL ve AYARLAR düğmeleri de dokununca Robot Atölyesi gibi hafifçe zıplar, sahne geçişi zıplama bitince KODDAN yapılır — Menu olaylarındaki BtnProfil ve AyarlarBtn sahne değiştirme olayları devre dışı bırakılmalı) · v9 (ilk açılışta Nasıl Oynanır'a otomatik geçiş kaldırıldı; tanıtım kartı yeterli) · v8 (MEKTUP ROZETİ: İki Oyuncu düğmesinin sağ üst köşesinde kırmızı sayı — sırası gelen mektup maçı + gelen davet + biten maç) · v7 (NASIL OYNANIR geri geldi: MATİ'ye Karşı ile dişli düğmesinin arasında küçük açık defter — BtnNasil, resmi btn_nasil_defter_v3.png) · v6 (DÜĞMELER AŞAĞI: uzun ekranda İki Oyuncu 905 / MATİ'ye Karşı 1045; kısa ekranda dişli düğmesine çarpmayacak kadar yukarıda kalır) · v5 (YENİ DÜĞMELER: İki Oyuncu ve MATİ'ye Karşı pul tarzı; NASIL OYNANIR menüden kalktı (BtnNasil gizlenir) — ilk açılışta bir kez kendiliğinden açılır, sonra Ayarlar'dan; alt ortada ROBOT ATÖLYESİ dişli düğmesi (BtnAtolye), Profil ve Ayarlar iki yanında) · v4 (MANZARALI MENÜ)
// "Menu" sahnesinin olaylarının EN ALTINA, KOŞULSUZ tek bir JavaScript olayı olarak koyun (v3'ün yerine).
// MatiGoz ve MatiIsik nesneleri artık kullanılmıyor (silinebilir).
// v5 YENİ NESNE: BtnAtolye (Hareketli resim, btn_atolye_v1.png). BtnNasil artık kullanılmıyor (kod gizler; silinebilir).
(function () {
  const S = runtimeScene;
  const ilk = (ad) => { try { const l = S.getObjects(ad); return l && l.length ? l[0] : null; } catch (e) { return null; } };
  const merkez = (o, x, y) => { if (o) o.setPosition(x - o.getWidth() / 2, y - o.getHeight() / 2); };
  const simdi = (window.performance ? performance.now() : Date.now()) / 1000;
  const yumusak = (x) => { x = Math.max(0, Math.min(1, x)); return 1 - Math.pow(1 - x, 3); };
  window.MatrancUcurtma = { sahne: S, bitti: true };              // eski uçurtma kalkışı çalışmasın
  let K = window.MatrancMenuYer;
  if (!K || K.sahne !== S) K = window.MatrancMenuYer = { sahne: S, kuruldu: false };
  // v12d: tanıtım kartı kapalıyken ana katmandaki "Bulanik" efekti HER ZAMAN kapalı (tablette açık kalan bulanıklık menüyü siyah çiziyordu — şüphe)
  try {
    const Lb = S.getLayer(""), TT = window.MatrancTanitim;
    if (Lb.hasEffect && Lb.hasEffect("Bulanik") && !(TT && TT.sahne === S && TT.acik)) {
      if (!Lb.isEffectEnabled || Lb.isEffectEnabled("Bulanik")) { Lb.enableEffect("Bulanik", false); if (TT && TT.sahne === S) TT.__bAc = false; }
    }
  } catch (e) {}

  const LOGO = [360, 134.5], LOGO_K = 0.75;                   // v12: logo küçük ve gökyüzünde
  const PEN = [644, 660];                                         // v12: menü zeminindeki kulenin yuvarlak penceresi (dünya)
  const L0 = S.getLayer("");
  let alt0 = 1280; try { alt0 = L0.getCameraY() + L0.getCameraHeight() / 2; } catch (e) {}
  const yM = Math.min(1045, alt0 - 78 - 294);                     // v7: MATİ'ye Karşı; altında Nasıl Oynanır, onun altında dişli
  const TAHTA = !!window.MatrancTahta;                          // v12f
  const DUGME = TAHTA ? [["Btn2Oyuncu", yM - 40]] : [["Btn2Oyuncu", yM - 140], ["BtnBilgisayar", yM], ["BtnNasil", yM + 119]];   // merkez Y (v7)
  if (!K.kuruldu) {
    K.kuruldu = true; K.t0 = simdi; K.giris = true;
    const logo = ilk("MenuLogo");
    if (logo) { K.logoTaban = 0.375; K.logoPay = 230; try { logo.setScale(K.logoTaban); } catch (e) {} }   // v12b: yeni görsel 1720 px; harf kısmı 1260 px → 472,5
    merkez(logo, LOGO[0], LOGO[1]); if (logo) logo.setZOrder(-8);
    const zm = ilk("MenuZemin"); if (zm && !K.zb) K.zb = [zm.getX(), zm.getY(), zm.getScaleX() || 0.5];
    // v12: atölyeden dönüş → pencereden geri çekilme, düğmeler sonra gelir
    const GG = window.MatrancGecis2;
    if (GG && GG.atolyeden && Date.now() - GG.t < 4000) { window.MatrancGecis2 = null; K.donus = simdi; K.t0 = simdi + 0.85; }
    const u = ilk("Ucurtma"); if (u) u.hide(true);
    // v9: ilk açılış yönlendirmesi KALDIRILDI — ilk açılışta zaten TANITIM KARTI (NASIL OYNANIR?) çıkıyor
  }
  { const n = ilk("BtnNasil"); if (n && n.isHidden() && !TAHTA) n.hide(false);
    if (n && !K.nasilS) { K.nasilS = true; try { n.setScale(1); const w = n.getWidth(); if (w > 0) n.setScale(337 / w); } catch (e) {} } }   // v12: yazılı hap, genişlik 337
  // ---- giriş: logo belirir, düğmeler alttan sırayla gelir (ilk 0,9 sn) ----
  if (K.giris) {
    const g = simdi - K.t0;
    const logo = ilk("MenuLogo"); if (logo) logo.setOpacity(255 * yumusak(g / 0.45));
    DUGME.forEach(([ad, y], i) => {
      const o = ilk(ad); if (!o) return;
      const k = yumusak((g - 0.12 - i * 0.09) / 0.45);
      merkez(o, 360, y + 90 * (1 - k)); o.setOpacity(255 * k);
    });
    if (g > 1.0) {
      K.giris = false;
      DUGME.forEach(([ad, y]) => { const o = ilk(ad); if (o) { merkez(o, 360, y); o.setOpacity(255); } });
    }
  }
  // ---- Profil sol alt köşe, Ayarlar sağ alt köşe: HER KAREDE (eski "sol üste koy" olayını ezer; uzun ekranda da köşede) ----
  const L = S.getLayer("");
  let alt = 1280;
  try { alt = L.getCameraY() + L.getCameraHeight() / 2; } catch (e) {}
  const KY = alt - 78;
  const ka = K.giris ? yumusak((simdi - K.t0 - 0.4) / 0.4) : 1;
  const p = ilk("BtnProfil"), a = ilk("AyarlarBtn");
  // ---- v10: Profil / Ayarlar düğmesi dokununca zıplar, sonra sahne değişir ----
  const zipOlcek = (o, k) => {
    if (!o) return;
    if (K[k + "S"] === undefined) { let w0 = 0; try { o.setScale(1); w0 = o.getWidth(); } catch (e) {} K[k + "S"] = w0 > 0 ? 88 / w0 : (o.getScaleX() || 0.5); K[k + "Z"] = -1; }   // v12e: çap sabit 88 (görsel boyutundan bağımsız)
    let sc = K[k + "S"];
    if (K[k + "Z"] >= 0) { const t = simdi - K[k + "Z"]; if (t < 0.3) sc *= 1 - 0.1 * Math.sin(t / 0.3 * Math.PI); }
    try { o.setScale(sc); } catch (e) {}
  };
  zipOlcek(p, "p"); zipOlcek(a, "a");
  merkez(p, 78, KY); merkez(a, 642, KY);
  if (p) p.setOpacity(255 * ka); if (a) a.setOpacity(255 * ka);
  if (K.zoomBekle && simdi - K.zoomBekle >= 0.25) { K.zoomBekle = 0; K.zoom = simdi; }
  if (K.git && simdi - K.gitT >= 0.3) {
    const hedef = K.git; K.git = null;
    gdjs.evtTools.runtimeScene.replaceScene(S, hedef, false);
    return;
  }
  try {
    const engel = K.giris || K.git || K.zoom || K.zoomBekle || K.donus || document.getElementById("mtrPencere") || document.getElementById("mtrMektup") ||
      (window.MatrancTanitim && window.MatrancTanitim.acik);
    if (!engel && gdjs.evtTools.input.isMouseButtonReleased(S, "Left")) {
      const x = gdjs.evtTools.input.getCursorX(S, "", 0), y = gdjs.evtTools.input.getCursorY(S, "", 0);
      for (const [o, k, hedef] of [[p, "p", "Profil"], [a, "a", "Ayarlar"]]) {
        if (!o || o.isHidden()) continue;
        const dx = x - (o.getX() + o.getWidth() / 2), dy = y - (o.getY() + o.getHeight() / 2);
        if (dx * dx + dy * dy < Math.pow(o.getWidth() * 0.5, 2)) {
          K[k + "Z"] = simdi; K.git = hedef; K.gitT = simdi;
          try { S.getGame().getSoundManager().playSound("dugme.wav", false, 60, 1); } catch (e) {}
          break;
        }
      }
    }
  } catch (e) {}
  // ---- v5: ROBOT ATÖLYESİ düğmesi (alt orta); dokununca hafif zıplar (atölye sahnesi sonra bağlanacak) ----
  const r = ilk("BtnAtolye");
  if (r) {
    if (!K.rKur) { K.rKur = true; try { r.setScale(0.5); r.setZOrder(10); } catch (e) {} K.rZip = -1; }
    let sc = 0.5;
    if (K.rZip >= 0) { const t = simdi - K.rZip; if (t < 0.3) sc = 0.5 * (1 - 0.1 * Math.sin(t / 0.3 * Math.PI)); else K.rZip = -1; }
    try { r.setScale(sc); } catch (e) {}
    merkez(r, 360, KY - 25); r.setOpacity(255 * ka);
    try {
      if (!K.giris && !K.git && !K.zoom && !K.zoomBekle && !K.donus && !document.getElementById("mtrPencere") && !(window.MatrancTanitim && window.MatrancTanitim.acik) && gdjs.evtTools.input.isMouseButtonReleased(S, "Left")) {
        const x = gdjs.evtTools.input.getCursorX(S, "", 0), y = gdjs.evtTools.input.getCursorY(S, "", 0);
        const dx = x - (r.getX() + r.getWidth() / 2), dy = y - (r.getY() + r.getHeight() / 2);
        if (dx * dx + dy * dy < Math.pow(r.getWidth() * 0.45, 2)) {
          K.rZip = simdi; K.zoomBekle = simdi;                    // v12: zıplama bitince kuleye yaklaşma
          try { S.getGame().getSoundManager().playSound("dugme.wav", false, 60, 1); } catch (e) {}
        }
      }
    } catch (e) {}
  }

  // ---- v12g: GECE MENÜSÜ — telefonun saatine göre (19.00–06.00) ----
  {
    const zmG = ilk("MenuZemin");
    if (zmG) {
      const sa = new Date().getHours(), ist = (sa >= 19 || sa < 6) ? 1 : 0;
      try { if (zmG.getAnimation() !== ist) zmG.setAnimation(ist); } catch (e) {}
    }
  }

  // ---- v12: YAKLAŞMA GEÇİŞLERİ (menü ↔ atölye) ----
  {
    const zm = ilk("MenuZemin"), Lz = S.getLayer("");
    const C = [Lz.getCameraX(), Lz.getCameraY()];
    const tek = ["MenuLogo", "Btn2Oyuncu", "BtnBilgisayar", "BtnNasil", "BtnProfil", "AyarlarBtn", "BtnAtolye"];
    const zemKoy = (z) => {
      if (!zm || !K.zb) return;
      const t = (z - 1) / 7, P = PEN;
      const x0 = K.zb[0], y0 = K.zb[1];
      try { zm.setScale(K.zb[2] * z); } catch (e) {}
      zm.setPosition(P[0] + (x0 - P[0]) * z + (C[0] - P[0]) * t, P[1] + (y0 - P[1]) * z + (C[1] - P[1]) * t);
    };
    const flas = (a) => {
      let f = document.getElementById("mtrGecisFlas");
      if (a <= 0) { if (f) f.remove(); return; }
      if (!f) { f = document.createElement("div"); f.id = "mtrGecisFlas";
        f.style.cssText = "position:fixed;inset:0;z-index:99999;pointer-events:none;background:radial-gradient(circle at 50% 50%,#fffdf2 0,#ffe9b8 45%,#ffd27a 100%)";
        document.body.appendChild(f); setTimeout(() => { const e = document.getElementById("mtrGecisFlas"); if (e && !(window.MatrancGecis2 && window.MatrancGecis2.flasTut)) e.remove(); }, 3000); }
      f.style.opacity = String(Math.min(1, a));
    };
    const ease = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * x; };
    if (K.zoom) {                                                   // giderken: kuleye yaklaş
      const g = simdi - K.zoom;
      const sol = Math.max(0, 1 - g / 0.2);
      tek.forEach((ad) => { const o = ilk(ad); if (o) o.setOpacity(255 * sol); });
      const rz = document.getElementById("mtrMenuRozet"); if (rz) rz.remove();
      zemKoy(1 + 7 * ease(g / 0.95));
      flas((g - 0.6) / 0.35);
      if (g >= 1.0) { K.zoom = 0; window.MatrancGecis2 = { menuden: true, t: Date.now(), flasTut: true }; gdjs.evtTools.runtimeScene.replaceScene(S, "Atolye", false); return; }
      return;
    }
    if (K.donus) {                                                  // dönerken: pencereden geri çekil
      const g = simdi - K.donus, k = 1 - Math.pow(1 - Math.min(1, g / 0.85), 3);
      zemKoy(8 - 7 * k);
      flas(1 - g / 0.35);
      if (g >= 0.85) { K.donus = 0; zemKoy(1); flas(0); }
    }
  }
  // ---- v8: MEKTUP ROZETİ (İki Oyuncu düğmesinin sağ üst köşesi) ----
  try {
    const M = window.MatrancCevrimici, b = ilk("Btn2Oyuncu");
    const n = M && M.mektupSayi ? M.mektupSayi() : 0;
    let e = document.getElementById("mtrMenuRozet");
    const tuval = S.getGame().getRenderer().getCanvas ? S.getGame().getRenderer().getCanvas() : null;
    if (!n || !b || b.isHidden() || !tuval || document.getElementById("mtrPencere") || (window.MatrancTanitim && window.MatrancTanitim.acik) || K.zoom || K.donus) { if (e) e.remove(); }   // v12c
    else {
      if (!e) {
        e = document.createElement("div"); e.id = "mtrMenuRozet";
        e.style.cssText = "position:fixed;z-index:9000;pointer-events:none;border-radius:50%;background:#e2464a;color:#fff;border:3px solid #fff;" +
          "display:flex;align-items:center;justify-content:center;font:800 16px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 3px 6px rgba(0,0,0,.3)";
        document.body.appendChild(e);
        if (!window.__mtrMenuRozetKanca) {          // v12h: sahne değişirken zamanlayıcı beklenmez
          window.__mtrMenuRozetKanca = true;
          const sil = () => { const k = document.getElementById("mtrMenuRozet"); if (k) k.remove(); };
          try { gdjs.registerRuntimeSceneUnloadingCallback(sil); } catch (x) {}
          try { gdjs.registerRuntimeScenePausedCallback && gdjs.registerRuntimeScenePausedCallback(sil); } catch (x) {}
        }
        if (!window.__mtrMenuRozetBekci) window.__mtrMenuRozetBekci = setInterval(() => {
          const k = document.getElementById("mtrMenuRozet"); if (k && Date.now() - (k.__son || 0) > 200) k.remove();
        }, 100);
      }
      e.__son = Date.now();
      const r = tuval.getBoundingClientRect(), Lr = S.getLayer("");
      const olc = (r.height / S.getGame().getGameResolutionHeight()) * (Lr.getCameraZoom ? Lr.getCameraZoom() : 1);
      const sol = Lr.getCameraX() - Lr.getCameraWidth() / 2, ustY = Lr.getCameraY() - Lr.getCameraHeight() / 2;
      const x = b.getX() + b.getWidth() - 34, y = b.getY() + 22, d = 38 * olc;
      e.style.width = e.style.height = d + "px"; e.style.fontSize = Math.round(19 * olc) + "px";
      e.style.left = (r.left + (x - sol) * olc - d / 2) + "px"; e.style.top = (r.top + (y - ustY) * olc - d / 2) + "px";
      const t = n > 9 ? "9+" : String(n); if (e.textContent !== t) e.textContent = t;
    }
  } catch (e) {}
  // ---- v12f: AKILLI TAHTA MODU — gereksiz düğmeler gizli ve ekran dışında ----
  if (TAHTA) {
    ["BtnBilgisayar", "BtnNasil", "BtnProfil", "BtnAtolye"].forEach((ad) => { const o = ilk(ad); if (o) { o.hide(true); o.setPosition(-5000, -5000); } });
    const rz = document.getElementById("mtrMenuRozet"); if (rz) rz.remove();
  }
})();

};
gdjs.MenuCode.userFunc0xe56070 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - GÜNLÜK GÖREVLER v4 (KİŞİSEL HIZ: görev ikilisi BİTENE KADAR değişmez (gece yenilenmesi yok); ikisi bitince 24 saat sonra yoldaki sıradaki ikili gelir (bitisMs); SATIN ALMA görevlerinin öğesi SABİT (yoldaki sırasına göre ucuzdan pahalıya, herkeste aynı) — zaten sahip olunan öğede satın alma adımı BAŞARILMIŞ gelir; açılmamış seviye görevi yerine yine yoldaki önceki görev) · v3b (tekrar gelen görevler ilk seferdeki sayılarla — yol bitince baştan, aynı zorlukta; satın alma görevleri yalnız alınmamış öğe varken) · v3 (HER GÜN YENİ İKİLİ — bitmese de yol ilerler; görevler güç VERMEZ, yalnız ikisi bitince +15 dişli) · v2 (GÖREV YOLU: 36 günlük sıralı ikili, robotla birlikte 1. günden başlar; ikili bitince ya da 3 gün sonra sıradaki gün; açılmamış seviye / yapılamayan satın alma → yoldan önceki bir görev; yol bitince baştan, {N} sayıları büyüyerek) · v1 (Robot Atölyesi: her gün 1 kolay + 1 zor görev; 1. bölüm: MATİ maçları, çarpım, pul ve zemin — 61 görev)
// Menu sahnesinde KOŞULSUZ bir JavaScript olayı olarak koyun (her karede çalışır; görev sistemi bir kez kurulur).
// Maç kodu (pul v71) ve Profil (v29) olayları buraya bildirir. Kayıt: localStorage "mtrGorev"; ödüller "mtrRobot"a yazılır.
// Kurallar: oyuncunun açtığı seviyeye uygun havuz · %70 en son açılan seviyeden · iki görev farklı başlıktan ·
//   son 7 günde çıkan görev tekrar gelmez · zor görevin seviyesi kolaydan düşük olmaz ·
//   satın alma görevi: yıldız yetiyorsa, en ucuz sahip olunmayan öğe, pul/zemin sırayla, en fazla 3 günde bir.
// Ödül: kolay +%0,3 güç · zor +%0,5 güç (görev gücü en fazla %60) · ikisi birden biterse +15 dişli. Yenilenme 00:00.
if (!window.MatrancGorev) {
(function () {
  const G = window.MatrancGorev = { surum: "v4" };
  G.sahne = runtimeScene;
  // ---------- kayıt
  G.depo = (k, v) => {
    try {
      const s = gdjs.evtTools.storage; if (!s.elementExistsInJSONFile("matranc", k)) return v;
      const x = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", k, G.sahne, x); return x.getAsNumber();
    } catch (e) { return v; }
  };
  G.oku = () => { try { return JSON.parse(localStorage.getItem("mtrGorev") || "null") || {}; } catch (e) { return {}; } };
  G.yaz = (d) => { try { localStorage.setItem("mtrGorev", JSON.stringify(d)); } catch (e) {} };
  G.robotOku = () => { try { return JSON.parse(localStorage.getItem("mtrRobot") || "null"); } catch (e) { return null; } };
  G.robotYaz = (d) => { try { localStorage.setItem("mtrRobot", JSON.stringify(d)); } catch (e) {} };
  G.gunNo = (t) => { const d = t ? new Date(t) : new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); };

  // ---------- mağaza tabloları (Profil v28 ile aynı)
  G.PAD = ["KIRMIZI", "YEŞİL", "MAVİ", "MOR", "TURKUAZ", "PEMBE", "SİYAH", "İNCİ",
    "ŞEKER", "DAMA", "ZİKZAK", "HEDEF", "LOLİPOP", "KARPUZ", "PORTAKAL", "KALP", "GÜLEN YÜZ",
    "KAR TANESİ", "GÜNEŞ", "PAPATYA", "UĞUR BÖCEĞİ", "NAZAR", "FUTBOL", "BASKETBOL", "TENİS", "VOLEYBOL", "NEON",
    "PANDA", "KEDİ", "BRONZ", "GÜMÜŞ", "ALTIN",
    "ROKET", "KAMUFLAJ", "YARIŞ", "DİNOZOR", "EJDERHA", "NİNJA", "ATEŞ", "MAGMA", "ATOM", "DÜMEN", "DEVRE", "ŞÖVALYE", "ROBOT"];
  G.YID = [0, 8, 10, 32, 11, 16, 17, 33, 21, 34, 27, 20, 19, 35, 15, 22, 25, 23, 18, 36, 37, 38, 39, 40, 41, 42, 26, 43, 44, 31];
  G.PF = {}; for (let s = 1; s < G.YID.length; s++) G.PF[G.YID[s]] = [10, 20, 30, 40, 50, 60][Math.floor(s / 5)];
  G.ZAD = ["DÜZ RENK", "ORMAN", "GECE", "KİRAZ ÇİÇEĞİ", "DEVRE KARTI", "PASTEL", "KATMANLAR", "KONFETİ",
    "FUTBOL", "BASKETBOL", "GÖKKUŞAĞI", "GECE ŞEHRİ", "LAV", "YAPBOZ", "UÇAK", "KARBON"];
  G.ZF = [0, 20, 20, 20, 30, 30, 30, 30, 40, 40, 40, 40, 50, 50, 50, 50];
  G.magaza = () => {
    const p2 = Math.round(G.depo("pulSahip2", 0)), p3 = Math.round(G.depo("pulSahip3", 0)), z3 = Math.round(G.depo("temaSahip3", 1));
    const pulVar = (i) => i >= 32 ? !!(p3 & (1 << (i - 32))) : !!(p2 & (1 << (i - 8)));
    const pul = [], zem = [];
    for (let s = 1; s < G.YID.length; s++) { const i = G.YID[s]; pul.push({ tur: "pul", id: i, ad: G.PAD[i], f: G.PF[i], var: pulVar(i) }); }
    for (let i = 1; i < G.ZAD.length; i++) zem.push({ tur: "zemin", id: i, ad: G.ZAD[i], f: G.ZF[i], var: !!(z3 & (1 << i)) });
    const hepsi = pul.concat(zem);
    return { pul, zem, sahip: hepsi.filter((x) => x.var).length, toplam: hepsi.length, yildiz: Math.round(G.depo("yildiz", 0)) };
  };
  G.asama = () => 1 + (G.depo("galKolay", 0) >= 10) + (G.depo("galOrta", 0) >= 10) + (G.depo("galZor", 0) >= 10);

  // ---------- görevler (1. bölüm) — v2: {N} sayıları turdan tura büyür (p = [1. tur, 2. tur, 3.+ tur])
  const say = (e, f) => (e.say || []).filter(f).length;
  const oyun = (e) => e.t === "mac" && (e.mod === "mati" || e.mod === "cevrimici");
  const mati = (e, s) => e.t === "mac" && e.mod === "mati" && (!s || e.sev === s);
  const kaz = (e) => oyun(e) && e.kaz;
  // Ks: sayaç (N kez) · Ke: eşik (bir kez, koşul N'yi kullanır)
  const Ks = (id, a, t, m, p, f) => ({ id, b: "mac", a, t, m, p, sayac: true, f });
  const Ke = (id, a, t, m, p, f) => ({ id, b: "mac", a, t, m, p, f });
  const Ce = (id, a, t, m, p, f) => ({ id, b: "carpim", a, t, m, p, f: (e, N) => (oyun(e) ? f(e, N) : 0) });
  G.GOREV = [
    Ks("m1", 1, "K", "Kolay seviyede MATİ'yi {N} kez yen.", [1, 2, 2], (e) => mati(e, 1) && e.kaz),
    Ks("m2", 1, "K", "Herhangi bir seviyede {N} maç tamamla.", [2, 3, 3], (e) => mati(e)),
    Ks("m3", 1, "K", "Herhangi bir seviyede {N} maç tamamla.", [3, 4, 5], (e) => mati(e)),
    Ks("m4", 1, "K", "{N} maç kazan.", [1, 2, 2], (e) => kaz(e)),
    Ke("m5", 1, "K", "Bir maçı {N} hamleden kısa sürede kazan.", [20, 18, 16], (e, N) => kaz(e) && e.hamle < N),
    Ks("m6", 1, "K", "Dörtlünü yatay yaparak {KEZ}kazan.", [1, 1, 2], (e) => kaz(e) && e.yon === "yatay"),
    Ks("m7", 1, "K", "Dörtlünü dikey yaparak {KEZ}kazan.", [1, 1, 2], (e) => kaz(e) && e.yon === "dikey"),
    Ks("m8", 1, "Z", "Kolay seviyede MATİ'yi {N} kez yen.", [2, 3, 3], (e) => mati(e, 1) && e.kaz),
    Ks("m9", 1, "Z", "Dörtlünü çapraz yaparak {KEZ}kazan.", [1, 1, 2], (e) => kaz(e) && e.yon === "capraz"),
    Ke("m10", 1, "Z", "Bir maçı {N} hamleden kısa sürede kazan.", [15, 14, 13], (e, N) => kaz(e) && e.hamle < N),
    Ks("m11", 2, "K", "Orta seviyede {N} maç oyna.", [1, 2, 3], (e) => mati(e, 2)),
    Ks("m12", 2, "Z", "Orta seviyede MATİ'yi {N} kez yen.", [1, 2, 3], (e) => mati(e, 2) && e.kaz),
    Ke("m13", 2, "Z", "Arka arkaya {N} galibiyet al.", [2, 3, 3], null),
    Ke("m14", 2, "Z", "Bir maçı {N} hamleden kısa sürede kazan.", [12, 11, 11], (e, N) => kaz(e) && e.hamle < N),
    Ks("m15", 3, "K", "Zor seviyede {N} maç oyna.", [1, 2, 3], (e) => mati(e, 3)),
    Ks("m16", 3, "Z", "Zor seviyede MATİ'yi {N} kez yen.", [1, 2, 2], (e) => mati(e, 3) && e.kaz),
    Ke("m17", 3, "Z", "Arka arkaya {N} galibiyet al.", [3, 3, 4], null),
    Ke("m18", 3, "Z", "Bir maçı {N} hamleden kısa sürede kazan.", [10, 9, 9], (e, N) => kaz(e) && e.hamle < N),
    Ks("m19", 4, "K", "Uzman seviyede {N} maç oyna.", [1, 2, 3], (e) => mati(e, 4)),
    Ks("m20", 4, "Z", "Uzman seviyede MATİ'yi {N} kez yen.", [1, 1, 2], (e) => mati(e, 4) && e.kaz),
    Ks("m21", 4, "Z", "Uzman seviyede dörtlünü çapraz yaparak kazan.", [1, 1, 1], (e) => mati(e, 4) && e.kaz && e.yon === "capraz"),
    Ks("m22", 2, "Z", "MATİ'ye hiç 3'lü dizi yaptırmadan {KEZ}kazan.", [1, 1, 2], (e) => mati(e) && e.kaz && !e.mati3),
    Ks("m23", 3, "Z", "MATİ'ye hiç 3'lü dizi yaptırmadan Zor seviyede kazan.", [1, 1, 1], (e) => mati(e, 3) && e.kaz && !e.mati3),
    Ce("c1", 1, "K", "Bir maçta {N} çift sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x % 2 === 0) >= N),
    Ce("c2", 1, "K", "Bir maçta {N} tek sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x % 2 === 1) >= N),
    Ce("c3", 1, "K", "Bir maçta 20'den küçük {N} sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x < 20) >= N),
    Ce("c4", 1, "K", "Bir maçta 5'in katı olan {N} sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x % 5 === 0) >= N),
    Ce("c5", 1, "K", "Bir maçta 2'nin katı olan {N} sayı al.", [4, 5, 5], (e, N) => say(e, (x) => x % 2 === 0) >= N),
    Ce("c6", 1, "K", "Bir maçta 10'un katı olan {N} sayı al.", [2, 2, 3], (e, N) => say(e, (x) => x % 10 === 0) >= N),
    Ce("c7", 1, "K", "Tahtanın köşelerinden birini al.", [1, 1, 1], (e) => e.kose >= 1),
    Ce("c8", 1, "K", "Bir maçta 81'i ele geçir.", [1, 1, 1], (e) => say(e, (x) => x === 81) >= 1),
    Ce("c9", 1, "Z", "Bir maçta {N} çift sayı al.", [5, 6, 6], (e, N) => say(e, (x) => x % 2 === 0) >= N),
    Ce("c10", 1, "Z", "Bir maçta 3'ün katı olan {N} sayı al.", [4, 5, 5], (e, N) => say(e, (x) => x % 3 === 0) >= N),
    Ce("c11", 2, "K", "Bir maçta 4'ün katı olan {N} sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x % 4 === 0) >= N),
    Ce("c12", 2, "K", "Bir maçta 30'dan büyük {N} sayı al.", [3, 4, 5], (e, N) => say(e, (x) => x > 30) >= N),
    Ce("c13", 2, "Z", "Bir maçta 40'tan büyük {N} sayı al.", [4, 5, 5], (e, N) => say(e, (x) => x > 40) >= N),
    Ce("c14", 2, "Z", "Bir maçta 6'nın katı olan {N} sayı al.", [4, 4, 5], (e, N) => say(e, (x) => x % 6 === 0) >= N),
    Ce("c15", 2, "Z", "Tahtanın 4 köşesinden 2'sini aynı maçta al.", [1, 1, 1], (e) => e.kose >= 2),
    Ce("c16", 3, "K", "Bir maçta 7'nin katı olan {N} sayı al.", [3, 4, 4], (e, N) => say(e, (x) => x % 7 === 0) >= N),
    Ce("c17", 3, "Z", "Bir maçta 7'nin katı olan {N} sayı al.", [4, 5, 5], (e, N) => say(e, (x) => x % 7 === 0) >= N),
    Ce("c18", 3, "Z", "Bir maçta 9'un katı olan {N} sayı al.", [4, 4, 5], (e, N) => say(e, (x) => x % 9 === 0) >= N),
    Ce("c19", 3, "Z", "Bir maçta 8'in katı olan {N} sayı al.", [4, 4, 5], (e, N) => say(e, (x) => x % 8 === 0) >= N),
    Ce("c20", 3, "Z", "Çarpım tablosunu hiç açmadan bir maç kazan.", [1, 1, 1], (e) => e.kaz && !e.ct),
    Ce("c21", 4, "Z", "Bir maçta 50'den büyük {N} sayı al.", [4, 5, 5], (e, N) => say(e, (x) => x > 50) >= N),
    Ce("c22", 4, "Z", "Bir maçta 7'nin ve 8'in katlarından toplam {N} sayı al.", [6, 7, 8], (e, N) => say(e, (x) => x % 7 === 0 || x % 8 === 0) >= N),
    Ce("c23", 4, "Z", "Tahtanın 3 köşesini aynı maçta al.", [1, 1, 1], (e) => e.kose >= 3),
  ];
  // pul ve zemin: tur = satın alma (hedef öğe gerekir), k = sonra kazanma koşulu
  const P = (id, a, t, m, tur, k) => ({ id, b: "magaza", a, t, m, tur, k, p: [k ? 2 : 1] });
  G.GOREV.push(
    { id: "p1", b: "magaza", a: 1, t: "K", m: "Ana pulunu değiştir.", p: [1], sayac: true, f: (e) => e.t === "pulSec" && e.yuva === 0 },
    { id: "p2", b: "magaza", a: 1, t: "K", m: "Yedek pulunu değiştir.", p: [1], sayac: true, f: (e) => e.t === "pulSec" && e.yuva === 1 },
    { id: "p3", b: "magaza", a: 1, t: "K", m: "Oyun zeminini değiştir.", p: [1], sayac: true, f: (e) => e.t === "zeminSec" },
    P("p4", 1, "K", "{AD} pulunu satın al.", "pul", null),
    P("p5", 1, "K", "{AD} zeminini satın al.", "zemin", null),
    P("p6", 1, "Z", "{AD} pulunu satın al ve onunla bir maç kazan.", "pul", (e) => kaz(e)),
    P("p7", 1, "Z", "{AD} zeminini satın al ve üstünde bir maç kazan.", "zemin", (e) => kaz(e)),
    P("p8", 2, "K", "{AD} pulunu satın al ve onunla bir çevrimiçi maç oyna.", "pul", (e) => e.t === "mac" && e.mod === "cevrimici"),
    P("p9", 2, "Z", "{AD} pulunu satın al ve onunla Orta seviyede kazan.", "pul", (e) => mati(e, 2) && e.kaz),
    P("p10", 2, "Z", "{AD} zeminini satın al ve üstünde Orta seviyede kazan.", "zemin", (e) => mati(e, 2) && e.kaz),
    P("p11", 3, "Z", "{AD} pulunu satın al ve onunla Zor seviyede kazan.", "pul", (e) => mati(e, 3) && e.kaz),
    P("p12", 3, "Z", "{AD} zeminini satın al ve üstünde Zor seviyede kazan.", "zemin", (e) => mati(e, 3) && e.kaz),
    P("p13", 4, "Z", "{AD} pulunu satın al ve onunla Uzman seviyede kazan.", "pul", (e) => mati(e, 4) && e.kaz),
    P("p14", 4, "Z", "{AD} zeminini satın al ve üstünde Uzman seviyede kazan.", "zemin", (e) => mati(e, 4) && e.kaz),
    { id: "p15", b: "magaza", a: 2, t: "K", m: "Yeni aldığın {AD} pulla bir çevrimiçi maç kazan.", p: [1], sonPul: true, f: null }
  );
  G.bul = (id) => G.GOREV.find((x) => x.id === id);
  G.N = (g, tur) => g.p[0];   // v3b: tekrar gelen görev ilk seferdeki gibi (sayılar büyümez; kullanıcı: "hiç yapmamış gibi")

  // ---------- GÖREV YOLU (36 gün, sıralı; bitince baştan, {N} sayıları büyüyerek)
  G.YOL = [["c1", "m8"], ["p4", "c10"], ["m6", "c9"], ["c4", "m9"], ["m7", "p7"], ["c2", "m10"], ["c3", "m12"], ["m2", "p6"], ["c5", "m14"], ["m1", "c13"], ["p2", "m13"], ["m3", "c14"], ["c6", "m22"], ["m4", "p10"], ["m5", "c15"], ["c8", "m16"], ["m11", "p9"], ["c11", "m17"], ["p3", "c17"], ["c12", "m18"], ["p5", "c18"], ["m15", "c19"], ["c16", "m23"], ["p8", "c20"], ["p1", "m20"], ["m19", "c21"], ["m4", "p12"], ["p15", "c22"], ["c7", "m21"], ["m5", "p11"], ["m6", "c23"], ["c4", "m22"], ["m3", "p14"], ["c5", "m13"], ["m2", "c14"], ["c6", "p13"]];
  G.sec = (d) => {
    const gun = G.gunNo(), as = G.asama(), mg = G.magaza();
    if (d.yi === undefined) { d.yi = 0; d.tur = 0; d.bas = gun; }
    else {
      const bitti = d.g && d.g.length && d.g.every((r) => r.bitti);
      // v3: her gün yeni ikili (bitmese de yol ilerler)
      d.yi++; d.bas = gun; if (d.yi >= G.YOL.length) { d.yi = 0; d.tur = (d.tur || 0) + 1; }
    }
    const sonPul = d.sonPul >= 0 && mg.pul.some((x) => x.id === d.sonPul && x.var) ? d.sonPul : -1;
    // v4: satın alma öğesi SABİT — yoldaki aynı türden kaçıncı satın alma göreviyse, fiyat sırasındaki o öğe (tur arttıkça devam eder)
    const hedefBul = (tur, yi) => {
      const l = (tur === "pul" ? mg.pul : mg.zem).slice().sort((a, b) => a.f - b.f);
      if (!l.length) return null;
      const turu = (k) => { const ids = G.YOL[k]; return ids.map(G.bul).filter((g) => g && g.tur === tur).length; };
      let once = 0, hepsi = 0;
      for (let k = 0; k < G.YOL.length; k++) { const n = turu(k); hepsi += n; if (k < yi) once += n; }
      return l[((d.tur || 0) * hepsi + once) % l.length];
    };
    const yapilir = (g) => !!g && g.a <= as && (!g.sonPul || sonPul >= 0);
    const yedek = (tip, haric, enAz) => {          // yerine: yolda daha önce geçen, yapılabilen görev (en yakın olan)
      const top = d.yi + (d.tur ? G.YOL.length : 0);
      for (let k = top - 1; k >= 0; k--) {
        const g = G.bul(G.YOL[k % G.YOL.length][tip === "K" ? 0 : 1]);
        if (g && !g.tur && !g.sonPul && g.a <= as && g.a >= enAz && g.b !== haric) return g;
      }
      return G.GOREV.find((g) => g.t === tip && !g.tur && !g.sonPul && g.a <= as && g.b !== haric) || G.bul(tip === "K" ? "c1" : "m8");
    };
    const [kid, zid] = G.YOL[d.yi];
    let k = G.bul(kid), z = G.bul(zid);
    if (!yapilir(k)) k = yedek("K", yapilir(z) ? z.b : null, 1);
    if (!yapilir(z) || z.b === k.b) z = yedek("Z", k.b, Math.min(k.a, as));
    const kayit = (g) => {
      const N = G.N(g, d.tur);
      const r = { id: g.id, i: 0, n: (g.sayac || g.tur || g.id === "m13" || g.id === "m17") ? N : 1, N: N, bitti: false };
      if (g.tur) {
        const h = hedefBul(g.tur, d.yi); r.hedef = h.id; r.ad = h.ad;
        if (h.var) { r.i = 1; r.sahip = true; if (r.i >= r.n) r.bitti = true; }   // v4: zaten sahip → satın alma adımı başarılmış
      }
      if (g.sonPul) { r.hedef = sonPul; r.ad = G.PAD[sonPul]; }
      return r;
    };
    d.gun = gun; d.g = [kayit(k), kayit(z)]; d.seri = 0; d.odul = false; d.bitisMs = 0; d.basMs = Date.now();
    if (d.g.every((r) => r.bitti)) {                     // v4: ikisi de baştan başarılmışsa ödül hemen, sayaç başlar
      d.odul = true; d.bitisMs = Date.now();
      const R = G.robotOku(); if (R) { R.disli = (R.disli || 0) + 15; G.robotYaz(R); }
    }
    G.yaz(d);
    return d;
  };
  G.BEKLEME_MS = 24 * 3600000;   // v4: ikili bitince yenisine kadar
  G.bugun = () => {
    if (!G.robotOku()) return null;                       // görevler robot seçilince başlar
    let d = G.oku();
    if (d.v === 2 && d.g) {                               // v4 geçişi: bugünkü ikili korunur; bitmişse sayaç şimdi başlar
      d.v = 3; if (d.g.every((r) => r.bitti)) d.bitisMs = d.bitisMs || Date.now();
      G.yaz(d);
    }
    if (d.v !== 3) d = { v: 3, sonPul: d.sonPul };
    if (!d.g || (d.bitisMs && Date.now() - d.bitisMs >= G.BEKLEME_MS)) d = G.sec(d);
    return d;
  };
  G.kalanMs = () => { const d = G.oku(); return d && d.bitisMs ? Math.max(0, G.BEKLEME_MS - (Date.now() - d.bitisMs)) : 0; };
  G.metin = (r) => { const g = G.bul(r.id); return g ? g.m.replace("{AD}", r.ad || "").replace("{KEZ}", r.N > 1 ? r.N + " kez " : "").replace(/^\{N\} maç/, r.N === 1 ? "Bir maç" : r.N + " maç").replace("{N}", r.N) : ""; };

  // ---------- olaylar
  G.olay = (e, sahne) => {
    try {
      if (sahne) G.sahne = sahne;
      if (e.t === "satin" && e.tur === "pul") { const d0 = G.oku(); d0.sonPul = e.id; G.yaz(d0); }
      const d = G.bugun(); if (!d) return;
      if (e.t === "mac" && e.mod === "mati") d.seri = e.kaz ? (d.seri || 0) + 1 : 0;
      let degisti = false;
      for (const r of d.g) {
        if (r.bitti) continue;
        const g = G.bul(r.id); if (!g) continue;
        let yeni = r.i;
        if (g.id === "m13" || g.id === "m17") yeni = Math.max(r.i, d.seri || 0);
        else if (g.tur) {
          if (r.i === 0 && e.t === "satin" && e.tur === g.tur && e.id === r.hedef) yeni = 1;
          else if (r.i === 1 && g.k && e.t === "mac" && (g.tur === "pul" ? e.ana === r.hedef : e.zemin === r.hedef) && g.k(e)) yeni = 2;
        } else if (g.sonPul) {
          if (kaz(e) && e.mod === "cevrimici" && e.ana === r.hedef) yeni = 1;
        } else if (g.f) yeni = r.i + (g.f(e, r.N) ? 1 : 0);
        yeni = Math.min(r.n, yeni);
        if (yeni !== r.i) {
          r.i = yeni; degisti = true;
          if (r.i >= r.n) { r.bitti = true; G.odul(d, g); }
        }
      }
      if (degisti || e.t === "mac") G.yaz(d);
    } catch (x) { console.error("MATRANC görev hatası", x); }
  };
  G.odul = (d, g) => {
    const R = G.robotOku(); if (!R) return;
    // v3: görev tek başına güç vermez; güç yalnız ekipmandan (atölye v7). İkisi bitince +15 dişli.
    let yazi = "Görev tamamlandı! Diğerini de bitir: +15 dişli";
    if (!d.odul && d.g.length === 2 && d.g.every((r) => r.bitti)) { d.odul = true; d.bitisMs = Date.now(); R.disli = (R.disli || 0) + 15; yazi = "İki görev de tamam! +15 dişli · yenileri 24 saat sonra"; }   // v4
    G.robotYaz(R);
    G.bildir(yazi);
  };
  G.bildir = (t) => {
    try {
      let e = document.getElementById("mtrGorevBildir");
      if (e) e.remove();
      e = document.createElement("div"); e.id = "mtrGorevBildir"; e.textContent = "🤖 " + t;
      e.style.cssText = "position:fixed;left:50%;top:14%;transform:translate(-50%,-20px);z-index:2147482000;pointer-events:none;" +
        "background:linear-gradient(#ffe36a,#ffc21f);color:#1e2a5a;font:800 15px Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;max-width:88vw;text-align:center;line-height:1.3;" +
        "padding:12px 22px;border-radius:999px;box-shadow:0 5px 0 #d98400,0 10px 20px rgba(0,0,0,.3);opacity:0;transition:all .3s";
      document.body.appendChild(e);
      requestAnimationFrame(() => { e.style.opacity = "1"; e.style.transform = "translate(-50%,0)"; });
      setTimeout(() => { e.style.opacity = "0"; setTimeout(() => e.remove(), 400); }, 2800);
    } catch (x) {}
  };
})();
}

};
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0x10d2be8(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AyarlarBtn"), gdjs.MenuCode.GDAyarlarBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Baslik"), gdjs.MenuCode.GDBaslikObjects1);
gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnNasil"), gdjs.MenuCode.GDBtnNasilObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnProfil"), gdjs.MenuCode.GDBtnProfilObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuZemin"), gdjs.MenuCode.GDMenuZeminObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ucurtma"), gdjs.MenuCode.GDUcurtmaObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenuZeminObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuZeminObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnNasilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnNasilObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuZeminObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuZeminObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].setX(127);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].setX(127);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnNasilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnNasilObjects1[i].setX(132);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuZeminObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuZeminObjects1[i].setY(-200);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].setY(582);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].setY(728);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnNasilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnNasilObjects1[i].setY(888);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenuZeminObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuZeminObjects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnNasilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnNasilObjects1[i].setZOrder(10);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].returnVariable(gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getScaleY()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].setZOrder(500);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBaslikObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBaslikObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBaslikObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBaslikObjects1[i].setX(360 - (gdjs.MenuCode.GDBaslikObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBaslikObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBaslikObjects1[i].setY((( gdjs.MenuCode.GDBtn2OyuncuObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtn2OyuncuObjects1[0].getCenterYInScene()) - 460);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBaslikObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBaslikObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].returnVariable(gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getScaleY()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnProfilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnProfilObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDUcurtmaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUcurtmaObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnProfilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnProfilObjects1[i].setX(230);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnProfilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnProfilObjects1[i].setY(1136);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].setX(410);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].setY(1136);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDUcurtmaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUcurtmaObjects1[i].setX(454);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDUcurtmaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUcurtmaObjects1[i].setY(-10.5);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnProfilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnProfilObjects1[i].getBehavior("Scale").setScale(gdjs.MenuCode.GDBtnProfilObjects1[i].getBehavior("Scale").getScale() * (1.15));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].getBehavior("Scale").setScale(gdjs.MenuCode.GDAyarlarBtnObjects1[i].getBehavior("Scale").getScale() * (1.15));
}
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtn2OyuncuObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").removeTween("kapan");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").addObjectScaleYTween2("kapan", 0.01, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.15, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.MenuCode.GDBtn2OyuncuObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtn2OyuncuObjects1[0].getCenterXInScene()));
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= (( gdjs.MenuCode.GDBtn2OyuncuObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtn2OyuncuObjects1[0].getCenterXInScene()));
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cevrimici", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").removeTween("kapan");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").addObjectScaleYTween2("kapan", 0.01, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()) - (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getWidth()) * 0.235);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()) - (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getWidth()) * 0.235);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 10);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) <= (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()) + (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getWidth()) * 0.235);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() >= 10);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(3);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getCenterXInScene()) + (( gdjs.MenuCode.GDBtnBilgisayarObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDBtnBilgisayarObjects1[0].getWidth()) * 0.235);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() >= 10);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(4);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNasil"), gdjs.MenuCode.GDBtnNasilObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnNasilObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NasilOynanir", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnBilgisayarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").hasFinished("kapan") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtnBilgisayarObjects1[k] = gdjs.MenuCode.GDBtnBilgisayarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").removeTween("acil");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").addObjectScaleYTween2("acil", (gdjs.RuntimeObject.getVariableNumber(gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getVariables().getFromIndex(0))), runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtnBilgisayarObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").removeTween("kapan");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").addObjectScaleYTween2("kapan", 0.01, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnBilgisayarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").hasFinished("kapan") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtnBilgisayarObjects1[k] = gdjs.MenuCode.GDBtnBilgisayarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").removeTween("acil");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Tween").addObjectScaleYTween2("acil", (gdjs.RuntimeObject.getVariableNumber(gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getVariables().getFromIndex(0))), runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtn2OyuncuObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").hasFinished("kapan") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtn2OyuncuObjects1[k] = gdjs.MenuCode.GDBtn2OyuncuObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtn2OyuncuObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtn2OyuncuObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").removeTween("acil");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").addObjectScaleYTween2("acil", (gdjs.RuntimeObject.getVariableNumber(gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getVariables().getFromIndex(0))), runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBtn2OyuncuObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtn2OyuncuObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").removeTween("kapan");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").addObjectScaleYTween2("kapan", 0.01, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn2Oyuncu"), gdjs.MenuCode.GDBtn2OyuncuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtn2OyuncuObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").hasFinished("kapan") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtn2OyuncuObjects1[k] = gdjs.MenuCode.GDBtn2OyuncuObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtn2OyuncuObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtn2OyuncuObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").removeTween("acil");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBtn2OyuncuObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getBehavior("Tween").addObjectScaleYTween2("acil", (gdjs.RuntimeObject.getVariableNumber(gdjs.MenuCode.GDBtn2OyuncuObjects1[i].getVariables().getFromIndex(0))), runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.15, false, true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1 == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.firestore.getDocument("deneme", "deneme", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(0));
}
{gdjs.deviceVibration.startVibration(100);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ucurtma"), gdjs.MenuCode.GDUcurtmaObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDUcurtmaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDUcurtmaObjects1[i].setAngle(3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.3));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnBilgisayarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtnBilgisayarObjects1[k] = gdjs.MenuCode.GDBtnBilgisayarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < 10);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnBilgisayarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtnBilgisayarObjects1[k] = gdjs.MenuCode.GDBtnBilgisayarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnBilgisayar"), gdjs.MenuCode.GDBtnBilgisayarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBtnBilgisayarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").getAnimationIndex() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBtnBilgisayarObjects1[k] = gdjs.MenuCode.GDBtnBilgisayarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() < 10);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBtnBilgisayarObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDBtnBilgisayarObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnBilgisayarObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AyarlarBtn"), gdjs.MenuCode.GDAyarlarBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnProfil"), gdjs.MenuCode.GDBtnProfilObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDBtnProfilObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBtnProfilObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 + 14 + (gdjs.MenuCode.GDBtnProfilObjects1[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + 64 + (gdjs.MenuCode.GDBtnProfilObjects1[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDAyarlarBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAyarlarBtnObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 + 14 + (gdjs.MenuCode.GDAyarlarBtnObjects1[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + 180 + (gdjs.MenuCode.GDAyarlarBtnObjects1[i].getHeight()) / 2);
}
}
}

}


{


gdjs.MenuCode.userFunc0x11f4ce0(runtimeScene);

}


{


gdjs.MenuCode.userFunc0xd0f978(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Share__IsSharingSupported.func(runtimeScene, null);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(2);
}
}

}


{


gdjs.MenuCode.userFunc0xeef7e0(runtimeScene);

}


{


gdjs.MenuCode.userFunc0xe56070(runtimeScene);

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenuZeminObjects1.length = 0;
gdjs.MenuCode.GDMenuZeminObjects2.length = 0;
gdjs.MenuCode.GDMenuZeminObjects3.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects1.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects2.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects3.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects2.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects3.length = 0;
gdjs.MenuCode.GDBtnNasilObjects1.length = 0;
gdjs.MenuCode.GDBtnNasilObjects2.length = 0;
gdjs.MenuCode.GDBtnNasilObjects3.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects1.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects2.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects3.length = 0;
gdjs.MenuCode.GDBaslikObjects1.length = 0;
gdjs.MenuCode.GDBaslikObjects2.length = 0;
gdjs.MenuCode.GDBaslikObjects3.length = 0;
gdjs.MenuCode.GDBtnProfilObjects1.length = 0;
gdjs.MenuCode.GDBtnProfilObjects2.length = 0;
gdjs.MenuCode.GDBtnProfilObjects3.length = 0;
gdjs.MenuCode.GDUcurtmaObjects1.length = 0;
gdjs.MenuCode.GDUcurtmaObjects2.length = 0;
gdjs.MenuCode.GDUcurtmaObjects3.length = 0;
gdjs.MenuCode.GDMenuLogoObjects1.length = 0;
gdjs.MenuCode.GDMenuLogoObjects2.length = 0;
gdjs.MenuCode.GDMenuLogoObjects3.length = 0;
gdjs.MenuCode.GDTanitimKartObjects1.length = 0;
gdjs.MenuCode.GDTanitimKartObjects2.length = 0;
gdjs.MenuCode.GDTanitimKartObjects3.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects1.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects2.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects3.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects1.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects2.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects3.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects1.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects2.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects3.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects1.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects2.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDMenuZeminObjects1.length = 0;
gdjs.MenuCode.GDMenuZeminObjects2.length = 0;
gdjs.MenuCode.GDMenuZeminObjects3.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects1.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects2.length = 0;
gdjs.MenuCode.GDBtn2OyuncuObjects3.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects1.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects2.length = 0;
gdjs.MenuCode.GDBtnBilgisayarObjects3.length = 0;
gdjs.MenuCode.GDBtnNasilObjects1.length = 0;
gdjs.MenuCode.GDBtnNasilObjects2.length = 0;
gdjs.MenuCode.GDBtnNasilObjects3.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects1.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects2.length = 0;
gdjs.MenuCode.GDAyarlarBtnObjects3.length = 0;
gdjs.MenuCode.GDBaslikObjects1.length = 0;
gdjs.MenuCode.GDBaslikObjects2.length = 0;
gdjs.MenuCode.GDBaslikObjects3.length = 0;
gdjs.MenuCode.GDBtnProfilObjects1.length = 0;
gdjs.MenuCode.GDBtnProfilObjects2.length = 0;
gdjs.MenuCode.GDBtnProfilObjects3.length = 0;
gdjs.MenuCode.GDUcurtmaObjects1.length = 0;
gdjs.MenuCode.GDUcurtmaObjects2.length = 0;
gdjs.MenuCode.GDUcurtmaObjects3.length = 0;
gdjs.MenuCode.GDMenuLogoObjects1.length = 0;
gdjs.MenuCode.GDMenuLogoObjects2.length = 0;
gdjs.MenuCode.GDMenuLogoObjects3.length = 0;
gdjs.MenuCode.GDTanitimKartObjects1.length = 0;
gdjs.MenuCode.GDTanitimKartObjects2.length = 0;
gdjs.MenuCode.GDTanitimKartObjects3.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects1.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects2.length = 0;
gdjs.MenuCode.GDTanitimKarartmaObjects3.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects1.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects2.length = 0;
gdjs.MenuCode.GDBtnAtolyeObjects3.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects1.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects2.length = 0;
gdjs.MenuCode.GDPanelAvatarObjects3.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects1.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects2.length = 0;
gdjs.MenuCode.GDRutbeRozetObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
