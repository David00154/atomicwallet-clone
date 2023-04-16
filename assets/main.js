(() => {
  var e = {
      6808: (e, n, a) => {
        var i, t;
        /*!
         * JavaScript Cookie v2.2.1
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */ !(function (l) {
          if (
            (void 0 ===
              (t = "function" == typeof (i = l) ? i.call(n, a, n, e) : i) ||
              (e.exports = t),
            !0,
            (e.exports = l()),
            !!0)
          ) {
            var o = window.Cookies,
              s = (window.Cookies = l());
            s.noConflict = function () {
              return (window.Cookies = o), s;
            };
          }
        })(function () {
          function e() {
            for (var e = 0, n = {}; e < arguments.length; e++) {
              var a = arguments[e];
              for (var i in a) n[i] = a[i];
            }
            return n;
          }
          function n(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          }
          return (function a(i) {
            function t() {}
            function l(n, a, l) {
              if ("undefined" != typeof document) {
                "number" ==
                  typeof (l = e({ path: "/" }, t.defaults, l)).expires &&
                  (l.expires = new Date(1 * new Date() + 864e5 * l.expires)),
                  (l.expires = l.expires ? l.expires.toUTCString() : "");
                try {
                  var o = JSON.stringify(a);
                  /^[\{\[]/.test(o) && (a = o);
                } catch (e) {}
                (a = i.write
                  ? i.write(a, n)
                  : encodeURIComponent(String(a)).replace(
                      /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                      decodeURIComponent
                    )),
                  (n = encodeURIComponent(String(n))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape));
                var s = "";
                for (var c in l)
                  l[c] &&
                    ((s += "; " + c),
                    !0 !== l[c] && (s += "=" + l[c].split(";")[0]));
                return (document.cookie = n + "=" + a + s);
              }
            }
            function o(e, a) {
              if ("undefined" != typeof document) {
                for (
                  var t = {},
                    l = document.cookie ? document.cookie.split("; ") : [],
                    o = 0;
                  o < l.length;
                  o++
                ) {
                  var s = l[o].split("="),
                    c = s.slice(1).join("=");
                  a || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                  try {
                    var r = n(s[0]);
                    if (((c = (i.read || i)(c, r) || n(c)), a))
                      try {
                        c = JSON.parse(c);
                      } catch (e) {}
                    if (((t[r] = c), e === r)) break;
                  } catch (e) {}
                }
                return e ? t[e] : t;
              }
            }
            return (
              (t.set = l),
              (t.get = function (e) {
                return o(e, !1);
              }),
              (t.getJSON = function (e) {
                return o(e, !0);
              }),
              (t.remove = function (n, a) {
                l(n, "", e(a, { expires: -1 }));
              }),
              (t.defaults = {}),
              (t.withConverter = a),
              t
            );
          })(function () {});
        });
      },
      7059: function (e) {
        /*! lozad.js - v1.16.0 - 2020-09-06
         * https://github.com/ApoorvSaxena/lozad.js
         * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
        e.exports = (function () {
          "use strict";
          var e = "undefined" != typeof document && document.documentMode,
            n = {
              rootMargin: "0px",
              threshold: 0,
              load: function (n) {
                if ("picture" === n.nodeName.toLowerCase()) {
                  var a = n.querySelector("img"),
                    i = !1;
                  null === a && ((a = document.createElement("img")), (i = !0)),
                    e &&
                      n.getAttribute("data-iesrc") &&
                      (a.src = n.getAttribute("data-iesrc")),
                    n.getAttribute("data-alt") &&
                      (a.alt = n.getAttribute("data-alt")),
                    i && n.append(a);
                }
                if (
                  "video" === n.nodeName.toLowerCase() &&
                  !n.getAttribute("data-src") &&
                  n.children
                ) {
                  for (
                    var t = n.children, l = void 0, o = 0;
                    o <= t.length - 1;
                    o++
                  )
                    (l = t[o].getAttribute("data-src")) && (t[o].src = l);
                  n.load();
                }
                n.getAttribute("data-poster") &&
                  (n.poster = n.getAttribute("data-poster")),
                  n.getAttribute("data-src") &&
                    (n.src = n.getAttribute("data-src")),
                  n.getAttribute("data-srcset") &&
                    n.setAttribute("srcset", n.getAttribute("data-srcset"));
                var s = ",";
                if (
                  (n.getAttribute("data-background-delimiter") &&
                    (s = n.getAttribute("data-background-delimiter")),
                  n.getAttribute("data-background-image"))
                )
                  n.style.backgroundImage =
                    "url('" +
                    n
                      .getAttribute("data-background-image")
                      .split(s)
                      .join("'),url('") +
                    "')";
                else if (n.getAttribute("data-background-image-set")) {
                  var c = n.getAttribute("data-background-image-set").split(s),
                    r = c[0].substr(0, c[0].indexOf(" ")) || c[0];
                  (r = -1 === r.indexOf("url(") ? "url(" + r + ")" : r),
                    1 === c.length
                      ? (n.style.backgroundImage = r)
                      : n.setAttribute(
                          "style",
                          (n.getAttribute("style") || "") +
                            "background-image: " +
                            r +
                            "; background-image: -webkit-image-set(" +
                            c +
                            "); background-image: image-set(" +
                            c +
                            ")"
                        );
                }
                n.getAttribute("data-toggle-class") &&
                  n.classList.toggle(n.getAttribute("data-toggle-class"));
              },
              loaded: function () {},
            };
          function a(e) {
            e.setAttribute("data-loaded", !0);
          }
          var i = function (e) {
              return "true" === e.getAttribute("data-loaded");
            },
            t = function (e) {
              var n =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return e instanceof Element
                ? [e]
                : e instanceof NodeList
                ? e
                : n.querySelectorAll(e);
            };
          return function () {
            var e,
              l,
              o =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : ".lozad",
              s =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              c = Object.assign({}, n, s),
              r = c.root,
              g = c.rootMargin,
              k = c.threshold,
              w = c.load,
              d = c.loaded,
              h = void 0;
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (h = new IntersectionObserver(
                ((e = w),
                (l = d),
                function (n, t) {
                  n.forEach(function (n) {
                    (0 < n.intersectionRatio || n.isIntersecting) &&
                      (t.unobserve(n.target),
                      i(n.target) || (e(n.target), a(n.target), l(n.target)));
                  });
                }),
                { root: r, rootMargin: g, threshold: k }
              ));
            for (var m, u = t(o, r), p = 0; p < u.length; p++)
              (m = u[p]).getAttribute("data-placeholder-background") &&
                (m.style.background = m.getAttribute(
                  "data-placeholder-background"
                ));
            return {
              observe: function () {
                for (var e = t(o, r), n = 0; n < e.length; n++)
                  i(e[n]) ||
                    (h ? h.observe(e[n]) : (w(e[n]), a(e[n]), d(e[n])));
              },
              triggerLoad: function (e) {
                i(e) || (w(e), a(e), d(e));
              },
              observer: h,
            };
          };
        })();
      },
      5067: () => {},
      9864: () => {},
      6473: () => {
        let e = document.querySelectorAll(".video-card");
        function n() {
          e.forEach((e) => {
            let n = e.getAttribute("data-style");
            e.style[0] || e.setAttribute("style", n);
          });
        }
        if (e.length && "true" !== e[0].getAttribute("data-first")) {
          let a = e[0].parentNode.offsetTop - window.innerHeight;
          window.addEventListener("scroll", () => {
            window.scrollY > a && n();
          });
        } else e.length && "true" === e[0].getAttribute("data-first") && n();
        e.forEach((e) => {
          e.addEventListener("click", function () {
            console.log("main");
            const e = this.dataset.video;
            this.classList.add("videoIsLoaded");
            let n = document.createElement("iframe");
            n.setAttribute("allowfullscreen", ""),
              n.setAttribute("frameborder", "0"),
              n.setAttribute("allow", "autoplay"),
              n.setAttribute(
                "src",
                "https://www.youtube.com/embed/" + e + "?autoplay=1"
              ),
              (this.innerHTML = ""),
              this.appendChild(n);
          });
        });
      },
      2830: () => {
        document.querySelectorAll("[data-download-link]").forEach((e) => {
          e.addEventListener("click", async function () {
            try {
              const e = this.getAttribute("data-download-link"),
                n = await fetch(e),
                a = await n.text();
              window.location.assign(a);
            } catch (e) {
              console.log(e);
            }
          });
        });
      },
      7971: () => {
        const e = document.querySelectorAll(".accordion");
        e.length &&
          e.forEach((e) => {
            e.addEventListener("click", (n) => {
              const a = n.target,
                i = a.closest(".accordionContainer"),
                t = a.closest(".accordionHeader"),
                l = [...e.children];
              i &&
                t &&
                (i.classList.toggle("active"),
                l.forEach((e) => {
                  e != i && e.classList.remove("active");
                }));
            });
          });
      },
    },
    n = {};
  function a(i) {
    var t = n[i];
    if (void 0 !== t) return t.exports;
    var l = (n[i] = { exports: {} });
    return e[i].call(l.exports, l, l.exports, a), l.exports;
  }
  (a.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return a.d(n, { a: n }), n;
  }),
    (a.d = (e, n) => {
      for (var i in n)
        a.o(n, i) &&
          !a.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: n[i] });
    }),
    (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      "use strict";
      function e() {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
            "MacIntel",
          ].includes(navigator.platform) ||
          (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
      }
      function n() {
        document.querySelectorAll(".hidden-link").forEach(function (e) {
          e.addEventListener("click", function () {
            return window.open(this.getAttribute("data-link"), "_self"), !1;
          });
        });
      }
      1 === window.location.pathname.search("blog") ||
        1 === window.location.pathname.search("academy") ||
        1 === window.location.pathname.search("price/") ||
        1 === window.location.pathname.search("price-prediction") ||
        window.location.pathname.search("-wallet") ||
        (e() &&
          (console.log("passed"),
          document.addEventListener("DOMContentLoaded", function () {
            document
              .querySelectorAll('img[src$=".webp"], img[data-src$=".webp"]')
              .forEach((e) => {
                let n = e.getAttribute("src");
                n && e.setAttribute("src", n.replace(".webp", "-ios.png"));
                let a = e.getAttribute("data-src");
                a && e.setAttribute("data-src", a.replace(".webp", "-ios.png"));
              });
          })));
      const i = document.querySelectorAll(".footer-col");
      i.forEach((e) => {
        e.querySelector(".footer-title").addEventListener("click", function () {
          i.forEach((n) => {
            n == e ? e.classList.toggle("open") : n.classList.remove("open");
          });
        });
      });
      const t = document.querySelector(".support-form-link");
      t &&
        t.addEventListener("click", (e) => {
          document.querySelector(".support-form-link").classList.add("loading"),
            ((e) => {
              !(function (e, n, a) {
                function i() {
                  var e = n.getElementsByTagName("script")[0],
                    a = n.createElement("script");
                  (a.type = "text/javascript"),
                    (a.async = !0),
                    (a.src = "https://beacon-v2.helpscout.net"),
                    e.parentNode.insertBefore(a, e);
                }
                if (
                  ((e.Beacon = a =
                    function (n, a, i) {
                      e.Beacon.readyQueue.push({
                        method: n,
                        options: a,
                        data: i,
                      });
                    }),
                  (a.readyQueue = []),
                  "complete" === n.readyState)
                )
                  return i();
                i();
              })(window, document, window.Beacon || function () {});
              const n = document.createElement("script");
              (n.innerHTML =
                "\n\t\twindow.Beacon('init', 'e947e766-402f-44b0-8f02-3ed79a72263c')\n\t\tBeacon('open')\n\t\tBeacon('on', 'ready', () => document.querySelector('.support-form-link').remove())\n\t\t"),
                document.body.insertBefore(n, null);
            })();
        }),
        n();
      a(7971);
      const l = document.querySelectorAll(".burger"),
        o = document.getElementById("header");
      l.forEach((e) => {
        e.addEventListener("click", () => {
          o.classList.toggle("open");
        });
      });
      const s = document.querySelectorAll(".dropdown");
      s.forEach((e) => {
        e.addEventListener("click", function () {
          s.forEach((n) => {
            n == e ? e.classList.toggle("open") : n.classList.remove("open");
          });
        });
      });
      document.querySelectorAll(".dropdown__lang").forEach((e) =>
        e.addEventListener("click", function (e) {
          e.preventDefault();
          const n = this.querySelector("[data-lang]").getAttribute("data-lang");
          (document.cookie = `userLang=${n}; path=/`),
            document.location.reload();
        })
      );
      const c = document.querySelector("#newsletter-popup"),
        r = document.querySelector(".newsletter-popup__start"),
        g = document.querySelector(".newsletter-popup__finish");
      let k = document.querySelectorAll("#popup-thanks .img-hidden");
      function w() {
        !(async function (e) {
          const n =
              "https://api.rss2json.com/v1/api.json?rss_url=" +
              encodeURIComponent(
                "https://www.youtube.com/feeds/videos.xml?channel_id="
              ),
            a = await fetch(n + e.getAttribute("cid")),
            i = await a.json();
          let t = e.getAttribute("vnum") ? +e.getAttribute("vnum") : 0,
            l = i.items[t].link,
            o = l.substr(l.indexOf("=") + 1);
          e.setAttribute(
            "src",
            "https://youtube.com/embed/" + o + "?controls=0&autoplay=1"
          ),
            e.setAttribute(
              "srcdoc",
              `<style>html,body{width:100%;overflow:hidden;margin:0}</style><a style='width:100%' href='https://www.youtube.com/embed/${o}?autoplay=1'><img style='width:100%;' src='//i2.ytimg.com/vi_webp/${o}/maxresdefault.webp'><img style='position: absolute;width:46px;right: 50%;top:50%;transform:translate(50%,-50%)' src='/images/youtube_social_icon_red.svg'></a>`
            );
        })(document.querySelector("#latest-video iframe")),
          n(),
          k.forEach((e) => {
            e.classList.remove("img-hidden");
          }),
          document.querySelector("#popup-thanks").classList.add("open"),
          console.log("openPopupThanks");
      }
    //   document
    //     .querySelectorAll(".subscribe-form, .news-form__form")
    //     .forEach((e) => {
    //       e.addEventListener("submit", async function (e) {
    //         e.preventDefault();
    //         const n = this.getAttribute("data-key"),
    //           a = new FormData(this);
    //         let i = {};
    //         a.forEach((e, n) => (i[n] = e)), (i = JSON.stringify(i));
    //         try {
    //           if (
    //             (
    //               await fetch("/form/subscribe", {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: i,
    //               })
    //             ).error
    //           )
    //             alert("Please, enter your email correctly.");
    //           else
    //             switch (n) {
    //               case "SUBSCRIBE_SECTION_KEY":
    //                 w();
    //                 break;
    //               case "SUBSCRIBE_POPUP_KEY":
    //                 document
    //                   .querySelector("#popup-form")
    //                   .classList.remove("open"),
    //                   console.log("closePopupForm"),
    //                   document
    //                     .querySelector("#popup-subscribe")
    //                     .classList.remove("open"),
    //                   console.log("closePopupSubscribe"),
    //                   w();
    //                 break;
    //               case "SUBSCRIBE_NOTIFICATION_KEY":
    //                 document
    //                   .querySelector("#popup-notification")
    //                   .classList.remove("open"),
    //                   console.log("closePopupNotification"),
    //                   w();
    //                 break;
    //               case "SUBSCRIBE_NEWSLETTER_KEY":
    //                 c &&
    //                   (console.log("newsletterNextStep"),
    //                   r.classList.add("newsletter-popup--fadeout"),
    //                   setTimeout(() => {
    //                     g.classList.add("newsletter-popup--fadein");
    //                   }, 100));
    //             }
    //         } catch (e) {
    //           alert("Please, enter your email correctly."),
    //             console.log("error:", e);
    //         }
    //       });
    //     }),
        // document.querySelectorAll(".desktop-item").forEach((e) =>
        //   e.addEventListener("click", function () {
        //     document.querySelector("#popup-subscribe").classList.add("open"),
        //       console.log("openPopupSubscribe");
        //   })
        // );
      let d = document.querySelectorAll(".modal-overlay");
      document.querySelectorAll("[data-popup]").forEach((e) => {
        e.addEventListener("click", () => {
          let n = e.dataset.popup;
          d.forEach((e) => {
            e.id == n && e.classList.add("open"),
              console.log(e.id),
              document.querySelectorAll(`#${e.id} .img-hidden`).forEach((e) => {
                e.classList.remove("img-hidden");
              });
          });
        });
      }),
        document.querySelectorAll(".modal-window__close").forEach((e) => {
          e.addEventListener("click", () => {
            e.closest(".modal-overlay").classList.remove("open");
          });
        }),
        d.forEach((e) => {
          e.addEventListener("click", (n) => {
            if (n.target.classList.contains("modal-overlay")) {
              e.classList.remove("open"),
                e.querySelector("#popup-video .modal-window .video-card") &&
                  (e.querySelector(
                    "#popup-video .modal-window .video-card"
                  ).innerHTML = "");
            }
          });
        }),
        document
          .querySelectorAll(
            ".watch-video-button, .newsletter-popup__button, .staking-btn, .video-button"
          )
          .forEach((e) => {
            e.addEventListener("click", function () {
              const e = this.dataset.video;
              let n = document.createElement("iframe");
              n.setAttribute("allowfullscreen", ""),
                n.setAttribute("frameborder", "0"),
                n.setAttribute("allow", "autoplay"),
                n.setAttribute(
                  "src",
                  "https://www.youtube.com/embed/" + e + "?autoplay=1"
                ),
                document
                  .querySelector("#popup-video .modal-window .video-card")
                  .appendChild(n);
            });
          });
      var h = a(7059),
        m = a.n(h);
      function u(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function p(e, n) {
        void 0 === e && (e = {}),
          void 0 === n && (n = {}),
          Object.keys(n).forEach(function (a) {
            void 0 === e[a]
              ? (e[a] = n[a])
              : u(n[a]) &&
                u(e[a]) &&
                Object.keys(n[a]).length > 0 &&
                p(e[a], n[a]);
          });
      }
      window.addEventListener("load", function () {
        m()().observe();
      }),
        document.addEventListener("click", async function (e) {
          if ("A" !== e.target.tagName) return;
          if (!e.target.getAttribute("href").includes("#")) return;
          e.preventDefault();
          const n = e.target.getAttribute("href"),
            a = document.querySelector(n),
            i = Array.from(
              document.querySelectorAll(`[data-src], ${n}, [data-srcset]`)
            ),
            t = i.slice(0, i.indexOf(a)),
            l = Array.from(document.querySelectorAll(`img, ${n}`)),
            o = l.slice(0, l.indexOf(a));
          t.forEach((e) => {
            const n = e.getAttribute("data-src"),
              a = e.getAttribute("data-srcset");
            n && (e.src = n), a && (e.srcset = a);
          });
          const s = document.querySelector(n);
          await new Promise((e) => {
            function n() {
              let a = 0;
              if (
                (o.forEach((e) => {
                  e.naturalHeight > 0 && a++;
                }),
                a === o.length)
              )
                return e();
              setTimeout(n, 50);
            }
            setTimeout(() => {
              n();
            }, 200);
          }),
            console.log("works"),
            window.scrollTo({
              top: s.getBoundingClientRect().top + window.scrollY + -79,
              behavior: "smooth",
            });
        });
      var x = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function f() {
        var e = "undefined" != typeof document ? document : {};
        return p(e, x), e;
      }
      var v = {
        document: x,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function b() {
        var e = "undefined" != typeof window ? window : {};
        return p(e, v), e;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function S(e, n) {
        return (S =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function C() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function T(e, n, a) {
        return (T = C()
          ? Reflect.construct
          : function (e, n, a) {
              var i = [null];
              i.push.apply(i, n);
              var t = new (Function.bind.apply(e, i))();
              return a && S(t, a.prototype), t;
            }).apply(null, arguments);
      }
      function A(e) {
        var n = "function" == typeof Map ? new Map() : void 0;
        return (A = function (e) {
          if (
            null === e ||
            ((a = e), -1 === Function.toString.call(a).indexOf("[native code]"))
          )
            return e;
          var a;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== n) {
            if (n.has(e)) return n.get(e);
            n.set(e, i);
          }
          function i() {
            return T(e, arguments, y(this).constructor);
          }
          return (
            (i.prototype = Object.create(e.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            S(i, e)
          );
        })(e);
      }
      var E = (function (e) {
        var n, a;
        function i(n) {
          var a, i, t;
          return (
            (a = e.call.apply(e, [this].concat(n)) || this),
            (i = (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(a)),
            (t = i.__proto__),
            Object.defineProperty(i, "__proto__", {
              get: function () {
                return t;
              },
              set: function (e) {
                t.__proto__ = e;
              },
            }),
            a
          );
        }
        return (
          (a = e),
          ((n = i).prototype = Object.create(a.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = a),
          i
        );
      })(A(Array));
      function P(e) {
        void 0 === e && (e = []);
        var n = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? n.push.apply(n, P(e)) : n.push(e);
          }),
          n
        );
      }
      function O(e, n) {
        return Array.prototype.filter.call(e, n);
      }
      function M(e, n) {
        var a = b(),
          i = f(),
          t = [];
        if (!n && e instanceof E) return e;
        if (!e) return new E(t);
        if ("string" == typeof e) {
          var l = e.trim();
          if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
            var o = "div";
            0 === l.indexOf("<li") && (o = "ul"),
              0 === l.indexOf("<tr") && (o = "tbody"),
              (0 !== l.indexOf("<td") && 0 !== l.indexOf("<th")) || (o = "tr"),
              0 === l.indexOf("<tbody") && (o = "table"),
              0 === l.indexOf("<option") && (o = "select");
            var s = i.createElement(o);
            s.innerHTML = l;
            for (var c = 0; c < s.childNodes.length; c += 1)
              t.push(s.childNodes[c]);
          } else
            t = (function (e, n) {
              if ("string" != typeof e) return [e];
              for (
                var a = [], i = n.querySelectorAll(e), t = 0;
                t < i.length;
                t += 1
              )
                a.push(i[t]);
              return a;
            })(e.trim(), n || i);
        } else if (e.nodeType || e === a || e === i) t.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof E) return e;
          t = e;
        }
        return new E(
          (function (e) {
            for (var n = [], a = 0; a < e.length; a += 1)
              -1 === n.indexOf(e[a]) && n.push(e[a]);
            return n;
          })(t)
        );
      }
      M.fn = E.prototype;
      var L = "resize scroll".split(" ");
      function N(e) {
        return function () {
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          if (void 0 === a[0]) {
            for (var t = 0; t < this.length; t += 1)
              L.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : M(this[t]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(a));
        };
      }
      N("click"),
        N("blur"),
        N("focus"),
        N("focusin"),
        N("focusout"),
        N("keyup"),
        N("keydown"),
        N("keypress"),
        N("submit"),
        N("change"),
        N("mousedown"),
        N("mousemove"),
        N("mouseup"),
        N("mouseenter"),
        N("mouseleave"),
        N("mouseout"),
        N("mouseover"),
        N("touchstart"),
        N("touchend"),
        N("touchmove"),
        N("resize"),
        N("scroll");
      var I = {
        addClass: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = P(
            n.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var n;
              (n = e.classList).add.apply(n, i);
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = P(
            n.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var n;
              (n = e.classList).remove.apply(n, i);
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = P(
            n.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            O(this, function (e) {
              return (
                i.filter(function (n) {
                  return e.classList.contains(n);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = P(
            n.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            i.forEach(function (n) {
              e.classList.toggle(n);
            });
          });
        },
        attr: function (e, n) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var a = 0; a < this.length; a += 1)
            if (2 === arguments.length) this[a].setAttribute(e, n);
            else
              for (var i in e)
                (this[a][i] = e[i]), this[a].setAttribute(i, e[i]);
          return this;
        },
        removeAttr: function (e) {
          for (var n = 0; n < this.length; n += 1) this[n].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var n = 0; n < this.length; n += 1) this[n].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var n = 0; n < this.length; n += 1)
            this[n].style.transitionDuration =
              "string" != typeof e ? e + "ms" : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = n[0],
            t = n[1],
            l = n[2],
            o = n[3];
          function s(e) {
            var n = e.target;
            if (n) {
              var a = e.target.dom7EventData || [];
              if ((a.indexOf(e) < 0 && a.unshift(e), M(n).is(t))) l.apply(n, a);
              else
                for (var i = M(n).parents(), o = 0; o < i.length; o += 1)
                  M(i[o]).is(t) && l.apply(i[o], a);
            }
          }
          function c(e) {
            var n = (e && e.target && e.target.dom7EventData) || [];
            n.indexOf(e) < 0 && n.unshift(e), l.apply(this, n);
          }
          "function" == typeof n[1] &&
            ((i = n[0]), (l = n[1]), (o = n[2]), (t = void 0)),
            o || (o = !1);
          for (var r, g = i.split(" "), k = 0; k < this.length; k += 1) {
            var w = this[k];
            if (t)
              for (r = 0; r < g.length; r += 1) {
                var d = g[r];
                w.dom7LiveListeners || (w.dom7LiveListeners = {}),
                  w.dom7LiveListeners[d] || (w.dom7LiveListeners[d] = []),
                  w.dom7LiveListeners[d].push({
                    listener: l,
                    proxyListener: s,
                  }),
                  w.addEventListener(d, s, o);
              }
            else
              for (r = 0; r < g.length; r += 1) {
                var h = g[r];
                w.dom7Listeners || (w.dom7Listeners = {}),
                  w.dom7Listeners[h] || (w.dom7Listeners[h] = []),
                  w.dom7Listeners[h].push({ listener: l, proxyListener: c }),
                  w.addEventListener(h, c, o);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          var i = n[0],
            t = n[1],
            l = n[2],
            o = n[3];
          "function" == typeof n[1] &&
            ((i = n[0]), (l = n[1]), (o = n[2]), (t = void 0)),
            o || (o = !1);
          for (var s = i.split(" "), c = 0; c < s.length; c += 1)
            for (var r = s[c], g = 0; g < this.length; g += 1) {
              var k = this[g],
                w = void 0;
              if (
                (!t && k.dom7Listeners
                  ? (w = k.dom7Listeners[r])
                  : t && k.dom7LiveListeners && (w = k.dom7LiveListeners[r]),
                w && w.length)
              )
                for (var d = w.length - 1; d >= 0; d -= 1) {
                  var h = w[d];
                  (l && h.listener === l) ||
                  (l &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === l)
                    ? (k.removeEventListener(r, h.proxyListener, o),
                      w.splice(d, 1))
                    : l ||
                      (k.removeEventListener(r, h.proxyListener, o),
                      w.splice(d, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = b(), n = arguments.length, a = new Array(n), i = 0;
            i < n;
            i++
          )
            a[i] = arguments[i];
          for (var t = a[0].split(" "), l = a[1], o = 0; o < t.length; o += 1)
            for (var s = t[o], c = 0; c < this.length; c += 1) {
              var r = this[c];
              if (e.CustomEvent) {
                var g = new e.CustomEvent(s, {
                  detail: l,
                  bubbles: !0,
                  cancelable: !0,
                });
                (r.dom7EventData = a.filter(function (e, n) {
                  return n > 0;
                })),
                  r.dispatchEvent(g),
                  (r.dom7EventData = []),
                  delete r.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var n = this;
          return (
            e &&
              n.on("transitionend", function a(i) {
                i.target === this &&
                  (e.call(this, i), n.off("transitionend", a));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var n = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(n.getPropertyValue("margin-right")) +
                parseFloat(n.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var n = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(n.getPropertyValue("margin-top")) +
                parseFloat(n.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = b();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = b(),
              n = f(),
              a = this[0],
              i = a.getBoundingClientRect(),
              t = n.body,
              l = a.clientTop || t.clientTop || 0,
              o = a.clientLeft || t.clientLeft || 0,
              s = a === e ? e.scrollY : a.scrollTop,
              c = a === e ? e.scrollX : a.scrollLeft;
            return { top: i.top + s - l, left: i.left + c - o };
          }
          return null;
        },
        css: function (e, n) {
          var a,
            i = b();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (a = 0; a < this.length; a += 1)
                for (var t in e) this[a].style[t] = e[t];
              return this;
            }
            if (this[0])
              return i.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (a = 0; a < this.length; a += 1) this[a].style[e] = n;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (n, a) {
                e.apply(n, [n, a]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var n = 0; n < this.length; n += 1) this[n].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var n = 0; n < this.length; n += 1) this[n].textContent = e;
          return this;
        },
        is: function (e) {
          var n,
            a,
            i = b(),
            t = f(),
            l = this[0];
          if (!l || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (l.matches) return l.matches(e);
            if (l.webkitMatchesSelector) return l.webkitMatchesSelector(e);
            if (l.msMatchesSelector) return l.msMatchesSelector(e);
            for (n = M(e), a = 0; a < n.length; a += 1)
              if (n[a] === l) return !0;
            return !1;
          }
          if (e === t) return l === t;
          if (e === i) return l === i;
          if (e.nodeType || e instanceof E) {
            for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
              if (n[a] === l) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            n = this[0];
          if (n) {
            for (e = 0; null !== (n = n.previousSibling); )
              1 === n.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var n = this.length;
          if (e > n - 1) return M([]);
          if (e < 0) {
            var a = n + e;
            return M(a < 0 ? [] : [this[a]]);
          }
          return M([this[e]]);
        },
        append: function () {
          for (var e, n = f(), a = 0; a < arguments.length; a += 1) {
            e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            for (var i = 0; i < this.length; i += 1)
              if ("string" == typeof e) {
                var t = n.createElement("div");
                for (t.innerHTML = e; t.firstChild; )
                  this[i].appendChild(t.firstChild);
              } else if (e instanceof E)
                for (var l = 0; l < e.length; l += 1) this[i].appendChild(e[l]);
              else this[i].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var n,
            a,
            i = f();
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              var t = i.createElement("div");
              for (t.innerHTML = e, a = t.childNodes.length - 1; a >= 0; a -= 1)
                this[n].insertBefore(t.childNodes[a], this[n].childNodes[0]);
            } else if (e instanceof E)
              for (a = 0; a < e.length; a += 1)
                this[n].insertBefore(e[a], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                M(this[0].nextElementSibling).is(e)
                ? M([this[0].nextElementSibling])
                : M([])
              : this[0].nextElementSibling
              ? M([this[0].nextElementSibling])
              : M([])
            : M([]);
        },
        nextAll: function (e) {
          var n = [],
            a = this[0];
          if (!a) return M([]);
          for (; a.nextElementSibling; ) {
            var i = a.nextElementSibling;
            e ? M(i).is(e) && n.push(i) : n.push(i), (a = i);
          }
          return M(n);
        },
        prev: function (e) {
          if (this.length > 0) {
            var n = this[0];
            return e
              ? n.previousElementSibling && M(n.previousElementSibling).is(e)
                ? M([n.previousElementSibling])
                : M([])
              : n.previousElementSibling
              ? M([n.previousElementSibling])
              : M([]);
          }
          return M([]);
        },
        prevAll: function (e) {
          var n = [],
            a = this[0];
          if (!a) return M([]);
          for (; a.previousElementSibling; ) {
            var i = a.previousElementSibling;
            e ? M(i).is(e) && n.push(i) : n.push(i), (a = i);
          }
          return M(n);
        },
        parent: function (e) {
          for (var n = [], a = 0; a < this.length; a += 1)
            null !== this[a].parentNode &&
              (e
                ? M(this[a].parentNode).is(e) && n.push(this[a].parentNode)
                : n.push(this[a].parentNode));
          return M(n);
        },
        parents: function (e) {
          for (var n = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].parentNode; i; )
              e ? M(i).is(e) && n.push(i) : n.push(i), (i = i.parentNode);
          return M(n);
        },
        closest: function (e) {
          var n = this;
          return void 0 === e
            ? M([])
            : (n.is(e) || (n = n.parents(e).eq(0)), n);
        },
        find: function (e) {
          for (var n = [], a = 0; a < this.length; a += 1)
            for (
              var i = this[a].querySelectorAll(e), t = 0;
              t < i.length;
              t += 1
            )
              n.push(i[t]);
          return M(n);
        },
        children: function (e) {
          for (var n = [], a = 0; a < this.length; a += 1)
            for (var i = this[a].children, t = 0; t < i.length; t += 1)
              (e && !M(i[t]).is(e)) || n.push(i[t]);
          return M(n);
        },
        filter: function (e) {
          return M(O(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(I).forEach(function (e) {
        Object.defineProperty(M.fn, e, { value: I[e], writable: !0 });
      });
      const D = M;
      function B(e, n) {
        return void 0 === n && (n = 0), setTimeout(e, n);
      }
      function R() {
        return Date.now();
      }
      function z(e, n) {
        void 0 === n && (n = "x");
        var a,
          i,
          t,
          l = b(),
          o = (function (e) {
            var n,
              a = b();
            return (
              a.getComputedStyle && (n = a.getComputedStyle(e, null)),
              !n && e.currentStyle && (n = e.currentStyle),
              n || (n = e.style),
              n
            );
          })(e);
        return (
          l.WebKitCSSMatrix
            ? ((i = o.transform || o.webkitTransform).split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (t = new l.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (t =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === n &&
            (i = l.WebKitCSSMatrix
              ? t.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === n &&
            (i = l.WebKitCSSMatrix
              ? t.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        );
      }
      function G(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function F(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function V() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            n = ["__proto__", "constructor", "prototype"],
            a = 1;
          a < arguments.length;
          a += 1
        ) {
          var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
          if (null != i && !F(i))
            for (
              var t = Object.keys(Object(i)).filter(function (e) {
                  return n.indexOf(e) < 0;
                }),
                l = 0,
                o = t.length;
              l < o;
              l += 1
            ) {
              var s = t[l],
                c = Object.getOwnPropertyDescriptor(i, s);
              void 0 !== c &&
                c.enumerable &&
                (G(e[s]) && G(i[s])
                  ? i[s].__swiper__
                    ? (e[s] = i[s])
                    : V(e[s], i[s])
                  : !G(e[s]) && G(i[s])
                  ? ((e[s] = {}),
                    i[s].__swiper__ ? (e[s] = i[s]) : V(e[s], i[s]))
                  : (e[s] = i[s]));
            }
        }
        return e;
      }
      function H(e, n) {
        Object.keys(n).forEach(function (a) {
          G(n[a]) &&
            Object.keys(n[a]).forEach(function (i) {
              "function" == typeof n[a][i] && (n[a][i] = n[a][i].bind(e));
            }),
            (e[a] = n[a]);
        });
      }
      function X(e) {
        return (
          void 0 === e && (e = ""),
          "." +
            e
              .trim()
              .replace(/([\.:!\/])/g, "\\$1")
              .replace(/ /g, ".")
        );
      }
      function j(e, n, a, i) {
        var t = f();
        return (
          a &&
            Object.keys(i).forEach(function (a) {
              if (!n[a] && !0 === n.auto) {
                var l = t.createElement("div");
                (l.className = i[a]), e.append(l), (n[a] = l);
              }
            }),
          n
        );
      }
      var U, q, K;
      function Y() {
        return (
          U ||
            (U = (function () {
              var e = b(),
                n = f();
              return {
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && n instanceof e.DocumentTouch)
                ),
                pointerEvents:
                  !!e.PointerEvent &&
                  "maxTouchPoints" in e.navigator &&
                  e.navigator.maxTouchPoints >= 0,
                observer:
                  "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: (function () {
                  var n = !1;
                  try {
                    var a = Object.defineProperty({}, "passive", {
                      get: function () {
                        n = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, a);
                  } catch (e) {}
                  return n;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          U
        );
      }
      function W(e) {
        return (
          void 0 === e && (e = {}),
          q ||
            (q = (function (e) {
              var n = (void 0 === e ? {} : e).userAgent,
                a = Y(),
                i = b(),
                t = i.navigator.platform,
                l = n || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                s = i.screen.width,
                c = i.screen.height,
                r = l.match(/(Android);?[\s\/]+([\d.]+)?/),
                g = l.match(/(iPad).*OS\s([\d_]+)/),
                k = l.match(/(iPod)(.*OS\s([\d_]+))?/),
                w = !g && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                d = "Win32" === t,
                h = "MacIntel" === t;
              return (
                !g &&
                  h &&
                  a.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(s + "x" + c) >= 0 &&
                  ((g = l.match(/(Version)\/([\d.]+)/)) ||
                    (g = [0, 1, "13_0_0"]),
                  (h = !1)),
                r && !d && ((o.os = "android"), (o.android = !0)),
                (g || w || k) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          q
        );
      }
      function _() {
        return (
          K ||
            (K = (function () {
              var e,
                n = b();
              return {
                isEdge: !!n.navigator.userAgent.match(/Edge/g),
                isSafari:
                  ((e = n.navigator.userAgent.toLowerCase()),
                  e.indexOf("safari") >= 0 &&
                    e.indexOf("chrome") < 0 &&
                    e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  n.navigator.userAgent
                ),
              };
            })()),
          K
        );
      }
      const $ = {
        name: "resize",
        create: function () {
          var e = this;
          V(e, {
            resize: {
              observer: null,
              createObserver: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((e.resize.observer = new ResizeObserver(function (n) {
                    var a = e.width,
                      i = e.height,
                      t = a,
                      l = i;
                    n.forEach(function (n) {
                      var a = n.contentBoxSize,
                        i = n.contentRect,
                        o = n.target;
                      (o && o !== e.el) ||
                        ((t = i ? i.width : (a[0] || a).inlineSize),
                        (l = i ? i.height : (a[0] || a).blockSize));
                    }),
                      (t === a && l === i) || e.resize.resizeHandler();
                  })),
                  e.resize.observer.observe(e.el));
              },
              removeObserver: function () {
                e.resize.observer &&
                  e.resize.observer.unobserve &&
                  e.el &&
                  (e.resize.observer.unobserve(e.el),
                  (e.resize.observer = null));
              },
              resizeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler: function () {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function (e) {
            var n = b();
            e.params.resizeObserver && void 0 !== b().ResizeObserver
              ? e.resize.createObserver()
              : (n.addEventListener("resize", e.resize.resizeHandler),
                n.addEventListener(
                  "orientationchange",
                  e.resize.orientationChangeHandler
                ));
          },
          destroy: function (e) {
            var n = b();
            e.resize.removeObserver(),
              n.removeEventListener("resize", e.resize.resizeHandler),
              n.removeEventListener(
                "orientationchange",
                e.resize.orientationChangeHandler
              );
          },
        },
      };
      function Z() {
        return (Z =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Q = {
        attach: function (e, n) {
          void 0 === n && (n = {});
          var a = b(),
            i = this,
            t = new (a.MutationObserver || a.WebkitMutationObserver)(function (
              e
            ) {
              if (1 !== e.length) {
                var n = function () {
                  i.emit("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(n)
                  : a.setTimeout(n, 0);
              } else i.emit("observerUpdate", e[0]);
            });
          t.observe(e, {
            attributes: void 0 === n.attributes || n.attributes,
            childList: void 0 === n.childList || n.childList,
            characterData: void 0 === n.characterData || n.characterData,
          }),
            i.observer.observers.push(t);
        },
        init: function () {
          var e = this;
          if (e.support.observer && e.params.observer) {
            if (e.params.observeParents)
              for (var n = e.$el.parents(), a = 0; a < n.length; a += 1)
                e.observer.attach(n[a]);
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (e) {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      const J = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create: function () {
            H(this, { observer: Z({}, Q, { observers: [] }) });
          },
          on: {
            init: function (e) {
              e.observer.init();
            },
            destroy: function (e) {
              e.observer.destroy();
            },
          },
        },
        ee = {
          on: function (e, n, a) {
            var i = this;
            if ("function" != typeof n) return i;
            var t = a ? "unshift" : "push";
            return (
              e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][t](n);
              }),
              i
            );
          },
          once: function (e, n, a) {
            var i = this;
            if ("function" != typeof n) return i;
            function t() {
              i.off(e, t), t.__emitterProxy && delete t.__emitterProxy;
              for (
                var a = arguments.length, l = new Array(a), o = 0;
                o < a;
                o++
              )
                l[o] = arguments[o];
              n.apply(i, l);
            }
            return (t.__emitterProxy = n), i.on(e, t, a);
          },
          onAny: function (e, n) {
            var a = this;
            if ("function" != typeof e) return a;
            var i = n ? "unshift" : "push";
            return (
              a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e),
              a
            );
          },
          offAny: function (e) {
            var n = this;
            if (!n.eventsAnyListeners) return n;
            var a = n.eventsAnyListeners.indexOf(e);
            return a >= 0 && n.eventsAnyListeners.splice(a, 1), n;
          },
          off: function (e, n) {
            var a = this;
            return a.eventsListeners
              ? (e.split(" ").forEach(function (e) {
                  void 0 === n
                    ? (a.eventsListeners[e] = [])
                    : a.eventsListeners[e] &&
                      a.eventsListeners[e].forEach(function (i, t) {
                        (i === n ||
                          (i.__emitterProxy && i.__emitterProxy === n)) &&
                          a.eventsListeners[e].splice(t, 1);
                      });
                }),
                a)
              : a;
          },
          emit: function () {
            var e,
              n,
              a,
              i = this;
            if (!i.eventsListeners) return i;
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            "string" == typeof l[0] || Array.isArray(l[0])
              ? ((e = l[0]), (n = l.slice(1, l.length)), (a = i))
              : ((e = l[0].events), (n = l[0].data), (a = l[0].context || i)),
              n.unshift(a);
            var s = Array.isArray(e) ? e : e.split(" ");
            return (
              s.forEach(function (e) {
                i.eventsAnyListeners &&
                  i.eventsAnyListeners.length &&
                  i.eventsAnyListeners.forEach(function (i) {
                    i.apply(a, [e].concat(n));
                  }),
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(a, n);
                    });
              }),
              i
            );
          },
        };
      const ne = {
        updateSize: function () {
          var e,
            n,
            a = this,
            i = a.$el;
          (e =
            void 0 !== a.params.width && null !== a.params.width
              ? a.params.width
              : i[0].clientWidth),
            (n =
              void 0 !== a.params.height && null !== a.params.height
                ? a.params.height
                : i[0].clientHeight),
            (0 === e && a.isHorizontal()) ||
              (0 === n && a.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(n) && (n = 0),
              V(a, { width: e, height: n, size: a.isHorizontal() ? e : n }));
        },
        updateSlides: function () {
          var e = this;
          function n(n) {
            return e.isHorizontal()
              ? n
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[n];
          }
          function a(e, a) {
            return parseFloat(e.getPropertyValue(n(a)) || 0);
          }
          var i = e.params,
            t = e.$wrapperEl,
            l = e.size,
            o = e.rtlTranslate,
            s = e.wrongRTL,
            c = e.virtual && i.virtual.enabled,
            r = c ? e.virtual.slides.length : e.slides.length,
            g = t.children("." + e.params.slideClass),
            k = c ? e.virtual.slides.length : g.length,
            w = [],
            d = [],
            h = [],
            m = i.slidesOffsetBefore;
          "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
          var u = i.slidesOffsetAfter;
          "function" == typeof u && (u = i.slidesOffsetAfter.call(e));
          var p = e.snapGrid.length,
            x = e.slidesGrid.length,
            f = i.spaceBetween,
            v = -m,
            b = 0,
            y = 0;
          if (void 0 !== l) {
            var S, C;
            "string" == typeof f &&
              f.indexOf("%") >= 0 &&
              (f = (parseFloat(f.replace("%", "")) / 100) * l),
              (e.virtualSize = -f),
              o
                ? g.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : g.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.slidesPerColumn > 1 &&
                ((S =
                  Math.floor(k / i.slidesPerColumn) ===
                  k / e.params.slidesPerColumn
                    ? k
                    : Math.ceil(k / i.slidesPerColumn) * i.slidesPerColumn),
                "auto" !== i.slidesPerView &&
                  "row" === i.slidesPerColumnFill &&
                  (S = Math.max(S, i.slidesPerView * i.slidesPerColumn)));
            for (
              var T,
                A,
                E,
                P = i.slidesPerColumn,
                O = S / P,
                M = Math.floor(k / i.slidesPerColumn),
                L = 0;
              L < k;
              L += 1
            ) {
              C = 0;
              var N = g.eq(L);
              if (i.slidesPerColumn > 1) {
                var I = void 0,
                  D = void 0,
                  B = void 0;
                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var R = Math.floor(
                      L / (i.slidesPerGroup * i.slidesPerColumn)
                    ),
                    z = L - i.slidesPerColumn * i.slidesPerGroup * R,
                    G =
                      0 === R
                        ? i.slidesPerGroup
                        : Math.min(
                            Math.ceil((k - R * P * i.slidesPerGroup) / P),
                            i.slidesPerGroup
                          );
                  (I =
                    (D =
                      z - (B = Math.floor(z / G)) * G + R * i.slidesPerGroup) +
                    (B * S) / P),
                    N.css({
                      "-webkit-box-ordinal-group": I,
                      "-moz-box-ordinal-group": I,
                      "-ms-flex-order": I,
                      "-webkit-order": I,
                      order: I,
                    });
                } else
                  "column" === i.slidesPerColumnFill
                    ? ((B = L - (D = Math.floor(L / P)) * P),
                      (D > M || (D === M && B === P - 1)) &&
                        (B += 1) >= P &&
                        ((B = 0), (D += 1)))
                    : (D = L - (B = Math.floor(L / O)) * O);
                N.css(
                  n("margin-top"),
                  0 !== B ? i.spaceBetween && i.spaceBetween + "px" : ""
                );
              }
              if ("none" !== N.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var F = getComputedStyle(N[0]),
                    H = N[0].style.transform,
                    X = N[0].style.webkitTransform;
                  if (
                    (H && (N[0].style.transform = "none"),
                    X && (N[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    C = e.isHorizontal() ? N.outerWidth(!0) : N.outerHeight(!0);
                  else {
                    var j = a(F, "width"),
                      U = a(F, "padding-left"),
                      q = a(F, "padding-right"),
                      K = a(F, "margin-left"),
                      Y = a(F, "margin-right"),
                      W = F.getPropertyValue("box-sizing");
                    if (W && "border-box" === W) C = j + K + Y;
                    else {
                      var _ = N[0],
                        $ = _.clientWidth;
                      C = j + U + q + K + Y + (_.offsetWidth - $);
                    }
                  }
                  H && (N[0].style.transform = H),
                    X && (N[0].style.webkitTransform = X),
                    i.roundLengths && (C = Math.floor(C));
                } else
                  (C = (l - (i.slidesPerView - 1) * f) / i.slidesPerView),
                    i.roundLengths && (C = Math.floor(C)),
                    g[L] && (g[L].style[n("width")] = C + "px");
                g[L] && (g[L].swiperSlideSize = C),
                  h.push(C),
                  i.centeredSlides
                    ? ((v = v + C / 2 + b / 2 + f),
                      0 === b && 0 !== L && (v = v - l / 2 - f),
                      0 === L && (v = v - l / 2 - f),
                      Math.abs(v) < 0.001 && (v = 0),
                      i.roundLengths && (v = Math.floor(v)),
                      y % i.slidesPerGroup == 0 && w.push(v),
                      d.push(v))
                    : (i.roundLengths && (v = Math.floor(v)),
                      (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                        e.params.slidesPerGroup ==
                        0 && w.push(v),
                      d.push(v),
                      (v = v + C + f)),
                  (e.virtualSize += C + f),
                  (b = C),
                  (y += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, l) + u),
              o &&
                s &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                t.css({ width: e.virtualSize + i.spaceBetween + "px" }),
              i.setWrapperSize)
            )
              t.css(
                (((A = {})[n("width")] = e.virtualSize + i.spaceBetween + "px"),
                A)
              );
            if (i.slidesPerColumn > 1)
              if (
                ((e.virtualSize = (C + i.spaceBetween) * S),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / i.slidesPerColumn) -
                  i.spaceBetween),
                t.css(
                  (((E = {})[n("width")] =
                    e.virtualSize + i.spaceBetween + "px"),
                  E)
                ),
                i.centeredSlides)
              ) {
                T = [];
                for (var Z = 0; Z < w.length; Z += 1) {
                  var Q = w[Z];
                  i.roundLengths && (Q = Math.floor(Q)),
                    w[Z] < e.virtualSize + w[0] && T.push(Q);
                }
                w = T;
              }
            if (!i.centeredSlides) {
              T = [];
              for (var J = 0; J < w.length; J += 1) {
                var ee = w[J];
                i.roundLengths && (ee = Math.floor(ee)),
                  w[J] <= e.virtualSize - l && T.push(ee);
              }
              (w = T),
                Math.floor(e.virtualSize - l) - Math.floor(w[w.length - 1]) >
                  1 && w.push(e.virtualSize - l);
            }
            if ((0 === w.length && (w = [0]), 0 !== i.spaceBetween)) {
              var ne,
                ae = e.isHorizontal() && o ? "marginLeft" : n("marginRight");
              g.filter(function (e, n) {
                return !i.cssMode || n !== g.length - 1;
              }).css((((ne = {})[ae] = f + "px"), ne));
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              h.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var te = (ie -= i.spaceBetween) - l;
              w = w.map(function (e) {
                return e < 0 ? -m : e > te ? te + u : e;
              });
            }
            if (i.centerInsufficientSlides) {
              var le = 0;
              if (
                (h.forEach(function (e) {
                  le += e + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (le -= i.spaceBetween) < l)
              ) {
                var oe = (l - le) / 2;
                w.forEach(function (e, n) {
                  w[n] = e - oe;
                }),
                  d.forEach(function (e, n) {
                    d[n] = e + oe;
                  });
              }
            }
            V(e, { slides: g, snapGrid: w, slidesGrid: d, slidesSizesGrid: h }),
              k !== r && e.emit("slidesLengthChange"),
              w.length !== p &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              d.length !== x && e.emit("slidesGridLengthChange"),
              (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var n,
            a = this,
            i = [],
            t = a.virtual && a.params.virtual.enabled,
            l = 0;
          "number" == typeof e
            ? a.setTransition(e)
            : !0 === e && a.setTransition(a.params.speed);
          var o = function (e) {
            return t
              ? a.slides.filter(function (n) {
                  return (
                    parseInt(n.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : a.slides.eq(e)[0];
          };
          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1)
            if (a.params.centeredSlides)
              a.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(a.params.slidesPerView); n += 1) {
                var s = a.activeIndex + n;
                if (s > a.slides.length && !t) break;
                i.push(o(s));
              }
          else i.push(o(a.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              var c = i[n].offsetHeight;
              l = c > l ? c : l;
            }
          l && a.$wrapperEl.css("height", l + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, n = 0; n < e.length; n += 1)
            e[n].swiperSlideOffset = this.isHorizontal()
              ? e[n].offsetLeft
              : e[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var n = this,
            a = n.params,
            i = n.slides,
            t = n.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && n.updateSlidesOffset();
            var l = -e;
            t && (l = e),
              i.removeClass(a.slideVisibleClass),
              (n.visibleSlidesIndexes = []),
              (n.visibleSlides = []);
            for (var o = 0; o < i.length; o += 1) {
              var s = i[o],
                c =
                  (l +
                    (a.centeredSlides ? n.minTranslate() : 0) -
                    s.swiperSlideOffset) /
                  (s.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var r = -(l - s.swiperSlideOffset),
                  g = r + n.slidesSizesGrid[o];
                ((r >= 0 && r < n.size - 1) ||
                  (g > 1 && g <= n.size) ||
                  (r <= 0 && g >= n.size)) &&
                  (n.visibleSlides.push(s),
                  n.visibleSlidesIndexes.push(o),
                  i.eq(o).addClass(a.slideVisibleClass));
              }
              s.progress = t ? -c : c;
            }
            n.visibleSlides = D(n.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var n = this;
          if (void 0 === e) {
            var a = n.rtlTranslate ? -1 : 1;
            e = (n && n.translate && n.translate * a) || 0;
          }
          var i = n.params,
            t = n.maxTranslate() - n.minTranslate(),
            l = n.progress,
            o = n.isBeginning,
            s = n.isEnd,
            c = o,
            r = s;
          0 === t
            ? ((l = 0), (o = !0), (s = !0))
            : ((o = (l = (e - n.minTranslate()) / t) <= 0), (s = l >= 1)),
            V(n, { progress: l, isBeginning: o, isEnd: s }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              n.updateSlidesProgress(e),
            o && !c && n.emit("reachBeginning toEdge"),
            s && !r && n.emit("reachEnd toEdge"),
            ((c && !o) || (r && !s)) && n.emit("fromEdge"),
            n.emit("progress", l);
        },
        updateSlidesClasses: function () {
          var e,
            n = this,
            a = n.slides,
            i = n.params,
            t = n.$wrapperEl,
            l = n.activeIndex,
            o = n.realIndex,
            s = n.virtual && i.virtual.enabled;
          a.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = s
              ? n.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + l + '"]'
                )
              : a.eq(l)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? t
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : t
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var c = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === c.length && (c = a.eq(0)).addClass(i.slideNextClass);
          var r = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === r.length && (r = a.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (c.hasClass(i.slideDuplicateClass)
                ? t
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : t
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              r.hasClass(i.slideDuplicateClass)
                ? t
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : t
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            n.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var n,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            t = a.slidesGrid,
            l = a.snapGrid,
            o = a.params,
            s = a.activeIndex,
            c = a.realIndex,
            r = a.snapIndex,
            g = e;
          if (void 0 === g) {
            for (var k = 0; k < t.length; k += 1)
              void 0 !== t[k + 1]
                ? i >= t[k] && i < t[k + 1] - (t[k + 1] - t[k]) / 2
                  ? (g = k)
                  : i >= t[k] && i < t[k + 1] && (g = k + 1)
                : i >= t[k] && (g = k);
            o.normalizeSlideIndex && (g < 0 || void 0 === g) && (g = 0);
          }
          if (l.indexOf(i) >= 0) n = l.indexOf(i);
          else {
            var w = Math.min(o.slidesPerGroupSkip, g);
            n = w + Math.floor((g - w) / o.slidesPerGroup);
          }
          if ((n >= l.length && (n = l.length - 1), g !== s)) {
            var d = parseInt(
              a.slides.eq(g).attr("data-swiper-slide-index") || g,
              10
            );
            V(a, {
              snapIndex: n,
              realIndex: d,
              previousIndex: s,
              activeIndex: g,
            }),
              a.emit("activeIndexChange"),
              a.emit("snapIndexChange"),
              c !== d && a.emit("realIndexChange"),
              (a.initialized || a.params.runCallbacksOnInit) &&
                a.emit("slideChange");
          } else n !== r && ((a.snapIndex = n), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var n,
            a = this,
            i = a.params,
            t = D(e.target).closest("." + i.slideClass)[0],
            l = !1;
          if (t)
            for (var o = 0; o < a.slides.length; o += 1)
              if (a.slides[o] === t) {
                (l = !0), (n = o);
                break;
              }
          if (!t || !l)
            return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
          (a.clickedSlide = t),
            a.virtual && a.params.virtual.enabled
              ? (a.clickedIndex = parseInt(
                  D(t).attr("data-swiper-slide-index"),
                  10
                ))
              : (a.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== a.clickedIndex &&
              a.clickedIndex !== a.activeIndex &&
              a.slideToClickedSlide();
        },
      };
      function ae(e) {
        var n = this,
          a = f(),
          i = b(),
          t = n.touchEventsData,
          l = n.params,
          o = n.touches;
        if (n.enabled && (!n.animating || !l.preventInteractionOnTransition)) {
          var s = e;
          s.originalEvent && (s = s.originalEvent);
          var c = D(s.target);
          if (
            ("wrapper" !== l.touchEventsTarget ||
              c.closest(n.wrapperEl).length) &&
            ((t.isTouchEvent = "touchstart" === s.type),
            (t.isTouchEvent || !("which" in s) || 3 !== s.which) &&
              !(
                (!t.isTouchEvent && "button" in s && s.button > 0) ||
                (t.isTouched && t.isMoved)
              ))
          ) {
            !!l.noSwipingClass &&
              "" !== l.noSwipingClass &&
              s.target &&
              s.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (c = D(e.path[0]));
            var r = l.noSwipingSelector
                ? l.noSwipingSelector
                : "." + l.noSwipingClass,
              g = !(!s.target || !s.target.shadowRoot);
            if (
              l.noSwiping &&
              (g
                ? (function (e, n) {
                    return (
                      void 0 === n && (n = this),
                      (function n(a) {
                        return a && a !== f() && a !== b()
                          ? (a.assignedSlot && (a = a.assignedSlot),
                            a.closest(e) || n(a.getRootNode().host))
                          : null;
                      })(n)
                    );
                  })(r, s.target)
                : c.closest(r)[0])
            )
              n.allowClick = !0;
            else if (!l.swipeHandler || c.closest(l.swipeHandler)[0]) {
              (o.currentX =
                "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX),
                (o.currentY =
                  "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY);
              var k = o.currentX,
                w = o.currentY,
                d = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                h = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
              if (d && (k <= h || k >= i.innerWidth - h)) {
                if ("prevent" !== d) return;
                e.preventDefault();
              }
              if (
                (V(t, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (o.startX = k),
                (o.startY = w),
                (t.touchStartTime = R()),
                (n.allowClick = !0),
                n.updateSize(),
                (n.swipeDirection = void 0),
                l.threshold > 0 && (t.allowThresholdMove = !1),
                "touchstart" !== s.type)
              ) {
                var m = !0;
                c.is(t.focusableElements) && (m = !1),
                  a.activeElement &&
                    D(a.activeElement).is(t.focusableElements) &&
                    a.activeElement !== c[0] &&
                    a.activeElement.blur();
                var u = m && n.allowTouchMove && l.touchStartPreventDefault;
                (!l.touchStartForcePreventDefault && !u) ||
                  c[0].isContentEditable ||
                  s.preventDefault();
              }
              n.emit("touchStart", s);
            }
          }
        }
      }
      function ie(e) {
        var n = f(),
          a = this,
          i = a.touchEventsData,
          t = a.params,
          l = a.touches,
          o = a.rtlTranslate;
        if (a.enabled) {
          var s = e;
          if ((s.originalEvent && (s = s.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || "touchmove" === s.type) {
              var c =
                  "touchmove" === s.type &&
                  s.targetTouches &&
                  (s.targetTouches[0] || s.changedTouches[0]),
                r = "touchmove" === s.type ? c.pageX : s.pageX,
                g = "touchmove" === s.type ? c.pageY : s.pageY;
              if (s.preventedByNestedSwiper)
                return (l.startX = r), void (l.startY = g);
              if (!a.allowTouchMove)
                return (
                  (a.allowClick = !1),
                  void (
                    i.isTouched &&
                    (V(l, { startX: r, startY: g, currentX: r, currentY: g }),
                    (i.touchStartTime = R()))
                  )
                );
              if (i.isTouchEvent && t.touchReleaseOnEdges && !t.loop)
                if (a.isVertical()) {
                  if (
                    (g < l.startY && a.translate <= a.maxTranslate()) ||
                    (g > l.startY && a.translate >= a.minTranslate())
                  )
                    return (i.isTouched = !1), void (i.isMoved = !1);
                } else if (
                  (r < l.startX && a.translate <= a.maxTranslate()) ||
                  (r > l.startX && a.translate >= a.minTranslate())
                )
                  return;
              if (
                i.isTouchEvent &&
                n.activeElement &&
                s.target === n.activeElement &&
                D(s.target).is(i.focusableElements)
              )
                return (i.isMoved = !0), void (a.allowClick = !1);
              if (
                (i.allowTouchCallbacks && a.emit("touchMove", s),
                !(s.targetTouches && s.targetTouches.length > 1))
              ) {
                (l.currentX = r), (l.currentY = g);
                var k = l.currentX - l.startX,
                  w = l.currentY - l.startY;
                if (
                  !(
                    a.params.threshold &&
                    Math.sqrt(Math.pow(k, 2) + Math.pow(w, 2)) <
                      a.params.threshold
                  )
                ) {
                  var d;
                  if (void 0 === i.isScrolling)
                    (a.isHorizontal() && l.currentY === l.startY) ||
                    (a.isVertical() && l.currentX === l.startX)
                      ? (i.isScrolling = !1)
                      : k * k + w * w >= 25 &&
                        ((d =
                          (180 * Math.atan2(Math.abs(w), Math.abs(k))) /
                          Math.PI),
                        (i.isScrolling = a.isHorizontal()
                          ? d > t.touchAngle
                          : 90 - d > t.touchAngle));
                  if (
                    (i.isScrolling && a.emit("touchMoveOpposite", s),
                    void 0 === i.startMoving &&
                      ((l.currentX === l.startX && l.currentY === l.startY) ||
                        (i.startMoving = !0)),
                    i.isScrolling)
                  )
                    i.isTouched = !1;
                  else if (i.startMoving) {
                    (a.allowClick = !1),
                      !t.cssMode && s.cancelable && s.preventDefault(),
                      t.touchMoveStopPropagation &&
                        !t.nested &&
                        s.stopPropagation(),
                      i.isMoved ||
                        (t.loop && a.loopFix(),
                        (i.startTranslate = a.getTranslate()),
                        a.setTransition(0),
                        a.animating &&
                          a.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (i.allowMomentumBounce = !1),
                        !t.grabCursor ||
                          (!0 !== a.allowSlideNext &&
                            !0 !== a.allowSlidePrev) ||
                          a.setGrabCursor(!0),
                        a.emit("sliderFirstMove", s)),
                      a.emit("sliderMove", s),
                      (i.isMoved = !0);
                    var h = a.isHorizontal() ? k : w;
                    (l.diff = h),
                      (h *= t.touchRatio),
                      o && (h = -h),
                      (a.swipeDirection = h > 0 ? "prev" : "next"),
                      (i.currentTranslate = h + i.startTranslate);
                    var m = !0,
                      u = t.resistanceRatio;
                    if (
                      (t.touchReleaseOnEdges && (u = 0),
                      h > 0 && i.currentTranslate > a.minTranslate()
                        ? ((m = !1),
                          t.resistance &&
                            (i.currentTranslate =
                              a.minTranslate() -
                              1 +
                              Math.pow(
                                -a.minTranslate() + i.startTranslate + h,
                                u
                              )))
                        : h < 0 &&
                          i.currentTranslate < a.maxTranslate() &&
                          ((m = !1),
                          t.resistance &&
                            (i.currentTranslate =
                              a.maxTranslate() +
                              1 -
                              Math.pow(
                                a.maxTranslate() - i.startTranslate - h,
                                u
                              ))),
                      m && (s.preventedByNestedSwiper = !0),
                      !a.allowSlideNext &&
                        "next" === a.swipeDirection &&
                        i.currentTranslate < i.startTranslate &&
                        (i.currentTranslate = i.startTranslate),
                      !a.allowSlidePrev &&
                        "prev" === a.swipeDirection &&
                        i.currentTranslate > i.startTranslate &&
                        (i.currentTranslate = i.startTranslate),
                      a.allowSlidePrev ||
                        a.allowSlideNext ||
                        (i.currentTranslate = i.startTranslate),
                      t.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > t.threshold || i.allowThresholdMove))
                        return void (i.currentTranslate = i.startTranslate);
                      if (!i.allowThresholdMove)
                        return (
                          (i.allowThresholdMove = !0),
                          (l.startX = l.currentX),
                          (l.startY = l.currentY),
                          (i.currentTranslate = i.startTranslate),
                          void (l.diff = a.isHorizontal()
                            ? l.currentX - l.startX
                            : l.currentY - l.startY)
                        );
                    }
                    t.followFinger &&
                      !t.cssMode &&
                      ((t.freeMode ||
                        t.watchSlidesProgress ||
                        t.watchSlidesVisibility) &&
                        (a.updateActiveIndex(), a.updateSlidesClasses()),
                      t.freeMode &&
                        (0 === i.velocities.length &&
                          i.velocities.push({
                            position: l[a.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime,
                          }),
                        i.velocities.push({
                          position:
                            l[a.isHorizontal() ? "currentX" : "currentY"],
                          time: R(),
                        })),
                      a.updateProgress(i.currentTranslate),
                      a.setTranslate(i.currentTranslate));
                  }
                }
              }
            }
          } else
            i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", s);
        }
      }
      function te(e) {
        var n = this,
          a = n.touchEventsData,
          i = n.params,
          t = n.touches,
          l = n.rtlTranslate,
          o = n.$wrapperEl,
          s = n.slidesGrid,
          c = n.snapGrid;
        if (n.enabled) {
          var r = e;
          if (
            (r.originalEvent && (r = r.originalEvent),
            a.allowTouchCallbacks && n.emit("touchEnd", r),
            (a.allowTouchCallbacks = !1),
            !a.isTouched)
          )
            return (
              a.isMoved && i.grabCursor && n.setGrabCursor(!1),
              (a.isMoved = !1),
              void (a.startMoving = !1)
            );
          i.grabCursor &&
            a.isMoved &&
            a.isTouched &&
            (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
            n.setGrabCursor(!1);
          var g,
            k = R(),
            w = k - a.touchStartTime;
          if (
            (n.allowClick &&
              (n.updateClickedSlide(r),
              n.emit("tap click", r),
              w < 300 &&
                k - a.lastClickTime < 300 &&
                n.emit("doubleTap doubleClick", r)),
            (a.lastClickTime = R()),
            B(function () {
              n.destroyed || (n.allowClick = !0);
            }),
            !a.isTouched ||
              !a.isMoved ||
              !n.swipeDirection ||
              0 === t.diff ||
              a.currentTranslate === a.startTranslate)
          )
            return (
              (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
            );
          if (
            ((a.isTouched = !1),
            (a.isMoved = !1),
            (a.startMoving = !1),
            (g = i.followFinger
              ? l
                ? n.translate
                : -n.translate
              : -a.currentTranslate),
            !i.cssMode)
          )
            if (i.freeMode) {
              if (g < -n.minTranslate()) return void n.slideTo(n.activeIndex);
              if (g > -n.maxTranslate())
                return void (n.slides.length < c.length
                  ? n.slideTo(c.length - 1)
                  : n.slideTo(n.slides.length - 1));
              if (i.freeModeMomentum) {
                if (a.velocities.length > 1) {
                  var d = a.velocities.pop(),
                    h = a.velocities.pop(),
                    m = d.position - h.position,
                    u = d.time - h.time;
                  (n.velocity = m / u),
                    (n.velocity /= 2),
                    Math.abs(n.velocity) < i.freeModeMinimumVelocity &&
                      (n.velocity = 0),
                    (u > 150 || R() - d.time > 300) && (n.velocity = 0);
                } else n.velocity = 0;
                (n.velocity *= i.freeModeMomentumVelocityRatio),
                  (a.velocities.length = 0);
                var p = 1e3 * i.freeModeMomentumRatio,
                  x = n.velocity * p,
                  f = n.translate + x;
                l && (f = -f);
                var v,
                  b,
                  y = !1,
                  S = 20 * Math.abs(n.velocity) * i.freeModeMomentumBounceRatio;
                if (f < n.maxTranslate())
                  i.freeModeMomentumBounce
                    ? (f + n.maxTranslate() < -S && (f = n.maxTranslate() - S),
                      (v = n.maxTranslate()),
                      (y = !0),
                      (a.allowMomentumBounce = !0))
                    : (f = n.maxTranslate()),
                    i.loop && i.centeredSlides && (b = !0);
                else if (f > n.minTranslate())
                  i.freeModeMomentumBounce
                    ? (f - n.minTranslate() > S && (f = n.minTranslate() + S),
                      (v = n.minTranslate()),
                      (y = !0),
                      (a.allowMomentumBounce = !0))
                    : (f = n.minTranslate()),
                    i.loop && i.centeredSlides && (b = !0);
                else if (i.freeModeSticky) {
                  for (var C, T = 0; T < c.length; T += 1)
                    if (c[T] > -f) {
                      C = T;
                      break;
                    }
                  f = -(f =
                    Math.abs(c[C] - f) < Math.abs(c[C - 1] - f) ||
                    "next" === n.swipeDirection
                      ? c[C]
                      : c[C - 1]);
                }
                if (
                  (b &&
                    n.once("transitionEnd", function () {
                      n.loopFix();
                    }),
                  0 !== n.velocity)
                ) {
                  if (
                    ((p = l
                      ? Math.abs((-f - n.translate) / n.velocity)
                      : Math.abs((f - n.translate) / n.velocity)),
                    i.freeModeSticky)
                  ) {
                    var A = Math.abs((l ? -f : f) - n.translate),
                      E = n.slidesSizesGrid[n.activeIndex];
                    p =
                      A < E
                        ? i.speed
                        : A < 2 * E
                        ? 1.5 * i.speed
                        : 2.5 * i.speed;
                  }
                } else if (i.freeModeSticky) return void n.slideToClosest();
                i.freeModeMomentumBounce && y
                  ? (n.updateProgress(v),
                    n.setTransition(p),
                    n.setTranslate(f),
                    n.transitionStart(!0, n.swipeDirection),
                    (n.animating = !0),
                    o.transitionEnd(function () {
                      n &&
                        !n.destroyed &&
                        a.allowMomentumBounce &&
                        (n.emit("momentumBounce"),
                        n.setTransition(i.speed),
                        setTimeout(function () {
                          n.setTranslate(v),
                            o.transitionEnd(function () {
                              n && !n.destroyed && n.transitionEnd();
                            });
                        }, 0));
                    }))
                  : n.velocity
                  ? (n.updateProgress(f),
                    n.setTransition(p),
                    n.setTranslate(f),
                    n.transitionStart(!0, n.swipeDirection),
                    n.animating ||
                      ((n.animating = !0),
                      o.transitionEnd(function () {
                        n && !n.destroyed && n.transitionEnd();
                      })))
                  : (n.emit("_freeModeNoMomentumRelease"), n.updateProgress(f)),
                  n.updateActiveIndex(),
                  n.updateSlidesClasses();
              } else {
                if (i.freeModeSticky) return void n.slideToClosest();
                i.freeMode && n.emit("_freeModeNoMomentumRelease");
              }
              (!i.freeModeMomentum || w >= i.longSwipesMs) &&
                (n.updateProgress(),
                n.updateActiveIndex(),
                n.updateSlidesClasses());
            } else {
              for (
                var P = 0, O = n.slidesSizesGrid[0], M = 0;
                M < s.length;
                M += M < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
              ) {
                var L = M < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== s[M + L]
                  ? g >= s[M] &&
                    g < s[M + L] &&
                    ((P = M), (O = s[M + L] - s[M]))
                  : g >= s[M] &&
                    ((P = M), (O = s[s.length - 1] - s[s.length - 2]));
              }
              var N = (g - s[P]) / O,
                I = P < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              if (w > i.longSwipesMs) {
                if (!i.longSwipes) return void n.slideTo(n.activeIndex);
                "next" === n.swipeDirection &&
                  (N >= i.longSwipesRatio ? n.slideTo(P + I) : n.slideTo(P)),
                  "prev" === n.swipeDirection &&
                    (N > 1 - i.longSwipesRatio
                      ? n.slideTo(P + I)
                      : n.slideTo(P));
              } else {
                if (!i.shortSwipes) return void n.slideTo(n.activeIndex);
                n.navigation &&
                (r.target === n.navigation.nextEl ||
                  r.target === n.navigation.prevEl)
                  ? r.target === n.navigation.nextEl
                    ? n.slideTo(P + I)
                    : n.slideTo(P)
                  : ("next" === n.swipeDirection && n.slideTo(P + I),
                    "prev" === n.swipeDirection && n.slideTo(P));
              }
            }
        }
      }
      function le() {
        var e = this,
          n = e.params,
          a = e.el;
        if (!a || 0 !== a.offsetWidth) {
          n.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            t = e.allowSlidePrev,
            l = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === n.slidesPerView || n.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = t),
            (e.allowSlideNext = i),
            e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
        }
      }
      function oe(e) {
        var n = this;
        n.enabled &&
          (n.allowClick ||
            (n.params.preventClicks && e.preventDefault(),
            n.params.preventClicksPropagation &&
              n.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function se() {
        var e = this,
          n = e.wrapperEl,
          a = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = a
                  ? n.scrollWidth - n.offsetWidth - n.scrollLeft
                  : -n.scrollLeft)
              : (e.translate = -n.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var i = e.maxTranslate() - e.minTranslate();
          (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress &&
            e.updateProgress(a ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var ce = !1;
      function re() {}
      const ge = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function ke(e, n) {
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var we = {
          modular: {
            useParams: function (e) {
              var n = this;
              n.modules &&
                Object.keys(n.modules).forEach(function (a) {
                  var i = n.modules[a];
                  i.params && V(e, i.params);
                });
            },
            useModules: function (e) {
              void 0 === e && (e = {});
              var n = this;
              n.modules &&
                Object.keys(n.modules).forEach(function (a) {
                  var i = n.modules[a],
                    t = e[a] || {};
                  i.on &&
                    n.on &&
                    Object.keys(i.on).forEach(function (e) {
                      n.on(e, i.on[e]);
                    }),
                    i.create && i.create.bind(n)(t);
                });
            },
          },
          eventsEmitter: ee,
          update: ne,
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var n = this,
                a = n.params,
                i = n.rtlTranslate,
                t = n.translate,
                l = n.$wrapperEl;
              if (a.virtualTranslate) return i ? -t : t;
              if (a.cssMode) return t;
              var o = z(l[0], e);
              return i && (o = -o), o || 0;
            },
            setTranslate: function (e, n) {
              var a = this,
                i = a.rtlTranslate,
                t = a.params,
                l = a.$wrapperEl,
                o = a.wrapperEl,
                s = a.progress,
                c = 0,
                r = 0;
              a.isHorizontal() ? (c = i ? -e : e) : (r = e),
                t.roundLengths && ((c = Math.floor(c)), (r = Math.floor(r))),
                t.cssMode
                  ? (o[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      a.isHorizontal() ? -c : -r)
                  : t.virtualTranslate ||
                    l.transform("translate3d(" + c + "px, " + r + "px, 0px)"),
                (a.previousTranslate = a.translate),
                (a.translate = a.isHorizontal() ? c : r);
              var g = a.maxTranslate() - a.minTranslate();
              (0 === g ? 0 : (e - a.minTranslate()) / g) !== s &&
                a.updateProgress(e),
                a.emit("setTranslate", a.translate, n);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, n, a, i, t) {
              void 0 === e && (e = 0),
                void 0 === n && (n = this.params.speed),
                void 0 === a && (a = !0),
                void 0 === i && (i = !0);
              var l = this,
                o = l.params,
                s = l.wrapperEl;
              if (l.animating && o.preventInteractionOnTransition) return !1;
              var c,
                r = l.minTranslate(),
                g = l.maxTranslate();
              if (
                ((c = i && e > r ? r : i && e < g ? g : e),
                l.updateProgress(c),
                o.cssMode)
              ) {
                var k,
                  w = l.isHorizontal();
                if (0 === n) s[w ? "scrollLeft" : "scrollTop"] = -c;
                else if (s.scrollTo)
                  s.scrollTo(
                    (((k = {})[w ? "left" : "top"] = -c),
                    (k.behavior = "smooth"),
                    k)
                  );
                else s[w ? "scrollLeft" : "scrollTop"] = -c;
                return !0;
              }
              return (
                0 === n
                  ? (l.setTransition(0),
                    l.setTranslate(c),
                    a &&
                      (l.emit("beforeTransitionStart", n, t),
                      l.emit("transitionEnd")))
                  : (l.setTransition(n),
                    l.setTranslate(c),
                    a &&
                      (l.emit("beforeTransitionStart", n, t),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            l.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            a && l.emit("transitionEnd"));
                        }),
                      l.$wrapperEl[0].addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, n) {
              var a = this;
              a.params.cssMode || a.$wrapperEl.transition(e),
                a.emit("setTransition", e, n);
            },
            transitionStart: function (e, n) {
              void 0 === e && (e = !0);
              var a = this,
                i = a.activeIndex,
                t = a.params,
                l = a.previousIndex;
              if (!t.cssMode) {
                t.autoHeight && a.updateAutoHeight();
                var o = n;
                if (
                  (o || (o = i > l ? "next" : i < l ? "prev" : "reset"),
                  a.emit("transitionStart"),
                  e && i !== l)
                ) {
                  if ("reset" === o)
                    return void a.emit("slideResetTransitionStart");
                  a.emit("slideChangeTransitionStart"),
                    "next" === o
                      ? a.emit("slideNextTransitionStart")
                      : a.emit("slidePrevTransitionStart");
                }
              }
            },
            transitionEnd: function (e, n) {
              void 0 === e && (e = !0);
              var a = this,
                i = a.activeIndex,
                t = a.previousIndex,
                l = a.params;
              if (((a.animating = !1), !l.cssMode)) {
                a.setTransition(0);
                var o = n;
                if (
                  (o || (o = i > t ? "next" : i < t ? "prev" : "reset"),
                  a.emit("transitionEnd"),
                  e && i !== t)
                ) {
                  if ("reset" === o)
                    return void a.emit("slideResetTransitionEnd");
                  a.emit("slideChangeTransitionEnd"),
                    "next" === o
                      ? a.emit("slideNextTransitionEnd")
                      : a.emit("slidePrevTransitionEnd");
                }
              }
            },
          },
          slide: {
            slideTo: function (e, n, a, i, t) {
              if (
                (void 0 === e && (e = 0),
                void 0 === n && (n = this.params.speed),
                void 0 === a && (a = !0),
                "number" != typeof e && "string" != typeof e)
              )
                throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [" +
                    typeof e +
                    "] given."
                );
              if ("string" == typeof e) {
                var l = parseInt(e, 10);
                if (!isFinite(l))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                      e +
                      "] given."
                  );
                e = l;
              }
              var o = this,
                s = e;
              s < 0 && (s = 0);
              var c = o.params,
                r = o.snapGrid,
                g = o.slidesGrid,
                k = o.previousIndex,
                w = o.activeIndex,
                d = o.rtlTranslate,
                h = o.wrapperEl,
                m = o.enabled;
              if (
                (o.animating && c.preventInteractionOnTransition) ||
                (!m && !i && !t)
              )
                return !1;
              var u = Math.min(o.params.slidesPerGroupSkip, s),
                p = u + Math.floor((s - u) / o.params.slidesPerGroup);
              p >= r.length && (p = r.length - 1),
                (w || c.initialSlide || 0) === (k || 0) &&
                  a &&
                  o.emit("beforeSlideChangeStart");
              var x,
                f = -r[p];
              if ((o.updateProgress(f), c.normalizeSlideIndex))
                for (var v = 0; v < g.length; v += 1) {
                  var b = -Math.floor(100 * f),
                    y = Math.floor(100 * g[v]),
                    S = Math.floor(100 * g[v + 1]);
                  void 0 !== g[v + 1]
                    ? b >= y && b < S - (S - y) / 2
                      ? (s = v)
                      : b >= y && b < S && (s = v + 1)
                    : b >= y && (s = v);
                }
              if (o.initialized && s !== w) {
                if (
                  !o.allowSlideNext &&
                  f < o.translate &&
                  f < o.minTranslate()
                )
                  return !1;
                if (
                  !o.allowSlidePrev &&
                  f > o.translate &&
                  f > o.maxTranslate() &&
                  (w || 0) !== s
                )
                  return !1;
              }
              if (
                ((x = s > w ? "next" : s < w ? "prev" : "reset"),
                (d && -f === o.translate) || (!d && f === o.translate))
              )
                return (
                  o.updateActiveIndex(s),
                  c.autoHeight && o.updateAutoHeight(),
                  o.updateSlidesClasses(),
                  "slide" !== c.effect && o.setTranslate(f),
                  "reset" !== x &&
                    (o.transitionStart(a, x), o.transitionEnd(a, x)),
                  !1
                );
              if (c.cssMode) {
                var C,
                  T = o.isHorizontal(),
                  A = -f;
                if ((d && (A = h.scrollWidth - h.offsetWidth - A), 0 === n))
                  h[T ? "scrollLeft" : "scrollTop"] = A;
                else if (h.scrollTo)
                  h.scrollTo(
                    (((C = {})[T ? "left" : "top"] = A),
                    (C.behavior = "smooth"),
                    C)
                  );
                else h[T ? "scrollLeft" : "scrollTop"] = A;
                return !0;
              }
              return (
                0 === n
                  ? (o.setTransition(0),
                    o.setTranslate(f),
                    o.updateActiveIndex(s),
                    o.updateSlidesClasses(),
                    o.emit("beforeTransitionStart", n, i),
                    o.transitionStart(a, x),
                    o.transitionEnd(a, x))
                  : (o.setTransition(n),
                    o.setTranslate(f),
                    o.updateActiveIndex(s),
                    o.updateSlidesClasses(),
                    o.emit("beforeTransitionStart", n, i),
                    o.transitionStart(a, x),
                    o.animating ||
                      ((o.animating = !0),
                      o.onSlideToWrapperTransitionEnd ||
                        (o.onSlideToWrapperTransitionEnd = function (e) {
                          o &&
                            !o.destroyed &&
                            e.target === this &&
                            (o.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              o.onSlideToWrapperTransitionEnd
                            ),
                            o.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              o.onSlideToWrapperTransitionEnd
                            ),
                            (o.onSlideToWrapperTransitionEnd = null),
                            delete o.onSlideToWrapperTransitionEnd,
                            o.transitionEnd(a, x));
                        }),
                      o.$wrapperEl[0].addEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ))),
                !0
              );
            },
            slideToLoop: function (e, n, a, i) {
              void 0 === e && (e = 0),
                void 0 === n && (n = this.params.speed),
                void 0 === a && (a = !0);
              var t = this,
                l = e;
              return (
                t.params.loop && (l += t.loopedSlides), t.slideTo(l, n, a, i)
              );
            },
            slideNext: function (e, n, a) {
              void 0 === e && (e = this.params.speed), void 0 === n && (n = !0);
              var i = this,
                t = i.params,
                l = i.animating;
              if (!i.enabled) return i;
              var o =
                i.activeIndex < t.slidesPerGroupSkip ? 1 : t.slidesPerGroup;
              if (t.loop) {
                if (l && t.loopPreventsSlide) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              return i.slideTo(i.activeIndex + o, e, n, a);
            },
            slidePrev: function (e, n, a) {
              void 0 === e && (e = this.params.speed), void 0 === n && (n = !0);
              var i = this,
                t = i.params,
                l = i.animating,
                o = i.snapGrid,
                s = i.slidesGrid,
                c = i.rtlTranslate;
              if (!i.enabled) return i;
              if (t.loop) {
                if (l && t.loopPreventsSlide) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
              }
              function r(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              var g,
                k = r(c ? i.translate : -i.translate),
                w = o.map(function (e) {
                  return r(e);
                }),
                d = o[w.indexOf(k) - 1];
              return (
                void 0 === d &&
                  t.cssMode &&
                  o.forEach(function (e) {
                    !d && k >= e && (d = e);
                  }),
                void 0 !== d &&
                  (g = s.indexOf(d)) < 0 &&
                  (g = i.activeIndex - 1),
                i.slideTo(g, e, n, a)
              );
            },
            slideReset: function (e, n, a) {
              return (
                void 0 === e && (e = this.params.speed),
                void 0 === n && (n = !0),
                this.slideTo(this.activeIndex, e, n, a)
              );
            },
            slideToClosest: function (e, n, a, i) {
              void 0 === e && (e = this.params.speed),
                void 0 === n && (n = !0),
                void 0 === i && (i = 0.5);
              var t = this,
                l = t.activeIndex,
                o = Math.min(t.params.slidesPerGroupSkip, l),
                s = o + Math.floor((l - o) / t.params.slidesPerGroup),
                c = t.rtlTranslate ? t.translate : -t.translate;
              if (c >= t.snapGrid[s]) {
                var r = t.snapGrid[s];
                c - r > (t.snapGrid[s + 1] - r) * i &&
                  (l += t.params.slidesPerGroup);
              } else {
                var g = t.snapGrid[s - 1];
                c - g <= (t.snapGrid[s] - g) * i &&
                  (l -= t.params.slidesPerGroup);
              }
              return (
                (l = Math.max(l, 0)),
                (l = Math.min(l, t.slidesGrid.length - 1)),
                t.slideTo(l, e, n, a)
              );
            },
            slideToClickedSlide: function () {
              var e,
                n = this,
                a = n.params,
                i = n.$wrapperEl,
                t =
                  "auto" === a.slidesPerView
                    ? n.slidesPerViewDynamic()
                    : a.slidesPerView,
                l = n.clickedIndex;
              if (a.loop) {
                if (n.animating) return;
                (e = parseInt(
                  D(n.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  a.centeredSlides
                    ? l < n.loopedSlides - t / 2 ||
                      l > n.slides.length - n.loopedSlides + t / 2
                      ? (n.loopFix(),
                        (l = i
                          .children(
                            "." +
                              a.slideClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              a.slideDuplicateClass +
                              ")"
                          )
                          .eq(0)
                          .index()),
                        B(function () {
                          n.slideTo(l);
                        }))
                      : n.slideTo(l)
                    : l > n.slides.length - t
                    ? (n.loopFix(),
                      (l = i
                        .children(
                          "." +
                            a.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      B(function () {
                        n.slideTo(l);
                      }))
                    : n.slideTo(l);
              } else n.slideTo(l);
            },
          },
          loop: {
            loopCreate: function () {
              var e = this,
                n = f(),
                a = e.params,
                i = e.$wrapperEl;
              i.children(
                "." + a.slideClass + "." + a.slideDuplicateClass
              ).remove();
              var t = i.children("." + a.slideClass);
              if (a.loopFillGroupWithBlank) {
                var l = a.slidesPerGroup - (t.length % a.slidesPerGroup);
                if (l !== a.slidesPerGroup) {
                  for (var o = 0; o < l; o += 1) {
                    var s = D(n.createElement("div")).addClass(
                      a.slideClass + " " + a.slideBlankClass
                    );
                    i.append(s);
                  }
                  t = i.children("." + a.slideClass);
                }
              }
              "auto" !== a.slidesPerView ||
                a.loopedSlides ||
                (a.loopedSlides = t.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(a.loopedSlides || a.slidesPerView, 10)
                )),
                (e.loopedSlides += a.loopAdditionalSlides),
                e.loopedSlides > t.length && (e.loopedSlides = t.length);
              var c = [],
                r = [];
              t.each(function (n, a) {
                var i = D(n);
                a < e.loopedSlides && r.push(n),
                  a < t.length && a >= t.length - e.loopedSlides && c.push(n),
                  i.attr("data-swiper-slide-index", a);
              });
              for (var g = 0; g < r.length; g += 1)
                i.append(D(r[g].cloneNode(!0)).addClass(a.slideDuplicateClass));
              for (var k = c.length - 1; k >= 0; k -= 1)
                i.prepend(
                  D(c[k].cloneNode(!0)).addClass(a.slideDuplicateClass)
                );
            },
            loopFix: function () {
              var e = this;
              e.emit("beforeLoopFix");
              var n,
                a = e.activeIndex,
                i = e.slides,
                t = e.loopedSlides,
                l = e.allowSlidePrev,
                o = e.allowSlideNext,
                s = e.snapGrid,
                c = e.rtlTranslate;
              (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
              var r = -s[a] - e.getTranslate();
              if (a < t)
                (n = i.length - 3 * t + a),
                  (n += t),
                  e.slideTo(n, 0, !1, !0) &&
                    0 !== r &&
                    e.setTranslate((c ? -e.translate : e.translate) - r);
              else if (a >= i.length - t) {
                (n = -i.length + a + t),
                  (n += t),
                  e.slideTo(n, 0, !1, !0) &&
                    0 !== r &&
                    e.setTranslate((c ? -e.translate : e.translate) - r);
              }
              (e.allowSlidePrev = l), (e.allowSlideNext = o), e.emit("loopFix");
            },
            loopDestroy: function () {
              var e = this,
                n = e.$wrapperEl,
                a = e.params,
                i = e.slides;
              n
                .children(
                  "." +
                    a.slideClass +
                    "." +
                    a.slideDuplicateClass +
                    ",." +
                    a.slideClass +
                    "." +
                    a.slideBlankClass
                )
                .remove(),
                i.removeAttr("data-swiper-slide-index");
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              var n = this;
              if (
                !(
                  n.support.touch ||
                  !n.params.simulateTouch ||
                  (n.params.watchOverflow && n.isLocked) ||
                  n.params.cssMode
                )
              ) {
                var a = n.el;
                (a.style.cursor = "move"),
                  (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                  (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                  (a.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.el.style.cursor = "");
            },
          },
          manipulation: {
            appendSlide: function (e) {
              var n = this,
                a = n.$wrapperEl,
                i = n.params;
              if (
                (i.loop && n.loopDestroy(),
                "object" == typeof e && "length" in e)
              )
                for (var t = 0; t < e.length; t += 1) e[t] && a.append(e[t]);
              else a.append(e);
              i.loop && n.loopCreate(),
                (i.observer && n.support.observer) || n.update();
            },
            prependSlide: function (e) {
              var n = this,
                a = n.params,
                i = n.$wrapperEl,
                t = n.activeIndex;
              a.loop && n.loopDestroy();
              var l = t + 1;
              if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) e[o] && i.prepend(e[o]);
                l = t + e.length;
              } else i.prepend(e);
              a.loop && n.loopCreate(),
                (a.observer && n.support.observer) || n.update(),
                n.slideTo(l, 0, !1);
            },
            addSlide: function (e, n) {
              var a = this,
                i = a.$wrapperEl,
                t = a.params,
                l = a.activeIndex;
              t.loop &&
                ((l -= a.loopedSlides),
                a.loopDestroy(),
                (a.slides = i.children("." + t.slideClass)));
              var o = a.slides.length;
              if (e <= 0) a.prependSlide(n);
              else if (e >= o) a.appendSlide(n);
              else {
                for (
                  var s = l > e ? l + 1 : l, c = [], r = o - 1;
                  r >= e;
                  r -= 1
                ) {
                  var g = a.slides.eq(r);
                  g.remove(), c.unshift(g);
                }
                if ("object" == typeof n && "length" in n) {
                  for (var k = 0; k < n.length; k += 1) n[k] && i.append(n[k]);
                  s = l > e ? l + n.length : l;
                } else i.append(n);
                for (var w = 0; w < c.length; w += 1) i.append(c[w]);
                t.loop && a.loopCreate(),
                  (t.observer && a.support.observer) || a.update(),
                  t.loop
                    ? a.slideTo(s + a.loopedSlides, 0, !1)
                    : a.slideTo(s, 0, !1);
              }
            },
            removeSlide: function (e) {
              var n = this,
                a = n.params,
                i = n.$wrapperEl,
                t = n.activeIndex;
              a.loop &&
                ((t -= n.loopedSlides),
                n.loopDestroy(),
                (n.slides = i.children("." + a.slideClass)));
              var l,
                o = t;
              if ("object" == typeof e && "length" in e) {
                for (var s = 0; s < e.length; s += 1)
                  (l = e[s]),
                    n.slides[l] && n.slides.eq(l).remove(),
                    l < o && (o -= 1);
                o = Math.max(o, 0);
              } else
                (l = e),
                  n.slides[l] && n.slides.eq(l).remove(),
                  l < o && (o -= 1),
                  (o = Math.max(o, 0));
              a.loop && n.loopCreate(),
                (a.observer && n.support.observer) || n.update(),
                a.loop
                  ? n.slideTo(o + n.loopedSlides, 0, !1)
                  : n.slideTo(o, 0, !1);
            },
            removeAllSlides: function () {
              for (var e = [], n = 0; n < this.slides.length; n += 1) e.push(n);
              this.removeSlide(e);
            },
          },
          events: {
            attachEvents: function () {
              var e = this,
                n = f(),
                a = e.params,
                i = e.touchEvents,
                t = e.el,
                l = e.wrapperEl,
                o = e.device,
                s = e.support;
              (e.onTouchStart = ae.bind(e)),
                (e.onTouchMove = ie.bind(e)),
                (e.onTouchEnd = te.bind(e)),
                a.cssMode && (e.onScroll = se.bind(e)),
                (e.onClick = oe.bind(e));
              var c = !!a.nested;
              if (!s.touch && s.pointerEvents)
                t.addEventListener(i.start, e.onTouchStart, !1),
                  n.addEventListener(i.move, e.onTouchMove, c),
                  n.addEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (s.touch) {
                  var r = !(
                    "touchstart" !== i.start ||
                    !s.passiveListener ||
                    !a.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  t.addEventListener(i.start, e.onTouchStart, r),
                    t.addEventListener(
                      i.move,
                      e.onTouchMove,
                      s.passiveListener ? { passive: !1, capture: c } : c
                    ),
                    t.addEventListener(i.end, e.onTouchEnd, r),
                    i.cancel && t.addEventListener(i.cancel, e.onTouchEnd, r),
                    ce || (n.addEventListener("touchstart", re), (ce = !0));
                }
                ((a.simulateTouch && !o.ios && !o.android) ||
                  (a.simulateTouch && !s.touch && o.ios)) &&
                  (t.addEventListener("mousedown", e.onTouchStart, !1),
                  n.addEventListener("mousemove", e.onTouchMove, c),
                  n.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (a.preventClicks || a.preventClicksPropagation) &&
                t.addEventListener("click", e.onClick, !0),
                a.cssMode && l.addEventListener("scroll", e.onScroll),
                a.updateOnWindowResize
                  ? e.on(
                      o.ios || o.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      le,
                      !0
                    )
                  : e.on("observerUpdate", le, !0);
            },
            detachEvents: function () {
              var e = this,
                n = f(),
                a = e.params,
                i = e.touchEvents,
                t = e.el,
                l = e.wrapperEl,
                o = e.device,
                s = e.support,
                c = !!a.nested;
              if (!s.touch && s.pointerEvents)
                t.removeEventListener(i.start, e.onTouchStart, !1),
                  n.removeEventListener(i.move, e.onTouchMove, c),
                  n.removeEventListener(i.end, e.onTouchEnd, !1);
              else {
                if (s.touch) {
                  var r = !(
                    "onTouchStart" !== i.start ||
                    !s.passiveListener ||
                    !a.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  t.removeEventListener(i.start, e.onTouchStart, r),
                    t.removeEventListener(i.move, e.onTouchMove, c),
                    t.removeEventListener(i.end, e.onTouchEnd, r),
                    i.cancel &&
                      t.removeEventListener(i.cancel, e.onTouchEnd, r);
                }
                ((a.simulateTouch && !o.ios && !o.android) ||
                  (a.simulateTouch && !s.touch && o.ios)) &&
                  (t.removeEventListener("mousedown", e.onTouchStart, !1),
                  n.removeEventListener("mousemove", e.onTouchMove, c),
                  n.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (a.preventClicks || a.preventClicksPropagation) &&
                t.removeEventListener("click", e.onClick, !0),
                a.cssMode && l.removeEventListener("scroll", e.onScroll),
                e.off(
                  o.ios || o.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  le
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              var e = this,
                n = e.activeIndex,
                a = e.initialized,
                i = e.loopedSlides,
                t = void 0 === i ? 0 : i,
                l = e.params,
                o = e.$el,
                s = l.breakpoints;
              if (s && (!s || 0 !== Object.keys(s).length)) {
                var c = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
                if (c && e.currentBreakpoint !== c) {
                  var r = c in s ? s[c] : void 0;
                  r &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach(function (e) {
                      var n = r[e];
                      void 0 !== n &&
                        (r[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== n && "auto" !== n)
                            ? "slidesPerView" === e
                              ? parseFloat(n)
                              : parseInt(n, 10)
                            : "auto");
                    });
                  var g = r || e.originalParams,
                    k = l.slidesPerColumn > 1,
                    w = g.slidesPerColumn > 1,
                    d = l.enabled;
                  k && !w
                    ? (o.removeClass(
                        l.containerModifierClass +
                          "multirow " +
                          l.containerModifierClass +
                          "multirow-column"
                      ),
                      e.emitContainerClasses())
                    : !k &&
                      w &&
                      (o.addClass(l.containerModifierClass + "multirow"),
                      ((g.slidesPerColumnFill &&
                        "column" === g.slidesPerColumnFill) ||
                        (!g.slidesPerColumnFill &&
                          "column" === l.slidesPerColumnFill)) &&
                        o.addClass(
                          l.containerModifierClass + "multirow-column"
                        ),
                      e.emitContainerClasses());
                  var h = g.direction && g.direction !== l.direction,
                    m = l.loop && (g.slidesPerView !== l.slidesPerView || h);
                  h && a && e.changeDirection(), V(e.params, g);
                  var u = e.params.enabled;
                  V(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                    d && !u ? e.disable() : !d && u && e.enable(),
                    (e.currentBreakpoint = c),
                    e.emit("_beforeBreakpoint", g),
                    m &&
                      a &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(n - t + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", g);
                }
              }
            },
            getBreakpoint: function (e, n, a) {
              if (
                (void 0 === n && (n = "window"), e && ("container" !== n || a))
              ) {
                var i = !1,
                  t = b(),
                  l = "window" === n ? t.innerHeight : a.clientHeight,
                  o = Object.keys(e).map(function (e) {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                      var n = parseFloat(e.substr(1));
                      return { value: l * n, point: e };
                    }
                    return { value: e, point: e };
                  });
                o.sort(function (e, n) {
                  return parseInt(e.value, 10) - parseInt(n.value, 10);
                });
                for (var s = 0; s < o.length; s += 1) {
                  var c = o[s],
                    r = c.point,
                    g = c.value;
                  "window" === n
                    ? t.matchMedia("(min-width: " + g + "px)").matches &&
                      (i = r)
                    : g <= a.clientWidth && (i = r);
                }
                return i || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                n = e.params,
                a = e.isLocked,
                i =
                  e.slides.length > 0 &&
                  n.slidesOffsetBefore +
                    n.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              n.slidesOffsetBefore && n.slidesOffsetAfter && i
                ? (e.isLocked = i <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                a &&
                  a !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation && e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              var e,
                n,
                a,
                i = this,
                t = i.classNames,
                l = i.params,
                o = i.rtl,
                s = i.$el,
                c = i.device,
                r = i.support,
                g =
                  ((e = [
                    "initialized",
                    l.direction,
                    { "pointer-events": r.pointerEvents && !r.touch },
                    { "free-mode": l.freeMode },
                    { autoheight: l.autoHeight },
                    { rtl: o },
                    { multirow: l.slidesPerColumn > 1 },
                    {
                      "multirow-column":
                        l.slidesPerColumn > 1 &&
                        "column" === l.slidesPerColumnFill,
                    },
                    { android: c.android },
                    { ios: c.ios },
                    { "css-mode": l.cssMode },
                  ]),
                  (n = l.containerModifierClass),
                  (a = []),
                  e.forEach(function (e) {
                    "object" == typeof e
                      ? Object.keys(e).forEach(function (i) {
                          e[i] && a.push(n + i);
                        })
                      : "string" == typeof e && a.push(n + e);
                  }),
                  a);
              t.push.apply(t, g),
                s.addClass([].concat(t).join(" ")),
                i.emitContainerClasses();
            },
            removeClasses: function () {
              var e = this,
                n = e.$el,
                a = e.classNames;
              n.removeClass(a.join(" ")), e.emitContainerClasses();
            },
          },
          images: {
            loadImage: function (e, n, a, i, t, l) {
              var o,
                s = b();
              function c() {
                l && l();
              }
              D(e).parent("picture")[0] || (e.complete && t)
                ? c()
                : n
                ? (((o = new s.Image()).onload = c),
                  (o.onerror = c),
                  i && (o.sizes = i),
                  a && (o.srcset = a),
                  n && (o.src = n))
                : c();
            },
            preloadImages: function () {
              var e = this;
              function n() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                var i = e.imagesToLoad[a];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  n
                );
              }
            },
          },
        },
        de = {},
        he = (function () {
          function e() {
            for (
              var n, a, i = arguments.length, t = new Array(i), l = 0;
              l < i;
              l++
            )
              t[l] = arguments[l];
            if (
              (1 === t.length &&
              t[0].constructor &&
              "Object" === Object.prototype.toString.call(t[0]).slice(8, -1)
                ? (a = t[0])
                : ((n = t[0]), (a = t[1])),
              a || (a = {}),
              (a = V({}, a)),
              n && !a.el && (a.el = n),
              a.el && D(a.el).length > 1)
            ) {
              var o = [];
              return (
                D(a.el).each(function (n) {
                  var i = V({}, a, { el: n });
                  o.push(new e(i));
                }),
                o
              );
            }
            var s = this;
            (s.__swiper__ = !0),
              (s.support = Y()),
              (s.device = W({ userAgent: a.userAgent })),
              (s.browser = _()),
              (s.eventsListeners = {}),
              (s.eventsAnyListeners = []),
              void 0 === s.modules && (s.modules = {}),
              Object.keys(s.modules).forEach(function (e) {
                var n = s.modules[e];
                if (n.params) {
                  var i = Object.keys(n.params)[0],
                    t = n.params[i];
                  if ("object" != typeof t || null === t) return;
                  if (
                    (["navigation", "pagination", "scrollbar"].indexOf(i) >=
                      0 &&
                      !0 === a[i] &&
                      (a[i] = { auto: !0 }),
                    !(i in a) || !("enabled" in t))
                  )
                    return;
                  !0 === a[i] && (a[i] = { enabled: !0 }),
                    "object" != typeof a[i] ||
                      "enabled" in a[i] ||
                      (a[i].enabled = !0),
                    a[i] || (a[i] = { enabled: !1 });
                }
              });
            var c,
              r,
              g = V({}, ge);
            return (
              s.useParams(g),
              (s.params = V({}, g, de, a)),
              (s.originalParams = V({}, s.params)),
              (s.passedParams = V({}, a)),
              s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach(function (e) {
                  s.on(e, s.params.on[e]);
                }),
              s.params && s.params.onAny && s.onAny(s.params.onAny),
              (s.$ = D),
              V(s, {
                enabled: s.params.enabled,
                el: n,
                classNames: [],
                slides: D(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === s.params.direction;
                },
                isVertical: function () {
                  return "vertical" === s.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents:
                  ((c = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (r = ["mousedown", "mousemove", "mouseup"]),
                  s.support.pointerEvents &&
                    (r = ["pointerdown", "pointermove", "pointerup"]),
                  (s.touchEventsTouch = {
                    start: c[0],
                    move: c[1],
                    end: c[2],
                    cancel: c[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: r[0],
                    move: r[1],
                    end: r[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: s.params.focusableElements,
                  lastClickTime: R(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.useModules(),
              s.emit("_swiper"),
              s.params.init && s.init(),
              s
            );
          }
          var n,
            a,
            i,
            t = e.prototype;
          return (
            (t.enable = function () {
              var e = this;
              e.enabled ||
                ((e.enabled = !0),
                e.params.grabCursor && e.setGrabCursor(),
                e.emit("enable"));
            }),
            (t.disable = function () {
              var e = this;
              e.enabled &&
                ((e.enabled = !1),
                e.params.grabCursor && e.unsetGrabCursor(),
                e.emit("disable"));
            }),
            (t.setProgress = function (e, n) {
              var a = this;
              e = Math.min(Math.max(e, 0), 1);
              var i = a.minTranslate(),
                t = (a.maxTranslate() - i) * e + i;
              a.translateTo(t, void 0 === n ? 0 : n),
                a.updateActiveIndex(),
                a.updateSlidesClasses();
            }),
            (t.emitContainerClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var n = e.el.className.split(" ").filter(function (n) {
                  return (
                    0 === n.indexOf("swiper-container") ||
                    0 === n.indexOf(e.params.containerModifierClass)
                  );
                });
                e.emit("_containerClasses", n.join(" "));
              }
            }),
            (t.getSlideClasses = function (e) {
              var n = this;
              return e.className
                .split(" ")
                .filter(function (e) {
                  return (
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(n.params.slideClass)
                  );
                })
                .join(" ");
            }),
            (t.emitSlidesClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var n = [];
                e.slides.each(function (a) {
                  var i = e.getSlideClasses(a);
                  n.push({ slideEl: a, classNames: i }),
                    e.emit("_slideClass", a, i);
                }),
                  e.emit("_slideClasses", n);
              }
            }),
            (t.slidesPerViewDynamic = function () {
              var e = this,
                n = e.params,
                a = e.slides,
                i = e.slidesGrid,
                t = e.size,
                l = e.activeIndex,
                o = 1;
              if (n.centeredSlides) {
                for (
                  var s, c = a[l].swiperSlideSize, r = l + 1;
                  r < a.length;
                  r += 1
                )
                  a[r] &&
                    !s &&
                    ((o += 1), (c += a[r].swiperSlideSize) > t && (s = !0));
                for (var g = l - 1; g >= 0; g -= 1)
                  a[g] &&
                    !s &&
                    ((o += 1), (c += a[g].swiperSlideSize) > t && (s = !0));
              } else
                for (var k = l + 1; k < a.length; k += 1)
                  i[k] - i[l] < t && (o += 1);
              return o;
            }),
            (t.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var n = e.snapGrid,
                  a = e.params;
                a.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (i(), e.params.autoHeight && e.updateAutoHeight())
                    : (("auto" === e.params.slidesPerView ||
                        e.params.slidesPerView > 1) &&
                      e.isEnd &&
                      !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
                  a.watchOverflow && n !== e.snapGrid && e.checkOverflow(),
                  e.emit("update");
              }
              function i() {
                var n = e.rtlTranslate ? -1 * e.translate : e.translate,
                  a = Math.min(Math.max(n, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
            }),
            (t.changeDirection = function (e, n) {
              void 0 === n && (n = !0);
              var a = this,
                i = a.params.direction;
              return (
                e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i ||
                  ("horizontal" !== e && "vertical" !== e) ||
                  (a.$el
                    .removeClass("" + a.params.containerModifierClass + i)
                    .addClass("" + a.params.containerModifierClass + e),
                  a.emitContainerClasses(),
                  (a.params.direction = e),
                  a.slides.each(function (n) {
                    "vertical" === e
                      ? (n.style.width = "")
                      : (n.style.height = "");
                  }),
                  a.emit("changeDirection"),
                  n && a.update()),
                a
              );
            }),
            (t.mount = function (e) {
              var n = this;
              if (n.mounted) return !0;
              var a = D(e || n.params.el);
              if (!(e = a[0])) return !1;
              e.swiper = n;
              var i = function () {
                  return (
                    "." +
                    (n.params.wrapperClass || "").trim().split(" ").join(".")
                  );
                },
                t = (function () {
                  if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    var n = D(e.shadowRoot.querySelector(i()));
                    return (
                      (n.children = function (e) {
                        return a.children(e);
                      }),
                      n
                    );
                  }
                  return a.children(i());
                })();
              if (0 === t.length && n.params.createElements) {
                var l = f().createElement("div");
                (t = D(l)),
                  (l.className = n.params.wrapperClass),
                  a.append(l),
                  a.children("." + n.params.slideClass).each(function (e) {
                    t.append(e);
                  });
              }
              return (
                V(n, {
                  $el: a,
                  el: e,
                  $wrapperEl: t,
                  wrapperEl: t[0],
                  mounted: !0,
                  rtl:
                    "rtl" === e.dir.toLowerCase() ||
                    "rtl" === a.css("direction"),
                  rtlTranslate:
                    "horizontal" === n.params.direction &&
                    ("rtl" === e.dir.toLowerCase() ||
                      "rtl" === a.css("direction")),
                  wrongRTL: "-webkit-box" === t.css("display"),
                }),
                !0
              );
            }),
            (t.init = function (e) {
              var n = this;
              return (
                n.initialized ||
                  !1 === n.mount(e) ||
                  (n.emit("beforeInit"),
                  n.params.breakpoints && n.setBreakpoint(),
                  n.addClasses(),
                  n.params.loop && n.loopCreate(),
                  n.updateSize(),
                  n.updateSlides(),
                  n.params.watchOverflow && n.checkOverflow(),
                  n.params.grabCursor && n.enabled && n.setGrabCursor(),
                  n.params.preloadImages && n.preloadImages(),
                  n.params.loop
                    ? n.slideTo(
                        n.params.initialSlide + n.loopedSlides,
                        0,
                        n.params.runCallbacksOnInit,
                        !1,
                        !0
                      )
                    : n.slideTo(
                        n.params.initialSlide,
                        0,
                        n.params.runCallbacksOnInit,
                        !1,
                        !0
                      ),
                  n.attachEvents(),
                  (n.initialized = !0),
                  n.emit("init"),
                  n.emit("afterInit")),
                n
              );
            }),
            (t.destroy = function (e, n) {
              void 0 === e && (e = !0), void 0 === n && (n = !0);
              var a,
                i = this,
                t = i.params,
                l = i.$el,
                o = i.$wrapperEl,
                s = i.slides;
              return (
                void 0 === i.params ||
                  i.destroyed ||
                  (i.emit("beforeDestroy"),
                  (i.initialized = !1),
                  i.detachEvents(),
                  t.loop && i.loopDestroy(),
                  n &&
                    (i.removeClasses(),
                    l.removeAttr("style"),
                    o.removeAttr("style"),
                    s &&
                      s.length &&
                      s
                        .removeClass(
                          [
                            t.slideVisibleClass,
                            t.slideActiveClass,
                            t.slideNextClass,
                            t.slidePrevClass,
                          ].join(" ")
                        )
                        .removeAttr("style")
                        .removeAttr("data-swiper-slide-index")),
                  i.emit("destroy"),
                  Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e);
                  }),
                  !1 !== e &&
                    ((i.$el[0].swiper = null),
                    (a = i),
                    Object.keys(a).forEach(function (e) {
                      try {
                        a[e] = null;
                      } catch (e) {}
                      try {
                        delete a[e];
                      } catch (e) {}
                    })),
                  (i.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function (e) {
              V(de, e);
            }),
            (e.installModule = function (n) {
              e.prototype.modules || (e.prototype.modules = {});
              var a =
                n.name || Object.keys(e.prototype.modules).length + "_" + R();
              e.prototype.modules[a] = n;
            }),
            (e.use = function (n) {
              return Array.isArray(n)
                ? (n.forEach(function (n) {
                    return e.installModule(n);
                  }),
                  e)
                : (e.installModule(n), e);
            }),
            (n = e),
            (i = [
              {
                key: "extendedDefaults",
                get: function () {
                  return de;
                },
              },
              {
                key: "defaults",
                get: function () {
                  return ge;
                },
              },
            ]),
            (a = null) && ke(n.prototype, a),
            i && ke(n, i),
            e
          );
        })();
      Object.keys(we).forEach(function (e) {
        Object.keys(we[e]).forEach(function (n) {
          he.prototype[n] = we[e][n];
        });
      }),
        he.use([$, J]);
      const me = he;
      function ue() {
        return (ue =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var pe = {
        toggleEl: function (e, n) {
          e[n ? "addClass" : "removeClass"](
            this.params.navigation.disabledClass
          ),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n);
        },
        update: function () {
          var e = this,
            n = e.params.navigation,
            a = e.navigation.toggleEl;
          if (!e.params.loop) {
            var i = e.navigation,
              t = i.$nextEl,
              l = i.$prevEl;
            l &&
              l.length > 0 &&
              (e.isBeginning ? a(l, !0) : a(l, !1),
              e.params.watchOverflow &&
                e.enabled &&
                l[e.isLocked ? "addClass" : "removeClass"](n.lockClass)),
              t &&
                t.length > 0 &&
                (e.isEnd ? a(t, !0) : a(t, !1),
                e.params.watchOverflow &&
                  e.enabled &&
                  t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
          }
        },
        onPrevClick: function (e) {
          var n = this;
          e.preventDefault(),
            (n.isBeginning && !n.params.loop) || n.slidePrev();
        },
        onNextClick: function (e) {
          var n = this;
          e.preventDefault(), (n.isEnd && !n.params.loop) || n.slideNext();
        },
        init: function () {
          var e,
            n,
            a = this,
            i = a.params.navigation;
          ((a.params.navigation = j(
            a.$el,
            a.params.navigation,
            a.params.createElements,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          i.nextEl || i.prevEl) &&
            (i.nextEl &&
              ((e = D(i.nextEl)),
              a.params.uniqueNavElements &&
                "string" == typeof i.nextEl &&
                e.length > 1 &&
                1 === a.$el.find(i.nextEl).length &&
                (e = a.$el.find(i.nextEl))),
            i.prevEl &&
              ((n = D(i.prevEl)),
              a.params.uniqueNavElements &&
                "string" == typeof i.prevEl &&
                n.length > 1 &&
                1 === a.$el.find(i.prevEl).length &&
                (n = a.$el.find(i.prevEl))),
            e && e.length > 0 && e.on("click", a.navigation.onNextClick),
            n && n.length > 0 && n.on("click", a.navigation.onPrevClick),
            V(a.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: n,
              prevEl: n && n[0],
            }),
            a.enabled ||
              (e && e.addClass(i.lockClass), n && n.addClass(i.lockClass)));
        },
        destroy: function () {
          var e = this,
            n = e.navigation,
            a = n.$nextEl,
            i = n.$prevEl;
          a &&
            a.length &&
            (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", e.navigation.onPrevClick),
              i.removeClass(e.params.navigation.disabledClass));
        },
      };
      const xe = {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          H(this, { navigation: ue({}, pe) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          "enable disable": function (e) {
            var n = e.navigation,
              a = n.$nextEl,
              i = n.$prevEl;
            a &&
              a[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              i &&
                i[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          },
          click: function (e, n) {
            var a = e.navigation,
              i = a.$nextEl,
              t = a.$prevEl,
              l = n.target;
            if (e.params.navigation.hideOnClick && !D(l).is(t) && !D(l).is(i)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === l || e.pagination.el.contains(l))
              )
                return;
              var o;
              i
                ? (o = i.hasClass(e.params.navigation.hiddenClass))
                : t && (o = t.hasClass(e.params.navigation.hiddenClass)),
                !0 === o ? e.emit("navigationShow") : e.emit("navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                t && t.toggleClass(e.params.navigation.hiddenClass);
            }
          },
        },
      };
      function fe() {
        return (fe =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ve = {
        update: function () {
          var e = this,
            n = e.rtl,
            a = e.params.pagination;
          if (
            a.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var i,
              t =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              l = e.pagination.$el,
              o = e.params.loop
                ? Math.ceil((t - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((i = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )) >
                    t - 1 - 2 * e.loopedSlides && (i -= t - 2 * e.loopedSlides),
                  i > o - 1 && (i -= o),
                  i < 0 && "bullets" !== e.params.paginationType && (i = o + i))
                : (i =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === a.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              var s,
                c,
                r,
                g = e.pagination.bullets;
              if (
                (a.dynamicBullets &&
                  ((e.pagination.bulletSize = g
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  l.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                  ),
                  a.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += i - e.previousIndex),
                    e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          a.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (s = i - e.pagination.dynamicBulletIndex),
                  (r =
                    ((c = s + (Math.min(g.length, a.dynamicMainBullets) - 1)) +
                      s) /
                    2)),
                g.removeClass(
                  a.bulletActiveClass +
                    " " +
                    a.bulletActiveClass +
                    "-next " +
                    a.bulletActiveClass +
                    "-next-next " +
                    a.bulletActiveClass +
                    "-prev " +
                    a.bulletActiveClass +
                    "-prev-prev " +
                    a.bulletActiveClass +
                    "-main"
                ),
                l.length > 1)
              )
                g.each(function (e) {
                  var n = D(e),
                    t = n.index();
                  t === i && n.addClass(a.bulletActiveClass),
                    a.dynamicBullets &&
                      (t >= s &&
                        t <= c &&
                        n.addClass(a.bulletActiveClass + "-main"),
                      t === s &&
                        n
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev-prev"),
                      t === c &&
                        n
                          .next()
                          .addClass(a.bulletActiveClass + "-next")
                          .next()
                          .addClass(a.bulletActiveClass + "-next-next"));
                });
              else {
                var k = g.eq(i),
                  w = k.index();
                if ((k.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                  for (var d = g.eq(s), h = g.eq(c), m = s; m <= c; m += 1)
                    g.eq(m).addClass(a.bulletActiveClass + "-main");
                  if (e.params.loop)
                    if (w >= g.length - a.dynamicMainBullets) {
                      for (var u = a.dynamicMainBullets; u >= 0; u -= 1)
                        g.eq(g.length - u).addClass(
                          a.bulletActiveClass + "-main"
                        );
                      g.eq(g.length - a.dynamicMainBullets - 1).addClass(
                        a.bulletActiveClass + "-prev"
                      );
                    } else
                      d
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                        h
                          .next()
                          .addClass(a.bulletActiveClass + "-next")
                          .next()
                          .addClass(a.bulletActiveClass + "-next-next");
                  else
                    d
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      h
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                }
              }
              if (a.dynamicBullets) {
                var p = Math.min(g.length, a.dynamicMainBullets + 4),
                  x =
                    (e.pagination.bulletSize * p - e.pagination.bulletSize) /
                      2 -
                    r * e.pagination.bulletSize,
                  f = n ? "right" : "left";
                g.css(e.isHorizontal() ? f : "top", x + "px");
              }
            }
            if (
              ("fraction" === a.type &&
                (l.find(X(a.currentClass)).text(a.formatFractionCurrent(i + 1)),
                l.find(X(a.totalClass)).text(a.formatFractionTotal(o))),
              "progressbar" === a.type)
            ) {
              var v;
              v = a.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              var b = (i + 1) / o,
                y = 1,
                S = 1;
              "horizontal" === v ? (y = b) : (S = b),
                l
                  .find(X(a.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX(" + y + ") scaleY(" + S + ")"
                  )
                  .transition(e.params.speed);
            }
            "custom" === a.type && a.renderCustom
              ? (l.html(a.renderCustom(e, i + 1, o)),
                e.emit("paginationRender", l[0]))
              : e.emit("paginationUpdate", l[0]),
              e.params.watchOverflow &&
                e.enabled &&
                l[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
          }
        },
        render: function () {
          var e = this,
            n = e.params.pagination;
          if (
            n.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var a =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              i = e.pagination.$el,
              t = "";
            if ("bullets" === n.type) {
              var l = e.params.loop
                ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              e.params.freeMode && !e.params.loop && l > a && (l = a);
              for (var o = 0; o < l; o += 1)
                n.renderBullet
                  ? (t += n.renderBullet.call(e, o, n.bulletClass))
                  : (t +=
                      "<" +
                      n.bulletElement +
                      ' class="' +
                      n.bulletClass +
                      '"></' +
                      n.bulletElement +
                      ">");
              i.html(t), (e.pagination.bullets = i.find(X(n.bulletClass)));
            }
            "fraction" === n.type &&
              ((t = n.renderFraction
                ? n.renderFraction.call(e, n.currentClass, n.totalClass)
                : '<span class="' +
                  n.currentClass +
                  '"></span> / <span class="' +
                  n.totalClass +
                  '"></span>'),
              i.html(t)),
              "progressbar" === n.type &&
                ((t = n.renderProgressbar
                  ? n.renderProgressbar.call(e, n.progressbarFillClass)
                  : '<span class="' + n.progressbarFillClass + '"></span>'),
                i.html(t)),
              "custom" !== n.type &&
                e.emit("paginationRender", e.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this;
          e.params.pagination = j(
            e.$el,
            e.params.pagination,
            e.params.createElements,
            { el: "swiper-pagination" }
          );
          var n = e.params.pagination;
          if (n.el) {
            var a = D(n.el);
            0 !== a.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof n.el &&
                a.length > 1 &&
                (a = e.$el.find(n.el)),
              "bullets" === n.type &&
                n.clickable &&
                a.addClass(n.clickableClass),
              a.addClass(n.modifierClass + n.type),
              "bullets" === n.type &&
                n.dynamicBullets &&
                (a.addClass("" + n.modifierClass + n.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
                n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)),
              "progressbar" === n.type &&
                n.progressbarOpposite &&
                a.addClass(n.progressbarOppositeClass),
              n.clickable &&
                a.on("click", X(n.bulletClass), function (n) {
                  n.preventDefault();
                  var a = D(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }),
              V(e.pagination, { $el: a, el: a[0] }),
              e.enabled || a.addClass(n.lockClass));
          }
        },
        destroy: function () {
          var e = this,
            n = e.params.pagination;
          if (
            n.el &&
            e.pagination.el &&
            e.pagination.$el &&
            0 !== e.pagination.$el.length
          ) {
            var a = e.pagination.$el;
            a.removeClass(n.hiddenClass),
              a.removeClass(n.modifierClass + n.type),
              e.pagination.bullets &&
                e.pagination.bullets.removeClass(n.bulletActiveClass),
              n.clickable && a.off("click", X(n.bulletClass));
          }
        },
      };
      const be = {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          H(this, { pagination: fe({ dynamicBulletIndex: 0 }, ve) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          "enable disable": function (e) {
            var n = e.pagination.$el;
            n &&
              n[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          },
          click: function (e, n) {
            var a = n.target;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !D(a).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return;
              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
            }
          },
        },
      };
      function ye() {
        return (ye =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Se = {
        loadInSlide: function (e, n) {
          void 0 === n && (n = !0);
          var a = this,
            i = a.params.lazy;
          if (void 0 !== e && 0 !== a.slides.length) {
            var t =
                a.virtual && a.params.virtual.enabled
                  ? a.$wrapperEl.children(
                      "." +
                        a.params.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]'
                    )
                  : a.slides.eq(e),
              l = t.find(
                "." +
                  i.elementClass +
                  ":not(." +
                  i.loadedClass +
                  "):not(." +
                  i.loadingClass +
                  ")"
              );
            !t.hasClass(i.elementClass) ||
              t.hasClass(i.loadedClass) ||
              t.hasClass(i.loadingClass) ||
              l.push(t[0]),
              0 !== l.length &&
                l.each(function (e) {
                  var l = D(e);
                  l.addClass(i.loadingClass);
                  var o = l.attr("data-background"),
                    s = l.attr("data-src"),
                    c = l.attr("data-srcset"),
                    r = l.attr("data-sizes"),
                    g = l.parent("picture");
                  a.loadImage(l[0], s || o, c, r, !1, function () {
                    if (null != a && a && (!a || a.params) && !a.destroyed) {
                      if (
                        (o
                          ? (l.css("background-image", 'url("' + o + '")'),
                            l.removeAttr("data-background"))
                          : (c &&
                              (l.attr("srcset", c),
                              l.removeAttr("data-srcset")),
                            r &&
                              (l.attr("sizes", r), l.removeAttr("data-sizes")),
                            g.length &&
                              g.children("source").each(function (e) {
                                var n = D(e);
                                n.attr("data-srcset") &&
                                  (n.attr("srcset", n.attr("data-srcset")),
                                  n.removeAttr("data-srcset"));
                              }),
                            s && (l.attr("src", s), l.removeAttr("data-src"))),
                        l.addClass(i.loadedClass).removeClass(i.loadingClass),
                        t.find("." + i.preloaderClass).remove(),
                        a.params.loop && n)
                      ) {
                        var e = t.attr("data-swiper-slide-index");
                        if (t.hasClass(a.params.slideDuplicateClass)) {
                          var k = a.$wrapperEl.children(
                            '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              a.params.slideDuplicateClass +
                              ")"
                          );
                          a.lazy.loadInSlide(k.index(), !1);
                        } else {
                          var w = a.$wrapperEl.children(
                            "." +
                              a.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]'
                          );
                          a.lazy.loadInSlide(w.index(), !1);
                        }
                      }
                      a.emit("lazyImageReady", t[0], l[0]),
                        a.params.autoHeight && a.updateAutoHeight();
                    }
                  }),
                    a.emit("lazyImageLoad", t[0], l[0]);
                });
          }
        },
        load: function () {
          var e = this,
            n = e.$wrapperEl,
            a = e.params,
            i = e.slides,
            t = e.activeIndex,
            l = e.virtual && a.virtual.enabled,
            o = a.lazy,
            s = a.slidesPerView;
          function c(e) {
            if (l) {
              if (
                n.children(
                  "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
                ).length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function r(e) {
            return l ? D(e).attr("data-swiper-slide-index") : D(e).index();
          }
          if (
            ("auto" === s && (s = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            n.children("." + a.slideVisibleClass).each(function (n) {
              var a = l ? D(n).attr("data-swiper-slide-index") : D(n).index();
              e.lazy.loadInSlide(a);
            });
          else if (s > 1)
            for (var g = t; g < t + s; g += 1) c(g) && e.lazy.loadInSlide(g);
          else e.lazy.loadInSlide(t);
          if (o.loadPrevNext)
            if (s > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
              for (
                var k = o.loadPrevNextAmount,
                  w = s,
                  d = Math.min(t + w + Math.max(k, w), i.length),
                  h = Math.max(t - Math.max(w, k), 0),
                  m = t + s;
                m < d;
                m += 1
              )
                c(m) && e.lazy.loadInSlide(m);
              for (var u = h; u < t; u += 1) c(u) && e.lazy.loadInSlide(u);
            } else {
              var p = n.children("." + a.slideNextClass);
              p.length > 0 && e.lazy.loadInSlide(r(p));
              var x = n.children("." + a.slidePrevClass);
              x.length > 0 && e.lazy.loadInSlide(r(x));
            }
        },
        checkInViewOnLoad: function () {
          var e = b(),
            n = this;
          if (n && !n.destroyed) {
            var a = n.params.lazy.scrollingElement
                ? D(n.params.lazy.scrollingElement)
                : D(e),
              i = a[0] === e,
              t = i ? e.innerWidth : a[0].offsetWidth,
              l = i ? e.innerHeight : a[0].offsetHeight,
              o = n.$el.offset(),
              s = !1;
            n.rtlTranslate && (o.left -= n.$el[0].scrollLeft);
            for (
              var c = [
                  [o.left, o.top],
                  [o.left + n.width, o.top],
                  [o.left, o.top + n.height],
                  [o.left + n.width, o.top + n.height],
                ],
                r = 0;
              r < c.length;
              r += 1
            ) {
              var g = c[r];
              if (g[0] >= 0 && g[0] <= t && g[1] >= 0 && g[1] <= l) {
                if (0 === g[0] && 0 === g[1]) continue;
                s = !0;
              }
            }
            var k = !(
              "touchstart" !== n.touchEvents.start ||
              !n.support.passiveListener ||
              !n.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            s
              ? (n.lazy.load(), a.off("scroll", n.lazy.checkInViewOnLoad, k))
              : n.lazy.scrollHandlerAttached ||
                ((n.lazy.scrollHandlerAttached = !0),
                a.on("scroll", n.lazy.checkInViewOnLoad, k));
          }
        },
      };
      const Ce = {
        name: "lazy",
        params: {
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          H(this, { lazy: ye({ initialImageLoaded: !1 }, Se) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              (e.params.lazy.checkInView
                ? e.lazy.checkInViewOnLoad()
                : e.lazy.load());
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            var n = e.params,
              a = n.lazy,
              i = n.cssMode,
              t = n.watchSlidesVisibility,
              l = n.watchSlidesProgress,
              o = n.touchReleaseOnEdges,
              s = n.resistanceRatio;
            a.enabled && (i || ((t || l) && (o || 0 === s))) && e.lazy.load();
          },
        },
      };
      a(5067);
      me.use([xe, be, Ce]),
        document.querySelectorAll(".slider-style").forEach((e) => {
          new me(e.querySelector(".swiper-container"), {
            updateOnWindowResize: !0,
            touchStartPreventDefault: !1,
            observer: !0,
            observeParents: !0,
            loop: !1,
            slidesPerView: 2,
            spaceBetween: 32,
            preloadImages: !1,
            lazy: { loadPrevNext: !1 },
            pagination: {
              el: e.querySelector(".swiper-pagination"),
              clickable: !0,
            },
            navigation: {
              nextEl: e.querySelector(".swiper-button-next"),
              prevEl: e.querySelector(".swiper-button-prev"),
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            },
          });
        });
      const Te = document.querySelector(".team-section__slider");
      Te &&
        (me.use([xe, be, Ce]),
        new me(Te.querySelector(".swiper-container"), {
          updateOnWindowResize: !0,
          loop: !0,
          slidesPerView: 2,
          spaceBetween: 32,
          observer: !0,
          observeParents: !0,
          preloadImages: !1,
          lazy: { loadPrevNext: !1 },
          pagination: {
            el: Te.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          navigation: {
            nextEl: Te.querySelector(".swiper-button-next"),
            prevEl: Te.querySelector(".swiper-button-prev"),
          },
          breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          },
        }));
      var Ae = a(6808),
        Ee = a.n(Ae);
      const Pe = document.querySelector("#newsletter-popup");
      if (Pe) {
        let e = Pe.querySelector(".newsletter-popup__close");
        Pe.querySelector(".newsletter-popup__start"),
          Pe.querySelector(".newsletter-popup__finish");
        if (!Ee().get("newsletter")) {
          let e =
            document.querySelector("#newsletter-trigger").offsetTop -
            window.innerHeight / 2;
          window.addEventListener("scroll", () => {
            window.scrollY > e && Pe.classList.add("fadeIn");
          });
        }
        function n() {
          Ee().set("newsletter", "isClosed", { expires: 30 }),
            Pe.classList.add("close"),
            console.log("closeNewsletterSubscribe");
        }
        e.addEventListener("click", () => {
          n();
        });
      }
      me.use([xe, be]);
      const Oe = e();
      let Me = document.querySelector(".banner-os");
      Oe &&
        Me &&
        Me.setAttribute(
          "href",
          "https://apps.apple.com/us/app/atomic-wallet/id1478257827"
        );
      let Le = document.querySelector(".latest-section__banners");
      window.matchMedia("(max-width: 1000px)").matches &&
        Le &&
        new me(Le.querySelector(".swiper-container"), {
          updateOnWindowResize: !0,
          observer: !0,
          observeParents: !0,
          slidesPerView: 2,
          slidesPerColumn: 2,
          preloadImages: !1,
          pagination: {
            el: Le.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          navigation: {
            nextEl: Le.querySelector(".swiper-button-next"),
            prevEl: Le.querySelector(".swiper-button-prev"),
          },
          breakpoints: {
            740: { slidesPerView: 2 },
            320: { slidesPerView: 1, centeredSlides: !0 },
          },
        });
      const Ne = JSON.parse(
          '{"10":{"name":"Digixgold","icon":"icon-dgx-10","links":{"wallet":"digixgold-wallet","staking":"","exchange":""}},"aave":{"name":"Aave","icon":"icon-aave","links":{"wallet":"","staking":"","exchange":"btc-to-aave-exchange"}},"busd":{"name":"Binance USD","icon":"icon-busd","links":{"wallet":"binance-usd-wallet","staking":"","exchange":"btc-to-busd-exchange"}},"celr":{"name":"Celer","icon":"icon-celr","links":{"wallet":"","staking":"","exchange":""}},"cmdx":{"name":"Comdex","icon":"icon-cmdx","links":{"wallet":"","staking":"comdex-staking","exchange":""}},"near":{"name":"Near","icon":"icon-near","links":{"wallet":"near-protocol-wallet","staking":"near-staking","exchange":""}},"coti":{"name":"COTI","icon":"icon-coti","links":{"wallet":"coti-wallet","staking":"","exchange":""}},"aca":{"name":"Acala Token","icon":"icon-aca","links":{"wallet":"","staking":"","exchange":""}},"anc":{"name":"Anchor Protocol","icon":"icon-anc","links":{"wallet":"","staking":"","exchange":""}},"ar":{"name":"Arweave","icon":"icon-ar","links":{"wallet":"","staking":"","exchange":""}},"ardr":{"name":"Ardor","icon":"icon-ardr","links":{"wallet":"","staking":"","exchange":""}},"asr":{"name":"AS Roma Fan Token","icon":"icon-asr","links":{"wallet":"","staking":"","exchange":""}},"astr":{"name":"Astar","icon":"icon-astr","links":{"wallet":"","staking":"","exchange":""}},"bdot":{"name":"Binance Wrapped DOT","icon":"icon-bdot","links":{"wallet":"","staking":"","exchange":""}},"beth":{"name":"Beacon ETH","icon":"icon-beth","links":{"wallet":"","staking":"","exchange":""}},"bnbdown":{"name":"BNBDOWN","icon":"icon-bnbdown","links":{"wallet":"","staking":"","exchange":""}},"bnbup":{"name":"BNBUP","icon":"icon-bnbup","links":{"wallet":"","staking":"","exchange":""}},"btcdown":{"name":"BTCDOWN","icon":"icon-btcdown","links":{"wallet":"","staking":"","exchange":""}},"btcup":{"name":"BTCUP","icon":"icon-btcup","links":{"wallet":"","staking":"","exchange":""}},"celo":{"name":"Celo","icon":"icon-celo","links":{"wallet":"","staking":"","exchange":""}},"cfx":{"name":"Conflux","icon":"icon-cfx","links":{"wallet":"","staking":"","exchange":""}},"cvp":{"name":"PowerPool","icon":"icon-cvp","links":{"wallet":"","staking":"","exchange":""}},"df":{"name":"dForce","icon":"icon-df","links":{"wallet":"","staking":"","exchange":""}},"del":{"name":"Decimal","icon":"icon-del","links":{"wallet":"","staking":"decimal-staking","exchange":""}},"dfi":{"name":"DiversiFi","icon":"icon-dfi","links":{"wallet":"","staking":"diversifi-staking","exchange":""}},"dvpn":{"name":"Sentinel","icon":"icon-dvpn","links":{"wallet":"","staking":"sentinel-staking","exchange":""}},"egld":{"name":"MultiversX","icon":"icon-egld","links":{"wallet":"multiversx-wallet","staking":"multiversx-egld-staking","exchange":""}},"fio":{"name":"FIO Protocol","icon":"icon-fio","links":{"wallet":"","staking":"","exchange":""}},"firo":{"name":"Firo","icon":"icon-firo","links":{"wallet":"","staking":"","exchange":""}},"flow":{"name":"Flow","icon":"icon-flow","links":{"wallet":"flow-wallet","staking":"","exchange":""}},"flux":{"name":"Flux","icon":"icon-flux","links":{"wallet":"","staking":"","exchange":""}},"hnt":{"name":"Helium","icon":"icon-hnt","links":{"wallet":"","staking":"","exchange":""}},"hive":{"name":"Hive","icon":"icon-hive","links":{"wallet":"","staking":"hive-staking","exchange":""}},"icp":{"name":"Internet Computer","icon":"icon-icp","links":{"wallet":"","staking":"","exchange":""}},"iotx":{"name":"IoTeX","icon":"icon-iotx","links":{"wallet":"","staking":"","exchange":""}},"kda":{"name":"Kadena","icon":"icon-kda","links":{"wallet":"","staking":"","exchange":""}},"klay":{"name":"Klaytn","icon":"icon-klay","links":{"wallet":"","staking":"","exchange":""}},"ksm":{"name":"Kusama","icon":"icon-ksm","links":{"wallet":"","staking":"","exchange":""}},"mdt":{"name":"Measurable Data Token","icon":"icon-mdt","links":{"wallet":"","staking":"","exchange":""}},"mir":{"name":"Mirror Protocol","icon":"icon-mir","links":{"wallet":"","staking":"","exchange":""}},"mob":{"name":"MobileCoin","icon":"icon-mob","links":{"wallet":"","staking":"","exchange":""}},"movr":{"name":"Moonriver","icon":"icon-movr","links":{"wallet":"","staking":"","exchange":""}},"multi":{"name":"Multichain","icon":"icon-multi","links":{"wallet":"","staking":"","exchange":""}},"nbs":{"name":"New BitShares","icon":"icon-nbs","links":{"wallet":"","staking":"","exchange":""}},"nrg":{"name":"Energi","icon":"icon-nrg","links":{"wallet":"","staking":"energi-staking","exchange":""}},"nebl":{"name":"Neblio","icon":"icon-nebl","links":{"wallet":"","staking":"","exchange":""}},"nkn":{"name":"NKN","icon":"icon-nkn","links":{"wallet":"","staking":"","exchange":""}},"og":{"name":"OG Fan Token","icon":"icon-og","links":{"wallet":"","staking":"","exchange":""}},"ooki":{"name":"Ooki Protocol","icon":"icon-ooki","links":{"wallet":"","staking":"","exchange":""}},"op":{"name":"Optimism","icon":"icon-op","links":{"wallet":"","staking":"","exchange":""}},"perl":{"name":"PERL.eco","icon":"icon-perl","links":{"wallet":"","staking":"","exchange":""}},"pdex":{"name":"Polkadex","icon":"icon-pdex","links":{"wallet":"","staking":"polkadex-staking","exchange":""}},"pha":{"name":"Phala Network","icon":"icon-pha","links":{"wallet":"","staking":"","exchange":""}},"phb":{"name":"Phoenix Global (new)","icon":"icon-phb","links":{"wallet":"","staking":"","exchange":""}},"pnt":{"name":"pNetwork","icon":"icon-pnt","links":{"wallet":"","staking":"","exchange":""}},"porto":{"name":"FC Porto Fan Token","icon":"icon-porto","links":{"wallet":"","staking":"","exchange":""}},"pros":{"name":"Prosper","icon":"icon-pros","links":{"wallet":"","staking":"","exchange":""}},"psg":{"name":"Paris Saint-Germain Fan Token","icon":"icon-psg","links":{"wallet":"","staking":"","exchange":""}},"qi":{"name":"BENQI","icon":"icon-qi","links":{"wallet":"","staking":"","exchange":""}},"qlc":{"name":"QLC Chain","icon":"icon-qlc","links":{"wallet":"","staking":"","exchange":""}},"quick":{"name":"QuickSwap","icon":"icon-quick","links":{"wallet":"","staking":"","exchange":""}},"rad":{"name":"Radicle","icon":"icon-rad","links":{"wallet":"","staking":"","exchange":""}},"reef":{"name":"Reef","icon":"icon-reef","links":{"wallet":"","staking":"","exchange":""}},"rei":{"name":"REI Network","icon":"icon-rei","links":{"wallet":"","staking":"","exchange":""}},"rif":{"name":"RSK Infrastructure Framework","icon":"icon-rif","links":{"wallet":"","staking":"","exchange":""}},"santos":{"name":"Santos FC Fan Token","icon":"icon-santos","links":{"wallet":"","staking":"","exchange":""}},"scrt":{"name":"Secret","icon":"icon-scrt","links":{"wallet":"","staking":"","exchange":""}},"srm":{"name":"Serum","icon":"icon-srm","links":{"wallet":"","staking":"","exchange":""}},"strax":{"name":"Stratis","icon":"icon-strax","links":{"wallet":"","staking":"","exchange":""}},"sxp":{"name":"SXP","icon":"icon-sxp","links":{"wallet":"","staking":"","exchange":""}},"tct":{"name":"TokenClub","icon":"icon-tct","links":{"wallet":"","staking":"","exchange":""}},"tfuel":{"name":"Theta Fuel","icon":"icon-tfuel","links":{"wallet":"","staking":"","exchange":""}},"trxdown":{"name":"TRXDOWN","icon":"icon-trxdown","links":{"wallet":"","staking":"","exchange":""}},"trxup":{"name":"TRXUP","icon":"icon-trxup","links":{"wallet":"","staking":"","exchange":""}},"uft":{"name":"UniLend","icon":"icon-uft","links":{"wallet":"","staking":"","exchange":""}},"ustc":{"name":"TerraClassicUSD","icon":"icon-ustc","links":{"wallet":"","staking":"","exchange":""}},"vite":{"name":"VITE","icon":"icon-vite","links":{"wallet":"","staking":"","exchange":""}},"voxel":{"name":"Voxies","icon":"icon-voxel","links":{"wallet":"","staking":"","exchange":""}},"wabi":{"name":"Wabi","icon":"icon-wabi","links":{"wallet":"","staking":"","exchange":""}},"wing":{"name":"Wing Finance","icon":"icon-wing","links":{"wallet":"","staking":"","exchange":""}},"xec":{"name":"eCash","icon":"icon-xec","links":{"wallet":"","staking":"","exchange":""}},"xrpdown":{"name":"XRPDOWN","icon":"icon-xrpdown","links":{"wallet":"","staking":"","exchange":""}},"xprt":{"name":"Persistence","icon":"icon-xprt","links":{"wallet":"","staking":"persistence-staking","exchange":""}},"xrpup":{"name":"XRPUP","icon":"icon-xrpup","links":{"wallet":"","staking":"","exchange":""}},"cro":{"name":"Crypto.com Chain","icon":"icon-cro","links":{"wallet":"","staking":"","exchange":"btc-to-cro-exchange"}},"bidr":{"name":"BIDR","icon":"icon-bidr","links":{"wallet":"","staking":"","exchange":""}},"brl":{"name":"Borealis","icon":"icon-brl","links":{"wallet":"","staking":"","exchange":""}},"uah":{"name":"Chihuahua Token","icon":"icon-uah","links":{"wallet":"","staking":"","exchange":""}},"aud":{"name":"Audius","icon":"icon-aud","links":{"wallet":"","staking":"","exchange":""}},"idrt":{"name":"Rupiah Token","icon":"icon-idrt","links":{"wallet":"","staking":"","exchange":""}},"ngn":{"name":"CryptoNijigen","icon":"icon-ngn","links":{"wallet":"","staking":"","exchange":""}},"music":{"name":"Musicoin","icon":"icon-music","links":{"wallet":"musicoin-wallet","staking":"","exchange":""}},"apt":{"name":"Aptos","icon":"icon-apt","links":{"wallet":"aptos-wallet","staking":"","exchange":""}},"dgtx":{"name":"Digitex Futures","icon":"icon-dgtx","links":{"wallet":"digitex-wallet","staking":"","exchange":""}},"dot":{"name":"Polkadot","icon":"icon-dot","links":{"wallet":"polkadot-wallet","staking":"","exchange":"btc-to-dot-exchange"}},"divi":{"name":"Divi","icon":"icon-divi","links":{"wallet":"","staking":"divi-staking","exchange":""}},"ngc":{"name":"NAGA","icon":"icon-ngc","links":{"wallet":"","staking":"","exchange":""}},"grc":{"name":"Gridcoin","icon":"icon-grc","links":{"wallet":"gridcoin-wallet","staking":"","exchange":""}},"cas":{"name":"Cashaa","icon":"icon-cas","links":{"wallet":"","staking":"","exchange":""}},"clam":{"name":"Clams","icon":"icon-clam","links":{"wallet":"","staking":"","exchange":""}},"yec":{"name":"Ycash","icon":"icon-yec","links":{"wallet":"ycash-wallet","staking":"","exchange":""}},"band":{"name":"Band Protocol","icon":"icon-band","links":{"wallet":"band-protocol-wallet","staking":"band-staking","exchange":""}},"babydoge":{"name":"Baby Doge Coin","icon":"icon-babydoge","links":{"wallet":"","staking":"","exchange":""}},"erc20":{"name":"ERC20","icon":"icon-erc20","links":{"wallet":"erc20-wallet","staking":"","exchange":""}},"trc20":{"name":"TRC20","icon":"icon-trc20","links":{"wallet":"trc20-wallet","staking":"","exchange":""}},"raven":{"name":"Raven Protocol","icon":"icon-raven","links":{"wallet":"","staking":"","exchange":""}},"rvn":{"name":"Ravencoin","icon":"icon-rvn","links":{"wallet":"ravencoin-wallet","staking":"","exchange":""}},"kmd":{"name":"Komodo","icon":"icon-kmd","links":{"wallet":"komodo-wallet","staking":"komodo-kmd-staking","exchange":""}},"gala":{"name":"GALA","icon":"icon-gala","links":{"wallet":"","staking":"","exchange":""}},"gram":{"name":"GALA","icon":"icon-gala","links":{"wallet":"gram-wallet","staking":"","exchange":""}},"xvg":{"name":"Verge","icon":"icon-xvg","links":{"wallet":"verge-wallet","staking":"","exchange":""}},"vgx":{"name":"Ethos","icon":"icon-vgx","links":{"wallet":"ethos-wallet","staking":"","exchange":""}},"fil":{"name":"Filecoin","icon":"icon-fil","links":{"wallet":"filecoin-wallet","staking":"","exchange":""}},"wink":{"name":"Wink","icon":"icon-wink","links":{"wallet":"wink-wallet","staking":"","exchange":""}},"xmr":{"name":"Monero","icon":"icon-xmr","links":{"wallet":"monero-wallet","staking":"","exchange":"btc-to-xmr-exchange"}},"zrx":{"name":"0x","icon":"icon-zrx","links":{"wallet":"0x-zrx-wallet","staking":"","exchange":"btc-to-zrx-exchange"}},"zil":{"name":"Zilliqa","icon":"icon-zil","links":{"wallet":"zilliqa-wallet","staking":"zilliqa-staking","exchange":"btc-to-zil-exchange"}},"zec":{"name":"Zcash","icon":"icon-zec","links":{"wallet":"zcash-wallet","staking":"","exchange":"btc-to-zec-exchange"}},"xtz":{"name":"Tezos","icon":"icon-xtz","links":{"wallet":"tezos-wallet","staking":"tezos-staking","exchange":"btc-to-xtz-exchange"}},"xrp":{"name":"XRP","icon":"icon-xrp","links":{"wallet":"ripple-wallet","staking":"","exchange":"btc-to-xrp-exchange"}},"xzc":{"name":"Zcoin","icon":"icon-xzc","links":{"wallet":"","staking":"","exchange":""}},"sys":{"name":"Syscoin","icon":"icon-sys","links":{"wallet":"","staking":"","exchange":""}},"oxt":{"name":"Orchid","icon":"icon-oxt","links":{"wallet":"","staking":"","exchange":""}},"ppc":{"name":"Peercoin","icon":"icon-ppc","links":{"wallet":"","staking":"","exchange":""}},"rhoc":{"name":"RChain","icon":"icon-rhoc","links":{"wallet":"","staking":"","exchange":""}},"nxs":{"name":"Nexus","icon":"icon-nxs","links":{"wallet":"","staking":"","exchange":""}},"jse":{"name":"JSEcoin","icon":"icon-jse","links":{"wallet":"","staking":"","exchange":""}},"thc":{"name":"Hempcoin","icon":"icon-thc","links":{"wallet":"","staking":"","exchange":""}},"mona":{"name":"MonaCoin","icon":"icon-mona","links":{"wallet":"monacoin-wallet","staking":"","exchange":""}},"mtc":{"name":"Medical Token Currency","icon":"icon-mtc","links":{"wallet":"","staking":"","exchange":""}},"cann":{"name":"CannabisCoin","icon":"icon-cann","links":{"wallet":"","staking":"","exchange":""}},"cake":{"name":"PancakeSwap","icon":"icon-cake","links":{"wallet":"pancakeswap-wallet","staking":"","exchange":"btc-to-cake-exchange"}},"dock":{"name":"Dock","icon":"icon-dock","links":{"wallet":"","staking":"","exchange":""}},"dig":{"name":"Dignity","icon":"icon-dig","links":{"wallet":"","staking":"","exchange":""}},"ccx":{"name":"Conceal","icon":"icon-ccx","links":{"wallet":"","staking":"","exchange":""}},"btx":{"name":"Bitcore","icon":"icon-btx","links":{"wallet":"","staking":"","exchange":""}},"cloak":{"name":"CloakCoin","icon":"icon-cloak","links":{"wallet":"","staking":"","exchange":""}},"edc":{"name":"EDCASH","icon":"icon-edc","links":{"wallet":"","staking":"","exchange":""}},"colx":{"name":"ColossusCoinXT","icon":"icon-colx","links":{"wallet":"","staking":"","exchange":""}},"nxt":{"name":"Nxt","icon":"icon-nxt","links":{"wallet":"","staking":"nxt-staking","exchange":""}},"glmr":{"name":"Moonbeam","icon":"icon-glmr","links":{"wallet":"","staking":"moonbeam-staking","exchange":""}},"ela":{"name":"Elastos","icon":"icon-ela","links":{"wallet":"elastos-wallet","staking":"","exchange":""}},"fct":{"name":"Factom","icon":"icon-fct","links":{"wallet":"","staking":"","exchange":""}},"dero":{"name":"Dero","icon":"icon-dero","links":{"wallet":"","staking":"","exchange":""}},"btcz":{"name":"BitcoinZ","icon":"icon-btcz","links":{"wallet":"","staking":"","exchange":""}},"bts":{"name":"Bitshares","icon":"icon-bts","links":{"wallet":"","staking":"","exchange":""}},"bnty":{"name":"Bounty0x","icon":"icon-bnty","links":{"wallet":"","staking":"","exchange":""}},"btcp":{"name":"BitcoinPro","icon":"icon-btcp","links":{"wallet":"","staking":"","exchange":""}},"tube":{"name":"BitTube","icon":"icon-tube","links":{"wallet":"","staking":"","exchange":""}},"acoin":{"name":"ACoin","icon":"icon-acoin","links":{"wallet":"","staking":"","exchange":""}},"akt":{"name":"Akash Network","icon":"icon-akt","links":{"wallet":"","staking":"akash-network-staking","exchange":""}},"apl":{"name":"Apollo Currency","icon":"icon-apl","links":{"wallet":"apollo-wallet","staking":"","exchange":""}},"beam":{"name":"BEAM","icon":"icon-beam","links":{"wallet":"","staking":"","exchange":""}},"kcs":{"name":"KuCoin Token","icon":"icon-kcs","links":{"wallet":"","staking":"","exchange":""}},"niox":{"name":"NIOX","icon":"icon-niox","links":{"wallet":"","staking":"","exchange":""}},"nio":{"name":"Autonio","icon":"icon-nio","links":{"wallet":"","staking":"","exchange":""}},"agi":{"name":"SingularityNET","icon":"icon-agi","links":{"wallet":"","staking":"","exchange":""}},"mnx":{"name":"MinexCoin","icon":"icon-mnx","links":{"wallet":"","staking":"","exchange":""}},"sky":{"name":"Skycoin","icon":"icon-sky","links":{"wallet":"","staking":"","exchange":""}},"aeon":{"name":"AEON","icon":"icon-aeon","links":{"wallet":"","staking":"","exchange":""}},"grin":{"name":"Grin","icon":"icon-grin","links":{"wallet":"","staking":"","exchange":""}},"waxp":{"name":"WAX","icon":"icon-waxp","links":{"wallet":"","staking":"","exchange":""}},"ncash":{"name":"Nucleus Vision","icon":"icon-ncash","links":{"wallet":"","staking":"","exchange":""}},"pac":{"name":"PacCoin","icon":"icon-pac","links":{"wallet":"","staking":"","exchange":""}},"grlc":{"name":"Garlicoin","icon":"icon-grlc","links":{"wallet":"","staking":"","exchange":""}},"vtc":{"name":"Vertcoin","icon":"icon-vtc","links":{"wallet":"vertcoin-wallet","staking":"","exchange":""}},"wan":{"name":"Wanchain","icon":"icon-wan","links":{"wallet":"wanchain-wallet","staking":"","exchange":""}},"crpt":{"name":"Crypterium","icon":"icon-crpt","links":{"wallet":"","staking":"","exchange":""}},"spt":{"name":"Spots","icon":"icon-spt","links":{"wallet":"","staking":"","exchange":""}},"pot":{"name":"Potcoin","icon":"icon-pot","links":{"wallet":"potcoin-wallet","staking":"","exchange":""}},"steem":{"name":"Steem","icon":"icon-steem","links":{"wallet":"","staking":"","exchange":""}},"pat":{"name":"PATRON","icon":"icon-pat","links":{"wallet":"","staking":"","exchange":""}},"burst":{"name":"BurstCoin","icon":"icon-burst","links":{"wallet":"","staking":"","exchange":""}},"zen":{"name":"Horizen","icon":"icon-zen","links":{"wallet":"zencash-wallet","staking":"","exchange":"btc-to-zen-exchange"}},"pivx":{"name":"PIVX","icon":"icon-pivx","links":{"wallet":"","staking":"","exchange":""}},"loom":{"name":"Loom Network","icon":"icon-loom","links":{"wallet":"","staking":"","exchange":""}},"lunc":{"name":"Terra Classic","icon":"icon-lunc","links":{"wallet":"","staking":"terra-classic-staking","exchange":""}},"wings":{"name":"Wings","icon":"icon-wings","links":{"wallet":"wings-wallet","staking":"","exchange":""}},"wax":{"name":"Wax","icon":"icon-wax","links":{"wallet":"wax-wallet","staking":"","exchange":""}},"vib":{"name":"Viberate","icon":"icon-vib","links":{"wallet":"viberate-wallet","staking":"","exchange":""}},"usdc":{"name":"USD Coin","icon":"icon-usdc","links":{"wallet":"usd-coin-wallet","staking":"","exchange":"btc-to-usdc-exchange"}},"usdp":{"name":"Pax Dollar","icon":"icon-usdp","links":{"wallet":"usd-coin-wallet","staking":"","exchange":"btc-to-usdc-exchange"}},"tel":{"name":"Telcoin","icon":"icon-tel","links":{"wallet":"","staking":"","exchange":"btc-to-tel-exchange"}},"tusd":{"name":"TrueUSD","icon":"icon-tusd","links":{"wallet":"trueusd-wallet","staking":"","exchange":"btc-to-tusd-exchange"}},"trx":{"name":"Tron","icon":"icon-trx","links":{"wallet":"tron-wallet","staking":"tron-trx-staking","exchange":"btc-to-trx-exchange"}},"trst":{"name":"Wetrust","icon":"icon-trst","links":{"wallet":"wetrust-wallet","staking":"","exchange":""}},"swt":{"name":"SwarmCity","icon":"icon-swt","links":{"wallet":"swarmcity-wallet","staking":"","exchange":""}},"stx":{"name":"Stox","icon":"icon-stx","links":{"wallet":"stox-wallet","staking":"","exchange":"btc-to-stx-exchange"}},"storj":{"name":"STORJ","icon":"icon-storj","links":{"wallet":"storj-wallet","staking":"","exchange":""}},"sol":{"name":"Solana","icon":"icon-sol","links":{"wallet":"solana-wallet","staking":"solana-staking","exchange":"btc-to-sol-exchange"}},"spool":{"name":"Spool DAO","icon":"icon-spool","links":{"wallet":"","staking":"spool-dao-staking","exchange":""}},"snm":{"name":"SONM","icon":"icon-snm","links":{"wallet":"sonm-wallet","staking":"","exchange":""}},"skin":{"name":"Skincoin","icon":"icon-skin","links":{"wallet":"skincoin-wallet","staking":"","exchange":""}},"salt":{"name":"Salt","icon":"icon-salt","links":{"wallet":"salt-wallet","staking":"","exchange":""}},"rlc":{"name":"iExecRLC","icon":"icon-rlc","links":{"wallet":"iexecrlc-wallet","staking":"","exchange":""}},"r":{"name":"Revain","icon":"icon-r","links":{"wallet":"revain-wallet","staking":"","exchange":""}},"rep":{"name":"Augur","icon":"icon-rep","links":{"wallet":"augur-wallet","staking":"","exchange":""}},"rcn":{"name":"RipioCreditNetwork","icon":"icon-rcn","links":{"wallet":"ripio-credit-network-wallet","staking":"","exchange":""}},"qtum":{"name":"Qtum","icon":"icon-qtum","links":{"wallet":"qtum-wallet","staking":"","exchange":"btc-to-qtum-exchange"}},"ptoy":{"name":"Patientory","icon":"icon-ptoy","links":{"wallet":"patientory-wallet","staking":"","exchange":""}},"ppt":{"name":"Populous","icon":"icon-ppt","links":{"wallet":"populous-wallet","staking":"","exchange":""}},"powr":{"name":"PowerLedger","icon":"icon-powr","links":{"wallet":"powerledger-wallet","staking":"","exchange":""}},"poly":{"name":"Polymath","icon":"icon-poly","links":{"wallet":"polymath-wallet","staking":"","exchange":""}},"pay":{"name":"TenXPay","icon":"icon-pay","links":{"wallet":"tenx-wallet","staking":"","exchange":""}},"pax":{"name":"Paxos","icon":"icon-pax","links":{"wallet":"paxos-wallet","staking":"","exchange":"btc-to-pax-exchange"}},"omg":{"name":"OmiseGO","icon":"icon-omg","links":{"wallet":"omisego-wallet","staking":"","exchange":""}},"nmr":{"name":"Numeraire","icon":"icon-nmr","links":{"wallet":"numeraire-wallet","staking":"","exchange":""}},"nexo":{"name":"NEXO","icon":"icon-nexo","links":{"wallet":"nexo-wallet","staking":"","exchange":"btc-to-nexo-exchange"}},"mln":{"name":"Melon","icon":"icon-mln","links":{"wallet":"melon-wallet","staking":"","exchange":""}},"mkr":{"name":"Maker","icon":"icon-mkr","links":{"wallet":"maker-wallet","staking":"","exchange":"btc-to-mkr-exchange"}},"mco":{"name":"Monaco","icon":"icon-mco","links":{"wallet":"mco-wallet","staking":"","exchange":""}},"miota":{"name":"IOTA","icon":"icon-miota","links":{"wallet":"","staking":"","exchange":"btc-to-miota-exchange"}},"mana":{"name":"Decentraland","icon":"icon-mana","links":{"wallet":"decentraland-wallet","staking":"","exchange":"btc-to-mana-exchange"}},"lun":{"name":"Lunyr","icon":"icon-lun","links":{"wallet":"lunyr-wallet","staking":"","exchange":""}},"ltc":{"name":"Litecoin","icon":"icon-ltc","links":{"wallet":"litecoin-wallet","staking":"","exchange":"btc-to-ltc-exchange"}},"link":{"name":"ChainLink","icon":"icon-link","links":{"wallet":"chainlink-wallet","staking":"","exchange":"btc-to-link-exchange"}},"knc":{"name":"KyberNetwork","icon":"icon-knc","links":{"wallet":"kyber-network-wallet","staking":"","exchange":""}},"kncl":{"name":"Kyber Network Crystal Legacy","icon":"icon-knc","links":{"wallet":"kyber-network-wallet","staking":"","exchange":""}},"chr":{"name":"Chromia","icon":"icon-chr","links":{"wallet":"","staking":"","exchange":""}},"grt":{"name":"The Graph","icon":"icon-grt","links":{"wallet":"","staking":"","exchange":"btc-to-grt-exchange"}},"hmq":{"name":"Humaniq","icon":"icon-hmq","links":{"wallet":"humaniq-wallet","staking":"","exchange":""}},"hydra":{"name":"Hydra","icon":"icon-hydra","links":{"wallet":"","staking":"hydra-staking","exchange":""}},"gusd":{"name":"GeminiDollar","icon":"icon-gusd","links":{"wallet":"geminidollar-wallet","staking":"","exchange":""}},"gup":{"name":"Matchpool","icon":"icon-gup","links":{"wallet":"matchpool-wallet","staking":"","exchange":""}},"gnt":{"name":"Golem","icon":"icon-gnt","links":{"wallet":"golem-wallet","staking":"","exchange":""}},"gno":{"name":"Gnosis","icon":"icon-gno","links":{"wallet":"gnosis-wallet","staking":"","exchange":""}},"fun":{"name":"FunFair","icon":"icon-fun","links":{"wallet":"funfair-wallet","staking":"","exchange":""}},"eth":{"name":"Ethereum","icon":"icon-eth","links":{"wallet":"ethereum-wallet","staking":"ethereum-staking","exchange":"btc-to-eth-exchange"}},"etn":{"name":"Electroneum","icon":"icon-etn","links":{"wallet":"","staking":"","exchange":""}},"enj":{"name":"Enjin Coin","icon":"icon-enj","links":{"wallet":"enjincoin-wallet","staking":"","exchange":"btc-to-enj-exchange"}},"elf":{"name":"Aelf","icon":"icon-elf","links":{"wallet":"aelf-wallet","staking":"","exchange":""}},"edg":{"name":"Edgeless","icon":"icon-edg","links":{"wallet":"edgeless-wallet","staking":"","exchange":""}},"doge":{"name":"Dogecoin","icon":"icon-doge","links":{"wallet":"dogecoin-wallet","staking":"","exchange":"btc-to-doge-exchange"}},"dnt":{"name":"district0x","icon":"icon-dnt","links":{"wallet":"district0x-wallet","staking":"","exchange":""}},"dgd":{"name":"DigixDAO","icon":"icon-dgd","links":{"wallet":"digixdao-wallet","staking":"","exchange":""}},"dgb":{"name":"DigiByte","icon":"icon-dgb","links":{"wallet":"digibyte-wallet","staking":"","exchange":"btc-to-dgb-exchange"}},"dent":{"name":"DENT","icon":"icon-dent","links":{"wallet":"dent-wallet","staking":"","exchange":""}},"dcn":{"name":"Dentacoin","icon":"icon-dcn","links":{"wallet":"dentacoin-wallet","staking":"","exchange":""}},"dash":{"name":"Dash","icon":"icon-dash","links":{"wallet":"dash-wallet","staking":"","exchange":"btc-to-dash-exchange"}},"dai":{"name":"DAI","icon":"icon-dai","links":{"wallet":"multicollateral-dai-wallet","staking":"","exchange":"btc-to-dai-exchange"}},"cvc":{"name":"Civic","icon":"icon-cvc","links":{"wallet":"civic-wallet","staking":"","exchange":""}},"btg":{"name":"Bitcoin Gold","icon":"icon-btg","links":{"wallet":"bitcoin-gold-wallet","staking":"","exchange":"btc-to-btg-exchange"}},"btc":{"name":"Bitcoin","icon":"icon-btc","links":{"wallet":"bitcoin-wallet","staking":"","exchange":"btc-to-eth-exchange"}},"axs":{"name":"Axie Infinity","icon":"icon-axs","links":{"wallet":"","staking":"","exchange":""}},"bsv":{"name":"Bitcoin SV","icon":"icon-bsv","links":{"wallet":"bitcoin-sv-wallet","staking":"","exchange":"btc-to-bsv-exchange"}},"bsc":{"name":"Smart Chain","icon":"icon-bsc","links":{"wallet":"","staking":"","exchange":""}},"bch":{"name":"Bitcoin Cash","icon":"icon-bch","links":{"wallet":"bitcoin-cash-wallet","staking":"","exchange":"btc-to-bch-exchange"}},"bcn":{"name":"Bytecoin","icon":"icon-bcn","links":{"wallet":"bytecoin-wallet","staking":"","exchange":""}},"brd":{"name":"Bread","icon":"icon-brd","links":{"wallet":"bread-wallet","staking":"","exchange":""}},"bnt":{"name":"Bancor","icon":"icon-bnt","links":{"wallet":"bancor-wallet","staking":"","exchange":"btc-to-bnt-exchange"}},"bnb":{"name":"BNB","icon":"icon-bnb","links":{"wallet":"bnb-wallet","staking":"bnb-staking","exchange":"btc-to-bnb-exchange"}},"bkx":{"name":"Bankex","icon":"icon-bkx","links":{"wallet":"bankex-wallet","staking":"","exchange":""}},"bat":{"name":"Basic Attention Token","icon":"icon-bat","links":{"wallet":"basic-attention-token-wallet","staking":"","exchange":"btc-to-bat-exchange"}},"ama":{"name":"AmaCoin","icon":"icon-ama","links":{"wallet":"","staking":"","exchange":""}},"awc":{"name":"Atomic Wallet Token","icon":"icon-awc","links":{"wallet":" ","staking":"awc-staking","exchange":""}},"arn":{"name":"Aeron","icon":"icon-arn","links":{"wallet":"aeron-wallet","staking":"","exchange":""}},"ant":{"name":"Aragon","icon":"icon-ant","links":{"wallet":"aragon-wallet","staking":"","exchange":""}},"ae":{"name":"Aeternity","icon":"icon-ae","links":{"wallet":"aeternity-wallet","staking":"","exchange":""}},"adx":{"name":"Adex","icon":"icon-adx","links":{"wallet":"adex-wallet","staking":"","exchange":""}},"eurs":{"name":"Stasiseuro","icon":"icon-eurs","links":{"wallet":"stasiseuro-wallet","staking":"","exchange":""}},"mith":{"name":"Mithril","icon":"icon-mith","links":{"wallet":"mithril-wallet","staking":"","exchange":""}},"pma":{"name":"Pumapay","icon":" icon-pma","links":{"wallet":"pumapay-wallet","staking":"","exchange":""}},"abyss":{"name":"Abyss","icon":"icon-abyss","links":{"wallet":"abyss-wallet","staking":"","exchange":""}},"ada":{"name":"Cardano","icon":"icon-ada","links":{"wallet":"cardano-wallet","staking":"cardano-staking","exchange":"btc-to-ada-exchange"}},"adst":{"name":"Adshares","icon":"icon-adst","links":{"wallet":"adshares-wallet","staking":"","exchange":""}},"adt":{"name":"Adtoken","icon":"icon-adt","links":{"wallet":"adtoken-wallet","staking":"","exchange":""}},"aidoc":{"name":"Aldoctor","icon":"icon-aidoc","links":{"wallet":"aldoctor-wallet","staking":"","exchange":""}},"aion":{"name":"Aion","icon":"icon-aion","links":{"wallet":"aion-wallet","staking":"","exchange":""}},"air":{"name":"Airtoken","icon":"icon-air","links":{"wallet":"airtoken-wallet","staking":"","exchange":""}},"alis ":{"name":"Alis","icon":"icon-alis ","links":{"wallet":"alis-wallet","staking":"","exchange":""}},"amb":{"name":"Ambrosus","icon":"icon-amb","links":{"wallet":"ambrosus-wallet","staking":"","exchange":""}},"amis":{"name":"Amis","icon":"icon-amis","links":{"wallet":"amis-wallet","staking":"","exchange":""}},"appc":{"name":"Appcoins","icon":"icon-appc","links":{"wallet":"appcoins-wallet","staking":"","exchange":""}},"vidt":{"name":"V-ID","icon":"icon-vidt","links":{"wallet":"vid-wallet","staking":"","exchange":""}},"vsys":{"name":"v.systems","icon":"icon-vsys","links":{"wallet":"","staking":"v.systems-staking","exchange":""}},"sushi":{"name":"SushiSwap","icon":"icon-sushi","links":{"wallet":"","staking":"","exchange":"btc-to-sushi-exchange"}},"ast":{"name":"Airswap","icon":"icon-ast","links":{"wallet":"airswap-wallet","staking":"","exchange":""}},"ath":{"name":"Atheios","icon":"icon-ath","links":{"wallet":"atheios-wallet","staking":"","exchange":""}},"atl":{"name":"Atlant","icon":"icon-atl","links":{"wallet":"atlant-wallet","staking":"","exchange":""}},"atm":{"name":"Atmchain","icon":"icon-atm","links":{"wallet":"atmchain-wallet","staking":"","exchange":""}},"ava":{"name":"Travala.com","icon":"icon-ava","links":{"wallet":"travala-com-wallet","staking":"","exchange":""}},"avt":{"name":"Aventus","icon":"icon-avt","links":{"wallet":"aventus-wallet","staking":"","exchange":""}},"awr":{"name":"Awardcoin","icon":"icon-awr","links":{"wallet":"awardcoin-wallet","staking":"","exchange":""}},"bcap":{"name":"Bcap","icon":"icon-bcap","links":{"wallet":"bcap-wallet","staking":"","exchange":""}},"bcd":{"name":"Bitcoin Diamond","icon":"icon-bcd","links":{"wallet":"","staking":"","exchange":""}},"bet":{"name":"Dao casino","icon":"icon-bet","links":{"wallet":"dao-casino-wallet","staking":"","exchange":""}},"bix":{"name":"Biboxtoken","icon":"icon-bix","links":{"wallet":"biboxtoken-wallet","staking":"","exchange":""}},"blx":{"name":"Blx","icon":"icon-blx","links":{"wallet":"blx-wallet","staking":"","exchange":""}},"blz":{"name":"Bluzelle","icon":"icon-blz","links":{"wallet":"bluzelle-wallet","staking":"","exchange":""}},"bmc":{"name":"Blackmoon","icon":"icon-bmc","links":{"wallet":"blackmoon-wallet","staking":"","exchange":""}},"bmt":{"name":"Bmchain","icon":"icon-bmt","links":{"wallet":"bmchain-wallet","staking":"","exchange":""}},"bnc ":{"name":"Bionic","icon":"icon-bnc ","links":{"wallet":"bionic-wallet","staking":"","exchange":""}},"bop":{"name":"Bop","icon":"icon-bop","links":{"wallet":"bop-wallet","staking":"","exchange":""}},"bot":{"name":"Botxcoin","icon":"icon-bot","links":{"wallet":"botxcoin-wallet","staking":"","exchange":""}},"bq":{"name":"Bitqy","icon":"icon-bq","links":{"wallet":"bitqy-wallet","staking":"","exchange":""}},"bqx":{"name":"Ethos","icon":" icon-bqx","links":{"wallet":"ethos-wallet","staking":"","exchange":""}},"brat":{"name":"Brother","icon":"icon-brat","links":{"wallet":"brother-wallet","staking":"","exchange":""}},"btcny":{"name":"Btcny","icon":"icon-btcny","links":{"wallet":"btcny-wallet","staking":"","exchange":""}},"bte":{"name":"Bytecoin","icon":"icon-bte","links":{"wallet":"bytecoin-wallet","staking":"","exchange":""}},"btm":{"name":"Bytom","icon":"icon-btm","links":{"wallet":"bytom-wallet","staking":"","exchange":""}},"c20":{"name":"Crypto20","icon":"icon-c20","links":{"wallet":"crypto20-wallet","staking":"","exchange":""}},"cag":{"name":"Changebank","icon":"icon-cag","links":{"wallet":"changebank-wallet","staking":"","exchange":""}},"cat":{"name":"Blockcat","icon":"icon-cat","links":{"wallet":"blockcat-wallet","staking":"","exchange":""}},"cdt":{"name":"Blox","icon":"icon-cdt","links":{"wallet":"blox-wallet","staking":"","exchange":""}},"cfi":{"name":"Cofoundit","icon":"icon-cfi","links":{"wallet":"cofoundit-wallet","staking":"","exchange":""}},"cfun":{"name":"Cfun","icon":"icon-cfun","links":{"wallet":"cfun-wallet","staking":"","exchange":""}},"chz":{"name":"Chiliz","icon":"icon-chz","links":{"wallet":"","staking":"","exchange":"btc-to-chz-exchange"}},"cmc":{"name":"Cmc","icon":"icon-cmc","links":{"wallet":"cmc-wallet","staking":"","exchange":""}},"cmt":{"name":"Cybermiles","icon":"icon-cmt","links":{"wallet":"cybermiles-wallet","staking":"","exchange":""}},"cnd":{"name":"Cindicator","icon":"icon-cnd","links":{"wallet":"cindicator-wallet","staking":"","exchange":""}},"cob":{"name":"Cobinhood","icon":"icon-cob","links":{"wallet":"cobinhood-wallet","staking":"","exchange":""}},"comp":{"name":"Compound","icon":"icon-comp","links":{"wallet":"","staking":"","exchange":"btc-to-comp-exchange"}},"cos":{"name":"Contentos","icon":"icon-cos","links":{"wallet":"","staking":"","exchange":""}},"crb":{"name":"Creditbit","icon":"icon-crb","links":{"wallet":"creditbit-wallet","staking":"","exchange":""}},"credo":{"name":"Credo","icon":"icon-credo","links":{"wallet":"credo-wallet","staking":"","exchange":""}},"cs":{"name":"Credits","icon":"icon-cs","links":{"wallet":"credits-wallet","staking":"","exchange":""}},"csno":{"name":"Bitdice","icon":"icon-csno","links":{"wallet":"bitdice-wallet","staking":"","exchange":""}},"ctl":{"name":"Citadel","icon":"icon-ctl","links":{"wallet":"citadel-wallet","staking":"","exchange":""}},"ctr":{"name":"Cryptrust","icon":"icon-ctr","links":{"wallet":"cryptrust-wallet","staking":"","exchange":""}},"ctsi":{"name":"Cartesi","icon":"icon-ctsi","links":{"wallet":"","staking":"","exchange":""}},"dab":{"name":"Dabanking","icon":"icon-dab","links":{"wallet":"dabanking-wallet","staking":"","exchange":""}},"dalc":{"name":"Dalecoin","icon":"icon-dalc","links":{"wallet":"dalecoin-wallet","staking":"","exchange":""}},"data":{"name":"Streamr","icon":"icon-data","links":{"wallet":"streamr-wallet","staking":"","exchange":""}},"dcr":{"name":"Decred","icon":"icon-dcr","links":{"wallet":"decred-wallet","staking":"","exchange":"btc-to-dcr-exchange"}},"ccc":{"name":"Concierge Coin","icon":"icon-ccc","links":{"wallet":"concierge-coin-wallet","staking":"","exchange":""}},"hst":{"name":"Decision Token","icon":"icon-hst","links":{"wallet":"decision-token-wallet","staking":"","exchange":""}},"ubq":{"name":"Ubiq","icon":"icon-ubq","links":{"wallet":"ubiq-wallet","staking":"","exchange":""}},"tomo":{"name":"Tomochain","icon":"icon-tomo","links":{"wallet":"tomochain-wallet","staking":"","exchange":""}},"bcpt":{"name":"Blockmason Credit Protocol","icon":"icon-bcpt","links":{"wallet":"blockmason-credit-protocol-wallet","staking":"","exchange":""}},"ddf":{"name":"Digitaldevelopersfund","icon":"icon-ddf","links":{"wallet":"digitaldevelopersfund-wallet","staking":"","exchange":""}},"dao":{"name":"Dao","icon":"icon-dao","links":{"wallet":"dao-wallet","staking":"","exchange":""}},"arc":{"name":"Advanced Technology Coin","icon":"icon-arc","links":{"wallet":"advanced-technology-coin-wallet","staking":"","exchange":""}},"1st":{"name":"FirstBlood","icon":"icon-1st","links":{"wallet":"firstblood-wallet","staking":"","exchange":""}},"1inch":{"name":"1inch Network","icon":"icon-1inch","links":{"wallet":"","staking":"","exchange":""}},"dag":{"name":"Constellation","icon":" icon-dag","links":{"wallet":"","staking":"","exchange":""}},"dice":{"name":"Dice","icon":" icon-dice","links":{"wallet":"dice-wallet","staking":"","exchange":""}},"dlt":{"name":"Delta","icon":"icon-dlt","links":{"wallet":"delta-wallet","staking":"","exchange":""}},"dna":{"name":"Encrypgen","icon":"icon-dna","links":{"wallet":"encrypgen-wallet","staking":"","exchange":""}},"dpp":{"name":"Dapowerplay","icon":"icon-dpp","links":{"wallet":"dapowerplay-wallet","staking":"","exchange":""}},"dpy":{"name":"Delphytoken","icon":"icon-dpy","links":{"wallet":"delphytoken-wallet","staking":"","exchange":""}},"drgn":{"name":"Dragonchain","icon":"icon-drgn","links":{"wallet":"dragonchain-wallet","staking":"","exchange":""}},"drop":{"name":"Dropil","icon":"icon-drop","links":{"wallet":"dropil-wallet","staking":"","exchange":""}},"drp":{"name":"Dcorp","icon":"icon-drp","links":{"wallet":"dcorp-wallet","staking":"","exchange":""}},"drt":{"name":"Domraider","icon":"icon-drt","links":{"wallet":"domraider-wallet","staking":"","exchange":""}},"dta":{"name":"Data","icon":"icon-dta","links":{"wallet":"data-wallet","staking":"","exchange":""}},"ecn":{"name":"Ecoin","icon":"icon-ecn","links":{"wallet":"ecoin-wallet","staking":"","exchange":""}},"ogn":{"name":"Origin Protocol","icon":"icon-ogn","links":{"wallet":"origin-protocol-wallet","staking":"","exchange":""}},"edo":{"name":"Eidoo","icon":"icon-edo","links":{"wallet":"eidoo-wallet","staking":"","exchange":""}},"eht":{"name":"Eht","icon":"icon-eht","links":{"wallet":"eht-wallet","staking":"","exchange":""}},"ekt":{"name":"Educare","icon":"icon-ekt","links":{"wallet":"educare-wallet","staking":"","exchange":""}},"iris":{"name":"IRISnet","icon":"icon-iris","links":{"wallet":"","staking":"irisnet-staking","exchange":""}},"elix":{"name":"Elixir","icon":"icon-elix","links":{"wallet":"elixir-wallet","staking":"","exchange":""}},"emv":{"name":"Emv","icon":"icon-emv","links":{"wallet":"emv-wallet","staking":"","exchange":""}},"eng":{"name":"Enigma","icon":"icon-eng","links":{"wallet":"enigma-wallet","staking":"","exchange":""}},"ent":{"name":"Eternity","icon":"icon-ent","links":{"wallet":"eternity-wallet","staking":"","exchange":""}},"eos":{"name":"EOS","icon":"icon-eos","links":{"wallet":"eos-wallet","staking":"","exchange":"btc-to-eos-exchange"}},"erd":{"name":"Elrond","icon":"icon-erd","links":{"wallet":"","staking":"","exchange":""}},"etbs":{"name":"Ethbits","icon":"icon-etbs","links":{"wallet":"ethbits-wallet","staking":"","exchange":""}},"etc":{"name":"Ethereum Classic","icon":"icon-etc","links":{"wallet":"ethereum-classic-wallet","staking":"","exchange":"btc-to-etc-exchange"}},"ark":{"name":"Ark","icon":"icon-ark","links":{"wallet":"ark-wallet","staking":"","exchange":""}},"iqn":{"name":"IQeon","icon":"icon-iqn","links":{"wallet":"iqeon-wallet","staking":"","exchange":""}},"qnt":{"name":"Quant","icon":"icon-qnt","links":{"wallet":"","staking":"","exchange":""}},"snt":{"name":"Status","icon":"icon-snt","links":{"wallet":"","staking":"","exchange":""}},"ftm":{"name":"Fantom","icon":"icon-ftm","links":{"wallet":"fantom-ftm-wallet","staking":"","exchange":"btc-to-ftm-exchange"}},"eurt":{"name":"Tethereuro","icon":"icon-eurt","links":{"wallet":"tethereuro-wallet","staking":"","exchange":""}},"evx":{"name":"Everex","icon":"icon-evx","links":{"wallet":"everex-wallet","staking":"","exchange":""}},"fam":{"name":"Fam","icon":"icon-fam","links":{"wallet":"fam-wallet","staking":"","exchange":""}},"frd":{"name":"Farad","icon":"icon-frd","links":{"wallet":"farad-wallet","staking":"","exchange":""}},"ftc":{"name":"Feathercoin","icon":"icon-ftc","links":{"wallet":"feathercoin-wallet","staking":"","exchange":""}},"fuel":{"name":"Fueltoken","icon":"icon-fuel","links":{"wallet":"fueltoken-wallet","staking":"","exchange":""}},"fyn":{"name":"Fundyourselfnow","icon":"icon-fyn","links":{"wallet":"fundyourselfnow-wallet","staking":"","exchange":""}},"ftt":{"name":"FTX Token","icon":"icon-ftt","links":{"wallet":"","staking":"","exchange":"btc-to-ftt-exchange"}},"gbt":{"name":"Globatalent","icon":"icon-gbt","links":{"wallet":"globatalent-wallet","staking":"","exchange":""}},"glm":{"name":"Golem","icon":"icon-glm","links":{"wallet":"","staking":"","exchange":""}},"geld":{"name":"Geld","icon":"icon-geld","links":{"wallet":"geld-wallet","staking":"","exchange":""}},"gifto":{"name":"Gifto","icon":"icon-gifto","links":{"wallet":"gifto-wallet","staking":"","exchange":""}},"gnx":{"name":"Genarox","icon":"icon-gnx","links":{"wallet":"genarox-wallet","staking":"","exchange":""}},"grid":{"name":"Grid","icon":" icon-grid","links":{"wallet":"grid-wallet","staking":"","exchange":""}},"gtc":{"name":"Game comtoken","icon":"icon-gtc","links":{"wallet":"game-comtoken-wallet","staking":"","exchange":""}},"gtkt":{"name":"Goldentickets","icon":"icon-gtkt","links":{"wallet":"goldentickets-wallet","staking":"","exchange":""}},"gto":{"name":"Gifto","icon":"icon-gto","links":{"wallet":"","staking":"","exchange":""}},"gvt":{"name":"Genesisvision","icon":"icon-gvt","links":{"wallet":"genesisvision-wallet","staking":"","exchange":""}},"h2o":{"name":"H2ocoin","icon":"icon-h2o","links":{"wallet":"h2ocoin-wallet","staking":"","exchange":""}},"hex":{"name":"HEX","icon":"icon-hex","links":{"wallet":"","staking":"","exchange":""}},"hgt":{"name":"Hellogold","icon":"icon-hgt","links":{"wallet":"hellogold-wallet","staking":"","exchange":""}},"hkg":{"name":"Hackergold","icon":"icon-hkg","links":{"wallet":"hackergold-wallet","staking":"","exchange":""}},"hlc":{"name":"Qitmeer","icon":"icon-hlc","links":{"wallet":"qitmeer-wallet","staking":"","exchange":""}},"hot":{"name":"Holo","icon":"icon-hot","links":{"wallet":"holo-wallet","staking":"","exchange":"btc-to-hot-exchange"}},"hpb":{"name":"Highperformanceblockchain","icon":"icon-hpb","links":{"wallet":"highperformanceblockchain-wallet","staking":"","exchange":""}},"hvn":{"name":"Hiveterminaltoken","icon":"icon-hvn","links":{"wallet":"hiveterminaltoken-wallet","staking":"","exchange":""}},"hydro":{"name":"Hydro","icon":"icon-hydro","links":{"wallet":"","staking":"","exchange":""}},"ice":{"name":"Ice","icon":"icon-ice","links":{"wallet":"ice-wallet","staking":"","exchange":""}},"icn":{"name":"Iconomi","icon":"icon-icn","links":{"wallet":"iconomi-wallet","staking":"","exchange":""}},"icos":{"name":"Icos","icon":"icon-icos","links":{"wallet":"icos-wallet","staking":"","exchange":""}},"icx":{"name":"ICON","icon":"icon-icx","links":{"wallet":"icon-wallet","staking":"icon-staking","exchange":""}},"idea":{"name":"Idea","icon":"icon-idea","links":{"wallet":"idea-wallet","staking":"","exchange":""}},"ift":{"name":"Investfeed","icon":"icon-ift","links":{"wallet":"investfeed-wallet","staking":"","exchange":""}},"ikb":{"name":"Ikb","icon":"icon-ikb","links":{"wallet":"ikb-wallet","staking":"","exchange":""}},"imt":{"name":"Moneytoken","icon":"icon-imt","links":{"wallet":"moneytoken-wallet","staking":"","exchange":""}},"ind":{"name":"Indorse","icon":"icon-ind","links":{"wallet":"indorse-wallet","staking":"","exchange":""}},"ink":{"name":"Ink","icon":"icon-ink","links":{"wallet":"ink-wallet","staking":"","exchange":""}},"ins":{"name":"Insolar","icon":"icon-ins","links":{"wallet":"insolar-wallet","staking":"","exchange":""}},"iost":{"name":"Iostoken","icon":"icon-iost","links":{"wallet":"iostoken-wallet","staking":"","exchange":""}},"iota":{"name":"Iota","icon":"icon-iota","links":{"wallet":"iota-wallet","staking":"","exchange":""}},"itc":{"name":"Iotchain","icon":"icon-itc","links":{"wallet":"iotchain-wallet","staking":"","exchange":""}},"itt":{"name":"Intelligenttradingfoundation","icon":"icon-itt","links":{"wallet":"intelligenttradingfoundation-wallet","staking":"","exchange":""}},"ixt":{"name":"Ixledger","icon":"icon-ixt","links":{"wallet":"ixledger-wallet","staking":"","exchange":""}},"jet":{"name":"Jetcoin","icon":"icon-jet","links":{"wallet":"jetcoin-wallet","staking":"","exchange":""}},"jnt":{"name":"Jibrel network token","icon":"icon-jnt","links":{"wallet":"jibrel-network-token-wallet","staking":"","exchange":""}},"job":{"name":"Jobchain","icon":"icon-job","links":{"wallet":"","staking":"","exchange":""}},"kick":{"name":"Kicktoken","icon":"icon-kick","links":{"wallet":"kicktoken-wallet","staking":"","exchange":""}},"la":{"name":"Latoken","icon":"icon-la","links":{"wallet":"latoken-wallet","staking":"","exchange":""}},"latx":{"name":"Latiumx","icon":"icon-latx","links":{"wallet":"latiumx-wallet","staking":"","exchange":""}},"lend":{"name":"Aave","icon":"icon-lend","links":{"wallet":"aave-lend-wallet","staking":"","exchange":""}},"leo":{"name":"UNUS SED LEO","icon":"icon-leo","links":{"wallet":"","staking":"","exchange":"btc-to-leo-exchange"}},"lev":{"name":"Leverj","icon":"icon-lev","links":{"wallet":"leverj-wallet","staking":"","exchange":""}},"life":{"name":"Purelifecoin","icon":"icon-life","links":{"wallet":"purelifecoin-wallet","staking":"","exchange":""}},"link2":{"name":"Link2","icon":"icon-link2","links":{"wallet":"link2-wallet","staking":"","exchange":""}},"lnc":{"name":"Blocklancer","icon":"icon-lnc","links":{"wallet":"blocklancer-wallet","staking":"","exchange":""}},"lok":{"name":"Loki","icon":"icon-lok","links":{"wallet":"loki-wallet","staking":"","exchange":""}},"lpg":{"name":"Lpg","icon":"icon-lpg","links":{"wallet":"lpg-wallet","staking":"","exchange":""}},"lrc":{"name":"Loopring","icon":"icon-lrc","links":{"wallet":"loopring-wallet","staking":"","exchange":""}},"lstr":{"name":"Lunastars","icon":"icon-lstr","links":{"wallet":"lunastars-wallet","staking":"","exchange":""}},"luna":{"name":"Terra LUNA","icon":"icon-luna","links":{"wallet":"","staking":"","exchange":""}},"luck":{"name":"Luck","icon":"icon-luck","links":{"wallet":"luck-wallet","staking":"","exchange":""}},"matic":{"name":"Polygon","icon":"icon-matic","links":{"wallet":"polygon-wallet","staking":"polygon-matic-staking","exchange":"btc-to-matic-exchange"}},"mbrs":{"name":"Embers","icon":"icon-mbrs","links":{"wallet":"embers-wallet","staking":"","exchange":""}},"mcap":{"name":"Mcap","icon":"icon-mcap","links":{"wallet":"mcap-wallet","staking":"","exchange":""}},"mci":{"name":"Musiconomi","icon":"icon-mci","links":{"wallet":"musiconomi-wallet","staking":"","exchange":""}},"mda":{"name":"Moedaloyaltypoints","icon":"icon-mda","links":{"wallet":"moedaloyaltypoints-wallet","staking":"","exchange":""}},"mds":{"name":"Medishares","icon":"icon-mds","links":{"wallet":"medishares-wallet","staking":"","exchange":""}},"mee":{"name":"Coinmeet","icon":"icon-mee","links":{"wallet":"coinmeet-wallet","staking":"","exchange":""}},"meta":{"name":"Metadium","icon":"icon-meta","links":{"wallet":"","staking":"metadium-staking","exchange":""}},"mgo":{"name":"Mobilego","icon":"icon-mgo","links":{"wallet":"mobilego-wallet","staking":"","exchange":""}},"mit":{"name":"Minerta","icon":"icon-mit","links":{"wallet":"minerta-wallet","staking":"","exchange":""}},"mne":{"name":"Minereum","icon":"icon-mne","links":{"wallet":"minereum-wallet","staking":"","exchange":""}},"mod":{"name":"Modum","icon":"icon-mod","links":{"wallet":"modum-wallet","staking":"","exchange":""}},"mof":{"name":"Molecularfuture","icon":"icon-mof","links":{"wallet":"molecularfuture-wallet","staking":"","exchange":""}},"mrv":{"name":"Macroverse","icon":"icon-mrv","links":{"wallet":"macroverse-wallet","staking":"","exchange":""}},"msp":{"name":"Mothership","icon":"icon-msp","links":{"wallet":"mothership-wallet","staking":"","exchange":""}},"mth":{"name":"Monetha","icon":"icon-mth","links":{"wallet":"monetha-wallet","staking":"","exchange":""}},"mtl":{"name":"Metal","icon":"icon-mtl","links":{"wallet":"metal-wallet","staking":"","exchange":""}},"mtn":{"name":"Medtoken","icon":"icon-mtn","links":{"wallet":"medtoken-wallet","staking":"","exchange":""}},"mtr":{"name":"Mastertradercoin","icon":"icon-mtr","links":{"wallet":"mastertradercoin-wallet","staking":"","exchange":""}},"mtx":{"name":"Matryx","icon":"icon-mtx","links":{"wallet":"matryx-wallet","staking":"","exchange":""}},"myb":{"name":"Mybit","icon":"icon-myb","links":{"wallet":"mybit-wallet","staking":"","exchange":""}},"myd":{"name":"Myetherwalletdonationstoken","icon":"icon-myd","links":{"wallet":"myetherwalletdonationstoken-wallet","staking":"","exchange":""}},"myst":{"name":"Mysterium","icon":"icon-myst","links":{"wallet":"mysterium-wallet","staking":"","exchange":""}},"nas":{"name":"Nebulas","icon":"icon-nas","links":{"wallet":"nebulas-wallet","staking":"","exchange":""}},"neo":{"name":"Neo","icon":"icon-neo","links":{"wallet":"neo-wallet","staking":"","exchange":"btc-to-neo-exchange"}},"xno":{"name":"Nano","icon":"icon-xno","links":{"wallet":"nano-wallet","staking":"","exchange":"btc-to-xno-exchange"}},"nano":{"name":"Nano","icon":"icon-xno","links":{"wallet":"nano-wallet","staking":"","exchange":"btc-to-xno-exchange"}},"net":{"name":"Next","icon":"icon-net","links":{"wallet":"next-wallet","staking":"","exchange":""}},"nimfa":{"name":"Nimfamoney","icon":"icon-nimfa","links":{"wallet":"nimfamoney-wallet","staking":"","exchange":""}},"now":{"name":"NOW Token","icon":"icon-now","links":{"wallet":"changenow-wallet","staking":"","exchange":""}},"npxs":{"name":"Pundi X","icon":"icon-npxs","links":{"wallet":"pundix-wallet","staking":"","exchange":""}},"pundix":{"name":"Pundi X (New)","icon":"icon-npxs","links":{"wallet":"pundix-wallet","staking":"","exchange":""}},"pad":{"name":"NearPad","icon":"icon-pad","links":{"wallet":"","staking":"nearpad-staking","exchange":""}},"nuls":{"name":"Nuls","icon":"icon-nuls","links":{"wallet":"nuls-wallet","staking":"","exchange":""}},"nxc":{"name":"Nexium","icon":"icon-nxc","links":{"wallet":"nexium-wallet","staking":"","exchange":""}},"nxx":{"name":"Nexxus","icon":"icon-nxx","links":{"wallet":"nexxus-wallet","staking":"","exchange":""}},"oax":{"name":"Openanx","icon":"icon-oax","links":{"wallet":"openanx-wallet","staking":"","exchange":""}},"oc":{"name":"Oceanchain","icon":"icon-oc","links":{"wallet":"oceanchain-wallet","staking":"","exchange":""}},"ocn":{"name":"Odyssey","icon":"con-ocn","links":{"wallet":"odyssey-wallet","staking":"","exchange":""}},"ohni":{"name":"Ohni","icon":"icon-ohni","links":{"wallet":"ohni-wallet","staking":"","exchange":""}},"one":{"name":"Harmony","icon":"icon-one","links":{"wallet":"","staking":"","exchange":"btc-to-one-exchange"}},"opt":{"name":"Opus","icon":"icon-opt","links":{"wallet":"opus-wallet","staking":"","exchange":""}},"ost":{"name":"Ost","icon":"icon-ost","links":{"wallet":"ost-wallet","staking":"","exchange":""}},"pix":{"name":"Lampix","icon":"icon-pix","links":{"wallet":"lampix-wallet","staking":"","exchange":""}},"play":{"name":"Herocoin","icon":"icon-play","links":{"wallet":"herocoin-wallet","staking":"","exchange":""}},"plbt":{"name":"Polybius","icon":"icon-plbt","links":{"wallet":"polybius-wallet","staking":"","exchange":""}},"plr":{"name":"Pillar","icon":"icon-plr","links":{"wallet":"pillar-wallet","staking":"","exchange":""}},"plu":{"name":"Pluton","icon":"icon-plu","links":{"wallet":"pluton-wallet","staking":"","exchange":""}},"ply":{"name":"Playcoin","icon":"icon-ply","links":{"wallet":"playcoin-wallet","staking":"","exchange":""}},"poe":{"name":"Po et","icon":"icon-poe","links":{"wallet":"po-et-wallet","staking":"","exchange":""}},"pos":{"name":"Postoken","icon":"icon-pos","links":{"wallet":"postoken-wallet","staking":"","exchange":""}},"pro":{"name":"Propy","icon":"icon-pro","links":{"wallet":"propy-wallet","staking":"","exchange":""}},"prs":{"name":"Pressone","icon":"icon-prs","links":{"wallet":"pressone-wallet","staking":"","exchange":""}},"prsp":{"name":"Prosper","icon":"icon-prsp","links":{"wallet":"prosper-wallet","staking":"","exchange":""}},"pt":{"name":"Pt","icon":"icon-pt","links":{"wallet":"pt-wallet","staking":"","exchange":""}},"put":{"name":"Putincoin","icon":"icon-put","links":{"wallet":"putincoin-wallet","staking":"","exchange":""}},"qash":{"name":"Qash","icon":"icon-qash","links":{"wallet":"qash-wallet","staking":"","exchange":""}},"qau":{"name":"Quantum","icon":"icon-qau","links":{"wallet":"quantum-wallet","staking":"","exchange":""}},"qbt":{"name":"Qbao","icon":"icon-qbt","links":{"wallet":"qbao-wallet","staking":"","exchange":""}},"qrl":{"name":"Quantumresistantledger","icon":"icon-qrl","links":{"wallet":"quantumresistantledger-wallet","staking":"","exchange":""}},"qsp":{"name":"Quantstamp","icon":"icon-qsp","links":{"wallet":"quantstamp-wallet","staking":"","exchange":""}},"amp":{"name":"Amp","icon":"icon-amp","links":{"wallet":"","staking":"","exchange":"btc-to-amp-exchange"}},"qun":{"name":"Qunqun","icon":"icon-qun","links":{"wallet":"qunqun-wallet","staking":"","exchange":""}},"ape":{"name":"ApeCoin","icon":"icon-ape","links":{"wallet":"apecoin-wallet","staking":"","exchange":""}},"rdn":{"name":"Raidennetworktoken","icon":"icon-rdn","links":{"wallet":"raidennetworktoken-wallet","staking":"","exchange":""}},"ref":{"name":"Ref Finance","icon":"icon-ref","links":{"wallet":"","staking":"ref-finance-staking","exchange":""}},"regen":{"name":"Regen Network","icon":"icon-regen","links":{"wallet":"","staking":"regen-network-staking","exchange":""}},"rdd":{"name":"ReddCoin","icon":"icon-rdd","links":{"wallet":"","staking":"","exchange":""}},"ren":{"name":"Ren","icon":"icon-ren","links":{"wallet":"","staking":"","exchange":""}},"req":{"name":"Request","icon":"icon-req","links":{"wallet":"request-wallet","staking":"","exchange":""}},"rex":{"name":"Imbrex","icon":"icon-rex","links":{"wallet":"imbrex-wallet","staking":"","exchange":""}},"rlt":{"name":"Roulettetoken","icon":"icon-rlt","links":{"wallet":"roulettetoken-wallet","staking":"","exchange":""}},"rlx":{"name":"Relex","icon":"icon-rlx","links":{"wallet":"relex-wallet","staking":"","exchange":""}},"round":{"name":"Round","icon":"icon-round","links":{"wallet":"round-wallet","staking":"","exchange":""}},"rsr":{"name":"Reserve Rights","icon":"icon-rsr","links":{"wallet":"","staking":"","exchange":""}},"rsv":{"name":"Reserve","icon":"icon-rsv","links":{"wallet":"","staking":"","exchange":""}},"ruff":{"name":"Ruff","icon":"icon-ruff","links":{"wallet":"ruff-wallet","staking":"","exchange":""}},"rune":{"name":"Rune","icon":"icon-rune","links":{"wallet":"","staking":"","exchange":"btc-to-rune-exchange"}},"rvt":{"name":"Rivetz","icon":"icon-rvt","links":{"wallet":"rivetz-wallet","staking":"","exchange":""}},"san":{"name":"Santimentnetworktoken","icon":"icon-san","links":{"wallet":"santimentnetworktoken-wallet","staking":"","exchange":""}},"sand":{"name":"Sandbox","icon":"icon-sand","links":{"wallet":"sandbox-wallet","staking":"","exchange":""}},"scl":{"name":"Sociall","icon":"icon-scl","links":{"wallet":"sociall-wallet","staking":"","exchange":""}},"sc":{"name":"Siacoin","icon":"icon-sc","links":{"wallet":"siacoin-wallet","staking":"","exchange":"btc-to-sc-exchange"}},"sense":{"name":"Sense","icon":"icon-sense","links":{"wallet":"sense-wallet","staking":"","exchange":""}},"sgel":{"name":"Sgelder","icon":"icon-sgel","links":{"wallet":"sgelder-wallet","staking":"","exchange":""}},"sgt":{"name":"Sgt","icon":"icon-sgt","links":{"wallet":"sgt-wallet","staking":"","exchange":""}},"shib":{"name":"Shiba Inu","icon":"icon-shib","links":{"wallet":"shiba-inu-wallet","staking":"","exchange":"btc-to-shib-exchange"}},"sdt":{"name":"Stake DAO","icon":"icon-sdt","links":{"wallet":"","staking":"stake-dao-sdt","exchange":""}},"shit":{"name":"Shitcoin","icon":"icon-shit","links":{"wallet":"shitcoin-wallet","staking":"","exchange":""}},"shr":{"name":"ShareToken","icon":"icon-shr","links":{"wallet":"","staking":"","exchange":""}},"sift":{"name":"Smartinvestmentfundtoken","icon":"icon-sift","links":{"wallet":"smartinvestmentfundtoken-wallet","staking":"","exchange":""}},"smart":{"name":"SmartCash","icon":"icon-smart","links":{"wallet":"smartcash-wallet","staking":"","exchange":""}},"smt":{"name":"Smt","icon":"icon-smt","links":{"wallet":"smt-wallet","staking":"","exchange":""}},"snc":{"name":"Suncontract","icon":"icon-snc","links":{"wallet":"suncontract-wallet","staking":"","exchange":""}},"snd":{"name":"Snodecoin","icon":"icon-snd","links":{"wallet":"snodecoin-wallet","staking":"","exchange":""}},"sngls":{"name":"Sngls","icon":"icon-sngls","links":{"wallet":"sngls-wallet","staking":"","exchange":""}},"snx":{"name":"Synthetix Network","icon":"icon-snx","links":{"wallet":"","staking":"","exchange":"btc-to-snx-exchange"}},"soul":{"name":"Phantasma","icon":"icon-soul","links":{"wallet":"","staking":"","exchange":""}},"sparta":{"name":"Sparta","icon":"icon-sparta","links":{"wallet":"sparta-wallet","staking":"","exchange":""}},"spc":{"name":"Spacechain","icon":"icon-spc","links":{"wallet":"spacechain-wallet","staking":"","exchange":""}},"sphtx":{"name":"Sophiatx","icon":"icon-sphtx","links":{"wallet":"sophiatx-wallet","staking":"","exchange":""}},"srn":{"name":"Sirin","icon":"icon-srn","links":{"wallet":"sirin-wallet","staking":"","exchange":""}},"stk":{"name":"Stk","icon":"icon-stk","links":{"wallet":"stk-wallet","staking":"","exchange":""}},"storm":{"name":"Storm","icon":"icon-storm","links":{"wallet":"storm-wallet","staking":"","exchange":""}},"strc":{"name":"Starcredits","icon":"icon-strc","links":{"wallet":"starcredits-wallet","staking":"","exchange":""}},"sub":{"name":"Substratum","icon":"icon-sub","links":{"wallet":"substratum-wallet","staking":"","exchange":""}},"sxut":{"name":"Spectre ai","icon":"icon-sxut","links":{"wallet":"spectre-ai-wallet","staking":"","exchange":""}},"syn":{"name":"Synapse","icon":"icon-syn","links":{"wallet":"synapse-wallet","staking":"","exchange":""}},"tbt":{"name":"Tripbit","icon":"icon-tbt","links":{"wallet":"tripbit-wallet","staking":"","exchange":""}},"tfl":{"name":"Trueflip","icon":"icon-tfl","links":{"wallet":"trueflip-wallet","staking":"","exchange":""}},"flr":{"name":"Flare","icon":"icon-flr","links":{"wallet":"flare-wallet","staking":"flare-staking","exchange":""}},"theta":{"name":"Theta","icon":"icon-theta","links":{"wallet":"theta-wallet","staking":"","exchange":"btc-to-theta-exchange"}},"time":{"name":"Time","icon":"icon-time","links":{"wallet":"time-wallet","staking":"","exchange":""}},"tix":{"name":"Blocktix","icon":"icon-tix","links":{"wallet":"blocktix-wallet","staking":"","exchange":""}},"tkn":{"name":"Tokenkard","icon":"icon-tkn","links":{"wallet":"tokenkard-wallet","staking":"","exchange":""}},"tme":{"name":"Timereum","icon":"icon-tme","links":{"wallet":"timereum-wallet","staking":"","exchange":""}},"tnb":{"name":"Timenewbank","icon":"icon-tnb","links":{"wallet":"timenewbank-wallet","staking":"","exchange":""}},"tnt":{"name":"Tierion network token","icon":"icon-tnt","links":{"wallet":"tierion-network-token-wallet","staking":"","exchange":""}},"tpay":{"name":"Tokenpay","icon":"icon-tpay","links":{"wallet":"tokenpay-wallet","staking":"","exchange":""}},"tsl":{"name":"Tesla","icon":"icon-tsl","links":{"wallet":"tesla-wallet","staking":"","exchange":""}},"ukg":{"name":"Unikoin gold","icon":"icon-ukg","links":{"wallet":"unikoin gold-wallet","staking":"","exchange":""}},"uni":{"name":"Uniswap","icon":"icon-uni","links":{"wallet":"","staking":"","exchange":"btc-to-uni-exchange"}},"usdt":{"name":"Tether USD","icon":"icon-usdt","links":{"wallet":"tether-wallet","staking":"","exchange":"btc-to-usdt-exchange"}},"vet":{"name":"VeChain","icon":"icon-vet","links":{"wallet":"vechain-wallet","staking":"vechain-staking","exchange":"btc-to-vet-exchange"}},"veri":{"name":"Veritaseum","icon":"icon-veri","links":{"wallet":"veritaseum-wallet","staking":"","exchange":""}},"vibe":{"name":"Vibecoin","icon":"icon-vibe","links":{"wallet":"vibecoin-wallet","staking":"","exchange":""}},"vibex":{"name":"Vibex","icon":"icon-vibex","links":{"wallet":"vibex-wallet","staking":"","exchange":""}},"viu":{"name":"Viuly","icon":"icon-viu","links":{"wallet":"viuly-wallet","staking":"","exchange":""}},"wct":{"name":"Waves community token","icon":"wct","links":{"wallet":"waves-community-token-wallet","staking":"","exchange":""}},"vsm":{"name":"Voise","icon":"icon-vsm","links":{"wallet":"voise-wallet","staking":"","exchange":""}},"vsl":{"name":"Vslice","icon":"icon-vsl","links":{"wallet":"vslice-wallet","staking":"","exchange":""}},"vrs":{"name":"Veros","icon":"icon-vrs","links":{"wallet":"veros-wallet","staking":"","exchange":""}},"wic":{"name":"Wicoin","icon":"icon-wic","links":{"wallet":"wicoin-wallet","staking":"","exchange":""}},"wpr":{"name":"Wepower","icon":"icon-wpr","links":{"wallet":"wepower-wallet","staking":"","exchange":""}},"wtc":{"name":"Waltonchain","icon":"icon-wtc","links":{"wallet":"waltonchain-wallet","staking":"","exchange":""}},"xaur":{"name":"Xaurum","icon":"icon-xaur","links":{"wallet":"xaurum-wallet","staking":"","exchange":""}},"xyo":{"name":"XYO","icon":"icon-xyo","links":{"wallet":"","staking":"","exchange":""}},"xid":{"name":"Sphereidentity","icon":"icon-xid","links":{"wallet":"sphereidentity-wallet","staking":"","exchange":""}},"xnn":{"name":"Xenon","icon":"icon-xnn","links":{"wallet":"xenon-wallet","staking":"","exchange":""}},"xrl":{"name":"Rialto","icon":"xrl","links":{"wallet":"rialto-wallet","staking":"","exchange":""}},"yupie":{"name":"Yupie","icon":"icon-yupie","links":{"wallet":"yupie-wallet","staking":"","exchange":""}},"gas":{"name":"Gas","icon":"icon-gas","links":{"wallet":"gas-wallet","staking":"","exchange":""}},"btt":{"name":"Bittorrent","icon":"icon-btt","links":{"wallet":"bittorrent-wallet","staking":"","exchange":"btc-to-btt-exchange"}},"xlm":{"name":"Stellar","icon":"icon-xlm","links":{"wallet":"stellar-wallet","staking":"","exchange":"btc-to-xlm-exchange"}},"kin":{"name":"Kin","icon":"icon-kin","links":{"wallet":"kin-coin-wallet","staking":"","exchange":""}},"grs":{"name":"Groestlcoin","icon":"icon-grs","links":{"wallet":"groestlcoin-wallet","staking":"","exchange":""}},"fet":{"name":"Fetch","icon":"icon-fet","links":{"wallet":"fetch-wallet","staking":"","exchange":""}},"lsk":{"name":"Lisk","icon":"icon-lsk","links":{"wallet":"lisk-wallet","staking":"","exchange":""}},"xem":{"name":"NEM","icon":"icon-nem","links":{"wallet":"nem-wallet","staking":"","exchange":"btc-to-xem-exchange"}},"waves":{"name":"Waves","icon":"icon-waves","links":{"wallet":"waves-wallet","staking":"","exchange":"btc-to-waves-exchange"}},"wrx":{"name":"WazirX","icon":"icon-wrx","links":{"wallet":"","staking":"","exchange":""}},"vtho":{"name":"Vethor","icon":"icon-vtho","links":{"wallet":"vethor-wallet","staking":"vechain-staking","exchange":""}},"awc-986":{"name":"Atomic Wallet Token","icon":"icon-awc","links":{"wallet":" ","staking":"","exchange":""}},"ont":{"name":"Ontology","icon":"icon-ont","links":{"wallet":"ontology-wallet","staking":"ontology-staking","exchange":"btc-to-ont-exchange"}},"ong":{"name":"Ontology Gas","icon":"icon-ong","links":{"wallet":"ontology-gas-wallet","staking":"","exchange":""}},"atom":{"name":"Cosmos","icon":"icon-atom","links":{"wallet":"cosmos-wallet","staking":"cosmos-atom-staking","exchange":"btc-to-atom-exchange"}},"sai":{"name":"SAI","icon":"icon-sai","links":{"wallet":"","staking":"","exchange":""}},"sent":{"name":"Sentinel","icon":"icon-sent","links":{"wallet":"sentinel-wallet","staking":"","exchange":""}},"f66":{"name":"Raven","icon":"icon-raven-f66","links":{"wallet":"raven-wallet","staking":"","exchange":""}},"algo":{"name":"Algorand","icon":"icon-algo","links":{"wallet":"algorand-wallet","staking":"","exchange":"btc-to-algo-exchange"}},"usds":{"name":"StableUSD","icon":"icon-usds","links":{"wallet":"stably-dollar-wallet","staking":"","exchange":""}},"hbar":{"name":"Hedera","icon":"icon-hbar","links":{"wallet":"hedera-wallet","staking":"hedera-hbar-staking","exchange":"btc-to-hbar-exchange"}},"1eco":{"name":"1eco","icon":"icon-1ECO","links":{"wallet":"1eco-wallet","staking":"","exchange":""}},"ach":{"name":"Alchemy Pay","icon":"icon-ACH","links":{"wallet":"alchemy pay-wallet","staking":"","exchange":""}},"aergo":{"name":"Aergo","icon":"icon-AERGO","links":{"wallet":"aergo-wallet","staking":"","exchange":""}},"aethc":{"name":"Ankr Reward Bearing Staked ETH","icon":"icon-AETHC","links":{"wallet":"ankr reward bearing staked eth-wallet","staking":"","exchange":""}},"agix":{"name":"SingularityNET","icon":"icon-AGIX","links":{"wallet":"singularitynet-wallet","staking":"","exchange":""}},"agld":{"name":"Adventure Gold","icon":"icon-AGLD","links":{"wallet":"adventure gold-wallet","staking":"","exchange":""}},"akro":{"name":"Akropolis","icon":"icon-AKRO","links":{"wallet":"akropolis-wallet","staking":"","exchange":""}},"alcx":{"name":"Alchemix","icon":"icon-ALCX","links":{"wallet":"alchemix-wallet","staking":"","exchange":""}},"aleph":{"name":"Aleph.im","icon":"icon-ALEPH","links":{"wallet":"aleph.im-wallet","staking":"","exchange":""}},"ali":{"name":"Alethea Artificial Liquid Intelligence Token","icon":"icon-ALI","links":{"wallet":"alethea artificial liquid intelligence token-wallet","staking":"","exchange":""}},"alice":{"name":"MyNeighborAlice","icon":"icon-ALICE","links":{"wallet":"myneighboralice-wallet","staking":"","exchange":""}},"alpaca":{"name":"Alpaca Finance","icon":"icon-ALPACA","links":{"wallet":"alpaca finance-wallet","staking":"","exchange":""}},"alpha":{"name":"Alpha Venture DAO","icon":"icon-ALPHA","links":{"wallet":"alpha venture dao-wallet","staking":"","exchange":""}},"alpine":{"name":"Alpine F1 Team Fan Token","icon":"icon-ALPINE","links":{"wallet":"alpine f1 team fan token-wallet","staking":"","exchange":""}},"alt":{"name":"Alitas","icon":"icon-ALT","links":{"wallet":"alitas-wallet","staking":"","exchange":""}},"amo":{"name":"AMO Coin","icon":"icon-AMO","links":{"wallet":"amo coin-wallet","staking":"","exchange":""}},"ampl":{"name":"Ampleforth","icon":"icon-AMPL","links":{"wallet":"ampleforth-wallet","staking":"","exchange":""}},"ankr":{"name":"Ankr","icon":"icon-ANKR","links":{"wallet":"ankr-wallet","staking":"","exchange":""}},"any":{"name":"Anyswap","icon":"icon-ANY","links":{"wallet":"anyswap-wallet","staking":"","exchange":""}},"api3":{"name":"API3","icon":"icon-API3","links":{"wallet":"api3-wallet","staking":"","exchange":""}},"apx":{"name":"ApolloX","icon":"icon-APX","links":{"wallet":"apollox-wallet","staking":"","exchange":""}},"aqt":{"name":"Alpha Quark Token","icon":"icon-AQT","links":{"wallet":"alpha quark token-wallet","staking":"","exchange":""}},"arpa":{"name":"ARPA Chain","icon":"icon-ARPA","links":{"wallet":"arpa chain-wallet","staking":"","exchange":""}},"asd":{"name":"ASD","icon":"icon-ASD","links":{"wallet":"asd-wallet","staking":"","exchange":""}},"asm":{"name":"Assemble Protocol","icon":"icon-ASM","links":{"wallet":"assemble protocol-wallet","staking":"","exchange":""}},"ata":{"name":"Automata Network","icon":"icon-ATA","links":{"wallet":"automata network-wallet","staking":"","exchange":""}},"audio":{"name":"Audius","icon":"icon-AUDIO","links":{"wallet":"audius-wallet","staking":"","exchange":""}},"aurora":{"name":"Aurora","icon":"icon-AURORA","links":{"wallet":"aurora-wallet","staking":"","exchange":""}},"aury":{"name":"Aurory","icon":"icon-AURY","links":{"wallet":"aurory-wallet","staking":"","exchange":""}},"avinoc":{"name":"AVINOC","icon":"icon-AVINOC","links":{"wallet":"avinoc-wallet","staking":"","exchange":""}},"avax":{"name":"Avalanche","icon":"icon-avax","links":{"wallet":"avalanche-wallet","staking":"","exchange":"btc-to-avax-exchange"}},"baby":{"name":"BabySwap","icon":"icon-BABY","links":{"wallet":"babyswap-wallet","staking":"","exchange":""}},"badger":{"name":"Badger DAO","icon":"icon-BADGER","links":{"wallet":"badger dao-wallet","staking":"","exchange":""}},"bake":{"name":"BakeryToken","icon":"icon-BAKE","links":{"wallet":"bakerytoken-wallet","staking":"","exchange":""}},"bal":{"name":"Balancer","icon":"icon-BAL","links":{"wallet":"balancer-wallet","staking":"","exchange":""}},"bel":{"name":"Bella Protocol","icon":"icon-BEL","links":{"wallet":"bella protocol-wallet","staking":"","exchange":""}},"beta":{"name":"Beta Finance","icon":"icon-BETA","links":{"wallet":"beta finance-wallet","staking":"","exchange":""}},"bfc":{"name":"Bifrost","icon":"icon-BFC","links":{"wallet":"bifrost-wallet","staking":"","exchange":""}},"bico":{"name":"Biconomy","icon":"icon-BICO","links":{"wallet":"biconomy-wallet","staking":"","exchange":""}},"bifi":{"name":"Beefy Finance","icon":"icon-BIFI","links":{"wallet":"beefy finance-wallet","staking":"","exchange":""}},"bit":{"name":"BitDAO","icon":"icon-BIT","links":{"wallet":"bitdao-wallet","staking":"","exchange":""}},"blct":{"name":"Bloomzed Loyalty Club Ticket","icon":"icon-BLCT","links":{"wallet":"bloomzed loyalty club ticket-wallet","staking":"","exchange":""}},"bmx":{"name":"BitMart Token","icon":"icon-BMX","links":{"wallet":"bitmart token-wallet","staking":"","exchange":""}},"bnana":{"name":"Chimpion","icon":"icon-BNANA","links":{"wallet":"chimpion-wallet","staking":"","exchange":""}},"bnx":{"name":"BinaryX","icon":"icon-BNX","links":{"wallet":"binaryx-wallet","staking":"","exchange":""}},"bond":{"name":"BarnBridge","icon":"icon-BOND","links":{"wallet":"barnbridge-wallet","staking":"","exchange":""}},"boo":{"name":"SpookySwap","icon":"icon-BOO","links":{"wallet":"spookyswap-wallet","staking":"","exchange":""}},"boson":{"name":"Boson Protocol","icon":"icon-BOSON","links":{"wallet":"boson protocol-wallet","staking":"","exchange":""}},"brg":{"name":"Bridge Oracle","icon":"icon-BRG","links":{"wallet":"bridge oracle-wallet","staking":"","exchange":""}},"bsw":{"name":"Biswap","icon":"icon-BSW","links":{"wallet":"biswap-wallet","staking":"","exchange":""}},"btcb":{"name":"Bitcoin BEP2","icon":"icon-BTCB","links":{"wallet":"bitcoin bep2-wallet","staking":"","exchange":""}},"btcst":{"name":"Bitcoin Standard Hashrate Token","icon":"icon-BTCST","links":{"wallet":"bitcoin standard hashrate token-wallet","staking":"","exchange":""}},"btrst":{"name":"Braintrust","icon":"icon-BTRST","links":{"wallet":"braintrust-wallet","staking":"","exchange":""}},"btse":{"name":"BTSE","icon":"icon-BTSE","links":{"wallet":"btse-wallet","staking":"","exchange":""}},"burger":{"name":"BurgerCities","icon":"icon-BURGER","links":{"wallet":"burgercities-wallet","staking":"","exchange":""}},"bzrx":{"name":"bZx Protocol","icon":"icon-BZRX","links":{"wallet":"bzx protocol-wallet","staking":"","exchange":""}},"bzz":{"name":"Swarm","icon":"icon-BZZ","links":{"wallet":"swarm-wallet","staking":"","exchange":""}},"c98":{"name":"Coin98","icon":"icon-C98","links":{"wallet":"coin98-wallet","staking":"","exchange":""}},"cbg":{"name":"Chainbing","icon":"icon-CBG","links":{"wallet":"chainbing-wallet","staking":"","exchange":""}},"change":{"name":"ChangeX","icon":"icon-change","links":{"wallet":"","staking":"changex-staking","exchange":""}},"cbk":{"name":"Cobak Token","icon":"icon-CBK","links":{"wallet":"cobak token-wallet","staking":"","exchange":""}},"ceek":{"name":"CEEK VR","icon":"icon-CEEK","links":{"wallet":"ceek vr-wallet","staking":"","exchange":""}},"cel":{"name":"Celsius","icon":"icon-CEL","links":{"wallet":"celsius-wallet","staking":"","exchange":""}},"chess":{"name":"Tranchess","icon":"icon-CHESS","links":{"wallet":"tranchess-wallet","staking":"","exchange":""}},"chsb":{"name":"SwissBorg","icon":"icon-CHSB","links":{"wallet":"swissborg-wallet","staking":"","exchange":""}},"clt":{"name":"CoinLoan","icon":"icon-CLT","links":{"wallet":"coinloan-wallet","staking":"","exchange":""}},"clv":{"name":"CLV","icon":"icon-CLV","links":{"wallet":"clv-wallet","staking":"","exchange":""}},"cocos":{"name":"Cocos-BCX","icon":"icon-COCOS","links":{"wallet":"cocos-bcx-wallet","staking":"","exchange":""}},"con":{"name":"CONUN","icon":"icon-CON","links":{"wallet":"conun-wallet","staking":"","exchange":""}},"core":{"name":"cVault.finance","icon":"icon-CORE","links":{"wallet":"cvault.finance-wallet","staking":"","exchange":""}},"coval":{"name":"Circuits of Value","icon":"icon-COVAL","links":{"wallet":"circuits of value-wallet","staking":"","exchange":""}},"cqt":{"name":"Covalent","icon":"icon-CQT","links":{"wallet":"covalent-wallet","staking":"","exchange":""}},"val":{"name":"Validity","icon":"icon-val","links":{"wallet":"","staking":"validity-staking","exchange":""}},"cre":{"name":"Carry","icon":"icon-CRE","links":{"wallet":"carry-wallet","staking":"","exchange":""}},"crts":{"name":"Cratos","icon":"icon-CRTS","links":{"wallet":"cratos-wallet","staking":"","exchange":""}},"crv":{"name":"Curve DAO Token","icon":"icon-CRV","links":{"wallet":"curve dao token-wallet","staking":"","exchange":""}},"ctcn":{"name":"CONTRACOIN","icon":"icon-CTCN","links":{"wallet":"contracoin-wallet","staking":"","exchange":""}},"cube":{"name":"Somnium Space Cubes","icon":"icon-CUBE","links":{"wallet":"somnium space cubes-wallet","staking":"","exchange":""}},"cudos":{"name":"CUDOS","icon":"icon-CUDOS","links":{"wallet":"cudos-wallet","staking":"","exchange":""}},"cult":{"name":"Cult DAO","icon":"icon-CULT","links":{"wallet":"cult dao-wallet","staking":"","exchange":""}},"cvx":{"name":"Convex Finance","icon":"icon-CVX","links":{"wallet":"convex finance-wallet","staking":"","exchange":""}},"dad":{"name":"DAD","icon":"icon-DAD","links":{"wallet":"dad-wallet","staking":"","exchange":""}},"dodo":{"name":"DODO","icon":"icon-dodo","links":{"wallet":"","staking":"dodo-staking","exchange":""}},"dar":{"name":"Mines of Dalarnia","icon":"icon-DAR","links":{"wallet":"mines of dalarnia-wallet","staking":"","exchange":""}},"dawn":{"name":"Dawn Protocol","icon":"icon-DAWN","links":{"wallet":"dawn protocol-wallet","staking":"","exchange":""}},"ddx":{"name":"DerivaDAO","icon":"icon-DDX","links":{"wallet":"derivadao-wallet","staking":"","exchange":""}},"dep":{"name":"DEAPcoin","icon":"icon-DEP","links":{"wallet":"deapcoin-wallet","staking":"","exchange":""}},"dg":{"name":"Decentral Games","icon":"icon-DG","links":{"wallet":"decentral games-wallet","staking":"","exchange":""}},"dia":{"name":"DIA","icon":"icon-DIA","links":{"wallet":"dia-wallet","staking":"","exchange":""}},"dka":{"name":"dKargo","icon":"icon-DKA","links":{"wallet":"dkargo-wallet","staking":"","exchange":""}},"dpi":{"name":"DeFi Pulse Index","icon":"icon-DPI","links":{"wallet":"defi pulse index-wallet","staking":"","exchange":""}},"dpr":{"name":"Deeper Network","icon":"icon-DPR","links":{"wallet":"deeper network-wallet","staking":"","exchange":""}},"drep":{"name":"Drep [new]","icon":"icon-DREP","links":{"wallet":"drep [new]-wallet","staking":"","exchange":""}},"dusk":{"name":"Dusk Network","icon":"icon-DUSK","links":{"wallet":"dusk network-wallet","staking":"","exchange":""}},"dvf":{"name":"DeversiFi","icon":"icon-DVF","links":{"wallet":"deversifi-wallet","staking":"","exchange":""}},"dvi":{"name":"Dvision Network","icon":"icon-DVI","links":{"wallet":"dvision network-wallet","staking":"","exchange":""}},"dx":{"name":"DxChain Token","icon":"icon-DX","links":{"wallet":"dxchain token-wallet","staking":"","exchange":""}},"dxd":{"name":"DXdao","icon":"icon-DXD","links":{"wallet":"dxdao-wallet","staking":"","exchange":""}},"dydx":{"name":"dYdX","icon":"icon-DYDX","links":{"wallet":"dydx-wallet","staking":"","exchange":""}},"efi":{"name":"Efinity Token","icon":"icon-EFI","links":{"wallet":"efinity token-wallet","staking":"","exchange":""}},"egg":{"name":"Nestree","icon":"icon-EGG","links":{"wallet":"nestree-wallet","staking":"","exchange":""}},"elon":{"name":"Dogelon Mars","icon":"icon-ELON","links":{"wallet":"dogelon mars-wallet","staking":"","exchange":""}},"ens":{"name":"Ethereum Name Service","icon":"icon-ENS","links":{"wallet":"ethereum name service-wallet","staking":"","exchange":""}},"eps":{"name":"Ellipsis","icon":"icon-EPS","links":{"wallet":"ellipsis-wallet","staking":"","exchange":""}},"ern":{"name":"Ethernity","icon":"icon-ERN","links":{"wallet":"ethernity-wallet","staking":"","exchange":""}},"eum":{"name":"Elitium","icon":"icon-EUM","links":{"wallet":"elitium-wallet","staking":"","exchange":""}},"exrd":{"name":"e-Radix","icon":"icon-EXRD","links":{"wallet":"e-radix-wallet","staking":"","exchange":""}},"farm":{"name":"Harvest Finance","icon":"icon-FARM","links":{"wallet":"harvest finance-wallet","staking":"","exchange":""}},"fei":{"name":"Fei USD","icon":"icon-FEI","links":{"wallet":"fei usd-wallet","staking":"","exchange":""}},"fis":{"name":"StaFi","icon":"icon-FIS","links":{"wallet":"stafi-wallet","staking":"","exchange":""}},"fleta":{"name":"FLETA","icon":"icon-FLETA","links":{"wallet":"fleta-wallet","staking":"","exchange":""}},"forth":{"name":"Ampleforth Governance Token","icon":"icon-FORTH","links":{"wallet":"ampleforth governance token-wallet","staking":"","exchange":""}},"fox":{"name":"Shapeshift FOX Token","icon":"icon-FOX","links":{"wallet":"shapeshift fox token-wallet","staking":"","exchange":""}},"frax":{"name":"Frax","icon":"icon-FRAX","links":{"wallet":"frax-wallet","staking":"","exchange":""}},"front":{"name":"Frontier","icon":"icon-FRONT","links":{"wallet":"frontier-wallet","staking":"","exchange":""}},"fx":{"name":"Function X","icon":"icon-FX","links":{"wallet":"function x-wallet","staking":"","exchange":""}},"fxs":{"name":"Frax Share","icon":"icon-FXS","links":{"wallet":"frax share-wallet","staking":"","exchange":""}},"gal":{"name":"Project Galaxy","icon":"icon-GAL","links":{"wallet":"project galaxy-wallet","staking":"","exchange":""}},"ghst":{"name":"Aavegotchi","icon":"icon-GHST","links":{"wallet":"aavegotchi-wallet","staking":"","exchange":""}},"gmt":{"name":"STEPN","icon":"icon-GMT","links":{"wallet":"stepn-wallet","staking":"","exchange":""}},"gt":{"name":"GateToken","icon":"icon-GT","links":{"wallet":"gatetoken-wallet","staking":"","exchange":""}},"gyen":{"name":"GYEN","icon":"icon-GYEN","links":{"wallet":"gyen-wallet","staking":"","exchange":""}},"hard":{"name":"Kava Lend","icon":"icon-HARD","links":{"wallet":"kava-lend-wallet","staking":"kava-staking","exchange":""}},"hbtc":{"name":"Huobi BTC","icon":"icon-HBTC","links":{"wallet":"huobi btc-wallet","staking":"","exchange":""}},"hedg":{"name":"HedgeTrade","icon":"icon-HEDG","links":{"wallet":"hedgetrade-wallet","staking":"","exchange":""}},"hero":{"name":"Metahero","icon":"icon-HERO","links":{"wallet":"metahero-wallet","staking":"","exchange":""}},"hi":{"name":"HI","icon":"icon-HI","links":{"wallet":"hi-wallet","staking":"","exchange":""}},"hoo":{"name":"Hoo Token","icon":"icon-HOO","links":{"wallet":"hoo token-wallet","staking":"","exchange":""}},"ht":{"name":"Huobi Token","icon":"icon-HT","links":{"wallet":"huobi token-wallet","staking":"","exchange":""}},"hum":{"name":"Humanscape","icon":"icon-HUM","links":{"wallet":"humanscape-wallet","staking":"","exchange":""}},"hunt":{"name":"HUNT","icon":"icon-HUNT","links":{"wallet":"hunt-wallet","staking":"","exchange":""}},"husd":{"name":"HUSD","icon":"icon-HUSD","links":{"wallet":"husd-wallet","staking":"","exchange":""}},"hxro":{"name":"Hxro","icon":"icon-HXRO","links":{"wallet":"hxro-wallet","staking":"","exchange":""}},"ichi":{"name":"ICHI","icon":"icon-ICHI","links":{"wallet":"ichi-wallet","staking":"","exchange":""}},"idex":{"name":"IDEX","icon":"icon-IDEX","links":{"wallet":"idex-wallet","staking":"","exchange":""}},"ilv":{"name":"Illuvium","icon":"icon-ILV","links":{"wallet":"illuvium-wallet","staking":"","exchange":""}},"imx":{"name":"Immutable X","icon":"icon-IMX","links":{"wallet":"immutable x-wallet","staking":"","exchange":""}},"inj":{"name":"Injective","icon":"icon-INJ","links":{"wallet":"injective-wallet","staking":"","exchange":""}},"iq":{"name":"Everipedia","icon":"icon-IQ","links":{"wallet":"everipedia-wallet","staking":"","exchange":""}},"jasmy":{"name":"JasmyCoin","icon":"icon-JASMY","links":{"wallet":"jasmycoin-wallet","staking":"","exchange":""}},"jst":{"name":"JUST","icon":"icon-JST","links":{"wallet":"just-wallet","staking":"","exchange":""}},"kava":{"name":"Kava","icon":"icon-kava","links":{"wallet":"kava-wallet","staking":"kava-staking","exchange":""}},"keep":{"name":"Keep Network","icon":"icon-KEEP","links":{"wallet":"keep network-wallet","staking":"","exchange":""}},"key":{"name":"SelfKey","icon":"icon-KEY","links":{"wallet":"selfkey-wallet","staking":"","exchange":""}},"klv":{"name":"Klever","icon":"icon-KLV","links":{"wallet":"klever-wallet","staking":"","exchange":""}},"kok":{"name":"KOK","icon":"icon-KOK","links":{"wallet":"kok-wallet","staking":"","exchange":""}},"kp3r":{"name":"Keep3rV1","icon":"icon-KP3R","links":{"wallet":"keep3rv1-wallet","staking":"","exchange":""}},"lcx":{"name":"LCX","icon":"icon-LCX","links":{"wallet":"lcx-wallet","staking":"","exchange":""}},"ldo":{"name":"Lido DAO","icon":"icon-LDO","links":{"wallet":"lido dao-wallet","staking":"","exchange":""}},"lina":{"name":"Linear Finance","icon":"icon-LINA","links":{"wallet":"linear finance-wallet","staking":"","exchange":""}},"lit":{"name":"Litentry","icon":"icon-LIT","links":{"wallet":"litentry-wallet","staking":"","exchange":""}},"locus":{"name":"Locus Chain","icon":"icon-LOCUS","links":{"wallet":"locus chain-wallet","staking":"","exchange":""}},"lon":{"name":"Tokenlon Network Token","icon":"icon-LON","links":{"wallet":"tokenlon network token-wallet","staking":"","exchange":""}},"looks":{"name":"LooksRare","icon":"icon-LOOKS","links":{"wallet":"looksrare-wallet","staking":"","exchange":""}},"lpt":{"name":"Livepeer","icon":"icon-LPT","links":{"wallet":"livepeer-wallet","staking":"","exchange":""}},"lqty":{"name":"Liquity","icon":"icon-LQTY","links":{"wallet":"liquity-wallet","staking":"","exchange":""}},"lusd":{"name":"Liquity USD","icon":"icon-LUSD","links":{"wallet":"liquity usd-wallet","staking":"","exchange":""}},"lyxe":{"name":"LUKSO","icon":"icon-LYXE","links":{"wallet":"lukso-wallet","staking":"","exchange":""}},"mask":{"name":"Mask Network","icon":"icon-MASK","links":{"wallet":"mask network-wallet","staking":"","exchange":""}},"mina":{"name":"Mina","icon":"icon-mina","links":{"wallet":"","staking":"mina-staking","exchange":""}},"math":{"name":"MATH","icon":"icon-MATH","links":{"wallet":"math-wallet","staking":"","exchange":""}},"mbox":{"name":"MOBOX","icon":"icon-MBOX","links":{"wallet":"mobox-wallet","staking":"","exchange":""}},"mc":{"name":"Merit Circle","icon":"icon-MC","links":{"wallet":"merit circle-wallet","staking":"","exchange":""}},"mct":{"name":"Metacraft","icon":"icon-MCT","links":{"wallet":"metacraft-wallet","staking":"","exchange":""}},"metis":{"name":"MetisDAO","icon":"icon-METIS","links":{"wallet":"metisdao-wallet","staking":"","exchange":""}},"mev":{"name":"MEVerse","icon":"icon-MEV","links":{"wallet":"meverse-wallet","staking":"","exchange":""}},"mft":{"name":"Hifi Finance","icon":"icon-MFT","links":{"wallet":"hifi finance-wallet","staking":"","exchange":""}},"mnw":{"name":"Morpheus.Network","icon":"icon-MNW","links":{"wallet":"morpheus.network-wallet","staking":"","exchange":""}},"moc":{"name":"Moss Coin","icon":"icon-MOC","links":{"wallet":"moss coin-wallet","staking":"","exchange":""}},"mpl":{"name":"Maple","icon":"icon-MPL","links":{"wallet":"maple-wallet","staking":"","exchange":""}},"msb":{"name":"Misbloc","icon":"icon-MSB","links":{"wallet":"misbloc-wallet","staking":"","exchange":""}},"musd":{"name":"mStable USD","icon":"icon-MUSD","links":{"wallet":"mstable usd-wallet","staking":"","exchange":""}},"mv":{"name":"GensoKishi Metaverse","icon":"icon-MV","links":{"wallet":"gensokishi metaverse-wallet","staking":"","exchange":""}},"mvl":{"name":"MVL","icon":"icon-MVL","links":{"wallet":"mvl-wallet","staking":"","exchange":""}},"mx":{"name":"MX TOKEN","icon":"icon-MX","links":{"wallet":"mx token-wallet","staking":"","exchange":""}},"mxc":{"name":"MXC","icon":"icon-MXC","links":{"wallet":"mxc-wallet","staking":"","exchange":""}},"nct":{"name":"PolySwarm","icon":"icon-NCT","links":{"wallet":"polyswarm-wallet","staking":"","exchange":""}},"nest":{"name":"NEST Protocol","icon":"icon-NEST","links":{"wallet":"nest protocol-wallet","staking":"","exchange":""}},"apenft":{"name":"APENFT","icon":"icon-ape","links":{"wallet":"apenft-wallet","staking":"","exchange":""}},"nft":{"name":"NFT","icon":"icon-nft","links":{"wallet":"nft-wallet","staking":"","exchange":""}},"ngm":{"name":"e-Money","icon":"icon-ngm","links":{"wallet":"","staking":"e-money-staking","exchange":""}},"noia":{"name":"Syntropy","icon":"icon-NOIA","links":{"wallet":"syntropy-wallet","staking":"","exchange":""}},"nsbt":{"name":"Neutrino Token","icon":"icon-NSBT","links":{"wallet":"neutrino token-wallet","staking":"","exchange":""}},"nu":{"name":"NuCypher","icon":"icon-NU","links":{"wallet":"nucypher-wallet","staking":"","exchange":""}},"nxm":{"name":"NXM","icon":"icon-NXM","links":{"wallet":"nxm-wallet","staking":"","exchange":""}},"ocean":{"name":"Ocean Protocol","icon":"icon-OCEAN","links":{"wallet":"ocean protocol-wallet","staking":"","exchange":""}},"osmo":{"name":"Osmosis","icon":"icon-osmo","links":{"wallet":"osmosis-wallet","staking":"osmosis-staking","exchange":""}},"ohm":{"name":"Olympus v1","icon":"icon-ohm","links":{"wallet":"","staking":"olympus-v1-staking","exchange":""}},"okb":{"name":"OKB","icon":"icon-OKB","links":{"wallet":"okb-wallet","staking":"","exchange":""}},"om":{"name":"MANTRA DAO","icon":"icon-OM","links":{"wallet":"mantra dao-wallet","staking":"","exchange":""}},"onit":{"name":"ONBUFF","icon":"icon-ONIT","links":{"wallet":"onbuff-wallet","staking":"","exchange":""}},"onus":{"name":"ONUS","icon":"icon-ONUS","links":{"wallet":"onus-wallet","staking":"","exchange":""}},"orbs":{"name":"Orbs","icon":"icon-ORBS","links":{"wallet":"orbs-wallet","staking":"","exchange":""}},"orc":{"name":"Orbit Chain","icon":"icon-ORC","links":{"wallet":"orbit chain-wallet","staking":"","exchange":""}},"orn":{"name":"Orion Protocol","icon":"icon-ORN","links":{"wallet":"orion protocol-wallet","staking":"","exchange":""}},"ousd":{"name":"Origin Dollar","icon":"icon-OUSD","links":{"wallet":"origin dollar-wallet","staking":"","exchange":""}},"paxg":{"name":"PAX Gold","icon":"icon-PAXG","links":{"wallet":"pax gold-wallet","staking":"","exchange":""}},"people":{"name":"ConstitutionDAO","icon":"icon-PEOPLE","links":{"wallet":"constitutiondao-wallet","staking":"","exchange":""}},"perp":{"name":"Perpetual Protocol","icon":"icon-PERP","links":{"wallet":"perpetual protocol-wallet","staking":"","exchange":""}},"pit":{"name":"Pitbull","icon":"icon-PIT","links":{"wallet":"pitbull-wallet","staking":"","exchange":""}},"pla":{"name":"PlayDapp","icon":"icon-PLA","links":{"wallet":"playdapp-wallet","staking":"","exchange":""}},"pltc":{"name":"PlatonCoin","icon":"icon-PLTC","links":{"wallet":"platoncoin-wallet","staking":"","exchange":""}},"ton":{"name":"TonCoin","icon":"icon-TON","links":{"wallet":"toncoin-ton-wallet","staking":"","exchange":""}},"pnk":{"name":"Kleros","icon":"icon-PNK","links":{"wallet":"kleros-wallet","staking":"","exchange":""}},"pols":{"name":"Polkastarter","icon":"icon-POLS","links":{"wallet":"polkastarter-wallet","staking":"","exchange":""}},"pond":{"name":"Marlin","icon":"icon-POND","links":{"wallet":"marlin-wallet","staking":"","exchange":""}},"pre":{"name":"Presearch","icon":"icon-PRE","links":{"wallet":"presearch-wallet","staking":"","exchange":""}},"prom":{"name":"Prom","icon":"icon-PROM","links":{"wallet":"prom-wallet","staking":"","exchange":""}},"prq":{"name":"PARSIQ","icon":"icon-PRQ","links":{"wallet":"parsiq-wallet","staking":"","exchange":""}},"pyr":{"name":"Vulcan Forged PYR","icon":"icon-PYR","links":{"wallet":"vulcan forged pyr-wallet","staking":"","exchange":""}},"qkc":{"name":"QuarkChain","icon":"icon-QKC","links":{"wallet":"quarkchain-wallet","staking":"","exchange":""}},"qom":{"name":"Shiba Predator","icon":"icon-QOM","links":{"wallet":"shiba predator-wallet","staking":"","exchange":""}},"qrdo":{"name":"Qredo","icon":"icon-QRDO","links":{"wallet":"qredo-wallet","staking":"","exchange":""}},"quack":{"name":"RichQUACK.com","icon":"icon-QUACK","links":{"wallet":"richquack.com-wallet","staking":"","exchange":""}},"raca":{"name":"RadioCaca","icon":"icon-RACA","links":{"wallet":"radiocaca-wallet","staking":"","exchange":""}},"ramp":{"name":"RAMP","icon":"icon-RAMP","links":{"wallet":"ramp-wallet","staking":"","exchange":""}},"rare":{"name":"SuperRare","icon":"icon-RARE","links":{"wallet":"superrare-wallet","staking":"","exchange":""}},"rari":{"name":"Rarible","icon":"icon-RARI","links":{"wallet":"rarible-wallet","staking":"","exchange":""}},"ray":{"name":"Raydium","icon":"icon-RAY","links":{"wallet":"raydium-wallet","staking":"","exchange":""}},"rbn":{"name":"Ribbon Finance","icon":"icon-RBN","links":{"wallet":"ribbon finance-wallet","staking":"","exchange":""}},"reap":{"name":"ReapChain","icon":"icon-REAP","links":{"wallet":"reapchain-wallet","staking":"","exchange":""}},"renbtc":{"name":"renBTC","icon":"icon-RENBTC","links":{"wallet":"renbtc-wallet","staking":"","exchange":""}},"rev":{"name":"Revain","icon":"icon-REV","links":{"wallet":"revain-wallet","staking":"","exchange":""}},"rfr":{"name":"Refereum","icon":"icon-RFR","links":{"wallet":"refereum-wallet","staking":"","exchange":""}},"rgt":{"name":"Rari Governance Token","icon":"icon-RGT","links":{"wallet":"rari governance token-wallet","staking":"","exchange":""}},"rise":{"name":"EverRise","icon":"icon-RISE","links":{"wallet":"everrise-wallet","staking":"","exchange":""}},"rkn":{"name":"Rakon","icon":"icon-RKN","links":{"wallet":"rakon-wallet","staking":"","exchange":""}},"rly":{"name":"Rally","icon":"icon-RLY","links":{"wallet":"rally-wallet","staking":"","exchange":""}},"rmrk":{"name":"RMRK","icon":"icon-RMRK","links":{"wallet":"rmrk-wallet","staking":"","exchange":""}},"rndr":{"name":"Render Token","icon":"icon-RNDR","links":{"wallet":"render token-wallet","staking":"","exchange":""}},"rose":{"name":"Oasis Network","icon":"icon-ROSE","links":{"wallet":"oasis network-wallet","staking":"","exchange":""}},"rpl":{"name":"Rocket Pool","icon":"icon-RPL","links":{"wallet":"rocket pool-wallet","staking":"","exchange":""}},"rss3":{"name":"RSS3","icon":"icon-RSS3","links":{"wallet":"rss3-wallet","staking":"","exchange":""}},"safemoon":{"name":"SafeMoon","icon":"icon-SAFEMOON","links":{"wallet":"safemoon-wallet","staking":"","exchange":""}},"sfp":{"name":"SafePal","icon":"icon-SFP","links":{"wallet":"safepal-wallet","staking":"","exchange":""}},"sfund":{"name":"Seedify.fund","icon":"icon-SFUND","links":{"wallet":"seedify.fund-wallet","staking":"","exchange":""}},"shping":{"name":"SHPING","icon":"icon-SHPING","links":{"wallet":"shping-wallet","staking":"","exchange":""}},"skl":{"name":"SKALE Network","icon":"icon-SKL","links":{"wallet":"skale network-wallet","staking":"","exchange":""}},"slp":{"name":"Smooth Love Potion","icon":"icon-SLP","links":{"wallet":"smooth love potion-wallet","staking":"","exchange":""}},"snl":{"name":"Sport and Leisure","icon":"icon-SNL","links":{"wallet":"sport and leisure-wallet","staking":"","exchange":""}},"solo":{"name":"Sologenic","icon":"icon-SOLO","links":{"wallet":"sologenic-wallet","staking":"","exchange":""}},"sos":{"name":"OpenDAO","icon":"icon-SOS","links":{"wallet":"opendao-wallet","staking":"","exchange":""}},"spell":{"name":"Spell Token","icon":"icon-SPELL","links":{"wallet":"spell token-wallet","staking":"","exchange":""}},"sps":{"name":"Splintershards","icon":"icon-SPS","links":{"wallet":"splintershards-wallet","staking":"","exchange":""}},"ssv":{"name":"ssv.network","icon":"icon-SSV","links":{"wallet":"ssv.network-wallet","staking":"","exchange":""}},"stake":{"name":"STAKE","icon":"icon-STAKE","links":{"wallet":"stake-wallet","staking":"","exchange":""}},"starl":{"name":"Starlink","icon":"icon-STARL","links":{"wallet":"starlink-wallet","staking":"","exchange":""}},"stc":{"name":"Student Coin","icon":"icon-STC","links":{"wallet":"student coin-wallet","staking":"","exchange":""}},"steth":{"name":"Lido Staked ETH","icon":"icon-STETH","links":{"wallet":"lido staked eth-wallet","staking":"","exchange":""}},"stg":{"name":"Stargate Finance","icon":"icon-STG","links":{"wallet":"stargate finance-wallet","staking":"","exchange":""}},"stmx":{"name":"StormX","icon":"icon-STMX","links":{"wallet":"stormx-wallet","staking":"","exchange":""}},"stpt":{"name":"Standard Tokenization Protocol","icon":"icon-STPT","links":{"wallet":"standard tokenization protocol-wallet","staking":"","exchange":""}},"strk":{"name":"Strike","icon":"icon-STRK","links":{"wallet":"strike-wallet","staking":"","exchange":""}},"sun":{"name":"Sun (New)","icon":"icon-SUN","links":{"wallet":"sun (new)-wallet","staking":"","exchange":""}},"super":{"name":"SuperFarm","icon":"icon-SUPER","links":{"wallet":"superfarm-wallet","staking":"","exchange":""}},"sure":{"name":"inSure DeFi","icon":"icon-SURE","links":{"wallet":"insure defi-wallet","staking":"","exchange":""}},"insur":{"name":"InsurAce","icon":"icon-insur","links":{"wallet":"","staking":"insurace-staking","exchange":""}},"susd":{"name":"sUSD","icon":"icon-SUSD","links":{"wallet":"susd-wallet","staking":"","exchange":""}},"swap":{"name":"TrustSwap","icon":"icon-SWAP","links":{"wallet":"trustswap-wallet","staking":"","exchange":""}},"t":{"name":"Threshold","icon":"icon-T","links":{"wallet":"threshold-wallet","staking":"","exchange":""}},"tifi":{"name":"TiFi Token","icon":"icon-TIFI","links":{"wallet":"tifi token-wallet","staking":"","exchange":""}},"titan":{"name":"TitanSwap","icon":"icon-TITAN","links":{"wallet":"titanswap-wallet","staking":"","exchange":""}},"tko":{"name":"Toko Token","icon":"icon-TKO","links":{"wallet":"toko token-wallet","staking":"","exchange":""}},"tlm":{"name":"Alien Worlds","icon":"icon-TLM","links":{"wallet":"alien worlds-wallet","staking":"","exchange":""}},"torn":{"name":"Tornado Cash","icon":"icon-TORN","links":{"wallet":"tornado cash-wallet","staking":"","exchange":""}},"tpt":{"name":"TokenPocket","icon":"icon-TPT","links":{"wallet":"tokenpocket-wallet","staking":"","exchange":""}},"trac":{"name":"OriginTrail","icon":"icon-TRAC","links":{"wallet":"origintrail-wallet","staking":"","exchange":""}},"trb":{"name":"Tellor","icon":"icon-TRB","links":{"wallet":"tellor-wallet","staking":"","exchange":""}},"tribe":{"name":"Tribe","icon":"icon-TRIBE","links":{"wallet":"tribe-wallet","staking":"","exchange":""}},"troy":{"name":"TROY","icon":"icon-TROY","links":{"wallet":"troy-wallet","staking":"","exchange":""}},"tru":{"name":"TrueFi","icon":"icon-TRU","links":{"wallet":"truefi-wallet","staking":"","exchange":""}},"ttt":{"name":"The Transfer Token","icon":"icon-TTT","links":{"wallet":"the transfer token-wallet","staking":"","exchange":""}},"tvk":{"name":"Virtua","icon":"icon-TVK","links":{"wallet":"virtua-wallet","staking":"","exchange":""}},"twt":{"name":"Trust Wallet Token","icon":"icon-TWT","links":{"wallet":"trust wallet token-wallet","staking":"","exchange":""}},"ubt":{"name":"Unibright","icon":"icon-UBT","links":{"wallet":"unibright-wallet","staking":"","exchange":""}},"ufo":{"name":"UFO Gaming","icon":"icon-UFO","links":{"wallet":"ufo gaming-wallet","staking":"","exchange":""}},"ult":{"name":"Ultiledger","icon":"icon-ULT","links":{"wallet":"ultiledger-wallet","staking":"","exchange":""}},"uma":{"name":"UMA","icon":"icon-UMA","links":{"wallet":"uma-wallet","staking":"","exchange":""}},"unfi":{"name":"Unifi Protocol DAO","icon":"icon-UNFI","links":{"wallet":"unifi protocol dao-wallet","staking":"","exchange":""}},"uos":{"name":"Ultra","icon":"icon-UOS","links":{"wallet":"ultra-wallet","staking":"","exchange":""}},"upp":{"name":"Sentinel Protocol","icon":"icon-UPP","links":{"wallet":"sentinel protocol-wallet","staking":"","exchange":""}},"uqc":{"name":"Uquid Coin","icon":"icon-UQC","links":{"wallet":"uquid coin-wallet","staking":"","exchange":""}},"usdd":{"name":"USDD","icon":"icon-USDD","links":{"wallet":"usdd-wallet","staking":"","exchange":""}},"usdk":{"name":"USDK","icon":"icon-USDK","links":{"wallet":"usdk-wallet","staking":"","exchange":""}},"usdn":{"name":"Neutrino USD","icon":"icon-USDN","links":{"wallet":"neutrino usd-wallet","staking":"","exchange":""}},"utk":{"name":"Utrust","icon":"icon-UTK","links":{"wallet":"utrust-wallet","staking":"","exchange":""}},"vai":{"name":"Vai","icon":"icon-VAI","links":{"wallet":"vai-wallet","staking":"","exchange":""}},"vbusd":{"name":"Venus BUSD","icon":"icon-VBUSD","links":{"wallet":"venus busd-wallet","staking":"","exchange":""}},"vega":{"name":"Vega Protocol","icon":"icon-VEGA","links":{"wallet":"vega protocol-wallet","staking":"","exchange":""}},"velo":{"name":"Velo","icon":"icon-VELO","links":{"wallet":"velo-wallet","staking":"","exchange":""}},"vr":{"name":"Victoria VR","icon":"icon-VR","links":{"wallet":"victoria vr-wallet","staking":"","exchange":""}},"vra":{"name":"Verasity","icon":"icon-VRA","links":{"wallet":"verasity-wallet","staking":"","exchange":""}},"vusdc":{"name":"Venus USDC","icon":"icon-VUSDC","links":{"wallet":"venus usdc-wallet","staking":"","exchange":""}},"vusdt":{"name":"Venus USDT","icon":"icon-VUSDT","links":{"wallet":"venus usdt-wallet","staking":"","exchange":""}},"vxvs":{"name":"Venus XVS","icon":"icon-VXVS","links":{"wallet":"venus xvs-wallet","staking":"","exchange":""}},"wbnb":{"name":"Wrapped BNB","icon":"icon-WBNB","links":{"wallet":"wrapped bnb-wallet","staking":"","exchange":""}},"wbtc":{"name":"Wrapped Bitcoin","icon":"icon-wbtc","links":{"wallet":"wrapped-bitcoin-wallet","staking":"","exchange":""}},"wild":{"name":"Wilder World","icon":"icon-WILD","links":{"wallet":"wilder world-wallet","staking":"","exchange":""}},"win":{"name":"WINkLink","icon":"icon-WIN","links":{"wallet":"winklink-wallet","staking":"","exchange":""}},"wnxm":{"name":"Wrapped NXM","icon":"icon-WNXM","links":{"wallet":"wrapped nxm-wallet","staking":"","exchange":""}},"woo":{"name":"WOO Network","icon":"icon-WOO","links":{"wallet":"woo network-wallet","staking":"","exchange":""}},"wozx":{"name":"Efforce","icon":"icon-WOZX","links":{"wallet":"efforce-wallet","staking":"","exchange":""}},"xaut":{"name":"Tether Gold","icon":"icon-XAUT","links":{"wallet":"tether gold-wallet","staking":"","exchange":""}},"xrd":{"name":"Radix","icon":"icon-xrd","links":{"wallet":"","staking":"radix-staking","exchange":""}},"xcn":{"name":"Chain","icon":"icon-XCN","links":{"wallet":"chain-wallet","staking":"","exchange":""}},"xdb":{"name":"DigitalBits","icon":"icon-XDB","links":{"wallet":"digitalbits-wallet","staking":"","exchange":""}},"xsgd":{"name":"XSGD","icon":"icon-XSGD","links":{"wallet":"xsgd-wallet","staking":"","exchange":""}},"xvs":{"name":"Venus","icon":"icon-XVS","links":{"wallet":"venus-wallet","staking":"","exchange":""}},"yfi":{"name":"yearn.finance","icon":"icon-YFI","links":{"wallet":"yearn.finance-wallet","staking":"","exchange":""}},"yfii":{"name":"DFI.Money","icon":"icon-YFII","links":{"wallet":"dfi.money-wallet","staking":"","exchange":""}},"ygg":{"name":"Yield Guild Games","icon":"icon-YGG","links":{"wallet":"yield guild games-wallet","staking":"","exchange":""}},"yooshi":{"name":"YooShi","icon":"icon-YOOSHI","links":{"wallet":"yooshi-wallet","staking":"","exchange":""}},"youc":{"name":"yOUcash","icon":"icon-YOUC","links":{"wallet":"youcash-wallet","staking":"","exchange":""}},"zash":{"name":"ZIMBOCASH","icon":"icon-ZASH","links":{"wallet":"zimbocash-wallet","staking":"","exchange":""}},"zb":{"name":"ZB Token","icon":"icon-ZB","links":{"wallet":"zb token-wallet","staking":"","exchange":""}},"zeon":{"name":"ZEON","icon":"icon-ZEON","links":{"wallet":"zeon-wallet","staking":"","exchange":""}},"bone":{"name":"Bone ShibaSwap","icon":"icon-BONE","links":{"wallet":"bone shibaswap-wallet","staking":"","exchange":""}},"brise":{"name":"Bitgert","icon":"icon-BRISE","links":{"wallet":"bitgert-wallet","staking":"","exchange":""}},"col":{"name":"Clash of Lilliput","icon":"icon-COL","links":{"wallet":"clash of lilliput-wallet","staking":"","exchange":""}},"dexe":{"name":"DeXe","icon":"icon-DEXE","links":{"wallet":"dexe-wallet","staking":"","exchange":""}},"euroc":{"name":"Euro Coin","icon":"icon-EUROC","links":{"wallet":"euro coin-wallet","staking":"","exchange":""}},"lazio":{"name":"S.S. Lazio Fan Token","icon":"icon-LAZIO","links":{"wallet":"s.s. lazio fan token-wallet","staking":"","exchange":""}},"magic":{"name":"MAGIC","icon":"icon-MAGIC","links":{"wallet":"magic-wallet","staking":"","exchange":""}},"trr":{"name":"Terran Coin","icon":"icon-TRR","links":{"wallet":"terran coin-wallet","staking":"","exchange":""}},"volt":{"name":"Volt Inu V2","icon":"icon-VOLT","links":{"wallet":"volt inu v2-wallet","staking":"","exchange":""}},"vvs":{"name":"VVS Finance","icon":"icon-VVS","links":{"wallet":"vvs finance-wallet","staking":"","exchange":""}},"abt":{"name":"Arcblock","icon":"icon-ABT","links":{"wallet":"arcblock-wallet","staking":"","exchange":""}},"albt":{"name":"AllianceBlock","icon":"icon-ALBT","links":{"wallet":"allianceblock-wallet","staking":"","exchange":""}},"aog":{"name":"smARTOFGIVING","icon":"icon-AOG","links":{"wallet":"smartofgiving-wallet","staking":"","exchange":""}},"apm":{"name":"apM Coin","icon":"icon-APM","links":{"wallet":"apm coin-wallet","staking":"","exchange":""}},"atlas":{"name":"Star Atlas","icon":"icon-ATLAS","links":{"wallet":"star atlas-wallet","staking":"","exchange":""}},"auction":{"name":"Bounce Governance Token","icon":"icon-AUCTION","links":{"wallet":"bounce governance token-wallet","staking":"","exchange":""}},"auto":{"name":"Auto","icon":"icon-AUTO","links":{"wallet":"auto-wallet","staking":"","exchange":""}},"banana":{"name":"ApeSwap","icon":"icon-BANANA","links":{"wallet":"apeswap-wallet","staking":"","exchange":""}},"blok":{"name":"Bloktopia","icon":"icon-BLOK","links":{"wallet":"bloktopia-wallet","staking":"","exchange":""}},"boa":{"name":"BOSAGORA","icon":"icon-BOA","links":{"wallet":"bosagora-wallet","staking":"","exchange":""}},"btrs":{"name":"Bitball Treasure","icon":"icon-BTRS","links":{"wallet":"bitball treasure-wallet","staking":"","exchange":""}},"cho":{"name":"Choise.com","icon":"icon-CHO","links":{"wallet":"choise.com-wallet","staking":"","exchange":""}},"cpool":{"name":"Clearpool","icon":"icon-CPOOL","links":{"wallet":"clearpool-wallet","staking":"","exchange":""}},"dego":{"name":"Dego Finance","icon":"icon-DEGO","links":{"wallet":"dego finance-wallet","staking":"","exchange":""}},"dext":{"name":"DEXTools","icon":"icon-DEXT","links":{"wallet":"dextools-wallet","staking":"","exchange":""}},"dfg":{"name":"Defigram","icon":"icon-DFG","links":{"wallet":"defigram-wallet","staking":"","exchange":""}},"dora":{"name":"Dora Factory","icon":"icon-DORA","links":{"wallet":"dora factory-wallet","staking":"","exchange":""}},"fwt":{"name":"Freeway Token","icon":"icon-FWT","links":{"wallet":"freeway token-wallet","staking":"","exchange":""}},"gafi":{"name":"GameFi.org","icon":"icon-GAFI","links":{"wallet":"gamefi.org-wallet","staking":"","exchange":""}},"gel":{"name":"Gelato","icon":"icon-GEL","links":{"wallet":"gelato-wallet","staking":"","exchange":""}},"gfi":{"name":"Goldfinch","icon":"icon-GFI","links":{"wallet":"goldfinch-wallet","staking":"","exchange":""}},"gods":{"name":"Gods Unchained","icon":"icon-GODS","links":{"wallet":"gods unchained-wallet","staking":"","exchange":""}},"gog":{"name":"Guild of Guardians","icon":"icon-GOG","links":{"wallet":"guild of guardians-wallet","staking":"","exchange":""}},"handy":{"name":"Handy","icon":"icon-HANDY","links":{"wallet":"handy-wallet","staking":"","exchange":""}},"hdao":{"name":"HyperDAO","icon":"icon-HDAO","links":{"wallet":"hyperdao-wallet","staking":"","exchange":""}},"hez":{"name":"Hermez Network","icon":"icon-HEZ","links":{"wallet":"hermez network-wallet","staking":"","exchange":""}},"high":{"name":"Highstreet","icon":"icon-HIGH","links":{"wallet":"highstreet-wallet","staking":"","exchange":""}},"ihf":{"name":"Invictus Hyperion Fund","icon":"icon-IHF","links":{"wallet":"invictus hyperion fund-wallet","staking":"","exchange":""}},"krd":{"name":"Krypton DAO","icon":"icon-KRD","links":{"wallet":"krypton dao-wallet","staking":"","exchange":""}},"krl":{"name":"Kryll","icon":"icon-KRL","links":{"wallet":"kryll-wallet","staking":"","exchange":""}},"lever":{"name":"LeverFi","icon":"icon-LEVER","links":{"wallet":"leverfi-wallet","staking":"","exchange":""}},"loka":{"name":"League of Kingdoms Arena","icon":"icon-LOKA","links":{"wallet":"league of kingdoms arena-wallet","staking":"","exchange":""}},"manc":{"name":"Mancium","icon":"icon-MANC","links":{"wallet":"mancium-wallet","staking":"","exchange":""}},"map":{"name":"MAP Protocol","icon":"icon-MAP","links":{"wallet":"map protocol-wallet","staking":"","exchange":""}},"mcrt":{"name":"MagicCraft","icon":"icon-MCRT","links":{"wallet":"magiccraft-wallet","staking":"","exchange":""}},"met":{"name":"Metronome","icon":"icon-MET","links":{"wallet":"metronome-wallet","staking":"","exchange":""}},"mix":{"name":"MixMarvel","icon":"icon-MIX","links":{"wallet":"mixmarvel-wallet","staking":"","exchange":""}},"mlt":{"name":"MILC Platform","icon":"icon-MLT","links":{"wallet":"milc platform-wallet","staking":"","exchange":""}},"nvir":{"name":"NvirWorld","icon":"icon-NVIR","links":{"wallet":"nvirworld-wallet","staking":"","exchange":""}},"pts":{"name":"Petals","icon":"icon-PTS","links":{"wallet":"petals-wallet","staking":"","exchange":""}},"ptu":{"name":"Pintu Token","icon":"icon-PTU","links":{"wallet":"pintu token-wallet","staking":"","exchange":""}},"route":{"name":"Router Protocol","icon":"icon-ROUTE","links":{"wallet":"router protocol-wallet","staking":"","exchange":""}},"saitama":{"name":"Saitama","icon":"icon-SAITAMA","links":{"wallet":"saitama-wallet","staking":"","exchange":""}},"saito":{"name":"Saito","icon":"icon-SAITO","links":{"wallet":"saito-wallet","staking":"","exchange":""}},"sdao":{"name":"SingularityDAO","icon":"icon-SDAO","links":{"wallet":"singularitydao-wallet","staking":"","exchange":""}},"sofi":{"name":"RAI Finance","icon":"icon-SOFI","links":{"wallet":"rai finance-wallet","staking":"","exchange":""}},"solve":{"name":"SOLVE","icon":"icon-SOLVE","links":{"wallet":"solve-wallet","staking":"","exchange":""}},"strm":{"name":"StreamCoin","icon":"icon-STRM","links":{"wallet":"streamcoin-wallet","staking":"","exchange":""}},"suku":{"name":"Suku","icon":"icon-SUKU","links":{"wallet":"suku-wallet","staking":"","exchange":""}},"sweat":{"name":"Sweat Economy","icon":"icon-SWEAT","links":{"wallet":"sweat economy-wallet","staking":"","exchange":""}},"tone":{"name":"TE-FOOD","icon":"icon-TONE","links":{"wallet":"te-food-wallet","staking":"","exchange":""}},"urus":{"name":"Aurox","icon":"icon-URUS","links":{"wallet":"aurox-wallet","staking":"","exchange":""}},"usdj":{"name":"USDJ","icon":"icon-USDJ","links":{"wallet":"usdj-wallet","staking":"","exchange":""}},"vxv":{"name":"Vectorspace AI","icon":"icon-VXV","links":{"wallet":"vectorspace ai-wallet","staking":"","exchange":""}},"xmon":{"name":"XMON","icon":"icon-XMON","links":{"wallet":"xmon-wallet","staking":"","exchange":""}},"yld":{"name":"Yield App","icon":"icon-YLD","links":{"wallet":"yield app-wallet","staking":"","exchange":""}},"zcn":{"name":"0Chain","icon":"icon-ZCN","links":{"wallet":"0chain-wallet","staking":"","exchange":""}},"1wo":{"name":"1World","icon":"icon-1WO","links":{"wallet":"1world-wallet","staking":"","exchange":""}},"aab":{"name":"AAX Token","icon":"icon-AAB","links":{"wallet":"aax token-wallet","staking":"","exchange":""}},"adp":{"name":"Adappter Token","icon":"icon-ADP","links":{"wallet":"adappter token-wallet","staking":"","exchange":""}},"alu":{"name":"Altura","icon":"icon-ALU","links":{"wallet":"altura-wallet","staking":"","exchange":""}},"ara":{"name":"Adora Token","icon":"icon-ARA","links":{"wallet":"adora token-wallet","staking":"","exchange":""}},"aria20":{"name":"Arianee","icon":"icon-ARIA20","links":{"wallet":"arianee-wallet","staking":"","exchange":""}},"arv":{"name":"Ariva","icon":"icon-ARV","links":{"wallet":"ariva-wallet","staking":"","exchange":""}},"asta":{"name":"ASTA","icon":"icon-ASTA","links":{"wallet":"asta-wallet","staking":"","exchange":""}},"atri":{"name":"Atari Token","icon":"icon-ATRI","links":{"wallet":"atari token-wallet","staking":"","exchange":""}},"baas":{"name":"BaaSid","icon":"icon-BAAS","links":{"wallet":"baasid-wallet","staking":"","exchange":""}},"basic":{"name":"BASIC","icon":"icon-BASIC","links":{"wallet":"basic-wallet","staking":"","exchange":""}},"bepro":{"name":"BEPRO Network","icon":"icon-BEPRO","links":{"wallet":"bepro network-wallet","staking":"","exchange":""}},"betu":{"name":"BetU","icon":"icon-BETU","links":{"wallet":"betu-wallet","staking":"","exchange":""}},"bf":{"name":"BitForex Token","icon":"icon-BF","links":{"wallet":"bitforex token-wallet","staking":"","exchange":""}},"bor":{"name":"BoringDAO","icon":"icon-BOR","links":{"wallet":"boringdao-wallet","staking":"","exchange":""}},"bscpad":{"name":"BSCPAD","icon":"icon-BSCPAD","links":{"wallet":"bscpad-wallet","staking":"","exchange":""}},"btr":{"name":"Bitrue Coin","icon":"icon-BTR","links":{"wallet":"bitrue coin-wallet","staking":"","exchange":""}},"bux":{"name":"BUX Token","icon":"icon-BUX","links":{"wallet":"bux token-wallet","staking":"","exchange":""}},"buy":{"name":"Buying.com","icon":"icon-BUY","links":{"wallet":"buying.com-wallet","staking":"","exchange":""}},"caj":{"name":"Cajutel","icon":"icon-CAJ","links":{"wallet":"cajutel-wallet","staking":"","exchange":""}},"caps":{"name":"Ternoa","icon":"icon-CAPS","links":{"wallet":"ternoa-wallet","staking":"","exchange":""}},"cell":{"name":"Cellframe","icon":"icon-CELL","links":{"wallet":"cellframe-wallet","staking":"","exchange":""}},"cere":{"name":"Cere Network","icon":"icon-CERE","links":{"wallet":"cere network-wallet","staking":"","exchange":""}},"cgg":{"name":"ChainGuardians","icon":"icon-CGG","links":{"wallet":"chainguardians-wallet","staking":"","exchange":""}},"cgt":{"name":"CACHE Gold","icon":"icon-CGT","links":{"wallet":"cache gold-wallet","staking":"","exchange":""}},"civ":{"name":"Civilization","icon":"icon-CIV","links":{"wallet":"civilization-wallet","staking":"","exchange":""}},"cream":{"name":"Cream Finance","icon":"icon-CREAM","links":{"wallet":"cream finance-wallet","staking":"","exchange":""}},"cru":{"name":"Crust Network","icon":"icon-CRU","links":{"wallet":"crust network-wallet","staking":"","exchange":""}},"ctx":{"name":"Cryptex Finance","icon":"icon-CTX","links":{"wallet":"cryptex finance-wallet","staking":"","exchange":""}},"cummies":{"name":"CumRocket","icon":"icon-CUMMIES","links":{"wallet":"cumrocket-wallet","staking":"","exchange":""}},"dacxi":{"name":"Dacxi","icon":"icon-DACXI","links":{"wallet":"dacxi-wallet","staking":"","exchange":""}},"derc":{"name":"DeRace","icon":"icon-DERC","links":{"wallet":"derace-wallet","staking":"","exchange":""}},"deri":{"name":"Deri Protocol","icon":"icon-DERI","links":{"wallet":"deri protocol-wallet","staking":"","exchange":""}},"dfa":{"name":"DeFine","icon":"icon-DFA","links":{"wallet":"define-wallet","staking":"","exchange":""}},"dfyn":{"name":"Dfyn Network","icon":"icon-DFYN","links":{"wallet":"dfyn network-wallet","staking":"","exchange":""}},"dobo":{"name":"DogeBonk","icon":"icon-DOBO","links":{"wallet":"dogebonk-wallet","staking":"","exchange":""}},"dsla":{"name":"DSLA Protocol","icon":"icon-DSLA","links":{"wallet":"dsla protocol-wallet","staking":"","exchange":""}},"dyp":{"name":"DeFi Yield Protocol","icon":"icon-DYP","links":{"wallet":"defi yield protocol-wallet","staking":"","exchange":""}},"el":{"name":"ELYSIA","icon":"icon-EL","links":{"wallet":"elysia-wallet","staking":"","exchange":""}},"emrx":{"name":"Emirex Token","icon":"icon-EMRX","links":{"wallet":"emirex token-wallet","staking":"","exchange":""}},"epik":{"name":"EPIK Prime","icon":"icon-EPIK","links":{"wallet":"epik prime-wallet","staking":"","exchange":""}},"equad":{"name":"QuadrantProtocol","icon":"icon-EQUAD","links":{"wallet":"quadrantprotocol-wallet","staking":"","exchange":""}},"era":{"name":"Era Token (Era7)","icon":"icon-ERA","links":{"wallet":"era token (era7)-wallet","staking":"","exchange":""}},"es":{"name":"Era Swap","icon":"icon-ES","links":{"wallet":"era swap-wallet","staking":"","exchange":""}},"ethax":{"name":"ETHAX","icon":"icon-ETHAX","links":{"wallet":"ethax-wallet","staking":"","exchange":""}},"evz":{"name":"Electric Vehicle Zone","icon":"icon-EVZ","links":{"wallet":"electric vehicle zone-wallet","staking":"","exchange":""}},"fb":{"name":"Fenerbahce Token","icon":"icon-FB","links":{"wallet":"fenerbahce token-wallet","staking":"","exchange":""}},"foam":{"name":"FOAM","icon":"icon-FOAM","links":{"wallet":"foam-wallet","staking":"","exchange":""}},"for":{"name":"ForTube","icon":"icon-FOR","links":{"wallet":"fortube-wallet","staking":"","exchange":""}},"fst":{"name":"1irstcoin","icon":"icon-FST","links":{"wallet":"1irstcoin-wallet","staking":"","exchange":""}},"fuse":{"name":"Fuse Network","icon":"icon-FUSE","links":{"wallet":"fuse network-wallet","staking":"","exchange":""}},"gcr":{"name":"Global Coin Research","icon":"icon-GCR","links":{"wallet":"global coin research-wallet","staking":"","exchange":""}},"gene":{"name":"Genopets","icon":"icon-GENE","links":{"wallet":"genopets-wallet","staking":"","exchange":""}},"get":{"name":"GET Protocol","icon":"icon-GET","links":{"wallet":"get protocol-wallet","staking":"","exchange":""}},"gf":{"name":"GuildFi","icon":"icon-GF","links":{"wallet":"guildfi-wallet","staking":"","exchange":""}},"ghx":{"name":"GamerCoin","icon":"icon-GHX","links":{"wallet":"gamercoin-wallet","staking":"","exchange":""}},"glch":{"name":"Glitch","icon":"icon-GLCH","links":{"wallet":"glitch-wallet","staking":"","exchange":""}},"gmee":{"name":"GAMEE","icon":"icon-GMEE","links":{"wallet":"gamee-wallet","staking":"","exchange":""}},"gmm":{"name":"Gamium","icon":"icon-GMM","links":{"wallet":"gamium-wallet","staking":"","exchange":""}},"goc":{"name":"GoCrypto Token","icon":"icon-GOC","links":{"wallet":"gocrypto token-wallet","staking":"","exchange":""}},"gom2":{"name":"AnimalGo","icon":"icon-GOM2","links":{"wallet":"animalgo-wallet","staking":"","exchange":""}},"govi":{"name":"Govi","icon":"icon-GOVI","links":{"wallet":"govi-wallet","staking":"","exchange":""}},"gpx":{"name":"GPEX","icon":"icon-GPX","links":{"wallet":"gpex-wallet","staking":"","exchange":""}},"gulf":{"name":"Gulf Coin","icon":"icon-GULF","links":{"wallet":"gulf coin-wallet","staking":"","exchange":""}},"hai":{"name":"Hacken Token","icon":"icon-HAI","links":{"wallet":"hacken token-wallet","staking":"","exchange":""}},"hapi":{"name":"HAPI Protocol","icon":"icon-HAPI","links":{"wallet":"hapi protocol-wallet","staking":"","exchange":""}},"hegic":{"name":"Hegic","icon":"icon-HEGIC","links":{"wallet":"hegic-wallet","staking":"","exchange":""}},"hoge":{"name":"Hoge Finance","icon":"icon-HOGE","links":{"wallet":"hoge finance-wallet","staking":"","exchange":""}},"hpt":{"name":"Huobi Pool Token","icon":"icon-HPT","links":{"wallet":"huobi pool token-wallet","staking":"","exchange":""}},"id":{"name":"Everest","icon":"icon-ID","links":{"wallet":"everest-wallet","staking":"","exchange":""}},"ihc":{"name":"Inflation Hedging Coin","icon":"icon-IHC","links":{"wallet":"inflation hedging coin-wallet","staking":"","exchange":""}},"inv":{"name":"Inverse Finance","icon":"icon-INV","links":{"wallet":"inverse finance-wallet","staking":"","exchange":""}},"ipad":{"name":"Infinity PAD","icon":"icon-IPAD","links":{"wallet":"infinity pad-wallet","staking":"","exchange":""}},"kan":{"name":"BitKan","icon":"icon-KAN","links":{"wallet":"bitkan-wallet","staking":"","exchange":""}},"kdag":{"name":"King DAG","icon":"icon-KDAG","links":{"wallet":"king dag-wallet","staking":"","exchange":""}},"krom":{"name":"Kromatika","icon":"icon-KROM","links":{"wallet":"kromatika-wallet","staking":"","exchange":""}},"kyl":{"name":"Kylin","icon":"icon-KYL","links":{"wallet":"kylin-wallet","staking":"","exchange":""}},"lbl":{"name":"LABEL Foundation","icon":"icon-LBL","links":{"wallet":"label foundation-wallet","staking":"","exchange":""}},"lnr":{"name":"Lunar","icon":"icon-LNR","links":{"wallet":"lunar-wallet","staking":"","exchange":""}},"lss":{"name":"Lossless","icon":"icon-LSS","links":{"wallet":"lossless-wallet","staking":"","exchange":""}},"ltx":{"name":"Lattice Token","icon":"icon-LTX","links":{"wallet":"lattice token-wallet","staking":"","exchange":""}},"mandox":{"name":"MandoX V2","icon":"icon-MANDOX","links":{"wallet":"mandox v2-wallet","staking":"","exchange":""}},"masq":{"name":"MASQ","icon":"icon-MASQ","links":{"wallet":"masq-wallet","staking":"","exchange":""}},"mcb":{"name":"MCDEX Token","icon":"icon-MCB","links":{"wallet":"mcdex token-wallet","staking":"","exchange":""}},"meetone":{"name":"MEET.ONE","icon":"icon-MEETONE","links":{"wallet":"meet.one-wallet","staking":"","exchange":""}},"mrs":{"name":"Metars Genesis","icon":"icon-MRS","links":{"wallet":"metars genesis-wallet","staking":"","exchange":""}},"msu":{"name":"MetaSoccer","icon":"icon-MSU","links":{"wallet":"metasoccer-wallet","staking":"","exchange":""}},"muse":{"name":"Muse","icon":"icon-MUSE","links":{"wallet":"muse-wallet","staking":"","exchange":""}},"mvc":{"name":"MileVerse","icon":"icon-MVC","links":{"wallet":"mileverse-wallet","staking":"","exchange":""}},"nbt":{"name":"NanoByte Token","icon":"icon-NBT","links":{"wallet":"nanobyte token-wallet","staking":"","exchange":""}},"new":{"name":"Newton","icon":"icon-NEW","links":{"wallet":"newton-wallet","staking":"","exchange":""}},"nftx":{"name":"NFTX","icon":"icon-NFTX","links":{"wallet":"nftx-wallet","staking":"","exchange":""}},"nrfb":{"name":"NuriFootBall","icon":"icon-NRFB","links":{"wallet":"nurifootball-wallet","staking":"","exchange":""}},"num":{"name":"Numbers Protocol","icon":"icon-NUM","links":{"wallet":"numbers protocol-wallet","staking":"","exchange":""}},"nwc":{"name":"Newscrypto","icon":"icon-NWC","links":{"wallet":"newscrypto-wallet","staking":"","exchange":""}},"ogv":{"name":"Origin Dollar Governance","icon":"icon-OGV","links":{"wallet":"origin dollar governance-wallet","staking":"","exchange":""}},"ooe":{"name":"OpenOcean","icon":"icon-OOE","links":{"wallet":"openocean-wallet","staking":"","exchange":""}},"ovr":{"name":"OVR","icon":"icon-OVR","links":{"wallet":"ovr-wallet","staking":"","exchange":""}},"oxb":{"name":"Oxbull.tech","icon":"icon-OXB","links":{"wallet":"oxbull.tech-wallet","staking":"","exchange":""}},"palla":{"name":"Pallapay","icon":"icon-PALLA","links":{"wallet":"pallapay-wallet","staking":"","exchange":""}},"peak":{"name":"PEAKDEFI","icon":"icon-PEAK","links":{"wallet":"peakdefi-wallet","staking":"","exchange":""}},"peel":{"name":"Meta Apes","icon":"icon-PEEL","links":{"wallet":"meta apes-wallet","staking":"","exchange":""}},"pendle":{"name":"Pendle","icon":"icon-PENDLE","links":{"wallet":"pendle-wallet","staking":"","exchange":""}},"pex":{"name":"PearDAO","icon":"icon-PEX","links":{"wallet":"peardao-wallet","staking":"","exchange":""}},"pkf":{"name":"Firebird","icon":"icon-PKF","links":{"wallet":"firebird-wallet","staking":"","exchange":""}},"polk":{"name":"Polkamarkets","icon":"icon-POLK","links":{"wallet":"polkamarkets-wallet","staking":"","exchange":""}},"poolz":{"name":"Poolz Finance","icon":"icon-POOLZ","links":{"wallet":"poolz finance-wallet","staking":"","exchange":""}},"posi":{"name":"Position Exchange","icon":"icon-POSI","links":{"wallet":"position exchange-wallet","staking":"","exchange":""}},"prob":{"name":"ProBit Token","icon":"icon-PROB","links":{"wallet":"probit token-wallet","staking":"","exchange":""}},"push":{"name":"Push Protocol","icon":"icon-PUSH","links":{"wallet":"push protocol-wallet","staking":"","exchange":""}},"qtcon":{"name":"Quiztok","icon":"icon-QTCON","links":{"wallet":"quiztok-wallet","staking":"","exchange":""}},"rae":{"name":"Receive Access Ecosystem","icon":"icon-RAE","links":{"wallet":"receive access ecosystem-wallet","staking":"","exchange":""}},"rai":{"name":"Rai Reflex Index","icon":"icon-RAI","links":{"wallet":"rai reflex index-wallet","staking":"","exchange":""}},"raini":{"name":"Rainicorn","icon":"icon-RAINI","links":{"wallet":"rainicorn-wallet","staking":"","exchange":""}},"revv":{"name":"REVV","icon":"icon-REVV","links":{"wallet":"revv-wallet","staking":"","exchange":""}},"rfox":{"name":"RFOX","icon":"icon-RFOX","links":{"wallet":"rfox-wallet","staking":"","exchange":""}},"ring":{"name":"Darwinia Network","icon":"icon-RING","links":{"wallet":"darwinia network-wallet","staking":"","exchange":""}},"roobee":{"name":"ROOBEE","icon":"icon-ROOBEE","links":{"wallet":"roobee-wallet","staking":"","exchange":""}},"rook":{"name":"Rook","icon":"icon-ROOK","links":{"wallet":"rook-wallet","staking":"","exchange":""}},"rvf":{"name":"RocketX exchange","icon":"icon-RVF","links":{"wallet":"rocketx exchange-wallet","staking":"","exchange":""}},"satt":{"name":"SaTT","icon":"icon-SATT","links":{"wallet":"satt-wallet","staking":"","exchange":""}},"sd":{"name":"Stader","icon":"icon-SD","links":{"wallet":"stader-wallet","staking":"","exchange":""}},"senso":{"name":"SENSO","icon":"icon-SENSO","links":{"wallet":"senso-wallet","staking":"","exchange":""}},"sfi":{"name":"saffron.finance","icon":"icon-SFI","links":{"wallet":"saffron.finance-wallet","staking":"","exchange":""}},"shill":{"name":"SHILL Token","icon":"icon-SHILL","links":{"wallet":"shill token-wallet","staking":"","exchange":""}},"shiryo":{"name":"Shiryo","icon":"icon-SHIRYO","links":{"wallet":"shiryo-wallet","staking":"","exchange":""}},"sidus":{"name":"SIDUS","icon":"icon-SIDUS","links":{"wallet":"sidus-wallet","staking":"","exchange":""}},"skeb":{"name":"Skeb Coin","icon":"icon-SKEB","links":{"wallet":"skeb coin-wallet","staking":"","exchange":""}},"soc":{"name":"Soda Coin","icon":"icon-SOC","links":{"wallet":"soda coin-wallet","staking":"","exchange":""}},"socks":{"name":"Unisocks","icon":"icon-SOCKS","links":{"wallet":"unisocks-wallet","staking":"","exchange":""}},"sov":{"name":"Sovryn","icon":"icon-SOV","links":{"wallet":"sovryn-wallet","staking":"","exchange":""}},"spa":{"name":"Sperax","icon":"icon-SPA","links":{"wallet":"sperax-wallet","staking":"","exchange":""}},"stack":{"name":"StackOs","icon":"icon-STACK","links":{"wallet":"stackos-wallet","staking":"","exchange":""}},"stos":{"name":"Stratos","icon":"icon-STOS","links":{"wallet":"stratos-wallet","staking":"","exchange":""}},"swash":{"name":"Swash","icon":"icon-SWASH","links":{"wallet":"swash-wallet","staking":"","exchange":""}},"swftc":{"name":"SwftCoin","icon":"icon-SWFTC","links":{"wallet":"swftcoin-wallet","staking":"","exchange":""}},"swth":{"name":"Carbon Protocol","icon":"icon-SWTH","links":{"wallet":"carbon protocol-wallet","staking":"","exchange":""}},"sylo":{"name":"Sylo","icon":"icon-SYLO","links":{"wallet":"sylo-wallet","staking":"","exchange":""}},"taboo":{"name":"TABOO TOKEN","icon":"icon-TABOO","links":{"wallet":"taboo token-wallet","staking":"","exchange":""}},"tad":{"name":"Tadpole Finance","icon":"icon-TAD","links":{"wallet":"tadpole finance-wallet","staking":"","exchange":""}},"ten":{"name":"Tokenomy","icon":"icon-TEN","links":{"wallet":"tokenomy-wallet","staking":"","exchange":""}},"thg":{"name":"Thetan Arena","icon":"icon-THG","links":{"wallet":"thetan arena-wallet","staking":"","exchange":""}},"tkp":{"name":"TOKPIE","icon":"icon-TKP","links":{"wallet":"tokpie-wallet","staking":"","exchange":""}},"town":{"name":"Town Star","icon":"icon-TOWN","links":{"wallet":"town star-wallet","staking":"","exchange":""}},"trv":{"name":"TrustVerse","icon":"icon-TRV","links":{"wallet":"trustverse-wallet","staking":"","exchange":""}},"trvl":{"name":"TRVL","icon":"icon-TRVL","links":{"wallet":"trvl-wallet","staking":"","exchange":""}},"uncx":{"name":"UniCrypt","icon":"icon-UNCX","links":{"wallet":"unicrypt-wallet","staking":"","exchange":""}},"upunk":{"name":"Unicly CryptoPunks Collection","icon":"icon-UPUNK","links":{"wallet":"unicly cryptopunks collection-wallet","staking":"","exchange":""}},"valor":{"name":"Valor Token","icon":"icon-VALOR","links":{"wallet":"valor token-wallet","staking":"","exchange":""}},"vbit":{"name":"Valobit","icon":"icon-VBIT","links":{"wallet":"valobit-wallet","staking":"","exchange":""}},"vdai":{"name":"Venus DAI","icon":"icon-VDAI","links":{"wallet":"venus dai-wallet","staking":"","exchange":""}},"vee":{"name":"BLOCKv","icon":"icon-VEE","links":{"wallet":"blockv-wallet","staking":"","exchange":""}},"veed":{"name":"VIMworld","icon":"icon-VEED","links":{"wallet":"vimworld-wallet","staking":"","exchange":""}},"vemp":{"name":"vEmpire DDAO","icon":"icon-VEMP","links":{"wallet":"vempire ddao-wallet","staking":"","exchange":""}},"vid":{"name":"Vivid Labs","icon":"icon-VID","links":{"wallet":"vivid labs-wallet","staking":"","exchange":""}},"vidya":{"name":"Vidya","icon":"icon-VIDYA","links":{"wallet":"vidya-wallet","staking":"","exchange":""}},"vinu":{"name":"Vita Inu","icon":"icon-VINU","links":{"wallet":"vita inu-wallet","staking":"","exchange":""}},"vlink":{"name":"Venus LINK","icon":"icon-VLINK","links":{"wallet":"venus link-wallet","staking":"","exchange":""}},"vrt":{"name":"Venus Reward Token","icon":"icon-VRT","links":{"wallet":"venus reward token-wallet","staking":"","exchange":""}},"vxl":{"name":"Voxel X Network","icon":"icon-VXL","links":{"wallet":"voxel x network-wallet","staking":"","exchange":""}},"whale":{"name":"WHALE","icon":"icon-WHALE","links":{"wallet":"whale-wallet","staking":"","exchange":""}},"wiken":{"name":"Project WITH","icon":"icon-WIKEN","links":{"wallet":"project with-wallet","staking":"","exchange":""}},"wncg":{"name":"Wrapped NCG (Nine Chronicles Gold)","icon":"icon-WNCG","links":{"wallet":"wrapped ncg (nine chronicles gold)-wallet","staking":"","exchange":""}},"wom":{"name":"Wombat Exchange","icon":"icon-WOM","links":{"wallet":"wombat exchange-wallet","staking":"","exchange":""}},"woop":{"name":"Woonkly Power","icon":"icon-WOOP","links":{"wallet":"woonkly power-wallet","staking":"","exchange":""}},"wrld":{"name":"NFT Worlds","icon":"icon-WRLD","links":{"wallet":"nft worlds-wallet","staking":"","exchange":""}},"xchf":{"name":"CryptoFranc","icon":"icon-XCHF","links":{"wallet":"cryptofranc-wallet","staking":"","exchange":""}},"xdefi":{"name":"XDEFI Wallet","icon":"icon-XDEFI","links":{"wallet":"xdefi wallet-wallet","staking":"","exchange":""}},"xed":{"name":"Exeedme","icon":"icon-XED","links":{"wallet":"exeedme-wallet","staking":"","exchange":""}},"xor":{"name":"SORA","icon":"icon-XOR","links":{"wallet":"sora-wallet","staking":"","exchange":""}},"xtm":{"name":"Torum","icon":"icon-XTM","links":{"wallet":"torum-wallet","staking":"","exchange":""}},"xwg":{"name":"X World Games","icon":"icon-XWG","links":{"wallet":"x world games-wallet","staking":"","exchange":""}},"zig":{"name":"Zigcoin","icon":"icon-ZIG","links":{"wallet":"zigcoin-wallet","staking":"","exchange":""}},"zks":{"name":"ZKSpace","icon":"icon-ZKS","links":{"wallet":"zkspace-wallet","staking":"","exchange":""}},"0xbtc":{"name":"0xBitcoin","icon":"icon-0XBTC","links":{"wallet":"0xbitcoin-wallet","staking":"","exchange":""}},"1art":{"name":"OneArt","icon":"icon-1ART","links":{"wallet":"oneart-wallet","staking":"","exchange":""}},"agrs":{"name":"Agoras: Currency of Tau","icon":"icon-AGRS","links":{"wallet":"agoras: currency of tau-wallet","staking":"","exchange":""}},"att":{"name":"Attila","icon":"icon-ATT","links":{"wallet":"attila-wallet","staking":"","exchange":""}},"axis":{"name":"AXIS Token","icon":"icon-AXIS","links":{"wallet":"axis token-wallet","staking":"","exchange":""}},"az":{"name":"Azbit","icon":"icon-AZ","links":{"wallet":"azbit-wallet","staking":"","exchange":""}},"bao":{"name":"Bao Finance","icon":"icon-BAO","links":{"wallet":"bao finance-wallet","staking":"","exchange":""}},"bax":{"name":"BABB","icon":"icon-BAX","links":{"wallet":"babb-wallet","staking":"","exchange":""}},"bcdt":{"name":"EvidenZ","icon":"icon-BCDT","links":{"wallet":"evidenz-wallet","staking":"","exchange":""}},"belt":{"name":"Belt Finance","icon":"icon-BELT","links":{"wallet":"belt finance-wallet","staking":"","exchange":""}},"bend":{"name":"Bend DAO","icon":"icon-BEND","links":{"wallet":"bend dao-wallet","staking":"","exchange":""}},"biot":{"name":"BioPassport Token","icon":"icon-BIOT","links":{"wallet":"biopassport token-wallet","staking":"","exchange":""}},"blank":{"name":"BlockWallet","icon":"icon-BLANK","links":{"wallet":"blockwallet-wallet","staking":"","exchange":""}},"blp":{"name":"BullPerks","icon":"icon-BLP","links":{"wallet":"bullperks-wallet","staking":"","exchange":""}},"blt":{"name":"Bloom","icon":"icon-BLT","links":{"wallet":"bloom-wallet","staking":"","exchange":""}},"bly":{"name":"Blocery","icon":"icon-BLY","links":{"wallet":"blocery-wallet","staking":"","exchange":""}},"bolt":{"name":"BOLT","icon":"icon-BOLT","links":{"wallet":"bolt-wallet","staking":"","exchange":""}},"bp":{"name":"Beyond Protocol","icon":"icon-BP","links":{"wallet":"beyond protocol-wallet","staking":"","exchange":""}},"brwl":{"name":"Blockchain Brawlers","icon":"icon-BRWL","links":{"wallet":"blockchain brawlers-wallet","staking":"","exchange":""}},"bscs":{"name":"BSCStation","icon":"icon-BSCS","links":{"wallet":"bscstation-wallet","staking":"","exchange":""}},"btnt":{"name":"BitNautic Token","icon":"icon-BTNT","links":{"wallet":"bitnautic token-wallet","staking":"","exchange":""}},"card":{"name":"Cardstack","icon":"icon-CARD","links":{"wallet":"cardstack-wallet","staking":"","exchange":""}},"cbc":{"name":"CBC.network","icon":"icon-CBC","links":{"wallet":"cbc.network-wallet","staking":"","exchange":""}},"cbx":{"name":"CropBytes","icon":"icon-CBX","links":{"wallet":"cropbytes-wallet","staking":"","exchange":""}},"cirus":{"name":"Cirus Foundation","icon":"icon-CIRUS","links":{"wallet":"cirus foundation-wallet","staking":"","exchange":""}},"cmerge":{"name":"CoinMerge (ERC-20)","icon":"icon-CMERGE","links":{"wallet":"coinmerge (erc-20)-wallet","staking":"","exchange":""}},"cov":{"name":"Covesting","icon":"icon-COV","links":{"wallet":"covesting-wallet","staking":"","exchange":""}},"cvt":{"name":"CyberVein","icon":"icon-CVT","links":{"wallet":"cybervein-wallet","staking":"","exchange":""}},"cyclub":{"name":"Cyclub","icon":"icon-CYCLUB","links":{"wallet":"cyclub-wallet","staking":"","exchange":""}},"dafi":{"name":"DAFI Protocol","icon":"icon-DAFI","links":{"wallet":"dafi protocol-wallet","staking":"","exchange":""}},"dax":{"name":"DAEX","icon":"icon-DAX","links":{"wallet":"daex-wallet","staking":"","exchange":""}},"ddim":{"name":"DuckDaoDime","icon":"icon-DDIM","links":{"wallet":"duckdaodime-wallet","staking":"","exchange":""}},"defit":{"name":"Digital Fitness","icon":"icon-DEFIT","links":{"wallet":"digital fitness-wallet","staking":"","exchange":""}},"desu":{"name":"Dexsport","icon":"icon-DESU","links":{"wallet":"dexsport-wallet","staking":"","exchange":""}},"dgx":{"name":"Digix Gold Token","icon":"icon-DGX","links":{"wallet":"digix gold token-wallet","staking":"","exchange":""}},"dht":{"name":"dHedge DAO","icon":"icon-DHT","links":{"wallet":"dhedge dao-wallet","staking":"","exchange":""}},"digg":{"name":"DIGG","icon":"icon-DIGG","links":{"wallet":"digg-wallet","staking":"","exchange":""}},"dip":{"name":"Etherisc DIP Token","icon":"icon-DIP","links":{"wallet":"etherisc dip token-wallet","staking":"","exchange":""}},"dlc":{"name":"Diamond Launch","icon":"icon-DLC","links":{"wallet":"diamond launch-wallet","staking":"","exchange":""}},"doe":{"name":"Dogs Of Elon","icon":"icon-DOE","links":{"wallet":"dogs of elon-wallet","staking":"","exchange":""}},"doggy":{"name":"DOGGY","icon":"icon-DOGGY","links":{"wallet":"doggy-wallet","staking":"","exchange":""}},"dov":{"name":"Dovu","icon":"icon-DOV","links":{"wallet":"dovu-wallet","staking":"","exchange":""}},"dps":{"name":"DEEPSPACE","icon":"icon-DPS","links":{"wallet":"deepspace-wallet","staking":"","exchange":""}},"drf":{"name":"DRIFE","icon":"icon-DRF","links":{"wallet":"drife-wallet","staking":"","exchange":""}},"drm":{"name":"DoDreamChain","icon":"icon-DRM","links":{"wallet":"dodreamchain-wallet","staking":"","exchange":""}},"dtx":{"name":"Databroker","icon":"icon-DTX","links":{"wallet":"databroker-wallet","staking":"","exchange":""}},"ersdl":{"name":"unFederalReserve","icon":"icon-ERSDL","links":{"wallet":"unfederalreserve-wallet","staking":"","exchange":""}},"exm":{"name":"EXMO Coin","icon":"icon-EXM","links":{"wallet":"exmo coin-wallet","staking":"","exchange":""}},"fevr":{"name":"RealFevr","icon":"icon-FEVR","links":{"wallet":"realfevr-wallet","staking":"","exchange":""}},"fkx":{"name":"FortKnoxster","icon":"icon-FKX","links":{"wallet":"fortknoxster-wallet","staking":"","exchange":""}},"flx":{"name":"Reflexer Ungovernance Token","icon":"icon-FLX","links":{"wallet":"reflexer ungovernance token-wallet","staking":"","exchange":""}},"free":{"name":"FREEdom Coin","icon":"icon-FREE","links":{"wallet":"freedom coin-wallet","staking":"","exchange":""}},"frm":{"name":"Ferrum Network","icon":"icon-FRM","links":{"wallet":"ferrum network-wallet","staking":"","exchange":""}},"game":{"name":"GameCredits","icon":"icon-GAME","links":{"wallet":"gamecredits-wallet","staking":"","exchange":""}},"geeq":{"name":"Geeq","icon":"icon-GEEQ","links":{"wallet":"geeq-wallet","staking":"","exchange":""}},"gmcoin":{"name":"GMCoin","icon":"icon-GMCOIN","links":{"wallet":"gmcoin-wallet","staking":"","exchange":""}},"gny":{"name":"GNY","icon":"icon-GNY","links":{"wallet":"gny-wallet","staking":"","exchange":""}},"gswap":{"name":"Gameswap","icon":"icon-GSWAP","links":{"wallet":"gameswap-wallet","staking":"","exchange":""}},"gton":{"name":"GTONCapital","icon":"icon-GTON","links":{"wallet":"gtoncapital-wallet","staking":"","exchange":""}},"gvr":{"name":"Grove","icon":"icon-GVR","links":{"wallet":"grove-wallet","staking":"","exchange":""}},"gzone":{"name":"GameZone","icon":"icon-GZONE","links":{"wallet":"gamezone-wallet","staking":"","exchange":""}},"ham":{"name":"Hamster","icon":"icon-HAM","links":{"wallet":"hamster-wallet","staking":"","exchange":""}},"hod":{"name":"HoDooi.com","icon":"icon-HOD","links":{"wallet":"hodooi.com-wallet","staking":"","exchange":""}},"hord":{"name":"Hord","icon":"icon-HORD","links":{"wallet":"hord-wallet","staking":"","exchange":""}},"hzn":{"name":"Horizon Protocol","icon":"icon-HZN","links":{"wallet":"horizon protocol-wallet","staking":"","exchange":""}},"ibs":{"name":"IBStoken","icon":"icon-IBS","links":{"wallet":"ibstoken-wallet","staking":"","exchange":""}},"idia":{"name":"Impossible Finance Launchpad","icon":"icon-IDIA","links":{"wallet":"impossible finance launchpad-wallet","staking":"","exchange":""}},"idle":{"name":"Idle","icon":"icon-IDLE","links":{"wallet":"idle-wallet","staking":"","exchange":""}},"idv":{"name":"Idavoll DAO","icon":"icon-IDV","links":{"wallet":"idavoll dao-wallet","staking":"","exchange":""}},"isikc":{"name":"Isiklar Coin","icon":"icon-ISIKC","links":{"wallet":"isiklar coin-wallet","staking":"","exchange":""}},"isp":{"name":"Ispolink","icon":"icon-ISP","links":{"wallet":"ispolink-wallet","staking":"","exchange":""}},"itgr":{"name":"Integral","icon":"icon-ITGR","links":{"wallet":"integral-wallet","staking":"","exchange":""}},"jam":{"name":"Geojam Token","icon":"icon-JAM","links":{"wallet":"geojam token-wallet","staking":"","exchange":""}},"jgn":{"name":"Juggernaut","icon":"icon-JGN","links":{"wallet":"juggernaut-wallet","staking":"","exchange":""}},"k21":{"name":"K21","icon":"icon-K21","links":{"wallet":"k21-wallet","staking":"","exchange":""}},"kalm":{"name":"KALM","icon":"icon-KALM","links":{"wallet":"kalm-wallet","staking":"","exchange":""}},"kat":{"name":"Kambria","icon":"icon-KAT","links":{"wallet":"kambria-wallet","staking":"","exchange":""}},"kingshib":{"name":"King Shiba","icon":"icon-KINGSHIB","links":{"wallet":"king shiba-wallet","staking":"","exchange":""}},"kmon":{"name":"Kryptomon","icon":"icon-KMON","links":{"wallet":"kryptomon-wallet","staking":"","exchange":""}},"kono":{"name":"Konomi Network","icon":"icon-KONO","links":{"wallet":"konomi network-wallet","staking":"","exchange":""}},"labs":{"name":"LABS Group","icon":"icon-LABS","links":{"wallet":"labs group-wallet","staking":"","exchange":""}},"lamb":{"name":"Lambda","icon":"icon-LAMB","links":{"wallet":"lambda-wallet","staking":"","exchange":""}},"land":{"name":"Landshare","icon":"icon-LAND","links":{"wallet":"landshare-wallet","staking":"","exchange":""}},"layer":{"name":"UniLayer","icon":"icon-LAYER","links":{"wallet":"unilayer-wallet","staking":"","exchange":""}},"lgcy":{"name":"LGCY Network","icon":"icon-LGCY","links":{"wallet":"lgcy network-wallet","staking":"","exchange":""}},"light":{"name":"Lightning","icon":"icon-LIGHT","links":{"wallet":"lightning-wallet","staking":"","exchange":""}},"lime":{"name":"iMe Lab","icon":"icon-LIME","links":{"wallet":"ime lab-wallet","staking":"","exchange":""}},"lith":{"name":"Lithium","icon":"icon-LITH","links":{"wallet":"lithium-wallet","staking":"","exchange":""}},"lua":{"name":"LuaSwap","icon":"icon-LUA","links":{"wallet":"luaswap-wallet","staking":"","exchange":""}},"maha":{"name":"MahaDAO","icon":"icon-MAHA","links":{"wallet":"mahadao-wallet","staking":"","exchange":""}},"maps":{"name":"MAPS","icon":"icon-MAPS","links":{"wallet":"maps-wallet","staking":"","exchange":""}},"matter":{"name":"AntiMatter Governance Token","icon":"icon-MATTER","links":{"wallet":"antimatter governance token-wallet","staking":"","exchange":""}},"mbn":{"name":"Mobilian Coin","icon":"icon-MBN","links":{"wallet":"mobilian coin-wallet","staking":"","exchange":""}},"metapets":{"name":"MetaPets","icon":"icon-METAPETS","links":{"wallet":"metapets-wallet","staking":"","exchange":""}},"mfg":{"name":"Smart MFG","icon":"icon-MFG","links":{"wallet":"smart mfg-wallet","staking":"","exchange":""}},"mint":{"name":"Mint Club","icon":"icon-MINT","links":{"wallet":"mint club-wallet","staking":"","exchange":""}},"mitx":{"name":"Morpheus Labs","icon":"icon-MITX","links":{"wallet":"morpheus labs-wallet","staking":"","exchange":""}},"moni":{"name":"Monsta Infinite","icon":"icon-MONI","links":{"wallet":"monsta infinite-wallet","staking":"","exchange":""}},"moov":{"name":"Dotmoovs","icon":"icon-MOOV","links":{"wallet":"dotmoovs-wallet","staking":"","exchange":""}},"movez":{"name":"MOVEZ","icon":"icon-MOVEZ","links":{"wallet":"movez-wallet","staking":"","exchange":""}},"mta":{"name":"mStable Governance Token: Meta (MTA)","icon":"icon-MTA","links":{"wallet":"mstable governance token: meta (mta)-wallet","staking":"","exchange":""}},"nabox":{"name":"Nabox","icon":"icon-NABOX","links":{"wallet":"nabox-wallet","staking":"","exchange":""}},"nftart":{"name":"NFT Art Finance","icon":"icon-NFTART","links":{"wallet":"nft art finance-wallet","staking":"","exchange":""}},"nht":{"name":"Neighbourhoods","icon":"icon-NHT","links":{"wallet":"neighbourhoods-wallet","staking":"","exchange":""}},"o3":{"name":"O3 Swap","icon":"icon-O3","links":{"wallet":"o3 swap-wallet","staking":"","exchange":""}},"onston":{"name":"ONSTON","icon":"icon-ONSTON","links":{"wallet":"onston-wallet","staking":"","exchange":""}},"ooks":{"name":"Onooks","icon":"icon-OOKS","links":{"wallet":"onooks-wallet","staking":"","exchange":""}},"opul":{"name":"Opulous","icon":"icon-OPUL","links":{"wallet":"opulous-wallet","staking":"","exchange":""}},"ors":{"name":"Origin Sport","icon":"icon-ORS","links":{"wallet":"origin sport-wallet","staking":"","exchange":""}},"paid":{"name":"PAID Network","icon":"icon-PAID","links":{"wallet":"paid network-wallet","staking":"","exchange":""}},"pbr":{"name":"PolkaBridge","icon":"icon-PBR","links":{"wallet":"polkabridge-wallet","staking":"","exchange":""}},"pickle":{"name":"Pickle Finance","icon":"icon-PICKLE","links":{"wallet":"pickle finance-wallet","staking":"","exchange":""}},"ping":{"name":"Sonar","icon":"icon-PING","links":{"wallet":"sonar-wallet","staking":"","exchange":""}},"pmgt":{"name":"Perth Mint Gold Token","icon":"icon-PMGT","links":{"wallet":"perth mint gold token-wallet","staking":"","exchange":""}},"pmon":{"name":"Polychain Monsters","icon":"icon-PMON","links":{"wallet":"polychain monsters-wallet","staking":"","exchange":""}},"pornrocket":{"name":"PornRocket","icon":"icon-PORNROCKET","links":{"wallet":"pornrocket-wallet","staking":"","exchange":""}},"primate":{"name":"Primate","icon":"icon-PRIMATE","links":{"wallet":"primate-wallet","staking":"","exchange":""}},"prt":{"name":"Portion","icon":"icon-PRT","links":{"wallet":"portion-wallet","staking":"","exchange":""}},"psp":{"name":"ParaSwap","icon":"icon-PSP","links":{"wallet":"paraswap-wallet","staking":"","exchange":""}},"pstake":{"name":"pSTAKE Finance","icon":"icon-PSTAKE","links":{"wallet":"pstake finance-wallet","staking":"","exchange":""}},"pxp":{"name":"PointPay","icon":"icon-PXP","links":{"wallet":"pointpay-wallet","staking":"","exchange":""}},"razor":{"name":"Razor Network","icon":"icon-RAZOR","links":{"wallet":"razor network-wallet","staking":"","exchange":""}},"rbc":{"name":"Rubic","icon":"icon-RBC","links":{"wallet":"rubic-wallet","staking":"","exchange":""}},"rpg":{"name":"Rangers Protocol","icon":"icon-RPG","links":{"wallet":"rangers protocol-wallet","staking":"","exchange":""}},"rth":{"name":"Rotharium","icon":"icon-RTH","links":{"wallet":"rotharium-wallet","staking":"","exchange":""}},"ryoshi":{"name":"Ryoshi Token","icon":"icon-RYOSHI","links":{"wallet":"ryoshi token-wallet","staking":"","exchange":""}},"sarco":{"name":"Sarcophagus","icon":"icon-SARCO","links":{"wallet":"sarcophagus-wallet","staking":"","exchange":""}},"sata":{"name":"Signata","icon":"icon-SATA","links":{"wallet":"signata-wallet","staking":"","exchange":""}},"seele":{"name":"Seele-N","icon":"icon-SEELE","links":{"wallet":"seele-n-wallet","staking":"","exchange":""}},"senate":{"name":"SENATE","icon":"icon-SENATE","links":{"wallet":"senate-wallet","staking":"","exchange":""}},"seon":{"name":"SeedOn","icon":"icon-SEON","links":{"wallet":"seedon-wallet","staking":"","exchange":""}},"shi":{"name":"Shirtum","icon":"icon-SHI","links":{"wallet":"shirtum-wallet","staking":"","exchange":""}},"shroom":{"name":"Niftyx Protocol","icon":"icon-SHROOM","links":{"wallet":"niftyx protocol-wallet","staking":"","exchange":""}},"shx":{"name":"Stronghold Token","icon":"icon-SHX","links":{"wallet":"stronghold token-wallet","staking":"","exchange":""}},"sin":{"name":"Sinverse","icon":"icon-SIN","links":{"wallet":"sinverse-wallet","staking":"","exchange":""}},"skey":{"name":"Skey Network","icon":"icon-SKEY","links":{"wallet":"skey network-wallet","staking":"","exchange":""}},"skill":{"name":"CryptoBlades","icon":"icon-SKILL","links":{"wallet":"cryptoblades-wallet","staking":"","exchange":""}},"smi":{"name":"SafeMoon Inu","icon":"icon-SMI","links":{"wallet":"safemoon inu-wallet","staking":"","exchange":""}},"sntvt":{"name":"Sentivate","icon":"icon-SNTVT","links":{"wallet":"sentivate-wallet","staking":"","exchange":""}},"srk":{"name":"SparkPoint","icon":"icon-SRK","links":{"wallet":"sparkpoint-wallet","staking":"","exchange":""}},"standard":{"name":"Stakeborg DAO","icon":"icon-STANDARD","links":{"wallet":"stakeborg dao-wallet","staking":"","exchange":""}},"stars":{"name":"Mogul Productions","icon":"icon-STARS","links":{"wallet":"mogul productions-wallet","staking":"","exchange":""}},"starship":{"name":"STARSHIP","icon":"icon-STARSHIP","links":{"wallet":"starship-wallet","staking":"","exchange":""}},"strp":{"name":"Strips Finance","icon":"icon-STRP","links":{"wallet":"strips finance-wallet","staking":"","exchange":""}},"strx":{"name":"StrikeX","icon":"icon-STRX","links":{"wallet":"strikex-wallet","staking":"","exchange":""}},"suter":{"name":"suterusu","icon":"icon-SUTER","links":{"wallet":"suterusu-wallet","staking":"","exchange":""}},"swingby":{"name":"Swingby","icon":"icon-SWINGBY","links":{"wallet":"swingby-wallet","staking":"","exchange":""}},"swrv":{"name":"Swerve","icon":"icon-SWRV","links":{"wallet":"swerve-wallet","staking":"","exchange":""}},"tara":{"name":"Taraxa","icon":"icon-TARA","links":{"wallet":"taraxa-wallet","staking":"","exchange":""}},"tft":{"name":"ThreeFold","icon":"icon-TFT","links":{"wallet":"threefold-wallet","staking":"","exchange":""}},"thn":{"name":"Throne","icon":"icon-THN","links":{"wallet":"throne-wallet","staking":"","exchange":""}},"toko":{"name":"Tokoin","icon":"icon-TOKO","links":{"wallet":"tokoin-wallet","staking":"","exchange":""}},"top":{"name":"TOP","icon":"icon-TOP","links":{"wallet":"top-wallet","staking":"","exchange":""}},"tower":{"name":"TOWER","icon":"icon-TOWER","links":{"wallet":"tower-wallet","staking":"","exchange":""}},"trade":{"name":"Polytrade","icon":"icon-TRADE","links":{"wallet":"polytrade-wallet","staking":"","exchange":""}},"trix":{"name":"TriumphX","icon":"icon-TRIX","links":{"wallet":"triumphx-wallet","staking":"","exchange":""}},"unb":{"name":"Unbound","icon":"icon-UNB","links":{"wallet":"unbound-wallet","staking":"","exchange":""}},"vab":{"name":"Vabble","icon":"icon-VAB","links":{"wallet":"vabble-wallet","staking":"","exchange":""}},"vdg":{"name":"VeriDocGlobal","icon":"icon-VDG","links":{"wallet":"veridocglobal-wallet","staking":"","exchange":""}},"vest":{"name":"VestChain","icon":"icon-VEST","links":{"wallet":"vestchain-wallet","staking":"","exchange":""}},"vsp":{"name":"Vesper","icon":"icon-VSP","links":{"wallet":"vesper-wallet","staking":"","exchange":""}},"vsxp":{"name":"Venus SXP","icon":"icon-VSXP","links":{"wallet":"venus sxp-wallet","staking":"","exchange":""}},"wwy":{"name":"WeWay","icon":"icon-WWY","links":{"wallet":"weway-wallet","staking":"","exchange":""}},"xend":{"name":"Xend Finance","icon":"icon-XEND","links":{"wallet":"xend finance-wallet","staking":"","exchange":""}},"xft":{"name":"Offshift","icon":"icon-XFT","links":{"wallet":"offshift-wallet","staking":"","exchange":""}},"xrt":{"name":"Robonomics.network","icon":"icon-XRT","links":{"wallet":"robonomics.network-wallet","staking":"","exchange":""}},"yae":{"name":"Cryptonovae","icon":"icon-YAE","links":{"wallet":"cryptonovae-wallet","staking":"","exchange":""}},"yam":{"name":"YAM V3","icon":"icon-YAM","links":{"wallet":"yam v3-wallet","staking":"","exchange":""}},"yaxis":{"name":"yAxis","icon":"icon-YAXIS","links":{"wallet":"yaxis-wallet","staking":"","exchange":""}},"zee":{"name":"ZeroSwap","icon":"icon-ZEE","links":{"wallet":"zeroswap-wallet","staking":"","exchange":""}},"zlw":{"name":"Zelwin","icon":"icon-ZLW","links":{"wallet":"zelwin-wallet","staking":"","exchange":""}},"zusd":{"name":"ZUSD","icon":"icon-ZUSD","links":{"wallet":"zusd-wallet","staking":"","exchange":""}},"1-up":{"name":"1-UP Platform","icon":"icon-1-UP","links":{"wallet":"1-up platform-wallet","staking":"","exchange":""}},"8pay":{"name":"8PAY","icon":"icon-8PAY","links":{"wallet":"8pay-wallet","staking":"","exchange":""}},"ace":{"name":"ACENT","icon":"icon-ACE","links":{"wallet":"acent-wallet","staking":"","exchange":""}},"ack":{"name":"AcknoLedger","icon":"icon-ACK","links":{"wallet":"acknoledger-wallet","staking":"","exchange":""}},"adapad":{"name":"ADAPad","icon":"icon-ADAPAD","links":{"wallet":"adapad-wallet","staking":"","exchange":""}},"aga":{"name":"AGA Token","icon":"icon-AGA","links":{"wallet":"aga token-wallet","staking":"","exchange":""}},"ait":{"name":"AICHAIN","icon":"icon-AIT","links":{"wallet":"aichain-wallet","staking":"","exchange":""}},"aly":{"name":"ALLY","icon":"icon-ALY","links":{"wallet":"ally-wallet","staking":"","exchange":""}},"amlt":{"name":"AMLT","icon":"icon-AMLT","links":{"wallet":"amlt-wallet","staking":"","exchange":""}},"arcona":{"name":"Arcona","icon":"icon-ARCONA","links":{"wallet":"arcona-wallet","staking":"","exchange":""}},"ardx":{"name":"ArdCoin","icon":"icon-ARDX","links":{"wallet":"ardcoin-wallet","staking":"","exchange":""}},"azy":{"name":"Amazy","icon":"icon-AZY","links":{"wallet":"amazy-wallet","staking":"","exchange":""}},"bbank":{"name":"blockbank","icon":"icon-BBANK","links":{"wallet":"blockbank-wallet","staking":"","exchange":""}},"bbs":{"name":"BBS Network","icon":"icon-BBS","links":{"wallet":"bbs network-wallet","staking":"","exchange":""}},"bcmc":{"name":"Blockchain Monster Hunt","icon":"icon-BCMC","links":{"wallet":"blockchain monster hunt-wallet","staking":"","exchange":""}},"bcube":{"name":"B-cube.ai","icon":"icon-BCUBE","links":{"wallet":"b-cube.ai-wallet","staking":"","exchange":""}},"bdp":{"name":"Big Data Protocol","icon":"icon-BDP","links":{"wallet":"big data protocol-wallet","staking":"","exchange":""}},"bhc":{"name":"Billion Happiness","icon":"icon-BHC","links":{"wallet":"billion happiness-wallet","staking":"","exchange":""}},"bin":{"name":"Binemon","icon":"icon-BIN","links":{"wallet":"binemon-wallet","staking":"","exchange":""}},"bird":{"name":"Bird.Money","icon":"icon-BIRD","links":{"wallet":"bird.money-wallet","staking":"","exchange":""}},"bist":{"name":"Bistroo","icon":"icon-BIST","links":{"wallet":"bistroo-wallet","staking":"","exchange":""}},"blast":{"name":"SafeBlast","icon":"icon-BLAST","links":{"wallet":"safeblast-wallet","staking":"","exchange":""}},"bmi":{"name":"Bridge Mutual","icon":"icon-BMI","links":{"wallet":"bridge mutual-wallet","staking":"","exchange":""}},"bmon":{"name":"Binamon","icon":"icon-BMON","links":{"wallet":"binamon-wallet","staking":"","exchange":""}},"bmp":{"name":"Brother Music Platform","icon":"icon-BMP","links":{"wallet":"brother music platform-wallet","staking":"","exchange":""}},"bolly":{"name":"BollyCoin","icon":"icon-BOLLY","links":{"wallet":"bollycoin-wallet","staking":"","exchange":""}},"bondly":{"name":"Forj(Bondly)","icon":"icon-BONDLY","links":{"wallet":"forj(bondly)-wallet","staking":"","exchange":""}},"botto":{"name":"Botto","icon":"icon-BOTTO","links":{"wallet":"botto-wallet","staking":"","exchange":""}},"brze":{"name":"Breezecoin","icon":"icon-BRZE","links":{"wallet":"breezecoin-wallet","staking":"","exchange":""}},"bxc":{"name":"BonusCloud","icon":"icon-BXC","links":{"wallet":"bonuscloud-wallet","staking":"","exchange":""}},"candy":{"name":"TripCandy","icon":"icon-CANDY","links":{"wallet":"tripcandy-wallet","staking":"","exchange":""}},"cogi":{"name":"9D NFT","icon":"icon-COGI","links":{"wallet":"9d nft-wallet","staking":"","exchange":""}},"combo":{"name":"Furucombo","icon":"icon-COMBO","links":{"wallet":"furucombo-wallet","staking":"","exchange":""}},"conv":{"name":"Convergence","icon":"icon-CONV","links":{"wallet":"convergence-wallet","staking":"","exchange":""}},"corn":{"name":"Cornichon","icon":"icon-CORN","links":{"wallet":"cornichon-wallet","staking":"","exchange":""}},"cpc":{"name":"CPChain","icon":"icon-CPC","links":{"wallet":"cpchain-wallet","staking":"","exchange":""}},"crbn":{"name":"Carbon","icon":"icon-CRBN","links":{"wallet":"carbon-wallet","staking":"","exchange":""}},"cti":{"name":"ClinTex CTi","icon":"icon-CTI","links":{"wallet":"clintex cti-wallet","staking":"","exchange":""}},"cv":{"name":"carVertical","icon":"icon-CV","links":{"wallet":"carvertical-wallet","staking":"","exchange":""}},"cws":{"name":"Seascape Crowns","icon":"icon-CWS","links":{"wallet":"seascape crowns-wallet","staking":"","exchange":""}},"cyc":{"name":"Cyclone Protocol","icon":"icon-CYC","links":{"wallet":"cyclone protocol-wallet","staking":"","exchange":""}},"dav":{"name":"DAV Coin","icon":"icon-DAV","links":{"wallet":"dav coin-wallet","staking":"","exchange":""}},"dec":{"name":"Decentr","icon":"icon-DEC","links":{"wallet":"decentr-wallet","staking":"","exchange":""}},"dexa":{"name":"DEXA COIN","icon":"icon-DEXA","links":{"wallet":"dexa coin-wallet","staking":"","exchange":""}},"don":{"name":"Don-key","icon":"icon-DON","links":{"wallet":"don-key-wallet","staking":"","exchange":""}},"dough":{"name":"PieDAO DOUGH v2","icon":"icon-DOUGH","links":{"wallet":"piedao dough v2-wallet","staking":"","exchange":""}},"dpet":{"name":"My DeFi Pet","icon":"icon-DPET","links":{"wallet":"my defi pet-wallet","staking":"","exchange":""}},"duck":{"name":"Duck DAO (DLP Duck Token)","icon":"icon-DUCK","links":{"wallet":"duck dao (dlp duck token)-wallet","staking":"","exchange":""}},"eden":{"name":"Eden","icon":"icon-EDEN","links":{"wallet":"eden-wallet","staking":"","exchange":""}},"efx":{"name":"Effect Network","icon":"icon-EFX","links":{"wallet":"effect network-wallet","staking":"","exchange":""}},"egt":{"name":"Egretia","icon":"icon-EGT","links":{"wallet":"egretia-wallet","staking":"","exchange":""}},"ekta":{"name":"Ekta","icon":"icon-EKTA","links":{"wallet":"ekta-wallet","staking":"","exchange":""}},"elmon":{"name":"Elemon","icon":"icon-ELMON","links":{"wallet":"elemon-wallet","staking":"","exchange":""}},"em":{"name":"Eminer","icon":"icon-EM","links":{"wallet":"eminer-wallet","staking":"","exchange":""}},"epk":{"name":"EpiK Protocol","icon":"icon-EPK","links":{"wallet":"epik protocol-wallet","staking":"","exchange":""}},"eqz":{"name":"Equalizer","icon":"icon-EQZ","links":{"wallet":"equalizer-wallet","staking":"","exchange":""}},"esd":{"name":"Empty Set Dollar","icon":"icon-ESD","links":{"wallet":"empty set dollar-wallet","staking":"","exchange":""}},"ethpad":{"name":"ETHPad","icon":"icon-ETHPAD","links":{"wallet":"ethpad-wallet","staking":"","exchange":""}},"exrn":{"name":"EXRNchain","icon":"icon-EXRN","links":{"wallet":"exrnchain-wallet","staking":"","exchange":""}},"fair":{"name":"FairGame","icon":"icon-FAIR","links":{"wallet":"fairgame-wallet","staking":"","exchange":""}},"fara":{"name":"FaraLand","icon":"icon-FARA","links":{"wallet":"faraland-wallet","staking":"","exchange":""}},"fear":{"name":"Fear","icon":"icon-FEAR","links":{"wallet":"fear-wallet","staking":"","exchange":""}},"fina":{"name":"Defina Finance","icon":"icon-FINA","links":{"wallet":"defina finance-wallet","staking":"","exchange":""}},"fndz":{"name":"FNDZ","icon":"icon-FNDZ","links":{"wallet":"fndz-wallet","staking":"","exchange":""}},"frin":{"name":"Fringe Finance","icon":"icon-FRIN","links":{"wallet":"fringe finance-wallet","staking":"","exchange":""}},"fyp":{"name":"FlypMe","icon":"icon-FYP","links":{"wallet":"flypme-wallet","staking":"","exchange":""}},"gen":{"name":"DAOstack","icon":"icon-GEN","links":{"wallet":"daostack-wallet","staking":"","exchange":""}},"geo":{"name":"GeoDB","icon":"icon-GEO","links":{"wallet":"geodb-wallet","staking":"","exchange":""}},"ghny":{"name":"Grizzly Honey","icon":"icon-GHNY","links":{"wallet":"grizzly honey-wallet","staking":"","exchange":""}},"glq":{"name":"Graphlinq Protocol","icon":"icon-GLQ","links":{"wallet":"graphlinq protocol-wallet","staking":"","exchange":""}},"gmb":{"name":"GAMB","icon":"icon-GMB","links":{"wallet":"gamb-wallet","staking":"","exchange":""}},"gmpd":{"name":"GamesPad","icon":"icon-GMPD","links":{"wallet":"gamespad-wallet","staking":"","exchange":""}},"gof":{"name":"Golff","icon":"icon-GOF","links":{"wallet":"golff-wallet","staking":"","exchange":""}},"grg":{"name":"RigoBlock","icon":"icon-GRG","links":{"wallet":"rigoblock-wallet","staking":"","exchange":""}},"gsc":{"name":"Global Social Chain","icon":"icon-GSC","links":{"wallet":"global social chain-wallet","staking":"","exchange":""}},"hakka":{"name":"Hakka.Finance","icon":"icon-HAKKA","links":{"wallet":"hakka.finance-wallet","staking":"","exchange":""}},"hand":{"name":"ShowHand","icon":"icon-HAND","links":{"wallet":"showhand-wallet","staking":"","exchange":""}},"hget":{"name":"Hedget","icon":"icon-HGET","links":{"wallet":"hedget-wallet","staking":"","exchange":""}},"hgold":{"name":"HollyGold","icon":"icon-HGOLD","links":{"wallet":"hollygold-wallet","staking":"","exchange":""}},"hit":{"name":"HitChain","icon":"icon-HIT","links":{"wallet":"hitchain-wallet","staking":"","exchange":""}},"hnst":{"name":"Honest","icon":"icon-HNST","links":{"wallet":"honest-wallet","staking":"","exchange":""}},"hotcross":{"name":"Hot Cross","icon":"icon-HOTCROSS","links":{"wallet":"hot cross-wallet","staking":"","exchange":""}},"hyve":{"name":"Hyve","icon":"icon-HYVE","links":{"wallet":"hyve-wallet","staking":"","exchange":""}},"icnq":{"name":"Iconic Token","icon":"icon-ICNQ","links":{"wallet":"iconic token-wallet","staking":"","exchange":""}},"igg":{"name":"IG Gold","icon":"icon-IGG","links":{"wallet":"ig gold-wallet","staking":"","exchange":""}},"inxt":{"name":"Internxt","icon":"icon-INXT","links":{"wallet":"internxt-wallet","staking":"","exchange":""}},"ioi":{"name":"IOI Token","icon":"icon-IOI","links":{"wallet":"ioi token-wallet","staking":"","exchange":""}},"juld":{"name":"JulSwap","icon":"icon-JULD","links":{"wallet":"julswap-wallet","staking":"","exchange":""}},"kaby":{"name":"Kaby Arena","icon":"icon-KABY","links":{"wallet":"kaby arena-wallet","staking":"","exchange":""}},"kampay":{"name":"KamPay","icon":"icon-KAMPAY","links":{"wallet":"kampay-wallet","staking":"","exchange":""}},"kccpad":{"name":"KCCPAD","icon":"icon-KCCPAD","links":{"wallet":"kccpad-wallet","staking":"","exchange":""}},"kgo":{"name":"KIWIGO","icon":"icon-KGO","links":{"wallet":"kiwigo-wallet","staking":"","exchange":""}},"ktn":{"name":"Kattana","icon":"icon-KTN","links":{"wallet":"kattana-wallet","staking":"","exchange":""}},"launch":{"name":"SuperLauncher","icon":"icon-LAUNCH","links":{"wallet":"superlauncher-wallet","staking":"","exchange":""}},"lba":{"name":"Cred","icon":"icon-LBA","links":{"wallet":"cred-wallet","staking":"","exchange":""}},"lbp":{"name":"Launchblock.com","icon":"icon-LBP","links":{"wallet":"launchblock.com-wallet","staking":"","exchange":""}},"let":{"name":"LinkEye","icon":"icon-LET","links":{"wallet":"linkeye-wallet","staking":"","exchange":""}},"linka":{"name":"LINKA","icon":"icon-LINKA","links":{"wallet":"linka-wallet","staking":"","exchange":""}},"locg":{"name":"LOCGame","icon":"icon-LOCG","links":{"wallet":"locgame-wallet","staking":"","exchange":""}},"lowb":{"name":"Loser Coin","icon":"icon-LOWB","links":{"wallet":"loser coin-wallet","staking":"","exchange":""}},"lxt":{"name":"Litex","icon":"icon-LXT","links":{"wallet":"litex-wallet","staking":"","exchange":""}},"lym":{"name":"Lympo","icon":"icon-LYM","links":{"wallet":"lympo-wallet","staking":"","exchange":""}},"max":{"name":"MAX Exchange Token","icon":"icon-MAX","links":{"wallet":"max exchange token-wallet","staking":"","exchange":""}},"mist":{"name":"Mist","icon":"icon-MIST","links":{"wallet":"mist-wallet","staking":"","exchange":""}},"mph":{"name":"88mph","icon":"icon-MPH","links":{"wallet":"88mph-wallet","staking":"","exchange":""}},"mstr":{"name":"Monsterra (MSTR)","icon":"icon-MSTR","links":{"wallet":"monsterra (mstr)-wallet","staking":"","exchange":""}},"nbot":{"name":"Naka Bodhi Token","icon":"icon-NBOT","links":{"wallet":"naka bodhi token-wallet","staking":"","exchange":""}},"next":{"name":"ShopNEXT","icon":"icon-NEXT","links":{"wallet":"shopnext-wallet","staking":"","exchange":""}},"nftb":{"name":"NFTb","icon":"icon-NFTB","links":{"wallet":"nftb-wallet","staking":"","exchange":""}},"nftd":{"name":"NFTrade","icon":"icon-NFTD","links":{"wallet":"nftrade-wallet","staking":"","exchange":""}},"nfty":{"name":"NFTY Token","icon":"icon-NFTY","links":{"wallet":"nfty token-wallet","staking":"","exchange":""}},"nif":{"name":"Unifty","icon":"icon-NIF","links":{"wallet":"unifty-wallet","staking":"","exchange":""}},"nord":{"name":"Nord Finance","icon":"icon-NORD","links":{"wallet":"nord finance-wallet","staking":"","exchange":""}},"npxsxem":{"name":"Pundi X NEM","icon":"icon-NPXSXEM","links":{"wallet":"pundi x nem-wallet","staking":"","exchange":""}},"octo":{"name":"OctoFi","icon":"icon-OCTO","links":{"wallet":"octofi-wallet","staking":"","exchange":""}},"oddz":{"name":"Oddz","icon":"icon-ODDZ","links":{"wallet":"oddz-wallet","staking":"","exchange":""}},"ole":{"name":"OpenLeverage","icon":"icon-OLE","links":{"wallet":"openleverage-wallet","staking":"","exchange":""}},"oly":{"name":"Olyverse","icon":"icon-OLY","links":{"wallet":"olyverse-wallet","staking":"","exchange":""}},"opct":{"name":"Opacity","icon":"icon-OPCT","links":{"wallet":"opacity-wallet","staking":"","exchange":""}},"open":{"name":"OpenWorld","icon":"icon-OPEN","links":{"wallet":"openworld-wallet","staking":"","exchange":""}},"opium":{"name":"Opium","icon":"icon-OPIUM","links":{"wallet":"opium-wallet","staking":"","exchange":""}},"pacoca":{"name":"Pacoca","icon":"icon-PACOCA","links":{"wallet":"pacoca-wallet","staking":"","exchange":""}},"pawth":{"name":"Pawthereum","icon":"icon-PAWTH","links":{"wallet":"pawthereum-wallet","staking":"","exchange":""}},"peri":{"name":"PERI Finance","icon":"icon-PERI","links":{"wallet":"peri finance-wallet","staking":"","exchange":""}},"phnx":{"name":"PhoenixDAO","icon":"icon-PHNX","links":{"wallet":"phoenixdao-wallet","staking":"","exchange":""}},"pkr":{"name":"Polker","icon":"icon-PKR","links":{"wallet":"polker-wallet","staking":"","exchange":""}},"plf":{"name":"PlayFuel","icon":"icon-PLF","links":{"wallet":"playfuel-wallet","staking":"","exchange":""}},"plot":{"name":"PlotX","icon":"icon-PLOT","links":{"wallet":"plotx-wallet","staking":"","exchange":""}},"props":{"name":"Props Token","icon":"icon-PROPS","links":{"wallet":"props token-wallet","staking":"","exchange":""}},"pumlx":{"name":"PUMLx","icon":"icon-PUMLX","links":{"wallet":"pumlx-wallet","staking":"","exchange":""}},"pwar":{"name":"PolkaWar","icon":"icon-PWAR","links":{"wallet":"polkawar-wallet","staking":"","exchange":""}},"qch":{"name":"QChi","icon":"icon-QCH","links":{"wallet":"qchi-wallet","staking":"","exchange":""}},"qdao":{"name":"Q DAO Governance token v1.0","icon":"icon-QDAO","links":{"wallet":"q dao governance token v1.0-wallet","staking":"","exchange":""}},"raid":{"name":"Ancient Raid","icon":"icon-RAID","links":{"wallet":"ancient raid-wallet","staking":"","exchange":""}},"revo":{"name":"Revomon","icon":"icon-REVO","links":{"wallet":"revomon-wallet","staking":"","exchange":""}},"rhythm":{"name":"Rhythm","icon":"icon-RHYTHM","links":{"wallet":"rhythm-wallet","staking":"","exchange":""}},"seth":{"name":"Sether","icon":"icon-SETH","links":{"wallet":"sether-wallet","staking":"","exchange":""}},"silva":{"name":"Silva Token","icon":"icon-SILVA","links":{"wallet":"silva token-wallet","staking":"","exchange":""}},"slice":{"name":"Tranche Finance","icon":"icon-SLICE","links":{"wallet":"tranche finance-wallet","staking":"","exchange":""}},"smartcredit":{"name":"SmartCredit Token","icon":"icon-SMARTCREDIT","links":{"wallet":"smartcredit token-wallet","staking":"","exchange":""}},"snb":{"name":"SynchroBitcoin","icon":"icon-SNB","links":{"wallet":"synchrobitcoin-wallet","staking":"","exchange":""}},"sph":{"name":"Spheroid Universe","icon":"icon-SPH","links":{"wallet":"spheroid universe-wallet","staking":"","exchange":""}},"spore":{"name":"Spore","icon":"icon-SPORE","links":{"wallet":"spore-wallet","staking":"","exchange":""}},"stak":{"name":"Jigstack","icon":"icon-STAK","links":{"wallet":"jigstack-wallet","staking":"","exchange":""}},"step":{"name":"Step®","icon":"icon-STEP","links":{"wallet":"step®-wallet","staking":"","exchange":""}},"stpl":{"name":"Stream Protocol","icon":"icon-STPL","links":{"wallet":"stream protocol-wallet","staking":"","exchange":""}},"strong":{"name":"Strong","icon":"icon-STRONG","links":{"wallet":"strong-wallet","staking":"","exchange":""}},"swace":{"name":"Swace","icon":"icon-SWACE","links":{"wallet":"swace-wallet","staking":"","exchange":""}},"swg":{"name":"Swirge","icon":"icon-SWG","links":{"wallet":"swirge-wallet","staking":"","exchange":""}},"sync":{"name":"SYNC Network","icon":"icon-SYNC","links":{"wallet":"sync network-wallet","staking":"","exchange":""}},"tfbx":{"name":"TrueFeedBack","icon":"icon-TFBX","links":{"wallet":"truefeedback-wallet","staking":"","exchange":""}},"tking":{"name":"Tiger King Coin","icon":"icon-TKING","links":{"wallet":"tiger king coin-wallet","staking":"","exchange":""}},"tmtg":{"name":"The Midas Touch Gold","icon":"icon-TMTG","links":{"wallet":"the midas touch gold-wallet","staking":"","exchange":""}},"tons":{"name":"Thisoption","icon":"icon-TONS","links":{"wallet":"thisoption-wallet","staking":"","exchange":""}},"txa":{"name":"Project TXA","icon":"icon-TXA","links":{"wallet":"project txa-wallet","staking":"","exchange":""}},"txl":{"name":"Autobahn Network","icon":"icon-TXL","links":{"wallet":"autobahn network-wallet","staking":"","exchange":""}},"ubxt":{"name":"UpBots","icon":"icon-UBXT","links":{"wallet":"upbots-wallet","staking":"","exchange":""}},"ufr":{"name":"Upfiring","icon":"icon-UFR","links":{"wallet":"upfiring-wallet","staking":"","exchange":""}},"umb":{"name":"Umbrella Network","icon":"icon-UMB","links":{"wallet":"umbrella network-wallet","staking":"","exchange":""}},"unistake":{"name":"Unistake","icon":"icon-UNISTAKE","links":{"wallet":"unistake-wallet","staking":"","exchange":""}},"upi":{"name":"Pawtocol","icon":"icon-UPI","links":{"wallet":"pawtocol-wallet","staking":"","exchange":""}},"vidy":{"name":"VIDY","icon":"icon-VIDY","links":{"wallet":"vidy-wallet","staking":"","exchange":""}},"vpp":{"name":"Virtue Poker","icon":"icon-VPP","links":{"wallet":"virtue poker-wallet","staking":"","exchange":""}},"watch":{"name":"yieldwatch","icon":"icon-WATCH","links":{"wallet":"yieldwatch-wallet","staking":"","exchange":""}},"white":{"name":"Whiteheart","icon":"icon-WHITE","links":{"wallet":"whiteheart-wallet","staking":"","exchange":""}},"wombat":{"name":"Wombat Web 3 Gaming Platform","icon":"icon-WOMBAT","links":{"wallet":"wombat web 3 gaming platform-wallet","staking":"","exchange":""}},"wsg":{"name":"Wall Street Games","icon":"icon-WSG","links":{"wallet":"wall street games-wallet","staking":"","exchange":""}},"xcv":{"name":"XCarnival","icon":"icon-XCV","links":{"wallet":"xcarnival-wallet","staking":"","exchange":""}},"xpn":{"name":"PANTHEON X","icon":"icon-XPN","links":{"wallet":"pantheon x-wallet","staking":"","exchange":""}},"xrune":{"name":"Thorstarter","icon":"icon-XRUNE","links":{"wallet":"thorstarter-wallet","staking":"","exchange":""}},"xy":{"name":"XY Finance","icon":"icon-XY","links":{"wallet":"xy finance-wallet","staking":"","exchange":""}},"yop":{"name":"Yield Optimization Platform & Protocol","icon":"icon-YOP","links":{"wallet":"yield optimization platform & protocol-wallet","staking":"","exchange":""}},"you":{"name":"YOU COIN","icon":"icon-YOU","links":{"wallet":"you coin-wallet","staking":"","exchange":""}},"zap":{"name":"Zap","icon":"icon-ZAP","links":{"wallet":"zap-wallet","staking":"","exchange":""}},"zdr":{"name":"Zloadr","icon":"icon-ZDR","links":{"wallet":"zloadr-wallet","staking":"","exchange":""}},"zefu":{"name":"Zenfuse","icon":"icon-ZEFU","links":{"wallet":"zenfuse-wallet","staking":"","exchange":""}},"zmn":{"name":"ZMINE","icon":"icon-ZMN","links":{"wallet":"zmine-wallet","staking":"","exchange":""}},"zoon":{"name":"CryptoZoon","icon":"icon-ZOON","links":{"wallet":"cryptozoon-wallet","staking":"","exchange":""}},"$anrx":{"name":"AnRKey X","icon":"icon-$ANRX","links":{"wallet":"anrkey x-wallet","staking":"","exchange":""}},"2crz":{"name":"2crazyNFT","icon":"icon-2CRZ","links":{"wallet":"2crazynft-wallet","staking":"","exchange":""}},"a":{"name":"Alpha Token","icon":"icon-A","links":{"wallet":"alpha token-wallet","staking":"","exchange":""}},"ac":{"name":"ACoconut","icon":"icon-AC","links":{"wallet":"acoconut-wallet","staking":"","exchange":""}},"adb":{"name":"adbank","icon":"icon-ADB","links":{"wallet":"adbank-wallet","staking":"","exchange":""}},"add":{"name":"Add.xyz","icon":"icon-ADD","links":{"wallet":"add.xyz-wallet","staking":"","exchange":""}},"aid":{"name":"AidCoin","icon":"icon-AID","links":{"wallet":"aidcoin-wallet","staking":"","exchange":""}},"airt":{"name":"AirNFTs","icon":"icon-AIRT","links":{"wallet":"airnfts-wallet","staking":"","exchange":""}},"amon":{"name":"AmonD","icon":"icon-AMON","links":{"wallet":"amond-wallet","staking":"","exchange":""}},"anw":{"name":"Anchor Neural World","icon":"icon-ANW","links":{"wallet":"anchor neural world-wallet","staking":"","exchange":""}},"apix":{"name":"APIX","icon":"icon-APIX","links":{"wallet":"apix-wallet","staking":"","exchange":""}},"apys":{"name":"APYSwap","icon":"icon-APYS","links":{"wallet":"apyswap-wallet","staking":"","exchange":""}},"ares":{"name":"Ares Protocol","icon":"icon-ARES","links":{"wallet":"ares protocol-wallet","staking":"","exchange":""}},"aspo":{"name":"ASPO World","icon":"icon-ASPO","links":{"wallet":"aspo world-wallet","staking":"","exchange":""}},"astro":{"name":"AstroSwap","icon":"icon-ASTRO","links":{"wallet":"astroswap-wallet","staking":"","exchange":""}},"atp":{"name":"Atlas Protocol","icon":"icon-ATP","links":{"wallet":"atlas protocol-wallet","staking":"","exchange":""}},"bac":{"name":"Basis Cash","icon":"icon-BAC","links":{"wallet":"basis cash-wallet","staking":"","exchange":""}},"banca":{"name":"Banca","icon":"icon-BANCA","links":{"wallet":"banca-wallet","staking":"","exchange":""}},"bank":{"name":"Float Protocol (Bank)","icon":"icon-BANK","links":{"wallet":"float protocol (bank)-wallet","staking":"","exchange":""}},"banker":{"name":"BankerDoge","icon":"icon-BANKER","links":{"wallet":"bankerdoge-wallet","staking":"","exchange":""}},"base":{"name":"Base Protocol","icon":"icon-BASE","links":{"wallet":"base protocol-wallet","staking":"","exchange":""}},"bath":{"name":"Battle Hero","icon":"icon-BATH","links":{"wallet":"battle hero-wallet","staking":"","exchange":""}},"beer":{"name":"Beer Money","icon":"icon-BEER","links":{"wallet":"beer money-wallet","staking":"","exchange":""}},"blink":{"name":"BLink","icon":"icon-BLINK","links":{"wallet":"blink-wallet","staking":"","exchange":""}},"bob":{"name":"Bob\'s Repair","icon":"icon-BOB","links":{"wallet":"bob\'s repair-wallet","staking":"","exchange":""}},"box":{"name":"ContentBox","icon":"icon-BOX","links":{"wallet":"contentbox-wallet","staking":"","exchange":""}},"brkl":{"name":"Brokoli Network","icon":"icon-BRKL","links":{"wallet":"brokoli network-wallet","staking":"","exchange":""}},"btb":{"name":"BitBall","icon":"icon-BTB","links":{"wallet":"bitball-wallet","staking":"","exchange":""}},"bxx":{"name":"Baanx","icon":"icon-BXX","links":{"wallet":"baanx-wallet","staking":"","exchange":""}},"bxy":{"name":"Beaxy","icon":"icon-BXY","links":{"wallet":"beaxy-wallet","staking":"","exchange":""}},"bznt":{"name":"Bezant","icon":"icon-BZNT","links":{"wallet":"bezant-wallet","staking":"","exchange":""}},"clr":{"name":"Color Platform","icon":"icon-CLR","links":{"wallet":"color platform-wallet","staking":"","exchange":""}},"cnb":{"name":"Coinsbit Token","icon":"icon-CNB","links":{"wallet":"coinsbit token-wallet","staking":"","exchange":""}},"cofi":{"name":"CoinFi","icon":"icon-COFI","links":{"wallet":"coinfi-wallet","staking":"","exchange":""}},"cook":{"name":"Cook Finance","icon":"icon-COOK","links":{"wallet":"cook finance-wallet","staking":"","exchange":""}},"cor":{"name":"Coreto","icon":"icon-COR","links":{"wallet":"coreto-wallet","staking":"","exchange":""}},"cora":{"name":"Corra.Finance","icon":"icon-CORA","links":{"wallet":"corra.finance-wallet","staking":"","exchange":""}},"crx":{"name":"CryptEx","icon":"icon-CRX","links":{"wallet":"cryptex-wallet","staking":"","exchange":""}},"csm":{"name":"Crust Shadow","icon":"icon-CSM","links":{"wallet":"crust shadow-wallet","staking":"","exchange":""}},"csp":{"name":"Caspian","icon":"icon-CSP","links":{"wallet":"caspian-wallet","staking":"","exchange":""}},"cvr":{"name":"CoverCompared","icon":"icon-CVR","links":{"wallet":"covercompared-wallet","staking":"","exchange":""}},"dapp":{"name":"LiquidApps","icon":"icon-DAPP","links":{"wallet":"liquidapps-wallet","staking":"","exchange":""}},"dappx":{"name":"dAppstore","icon":"icon-DAPPX","links":{"wallet":"dappstore-wallet","staking":"","exchange":""}},"ddd":{"name":"Scry.info","icon":"icon-DDD","links":{"wallet":"scry.info-wallet","staking":"","exchange":""}},"ddos":{"name":"disBalancer","icon":"icon-DDOS","links":{"wallet":"disbalancer-wallet","staking":"","exchange":""}},"dev":{"name":"Dev Protocol","icon":"icon-DEV","links":{"wallet":"dev protocol-wallet","staking":"","exchange":""}},"dhv":{"name":"DeHive","icon":"icon-DHV","links":{"wallet":"dehive-wallet","staking":"","exchange":""}},"dmg":{"name":"DMM: Governance","icon":"icon-DMG","links":{"wallet":"dmm: governance-wallet","staking":"","exchange":""}},"dmt":{"name":"DMarket","icon":"icon-DMT","links":{"wallet":"dmarket-wallet","staking":"","exchange":""}},"dnxc":{"name":"DinoX","icon":"icon-DNXC","links":{"wallet":"dinox-wallet","staking":"","exchange":""}},"dop":{"name":"Drops Ownership Power","icon":"icon-DOP","links":{"wallet":"drops ownership power-wallet","staking":"","exchange":""}},"dose":{"name":"DOSE","icon":"icon-DOSE","links":{"wallet":"dose-wallet","staking":"","exchange":""}},"dows":{"name":"Shadows","icon":"icon-DOWS","links":{"wallet":"shadows-wallet","staking":"","exchange":""}},"drc":{"name":"Digital Reserve Currency","icon":"icon-DRC","links":{"wallet":"digital reserve currency-wallet","staking":"","exchange":""}},"dvp":{"name":"Decentralized Vulnerability Platform","icon":"icon-DVP","links":{"wallet":"decentralized vulnerability platform-wallet","staking":"","exchange":""}},"dweb":{"name":"DecentraWeb","icon":"icon-DWEB","links":{"wallet":"decentraweb-wallet","staking":"","exchange":""}},"dyna":{"name":"Dynamix","icon":"icon-DYNA","links":{"wallet":"dynamix-wallet","staking":"","exchange":""}},"elama":{"name":"Elamachain","icon":"icon-ELAMA","links":{"wallet":"elamachain-wallet","staking":"","exchange":""}},"elec":{"name":"Electrify.Asia","icon":"icon-ELEC","links":{"wallet":"electrify.asia-wallet","staking":"","exchange":""}},"eosdac":{"name":"eosDAC","icon":"icon-EOSDAC","links":{"wallet":"eosdac-wallet","staking":"","exchange":""}},"eql":{"name":"Equal","icon":"icon-EQL","links":{"wallet":"equal-wallet","staking":"","exchange":""}},"ess":{"name":"Essentia","icon":"icon-ESS","links":{"wallet":"essentia-wallet","staking":"","exchange":""}},"etha":{"name":"ETHA Lend","icon":"icon-ETHA","links":{"wallet":"etha lend-wallet","staking":"","exchange":""}},"eved":{"name":"Evedo","icon":"icon-EVED","links":{"wallet":"evedo-wallet","staking":"","exchange":""}},"evry":{"name":"EVRYNET","icon":"icon-EVRY","links":{"wallet":"evrynet-wallet","staking":"","exchange":""}},"ez":{"name":"EasyFi","icon":"icon-EZ","links":{"wallet":"easyfi-wallet","staking":"","exchange":""}},"fcl":{"name":"Fractal","icon":"icon-FCL","links":{"wallet":"fractal-wallet","staking":"","exchange":""}},"fex":{"name":"FidexToken","icon":"icon-FEX","links":{"wallet":"fidextoken-wallet","staking":"","exchange":""}},"fin":{"name":"DeFiner","icon":"icon-FIN","links":{"wallet":"definer-wallet","staking":"","exchange":""}},"fine":{"name":"Refinable","icon":"icon-FINE","links":{"wallet":"refinable-wallet","staking":"","exchange":""}},"fiu":{"name":"beFITTER","icon":"icon-FIU","links":{"wallet":"befitter-wallet","staking":"","exchange":""}},"flp":{"name":"FLIP","icon":"icon-FLP","links":{"wallet":"flip-wallet","staking":"","exchange":""}},"fnt":{"name":"Falcon Project","icon":"icon-FNT","links":{"wallet":"falcon project-wallet","staking":"","exchange":""}},"form":{"name":"Formation Fi","icon":"icon-FORM","links":{"wallet":"formation fi-wallet","staking":"","exchange":""}},"fsw":{"name":"Falconswap","icon":"icon-FSW","links":{"wallet":"falconswap-wallet","staking":"","exchange":""}},"ftx":{"name":"FintruX Network","icon":"icon-FTX","links":{"wallet":"fintrux network-wallet","staking":"","exchange":""}},"gard":{"name":"Hashgard","icon":"icon-GARD","links":{"wallet":"hashgard-wallet","staking":"","exchange":""}},"gdao":{"name":"Governor DAO","icon":"icon-GDAO","links":{"wallet":"governor dao-wallet","staking":"","exchange":""}},"gmat":{"name":"GoWithMi","icon":"icon-GMAT","links":{"wallet":"gowithmi-wallet","staking":"","exchange":""}},"gsts":{"name":"Gunstar Metaverse","icon":"icon-GSTS","links":{"wallet":"gunstar metaverse-wallet","staking":"","exchange":""}},"hbx":{"name":"HashBX","icon":"icon-HBX","links":{"wallet":"hashbx-wallet","staking":"","exchange":""}},"helmet":{"name":"Helmet.insure","icon":"icon-HELMET","links":{"wallet":"helmet.insure-wallet","staking":"","exchange":""}},"husl":{"name":"The HUSL","icon":"icon-HUSL","links":{"wallet":"the husl-wallet","staking":"","exchange":""}},"ieth":{"name":"iEthereum","icon":"icon-IETH","links":{"wallet":"iethereum-wallet","staking":"","exchange":""}},"if":{"name":"Impossible Finance","icon":"icon-IF","links":{"wallet":"impossible finance-wallet","staking":"","exchange":""}},"jrt":{"name":"Jarvis Network","icon":"icon-JRT","links":{"wallet":"jarvis network-wallet","staking":"","exchange":""}},"kangal":{"name":"Kangal","icon":"icon-KANGAL","links":{"wallet":"kangal-wallet","staking":"","exchange":""}},"kart":{"name":"Dragon Kart","icon":"icon-KART","links":{"wallet":"dragon kart-wallet","staking":"","exchange":""}},"kcash":{"name":"Kcash","icon":"icon-KCASH","links":{"wallet":"kcash-wallet","staking":"","exchange":""}},"ktlyo":{"name":"Katalyo","icon":"icon-KTLYO","links":{"wallet":"katalyo-wallet","staking":"","exchange":""}},"kton":{"name":"Darwinia Commitment Token","icon":"icon-KTON","links":{"wallet":"darwinia commitment token-wallet","staking":"","exchange":""}},"l2":{"name":"Leverj Gluon","icon":"icon-L2","links":{"wallet":"leverj gluon-wallet","staking":"","exchange":""}},"lanc":{"name":"Lanceria","icon":"icon-LANC","links":{"wallet":"lanceria-wallet","staking":"","exchange":""}},"ledu":{"name":"Education Ecosystem","icon":"icon-LEDU","links":{"wallet":"education ecosystem-wallet","staking":"","exchange":""}},"levl":{"name":"Levolution","icon":"icon-LEVL","links":{"wallet":"levolution-wallet","staking":"","exchange":""}},"lfg":{"name":"Gamerse","icon":"icon-LFG","links":{"wallet":"gamerse-wallet","staking":"","exchange":""}},"lfw":{"name":"Legend of Fantasy War","icon":"icon-LFW","links":{"wallet":"legend of fantasy war-wallet","staking":"","exchange":""}},"lkr":{"name":"Lokr","icon":"icon-LKR","links":{"wallet":"lokr-wallet","staking":"","exchange":""}},"lml":{"name":"Link Machine Learning","icon":"icon-LML","links":{"wallet":"link machine learning-wallet","staking":"","exchange":""}},"luc":{"name":"Lucretius","icon":"icon-LUC","links":{"wallet":"lucretius-wallet","staking":"","exchange":""}},"lz":{"name":"LaunchZone","icon":"icon-LZ","links":{"wallet":"launchzone-wallet","staking":"","exchange":""}},"marsh":{"name":"UnMarshal","icon":"icon-MARSH","links":{"wallet":"unmarshal-wallet","staking":"","exchange":""}},"metax":{"name":"MetaverseX","icon":"icon-METAX","links":{"wallet":"metaversex-wallet","staking":"","exchange":""}},"mnd":{"name":"Mind Music","icon":"icon-MND","links":{"wallet":"mind music-wallet","staking":"","exchange":""}},"mvp":{"name":"Merculet","icon":"icon-MVP","links":{"wallet":"merculet-wallet","staking":"","exchange":""}},"n1":{"name":"NFTify","icon":"icon-N1","links":{"wallet":"nftify-wallet","staking":"","exchange":""}},"naft":{"name":"Nafter","icon":"icon-NAFT","links":{"wallet":"nafter-wallet","staking":"","exchange":""}},"nanj":{"name":"NANJCOIN","icon":"icon-NANJ","links":{"wallet":"nanjcoin-wallet","staking":"","exchange":""}},"ncdt":{"name":"Nuco.cloud","icon":"icon-NCDT","links":{"wallet":"nuco.cloud-wallet","staking":"","exchange":""}},"nrv":{"name":"Nerve Finance","icon":"icon-NRV","links":{"wallet":"nerve finance-wallet","staking":"","exchange":""}},"oin":{"name":"OIN Finance","icon":"icon-OIN","links":{"wallet":"oin finance-wallet","staking":"","exchange":""}},"onx":{"name":"ownix","icon":"icon-ONX","links":{"wallet":"ownix-wallet","staking":"","exchange":""}},"oxy":{"name":"Oxygen","icon":"icon-OXY","links":{"wallet":"oxygen-wallet","staking":"","exchange":""}},"paint":{"name":"MurAll","icon":"icon-PAINT","links":{"wallet":"murall-wallet","staking":"","exchange":""}},"pass":{"name":"Blockpass","icon":"icon-PASS","links":{"wallet":"blockpass-wallet","staking":"","exchange":""}},"pbx":{"name":"Paribus","icon":"icon-PBX","links":{"wallet":"paribus-wallet","staking":"","exchange":""}},"pets":{"name":"MicroPets","icon":"icon-PETS","links":{"wallet":"micropets-wallet","staking":"","exchange":""}},"phi":{"name":"PHI Token","icon":"icon-PHI","links":{"wallet":"phi token-wallet","staking":"","exchange":""}},"plspad":{"name":"PulsePad","icon":"icon-PLSPAD","links":{"wallet":"pulsepad-wallet","staking":"","exchange":""}},"poli":{"name":"Polinate","icon":"icon-POLI","links":{"wallet":"polinate-wallet","staking":"","exchange":""}},"ppay":{"name":"Plasma Finance","icon":"icon-PPAY","links":{"wallet":"plasma finance-wallet","staking":"","exchange":""}},"ppblz":{"name":"Pepemon Pepeballs","icon":"icon-PPBLZ","links":{"wallet":"pepemon pepeballs-wallet","staking":"","exchange":""}},"pst":{"name":"Primas","icon":"icon-PST","links":{"wallet":"primas-wallet","staking":"","exchange":""}},"ptf":{"name":"PowerTrade Fuel","icon":"icon-PTF","links":{"wallet":"powertrade fuel-wallet","staking":"","exchange":""}},"pvu":{"name":"Plant Vs Undead","icon":"icon-PVU","links":{"wallet":"plant vs undead-wallet","staking":"","exchange":""}},"rainbow":{"name":"Rainbow Token","icon":"icon-RAINBOW","links":{"wallet":"rainbow token-wallet","staking":"","exchange":""}},"rating":{"name":"DPRating","icon":"icon-RATING","links":{"wallet":"dprating-wallet","staking":"","exchange":""}},"raze":{"name":"Raze Network","icon":"icon-RAZE","links":{"wallet":"raze network-wallet","staking":"","exchange":""}},"rblx":{"name":"Rublix","icon":"icon-RBLX","links":{"wallet":"rublix-wallet","staking":"","exchange":""}},"red":{"name":"RED","icon":"icon-RED","links":{"wallet":"red-wallet","staking":"","exchange":""}},"rem":{"name":"Remme","icon":"icon-REM","links":{"wallet":"remme-wallet","staking":"","exchange":""}},"rendoge":{"name":"renDOGE","icon":"icon-RENDOGE","links":{"wallet":"rendoge-wallet","staking":"","exchange":""}},"ret":{"name":"RealTract","icon":"icon-RET","links":{"wallet":"realtract-wallet","staking":"","exchange":""}},"rht":{"name":"Reward Hunters Token","icon":"icon-RHT","links":{"wallet":"reward hunters token-wallet","staking":"","exchange":""}},"rnt":{"name":"OneRoot Network","icon":"icon-RNT","links":{"wallet":"oneroot network-wallet","staking":"","exchange":""}},"room":{"name":"OptionRoom","icon":"icon-ROOM","links":{"wallet":"optionroom-wallet","staking":"","exchange":""}},"rxs":{"name":"Rune Shards","icon":"icon-RXS","links":{"wallet":"rune shards-wallet","staking":"","exchange":""}},"sake":{"name":"SakeToken","icon":"icon-SAKE","links":{"wallet":"saketoken-wallet","staking":"","exchange":""}},"shopx":{"name":"SHOPX","icon":"icon-SHOPX","links":{"wallet":"shopx-wallet","staking":"","exchange":""}},"skb":{"name":"Sakura Bloom","icon":"icon-SKB","links":{"wallet":"sakura bloom-wallet","staking":"","exchange":""}},"skm":{"name":"Skrumble Network","icon":"icon-SKM","links":{"wallet":"skrumble network-wallet","staking":"","exchange":""}},"sn":{"name":"SpaceN","icon":"icon-SN","links":{"wallet":"spacen-wallet","staking":"","exchange":""}},"snet":{"name":"Snetwork","icon":"icon-SNET","links":{"wallet":"snetwork-wallet","staking":"","exchange":""}},"snow":{"name":"SnowSwap","icon":"icon-SNOW","links":{"wallet":"snowswap-wallet","staking":"","exchange":""}},"spo":{"name":"Spores Network","icon":"icon-SPO","links":{"wallet":"spores network-wallet","staking":"","exchange":""}},"spume":{"name":"Spume Protocol","icon":"icon-SPUME","links":{"wallet":"spume protocol-wallet","staking":"","exchange":""}},"spwn":{"name":"Bitspawn","icon":"icon-SPWN","links":{"wallet":"bitspawn-wallet","staking":"","exchange":""}},"sta":{"name":"STATERA","icon":"icon-STA","links":{"wallet":"statera-wallet","staking":"","exchange":""}},"stm":{"name":"Streamity","icon":"icon-STM","links":{"wallet":"streamity-wallet","staking":"","exchange":""}},"stnd":{"name":"Standard Protocol","icon":"icon-STND","links":{"wallet":"standard protocol-wallet","staking":"","exchange":""}},"tch":{"name":"TigerCash","icon":"icon-TCH","links":{"wallet":"tigercash-wallet","staking":"","exchange":""}},"terc":{"name":"TronEuropeRewardCoin","icon":"icon-TERC","links":{"wallet":"troneuroperewardcoin-wallet","staking":"","exchange":""}},"toc":{"name":"TouchCon","icon":"icon-TOC","links":{"wallet":"touchcon-wallet","staking":"","exchange":""}},"tok":{"name":"Tokenplace","icon":"icon-TOK","links":{"wallet":"tokenplace-wallet","staking":"","exchange":""}},"trava":{"name":"TRAVA.FINANCE","icon":"icon-TRAVA","links":{"wallet":"trava.finance-wallet","staking":"","exchange":""}},"trl":{"name":"Triall","icon":"icon-TRL","links":{"wallet":"triall-wallet","staking":"","exchange":""}},"tyc":{"name":"Tycoon","icon":"icon-TYC","links":{"wallet":"tycoon-wallet","staking":"","exchange":""}},"type":{"name":"Typerium","icon":"icon-TYPE","links":{"wallet":"typerium-wallet","staking":"","exchange":""}},"ubxs":{"name":"UBXS Token","icon":"icon-UBXS","links":{"wallet":"ubxs token-wallet","staking":"","exchange":""}},"udo":{"name":"Unido EP","icon":"icon-UDO","links":{"wallet":"unido ep-wallet","staking":"","exchange":""}},"uip":{"name":"UnlimitedIP","icon":"icon-UIP","links":{"wallet":"unlimitedip-wallet","staking":"","exchange":""}},"umask":{"name":"Unicly Hashmasks Collection","icon":"icon-UMASK","links":{"wallet":"unicly hashmasks collection-wallet","staking":"","exchange":""}},"umx":{"name":"UniMex Network","icon":"icon-UMX","links":{"wallet":"unimex network-wallet","staking":"","exchange":""}},"urqa":{"name":"UREEQA","icon":"icon-URQA","links":{"wallet":"ureeqa-wallet","staking":"","exchange":""}},"utu":{"name":"UTU Protocol","icon":"icon-UTU","links":{"wallet":"utu protocol-wallet","staking":"","exchange":""}},"uuu":{"name":"U Network","icon":"icon-UUU","links":{"wallet":"u network-wallet","staking":"","exchange":""}},"vbg":{"name":"Vibing","icon":"icon-VBG","links":{"wallet":"vibing-wallet","staking":"","exchange":""}},"vgw":{"name":"VegaWallet Token","icon":"icon-VGW","links":{"wallet":"vegawallet token-wallet","staking":"","exchange":""}},"vnla":{"name":"Vanilla Network","icon":"icon-VNLA","links":{"wallet":"vanilla network-wallet","staking":"","exchange":""}},"wab":{"name":"WABnetwork","icon":"icon-WAB","links":{"wallet":"wabnetwork-wallet","staking":"","exchange":""}},"wag":{"name":"WagyuSwap","icon":"icon-WAG","links":{"wallet":"wagyuswap-wallet","staking":"","exchange":""}},"welt":{"name":"Fabwelt","icon":"icon-WELT","links":{"wallet":"fabwelt-wallet","staking":"","exchange":""}},"wgp":{"name":"W Green Pay","icon":"icon-WGP","links":{"wallet":"w green pay-wallet","staking":"","exchange":""}},"wish":{"name":"MyWish","icon":"icon-WISH","links":{"wallet":"mywish-wallet","staking":"","exchange":""}},"wspp":{"name":"Wolf Safe Poor People","icon":"icon-WSPP","links":{"wallet":"wolf safe poor people-wallet","staking":"","exchange":""}},"wtn":{"name":"Waletoken","icon":"icon-WTN","links":{"wallet":"waletoken-wallet","staking":"","exchange":""}},"x8x":{"name":"X8X Token","icon":"icon-X8X","links":{"wallet":"x8x token-wallet","staking":"","exchange":""}},"xcur":{"name":"Curate","icon":"icon-XCUR","links":{"wallet":"curate-wallet","staking":"","exchange":""}},"xio":{"name":"Blockzero Labs","icon":"icon-XIO","links":{"wallet":"blockzero labs-wallet","staking":"","exchange":""}},"xmx":{"name":"XMax","icon":"icon-XMX","links":{"wallet":"xmax-wallet","staking":"","exchange":""}},"xnl":{"name":"Chronicle","icon":"icon-XNL","links":{"wallet":"chronicle-wallet","staking":"","exchange":""}},"xpnet":{"name":"XP NETWORK","icon":"icon-XPNET","links":{"wallet":"xp network-wallet","staking":"","exchange":""}},"xsr":{"name":"Xensor","icon":"icon-XSR","links":{"wallet":"xensor-wallet","staking":"","exchange":""}},"xtp":{"name":"Tap","icon":"icon-XTP","links":{"wallet":"tap-wallet","staking":"","exchange":""}},"yetic":{"name":"YetiCoin","icon":"icon-YETIC","links":{"wallet":"yeticoin-wallet","staking":"","exchange":""}},"yfl":{"name":"YF Link","icon":"icon-YFL","links":{"wallet":"yf link-wallet","staking":"","exchange":""}},"zum":{"name":"ZUM TOKEN","icon":"icon-ZUM","links":{"wallet":"zum token-wallet","staking":"","exchange":""}},"aac":{"name":"Double-A Chain","icon":"icon-AAC","links":{"wallet":"double-a chain-wallet","staking":"","exchange":""}},"accel":{"name":"ACCEL","icon":"icon-ACCEL","links":{"wallet":"accel-wallet","staking":"","exchange":""}},"airi":{"name":"aiRight","icon":"icon-AIRI","links":{"wallet":"airight-wallet","staking":"","exchange":""}},"apy":{"name":"APY.Finance","icon":"icon-APY","links":{"wallet":"apy.finance-wallet","staking":"","exchange":""}},"asko":{"name":"ASKO","icon":"icon-ASKO","links":{"wallet":"asko-wallet","staking":"","exchange":""}},"auc":{"name":"Auctus","icon":"icon-AUC","links":{"wallet":"auctus-wallet","staking":"","exchange":""}},"axpr":{"name":"Moola","icon":"icon-AXPR","links":{"wallet":"moola-wallet","staking":"","exchange":""}},"bcug":{"name":"Blockchain Cuties Universe Governance","icon":"icon-BCUG","links":{"wallet":"blockchain cuties universe governance-wallet","staking":"","exchange":""}},"bcv":{"name":"BitCapitalVendor","icon":"icon-BCV","links":{"wallet":"bitcapitalvendor-wallet","staking":"","exchange":""}},"bho":{"name":"BHO Network","icon":"icon-BHO","links":{"wallet":"bho network-wallet","staking":"","exchange":""}},"bid":{"name":"DeFi Bids","icon":"icon-BID","links":{"wallet":"defi bids-wallet","staking":"","exchange":""}},"blue":{"name":"Blue Protocol","icon":"icon-BLUE","links":{"wallet":"blue protocol-wallet","staking":"","exchange":""}},"bnu":{"name":"ByteNext","icon":"icon-BNU","links":{"wallet":"bytenext-wallet","staking":"","exchange":""}},"bomb":{"name":"BOMB","icon":"icon-BOMB","links":{"wallet":"bomb-wallet","staking":"","exchange":""}},"bry":{"name":"Berry Data","icon":"icon-BRY","links":{"wallet":"berry data-wallet","staking":"","exchange":""}},"capp":{"name":"Cappasity","icon":"icon-CAPP","links":{"wallet":"cappasity-wallet","staking":"","exchange":""}},"cls":{"name":"Coldstack","icon":"icon-CLS","links":{"wallet":"coldstack-wallet","staking":"","exchange":""}},"cnn":{"name":"Content Neutrality Network","icon":"icon-CNN","links":{"wallet":"content neutrality network-wallet","staking":"","exchange":""}},"cntm":{"name":"Connectome","icon":"icon-CNTM","links":{"wallet":"connectome-wallet","staking":"","exchange":""}},"corgib":{"name":"The Corgi of PolkaBridge","icon":"icon-CORGIB","links":{"wallet":"the corgi of polkabridge-wallet","staking":"","exchange":""}},"cosm":{"name":"Cosmo Coin","icon":"icon-COSM","links":{"wallet":"cosmo coin-wallet","staking":"","exchange":""}},"cot":{"name":"CoTrader","icon":"icon-COT","links":{"wallet":"cotrader-wallet","staking":"","exchange":""}},"cpo":{"name":"Cryptopolis","icon":"icon-CPO","links":{"wallet":"cryptopolis-wallet","staking":"","exchange":""}},"cre8":{"name":"Creaticles","icon":"icon-CRE8","links":{"wallet":"creaticles-wallet","staking":"","exchange":""}},"cymt":{"name":"CyberMusic","icon":"icon-CYMT","links":{"wallet":"cybermusic-wallet","staking":"","exchange":""}},"dac":{"name":"Davinci Coin","icon":"icon-DAC","links":{"wallet":"davinci coin-wallet","staking":"","exchange":""}},"dom":{"name":"Ancient Kingdom","icon":"icon-DOM","links":{"wallet":"ancient kingdom-wallet","staking":"","exchange":""}},"donut":{"name":"Donut","icon":"icon-DONUT","links":{"wallet":"donut-wallet","staking":"","exchange":""}},"dos":{"name":"DOS Network","icon":"icon-DOS","links":{"wallet":"dos network-wallet","staking":"","exchange":""}},"dvd":{"name":"DAOventures","icon":"icon-DVD","links":{"wallet":"daoventures-wallet","staking":"","exchange":""}},"eland":{"name":"Etherland","icon":"icon-ELAND","links":{"wallet":"etherland-wallet","staking":"","exchange":""}},"eost":{"name":"EOS TRUST","icon":"icon-EOST","links":{"wallet":"eos trust-wallet","staking":"","exchange":""}},"etgp":{"name":"Ethereum Gold Project","icon":"icon-ETGP","links":{"wallet":"ethereum gold project-wallet","staking":"","exchange":""}},"etna":{"name":"ETNA Network","icon":"icon-ETNA","links":{"wallet":"etna network-wallet","staking":"","exchange":""}},"eye":{"name":"MEDIA EYE NFT Portal","icon":"icon-EYE","links":{"wallet":"media eye nft portal-wallet","staking":"","exchange":""}},"face":{"name":"Faceter","icon":"icon-FACE","links":{"wallet":"faceter-wallet","staking":"","exchange":""}},"fbx":{"name":"Finance Blocks","icon":"icon-FBX","links":{"wallet":"finance blocks-wallet","staking":"","exchange":""}},"fdz":{"name":"Friendz","icon":"icon-FDZ","links":{"wallet":"friendz-wallet","staking":"","exchange":""}},"fnb":{"name":"FNB Protocol","icon":"icon-FNB","links":{"wallet":"fnb protocol-wallet","staking":"","exchange":""}},"fota":{"name":"FOTA - Fight Of The Ages","icon":"icon-FOTA","links":{"wallet":"fota - fight of the ages-wallet","staking":"","exchange":""}},"four":{"name":"4THPILLAR TECHNOLOGIES","icon":"icon-FOUR","links":{"wallet":"4thpillar technologies-wallet","staking":"","exchange":""}},"fti":{"name":"FansTime","icon":"icon-FTI","links":{"wallet":"fanstime-wallet","staking":"","exchange":""}},"fxf":{"name":"Finxflo","icon":"icon-FXF","links":{"wallet":"finxflo-wallet","staking":"","exchange":""}},"gem":{"name":"Gems ","icon":"icon-GEM","links":{"wallet":"gems -wallet","staking":"","exchange":""}},"gpyx":{"name":"GoldenPyrex","icon":"icon-GPYX","links":{"wallet":"goldenpyrex-wallet","staking":"","exchange":""}},"gs":{"name":"Genesis Shards","icon":"icon-GS","links":{"wallet":"genesis shards-wallet","staking":"","exchange":""}},"gxt":{"name":"Gem Exchange and Trading","icon":"icon-GXT","links":{"wallet":"gem exchange and trading-wallet","staking":"","exchange":""}},"havy":{"name":"Havy","icon":"icon-HAVY","links":{"wallet":"havy-wallet","staking":"","exchange":""}},"ibp":{"name":"Innovation Blockchain Payment","icon":"icon-IBP","links":{"wallet":"innovation blockchain payment-wallet","staking":"","exchange":""}},"iht":{"name":"IHT Real Estate Protocol","icon":"icon-IHT","links":{"wallet":"iht real estate protocol-wallet","staking":"","exchange":""}},"inex":{"name":"Inex Project","icon":"icon-INEX","links":{"wallet":"inex project-wallet","staking":"","exchange":""}},"jar":{"name":"Jarvis+","icon":"icon-JAR","links":{"wallet":"jarvis-wallet","staking":"","exchange":""}},"keyfi":{"name":"KeyFi","icon":"icon-KEYFI","links":{"wallet":"keyfi-wallet","staking":"","exchange":""}},"ldfi":{"name":"Lendefi","icon":"icon-LDFI","links":{"wallet":"lendefi-wallet","staking":"","exchange":""}},"lead":{"name":"Lead Wallet","icon":"icon-LEAD","links":{"wallet":"lead wallet-wallet","staking":"","exchange":""}},"lepa":{"name":"Lepasa","icon":"icon-LEPA","links":{"wallet":"lepasa-wallet","staking":"","exchange":""}},"mat":{"name":"My Master War","icon":"icon-MAT","links":{"wallet":"my master war-wallet","staking":"","exchange":""}},"micro":{"name":"Micromines","icon":"icon-MICRO","links":{"wallet":"micromines-wallet","staking":"","exchange":""}},"milk2":{"name":"Spaceswap MILK2","icon":"icon-MILK2","links":{"wallet":"spaceswap milk2-wallet","staking":"","exchange":""}},"mmo":{"name":"MMOCoin","icon":"icon-MMO","links":{"wallet":"mmocoin-wallet","staking":"","exchange":""}},"modx":{"name":"MODEL-X-coin","icon":"icon-MODX","links":{"wallet":"model-x-coin-wallet","staking":"","exchange":""}},"mpay":{"name":"MenaPay","icon":"icon-MPAY","links":{"wallet":"menapay-wallet","staking":"","exchange":""}},"myra":{"name":"Mytheria","icon":"icon-MYRA","links":{"wallet":"mytheria-wallet","staking":"","exchange":""}},"name":{"name":"PolkaDomain","icon":"icon-NAME","links":{"wallet":"polkadomain-wallet","staking":"","exchange":""}},"nbc":{"name":"Niobium Coin","icon":"icon-NBC","links":{"wallet":"niobium coin-wallet","staking":"","exchange":""}},"nino":{"name":"Ninneko","icon":"icon-NINO","links":{"wallet":"ninneko-wallet","staking":"","exchange":""}},"nrp":{"name":"Neural Protocol","icon":"icon-NRP","links":{"wallet":"neural protocol-wallet","staking":"","exchange":""}},"nsure":{"name":"Nsure.Network","icon":"icon-NSURE","links":{"wallet":"nsure.network-wallet","staking":"","exchange":""}},"ntk":{"name":"Neurotoken","icon":"icon-NTK","links":{"wallet":"neurotoken-wallet","staking":"","exchange":""}},"nux":{"name":"Peanut","icon":"icon-NUX","links":{"wallet":"peanut-wallet","staking":"","exchange":""}},"olxa":{"name":"OLXA","icon":"icon-OLXA","links":{"wallet":"olxa-wallet","staking":"","exchange":""}},"orion":{"name":"Orion Money","icon":"icon-ORION","links":{"wallet":"orion money-wallet","staking":"","exchange":""}},"oswap":{"name":"OpenSwap","icon":"icon-OSWAP","links":{"wallet":"openswap-wallet","staking":"","exchange":""}},"par":{"name":"Parachute","icon":"icon-PAR","links":{"wallet":"parachute-wallet","staking":"","exchange":""}},"payb":{"name":"Paybswap","icon":"icon-PAYB","links":{"wallet":"paybswap-wallet","staking":"","exchange":""}},"pcnt":{"name":"Playcent","icon":"icon-PCNT","links":{"wallet":"playcent-wallet","staking":"","exchange":""}},"pipt":{"name":"Power Index Pool Token","icon":"icon-PIPT","links":{"wallet":"power index pool token-wallet","staking":"","exchange":""}},"pvt":{"name":"Pivot Token","icon":"icon-PVT","links":{"wallet":"pivot token-wallet","staking":"","exchange":""}},"pxg":{"name":"PlayGame","icon":"icon-PXG","links":{"wallet":"playgame-wallet","staking":"","exchange":""}},"pxl":{"name":"PIXEL","icon":"icon-PXL","links":{"wallet":"pixel-wallet","staking":"","exchange":""}},"quin":{"name":"QUINADS","icon":"icon-QUIN","links":{"wallet":"quinads-wallet","staking":"","exchange":""}},"rage":{"name":"Rage Fan","icon":"icon-RAGE","links":{"wallet":"rage fan-wallet","staking":"","exchange":""}},"rio":{"name":"Realio Network","icon":"icon-RIO","links":{"wallet":"realio network-wallet","staking":"","exchange":""}},"rocki":{"name":"ROCKI","icon":"icon-ROCKI","links":{"wallet":"rocki-wallet","staking":"","exchange":""}},"roya":{"name":"Royale Finance","icon":"icon-ROYA","links":{"wallet":"royale finance-wallet","staking":"","exchange":""}},"s4f":{"name":"S4FE","icon":"icon-S4F","links":{"wallet":"s4fe-wallet","staking":"","exchange":""}},"set":{"name":"Save Environment Token","icon":"icon-SET","links":{"wallet":"save environment token-wallet","staking":"","exchange":""}},"shard":{"name":"Shard","icon":"icon-SHARD","links":{"wallet":"shard-wallet","staking":"","exchange":""}},"share":{"name":"Seigniorage Shares","icon":"icon-SHARE","links":{"wallet":"seigniorage shares-wallet","staking":"","exchange":""}},"spd":{"name":"SPINDLE","icon":"icon-SPD","links":{"wallet":"spindle-wallet","staking":"","exchange":""}},"sstx":{"name":"Silver Stonks","icon":"icon-SSTX","links":{"wallet":"silver stonks-wallet","staking":"","exchange":""}},"star":{"name":"Starbase","icon":"icon-STAR","links":{"wallet":"starbase-wallet","staking":"","exchange":""}},"stbu":{"name":"Stobox Token","icon":"icon-STBU","links":{"wallet":"stobox token-wallet","staking":"","exchange":""}},"tcore":{"name":"Tornado","icon":"icon-TCORE","links":{"wallet":"tornado-wallet","staking":"","exchange":""}},"tidal":{"name":"Tidal Finance","icon":"icon-TIDAL","links":{"wallet":"tidal finance-wallet","staking":"","exchange":""}},"tik":{"name":"ChronoBase","icon":"icon-TIK","links":{"wallet":"chronobase-wallet","staking":"","exchange":""}},"tip":{"name":"SugarBounce","icon":"icon-TIP","links":{"wallet":"sugarbounce-wallet","staking":"","exchange":""}},"totm":{"name":"TotemFi","icon":"icon-TOTM","links":{"wallet":"totemfi-wallet","staking":"","exchange":""}},"tsx":{"name":"TradeStars","icon":"icon-TSX","links":{"wallet":"tradestars-wallet","staking":"","exchange":""}},"ubex":{"name":"Ubex","icon":"icon-UBEX","links":{"wallet":"ubex-wallet","staking":"","exchange":""}},"ugas":{"name":"UGAS","icon":"icon-UGAS","links":{"wallet":"ugas-wallet","staking":"","exchange":""}},"vlxpad":{"name":"VelasPad","icon":"icon-VLXPAD","links":{"wallet":"velaspad-wallet","staking":"","exchange":""}},"wfx":{"name":"Webflix Token","icon":"icon-WFX","links":{"wallet":"webflix token-wallet","staking":"","exchange":""}},"wg0":{"name":"Wrapped Gen-0 CryptoKitties","icon":"icon-WG0","links":{"wallet":"wrapped gen-0 cryptokitties-wallet","staking":"","exchange":""}},"xct":{"name":"Citadel.one","icon":"icon-XCT","links":{"wallet":"citadel.one-wallet","staking":"","exchange":""}},"xiv":{"name":"Planet Inverse","icon":"icon-XIV","links":{"wallet":"planet inverse-wallet","staking":"","exchange":""}},"xlab":{"name":"XcelToken Plus","icon":"icon-XLAB","links":{"wallet":"xceltoken plus-wallet","staking":"","exchange":""}},"yee":{"name":"YEE","icon":"icon-YEE","links":{"wallet":"yee-wallet","staking":"","exchange":""}},"yf-dai":{"name":"YFDAI.FINANCE","icon":"icon-YF-DAI","links":{"wallet":"yfdai.finance-wallet","staking":"","exchange":""}},"znt":{"name":"Zenswap Network Token","icon":"icon-ZNT","links":{"wallet":"zenswap network token-wallet","staking":"","exchange":""}},"zora":{"name":"Zoracles","icon":"icon-ZORA","links":{"wallet":"zoracles-wallet","staking":"","exchange":""}},"zsc":{"name":"Zeusshield","icon":"icon-ZSC","links":{"wallet":"zeusshield-wallet","staking":"","exchange":""}}}'
        ),
        Ie = JSON.parse(
          '{"variable":{"/en":"","/es":"","/ko":"","/ru":"","/nl":"","/zh-hans":"","/de":"","/ja":"","/tr":"","/pt-br":"","/fr":""},"words":{"download":{"/en":"Download","/it":"SCARICA","/es":"Descargar","/ko":"다운로드","/ru":"Скачать","/nl":"Downloaden","/zh-hans":"下载","/de":"Herunterladen","/ja":"ダウンロード","/tr":"YÜKLE","/pt-br":"Baixar","/fr":"Télécharger"},"wallet":{"/en":"wallet","/it":"wallet","/es":"billetera","/ko":"지갑","/ru":"кошелек","/nl":"portemonnee","/zh-hans":"钱包","/de":"herunterladen","/ja":"財布","/tr":"WALLET’I","/pt-br":"carteira","/fr":"le portefeuille"},"all":{"/en":"all","/it":"tutto","/es":"todos","/ko":"모두","/ru":"всё","/nl":"allemaal","/zh-hans":"全部","/de":"alle","/ja":"全て","/tr":"tüm","/pt-br":"tudo","/fr":"toutes"},"assets":{"/en":"assets","/it":"CRIPTO-ATTIVITÀ","/es":"activos","/ko":"자산","/ru":"активы","/nl":"activa","/zh-hans":"资产","/de":"Vermögenswerte","/ja":"資産","/tr":"varlıklar","/pt-br":"bens","/fr":"actifs"},"asset":{"/en":"Asset","/it":"L\'attivo","/es":"Activo","/ko":"유산","/ru":"Актив","/nl":"Bezit","/zh-hans":"资产","/de":"Anlage","/ja":"資産","/tr":"Varlık","/pt-br":"Ativos","/fr":"Actif"},"allAssets":{"/en":"All assets","/it":"Tutte le cripto-attività","/es":"All assets","/ko":"All assets","/ru":"All assets","/nl":"All assets","/zh-hans":"All assets","/de":"All assets","/ja":"All assets","/tr":"Tüm Varlıklar","/pt-br":"All assets","/fr":"All assets"},"allCoins":{"/en":"All Coins","/es":"All Coins","/ko":"All Coins","/ru":"All Coins","/nl":"All Coins","/zh-hans":"All Coins","/de":"All Coins","/ja":"All Coins","/tr":"All Coins","/pt-br":"All Coins","/fr":"All Coins"},"coins":{"/en":"coins","/es":"monedas","/ko":"동전","/ru":"монеты","/nl":"munten","/zh-hans":"硬币","/de":"Münzen","/ja":"コイン","/tr":"paralar","/pt-br":"moedas","/fr":"monnaie"},"getWallet":{"/en":"get wallet","/it":"Ottieni Wallet","/es":"conseguir billetera","/ko":"지갑을 얻다","/ru":"Скачать кошелек","/nl":"krijg portemonnee","/zh-hans":"拿钱包","/de":"brieftasche holen","/ja":"財布を手に入れる","/tr":"cüzdan al","/pt-br":"pegar carteira","/fr":"obtenir un portefeuille"},"joinNow":{"/en":"Join now","/pt-br":"Inscreva-se agora","/ru":"Присоединяйся сейчас"},"depositCrypto":{"/en":"Deposit crypto","/tr":"kripto para yatırın","/it":"Deposita Criptovalute","/pt-br":"Depositar criptomoeda","/de":"Krypto hinterlegen","/nl":"Crypto deponeren","/es":"Depositar criptomonedas","/ru":"Вкладывайте крипто","/fr":"Dépôt de crypto"},"claimRewards":{"/en":"Claim rewards","/it":"Riscuoti Ricompense","/pt-br":"Reivindicar recompensas","/es":"Reclamar recompensas","/de":"Belohnungen einfordern","/nl":"Beloningen claimen","/fr":"Réclamer des récompenses","/ru":"Получайте награды"},"getRewards":{"/en":"Get Rewards","/pt-br":"Obter recompensas","/de":"Belohnungen erhalten","/fr":"Obtenir des récompenses","/nl":"Ontvang beloningen","/es":"Obtén recompensas","/ru":"Получайте награды"},"loadMore":{"/en":"Load more","/pt-br":"Carregue mais","/ko":"더 로드","/es":"Carga más","/ru":"Загрузить ещё","/nl":"Meer laden","/zh-hans":"装载更多","/de":"Mehr laden","/ja":"もっと読み込む","/tr":"Daha fazla yükle","/fr":"Charger plus"},"getPrice":{"/en":"get price","/es":"obtener precio","/ko":"get price","/ru":"узнать цену","/nl":"get price","/zh-hans":"get price","/de":"get price","/ja":"get price","/tr":"get price","/pt-br":"get price","/fr":"get price"},"watch":{"/en":"Watch","/es":"Ver","/ko":"보다","/ru":"Смотреть","/nl":"Bekijk","/zh-hans":"手表","/de":"Ansehen","/ja":"時計","/tr":"Izle","/pt-br":"Assistir","/fr":"Regarder"},"watchVideo":{"/en":"Watch video","/es":"Ver video","/ko":"비디오를보다","/ru":"Смотреть видео","/nl":"Bekijk de video","/zh-hans":"看视频","/de":"Video ansehen","/ja":"ビデオを見る","/tr":"Video izle","/pt-br":"Assistir vídeo","/fr":"Regarder la vidéo"},"watchVideoGuides":{"/en":"Watch video guides","/es":"Ver video","/ko":"비디오를보다","/ru":"Смотреть видео","/nl":"Bekijk de video","/zh-hans":"看视频","/de":"Video ansehen","/ja":"ビデオを見る","/tr":"Video izle","/pt-br":"Assistir vídeo","/fr":"Regarder la vidéo"},"watchVideoReview":{"/en":"Watch Video Review","/es":"Ver reseña de video","/ko":"비디오 리뷰보기","/ru":"Посмотреть видеообзор","/nl":"Bekijk videobeoordeling","/zh-hans":"观看视频回顾","/de":"Video-Rezension ansehen","/ja":"ビデオレビューを見る","/tr":"Video İncelemesini İzle","/pt-br":"Assistir a análise do vídeo","/fr":"Regarder la critique vidéo"},"excellent":{"/en":"Excellent","/it":"Eccellente","/es":"Excelente","/ko":"우수한","/ru":"Превосходно","/nl":"Uitstekend","/zh-hans":"优秀的","/de":"Ausgezeichnet","/ja":"優秀な","/tr":"Harika","/pt-br":"Excelente","/fr":"Excellent"},"exchange":{"/en":"Exchange","/es":"Exchange","/ko":"Exchange","/ru":"Exchange","/nl":"Exchange","/zh-hans":"Exchange","/de":"Exchange","/ja":"Exchange","/tr":"Exchange","/pt-br":"Exchange","/fr":"Exchange"},"reviews":{"/en":"reviews on","/it":"recensioni su","/es":"reseñas sobre","/ko":"리뷰","/ru":"отзывов на","/nl":"recensies op","/zh-hans":"的评论","/de":"bewertungen auf","/ja":"のレビュー","/tr":"Hakkında inceleme","/pt-br":"comentários em","/fr":"avis sur"},"price":{"/en":"Price","/es":"Precio","/ko":"가격","/ru":"Цена","/nl":"Prijs","/zh-hans":"价钱","/de":"Preis","/ja":"価格","/tr":"Fiyat","/pt-br":"Preço","/fr":"Prix"},"learnMore":{"/en":"Learn More","/it":"PER SAPERNE DI PIÙ","/es":"Aprende más","/ko":"더 알아보기","/ru":"Узнать больше","/nl":"Leer meer","/zh-hans":"学到更多","/de":"Mehr erfahren","/ja":"もっと詳しく知る","/tr":"DAHA FAZLA BİLGİ EDİNİN","/pt-br":"Saber mais","/fr":"En savoir plus"},"showMore":{"/en":"Show More","/es":"Mostrar más","/ko":"자세히보기","/ru":"Показать больше","/nl":"Laat meer zien","/zh-hans":"展示更多","/de":"Mehr anzeigen","/ja":"もっと見せる","/tr":"Daha fazla göster","/pt-br":"Mostre mais","/fr":"Montre plus"},"send":{"/en":"Send","/es":"Enviar","/ko":"보내다","/ru":"Отправить","/nl":"Versturen","/zh-hans":"发送","/de":"Senden","/ja":"送信","/tr":"Göndermek","/pt-br":"Enviar","/fr":"Envoyer"},"receive":{"/en":"Receive","/es":"Recibir","/ko":"받다","/ru":"Получать","/nl":"Te ontvangen","/zh-hans":"收到","/de":"Erhalten","/ja":"受け取る","/tr":"Almak","/pt-br":"Receber","/fr":"Recevoir"},"viewMore":{"/en":"View more","/it":"VEDI DETTAGLI","/es":"Ver más","/ko":"더보기","/ru":"Посмотреть ещё","/nl":"Bekijk meer","/zh-hans":"查看更多","/de":"Mehr sehen","/ja":"もっと見る","/tr":"Daha fazla göster","/pt-br":"Veja mais","/fr":"Voir plus"},"readMore":{"/en":"Read more","/it":"Leggi di più","/es":"Lee mas","/ko":"더 읽어보기","/ru":"Читать больше","/nl":"Lees verder","/zh-hans":"阅读更多","/de":"Mehr lesen","/ja":"続きを読む","/tr":"Devamını oku","/pt-br":"Consulte Mais informação","/fr":"Lire la suite"},"moreAssets":{"/en":"More Assets","/es":"Más activos","/ko":"더 많은 정보","/ru":"Больше активов","/nl":"Meer activa","/zh-hans":"更多资产","/de":"Weitere Vermögenswerte","/ja":"その他の資産","/tr":"Daha Varlıklar","/pt-br":"Mais ativos","/fr":"Plus d\'actifs"},"moreInfo":{"/en":"more info","/es":"más información","/ko":"더 많은 자산","/ru":"Подробнее","/nl":"meer informatie","/zh-hans":"更多信息","/de":"Mehr Info","/ja":"より詳しい情報","/tr":"Daha fazla bilgi","/pt-br":"mais informações","/fr":"En savoir plus"},"getCashback":{"/en":"Exchange now","/it":"OTTIENI IL CASHBACK","/es":"Obtener reembolso","/ko":"캐쉬백 받기","/ru":"Получить кэшбэк","/nl":"Krijg Cashback","/zh-hans":"获得现金返还","/de":"Cashback erhalten","/ja":"キャッシュバックを取得","/tr":"Para iadesi alın","/pt-br":"Obtenha dinheiro de volta","/fr":"Obtenez une remise en argent"},"buyCrypto":{"/en":"Buy Crypto","/it":"Compra Criptovaluta","/es":"Comprar criptomonedas","/ko":"Crypto 구매","/ru":"Купить криптовалюту","/nl":"Crypto kopen","/zh-hans":"购买加密货币","/de":"Krypto kaufen","/ja":"暗号を購入する","/tr":"Kripto Satın Al","/pt-br":"Compre Crypto","/fr":"Acheter des cryptos"},"buyNow":{"/en":"Buy now","/it":"ACQUISTA ORA","/es":"Comprar ahora","/ko":"","/ru":"Купить сейчас","/nl":"Koop nu","/zh-hans":"","/de":"Jetzt kaufen","/ja":"","/tr":"ŞİMDİ SATIN AL","/pt-br":"","/fr":"Acheter maintenant"},"exchangeNow":{"/en":"Exchange now","/es":"Exchange now","/ko":"Exchange now","/ru":"Exchange now","/nl":"Exchange now","/zh-hans":"Exchange now","/de":"Exchange now","/ja":"Exchange now","/tr":"Exchange now","/pt-br":"Exchange now","/fr":"Exchange now"},"earnCrypto":{"/en":"Stake Now","/it":"Metti in stake adesso","/es":"Gana Crypto","/ko":"암호 화폐 획득","/ru":"Заработать крипто","/nl":"Verdien cryptografie","/zh-hans":"赚取加密货币","/de":"Krypto verdienen","/ja":"暗号を獲得する","/tr":"Şimdi stake yap","/pt-br":"Ganhe criptografia","/fr":"Gagnez des cryptos"},"news":{"/en":"News","/it":"Notizie","/es":"Noticias","/ko":"뉴스","/ru":"Новости","/nl":"Nieuws","/zh-hans":"新闻","/de":"News","/ja":"ニュース","/tr":"Haberler","/pt-br":"Notícia","/fr":"Actualités"},"name":{"/en":"Name"},"search":{"/en":"Search","/es":"Buscar","/ko":"검색","/ru":"Поиск","/nl":"Zoeken","/zh-hans":"搜索","/de":"Suche","/ja":"探す","/tr":"Arama","/pt-br":"Pesquisa","/fr":"Chercher"},"contactUs":{"/en":"Contact Us","/it":"Contattaci","/es":"Contacta con nosotros","/ko":"문의하기","/ru":"Свяжитесь с нами","/nl":"Contact ons","/zh-hans":"联系我们","/de":"Kontaktieren Sie uns","/ja":"お問い合わせ","/tr":"Bize Ulaşın","/pt-br":"Contate-Nos","/fr":"Nous contacter"},"contactSupport":{"/en":"Contact support","/it":"Contatta l\'assistenza","/es":"Contact support","/ko":"Contact support","/ru":"Contact support","/nl":"Contact support","/zh-hans":"Contact support","/de":"Contact support","/ja":"Contact support","/tr":"Desteğe bağlan","/pt-br":"Contact support","/fr":"Contact support"},"haveQuestion":{"/en":"Have a question?","/es":"¿Tengo una pregunta?","/ko":"질문이 있습니다?","/ru":"Есть вопрос?","/nl":"Heb je een vraag?","/zh-hans":"有一个问题？","/de":"Eine Frage haben?","/ja":"質問があります？","/tr":"Bir sorunuz mu var?","/pt-br":"Ter uma questão?","/fr":"Avoir une question?"},"cryptoGuides":{"/en":"crypto guides","/it":"GUIDE ALLE CRIPTOVALUTE","/es":"guías de cifrado","/ko":"암호화 가이드","/ru":"криптогиды","/nl":"crypto-gidsen","/zh-hans":"加密指南","/de":"Krypto-Guides","/ja":"暗号ガイド","/tr":"KRİPTO KILAVUZLARI","/pt-br":"guias criptográficos","/fr":"guide des crypto-avoirs"},"howToUse":{"/en":"how to use","/es":"cómo utilizar","/ko":"사용하는 방법","/ru":"как использовать","/nl":"hoe te gebruiken","/zh-hans":"如何使用","/de":"Wie Sie Atomic nutzen","/ja":"使い方","/tr":"nasıl kullanılır","/pt-br":"como usar","/fr":"comment utiliser"},"stakeNow":{"/en":"Stake now","/it":"Metti in stake adesso","/es":"Apostar ahora","/ko":"지금 스테이크","/ru":"Застейкать","/nl":"Zet nu in","/zh-hans":"现在下注","/de":"Jetzt einsteigen","/ja":"今すぐ賭けます","/tr":"Şimdi stake yap","/pt-br":"Aposta agora","/fr":"Démarrer l\'empilage"},"stakeCrypto":{"/en":"Stake crypto","/tr":"Staky Kripto ","/it":"Metti in stake Criptovaluta","/pt-br":"Stake crypto","/de":"Krypto einsetzen","/nl":"Crypto inzetten","/ru":"Стейкать крипто","/fr":"Jeu de crypto"},"startStaking":{"/en":"Start staking","/es":"Empiece a apostar","/ko":"스테이 킹 시작","/ru":"Начать стейкать","/nl":"Begin met uitzetten","/zh-hans":"开始放样","/de":"Start staking","/ja":"ステーキングを開始します","/tr":"Stake etmeye başlayın","/pt-br":"Comece a piquetar","/fr":"Commencer le jalonnement"},"startMembership":{"/en":"Start Membership","/es":"Start Membership","/ko":"Start Membership","/ru":"Присоединиться","/nl":"Start Membership","/zh-hans":"Start Membership","/de":"Start Membership","/ja":"Start Membership","/tr":"Start Membership","/pt-br":"Start Membership","/fr":"Start Membership"},"stake":{"/en":"Stake","/es":"Estaca","/ko":"말뚝","/ru":"Стейкать","/nl":"Inzet","/zh-hans":"赌注","/de":"Anteil","/ja":"ステーク","/tr":"Bahis","/pt-br":"Estaca","/fr":"Pieu"},"earn":{"/en":"Earn","/es":"Ganar","/ko":"벌다","/ru":"Зарабатывать","/nl":"Verdienen","/zh-hans":"赚","/de":"Verdiene","/ja":"得る","/tr":"Kazanmak","/pt-br":"Ganhar","/fr":"Gagner"},"amount":{"/en":"Amount","/pt-br":"Valor","/ru":"Количество","/fr":"La quantité"},"comingSoon":{"/en":"Coming soon","/es":"Próximamente","/ko":"곧 출시","/ru":"Скоро","/nl":"Komt binnenkort","/zh-hans":"快来了","/de":"Demnächst verfügbar","/ja":"近日公開","/tr":"Çok yakında","/pt-br":"Em breve","/fr":"Prochainement"},"new":{"/en":"new","/es":"nuevo","/ko":"새로운","/ru":"новое","/nl":"nieuw","/zh-hans":"新","/de":"neu","/ja":"新着","/tr":"yeni","/pt-br":"novo","/fr":"nouveau"},"yearlyYield":{"/en":"Yearly Yield","/it":"Rendimento annuale","/es":"Rendimiento anual","/ko":"연간 수익","/ru":"Годовая доходность","/nl":"Jaarlijkse opbrengst","/zh-hans":"年收益","/de":"Jahresertrag","/ja":"年間収量","/tr":"Yıllık Getiri","/pt-br":"Rendimento anual","/fr":"Rendement annuel"},"monthlyYield":{"/en":"Monthly Yield","/es":"Rendimiento mensual","/ko":"월간 수익","/ru":"Ежемесячная доходность","/nl":"Maandelijkse opbrengst","/zh-hans":"月收益","/de":"Monatliche Rendite","/ja":"月間収量","/tr":"Aylık Getiri","/pt-br":"Rendimento Mensal","/fr":"Rendement mensuel"},"dailyStakingRate":{"/en":"Daily Staking Rate","/es":"Tasa de participación diaria","/ko":"일일 스테이 킹 비율","/ru":"Ежедневный стейкинг","/nl":"Dagelijks uitzetpercentage","/zh-hans":"每日赌注率","/de":"Tägliche Absteckrate","/ja":"毎日のステーキング率","/tr":"Günlük Bahis Oranı","/pt-br":"Taxa de aposta diária","/fr":"Taux de jalonnement quotidien"},"dailyProfit":{"/en":"Daily profit","/tr":"Günlük Kazanç","/it":"profitto giornaliero","/es":"Beneficio diario","/pt-br":"Lucro diário","/ru":"Ежедневная прибыль","/fr":"Bénéfice quotidien"},"monthlyProfit":{"/en":"Monthly profit","/tr":"Aylık Kazanç","/it":"Profitto mensile","/es":"Beneficio mensual","/pt-br":"Lucro mensal","/ru":"Ежемесячная прибыль","/fr":"Bénéfice mensuel"},"yearlyProfit":{"/en":"Yearly profit","/tr":"Yıllık Kazanç","/it":"Profitto annuale","/es":"Beneficio anual","/pt-br":"Lucro anual","/ru":"Годовая прибыль","/fr":"Bénéfice annuel"},"marketCap":{"/en":"Market cap","/it":"Capitalizzazione di mercato","/es":"Tapa del mercado","/ko":"시가 총액","/ru":"Рыночная капитализация","/nl":"Marktwaarde","/zh-hans":"市值","/de":"Marktkapitalisierung","/ja":"時価総額","/tr":"Piyasa Değeri","/pt-br":"Valor de Mercado","/fr":"Capitalisation boursière"},"volume":{"/en":"Volume","/es":"Volumen","/ko":"음량","/ru":"Объем","/nl":"Volume","/zh-hans":"卷","/de":"Volumen","/ja":"ボリューム","/tr":"Ses","/pt-br":"Volume","/fr":"Le volume"},"stakingCalculator":{"/en":"Staking calculator","/es":"Calculadora de replanteo","/ko":"스테이 킹 계산기","/ru":"Калькулятор ставок","/nl":"Inzet calculator","/zh-hans":"投注计算器","/de":"Wettrechner","/ja":"ベット計算機","/tr":"Bahis hesaplayıcı","/pt-br":"Calculadora de aposta","/fr":"Calculateur de paris"},"yourHoldings":{"/en":"Your Holdings","/es":"Tus tenencias","/ko":"당신의 홀딩스","/ru":"Ваши активы","/nl":"Uw bezit","/zh-hans":"您的控股","/de":"Ihre Bestände","/ja":"あなたの持ち株","/tr":"Varlıklarınız","/pt-br":"Suas participações","/fr":"Vos avoirs"},"stakingPeriod":{"/en":"Staking period","/es":"Periodo de replanteo","/ko":"스테이 킹 기간","/ru":"Период размещения ставок","/nl":"Inzetperiode","/zh-hans":"投注期","/de":"Wettzeitraum","/ja":"賭け期間","/tr":"Bahis dönemi","/pt-br":"Período de apostas","/fr":"Période de pari"},"loadingAssets":{"/en":"Loading Assets","/pt-br":"Carregando recursos"},"staking":{"/en":"Staking","/pt-br":"Apostando"},"day":{"/en":"day","/es":"día","/ko":"일","/ru":"день","/nl":"dag","/zh-hans":"天","/de":"Tag","/ja":"日","/tr":"gün","/pt-br":"dia","/fr":"journée"},"year":{"/en":"year","/es":"año","/ko":"년","/ru":"год","/nl":"jaar","/zh-hans":"年","/de":"Jahr","/ja":"年","/tr":"yıl","/pt-br":"ano","/fr":"an"},"yourEarning":{"/en":"Your Earning","/es":"Tu ganancia","/ko":"귀하의 수입","/ru":"Ваш заработок","/nl":"Uw verdiensten","/zh-hans":"您的收入","/de":"Dein Verdienst","/ja":"あなたの収入","/tr":"Kazancınız","/pt-br":"Seus ganhos","/fr":"Vos gains"},"yearlyROI":{"/en":"Yearly ROI","/es":"ROI anual","/ko":"연간 ROI","/ru":"Годовая рен. инв-ций","/nl":"Jaarlijkse ROI","/zh-hans":"每年ROI","/de":"Jährlicher ROI","/ja":"年間ROI","/tr":"Yıllık ROI","/pt-br":"ROI anual","/fr":"ROI annuel"},"priceChart":{"/en":"Price Chart","/es":"Tabla de precios","/ko":"가격 차트","/ru":"График цен","/nl":"Prijskaart","/zh-hans":"价格表","/de":"Preisdiagramm","/ja":"価格チャート","/tr":"Fiyat Tablosu","/pt-br":"Tabela de Preços","/fr":"Tableau des prix"},"apyRewards":{"/en":"Apy Rewards","/fr":"APY","/de":"APY","/it":"APY","/tr":"APY","/pt-br":"Recompensas Apy"},"buy":{"/en":"buy","/it":"compra","/es":"comprar","/ko":"구입","/ru":"купить","/nl":"kopen","/zh-hans":"购买","/de":"kaufen","/ja":"購入","/tr":"Satın al","/pt-br":"comprar","/fr":"acheter"},"info":{"/en":"Info","/pt-br":"Informações"},"subscribe":{"input":{"/en":"Your email","/it":"La tua email","/es":"Tu correo electrónico","/ko":"귀하의 이메일","/ru":"Ваш адрес электронной почты","/nl":"Jouw email","/zh-hans":"你的邮件","/de":"Deine E-Mail","/ja":"あなたのメール","/tr":"E mailiniz","/pt-br":"Seu email","/fr":"Votre email"},"button":{"/en":"Subscribe","/it":"ISCRIVITI","/es":"Suscribir","/ko":"구독","/ru":"Подписывайся","/nl":"Abonneren","/zh-hans":"订阅","/de":"Abonnieren","/ja":"申し込む","/tr":"ABONE OL","/pt-br":"Se inscrever","/fr":"S\'abonner"}},"greatRating":{"/en":"Great rating","/it":"OTTIMA VALUTAZIONE","/es":"Gran calificación","/ko":"좋은 평가","/ru":"Отличный рейтинг","/nl":"Geweldige waardering","/zh-hans":"好评","/de":"Tolle Bewertung","/ja":"素晴らしい評価","/tr":"BÜYÜK DEĞERLENDİRME","/pt-br":"Ótima avaliação","/fr":"Excellente note"},"success":{"/en":"Success","/it":"Effettuato con successo","/es":"Éxito","/ko":"성공","/ru":"Успех","/nl":"Succes","/zh-hans":"成功","/de":"Erfolg","/ja":"成功","/tr":"Başarılı","/pt-br":"Sucesso","/fr":"Subscribe successfully"},"knowledgeBase":{"/en":"knowledge base","/it":"base di conoscenza","/es":"base de conocimientos","/ko":"지식 기반","/ru":"база знаний","/nl":"kennis basis","/zh-hans":"知识库","/de":"Wissensbasis","/ja":"知識ベース","/tr":"Bilgi Tabanı","/pt-br":"base de conhecimento","/fr":"base de connaissances"},"viewFullList":{"/en":"view full list","/it":"VISUALIZZA L\'ELENCO COMPLETO","/es":"ver lista completa","/ko":"view full list","/ru":"Просмотреть весь список","/nl":"bekijk de volledige lijst","/zh-hans":"view full list","/de":"Vollständige Liste anzeigen","/ja":"view full list","/tr":"TAM LİSTE GÖRÜNTÜLE","/pt-br":"ver lista completa","/fr":"Voir la liste complète"},"goToChannel":{"/en":"Check out our YouTube","/it":"Dai un\'occhiata a YouTube","/es":"Check out our YouTube","/ko":"YouTube 채널을 확인하세요.","/ru":"Посетите наш YouTube","/nl":"Check ons ​​YouTube","/zh-hans":"查看我们的 YouTube 频道","/de":"Besuchen Sie unseren YouTube","/ja":"Check out our YouTube","/tr":"YouTube\'umuza göz atın","/pt-br":"Confira nosso YouTube","/fr":"Découvrez notre YouTube"},"firstRewardsIn":{"/en":"First rewards in","/es":"Primeras recompensas en","/ko":"첫 번째 보상","/ru":"Первые награды через","/nl":"Eerste beloningen binnen","/zh-hans":"首次获得奖励","/de":"Erste Belohnungen rein","/ja":"の最初の報酬","/tr":"İLK ÖDÜLLER","/pt-br":"Primeiras recompensas em","/fr":"Premières récompenses en"},"useCases":{"/en":"Use Cases","/pt-br":"Casos de uso","/ru":"Случаи применения"},"earnPassiveIncome":{"/en":"Earn Passive Income","/pt-br":"Ganhe Renda Passiva","/ru":"Получайте пассивный доход"},"totalSupply":{"/en":"Total Supply","/pt-br":"Fornecimento total","/ru":"Общий запас"},"circulatingSupply":{"/en":"Circulating supply","/es":"Circulating supply","/ko":"Circulating supply","/ru":"Circulating supply","/nl":"Circulating supply","/zh-hans":"Circulating supply","/de":"Circulating supply","/ja":"Circulating supply","/tr":"Circulating supply","/pt-br":"Circulating supply","/fr":"Circulating supply"},"maxSupply":{"/en":"Max supply","/es":"Max supply","/ko":"Max supply","/ru":"Max supply","/nl":"Max supply","/zh-hans":"Max supply","/de":"Max supply","/ja":"Max supply","/tr":"Max supply","/pt-br":"Max supply","/fr":"Max supply"},"checkMarketData":{"/en":"Check Market Data","/pt-br":"Verificar dados de mercado","/ru":"Проверить данные рынка"},"youSend":{"/en":"You send","/es":"You send","/ko":"You send","/ru":"You send","/nl":"You send","/zh-hans":"You send","/de":"You send","/ja":"You send","/tr":"You send","/pt-br":"You send","/fr":"You send"},"youGet":{"/en":"You get","/es":"You get","/ko":"You get","/ru":"You get","/nl":"You get","/zh-hans":"You get","/de":"You get","/ja":"You get","/tr":"You get","/pt-br":"You get","/fr":"You get"},"approximately":{"/en":"approximately","/es":"approximately","/ko":"approximately","/ru":"approximately","/nl":"approximately","/zh-hans":"approximately","/de":"approximately","/ja":"approximately","/tr":"approximately","/pt-br":"approximately","/fr":"approximately"},"24HoursChange":{"/en":"24 hours change","/es":"24 hours change","/ko":"24 hours change","/ru":"24 hours change","/nl":"24 hours change","/zh-hans":"24 hours change","/de":"24 hours change","/ja":"24 hours change","/tr":"24 hours change","/pt-br":"24 hours change","/fr":"24 hours change"},"about":{"/en":"about","/es":"about","/ko":"about","/ru":"about","/nl":"about","/zh-hans":"about","/de":"about","/ja":"about","/tr":"about","/pt-br":"about","/fr":"about"},"checkReviews":{"/en":"Check reviews","/es":"Check reviews","/ko":"Check reviews","/ru":"Check reviews","/nl":"Check reviews","/zh-hans":"Check reviews","/de":"Check reviews","/ja":"Check reviews","/tr":"Check reviews","/pt-br":"Check reviews","/fr":"Check reviews"},"from":{"/en":"from","/es":"from","/ko":"from","/ru":"from","/nl":"from","/zh-hans":"from","/de":"from","/ja":"from","/tr":"from","/pt-br":"from","/fr":"from"},"to":{"/en":"to","/es":"to","/ko":"to","/ru":"to","/nl":"to","/zh-hans":"to","/de":"to","/ja":"to","/tr":"to","/pt-br":"to","/fr":"to"}}}'
        ),
        De = JSON.parse(
          '{"Zh":[{"key":"awc","percent":"20","value":"10","calculated":true,"period":{"/en":"7 days","/tr":"7 GÜN","/it":"7 GIORNI","/es":"7 días","/pt-br":"7 dias","/de":"7 Tage","/fr":"7 jours","/nl":"7 dagen"},"deposit":"10"},{"key":"band","percent":"11","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"eth","percent":"5.5","value":"1","best":true,"calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"hbar","percent":"6.5","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"egld","percent":"9.4","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"osmo","percent":"22","value":"1","new":true,"calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"kava","percent":"17","value":"1","new":true,"calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"matic","percent":"4.2","value":"1","new":true,"calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"1"},{"key":"lunc","percent":"19","value":"1","calculated":true,"period":{"/en":"12 hours","/tr":"12 saat","/it":"12 ore","/es":"12 horas","/de":"12 Stunden","/fr":"12 heures","/nl":"12 uren"},"deposit":"5"},{"key":"near","percent":"11","value":"1","calculated":true,"period":{"/en":"12 hours","/tr":"12 saat","/it":"12 ore","/es":"12 horas","/de":"12 Stunden","/fr":"12 heures","/nl":"12 uren"},"deposit":"5"},{"key":"zil","percent":"15","value":"10","calculated":true,"period":{"/en":"2 days","/tr":"2 GÜN","/it":"2 GIORNI","/es":"2 dias","/de":"2 Tage","/fr":"2 jours","/nl":"2 dagen"},"deposit":"0.5"},{"key":"atom","percent":"22","value":"1","calculated":true,"period":{"/en":"21 days","/tr":"21 GÜN","/it":"21 GIORNI","/es":"21 días","/pt-br":"21 dias","/de":"21 Tage","/fr":"21 jours","/nl":"21 dagen"},"deposit":"40"},{"key":"flr","percent":"4.2","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"1"},{"key":"icx","percent":"10","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"1"},{"key":"hbar","percent":"6.5","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"1"},{"key":"algo","percent":"0.63","value":"1","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"1.5"},{"key":"bnb","percent":"5","value":"1","calculated":true,"period":{"/en":"1 day","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"5"},{"key":"xtz","percent":"7","value":"1","calculated":true,"period":{"/en":"40 days","/tr":"40 GÜN","/it":"40 GIORNI","/pt-br":"40 dias","/de":"40 Tage","/fr":"40 jours","/nl":"40 dagen"},"deposit":"4"},{"key":"sol","percent":"7","value":"1","hot":true,"calculated":true,"period":{"/en":"4 days","/tr":"4 GÜN","/it":"4 GIORNI","/es":"4 dias","/de":"4 Tage","/fr":"4 jours","/nl":"4 dagen"},"deposit":"140"},{"key":"kmd","percent":"5.1","value":"10","calculated":true,"period":{"/en":"1 day","/tr":"1 GÜN","/it":"1 GIORNO","/es":"1 día","/pt-br":"1 dia","/de":"1 Tag","/fr":"1 journée","/nl":"1 dag"},"deposit":"0.6"},{"key":"ada","percent":"5","value":"1","calculated":true,"period":{"/en":"20 days","/tr":"20 GÜN","/it":"20 GIORNI","/es":"20 días","/pt-br":"20 dias","/de":"20 Tage","/fr":"20 jours","/nl":"20 dagen"},"deposit":"1.5"},{"key":"trx","percent":"5","value":"1","calculated":true,"period":{"/en":"3 days","/tr":"3 GÜN","/it":"3 GIORNI","/es":"3 dias","/pt-br":"3 dias","/de":"3 Tage","/fr":"3 jours","/nl":"3 dagen"},"deposit":"0.1"},{"key":"vet","percent":"1.63","value":"0","calculated":true,"period":{"/en":"14 days","/tr":"14 GÜN","/it":"14 GIORNI","/es":"14 días","/pt-br":"14 dias","/de":"14 Tage","/fr":"14 jours","/nl":"14 dagen"},"deposit":"0.1"}]}'
        ),
        Be = Ne,
        Re = Ie,
        ze = De.Zh,
        Ge = "/" + document.querySelector("html").getAttribute("lang"),
        Fe = [
          "ETH",
          "SOL",
          "ADA",
          "ATOM",
          "HBAR",
          "LUNC",
          "OSMO",
          "ZIL",
          "KAVA",
        ];
      let Ve = [];
      function He(e) {
        let n;
        return (
          ze.forEach((a) => {
            a.key == e.toLowerCase() && (n = a.percent);
          }),
          n
        );
      }
      Fe.forEach((e) => {
        Ve.push({
          key: e.toLocaleLowerCase(),
          data: Be[e.toLocaleLowerCase()],
          percent: He(e),
        });
      });
      let Xe =
        "https://raki.atomicwallet.io/pricemultifull?tsyms=USD&fsyms=" +
        Fe.toString();
      function je(e) {
        if (isNaN(e)) return e;
        if (e < 9999) {
          let n = 100,
            a = parseInt(e * n) / n;
          for (; !parseFloat(a) && n < 1e7; )
            (n *= 10), (a = parseInt(e * n) / n);
          return a;
        }
        return e < 1e6
          ? (e / 1e3).toFixed(2) + "K"
          : e < 1e7
          ? (e / 1e6).toFixed(2) + "M"
          : e < 1e12
          ? (e / 1e9).toFixed(2) + "B"
          : e < 1e15
          ? (e / 1e9).toFixed(2) + "T"
          : "1T+";
      }
      const Ue = [],
        qe = document.querySelector(".price__body");
      let Ke = 0,
        Ye = 0,
        We = 0,
        _e = 0,
        $e = 0,
        Ze = 0,
        Qe = "";
      function Je() {
        let e = document.createElement("a"),
          n = `<p class="price__number">${
            Fe.indexOf(We) + 1
          }</p>\n            <div class="price__info">\n                <i class="icon ${
            Ye.data.icon
          }"></i>\n                <div class="price__row price__row--left">\n                    <p class="price__name">${Qe}</p>\n                    <p class="price__short">${We}</p>\n                </div>\n            </div>\n            \n            <div class="price__row price__row--right">\n                <p class="price__apy price__apy-td">+${
            Ye.percent
          }%</p>\n                <p class="price__cap">$${_e}</p>\n                <p class="price__sum">$${$e}</p>\n                <p class="price__change">${Ze}%</p>\n            </div>\n            <div class="price__button-wrap">\n                <button class="btn-medium btn-blue">${
            Re.words.stakeNow[Ge]
          }</button>\n            </div>`;
        (e.innerHTML = n),
          (e.classList = "price__item"),
          (e.style.order = Fe.indexOf(We)),
          e.setAttribute("target", "_blank"),
          Ke && e.classList.add("price--green"),
          (e.href = Ye.data.links.staking),
          qe && qe.appendChild(e);
      }
      !(async function () {
        const e = await fetch(Xe),
          n = await e.json();
        for (let e in n.RAW)
          "AWC" === e ? Ue.push("AWC") : Ue.push(n.RAW[e].USD.FROMSYMBOL);
        Ue.reverse();
        for (let e of Ue) {
          if (!e) {
            console.error("Can not read data for price section");
            continue;
          }
          let a = n.RAW[e].USD;
          (_e = je(a.MKTCAP)),
            ($e = je(a.PRICE)),
            (We = "AWC" === e ? "AWC" : a.FROMSYMBOL),
            "-" === a.CHANGEPCT24HOUR.toString()[0]
              ? ((Ze = a.CHANGEPCT24HOUR.toFixed(2)), (Ke = !1))
              : ((Ze = "+" + a.CHANGEPCT24HOUR.toFixed(2)), (Ke = !0)),
            (Ye = Ve.find((e) => e.key === We.toLowerCase())),
            (Qe = Ye.data.name),
            Je();
        }
      })();
      a(6473), a(2830);
      const en = JSON.parse(
          '{"_y":"https://play.google.com/store/apps/details?id=io.atomicwallet&hl=en&gl=US"}'
        ),
        nn = e(),
        an = document.querySelector("#mobile-app-link");
      if (an) {
        nn ||
          (an.setAttribute("data-popup", ""),
          an.addEventListener("click", function () {
            window.location.href = en._y;
          }));
        let e = document.querySelector(".prices-section").offsetTop;
        window.addEventListener("scroll", () => {
          window.scrollY > e && an.classList.remove("isHide");
        });
      }
      a(9864);
    })();
})();
//# sourceMappingURL=main.js.map
