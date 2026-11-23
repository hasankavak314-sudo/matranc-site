gdjs.CevrimiciCode = {};
gdjs.CevrimiciCode.localVariables = [];
gdjs.CevrimiciCode.idToCallbackMap = new Map();
gdjs.CevrimiciCode.GDCZeminObjects1= [];
gdjs.CevrimiciCode.GDCZeminObjects2= [];
gdjs.CevrimiciCode.GDCZeminObjects3= [];
gdjs.CevrimiciCode.GDCArayuzObjects1= [];
gdjs.CevrimiciCode.GDCArayuzObjects2= [];
gdjs.CevrimiciCode.GDCArayuzObjects3= [];
gdjs.CevrimiciCode.GDBtnMenuDonObjects1= [];
gdjs.CevrimiciCode.GDBtnMenuDonObjects2= [];
gdjs.CevrimiciCode.GDBtnMenuDonObjects3= [];
gdjs.CevrimiciCode.GDAdYaziObjects1= [];
gdjs.CevrimiciCode.GDAdYaziObjects2= [];
gdjs.CevrimiciCode.GDAdYaziObjects3= [];
gdjs.CevrimiciCode.GDBtnDegistirObjects1= [];
gdjs.CevrimiciCode.GDBtnDegistirObjects2= [];
gdjs.CevrimiciCode.GDBtnDegistirObjects3= [];
gdjs.CevrimiciCode.GDBtnKaydetObjects1= [];
gdjs.CevrimiciCode.GDBtnKaydetObjects2= [];
gdjs.CevrimiciCode.GDBtnKaydetObjects3= [];
gdjs.CevrimiciCode.GDBtnVazgecObjects1= [];
gdjs.CevrimiciCode.GDBtnVazgecObjects2= [];
gdjs.CevrimiciCode.GDBtnVazgecObjects3= [];
gdjs.CevrimiciCode.GDMesajYaziObjects1= [];
gdjs.CevrimiciCode.GDMesajYaziObjects2= [];
gdjs.CevrimiciCode.GDMesajYaziObjects3= [];
gdjs.CevrimiciCode.GDAdGirisObjects1= [];
gdjs.CevrimiciCode.GDAdGirisObjects2= [];
gdjs.CevrimiciCode.GDAdGirisObjects3= [];
gdjs.CevrimiciCode.GDBtnAraObjects1= [];
gdjs.CevrimiciCode.GDBtnAraObjects2= [];
gdjs.CevrimiciCode.GDBtnAraObjects3= [];
gdjs.CevrimiciCode.GDBtnDavetObjects1= [];
gdjs.CevrimiciCode.GDBtnDavetObjects2= [];
gdjs.CevrimiciCode.GDBtnDavetObjects3= [];
gdjs.CevrimiciCode.GDAramaGirisObjects1= [];
gdjs.CevrimiciCode.GDAramaGirisObjects2= [];
gdjs.CevrimiciCode.GDAramaGirisObjects3= [];
gdjs.CevrimiciCode.GDSonucAdObjects1= [];
gdjs.CevrimiciCode.GDSonucAdObjects2= [];
gdjs.CevrimiciCode.GDSonucAdObjects3= [];
gdjs.CevrimiciCode.GDSonucDurumObjects1= [];
gdjs.CevrimiciCode.GDSonucDurumObjects2= [];
gdjs.CevrimiciCode.GDSonucDurumObjects3= [];
gdjs.CevrimiciCode.GDBtnRastgeleObjects1= [];
gdjs.CevrimiciCode.GDBtnRastgeleObjects2= [];
gdjs.CevrimiciCode.GDBtnRastgeleObjects3= [];
gdjs.CevrimiciCode.GDBtnMektupObjects1= [];
gdjs.CevrimiciCode.GDBtnMektupObjects2= [];
gdjs.CevrimiciCode.GDBtnMektupObjects3= [];
gdjs.CevrimiciCode.GDPanelAvatarObjects1= [];
gdjs.CevrimiciCode.GDPanelAvatarObjects2= [];
gdjs.CevrimiciCode.GDPanelAvatarObjects3= [];
gdjs.CevrimiciCode.GDRutbeRozetObjects1= [];
gdjs.CevrimiciCode.GDRutbeRozetObjects2= [];
gdjs.CevrimiciCode.GDRutbeRozetObjects3= [];


gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnMenuDonObjects1Objects = Hashtable.newFrom({"BtnMenuDon": gdjs.CevrimiciCode.GDBtnMenuDonObjects1});
gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnDegistirObjects1Objects = Hashtable.newFrom({"BtnDegistir": gdjs.CevrimiciCode.GDBtnDegistirObjects1});
gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnVazgecObjects1Objects = Hashtable.newFrom({"BtnVazgec": gdjs.CevrimiciCode.GDBtnVazgecObjects1});
gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnKaydetObjects1Objects = Hashtable.newFrom({"BtnKaydet": gdjs.CevrimiciCode.GDBtnKaydetObjects1});
gdjs.CevrimiciCode.userFunc0x1472a60 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
const ad = runtimeScene.getVariables().get("girilenAd").getAsString();
if (window.MatrancCevrimici) {
  window.MatrancCevrimici.adDegistir(ad);
} else {
  runtimeScene.getGame().getVariables().get("adSonuc").setString("hata");
}
};
gdjs.CevrimiciCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.CevrimiciCode.userFunc0x1472a60(runtimeScene);

}


};gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnAraObjects1Objects = Hashtable.newFrom({"BtnAra": gdjs.CevrimiciCode.GDBtnAraObjects1});
gdjs.CevrimiciCode.userFunc0xe4ab30 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
const ad = runtimeScene.getVariables().get("aranacak").getAsString();
if (window.MatrancCevrimici) {
  window.MatrancCevrimici.ara(ad);
} else {
  runtimeScene.getGame().getVariables().get("aramaSonuc").setString("hata");
}
};
gdjs.CevrimiciCode.eventsList1 = function(runtimeScene) {

{


gdjs.CevrimiciCode.userFunc0xe4ab30(runtimeScene);

}


};gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnDavetObjects1Objects = Hashtable.newFrom({"BtnDavet": gdjs.CevrimiciCode.GDBtnDavetObjects1});
gdjs.CevrimiciCode.userFunc0x1470300 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (window.MatrancCevrimici) window.MatrancCevrimici.davetGonder();
};
gdjs.CevrimiciCode.eventsList2 = function(runtimeScene) {

{


gdjs.CevrimiciCode.userFunc0x1470300(runtimeScene);

}


};gdjs.CevrimiciCode.userFunc0x119c810 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Çevrimiçi SAHNESİ görünüm kodu v29 (v25 tabanına dönüş: klavye v25'teki gibi çalışır; yazı kutusu odaktayken liste kartı ve rütbe etiketi gizlenir (klavye zaten listeyi örter, kayma sırasında ayrışma görünmez); liste yeniden kurulunca mutlaka doldurulur; kısa duraklamada silinmez) · v25 (LİSTE DOKUNMA: parmak ekrandayken liste yeniden çizilmez — kalabalık listede ada/düğmeye dokunma kaybolmaz; İKİLİ SKOR rozeti adın yanında: yeşil önde, kırmızı geride, gri berabere) · v24 (GECE: 19.00–06.00 arası CZemin animasyon 1 = gece şehri; animasyon yoksa gündüz) · v23 (rütbe adı DAHİ (BÜYÜK USTA yerine)) · v22 (KULLANICI KARTI: sağda büyük rütbe rozeti (rutbe3) + altında mavi rütbe adı etiketi; galibiyet sayısı yok) · v21 (YENİ DÜZEN: arka plan menü manzarası (CZemin ekranı kaplar), büyük MEKTUP MAÇI (btn_mektup4_0…4) ve RASTGELE RAKİP (btn_rastgele_v5) düğmeleri, ince kullanıcı kartı, küçük arama kartı, WhatsApp yazısı yok, liste 6 satıra kadar — CArayuz matranc_c_arayuz_v226.png) · v20 (MEKTUP MAÇI düğmesi artık "Mektup" sahnesine geçer) · v19 (ÇEVRİMİÇİ başlığı lacivert pul — CArayuz matranc_c_arayuz_v225b.png; geri düğmesi BtnMenuDon btn_geri_pul_v1.png, başlığın solunda sabit (128, 110)) · v18 (YENİ DÜĞME TARZI: BtnAra btn_ara_v2, BtnDavet btn_davet_v2_0/_1 + btn_cagir_v2; listedeki DAVET ET/ÇAĞIR/arkadaş ekle/ENGELİ KALDIR düğmeleri pul tarzı (mtr-pul)) · v17 (üst düğmeler ince: btn_mektup3_0…4 ve btn_rastgele_v4, merkez 205/191 ve 515/191, başlık ile kart arasına sığar) · v16b (son oynadıklarım/arkadaşlarım listesinde yatay kaydırma yok) · v16 (MEKTUP MAÇI yalnız üstteki düğmeden: solda BtnMektup (btn_mektup2_0…4, sağ köşede sırası gelen sayısı) → pencere; sağda BtnRastgele (btn_rastgele_v3, YAKINDA); listelerde ve aramada zarf YOK; mektup penceresi açıkken arama kutusu gizlenir; çevrim içi kodu 10.1 gerekir) · v14e (liste düğmeleri dokulu 3B; çevrim içi kodu 9.3 gerekir) · v14d (RASTGELE RAKİP · YAKINDA düğmesi: YENİ nesne BtnRastgele (matranc_btn_rastgele_v2.png); CArayuz görseli matranc_c_arayuz_v224.png) · v14c (ana menüye dönünce liste kartı hemen kalkar) · v14b (canlı üç boyutlu liste düğmeleri; karakter resimleri pr_avatar — ilk 4 karakter de görünür) · v14 (ÇAĞIR: çevrimdışı arkadaşta yeşil ÇAĞIR düğmesi — aramada BtnDavet animasyon #2, listede HTML düğme; çevrim içi kodu 9.1 gerekir) · v13 (10 karakter) · v12 (menüye dönüş düğmesi %15 büyük: ölçek 0.575) · v10 (3. sekme ENGELLEDİKLERİM: engel kaldırma) · v9 (oyuncuya dokun → ŞİKÂYET ET / ENGELLE) v8 (+ ARKADAŞLARIM sekmesi) v7 (liste canlı: çevrimiçi durumu anında) v6 (+ SON OYNADIKLARIN listesi) v5 (arama kutusu puntosu tarayıcıda zorlanır) v3 (ad değiştirme kaldırıldı: yalnız Profil'de) v2 (yazı kutusu çerçevesiz, büyük yazı) (yeni tasarım: gökyüzü zemin, krem kartlar, avatar + rütbe)
// "Cevrimici" sahnesinin olaylarının EN ALTINA, KOŞULSUZ tek bir JavaScript olayı olarak koyun.
// Olaylara dokunmaz: her karede nesneleri yeni yerlerine koyar, renkleri ayarlar, avatarları gösterir.
// v14: BtnDavet nesnesine 3. animasyon (#2) eklenmeli: matranc_btn_cagir.png. CArayuz görseli: matranc_c_arayuz_v223.png.
// Kullandığı küresel nesneler: PanelAvatar (11 kare: 0–3 eski karakter, 4 MATİ, 5–10 karakter 4–9), RutbeRozet (7 kare).
// v13: karakter no → PanelAvatar karesi: n ≤ 3 ? n : n + 1
(function () {
  const S = runtimeScene;
  const G = S.getGame().getVariables();
  const ilk = (ad) => { try { const l = S.getObjects(ad); return l && l.length ? l[0] : null; } catch (e) { return null; } };
  const LAC = "44;56;98";
  // v29: yazı kutusu odakta mı (klavye açık)
  const yaziOdak = (() => { try { const a = document.activeElement; return !!a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA"); } catch (e) { return false; } })();
  let C = S.__mtrC;
  if (!C) {
    C = S.__mtrC = {};
    const yap = (ad, z) => { try { const o = S.createObject(ad); if (o) { o.setZOrder(z); o.hide(true); } return o; } catch (e) { return null; } };
    C.av = yap("PanelAvatar", 15); C.roz = yap("RutbeRozet", 16);
    C.bAv = yap("PanelAvatar", 15); C.bRoz = yap("RutbeRozet", 16);
    C.rg = yap("BtnMektup", 5);                         // v16: MEKTUP MAÇI (solda)
    C.rr = yap("BtnRastgele", 5);                       // v16: RASTGELE · YAKINDA (sağda)
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
  const L = S.getLayer(""), ust = L.getCameraY() - L.getCameraHeight() / 2;
  const merkez = (o, x, y, olcek) => { if (!o) return; if (olcek !== undefined && o.setScale) o.setScale(olcek); o.setPosition(x - o.getWidth() / 2, y - o.getHeight() / 2); };
  const kare = (o, k) => { if (o && o.getAnimationFrame() !== k) o.setAnimationFrame(k); if (o) o.pauseAnimation(); };
  const cap = (o, d) => { if (!o) return; o.setScale(1); const w = o.getWidth(); o.setScale(d / w); };

  // zemin + arayüz
  const z = ilk("CZemin");   // v21: menü manzarası, ekranı kaplar (üstü gökyüzü)
  if (z) {   // v24: gece şehri
    try { const sa = new Date().getHours(), ist = (sa >= 19 || sa < 6) ? 1 : 0; if (z.getAnimation() !== ist) z.setAnimation(ist); } catch (e) {}
    z.setScale(1); const zw = z.getWidth(), zh = z.getHeight();
    const zs = Math.max(L.getCameraWidth() / zw, L.getCameraHeight() / zh);
    z.setScale(zs); z.setPosition(L.getCameraX() - zw * zs / 2, ust); z.setZOrder(-10);
  }
  const a = ilk("CArayuz"); if (a) { a.setScale(0.5); a.setPosition(0, 60); a.setZOrder(0); }
  // düğmeler (merkezden)
  merkez(ilk("BtnMenuDon"), 128, 110, 0.575);   // v19: başlığın solunda
  // ad değiştirme artık yalnızca Profil'de: bu ekrandaki düğmeler ve yazı kutusu gizli ve ekran dışında
  for (const n of ["BtnDegistir", "BtnKaydet", "BtnVazgec", "AdGiris"]) {
    try { for (const o of S.getObjects(n) || []) { o.hide(true); o.setPosition(-3000, -3000); } } catch (e) {}
  }
  const adY = ilk("AdYazi"); if (adY) adY.hide(false);
  merkez(ilk("BtnAra"), 572, 584, 0.45);   // v21
  merkez(ilk("BtnDavet"), 580, 680, 0.42);
  // v14: arama sonucu çevrimdışıysa (animasyon 1 = soluk DAVET ET) → ÇAĞIR (animasyon 2) ve dokununca çağrı
  try {
    const bd = ilk("BtnDavet"), M0 = window.MatrancCevrimici;
    if (bd && !bd.isHidden() && bd.getAnimation() !== 0) {
      if (bd.getAnimation() === 1) { bd.setAnimation(2); merkez(bd, 580, 680, 0.42); }
      const im = S.getGame().getInputManager();
      const engel = document.getElementById("mtrPencere") || document.getElementById("mtrBant");
      if (M0 && M0.cagir && im.isMouseButtonReleased(0) && !engel) {
        const p = L.convertCoords(im.getCursorX(), im.getCursorY(), 0);
        if (p[0] >= bd.getX() && p[0] <= bd.getX() + bd.getWidth() && p[1] >= bd.getY() && p[1] <= bd.getY() + bd.getHeight()) {
          try { M0.sesCal && M0.sesCal(); } catch (e) {}
          M0.cagir(G.get("bulunanUid").getAsString(), G.get("bulunanAd").getAsString());
        }
      }
    }
  } catch (e) {}
  // v16: MEKTUP MAÇI düğmesi — sağdaki sayı: sırası sende olan maç + gelen davet
  try {
    const M0 = window.MatrancCevrimici;
    if (C.rg) {
      C.rg.hide(false);
      const n = M0 && M0.mektupSayi ? M0.mektupSayi() : 0;
      kare(C.rg, Math.min(4, n));
      const zip = C.rgZip ? Math.max(0, 1 - (Date.now() - C.rgZip) / 180) : 0;
      merkez(C.rg, 190, 262, 0.5 * (1 - 0.05 * Math.sin(zip * Math.PI)));   // v21
      const im = S.getGame().getInputManager();
      const engel = document.getElementById("mtrPencere") || document.getElementById("mtrBant") || document.getElementById("mtrMektup");
      if (!engel && im.isMouseButtonReleased(0)) {
        const p = L.convertCoords(im.getCursorX(), im.getCursorY(), 0);
        if (p[0] >= C.rg.getX() && p[0] <= C.rg.getX() + C.rg.getWidth() && p[1] >= C.rg.getY() + 16 && p[1] <= C.rg.getY() + C.rg.getHeight() - 4) {
          C.rgZip = Date.now();
          try { M0 && M0.sesCal && M0.sesCal(); } catch (e) {}
          if (M0 && M0.sahneDegistir) M0.sahneDegistir(M0.MEKTUP_SAHNESI || "Mektup");   // v20
        }
      }
    }
    if (C.rr) {                                          // RASTGELE · YAKINDA
      C.rr.hide(false);
      const zip2 = C.rrZip ? Math.max(0, 1 - (Date.now() - C.rrZip) / 180) : 0;
      merkez(C.rr, 530, 262, 0.5 * (1 - 0.05 * Math.sin(zip2 * Math.PI)));
      const im = S.getGame().getInputManager();
      const engel = document.getElementById("mtrPencere") || document.getElementById("mtrBant") || document.getElementById("mtrMektup");
      if (!engel && im.isMouseButtonReleased(0)) {
        const p = L.convertCoords(im.getCursorX(), im.getCursorY(), 0);
        if (p[0] >= C.rr.getX() && p[0] <= C.rr.getX() + C.rr.getWidth() && p[1] >= C.rr.getY() + 16 && p[1] <= C.rr.getY() + C.rr.getHeight() - 4) {
          C.rrZip = Date.now();
          try { M0 && M0.sesCal && M0.sesCal(); } catch (e) {}
          if (M0 && M0.pencereAc) {
            const pen = M0.pencereAc();
            const kart = document.getElementById("mtrPencere");
            if (kart) kart.querySelector(".mtr-mesaj").innerHTML =
              '<div style="font-size:30px;font-weight:800;color:#2b3452;margin-bottom:6px">Çok yakında!</div>' +
              '<div style="font-size:17px;font-weight:700;color:#5a6280;line-height:1.4">Rastgele bir rakiple eşleşip<br>hemen oynayabileceksin.</div>';
            pen.dugme("TAMAM", M0.pencereKapat);
          }
        }
      }
    }
  } catch (e) {}
  // yazılar (sol hizalı, dikey ortalı)
  const yazi = (ad, x, cy, boy, renk) => {
    const t = ilk(ad); if (!t) return null;
    try { if (t.getCharacterSize() !== boy) t.setCharacterSize(boy); } catch (e) {}
    if (renk) try { t.setColor(renk); } catch (e) {}
    t.setPosition(x, cy - t.getHeight() / 2); t.setZOrder(12);
    return t;
  };
  yazi("AdYazi", 170, 442, 30, LAC);   // v21
  yazi("MesajYazi", 170, 470, 13, "214;70;74");
  const ad = ilk("SonucAd"), dr = ilk("SonucDurum");
  const bulundu = !!(ad && !ad.isHidden() && ad.getText && ad.getText() !== "");
  yazi("SonucAd", 168, 664, 24, LAC);
  if (dr) {
    let renk = null;
    try { const c = dr.getColor(); if (c === "46;204;113") renk = "40;150;80"; else if (c === "244;245;248" || c === "255;255;255") renk = LAC; } catch (e) {}
    yazi("SonucDurum", bulundu ? 168 : 76, bulundu ? 698 : 680, 17, renk);
  }
  // yazı kutuları
  const kutu = (ad, x, y, w, h, boy) => {
    const t = ilk(ad); if (!t) return;
    t.setPosition(x, y); t.setWidth(w); t.setHeight(h); t.setZOrder(12);
    try { t.setTextColor(LAC); } catch (e) {}
    try { t.setFillOpacity(0); } catch (e) {}            // kutu görseli zeminde zaten var: iç çerçeve/dolgu yok
    try { t.setBorderOpacity(0); } catch (e) {}
    try { t.setBorderWidth(0); } catch (e) {}
    try { if (t.getFontSize() !== (boy || 26)) t.setFontSize(boy || 26); } catch (e) {}
  };
  kutu("AramaGiris", 70, 556, 372, 56, 36);   // v21
  { const ag = ilk("AramaGiris"); if (ag) ag.hide(!!document.getElementById("mtrMektup")); }   // v16: mektup penceresi açıkken yazı kutusu üstte kalmasın
  // Yazı kutusunun puntosu: GDevelop ayarı uygulanmadığı için doğrudan tarayıcıda zorlanır.
  // Kutu yüksekliğinin %55'i kadar; ekran boyutuna göre her karede hesaplanır.
  try {
    const R = S.getGame().getRenderer();
    const kap = R.getDomElementContainer ? R.getDomElementContainer() : null;
    const tuval = R.getCanvas ? R.getCanvas() : null;
    if (kap && tuval) {
      kap.classList.add("mtr-cev");
      const olcek = (tuval.getBoundingClientRect().height / S.getGame().getGameResolutionHeight()) * (L.getCameraZoom ? L.getCameraZoom() : 1);
      const px = Math.max(12, Math.round(54 * olcek * 0.55));
      let st = document.getElementById("mtrCevStil");
      if (!st) { st = document.createElement("style"); st.id = "mtrCevStil"; document.head.appendChild(st); }
      const css = ".mtr-cev input, .mtr-cev textarea { font-size: " + px + "px !important; font-weight: 600 !important; }";
      if (st.textContent !== css) st.textContent = css;
    }
  } catch (e) {}
  // kendi avatarın + rütbe rozetin
  if (C.av) { C.av.hide(false); kare(C.av, C.avatar >= 0 && C.avatar <= 9 ? (C.avatar <= 3 ? C.avatar : C.avatar + 1) : 0); cap(C.av, 80); merkez(C.av, 104, 435); }
  // v22: KULLANICI KARTI — sağda büyük rütbe rozeti (kartın üstünden hafif taşar) + altında rütbe adı etiketi (galibiyet sayısı yok)
  const mektupAcik = !!document.getElementById("mtrMektup");
  if (C.roz) { C.roz.hide(false); kare(C.roz, rutbe(C.gal)); cap(C.roz, 122); merkez(C.roz, 606, 424); C.roz.setZOrder(14); }
  try {
    const RUTBE_AD = ["ÇIRAK", "HESAPÇI", "ÇARPAN", "STRATEJİST", "USTA", "DAHİ", "MATRANÇÖR"];
    const R0 = S.getGame().getRenderer(), tv = R0.getCanvas ? R0.getCanvas() : null;
    let et = document.getElementById("mtrRutbeEtk");
    if (tv && !mektupAcik) {
      if (!et) {
        et = document.createElement("div"); et.id = "mtrRutbeEtk";
        et.style.cssText = "position:fixed;z-index:98000;pointer-events:none;transform:translate(-50%,-50%);white-space:nowrap;font-family:Poppins,'Poppins-Bold',-apple-system,'Segoe UI',Roboto,sans-serif;" +
          "font-weight:900;color:#fff;background:linear-gradient(#5aa7ec,#2e74c9);border-radius:999px;letter-spacing:.3px";
        document.body.appendChild(et);
        if (!window.__mtrRutbeBekci) window.__mtrRutbeBekci = setInterval(() => { const e = document.getElementById("mtrRutbeEtk"); if (e && Date.now() - (e.__son || 0) > 600) e.remove(); }, 60);
      }
      const r = tv.getBoundingClientRect(), zoom = L.getCameraZoom ? L.getCameraZoom() : 1;
      const olc = (r.height / S.getGame().getGameResolutionHeight()) * zoom, sol = L.getCameraX() - L.getCameraWidth() / 2;
      const ad = RUTBE_AD[rutbe(C.gal)];
      if (et.textContent !== ad) et.textContent = ad;
      et.style.left = (r.left + (606 - sol) * olc) + "px"; et.style.top = (r.top + (486 - ust) * olc) + "px";
      et.style.fontSize = (19 * olc) + "px"; et.style.padding = (4 * olc) + "px " + (16 * olc) + "px";
      et.style.boxShadow = "0 " + (4 * olc) + "px 0 #1c4f93, 0 " + (6 * olc) + "px " + (10 * olc) + "px rgba(0,0,0,.25)";
      et.style.visibility = yaziOdak ? "hidden" : "visible";   // v29
      et.__son = Date.now();
    } else if (et) et.remove();
  } catch (e) {}
  // bulunan oyuncunun avatarı + rozeti
  let bav = -1, bgal = -1;
  try { if (G.has("bulunanAvatar")) bav = Math.round(G.get("bulunanAvatar").getAsNumber()); } catch (e) {}
  try { if (G.has("bulunanGal")) bgal = G.get("bulunanGal").getAsNumber(); } catch (e) {}
  if (C.bAv) { C.bAv.hide(!bulundu); if (bulundu) { kare(C.bAv, bav >= 0 && bav <= 9 ? (bav <= 3 ? bav : bav + 1) : 0); cap(C.bAv, 74); merkez(C.bAv, 108, 680); } }
  if (C.bRoz) { C.bRoz.hide(!(bulundu && bgal >= 0)); if (bulundu && bgal >= 0) { kare(C.bRoz, rutbe(bgal)); cap(C.bRoz, 28); merkez(C.bRoz, 76, 650); } }

  // ---------------- SON OYNADIKLARIM + ARKADAŞLARIM (HTML kart, iki sekme; çevrimiçi kodu 8.8 gerekir)
  try {
    const M = window.MatrancCevrimici;
    if (M && M.sonRakipOku && M.arkadasOku) {
      const R = S.getGame().getRenderer(), tuval = R.getCanvas ? R.getCanvas() : null;
      const sonL = M.sonRakipOku(), arkL = M.arkadasOku(), engL = M.engelOku ? M.engelOku() : [];
      const temizle = () => { const D = window.__mtrSRdin || {}; for (const u in D) { try { D[u](); } catch (e) {} delete D[u]; } };
      let kart = document.getElementById("mtrSonRakip");
      if (!tuval || (!sonL.length && !arkL.length && !engL.length)) { if (kart) kart.remove(); temizle(); }
      else {
        const r = tuval.getBoundingClientRect();
        const zoom = L.getCameraZoom ? L.getCameraZoom() : 1;
        const olc = (r.height / S.getGame().getGameResolutionHeight()) * zoom;
        const sol = L.getCameraX() - L.getCameraWidth() / 2, alt = L.getCameraY() + L.getCameraHeight() / 2;
        const ekX = (x) => r.left + (x - sol) * olc, ekY = (y) => r.top + (y - ust) * olc;
        const UST_Y = 800, SATIR = 62, BAS = 66;   // v21: liste yukarıda, 6 satıra kadar
        const sigan = Math.max(1, Math.min(6, Math.floor((alt - 24 - UST_Y - BAS - 18) / SATIR)));
        const C2 = S.__mtrSR || (S.__mtrSR = { bilgi: {}, sekme: window.__mtrSekme || 0, silOnay: null });
        if (C2.sekme === 2 && !engL.length) C2.sekme = sonL.length ? 0 : 1;
        if (C2.sekme === 0 && !sonL.length) C2.sekme = arkL.length || !engL.length ? 1 : 2;
        if (C2.sekme === 1 && !arkL.length && sonL.length) C2.sekme = 0;
        else if (C2.sekme === 1 && !arkL.length && !sonL.length && engL.length) C2.sekme = 2;
        window.__mtrSekme = C2.sekme;
        const gos = C2.sekme === 0 ? sonL.slice(0, 6) : C2.sekme === 1 ? arkL : engL;
        if (!kart) {
          kart = document.createElement("div"); kart.id = "mtrSonRakip";
          if (!document.getElementById("mtrSonRakipStil4")) {
            const st = document.createElement("style"); st.id = "mtrSonRakipStil4";
            st.textContent =
              "#mtrSonRakip{position:fixed;z-index:99000;box-sizing:border-box;background:#fbf8f0;border-radius:18px;" +
              "box-shadow:0 6px 18px rgba(30,40,80,.18),inset 0 0 0 2px #fff;font-family:Poppins,-apple-system,'Segoe UI',Roboto,sans-serif;color:#2c3862}" +
              "#mtrSonRakip .sek{display:flex;background:#eaeef6;border-radius:999px}" +
              "#mtrSonRakip .sek button{flex:1;border:none;background:none;border-radius:999px;font-weight:800;color:#8c92a6;cursor:pointer;font-family:inherit}" +
              "#mtrSonRakip .sek button.ac{background:#fff;color:#2c3862;box-shadow:0 1px 3px rgba(0,0,0,.08)}" +
              "#mtrSonRakip .lst{overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}" +
              "#mtrSonRakip .s{display:flex;align-items:center;border-top:1.5px solid #e6e8f0}" +
              "#mtrSonRakip .s:first-child{border-top:none}" +
              "#mtrSonRakip .av{position:relative;flex:none;border-radius:50%;background:#dfe5f2 center/cover no-repeat;" +
              "display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff}" +
              "#mtrSonRakip .nk{position:absolute;right:-1px;bottom:-1px;border-radius:50%;border:2px solid #fff;background:#b4b8c4}" +
              "#mtrSonRakip .nk.on{background:#3cbe64}" +
              "#mtrSonRakip .ad{flex:1;min-width:0;line-height:1.15}" +
              "#mtrSonRakip .ad div:first-child{font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
              "#mtrSonRakip .ad div:last-child{font-weight:600;color:#969cb0}" +
              "#mtrSonRakip .ad div.on{color:#3ca05a}" +
              "#mtrSonRakip .mtr-pul{margin-bottom:5px}" +
              "#mtrSonRakip .x{flex:none;border:none;background:none;color:#bcc0cc;font-weight:800;cursor:pointer;font-family:inherit;border-radius:999px}" +
              "#mtrSonRakip .x.onay{background:#e2464a;color:#fff}" +
              "#mtrSonRakip .bos{color:#969cb0;font-weight:600;text-align:center}" +
              "#mtrSonRakip .sk{flex:none;border-radius:999px;color:#fff;font-weight:800;text-align:center;white-space:nowrap}" +
              "#mtrSonRakip .sk.on{background:#2ea050}#mtrSonRakip .sk.ge{background:#dc4646}#mtrSonRakip .sk.es{background:#7a82a0}" +
            document.head.appendChild(st);
          }
          try { window.MatrancCevrimici && window.MatrancCevrimici.dugme3BStil && window.MatrancCevrimici.dugme3BStil(); } catch (e) {}   // v14e
          try { window.MatrancCevrimici && window.MatrancCevrimici.pulStil && window.MatrancCevrimici.pulStil(); } catch (e) {}   // v18
          document.body.appendChild(kart);
          C2.imza = null; C2.basili = false;   // v29: yeni kurulan kart her zaman doldurulur
          // v25: parmak ekrandayken (ve bıraktıktan 300 ms sonrasına kadar) liste yeniden çizilmez
          const basla = () => { const C = S.__mtrSR; if (C) C.basili = true; };
          const bitir = () => { const C = S.__mtrSR; if (C) { C.basili = false; C.birak = Date.now(); } };
          ["pointerdown", "touchstart", "mousedown"].forEach((ev) => kart.addEventListener(ev, basla, { capture: true, passive: true }));
          ["pointerup", "pointercancel", "touchend", "touchcancel", "mouseup"].forEach((ev) => kart.addEventListener(ev, bitir, { capture: true, passive: true }));
          const kartKaldir = () => {
            const k = document.getElementById("mtrSonRakip"); if (k) k.remove();
            const D = window.__mtrSRdin || {}; for (const u in D) { try { D[u](); } catch (e) {} delete D[u]; }
          };
          // v14c: sahneden çıkılınca kart HEMEN kalksın (eskiden yarım saniye ana menüde kalıyordu)
          if (!window.__mtrSonRakipCikis) {
            window.__mtrSonRakipCikis = true;
            try { gdjs.registerRuntimeSceneUnloadingCallback(() => kartKaldir()); } catch (e) {}
            try { gdjs.registerRuntimeScenePausedCallback && gdjs.registerRuntimeScenePausedCallback(() => kartKaldir()); } catch (e) {}
          }
          if (!window.__mtrSonRakipBekci) window.__mtrSonRakipBekci = setInterval(() => {
            const k = document.getElementById("mtrSonRakip");
            if (k && Date.now() - (k.__son || 0) > 600) {
              k.remove();
              const D = window.__mtrSRdin || {}; for (const u in D) { try { D[u](); } catch (e) {} delete D[u]; }
            }
          }, 60);
        }
        kart.style.visibility = yaziOdak ? "hidden" : "visible";   // v29
        kart.__son = Date.now();
        const gorunen = Math.max(1, Math.min(sigan, gos.length || 1));
        const H = BAS + gorunen * SATIR + 12;
        kart.style.left = ekX(16) + "px"; kart.style.top = ekY(UST_Y) + "px";   // v21: kartlarla aynı genişlik
        kart.style.width = (688 * olc) + "px"; kart.style.height = (H * olc) + "px";
        kart.style.padding = (10 * olc) + "px " + (16 * olc) + "px";
        // canlı dinleme: gösterilen kişiler için Firebase dinleyicisi
        const DIN = window.__mtrSRdin || (window.__mtrSRdin = {});
        const istenen = {}; if (C2.sekme !== 2) gos.forEach((x) => istenen[x.u] = 1);
        for (const u in DIN) if (!istenen[u]) { try { DIN[u](); } catch (e) {} delete DIN[u]; }
        for (const x of gos) if (C2.sekme !== 2 && !DIN[x.u]) {
          DIN[x.u] = firebase.firestore().collection("oyuncular").doc(x.u).onSnapshot((sn) => {
            const d = sn.exists ? sn.data() : {};
            const son = d.sonGorulme && d.sonGorulme.toMillis ? d.sonGorulme.toMillis() : 0;
            C2.bilgi[x.u] = { ad: d.ad || x.a, av: Number(d.avatar), son: son, ac: d.cevrimici !== false && d.musait !== false };
          }, () => {});
        }
        const ESIK = (M.CEVRIMICI_ESIK || 40000);
        for (const x of gos) { const b = C2.bilgi[x.u]; if (b) b.on = !!b.ac && Date.now() - b.son < ESIK; }
        if (!C2.avUrl) {
          C2.avUrl = {};
          try {
            const res = (S.getGame().getGameData().resources || {}).resources || [];
            // v14b: karakter resimleri pr_avatar_0..3 / pr_avatar_c4..c9 (yoksa panel_avatar_…); panel_avatar_4 = MATİ, alınmaz
            const bul = (re) => { for (const rs of res) { const ad = (rs.name || "") + " " + (rs.file || ""); if (re.test(ad)) return rs.file || ""; } return ""; };
            for (let k = 0; k <= 9; k++) {
              const c = k <= 3 ? "" : "c";
              const f = bul(new RegExp("pr_avatar_" + c + k + "\\.", "i")) || bul(new RegExp("panel_avatar_" + c + k + "\\.", "i"));
              if (f) C2.avUrl[k] = f;
            }
          } catch (e) {}
        }
        if (C2.silOnay && Date.now() - C2.silOnay.t > 3000) { C2.silOnay = null; C2.imza = ""; }   // "Sil?" 3 sn sonra geri döner
        const arkSet = {}; arkL.forEach((x) => arkSet[x.u] = 1);
        const imza = olc.toFixed(3) + "|" + C2.sekme + "|" + engL.length + "|" + gorunen + "|" + (C2.silOnay ? C2.silOnay.u : "") + "|" +
          gos.map((x) => { const b = C2.bilgi[x.u] || {}; return x.u + (b.ad || x.a) + b.on + b.av + (arkSet[x.u] ? "A" : ""); }).join(",");
        // v25: ikili skorlar (ikili/{uidA_uidB}); her kişi için en çok dakikada bir okunur
        C2.skor = C2.skor || {};
        if (C2.sekme !== 2 && M.uid) for (const x of gos) {
          const sk = C2.skor[x.u];
          if (!sk || (!sk.yukleniyor && Date.now() - sk.t > 60000)) {
            C2.skor[x.u] = Object.assign(sk || {}, { yukleniyor: true, t: Date.now() });
            firebase.firestore().collection("ikili").doc([M.uid, x.u].sort().join("_")).get().then((d) => {
              const v = d.exists ? d.data() : {};
              C2.skor[x.u] = { b: Math.round(Number(v[M.uid]) || 0), o: Math.round(Number(v[x.u]) || 0), t: Date.now(), yukleniyor: false };
            }).catch(() => { C2.skor[x.u].yukleniyor = false; });
          }
        }
        const skorImza = gos.map((x) => { const k = C2.skor[x.u] || {}; return (k.b || 0) + "-" + (k.o || 0); }).join(",");
        if (imza + "|" + skorImza !== C2.imza && !C2.basili && Date.now() - (C2.birak || 0) > 300) {
          C2.imza = imza + "|" + skorImza;
          const f = (n) => Math.round(n * olc) + "px";
          const kisiIkon = "<svg viewBox='0 0 24 24' width='" + f(26) + "' height='" + f(26) + "'><circle cx='9' cy='8' r='4' fill='#1e2a5a'/><path d='M1.5 21c0-4.4 3.4-7 7.5-7s7.5 2.6 7.5 7z' fill='#1e2a5a'/><path d='M19 7v8M15 11h8' stroke='#1e2a5a' stroke-width='2.6' stroke-linecap='round'/></svg>";
          const balonIkon = "<svg viewBox='0 0 24 24' width='" + f(20) + "' height='" + f(20) + "' style='vertical-align:-" + f(4) + ";margin-right:" + f(6) + "'><circle cx='12.5' cy='11' r='8' fill='none' stroke='#fff' stroke-width='2.6'/><path d='M5.2 15.5L3 21.5l6-2.6z' fill='#fff'/></svg>";   // v14
          const tikIkon = "<svg viewBox='0 0 24 24' width='" + f(24) + "' height='" + f(24) + "'><path d='M5 12.5l4.5 4.5L19 7.5' fill='none' stroke='#fff' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/></svg>";
          let h = "<div class='sek' style='height:" + f(46) + ";margin-bottom:" + f(8) + "'>" +
            "<button data-s='0' class='" + (C2.sekme === 0 ? "ac" : "") + "' style='font-size:" + f(engL.length ? 13 : 15) + ";margin:" + f(4) + "'>SON OYNADIKLARIM</button>" +
            "<button data-s='1' class='" + (C2.sekme === 1 ? "ac" : "") + "' style='font-size:" + f(engL.length ? 13 : 15) + ";margin:" + f(4) + "'>ARKADAŞLARIM</button>" +
            (engL.length ? "<button data-s='2' class='" + (C2.sekme === 2 ? "ac" : "") + "' style='font-size:" + f(13) + ";margin:" + f(4) + "'>ENGELLEDİKLERİM</button>" : "") + "</div>";
          h += "<div class='lst' style='max-height:" + f(gorunen * SATIR) + "'>";
          if (!gos.length) {
            h += "<div class='bos' style='font-size:" + f(16) + ";line-height:" + f(SATIR) + "'>" +
              (C2.sekme === 0 ? "Henüz kimseyle oynamadın." : "Son oynadıklarından arkadaş ekleyebilirsin.") + "</div>";
          }
          gos.forEach((x, i) => {
            if (C2.sekme === 2) {   // v10: ENGELLEDİKLERİM satırı
              const adE = (x.a || "?").replace(/[<>&"']/g, "");
              h += "<div class='s' style='height:" + f(SATIR) + "'>" +
                "<div class='av' style='width:" + f(48) + ";height:" + f(48) + ";font-size:" + f(20) + ";background-color:#c9ced9'>" + adE.charAt(0).toUpperCase() + "</div>" +
                "<div class='ad' style='margin-left:" + f(16) + "'><div style='font-size:" + f(22) + "'>" + adE + "</div><div style='font-size:" + f(15) + "'>engellendi</div></div>" +
                "<button class='kl mtr-pul y' data-k='" + i + "' style='padding:0 " + f(14) + ";height:" + f(44) + ";font-size:" + f(14) + "'><span>ENGELİ KALDIR</span></button></div>";
              return;
            }
            const b = C2.bilgi[x.u] || {}, ad = (b.ad || x.a || "?").replace(/[<>&"']/g, ""), on = !!b.on;
            const url = b.av >= 0 && C2.avUrl[Math.round(b.av)] ? C2.avUrl[Math.round(b.av)] : "";
            h += "<div class='s' style='height:" + f(SATIR) + "'>" +
              "<div class='av' data-o='" + i + "' style='cursor:pointer;width:" + f(48) + ";height:" + f(48) + ";font-size:" + f(20) + (url ? ";background-image:url(\"" + url + "\")" : "") + "'>" +
              (url ? "" : ad.charAt(0).toUpperCase()) + "<span class='nk" + (on ? " on" : "") + "' style='width:" + f(14) + ";height:" + f(14) + "'></span></div>" +
              "<div class='ad' data-o='" + i + "' style='cursor:pointer;margin-left:" + f(16) + "'><div style='font-size:" + f(22) + "'>" + ad + "</div><div class='" + (on ? "on" : "") + "' style='font-size:" + f(15) + "'>" + (on ? "çevrimiçi" : "çevrimdışı") + "</div></div>";
            const sk = C2.skor[x.u];   // v25: ikili skor rozeti
            if (sk && (sk.b || sk.o)) h += "<span class='sk " + (sk.b > sk.o ? "on" : sk.b < sk.o ? "ge" : "es") + "' style='font-size:" + f(15) + ";padding:" + f(5) + " " + f(10) + ";margin-right:" + f(8) + "'>" + sk.b + " – " + sk.o + "</span>";
            if (C2.sekme === 0) {
              const vr = !!arkSet[x.u];
              h += "<button class='ek mtr-pul yuv" + (vr ? " y var" : "") + "' data-e='" + i + "' style='width:" + f(44) + ";height:" + f(44) + ";margin-right:" + f(12) + "' title='" + (vr ? "Arkadaşın" : "Arkadaş ekle") + "'><span>" + (vr ? tikIkon : kisiIkon) + "</span></button>";
            }
            if (on || !M.cagir) h += "<button class='dv mtr-pul " + (on ? "y" : "g") + "' data-i='" + i + "' style='width:" + f(140) + ";height:" + f(44) + ";font-size:" + f(16) + "'" + (on ? "" : " disabled") + "><span>DAVET ET</span></button>";
            else h += "<button class='dv cg mtr-pul y' data-c='" + i + "' style='width:" + f(140) + ";height:" + f(44) + ";font-size:" + f(16) + "'><span>" + balonIkon + "ÇAĞIR</span></button>";   // v14
            if (C2.sekme === 1) {
              const onay = C2.silOnay && C2.silOnay.u === x.u;
              h += "<button class='x" + (onay ? " onay" : "") + "' data-x='" + i + "' style='margin-left:" + f(6) + ";height:" + f(34) + ";min-width:" + f(34) + ";font-size:" + f(onay ? 14 : 22) + ";padding:0 " + f(onay ? 10 : 0) + "'>" + (onay ? "SİL?" : "×") + "</button>";
            }
            h += "</div>";
          });
          h += "</div>";
          const eskiL = kart.querySelector(".lst"), kaydir = eskiL ? eskiL.scrollTop : 0;
          kart.innerHTML = h;
          const yeniL = kart.querySelector(".lst"); if (yeniL && C2.sekme === C2.sonSekme) yeniL.scrollTop = kaydir;
          C2.sonSekme = C2.sekme;
          kart.querySelectorAll(".sek button").forEach((btn) => btn.onclick = (ev) => {
            ev.stopPropagation(); C2.sekme = +btn.dataset.s; window.__mtrSekme = C2.sekme; C2.silOnay = null; C2.imza = "";
            try { M.sesCal && M.sesCal(); } catch (e) {}
          });
          kart.querySelectorAll(".cg").forEach((btn) => btn.onclick = (ev) => {   // v14: ÇAĞIR
            ev.stopPropagation(); const x = gos[+btn.dataset.c]; if (!x) return;
            try { M.sesCal && M.sesCal(); } catch (e) {}
            M.cagir(x.u, (C2.bilgi[x.u] || {}).ad || x.a);
          });
          kart.querySelectorAll(".dv:not(.cg)").forEach((btn) => btn.onclick = (ev) => {
            ev.stopPropagation(); const x = gos[+btn.dataset.i]; if (!x) return;
            try { M.sesCal && M.sesCal(); } catch (e) {}
            M.davetEt(x.u, (C2.bilgi[x.u] || {}).ad || x.a);
          });
          kart.querySelectorAll(".ek").forEach((btn) => btn.onclick = (ev) => {
            ev.stopPropagation(); const x = gos[+btn.dataset.e]; if (!x || arkSet[x.u]) return;
            try { M.sesCal && M.sesCal(); } catch (e) {}
            M.arkadasEkle(x.u, (C2.bilgi[x.u] || {}).ad || x.a); C2.imza = "";
          });
          // v9: oyuncunun adına/avatarına dokununca ŞİKÂYET ET / ENGELLE penceresi
          kart.querySelectorAll("[data-o]").forEach((el) => el.onclick = (ev) => {
            ev.stopPropagation(); const x = gos[+el.dataset.o]; if (!x || !M.oyuncuPencere) return;
            try { M.sesCal && M.sesCal(); } catch (e) {}
            const b = C2.bilgi[x.u] || {};
            const url = b.av >= 0 && C2.avUrl[Math.round(b.av)] ? C2.avUrl[Math.round(b.av)] : "";
            M.oyuncuPencere(x.u, b.ad || x.a, url, !!b.on);
          });
          kart.querySelectorAll(".kl").forEach((btn) => btn.onclick = (ev) => {   // v10: engeli kaldır
            ev.stopPropagation(); const x = gos[+btn.dataset.k]; if (!x) return;
            try { M.sesCal && M.sesCal(); } catch (e) {}
            try {
              const yeni = M.engelOku().filter((y) => y.u !== x.u);
              gdjs.evtTools.storage.writeStringInJSONFile("matranc", M.ENG_ANAHTAR || "engellenenler", JSON.stringify(yeni));
              M.__engel = null;
            } catch (e) {}
            C2.imza = "";
          });
          kart.querySelectorAll(".x").forEach((btn) => btn.onclick = (ev) => {
            ev.stopPropagation(); const x = gos[+btn.dataset.x]; if (!x) return;
            if (C2.silOnay && C2.silOnay.u === x.u) { M.arkadasSil(x.u); C2.silOnay = null; }
            else C2.silOnay = { u: x.u, t: Date.now() };
            C2.imza = "";
          });
        }
      }
    }
  } catch (e) {}
})();
};
gdjs.CevrimiciCode.asyncCallback23395140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CevrimiciCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}
gdjs.CevrimiciCode.localVariables.length = 0;
}
gdjs.CevrimiciCode.idToCallbackMap.set(23395140, gdjs.CevrimiciCode.asyncCallback23395140);
gdjs.CevrimiciCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CevrimiciCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Share__Share.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(22).getAsString(), "", "MATRANÇ", null), (runtimeScene) => (gdjs.CevrimiciCode.asyncCallback23395140(runtimeScene, asyncObjectsList)), 23395140, asyncObjectsList);
}
}

}


};gdjs.CevrimiciCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdGiris"), gdjs.CevrimiciCode.GDAdGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("AramaGiris"), gdjs.CevrimiciCode.GDAramaGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnAra"), gdjs.CevrimiciCode.GDBtnAraObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnDavet"), gdjs.CevrimiciCode.GDBtnDavetObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnDegistir"), gdjs.CevrimiciCode.GDBtnDegistirObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnKaydet"), gdjs.CevrimiciCode.GDBtnKaydetObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenuDon"), gdjs.CevrimiciCode.GDBtnMenuDonObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnVazgec"), gdjs.CevrimiciCode.GDBtnVazgecObjects1);
gdjs.copyArray(runtimeScene.getObjects("CArayuz"), gdjs.CevrimiciCode.GDCArayuzObjects1);
gdjs.copyArray(runtimeScene.getObjects("CZemin"), gdjs.CevrimiciCode.GDCZeminObjects1);
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAd"), gdjs.CevrimiciCode.GDSonucAdObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDCZeminObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCZeminObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCZeminObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCZeminObjects1[i].setX(-160);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCZeminObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCZeminObjects1[i].setY(-160);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCZeminObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCZeminObjects1[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCArayuzObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCArayuzObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCArayuzObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCArayuzObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCArayuzObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCArayuzObjects1[i].setY(0);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDCArayuzObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDCArayuzObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnMenuDonObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnMenuDonObjects1[i].setX(218);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnMenuDonObjects1[i].setY(1098);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnMenuDonObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].setX(90);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].setY(280);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].setZOrder(10);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].setX(428);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].setY(333);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].setX(308);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].setY(333);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].setX(468);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].setY(333);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].setX(90);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].setY(356);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].setX(90);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].setY(272);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].getBehavior("Resizable").setWidth(540);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].getBehavior("Resizable").setHeight(62);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnAraObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnAraObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnAraObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnAraObjects1[i].setX(503);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnAraObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnAraObjects1[i].setY(523);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnAraObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnAraObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].setX(418);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].setY(658);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAramaGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAramaGirisObjects1[i].setX(90);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAramaGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAramaGirisObjects1[i].setY(535);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAramaGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAramaGirisObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAramaGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAramaGirisObjects1[i].getBehavior("Resizable").setWidth(410);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAramaGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAramaGirisObjects1[i].getBehavior("Resizable").setHeight(70);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].setX(115);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].setY(660);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setX(115);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setY(714);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() == "hazir");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() == "baglaniyor");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].getBehavior("Text").setText("Bağlanıyor...");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsString() == "hata");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].getBehavior("Text").setText("Bağlantı yok");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenuDon"), gdjs.CevrimiciCode.GDBtnMenuDonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnMenuDonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnDegistir"), gdjs.CevrimiciCode.GDBtnDegistirObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnDegistirObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdGiris"), gdjs.CevrimiciCode.GDAdGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
/* Reuse gdjs.CevrimiciCode.GDBtnDegistirObjects1 */
gdjs.copyArray(runtimeScene.getObjects("BtnKaydet"), gdjs.CevrimiciCode.GDBtnKaydetObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnVazgec"), gdjs.CevrimiciCode.GDBtnVazgecObjects1);
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnVazgec"), gdjs.CevrimiciCode.GDBtnVazgecObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnVazgecObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdGiris"), gdjs.CevrimiciCode.GDAdGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnDegistir"), gdjs.CevrimiciCode.GDBtnDegistirObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnKaydet"), gdjs.CevrimiciCode.GDBtnKaydetObjects1);
/* Reuse gdjs.CevrimiciCode.GDBtnVazgecObjects1 */
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnKaydet"), gdjs.CevrimiciCode.GDBtnKaydetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnKaydetObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() != "bekliyor");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdGiris"), gdjs.CevrimiciCode.GDAdGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString((( gdjs.CevrimiciCode.GDAdGirisObjects1.length === 0 ) ? "" :gdjs.CevrimiciCode.GDAdGirisObjects1[0].getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("bekliyor");
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("Kaydediliyor...");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}

{ //Subevents
gdjs.CevrimiciCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "ok");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AdGiris"), gdjs.CevrimiciCode.GDAdGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("AdYazi"), gdjs.CevrimiciCode.GDAdYaziObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnDegistir"), gdjs.CevrimiciCode.GDBtnDegistirObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnKaydet"), gdjs.CevrimiciCode.GDBtnKaydetObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnVazgec"), gdjs.CevrimiciCode.GDBtnVazgecObjects1);
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdGirisObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdGirisObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnKaydetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnKaydetObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnVazgecObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnVazgecObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDAdYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDAdYaziObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDegistirObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDegistirObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "gecersiz");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("3-12 harf/rakam");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "alinmis");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("Bu ad alınmış");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "uygunsuz");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("Bu ad kullanılamaz");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(11).getAsString() == "hata");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MesajYazi"), gdjs.CevrimiciCode.GDMesajYaziObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDMesajYaziObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDMesajYaziObjects1[i].getBehavior("Text").setText("Bağlantı hatası");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setString("");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnAra"), gdjs.CevrimiciCode.GDBtnAraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnAraObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() != "bekliyor");
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AramaGiris"), gdjs.CevrimiciCode.GDAramaGirisObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnDavet"), gdjs.CevrimiciCode.GDBtnDavetObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAd"), gdjs.CevrimiciCode.GDSonucAdObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString((( gdjs.CevrimiciCode.GDAramaGirisObjects1.length === 0 ) ? "" :gdjs.CevrimiciCode.GDAramaGirisObjects1[0].getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString("bekliyor");
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("Aranıyor...");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setColor("160;166;178");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].hide();
}
}

{ //Subevents
gdjs.CevrimiciCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "bulundu");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnDavet"), gdjs.CevrimiciCode.GDBtnDavetObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAd"), gdjs.CevrimiciCode.GDSonucAdObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("● Çevrimiçi");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setColor("46;204;113");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "bulundu");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnDavet"), gdjs.CevrimiciCode.GDBtnDavetObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucAd"), gdjs.CevrimiciCode.GDSonucAdObjects1);
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucAdObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucAdObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("○ Çevrimdışı");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].setColor("140;146;158");
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.CevrimiciCode.GDBtnDavetObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDBtnDavetObjects1[i].hide(false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(12).setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "yok");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("Bu adla oyuncu bulunamadı");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "kendin");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("Bu senin adın");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "gecersiz");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("3-12 harf veya rakam yaz");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(12).getAsString() == "hata");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SonucDurum"), gdjs.CevrimiciCode.GDSonucDurumObjects1);
{for(var i = 0, len = gdjs.CevrimiciCode.GDSonucDurumObjects1.length ;i < len;++i) {
    gdjs.CevrimiciCode.GDSonucDurumObjects1[i].getBehavior("Text").setText("Bağlantı hatası");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnDavet"), gdjs.CevrimiciCode.GDBtnDavetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CevrimiciCode.mapOfGDgdjs_9546CevrimiciCode_9546GDBtnDavetObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CevrimiciCode.GDBtnDavetObjects1.length;i<l;++i) {
    if ( gdjs.CevrimiciCode.GDBtnDavetObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CevrimiciCode.GDBtnDavetObjects1[k] = gdjs.CevrimiciCode.GDBtnDavetObjects1[i];
        ++k;
    }
}
gdjs.CevrimiciCode.GDBtnDavetObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CevrimiciCode.GDBtnDavetObjects1.length;i<l;++i) {
    if ( gdjs.CevrimiciCode.GDBtnDavetObjects1[i].getBehavior("Animation").getAnimationIndex() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.CevrimiciCode.GDBtnDavetObjects1[k] = gdjs.CevrimiciCode.GDBtnDavetObjects1[i];
        ++k;
    }
}
gdjs.CevrimiciCode.GDBtnDavetObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}

{ //Subevents
gdjs.CevrimiciCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.CevrimiciCode.userFunc0x119c810(runtimeScene);

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
gdjs.CevrimiciCode.eventsList3(runtimeScene);} //End of subevents
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


};

gdjs.CevrimiciCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CevrimiciCode.GDCZeminObjects1.length = 0;
gdjs.CevrimiciCode.GDCZeminObjects2.length = 0;
gdjs.CevrimiciCode.GDCZeminObjects3.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects1.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects2.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects3.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects1.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects2.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects3.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects1.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects2.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects3.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects1.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects2.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects3.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects1.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects2.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects3.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects1.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects2.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects3.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects1.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects2.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects3.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects1.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects2.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects3.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects1.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects2.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects3.length = 0;

gdjs.CevrimiciCode.eventsList4(runtimeScene);
gdjs.CevrimiciCode.GDCZeminObjects1.length = 0;
gdjs.CevrimiciCode.GDCZeminObjects2.length = 0;
gdjs.CevrimiciCode.GDCZeminObjects3.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects1.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects2.length = 0;
gdjs.CevrimiciCode.GDCArayuzObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnMenuDonObjects3.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects1.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects2.length = 0;
gdjs.CevrimiciCode.GDAdYaziObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnDegistirObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnKaydetObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnVazgecObjects3.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects1.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects2.length = 0;
gdjs.CevrimiciCode.GDMesajYaziObjects3.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects1.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects2.length = 0;
gdjs.CevrimiciCode.GDAdGirisObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnAraObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnDavetObjects3.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects1.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects2.length = 0;
gdjs.CevrimiciCode.GDAramaGirisObjects3.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects1.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects2.length = 0;
gdjs.CevrimiciCode.GDSonucAdObjects3.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects1.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects2.length = 0;
gdjs.CevrimiciCode.GDSonucDurumObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnRastgeleObjects3.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects1.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects2.length = 0;
gdjs.CevrimiciCode.GDBtnMektupObjects3.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects1.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects2.length = 0;
gdjs.CevrimiciCode.GDPanelAvatarObjects3.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects1.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects2.length = 0;
gdjs.CevrimiciCode.GDRutbeRozetObjects3.length = 0;


return;

}

gdjs['CevrimiciCode'] = gdjs.CevrimiciCode;
