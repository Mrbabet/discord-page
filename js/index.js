function translate(lng, tagAttr){
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
  if(lng == 'en'){
    document.querySelector("#enTranslator").css('color', '#f4623a');
    document.querySelector("#plTranslator").css('color', '#212529');
  } 
  if(lng == 'kh'){
    document.querySelector("#plTranslator").css('color', '#f4623a');
    document.querySelector("#enTranslator").css('color', '#212529');
  }
}
document.querySelector(document).ready(function(){
//This is id of HTML element (English) with attribute lng-tag
document.querySelector("#enTranslator").click(function(){
  translate('en', 'lng-tag');
});
//This is id of HTML element (Khmer) with attribute lng-tag
document.querySelector("#plTranslator").click(function(){
  translate('pl', 'lng-tag');
});
});