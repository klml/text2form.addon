"use strict";
browser.runtime.onMessage.addListener(request => {

    var t2f_text_value = request.t2f_text_value ;
    var t2f_list = t2f_text_value.split("\n");
    var rainbow = [
"#C8EF68",
"#D5EF95",
"#E2EFC2",
"#77B9EF",
"#B3D4EF",
"#95C7EF",
"#EFB859",
"#EFC377",
"#EFD9B3",
"#77B9EF" ]

    document.querySelectorAll('input:not(:disabled):not([readonly]):not([type=hidden]):not([type=submit])').forEach(function( element, index ) {

        if (t2f_list[index] == undefined ) {
            element.value = "" ; }
        else {
            element.value = t2f_list[index] ; // spread text values
        }
        // TODO index > 10
        element.style.background = rainbow[index] ;
    });
  return Promise.resolve({response: "text spread"});
});