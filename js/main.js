(function () {
  "use strict";

  // Google Play listing. Leave empty until the app is live; the badges then
  // stay unlinked under a "Coming soon" note. When it is published, set this to:
  //   https://play.google.com/store/apps/details?id=org.squirrelhat.coldbore
  var PLAY_URL = "";

  if (!PLAY_URL) return;

  var buttons = document.querySelectorAll("[data-play-link]");
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.href = PLAY_URL;
    btn.removeAttribute("aria-disabled");
  }

  var notes = document.querySelectorAll("[data-play-note]");
  for (var j = 0; j < notes.length; j++) notes[j].hidden = true;
})();
