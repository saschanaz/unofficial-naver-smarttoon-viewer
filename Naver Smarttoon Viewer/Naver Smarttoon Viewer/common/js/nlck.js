﻿if (typeof nclk == "undefined") { nclk = {} } if (!g_pid) { var g_pid = "" } if (!g_sid) { var g_sid = "" } if (!ccsrv) { var ccsrv = "cc.naver.com" } if (!nsc) { var nsc = "Mcomic.home" } nclk.vs = "0.1.4"; nclk.md = "cc"; nclk.pt = (window.location.protocol == "https:") ? "https:" : "http:"; nclk.ct = 0; nclk.st = 0; nclk.ec = encodeURIComponent; if (window.g_ssc != undefined && window.g_query != undefined) { nclk.st = 1 } else { nclk.st = 0 } function nclk(e, q, k, c, d, p) { var h, j, b, f, n, t, s; if (!d) { d = 0 } if (!p) { p = "" } n = ""; if (d == 1) { h = 0 } else { if (e.href) { f = e.tagName.toLowerCase(); n = e.href.toLowerCase(); t = e.target; s = e.getAttribute("href", 2); if ((t && t != "_self" && t != "_top" && t != "_parent") || (n.indexOf("javascript:") != -1) || (s && s.charAt(0) == "#") || (n.indexOf("#") != -1 && (n.substr(0, e.href.indexOf("#")) == document.URL)) || f == "img") { h = 0 } else { h = 1 } } else { h = 0 } } tU = nclk.gl(q, k, c, "", h, nclk.st, p); if (n && n.indexOf(nclk.pt + "//" + ccsrv) == 0) { j = e.href } else { if (n && n.indexOf(nclk.pt + "//" + ccsrv) != 0 && f && f != "img") { j = tU + "&u=" + nclk.ec(e.href) } else { j = tU + "&u=about%3Ablank" } } if (h == 1) { b = e.innerHTML; e.href = j; if (e.innerHTML != b) { e.innerHTML = b } } else { if (document.images) { nclk.sd(j) } } return true } nclk.sd = function (a, c) { var d = 0; var g; if (nclk.ct > 0) { var b = new Date().getTime(); a += "&time=" + b } if (typeof c == "function") { d = 1 } var e = new Image(); e.src = a; e.onload = function () { if (g) { clearTimeout(g) } if (d == 1) { c() } e.onload = null; return }; if (d == 1) { g = setTimeout(function () { c() }, 5000) } nclk.ct++ }; nclk.gl = function (d, f, k, e, b, h, j) { if (b == undefined) { b = 1 } if (h == undefined) { h = 0 } if (!j) { j = "" } var c = nclk.pt + "//" + ccsrv + "/" + nclk.md + "?a=" + d + "&r=" + k + "&i=" + f + "&m=" + b; if (h == 1) { c += "&ssc=" + g_ssc + "&q=" + nclk.ec(g_query) + "&s=" + g_sid + "&p=" + g_pid + "&g=" + j } else { c += "&nsc=" + nsc } if (e) { c += "&u=" + nclk.ec(e) } return c }; function nclkR(b, d, e, c) { window.location.href = nclk.gl(b, d, e, c, 1, nclk.st) } function nclkF(c, d, e, g) { var b = nclk.gl(c, d, e, "about%3Ablank", 0, nclk.st); nclk.sd(b, g) };