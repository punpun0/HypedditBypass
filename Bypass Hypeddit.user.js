// ==UserScript==
// @name         Bypass Hypeddit
// @version      0.1
// @description  Bypasses the tasks on Hypeddit
// @author       punpun (https://github.com/punpun0)
// @match        https://hypeddit.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Tip: if it redirects you to the player, you can right click on the it and save the file.

(function() {

  var link = jQuery("#current_download_file_listner").val();

  if (typeof link === "string"){
      window.location.href = "https://hypeddit-gates-prod.s3.amazonaws.com/" + link + "_main";
  }

})();