// based on this work:
// https://www.reddit.com/r/kde/comments/7h6g8e/move_window_to_center_patch/

// checkout KWin scipting tutorial for details:
// https://techbase.kde.org/Development/Tutorials/KWin/Scripting

function growCurrentWindow() {
  var win = workspace.activeClient;
  win.geometry = {
      x: win.x - 20,
      y: win.y - 20,
      width: win.width + 40,
      height: win.height + 40,
  };
}

function shrinkCurrentWindow() {
  var win = workspace.activeClient;
  win.geometry = {
      x: win.x + 20,
      y: win.y + 20,
      width: win.width - 40,
      height: win.height - 40,
  };
}

function setCurrentWindowSize() {
  var win = workspace.activeClient;
  var area = workspace.clientArea(0, win);

  var h = area.height * 0.7;
  var w = area.width * 0.7;

  var x = area.x + (area.width * 0.15);
  var y = area.y + (area.height * 0.15);

  win.geometry = {
      x: x,
      y: y,
      width: w,
      height: h,
  };
}

registerShortcut("Make current window size 1/2 of screen", "Set the current window size to 1/2 of screen and center it", "Meta+/", setCurrentWindowSize);
registerShortcut("Grow current window", "Make current window size 40 px wider", "Meta+.", growCurrentWindow);
registerShortcut("Shrink current window", "Make current window 40 px narrower", "Meta+,", shrinkCurrentWindow);
