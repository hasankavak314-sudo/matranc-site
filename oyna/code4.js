gdjs.EslesmeCode = {};
gdjs.EslesmeCode.localVariables = [];
gdjs.EslesmeCode.idToCallbackMap = new Map();
gdjs.EslesmeCode.GDEZeminObjects1= [];
gdjs.EslesmeCode.GDEZeminObjects2= [];
gdjs.EslesmeCode.GDEArayuzObjects1= [];
gdjs.EslesmeCode.GDEArayuzObjects2= [];
gdjs.EslesmeCode.GDPlakaRakipObjects1= [];
gdjs.EslesmeCode.GDPlakaRakipObjects2= [];
gdjs.EslesmeCode.GDPlakaSenObjects1= [];
gdjs.EslesmeCode.GDPlakaSenObjects2= [];
gdjs.EslesmeCode.GDYaziTuraPulObjects1= [];
gdjs.EslesmeCode.GDYaziTuraPulObjects2= [];
gdjs.EslesmeCode.GDRakipAdYaziObjects1= [];
gdjs.EslesmeCode.GDRakipAdYaziObjects2= [];
gdjs.EslesmeCode.GDSenAdYaziObjects1= [];
gdjs.EslesmeCode.GDSenAdYaziObjects2= [];
gdjs.EslesmeCode.GDSonucBuyukYaziObjects1= [];
gdjs.EslesmeCode.GDSonucBuyukYaziObjects2= [];
gdjs.EslesmeCode.GDAyarYaziObjects1= [];
gdjs.EslesmeCode.GDAyarYaziObjects2= [];
gdjs.EslesmeCode.GDSonucAltYaziObjects1= [];
gdjs.EslesmeCode.GDSonucAltYaziObjects2= [];
gdjs.EslesmeCode.GDYTGolgeObjects1= [];
gdjs.EslesmeCode.GDYTGolgeObjects2= [];
gdjs.EslesmeCode.GDPanelAvatarObjects1= [];
gdjs.EslesmeCode.GDPanelAvatarObjects2= [];
gdjs.EslesmeCode.GDRutbeRozetObjects1= [];
gdjs.EslesmeCode.GDRutbeRozetObjects2= [];


gdjs.EslesmeCode.userFunc0xfe8ce8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Eşleşme SAHNESİ görünüm kodu v5 (45 pul kimliği: YaziTuraPul Animasyon #3'e 32–44 kareleri eklenmeli; kaldırılan 8 pul geçersiz) · v4 (10 karakter; PanelAvatar karesi n ≤ 3 ? n : n + 1) · v3 (32 pul: YaziTuraPul Animasyon #3 TEK animasyon, 32 kare = p7_yazitura_00 … _31)
// v2: yazı-tura pulunun yüzleri = oyuncuların gerçek pulları; plakalar nötr
// v1: (yeni tasarım + YAZI-TURA hareketi)
// "Eslesme" sahnesinin olaylarının EN ALTINA, KOŞULSUZ tek bir JavaScript olayı olarak koyun.
// Olaylar aynen kalır: sonuç yine "e" ≥ 2.2 ile gelir; bu kod pul havadayken "e"yi 2.1 sn'de tutar,
// pul yere inince bırakır. Kullandığı nesneler: YTGolge (yeni), PanelAvatar ve RutbeRozet (küresel).
(function () {
  const S = runtimeScene;
  const G = S.getGame().getVariables();
  const gs = (ad) => { try { return G.has(ad) ? G.get(ad).getAsNumber() : 0; } catch (e) { return 0; } };
  const sv = (ad) => { try { return S.getVariables().get(ad).getAsNumber(); } catch (e) { return 0; } };
  const ilk = (ad) => { try { const l = S.getObjects(ad); return l && l.length ? l[0] : null; } catch (e) { return null; } };
  const LAC = "44;56;98", KIR = "226;70;74", MAV = "47;143;224";
  const simdi = () => S.getTimeManager().getTimeFromStart() / 1000;
  const M = window.MatrancCevrimici;
  let C = S.__mtrE;
  if (!C) {
    C = S.__mtrE = { basla: -1, atla: !!(M && M.atlaYaziTura), sesli: false };
    const yap = (ad, z) => { try { const o = S.createObject(ad); if (o) { o.setZOrder(z); o.hide(true); } return o; } catch (e) { return null; } };
    C.avR = yap("PanelAvatar", 15); C.rozR = yap("RutbeRozet", 16);
    C.avS = yap("PanelAvatar", 15); C.rozS = yap("RutbeRozet", 16);
    C.golge = ilk("YTGolge") || yap("YTGolge", 4);
    const oku = (k, v) => {
      try {
        const s = gdjs.evtTools.storage; if (!s.elementExistsInJSONFile("matranc", k)) return v;
        const x = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", k, S, x); return x.getAsNumber();
      } catch (e) { return v; }
    };
    C.avatar = Math.round(oku("avatar", 0)); C.gal = oku("galCevrimici", 0);
  }
  const ESIK = [0, 1, 3, 7, 15, 30, 50];
  const rutbe = (n) => { let r = 0; for (let i = 0; i < 7; i++) if (n >= ESIK[i]) r = i; return r; };
  const merkez = (o, x, y, olcek) => { if (!o) return; if (olcek !== undefined && o.setScale) o.setScale(olcek); o.setPosition(x - o.getWidth() / 2, y - o.getHeight() / 2); };
  const kare = (o, k) => { if (o && o.getAnimationFrame() !== k) o.setAnimationFrame(k); if (o) o.pauseAnimation(); };
  const cap = (o, d) => { if (!o) return; o.setScale(1); o.setScale(d / o.getWidth()); };

  // zemin, arayüz, plakalar
  const z = ilk("EZemin"); if (z) { z.setScale(0.5); z.setPosition(0, -300); z.setZOrder(-10); }
  const a = ilk("EArayuz"); if (a) { a.setScale(0.5); a.setPosition(0, 60); a.setZOrder(0); }
  merkez(ilk("PlakaRakip"), 360, 330, 0.5);
  merkez(ilk("PlakaSen"), 360, 930, 0.5);
  for (const n of ["PlakaRakip", "PlakaSen"]) {          // çerçeveler nötr (renk bilgisini artık pullar taşıyor)
    const o = ilk(n); if (!o) continue;
    try { if (o.getAnimation() !== 0) o.setAnimation(0); if (o.getAnimationFrame() !== 0) o.setAnimationFrame(0); o.pauseAnimation(); } catch (e) {}
  }
  // avatarlar + rozetler
  let rav = Math.round(gs("rakipAvatar")); if (!(rav >= 0 && rav <= 9)) rav = 0;
  const rgal = G.has("rakipGal") ? gs("rakipGal") : -1;
  const avKoy = (av, roz, n, gal, cy) => {
    if (av) { av.hide(false); kare(av, n <= 3 ? n : n + 1); cap(av, 112); merkez(av, 160, cy); }   // v4: PanelAvatar 4 = MATİ
    if (roz) { roz.hide(!(gal >= 0)); if (gal >= 0) { kare(roz, rutbe(gal)); cap(roz, 44); merkez(roz, 114, cy - 44); } }
  };
  avKoy(C.avR, C.rozR, rav, rgal, 330);
  avKoy(C.avS, C.rozS, C.avatar >= 0 && C.avatar <= 9 ? C.avatar : 0, C.gal, 930);

  // ---------------- iki oyuncunun pulu (oyun kodu v32 ile aynı kural: davet edenin ana pulu önceliklidir)
  const gsV = (ad, v) => { try { return G.has(ad) ? G.get(ad).getAsNumber() : v; } catch (e) { return v; } };
  if (!C.benPul) {
    const oku = (k, v) => {
      try { const s = gdjs.evtTools.storage; if (!s.elementExistsInJSONFile("matranc", k)) return v;
        const x = new gdjs.Variable(); s.readNumberFromJSONFile("matranc", k, S, x); return x.getAsNumber(); } catch (e) { return v; }
    };
    const ESKI = [0, 1, 2, 8, 15, 22, -1, 26, -1, 31];
    let sahip = Math.round(oku("pulSahip2", -1));
    if (sahip < 0) { sahip = 0; const e = Math.round(oku("pulSahip", 0)); for (let i = 3; i < 10; i++) if ((e & (1 << i)) && ESKI[i] >= 8) sahip |= (1 << (ESKI[i] - 8)); }
    const s3 = Math.round(oku("pulSahip3", 0)), KALK = [9, 12, 13, 14, 24, 28, 29, 30];
    const ok2 = (x) => (x >= 0 && x <= 7) || (x >= 8 && x <= 31 && !KALK.includes(x) && !!(sahip & (1 << (x - 8)))) || (x >= 32 && x <= 44 && !!(s3 & (1 << (x - 32))));
    let ana = Math.round(oku("anaPul2", -1)), yed = Math.round(oku("yedekPul2", -1));
    if (ana < 0) { const e = Math.round(oku("anaPul", 0)); ana = ESKI[e] >= 0 ? ESKI[e] : 0; }
    if (yed < 0) { const e = Math.round(oku("yedekPul", 2)); yed = ESKI[e] >= 0 ? ESKI[e] : 2; }
    if (!ok2(ana)) ana = 0;
    if (!ok2(yed) || yed === ana) yed = ana === 2 ? 0 : 2;
    C.benPul = [ana, yed];
  }
  const ok = (x) => x >= 0 && x <= 44 && ![9, 12, 13, 14, 24, 28, 29, 30].includes(x);
  const [bAna, bYed] = C.benPul;
  const rp = Math.round(gsV("rakipPul", -1)), ry = Math.round(gsV("rakipYedek", -1));
  const benDavetci = gsV("benDavetci", 1) === 1;
  const dA = benDavetci ? bAna : rp, lA = benDavetci ? rp : bAna, lY = benDavetci ? ry : bYed;
  const dPul = ok(dA) ? dA : 0;
  const lPul = (ok(lA) && lA !== dPul) ? lA : ((ok(lY) && lY !== dPul) ? lY : (dPul === 2 ? 0 : 2));
  const benimPul = benDavetci ? dPul : lPul, rakipPul = benDavetci ? lPul : dPul;

  // ---------------- YAZI-TURA
  const renk = gs("benimRenk"), asama = sv("asama");
  const pul = ilk("YaziTuraPul"), go = C.golge;
  let tm = null; try { tm = S.getTimeManager().getTimer("e"); } catch (e) {}
  const ZEMIN = 680, H = 150, OLCEK = 0.86;
  // yüz numarası: 1 = kırmızı tarafın (başlayanın) pulu, 2 = mavi tarafın pulu; aşağıda animasyona çevrilir
  let h = 0, sy = 1, yuz = 1, buyu = 1, gizli = false;
  if (renk === 0) {                                  // renk bekleniyor: pul yerde hafifçe nefes alır
    if (C.atla) gizli = true;
    sy = 1; buyu = 1 + 0.03 * Math.sin(simdi() * 4); yuz = Math.floor(simdi() * 1.5) % 2 ? 2 : 1;
  } else if (C.atla || asama >= 1 && C.basla < 0) {  // rövanşta yazı-tura yok: doğrudan sonuç
    yuz = 1;
  } else {
    if (C.basla < 0) C.basla = simdi();
    const t = simdi() - C.basla, A = 1, B = 2;          // pul, BAŞLAYANIN (kırmızı taraf) yüzüyle düşer
    const UC = 2.3, T0 = 0.25;
    if (t < T0) { sy = 1 - 0.1 * Math.sin(Math.PI * t / T0); }              // fırlatmadan önce hafif çöküş
    else if (t < T0 + UC) {                                                 // havada: döne döne yükselip iner
      const u = (t - T0) / UC;
      h = 4 * H * u * (1 - u);
      const fi = 2 * Math.PI * 7 * (1 - Math.pow(1 - u, 2.2));             // dönüş giderek yavaşlar, A yüzüyle biter
      const c = Math.cos(fi);
      sy = Math.max(0.07, Math.abs(c)); yuz = c >= 0 ? A : B;
      buyu = 1 + 0.18 * h / H;
    } else {                                                                // iki sekme + yerleşme
      const k = t - T0 - UC;
      yuz = A;
      if (k < 0.36) { const u = k / 0.36; h = 4 * 26 * u * (1 - u); }
      else if (k < 0.62) { const u = (k - 0.36) / 0.26; h = 4 * 8 * u * (1 - u); }
      if (k < 0.08) sy = 0.88 + 1.5 * k;                                     // yere çarpınca ezilip toparlanma
      if (k > 0.62) buyu = 1 + 0.06 * Math.max(0, Math.sin(Math.PI * Math.min(1, (k - 0.62) / 0.35)));
      if (!C.sesli && k > 0.62) C.sesli = true;
    }
    // olayların sonucu erken göstermemesi için "e" 2.1 sn'de tutulur; pul inince bırakılır
    const bitti = t >= T0 + UC + 0.75;
    if (tm && asama === 0 && !bitti && tm.getTime() > 2100) tm.setTime(2100);
    if (tm && asama === 0 && bitti && tm.getTime() < 2200) tm.setTime(2200);
  }
  if (pul) {
    pul.hide(gizli);
    // renk belli değilken: 1 = benim pulum, 2 = rakibin; belli olunca: 1 = kırmızı tarafın, 2 = mavi tarafın pulu
    let pulNo;
    if (renk === 0) pulNo = yuz === 1 ? benimPul : rakipPul;
    else { const kirmiziPul = renk === 1 ? benimPul : rakipPul, maviPul = renk === 1 ? rakipPul : benimPul; pulNo = yuz === 1 ? kirmiziPul : maviPul; }
    if (pul.getAnimation() !== 3) pul.setAnimation(3);
    if (pul.getAnimationFrame() !== pulNo) pul.setAnimationFrame(pulNo);
    pul.pauseAnimation();
    pul.setScaleX(OLCEK * buyu); pul.setScaleY(OLCEK * buyu * sy);
    pul.setPosition(360 - pul.getWidth() / 2, ZEMIN - h - pul.getHeight() / 2);
    pul.setZOrder(20);
  }
  if (go) {
    go.hide(gizli);
    const k = Math.max(0, 1 - 0.55 * h / H);
    go.setScale(0.5 * (0.55 + 0.45 * k) * 1.25); go.setOpacity(80 + 150 * k);
    go.setPosition(360 - go.getWidth() / 2, ZEMIN + 78 - go.getHeight() / 2); go.setZOrder(4);
  }

  // ---------------- yazılar
  const yazi = (ad, x, cy, boy, renkT, metin, ortala) => {
    const t = ilk(ad); if (!t) return;
    if (metin !== undefined && t.getText() !== metin) t.setText(metin);
    try { if (t.getCharacterSize() !== boy) t.setCharacterSize(boy); } catch (e) {}
    if (renkT) try { t.setColor(renkT); } catch (e) {}
    t.setPosition(ortala ? x - t.getWidth() / 2 : x, cy - t.getHeight() / 2); t.setZOrder(12);
  };
  yazi("RakipAdYazi", 220, 347, 34, LAC);
  yazi("SenAdYazi", 220, 947, 34, LAC);
  yazi("AyarYazi", 360, 1215, 20, LAC, undefined, true);
  if (asama >= 1) {
    const basliyor = renk === 1;                     // ilk turu kırmızı başlatır
    yazi("SonucBuyukYazi", 360, 1084, 32, basliyor ? "40;150;80" : LAC, basliyor ? "SEN BAŞLIYORSUN!" : "RAKİBİN BAŞLIYOR", true);
    yazi("SonucAltYazi", 360, 1127, 20, LAC, basliyor ? "Bol şans!" : "Hazır ol, sıra birazdan sende!", true);
  } else {
    yazi("SonucBuyukYazi", 360, 1084, 32, LAC, "", true);
    yazi("SonucAltYazi", 360, 1102, 22, LAC, renk === 0 ? "Rakip bekleniyor..." : "Yazı-tura atılıyor...", true);
  }
})();

};
gdjs.EslesmeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AyarYazi"), gdjs.EslesmeCode.GDAyarYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("EArayuz"), gdjs.EslesmeCode.GDEArayuzObjects1);
gdjs.copyArray(runtimeScene.getObjects("EZemin"), gdjs.EslesmeCode.GDEZeminObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlakaRakip"), gdjs.EslesmeCode.GDPlakaRakipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlakaSen"), gdjs.EslesmeCode.GDPlakaSenObjects1);
gdjs.copyArray(runtimeScene.getObjects("RakipAdYazi"), gdjs.EslesmeCode.GDRakipAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SenAdYazi"), gdjs.EslesmeCode.GDSenAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAltYazi"), gdjs.EslesmeCode.GDSonucAltYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucBuyukYazi"), gdjs.EslesmeCode.GDSonucBuyukYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("YaziTuraPul"), gdjs.EslesmeCode.GDYaziTuraPulObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEZeminObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEZeminObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEZeminObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEZeminObjects1[i].setX(-160);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEZeminObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEZeminObjects1[i].setY(-160);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEZeminObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEZeminObjects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEArayuzObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEArayuzObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDEArayuzObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDEArayuzObjects1[i].setY(0);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].setX(94);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].setY(154);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].setX(94);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].setY(864);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].setX(230);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].setY(430);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDRakipAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDRakipAdYaziObjects1[i].setY(216);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSenAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSenAdYaziObjects1[i].setY(926);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].setY(1025);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].setY(1080);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDAyarYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDAyarYaziObjects1[i].setY(1170);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDRakipAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDRakipAdYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSenAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSenAdYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDAyarYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDAyarYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSenAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSenAdYaziObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDRakipAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDRakipAdYaziObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(19)));
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDAyarYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDAyarYaziObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(20)));
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].getBehavior("Text").setText("Renkler belirleniyor...");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "e");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AyarYazi"), gdjs.EslesmeCode.GDAyarYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("RakipAdYazi"), gdjs.EslesmeCode.GDRakipAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SenAdYazi"), gdjs.EslesmeCode.GDSenAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAltYazi"), gdjs.EslesmeCode.GDSonucAltYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucBuyukYazi"), gdjs.EslesmeCode.GDSonucBuyukYaziObjects1);
{for(var i = 0, len = gdjs.EslesmeCode.GDRakipAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDRakipAdYaziObjects1[i].setX(360 - (gdjs.EslesmeCode.GDRakipAdYaziObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSenAdYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSenAdYaziObjects1[i].setX(360 - (gdjs.EslesmeCode.GDSenAdYaziObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].setX(360 - (gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].setX(360 - (gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDAyarYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDAyarYaziObjects1[i].setX(360 - (gdjs.EslesmeCode.GDAyarYaziObjects1[i].getWidth()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "e") >= 2.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlakaRakip"), gdjs.EslesmeCode.GDPlakaRakipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlakaSen"), gdjs.EslesmeCode.GDPlakaSenObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAltYazi"), gdjs.EslesmeCode.GDSonucAltYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucBuyukYazi"), gdjs.EslesmeCode.GDSonucBuyukYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("YaziTuraPul"), gdjs.EslesmeCode.GDYaziTuraPulObjects1);
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].getBehavior("Text").setText("SEN KIRMIZISIN");
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].setColor("240;68;83");
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].getBehavior("Text").setText("İlk hamle senin!");
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "pul_yerlesme.wav", false, 20, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "e");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "e") >= 2.2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(17).getAsNumber() == 2);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlakaRakip"), gdjs.EslesmeCode.GDPlakaRakipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlakaSen"), gdjs.EslesmeCode.GDPlakaSenObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAltYazi"), gdjs.EslesmeCode.GDSonucAltYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucBuyukYazi"), gdjs.EslesmeCode.GDSonucBuyukYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("YaziTuraPul"), gdjs.EslesmeCode.GDYaziTuraPulObjects1);
{for(var i = 0, len = gdjs.EslesmeCode.GDYaziTuraPulObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDYaziTuraPulObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaSenObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaSenObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDPlakaRakipObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDPlakaRakipObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].getBehavior("Text").setText("SEN YEŞİLSİN");
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucBuyukYaziObjects1[i].setColor("46;204;113");
}
}
{for(var i = 0, len = gdjs.EslesmeCode.GDSonucAltYaziObjects1.length ;i < len;++i) {
    gdjs.EslesmeCode.GDSonucAltYaziObjects1[i].getBehavior("Text").setText("İlk hamle rakibinde");
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "pul_yerlesme.wav", false, 20, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "e");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "e") >= 3;
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "İsimsiz sahne", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "e") >= 12;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{


gdjs.EslesmeCode.userFunc0xfe8ce8(runtimeScene);

}


};

gdjs.EslesmeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EslesmeCode.GDEZeminObjects1.length = 0;
gdjs.EslesmeCode.GDEZeminObjects2.length = 0;
gdjs.EslesmeCode.GDEArayuzObjects1.length = 0;
gdjs.EslesmeCode.GDEArayuzObjects2.length = 0;
gdjs.EslesmeCode.GDPlakaRakipObjects1.length = 0;
gdjs.EslesmeCode.GDPlakaRakipObjects2.length = 0;
gdjs.EslesmeCode.GDPlakaSenObjects1.length = 0;
gdjs.EslesmeCode.GDPlakaSenObjects2.length = 0;
gdjs.EslesmeCode.GDYaziTuraPulObjects1.length = 0;
gdjs.EslesmeCode.GDYaziTuraPulObjects2.length = 0;
gdjs.EslesmeCode.GDRakipAdYaziObjects1.length = 0;
gdjs.EslesmeCode.GDRakipAdYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSenAdYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSenAdYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSonucBuyukYaziObjects2.length = 0;
gdjs.EslesmeCode.GDAyarYaziObjects1.length = 0;
gdjs.EslesmeCode.GDAyarYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSonucAltYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSonucAltYaziObjects2.length = 0;
gdjs.EslesmeCode.GDYTGolgeObjects1.length = 0;
gdjs.EslesmeCode.GDYTGolgeObjects2.length = 0;
gdjs.EslesmeCode.GDPanelAvatarObjects1.length = 0;
gdjs.EslesmeCode.GDPanelAvatarObjects2.length = 0;
gdjs.EslesmeCode.GDRutbeRozetObjects1.length = 0;
gdjs.EslesmeCode.GDRutbeRozetObjects2.length = 0;

gdjs.EslesmeCode.eventsList0(runtimeScene);
gdjs.EslesmeCode.GDEZeminObjects1.length = 0;
gdjs.EslesmeCode.GDEZeminObjects2.length = 0;
gdjs.EslesmeCode.GDEArayuzObjects1.length = 0;
gdjs.EslesmeCode.GDEArayuzObjects2.length = 0;
gdjs.EslesmeCode.GDPlakaRakipObjects1.length = 0;
gdjs.EslesmeCode.GDPlakaRakipObjects2.length = 0;
gdjs.EslesmeCode.GDPlakaSenObjects1.length = 0;
gdjs.EslesmeCode.GDPlakaSenObjects2.length = 0;
gdjs.EslesmeCode.GDYaziTuraPulObjects1.length = 0;
gdjs.EslesmeCode.GDYaziTuraPulObjects2.length = 0;
gdjs.EslesmeCode.GDRakipAdYaziObjects1.length = 0;
gdjs.EslesmeCode.GDRakipAdYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSenAdYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSenAdYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSonucBuyukYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSonucBuyukYaziObjects2.length = 0;
gdjs.EslesmeCode.GDAyarYaziObjects1.length = 0;
gdjs.EslesmeCode.GDAyarYaziObjects2.length = 0;
gdjs.EslesmeCode.GDSonucAltYaziObjects1.length = 0;
gdjs.EslesmeCode.GDSonucAltYaziObjects2.length = 0;
gdjs.EslesmeCode.GDYTGolgeObjects1.length = 0;
gdjs.EslesmeCode.GDYTGolgeObjects2.length = 0;
gdjs.EslesmeCode.GDPanelAvatarObjects1.length = 0;
gdjs.EslesmeCode.GDPanelAvatarObjects2.length = 0;
gdjs.EslesmeCode.GDRutbeRozetObjects1.length = 0;
gdjs.EslesmeCode.GDRutbeRozetObjects2.length = 0;


return;

}

gdjs['EslesmeCode'] = gdjs.EslesmeCode;
