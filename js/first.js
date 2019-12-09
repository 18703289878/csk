$(function () {
    $.get("/TongJi/setItem/707902", {
        tjtype: "love",
        pageid: "1434537",
        linkurl: document.URL,
        screenwidth: window.screen.width,
        screenheight: window.screen.height
    }, function (result) {});
});