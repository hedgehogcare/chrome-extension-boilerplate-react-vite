var _ = { exports: {} },
  G = _.exports,
  q;
function K() {
  return (
    q ||
      ((q = 1),
      (function (n, p) {
        (function (a, i) {
          i(n);
        })(typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : G, function (a) {
          if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
            throw new Error('This script should only be loaded in a browser extension.');
          if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
            a.exports = globalThis.browser;
          else {
            const i = 'The message port closed before a response was received.',
              b = x => {
                const f = {
                  alarms: {
                    clear: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    clearAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    get: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  bookmarks: {
                    create: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getChildren: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getRecent: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getSubTree: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getTree: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeTree: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                  },
                  browserAction: {
                    disable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    enable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    getBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getBadgeText: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    openPopup: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    setBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setBadgeText: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                  },
                  browsingData: {
                    remove: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                    removeCache: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeCookies: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeDownloads: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeFormData: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeHistory: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeLocalStorage: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removePasswords: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removePluginData: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    settings: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  commands: {
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  contextMenus: {
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                  },
                  cookies: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getAll: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getAllCookieStores: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  devtools: {
                    inspectedWindow: {
                      eval: {
                        minArgs: 1,
                        maxArgs: 2,
                        singleCallbackArg: !1,
                      },
                    },
                    panels: {
                      create: {
                        minArgs: 3,
                        maxArgs: 3,
                        singleCallbackArg: !0,
                      },
                      elements: {
                        createSidebarPane: {
                          minArgs: 1,
                          maxArgs: 1,
                        },
                      },
                    },
                  },
                  downloads: {
                    cancel: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    download: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    erase: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getFileIcon: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    open: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    pause: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeFile: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    resume: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                  },
                  extension: {
                    isAllowedFileSchemeAccess: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    isAllowedIncognitoAccess: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  history: {
                    addUrl: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    deleteAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    deleteRange: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    deleteUrl: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getVisits: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    search: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  i18n: {
                    detectLanguage: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getAcceptLanguages: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  identity: {
                    launchWebAuthFlow: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  idle: {
                    queryState: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  management: {
                    get: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    getSelf: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    setEnabled: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                    uninstallSelf: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                  },
                  notifications: {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    getPermissionLevel: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                  },
                  pageAction: {
                    getPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    hide: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setIcon: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    show: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                  },
                  permissions: {
                    contains: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    request: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  runtime: {
                    getBackgroundPage: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    getPlatformInfo: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    openOptionsPage: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    requestUpdateCheck: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    sendMessage: {
                      minArgs: 1,
                      maxArgs: 3,
                    },
                    sendNativeMessage: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                    setUninstallURL: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  sessions: {
                    getDevices: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    getRecentlyClosed: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    restore: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                  },
                  storage: {
                    local: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                    managed: {
                      get: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                    },
                    sync: {
                      clear: {
                        minArgs: 0,
                        maxArgs: 0,
                      },
                      get: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      getBytesInUse: {
                        minArgs: 0,
                        maxArgs: 1,
                      },
                      remove: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                      set: {
                        minArgs: 1,
                        maxArgs: 1,
                      },
                    },
                  },
                  tabs: {
                    captureVisibleTab: {
                      minArgs: 0,
                      maxArgs: 2,
                    },
                    create: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    detectLanguage: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    discard: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    duplicate: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    executeScript: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                    getZoom: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    getZoomSettings: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    goBack: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    goForward: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    highlight: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    insertCSS: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    move: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                    query: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    reload: {
                      minArgs: 0,
                      maxArgs: 2,
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    removeCSS: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    sendMessage: {
                      minArgs: 2,
                      maxArgs: 3,
                    },
                    setZoom: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    setZoomSettings: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    update: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                  },
                  topSites: {
                    get: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  webNavigation: {
                    getAllFrames: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    getFrame: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  },
                  webRequest: {
                    handlerBehaviorChanged: {
                      minArgs: 0,
                      maxArgs: 0,
                    },
                  },
                  windows: {
                    create: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 2,
                    },
                    getAll: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    getCurrent: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    getLastFocused: {
                      minArgs: 0,
                      maxArgs: 1,
                    },
                    remove: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    update: {
                      minArgs: 2,
                      maxArgs: 2,
                    },
                  },
                };
                if (Object.keys(f).length === 0)
                  throw new Error('api-metadata.json has not been included in browser-polyfill');
                class L extends WeakMap {
                  constructor(r, t = void 0) {
                    super(t), (this.createItem = r);
                  }
                  get(r) {
                    return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
                  }
                }
                const M = e => e && typeof e == 'object' && typeof e.then == 'function',
                  T =
                    (e, r) =>
                    (...t) => {
                      x.runtime.lastError
                        ? e.reject(new Error(x.runtime.lastError.message))
                        : r.singleCallbackArg || (t.length <= 1 && r.singleCallbackArg !== !1)
                          ? e.resolve(t[0])
                          : e.resolve(t);
                    },
                  w = e => (e == 1 ? 'argument' : 'arguments'),
                  F = (e, r) =>
                    function (g, ...A) {
                      if (A.length < r.minArgs)
                        throw new Error(`Expected at least ${r.minArgs} ${w(r.minArgs)} for ${e}(), got ${A.length}`);
                      if (A.length > r.maxArgs)
                        throw new Error(`Expected at most ${r.maxArgs} ${w(r.maxArgs)} for ${e}(), got ${A.length}`);
                      return new Promise((c, u) => {
                        if (r.fallbackToNoCallback)
                          try {
                            g[e](
                              ...A,
                              T(
                                {
                                  resolve: c,
                                  reject: u,
                                },
                                r,
                              ),
                            );
                          } catch (s) {
                            console.warn(
                              `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                              s,
                            ),
                              g[e](...A),
                              (r.fallbackToNoCallback = !1),
                              (r.noCallback = !0),
                              c();
                          }
                        else
                          r.noCallback
                            ? (g[e](...A), c())
                            : g[e](
                                ...A,
                                T(
                                  {
                                    resolve: c,
                                    reject: u,
                                  },
                                  r,
                                ),
                              );
                      });
                    },
                  N = (e, r, t) =>
                    new Proxy(r, {
                      apply(g, A, c) {
                        return t.call(A, e, ...c);
                      },
                    });
                let y = Function.call.bind(Object.prototype.hasOwnProperty);
                const k = (e, r = {}, t = {}) => {
                    let g = /* @__PURE__ */ Object.create(null),
                      A = {
                        has(u, s) {
                          return s in e || s in g;
                        },
                        get(u, s, d) {
                          if (s in g) return g[s];
                          if (!(s in e)) return;
                          let o = e[s];
                          if (typeof o == 'function')
                            if (typeof r[s] == 'function') o = N(e, e[s], r[s]);
                            else if (y(t, s)) {
                              let S = F(s, t[s]);
                              o = N(e, e[s], S);
                            } else o = o.bind(e);
                          else if (typeof o == 'object' && o !== null && (y(r, s) || y(t, s))) o = k(o, r[s], t[s]);
                          else if (y(t, '*')) o = k(o, r[s], t['*']);
                          else
                            return (
                              Object.defineProperty(g, s, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                  return e[s];
                                },
                                set(S) {
                                  e[s] = S;
                                },
                              }),
                              o
                            );
                          return (g[s] = o), o;
                        },
                        set(u, s, d, o) {
                          return s in g ? (g[s] = d) : (e[s] = d), !0;
                        },
                        defineProperty(u, s, d) {
                          return Reflect.defineProperty(g, s, d);
                        },
                        deleteProperty(u, s) {
                          return Reflect.deleteProperty(g, s);
                        },
                      },
                      c = Object.create(e);
                    return new Proxy(c, A);
                  },
                  C = e => ({
                    addListener(r, t, ...g) {
                      r.addListener(e.get(t), ...g);
                    },
                    hasListener(r, t) {
                      return r.hasListener(e.get(t));
                    },
                    removeListener(r, t) {
                      r.removeListener(e.get(t));
                    },
                  }),
                  R = new L(e =>
                    typeof e != 'function'
                      ? e
                      : function (t) {
                          const g = k(
                            t,
                            {},
                            {
                              getContent: {
                                minArgs: 0,
                                maxArgs: 0,
                              },
                            },
                          );
                          e(g);
                        },
                  ),
                  m = new L(e =>
                    typeof e != 'function'
                      ? e
                      : function (t, g, A) {
                          let c = !1,
                            u,
                            s = new Promise(v => {
                              u = function (h) {
                                (c = !0), v(h);
                              };
                            }),
                            d;
                          try {
                            d = e(t, g, u);
                          } catch (v) {
                            d = Promise.reject(v);
                          }
                          const o = d !== !0 && M(d);
                          if (d !== !0 && !o && !c) return !1;
                          const S = v => {
                            v.then(
                              h => {
                                A(h);
                              },
                              h => {
                                let O;
                                h && (h instanceof Error || typeof h.message == 'string')
                                  ? (O = h.message)
                                  : (O = 'An unexpected error occurred'),
                                  A({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: O,
                                  });
                              },
                            ).catch(h => {
                              console.error('Failed to send onMessage rejected reply', h);
                            });
                          };
                          return S(o ? d : s), !0;
                        },
                  ),
                  E = ({ reject: e, resolve: r }, t) => {
                    x.runtime.lastError
                      ? x.runtime.lastError.message === i
                        ? r()
                        : e(new Error(x.runtime.lastError.message))
                      : t && t.__mozWebExtensionPolyfillReject__
                        ? e(new Error(t.message))
                        : r(t);
                  },
                  $ = (e, r, t, ...g) => {
                    if (g.length < r.minArgs)
                      throw new Error(`Expected at least ${r.minArgs} ${w(r.minArgs)} for ${e}(), got ${g.length}`);
                    if (g.length > r.maxArgs)
                      throw new Error(`Expected at most ${r.maxArgs} ${w(r.maxArgs)} for ${e}(), got ${g.length}`);
                    return new Promise((A, c) => {
                      const u = E.bind(null, {
                        resolve: A,
                        reject: c,
                      });
                      g.push(u), t.sendMessage(...g);
                    });
                  },
                  I = {
                    devtools: {
                      network: {
                        onRequestFinished: C(R),
                      },
                    },
                    runtime: {
                      onMessage: C(m),
                      onMessageExternal: C(m),
                      sendMessage: $.bind(null, 'sendMessage', {
                        minArgs: 1,
                        maxArgs: 3,
                      }),
                    },
                    tabs: {
                      sendMessage: $.bind(null, 'sendMessage', {
                        minArgs: 2,
                        maxArgs: 3,
                      }),
                    },
                  },
                  B = {
                    clear: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    get: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                    set: {
                      minArgs: 1,
                      maxArgs: 1,
                    },
                  };
                return (
                  (f.privacy = {
                    network: {
                      '*': B,
                    },
                    services: {
                      '*': B,
                    },
                    websites: {
                      '*': B,
                    },
                  }),
                  k(x, I, f)
                );
              };
            a.exports = b(chrome);
          }
        });
      })(_)),
    _.exports
  );
}
K();
var P;
(function (n) {
  (n.Local = 'local'), (n.Sync = 'sync'), (n.Managed = 'managed'), (n.Session = 'session');
})(P || (P = {}));
var j;
(function (n) {
  (n.ExtensionPagesOnly = 'TRUSTED_CONTEXTS'), (n.ExtensionPagesAndContentScripts = 'TRUSTED_AND_UNTRUSTED_CONTEXTS');
})(j || (j = {}));
const l = globalThis.chrome,
  D = async (n, p) => {
    const a = b => typeof b == 'function',
      i = b => b instanceof Promise;
    return a(n) ? (i(n), n(p)) : n;
  };
let U = !1;
function z(n) {
  if (l && l.storage[n] === void 0)
    throw new Error(`Check your storage permission in manifest.json: ${n} is not defined`);
}
function Z(n, p, a) {
  var C, R;
  let i = null,
    b = !1,
    x = [];
  const f = (a == null ? void 0 : a.storageEnum) ?? P.Local,
    L = ((C = a == null ? void 0 : a.serialization) == null ? void 0 : C.serialize) ?? (m => m),
    M = ((R = a == null ? void 0 : a.serialization) == null ? void 0 : R.deserialize) ?? (m => m);
  U === !1 &&
    f === P.Session &&
    (a == null ? void 0 : a.sessionAccessForContentScripts) === !0 &&
    (z(f),
    l == null ||
      l.storage[f]
        .setAccessLevel({
          accessLevel: j.ExtensionPagesAndContentScripts,
        })
        .catch(m => {
          console.warn(m), console.warn('Please call setAccessLevel into different context, like a background script.');
        }),
    (U = !0));
  const T = async () => {
      z(f);
      const m = await (l == null ? void 0 : l.storage[f].get([n]));
      return m ? (M(m[n]) ?? p) : p;
    },
    w = () => {
      x.forEach(m => m());
    },
    F = async m => {
      b || (i = await T()), (i = await D(m, i)), await (l == null ? void 0 : l.storage[f].set({ [n]: L(i) })), w();
    },
    N = m => (
      (x = [...x, m]),
      () => {
        x = x.filter(E => E !== m);
      }
    ),
    y = () => i;
  T().then(m => {
    (i = m), (b = !0), w();
  });
  async function k(m) {
    if (m[n] === void 0) return;
    const E = M(m[n].newValue);
    i !== E && ((i = await D(E, i)), w());
  }
  return (
    l == null || l.storage[f].onChanged.addListener(k),
    {
      get: T,
      set: F,
      getSnapshot: y,
      subscribe: N,
    }
  );
}
const W = Z('theme-storage-key', 'light', {
    storageEnum: P.Local,
  }),
  H = {
    ...W,
    toggle: async () => {
      await W.set(n => (n === 'light' ? 'dark' : 'light'));
    },
  };
H.get().then(n => {
  console.log('theme', n);
});
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://tops.chainbase.com/' });
});
chrome.runtime.onMessage.addListener((n, p, a) =>
  n.type === 'FETCH_USER'
    ? (fetch(`https://api.chainbase.com/tops/v1/stories?lang=${n.lang}`, {
        method: 'GET',
      })
        .then(i => i.json())
        .then(i => a(i))
        .catch(i => a({ error: i.message })),
      !0)
    : (n.type === 'SLACK_ALERT' &&
        n.text &&
        fetch('https://hooks.slack.com/services/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', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: n.text,
          }),
        })
          .then(() => a({ ok: !0 }))
          .catch(i => a({ ok: !1, error: i.message })),
      !0),
);
console.log('Background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
