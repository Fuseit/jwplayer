! function(a) {
    function b(d) {
        console.log("jwpsrb.js started!");
        console.log("asset_host: " + gon["assets_host"]);
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}([function(a, b, c) {
    function d() {
        var a, b;
        if (navigator.plugins && "object" == typeof navigator.plugins["Shockwave Flash"]) {
            if (b = navigator.plugins["Shockwave Flash"].description) return b
        } else if ("undefined" != typeof window.ActiveXObject) try {
            if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), a && (b = a.GetVariable("$version"))) return b
        } catch (c) {}
        return ""
    }
    jwplayer.jwpsrv = jwplayer.jwpsrv || {};
    var e = c(1),
        f = c(2),
        g = c(3),
        h = c(4),
        i = c(5),
        j = c(6),
        k = c(7),
        l = function(a, b, c) {
            function d() {
                if ("" === rb.innerHTML || rb.className !== qb) pb = 1;
                else {
                    var a = cb.getContainer();
                    pb = 0 === db.width || null === a.offsetParent || 0 === a.clientHeight ? -1 : null === rb.offsetParent || 0 === rb.clientHeight ? 1 : 0
                }
                return pb
            }

            function l(a) {
                return [_(I, kb, 21), _(J, cb.getAutostart(), 11), _(K, gb, 21), _(Z, hb, 28), _($, ib, 28), _(V, cb.html5Mode(), 10), _(P, db.bucket, 21), _(W, y(a), 101), _(M, x(a), 20), _(Y, d(), 100)]
            }

            function n(a) {
                return [_(L, w(a), 100)].concat(l(a))
            }

            function o(a, b) {
                return [_(U, b, 23)].concat(n(a))
            }

            function p(a) {
                q(), ib = B(12), cb.playlistIndex = a.index
            }

            function q() {
                sb = {}, tb = !1, ub = 0
            }

            function r(a) {
                return function(b) {
                    if (!Bb) {
                        var c = sb[a];
                        (a !== xb || (b = b.metadata || b, c && (b.width = b.width || c.width, b.height = b.height || c.height, b.duration = b.duration || c.duration), !cb.html5Mode() || 100 !== b.duration && 0 !== b.duration || 0 !== b.width || 0 !== b.height)) && (sb[a] = b, a === wb && (c || (zb = 0), Ab = cb.getPosition()), sb[wb] && sb[xb] && sb[yb] && (tb || (tb = !0, C())))
                    }
                }
            }

            function s() {
                var a = cb.getDuration();
                if (0 >= a) {
                    var b = sb[xb];
                    b && (a = b.duration)
                }
                return 0 | a
            }

            function t(a) {
                return a = 0 | a, 0 >= a ? 0 : 30 > a ? 1 : 60 > a ? 4 : 180 > a ? 8 : 300 > a ? 16 : 32
            }

            function u(a) {
                return a = 0 | a, 0 >= a ? 0 : 15 > a ? 1 : 300 >= a ? 2 : 1200 >= a ? 3 : 4
            }

            function v() {
                Ab = cb.getPosition(), ub = 0
            }

            function w(a) {
                var b;
                if (!a) return null;
                var c = a.sources;
                if (c) {
                    for (var d = [], e = c.length; e--;) c[e].file && d.push(c[e].file);
                    d.sort(), b = d[0]
                } else b = a.file;
                return h.getAbsolutePath(b)
            }

            function x(a) {
                return a ? a.title : null
            }

            function y(a) {
                return a ? a.mediaid : null
            }

            function z(a) {
                if (!a) return null;
                var b = 1,
                    c = 2,
                    d = 3,
                    e = 4,
                    f = 5,
                    g = 6,
                    h = 0,
                    i = sb[yb];
                if (i && i.levels && i.levels.length) {
                    var j = i.levels[0];
                    if (j && "auto" === ("" + j.label).toLowerCase()) return f
                }
                var k, l = a.sources;
                if (l && l.length && (k = l[0].type, "aac" === k || "mp3" === k || "vorbis" === k)) return g;
                var m = sb[xb] || {},
                    n = 0 | m.width,
                    o = 0 | m.height;
                return 0 === n && 0 === o ? "rtmp" === k ? g : h : 320 >= n ? b : 640 >= n ? c : 1280 >= n ? d : e
            }

            function A(a) {
                a = a || cb.getPlaylistItem(), hb = B(12), eb.calculate(), vb.track(jb, F, [_(X, m(), 22), _(S, db.height, 22), _(R, db.width, 23)].concat(n(a)))
            }

            function B(a) {
                return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
            }

            function C() {
                var a = s(),
                    b = cb.getPlaylistItem();
                eb.calculate(), vb.track(jb, G, [_(Q, z(b), 21), _(T, u(a), 22)].concat(o(b, t(a))))
            }

            function D(a, b, c) {
                var d = b + .5 | 0;
                d > 0 && (eb.calculate(), vb.track(jb, H, [_(N, d, 21), _(O, 0 | a, 22)].concat(o(cb.getPlaylistItem(), c))))
            }

            function E(a) {
                Bb = !!a.active
            }
            if (b.enabled !== !1) {
                var F = "e",
                    G = "s",
                    H = "t",
                    I = "ed",
                    J = "d",
                    K = "ph",
                    L = "mu",
                    M = "t",
                    N = "ti",
                    O = "pw",
                    P = "ps",
                    Q = "vs",
                    R = "wd",
                    S = "pl",
                    T = "l",
                    U = "q",
                    V = "m",
                    W = "id",
                    X = "fv",
                    Y = "eb",
                    Z = "emi",
                    $ = "pli",
                    _ = function(a, b, c) {
                        return new i(a, b, c)
                    },
                    ab = 128,
                    bb = !1 || b.debug === !0,
                    cb = new f(a),
                    db = null,
                    eb = this,
                    fb = jwplayer.defaults,
                    gb = fb && fb.ph ? fb.ph : 0;
                2 === parseInt(b.sdkplatform, 10) && (gb = "");
                var hb, ib, jb, kb = 0;
                if (jwplayer.key) {
                    var lb = new jwplayer.utils.key(jwplayer.key),
                        mb = lb.edition();
                    "invalid" !== mb && (jb = lb.token()), "enterprise" === mb ? kb = 6 : "invalid" === mb ? kb = 4 : "ads" === mb ? kb = 3 : "premium" === mb ? kb = 2 : "pro" === mb && (kb = 1)
                }
                jb || (jb = "_"), eb.getCommonAdTrackingParameters = function() {
                    return l(cb.getPlaylistItem(), !1)
                }, eb.calculate = function() {
                    db = function() {
                        function a(a, b) {
                            return /\d+%/.test(a) && (a = Math.ceil(parseFloat(a) / 100 * b)), b - a
                        }
                        var b = 1,
                            c = 2,
                            d = 3,
                            e = 4,
                            f = 5,
                            g = 0,
                            h = 40,
                            i = cb.getConfig(),
                            j = cb.getWidth(),
                            k = cb.getHeight(),
                            l = /\d+%/.test(j);
                        if (l) {
                            var m = jwplayer.utils.bounds(cb.getContainer());
                            j = Math.ceil(m.width), k = Math.ceil(m.height)
                        }
                        var n = 0;
                        return i.listbar && (n = i.listbar.size, "bottom" === i.listbar.position ? k = a(n, k) : j = a(n, j)), j = 0 | j, /\d+%/.test(i.width || j) && i.aspectratio ? {
                            bucket: e,
                            width: j,
                            height: k
                        } : h > k ? {
                            bucket: f,
                            width: j,
                            height: k
                        } : 0 === j ? {
                            bucket: g,
                            width: j,
                            height: k
                        } : 320 >= j ? {
                            bucket: b,
                            width: j,
                            height: k
                        } : 640 >= j ? {
                            bucket: c,
                            width: j,
                            height: k
                        } : {
                            bucket: d,
                            width: j,
                            height: k
                        }
                    }()
                }, eb.getPlayerSize = function() {
                    return db
                };
                var nb = new g(cb, 2e3);
                k(eb, b, jb, bb, cb, nb);
                var ob = new j(cb, bb, jb, kb);
                jwplayer.jwpsrv.parseConfig = function(a) {
                    var b = new f(a).getConfig();
                    return ob.parseConfig(b)
                };
                var pb = -1,
                    qb = "afs_ads",
                    rb = document.createElement("div");
                rb.className = qb, rb.innerHTML = "&nbsp;", rb.style.width = "1px", rb.style.height = "1px", rb.style.position = "absolute", rb.style.background = "transparent", c.appendChild(rb);
                var sb, tb, ub, vb = new e(b, bb, "jwplayer6", nb),
                    wb = "play",
                    xb = "meta",
                    yb = "levels",
                    zb = 0,
                    Ab = null,
                    Bb = !1;
                cb.onReady(function() {
                    var a = cb.getPlaylistItem();
                    setTimeout(function() {
                        A(a)
                    }, 0), ob.doConfigPing()
                }), cb.onPlay(r(wb)), cb.onMeta(r(xb)), cb.onQualityLevels(r(yb)), cb.onCast(E), cb.onTime(function(a) {
                    if (!Bb) {
                        var b = a.position,
                            c = a.duration;
                        if (b) {
                            if (b > 1) {
                                if (!sb[xb]) {
                                    var d = {
                                        duration: c
                                    };
                                    if (cb.html5Mode()) {
                                        var e = cb.getVideoTag();
                                        e && (d.width = e.videoWidth, d.height = e.videoHeight)
                                    }
                                    r(xb)(d)
                                }
                                sb[yb] || r(yb)({})
                            }
                            var f = t(c),
                                g = c / f,
                                h = b / g + 1 | 0;
                            0 === ub && (ub = h), null === Ab && (Ab = b);
                            var i = b - Ab;
                            if (Ab = b, i = Math.min(Math.max(0, i), 4), zb += i, h === ub + 1) {
                                var j = ab * ub / f;
                                if (ub = 0, h > f) return;
                                D(j, zb, f), zb = 0
                            }
                        }
                    }
                }), cb.onComplete(function() {
                    if (!Bb) {
                        var a = s();
                        if (!(0 >= a)) {
                            var b = t(a);
                            D(ab, zb, b), zb = 0
                        }
                    }
                }), cb.onSeek(v), cb.onIdle(q), cb.onPlaylistItem(p), q()
            }
        },
        m = function() {
            var a = d().replace("Shockwave Flash", "").replace(/ /g, "");
            return function() {
                return a
            }
        }();
    window.jwplayer && jwplayer() && jwplayer().registerPlugin("jwpsrv", "6.0", l)
}, function(a, b, c) {
    var d = jwplayer.jwpsrv,
        e = c(4),
        f = c(5),
        g = function(a, b, c, d, e) {
            var f = 2 === parseInt(a.sdkplatform, 10),
                g = "complete" === document.readyState,
                h = {
                    trackerVersion: 23,
                    serverURL: "jwpltx.com",
                    serverPath: "v1/" + c + "/ping.gif?",
                    playerVersion: jwplayer.version,
                    config: a,
                    SDKPlatform: a.sdkplatform || "0",
                    isiOSSDK: f,
                    iFrame: e,
                    pageURL: e,
                    pageTitle: e,
                    pageLoaded: g,
                    queue: [],
                    debug: b,
                    positionUtils: d
                };
            if (!f) {
                if (h.iFrame = window.top !== window.self) {
                    h.pageURL = document.referrer;
                    try {
                        h.pageURL = h.pageURL || window.top.location.href, h.pageTitle = window.top.document.title
                    } catch (i) {}
                }
                h.pageURL = h.pageURL || window.location.href, h.pageTitle = h.pageTitle || document.title
            }
            var j = jwplayer.utils.extend(this, h);
            if (!g) {
                var k = function() {
                    for (j.pageLoaded = !0; j.queue.length;) j.ping(j.queue.shift())
                };
                window.addEventListener ? window.addEventListener("load", k) : window.attachEvent("onload", k)
            }
        };
    g.prototype.track = function(a, b, c) {
        this.ping(this.buildTrackingURL(a, b, c))
    };
    var h = "tv",
        i = "n",
        j = "aid",
        k = "e",
        l = "i",
        m = "ifd",
        n = "pv",
        o = "pu",
        p = "pt",
        q = "sdk",
        r = "sv",
        s = "bi",
        t = "an",
        u = "did",
        v = "dm",
        w = function(a, b, c) {
            return new f(a, b, c)
        };
    g.prototype.buildTrackingURL = function(a, b, c) {
        var d = [w(h, this.trackerVersion, 0), w(i, Math.random().toFixed(16).substr(2, 16), 2), w(j, a, 4), w(k, b, 5), w(l, this.iFrame, 6), w(m, this.positionUtils.getIFrameDepth(), 6), w(n, this.playerVersion, 7), w(o, this.pageURL, 101), w(p, this.pageTitle, 103), w(q, this.SDKPlatform, 25)].concat(c);
        this.isiOSSDK && d.push(w(u, this.config.mobiledeviceid || "", 26), w(r, this.config.iossdkversion || "", 27), w(v, this.config.mobiledevicemodel || "", 28), w(s, this.config.bundleid || "", 29), w(t, this.config.applicationname || "", 30)), d.sort(function(a, b) {
            return a.priority - b.priority
        });
        for (var e = [], f = 0; d.length > f; f++) e.push(d[f].getKey() + "=" + encodeURIComponent(d[f].getValue()));
        var g = ["//", this.serverURL, "/", this.serverPath, e.join("&")];
        return "file:" === window.location.protocol && g.unshift("http:"), g.join("")
    }, g.prototype.ping = function(a) {
        if (!this.pageLoaded) return void this.queue.push(a);
        var b = new Image;
        if (b.src = a, this.debug && e.isFunction(d.onping)) try {
            d.onping.call(this, a)
        } catch (c) {}
    }, a.exports = g
}, function(a, b, c) {
    function d(a, b) {
        return function(c) {
            return a[b] ? a[b](c) : void 0
        }
    }

    function e(a, b) {
        return function() {
            return a[b]()
        }
    }

    function f(a) {
        n(a.plugins) && o(a.plugins, function(b, c) {
            return l(c.client) && (c.client.match("vast") || c.client.match("googima")) ? void(a.advertising = c) : void 0
        })
    }

    function g(a) {
        var b = {
            description: "",
            image: "",
            mediaid: "",
            title: "",
            sources: [],
            tracks: []
        };
        if (a.playlist) {
            if (!l(a.playlist)) {
                for (var c = [], d = 0; a.playlist.length > d; d++) c[d] = h(a.playlist[d]);
                a.playlist = c
            }
        } else {
            var e = {};
            if (o(b, function(b) {
                    k(a, e, b)
                }), !e.sources)
                if (a.levels) e.sources = a.levels, delete a.levels;
                else {
                    var f = {};
                    k(a, f, "file"), k(a, f, "type"), e.sources = f.file ? [f] : []
                }
            a.playlist = [h(e)]
        }
    }

    function h(a) {
        var b = {
                description: "",
                image: "",
                mediaid: "",
                title: "",
                sources: [],
                tracks: []
            },
            c = m({}, b, a);
        0 === c.sources.length && (c.sources = [i(c)]);
        for (var d = [], e = 0; c.sources.length > e; e++) d[e] = i(c.sources[e]);
        c.sources = d;
        var f = [];
        for (c.tracks = a && n(a.tracks) ? a.tracks : [], e = 0; c.tracks.length > e; e++) f[e] = j(c.tracks[e]);
        if (c.captions && !n(a.tracks)) {
            for (var g = 0; c.captions.length > g; g++) f.push(c.captions[g]);
            delete c.captions
        }
        return c.tracks = f, c
    }

    function i(a) {
        var b = {
            file: null,
            label: null,
            type: null
        };
        b[p] = null;
        var c = m({}, b);
        o(b, function(b) {
            n(a[b]) && (c[b] = a[b])
        });
        var d = a[p];
        return a[p] = d && "true" === d.toString(), c
    }

    function j(a) {
        var b = {
            file: null,
            label: null,
            kind: "captions"
        };
        b[p] = !1;
        var c = m({}, b);
        return o(b, function(b) {
            n(a[b]) && (c[b] = a[b])
        }), c
    }

    function k(a, b, c) {
        n(a[c]) && (b[c] = a[c], delete a[c])
    }

    function l(a) {
        return "string" == typeof a
    }
    var m = jwplayer.utils.extend,
        n = jwplayer.utils.exists,
        o = c(4).forEach,
        p = "default",
        q = function(a) {
            for (var b = "BeforePlay Ready Idle Playlist PlaylistItem Cast Buffer QualityLevels Meta Play Pause Seek Complete Time AdMeta AdImpression AdPlay AdError AdClick AdSkipped AdTime AdComplete".split(" "), c = b.length; c--;) {
                var h = "on" + b[c];
                this[h] = d(a, h)
            }
            var i = "RenderingMode Width Height Volume Mute Position Duration Fullscreen QualityLevels CurrentQuality Container".split(" ");
            for (c = i.length; c--;) {
                var j = "get" + i[c];
                this[j] = e(a, j)
            }
            var k = m({}, a.config);
            g(k), f(k), this.getConfig = function() {
                return k
            }, this.removed = function() {
                var b = a.getContainer();
                return b ? "IDLE" === a.getState() && !b.parentNode : !0
            }, this.playlistIndex = 0, this.getPlaylistItem = function(b) {
                try {
                    return a.getPlaylistItem(b)
                } catch (c) {}
                return b = b || this.playlistIndex, this.getConfig().playlist[b] || null
            }, this.getPlaylist = function() {
                try {
                    return a.getPlaylist()
                } catch (b) {}
                return this.getConfig().playlist || null
            }, this.getPlaylistIndex = function() {
                try {
                    return a.getPlaylistIndex()
                } catch (b) {}
                return this.playlistIndex
            }, this.html5Mode = function() {
                return "html5" === this.getRenderingMode().toLowerCase()
            }, this.getID = function() {
                return a.id
            }, this.getAutostart = function() {
                return !!this.getConfig().autostart
            }, this.getVideoTag = function() {
                if (this.html5Mode()) {
                    var b = a.getContainer(),
                        c = b.getElementsByTagName("video");
                    if (c.length) return c[0]
                }
                return null
            }
        };
    a.exports = q
}, function(a) {
    function b(a, b) {
        var c = b.top > a.top + a.height || a.top > b.top + b.height || b.left > a.left + a.width || a.left > b.left + b.width,
            d = {
                top: 0,
                left: 0,
                width: 0,
                height: 0
            };
        return c === !1 && (d = {
            top: Math.max(a.top, b.top),
            left: Math.max(a.left, b.left),
            width: Math.min(Math.abs(a.left - (b.left + b.width)), Math.abs(b.left - (a.left + a.width)), a.width, b.width),
            height: Math.min(Math.abs(a.top - (b.top + b.height)), Math.abs(b.top - (a.top + a.height)), a.height, b.height)
        }), d
    }

    function c(a, c) {
        for (var d, e = a, f = c; null !== e.parentElement && "undefined" != typeof e.parentElement.tagName;) d = h(e.parentElement), f = b(f, d), e = e.parentElement;
        var g = h(e.ownerDocument.body).width,
            i = h(e.ownerDocument.body).height;
        return f = b(f, {
            top: 0,
            left: 0,
            width: g,
            height: i
        })
    }

    function d(a, b) {
        for (var c = a, d = b; null !== c && "undefined" != typeof c.tagName;) null !== c.offsetParent && c.offsetParent === c.parentElement.offsetParent ? (d.top += c.offsetTop - c.parentElement.offsetTop, d.left += c.offsetLeft - c.parentElement.offsetLeft) : (d.top += c.offsetTop, d.left += c.offsetLeft), null !== c.parentElement && "BODY" !== c.parentElement.tagName && (d.top -= "undefined" != typeof c.parentElement.scrollTop ? c.parentElement.scrollTop : 0, d.left -= "undefined" != typeof c.parentElement.scrollLeft ? c.parentElement.scrollLeft : 0), c = c.parentElement;
        return d
    }

    function e(a, b) {
        for (var c = {
                top: 0,
                left: 0
            }, e = a.getContainer(); null !== e;) {
            if (c = d(e, c), b || i(e) === window.top) return c;
            e = i(e).frameElement
        }
        return c
    }

    function f(a) {
        for (var b = a.getContainer(), d = h(b); null !== b;) {
            if (d = c(b, d), i(b) === window.top) return d;
            try {
                b = i(b).frameElement, d.top += b.offsetTop, d.left += b.offsetLeft
            } catch (e) {
                b = null
            }
        }
        return d
    }

    function g(a, b) {
        for (var e = a.getContainer(), f = h(e), g = {
                top: 0,
                left: 0
            }; null !== e;) {
            f = c(e, f), g = d(e, g);
            var j = i(e);
            if (j === window.top) {
                j.parent.postMessage(JSON.stringify({
                    type: "jwpsrv_position_response",
                    playerId: a.getID(),
                    rect: {
                        top: f.top,
                        left: f.left,
                        width: f.width,
                        height: f.height
                    },
                    iframeDepth: 0,
                    coords: g,
                    responseChain: b
                }), "*"), e = null;
                break
            }
            try {
                e = j.frameElement
            } catch (k) {
                e = null
            }
            null === e ? parent.postMessage(JSON.stringify({
                type: "jwpsrv_position",
                playerId: a.getID(),
                rect: {
                    top: f.top,
                    left: f.left,
                    width: f.width,
                    height: f.height
                },
                iframeDepth: 0,
                coords: g,
                responseChain: b
            }), "*") : (f.top += e.offsetTop, f.left += e.offsetLeft)
        }
    }

    function h(a) {
        if (!a.getBoundingClientRect) throw new Error("Cannot get bounds: " + a);
        var b = a.getBoundingClientRect(),
            c = {
                left: b.left,
                top: b.top,
                width: b.width,
                height: b.height
            };
        return "width" in b || (c.width = b.right - b.left), "height" in b || (c.height = b.bottom - b.top), c
    }

    function i(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }
    var j = function(a, b) {
        this.player = a, this.lastViewRect = void 0, this.lastViewPos = void 0, this.iframeDepth = 0;
        var c, d = window.location;
        try {
            c = !(window.top.location.protocol === d.protocol && window.top.location.host === d.host && window.top.location.port === d.port)
        } catch (e) {
            c = !0
        }
        if (this.isPolling = c, c) {
            var f = this,
                h = "" + Math.floor(1e11 * Math.random()),
                i = function(a) {
                    var b;
                    try {
                        b = JSON.parse(a.data)
                    } catch (c) {}
                    b && b.type && "jwpsrv_position_response" === b.type && f.player.getID() === b.playerId && (f.lastViewRect = b.rect, f.lastViewPos = b.coords, f.iframeDepth = b.iframeDepth)
                };
            window.addEventListener ? window.addEventListener("message", i) : window.attachEvent("onmessage", i), g(a, h);
            var j = setInterval(function() {
                a.removed() ? clearInterval(j) : f.isPolling && g(a, h)
            }, b)
        }
    };
    j.prototype.getPosition = function() {
        if (this.player.getFullscreen()) return "0,0";
        if (this.isPolling) return this.lastViewPos ? this.lastViewPos.left + "," + this.lastViewPos.top : null;
        var a = e(this.player, this.isPolling);
        return a.left + "," + a.top
    }, j.prototype.getViewablePercentage = function(a) {
        if (this.player.getFullscreen()) return 1;
        if (this.isPolling) return this.lastViewRect ? Math.round(1e3 * (this.lastViewRect.width * this.lastViewRect.height / (a.width * a.height))) / 1e3 : null;
        var b = f(this.player);
        return Math.round(1e3 * (b.width * b.height / (a.width * a.height))) / 1e3
    }, j.prototype.getIFrameDepth = function() {
        if (this.isPolling === !0) return this.iframeDepth ? this.iframeDepth : null;
        for (var a = i(this.player.getContainer()), b = 0; a !== window.top;) a = i(a.frameElement), b++;
        return b
    }, a.exports = j
}, function(a) {
    var b = {};
    b.getAbsolutePath = function(a, c) {
        if (b.isAbsolutePath(a)) return a;
        c = c || document.location.href;
        var d = c.substring(0, c.indexOf("://") + 3),
            e = c.substring(d.length, c.indexOf("/", d.length + 1)),
            f = a.split("/");
        if (0 !== a.indexOf("/")) {
            var g = c.split("?")[0];
            g = g.substring(d.length + e.length + 1, g.lastIndexOf("/")), f = g.split("/").concat(f)
        }
        for (var h = [], i = 0; f.length > i; i++) f[i] && "." !== f[i] && (".." === f[i] ? h.pop() : h.push(f[i]));
        return d + e + "/" + h.join("/")
    }, b.isAbsolutePath = function(a) {
        return a.match(/^[a-zA-Z]+:\/\//)
    }, b.forEach = function(a, b) {
        var c, e;
        for (c in a) d(a.hasOwnProperty) ? a.hasOwnProperty(c) && (e = a[c], b(c, e)) : (e = a[c], b(c, e))
    };
    var c = window.jwplayer.utils.typeOf,
        d = b.isFunction = function(a) {
            return "function" === c(a)
        };
    a.exports = b
}, function(a) {
    var b = function(a, b, c) {
        b === !0 || b === !1 ? b = b ? 1 : 0 : (null === b || void 0 === b) && (b = ""), this.key = a, this.value = b, this.priority = c
    };
    b.prototype.getKey = function() {
        return this.key
    }, b.prototype.getValue = function() {
        return this.value
    }, a.exports = b
}, function(a, b, c) {
    function d(a, b, c) {
        a[b] = a[b] || 0, c && a[b]++
    }

    function e(a, b) {
        d(a, "pf", x(b)), f(a, I), G(b, function(b, c) {
            f(a, c)
        })
    }

    function f(a, b) {
        d(a, "p", b !== I), d(a, "pt", F(b.title)), d(a, "pd", F(b.description)), d(a, "pm", F(b.mediaid)), d(a, "pi", F(b.image)), j(a, b.sources), l(a, b.tracks)
    }

    function g(a, b) {
        d(a, "r", b !== I), d(a, "rf", F(b.file)), d(a, "ro", F(b.onclick)), d(a, "rc", F(b.oncomplete)), d(a, "rh", F(b.heading)), d(a, "rd", F(b.dimensions))
    }

    function h(a, b) {
        d(a, "s", b !== I), d(a, "sl", F(b.link)), d(a, "sh", F(b.heading)), d(a, "sc", F(b.code))
    }

    function i(a, b) {
        d(a, "b", b !== I), d(a, "bp", F(b.position)), d(a, "bpb", "bottom" === b.position), d(a, "bpr", "right" === b.position), d(a, "bl", F(b.layout)), d(a, "ble", "extended" === b.layout), d(a, "blb", "basic" === b.position)
    }

    function j(a, b) {
        k(a, I), G(b, function(b, c) {
            k(a, c)
        })
    }

    function k(a, b) {
        d(a, "ps", b !== I), d(a, "psl", F(b.label)), d(a, "psd", F(b[E]) && b[E])
    }

    function l(a, b) {
        m(a, I), G(b, function(b, c) {
            m(a, c)
        })
    }

    function m(a, b) {
        d(a, "pk", b !== I), d(a, "pkl", F(b.label)), d(a, "pkd", F(b[E]) && b[E]), d(a, "pkp", "captions" === b.kind), d(a, "pkt", "thumbnails" === b.kind), d(a, "pkc", "chapters" === b.kind)
    }

    function n(a, b) {
        var c = b.stretching;
        d(a, "bat", F(b.abouttext)), d(a, "bal", F(b.aboutlink)), d(a, "bdt", !!b.displaytitle), d(a, "bfb", !!b.fallback), d(a, "bfp", F(b.flashplayer)), d(a, "bhp", F(b.html5player)), d(a, "bsp", F(b.startparam)), d(a, "bsv", F(b.stagevideo) && !b.stagevideo), d(a, "sth", F(c)), d(a, "stn", "none" === c), d(a, "ste", "exactfit" === c), d(a, "stu", "uniform" === c), d(a, "stf", "fill" === c), d(a, "bar", F(b.aspectratio)), d(a, "bas", !!b.autostart), d(a, "bcr", F(b.controls) && !b.controls), d(a, "bht", F(b.height)), d(a, "bte", !!b.mute), d(a, "bpy", F(b.primary)), d(a, "bph", "html5" === b.primary), d(a, "bpf", "flash" === b.primary), d(a, "brt", F(b.repeat)), d(a, "bsk", F(b.skin)), d(a, "bwi", F(b.width))
    }

    function o(a, b) {
        d(a, "c", b !== I), d(a, "cc", F(b.color)), d(a, "cs", F(b.fontSize)), d(a, "cf", F(b.fontFamily)), d(a, "co", F(b.fontOpacity)), d(a, "cb", F(b.backgroundColor)), d(a, "ct", F(b.backgroundOpacity)), d(a, "ce", F(b.edgeStyle)), d(a, "cw", F(b.windowColor)), d(a, "cd", F(b.windowOpacity))
    }

    function p(a, b) {
        d(a, "m", b !== I), d(a, "mb", F(b.bufferlength)), d(a, "ms", F(b.subscribe)), d(a, "mt", F(b.securetoken))
    }

    function q(a, b) {
        d(a, "l", b !== I), d(a, "lf", F(b.file)), d(a, "lh", F(b.hide)), d(a, "ll", F(b.link)), d(a, "lm", F(b.margin)), d(a, "lp", F(b.position))
    }

    function r(a, b) {
        d(a, "a", b !== I), d(a, "acv", x(b.client) && b.client.match("vast")), d(a, "acg", x(b.client) && b.client.match("googima")), d(a, "at", F(b.tag)), d(a, "av", F(b.vastxml)), d(a, "ak", F(b.skipoffset)), d(a, "am", F(b.admessage)), d(a, "an", y(b.companiondiv)), d(a, "ap", x(b.schedule)), s(a, b.schedule || I)
    }

    function s(a, b) {
        d(a, "ad", b !== I), d(a, "abp", 0), d(a, "abo", 0), d(a, "abm", 0), u(a, I), G(b, function(b, c) {
            t(a, c.offset), F(c.ad) ? u(a, c.ad) : u(a, c)
        })
    }

    function t(a, b) {
        switch (b) {
            case "pre":
                d(a, "abp", !0);
                break;
            case "post":
                d(a, "abo", !0);
                break;
            default:
                d(a, "abm", !0)
        }
    }

    function u(a, b) {
        d(a, "ab", b !== I), d(a, "abl", "linear" === b.type), d(a, "abn", "nonlinear" === b.type), d(a, "at", F(b.tag)), d(a, "av", F(b.vastxml))
    }

    function v(a, b) {
        d(a, "y", b !== I), d(a, "ym", F(b.mediaName)), d(a, "yp", F(b.playerName))
    }

    function w(a, b) {
        d(a, "g", b !== I), d(a, "gi", F(b.idstring)), d(a, "gt", F(b.trackingobject))
    }

    function x(a) {
        return "string" == typeof a
    }

    function y(a) {
        return a && "object" == typeof a
    }
    var protocol = jwplayer.utils.isHTTPS() ? "https:" : "http:";
    var z = jwplayer.jwpsrv,
        A = c(4),
        B = 0,
        C = "jwpltx.com",
        D = "v1/playerconfig/ping.gif?",
        E = "default",
        F = jwplayer.utils.exists,
        G = A.forEach,
        H = protocol + gon["assets_host"] + "/assets/jwplayer/jwpsrv_frq.js",
        I = {},
        J = function(a, b, c, d) {
            this.edition = d, this.debug = b, this.token = c, this.playerProxy = a, this.loader = new jwplayer.utils.scriptloader(H), A.isFunction(z.setSampleFrequency) || (z.setSampleFrequency = z.setSampleFrequency || function(a) {
                z.sampling_frequency = parseFloat(a)
            }, this.loader.load())
        };
    J.prototype.parseConfig = function(a) {
        a = a || this.playerProxy.getConfig();
        var b = {};
        return n(b, a), e(b, a.playlist), i(b, a.listbar || I), o(b, a.captions || I), p(b, a.rtmp || I), q(b, a.logo || I), g(b, a.related || I), h(b, a.sharing || I), r(b, a.advertising || I), v(b, a.sitecatalyst || I), w(b, a.ga || I), b
    }, J.prototype.doConfigPing = function() {
        if (void 0 === z.sampling_frequency) {
            var a = this;
            return void this.loader.addEventListener("COMPLETE", function() {
                a.doConfigPing()
            })
        }
        var b = z.sampling_frequency || B;
        if (!(Math.random() >= b) || this.debug) {
            var c = this.parseConfig(),
                d = this.constructURL(c, b);
            (new Image).src = d
        }
    }, J.prototype.constructURL = function(a, b) {
        var c = "ed",
            d = "pv",
            e = "pu",
            f = "n",
            g = "aid",
            h = "f",
            i = [];
        i.push(f + "=" + Math.random().toFixed(16).substr(2, 16)), i.push(g + "=" + encodeURIComponent(this.token)), i.push(c + "=" + this.edition), i.push(h + "=" + b), i.push(d + "=" + jwplayer.version);
        var j, k = window.top === window.self;
        if (k) {
            j = document.referrer;
            try {
                j = j || window.top.location.href
            } catch (l) {}
        }
        j = j || window.location.href, G(a, function(a, b) {
            i.push(a + "=" + encodeURIComponent(b))
        }), i.push(e + "=" + encodeURIComponent(j));
        var m = ["//", C, "/", D, i.join("&")];
        return "file:" === window.location.protocol && m.unshift("http:"), m.join("")
    }, a.exports = J
}, function(a, b, c) {
    function d(a, b, c) {
        return new h(a, b, c)
    }

    function e(a) {
        var b = a.advertising;
        return f(b && b.client)
    }

    function f(a) {
        if (a) {
            if (/vast/.test(a)) return 0;
            if (/googima/.test(a)) return 1
        }
        return -1
    }
    var g = c(1),
        h = c(5);
    a.exports = function(a, b, c, h, i, j) {
        function k(b) {
            b > 4 || (b > v.previousQuartile && (a.calculate(), l(b)), v.previousQuartile = b)
        }

        function l(a) {
            var b = [d(P, v.duration, 1), d($, a, 1)].concat(s());
            x.track(c, C, b)
        }

        function m(a) {
            return new Array(a + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, a)
        }

        function n(a) {
            return a = a.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/)), a && a.length > 1 ? a[1] : ""
        }

        function o() {
            return document.hasFocus && "function" == typeof document.hasFocus && document.hasFocus()
        }

        function p(a, b) {
            for (var c = b; c;) {
                if (c === a) return !0;
                c = c.parentNode
            }
            return !1
        }

        function q() {
            return p(i.getContainer(), document.activeElement)
        }

        function r() {
            return [d(E, v.adId, 1), d(G, y, 19), d(F, i.getMute(), 28), d(X, v.tagdomain, 29), d(I, v.adposition, 31)].concat(a.getCommonAdTrackingParameters())
        }

        function s() {
            var b = a.getPlayerSize(i);
            return [d(M, i.getVolume(), 20), d(N, b.width, 21), d(O, b.height, 21), d(V, v.podCount, 22), d(W, v.podIndex, 23), d(K, v.adCreativeType, 24), d(H, v.adLinear, 25), d(J, v.vastVersion, 26), d(L, v.adSystem, 27), d(Q, x.positionUtils.getViewablePercentage(b), 30), d(R, x.positionUtils.getPosition(), 31), d(T, _(), 31), d(U, o(), 31), d(S, q(), 31)].concat(r())
        }

        function t(a) {
            null === v && (v = {
                adId: m(12)
            }, w.extend(v, u)), -1 === y && a && (y = f(a.client))
        }
        var u = {
                numCompanions: -1,
                podCount: 0,
                podIndex: 0,
                adLinear: -1,
                vastVersion: -1,
                adSystem: "",
                adCreativeType: -1,
                adposition: -1,
                tagdomain: "",
                position: "",
                previousQuartile: 0,
                duration: ""
            },
            v = null,
            w = jwplayer.utils,
            x = new g(b, h, "clienta", j),
            y = e(i.getConfig() || {}),
            z = "i",
            A = "c",
            B = "s",
            C = "v",
            D = "ae",
            E = "adi",
            F = "mt",
            G = "c",
            H = "al",
            I = "p",
            J = "vv",
            K = "ct",
            L = "ad",
            M = "vl",
            N = "wd",
            O = "pl",
            P = "du",
            Q = "vi",
            R = "ap",
            S = "tf",
            T = "at",
            U = "df",
            V = "pc",
            W = "pi",
            X = "vu",
            Y = "ec",
            Z = "tw",
            $ = "qt";
        i.onAdMeta(function(a) {
            v = null, t(a), v.adLinear = "linear" === a.linear
        }), i.onAdImpression(function(b) {
            switch (t(b), b.creativetype) {
                case "static":
                    v.adCreativeType = 0;
                    break;
                case "video":
                    v.adCreativeType = 1;
                    break;
                case "vpaid":
                    v.adCreativeType = 2
            }
            switch (b.adposition) {
                case "pre":
                    v.adposition = 0;
                    break;
                case "mid":
                    v.adposition = 1;
                    break;
                case "post":
                    v.adposition = 2;
                    break;
                case "api":
                    v.adposition = 3
            }
            v.tagdomain = n(w.getAbsolutePath(b.tag)), v.adSystem = b.adsystem || v.adSystem, v.vastVersion = b.vastversion || v.vastVersion, v.podIndex = b.sequence || v.podIndex, v.podCount = b.podcount || v.podCount, a.calculate(), x.track(c, z, s())
        }), i.onAdComplete(function() {
            null !== v && (k(4), v = null)
        }), i.onAdTime(function(a) {
            t(a), v.position = a.position, v.duration = v.duration || a.duration, v.duration && k((4 * v.position + .05) / v.duration | 0)
        }), i.onAdSkipped(function(b) {
            t(b), a.calculate();
            var e = [d(Z, v.position, 1), d($, v.previousQuartile, 1), d(P, v.duration, 1)].concat(s());
            x.track(c, B, e), v = null
        }), i.onAdError(function(b) {
            t(b);
            var e = 1;
            "object" == typeof b && b && (void 0 !== b.code && (e = b.code), void 0 !== b.tag && (v.tagdomain = n(w.getAbsolutePath(b.tag)))), a.calculate();
            var f = [d(Y, e, 1)].concat(r());
            x.track(c, D, f), v = null
        }), i.onAdClick(function(b) {
            t(b), a.calculate();
            var e = [d(Z, v.position, 1), d(P, v.duration, 1), d($, v.previousQuartile, 1)].concat(s());
            x.track(c, A, e)
        });
        var _ = function() {
            for (var a = "hidden", b = ["", "webkit", "moz", "ms", "o"], c = 0; b.length > c; c++)
                if (b[c] && (a = b[c] + "Hidden"), a in document) return function() {
                    return !document[a]
                };
            return function() {
                return null
            }
        }()
    }
}]);
