<<<<<<< HEAD
! function() {
    function e(e, t) {
        return Math.random() * (t - e) + e
    }

    function t(t, n) {
        var a = this;
        a.canvas = t, a.img = n, a.posX = Math.random() * t.width, a.posY = Math.random() * t.height, a.velX = e(.2, .2), a.velY = e(.2, .2), a.size = e(.75, 1), a.alpha = e(.2, 1)
    }
    t.prototype.step = function() {
        var t = this;
        do var n = e(-1, 1),
            a = e(-1, 1),
            i = n * n + a * a; while (i >= 1);
        t.velX += .05 * Math.sqrt(-2 * Math.log(i) / i) * n, t.velY += .05 * Math.sqrt(-2 * Math.log(i) / i) * a;
        var r = t.posX - .4 * t.canvas.width,
            o = t.posY - .4 * t.canvas.height,
            l = 5e-4 * Math.sqrt(r * r + o * o);
        l = l * l * l, t.velX -= r > 0 ? l : -l, t.velY -= o > 0 ? l : -l, t.velX > 1 ? t.velX = 1 : t.velX < -1 && (t.velX = -1), t.velY > 1 ? t.velY = 1 : t.velY < -1 && (t.velY = -1), t.posX += t.velX, t.posY += t.velY, t.alpha += e(-.01, .01), t.alpha > 1 ? t.alpha = 1 : t.alpha < .2 && (t.alpha = .2)
    }, t.prototype.render = function(e) {
        var t = this;
        e.save(), e.translate(t.posX, t.posY), e.scale(t.size, t.size), e.translate(-t.img.width / 2, -t.img.width / 2), e.globalAlpha = t.alpha, e.globalCompositeOperation = "source-over", e.drawImage(t.img, 0, 0), e.restore()
    }, window.ImageParticle = t
}(),
function(e, t) {
    function n(t, n) {
        e.addEventListener(t, n, !1)
    }

    function a(t, n) {
        e.removeEventListener(t, n, !1)
    }

    function i() {
        u = e.innerWidth, m = e.innerHeight
    }

    function r(e) {
        var n = e.accelerationIncludingGravity,
            a = n.x,
            i = n.y,
            r = n.z,
            o = (r > 0) - (0 > r),
            l = t.sin(t.atan2(a, o * t.sqrt(.1 * i * i + r * r))),
            c = t.sin(t.atan2(i, t.sqrt(a * a + r * r)) - .25 * t.PI);
        s(l, c)
    }

    function o(e) {
        var t = 2 * e.clientX / u - 1,
            n = 2 * e.clientY / m - 1;
        s(t, n)
    }

    function l(e) {
        var t = e && e.accelerationIncludingGravity;
        a(f, l), i(), n("resize", i), t && null !== t.x ? (clearTimeout(g), r(e), n(f, r)) : n("mousemove", o)
    }

    function s(e, t) {
        var n = Date.now(),
            a = n - x;
        a /= a + 1 / p;
        var i = 1 - a;
        x = n, M = a * e + i * M, b = a * t + i * b;
        for (var r = 0; r < q.length; r++)
            for (var o = q[r], l = 0; l < k.length; l++) {
                var s = k[l];
                o.children[l].style[y] = I + "translate3d(" + M * s.m + "px," + b * s.m + "px,0)"
            }
    }

    function c() {
        for (var e = 0; e < z.length; e++) {
            var t = z[e],
                n = A[e],
                a = t.getContext("2d");
            a.clearRect(0, 0, t.width, t.height);
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                r.step(), r.render(a)
            }
        }
    }

    function h() {
        c(), P(h)
    }

    function v(e, t, n) {
        e.on("click", "li", function() {
            var a = $(this),
                i = a.index();
            a.hasClass(S) || (a.add(t.children().eq(i)).add(e.find(B)).add(t.find(B)).toggleClass(S), n && n(i))
        })
    }

    function d(e, t) {
        $(e).on("click", function(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ? void 0 : (t(), !1)
        })
    }
    var g, u, m, f = "devicemotion",
        p = 5,
        w = document.createElement("style");
    document.head.appendChild(w);
    var y, I, X = w.sheet,
        Y = X.cssRules,
        k = [{
            s: "header>h6{}",
            m: 6
        }, {
            s: "header>h1{}",
            m: 10
        }, {
            s: "header>img{}",
            m: -10
        }];
    ! function() {
        function e(e, t) {
            return t = t ? "-" + t + "-" : "", n[e] = t + "translate3d(0,0,0)", n[e].length ? t : !1
        }
        for (var t = 0; t < k.length; t++) X.insertRule(k[t].s, t);
        for (var n = Y[0].style, a = ["", "ms", "webkit"], t = 0; t < a.length; t++) {
            var i = a[t],
                r = (i ? i + "T" : "t") + "ransform";
            if (r in n) {
                I = e(r, i) || e(r), y = I === !1 ? !1 : r;
                break
            }
        }
    }();
    var q = document.getElementsByTagName("header"),
        x = 0,
        M = 0,
        b = 0;
    y && (n(f, l), g = setTimeout(l, 200));
    var C = new Image,
        E = new Image;
    C.src = "static/particle.png", E.src = "static/particle_02.png";
    for (var z = document.getElementsByTagName("canvas"), A = Array(z.length), T = 0; T < z.length; T++) {
        var K = z[T],
            O = K.clientWidth,
            R = K.clientHeight,
            H = Array(100);
        K.width = O, K.height = R;
        for (var L = 0; L < H.length; L++) H[L] = new ImageParticle(K, t.random() > .5 ? C : E);
        A[T] = H
    }
    var P = e.requestAnimationFrame;
    P ? h() : setInterval(c, 1e3 / 30);
    var S = "active",
        B = "." + S,
        //G = $("#sushi-select"),
        G = $("#two"),
        N = $("#sushi-texts"),
        W = $("#sushi-images"),
        D = $("#slide-section"),
        F = $("#slide-select"),
        U = $("#slide-images");
    v(G, W, function(e) {
        N.find(B).add(N.children().eq(e)).toggleClass(S)
    }), v(F, U), U.on("click", function() {
        var e = F.children(),
            t = F.find(B).index(),
            n = e.length;
        t++, t >= n && (t = 0), e.eq(t).click()
    });
    var _ = setInterval(function() {
        U.click()
    }, 3e3);
    D.on("click", function(e) {
        e.originalEvent && (clearInterval(_), D.off("click"))
    }), d("#twitter", function() {
        open("http://twitter.com/share?url=http://getsooshi.com&text=" + encodeURIComponent("SOOSHI 鈥� A new iOS app all about sushi. Learn more on @getsooshi"), "", "width=550,height=257")
    }), d("#fb", function() {
        open("http://www.facebook.com/sharer/sharer.php?u=http://getsooshi.com", "", "width=555,height=368")
    })
}(window, Math);
=======
! function() {
    function e(e, t) {
        return Math.random() * (t - e) + e
    }

    function t(t, n) {
        var a = this;
        a.canvas = t, a.img = n, a.posX = Math.random() * t.width, a.posY = Math.random() * t.height, a.velX = e(.2, .2), a.velY = e(.2, .2), a.size = e(.75, 1), a.alpha = e(.2, 1)
    }
    t.prototype.step = function() {
        var t = this;
        do var n = e(-1, 1),
            a = e(-1, 1),
            i = n * n + a * a; while (i >= 1);
        t.velX += .05 * Math.sqrt(-2 * Math.log(i) / i) * n, t.velY += .05 * Math.sqrt(-2 * Math.log(i) / i) * a;
        var r = t.posX - .4 * t.canvas.width,
            o = t.posY - .4 * t.canvas.height,
            l = 5e-4 * Math.sqrt(r * r + o * o);
        l = l * l * l, t.velX -= r > 0 ? l : -l, t.velY -= o > 0 ? l : -l, t.velX > 1 ? t.velX = 1 : t.velX < -1 && (t.velX = -1), t.velY > 1 ? t.velY = 1 : t.velY < -1 && (t.velY = -1), t.posX += t.velX, t.posY += t.velY, t.alpha += e(-.01, .01), t.alpha > 1 ? t.alpha = 1 : t.alpha < .2 && (t.alpha = .2)
    }, t.prototype.render = function(e) {
        var t = this;
        e.save(), e.translate(t.posX, t.posY), e.scale(t.size, t.size), e.translate(-t.img.width / 2, -t.img.width / 2), e.globalAlpha = t.alpha, e.globalCompositeOperation = "source-over", e.drawImage(t.img, 0, 0), e.restore()
    }, window.ImageParticle = t
}(),
function(e, t) {
    function n(t, n) {
        e.addEventListener(t, n, !1)
    }

    function a(t, n) {
        e.removeEventListener(t, n, !1)
    }

    function i() {
        u = e.innerWidth, m = e.innerHeight
    }

    function r(e) {
        var n = e.accelerationIncludingGravity,
            a = n.x,
            i = n.y,
            r = n.z,
            o = (r > 0) - (0 > r),
            l = t.sin(t.atan2(a, o * t.sqrt(.1 * i * i + r * r))),
            c = t.sin(t.atan2(i, t.sqrt(a * a + r * r)) - .25 * t.PI);
        s(l, c)
    }

    function o(e) {
        var t = 2 * e.clientX / u - 1,
            n = 2 * e.clientY / m - 1;
        s(t, n)
    }

    function l(e) {
        var t = e && e.accelerationIncludingGravity;
        a(f, l), i(), n("resize", i), t && null !== t.x ? (clearTimeout(g), r(e), n(f, r)) : n("mousemove", o)
    }

    function s(e, t) {
        var n = Date.now(),
            a = n - x;
        a /= a + 1 / p;
        var i = 1 - a;
        x = n, M = a * e + i * M, b = a * t + i * b;
        for (var r = 0; r < q.length; r++)
            for (var o = q[r], l = 0; l < k.length; l++) {
                var s = k[l];
                o.children[l].style[y] = I + "translate3d(" + M * s.m + "px," + b * s.m + "px,0)"
            }
    }

    function c() {
        for (var e = 0; e < z.length; e++) {
            var t = z[e],
                n = A[e],
                a = t.getContext("2d");
            a.clearRect(0, 0, t.width, t.height);
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                r.step(), r.render(a)
            }
        }
    }

    function h() {
        c(), P(h)
    }

    function v(e, t, n) {
        e.on("click", "li", function() {
            var a = $(this),
                i = a.index();
            a.hasClass(S) || (a.add(t.children().eq(i)).add(e.find(B)).add(t.find(B)).toggleClass(S), n && n(i))
        })
    }

    function d(e, t) {
        $(e).on("click", function(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ? void 0 : (t(), !1)
        })
    }
    var g, u, m, f = "devicemotion",
        p = 5,
        w = document.createElement("style");
    document.head.appendChild(w);
    var y, I, X = w.sheet,
        Y = X.cssRules,
        k = [{
            s: "header>h6{}",
            m: 6
        }, {
            s: "header>h1{}",
            m: 10
        }, {
            s: "header>img{}",
            m: -10
        }];
    ! function() {
        function e(e, t) {
            return t = t ? "-" + t + "-" : "", n[e] = t + "translate3d(0,0,0)", n[e].length ? t : !1
        }
        for (var t = 0; t < k.length; t++) X.insertRule(k[t].s, t);
        for (var n = Y[0].style, a = ["", "ms", "webkit"], t = 0; t < a.length; t++) {
            var i = a[t],
                r = (i ? i + "T" : "t") + "ransform";
            if (r in n) {
                I = e(r, i) || e(r), y = I === !1 ? !1 : r;
                break
            }
        }
    }();
    var q = document.getElementsByTagName("header"),
        x = 0,
        M = 0,
        b = 0;
    y && (n(f, l), g = setTimeout(l, 200));
    var C = new Image,
        E = new Image;
    C.src = "static/particle.png", E.src = "static/particle_02.png";
    for (var z = document.getElementsByTagName("canvas"), A = Array(z.length), T = 0; T < z.length; T++) {
        var K = z[T],
            O = K.clientWidth,
            R = K.clientHeight,
            H = Array(100);
        K.width = O, K.height = R;
        for (var L = 0; L < H.length; L++) H[L] = new ImageParticle(K, t.random() > .5 ? C : E);
        A[T] = H
    }
    var P = e.requestAnimationFrame;
    P ? h() : setInterval(c, 1e3 / 30);
    var S = "active",
        B = "." + S,
        //G = $("#sushi-select"),
        G = $("#two"),
        N = $("#sushi-texts"),
        W = $("#sushi-images"),
        D = $("#slide-section"),
        F = $("#slide-select"),
        U = $("#slide-images");
    v(G, W, function(e) {
        N.find(B).add(N.children().eq(e)).toggleClass(S)
    }), v(F, U), U.on("click", function() {
        var e = F.children(),
            t = F.find(B).index(),
            n = e.length;
        t++, t >= n && (t = 0), e.eq(t).click()
    });
    var _ = setInterval(function() {
        U.click()
    }, 3e3);
    D.on("click", function(e) {
        e.originalEvent && (clearInterval(_), D.off("click"))
    }), d("#twitter", function() {
        open("http://twitter.com/share?url=http://getsooshi.com&text=" + encodeURIComponent("SOOSHI 鈥� A new iOS app all about sushi. Learn more on @getsooshi"), "", "width=550,height=257")
    }), d("#fb", function() {
        open("http://www.facebook.com/sharer/sharer.php?u=http://getsooshi.com", "", "width=555,height=368")
    })
}(window, Math);
>>>>>>> origin/master
