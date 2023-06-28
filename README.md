# About
WebGUI using [winbox.js](https://nextapps-de.github.io/winbox/)
# How to use
Open the link to try a demo <br/>
_Tip: 2048 or web browser apps too large? It's counterintuitive, but shrinking them down makes them snap to the viewport!_
# Commands/functions
Hey you there! Do you not know what JavaScript is? Why are you on GitHub? Anyway, I have a few commands you can enter. <br/>
To start press `F12`to open developer tools. Next, click on console. From here it's easy to run a function inside the page. This is a function I made, for ease of coding. To use it, copy this into the `> ` line of the console.
```
CreateBasicWindow('Window', 'https://stopmotio.github.io/simpleGUI/');
```
Pressing `enter` should create a window that contains another of this page! <br/>
Okay, so now we have that, why don't we direct it to a different page! You see the URL? You can set that to whatever you want, but most big websites will refuse to connect into the window because it's an `iframe`. **It's extremely important the it starts with `https://`! If you don't do this, it won't work!** <br/>
Also, it's just named "Window", which is fine but odd. To change it, change the `'Window'` parameter to something. Keep the single quotes, or replace them with regular quotes, or else, you guessed, it won't work. ~~Nothing works when you're a fool.~~
# Make own version
Download the source. All apps are linked in `index.html` as buttons, and removing those buttons will immediately remove them from the interface. For web-based apps, you're done. For local apps, they're still in the `apps/` directory. I reccommend keeping both for now, as browser will let you test web apps, and info contains credits that I'd personally rather you keep.
# Adding apps
Firstly, if you're making a local app, e.g. one that opens from a local file, complete that first and put it in the `apps/` directory. <br/>
To add this to the menu, and for web apps, begin by adding this code in the `div` containing the other apps. 
```
  <button class="menuitem" onclick="CreateBasicWindow('Window title', 'URL');">Name on the menu</button>
```
Name on the menu will be the name presented on the menu. URL is the url. For local apps, that's like `apps/nameofapp.html`. For web apps, that's the URL. Window title will be the text on the topbar of the window.
