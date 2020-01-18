var loadpics = function() {
  var divText = "";
  var imgSrcPrefix = "../assets/img/test/pic (";
  var imgNum = 1;

  for (x = 1; x < 37; x++) {
    imgNum = x;

    var prevText = "";
    var nextText = "";
    var imgText = "../assets/img/test/pic (" + imgNum.toString() + ").jpg";

    if (x > 1) {
      prevText =
        "<a class=&quot;cssbox_prev&quot; href=&quot;#image" +
        (imgNum - 1) +
        "&quot;>&lt;</a>";
    }
    if (x < 36) {
      nextText =
        "<a class=&quot;cssbox_next&quot; href=&quot;#image" +
        (imgNum + 1) +
        "&quot;>&gt;</a>";
    }

    divText +=
      "<div class=&quot;col-2&quot;>" +
      "<div class=&quot;cssbox&quot;>" +
      "<a id=&quot;image" +
      imgNum +
      "&quot; href=&quot;#image" +
      imgNum +
      "&quot;>" +
      "<img class=&quot;cssbox_thumb&quot; src=&quot;" +
      imgText +
      "&quot;/>" +
      "<span class=&quot;cssbox_full&quot;><img src=&quot;" +
      imgText +
      "&quot;/></span>" +
      "</a>" +
      "<a class=&quot;cssbox_close&quot; href=&quot;#void&quot;></a>" +
      prevText +
      nextText +
      "</div>" +
      "</div>";
  }
  console.log(divText);

  document.getElementById("cus-images-outer-div").innerHTML = divText;
};
