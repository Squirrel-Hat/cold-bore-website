# cold-bore-website

The landing page for the Cold Bore app, served at https://cold-bore.app via GitHub Pages
(`CNAME`), with DNS on Cloudflare.

Plain static HTML/CSS/JS, no build step.

```
index.html        the page
css/styles.css    styles (colors and fonts follow the app theme)
js/main.js        Google Play link switch
assets/           icons, Open Graph image, app screenshots
```

## Preview locally

```bash
./start.sh   # http://localhost:8000 (PORT=xxxx to change)
./stop.sh
```

## When the app goes live on Google Play

Set `PLAY_URL` in `js/main.js` to
`https://play.google.com/store/apps/details?id=org.squirrelhat.coldbore`.
The "Coming soon" notes disappear and the Google Play badges become links.

The badge (`assets/badges/get-it-on-google-play.svg`) is Google's official
English "Get it on Google Play" artwork. Follow the
[badge guidelines](https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/#badges):
don't recolor or edit it, keep it at least 28px tall, keep clear space of 1/4
its height, and replace it with the latest version from the Partner Marketing
Hub if Google updates it.

The privacy policy lives on the Squirrel Hat site at
https://squirrelhat.org/cold-bore/privacy/.
