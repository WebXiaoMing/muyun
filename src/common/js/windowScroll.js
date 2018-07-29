function getScrollOffsets(_w) { //get the offset position
  _w = _w || window;
  //for all and IE9+
  if (_w.pageXOffset != null) return {
    x: _w.pageXOffset,
    y: _w.pageYOffset
  };
  //for IE678
  var _d = _w.document;
  if (document.compatMode == "CSS1Compat") return { //for IE678
    x: _d.documentElement.scrollLeft,
    y: _d.documentElement.scrollTop
  };
  //for other mode
  return {
    x: _d.body.scrollLeft,
    y: _d.body.scrpllTop
  };
}

function getViewPortSize(_w) { //get the window size
  _w = _w || window;
  //for all and IE9+
  if (_w.innerWidth != null) return {
    x: _w.innerWidth,
    y: _w.innerHeight
  };
  //for IE678
  var _d = _w.document;
  if (document.compatMode == "CSS1Compat") return { //for IE678
    x: _d.documentElement.clientWidth,
    y: _d.documentElement.clientHeight
  };
  //for other mode
  return {
    x: _d.body.clientWidth,
    y: _d.body.clientHeight
  };

}

export function scrollPosition(_obj) {
  var targetX, targetY;
  if (!_obj) {
    targetX = 0;
    targetY = 0;
  } else {
    if (typeof (_obj) == "string") {
      _obj = document.getElementById(_obj);
    } else {
      _obj = _obj
    }
    targetX = _obj.getBoundingClientRect().left + getScrollOffsets().x;
    targetY = _obj.getBoundingClientRect().top + getScrollOffsets().y;
  }
  var maxTargetX = document.body.scrollWidth - getViewPortSize().x;
  if (targetX >= maxTargetX) targetX = maxTargetX;
  if (targetX < 0) targetX = 0;
  var maxTargetY = document.body.scrollHeight - getViewPortSize().y;
  if (targetY >= maxTargetY) targetY = maxTargetY;
  if (targetY < 0) targetY = 0;
  //console.log(targetX, targetY);
  var tempTimer = setInterval(function () {
    var currentY = getScrollOffsets().y;
    var currentX = getScrollOffsets().x;

    var tempTargetY = currentY - (currentY - targetY) / 10;
    var tempTargetX = currentX - (currentX - targetX) / 10;
    if (Math.abs(tempTargetY - currentY) < 1 && tempTargetY - currentY > 0) {
      tempTargetY++;
    }
    if (Math.abs(tempTargetY - currentY) < 1 && tempTargetY - currentY < 0) {
      tempTargetY--;
    }
    if (Math.abs(tempTargetX - currentX) < 1 && tempTargetX - currentX > 0) {
      tempTargetX++;
    }
    if (Math.abs(tempTargetX - currentX) < 1 && tempTargetX - currentX < 0) {
      tempTargetX--;
    }

    //console.log(currentX, tempTargetX, currentY, tempTargetY);
    window.scrollTo(tempTargetX, tempTargetY);


    if (Math.abs(getScrollOffsets().y - targetY) <= 2 && Math.abs(getScrollOffsets().x - targetX) <= 2) {
      clearInterval(tempTimer);
      window.scrollTo(targetX, targetY);
      //console.log("done");
    }
  }, 10);
}
