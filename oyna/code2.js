gdjs.NasilOynanirCode = {};
gdjs.NasilOynanirCode.localVariables = [];
gdjs.NasilOynanirCode.idToCallbackMap = new Map();
gdjs.NasilOynanirCode.GDNasilZeminObjects1= [];
gdjs.NasilOynanirCode.GDNasilZeminObjects2= [];
gdjs.NasilOynanirCode.GDNasilZeminObjects3= [];
gdjs.NasilOynanirCode.GDBtnGeriObjects1= [];
gdjs.NasilOynanirCode.GDBtnGeriObjects2= [];
gdjs.NasilOynanirCode.GDBtnGeriObjects3= [];
gdjs.NasilOynanirCode.GDBtnMenu2Objects1= [];
gdjs.NasilOynanirCode.GDBtnMenu2Objects2= [];
gdjs.NasilOynanirCode.GDBtnMenu2Objects3= [];
gdjs.NasilOynanirCode.GDBtnIleriObjects1= [];
gdjs.NasilOynanirCode.GDBtnIleriObjects2= [];
gdjs.NasilOynanirCode.GDBtnIleriObjects3= [];
gdjs.NasilOynanirCode.GDSayfaObjects1= [];
gdjs.NasilOynanirCode.GDSayfaObjects2= [];
gdjs.NasilOynanirCode.GDSayfaObjects3= [];
gdjs.NasilOynanirCode.GDNSecimObjects1= [];
gdjs.NasilOynanirCode.GDNSecimObjects2= [];
gdjs.NasilOynanirCode.GDNSecimObjects3= [];
gdjs.NasilOynanirCode.GDNKurallarObjects1= [];
gdjs.NasilOynanirCode.GDNKurallarObjects2= [];
gdjs.NasilOynanirCode.GDNKurallarObjects3= [];
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects1= [];
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects2= [];
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects3= [];
gdjs.NasilOynanirCode.GDPanelAvatarObjects1= [];
gdjs.NasilOynanirCode.GDPanelAvatarObjects2= [];
gdjs.NasilOynanirCode.GDPanelAvatarObjects3= [];
gdjs.NasilOynanirCode.GDRutbeRozetObjects1= [];
gdjs.NasilOynanirCode.GDRutbeRozetObjects2= [];
gdjs.NasilOynanirCode.GDRutbeRozetObjects3= [];


gdjs.NasilOynanirCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.NasilOynanirCode.GDBtnGeriObjects1, gdjs.NasilOynanirCode.GDBtnGeriObjects2);

{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects2.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 8);
}
if (isConditionTrue_0) {
/* Reuse gdjs.NasilOynanirCode.GDBtnIleriObjects1 */
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].hide();
}
}
}

}


};gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnGeriObjects1Objects = Hashtable.newFrom({"BtnGeri": gdjs.NasilOynanirCode.GDBtnGeriObjects1});
gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnIleriObjects1Objects = Hashtable.newFrom({"BtnIleri": gdjs.NasilOynanirCode.GDBtnIleriObjects1});
gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnMenu2Objects1Objects = Hashtable.newFrom({"BtnMenu2": gdjs.NasilOynanirCode.GDBtnMenu2Objects1});
gdjs.NasilOynanirCode.userFunc0x10d2be8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - Nasıl Oynanır SAHNESİ kodu v8 (KURALLARI OKU, GERİ, İLERİ, ANA MENÜ %16 küçük: ölçek 0.42) · v7 (pul tarzı: lacivert NASIL OYNANIR? başlığı zeminde (matranc_nasil_zemin_v2.jpg), geri düğmesi BtnMenu2 başlığın solunda sabit (115, 110)) · v6 (KURALLARI OKU son sayfasında İLERİ'nin yerinde ANA MENÜ düğmesi; nesne BtnAnaMenu) · v5 (seçim ekranında 7 bölüm; NSecim görseli matranc_nasil_secim_v4.png) · v4 (menü düğmesi %15 büyük) · (+ SEÇİM EKRANI: MATİ İLE ÖĞREN / bölüm seç / KURALLARI OKU) v1 (yerleşim)
// "NasilOynanir" sahnesinin olaylarının EN ALTINA, KOŞULSUZ tek bir JavaScript olayı olarak koyun (v1'in yerine).
// Gerekli yeni nesneler (nesne listesinde olsun, sahneye YERLEŞTİRMEYİN; kod kendisi oluşturur):
//   NSecim     (Sprite, 1 görsel: matranc_nasil_secim.png)
//   NKurallar  (Sprite, 1 görsel: matranc_nasil_kurallar.png)
//   BtnAnaMenu (Sprite, 1 görsel: matranc_nasil_anamenu.png)  — v6
// Sahne açılınca önce SEÇİM ekranı görünür. KURALLARI OKU → eski sayfalar. MATİ İLE ÖĞREN / bölüm → "Rehber" sahnesi.
// Genel değişken rehberBolum: 0 = baştan sona, 1 Çarklar, 2 Kazanma, 3 Pul taşıma, 4 Tuzak, 5 Tur ve süre, 6 Yıldızlar, 7 Çevrimiçi.
(function () {
  const S = runtimeScene;
  const ilk = (ad) => { try { const l = S.getObjects(ad); return l && l.length ? l[0] : null; } catch (e) { return null; } };
  const merkez = (o, x, y, olcek) => { if (!o) return; o.setScale(olcek || 0.5); o.setPosition(x - o.getWidth() / 2, y - o.getHeight() / 2); };
  const L = S.getLayer(""), ust = L.getCameraY() - L.getCameraHeight() / 2;
  const z = ilk("NasilZemin"); if (z) { z.setScale(0.5); z.setPosition(0, -300); z.setZOrder(-10); }

  // ---- seçim ekranı durumu (sahne her açıldığında yeniden başlar) ----
  let N = window.MatrancNasil;
  if (!N || N.sahne !== S) N = window.MatrancNasil = { sahne: S, secim: true, kart: null, btn: null };
  const im = S.getGame().getInputManager();
  const birakildi = () => { try { return im.isMouseButtonReleased(0); } catch (e) { return false; } };
  const imlec = () => [gdjs.evtTools.input.getCursorX(S, "", 0), gdjs.evtTools.input.getCursorY(S, "", 0)];
  const yut = () => {
    try { if (im._releasedMouseButtons) im._releasedMouseButtons[0] = false; } catch (e) {}
    try { if (im._pressedMouseButtons) im._pressedMouseButtons[0] = false; } catch (e) {}
    try { if (im._endedTouches) im._endedTouches.length = 0; } catch (e) {}
  };
  const ses = () => { try { S.getGame().getSoundManager().playSound("dugme.wav", false, 70, 1); } catch (e) {} };
  const icinde = (p, r) => p[0] >= r[0] && p[0] <= r[2] && p[1] >= r[1] && p[1] <= r[3];

  if (N.secim) {
    if (!N.kart) { N.kart = S.createObject("NSecim"); N.btn = S.createObject("NKurallar"); }
    if (N.kart) { N.kart.setZOrder(20); merkez(N.kart, 360, 640); }
    if (N.btn) { N.btn.setZOrder(20); merkez(N.btn, 360, 1170, 0.42); }
    // eski sayfa ve düğmeleri gizle, dokunulamasınlar diye ekran dışına al
    for (const ad of ["Sayfa", "BtnGeri", "BtnIleri"]) { const o = ilk(ad); if (o) { o.hide(true); o.setPosition(-3000, -3000); } }
    const BOL = {                    // v5: secim_v4.py hot_v4.json
      0: [85, 465, 635, 595],          // MATİ İLE ÖĞREN
      1: [92, 730, 352, 805], 2: [367, 730, 627, 805],
      3: [92, 820, 352, 895], 4: [367, 820, 627, 895],
      5: [92, 910, 352, 985], 6: [367, 910, 627, 985],
      7: [230, 1000, 490, 1075],
    };
    if (birakildi()) {
      const p = imlec();
      if (icinde(p, [156, 1117, 564, 1222])) {             // KURALLARI OKU
        ses(); yut(); N.secim = false;
        try { N.kart.deleteFromScene(S); N.btn.deleteFromScene(S); } catch (e) {}
        N.kart = N.btn = null;
        for (const ad of ["Sayfa", "BtnGeri", "BtnIleri"]) { const o = ilk(ad); if (o) o.hide(false); }
      } else {
        for (const k in BOL) if (icinde(p, BOL[k])) {
          ses(); yut();
          S.getGame().getVariables().get("rehberBolum").setNumber(Number(k));
          gdjs.evtTools.runtimeScene.replaceScene(S, "Rehber", false);
          return;
        }
      }
    }
    if (N.secim) { merkez(ilk("BtnMenu2"), 115, 110, 0.575); return; }
  }

  // ---- eski sayfalar (v1 yerleşimi) ----
  merkez(ilk("Sayfa"), 360, 640);
  merkez(ilk("BtnGeri"), 220, 1170, 0.42);
  merkez(ilk("BtnIleri"), 500, 1170, 0.42);
  merkez(ilk("BtnMenu2"), 115, 110, 0.575);

  // ---- v6: son sayfada (İLERİ gizliyken) aynı yerde ANA MENÜ düğmesi ----
  const ileri = ilk("BtnIleri");
  if (!N.am) { try { N.am = S.createObject("BtnAnaMenu"); if (N.am) N.am.setZOrder(ileri ? ileri.getZOrder() : 20); } catch (e) { N.am = null; } }
  if (N.am) {
    const sonSayfa = !!ileri && ileri.isHidden();
    N.am.hide(!sonSayfa);
    merkez(N.am, 500, 1170, 0.42);
    if (sonSayfa && birakildi()) {
      const p = imlec(), x = N.am.getX(), y = N.am.getY();
      if (p[0] >= x && p[0] <= x + N.am.getWidth() && p[1] >= y && p[1] <= y + N.am.getHeight()) {
        ses(); yut();
        gdjs.evtTools.runtimeScene.replaceScene(S, "Menu", false);
      }
    }
  }
})();
};
gdjs.NasilOynanirCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnGeri"), gdjs.NasilOynanirCode.GDBtnGeriObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnIleri"), gdjs.NasilOynanirCode.GDBtnIleriObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnMenu2"), gdjs.NasilOynanirCode.GDBtnMenu2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NasilZemin"), gdjs.NasilOynanirCode.GDNasilZeminObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sayfa"), gdjs.NasilOynanirCode.GDSayfaObjects1);
{for(var i = 0, len = gdjs.NasilOynanirCode.GDNasilZeminObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDNasilZeminObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnMenu2Objects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDSayfaObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDSayfaObjects1[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDNasilZeminObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDNasilZeminObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].setX(34);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnMenu2Objects1[i].setX(254);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].setX(474);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDSayfaObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDSayfaObjects1[i].setX(0);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDNasilZeminObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDNasilZeminObjects1[i].setY(-160);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].setY(1102);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnMenu2Objects1[i].setY(1102);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].setY(1102);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDSayfaObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDSayfaObjects1[i].setY(40);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDSayfaObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDSayfaObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnMenu2Objects1[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].setZOrder(10);
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BtnGeri"), gdjs.NasilOynanirCode.GDBtnGeriObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnIleri"), gdjs.NasilOynanirCode.GDBtnIleriObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sayfa"), gdjs.NasilOynanirCode.GDSayfaObjects1);
{for(var i = 0, len = gdjs.NasilOynanirCode.GDSayfaObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDSayfaObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length ;i < len;++i) {
    gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.NasilOynanirCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnGeri"), gdjs.NasilOynanirCode.GDBtnGeriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnGeriObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NasilOynanirCode.GDBtnGeriObjects1.length;i<l;++i) {
    if ( gdjs.NasilOynanirCode.GDBtnGeriObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.NasilOynanirCode.GDBtnGeriObjects1[k] = gdjs.NasilOynanirCode.GDBtnGeriObjects1[i];
        ++k;
    }
}
gdjs.NasilOynanirCode.GDBtnGeriObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnIleri"), gdjs.NasilOynanirCode.GDBtnIleriObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnIleriObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NasilOynanirCode.GDBtnIleriObjects1.length;i<l;++i) {
    if ( gdjs.NasilOynanirCode.GDBtnIleriObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.NasilOynanirCode.GDBtnIleriObjects1[k] = gdjs.NasilOynanirCode.GDBtnIleriObjects1[i];
        ++k;
    }
}
gdjs.NasilOynanirCode.GDBtnIleriObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 8);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnMenu2"), gdjs.NasilOynanirCode.GDBtnMenu2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.NasilOynanirCode.mapOfGDgdjs_9546NasilOynanirCode_9546GDBtnMenu2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dugme.wav", false, 20, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{


gdjs.NasilOynanirCode.userFunc0x10d2be8(runtimeScene);

}


};

gdjs.NasilOynanirCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NasilOynanirCode.GDNasilZeminObjects1.length = 0;
gdjs.NasilOynanirCode.GDNasilZeminObjects2.length = 0;
gdjs.NasilOynanirCode.GDNasilZeminObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects2.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects3.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects3.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects1.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects2.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects3.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects1.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects2.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects3.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects1.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects2.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects3.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects1.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects2.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects3.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects1.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects2.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects3.length = 0;

gdjs.NasilOynanirCode.eventsList1(runtimeScene);
gdjs.NasilOynanirCode.GDNasilZeminObjects1.length = 0;
gdjs.NasilOynanirCode.GDNasilZeminObjects2.length = 0;
gdjs.NasilOynanirCode.GDNasilZeminObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnGeriObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects1.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects2.length = 0;
gdjs.NasilOynanirCode.GDBtnMenu2Objects3.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnIleriObjects3.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects1.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects2.length = 0;
gdjs.NasilOynanirCode.GDSayfaObjects3.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects1.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects2.length = 0;
gdjs.NasilOynanirCode.GDNSecimObjects3.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects1.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects2.length = 0;
gdjs.NasilOynanirCode.GDNKurallarObjects3.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects1.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects2.length = 0;
gdjs.NasilOynanirCode.GDBtnAnaMenuObjects3.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects1.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects2.length = 0;
gdjs.NasilOynanirCode.GDPanelAvatarObjects3.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects1.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects2.length = 0;
gdjs.NasilOynanirCode.GDRutbeRozetObjects3.length = 0;


return;

}

gdjs['NasilOynanirCode'] = gdjs.NasilOynanirCode;
