# Battu Little Genius

A zero-cost, ad-free, offline-first children's learning PWA prototype (audited v1.1).

## Included in this first working version
- Six worlds: My Dream House, Brain Master, Smart Learning, Creative World, Little Chef, Animal World.
- English, Telugu and Hindi interface labels.
- Memory matching, simple quiz, room decoration, finger drawing, fruit sequence and animal-name activities.
- Responsive layout for Android phones and tablets.
- No ads, accounts, analytics, payments, subscriptions, external APIs or paid assets.
- PWA manifest and service worker for offline use after first load.

## Run locally on a computer
Service workers require localhost or HTTPS. From this folder run:
`python -m http.server 8000`
Then open `http://localhost:8000` in a browser.

## Put it on an Android phone/tablet at zero hosting cost
1. Create a free GitHub account if you do not already have one.
2. Create a public repository named `battu-little-genius`.
3. Upload all files from this folder to the repository root.
4. In repository Settings → Pages, deploy from the `main` branch and `/ (root)`.
5. Open the GitHub Pages HTTPS address in Chrome on the Android device.
6. Tap Chrome menu → Install app / Add to Home screen.
7. Open once while online so the service worker caches the app. Then test airplane mode.

GitHub Pages is optional and has free-use limits/terms. No paid plan is required for this static project. No Play Store publication is included; Google Play developer registration normally has a fee.

## Important prototype notes
- This is an early prototype, not a professionally validated early-childhood curriculum.
- Browser text-to-speech uses voices available on the device; Telugu/Hindi voice availability varies by Android version and installed voice data. Speech may need internet or voice downloads on some devices.
- The memory game and quiz use simple starter content. More levels, voice narration, accessibility testing and parent controls should be added in later versions.
- Drawing export saves a PNG to the device when supported.
- No personal data is collected or transmitted by this app.

## Audit v1.1 fixes
- Enables strict mode and fixes an accidental implicit global in the Little Chef game.
- Validates language and world identifiers before use.
- Uses Fisher–Yates shuffle for the memory deck.
- Cancels the memory mismatch timer when leaving/restarting a game.
- Prevents repeated quiz selections after a correct answer.
- Adds defensive checks around speech synthesis and canvas drawing/export.
- Service worker now caches only same-origin successful GET responses and uses a navigation-only offline fallback.

## Known limitations (not production certification)
- There is no backend, API, authentication, or database in this product; the corresponding audit areas are not applicable.
- Browser/device speech support and Telugu/Hindi voice availability vary.
- This prototype has not undergone formal WCAG, child-safety, penetration, or multi-device testing.
- A static PWA cannot enforce operating-system-level screen-time limits or parental controls.
