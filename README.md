# Night Bite: The Catfish Brothers (online version)

This folder is the whole game. Put `index.html` on any website host and send the link around.

## Put it online (pick one)

**Netlify Drop (easiest, needs a computer)**
1. Go to app.netlify.com/drop and sign in (free).
2. Drag this whole folder (or the zip) onto the page.
3. You get a link like `something.netlify.app`. Rename it under Site settings if you want, e.g. `night-bite.netlify.app`.

**Vercel**
1. Put this folder in a GitHub repo (or run `vercel` inside the folder from a terminal).
2. Import it as a new project. No build settings needed. It's a static site.

**GitHub Pages (works from a phone browser)**
1. Create a new public repo, e.g. `night-bite`.
2. Use "Add file → Upload files" and upload `index.html`.
3. Settings → Pages → Deploy from branch → `main` / root. Your link is `yourname.github.io/night-bite`.

## How to play online
1. Everyone opens the link on their own phone.
2. One person taps **ONLINE PLAY → HOST A GAME** and reads out the 4-letter room code.
3. Everyone else taps **ONLINE PLAY → JOIN A GAME** and types the code.
4. Each player taps a brother. Any brother nobody picks is played by the computer (or turn CPU brothers off).
5. Host taps **START GAME**.

The host's phone runs the game, so the host should have the best connection (Wi-Fi is ideal) and keep the game open on screen.

## If someone can't connect
Phones connect directly to each other. Most home Wi-Fi works fine, but some cellular networks block direct connections. If a player on cellular data can't join, have them switch to Wi-Fi.

If that's a regular problem, you can add a free relay ("TURN server"):
1. Sign up for a free account at metered.ca (Open Relay).
2. Copy the TURN address, username and password it gives you.
3. Open `index.html` in a text editor, find the line `const TURN=null;` and change it to:
   `const TURN={urls:'turn:YOUR_ADDRESS:80',username:'YOUR_USERNAME',credential:'YOUR_PASSWORD'};`
4. Re-upload the file.
