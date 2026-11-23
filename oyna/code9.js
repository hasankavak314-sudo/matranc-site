gdjs.MektupCode = {};
gdjs.MektupCode.localVariables = [];
gdjs.MektupCode.idToCallbackMap = new Map();
gdjs.MektupCode.GDMZeminObjects1= [];
gdjs.MektupCode.GDPanelAvatarObjects1= [];
gdjs.MektupCode.GDRutbeRozetObjects1= [];


gdjs.MektupCode.userFunc0x10d2be8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// MATRANÇ - MEKTUP SAHNESİ kodu v1 (mektup maçları ayrı sahnede: mum ışıklı masa arka planı + tam ekran liste; ← Çevrimiçi'ye döner)
// Bu dosyayı "Mektup" sahnesinde KOŞULSUZ bir JavaScript olayı olarak koyun (her karede çalışır).
// Gerekli nesne: MZemin (Sprite, resim matranc_mektup_zemin_v1.jpg). Sahneye bir tane koyun, yeri önemli değil.
const S = runtimeScene, M = window.MatrancCevrimici;
const L = S.getLayer("");
const z = S.getObjects("MZemin")[0];
if (z) {   // arka plan ekranı tamamen kaplar (taşan kısım kenarlardan kesilir, üst kısım hep görünür)
  const cw = L.getCameraWidth(), ch = L.getCameraHeight();
  const W0 = 941, H0 = 1672, sc = Math.max(cw / W0, ch / H0);
  z.setScale(sc);
  z.setPosition(L.getCameraX() - W0 * sc / 2, L.getCameraY() - ch / 2);
  z.setZOrder(-100);
}
if (!S.__mektupKuruldu) {
  S.__mektupKuruldu = true;
  if (M && M.mektupPanel) M.mektupPanel(true);
  else gdjs.evtTools.runtimeScene.replaceScene(S, "Menu", false);   // çevrim içi kodu yüklenmemişse güvenli dönüş
}

};
gdjs.MektupCode.eventsList0 = function(runtimeScene) {

{


gdjs.MektupCode.userFunc0x10d2be8(runtimeScene);

}


};

gdjs.MektupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MektupCode.GDMZeminObjects1.length = 0;
gdjs.MektupCode.GDPanelAvatarObjects1.length = 0;
gdjs.MektupCode.GDRutbeRozetObjects1.length = 0;

gdjs.MektupCode.eventsList0(runtimeScene);
gdjs.MektupCode.GDMZeminObjects1.length = 0;
gdjs.MektupCode.GDPanelAvatarObjects1.length = 0;
gdjs.MektupCode.GDRutbeRozetObjects1.length = 0;


return;

}

gdjs['MektupCode'] = gdjs.MektupCode;
