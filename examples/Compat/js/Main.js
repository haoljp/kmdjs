﻿kmdjs.config({
    name: "HelloKMD",
    baseUrl: "js",
    classes: [
        { name: "HelloKMD.Ball" },
        { name: "Util.Bom", url: "Util" },
        { name: "jquery-1.11.1.min", kmd: false },
        {name:"test",kmd:false}
    ]

});
define("Main", ["Util"], {
    ctor: function () {
        var ball = new Ball(0, 0, 28, 1, -2, "KMD.js");
        var vp = Bom.getViewport();
        setInterval(function () {
            (ball.x + ball.r * 2 > vp[2] || ball.x < 0) && (ball.vx *= -1);
            (ball.y + ball.r * 2 > vp[3] || ball.y < 0) && (ball.vy *= -1);
        }, 30);
    }
})