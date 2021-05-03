# About
WebGUI using [winbox.js](https://nextapps-de.github.io/winbox/)
# How to use
Open the link to try a demo
# Make own version
Download the source. All apps are linked in `index.html` as buttons, and removing those buttons will immediately remove them from the interface. For web-based apps, you're done. For local apps, they're still in the `apps/` directory. I reccommend keeping both for now, as browser will let you test web apps, and info contains credits that I'd personally rather you keep.
# Adding apps
Firstly, if you're making a local app, e.g. one that opens from a local file, complete that first and put it in the `apps/` directory. <br/>
To add this to the menu, and for web apps, begin by adding this code in the `div` containing the other apps. 
```
  <button class="menuitem" onclick="CreateBasicWindow('Window title', 'URL');">Name on the menu</button>
```
Name on the menu will be the name presented on the menu. URL is the url. For local apps, that's like `apps/nameofapp.html`. For web apps, that's the URL. Window title will be the text on the topbar of the window.
