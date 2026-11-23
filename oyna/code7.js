gdjs.RehberCode = {};
gdjs.RehberCode.localVariables = [];
gdjs.RehberCode.idToCallbackMap = new Map();
gdjs.RehberCode.GDRZeminObjects1= [];
gdjs.RehberCode.GDRIbreObjects1= [];
gdjs.RehberCode.GDRPulObjects1= [];
gdjs.RehberCode.GDRMatiObjects1= [];
gdjs.RehberCode.GDRBalonObjects1= [];
gdjs.RehberCode.GDRAtlaObjects1= [];
gdjs.RehberCode.GDRDokunObjects1= [];
gdjs.RehberCode.GDRElObjects1= [];
gdjs.RehberCode.GDRKilitObjects1= [];
gdjs.RehberCode.GDRBtnObjects1= [];
gdjs.RehberCode.GDPanelAvatarObjects1= [];
gdjs.RehberCode.GDRutbeRozetObjects1= [];


gdjs.RehberCode.userFunc0x1474f90 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - REHBERLİ OYUN v3b (Yıldızlar bölümüne maç sonu sorusu: DEĞER çocuklar, GENEL KÜLTÜR büyükler; RBalon 62 kare) · v3 (7 bölüm: 4'lü ve pul taşıma adım adım; yeni Tur ve süre, Yıldızlar, Çevrimiçi; BİTİR → ana menü; RBalon 59 kare) · v2 (ATLA düğmesi MATİ'nin üstünde) · v1 ("MATİ sana öğretiyor")
// YENİ "Rehber" sahnesinin olaylarına KOŞULSUZ tek bir JavaScript olayı olarak koyun (sahnede başka olay gerekmez).
// Oyun sahnesine HİÇ dokunmaz; tahta, kadranlar ve pullar burada ayrı ve basit biçimde çalışır.
// Gerekli nesneler (nesne listesinde olsun, sahneye YERLEŞTİRMEYİN; kod kendisi oluşturur):
//   RZemin  (1 görsel: matranc_rehber_zemin.jpg)
//   RIbre   (1 görsel: matranc_rehber_ibre.png)          — kadran ibresi
//   RPul    (1 animasyon, 2 kare: pul_0 kırmızı, pul_1 mavi)
//   RMati   (1 görsel: matranc_rehber_mati.png)
//   RBalon  (1 animasyon, 62 kare: matranc_rh3_balon_00 … _61, sırayla)
//   RAtla, RDokun, REl, RKilit (birer görsel)
//   RBtn    (1 animasyon, 2 kare: btn_0 TEKRAR, btn_1 BİTİR)
// Genel değişken rehberBolum: 0 = baştan sona, 1 Çarklar, 2 Kazanma, 3 Pul taşıma, 4 Tuzak, 5 Tur ve süre, 6 Yıldızlar, 7 Çevrimiçi.
(function () {
  const S = runtimeScene, game = S.getGame();
  let R = window.MatrancRehber;
  if (!R || R.sahne !== S) R = window.MatrancRehber = { sahne: S, kuruldu: false };
  const simdi = () => (window.performance ? performance.now() : Date.now()) / 1000;
  const im = game.getInputManager();
  const basili = () => { try { return im.isMouseButtonPressed(0); } catch (e) { return false; } };
  const birakildi = () => { try { return im.isMouseButtonReleased(0); } catch (e) { return false; } };
  const imlec = () => [gdjs.evtTools.input.getCursorX(S, "", 0), gdjs.evtTools.input.getCursorY(S, "", 0)];
  const SES = { dugme: "dugme.wav", tik: "cark_tik.wav", pul: "pul_yerlesme.wav", kazan: "oyun_kazanma.wav" };
  const ses = (k, v) => { try { game.getSoundManager().playSound(SES[k], false, v || 70, 1); } catch (e) {} };
  const L = S.getLayer("");

  // ---------- sabitler ----------
  const DEG = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 12, 14], [15, 16, 18, 20, 21, 24], [25, 27, 28, 30, 32, 35],
               [36, 40, 42, 45, 48, 49], [50, 54, 56, 60, 63, 64], [70, 72, 80, 81, 90, 100]];
  const YER = {}; DEG.forEach((s, r) => s.forEach((v, c) => { YER[v] = [r, c]; }));
  const hc = (v) => { const [r, c] = YER[v]; return [132 + c * 91.2, 295 + r * 92.6]; };
  const KAD = [[186, 1100], [534, 1100]], KR = 160, KIC = 80;
  const aciN = (n) => (n - 1) * 36 + 18;                                   // ibre açısı (0 = aşağı)
  const nAci = (a) => ((Math.floor(a / 36) % 10) + 10) % 10 + 1;
  const TAHTA = [62, 222, 658, 940];
  const SATIR4 = [hc(27)[0] - 46, hc(27)[1] - 46, hc(35)[0] + 46, hc(35)[1] + 46];
  const DIK = (v1, v2) => [hc(v1)[0] - 46, hc(v1)[1] - 46, hc(v2)[0] + 46, hc(v2)[1] + 46];   // v3: iki hücre arası dikdörtgen

  // ---------- adımlar ----------
  // t: dokun | kadran | koy | mati | serbest | sec | tasi | dusun | kur | son
  const KUR_BOS = { t: "kur", d: [1, 1], k: [], m: [] };
  const BOLUM = {
    A: [{ t: "kur", d: [1, 1], k: [], m: [] }, { t: "dokun", b: 0 }, { t: "dokun", b: 1, demo: [16, 28, 45, 63] }],
    1: [KUR_BOS,
        { t: "kadran", b: 2, k: 0, n: 3, kilit: [false, true] },
        { t: "kadran", b: 3, k: 1, n: 4, kilit: [true, false] },
        { t: "koy", b: 4, hedef: [12] },
        { t: "mati", b: 6, k: 1, n: 5, hucre: 15 },
        { t: "dokun", b: 7 },
        { t: "kadran", b: 8, k: 0, n: 4, kilit: [false, true] },
        { t: "koy", b: 9, hedef: [20] },
        { t: "dokun", b: 11 }],
    // v3: 4'lü adım adım (ikisi de gösterilir, 35 birlikte yapılır)
    2: [{ t: "kur", d: [5, 9], k: [12, 20, 28, 30, 32], m: [15, 18, 36, 40, 45] },
        { t: "dokun", b: 12, spot: "satir" },
        { t: "dokun", b: 13, spot: "satir" },
        { t: "dokun", b: 14 },
        { t: "kadran", b: 15, k: 1, n: 7, kilit: [true, false] },
        { t: "koy", b: 16, hedef: [35], el: 35, yanlis: 58, kazan: [28, 30, 32, 35] },
        { t: "dokun", b: 17, kazan: true }],
    // v3: pul taşıma adım adım
    3: [{ t: "kur", d: [4, 6], k: [2, 7, 12, 20, 27, 40, 45, 56, 64, 81], m: [3, 9, 15, 24, 30, 35, 48, 63, 72, 90] },
        { t: "dokun", b: 18 },
        { t: "dokun", b: 19 },
        { t: "sec", b: 20, hucre: 40 },
        { t: "sec", b: 21, hucre: 12 },
        { t: "kadran", b: 22, k: 0, n: 3, kilit: [false, true] },
        { t: "tasi", b: 23, hedef: [18], el: 18, yanlis: 58 },
        { t: "dokun", b: 24, hucreler: [12] },
        { t: "mati", b: 25, k: 0, n: 2, hucre: 12, kaldir: 90 },
        { t: "dokun", b: 26, hucreler: [12] },
        { t: "dokun", b: 27 },
        { t: "kur", d: [7, 8], k: [3, 10, 21, 28, 42, 54, 56, 60, 70, 100], m: [5, 8, 14, 24, 32, 36, 45, 48, 72, 81] },
        { t: "dokun", b: 28, dik: [54, 63] },
        { t: "sec", b: 29, hucre: 3 },
        { t: "kadran", b: 30, k: 1, n: 9, kilit: [true, false] },
        { t: "tasi", b: 31, hedef: [63], el: 63, yanlis: 58, kazan: [54, 56, 60, 63] },
        { t: "dokun", b: 32, dik: [54, 63] },
        { t: "dokun", b: 33 }],
    4: [{ t: "kur", d: [1, 5], k: [2, 4, 6, 8, 10, 20, 32], m: [3, 5, 7, 9, 27, 42] },
        { t: "dokun", b: 34 },
        { t: "kadran", b: 35, k: 1, n: 1, kilit: [true, false] },
        { t: "koy", b: 35, hedef: [1] },
        { t: "dusun", b: 36, sure: 2.8 },
        { t: "dokun", b: 37 }],
    5: [KUR_BOS, { t: "dokun", b: 38 }, { t: "dokun", b: 39 }, { t: "dokun", b: 40 }, { t: "dokun", b: 41 }, { t: "dokun", b: 42 }, { t: "dokun", b: 43 }],
    6: [KUR_BOS, { t: "dokun", b: 44 }, { t: "dokun", b: 59 }, { t: "dokun", b: 60 }, { t: "dokun", b: 61 }, { t: "dokun", b: 45 }, { t: "dokun", b: 46 }, { t: "dokun", b: 47 }, { t: "dokun", b: 48 }, { t: "dokun", b: 49 }, { t: "dokun", b: 50 }],
    7: [KUR_BOS, { t: "dokun", b: 51 }, { t: "dokun", b: 52 }, { t: "dokun", b: 53 }, { t: "dokun", b: 54 }],
  };

  // ---------- kurulum ----------
  const yeni = (ad, z) => { const o = S.createObject(ad); if (o) { o.setZOrder(z); if (o.setScale) o.setScale(0.5); } return o; };
  const kare = (o, k) => { if (!o) return; if (o.getAnimationFrame() !== k) o.setAnimationFrame(k); o.pauseAnimation(); };
  const ortala = (o, x, y) => { if (!o) return; o.setPosition(x - o.getWidth() / 2, y - o.getHeight() / 2); };

  if (!R.kuruldu) {
    R.kuruldu = true;
    try { L.setCameraZoom(2); L.setCameraX(360); L.setCameraY(640); } catch (e) {}
    const z = yeni("RZemin", -10); if (z) z.setPosition(0, -140);
    R.ibre = [yeni("RIbre", 15), yeni("RIbre", 15)];
    R.mati = yeni("RMati", 70); R.balon = yeni("RBalon", 71); R.atla = yeni("RAtla", 72);
    R.dokun = yeni("RDokun", 73); R.el = yeni("REl", 75);
    R.kilit = [yeni("RKilit", 60), yeni("RKilit", 60)];
    R.btn = [yeni("RBtn", 74), yeni("RBtn", 74)]; kare(R.btn[0], 0); kare(R.btn[1], 1);
    R.pul = {}; R.sahip = {}; R.demo = [];
    R.deger = [1, 1]; R.aci = [aciN(1), aciN(1)]; R.tut = -1; R.turBas = [1, 1];
    R.mesaj = null; R.kazanan = []; R.secili = 0; R.anim = null;
    let b = 0; try { b = game.getVariables().get("rehberBolum").getAsNumber(); } catch (e) {}
    R.bolum = b;
    R.akis = b === 0 ? [].concat(BOLUM.A, BOLUM[1], BOLUM[2], BOLUM[3], BOLUM[4], BOLUM[5], BOLUM[6], BOLUM[7]) : BOLUM[b] ? BOLUM[b].slice() : BOLUM[1].slice();
    R.akis.push({ t: "son", b: b === 0 ? 55 : 56 });
    R.i = -1; R.ileri = true;
  }

  // ---------- yardımcılar ----------
  const pulKoy = (v, s, pop) => {
    if (R.pul[v]) { try { R.pul[v].deleteFromScene(S); } catch (e) {} }
    const o = yeni("RPul", 20); if (!o) return; kare(o, s - 1);
    R.pul[v] = o; R.sahip[v] = s; o.__pop = pop ? simdi() : 0; o.__v = v;
  };
  const pulSil = (v) => { if (R.pul[v]) { try { R.pul[v].deleteFromScene(S); } catch (e) {} } delete R.pul[v]; delete R.sahip[v]; };
  const tahtaKur = (st) => {
    for (const v in R.pul) pulSil(Number(v));
    for (const o of R.demo) { try { o.deleteFromScene(S); } catch (e) {} } R.demo = [];
    st.k.forEach((v) => pulKoy(v, 1, false)); st.m.forEach((v) => pulKoy(v, 2, false));
    R.deger = st.d.slice(); R.aci = [aciN(st.d[0]), aciN(st.d[1])]; R.kazanan = []; R.secili = 0;
  };
  const hucreBul = (p) => {
    for (const v in YER) { const [x, y] = hc(Number(v)); if (Math.abs(p[0] - x) < 44 && Math.abs(p[1] - y) < 44) return Number(v); }
    return 0;
  };
  const carpim = () => R.deger[0] * R.deger[1];
  const kilitli = (k) => {
    const a = R.adim; if (!a) return true;
    if (a.kilit) return a.kilit[k];
    if (a.t === "serbest" || a.t === "tasi") return R.deger[1 - k] !== R.turBas[1 - k];   // tek kadran kuralı
    return true;
  };
  const mesajVer = (b) => { R.mesaj = { b, bitis: simdi() + 2.4 }; ses("dugme", 40); };

  const sonraki = () => {
    R.i++; R.adim = R.akis[R.i]; R.t0 = simdi(); R.mesaj = null; R.turBas = R.deger.slice();
    const a = R.adim; if (!a) return;
    if (a.t === "kur") { tahtaKur(a); sonraki(); return; }
    if (a.demo) a.demo.forEach((v, j) => { const o = yeni("RPul", 20); if (o) { kare(o, 0); o.__v = v; o.__pop = simdi() + 0.35 * j; R.demo.push(o); } });
    if (a.t === "son") ses("dugme", 40);
  };
  if (R.i < 0) sonraki();
  const a = R.adim, t = simdi(), ta = t - R.t0;

  // ---------- giriş ----------
  const p = imlec();
  // ATLA
  const atlaY = R.atlaY !== undefined ? R.atlaY : R.ustY + 4;
  const atlaR = [8, atlaY, 136, atlaY + 52];
  if (birakildi() && p[0] >= atlaR[0] && p[0] <= atlaR[2] && p[1] >= atlaR[1] && p[1] <= atlaR[3] && a && a.t !== "son") {
    ses("dugme"); gdjs.evtTools.runtimeScene.replaceScene(S, "NasilOynanir", false); return;
  }
  // kadran tutma / çevirme
  const pAci = (k) => Math.atan2(p[1] - KAD[k][1], p[0] - KAD[k][0]) * 180 / Math.PI;
  const kadranAktif = a && ["kadran", "serbest", "tasi"].includes(a.t) && !(a.t === "tasi" && !R.secili);
  if (kadranAktif && R.tut < 0 && basili() && !R.basildi) {
    for (let k = 0; k < 2; k++) {
      const d = Math.hypot(p[0] - KAD[k][0], p[1] - KAD[k][1]);
      if (d < KR + 10 && !kilitli(k)) { R.tut = k; R.bA = R.aci[k]; R.bP = pAci(k); R.sonP = R.bP; R.top = 0; R.dokD = d; }
    }
  }
  R.basildi = basili();
  if (R.tut >= 0) {
    const k = R.tut;
    if (basili()) {
      let dp = pAci(k) - R.sonP; while (dp > 180) dp -= 360; while (dp < -180) dp += 360;
      R.sonP = pAci(k); R.top += dp; const once = nAci(R.aci[k]);
      R.aci[k] = R.bA + R.top; if (nAci(R.aci[k]) !== once) ses("tik", 45);
    } else {
      let n;
      if (Math.abs(R.top) < 6 && R.dokD > KIC) n = ((Math.floor((pAci(k) - 90) / 36) % 10) + 10) % 10 + 1;   // sayıya dokunma
      else n = nAci(R.aci[k]);
      if (n !== R.deger[k]) ses("tik", 45);
      R.deger[k] = n; R.aci[k] = aciN(n); R.tut = -1;
    }
  }

  // ---------- adım mantığı ----------
  if (a) {
    const dokunus = birakildi() && R.tut < 0;
    const hucre = dokunus ? hucreBul(p) : 0;
    if (a.t === "dokun" && dokunus && ta > 0.5) { ses("dugme", 50); sonraki(); }
    else if (a.t === "kadran" && R.tut < 0 && R.deger[a.k] === a.n && ta > 0.3) { R.t0 = t; sonraki(); }
    else if (a.t === "koy" && hucre) {
      if (R.sahip[hucre]) mesajVer(10);
      else if (a.hedef.includes(hucre) && hucre === carpim()) {
        pulKoy(hucre, 1, true); ses("pul", 80);
        if (a.kazan) { R.kazanan = a.kazan.slice(); setTimeout(() => ses("kazan", 80), 350); }   // v3
        sonraki();
      }
      else mesajVer(a.yanlis || 5);
    }
    else if (a.t === "serbest" && hucre) {
      if (R.sahip[hucre]) mesajVer(10);
      else if (hucre !== carpim()) mesajVer(5);
      else if (!a.hedef.includes(hucre)) mesajVer(a.yanlis);
      else {
        pulKoy(hucre, 1, true); ses("pul", 80);
        R.kazanan = hucre === 35 ? [28, 30, 32, 35] : [27, 28, 30, 32];
        setTimeout(() => ses("kazan", 80), 350); sonraki();
      }
    }
    else if (a.t === "sec" && hucre) {
      if (hucre === a.hucre) { R.secili = hucre; ses("dugme", 50); sonraki(); } else mesajVer(57);
    }
    else if (a.t === "tasi" && hucre) {
      if (hucre === R.secili) { /* aynı pul */ }
      else if (R.sahip[hucre]) mesajVer(10);
      else if (a.hedef && !a.hedef.includes(hucre)) mesajVer(a.yanlis || 58);   // v3: yalnız gösterilen kutu
      else if (hucre !== carpim()) mesajVer(5);
      else {
        pulSil(R.secili); R.secili = 0; pulKoy(hucre, 1, true); ses("pul", 80);
        if (a.kazan) { R.kazanan = a.kazan.slice(); setTimeout(() => ses("kazan", 80), 350); }   // v3
        sonraki();
      }
    }
    else if (a.t === "mati") {
      // 1,2 sn bekle → ibreyi çevir → 0,5 sn sonra pul
      if (ta > 1.2 && !a.__don) {
        const hedefA = aciN(a.n), basA = aciN(R.deger[a.k]), s = Math.min(1, (ta - 1.2) / 0.7);
        const once = nAci(R.aci[a.k]); R.aci[a.k] = basA + (hedefA - basA) * (1 - Math.pow(1 - s, 3));
        if (nAci(R.aci[a.k]) !== once) ses("tik", 45);
        if (s >= 1) { R.deger[a.k] = a.n; R.aci[a.k] = hedefA; a.__don = t; }
      }
      if (a.__don && t - a.__don > 0.5) { a.__don = 0; if (a.kaldir) pulSil(a.kaldir); pulKoy(a.hucre, 2, true); ses("pul", 80); sonraki(); }   // v3: kaldir = MATİ pulunu taşır
    }
    else if (a.t === "dusun") {
      const s = ta < a.sure - 0.4 ? Math.sin(ta * 9) * 14 : 0;
      R.aci[0] = aciN(R.deger[0]) + s; R.aci[1] = aciN(R.deger[1]) - s;
      if (ta > a.sure) { R.aci = [aciN(R.deger[0]), aciN(R.deger[1])]; sonraki(); }
    }
    else if (a.t === "son" && dokunus) {
      for (let k = 0; k < 2; k++) {
        const o = R.btn[k]; if (!o) continue;
        const x = o.getX(), y = o.getY();
        if (p[0] >= x && p[0] <= x + o.getWidth() && p[1] >= y && p[1] <= y + o.getHeight()) {
          ses("dugme");
          gdjs.evtTools.runtimeScene.replaceScene(S, k === 0 ? "Rehber" : "Menu", false);   // v3: BİTİR → ana menü
          return;
        }
      }
    }
  }

  // ---------- çizim ----------
  const A2 = R.adim || {};
  // kadran ibreleri ve kilitler
  for (let k = 0; k < 2; k++) {
    const o = R.ibre[k]; if (o) { ortala(o, KAD[k][0], KAD[k][1]); o.setAngle(R.aci[k]); }
    const kl = R.kilit[k];
    if (kl) {
      const goster = ["kadran", "serbest", "tasi"].includes(A2.t) && kilitli(k) && !(A2.t === "tasi" && !R.secili);
      kl.hide(!goster); ortala(kl, KAD[k][0], KAD[k][1]);
    }
  }
  // pullar (büyüyerek gelir)
  const pulCiz = (o, v, al) => {
    if (!o) return; const [x, y] = hc(v); let s = 0.5;
    if (o.__pop) { const u = (t - o.__pop) / 0.28; if (u < 0) { o.hide(true); return; } o.hide(false); s = u >= 1 ? 0.5 : 0.5 * (0.4 + 0.6 * Math.min(1, u) + Math.sin(Math.min(1, u) * Math.PI) * 0.25); }
    o.setScale(s); ortala(o, x, y - 2); o.setOpacity(al);
  };
  for (const v in R.pul) {
    const n = Number(v); let al = 255;
    if (R.kazanan.includes(n)) al = Math.sin(t * 8) > 0 ? 255 : 90;
    if (n === R.secili || (A2.t === "sec" && n === A2.hucre)) al = 150 + 105 * Math.abs(Math.sin(t * 4));
    pulCiz(R.pul[v], n, al);
  }
  R.demo.forEach((o) => pulCiz(o, o.__v, 230));
  // üst bölüm: MATİ + balon + ATLA (tahtanın üst kenarına yaslanır)
  const kamUst = L.getCameraY() - L.getCameraHeight() / 2;
  const balonAlt = 212; R.ustY = Math.min(balonAlt - 200, kamUst + 2);
  const bNo = R.mesaj && t < R.mesaj.bitis ? R.mesaj.b : (A2.b !== undefined ? A2.b : 0);
  if (R.mesaj && t >= R.mesaj.bitis) R.mesaj = null;
  if (R.balon) { kare(R.balon, bNo); R.balon.setPosition(135, balonAlt - R.balon.getHeight()); }
  if (R.mati) {
    const sars = A2.t === "dusun" ? Math.sin(t * 20) * 3 : 0;
    R.mati.setPosition(4 + sars, balonAlt - R.mati.getHeight() - 6);
  }
  if (R.atla) {
    // v2: ATLA, MATİ'nin hemen üstünde (uzun ekranlarda en üst kenara / çentiğe kaçmasın)
    const matiUst = R.mati ? balonAlt - R.mati.getHeight() - 6 : balonAlt - 90;
    R.atlaY = matiUst - R.atla.getHeight() - 10;
    R.atla.hide(A2.t === "son"); R.atla.setPosition(8, R.atlaY);
  }
  if (R.dokun) {
    const g = A2.t === "dokun" && ta > 0.5;
    R.dokun.hide(!g); R.dokun.setOpacity(160 + 95 * Math.abs(Math.sin(t * 3)));
    R.dokun.setPosition(135 + 580 - R.dokun.getWidth() - 14, balonAlt - R.dokun.getHeight() / 2);
  }
  // son düğmeleri
  for (let k = 0; k < 2; k++) { const o = R.btn[k]; if (o) { o.hide(A2.t !== "son"); ortala(o, k === 0 ? 205 : 515, 640); } }
  // el işareti
  let el = null;
  if (A2.t === "kadran") { const r = (90 + aciN(A2.n)) * Math.PI / 180; el = [KAD[A2.k][0] + Math.cos(r) * 120, KAD[A2.k][1] + Math.sin(r) * 120]; }
  else if (A2.t === "sec") el = hc(A2.hucre);
  else if ((A2.t === "koy" || A2.t === "tasi") && A2.el && (A2.t !== "tasi" || R.secili)) el = hc(A2.el);   // v3
  if (R.el) {
    R.el.hide(!el || !!R.mesaj || R.tut >= 0);
    if (el) { const z = Math.sin(t * 5) * 8; R.el.setPosition(el[0] - R.el.getWidth() * 0.42, el[1] + 6 + z); }
  }

  // ---------- karartma + spot ışığı (PIXI) ----------
  const P = window.PIXI; if (!P || !P.Graphics) return;
  let kap = null; try { kap = L.getRenderer().getRendererObject(); } catch (e) {}
  if (!kap) return;
  if (!R.g || R.g.__kap !== kap) { R.g = new P.Graphics(); R.g.__kap = kap; kap.addChild(R.g); try { kap.sortableChildren = true; } catch (e) {} }
  const g = R.g; g.zIndex = 50; g.clear();
  const delik = [];                                               // ["d", x, y, r] daire | ["k", x0, y0, x1, y1] dikdörtgen
  let koyu = 0.62;
  if (A2.t === "kadran") delik.push(["d", KAD[A2.k][0], KAD[A2.k][1], KR + 6]);
  else if (A2.t === "koy") delik.push(["k"].concat(TAHTA));
  else if (A2.t === "serbest" || A2.t === "tasi") { delik.push(["k"].concat(TAHTA)); delik.push(["d", KAD[0][0], KAD[0][1], KR + 6]); delik.push(["d", KAD[1][0], KAD[1][1], KR + 6]); }
  else if (A2.t === "sec") delik.push(["d"].concat(hc(A2.hucre), [52]));
  else if (A2.dik) delik.push(["k"].concat(DIK(A2.dik[0], A2.dik[1])));                       // v3
  else if (A2.hucreler) A2.hucreler.forEach((v) => delik.push(["d"].concat(hc(v), [52])));       // v3
  else if (A2.spot === "satir" || A2.kazan) delik.push(["k"].concat(SATIR4));
  else if (A2.t === "son") koyu = 0.55;
  else koyu = 0;
  if (koyu > 0) {
    const X0 = -800, Y0 = -1200, W = 2320, H = 3700;
    const sekil = (d) => {
      if (d[0] === "d") { if (g.drawCircle) g.drawCircle(d[1], d[2], d[3]); else g.circle(d[1], d[2], d[3]); }
      else { const r = 34; if (g.drawRoundedRect) g.drawRoundedRect(d[1], d[2], d[3] - d[1], d[4] - d[2], r); else g.roundRect(d[1], d[2], d[3] - d[1], d[4] - d[2], r); }
    };
    if (g.beginHole) {                                            // PIXI 7
      g.beginFill(0x0c1228, koyu); g.drawRect(X0, Y0, W, H);
      if (delik.length) { g.beginHole(); delik.forEach(sekil); g.endHole(); }
      g.endFill();
      if (delik.length) { const al = 0.55 + 0.45 * Math.abs(Math.sin(t * 3)); g.lineStyle(6, 0xffd646, al); delik.forEach(sekil); g.lineStyle(0); }
    } else if (g.rect && g.cut) {                                 // PIXI 8
      g.rect(X0, Y0, W, H).fill({ color: 0x0c1228, alpha: koyu });
      delik.forEach((d) => { sekil(d); g.cut(); });
      const al = 0.55 + 0.45 * Math.abs(Math.sin(t * 3));
      delik.forEach((d) => { sekil(d); g.stroke({ width: 6, color: 0xffd646, alpha: al }); });
    }
  }
})();

};
gdjs.RehberCode.userFunc0xfe8ce8 = function GDJSInlineCode(runtimeScene) {
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
gdjs.RehberCode.eventsList0 = function(runtimeScene) {

{


gdjs.RehberCode.userFunc0x1474f90(runtimeScene);

}


{


gdjs.RehberCode.userFunc0xfe8ce8(runtimeScene);

}


};

gdjs.RehberCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RehberCode.GDRZeminObjects1.length = 0;
gdjs.RehberCode.GDRIbreObjects1.length = 0;
gdjs.RehberCode.GDRPulObjects1.length = 0;
gdjs.RehberCode.GDRMatiObjects1.length = 0;
gdjs.RehberCode.GDRBalonObjects1.length = 0;
gdjs.RehberCode.GDRAtlaObjects1.length = 0;
gdjs.RehberCode.GDRDokunObjects1.length = 0;
gdjs.RehberCode.GDRElObjects1.length = 0;
gdjs.RehberCode.GDRKilitObjects1.length = 0;
gdjs.RehberCode.GDRBtnObjects1.length = 0;
gdjs.RehberCode.GDPanelAvatarObjects1.length = 0;
gdjs.RehberCode.GDRutbeRozetObjects1.length = 0;

gdjs.RehberCode.eventsList0(runtimeScene);
gdjs.RehberCode.GDRZeminObjects1.length = 0;
gdjs.RehberCode.GDRIbreObjects1.length = 0;
gdjs.RehberCode.GDRPulObjects1.length = 0;
gdjs.RehberCode.GDRMatiObjects1.length = 0;
gdjs.RehberCode.GDRBalonObjects1.length = 0;
gdjs.RehberCode.GDRAtlaObjects1.length = 0;
gdjs.RehberCode.GDRDokunObjects1.length = 0;
gdjs.RehberCode.GDRElObjects1.length = 0;
gdjs.RehberCode.GDRKilitObjects1.length = 0;
gdjs.RehberCode.GDRBtnObjects1.length = 0;
gdjs.RehberCode.GDPanelAvatarObjects1.length = 0;
gdjs.RehberCode.GDRutbeRozetObjects1.length = 0;


return;

}

gdjs['RehberCode'] = gdjs.RehberCode;
