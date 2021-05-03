var isMenuOpen = 0;

function MenuToggle() {
  if (isMenuOpen < 1){
    document.getElementById("menu").style.zIndex = "50";
    isMenuOpen = 1; // Change it and keep track
    console.log("Assumed menu was closed and needed to be open");
  } else {
    document.getElementById("menu").style.zIndex = "-2";
    isMenuOpen = 0;
    console.log("Assumed menu was open and needed to be closed");
  }
}

function CreateBasicWindow(title, where) {
  var currentbox = new WinBox(title, {

    url: where
  //  bottom:5%
  //  root: document.getElementById('background')
  //  ^Attempts to fix minimizing issue but causes a bajillion errors so I'm leaving it out of fear lmao
});
MenuToggle(); // Close it, user expects this behavior from Windows (Or Ubuntu or GNOME or whatever)
}

function changeBGC() {
  //Change background color
  document.getElementById('background').style.backgroundColor = document.getElementById('bgcolorselector').value;
}