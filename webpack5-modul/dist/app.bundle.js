!function (e) {
    var n = window.webpackHotUpdate;
    window.webpackHotUpdate = function (e, r) {
        !function (e, n) {
            if (!_[e] || !O[e]) return;
            for (var r in O[e] = !1, n) Object.prototype.hasOwnProperty.call(n, r) && (y[r] = n[r]);
            0 == --b && 0 === m && E()
        }(e, r), n && n(e, r)
    };
    var r, t = !0, o = "d88b20c78419238cdfdd", c = 1e4, i = {}, d = [], a = [];

    function l(e) {
        var n = H[e];
        if (!n) return P;
        var t = function (t) {
            return n.hot.active ? (H[t] ? -1 === H[t].parents.indexOf(e) && H[t].parents.push(e) : (d = [e], r = t), -1 === n.children.indexOf(t) && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e), d = []), P(t)
        }, o = function (e) {
            return {
                configurable: !0, enumerable: !0, get: function () {
                    return P[e]
                }, set: function (n) {
                    P[e] = n
                }
            }
        };
        for (var c in P) Object.prototype.hasOwnProperty.call(P, c) && "e" !== c && "t" !== c && Object.defineProperty(t, c, o(c));
        return t.e = function (e) {
            return "ready" === p && f("prepare"), m++, P.e(e).then(n, function (e) {
                throw n(), e
            });

            function n() {
                m--, "prepare" === p && (w[e] || D(e), 0 === m && 0 === b && E())
            }
        }, t.t = function (e, n) {
            return 1 & n && (e = t(e)), P.t(e, -2 & n)
        }, t
    }

    function s(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: r !== e,
            active: !0,
            accept: function (e, r) {
                if (void 0 === e) n._selfAccepted = !0; else if ("function" == typeof e) n._selfAccepted = e; else if ("object" == typeof e) for (var t = 0; t < e.length; t++) n._acceptedDependencies[e[t]] = r || function () {
                }; else n._acceptedDependencies[e] = r || function () {
                }
            },
            decline: function (e) {
                if (void 0 === e) n._selfDeclined = !0; else if ("object" == typeof e) for (var r = 0; r < e.length; r++) n._declinedDependencies[e[r]] = !0; else n._declinedDependencies[e] = !0
            },
            dispose: function (e) {
                n._disposeHandlers.push(e)
            },
            addDisposeHandler: function (e) {
                n._disposeHandlers.push(e)
            },
            removeDisposeHandler: function (e) {
                var r = n._disposeHandlers.indexOf(e);
                r >= 0 && n._disposeHandlers.splice(r, 1)
            },
            check: j,
            apply: x,
            status: function (e) {
                if (!e) return p;
                u.push(e)
            },
            addStatusHandler: function (e) {
                u.push(e)
            },
            removeStatusHandler: function (e) {
                var n = u.indexOf(e);
                n >= 0 && u.splice(n, 1)
            },
            data: i[e]
        };
        return r = void 0, n
    }

    var u = [], p = "idle";

    function f(e) {
        p = e;
        for (var n = 0; n < u.length; n++) u[n].call(null, e)
    }

    var h, y, v, b = 0, m = 0, w = {}, O = {}, _ = {};

    function g(e) {
        return +e + "" === e ? +e : e
    }

    function j(e) {
        if ("idle" !== p) throw new Error("check() is only allowed in idle status");
        return t = e, f("check"), (n = c, n = n || 1e4, new Promise(function (e, r) {
            if ("undefined" == typeof XMLHttpRequest) return r(new Error("No browser support"));
            try {
                var t = new XMLHttpRequest, c = P.p + "" + o + ".hot-update.json";
                t.open("GET", c, !0), t.timeout = n, t.send(null)
            } catch (e) {
                return r(e)
            }
            t.onreadystatechange = function () {
                if (4 === t.readyState) if (0 === t.status) r(new Error("Manifest request to " + c + " timed out.")); else if (404 === t.status) e(); else if (200 !== t.status && 304 !== t.status) r(new Error("Manifest request to " + c + " failed.")); else {
                    try {
                        var n = JSON.parse(t.responseText)
                    } catch (e) {
                        return void r(e)
                    }
                    e(n)
                }
            }
        })).then(function (e) {
            if (!e) return f("idle"), null;
            O = {}, w = {}, _ = e.c, v = e.h, f("prepare");
            var n = new Promise(function (e, n) {
                h = {resolve: e, reject: n}
            });
            y = {};
            return D(0), "prepare" === p && 0 === m && 0 === b && E(), n
        });
        var n
    }

    function D(e) {
        _[e] ? (O[e] = !0, b++, function (e) {
            var n = document.createElement("script");
            n.charset = "utf-8", n.src = P.p + "" + e + "." + o + ".hot-update.js", document.head.appendChild(n)
        }(e)) : w[e] = !0
    }

    function E() {
        f("ready");
        var e = h;
        if (h = null, e) if (t) Promise.resolve().then(function () {
            return x(t)
        }).then(function (n) {
            e.resolve(n)
        }, function (n) {
            e.reject(n)
        }); else {
            var n = [];
            for (var r in y) Object.prototype.hasOwnProperty.call(y, r) && n.push(g(r));
            e.resolve(n)
        }
    }

    function x(n) {
        if ("ready" !== p) throw new Error("apply() is only allowed in ready status");
        var r, t, c, a, l;

        function s(e) {
            for (var n = [e], r = {}, t = n.slice().map(function (e) {
                return {chain: [e], id: e}
            }); t.length > 0;) {
                var o = t.pop(), c = o.id, i = o.chain;
                if ((a = H[c]) && !a.hot._selfAccepted) {
                    if (a.hot._selfDeclined) return {type: "self-declined", chain: i, moduleId: c};
                    if (a.hot._main) return {type: "unaccepted", chain: i, moduleId: c};
                    for (var d = 0; d < a.parents.length; d++) {
                        var l = a.parents[d], s = H[l];
                        if (s) {
                            if (s.hot._declinedDependencies[c]) return {
                                type: "declined",
                                chain: i.concat([l]),
                                moduleId: c,
                                parentId: l
                            };
                            -1 === n.indexOf(l) && (s.hot._acceptedDependencies[c] ? (r[l] || (r[l] = []), u(r[l], [c])) : (delete r[l], n.push(l), t.push({
                                chain: i.concat([l]),
                                id: l
                            })))
                        }
                    }
                }
            }
            return {type: "accepted", moduleId: e, outdatedModules: n, outdatedDependencies: r}
        }

        function u(e, n) {
            for (var r = 0; r < n.length; r++) {
                var t = n[r];
                -1 === e.indexOf(t) && e.push(t)
            }
        }

        n = n || {};
        var h = {}, b = [], m = {}, w = function () {
            console.warn("[HMR] unexpected require(" + j.moduleId + ") to disposed module")
        };
        for (var O in y) if (Object.prototype.hasOwnProperty.call(y, O)) {
            var j;
            l = g(O);
            var D = !1, E = !1, x = !1, I = "";
            switch ((j = y[O] ? s(l) : {
                type: "disposed",
                moduleId: O
            }).chain && (I = "\nUpdate propagation: " + j.chain.join(" -> ")), j.type) {
                case"self-declined":
                    n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of self decline: " + j.moduleId + I));
                    break;
                case"declined":
                    n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of declined dependency: " + j.moduleId + " in " + j.parentId + I));
                    break;
                case"unaccepted":
                    n.onUnaccepted && n.onUnaccepted(j), n.ignoreUnaccepted || (D = new Error("Aborted because " + l + " is not accepted" + I));
                    break;
                case"accepted":
                    n.onAccepted && n.onAccepted(j), E = !0;
                    break;
                case"disposed":
                    n.onDisposed && n.onDisposed(j), x = !0;
                    break;
                default:
                    throw new Error("Unexception type " + j.type)
            }
            if (D) return f("abort"), Promise.reject(D);
            if (E) for (l in m[l] = y[l], u(b, j.outdatedModules), j.outdatedDependencies) Object.prototype.hasOwnProperty.call(j.outdatedDependencies, l) && (h[l] || (h[l] = []), u(h[l], j.outdatedDependencies[l]));
            x && (u(b, [j.moduleId]), m[l] = w)
        }
        var k, M = [];
        for (t = 0; t < b.length; t++) l = b[t], H[l] && H[l].hot._selfAccepted && M.push({
            module: l,
            errorHandler: H[l].hot._selfAccepted
        });
        f("dispose"), Object.keys(_).forEach(function (e) {
            !1 === _[e] && function (e) {
                delete installedChunks[e]
            }(e)
        });
        for (var A, S, q = b.slice(); q.length > 0;) if (l = q.pop(), a = H[l]) {
            var U = {}, T = a.hot._disposeHandlers;
            for (c = 0; c < T.length; c++) (r = T[c])(U);
            for (i[l] = U, a.hot.active = !1, delete H[l], delete h[l], c = 0; c < a.children.length; c++) {
                var R = H[a.children[c]];
                R && ((k = R.parents.indexOf(l)) >= 0 && R.parents.splice(k, 1))
            }
        }
        for (l in h) if (Object.prototype.hasOwnProperty.call(h, l) && (a = H[l])) for (S = h[l], c = 0; c < S.length; c++) A = S[c], (k = a.children.indexOf(A)) >= 0 && a.children.splice(k, 1);
        for (l in f("apply"), o = v, m) Object.prototype.hasOwnProperty.call(m, l) && (e[l] = m[l]);
        var C = null;
        for (l in h) if (Object.prototype.hasOwnProperty.call(h, l) && (a = H[l])) {
            S = h[l];
            var L = [];
            for (t = 0; t < S.length; t++) if (A = S[t], r = a.hot._acceptedDependencies[A]) {
                if (-1 !== L.indexOf(r)) continue;
                L.push(r)
            }
            for (t = 0; t < L.length; t++) {
                r = L[t];
                try {
                    r(S)
                } catch (e) {
                    n.onErrored && n.onErrored({
                        type: "accept-errored",
                        moduleId: l,
                        dependencyId: S[t],
                        error: e
                    }), n.ignoreErrored || C || (C = e)
                }
            }
        }
        for (t = 0; t < M.length; t++) {
            var N = M[t];
            l = N.module, d = [l];
            try {
                P(l)
            } catch (e) {
                if ("function" == typeof N.errorHandler) try {
                    N.errorHandler(e)
                } catch (r) {
                    n.onErrored && n.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: l,
                        error: r,
                        originalError: e
                    }), n.ignoreErrored || C || (C = r), C || (C = e)
                } else n.onErrored && n.onErrored({
                    type: "self-accept-errored",
                    moduleId: l,
                    error: e
                }), n.ignoreErrored || C || (C = e)
            }
        }
        return C ? (f("fail"), Promise.reject(C)) : (f("idle"), new Promise(function (e) {
            e(b)
        }))
    }

    var H = {};

    function P(n) {
        if (H[n]) return H[n].exports;
        var r = H[n] = {i: n, l: !1, exports: {}, hot: s(n), parents: (a = d, d = [], a), children: []};
        return e[n].call(r.exports, r, r.exports, l(n)), r.l = !0, r.exports
    }

    P.m = e, P.c = H, P.d = function (e, n, r) {
        P.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
    }, P.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, P.t = function (e, n) {
        if (1 & n && (e = P(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (P.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var t in e) P.d(r, t, function (n) {
            return e[n]
        }.bind(null, t));
        return r
    }, P.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return P.d(n, "a", n), n
    }, P.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, P.p = "/", P.h = function () {
        return o
    }, l("./src/index.js")(P.s = "./src/index.js")
}({
    "./src/index.js": function (e, n, r) {
        "use strict";
        r.r(n);
        let t = (c = document.createElement("pre"), document.createElement("button"), c.innerHTML = ["Hello webpack!", "5 cubed is equal to " + (o = 5, o * o * o)].join("\n\n"), c);
        var o, c;
        document.body.appendChild(t)
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIl0sIm5hbWVzIjpbInBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrIiwid2luZG93IiwiY2h1bmtJZCIsIm1vcmVNb2R1bGVzIiwiaG90QXZhaWxhYmxlRmlsZXNNYXAiLCJob3RSZXF1ZXN0ZWRGaWxlc01hcCIsIm1vZHVsZUlkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaG90VXBkYXRlIiwiaG90V2FpdGluZ0ZpbGVzIiwiaG90Q2h1bmtzTG9hZGluZyIsImhvdFVwZGF0ZURvd25sb2FkZWQiLCJob3RBZGRVcGRhdGVDaHVuayIsImhvdEN1cnJlbnRDaGlsZE1vZHVsZSIsImhvdEFwcGx5T25VcGRhdGUiLCJob3RDdXJyZW50SGFzaCIsImhvdFJlcXVlc3RUaW1lb3V0IiwiaG90Q3VycmVudE1vZHVsZURhdGEiLCJob3RDdXJyZW50UGFyZW50cyIsImhvdEN1cnJlbnRQYXJlbnRzVGVtcCIsImhvdENyZWF0ZVJlcXVpcmUiLCJtZSIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZm4iLCJyZXF1ZXN0IiwiaG90IiwiYWN0aXZlIiwicGFyZW50cyIsImluZGV4T2YiLCJwdXNoIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwid2FybiIsIk9iamVjdEZhY3RvcnkiLCJuYW1lIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiaG90U3RhdHVzIiwiaG90U2V0U3RhdHVzIiwidGhlbiIsImZpbmlzaENodW5rTG9hZGluZyIsImVyciIsImhvdFdhaXRpbmdGaWxlc01hcCIsImhvdEVuc3VyZVVwZGF0ZUNodW5rIiwidCIsIm1vZGUiLCJob3RDcmVhdGVNb2R1bGUiLCJfYWNjZXB0ZWREZXBlbmRlbmNpZXMiLCJfZGVjbGluZWREZXBlbmRlbmNpZXMiLCJfc2VsZkFjY2VwdGVkIiwiX3NlbGZEZWNsaW5lZCIsIl9kaXNwb3NlSGFuZGxlcnMiLCJfbWFpbiIsImFjY2VwdCIsImRlcCIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsImRlY2xpbmUiLCJkaXNwb3NlIiwiYWRkRGlzcG9zZUhhbmRsZXIiLCJyZW1vdmVEaXNwb3NlSGFuZGxlciIsImlkeCIsInNwbGljZSIsImNoZWNrIiwiaG90Q2hlY2siLCJhcHBseSIsImhvdEFwcGx5Iiwic3RhdHVzIiwibCIsImhvdFN0YXR1c0hhbmRsZXJzIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJkYXRhIiwibmV3U3RhdHVzIiwiaG90RGVmZXJyZWQiLCJob3RVcGRhdGVOZXdIYXNoIiwidG9Nb2R1bGVJZCIsImlkIiwiRXJyb3IiLCJyZXF1ZXN0VGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJyZXF1ZXN0UGF0aCIsInAiLCJvcGVuIiwidGltZW91dCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwidXBkYXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiYyIsImgiLCJwcm9taXNlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hhcnNldCIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImhvdERvd25sb2FkVXBkYXRlQ2h1bmsiLCJkZWZlcnJlZCIsInJlc3VsdCIsIm91dGRhdGVkTW9kdWxlcyIsIm9wdGlvbnMiLCJjYiIsImoiLCJtb2R1bGUiLCJnZXRBZmZlY3RlZFN0dWZmIiwidXBkYXRlTW9kdWxlSWQiLCJvdXRkYXRlZERlcGVuZGVuY2llcyIsInF1ZXVlIiwic2xpY2UiLCJtYXAiLCJjaGFpbiIsInF1ZXVlSXRlbSIsInBvcCIsInR5cGUiLCJwYXJlbnRJZCIsInBhcmVudCIsImNvbmNhdCIsImFkZEFsbFRvU2V0IiwiYSIsImIiLCJpdGVtIiwiYXBwbGllZFVwZGF0ZSIsIndhcm5VbmV4cGVjdGVkUmVxdWlyZSIsImFib3J0RXJyb3IiLCJkb0FwcGx5IiwiZG9EaXNwb3NlIiwiY2hhaW5JbmZvIiwiam9pbiIsIm9uRGVjbGluZWQiLCJpZ25vcmVEZWNsaW5lZCIsIm9uVW5hY2NlcHRlZCIsImlnbm9yZVVuYWNjZXB0ZWQiLCJvbkFjY2VwdGVkIiwib25EaXNwb3NlZCIsIm91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyIsImVycm9ySGFuZGxlciIsImtleXMiLCJmb3JFYWNoIiwiaW5zdGFsbGVkQ2h1bmtzIiwiaG90RGlzcG9zZUNodW5rIiwiZGVwZW5kZW5jeSIsIm1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzIiwiZGlzcG9zZUhhbmRsZXJzIiwiY2hpbGQiLCJtb2R1bGVzIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJvbkVycm9yZWQiLCJkZXBlbmRlbmN5SWQiLCJpZ25vcmVFcnJvcmVkIiwiZXJyMiIsIm9yaWdpbmFsRXJyb3IiLCJleHBvcnRzIiwibSIsImQiLCJnZXR0ZXIiLCJvIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInMiLCJzcmNfZWxlbWVudCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJ4IiwiYm9keSJdLCJtYXBwaW5ncyI6ImFBR0EsSUFBQUEsRUFBQUMsT0FBQSxpQkFDQUEsT0FBQSxpQkFDQSxTQUFBQyxFQUFBQyxJQWdSQSxTQUFBRCxFQUFBQyxHQUNBLElBQUFDLEVBQUFGLEtBQUFHLEVBQUFILEdBQ0EsT0FFQSxRQUFBSSxLQURBRCxFQUFBSCxJQUFBLEVBQ0FDLEVBQ0FJLE9BQUFDLFVBQUFDLGVBQUFDLEtBQUFQLEVBQUFHLEtBQ0FLLEVBQUFMLEdBQUFILEVBQUFHLElBR0EsS0FBQU0sR0FBQSxJ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QSxTQUFBQSxHQUFnSCxPQUFBNUksRUFBQTRJLElBQXFCQyxLQUFBLEtBQUFELElBQ3JJLE9BQUFGLEdBSUEzSixFQUFBK0osRUFBQSxTQUFBOUQsR0FDQSxJQUFBb0QsRUFBQXBELEtBQUF5RCxXQUNBLFdBQTJCLE9BQUF6RCxFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFqRyxFQUFBb0osRUFBQUMsRUFBQSxJQUFBQSxHQUNBQSxHQUlBckosRUFBQXNKLEVBQUEsU0FBQVUsRUFBQUMsR0FBc0QsT0FBQXBMLE9BQUFDLFVBQUFDLGVBQUFDLEtBQUFnTCxFQUFBQyxJQUd0RGpLLEVBQUFzRSxFQUFBLElBR0F0RSxFQUFBaUYsRUFBQSxXQUFzQyxPQUFBekYsR0FJdENLLEVBQUEsaUJBQUFBLENBQUFHLEVBQUFrSyxFQUFBLHlFQ2h3QkEsSUFBSUMsR0FoQkpDLEVBQUFoRixTQUFBQyxjQUFBLE9BQ0FELFNBQUFDLGNBQUEsVUFJQStFLEVBQUFDLFVBQUEsQ0FDQSxpQkFDQSx3QkNST0MsRURROEIsRUNQckNBLFFEUUE3QyxLQUFBLFFBR0EyQyxHQWJBLElDQ09FLEVEQ1BGLEVBaUJBaEYsU0FBQW1GLEtBQUE5RSxZQUEwQjBFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJkODhiMjBjNzg0MTkyMzhjZGZkZFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaW5kZXguanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IHtjdWJlfSBmcm9tICcuL21hdGguanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vIExvZGFzaO+8iOebruWJjemAmui/h+S4gOS4qiBzY3JpcHQg6ISa5pys5byV5YWl77yJ5a+55LqO5omn6KGM6L+Z5LiA6KGM5piv5b+F6ZyA55qEXG4gICAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbyDkvaDlpb0nLCAnd2VicGFjayddLCAnICcpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gW1xuICAgICAgICAnSGVsbG8gd2VicGFjayEnLFxuICAgICAgICAnNSBjdWJlZCBpcyBlcXVhbCB0byAnKyAgY3ViZSg1KVxuICAgIF0uam9pbignXFxuXFxuJyk7XG5cblxuICAgIHJldHVybiBlbGVtZW50O1xuXG59XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xubGV0IGVsZW1lbnQgPSBjb21wb25lbnQoKTsgLy8g5b2TIHByaW50LmpzIOaUueWPmOWvvOiHtOmhtemdoumHjeaWsOa4suafk+aXtu+8jOmHjeaWsOiOt+WPlua4suafk+eahOWFg+e0oFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTsiLCJleHBvcnQgZnVuY3Rpb24gc3F1YXJlKHgpIHtcbiAgICByZXR1cm4geCAqIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJlKHgpIHtcbiAgICByZXR1cm4geCAqIHggKiB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0=