gdjs.AcilisCode = {};
gdjs.AcilisCode.localVariables = [];
gdjs.AcilisCode.idToCallbackMap = new Map();
gdjs.AcilisCode.GDAcZeminObjects1= [];
gdjs.AcilisCode.GDAcZeminObjects2= [];
gdjs.AcilisCode.GDAcNetObjects1= [];
gdjs.AcilisCode.GDAcNetObjects2= [];
gdjs.AcilisCode.GDAcLogoObjects1= [];
gdjs.AcilisCode.GDAcLogoObjects2= [];
gdjs.AcilisCode.GDAcMatiObjects1= [];
gdjs.AcilisCode.GDAcMatiObjects2= [];
gdjs.AcilisCode.GDAcUcakObjects1= [];
gdjs.AcilisCode.GDAcUcakObjects2= [];
gdjs.AcilisCode.GDAcYaziObjects1= [];
gdjs.AcilisCode.GDAcYaziObjects2= [];
gdjs.AcilisCode.GDAcHarfObjects1= [];
gdjs.AcilisCode.GDAcHarfObjects2= [];
gdjs.AcilisCode.GDAcOdaObjects1= [];
gdjs.AcilisCode.GDAcOdaObjects2= [];
gdjs.AcilisCode.GDAcKoltukObjects1= [];
gdjs.AcilisCode.GDAcKoltukObjects2= [];
gdjs.AcilisCode.GDAcBaslaObjects1= [];
gdjs.AcilisCode.GDAcBaslaObjects2= [];
gdjs.AcilisCode.GDAcGozObjects1= [];
gdjs.AcilisCode.GDAcGozObjects2= [];
gdjs.AcilisCode.GDPanelAvatarObjects1= [];
gdjs.AcilisCode.GDPanelAvatarObjects2= [];
gdjs.AcilisCode.GDRutbeRozetObjects1= [];
gdjs.AcilisCode.GDRutbeRozetObjects2= [];


gdjs.AcilisCode.userFunc0x10d2be8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - AÇILIŞ SAHNESİ v10i (GECE: AcOda animasyon 1 = tavan penceresi yıldızlı gökyüzü (matranc_ac_oda_gece_v3.webp)) · v10h (BİLDİRİME DOKUNARAK AÇILINCA açılış atlanır, doğrudan menü → mektup maçı (çevrim içi 10.13); bildirim dinleyicisi burada erkenden kurulur; GECE (19.00–06.00) manzara AcNet animasyon 1 = gece şehri (varsa); ONIZLEMEDE_TAHTA = false) · v10g (tahta modunda açılış atlanır, doğrudan menü) · v10f (tahta modunda açılışın iki yanı da bulanık şehirle dolar) · v10e (BAŞLA: elips disk düğme matranc_ac_basla_v3.png, ışıklı halkanın ortası 360/1170) · v10d (MATİ ve koltuk daha yavaş ve yumuşak silinir: MATİ 1,1 sn, koltuk 1 sn, üst üste binerek; yaklaşma ardından başlar) · v10c (BAŞLA tam ortada) · v10b (MATİ beklerken göz kırpar — AcGoz; odanın üst/alt uzantısı yenilendi: AcOda kaynağı matranc_ac_oda_v2.webp) · v10 (YENİ ODA: MATİ masada, oyuncu BAŞLA'ya basar; MATİ ve koltuk yavaşça silinir, kamera pencerenin ortasına yaklaşır, pencerenin ardındaki manzara menünün zemini olur — katmanlar: AcNet manzara, AcKoltuk, AcOda (cam saydam), AcMati, AcLogo + AcHarf, AcBasla) · v9b (kağıt uçak yok) · v9 · v8 · v7 (HIZLI DÖNÜŞ: ÇAĞIR'dan sonraki 10 dk içinde animasyon atlanır) · v6 · v5 · v3 · v2 · v1
// "Acilis" sahnesinin olaylarına KOŞULSUZ tek bir JavaScript olayı olarak koyun (müzik kodu bunun ALTINDA kalsın).
// Gerekli nesneler (nesne listesinde olsun, sahneye YERLEŞTİRMEYİN; kod kendisi oluşturur):
//   AcNet    (matranc_menu_zemin_v28.jpg kaynağı → içeriği matranc_menu_zemin_v32.jpg — menüyle aynı manzara)
//   AcOda    (YENİ: matranc_ac_oda_v1.webp)      AcKoltuk (YENİ: matranc_ac_koltuk_v1.webp)
//   AcMati   (kaynağı → matranc_ac_mati_v5.webp)  AcBasla  (YENİ: matranc_ac_basla_v1.webp)
//   AcGoz    (YENİ: matranc_ac_mati_goz_v1.png)
//   AcLogo   (matranc_ac_logo.png)                AcHarf   (20 kare: matranc_ac_harf_00 … 19)
//   AcZemin ve AcUcak artık kullanılmıyor (silinebilir).
// ---- v10f: AKILLI TAHTA MODU (Tanıtım kartı v3g ile AYNI blok; ONIZLEMEDE_TAHTA değeri İKİ YERDE de aynı olmalı) ----
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
if (window.MatrancTahta) { gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false); }   // v10g: tahtada açılış yok, doğrudan menü
else (function () {
  const S = runtimeScene;
  let A = window.MatrancAcilis;
  if (!A || A.sahne !== S) A = window.MatrancAcilis = { sahne: S, kuruldu: false };
  // v10h: bildirim dinleyicisi (soğuk açılışta olay kaçmasın diye en başta); hedef localStorage "mtrBildirimHedef"
  if (!window.__mtrBildirimDinle) {
    try {
      const C = window.Capacitor, FM = C && C.isNativePlatform && C.isNativePlatform() && C.Plugins && C.Plugins.FirebaseMessaging;
      if (FM && FM.addListener) {
        window.__mtrBildirimDinle = true;
        FM.addListener("notificationActionPerformed", (e) => {
          try {
            const d = (e && e.notification && e.notification.data) || {};
            localStorage.setItem("mtrBildirimHedef", JSON.stringify({ tur: d.tur || "", oyunId: d.oyunId || "", davetId: d.davetId || "", t: Date.now() }));
          } catch (x) {}
        });
      }
    } catch (e) {}
  }
  const bildirimle = () => {
    try { const h = JSON.parse(localStorage.getItem("mtrBildirimHedef") || "null"); return !!(h && h.t && Date.now() - h.t < 3 * 60 * 1000); } catch (e) { return false; }
  };
  if (!A.gecti && !A.tb && bildirimle()) { A.gecti = true; A.kuruldu = false; gdjs.evtTools.runtimeScene.replaceScene(S, "Menu", false); return; }
  // v7: hızlı dönüş
  if (A.hizli === undefined) {
    A.hizli = false;
    try { const z = Number(localStorage.getItem("mtrCagriDonus") || 0); A.hizli = z > 0 && Date.now() - z < 10 * 60 * 1000; } catch (e) {}
  }
  if (A.hizli) { if (!A.gecti) { A.gecti = true; gdjs.evtTools.runtimeScene.replaceScene(S, "Menu", false); } return; }
  const simdi = () => (window.performance ? performance.now() : Date.now()) / 1000;
  const L = S.getLayer("");
  const yeni = (ad, z) => { try { const o = S.createObject(ad); if (o) o.setZOrder(z); return o; } catch (e) { return null; } };
  const olcek = (o, sx, sy) => { if (!o) return; try { o.setScaleX(sx); o.setScaleY(sy); } catch (e) { try { o.setScale(sx); } catch (e2) {} } };
  const saydam = (o, a) => { if (o) o.setOpacity(Math.max(0, Math.min(255, 255 * a))); };
  const yumusak = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const ara = (t, a, b) => yumusak((t - a) / (b - a));

  // ---- yerleşim (dünya koordinatı; kamera 720 genişlik, oda 0/−200'de) ----
  const F = [362, 553.5], C = [360, 640], ZMAX = 3.4;         // F: pencerenin ortası, C: menü kamerasının ortası
  const KOL = [203, 605.5], MAT = [238, 484.5];               // koltuk ve MATİ katmanlarının sol üst köşesi
  const LOGO = [368.66, 324.84], LSX = 0.4205, LSY = 0.3919;  // logo merkezi ve ölçeği (zemindeki logonun tam üstü)
  const BAS = [360, 1170], GOZ = [319.83, 594.75];        // v10e: BAŞLA ışıklı halkanın ortasında
  const HARF = 20, ADIM = 0.1, BAS0 = 0.15, YUK = 2.3;

  if (!A.kuruldu) {
    A.kuruldu = true;
    try { L.setCameraZoom(2); L.setCameraX(360); L.setCameraY(640); } catch (e) {}
    A.manzara = yeni("AcNet", 0);
    // v10h: gece manzarası (menüyle aynı kural)
    A.gece = (() => { try { const sa = new Date().getHours(); return sa >= 19 || sa < 6; } catch (e) { return false; } })();
    try { if (A.gece && A.manzara) A.manzara.setAnimation(1); } catch (e) {}
    A.koltuk = yeni("AcKoltuk", 1);
    A.oda = yeni("AcOda", 2);
    try { if (A.gece && A.oda) A.oda.setAnimation(1); } catch (e) {}   // v10i: tavan penceresi gece
    A.mati = yeni("AcMati", 3); saydam(A.mati, 0);
    A.goz = yeni("AcGoz", 4); if (A.goz) A.goz.hide(true);
    A.kirp = 1.3; A.kapanis = 0; A.cift = false;
    A.logo = yeni("AcLogo", 5);
    A.harf = [];
    for (let k = 0; k < HARF; k++) {
      const h = yeni("AcHarf", 6);
      if (h) { try { h.setAnimationFrame(k); h.pauseAnimation(); } catch (e) {} saydam(h, 0); }
      A.harf.push(h);
    }
    A.basla = yeni("AcBasla", 10); saydam(A.basla, 0);
    A.t0 = simdi(); A.tb = 0;
  }
  const ty = simdi() - A.t0;
  const g = A.tb ? simdi() - A.tb : -1;                       // BAŞLA'dan sonra geçen süre

  // ---- kamera yolu: z büyüdükçe oda F'nin çevresinde büyür, F ekranın ortasına (C) kayar ----
  const z = g < 0 ? 1 : 1 + (ZMAX - 1) * ara(g, 1.25, 2.65);
  const t = (z - 1) / (ZMAX - 1);
  const T = (x, y) => [F[0] + (x - F[0]) * z + (C[0] - F[0]) * t, F[1] + (y - F[1]) * z + (C[1] - F[1]) * t];

  // manzara: ölçek hep 0.5 (ekranı her an kaplar), merkezi F → C (hafif derinlik)
  if (A.manzara) { olcek(A.manzara, 0.5, 0.5); A.manzara.setPosition(F[0] + (C[0] - F[0]) * t - 360, F[1] + (C[1] - F[1]) * t - 841); }
  const koy = (o, p) => { if (!o) return; const q = T(p[0], p[1]); olcek(o, 0.5 * z, 0.5 * z); o.setPosition(q[0], q[1]); };
  koy(A.oda, [0, -200]); koy(A.koltuk, KOL); koy(A.mati, MAT); koy(A.goz, GOZ);
  // ---- MATİ göz kırpar (2,5–5 sn arayla, bazen iki kez); BAŞLA'dan sonra kırpmaz ----
  if (A.goz) {
    if (g < 0 && !A.kapanis && ty >= A.kirp) A.kapanis = ty;
    let kapali = false;
    if (A.kapanis) {
      const d = ty - A.kapanis; kapali = d >= 0 && d < 0.13;
      if (d >= 0.13) {
        if (!A.cift && Math.random() < 0.25) { A.cift = true; A.kapanis = ty + 0.12; }
        else { A.cift = false; A.kapanis = 0; A.kirp = ty + 2.5 + Math.random() * 2.5; }
      }
    }
    A.goz.hide(!(kapali && g < 0));
    saydam(A.goz, Math.min(1, ty / 0.4));
  }

  // ---- logo ve harfler ----
  if (A.logo) {
    const q = T(LOGO[0], LOGO[1]), sx = LSX * z, sy = LSY * z;
    olcek(A.logo, sx, sy);
    const lx = q[0] - 1260 * sx / 2, ly = q[1] - 534 * sy / 2;
    A.logo.setPosition(lx, ly);
    const la = g < 0 ? 1 : 1 - ara(g, 2.35, 2.65);           // logo odayla birlikte uzaklaşır (pencerenin önündeki kısmı yalnız bu nesnede)
    saydam(A.logo, la);
    const geri = g < 0 ? 0 : ara(g, 0, 0.45);                  // BAŞLA'dan sonra harfler beyaza döner
    for (let k = 0; k < A.harf.length; k++) {
      const h = A.harf[k]; if (!h) continue;
      olcek(h, sx, sy); h.setPosition(lx + 220 * sx, ly + 292 * sy);
      const o = Math.max(0, Math.min(1, (ty - BAS0 - k * ADIM) / 0.05));
      saydam(h, o * (1 - geri) * la);
    }
  }
  // ---- MATİ belirir; BAŞLA'dan sonra MATİ, sonra koltuk silinir ----
  if (A.mati) saydam(A.mati, Math.min(1, ty / 0.4) * (g < 0 ? 1 : 1 - ara(g, 0.05, 1.15)));
  if (A.koltuk) saydam(A.koltuk, g < 0 ? 1 : 1 - ara(g, 0.55, 1.55));
  if (A.oda) saydam(A.oda, g < 0 ? 1 : 1 - ara(g, 2.35, 2.65));

  // ---- BAŞLA: harfler dolunca belirir, nabız gibi atar; dokununca küçülüp kaybolur ----
  if (A.basla) {
    let s = 0.5, a = 0;
    if (g < 0) { a = ara(ty, YUK, YUK + 0.35); s = 0.5 * (0.85 + 0.15 * a) * (1 + 0.035 * Math.sin(ty * 4.2)); }
    else { const k = ara(g, 0, 0.22); s = 0.5 * (1.04 - 0.9 * k); a = 1 - k; }
    olcek(A.basla, s, s);
    A.basla.setPosition(BAS[0] - A.basla.getWidth() / 2, BAS[1] - A.basla.getHeight() / 2);
    saydam(A.basla, a);
  }
  // ---- dokunuş (BAŞLA göründükten sonra ekranın herhangi bir yeri) ----
  let dokundu = false;
  try { dokundu = S.getGame().getInputManager().isMouseButtonReleased(0); } catch (e) {}
  if (dokundu && !A.tb && ty > YUK + 0.2) {
    A.tb = simdi();
    try { S.getGame().getSoundManager().playSound("dugme.wav", false, 40, 1); } catch (e) {}
  }
  // ---- bitiş: manzara ekranı kaplayınca Menü (menü zemini aynı manzara, aynı yerde) ----
  if (g >= 2.7) { A.kuruldu = false; gdjs.evtTools.runtimeScene.replaceScene(S, "Menu", false); }
})();

};
gdjs.AcilisCode.userFunc0x1474f90 = function GDJSInlineCode(runtimeScene) {
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
gdjs.AcilisCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.AcilisCode.userFunc0x10d2be8(runtimeScene);

}


{


gdjs.AcilisCode.userFunc0x1474f90(runtimeScene);

}


};

gdjs.AcilisCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AcilisCode.GDAcZeminObjects1.length = 0;
gdjs.AcilisCode.GDAcZeminObjects2.length = 0;
gdjs.AcilisCode.GDAcNetObjects1.length = 0;
gdjs.AcilisCode.GDAcNetObjects2.length = 0;
gdjs.AcilisCode.GDAcLogoObjects1.length = 0;
gdjs.AcilisCode.GDAcLogoObjects2.length = 0;
gdjs.AcilisCode.GDAcMatiObjects1.length = 0;
gdjs.AcilisCode.GDAcMatiObjects2.length = 0;
gdjs.AcilisCode.GDAcUcakObjects1.length = 0;
gdjs.AcilisCode.GDAcUcakObjects2.length = 0;
gdjs.AcilisCode.GDAcYaziObjects1.length = 0;
gdjs.AcilisCode.GDAcYaziObjects2.length = 0;
gdjs.AcilisCode.GDAcHarfObjects1.length = 0;
gdjs.AcilisCode.GDAcHarfObjects2.length = 0;
gdjs.AcilisCode.GDAcOdaObjects1.length = 0;
gdjs.AcilisCode.GDAcOdaObjects2.length = 0;
gdjs.AcilisCode.GDAcKoltukObjects1.length = 0;
gdjs.AcilisCode.GDAcKoltukObjects2.length = 0;
gdjs.AcilisCode.GDAcBaslaObjects1.length = 0;
gdjs.AcilisCode.GDAcBaslaObjects2.length = 0;
gdjs.AcilisCode.GDAcGozObjects1.length = 0;
gdjs.AcilisCode.GDAcGozObjects2.length = 0;
gdjs.AcilisCode.GDPanelAvatarObjects1.length = 0;
gdjs.AcilisCode.GDPanelAvatarObjects2.length = 0;
gdjs.AcilisCode.GDRutbeRozetObjects1.length = 0;
gdjs.AcilisCode.GDRutbeRozetObjects2.length = 0;

gdjs.AcilisCode.eventsList0(runtimeScene);
gdjs.AcilisCode.GDAcZeminObjects1.length = 0;
gdjs.AcilisCode.GDAcZeminObjects2.length = 0;
gdjs.AcilisCode.GDAcNetObjects1.length = 0;
gdjs.AcilisCode.GDAcNetObjects2.length = 0;
gdjs.AcilisCode.GDAcLogoObjects1.length = 0;
gdjs.AcilisCode.GDAcLogoObjects2.length = 0;
gdjs.AcilisCode.GDAcMatiObjects1.length = 0;
gdjs.AcilisCode.GDAcMatiObjects2.length = 0;
gdjs.AcilisCode.GDAcUcakObjects1.length = 0;
gdjs.AcilisCode.GDAcUcakObjects2.length = 0;
gdjs.AcilisCode.GDAcYaziObjects1.length = 0;
gdjs.AcilisCode.GDAcYaziObjects2.length = 0;
gdjs.AcilisCode.GDAcHarfObjects1.length = 0;
gdjs.AcilisCode.GDAcHarfObjects2.length = 0;
gdjs.AcilisCode.GDAcOdaObjects1.length = 0;
gdjs.AcilisCode.GDAcOdaObjects2.length = 0;
gdjs.AcilisCode.GDAcKoltukObjects1.length = 0;
gdjs.AcilisCode.GDAcKoltukObjects2.length = 0;
gdjs.AcilisCode.GDAcBaslaObjects1.length = 0;
gdjs.AcilisCode.GDAcBaslaObjects2.length = 0;
gdjs.AcilisCode.GDAcGozObjects1.length = 0;
gdjs.AcilisCode.GDAcGozObjects2.length = 0;
gdjs.AcilisCode.GDPanelAvatarObjects1.length = 0;
gdjs.AcilisCode.GDPanelAvatarObjects2.length = 0;
gdjs.AcilisCode.GDRutbeRozetObjects1.length = 0;
gdjs.AcilisCode.GDRutbeRozetObjects2.length = 0;


return;

}

gdjs['AcilisCode'] = gdjs.AcilisCode;
