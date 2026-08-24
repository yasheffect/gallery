# 🚀 Nike Run for Life - Handoff Instructions

Hey! We found the culprit behind the build taking so long. Your "E:" drive is formatted as **exFAT**. exFAT does not support "symlinks" (special shortcut files), which modern web frameworks like Next.js require to build properly. Because of this, it's impossible to compile the Next.js app to static HTML on this specific hard drive.

Since you'll be continuing on a different PC tomorrow, here is exactly what you need to do.

## On your other PC tomorrow:

1. **Open the project folder:**
   Open this exact folder in your code editor on the new PC (make sure the drive is NTFS or APFS, not exFAT!):
   `ui-ux-pro-max-skill/gallery`

2. **Install the dependencies:**
   Open the terminal inside the `gallery` folder and run:
   ```bash
   npm install
   ```

3. **Build the static HTML:**
   Once everything is installed, run:
   ```bash
   npm run build
   ```

4. **Deploy to GitHub:**
   - Once the build is finished, Next.js will automatically create a new folder called **`out`**.
   - Inside the `out` folder, you will find:
     - `work/nike-run-for-life.html`
     - A folder called `_next` (which contains all the compiled Javascript and CSS animations)
   - To update your existing HTML portfolio, simply **drag and drop** the `nike-run-for-life.html` file and the `_next` folder directly into your GitHub repository! Your old `index.html` homepage will not be overwritten, and your Nike page will work perfectly.

*Note: If you run into any issues with paths breaking on GitHub Pages, just let me know when we reconnect and we can configure a base path, or set up a free automated Vercel deployment which handles all this automatically!*

Have a great night! 🌙
