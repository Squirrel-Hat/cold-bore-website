(function () {
  "use strict";

  // Google Play listing. Leave empty until the app is live; the buttons then
  // show "Coming soon". When it is published, set this to:
  //   https://play.google.com/store/apps/details?id=org.squirrelhat.coldbore
  var PLAY_URL = "";

  if (!PLAY_URL) return;

  var buttons = document.querySelectorAll("[data-play-link]");
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    btn.href = PLAY_URL;
    btn.removeAttribute("aria-disabled");
    var small = btn.querySelector("[data-play-small]");
    if (small) small.textContent = "Get it on";
  }
})();
