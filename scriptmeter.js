'use Strict';

const main = document.querySelector('.main-btn');


if (window.addEventListener) {

    main.addEventListener('click', initialSpeed, false);

} else if (window.attachEvent) {
    window.attachEvent('onload', initialSpeed);
}

var imageAddress = "https://4k-uhd.nl/wp-content/uploads/2018/08/4K-3840x2160-Wallpaper-Uitzicht-5.jpg"

var downloadSize = 5739426 * 2;

function initialSpeed() {
    document.getElementById('result').textContent = '...';

    showProgressMessage("Calculating Speed ...");

    window.setTimeout(MeasurConnectionSpeed, 1);

}
function showProgressMessage(msg) {

    var progress = document.getElementById('progress');
    if (progress) {
        progress.innerHTML = msg;
    }
}
function MeasurConnectionSpeed() {
    var startTime, endTime;
    var downlod = new Image();
    downlod.onload = function () {
        endTime = (new Date()).getTime();
        showResult();
    }
    downlod.onerror = function (err, msg) {
        showProgressMessage("No internet");

    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    downlod.src = imageAddress + cacheBuster;
    function showResult() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        showResultMessage(speedMbps + "Mbps");
    }

}
function showResultMessage(msg) {
    document.getElementById("result").innerHTML = msg;
    document.getElementById("progress").innerHTML = 'Your Internet Speed is';
    document.getElementById("test-again").innerHTML = 'Test again';
}
