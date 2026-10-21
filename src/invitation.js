(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    61: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 1953));
    },
    1953: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => M }));
      var s = a(5155),
        i = a(2115),
        n = a(5239),
        r = a(9831),
        l = a(2096),
        o = a(6497),
        c = a(5797),
        d = a(3457),
        x = a(6485),
        m = a(6983),
        h = a(1873),
        p = a(5740);
      function u(e) {
        let {
            targetDate: t,
            isOpen: a,
            delay: n = 2.4,
            className: r = "mb-16",
          } = e,
          l = i.useCallback(() => {
            let e = new Date(t) - new Date(),
              a = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            return (
              e > 0 &&
                (a = {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 1e3 / 60) % 60),
                  seconds: Math.floor((e / 1e3) % 60),
                }),
              a
            );
          }, [t]),
          [o, d] = (0, i.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          [x, m] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          let e = setInterval(() => {
              d(l());
            }, 1e3),
            t = setTimeout(() => {
              (m(!0), d(l()));
            }, 0);
          return () => {
            (clearInterval(e), clearTimeout(t));
          };
        }, [l]);
        let h = [
          { label: "Days", value: o.days },
          { label: "Hours", value: o.hours },
          { label: "Minutes", value: o.minutes },
          { label: "Seconds", value: o.seconds },
        ];
        return (0, s.jsx)(c.P.div, {
          initial: { opacity: 0, y: 20 },
          animate: a ? { opacity: 1, y: 0 } : {},
          transition: { duration: 1, delay: n },
          className: "".concat(
            r,
            " invitation-countdown flex flex-wrap justify-center gap-4 md:gap-8",
          ),
          children: h.map((e, t) =>
            (0, s.jsxs)(
              "div",
              {
                className: "flex flex-col items-center",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "relative mb-2 flex h-16 w-16 items-center justify-center rounded-lg border border-[#8b7355]/20 bg-white/40 backdrop-blur-sm md:h-20 md:w-20",
                    children: (0, s.jsx)(
                      c.P.span,
                      {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        className:
                          "font-serif text-2xl font-light text-[#2c2c2c] md:text-3xl",
                        children: String(e.value).padStart(2, "0"),
                      },
                      e.value,
                    ),
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "font-sans text-[10px] font-bold tracking-[0.2em] text-[#8b7355] uppercase",
                    children: e.label,
                  }),
                ],
              },
              e.label,
            ),
          ),
        });
      }
      var b = a(3511),
        f = a(5921);
      function g(e) {
        let { isOpen: t } = e,
          [a, n] = (0, i.useState)(!1),
          [r, l] = (0, i.useState)(!1),
          d = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            t &&
              d.current &&
              d.current
                .play()
                .then(() => {
                  n(!0);
                })
                .catch((e) => {
                  console.log(
                    "Autoplay prevented by browser. User interaction required.",
                    e,
                  );
                });
          }, [t]),
          (0, s.jsxs)("div", {
            className: "bride-audio-control fixed bottom-6 right-6 z-40",
            children: [
              (0, s.jsx)("audio", { ref: d, src: "/card-audio.mp3", loop: !0 }),
              (0, s.jsx)(o.N, {
                children:
                  t &&
                  (0, s.jsxs)(c.P.div, {
                    initial: { opacity: 0, scale: 0.8, x: 20 },
                    animate: { opacity: 1, scale: 1, x: 0 },
                    exit: { opacity: 0, scale: 0.8, x: 20 },
                    className:
                      "flex items-center gap-3 rounded-full border border-[#8b7355]/20 bg-white/80 p-2 pr-4 shadow-lg backdrop-blur-md",
                    children: [
                      (0, s.jsx)("button", {
                        "aria-label": a ? "Pause music" : "Play music",
                        onClick: () => {
                          d.current &&
                            (a ? d.current.pause() : d.current.play(), n(!a));
                        },
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-[#8b7355] text-white transition-transform hover:scale-105 active:scale-95",
                        children: a
                          ? (0, s.jsx)(b.A, { size: 18 })
                          : (0, s.jsx)(f.A, { size: 18, className: "ml-0.5" }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "font-sans text-[10px] font-bold tracking-widest text-[#8b7355] uppercase",
                            children: "Now Playing",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "max-w-[100px] truncate font-serif text-xs text-[#2c2c2c]",
                            children: "Wedding Melody",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "flex items-center gap-1",
                        children: [void 0, void 0, void 0].map((e, t) =>
                          (0, s.jsx)(
                            c.P.div,
                            {
                              animate: a
                                ? { height: [4, 12, 4] }
                                : { height: 4 },
                              transition: {
                                duration: 0.5,
                                repeat: 1 / 0,
                                delay: 0.1 * t,
                                ease: "easeInOut",
                              },
                              className: "w-0.5 rounded-full bg-[#8b7355]",
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
              }),
            ],
          })
        );
      }
      var y = a(7181),
        j = a(5229),
        w = a(5937),
        v = a(3664),
        N = a(5917),
        k = a(5426);
      function P(e) {
        let { isOpen: t } = e,
          [a, n] = (0, i.useState)(!1),
          [r, l] = (0, i.useState)(!1),
          d = {
            title: "Wedding Invitation: Dr. Anthea Judy Gilbert & Dr. Arun Joy Thomas",
            text: "You are cordially invited to the wedding of Dr. Anthea Judy Gilbert & Dr. Arun Joy Thomas. Join us in celebrating our love!",
            url: window.location.href,
          },
          x = async () => {
            if (navigator.share)
              try {
                await navigator.share(d);
              } catch (e) {
                console.error("Error sharing:", e);
              }
            else n(!0);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.P.div, {
              initial: { opacity: 0, scale: 0 },
              animate: t ? { opacity: 1, scale: 1 } : {},
              transition: { duration: 0.5, delay: 5 },
              className: "bride-share-control fixed bottom-8 left-8 z-[100]",
              children: (0, s.jsxs)("button", {
                onClick: x,
                className:
                  "group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#8b7355] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95",
                title: "Share Invitation",
                children: [
                  (0, s.jsx)(y.A, { size: 24 }),
                  (0, s.jsx)("span", {
                    className:
                      "absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded bg-[#2c2c2c] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase transition-transform group-hover:scale-100",
                    children: "Share",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(o.N, {
              children:
                a &&
                (0, s.jsx)(c.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm",
                  onClick: () => n(!1),
                  children: (0, s.jsxs)(c.P.div, {
                    initial: { scale: 0.9, y: 20 },
                    animate: { scale: 1, y: 0 },
                    exit: { scale: 0.9, y: 20 },
                    className:
                      "w-full max-w-sm overflow-hidden rounded-3xl bg-white p-8 shadow-2xl",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, s.jsxs)("div", {
                        className: "mb-6 flex items-center justify-between",
                        children: [
                          (0, s.jsx)("h3", {
                            className: "font-serif text-2xl text-[#2c2c2c]",
                            children: "Share Invitation",
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => n(!1),
                            className: "text-[#888] hover:text-[#2c2c2c]",
                            children: (0, s.jsx)(j.A, { size: 24 }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              let e = "https://wa.me/?text=".concat(
                                encodeURIComponent(d.text + " " + d.url),
                              );
                              window.open(e, "_blank");
                            },
                            className:
                              "flex flex-col items-center gap-2 rounded-2xl p-4 transition-colors hover:bg-gray-50",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white",
                                children: (0, s.jsx)(w.A, { size: 24 }),
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "font-sans text-[10px] font-bold tracking-widest text-[#555] uppercase",
                                children: "WhatsApp",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              let e = "mailto:?subject="
                                .concat(encodeURIComponent(d.title), "&body=")
                                .concat(
                                  encodeURIComponent(d.text + "\n\n" + d.url),
                                );
                              window.location.href = e;
                            },
                            className:
                              "flex flex-col items-center gap-2 rounded-2xl p-4 transition-colors hover:bg-gray-50",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "flex h-12 w-12 items-center justify-center rounded-full bg-[#EA4335] text-white",
                                children: (0, s.jsx)(v.A, { size: 24 }),
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "font-sans text-[10px] font-bold tracking-widest text-[#555] uppercase",
                                children: "Email",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("button", {
                            onClick: () => {
                              (navigator.clipboard.writeText(d.url),
                                l(!0),
                                setTimeout(() => l(!1), 2e3));
                            },
                            className:
                              "flex flex-col items-center gap-2 rounded-2xl p-4 transition-colors hover:bg-gray-50",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "flex h-12 w-12 items-center justify-center rounded-full bg-[#8b7355] text-white",
                                children: r
                                  ? (0, s.jsx)(N.A, { size: 24 })
                                  : (0, s.jsx)(k.A, { size: 24 }),
                              }),
                              (0, s.jsx)("span", {
                                className:
                                  "font-sans text-[10px] font-bold tracking-widest text-[#555] uppercase",
                                children: r ? "Copied" : "Link",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "mt-8 rounded-2xl border border-dashed border-[#8b7355]/30 p-4 text-center",
                        children: (0, s.jsx)("p", {
                          className: "font-serif text-sm italic text-[#8b7355]",
                          children: "“Share the joy with your loved ones”",
                        }),
                      }),
                    ],
                  }),
                }),
            }),
          ],
        });
      }
      var C = a(9141);
      function A(e) {
        let { isOpen: t } = e;
        return (0, s.jsxs)("section", {
          className: "mt-32 w-full max-w-2xl px-4",
          children: [
            (0, s.jsxs)(c.P.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: t ? { opacity: 1, y: 0 } : {},
              viewport: { once: !0, margin: "-100px" },
              transition: { duration: 1.2, ease: "easeOut" },
              className: "mb-12 text-center",
              children: [
                (0, s.jsx)("h2", {
                  className:
                    "font-serif text-4xl font-light text-[#2c2c2c] md:text-5xl",
                  children: "Contact Us",
                }),
                (0, s.jsx)("div", {
                  className: "mx-auto mt-4 h-px w-24 bg-[#8b7355]/30",
                }),
                (0, s.jsx)("p", {
                  className:
                    "mt-4 font-sans text-sm tracking-widest text-[#8b7355] uppercase",
                  children: "For any questions or assistance",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "family-contacts",
              children: [
                {
                  role: "Parents of the bride",
                  name: "Mr. Gilbert John & Mrs. Dolly Gilbert",
                  phones: ["9207148109", "9446590351"],
                },
              ].map((e, a) =>
                (0, s.jsxs)(
                  c.P.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: t ? { opacity: 1, y: 0 } : {},
                    viewport: { once: !0, margin: "-50px" },
                    transition: { duration: 0.8, delay: 0.2 * a },
                    className:
                      "flex flex-col items-center rounded-3xl border border-[#8b7355]/10 bg-white/50 p-8 text-center backdrop-blur-sm shadow-sm transition-all hover:border-[#8b7355]/30 hover:bg-white/80 hover:shadow-md",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b7355]/10 text-[#8b7355]",
                        children: (0, s.jsx)(C.A, { size: 20 }),
                      }),
                      (0, s.jsx)("h3", {
                        className:
                          "mb-1 font-sans text-[10px] font-bold tracking-[0.2em] text-[#8b7355] uppercase",
                        children: e.role,
                      }),
                      (0, s.jsx)("p", {
                        className: "mb-3 font-serif text-lg text-[#2c2c2c]",
                        children: e.name,
                      }),
                      (0, s.jsx)("div", {
                        className: "contact-phone-list",
                        children: e.phones.map(phone => (0, s.jsx)("a", {
                          href: "tel:+91" + phone,
                          className: "contact-phone-link",
                          children: phone,
                        }, phone)),
                      }),
                    ],
                  },
                  e.role,
                ),
              ),
            }),
          ],
        });
      }

      function VenueMap(venue) {
        return (0, s.jsxs)("article", {
          className: "venue-location",
          children: [
            (0, s.jsxs)("div", {
              className: "venue-location-copy",
              children: [
                (0, s.jsx)("p", { className: "venue-location-label", children: venue.label }),
                venue.intro && (0, s.jsx)("p", { className: "venue-location-intro", children: venue.intro }),
                (0, s.jsx)("h3", { className: "venue-location-name", children: venue.title }),
                (0, s.jsx)("p", { className: "venue-location-address", children: venue.address }),
              ],
            }),
            (0, s.jsx)("iframe", {
              src: venue.embed, title: venue.label + " map",
              width: "100%", height: "240", loading: "lazy",
              allowFullScreen: !0, referrerPolicy: "no-referrer-when-downgrade",
              className: "venue-location-map",
            }),
            (0, s.jsx)("a", {
              href: venue.href, target: "_blank", rel: "noopener noreferrer",
              className: "venue-location-directions", children: venue.action,
            }),
          ],
        });
      }
      function z(e) {
        let { isOpen: t } = e,
          [a, r] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = setTimeout(() => {
              let e = new Date("2026-12-26T11:00:00+05:30").getTime();
              r(new Date().getTime() > e);
            }, 0);
            return () => clearTimeout(e);
          }, []),
          (0, s.jsxs)("section", {
            className: "mt-32 w-full max-w-4xl px-4",
            children: [
              (0, s.jsxs)(c.P.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: t ? { opacity: 1, y: 0 } : {},
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 1.2, ease: "easeOut" },
                className: "mb-12 text-center",
                children: [
                  (0, s.jsx)("h2", {
                    className:
                      "font-sans font-bold tracking-[0.2em] text-accent uppercase md:text-5xl",
                    children: "Engagement Ceremony",
                  }),
                  (0, s.jsx)("div", {
                    className: "mx-auto mt-4 h-px w-24 bg-[#8b7355]/30",
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-6 font-serif text-lg text-[#555]",
                    children: "Join us as we celebrate our engagement",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "relative overflow-hidden rounded-3xl border-2 border-[#8b7355]/40 bg-gradient-to-b from-[#8b7355]/5 to-white/60 p-8 shadow-2xl shadow-[#8b7355]/10 backdrop-blur-md md:p-12",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#8b7355]/20 blur-3xl",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#8b7355]/20 blur-3xl",
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative z-10 mb-12 grid gap-8 md:grid-cols-3",
                    children: [
                      (0, s.jsxs)(c.P.div, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: t ? { opacity: 1, y: 0 } : {},
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className: "flex flex-col items-center text-center",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b7355]/10 text-[#8b7355]",
                            children: (0, s.jsx)(x.A, { size: 20 }),
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "mb-2 font-sans text-xs font-bold tracking-[0.2em] text-[#8b7355] uppercase",
                            children: "Date",
                          }),
                          (0, s.jsx)("p", {
                            className: "font-serif text-xl text-[#2c2c2c]",
                            children: " On Saturday, 26th December 2026",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(c.P.div, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: t ? { opacity: 1, y: 0 } : {},
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.4 },
                        className: "flex flex-col items-center text-center",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b7355]/10 text-[#8b7355]",
                            children: (0, s.jsx)(m.A, { size: 20 }),
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "mb-2 font-sans text-xs font-bold tracking-[0.2em] text-[#8b7355] uppercase",
                            children: "Time",
                          }),
                          (0, s.jsx)("p", {
                            className: "font-serif text-xl text-[#2c2c2c]",
                            children: " 11:00 AM",
                          }),
                        ],
                      }),
                      (0, s.jsxs)(c.P.div, {
                        initial: { opacity: 0, y: 20 },
                        whileInView: t ? { opacity: 1, y: 0 } : {},
                        viewport: { once: !0 },
                        transition: { duration: 0.8, delay: 0.6 },
                        className: "flex flex-col items-center text-center",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b7355]/10 text-[#8b7355]",
                            children: (0, s.jsx)(h.A, { size: 20 }),
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "mb-2 font-sans text-xs font-bold tracking-[0.2em] text-[#8b7355] uppercase",
                            children: "Location",
                          }),
                          (0, s.jsx)("p", {
                            className: "font-serif text-xl text-[#2c2c2c]",
                            children:
                              "Holy Family Roman Catholic Church",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "mt-1 font-sans text-xs tracking-widest text-[#888] uppercase",
                            children: "Mukkad, Kollam",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(c.P.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: t ? { opacity: 1, y: 0 } : {},
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 0.8 },
                    className:
                      "relative z-10 mb-12 flex flex-col items-center text-center border-t border-accent/10 pt-8",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "mb-4 font-sans text-sm font-bold tracking-[0.3em] text-accent uppercase",
                        children: "Reception Venue",
                      }),
                      (0, s.jsxs)("p", {
                        className:
                          "font-serif text-2xl text-foreground max-w-lg leading-relaxed",
                        children: [
                          "Reception to follow at the ",
                          (0, s.jsx)("br", {}),
                          " Holy Family Parish Hall, Mukkad, Kollam.",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "mt-4 flex items-center gap-2 text-muted-foreground",
                        children: [
                          (0, s.jsx)(m.A, {
                            size: 16,
                            className: "text-accent",
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "font-sans text-base tracking-widest uppercase",
                            children: "Time :- 12pm - 9pm",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !a &&
                    (0, s.jsxs)("div", {
                      className:
                        "relative z-10 flex flex-col items-center border-t border-[#8b7355]/10 pt-12",
                      children: [
                        (0, s.jsx)("h3", {
                          className:
                            "mb-8 font-sans text-xs font-bold tracking-[0.3em] text-[#8b7355] uppercase",
                          children: "Countdown to the Engagement",
                        }),
                        (0, s.jsx)(u, {
                          targetDate: "2026-12-26T11:00:00+05:30",
                          isOpen: t,
                          delay: 0.8,
                          className: "mb-0",
                        }),
                      ],
                    }),
                  /* Sample family-meeting photo and caption retained for later replacement.
(0, s.jsxs)(c.P.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: t ? { opacity: 1, y: 0 } : {},
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 1 },
                    className:
                      "relative z-10 mt-12 flex flex-col items-center text-center border-t border-accent/10 pt-12",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "relative w-full max-w-md aspect-[4/3] mb-8 overflow-hidden rounded-2xl border-2 border-accent/20 shadow-xl",
                        children: (0, s.jsx)(n.default, {
                          src: "/proposel.jpeg",
                          alt: "Families meeting",
                          fill: !0,
                          className: "object-cover",
                          referrerPolicy: "no-referrer",
                        }),
                      }),
                      (0, s.jsx)("h3", {
                        className:
                          "mb-4 font-sans text-sm font-bold tracking-[0.3em] text-accent uppercase",
                        children: "Sunday, November 9,2025",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "font-serif text-xl sm:text-2xl text-foreground max-w-lg leading-relaxed italic",
                        children:
                          '"On this day our families met, a day blessed by the Almighty"',
                      }),
                    ],
                  })
                  */
                  (0, s.jsx)(VenueMap, {"label":"Engagement & reception","title":"Holy Family Roman Catholic Church","address":"Mukkad, Kollam","href":"https://maps.app.goo.gl/9XNfZS7HpaZpu4T96","embed":"https://www.google.com/maps?q=8.9303737,76.5599173&z=16&output=embed","action":"Directions to engagement"}),
                ],
              }),
            ],
          })
        );
      }
      function RevealSparkles() {
        const [visible, setVisible] = i.useState(!0);
        i.useEffect(() => {
          const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? 450
            : 4500;
          const timer = window.setTimeout(() => setVisible(!1), duration);
          return () => window.clearTimeout(timer);
        }, []);
        if (!visible) return null;
        return (0, s.jsxs)("div", {
          className: "invitation-reveal-sparkles",
          "aria-hidden": !0,
          children: [
            (0, s.jsx)("div", { className: "invitation-reveal-glow" }),
            ...Array.from({ length: 54 }, (_, index) => {
              const angle = index * 2.399963229728653;
              const distance = 22 + ((index * 17) % 27);
              return (0, s.jsx)("span", {
                className: "invitation-reveal-particle",
                style: {
                  "--spark-x": `${Math.cos(angle) * distance}vw`,
                  "--spark-y": `${Math.sin(angle) * distance - 8}vh`,
                  "--spark-start-x": `${Math.cos(angle) * 26}px`,
                  "--spark-start-y": `${Math.sin(angle) * 26}px`,
                  "--spark-size": `${index % 3 === 0 ? 9 : index % 3 === 1 ? 5 : 3}px`,
                  "--spark-delay": `${(index % 9) * 0.035}s`,
                  "--spark-duration": `${3.3 + (index % 5) * 0.2}s`,
                  "--spark-turn": `${index % 2 === 0 ? 110 : -110}deg`,
                  "--spark-color": ["#fff9e7", "#e6c878", "#caa44d"][index % 3],
                },
                children: (0, s.jsx)("span", { className: "invitation-reveal-star" }),
              }, index);
            }),
          ],
        });
      }
      function BrideMarbleBackdrop({ open }) {
        return (0, s.jsxs)("div", {
          className: "bride-marble-backdrop" + (open ? " is-visible" : ""),
          "aria-hidden": true,
          children: [
            (0, s.jsxs)("picture", {
              className: "bride-marble-picture",
              children: [
                (0, s.jsx)("source", { media: "(min-aspect-ratio: 1/1)", srcSet: "/assets/bride-marble-landscape.png" }),
                (0, s.jsx)("img", { src: "/assets/bride-marble-portrait.jpg", alt: "", width: 735, height: 1105, className: "bride-marble-image", decoding: "async" })
              ]
            }),
            (0, s.jsx)("div", { className: "bride-marble-soften" }),
            ...Array.from({ length: 6 }, (_, index) => (0, s.jsx)("span", {
              className: "bride-marble-glint bride-marble-glint-" + index,
              style: { "--glint-delay": (-index * 1.7) + "s" }
            }, index))
          ]
        });
      }
      function BrideFloatingSparkles() {
        return (0, s.jsx)("div", {
          className: "bride-floating-sparkles",
          "aria-hidden": true,
          children: Array.from({ length: 12 }, (_, index) =>
            (0, s.jsx)("span", {
              className: "bride-floating-sparkle",
              style: {
                left: (4 + ((index * 29) % 90)) + "%",
                "--sparkle-duration": (10 + (index % 5) * 1.5) + "s",
                "--sparkle-delay": (-index * 2.3) + "s",
                "--sparkle-sway": (index % 2 ? 18 : -18) + "px",
              },
              children: (0, s.jsx)(p.A, { size: 16 + (index % 4) * 5 }),
            }, index)
          ),
        });
      }
      function M() {
        let [e, t] = (0, i.useState)(!1),
          [f, y] = (0, i.useState)(!1);
        return (
          i.useEffect(() => {
            let e = setTimeout(() => {
              let e = new Date("2026-12-30T11:11:00+05:30").getTime();
              y(new Date().getTime() > e);
            }, 0);
            return () => clearTimeout(e);
          }, []),
          (0, s.jsxs)("main", {
            className:
              "bride-marble-invitation relative min-h-screen overflow-hidden bg-[#fdfcf8] selection:bg-[#8b7355]/20",
            children: [
              e && (0, s.jsx)(RevealSparkles, {}),
              (0, s.jsx)(o.N, {
                children:
                  !e &&
                  (0, s.jsxs)(
                    c.P.div,
                    {
                      exit: { opacity: 0 },
                      transition: { duration: 1, delay: 1 },
                      className:
                        "invitation-curtains fixed inset-0 z-50 flex cursor-pointer overflow-hidden",
                      onClick: () => t(!0),
                      children: [
                        (0, s.jsx)(c.P.div, {
                          initial: { x: 0 },
                          animate: e ? { x: "-100%" } : { x: 0 },
                          transition: {
                            type: "spring",
                            stiffness: 35,
                            damping: 15,
                            mass: 1.2,
                            restDelta: 0.001,
                          },
                          className:
                            "curtain-panel curtain-panel-left relative h-full w-1/2",
                          children: (0, s.jsx)("div", {
                            className:
                              "absolute right-8 top-1/2 -translate-y-1/2 text-white/10",
                            children: (0, s.jsx)(d.A, {
                              size: 160,
                              strokeWidth: 0.3,
                            }),
                          }),
                        }),
                        (0, s.jsx)(c.P.div, {
                          initial: { x: 0 },
                          animate: e ? { x: "100%" } : { x: 0 },
                          transition: {
                            type: "spring",
                            stiffness: 35,
                            damping: 15,
                            mass: 1.2,
                            restDelta: 0.001,
                          },
                          className:
                            "curtain-panel curtain-panel-right relative h-full w-1/2",
                          children: (0, s.jsx)("div", {
                            className:
                              "absolute left-8 top-1/2 -translate-y-1/2 text-white/10",
                            children: (0, s.jsx)(d.A, {
                              size: 160,
                              strokeWidth: 0.3,
                            }),
                          }),
                        }),
                        (0, s.jsxs)(c.P.div, {
                          initial: { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          transition: { duration: 1.5, ease: "easeOut" },
                          className:
                            "curtain-intro absolute inset-0 flex flex-col items-center justify-center text-center",
                          children: [
                            (0, s.jsx)(c.P.div, {
                              animate: {
                                scale: [1, 1.018, 1],
                              },
                              transition: {
                                repeat: 1 / 0,
                                duration: 6,
                                ease: "easeInOut",
                              },
                              className: "curtain-monogram mb-6",
                              children: (0, s.jsx)("img", {
                                src: "/assets/bride-aa-wax-seal.png",
                                alt: "Anthea and Arun — A & A wax-seal monogram",
                                width: 1254,
                                height: 1254,
                                className: "curtain-monogram-art",
                                fetchPriority: "high",
                                draggable: false,
                              }),
                            }),
                            (0, s.jsx)("h2", {
                              className:
                                "font-serif text-2xl font-light tracking-[0.3em] uppercase md:text-3xl",
                              children: "Open to Reveal",
                            }),
                            (0, s.jsx)("div", {
                              className: "curtain-divider mt-4 h-px w-12",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative mt-8 flex items-center justify-center gap-4",
                              children: [
                                (0, s.jsx)(c.P.div, {
                                  animate: {
                                    y: [0, -8, 0],
                                    rotate: [0, 5, -5, 0],
                                  },
                                  transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                                  className:
                                    "relative h-12 w-12 md:h-16 md:w-16",
                                  children: (0, s.jsx)(n.default, {
                                    src: "/assets/angel-silhouette.png",
                                    alt: "Angel holding a heart",
                                    unoptimized: !0,
                                    fill: !0,
                                    className: "object-contain",
                                  }),
                                }),
                                (0, s.jsx)(c.P.h2, {
                                  animate: {
                                    opacity: [0.8, 1, 0.8],
                                    y: [0, -2, 0],
                                  },
                                  transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                                  className:
                                    "font-serif text-xl text-white tracking-[0.3em] uppercase md:text-2xl drop-shadow-md",
                                  children: "Tap to Open",
                                }),
                                (0, s.jsx)(c.P.div, {
                                  animate: {
                                    y: [0, -8, 0],
                                    rotate: [0, -5, 5, 0],
                                  },
                                  transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                  },
                                  className:
                                    "relative h-12 w-12 md:h-16 md:w-16 scale-x-[-1]",
                                  children: (0, s.jsx)(n.default, {
                                    src: "/assets/angel-silhouette.png",
                                    alt: "Angel holding a heart",
                                    unoptimized: !0,
                                    fill: !0,
                                    className: "object-contain",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    "curtain-container",
                  ),
              }),
              (0, s.jsx)("div", {
                className:
                  "relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-32",
                children: (0, s.jsxs)("div", {
                  className: "flex flex-col items-center text-center",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "couple-introduction mb-12 flex flex-col items-center",
                      children: [
                        (0, s.jsxs)(c.P.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: e ? { opacity: 1, y: 0 } : {},
                          transition: { duration: 1, delay: 0.8 },
                          className: "mb-16 max-w-lg px-4",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "font-sans text-sm leading-relaxed text-muted-foreground md:text-xl",
                              children:
                                '"Therefore what God has joined together, let no one separate."',
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "mt-3 font-sans text-[10px] font-bold tracking-[0.2em] text-accent uppercase",
                              children: "— Mark 10:9",
                            }),
                          ],
                        }),
                        (0, s.jsx)(c.P.div, {
                          initial: { opacity: 0, y: 10 },
                          animate: e ? { opacity: 1, y: 0 } : {},
                          transition: { duration: 1, delay: 1.2 },
                          className:
                            "font-sans text-sm md:text-xl leading-relaxed text-muted-foreground max-w-2xl px-4",
                          children:
                            "With the blessing of Almighty God and together with our family, we joyfully invite you to share in the wedding ceremony of our beloved daughter",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "couple-names mt-12 flex flex-col items-center justify-center gap-6 md:gap-8",
                          children: [
                            (0, s.jsxs)(c.P.div, {
                              initial: { opacity: 0, y: 20 },
                              animate: e ? { opacity: 1, y: 0 } : {},
                              transition: {
                                duration: 1.2,
                                delay: 1.5,
                                ease: "easeOut",
                              },
                              className:
                                "couple-person flex flex-col items-center text-center",
                              children: [
                                (0, s.jsx)("h1", {
                                  className:
                                    "couple-name font-serif font-medium text-accent",
                                  children: "Dr. Anthea Judy Gilbert",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "font-sans text-sm md:text-base text-muted-foreground space-y-2",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "font-medium text-foreground/80",
                                      children:
                                        "D/o Mr. Gilbert John and Mrs. Dolly Gilbert",
                                    }),
                                    (0, s.jsx)("p", {
                                      children:
                                        "Poomughathu House, Mukkad, Kavandu P.O, Kollam - 691003",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "family-detail-phones",
                                      children: ["9207148109", "9446590351"].map(phone =>
                                        (0, s.jsx)("a", {
                                          href: "tel:+91" + phone,
                                          children: phone,
                                        }, phone)),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)(c.P.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: e ? { opacity: 1, scale: 1 } : {},
                              transition: {
                                duration: 0.8,
                                delay: 2,
                                type: "spring",
                              },
                              className:
                                "couple-amp flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-accent/30 shrink-0",
                              children: (0, s.jsx)("span", {
                                  className:
                                    "font-serif text-3xl sm:text-4xl italic text-accent",
                                children: "&",
                              }),
                            }),
                            (0, s.jsxs)(c.P.div, {
                              initial: { opacity: 0, y: 20 },
                              animate: e ? { opacity: 1, y: 0 } : {},
                              transition: {
                                duration: 1.2,
                                delay: 1.7,
                                ease: "easeOut",
                              },
                              className:
                                "couple-person flex flex-col items-center text-center",
                              children: [
                                (0, s.jsx)("h1", {
                                  className:
                                    "couple-name font-serif font-medium text-accent",
                                  children: "Dr. Arun Joy Thomas",
                                }),
                                (0, s.jsxs)("div", {
                                  className:
                                    "font-sans text-sm md:text-base text-muted-foreground space-y-2",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "font-medium text-foreground/80",
                                      children:
                                        "S/o Mr. Thomas K John and Mrs. Jessy K George",
                                    }),
                                    (0, s.jsx)("p", {
                                      children:
                                        "Sea View, Pangappara P.O, Thiruvananthapuram",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "family-detail-phones",
                                      children: ["9497816261", "9497331582"].map(phone =>
                                        (0, s.jsx)("a", {
                                          href: "tel:+91" + phone,
                                          children: phone,
                                        }, phone)),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(c.P.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: e ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 1.2, delay: 2.4 },
                      className: "mb-16 max-w-lg",
                      children: [
                        (0, s.jsx)("p", {
                          className: "font-sans text-sm leading-relaxed",
                          children:
                            'As they exchange their wedding vows and say "I Do"',
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "font-sans text-sm font-bold tracking-[0.2em] text-accent uppercase space-y-3 mt-4",
                          children: [
                            (0, s.jsx)("p", {
                              children: "ON WEDNESDAY, 30TH DECEMBER 2026",
                            }),
                            (0, s.jsx)("p", { children: "AT 11:11 AM" }),
                            (0, s.jsx)("p", {
                              children: "AT TRINITY MEDICAL COLLEGE CHURCH,",
                            }),
                            (0, s.jsx)("p", {
                              children: "THIRUVANANTHAPURAM.",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "pt-14",
                          children: (0, s.jsxs)("p", {
                            className: "font-sans text-sm leading-relaxed",
                            children: [
                              "Sharing our happiness with you, from our families, ",
                              (0, s.jsx)("br", {}),
                              "Anthea's Parents",
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(z, { isOpen: e }),
                    (0, s.jsxs)(c.P.section, {
                      initial: { opacity: 0, y: 30 },
                      whileInView: e ? { opacity: 1, y: 0 } : {},
                      viewport: { once: !0, margin: "-100px" },
                      transition: {
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.2,
                      },
                      className: "mt-16 w-full max-w-5xl px-4",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "mb-12 text-center",
                          children: [
                            (0, s.jsx)("h2", {
                              className:
                                "font-sans font-bold tracking-[0.2em] text-accent uppercase md:text-5xl",
                              children: "Wedding Ceremony",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "mx-auto mt-4 h-px w-24 bg-[#8b7355]/30",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative overflow-hidden rounded-3xl border border-[#8b7355]/10 bg-white/50 p-8 shadow-xl backdrop-blur-sm md:p-12",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "mb-12 flex flex-col items-center border-b border-[#8b7355]/10 pb-12",
                              children: f
                                ? (0, s.jsxs)(c.P.div, {
                                    initial: { opacity: 0, scale: 0.9 },
                                    animate: e ? { opacity: 1, scale: 1 } : {},
                                    transition: { duration: 1, delay: 0.4 },
                                    className:
                                      "flex flex-col items-center text-center",
                                    children: [
                                      (0, s.jsx)("h3", {
                                        className:
                                          "mb-4 font-serif text-3xl font-light text-[#2c2c2c] md:text-4xl",
                                        children: "Thank You!",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "mb-8 font-serif text-lg text-[#555] max-w-md",
                                        children:
                                          "We are so grateful to everyone who joined us to celebrate our special day.",
                                      }),
                                      /* Gallery button intentionally disabled until a real photo gallery is added.
(0, s.jsxs)("button", {
                                        onClick: () => {
                                          let e =
                                            document.getElementById(
                                              "photo-gallery",
                                            );
                                          null == e ||
                                            e.scrollIntoView({
                                              behavior: "smooth",
                                            });
                                        },
                                        className:
                                          "group relative overflow-hidden rounded-full border border-[#8b7355] px-8 py-3 transition-all hover:bg-[#8b7355] hover:text-white",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className:
                                              "relative z-10 font-sans text-xs font-medium tracking-[0.2em] uppercase",
                                            children: "View Photo Gallery",
                                          }),
                                          (0, s.jsx)(c.P.div, {
                                            className:
                                              "absolute inset-0 z-0 bg-[#8b7355]",
                                            initial: { x: "-100%" },
                                            whileHover: { x: 0 },
                                            transition: { duration: 0.3 },
                                          }),
                                        ],
                                      })
                                      */
                                    ],
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)("h3", {
                                        className:
                                          "mb-8 font-sans text-xs font-bold tracking-[0.3em] text-[#8b7355] uppercase",
                                        children: "Countdown to the Big Day",
                                      }),
                                      (0, s.jsx)(u, {
                                        targetDate: "2026-12-30T11:11:00+05:30",
                                        isOpen: e,
                                        delay: 0.4,
                                        className: "mb-0",
                                      }),
                                    ],
                                  }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "mb-12 grid w-full gap-8 md:grid-cols-3",
                              children: [
                                (0, s.jsx)(S, {
                                  delay: 0.6,
                                  isOpen: e,
                                  icon: (0, s.jsx)(x.A, {
                                    className: "text-[#8b7355]",
                                    size: 24,
                                  }),
                                  title: "When",
                                  content: "Wednesday, 30th December 2026",
                                  subContent: "",
                                }),
                                (0, s.jsx)(S, {
                                  delay: 0.8,
                                  isOpen: e,
                                  icon: (0, s.jsx)(m.A, {
                                    className: "text-[#8b7355]",
                                    size: 24,
                                  }),
                                  title: "Time",
                                  content: "11:11 AM",
                                  subContent: "",
                                }),
                                (0, s.jsx)(S, {
                                  delay: 1,
                                  isOpen: e,
                                  icon: (0, s.jsx)(h.A, {
                                    className: "text-[#8b7355]",
                                    size: 24,
                                  }),
                                  title: "Where",
                                  content: "Trinity Medical College Church",
                                  subContent: "Thiruvananthapuram",
                                }),
                              ],
                            }),
                            
                            (0, s.jsxs)("div", {
                              className: "wedding-venue-grid",
                              children: [
                                (0, s.jsx)(VenueMap, {"label":"Wedding church","title":"Trinity Medical College Church","address":"Thiruvananthapuram","href":"https://maps.app.goo.gl/gGeWqZYqqkfbE4QLA","embed":"https://www.google.com/maps?q=8.5173548,76.9318288&z=16&output=embed","action":"Directions to church"}),
                                (0, s.jsx)(VenueMap, {"label":"Reception venue","intro":"Reception to follow at the","title":"Sooryaprabha Convention Centre","address":"Mannanthala, Thiruvananthapuram","href":"https://maps.app.goo.gl/dwpdAW2Uzjs1xFCW9","embed":"https://www.google.com/maps?q=8.565688,76.9440848&z=16&output=embed","action":"Directions to reception"})
                              ]
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(A, { isOpen: e }),
                  ],
                }),
              }),
              (0, s.jsx)(P, { isOpen: e }),
              (0, s.jsx)(BrideMarbleBackdrop, { open: e }),
              e && (0, s.jsx)(BrideFloatingSparkles, {}),
              (0, s.jsx)(g, { isOpen: e }),
            ],
          })
        );
      }
      function S(e) {
        let {
            delay: t,
            isOpen: a,
            icon: n,
            title: r,
            content: l,
            subContent: o,
          } = e,
          [x, m] = (0, i.useState)(!1);
        return (0, s.jsxs)(c.P.div, {
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: +!!a,
            y: 20 * !a,
            borderColor: x
              ? "rgba(139, 115, 85, 0.3)"
              : "rgba(139, 115, 85, 0.1)",
            backgroundColor: x
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(255, 255, 255, 0.5)",
            scale: x ? 1.02 : 1,
          },
          whileHover: {
            scale: x ? 1.03 : 1.02,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(139, 115, 85, 0.5)",
            boxShadow:
              "0 20px 40px rgba(139, 115, 85, 0.15), 0 0 20px rgba(139, 115, 85, 0.1)",
          },
          transition: {
            duration: 0.8,
            delay: a ? t : 0,
            scale: { duration: 0.3, ease: "easeOut" },
            backgroundColor: { duration: 0.3 },
            borderColor: { duration: 0.3 },
            boxShadow: { duration: 0.3 },
          },
          onClick: () => m(!x),
          className:
            "event-info-card flex cursor-pointer flex-col items-center rounded-2xl border bg-white/50 p-8 backdrop-blur-sm shadow-sm transition-shadow hover:shadow-xl",
          children: [
            (0, s.jsx)(c.P.div, {
              animate: {
                scale: x ? 1.1 : 1,
                backgroundColor: x
                  ? "rgba(139, 115, 85, 0.1)"
                  : "rgba(139, 115, 85, 0.05)",
              },
              whileHover: { rotate: [0, -10, 10, 0] },
              transition: { duration: 0.5 },
              className:
                "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
              children: n,
            }),
            (0, s.jsx)("h3", {
              className:
                "mb-2 font-sans text-xs font-bold tracking-[0.3em] text-[#8b7355] uppercase",
              children: r,
            }),
            (0, s.jsx)("p", {
              className: "mb-1 font-serif text-xl text-[#2c2c2c]",
              children: l,
            }),
            (0, s.jsx)("p", {
              className:
                "font-sans text-xs tracking-widest text-[#888] uppercase",
              children: o,
            }),
            (0, s.jsx)("div", {
              className: "mt-4 text-[#8b7355]/40",
              children: (0, s.jsx)(d.A, {
                size: 12,
                className: "fill-[#8b7355]/40",
              }),
            }),
          ],
        });
      }
    },
  },
  (e) => {
    (e.O(0, [967, 441, 255, 358], () => e((e.s = 61))), (_N_E = e.O()));
  },
]);
