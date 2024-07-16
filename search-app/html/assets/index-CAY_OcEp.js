var O_ = Object.defineProperty;
var P_ = (e, t, r) =>
  t in e ? O_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var Xr = (e, t, r) => P_(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = r(s);
    fetch(s.href, c);
  }
})();
/**
 * @vue/shared v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function rh(e, t) {
  const r = new Set(e.split(","));
  return (o) => r.has(o);
}
const _t = {},
  us = [],
  Yn = () => {},
  R_ = () => !1,
  su = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ih = (e) => e.startsWith("onUpdate:"),
  zt = Object.assign,
  oh = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  D_ = Object.prototype.hasOwnProperty,
  ct = (e, t) => D_.call(e, t),
  ze = Array.isArray,
  fs = (e) => na(e) === "[object Map]",
  lu = (e) => na(e) === "[object Set]",
  av = (e) => na(e) === "[object Date]",
  Xe = (e) => typeof e == "function",
  $t = (e) => typeof e == "string",
  Dr = (e) => typeof e == "symbol",
  xt = (e) => e !== null && typeof e == "object",
  $0 = (e) => (xt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch),
  O0 = Object.prototype.toString,
  na = (e) => O0.call(e),
  z_ = (e) => na(e).slice(8, -1),
  P0 = (e) => na(e) === "[object Object]",
  sh = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bl = rh(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  au = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  I_ = /-(\w)/g,
  br = au((e) => e.replace(I_, (t, r) => (r ? r.toUpperCase() : ""))),
  F_ = /\B([A-Z])/g,
  Zi = au((e) => e.replace(F_, "-$1").toLowerCase()),
  cu = au((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hc = au((e) => (e ? `on${cu(e)}` : "")),
  zr = (e, t) => !Object.is(e, t),
  pc = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t);
  },
  R0 = (e, t, r, o = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: o, value: r });
  },
  ad = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  D0 = (e) => {
    const t = $t(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let cv;
const z0 = () =>
  cv ||
  (cv =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Zt(e) {
  if (ze(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r],
        s = $t(o) ? W_(o) : Zt(o);
      if (s) for (const c in s) t[c] = s[c];
    }
    return t;
  } else if ($t(e) || xt(e)) return e;
}
const H_ = /;(?![^(]*\))/g,
  q_ = /:([^]+)/,
  B_ = /\/\*[^]*?\*\//g;
function W_(e) {
  const t = {};
  return (
    e
      .replace(B_, "")
      .split(H_)
      .forEach((r) => {
        if (r) {
          const o = r.split(q_);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function st(e) {
  let t = "";
  if ($t(e)) t = e;
  else if (ze(e))
    for (let r = 0; r < e.length; r++) {
      const o = st(e[r]);
      o && (t += o + " ");
    }
  else if (xt(e)) for (const r in e) e[r] && (t += r + " ");
  return t.trim();
}
function U_(e) {
  if (!e) return null;
  let { class: t, style: r } = e;
  return t && !$t(t) && (e.class = st(t)), r && (e.style = Zt(r)), e;
}
const V_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  j_ = rh(V_);
function I0(e) {
  return !!e || e === "";
}
function G_(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let o = 0; r && o < e.length; o++) r = uu(e[o], t[o]);
  return r;
}
function uu(e, t) {
  if (e === t) return !0;
  let r = av(e),
    o = av(t);
  if (r || o) return r && o ? e.getTime() === t.getTime() : !1;
  if (((r = Dr(e)), (o = Dr(t)), r || o)) return e === t;
  if (((r = ze(e)), (o = ze(t)), r || o)) return r && o ? G_(e, t) : !1;
  if (((r = xt(e)), (o = xt(t)), r || o)) {
    if (!r || !o) return !1;
    const s = Object.keys(e).length,
      c = Object.keys(t).length;
    if (s !== c) return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f),
        h = t.hasOwnProperty(f);
      if ((d && !h) || (!d && h) || !uu(e[f], t[f])) return !1;
    }
  }
  return String(e) === String(t);
}
function F0(e, t) {
  return e.findIndex((r) => uu(r, t));
}
const H0 = (e) => !!(e && e.__v_isRef === !0),
  qe = (e) =>
    $t(e)
      ? e
      : e == null
        ? ""
        : ze(e) || (xt(e) && (e.toString === O0 || !Xe(e.toString)))
          ? H0(e)
            ? qe(e.value)
            : JSON.stringify(e, q0, 2)
          : String(e),
  q0 = (e, t) =>
    H0(t)
      ? q0(e, t.value)
      : fs(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (r, [o, s], c) => ((r[zf(o, c) + " =>"] = s), r),
              {},
            ),
          }
        : lu(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((r) => zf(r)) }
          : Dr(t)
            ? zf(t)
            : xt(t) && !ze(t) && !P0(t)
              ? String(t)
              : t,
  zf = (e, t = "") => {
    var r;
    return Dr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
  };
/**
 * @vue/reactivity v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let qn;
class K_ {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = qn),
      !t && qn && (this.index = (qn.scopes || (qn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = qn;
      try {
        return (qn = this), t();
      } finally {
        qn = r;
      }
    }
  }
  on() {
    qn = this;
  }
  off() {
    qn = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++) this.effects[r].stop();
      for (r = 0, o = this.cleanups.length; r < o; r++) this.cleanups[r]();
      if (this.scopes) for (r = 0, o = this.scopes.length; r < o; r++) this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function X_(e, t = qn) {
  t && t.active && t.effects.push(e);
}
function B0() {
  return qn;
}
function Y_(e) {
  qn && qn.cleanups.push(e);
}
let To;
class lh {
  constructor(t, r, o, s) {
    (this.fn = t),
      (this.trigger = r),
      (this.scheduler = o),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      X_(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Ji();
      for (let t = 0; t < this._depsLength; t++) {
        const r = this.deps[t];
        if (r.computed && (Z_(r.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Qi();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = qi,
      r = To;
    try {
      return (qi = !0), (To = this), this._runnings++, uv(this), this.fn();
    } finally {
      fv(this), this._runnings--, (To = r), (qi = t);
    }
  }
  stop() {
    this.active && (uv(this), fv(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Z_(e) {
  return e.value;
}
function uv(e) {
  e._trackId++, (e._depsLength = 0);
}
function fv(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) W0(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function W0(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let qi = !0,
  cd = 0;
const U0 = [];
function Ji() {
  U0.push(qi), (qi = !1);
}
function Qi() {
  const e = U0.pop();
  qi = e === void 0 ? !0 : e;
}
function ah() {
  cd++;
}
function ch() {
  for (cd--; !cd && ud.length; ) ud.shift()();
}
function V0(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && W0(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const ud = [];
function j0(e, t, r) {
  ah();
  for (const o of e.keys()) {
    let s;
    o._dirtyLevel < t &&
      (s ?? (s = e.get(o) === o._trackId)) &&
      (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), (o._dirtyLevel = t)),
      o._shouldSchedule &&
        (s ?? (s = e.get(o) === o._trackId)) &&
        (o.trigger(),
        (!o._runnings || o.allowRecurse) &&
          o._dirtyLevel !== 2 &&
          ((o._shouldSchedule = !1), o.scheduler && ud.push(o.scheduler)));
  }
  ch();
}
const G0 = (e, t) => {
    const r = new Map();
    return (r.cleanup = e), (r.computed = t), r;
  },
  Mc = new WeakMap(),
  Co = Symbol(""),
  fd = Symbol("");
function Rn(e, t, r) {
  if (qi && To) {
    let o = Mc.get(e);
    o || Mc.set(e, (o = new Map()));
    let s = o.get(r);
    s || o.set(r, (s = G0(() => o.delete(r)))), V0(To, s);
  }
}
function ni(e, t, r, o, s, c) {
  const f = Mc.get(e);
  if (!f) return;
  let d = [];
  if (t === "clear") d = [...f.values()];
  else if (r === "length" && ze(e)) {
    const h = Number(o);
    f.forEach((p, v) => {
      (v === "length" || (!Dr(v) && v >= h)) && d.push(p);
    });
  } else
    switch ((r !== void 0 && d.push(f.get(r)), t)) {
      case "add":
        ze(e) ? sh(r) && d.push(f.get("length")) : (d.push(f.get(Co)), fs(e) && d.push(f.get(fd)));
        break;
      case "delete":
        ze(e) || (d.push(f.get(Co)), fs(e) && d.push(f.get(fd)));
        break;
      case "set":
        fs(e) && d.push(f.get(Co));
        break;
    }
  ah();
  for (const h of d) h && j0(h, 4);
  ch();
}
function J_(e, t) {
  const r = Mc.get(e);
  return r && r.get(t);
}
const Q_ = rh("__proto__,__v_isRef,__isVue"),
  K0 = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Dr),
  ),
  dv = eS();
function eS() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...r) {
        const o = pt(this);
        for (let c = 0, f = this.length; c < f; c++) Rn(o, "get", c + "");
        const s = o[t](...r);
        return s === -1 || s === !1 ? o[t](...r.map(pt)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...r) {
        Ji(), ah();
        const o = pt(this)[t].apply(this, r);
        return ch(), Qi(), o;
      };
    }),
    e
  );
}
function tS(e) {
  Dr(e) || (e = String(e));
  const t = pt(this);
  return Rn(t, "has", e), t.hasOwnProperty(e);
}
class X0 {
  constructor(t = !1, r = !1) {
    (this._isReadonly = t), (this._isShallow = r);
  }
  get(t, r, o) {
    const s = this._isReadonly,
      c = this._isShallow;
    if (r === "__v_isReactive") return !s;
    if (r === "__v_isReadonly") return s;
    if (r === "__v_isShallow") return c;
    if (r === "__v_raw")
      return o === (s ? (c ? pS : Q0) : c ? J0 : Z0).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const f = ze(t);
    if (!s) {
      if (f && ct(dv, r)) return Reflect.get(dv, r, o);
      if (r === "hasOwnProperty") return tS;
    }
    const d = Reflect.get(t, r, o);
    return (Dr(r) ? K0.has(r) : Q_(r)) || (s || Rn(t, "get", r), c)
      ? d
      : It(d)
        ? f && sh(r)
          ? d
          : d.value
        : xt(d)
          ? s
            ? ra(d)
            : Qn(d)
          : d;
  }
}
class Y0 extends X0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, o, s) {
    let c = t[r];
    if (!this._isShallow) {
      const h = Pl(c);
      if ((!Nc(o) && !Pl(o) && ((c = pt(c)), (o = pt(o))), !ze(t) && It(c) && !It(o)))
        return h ? !1 : ((c.value = o), !0);
    }
    const f = ze(t) && sh(r) ? Number(r) < t.length : ct(t, r),
      d = Reflect.set(t, r, o, s);
    return t === pt(s) && (f ? zr(o, c) && ni(t, "set", r, o) : ni(t, "add", r, o)), d;
  }
  deleteProperty(t, r) {
    const o = ct(t, r);
    t[r];
    const s = Reflect.deleteProperty(t, r);
    return s && o && ni(t, "delete", r, void 0), s;
  }
  has(t, r) {
    const o = Reflect.has(t, r);
    return (!Dr(r) || !K0.has(r)) && Rn(t, "has", r), o;
  }
  ownKeys(t) {
    return Rn(t, "iterate", ze(t) ? "length" : Co), Reflect.ownKeys(t);
  }
}
class nS extends X0 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const rS = new Y0(),
  iS = new nS(),
  oS = new Y0(!0);
const uh = (e) => e,
  fu = (e) => Reflect.getPrototypeOf(e);
function Ga(e, t, r = !1, o = !1) {
  e = e.__v_raw;
  const s = pt(e),
    c = pt(t);
  r || (zr(t, c) && Rn(s, "get", t), Rn(s, "get", c));
  const { has: f } = fu(s),
    d = o ? uh : r ? gh : Rl;
  if (f.call(s, t)) return d(e.get(t));
  if (f.call(s, c)) return d(e.get(c));
  e !== s && e.get(t);
}
function Ka(e, t = !1) {
  const r = this.__v_raw,
    o = pt(r),
    s = pt(e);
  return (
    t || (zr(e, s) && Rn(o, "has", e), Rn(o, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
  );
}
function Xa(e, t = !1) {
  return (e = e.__v_raw), !t && Rn(pt(e), "iterate", Co), Reflect.get(e, "size", e);
}
function hv(e) {
  e = pt(e);
  const t = pt(this);
  return fu(t).has.call(t, e) || (t.add(e), ni(t, "add", e, e)), this;
}
function pv(e, t) {
  t = pt(t);
  const r = pt(this),
    { has: o, get: s } = fu(r);
  let c = o.call(r, e);
  c || ((e = pt(e)), (c = o.call(r, e)));
  const f = s.call(r, e);
  return r.set(e, t), c ? zr(t, f) && ni(r, "set", e, t) : ni(r, "add", e, t), this;
}
function gv(e) {
  const t = pt(this),
    { has: r, get: o } = fu(t);
  let s = r.call(t, e);
  s || ((e = pt(e)), (s = r.call(t, e))), o && o.call(t, e);
  const c = t.delete(e);
  return s && ni(t, "delete", e, void 0), c;
}
function vv() {
  const e = pt(this),
    t = e.size !== 0,
    r = e.clear();
  return t && ni(e, "clear", void 0, void 0), r;
}
function Ya(e, t) {
  return function (o, s) {
    const c = this,
      f = c.__v_raw,
      d = pt(f),
      h = t ? uh : e ? gh : Rl;
    return !e && Rn(d, "iterate", Co), f.forEach((p, v) => o.call(s, h(p), h(v), c));
  };
}
function Za(e, t, r) {
  return function (...o) {
    const s = this.__v_raw,
      c = pt(s),
      f = fs(c),
      d = e === "entries" || (e === Symbol.iterator && f),
      h = e === "keys" && f,
      p = s[e](...o),
      v = r ? uh : t ? gh : Rl;
    return (
      !t && Rn(c, "iterate", h ? fd : Co),
      {
        next() {
          const { value: y, done: b } = p.next();
          return b ? { value: y, done: b } : { value: d ? [v(y[0]), v(y[1])] : v(y), done: b };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ki(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sS() {
  const e = {
      get(c) {
        return Ga(this, c);
      },
      get size() {
        return Xa(this);
      },
      has: Ka,
      add: hv,
      set: pv,
      delete: gv,
      clear: vv,
      forEach: Ya(!1, !1),
    },
    t = {
      get(c) {
        return Ga(this, c, !1, !0);
      },
      get size() {
        return Xa(this);
      },
      has: Ka,
      add: hv,
      set: pv,
      delete: gv,
      clear: vv,
      forEach: Ya(!1, !0),
    },
    r = {
      get(c) {
        return Ga(this, c, !0);
      },
      get size() {
        return Xa(this, !0);
      },
      has(c) {
        return Ka.call(this, c, !0);
      },
      add: ki("add"),
      set: ki("set"),
      delete: ki("delete"),
      clear: ki("clear"),
      forEach: Ya(!0, !1),
    },
    o = {
      get(c) {
        return Ga(this, c, !0, !0);
      },
      get size() {
        return Xa(this, !0);
      },
      has(c) {
        return Ka.call(this, c, !0);
      },
      add: ki("add"),
      set: ki("set"),
      delete: ki("delete"),
      clear: ki("clear"),
      forEach: Ya(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((c) => {
      (e[c] = Za(c, !1, !1)),
        (r[c] = Za(c, !0, !1)),
        (t[c] = Za(c, !1, !0)),
        (o[c] = Za(c, !0, !0));
    }),
    [e, r, t, o]
  );
}
const [lS, aS, cS, uS] = sS();
function fh(e, t) {
  const r = t ? (e ? uS : cS) : e ? aS : lS;
  return (o, s, c) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
        ? e
        : s === "__v_raw"
          ? o
          : Reflect.get(ct(r, s) && s in o ? r : o, s, c);
}
const fS = { get: fh(!1, !1) },
  dS = { get: fh(!1, !0) },
  hS = { get: fh(!0, !1) };
const Z0 = new WeakMap(),
  J0 = new WeakMap(),
  Q0 = new WeakMap(),
  pS = new WeakMap();
function gS(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function vS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gS(z_(e));
}
function Qn(e) {
  return Pl(e) ? e : hh(e, !1, rS, fS, Z0);
}
function dh(e) {
  return hh(e, !1, oS, dS, J0);
}
function ra(e) {
  return hh(e, !0, iS, hS, Q0);
}
function hh(e, t, r, o, s) {
  if (!xt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const c = s.get(e);
  if (c) return c;
  const f = vS(e);
  if (f === 0) return e;
  const d = new Proxy(e, f === 2 ? o : r);
  return s.set(e, d), d;
}
function wl(e) {
  return Pl(e) ? wl(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Pl(e) {
  return !!(e && e.__v_isReadonly);
}
function Nc(e) {
  return !!(e && e.__v_isShallow);
}
function ey(e) {
  return e ? !!e.__v_raw : !1;
}
function pt(e) {
  const t = e && e.__v_raw;
  return t ? pt(t) : e;
}
function ph(e) {
  return Object.isExtensible(e) && R0(e, "__v_skip", !0), e;
}
const Rl = (e) => (xt(e) ? Qn(e) : e),
  gh = (e) => (xt(e) ? ra(e) : e);
class ty {
  constructor(t, r, o, s) {
    (this.getter = t),
      (this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new lh(
        () => t(this._value),
        () => xl(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = pt(this);
    return (
      (!t._cacheable || t.effect.dirty) && zr(t._value, (t._value = t.effect.run())) && xl(t, 4),
      vh(t),
      t.effect._dirtyLevel >= 2 && xl(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function mS(e, t, r = !1) {
  let o, s;
  const c = Xe(e);
  return c ? ((o = e), (s = Yn)) : ((o = e.get), (s = e.set)), new ty(o, s, c || !s, r);
}
function vh(e) {
  var t;
  qi &&
    To &&
    ((e = pt(e)),
    V0(
      To,
      (t = e.dep) != null ? t : (e.dep = G0(() => (e.dep = void 0), e instanceof ty ? e : void 0)),
    ));
}
function xl(e, t = 4, r, o) {
  e = pt(e);
  const s = e.dep;
  s && j0(s, t);
}
function It(e) {
  return !!(e && e.__v_isRef === !0);
}
function je(e) {
  return ny(e, !1);
}
function Fr(e) {
  return ny(e, !0);
}
function ny(e, t) {
  return It(e) ? e : new yS(e, t);
}
class yS {
  constructor(t, r) {
    (this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? t : pt(t)),
      (this._value = r ? t : Rl(t));
  }
  get value() {
    return vh(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Nc(t) || Pl(t);
    (t = r ? t : pt(t)),
      zr(t, this._rawValue) &&
        (this._rawValue, (this._rawValue = t), (this._value = r ? t : Rl(t)), xl(this, 4));
  }
}
function B(e) {
  return It(e) ? e.value : e;
}
const bS = {
  get: (e, t, r) => B(Reflect.get(e, t, r)),
  set: (e, t, r, o) => {
    const s = e[t];
    return It(s) && !It(r) ? ((s.value = r), !0) : Reflect.set(e, t, r, o);
  },
};
function ry(e) {
  return wl(e) ? e : new Proxy(e, bS);
}
class wS {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: r, set: o } = t(
      () => vh(this),
      () => xl(this),
    );
    (this._get = r), (this._set = o);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function iy(e) {
  return new wS(e);
}
function xS(e) {
  const t = ze(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = oy(e, r);
  return t;
}
class _S {
  constructor(t, r, o) {
    (this._object = t), (this._key = r), (this._defaultValue = o), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return J_(pt(this._object), this._key);
  }
}
class SS {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function du(e, t, r) {
  return It(e) ? e : Xe(e) ? new SS(e) : xt(e) && arguments.length > 1 ? oy(e, t, r) : je(e);
}
function oy(e, t, r) {
  const o = e[t];
  return It(o) ? o : new _S(e, t, r);
}
/**
 * @vue/runtime-core v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Bi(e, t, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    ia(s, t, r);
  }
}
function er(e, t, r, o) {
  if (Xe(e)) {
    const s = Bi(e, t, r, o);
    return (
      s &&
        $0(s) &&
        s.catch((c) => {
          ia(c, t, r);
        }),
      s
    );
  }
  if (ze(e)) {
    const s = [];
    for (let c = 0; c < e.length; c++) s.push(er(e[c], t, r, o));
    return s;
  }
}
function ia(e, t, r, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let c = t.parent;
    const f = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let v = 0; v < p.length; v++) if (p[v](e, f, d) === !1) return;
      }
      c = c.parent;
    }
    const h = t.appContext.config.errorHandler;
    if (h) {
      Ji(), Bi(h, null, 10, [e, f, d]), Qi();
      return;
    }
  }
  kS(e, r, s, o);
}
function kS(e, t, r, o = !0) {
  console.error(e);
}
let Dl = !1,
  dd = !1;
const fn = [];
let Mr = 0;
const ds = [];
let Ni = null,
  xo = 0;
const sy = Promise.resolve();
let mh = null;
function ln(e) {
  const t = mh || sy;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function TS(e) {
  let t = Mr + 1,
    r = fn.length;
  for (; t < r; ) {
    const o = (t + r) >>> 1,
      s = fn[o],
      c = zl(s);
    c < e || (c === e && s.pre) ? (t = o + 1) : (r = o);
  }
  return t;
}
function yh(e) {
  (!fn.length || !fn.includes(e, Dl && e.allowRecurse ? Mr + 1 : Mr)) &&
    (e.id == null ? fn.push(e) : fn.splice(TS(e.id), 0, e), ly());
}
function ly() {
  !Dl && !dd && ((dd = !0), (mh = sy.then(cy)));
}
function CS(e) {
  const t = fn.indexOf(e);
  t > Mr && fn.splice(t, 1);
}
function hd(e) {
  ze(e) ? ds.push(...e) : (!Ni || !Ni.includes(e, e.allowRecurse ? xo + 1 : xo)) && ds.push(e),
    ly();
}
function mv(e, t, r = Dl ? Mr + 1 : 0) {
  for (; r < fn.length; r++) {
    const o = fn[r];
    if (o && o.pre) {
      if (e && o.id !== e.uid) continue;
      fn.splice(r, 1), r--, o();
    }
  }
}
function ay(e) {
  if (ds.length) {
    const t = [...new Set(ds)].sort((r, o) => zl(r) - zl(o));
    if (((ds.length = 0), Ni)) {
      Ni.push(...t);
      return;
    }
    for (Ni = t, xo = 0; xo < Ni.length; xo++) {
      const r = Ni[xo];
      r.active !== !1 && r();
    }
    (Ni = null), (xo = 0);
  }
}
const zl = (e) => (e.id == null ? 1 / 0 : e.id),
  ES = (e, t) => {
    const r = zl(e) - zl(t);
    if (r === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return r;
  };
function cy(e) {
  (dd = !1), (Dl = !0), fn.sort(ES);
  try {
    for (Mr = 0; Mr < fn.length; Mr++) {
      const t = fn[Mr];
      t && t.active !== !1 && Bi(t, null, 14);
    }
  } finally {
    (Mr = 0), (fn.length = 0), ay(), (Dl = !1), (mh = null), (fn.length || ds.length) && cy();
  }
}
function LS(e, t, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || _t;
  let s = r;
  const c = t.startsWith("update:"),
    f = c && t.slice(7);
  if (f && f in o) {
    const v = `${f === "modelValue" ? "model" : f}Modifiers`,
      { number: y, trim: b } = o[v] || _t;
    b && (s = r.map((x) => ($t(x) ? x.trim() : x))), y && (s = r.map(ad));
  }
  let d,
    h = o[(d = hc(t))] || o[(d = hc(br(t)))];
  !h && c && (h = o[(d = hc(Zi(t)))]), h && er(h, e, 6, s);
  const p = o[d + "Once"];
  if (p) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[d]) return;
    (e.emitted[d] = !0), er(p, e, 6, s);
  }
}
function uy(e, t, r = !1) {
  const o = t.emitsCache,
    s = o.get(e);
  if (s !== void 0) return s;
  const c = e.emits;
  let f = {},
    d = !1;
  if (!Xe(e)) {
    const h = (p) => {
      const v = uy(p, t, !0);
      v && ((d = !0), zt(f, v));
    };
    !r && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  return !c && !d
    ? (xt(e) && o.set(e, null), null)
    : (ze(c) ? c.forEach((h) => (f[h] = null)) : zt(f, c), xt(e) && o.set(e, f), f);
}
function hu(e, t) {
  return !e || !su(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ct(e, t[0].toLowerCase() + t.slice(1)) || ct(e, Zi(t)) || ct(e, t));
}
let Yt = null,
  pu = null;
function $c(e) {
  const t = Yt;
  return (Yt = e), (pu = (e && e.type.__scopeId) || null), t;
}
function gu(e) {
  pu = e;
}
function vu() {
  pu = null;
}
const fy = (e) => lt;
function lt(e, t = Yt, r) {
  if (!t || e._n) return e;
  const o = (...s) => {
    o._d && zc(-1);
    const c = $c(t);
    let f;
    try {
      f = e(...s);
    } finally {
      $c(c), o._d && zc(1);
    }
    return f;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function If(e) {
  const {
      type: t,
      vnode: r,
      proxy: o,
      withProxy: s,
      propsOptions: [c],
      slots: f,
      attrs: d,
      emit: h,
      render: p,
      renderCache: v,
      props: y,
      data: b,
      setupState: x,
      ctx: C,
      inheritAttrs: E,
    } = e,
    N = $c(e);
  let M, L;
  try {
    if (r.shapeFlag & 4) {
      const A = s || o,
        H = A;
      (M = gr(p.call(H, A, v, y, x, b, C))), (L = d);
    } else {
      const A = t;
      (M = gr(A.length > 1 ? A(y, { attrs: d, slots: f, emit: h }) : A(y, null))),
        (L = t.props ? d : MS(d));
    }
  } catch (A) {
    (Tl.length = 0), ia(A, e, 1), (M = Pe(dn));
  }
  let D = M;
  if (L && E !== !1) {
    const A = Object.keys(L),
      { shapeFlag: H } = D;
    A.length && H & 7 && (c && A.some(ih) && (L = NS(L, c)), (D = Vi(D, L, !1, !0)));
  }
  return (
    r.dirs && ((D = Vi(D, null, !1, !0)), (D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs)),
    r.transition && (D.transition = r.transition),
    (M = D),
    $c(N),
    M
  );
}
function AS(e, t = !0) {
  let r;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Fl(s)) {
      if (s.type !== dn || s.children === "v-if") {
        if (r) return;
        r = s;
      }
    } else return;
  }
  return r;
}
const MS = (e) => {
    let t;
    for (const r in e) (r === "class" || r === "style" || su(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  NS = (e, t) => {
    const r = {};
    for (const o in e) (!ih(o) || !(o.slice(9) in t)) && (r[o] = e[o]);
    return r;
  };
function $S(e, t, r) {
  const { props: o, children: s, component: c } = e,
    { props: f, children: d, patchFlag: h } = t,
    p = c.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && h >= 0) {
    if (h & 1024) return !0;
    if (h & 16) return o ? yv(o, f, p) : !!f;
    if (h & 8) {
      const v = t.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const b = v[y];
        if (f[b] !== o[b] && !hu(p, b)) return !0;
      }
    }
  } else
    return (s || d) && (!d || !d.$stable) ? !0 : o === f ? !1 : o ? (f ? yv(o, f, p) : !0) : !!f;
  return !1;
}
function yv(e, t, r) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < o.length; s++) {
    const c = o[s];
    if (t[c] !== e[c] && !hu(r, c)) return !0;
  }
  return !1;
}
function bh({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
      ((e = t.vnode).el = r), (t = t.parent);
    else break;
  }
}
const wh = "components",
  OS = "directives";
function Lo(e, t) {
  return xh(wh, e, !0, t) || e;
}
const dy = Symbol.for("v-ndc");
function bv(e) {
  return $t(e) ? xh(wh, e, !1) || e : e || dy;
}
function ci(e) {
  return xh(OS, e);
}
function xh(e, t, r = !0, o = !1) {
  const s = Yt || sn;
  if (s) {
    const c = s.type;
    if (e === wh) {
      const d = Rk(c, !1);
      if (d && (d === t || d === br(t) || d === cu(br(t)))) return c;
    }
    const f = wv(s[e] || c[e], t) || wv(s.appContext[e], t);
    return !f && o ? c : f;
  }
}
function wv(e, t) {
  return e && (e[t] || e[br(t)] || e[cu(br(t))]);
}
const PS = (e) => e.__isSuspense;
let pd = 0;
const RS = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, r, o, s, c, f, d, h, p) {
      if (e == null) zS(t, r, o, s, c, f, d, h, p);
      else {
        if (c && c.deps > 0 && !e.suspense.isInFallback) {
          (t.suspense = e.suspense), (t.suspense.vnode = t), (t.el = e.el);
          return;
        }
        IS(e, t, r, o, s, f, d, h, p);
      }
    },
    hydrate: FS,
    normalize: HS,
  },
  DS = RS;
function Il(e, t) {
  const r = e.props && e.props[t];
  Xe(r) && r();
}
function zS(e, t, r, o, s, c, f, d, h) {
  const {
      p,
      o: { createElement: v },
    } = h,
    y = v("div"),
    b = (e.suspense = hy(e, s, o, t, y, r, c, f, d, h));
  p(null, (b.pendingBranch = e.ssContent), y, null, o, b, c, f),
    b.deps > 0
      ? (Il(e, "onPending"),
        Il(e, "onFallback"),
        p(null, e.ssFallback, t, r, o, null, c, f),
        hs(b, e.ssFallback))
      : b.resolve(!1, !0);
}
function IS(e, t, r, o, s, c, f, d, { p: h, um: p, o: { createElement: v } }) {
  const y = (t.suspense = e.suspense);
  (y.vnode = t), (t.el = e.el);
  const b = t.ssContent,
    x = t.ssFallback,
    { activeBranch: C, pendingBranch: E, isInFallback: N, isHydrating: M } = y;
  if (E)
    (y.pendingBranch = b),
      Nr(b, E)
        ? (h(E, b, y.hiddenContainer, null, s, y, c, f, d),
          y.deps <= 0 ? y.resolve() : N && (M || (h(C, x, r, o, s, null, c, f, d), hs(y, x))))
        : ((y.pendingId = pd++),
          M ? ((y.isHydrating = !1), (y.activeBranch = E)) : p(E, s, y),
          (y.deps = 0),
          (y.effects.length = 0),
          (y.hiddenContainer = v("div")),
          N
            ? (h(null, b, y.hiddenContainer, null, s, y, c, f, d),
              y.deps <= 0 ? y.resolve() : (h(C, x, r, o, s, null, c, f, d), hs(y, x)))
            : C && Nr(b, C)
              ? (h(C, b, r, o, s, y, c, f, d), y.resolve(!0))
              : (h(null, b, y.hiddenContainer, null, s, y, c, f, d), y.deps <= 0 && y.resolve()));
  else if (C && Nr(b, C)) h(C, b, r, o, s, y, c, f, d), hs(y, b);
  else if (
    (Il(t, "onPending"),
    (y.pendingBranch = b),
    b.shapeFlag & 512 ? (y.pendingId = b.component.suspenseId) : (y.pendingId = pd++),
    h(null, b, y.hiddenContainer, null, s, y, c, f, d),
    y.deps <= 0)
  )
    y.resolve();
  else {
    const { timeout: L, pendingId: D } = y;
    L > 0
      ? setTimeout(() => {
          y.pendingId === D && y.fallback(x);
        }, L)
      : L === 0 && y.fallback(x);
  }
}
function hy(e, t, r, o, s, c, f, d, h, p, v = !1) {
  const {
    p: y,
    m: b,
    um: x,
    n: C,
    o: { parentNode: E, remove: N },
  } = p;
  let M;
  const L = BS(e);
  L && t && t.pendingBranch && ((M = t.pendingId), t.deps++);
  const D = e.props ? D0(e.props.timeout) : void 0,
    A = c,
    H = {
      vnode: e,
      parent: t,
      parentComponent: r,
      namespace: f,
      container: o,
      hiddenContainer: s,
      deps: 0,
      pendingId: pd++,
      timeout: typeof D == "number" ? D : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !v,
      isHydrating: v,
      isUnmounted: !1,
      effects: [],
      resolve(z = !1, J = !1) {
        const {
          vnode: ie,
          activeBranch: ne,
          pendingBranch: j,
          pendingId: te,
          effects: K,
          parentComponent: V,
          container: I,
        } = H;
        let k = !1;
        H.isHydrating
          ? (H.isHydrating = !1)
          : z ||
            ((k = ne && j.transition && j.transition.mode === "out-in"),
            k &&
              (ne.transition.afterLeave = () => {
                te === H.pendingId && (b(j, I, c === A ? C(ne) : c, 0), hd(K));
              }),
            ne && (E(ne.el) !== H.hiddenContainer && (c = C(ne)), x(ne, V, H, !0)),
            k || b(j, I, c, 0)),
          hs(H, j),
          (H.pendingBranch = null),
          (H.isInFallback = !1);
        let q = H.parent,
          W = !1;
        for (; q; ) {
          if (q.pendingBranch) {
            q.effects.push(...K), (W = !0);
            break;
          }
          q = q.parent;
        }
        !W && !k && hd(K),
          (H.effects = []),
          L &&
            t &&
            t.pendingBranch &&
            M === t.pendingId &&
            (t.deps--, t.deps === 0 && !J && t.resolve()),
          Il(ie, "onResolve");
      },
      fallback(z) {
        if (!H.pendingBranch) return;
        const { vnode: J, activeBranch: ie, parentComponent: ne, container: j, namespace: te } = H;
        Il(J, "onFallback");
        const K = C(ie),
          V = () => {
            H.isInFallback && (y(null, z, j, K, ne, null, te, d, h), hs(H, z));
          },
          I = z.transition && z.transition.mode === "out-in";
        I && (ie.transition.afterLeave = V), (H.isInFallback = !0), x(ie, ne, null, !0), I || V();
      },
      move(z, J, ie) {
        H.activeBranch && b(H.activeBranch, z, J, ie), (H.container = z);
      },
      next() {
        return H.activeBranch && C(H.activeBranch);
      },
      registerDep(z, J, ie) {
        const ne = !!H.pendingBranch;
        ne && H.deps++;
        const j = z.vnode.el;
        z.asyncDep
          .catch((te) => {
            ia(te, z, 0);
          })
          .then((te) => {
            if (z.isUnmounted || H.isUnmounted || H.pendingId !== z.suspenseId) return;
            z.asyncResolved = !0;
            const { vnode: K } = z;
            _d(z, te, !1), j && (K.el = j);
            const V = !j && z.subTree.el;
            J(z, K, E(j || z.subTree.el), j ? null : C(z.subTree), H, f, ie),
              V && N(V),
              bh(z, K.el),
              ne && --H.deps === 0 && H.resolve();
          });
      },
      unmount(z, J) {
        (H.isUnmounted = !0),
          H.activeBranch && x(H.activeBranch, r, z, J),
          H.pendingBranch && x(H.pendingBranch, r, z, J);
      },
    };
  return H;
}
function FS(e, t, r, o, s, c, f, d, h) {
  const p = (t.suspense = hy(
      t,
      o,
      r,
      e.parentNode,
      document.createElement("div"),
      null,
      s,
      c,
      f,
      d,
      !0,
    )),
    v = h(e, (p.pendingBranch = t.ssContent), r, p, c, f);
  return p.deps === 0 && p.resolve(!1, !0), v;
}
function HS(e) {
  const { shapeFlag: t, children: r } = e,
    o = t & 32;
  (e.ssContent = xv(o ? r.default : r)), (e.ssFallback = o ? xv(r.fallback) : Pe(dn));
}
function xv(e) {
  let t;
  if (Xe(e)) {
    const r = ws && e._c;
    r && ((e._d = !1), le()), (e = e()), r && ((e._d = !0), (t = Zn), Py());
  }
  return (
    ze(e) && (e = AS(e)),
    (e = gr(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)),
    e
  );
}
function qS(e, t) {
  t && t.pendingBranch ? (ze(e) ? t.effects.push(...e) : t.effects.push(e)) : hd(e);
}
function hs(e, t) {
  e.activeBranch = t;
  const { vnode: r, parentComponent: o } = e;
  let s = t.el;
  for (; !s && t.component; ) (t = t.component.subTree), (s = t.el);
  (r.el = s), o && o.subTree === r && ((o.vnode.el = s), bh(o, s));
}
function BS(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
function mu(e, t, r = sn, o = !1) {
  if (r) {
    const s = r[e] || (r[e] = []),
      c =
        t.__weh ||
        (t.__weh = (...f) => {
          Ji();
          const d = sa(r),
            h = er(t, r, e, f);
          return d(), Qi(), h;
        });
    return o ? s.unshift(c) : s.push(c), c;
  }
}
const ui =
    (e) =>
    (t, r = sn) => {
      (!_u || e === "sp") && mu(e, (...o) => t(...o), r);
    },
  WS = ui("bm"),
  Ms = ui("m"),
  US = ui("bu"),
  VS = ui("u"),
  py = ui("bum"),
  yu = ui("um"),
  jS = ui("sp"),
  GS = ui("rtg"),
  KS = ui("rtc");
function XS(e, t = sn) {
  mu("ec", e, t);
}
function kt(e, t) {
  if (Yt === null) return e;
  const r = Su(Yt),
    o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [c, f, d, h = _t] = t[s];
    c &&
      (Xe(c) && (c = { mounted: c, updated: c }),
      c.deep && zi(f),
      o.push({ dir: c, instance: r, value: f, oldValue: void 0, arg: d, modifiers: h }));
  }
  return e;
}
function go(e, t, r, o) {
  const s = e.dirs,
    c = t && t.dirs;
  for (let f = 0; f < s.length; f++) {
    const d = s[f];
    c && (d.oldValue = c[f].value);
    let h = d.dir[o];
    h && (Ji(), er(h, r, 8, [e.el, d, e, t]), Qi());
  }
}
function si(e, t, r, o) {
  let s;
  const c = r;
  if (ze(e) || $t(e)) {
    s = new Array(e.length);
    for (let f = 0, d = e.length; f < d; f++) s[f] = t(e[f], f, void 0, c);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let f = 0; f < e; f++) s[f] = t(f + 1, f, void 0, c);
  } else if (xt(e))
    if (e[Symbol.iterator]) s = Array.from(e, (f, d) => t(f, d, void 0, c));
    else {
      const f = Object.keys(e);
      s = new Array(f.length);
      for (let d = 0, h = f.length; d < h; d++) {
        const p = f[d];
        s[d] = t(e[p], p, d, c);
      }
    }
  else s = [];
  return s;
}
function YS(e, t) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (ze(o)) for (let s = 0; s < o.length; s++) e[o[s].name] = o[s].fn;
    else
      o &&
        (e[o.name] = o.key
          ? (...s) => {
              const c = o.fn(...s);
              return c && (c.key = o.key), c;
            }
          : o.fn);
  }
  return e;
}
/*! #__NO_SIDE_EFFECTS__ */ function gt(e, t) {
  return Xe(e) ? zt({ name: e.name }, t, { setup: e }) : e;
}
const _l = (e) => !!e.type.__asyncLoader;
function hn(e, t, r = {}, o, s) {
  if (Yt.isCE || (Yt.parent && _l(Yt.parent) && Yt.parent.isCE))
    return t !== "default" && (r.name = t), Pe("slot", r, o && o());
  let c = e[t];
  c && c._c && (c._d = !1), le();
  const f = c && gy(c(r)),
    d = ot(
      ht,
      { key: r.key || (f && f.key) || `_${t}` },
      f || (o ? o() : []),
      f && e._ === 1 ? 64 : -2,
    );
  return d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), c && c._c && (c._d = !0), d;
}
function gy(e) {
  return e.some((t) => (Fl(t) ? !(t.type === dn || (t.type === ht && !gy(t.children))) : !0))
    ? e
    : null;
}
function ZS(e, t) {
  const r = {};
  for (const o in e) r[hc(o)] = e[o];
  return r;
}
const gd = (e) => (e ? (Iy(e) ? Su(e) : gd(e.parent)) : null),
  Sl = zt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gd(e.parent),
    $root: (e) => gd(e.root),
    $emit: (e) => e.emit,
    $options: (e) => _h(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), yh(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = ln.bind(e.proxy)),
    $watch: (e) => wk.bind(e),
  }),
  Ff = (e, t) => e !== _t && !e.__isScriptSetup && ct(e, t),
  JS = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: r,
        setupState: o,
        data: s,
        props: c,
        accessCache: f,
        type: d,
        appContext: h,
      } = e;
      let p;
      if (t[0] !== "$") {
        const x = f[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return o[t];
            case 2:
              return s[t];
            case 4:
              return r[t];
            case 3:
              return c[t];
          }
        else {
          if (Ff(o, t)) return (f[t] = 1), o[t];
          if (s !== _t && ct(s, t)) return (f[t] = 2), s[t];
          if ((p = e.propsOptions[0]) && ct(p, t)) return (f[t] = 3), c[t];
          if (r !== _t && ct(r, t)) return (f[t] = 4), r[t];
          vd && (f[t] = 0);
        }
      }
      const v = Sl[t];
      let y, b;
      if (v) return t === "$attrs" && Rn(e.attrs, "get", ""), v(e);
      if ((y = d.__cssModules) && (y = y[t])) return y;
      if (r !== _t && ct(r, t)) return (f[t] = 4), r[t];
      if (((b = h.config.globalProperties), ct(b, t))) return b[t];
    },
    set({ _: e }, t, r) {
      const { data: o, setupState: s, ctx: c } = e;
      return Ff(s, t)
        ? ((s[t] = r), !0)
        : o !== _t && ct(o, t)
          ? ((o[t] = r), !0)
          : ct(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((c[t] = r), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: r, ctx: o, appContext: s, propsOptions: c } },
      f,
    ) {
      let d;
      return (
        !!r[f] ||
        (e !== _t && ct(e, f)) ||
        Ff(t, f) ||
        ((d = c[0]) && ct(d, f)) ||
        ct(o, f) ||
        ct(Sl, f) ||
        ct(s.config.globalProperties, f)
      );
    },
    defineProperty(e, t, r) {
      return (
        r.get != null ? (e._.accessCache[t] = 0) : ct(r, "value") && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      );
    },
  };
function QS() {
  return ek().attrs;
}
function ek() {
  const e = oa();
  return e.setupContext || (e.setupContext = Hy(e));
}
function Oc(e) {
  return ze(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
function Pc(e, t) {
  return !e || !t ? e || t : ze(e) && ze(t) ? e.concat(t) : zt({}, Oc(e), Oc(t));
}
let vd = !0;
function tk(e) {
  const t = _h(e),
    r = e.proxy,
    o = e.ctx;
  (vd = !1), t.beforeCreate && _v(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: c,
    methods: f,
    watch: d,
    provide: h,
    inject: p,
    created: v,
    beforeMount: y,
    mounted: b,
    beforeUpdate: x,
    updated: C,
    activated: E,
    deactivated: N,
    beforeDestroy: M,
    beforeUnmount: L,
    destroyed: D,
    unmounted: A,
    render: H,
    renderTracked: z,
    renderTriggered: J,
    errorCaptured: ie,
    serverPrefetch: ne,
    expose: j,
    inheritAttrs: te,
    components: K,
    directives: V,
    filters: I,
  } = t;
  if ((p && nk(p, o, null), f))
    for (const W in f) {
      const re = f[W];
      Xe(re) && (o[W] = re.bind(r));
    }
  if (s) {
    const W = s.call(r, r);
    xt(W) && (e.data = Qn(W));
  }
  if (((vd = !0), c))
    for (const W in c) {
      const re = c[W],
        me = Xe(re) ? re.bind(r, r) : Xe(re.get) ? re.get.bind(r, r) : Yn,
        Me = !Xe(re) && Xe(re.set) ? re.set.bind(r) : Yn,
        Be = $e({ get: me, set: Me });
      Object.defineProperty(o, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Ve) => (Be.value = Ve),
      });
    }
  if (d) for (const W in d) vy(d[W], o, r, W);
  if (h) {
    const W = Xe(h) ? h.call(r) : h;
    Reflect.ownKeys(W).forEach((re) => {
      gc(re, W[re]);
    });
  }
  v && _v(v, e, "c");
  function q(W, re) {
    ze(re) ? re.forEach((me) => W(me.bind(r))) : re && W(re.bind(r));
  }
  if (
    (q(WS, y),
    q(Ms, b),
    q(US, x),
    q(VS, C),
    q(xk, E),
    q(_k, N),
    q(XS, ie),
    q(KS, z),
    q(GS, J),
    q(py, L),
    q(yu, A),
    q(jS, ne),
    ze(j))
  )
    if (j.length) {
      const W = e.exposed || (e.exposed = {});
      j.forEach((re) => {
        Object.defineProperty(W, re, { get: () => r[re], set: (me) => (r[re] = me) });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Yn && (e.render = H),
    te != null && (e.inheritAttrs = te),
    K && (e.components = K),
    V && (e.directives = V);
}
function nk(e, t, r = Yn) {
  ze(e) && (e = md(e));
  for (const o in e) {
    const s = e[o];
    let c;
    xt(s)
      ? "default" in s
        ? (c = ri(s.from || o, s.default, !0))
        : (c = ri(s.from || o))
      : (c = ri(s)),
      It(c)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => c.value,
            set: (f) => (c.value = f),
          })
        : (t[o] = c);
  }
}
function _v(e, t, r) {
  er(ze(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function vy(e, t, r, o) {
  const s = o.includes(".") ? Ly(r, o) : () => r[o];
  if ($t(e)) {
    const c = t[e];
    Xe(c) && qt(s, c);
  } else if (Xe(e)) qt(s, e.bind(r));
  else if (xt(e))
    if (ze(e)) e.forEach((c) => vy(c, t, r, o));
    else {
      const c = Xe(e.handler) ? e.handler.bind(r) : t[e.handler];
      Xe(c) && qt(s, c, e);
    }
}
function _h(e) {
  const t = e.type,
    { mixins: r, extends: o } = t,
    {
      mixins: s,
      optionsCache: c,
      config: { optionMergeStrategies: f },
    } = e.appContext,
    d = c.get(t);
  let h;
  return (
    d
      ? (h = d)
      : !s.length && !r && !o
        ? (h = t)
        : ((h = {}), s.length && s.forEach((p) => Rc(h, p, f, !0)), Rc(h, t, f)),
    xt(t) && c.set(t, h),
    h
  );
}
function Rc(e, t, r, o = !1) {
  const { mixins: s, extends: c } = t;
  c && Rc(e, c, r, !0), s && s.forEach((f) => Rc(e, f, r, !0));
  for (const f in t)
    if (!(o && f === "expose")) {
      const d = rk[f] || (r && r[f]);
      e[f] = d ? d(e[f], t[f]) : t[f];
    }
  return e;
}
const rk = {
  data: Sv,
  props: kv,
  emits: kv,
  methods: gl,
  computed: gl,
  beforeCreate: xn,
  created: xn,
  beforeMount: xn,
  mounted: xn,
  beforeUpdate: xn,
  updated: xn,
  beforeDestroy: xn,
  beforeUnmount: xn,
  destroyed: xn,
  unmounted: xn,
  activated: xn,
  deactivated: xn,
  errorCaptured: xn,
  serverPrefetch: xn,
  components: gl,
  directives: gl,
  watch: ok,
  provide: Sv,
  inject: ik,
};
function Sv(e, t) {
  return t
    ? e
      ? function () {
          return zt(Xe(e) ? e.call(this, this) : e, Xe(t) ? t.call(this, this) : t);
        }
      : t
    : e;
}
function ik(e, t) {
  return gl(md(e), md(t));
}
function md(e) {
  if (ze(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function xn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gl(e, t) {
  return e ? zt(Object.create(null), e, t) : t;
}
function kv(e, t) {
  return e
    ? ze(e) && ze(t)
      ? [...new Set([...e, ...t])]
      : zt(Object.create(null), Oc(e), Oc(t ?? {}))
    : t;
}
function ok(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = zt(Object.create(null), e);
  for (const o in t) r[o] = xn(e[o], t[o]);
  return r;
}
function my() {
  return {
    app: null,
    config: {
      isNativeTag: R_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let sk = 0;
function lk(e, t) {
  return function (o, s = null) {
    Xe(o) || (o = zt({}, o)), s != null && !xt(s) && (s = null);
    const c = my(),
      f = new WeakSet();
    let d = !1;
    const h = (c.app = {
      _uid: sk++,
      _component: o,
      _props: s,
      _container: null,
      _context: c,
      _instance: null,
      version: zk,
      get config() {
        return c.config;
      },
      set config(p) {},
      use(p, ...v) {
        return (
          f.has(p) ||
            (p && Xe(p.install) ? (f.add(p), p.install(h, ...v)) : Xe(p) && (f.add(p), p(h, ...v))),
          h
        );
      },
      mixin(p) {
        return c.mixins.includes(p) || c.mixins.push(p), h;
      },
      component(p, v) {
        return v ? ((c.components[p] = v), h) : c.components[p];
      },
      directive(p, v) {
        return v ? ((c.directives[p] = v), h) : c.directives[p];
      },
      mount(p, v, y) {
        if (!d) {
          const b = Pe(o, s);
          return (
            (b.appContext = c),
            y === !0 ? (y = "svg") : y === !1 && (y = void 0),
            v && t ? t(b, p) : e(b, p, y),
            (d = !0),
            (h._container = p),
            (p.__vue_app__ = h),
            Su(b.component)
          );
        }
      },
      unmount() {
        d && (e(null, h._container), delete h._container.__vue_app__);
      },
      provide(p, v) {
        return (c.provides[p] = v), h;
      },
      runWithContext(p) {
        const v = kl;
        kl = h;
        try {
          return p();
        } finally {
          kl = v;
        }
      },
    });
    return h;
  };
}
let kl = null;
function gc(e, t) {
  if (sn) {
    let r = sn.provides;
    const o = sn.parent && sn.parent.provides;
    o === r && (r = sn.provides = Object.create(o)), (r[e] = t);
  }
}
function ri(e, t, r = !1) {
  const o = sn || Yt;
  if (o || kl) {
    const s = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : kl._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return r && Xe(t) ? t.call(o && o.proxy) : t;
  }
}
const yy = {},
  by = () => Object.create(yy),
  wy = (e) => Object.getPrototypeOf(e) === yy;
function ak(e, t, r, o = !1) {
  const s = {},
    c = by();
  (e.propsDefaults = Object.create(null)), xy(e, t, s, c);
  for (const f in e.propsOptions[0]) f in s || (s[f] = void 0);
  r ? (e.props = o ? s : dh(s)) : e.type.props ? (e.props = s) : (e.props = c), (e.attrs = c);
}
function ck(e, t, r, o) {
  const {
      props: s,
      attrs: c,
      vnode: { patchFlag: f },
    } = e,
    d = pt(s),
    [h] = e.propsOptions;
  let p = !1;
  if ((o || f > 0) && !(f & 16)) {
    if (f & 8) {
      const v = e.vnode.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        let b = v[y];
        if (hu(e.emitsOptions, b)) continue;
        const x = t[b];
        if (h)
          if (ct(c, b)) x !== c[b] && ((c[b] = x), (p = !0));
          else {
            const C = br(b);
            s[C] = yd(h, d, C, x, e, !1);
          }
        else x !== c[b] && ((c[b] = x), (p = !0));
      }
    }
  } else {
    xy(e, t, s, c) && (p = !0);
    let v;
    for (const y in d)
      (!t || (!ct(t, y) && ((v = Zi(y)) === y || !ct(t, v)))) &&
        (h
          ? r && (r[y] !== void 0 || r[v] !== void 0) && (s[y] = yd(h, d, y, void 0, e, !0))
          : delete s[y]);
    if (c !== d) for (const y in c) (!t || !ct(t, y)) && (delete c[y], (p = !0));
  }
  p && ni(e.attrs, "set", "");
}
function xy(e, t, r, o) {
  const [s, c] = e.propsOptions;
  let f = !1,
    d;
  if (t)
    for (let h in t) {
      if (bl(h)) continue;
      const p = t[h];
      let v;
      s && ct(s, (v = br(h)))
        ? !c || !c.includes(v)
          ? (r[v] = p)
          : ((d || (d = {}))[v] = p)
        : hu(e.emitsOptions, h) || ((!(h in o) || p !== o[h]) && ((o[h] = p), (f = !0)));
    }
  if (c) {
    const h = pt(r),
      p = d || _t;
    for (let v = 0; v < c.length; v++) {
      const y = c[v];
      r[y] = yd(s, h, y, p[y], e, !ct(p, y));
    }
  }
  return f;
}
function yd(e, t, r, o, s, c) {
  const f = e[r];
  if (f != null) {
    const d = ct(f, "default");
    if (d && o === void 0) {
      const h = f.default;
      if (f.type !== Function && !f.skipFactory && Xe(h)) {
        const { propsDefaults: p } = s;
        if (r in p) o = p[r];
        else {
          const v = sa(s);
          (o = p[r] = h.call(null, t)), v();
        }
      } else o = h;
    }
    f[0] && (c && !d ? (o = !1) : f[1] && (o === "" || o === Zi(r)) && (o = !0));
  }
  return o;
}
function _y(e, t, r = !1) {
  const o = t.propsCache,
    s = o.get(e);
  if (s) return s;
  const c = e.props,
    f = {},
    d = [];
  let h = !1;
  if (!Xe(e)) {
    const v = (y) => {
      h = !0;
      const [b, x] = _y(y, t, !0);
      zt(f, b), x && d.push(...x);
    };
    !r && t.mixins.length && t.mixins.forEach(v),
      e.extends && v(e.extends),
      e.mixins && e.mixins.forEach(v);
  }
  if (!c && !h) return xt(e) && o.set(e, us), us;
  if (ze(c))
    for (let v = 0; v < c.length; v++) {
      const y = br(c[v]);
      Tv(y) && (f[y] = _t);
    }
  else if (c)
    for (const v in c) {
      const y = br(v);
      if (Tv(y)) {
        const b = c[v],
          x = (f[y] = ze(b) || Xe(b) ? { type: b } : zt({}, b));
        if (x) {
          const C = Lv(Boolean, x.type),
            E = Lv(String, x.type);
          (x[0] = C > -1), (x[1] = E < 0 || C < E), (C > -1 || ct(x, "default")) && d.push(y);
        }
      }
    }
  const p = [f, d];
  return xt(e) && o.set(e, p), p;
}
function Tv(e) {
  return e[0] !== "$" && !bl(e);
}
function Cv(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Ev(e, t) {
  return Cv(e) === Cv(t);
}
function Lv(e, t) {
  return ze(t) ? t.findIndex((r) => Ev(r, e)) : Xe(t) && Ev(t, e) ? 0 : -1;
}
const Sy = (e) => e[0] === "_" || e === "$stable",
  Sh = (e) => (ze(e) ? e.map(gr) : [gr(e)]),
  uk = (e, t, r) => {
    if (t._n) return t;
    const o = lt((...s) => Sh(t(...s)), r);
    return (o._c = !1), o;
  },
  ky = (e, t, r) => {
    const o = e._ctx;
    for (const s in e) {
      if (Sy(s)) continue;
      const c = e[s];
      if (Xe(c)) t[s] = uk(s, c, o);
      else if (c != null) {
        const f = Sh(c);
        t[s] = () => f;
      }
    }
  },
  Ty = (e, t) => {
    const r = Sh(t);
    e.slots.default = () => r;
  },
  fk = (e, t) => {
    const r = (e.slots = by());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (zt(r, t), R0(r, "_", o, !0)) : ky(t, r);
    } else t && Ty(e, t);
  },
  dk = (e, t, r) => {
    const { vnode: o, slots: s } = e;
    let c = !0,
      f = _t;
    if (o.shapeFlag & 32) {
      const d = t._;
      d
        ? r && d === 1
          ? (c = !1)
          : (zt(s, t), !r && d === 1 && delete s._)
        : ((c = !t.$stable), ky(t, s)),
        (f = t);
    } else t && (Ty(e, t), (f = { default: 1 }));
    if (c) for (const d in s) !Sy(d) && f[d] == null && delete s[d];
  };
function bd(e, t, r, o, s = !1) {
  if (ze(e)) {
    e.forEach((b, x) => bd(b, t && (ze(t) ? t[x] : t), r, o, s));
    return;
  }
  if (_l(o) && !s) return;
  const c = o.shapeFlag & 4 ? Su(o.component) : o.el,
    f = s ? null : c,
    { i: d, r: h } = e,
    p = t && t.r,
    v = d.refs === _t ? (d.refs = {}) : d.refs,
    y = d.setupState;
  if (
    (p != null &&
      p !== h &&
      ($t(p) ? ((v[p] = null), ct(y, p) && (y[p] = null)) : It(p) && (p.value = null)),
    Xe(h))
  )
    Bi(h, d, 12, [f, v]);
  else {
    const b = $t(h),
      x = It(h);
    if (b || x) {
      const C = () => {
        if (e.f) {
          const E = b ? (ct(y, h) ? y[h] : v[h]) : h.value;
          s
            ? ze(E) && oh(E, c)
            : ze(E)
              ? E.includes(c) || E.push(c)
              : b
                ? ((v[h] = [c]), ct(y, h) && (y[h] = v[h]))
                : ((h.value = [c]), e.k && (v[e.k] = h.value));
        } else b ? ((v[h] = f), ct(y, h) && (y[h] = f)) : x && ((h.value = f), e.k && (v[e.k] = f));
      };
      f ? ((C.id = -1), Mn(C, r)) : C();
    }
  }
}
const Mn = qS;
function hk(e) {
  return pk(e);
}
function pk(e, t) {
  const r = z0();
  r.__VUE__ = !0;
  const {
      insert: o,
      remove: s,
      patchProp: c,
      createElement: f,
      createText: d,
      createComment: h,
      setText: p,
      setElementText: v,
      parentNode: y,
      nextSibling: b,
      setScopeId: x = Yn,
      insertStaticContent: C,
    } = e,
    E = (
      O,
      F,
      Z,
      ce = null,
      se = null,
      ve = null,
      Se = void 0,
      ue = null,
      ye = !!F.dynamicChildren,
    ) => {
      if (O === F) return;
      O && !Nr(O, F) && ((ce = X(O)), Ve(O, se, ve, !0), (O = null)),
        F.patchFlag === -2 && ((ye = !1), (F.dynamicChildren = null));
      const { type: he, ref: Ae, shapeFlag: Ie } = F;
      switch (he) {
        case xu:
          N(O, F, Z, ce);
          break;
        case dn:
          M(O, F, Z, ce);
          break;
        case Bf:
          O == null && L(F, Z, ce, Se);
          break;
        case ht:
          K(O, F, Z, ce, se, ve, Se, ue, ye);
          break;
        default:
          Ie & 1
            ? H(O, F, Z, ce, se, ve, Se, ue, ye)
            : Ie & 6
              ? V(O, F, Z, ce, se, ve, Se, ue, ye)
              : (Ie & 64 || Ie & 128) && he.process(O, F, Z, ce, se, ve, Se, ue, ye, Ne);
      }
      Ae != null && se && bd(Ae, O && O.ref, ve, F || O, !F);
    },
    N = (O, F, Z, ce) => {
      if (O == null) o((F.el = d(F.children)), Z, ce);
      else {
        const se = (F.el = O.el);
        F.children !== O.children && p(se, F.children);
      }
    },
    M = (O, F, Z, ce) => {
      O == null ? o((F.el = h(F.children || "")), Z, ce) : (F.el = O.el);
    },
    L = (O, F, Z, ce) => {
      [O.el, O.anchor] = C(O.children, F, Z, ce, O.el, O.anchor);
    },
    D = ({ el: O, anchor: F }, Z, ce) => {
      let se;
      for (; O && O !== F; ) (se = b(O)), o(O, Z, ce), (O = se);
      o(F, Z, ce);
    },
    A = ({ el: O, anchor: F }) => {
      let Z;
      for (; O && O !== F; ) (Z = b(O)), s(O), (O = Z);
      s(F);
    },
    H = (O, F, Z, ce, se, ve, Se, ue, ye) => {
      F.type === "svg" ? (Se = "svg") : F.type === "math" && (Se = "mathml"),
        O == null ? z(F, Z, ce, se, ve, Se, ue, ye) : ne(O, F, se, ve, Se, ue, ye);
    },
    z = (O, F, Z, ce, se, ve, Se, ue) => {
      let ye, he;
      const { props: Ae, shapeFlag: Ie, transition: De, dirs: We } = O;
      if (
        ((ye = O.el = f(O.type, ve, Ae && Ae.is, Ae)),
        Ie & 8 ? v(ye, O.children) : Ie & 16 && ie(O.children, ye, null, ce, se, Hf(O, ve), Se, ue),
        We && go(O, null, ce, "created"),
        J(ye, O, O.scopeId, Se, ce),
        Ae)
      ) {
        for (const vt in Ae)
          vt !== "value" && !bl(vt) && c(ye, vt, null, Ae[vt], ve, O.children, ce, se, Te);
        "value" in Ae && c(ye, "value", null, Ae.value, ve),
          (he = Ae.onVnodeBeforeMount) && Ar(he, ce, O);
      }
      We && go(O, null, ce, "beforeMount");
      const Ge = gk(se, De);
      Ge && De.beforeEnter(ye),
        o(ye, F, Z),
        ((he = Ae && Ae.onVnodeMounted) || Ge || We) &&
          Mn(() => {
            he && Ar(he, ce, O), Ge && De.enter(ye), We && go(O, null, ce, "mounted");
          }, se);
    },
    J = (O, F, Z, ce, se) => {
      if ((Z && x(O, Z), ce)) for (let ve = 0; ve < ce.length; ve++) x(O, ce[ve]);
      if (se) {
        let ve = se.subTree;
        if (F === ve) {
          const Se = se.vnode;
          J(O, Se, Se.scopeId, Se.slotScopeIds, se.parent);
        }
      }
    },
    ie = (O, F, Z, ce, se, ve, Se, ue, ye = 0) => {
      for (let he = ye; he < O.length; he++) {
        const Ae = (O[he] = ue ? Oi(O[he]) : gr(O[he]));
        E(null, Ae, F, Z, ce, se, ve, Se, ue);
      }
    },
    ne = (O, F, Z, ce, se, ve, Se) => {
      const ue = (F.el = O.el);
      let { patchFlag: ye, dynamicChildren: he, dirs: Ae } = F;
      ye |= O.patchFlag & 16;
      const Ie = O.props || _t,
        De = F.props || _t;
      let We;
      if (
        (Z && vo(Z, !1),
        (We = De.onVnodeBeforeUpdate) && Ar(We, Z, F, O),
        Ae && go(F, O, Z, "beforeUpdate"),
        Z && vo(Z, !0),
        he
          ? j(O.dynamicChildren, he, ue, Z, ce, Hf(F, se), ve)
          : Se || re(O, F, ue, null, Z, ce, Hf(F, se), ve, !1),
        ye > 0)
      ) {
        if (ye & 16) te(ue, F, Ie, De, Z, ce, se);
        else if (
          (ye & 2 && Ie.class !== De.class && c(ue, "class", null, De.class, se),
          ye & 4 && c(ue, "style", Ie.style, De.style, se),
          ye & 8)
        ) {
          const Ge = F.dynamicProps;
          for (let vt = 0; vt < Ge.length; vt++) {
            const et = Ge[vt],
              tt = Ie[et],
              Ft = De[et];
            (Ft !== tt || et === "value") && c(ue, et, tt, Ft, se, O.children, Z, ce, Te);
          }
        }
        ye & 1 && O.children !== F.children && v(ue, F.children);
      } else !Se && he == null && te(ue, F, Ie, De, Z, ce, se);
      ((We = De.onVnodeUpdated) || Ae) &&
        Mn(() => {
          We && Ar(We, Z, F, O), Ae && go(F, O, Z, "updated");
        }, ce);
    },
    j = (O, F, Z, ce, se, ve, Se) => {
      for (let ue = 0; ue < F.length; ue++) {
        const ye = O[ue],
          he = F[ue],
          Ae = ye.el && (ye.type === ht || !Nr(ye, he) || ye.shapeFlag & 70) ? y(ye.el) : Z;
        E(ye, he, Ae, null, ce, se, ve, Se, !0);
      }
    },
    te = (O, F, Z, ce, se, ve, Se) => {
      if (Z !== ce) {
        if (Z !== _t)
          for (const ue in Z)
            !bl(ue) && !(ue in ce) && c(O, ue, Z[ue], null, Se, F.children, se, ve, Te);
        for (const ue in ce) {
          if (bl(ue)) continue;
          const ye = ce[ue],
            he = Z[ue];
          ye !== he && ue !== "value" && c(O, ue, he, ye, Se, F.children, se, ve, Te);
        }
        "value" in ce && c(O, "value", Z.value, ce.value, Se);
      }
    },
    K = (O, F, Z, ce, se, ve, Se, ue, ye) => {
      const he = (F.el = O ? O.el : d("")),
        Ae = (F.anchor = O ? O.anchor : d(""));
      let { patchFlag: Ie, dynamicChildren: De, slotScopeIds: We } = F;
      We && (ue = ue ? ue.concat(We) : We),
        O == null
          ? (o(he, Z, ce), o(Ae, Z, ce), ie(F.children || [], Z, Ae, se, ve, Se, ue, ye))
          : Ie > 0 && Ie & 64 && De && O.dynamicChildren
            ? (j(O.dynamicChildren, De, Z, se, ve, Se, ue),
              (F.key != null || (se && F === se.subTree)) && Cy(O, F, !0))
            : re(O, F, Z, Ae, se, ve, Se, ue, ye);
    },
    V = (O, F, Z, ce, se, ve, Se, ue, ye) => {
      (F.slotScopeIds = ue),
        O == null
          ? F.shapeFlag & 512
            ? se.ctx.activate(F, Z, ce, Se, ye)
            : I(F, Z, ce, se, ve, Se, ye)
          : k(O, F, ye);
    },
    I = (O, F, Z, ce, se, ve, Se) => {
      const ue = (O.component = Nk(O, ce, se));
      if ((wu(O) && (ue.ctx.renderer = Ne), $k(ue), ue.asyncDep)) {
        if ((se && se.registerDep(ue, q, Se), !O.el)) {
          const ye = (ue.subTree = Pe(dn));
          M(null, ye, F, Z);
        }
      } else q(ue, O, F, Z, se, ve, Se);
    },
    k = (O, F, Z) => {
      const ce = (F.component = O.component);
      if ($S(O, F, Z))
        if (ce.asyncDep && !ce.asyncResolved) {
          W(ce, F, Z);
          return;
        } else (ce.next = F), CS(ce.update), (ce.effect.dirty = !0), ce.update();
      else (F.el = O.el), (ce.vnode = F);
    },
    q = (O, F, Z, ce, se, ve, Se) => {
      const ue = () => {
          if (O.isMounted) {
            let { next: Ae, bu: Ie, u: De, parent: We, vnode: Ge } = O;
            {
              const Jt = Ey(O);
              if (Jt) {
                Ae && ((Ae.el = Ge.el), W(O, Ae, Se)),
                  Jt.asyncDep.then(() => {
                    O.isUnmounted || ue();
                  });
                return;
              }
            }
            let vt = Ae,
              et;
            vo(O, !1),
              Ae ? ((Ae.el = Ge.el), W(O, Ae, Se)) : (Ae = Ge),
              Ie && pc(Ie),
              (et = Ae.props && Ae.props.onVnodeBeforeUpdate) && Ar(et, We, Ae, Ge),
              vo(O, !0);
            const tt = If(O),
              Ft = O.subTree;
            (O.subTree = tt),
              E(Ft, tt, y(Ft.el), X(Ft), O, se, ve),
              (Ae.el = tt.el),
              vt === null && bh(O, tt.el),
              De && Mn(De, se),
              (et = Ae.props && Ae.props.onVnodeUpdated) && Mn(() => Ar(et, We, Ae, Ge), se);
          } else {
            let Ae;
            const { el: Ie, props: De } = F,
              { bm: We, m: Ge, parent: vt } = O,
              et = _l(F);
            if (
              (vo(O, !1),
              We && pc(We),
              !et && (Ae = De && De.onVnodeBeforeMount) && Ar(Ae, vt, F),
              vo(O, !0),
              Ie && Ye)
            ) {
              const tt = () => {
                (O.subTree = If(O)), Ye(Ie, O.subTree, O, se, null);
              };
              et ? F.type.__asyncLoader().then(() => !O.isUnmounted && tt()) : tt();
            } else {
              const tt = (O.subTree = If(O));
              E(null, tt, Z, ce, O, se, ve), (F.el = tt.el);
            }
            if ((Ge && Mn(Ge, se), !et && (Ae = De && De.onVnodeMounted))) {
              const tt = F;
              Mn(() => Ar(Ae, vt, tt), se);
            }
            (F.shapeFlag & 256 || (vt && _l(vt.vnode) && vt.vnode.shapeFlag & 256)) &&
              O.a &&
              Mn(O.a, se),
              (O.isMounted = !0),
              (F = Z = ce = null);
          }
        },
        ye = (O.effect = new lh(ue, Yn, () => yh(he), O.scope)),
        he = (O.update = () => {
          ye.dirty && ye.run();
        });
      (he.id = O.uid), vo(O, !0), he();
    },
    W = (O, F, Z) => {
      F.component = O;
      const ce = O.vnode.props;
      (O.vnode = F),
        (O.next = null),
        ck(O, F.props, ce, Z),
        dk(O, F.children, Z),
        Ji(),
        mv(O),
        Qi();
    },
    re = (O, F, Z, ce, se, ve, Se, ue, ye = !1) => {
      const he = O && O.children,
        Ae = O ? O.shapeFlag : 0,
        Ie = F.children,
        { patchFlag: De, shapeFlag: We } = F;
      if (De > 0) {
        if (De & 128) {
          Me(he, Ie, Z, ce, se, ve, Se, ue, ye);
          return;
        } else if (De & 256) {
          me(he, Ie, Z, ce, se, ve, Se, ue, ye);
          return;
        }
      }
      We & 8
        ? (Ae & 16 && Te(he, se, ve), Ie !== he && v(Z, Ie))
        : Ae & 16
          ? We & 16
            ? Me(he, Ie, Z, ce, se, ve, Se, ue, ye)
            : Te(he, se, ve, !0)
          : (Ae & 8 && v(Z, ""), We & 16 && ie(Ie, Z, ce, se, ve, Se, ue, ye));
    },
    me = (O, F, Z, ce, se, ve, Se, ue, ye) => {
      (O = O || us), (F = F || us);
      const he = O.length,
        Ae = F.length,
        Ie = Math.min(he, Ae);
      let De;
      for (De = 0; De < Ie; De++) {
        const We = (F[De] = ye ? Oi(F[De]) : gr(F[De]));
        E(O[De], We, Z, null, se, ve, Se, ue, ye);
      }
      he > Ae ? Te(O, se, ve, !0, !1, Ie) : ie(F, Z, ce, se, ve, Se, ue, ye, Ie);
    },
    Me = (O, F, Z, ce, se, ve, Se, ue, ye) => {
      let he = 0;
      const Ae = F.length;
      let Ie = O.length - 1,
        De = Ae - 1;
      for (; he <= Ie && he <= De; ) {
        const We = O[he],
          Ge = (F[he] = ye ? Oi(F[he]) : gr(F[he]));
        if (Nr(We, Ge)) E(We, Ge, Z, null, se, ve, Se, ue, ye);
        else break;
        he++;
      }
      for (; he <= Ie && he <= De; ) {
        const We = O[Ie],
          Ge = (F[De] = ye ? Oi(F[De]) : gr(F[De]));
        if (Nr(We, Ge)) E(We, Ge, Z, null, se, ve, Se, ue, ye);
        else break;
        Ie--, De--;
      }
      if (he > Ie) {
        if (he <= De) {
          const We = De + 1,
            Ge = We < Ae ? F[We].el : ce;
          for (; he <= De; )
            E(null, (F[he] = ye ? Oi(F[he]) : gr(F[he])), Z, Ge, se, ve, Se, ue, ye), he++;
        }
      } else if (he > De) for (; he <= Ie; ) Ve(O[he], se, ve, !0), he++;
      else {
        const We = he,
          Ge = he,
          vt = new Map();
        for (he = Ge; he <= De; he++) {
          const Qt = (F[he] = ye ? Oi(F[he]) : gr(F[he]));
          Qt.key != null && vt.set(Qt.key, he);
        }
        let et,
          tt = 0;
        const Ft = De - Ge + 1;
        let Jt = !1,
          rr = 0;
        const zn = new Array(Ft);
        for (he = 0; he < Ft; he++) zn[he] = 0;
        for (he = We; he <= Ie; he++) {
          const Qt = O[he];
          if (tt >= Ft) {
            Ve(Qt, se, ve, !0);
            continue;
          }
          let Ue;
          if (Qt.key != null) Ue = vt.get(Qt.key);
          else
            for (et = Ge; et <= De; et++)
              if (zn[et - Ge] === 0 && Nr(Qt, F[et])) {
                Ue = et;
                break;
              }
          Ue === void 0
            ? Ve(Qt, se, ve, !0)
            : ((zn[Ue - Ge] = he + 1),
              Ue >= rr ? (rr = Ue) : (Jt = !0),
              E(Qt, F[Ue], Z, null, se, ve, Se, ue, ye),
              tt++);
        }
        const ir = Jt ? vk(zn) : us;
        for (et = ir.length - 1, he = Ft - 1; he >= 0; he--) {
          const Qt = Ge + he,
            Ue = F[Qt],
            no = Qt + 1 < Ae ? F[Qt + 1].el : ce;
          zn[he] === 0
            ? E(null, Ue, Z, no, se, ve, Se, ue, ye)
            : Jt && (et < 0 || he !== ir[et] ? Be(Ue, Z, no, 2) : et--);
        }
      }
    },
    Be = (O, F, Z, ce, se = null) => {
      const { el: ve, type: Se, transition: ue, children: ye, shapeFlag: he } = O;
      if (he & 6) {
        Be(O.component.subTree, F, Z, ce);
        return;
      }
      if (he & 128) {
        O.suspense.move(F, Z, ce);
        return;
      }
      if (he & 64) {
        Se.move(O, F, Z, Ne);
        return;
      }
      if (Se === ht) {
        o(ve, F, Z);
        for (let Ie = 0; Ie < ye.length; Ie++) Be(ye[Ie], F, Z, ce);
        o(O.anchor, F, Z);
        return;
      }
      if (Se === Bf) {
        D(O, F, Z);
        return;
      }
      if (ce !== 2 && he & 1 && ue)
        if (ce === 0) ue.beforeEnter(ve), o(ve, F, Z), Mn(() => ue.enter(ve), se);
        else {
          const { leave: Ie, delayLeave: De, afterLeave: We } = ue,
            Ge = () => o(ve, F, Z),
            vt = () => {
              Ie(ve, () => {
                Ge(), We && We();
              });
            };
          De ? De(ve, Ge, vt) : vt();
        }
      else o(ve, F, Z);
    },
    Ve = (O, F, Z, ce = !1, se = !1) => {
      const {
        type: ve,
        props: Se,
        ref: ue,
        children: ye,
        dynamicChildren: he,
        shapeFlag: Ae,
        patchFlag: Ie,
        dirs: De,
        memoIndex: We,
      } = O;
      if (
        (Ie === -2 && (se = !1),
        ue != null && bd(ue, null, Z, O, !0),
        We != null && (F.renderCache[We] = void 0),
        Ae & 256)
      ) {
        F.ctx.deactivate(O);
        return;
      }
      const Ge = Ae & 1 && De,
        vt = !_l(O);
      let et;
      if ((vt && (et = Se && Se.onVnodeBeforeUnmount) && Ar(et, F, O), Ae & 6))
        Ze(O.component, Z, ce);
      else {
        if (Ae & 128) {
          O.suspense.unmount(Z, ce);
          return;
        }
        Ge && go(O, null, F, "beforeUnmount"),
          Ae & 64
            ? O.type.remove(O, F, Z, Ne, ce)
            : he && (ve !== ht || (Ie > 0 && Ie & 64))
              ? Te(he, F, Z, !1, !0)
              : ((ve === ht && Ie & 384) || (!se && Ae & 16)) && Te(ye, F, Z),
          ce && it(O);
      }
      ((vt && (et = Se && Se.onVnodeUnmounted)) || Ge) &&
        Mn(() => {
          et && Ar(et, F, O), Ge && go(O, null, F, "unmounted");
        }, Z);
    },
    it = (O) => {
      const { type: F, el: Z, anchor: ce, transition: se } = O;
      if (F === ht) {
        nt(Z, ce);
        return;
      }
      if (F === Bf) {
        A(O);
        return;
      }
      const ve = () => {
        s(Z), se && !se.persisted && se.afterLeave && se.afterLeave();
      };
      if (O.shapeFlag & 1 && se && !se.persisted) {
        const { leave: Se, delayLeave: ue } = se,
          ye = () => Se(Z, ve);
        ue ? ue(O.el, ve, ye) : ye();
      } else ve();
    },
    nt = (O, F) => {
      let Z;
      for (; O !== F; ) (Z = b(O)), s(O), (O = Z);
      s(F);
    },
    Ze = (O, F, Z) => {
      const { bum: ce, scope: se, update: ve, subTree: Se, um: ue, m: ye, a: he } = O;
      Av(ye),
        Av(he),
        ce && pc(ce),
        se.stop(),
        ve && ((ve.active = !1), Ve(Se, O, F, Z)),
        ue && Mn(ue, F),
        Mn(() => {
          O.isUnmounted = !0;
        }, F),
        F &&
          F.pendingBranch &&
          !F.isUnmounted &&
          O.asyncDep &&
          !O.asyncResolved &&
          O.suspenseId === F.pendingId &&
          (F.deps--, F.deps === 0 && F.resolve());
    },
    Te = (O, F, Z, ce = !1, se = !1, ve = 0) => {
      for (let Se = ve; Se < O.length; Se++) Ve(O[Se], F, Z, ce, se);
    },
    X = (O) =>
      O.shapeFlag & 6
        ? X(O.component.subTree)
        : O.shapeFlag & 128
          ? O.suspense.next()
          : b(O.anchor || O.el);
  let ae = !1;
  const de = (O, F, Z) => {
      O == null
        ? F._vnode && Ve(F._vnode, null, null, !0)
        : E(F._vnode || null, O, F, null, null, null, Z),
        ae || ((ae = !0), mv(), ay(), (ae = !1)),
        (F._vnode = O);
    },
    Ne = { p: E, um: Ve, m: Be, r: it, mt: I, mc: ie, pc: re, pbc: j, n: X, o: e };
  let Ce, Ye;
  return { render: de, hydrate: Ce, createApp: lk(de, Ce) };
}
function Hf({ type: e, props: t }, r) {
  return (r === "svg" && e === "foreignObject") ||
    (r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html"))
    ? void 0
    : r;
}
function vo({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function gk(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Cy(e, t, r = !1) {
  const o = e.children,
    s = t.children;
  if (ze(o) && ze(s))
    for (let c = 0; c < o.length; c++) {
      const f = o[c];
      let d = s[c];
      d.shapeFlag & 1 &&
        !d.dynamicChildren &&
        ((d.patchFlag <= 0 || d.patchFlag === 32) && ((d = s[c] = Oi(s[c])), (d.el = f.el)),
        !r && d.patchFlag !== -2 && Cy(f, d)),
        d.type === xu && (d.el = f.el);
    }
}
function vk(e) {
  const t = e.slice(),
    r = [0];
  let o, s, c, f, d;
  const h = e.length;
  for (o = 0; o < h; o++) {
    const p = e[o];
    if (p !== 0) {
      if (((s = r[r.length - 1]), e[s] < p)) {
        (t[o] = s), r.push(o);
        continue;
      }
      for (c = 0, f = r.length - 1; c < f; )
        (d = (c + f) >> 1), e[r[d]] < p ? (c = d + 1) : (f = d);
      p < e[r[c]] && (c > 0 && (t[o] = r[c - 1]), (r[c] = o));
    }
  }
  for (c = r.length, f = r[c - 1]; c-- > 0; ) (r[c] = f), (f = t[f]);
  return r;
}
function Ey(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ey(t);
}
function Av(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const mk = Symbol.for("v-scx"),
  yk = () => ri(mk);
function kh(e, t) {
  return bu(e, null, t);
}
function bk(e, t) {
  return bu(e, null, { flush: "sync" });
}
const Ja = {};
function qt(e, t, r) {
  return bu(e, t, r);
}
function bu(e, t, { immediate: r, deep: o, flush: s, once: c, onTrack: f, onTrigger: d } = _t) {
  if (t && c) {
    const z = t;
    t = (...J) => {
      z(...J), H();
    };
  }
  const h = sn,
    p = (z) => (o === !0 ? z : zi(z, o === !1 ? 1 : void 0));
  let v,
    y = !1,
    b = !1;
  if (
    (It(e)
      ? ((v = () => e.value), (y = Nc(e)))
      : wl(e)
        ? ((v = () => p(e)), (y = !0))
        : ze(e)
          ? ((b = !0),
            (y = e.some((z) => wl(z) || Nc(z))),
            (v = () =>
              e.map((z) => {
                if (It(z)) return z.value;
                if (wl(z)) return p(z);
                if (Xe(z)) return Bi(z, h, 2);
              })))
          : Xe(e)
            ? t
              ? (v = () => Bi(e, h, 2))
              : (v = () => (x && x(), er(e, h, 3, [C])))
            : (v = Yn),
    t && o)
  ) {
    const z = v;
    v = () => zi(z());
  }
  let x,
    C = (z) => {
      x = D.onStop = () => {
        Bi(z, h, 4), (x = D.onStop = void 0);
      };
    },
    E;
  if (_u)
    if (((C = Yn), t ? r && er(t, h, 3, [v(), b ? [] : void 0, C]) : v(), s === "sync")) {
      const z = yk();
      E = z.__watcherHandles || (z.__watcherHandles = []);
    } else return Yn;
  let N = b ? new Array(e.length).fill(Ja) : Ja;
  const M = () => {
    if (!(!D.active || !D.dirty))
      if (t) {
        const z = D.run();
        (o || y || (b ? z.some((J, ie) => zr(J, N[ie])) : zr(z, N))) &&
          (x && x(), er(t, h, 3, [z, N === Ja ? void 0 : b && N[0] === Ja ? [] : N, C]), (N = z));
      } else D.run();
  };
  M.allowRecurse = !!t;
  let L;
  s === "sync"
    ? (L = M)
    : s === "post"
      ? (L = () => Mn(M, h && h.suspense))
      : ((M.pre = !0), h && (M.id = h.uid), (L = () => yh(M)));
  const D = new lh(v, Yn, L),
    A = B0(),
    H = () => {
      D.stop(), A && oh(A.effects, D);
    };
  return (
    t ? (r ? M() : (N = D.run())) : s === "post" ? Mn(D.run.bind(D), h && h.suspense) : D.run(),
    E && E.push(H),
    H
  );
}
function wk(e, t, r) {
  const o = this.proxy,
    s = $t(e) ? (e.includes(".") ? Ly(o, e) : () => o[e]) : e.bind(o, o);
  let c;
  Xe(t) ? (c = t) : ((c = t.handler), (r = t));
  const f = sa(this),
    d = bu(s, c.bind(o), r);
  return f(), d;
}
function Ly(e, t) {
  const r = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < r.length && o; s++) o = o[r[s]];
    return o;
  };
}
function zi(e, t = 1 / 0, r) {
  if (t <= 0 || !xt(e) || e.__v_skip || ((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), t--, It(e))) zi(e.value, t, r);
  else if (ze(e)) for (let o = 0; o < e.length; o++) zi(e[o], t, r);
  else if (lu(e) || fs(e))
    e.forEach((o) => {
      zi(o, t, r);
    });
  else if (P0(e)) {
    for (const o in e) zi(e[o], t, r);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && zi(e[o], t, r);
  }
  return e;
}
const wu = (e) => e.type.__isKeepAlive;
function xk(e, t) {
  Ay(e, "a", t);
}
function _k(e, t) {
  Ay(e, "da", t);
}
function Ay(e, t, r = sn) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let s = r;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((mu(t, o, r), r)) {
    let s = r.parent;
    for (; s && s.parent; ) wu(s.parent.vnode) && Sk(o, t, r, s), (s = s.parent);
  }
}
function Sk(e, t, r, o) {
  const s = mu(t, e, o, !0);
  yu(() => {
    oh(o[t], s);
  }, r);
}
const $i = Symbol("_leaveCb"),
  Qa = Symbol("_enterCb");
function kk() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
  return (
    Ms(() => {
      e.isMounted = !0;
    }),
    py(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const Kn = [Function, Array],
  My = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Kn,
    onEnter: Kn,
    onAfterEnter: Kn,
    onEnterCancelled: Kn,
    onBeforeLeave: Kn,
    onLeave: Kn,
    onAfterLeave: Kn,
    onLeaveCancelled: Kn,
    onBeforeAppear: Kn,
    onAppear: Kn,
    onAfterAppear: Kn,
    onAppearCancelled: Kn,
  },
  Ny = (e) => {
    const t = e.subTree;
    return t.component ? Ny(t.component) : t;
  },
  Tk = {
    name: "BaseTransition",
    props: My,
    setup(e, { slots: t }) {
      const r = oa(),
        o = kk();
      return () => {
        const s = t.default && Oy(t.default(), !0);
        if (!s || !s.length) return;
        let c = s[0];
        if (s.length > 1) {
          for (const b of s)
            if (b.type !== dn) {
              c = b;
              break;
            }
        }
        const f = pt(e),
          { mode: d } = f;
        if (o.isLeaving) return qf(c);
        const h = Mv(c);
        if (!h) return qf(c);
        let p = wd(h, f, o, r, (b) => (p = b));
        Dc(h, p);
        const v = r.subTree,
          y = v && Mv(v);
        if (y && y.type !== dn && !Nr(h, y) && Ny(r).type !== dn) {
          const b = wd(y, f, o, r);
          if ((Dc(y, b), d === "out-in" && h.type !== dn))
            return (
              (o.isLeaving = !0),
              (b.afterLeave = () => {
                (o.isLeaving = !1), r.update.active !== !1 && ((r.effect.dirty = !0), r.update());
              }),
              qf(c)
            );
          d === "in-out" &&
            h.type !== dn &&
            (b.delayLeave = (x, C, E) => {
              const N = $y(o, y);
              (N[String(y.key)] = y),
                (x[$i] = () => {
                  C(), (x[$i] = void 0), delete p.delayedLeave;
                }),
                (p.delayedLeave = E);
            });
        }
        return c;
      };
    },
  },
  Ck = Tk;
function $y(e, t) {
  const { leavingVNodes: r } = e;
  let o = r.get(t.type);
  return o || ((o = Object.create(null)), r.set(t.type, o)), o;
}
function wd(e, t, r, o, s) {
  const {
      appear: c,
      mode: f,
      persisted: d = !1,
      onBeforeEnter: h,
      onEnter: p,
      onAfterEnter: v,
      onEnterCancelled: y,
      onBeforeLeave: b,
      onLeave: x,
      onAfterLeave: C,
      onLeaveCancelled: E,
      onBeforeAppear: N,
      onAppear: M,
      onAfterAppear: L,
      onAppearCancelled: D,
    } = t,
    A = String(e.key),
    H = $y(r, e),
    z = (ne, j) => {
      ne && er(ne, o, 9, j);
    },
    J = (ne, j) => {
      const te = j[1];
      z(ne, j), ze(ne) ? ne.every((K) => K.length <= 1) && te() : ne.length <= 1 && te();
    },
    ie = {
      mode: f,
      persisted: d,
      beforeEnter(ne) {
        let j = h;
        if (!r.isMounted)
          if (c) j = N || h;
          else return;
        ne[$i] && ne[$i](!0);
        const te = H[A];
        te && Nr(e, te) && te.el[$i] && te.el[$i](), z(j, [ne]);
      },
      enter(ne) {
        let j = p,
          te = v,
          K = y;
        if (!r.isMounted)
          if (c) (j = M || p), (te = L || v), (K = D || y);
          else return;
        let V = !1;
        const I = (ne[Qa] = (k) => {
          V ||
            ((V = !0),
            k ? z(K, [ne]) : z(te, [ne]),
            ie.delayedLeave && ie.delayedLeave(),
            (ne[Qa] = void 0));
        });
        j ? J(j, [ne, I]) : I();
      },
      leave(ne, j) {
        const te = String(e.key);
        if ((ne[Qa] && ne[Qa](!0), r.isUnmounting)) return j();
        z(b, [ne]);
        let K = !1;
        const V = (ne[$i] = (I) => {
          K ||
            ((K = !0),
            j(),
            I ? z(E, [ne]) : z(C, [ne]),
            (ne[$i] = void 0),
            H[te] === e && delete H[te]);
        });
        (H[te] = e), x ? J(x, [ne, V]) : V();
      },
      clone(ne) {
        const j = wd(ne, t, r, o, s);
        return s && s(j), j;
      },
    };
  return ie;
}
function qf(e) {
  if (wu(e)) return (e = Vi(e)), (e.children = null), e;
}
function Mv(e) {
  if (!wu(e)) return e;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16) return r[0];
    if (t & 32 && Xe(r.default)) return r.default();
  }
}
function Dc(e, t) {
  e.shapeFlag & 6 && e.component
    ? Dc(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Oy(e, t = !1, r) {
  let o = [],
    s = 0;
  for (let c = 0; c < e.length; c++) {
    let f = e[c];
    const d = r == null ? f.key : String(r) + String(f.key != null ? f.key : c);
    f.type === ht
      ? (f.patchFlag & 128 && s++, (o = o.concat(Oy(f.children, t, d))))
      : (t || f.type !== dn) && o.push(d != null ? Vi(f, { key: d }) : f);
  }
  if (s > 1) for (let c = 0; c < o.length; c++) o[c].patchFlag = -2;
  return o;
}
const Ek = (e) => e.__isTeleport,
  ht = Symbol.for("v-fgt"),
  xu = Symbol.for("v-txt"),
  dn = Symbol.for("v-cmt"),
  Bf = Symbol.for("v-stc"),
  Tl = [];
let Zn = null;
function le(e = !1) {
  Tl.push((Zn = e ? null : []));
}
function Py() {
  Tl.pop(), (Zn = Tl[Tl.length - 1] || null);
}
let ws = 1;
function zc(e) {
  ws += e;
}
function Ry(e) {
  return (e.dynamicChildren = ws > 0 ? Zn || us : null), Py(), ws > 0 && Zn && Zn.push(e), e;
}
function be(e, t, r, o, s, c) {
  return Ry(Y(e, t, r, o, s, c, !0));
}
function ot(e, t, r, o, s) {
  return Ry(Pe(e, t, r, o, s, !0));
}
function Fl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dy = ({ key: e }) => e ?? null,
  vc = ({ ref: e, ref_key: t, ref_for: r }) => (
    typeof e == "number" && (e = "" + e),
    e != null ? ($t(e) || It(e) || Xe(e) ? { i: Yt, r: e, k: t, f: !!r } : e) : null
  );
function Y(e, t = null, r = null, o = 0, s = null, c = e === ht ? 0 : 1, f = !1, d = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dy(t),
    ref: t && vc(t),
    scopeId: pu,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: c,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Yt,
  };
  return (
    d ? (Th(h, r), c & 128 && e.normalize(h)) : r && (h.shapeFlag |= $t(r) ? 8 : 16),
    ws > 0 && !f && Zn && (h.patchFlag > 0 || c & 6) && h.patchFlag !== 32 && Zn.push(h),
    h
  );
}
const Pe = Lk;
function Lk(e, t = null, r = null, o = 0, s = null, c = !1) {
  if (((!e || e === dy) && (e = dn), Fl(e))) {
    const d = Vi(e, t, !0);
    return (
      r && Th(d, r),
      ws > 0 && !c && Zn && (d.shapeFlag & 6 ? (Zn[Zn.indexOf(e)] = d) : Zn.push(d)),
      (d.patchFlag = -2),
      d
    );
  }
  if ((Dk(e) && (e = e.__vccOpts), t)) {
    t = zy(t);
    let { class: d, style: h } = t;
    d && !$t(d) && (t.class = st(d)),
      xt(h) && (ey(h) && !ze(h) && (h = zt({}, h)), (t.style = Zt(h)));
  }
  const f = $t(e) ? 1 : PS(e) ? 128 : Ek(e) ? 64 : xt(e) ? 4 : Xe(e) ? 2 : 0;
  return Y(e, t, r, o, s, f, c, !0);
}
function zy(e) {
  return e ? (ey(e) || wy(e) ? zt({}, e) : e) : null;
}
function Vi(e, t, r = !1, o = !1) {
  const { props: s, ref: c, patchFlag: f, children: d, transition: h } = e,
    p = t ? ii(s || {}, t) : s,
    v = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: p,
      key: p && Dy(p),
      ref: t && t.ref ? (r && c ? (ze(c) ? c.concat(vc(t)) : [c, vc(t)]) : vc(t)) : c,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: d,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== ht ? (f === -1 ? 16 : f | 16) : f,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: h,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Vi(e.ssContent),
      ssFallback: e.ssFallback && Vi(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return h && o && Dc(v, h.clone(v)), v;
}
function dt(e = " ", t = 0) {
  return Pe(xu, null, e, t);
}
function rt(e = "", t = !1) {
  return t ? (le(), ot(dn, null, e)) : Pe(dn, null, e);
}
function gr(e) {
  return e == null || typeof e == "boolean"
    ? Pe(dn)
    : ze(e)
      ? Pe(ht, null, e.slice())
      : typeof e == "object"
        ? Oi(e)
        : Pe(xu, null, String(e));
}
function Oi(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vi(e);
}
function Th(e, t) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (ze(t)) r = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Th(e, s()), s._c && (s._d = !0));
      return;
    } else {
      r = 32;
      const s = t._;
      !s && !wy(t)
        ? (t._ctx = Yt)
        : s === 3 && Yt && (Yt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Xe(t)
      ? ((t = { default: t, _ctx: Yt }), (r = 32))
      : ((t = String(t)), o & 64 ? ((r = 16), (t = [dt(t)])) : (r = 8));
  (e.children = t), (e.shapeFlag |= r);
}
function ii(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const s in o)
      if (s === "class") t.class !== o.class && (t.class = st([t.class, o.class]));
      else if (s === "style") t.style = Zt([t.style, o.style]);
      else if (su(s)) {
        const c = t[s],
          f = o[s];
        f && c !== f && !(ze(c) && c.includes(f)) && (t[s] = c ? [].concat(c, f) : f);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ar(e, t, r, o = null) {
  er(e, t, 7, [r, o]);
}
const Ak = my();
let Mk = 0;
function Nk(e, t, r) {
  const o = e.type,
    s = (t ? t.appContext : e.appContext) || Ak,
    c = {
      uid: Mk++,
      vnode: e,
      type: o,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new K_(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: _y(o, s),
      emitsOptions: uy(o, s),
      emit: null,
      emitted: null,
      propsDefaults: _t,
      inheritAttrs: o.inheritAttrs,
      ctx: _t,
      data: _t,
      props: _t,
      attrs: _t,
      slots: _t,
      refs: _t,
      setupState: _t,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (c.ctx = { _: c }), (c.root = t ? t.root : c), (c.emit = LS.bind(null, c)), e.ce && e.ce(c), c
  );
}
let sn = null;
const oa = () => sn || Yt;
let Ic, xd;
{
  const e = z0(),
    t = (r, o) => {
      let s;
      return (
        (s = e[r]) || (s = e[r] = []),
        s.push(o),
        (c) => {
          s.length > 1 ? s.forEach((f) => f(c)) : s[0](c);
        }
      );
    };
  (Ic = t("__VUE_INSTANCE_SETTERS__", (r) => (sn = r))),
    (xd = t("__VUE_SSR_SETTERS__", (r) => (_u = r)));
}
const sa = (e) => {
    const t = sn;
    return (
      Ic(e),
      e.scope.on(),
      () => {
        e.scope.off(), Ic(t);
      }
    );
  },
  Nv = () => {
    sn && sn.scope.off(), Ic(null);
  };
function Iy(e) {
  return e.vnode.shapeFlag & 4;
}
let _u = !1;
function $k(e, t = !1) {
  t && xd(t);
  const { props: r, children: o } = e.vnode,
    s = Iy(e);
  ak(e, r, s, t), fk(e, o);
  const c = s ? Ok(e, t) : void 0;
  return t && xd(!1), c;
}
function Ok(e, t) {
  const r = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, JS));
  const { setup: o } = r;
  if (o) {
    const s = (e.setupContext = o.length > 1 ? Hy(e) : null),
      c = sa(e);
    Ji();
    const f = Bi(o, e, 0, [e.props, s]);
    if ((Qi(), c(), $0(f))) {
      if ((f.then(Nv, Nv), t))
        return f
          .then((d) => {
            _d(e, d, t);
          })
          .catch((d) => {
            ia(d, e, 0);
          });
      e.asyncDep = f;
    } else _d(e, f, t);
  } else Fy(e, t);
}
function _d(e, t, r) {
  Xe(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : xt(t) && (e.setupState = ry(t)),
    Fy(e, r);
}
let $v;
function Fy(e, t, r) {
  const o = e.type;
  if (!e.render) {
    if (!t && $v && !o.render) {
      const s = o.template || _h(e).template;
      if (s) {
        const { isCustomElement: c, compilerOptions: f } = e.appContext.config,
          { delimiters: d, compilerOptions: h } = o,
          p = zt(zt({ isCustomElement: c, delimiters: d }, f), h);
        o.render = $v(s, p);
      }
    }
    e.render = o.render || Yn;
  }
  {
    const s = sa(e);
    Ji();
    try {
      tk(e);
    } finally {
      Qi(), s();
    }
  }
}
const Pk = {
  get(e, t) {
    return Rn(e, "get", ""), e[t];
  },
};
function Hy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return { attrs: new Proxy(e.attrs, Pk), slots: e.slots, emit: e.emit, expose: t };
}
function Su(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ry(ph(e.exposed)), {
          get(t, r) {
            if (r in t) return t[r];
            if (r in Sl) return Sl[r](e);
          },
          has(t, r) {
            return r in t || r in Sl;
          },
        }))
    : e.proxy;
}
function Rk(e, t = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Dk(e) {
  return Xe(e) && "__vccOpts" in e;
}
const $e = (e, t) => mS(e, t, _u);
function Ch(e, t, r = _t) {
  const o = oa(),
    s = br(t),
    c = Zi(t),
    f = iy((h, p) => {
      let v;
      return (
        bk(() => {
          const y = e[t];
          zr(v, y) && ((v = y), p());
        }),
        {
          get() {
            return h(), r.get ? r.get(v) : v;
          },
          set(y) {
            const b = o.vnode.props;
            !(
              b &&
              (t in b || s in b || c in b) &&
              (`onUpdate:${t}` in b || `onUpdate:${s}` in b || `onUpdate:${c}` in b)
            ) &&
              zr(y, v) &&
              ((v = y), p()),
              o.emit(`update:${t}`, r.set ? r.set(y) : y);
          },
        }
      );
    }),
    d = "modelModifiers";
  return (
    (f[Symbol.iterator] = () => {
      let h = 0;
      return {
        next() {
          return h < 2 ? { value: h++ ? e[d] || {} : f, done: !1 } : { done: !0 };
        },
      };
    }),
    f
  );
}
function la(e, t, r) {
  const o = arguments.length;
  return o === 2
    ? xt(t) && !ze(t)
      ? Fl(t)
        ? Pe(e, null, [t])
        : Pe(e, t)
      : Pe(e, null, t)
    : (o > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : o === 3 && Fl(r) && (r = [r]),
      Pe(e, t, r));
}
const zk = "3.4.31";
/**
 * @vue/runtime-dom v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ik = "http://www.w3.org/2000/svg",
  Fk = "http://www.w3.org/1998/Math/MathML",
  Qr = typeof document < "u" ? document : null,
  Ov = Qr && Qr.createElement("template"),
  Hk = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, o) => {
      const s =
        t === "svg"
          ? Qr.createElementNS(Ik, e)
          : t === "mathml"
            ? Qr.createElementNS(Fk, e)
            : r
              ? Qr.createElement(e, { is: r })
              : Qr.createElement(e);
      return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
    },
    createText: (e) => Qr.createTextNode(e),
    createComment: (e) => Qr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, r, o, s, c) {
      const f = r ? r.previousSibling : t.lastChild;
      if (s && (s === c || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), r), !(s === c || !(s = s.nextSibling)); );
      else {
        Ov.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
        const d = Ov.content;
        if (o === "svg" || o === "mathml") {
          const h = d.firstChild;
          for (; h.firstChild; ) d.appendChild(h.firstChild);
          d.removeChild(h);
        }
        t.insertBefore(d, r);
      }
      return [f ? f.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
    },
  },
  Ti = "transition",
  cl = "animation",
  Hl = Symbol("_vtc"),
  Eh = (e, { slots: t }) => la(Ck, qk(e), t);
Eh.displayName = "Transition";
const qy = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Eh.props = zt({}, My, qy);
const mo = (e, t = []) => {
    ze(e) ? e.forEach((r) => r(...t)) : e && e(...t);
  },
  Pv = (e) => (e ? (ze(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function qk(e) {
  const t = {};
  for (const K in e) K in qy || (t[K] = e[K]);
  if (e.css === !1) return t;
  const {
      name: r = "v",
      type: o,
      duration: s,
      enterFromClass: c = `${r}-enter-from`,
      enterActiveClass: f = `${r}-enter-active`,
      enterToClass: d = `${r}-enter-to`,
      appearFromClass: h = c,
      appearActiveClass: p = f,
      appearToClass: v = d,
      leaveFromClass: y = `${r}-leave-from`,
      leaveActiveClass: b = `${r}-leave-active`,
      leaveToClass: x = `${r}-leave-to`,
    } = e,
    C = Bk(s),
    E = C && C[0],
    N = C && C[1],
    {
      onBeforeEnter: M,
      onEnter: L,
      onEnterCancelled: D,
      onLeave: A,
      onLeaveCancelled: H,
      onBeforeAppear: z = M,
      onAppear: J = L,
      onAppearCancelled: ie = D,
    } = t,
    ne = (K, V, I) => {
      yo(K, V ? v : d), yo(K, V ? p : f), I && I();
    },
    j = (K, V) => {
      (K._isLeaving = !1), yo(K, y), yo(K, x), yo(K, b), V && V();
    },
    te = (K) => (V, I) => {
      const k = K ? J : L,
        q = () => ne(V, K, I);
      mo(k, [V, q]),
        Rv(() => {
          yo(V, K ? h : c), Ci(V, K ? v : d), Pv(k) || Dv(V, o, E, q);
        });
    };
  return zt(t, {
    onBeforeEnter(K) {
      mo(M, [K]), Ci(K, c), Ci(K, f);
    },
    onBeforeAppear(K) {
      mo(z, [K]), Ci(K, h), Ci(K, p);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(K, V) {
      K._isLeaving = !0;
      const I = () => j(K, V);
      Ci(K, y),
        Ci(K, b),
        Vk(),
        Rv(() => {
          K._isLeaving && (yo(K, y), Ci(K, x), Pv(A) || Dv(K, o, N, I));
        }),
        mo(A, [K, I]);
    },
    onEnterCancelled(K) {
      ne(K, !1), mo(D, [K]);
    },
    onAppearCancelled(K) {
      ne(K, !0), mo(ie, [K]);
    },
    onLeaveCancelled(K) {
      j(K), mo(H, [K]);
    },
  });
}
function Bk(e) {
  if (e == null) return null;
  if (xt(e)) return [Wf(e.enter), Wf(e.leave)];
  {
    const t = Wf(e);
    return [t, t];
  }
}
function Wf(e) {
  return D0(e);
}
function Ci(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[Hl] || (e[Hl] = new Set())).add(t);
}
function yo(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const r = e[Hl];
  r && (r.delete(t), r.size || (e[Hl] = void 0));
}
function Rv(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wk = 0;
function Dv(e, t, r, o) {
  const s = (e._endId = ++Wk),
    c = () => {
      s === e._endId && o();
    };
  if (r) return setTimeout(c, r);
  const { type: f, timeout: d, propCount: h } = Uk(e, t);
  if (!f) return o();
  const p = f + "end";
  let v = 0;
  const y = () => {
      e.removeEventListener(p, b), c();
    },
    b = (x) => {
      x.target === e && ++v >= h && y();
    };
  setTimeout(() => {
    v < h && y();
  }, d + 1),
    e.addEventListener(p, b);
}
function Uk(e, t) {
  const r = window.getComputedStyle(e),
    o = (C) => (r[C] || "").split(", "),
    s = o(`${Ti}Delay`),
    c = o(`${Ti}Duration`),
    f = zv(s, c),
    d = o(`${cl}Delay`),
    h = o(`${cl}Duration`),
    p = zv(d, h);
  let v = null,
    y = 0,
    b = 0;
  t === Ti
    ? f > 0 && ((v = Ti), (y = f), (b = c.length))
    : t === cl
      ? p > 0 && ((v = cl), (y = p), (b = h.length))
      : ((y = Math.max(f, p)),
        (v = y > 0 ? (f > p ? Ti : cl) : null),
        (b = v ? (v === Ti ? c.length : h.length) : 0));
  const x = v === Ti && /\b(transform|all)(,|$)/.test(o(`${Ti}Property`).toString());
  return { type: v, timeout: y, propCount: b, hasTransform: x };
}
function zv(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((r, o) => Iv(r) + Iv(e[o])));
}
function Iv(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vk() {
  return document.body.offsetHeight;
}
function jk(e, t, r) {
  const o = e[Hl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : (e.className = t);
}
const Fc = Symbol("_vod"),
  By = Symbol("_vsh"),
  vl = {
    beforeMount(e, { value: t }, { transition: r }) {
      (e[Fc] = e.style.display === "none" ? "" : e.style.display),
        r && t ? r.beforeEnter(e) : ul(e, t);
    },
    mounted(e, { value: t }, { transition: r }) {
      r && t && r.enter(e);
    },
    updated(e, { value: t, oldValue: r }, { transition: o }) {
      !t != !r &&
        (o
          ? t
            ? (o.beforeEnter(e), ul(e, !0), o.enter(e))
            : o.leave(e, () => {
                ul(e, !1);
              })
          : ul(e, t));
    },
    beforeUnmount(e, { value: t }) {
      ul(e, t);
    },
  };
function ul(e, t) {
  (e.style.display = t ? e[Fc] : "none"), (e[By] = !t);
}
const Gk = Symbol(""),
  Kk = /(^|;)\s*display\s*:/;
function Xk(e, t, r) {
  const o = e.style,
    s = $t(r);
  let c = !1;
  if (r && !s) {
    if (t)
      if ($t(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          r[d] == null && mc(o, d, "");
        }
      else for (const f in t) r[f] == null && mc(o, f, "");
    for (const f in r) f === "display" && (c = !0), mc(o, f, r[f]);
  } else if (s) {
    if (t !== r) {
      const f = o[Gk];
      f && (r += ";" + f), (o.cssText = r), (c = Kk.test(r));
    }
  } else t && e.removeAttribute("style");
  Fc in e && ((e[Fc] = c ? o.display : ""), e[By] && (o.display = "none"));
}
const Fv = /\s*!important$/;
function mc(e, t, r) {
  if (ze(r)) r.forEach((o) => mc(e, t, o));
  else if ((r == null && (r = ""), t.startsWith("--"))) e.setProperty(t, r);
  else {
    const o = Yk(e, t);
    Fv.test(r) ? e.setProperty(Zi(o), r.replace(Fv, ""), "important") : (e[o] = r);
  }
}
const Hv = ["Webkit", "Moz", "ms"],
  Uf = {};
function Yk(e, t) {
  const r = Uf[t];
  if (r) return r;
  let o = br(t);
  if (o !== "filter" && o in e) return (Uf[t] = o);
  o = cu(o);
  for (let s = 0; s < Hv.length; s++) {
    const c = Hv[s] + o;
    if (c in e) return (Uf[t] = c);
  }
  return t;
}
const qv = "http://www.w3.org/1999/xlink";
function Bv(e, t, r, o, s, c = j_(t)) {
  o && t.startsWith("xlink:")
    ? r == null
      ? e.removeAttributeNS(qv, t.slice(6, t.length))
      : e.setAttributeNS(qv, t, r)
    : r == null || (c && !I0(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, c ? "" : Dr(r) ? String(r) : r);
}
function Zk(e, t, r, o, s, c, f) {
  if (t === "innerHTML" || t === "textContent") {
    o && f(o, s, c), (e[t] = r ?? "");
    return;
  }
  const d = e.tagName;
  if (t === "value" && d !== "PROGRESS" && !d.includes("-")) {
    const p = d === "OPTION" ? e.getAttribute("value") || "" : e.value,
      v = r == null ? "" : String(r);
    (p !== v || !("_value" in e)) && (e.value = v),
      r == null && e.removeAttribute(t),
      (e._value = r);
    return;
  }
  let h = !1;
  if (r === "" || r == null) {
    const p = typeof e[t];
    p === "boolean"
      ? (r = I0(r))
      : r == null && p === "string"
        ? ((r = ""), (h = !0))
        : p === "number" && ((r = 0), (h = !0));
  }
  try {
    e[t] = r;
  } catch {}
  h && e.removeAttribute(t);
}
function _o(e, t, r, o) {
  e.addEventListener(t, r, o);
}
function Jk(e, t, r, o) {
  e.removeEventListener(t, r, o);
}
const Wv = Symbol("_vei");
function Qk(e, t, r, o, s = null) {
  const c = e[Wv] || (e[Wv] = {}),
    f = c[t];
  if (o && f) f.value = o;
  else {
    const [d, h] = eT(t);
    if (o) {
      const p = (c[t] = rT(o, s));
      _o(e, d, p, h);
    } else f && (Jk(e, d, f, h), (c[t] = void 0));
  }
}
const Uv = /(?:Once|Passive|Capture)$/;
function eT(e) {
  let t;
  if (Uv.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(Uv)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Zi(e.slice(2)), t];
}
let Vf = 0;
const tT = Promise.resolve(),
  nT = () => Vf || (tT.then(() => (Vf = 0)), (Vf = Date.now()));
function rT(e, t) {
  const r = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= r.attached) return;
    er(iT(o, r.value), t, 5, [o]);
  };
  return (r.value = e), (r.attached = nT()), r;
}
function iT(e, t) {
  if (ze(t)) {
    const r = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        r.call(e), (e._stopped = !0);
      }),
      t.map((o) => (s) => !s._stopped && o && o(s))
    );
  } else return t;
}
const Vv = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  oT = (e, t, r, o, s, c, f, d, h) => {
    const p = s === "svg";
    t === "class"
      ? jk(e, o, p)
      : t === "style"
        ? Xk(e, r, o)
        : su(t)
          ? ih(t) || Qk(e, t, r, o, f)
          : (
                t[0] === "."
                  ? ((t = t.slice(1)), !0)
                  : t[0] === "^"
                    ? ((t = t.slice(1)), !1)
                    : sT(e, t, o, p)
              )
            ? (Zk(e, t, o, c, f, d, h),
              !e.tagName.includes("-") &&
                (t === "value" || t === "checked" || t === "selected") &&
                Bv(e, t, o, p, f, t !== "value"))
            : (t === "true-value" ? (e._trueValue = o) : t === "false-value" && (e._falseValue = o),
              Bv(e, t, o, p));
  };
function sT(e, t, r, o) {
  if (o) return !!(t === "innerHTML" || t === "textContent" || (t in e && Vv(t) && Xe(r)));
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1;
  }
  return Vv(t) && $t(r) ? !1 : t in e;
}
const Hc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ze(t) ? (r) => pc(t, r) : t;
};
function lT(e) {
  e.target.composing = !0;
}
function jv(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ps = Symbol("_assign"),
  aT = {
    created(e, { modifiers: { lazy: t, trim: r, number: o } }, s) {
      e[ps] = Hc(s);
      const c = o || (s.props && s.props.type === "number");
      _o(e, t ? "change" : "input", (f) => {
        if (f.target.composing) return;
        let d = e.value;
        r && (d = d.trim()), c && (d = ad(d)), e[ps](d);
      }),
        r &&
          _o(e, "change", () => {
            e.value = e.value.trim();
          }),
        t || (_o(e, "compositionstart", lT), _o(e, "compositionend", jv), _o(e, "change", jv));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: o, trim: s, number: c } }, f) {
      if (((e[ps] = Hc(f)), e.composing)) return;
      const d = (c || e.type === "number") && !/^0\d/.test(e.value) ? ad(e.value) : e.value,
        h = t ?? "";
      d !== h &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((o && t === r) || (s && e.value.trim() === h))) ||
          (e.value = h));
    },
  },
  cT = {
    deep: !0,
    created(e, t, r) {
      (e[ps] = Hc(r)),
        _o(e, "change", () => {
          const o = e._modelValue,
            s = uT(e),
            c = e.checked,
            f = e[ps];
          if (ze(o)) {
            const d = F0(o, s),
              h = d !== -1;
            if (c && !h) f(o.concat(s));
            else if (!c && h) {
              const p = [...o];
              p.splice(d, 1), f(p);
            }
          } else if (lu(o)) {
            const d = new Set(o);
            c ? d.add(s) : d.delete(s), f(d);
          } else f(Wy(e, c));
        });
    },
    mounted: Gv,
    beforeUpdate(e, t, r) {
      (e[ps] = Hc(r)), Gv(e, t, r);
    },
  };
function Gv(e, { value: t, oldValue: r }, o) {
  (e._modelValue = t),
    ze(t)
      ? (e.checked = F0(t, o.props.value) > -1)
      : lu(t)
        ? (e.checked = t.has(o.props.value))
        : t !== r && (e.checked = uu(t, Wy(e, !0)));
}
function uT(e) {
  return "_value" in e ? e._value : e.value;
}
function Wy(e, t) {
  const r = t ? "_trueValue" : "_falseValue";
  return r in e ? e[r] : t;
}
const fT = ["ctrl", "shift", "alt", "meta"],
  dT = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => fT.some((r) => e[`${r}Key`] && !t.includes(r)),
  },
  yc = (e, t) => {
    const r = e._withMods || (e._withMods = {}),
      o = t.join(".");
    return (
      r[o] ||
      (r[o] = (s, ...c) => {
        for (let f = 0; f < t.length; f++) {
          const d = dT[t[f]];
          if (d && d(s, t)) return;
        }
        return e(s, ...c);
      })
    );
  },
  hT = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  Sd = (e, t) => {
    const r = e._withKeys || (e._withKeys = {}),
      o = t.join(".");
    return (
      r[o] ||
      (r[o] = (s) => {
        if (!("key" in s)) return;
        const c = Zi(s.key);
        if (t.some((f) => f === c || hT[f] === c)) return e(s);
      })
    );
  },
  pT = zt({ patchProp: oT }, Hk);
let Kv;
function gT() {
  return Kv || (Kv = hk(pT));
}
const Uy = (...e) => {
  const t = gT().createApp(...e),
    { mount: r } = t;
  return (
    (t.mount = (o) => {
      const s = mT(o);
      if (!s) return;
      const c = t._component;
      !Xe(c) && !c.render && !c.template && (c.template = s.innerHTML), (s.innerHTML = "");
      const f = r(s, !1, vT(s));
      return (
        s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), f
      );
    }),
    t
  );
};
function vT(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function mT(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const eo = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [o, s] of t) r[o] = s;
    return r;
  },
  yT = {};
function bT(e, t) {
  const r = Lo("RouterView");
  return le(), ot(r);
}
const wT = eo(yT, [["render", bT]]);
/*!
 * vue-router v4.4.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const ss = typeof document < "u";
function xT(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const yt = Object.assign;
function jf(e, t) {
  const r = {};
  for (const o in t) {
    const s = t[o];
    r[o] = wr(s) ? s.map(e) : e(s);
  }
  return r;
}
const Cl = () => {},
  wr = Array.isArray,
  Vy = /#/g,
  _T = /&/g,
  ST = /\//g,
  kT = /=/g,
  TT = /\?/g,
  jy = /\+/g,
  CT = /%5B/g,
  ET = /%5D/g,
  Gy = /%5E/g,
  LT = /%60/g,
  Ky = /%7B/g,
  AT = /%7C/g,
  Xy = /%7D/g,
  MT = /%20/g;
function Lh(e) {
  return encodeURI("" + e)
    .replace(AT, "|")
    .replace(CT, "[")
    .replace(ET, "]");
}
function NT(e) {
  return Lh(e).replace(Ky, "{").replace(Xy, "}").replace(Gy, "^");
}
function kd(e) {
  return Lh(e)
    .replace(jy, "%2B")
    .replace(MT, "+")
    .replace(Vy, "%23")
    .replace(_T, "%26")
    .replace(LT, "`")
    .replace(Ky, "{")
    .replace(Xy, "}")
    .replace(Gy, "^");
}
function $T(e) {
  return kd(e).replace(kT, "%3D");
}
function OT(e) {
  return Lh(e).replace(Vy, "%23").replace(TT, "%3F");
}
function PT(e) {
  return e == null ? "" : OT(e).replace(ST, "%2F");
}
function ql(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const RT = /\/$/,
  DT = (e) => e.replace(RT, "");
function Gf(e, t, r = "/") {
  let o,
    s = {},
    c = "",
    f = "";
  const d = t.indexOf("#");
  let h = t.indexOf("?");
  return (
    d < h && d >= 0 && (h = -1),
    h > -1 && ((o = t.slice(0, h)), (c = t.slice(h + 1, d > -1 ? d : t.length)), (s = e(c))),
    d > -1 && ((o = o || t.slice(0, d)), (f = t.slice(d, t.length))),
    (o = HT(o ?? t, r)),
    { fullPath: o + (c && "?") + c + f, path: o, query: s, hash: ql(f) }
  );
}
function zT(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "");
}
function Xv(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function IT(e, t, r) {
  const o = t.matched.length - 1,
    s = r.matched.length - 1;
  return (
    o > -1 &&
    o === s &&
    xs(t.matched[o], r.matched[s]) &&
    Yy(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  );
}
function xs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yy(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!FT(e[r], t[r])) return !1;
  return !0;
}
function FT(e, t) {
  return wr(e) ? Yv(e, t) : wr(t) ? Yv(t, e) : e === t;
}
function Yv(e, t) {
  return wr(t)
    ? e.length === t.length && e.every((r, o) => r === t[o])
    : e.length === 1 && e[0] === t;
}
function HT(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const r = t.split("/"),
    o = e.split("/"),
    s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let c = r.length - 1,
    f,
    d;
  for (f = 0; f < o.length; f++)
    if (((d = o[f]), d !== "."))
      if (d === "..") c > 1 && c--;
      else break;
  return r.slice(0, c).join("/") + "/" + o.slice(f).join("/");
}
const Ei = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Bl;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Bl || (Bl = {}));
var El;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(El || (El = {}));
function qT(e) {
  if (!e)
    if (ss) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"), (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), DT(e);
}
const BT = /^[^#]+#/;
function WT(e, t) {
  return e.replace(BT, "#") + t;
}
function UT(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - r.left - (t.left || 0),
    top: o.top - r.top - (t.top || 0),
  };
}
const ku = () => ({ left: window.scrollX, top: window.scrollY });
function VT(e) {
  let t;
  if ("el" in e) {
    const r = e.el,
      o = typeof r == "string" && r.startsWith("#"),
      s =
        typeof r == "string"
          ? o
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!s) return;
    t = UT(s, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function Zv(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Td = new Map();
function jT(e, t) {
  Td.set(e, t);
}
function GT(e) {
  const t = Td.get(e);
  return Td.delete(e), t;
}
let KT = () => location.protocol + "//" + location.host;
function Zy(e, t) {
  const { pathname: r, search: o, hash: s } = t,
    c = e.indexOf("#");
  if (c > -1) {
    let d = s.includes(e.slice(c)) ? e.slice(c).length : 1,
      h = s.slice(d);
    return h[0] !== "/" && (h = "/" + h), Xv(h, "");
  }
  return Xv(r, e) + o + s;
}
function XT(e, t, r, o) {
  let s = [],
    c = [],
    f = null;
  const d = ({ state: b }) => {
    const x = Zy(e, location),
      C = r.value,
      E = t.value;
    let N = 0;
    if (b) {
      if (((r.value = x), (t.value = b), f && f === C)) {
        f = null;
        return;
      }
      N = E ? b.position - E.position : 0;
    } else o(x);
    s.forEach((M) => {
      M(r.value, C, {
        delta: N,
        type: Bl.pop,
        direction: N ? (N > 0 ? El.forward : El.back) : El.unknown,
      });
    });
  };
  function h() {
    f = r.value;
  }
  function p(b) {
    s.push(b);
    const x = () => {
      const C = s.indexOf(b);
      C > -1 && s.splice(C, 1);
    };
    return c.push(x), x;
  }
  function v() {
    const { history: b } = window;
    b.state && b.replaceState(yt({}, b.state, { scroll: ku() }), "");
  }
  function y() {
    for (const b of c) b();
    (c = []),
      window.removeEventListener("popstate", d),
      window.removeEventListener("beforeunload", v);
  }
  return (
    window.addEventListener("popstate", d),
    window.addEventListener("beforeunload", v, { passive: !0 }),
    { pauseListeners: h, listen: p, destroy: y }
  );
}
function Jv(e, t, r, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: o,
    position: window.history.length,
    scroll: s ? ku() : null,
  };
}
function YT(e) {
  const { history: t, location: r } = window,
    o = { value: Zy(e, r) },
    s = { value: t.state };
  s.value ||
    c(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function c(h, p, v) {
    const y = e.indexOf("#"),
      b = y > -1 ? (r.host && document.querySelector("base") ? e : e.slice(y)) + h : KT() + e + h;
    try {
      t[v ? "replaceState" : "pushState"](p, "", b), (s.value = p);
    } catch (x) {
      console.error(x), r[v ? "replace" : "assign"](b);
    }
  }
  function f(h, p) {
    const v = yt({}, t.state, Jv(s.value.back, h, s.value.forward, !0), p, {
      position: s.value.position,
    });
    c(h, v, !0), (o.value = h);
  }
  function d(h, p) {
    const v = yt({}, s.value, t.state, { forward: h, scroll: ku() });
    c(v.current, v, !0);
    const y = yt({}, Jv(o.value, h, null), { position: v.position + 1 }, p);
    c(h, y, !1), (o.value = h);
  }
  return { location: o, state: s, push: d, replace: f };
}
function ZT(e) {
  e = qT(e);
  const t = YT(e),
    r = XT(e, t.state, t.location, t.replace);
  function o(c, f = !0) {
    f || r.pauseListeners(), history.go(c);
  }
  const s = yt({ location: "", base: e, go: o, createHref: WT.bind(null, e) }, t, r);
  return (
    Object.defineProperty(s, "location", { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(s, "state", { enumerable: !0, get: () => t.state.value }),
    s
  );
}
function JT(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    ZT(e)
  );
}
function QT(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Jy(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Qy = Symbol("");
var Qv;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Qv || (Qv = {}));
function _s(e, t) {
  return yt(new Error(), { type: e, [Qy]: !0 }, t);
}
function Yr(e, t) {
  return e instanceof Error && Qy in e && (t == null || !!(e.type & t));
}
const em = "[^/]+?",
  eC = { sensitive: !1, strict: !1, start: !0, end: !0 },
  tC = /[.+*?^${}()[\]/\\]/g;
function nC(e, t) {
  const r = yt({}, eC, t),
    o = [];
  let s = r.start ? "^" : "";
  const c = [];
  for (const p of e) {
    const v = p.length ? [] : [90];
    r.strict && !p.length && (s += "/");
    for (let y = 0; y < p.length; y++) {
      const b = p[y];
      let x = 40 + (r.sensitive ? 0.25 : 0);
      if (b.type === 0) y || (s += "/"), (s += b.value.replace(tC, "\\$&")), (x += 40);
      else if (b.type === 1) {
        const { value: C, repeatable: E, optional: N, regexp: M } = b;
        c.push({ name: C, repeatable: E, optional: N });
        const L = M || em;
        if (L !== em) {
          x += 10;
          try {
            new RegExp(`(${L})`);
          } catch (A) {
            throw new Error(`Invalid custom RegExp for param "${C}" (${L}): ` + A.message);
          }
        }
        let D = E ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        y || (D = N && p.length < 2 ? `(?:/${D})` : "/" + D),
          N && (D += "?"),
          (s += D),
          (x += 20),
          N && (x += -8),
          E && (x += -20),
          L === ".*" && (x += -50);
      }
      v.push(x);
    }
    o.push(v);
  }
  if (r.strict && r.end) {
    const p = o.length - 1;
    o[p][o[p].length - 1] += 0.7000000000000001;
  }
  r.strict || (s += "/?"), r.end ? (s += "$") : r.strict && (s += "(?:/|$)");
  const f = new RegExp(s, r.sensitive ? "" : "i");
  function d(p) {
    const v = p.match(f),
      y = {};
    if (!v) return null;
    for (let b = 1; b < v.length; b++) {
      const x = v[b] || "",
        C = c[b - 1];
      y[C.name] = x && C.repeatable ? x.split("/") : x;
    }
    return y;
  }
  function h(p) {
    let v = "",
      y = !1;
    for (const b of e) {
      (!y || !v.endsWith("/")) && (v += "/"), (y = !1);
      for (const x of b)
        if (x.type === 0) v += x.value;
        else if (x.type === 1) {
          const { value: C, repeatable: E, optional: N } = x,
            M = C in p ? p[C] : "";
          if (wr(M) && !E)
            throw new Error(
              `Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const L = wr(M) ? M.join("/") : M;
          if (!L)
            if (N) b.length < 2 && (v.endsWith("/") ? (v = v.slice(0, -1)) : (y = !0));
            else throw new Error(`Missing required param "${C}"`);
          v += L;
        }
    }
    return v || "/";
  }
  return { re: f, score: o, keys: c, parse: d, stringify: h };
}
function rC(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length; ) {
    const o = t[r] - e[r];
    if (o) return o;
    r++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function eb(e, t) {
  let r = 0;
  const o = e.score,
    s = t.score;
  for (; r < o.length && r < s.length; ) {
    const c = rC(o[r], s[r]);
    if (c) return c;
    r++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (tm(o)) return 1;
    if (tm(s)) return -1;
  }
  return s.length - o.length;
}
function tm(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const iC = { type: 0, value: "" },
  oC = /[a-zA-Z0-9_]/;
function sC(e) {
  if (!e) return [[]];
  if (e === "/") return [[iC]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(x) {
    throw new Error(`ERR (${r})/"${p}": ${x}`);
  }
  let r = 0,
    o = r;
  const s = [];
  let c;
  function f() {
    c && s.push(c), (c = []);
  }
  let d = 0,
    h,
    p = "",
    v = "";
  function y() {
    p &&
      (r === 0
        ? c.push({ type: 0, value: p })
        : r === 1 || r === 2 || r === 3
          ? (c.length > 1 &&
              (h === "*" || h === "+") &&
              t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),
            c.push({
              type: 1,
              value: p,
              regexp: v,
              repeatable: h === "*" || h === "+",
              optional: h === "*" || h === "?",
            }))
          : t("Invalid state to consume buffer"),
      (p = ""));
  }
  function b() {
    p += h;
  }
  for (; d < e.length; ) {
    if (((h = e[d++]), h === "\\" && r !== 2)) {
      (o = r), (r = 4);
      continue;
    }
    switch (r) {
      case 0:
        h === "/" ? (p && y(), f()) : h === ":" ? (y(), (r = 1)) : b();
        break;
      case 4:
        b(), (r = o);
        break;
      case 1:
        h === "("
          ? (r = 2)
          : oC.test(h)
            ? b()
            : (y(), (r = 0), h !== "*" && h !== "?" && h !== "+" && d--);
        break;
      case 2:
        h === ")" ? (v[v.length - 1] == "\\" ? (v = v.slice(0, -1) + h) : (r = 3)) : (v += h);
        break;
      case 3:
        y(), (r = 0), h !== "*" && h !== "?" && h !== "+" && d--, (v = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${p}"`), y(), f(), s;
}
function lC(e, t, r) {
  const o = nC(sC(e.path), r),
    s = yt(o, { record: e, parent: t, children: [], alias: [] });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function aC(e, t) {
  const r = [],
    o = new Map();
  t = im({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(y) {
    return o.get(y);
  }
  function c(y, b, x) {
    const C = !x,
      E = cC(y);
    E.aliasOf = x && x.record;
    const N = im(t, y),
      M = [E];
    if ("alias" in y) {
      const A = typeof y.alias == "string" ? [y.alias] : y.alias;
      for (const H of A)
        M.push(
          yt({}, E, {
            components: x ? x.record.components : E.components,
            path: H,
            aliasOf: x ? x.record : E,
          }),
        );
    }
    let L, D;
    for (const A of M) {
      const { path: H } = A;
      if (b && H[0] !== "/") {
        const z = b.record.path,
          J = z[z.length - 1] === "/" ? "" : "/";
        A.path = b.record.path + (H && J + H);
      }
      if (
        ((L = lC(A, b, N)),
        x
          ? x.alias.push(L)
          : ((D = D || L), D !== L && D.alias.push(L), C && y.name && !rm(L) && f(y.name)),
        tb(L) && h(L),
        E.children)
      ) {
        const z = E.children;
        for (let J = 0; J < z.length; J++) c(z[J], L, x && x.children[J]);
      }
      x = x || L;
    }
    return D
      ? () => {
          f(D);
        }
      : Cl;
  }
  function f(y) {
    if (Jy(y)) {
      const b = o.get(y);
      b && (o.delete(y), r.splice(r.indexOf(b), 1), b.children.forEach(f), b.alias.forEach(f));
    } else {
      const b = r.indexOf(y);
      b > -1 &&
        (r.splice(b, 1),
        y.record.name && o.delete(y.record.name),
        y.children.forEach(f),
        y.alias.forEach(f));
    }
  }
  function d() {
    return r;
  }
  function h(y) {
    const b = dC(y, r);
    r.splice(b, 0, y), y.record.name && !rm(y) && o.set(y.record.name, y);
  }
  function p(y, b) {
    let x,
      C = {},
      E,
      N;
    if ("name" in y && y.name) {
      if (((x = o.get(y.name)), !x)) throw _s(1, { location: y });
      (N = x.record.name),
        (C = yt(
          nm(
            b.params,
            x.keys
              .filter((D) => !D.optional)
              .concat(x.parent ? x.parent.keys.filter((D) => D.optional) : [])
              .map((D) => D.name),
          ),
          y.params &&
            nm(
              y.params,
              x.keys.map((D) => D.name),
            ),
        )),
        (E = x.stringify(C));
    } else if (y.path != null)
      (E = y.path), (x = r.find((D) => D.re.test(E))), x && ((C = x.parse(E)), (N = x.record.name));
    else {
      if (((x = b.name ? o.get(b.name) : r.find((D) => D.re.test(b.path))), !x))
        throw _s(1, { location: y, currentLocation: b });
      (N = x.record.name), (C = yt({}, b.params, y.params)), (E = x.stringify(C));
    }
    const M = [];
    let L = x;
    for (; L; ) M.unshift(L.record), (L = L.parent);
    return { name: N, path: E, params: C, matched: M, meta: fC(M) };
  }
  e.forEach((y) => c(y));
  function v() {
    (r.length = 0), o.clear();
  }
  return {
    addRoute: c,
    resolve: p,
    removeRoute: f,
    clearRoutes: v,
    getRoutes: d,
    getRecordMatcher: s,
  };
}
function nm(e, t) {
  const r = {};
  for (const o of t) o in e && (r[o] = e[o]);
  return r;
}
function cC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: uC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component },
  };
}
function uC(e) {
  const t = {},
    r = e.props || !1;
  if ("component" in e) t.default = r;
  else for (const o in e.components) t[o] = typeof r == "object" ? r[o] : r;
  return t;
}
function rm(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function fC(e) {
  return e.reduce((t, r) => yt(t, r.meta), {});
}
function im(e, t) {
  const r = {};
  for (const o in e) r[o] = o in t ? t[o] : e[o];
  return r;
}
function dC(e, t) {
  let r = 0,
    o = t.length;
  for (; r !== o; ) {
    const c = (r + o) >> 1;
    eb(e, t[c]) < 0 ? (o = c) : (r = c + 1);
  }
  const s = hC(e);
  return s && (o = t.lastIndexOf(s, o - 1)), o;
}
function hC(e) {
  let t = e;
  for (; (t = t.parent); ) if (tb(t) && eb(e, t) === 0) return t;
}
function tb({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect);
}
function pC(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const c = o[s].replace(jy, " "),
      f = c.indexOf("="),
      d = ql(f < 0 ? c : c.slice(0, f)),
      h = f < 0 ? null : ql(c.slice(f + 1));
    if (d in t) {
      let p = t[d];
      wr(p) || (p = t[d] = [p]), p.push(h);
    } else t[d] = h;
  }
  return t;
}
function om(e) {
  let t = "";
  for (let r in e) {
    const o = e[r];
    if (((r = $T(r)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + r);
      continue;
    }
    (wr(o) ? o.map((c) => c && kd(c)) : [o && kd(o)]).forEach((c) => {
      c !== void 0 && ((t += (t.length ? "&" : "") + r), c != null && (t += "=" + c));
    });
  }
  return t;
}
function gC(e) {
  const t = {};
  for (const r in e) {
    const o = e[r];
    o !== void 0 &&
      (t[r] = wr(o) ? o.map((s) => (s == null ? null : "" + s)) : o == null ? o : "" + o);
  }
  return t;
}
const vC = Symbol(""),
  sm = Symbol(""),
  Ah = Symbol(""),
  nb = Symbol(""),
  Cd = Symbol("");
function fl() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const s = e.indexOf(o);
        s > -1 && e.splice(s, 1);
      }
    );
  }
  function r() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: r };
}
function Pi(e, t, r, o, s, c = (f) => f()) {
  const f = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () =>
    new Promise((d, h) => {
      const p = (b) => {
          b === !1
            ? h(_s(4, { from: r, to: t }))
            : b instanceof Error
              ? h(b)
              : QT(b)
                ? h(_s(2, { from: t, to: b }))
                : (f && o.enterCallbacks[s] === f && typeof b == "function" && f.push(b), d());
        },
        v = c(() => e.call(o && o.instances[s], t, r, p));
      let y = Promise.resolve(v);
      e.length < 3 && (y = y.then(p)), y.catch((b) => h(b));
    });
}
function Kf(e, t, r, o, s = (c) => c()) {
  const c = [];
  for (const f of e)
    for (const d in f.components) {
      let h = f.components[d];
      if (!(t !== "beforeRouteEnter" && !f.instances[d]))
        if (mC(h)) {
          const v = (h.__vccOpts || h)[t];
          v && c.push(Pi(v, r, o, f, d, s));
        } else {
          let p = h();
          c.push(() =>
            p.then((v) => {
              if (!v)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${d}" at "${f.path}"`),
                );
              const y = xT(v) ? v.default : v;
              f.components[d] = y;
              const x = (y.__vccOpts || y)[t];
              return x && Pi(x, r, o, f, d, s)();
            }),
          );
        }
    }
  return c;
}
function mC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function lm(e) {
  const t = ri(Ah),
    r = ri(nb),
    o = $e(() => {
      const h = B(e.to);
      return t.resolve(h);
    }),
    s = $e(() => {
      const { matched: h } = o.value,
        { length: p } = h,
        v = h[p - 1],
        y = r.matched;
      if (!v || !y.length) return -1;
      const b = y.findIndex(xs.bind(null, v));
      if (b > -1) return b;
      const x = am(h[p - 2]);
      return p > 1 && am(v) === x && y[y.length - 1].path !== x
        ? y.findIndex(xs.bind(null, h[p - 2]))
        : b;
    }),
    c = $e(() => s.value > -1 && xC(r.params, o.value.params)),
    f = $e(() => s.value > -1 && s.value === r.matched.length - 1 && Yy(r.params, o.value.params));
  function d(h = {}) {
    return wC(h) ? t[B(e.replace) ? "replace" : "push"](B(e.to)).catch(Cl) : Promise.resolve();
  }
  return { route: o, href: $e(() => o.value.href), isActive: c, isExactActive: f, navigate: d };
}
const yC = gt({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: lm,
    setup(e, { slots: t }) {
      const r = Qn(lm(e)),
        { options: o } = ri(Ah),
        s = $e(() => ({
          [cm(e.activeClass, o.linkActiveClass, "router-link-active")]: r.isActive,
          [cm(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]:
            r.isExactActive,
        }));
      return () => {
        const c = t.default && t.default(r);
        return e.custom
          ? c
          : la(
              "a",
              {
                "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: s.value,
              },
              c,
            );
      };
    },
  }),
  bC = yC;
function wC(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function xC(e, t) {
  for (const r in t) {
    const o = t[r],
      s = e[r];
    if (typeof o == "string") {
      if (o !== s) return !1;
    } else if (!wr(s) || s.length !== o.length || o.some((c, f) => c !== s[f])) return !1;
  }
  return !0;
}
function am(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const cm = (e, t, r) => e ?? t ?? r,
  _C = gt({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const o = ri(Cd),
        s = $e(() => e.route || o.value),
        c = ri(sm, 0),
        f = $e(() => {
          let p = B(c);
          const { matched: v } = s.value;
          let y;
          for (; (y = v[p]) && !y.components; ) p++;
          return p;
        }),
        d = $e(() => s.value.matched[f.value]);
      gc(
        sm,
        $e(() => f.value + 1),
      ),
        gc(vC, d),
        gc(Cd, s);
      const h = je();
      return (
        qt(
          () => [h.value, d.value, e.name],
          ([p, v, y], [b, x, C]) => {
            v &&
              ((v.instances[y] = p),
              x &&
                x !== v &&
                p &&
                p === b &&
                (v.leaveGuards.size || (v.leaveGuards = x.leaveGuards),
                v.updateGuards.size || (v.updateGuards = x.updateGuards))),
              p && v && (!x || !xs(v, x) || !b) && (v.enterCallbacks[y] || []).forEach((E) => E(p));
          },
          { flush: "post" },
        ),
        () => {
          const p = s.value,
            v = e.name,
            y = d.value,
            b = y && y.components[v];
          if (!b) return um(r.default, { Component: b, route: p });
          const x = y.props[v],
            C = x ? (x === !0 ? p.params : typeof x == "function" ? x(p) : x) : null,
            N = la(
              b,
              yt({}, C, t, {
                onVnodeUnmounted: (M) => {
                  M.component.isUnmounted && (y.instances[v] = null);
                },
                ref: h,
              }),
            );
          return um(r.default, { Component: N, route: p }) || N;
        }
      );
    },
  });
function um(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const SC = _C;
function kC(e) {
  const t = aC(e.routes, e),
    r = e.parseQuery || pC,
    o = e.stringifyQuery || om,
    s = e.history,
    c = fl(),
    f = fl(),
    d = fl(),
    h = Fr(Ei);
  let p = Ei;
  ss &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const v = jf.bind(null, (X) => "" + X),
    y = jf.bind(null, PT),
    b = jf.bind(null, ql);
  function x(X, ae) {
    let de, Ne;
    return Jy(X) ? ((de = t.getRecordMatcher(X)), (Ne = ae)) : (Ne = X), t.addRoute(Ne, de);
  }
  function C(X) {
    const ae = t.getRecordMatcher(X);
    ae && t.removeRoute(ae);
  }
  function E() {
    return t.getRoutes().map((X) => X.record);
  }
  function N(X) {
    return !!t.getRecordMatcher(X);
  }
  function M(X, ae) {
    if (((ae = yt({}, ae || h.value)), typeof X == "string")) {
      const F = Gf(r, X, ae.path),
        Z = t.resolve({ path: F.path }, ae),
        ce = s.createHref(F.fullPath);
      return yt(F, Z, { params: b(Z.params), hash: ql(F.hash), redirectedFrom: void 0, href: ce });
    }
    let de;
    if (X.path != null) de = yt({}, X, { path: Gf(r, X.path, ae.path).path });
    else {
      const F = yt({}, X.params);
      for (const Z in F) F[Z] == null && delete F[Z];
      (de = yt({}, X, { params: y(F) })), (ae.params = y(ae.params));
    }
    const Ne = t.resolve(de, ae),
      Ce = X.hash || "";
    Ne.params = v(b(Ne.params));
    const Ye = zT(o, yt({}, X, { hash: NT(Ce), path: Ne.path })),
      O = s.createHref(Ye);
    return yt({ fullPath: Ye, hash: Ce, query: o === om ? gC(X.query) : X.query || {} }, Ne, {
      redirectedFrom: void 0,
      href: O,
    });
  }
  function L(X) {
    return typeof X == "string" ? Gf(r, X, h.value.path) : yt({}, X);
  }
  function D(X, ae) {
    if (p !== X) return _s(8, { from: ae, to: X });
  }
  function A(X) {
    return J(X);
  }
  function H(X) {
    return A(yt(L(X), { replace: !0 }));
  }
  function z(X) {
    const ae = X.matched[X.matched.length - 1];
    if (ae && ae.redirect) {
      const { redirect: de } = ae;
      let Ne = typeof de == "function" ? de(X) : de;
      return (
        typeof Ne == "string" &&
          ((Ne = Ne.includes("?") || Ne.includes("#") ? (Ne = L(Ne)) : { path: Ne }),
          (Ne.params = {})),
        yt({ query: X.query, hash: X.hash, params: Ne.path != null ? {} : X.params }, Ne)
      );
    }
  }
  function J(X, ae) {
    const de = (p = M(X)),
      Ne = h.value,
      Ce = X.state,
      Ye = X.force,
      O = X.replace === !0,
      F = z(de);
    if (F)
      return J(
        yt(L(F), { state: typeof F == "object" ? yt({}, Ce, F.state) : Ce, force: Ye, replace: O }),
        ae || de,
      );
    const Z = de;
    Z.redirectedFrom = ae;
    let ce;
    return (
      !Ye && IT(o, Ne, de) && ((ce = _s(16, { to: Z, from: Ne })), Be(Ne, Ne, !0, !1)),
      (ce ? Promise.resolve(ce) : j(Z, Ne))
        .catch((se) => (Yr(se) ? (Yr(se, 2) ? se : Me(se)) : re(se, Z, Ne)))
        .then((se) => {
          if (se) {
            if (Yr(se, 2))
              return J(
                yt({ replace: O }, L(se.to), {
                  state: typeof se.to == "object" ? yt({}, Ce, se.to.state) : Ce,
                  force: Ye,
                }),
                ae || Z,
              );
          } else se = K(Z, Ne, !0, O, Ce);
          return te(Z, Ne, se), se;
        })
    );
  }
  function ie(X, ae) {
    const de = D(X, ae);
    return de ? Promise.reject(de) : Promise.resolve();
  }
  function ne(X) {
    const ae = nt.values().next().value;
    return ae && typeof ae.runWithContext == "function" ? ae.runWithContext(X) : X();
  }
  function j(X, ae) {
    let de;
    const [Ne, Ce, Ye] = TC(X, ae);
    de = Kf(Ne.reverse(), "beforeRouteLeave", X, ae);
    for (const F of Ne)
      F.leaveGuards.forEach((Z) => {
        de.push(Pi(Z, X, ae));
      });
    const O = ie.bind(null, X, ae);
    return (
      de.push(O),
      Te(de)
        .then(() => {
          de = [];
          for (const F of c.list()) de.push(Pi(F, X, ae));
          return de.push(O), Te(de);
        })
        .then(() => {
          de = Kf(Ce, "beforeRouteUpdate", X, ae);
          for (const F of Ce)
            F.updateGuards.forEach((Z) => {
              de.push(Pi(Z, X, ae));
            });
          return de.push(O), Te(de);
        })
        .then(() => {
          de = [];
          for (const F of Ye)
            if (F.beforeEnter)
              if (wr(F.beforeEnter)) for (const Z of F.beforeEnter) de.push(Pi(Z, X, ae));
              else de.push(Pi(F.beforeEnter, X, ae));
          return de.push(O), Te(de);
        })
        .then(
          () => (
            X.matched.forEach((F) => (F.enterCallbacks = {})),
            (de = Kf(Ye, "beforeRouteEnter", X, ae, ne)),
            de.push(O),
            Te(de)
          ),
        )
        .then(() => {
          de = [];
          for (const F of f.list()) de.push(Pi(F, X, ae));
          return de.push(O), Te(de);
        })
        .catch((F) => (Yr(F, 8) ? F : Promise.reject(F)))
    );
  }
  function te(X, ae, de) {
    d.list().forEach((Ne) => ne(() => Ne(X, ae, de)));
  }
  function K(X, ae, de, Ne, Ce) {
    const Ye = D(X, ae);
    if (Ye) return Ye;
    const O = ae === Ei,
      F = ss ? history.state : {};
    de &&
      (Ne || O
        ? s.replace(X.fullPath, yt({ scroll: O && F && F.scroll }, Ce))
        : s.push(X.fullPath, Ce)),
      (h.value = X),
      Be(X, ae, de, O),
      Me();
  }
  let V;
  function I() {
    V ||
      (V = s.listen((X, ae, de) => {
        if (!Ze.listening) return;
        const Ne = M(X),
          Ce = z(Ne);
        if (Ce) {
          J(yt(Ce, { replace: !0 }), Ne).catch(Cl);
          return;
        }
        p = Ne;
        const Ye = h.value;
        ss && jT(Zv(Ye.fullPath, de.delta), ku()),
          j(Ne, Ye)
            .catch((O) =>
              Yr(O, 12)
                ? O
                : Yr(O, 2)
                  ? (J(O.to, Ne)
                      .then((F) => {
                        Yr(F, 20) && !de.delta && de.type === Bl.pop && s.go(-1, !1);
                      })
                      .catch(Cl),
                    Promise.reject())
                  : (de.delta && s.go(-de.delta, !1), re(O, Ne, Ye)),
            )
            .then((O) => {
              (O = O || K(Ne, Ye, !1)),
                O &&
                  (de.delta && !Yr(O, 8)
                    ? s.go(-de.delta, !1)
                    : de.type === Bl.pop && Yr(O, 20) && s.go(-1, !1)),
                te(Ne, Ye, O);
            })
            .catch(Cl);
      }));
  }
  let k = fl(),
    q = fl(),
    W;
  function re(X, ae, de) {
    Me(X);
    const Ne = q.list();
    return Ne.length ? Ne.forEach((Ce) => Ce(X, ae, de)) : console.error(X), Promise.reject(X);
  }
  function me() {
    return W && h.value !== Ei
      ? Promise.resolve()
      : new Promise((X, ae) => {
          k.add([X, ae]);
        });
  }
  function Me(X) {
    return W || ((W = !X), I(), k.list().forEach(([ae, de]) => (X ? de(X) : ae())), k.reset()), X;
  }
  function Be(X, ae, de, Ne) {
    const { scrollBehavior: Ce } = e;
    if (!ss || !Ce) return Promise.resolve();
    const Ye =
      (!de && GT(Zv(X.fullPath, 0))) ||
      ((Ne || !de) && history.state && history.state.scroll) ||
      null;
    return ln()
      .then(() => Ce(X, ae, Ye))
      .then((O) => O && VT(O))
      .catch((O) => re(O, X, ae));
  }
  const Ve = (X) => s.go(X);
  let it;
  const nt = new Set(),
    Ze = {
      currentRoute: h,
      listening: !0,
      addRoute: x,
      removeRoute: C,
      clearRoutes: t.clearRoutes,
      hasRoute: N,
      getRoutes: E,
      resolve: M,
      options: e,
      push: A,
      replace: H,
      go: Ve,
      back: () => Ve(-1),
      forward: () => Ve(1),
      beforeEach: c.add,
      beforeResolve: f.add,
      afterEach: d.add,
      onError: q.add,
      isReady: me,
      install(X) {
        const ae = this;
        X.component("RouterLink", bC),
          X.component("RouterView", SC),
          (X.config.globalProperties.$router = ae),
          Object.defineProperty(X.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => B(h),
          }),
          ss && !it && h.value === Ei && ((it = !0), A(s.location).catch((Ce) => {}));
        const de = {};
        for (const Ce in Ei)
          Object.defineProperty(de, Ce, { get: () => h.value[Ce], enumerable: !0 });
        X.provide(Ah, ae), X.provide(nb, dh(de)), X.provide(Cd, h);
        const Ne = X.unmount;
        nt.add(X),
          (X.unmount = function () {
            nt.delete(X),
              nt.size < 1 && ((p = Ei), V && V(), (V = null), (h.value = Ei), (it = !1), (W = !1)),
              Ne();
          });
      },
    };
  function Te(X) {
    return X.reduce((ae, de) => ae.then(() => ne(de)), Promise.resolve());
  }
  return Ze;
}
function TC(e, t) {
  const r = [],
    o = [],
    s = [],
    c = Math.max(t.matched.length, e.matched.length);
  for (let f = 0; f < c; f++) {
    const d = t.matched[f];
    d && (e.matched.find((p) => xs(p, d)) ? o.push(d) : r.push(d));
    const h = e.matched[f];
    h && (t.matched.find((p) => xs(p, h)) || s.push(h));
  }
  return [r, o, s];
}
const CC = ["top", "right", "bottom", "left"],
  fm = ["start", "end"],
  dm = CC.reduce((e, t) => e.concat(t, t + "-" + fm[0], t + "-" + fm[1]), []),
  Wl = Math.min,
  wo = Math.max,
  EC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  LC = { start: "end", end: "start" };
function Ed(e, t, r) {
  return wo(e, Wl(t, r));
}
function No(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ir(e) {
  return e.split("-")[0];
}
function mr(e) {
  return e.split("-")[1];
}
function rb(e) {
  return e === "x" ? "y" : "x";
}
function Mh(e) {
  return e === "y" ? "height" : "width";
}
function aa(e) {
  return ["top", "bottom"].includes(Ir(e)) ? "y" : "x";
}
function Nh(e) {
  return rb(aa(e));
}
function ib(e, t, r) {
  r === void 0 && (r = !1);
  const o = mr(e),
    s = Nh(e),
    c = Mh(s);
  let f =
    s === "x" ? (o === (r ? "end" : "start") ? "right" : "left") : o === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (f = Bc(f)), [f, Bc(f)];
}
function AC(e) {
  const t = Bc(e);
  return [qc(e), t, qc(t)];
}
function qc(e) {
  return e.replace(/start|end/g, (t) => LC[t]);
}
function MC(e, t, r) {
  const o = ["left", "right"],
    s = ["right", "left"],
    c = ["top", "bottom"],
    f = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? s : o) : t ? o : s;
    case "left":
    case "right":
      return t ? c : f;
    default:
      return [];
  }
}
function NC(e, t, r, o) {
  const s = mr(e);
  let c = MC(Ir(e), r === "start", o);
  return s && ((c = c.map((f) => f + "-" + s)), t && (c = c.concat(c.map(qc)))), c;
}
function Bc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => EC[t]);
}
function $C(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function ob(e) {
  return typeof e != "number" ? $C(e) : { top: e, right: e, bottom: e, left: e };
}
function Ll(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
function hm(e, t, r) {
  let { reference: o, floating: s } = e;
  const c = aa(t),
    f = Nh(t),
    d = Mh(f),
    h = Ir(t),
    p = c === "y",
    v = o.x + o.width / 2 - s.width / 2,
    y = o.y + o.height / 2 - s.height / 2,
    b = o[d] / 2 - s[d] / 2;
  let x;
  switch (h) {
    case "top":
      x = { x: v, y: o.y - s.height };
      break;
    case "bottom":
      x = { x: v, y: o.y + o.height };
      break;
    case "right":
      x = { x: o.x + o.width, y };
      break;
    case "left":
      x = { x: o.x - s.width, y };
      break;
    default:
      x = { x: o.x, y: o.y };
  }
  switch (mr(t)) {
    case "start":
      x[f] -= b * (r && p ? -1 : 1);
      break;
    case "end":
      x[f] += b * (r && p ? -1 : 1);
      break;
  }
  return x;
}
const OC = async (e, t, r) => {
  const { placement: o = "bottom", strategy: s = "absolute", middleware: c = [], platform: f } = r,
    d = c.filter(Boolean),
    h = await (f.isRTL == null ? void 0 : f.isRTL(t));
  let p = await f.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: v, y } = hm(p, o, h),
    b = o,
    x = {},
    C = 0;
  for (let E = 0; E < d.length; E++) {
    const { name: N, fn: M } = d[E],
      {
        x: L,
        y: D,
        data: A,
        reset: H,
      } = await M({
        x: v,
        y,
        initialPlacement: o,
        placement: b,
        strategy: s,
        middlewareData: x,
        rects: p,
        platform: f,
        elements: { reference: e, floating: t },
      });
    (v = L ?? v),
      (y = D ?? y),
      (x = { ...x, [N]: { ...x[N], ...A } }),
      H &&
        C <= 50 &&
        (C++,
        typeof H == "object" &&
          (H.placement && (b = H.placement),
          H.rects &&
            (p =
              H.rects === !0
                ? await f.getElementRects({ reference: e, floating: t, strategy: s })
                : H.rects),
          ({ x: v, y } = hm(p, b, h))),
        (E = -1));
  }
  return { x: v, y, placement: b, strategy: s, middlewareData: x };
};
async function Tu(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: o, y: s, platform: c, rects: f, elements: d, strategy: h } = e,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: y = "floating",
      altBoundary: b = !1,
      padding: x = 0,
    } = No(t, e),
    C = ob(x),
    N = d[b ? (y === "floating" ? "reference" : "floating") : y],
    M = Ll(
      await c.getClippingRect({
        element:
          (r = await (c.isElement == null ? void 0 : c.isElement(N))) == null || r
            ? N
            : N.contextElement ||
              (await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(d.floating))),
        boundary: p,
        rootBoundary: v,
        strategy: h,
      }),
    ),
    L = y === "floating" ? { ...f.floating, x: o, y: s } : f.reference,
    D = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d.floating)),
    A = (await (c.isElement == null ? void 0 : c.isElement(D)))
      ? (await (c.getScale == null ? void 0 : c.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    H = Ll(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: L,
            offsetParent: D,
            strategy: h,
          })
        : L,
    );
  return {
    top: (M.top - H.top + C.top) / A.y,
    bottom: (H.bottom - M.bottom + C.bottom) / A.y,
    left: (M.left - H.left + C.left) / A.x,
    right: (H.right - M.right + C.right) / A.x,
  };
}
const PC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const { x: r, y: o, placement: s, rects: c, platform: f, elements: d, middlewareData: h } = t,
      { element: p, padding: v = 0 } = No(e, t) || {};
    if (p == null) return {};
    const y = ob(v),
      b = { x: r, y: o },
      x = Nh(s),
      C = Mh(x),
      E = await f.getDimensions(p),
      N = x === "y",
      M = N ? "top" : "left",
      L = N ? "bottom" : "right",
      D = N ? "clientHeight" : "clientWidth",
      A = c.reference[C] + c.reference[x] - b[x] - c.floating[C],
      H = b[x] - c.reference[x],
      z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
    let J = z ? z[D] : 0;
    (!J || !(await (f.isElement == null ? void 0 : f.isElement(z)))) &&
      (J = d.floating[D] || c.floating[C]);
    const ie = A / 2 - H / 2,
      ne = J / 2 - E[C] / 2 - 1,
      j = Wl(y[M], ne),
      te = Wl(y[L], ne),
      K = j,
      V = J - E[C] - te,
      I = J / 2 - E[C] / 2 + ie,
      k = Ed(K, I, V),
      q =
        !h.arrow &&
        mr(s) != null &&
        I !== k &&
        c.reference[C] / 2 - (I < K ? j : te) - E[C] / 2 < 0,
      W = q ? (I < K ? I - K : I - V) : 0;
    return {
      [x]: b[x] + W,
      data: { [x]: k, centerOffset: I - k - W, ...(q && { alignmentOffset: W }) },
      reset: q,
    };
  },
});
function RC(e, t, r) {
  return (
    e
      ? [...r.filter((s) => mr(s) === e), ...r.filter((s) => mr(s) !== e)]
      : r.filter((s) => Ir(s) === s)
  ).filter((s) => (e ? mr(s) === e || (t ? qc(s) !== s : !1) : !0));
}
const DC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "autoPlacement",
        options: e,
        async fn(t) {
          var r, o, s;
          const { rects: c, middlewareData: f, placement: d, platform: h, elements: p } = t,
            {
              crossAxis: v = !1,
              alignment: y,
              allowedPlacements: b = dm,
              autoAlignment: x = !0,
              ...C
            } = No(e, t),
            E = y !== void 0 || b === dm ? RC(y || null, x, b) : b,
            N = await Tu(t, C),
            M = ((r = f.autoPlacement) == null ? void 0 : r.index) || 0,
            L = E[M];
          if (L == null) return {};
          const D = ib(L, c, await (h.isRTL == null ? void 0 : h.isRTL(p.floating)));
          if (d !== L) return { reset: { placement: E[0] } };
          const A = [N[Ir(L)], N[D[0]], N[D[1]]],
            H = [
              ...(((o = f.autoPlacement) == null ? void 0 : o.overflows) || []),
              { placement: L, overflows: A },
            ],
            z = E[M + 1];
          if (z) return { data: { index: M + 1, overflows: H }, reset: { placement: z } };
          const J = H.map((j) => {
              const te = mr(j.placement);
              return [
                j.placement,
                te && v ? j.overflows.slice(0, 2).reduce((K, V) => K + V, 0) : j.overflows[0],
                j.overflows,
              ];
            }).sort((j, te) => j[1] - te[1]),
            ne =
              ((s = J.filter((j) => j[2].slice(0, mr(j[0]) ? 2 : 3).every((te) => te <= 0))[0]) ==
              null
                ? void 0
                : s[0]) || J[0][0];
          return ne !== d ? { data: { index: M + 1, overflows: H }, reset: { placement: ne } } : {};
        },
      }
    );
  },
  zC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, o;
          const {
              placement: s,
              middlewareData: c,
              rects: f,
              initialPlacement: d,
              platform: h,
              elements: p,
            } = t,
            {
              mainAxis: v = !0,
              crossAxis: y = !0,
              fallbackPlacements: b,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: C = "none",
              flipAlignment: E = !0,
              ...N
            } = No(e, t);
          if ((r = c.arrow) != null && r.alignmentOffset) return {};
          const M = Ir(s),
            L = Ir(d) === d,
            D = await (h.isRTL == null ? void 0 : h.isRTL(p.floating)),
            A = b || (L || !E ? [Bc(d)] : AC(d));
          !b && C !== "none" && A.push(...NC(d, E, C, D));
          const H = [d, ...A],
            z = await Tu(t, N),
            J = [];
          let ie = ((o = c.flip) == null ? void 0 : o.overflows) || [];
          if ((v && J.push(z[M]), y)) {
            const K = ib(s, f, D);
            J.push(z[K[0]], z[K[1]]);
          }
          if (((ie = [...ie, { placement: s, overflows: J }]), !J.every((K) => K <= 0))) {
            var ne, j;
            const K = (((ne = c.flip) == null ? void 0 : ne.index) || 0) + 1,
              V = H[K];
            if (V) return { data: { index: K, overflows: ie }, reset: { placement: V } };
            let I =
              (j = ie
                .filter((k) => k.overflows[0] <= 0)
                .sort((k, q) => k.overflows[1] - q.overflows[1])[0]) == null
                ? void 0
                : j.placement;
            if (!I)
              switch (x) {
                case "bestFit": {
                  var te;
                  const k =
                    (te = ie
                      .map((q) => [
                        q.placement,
                        q.overflows.filter((W) => W > 0).reduce((W, re) => W + re, 0),
                      ])
                      .sort((q, W) => q[1] - W[1])[0]) == null
                      ? void 0
                      : te[0];
                  k && (I = k);
                  break;
                }
                case "initialPlacement":
                  I = d;
                  break;
              }
            if (s !== I) return { reset: { placement: I } };
          }
          return {};
        },
      }
    );
  };
async function IC(e, t) {
  const { placement: r, platform: o, elements: s } = e,
    c = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)),
    f = Ir(r),
    d = mr(r),
    h = aa(r) === "y",
    p = ["left", "top"].includes(f) ? -1 : 1,
    v = c && h ? -1 : 1,
    y = No(t, e);
  let {
    mainAxis: b,
    crossAxis: x,
    alignmentAxis: C,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
  return (
    d && typeof C == "number" && (x = d === "end" ? C * -1 : C),
    h ? { x: x * v, y: b * p } : { x: b * p, y: x * v }
  );
}
const FC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, o;
          const { x: s, y: c, placement: f, middlewareData: d } = t,
            h = await IC(t, e);
          return f === ((r = d.offset) == null ? void 0 : r.placement) &&
            (o = d.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: s + h.x, y: c + h.y, data: { ...h, placement: f } };
        },
      }
    );
  },
  HC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: o, placement: s } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !1,
              limiter: d = {
                fn: (N) => {
                  let { x: M, y: L } = N;
                  return { x: M, y: L };
                },
              },
              ...h
            } = No(e, t),
            p = { x: r, y: o },
            v = await Tu(t, h),
            y = aa(Ir(s)),
            b = rb(y);
          let x = p[b],
            C = p[y];
          if (c) {
            const N = b === "y" ? "top" : "left",
              M = b === "y" ? "bottom" : "right",
              L = x + v[N],
              D = x - v[M];
            x = Ed(L, x, D);
          }
          if (f) {
            const N = y === "y" ? "top" : "left",
              M = y === "y" ? "bottom" : "right",
              L = C + v[N],
              D = C - v[M];
            C = Ed(L, C, D);
          }
          const E = d.fn({ ...t, [b]: x, [y]: C });
          return { ...E, data: { x: E.x - r, y: E.y - o } };
        },
      }
    );
  },
  qC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: o, platform: s, elements: c } = t,
            { apply: f = () => {}, ...d } = No(e, t),
            h = await Tu(t, d),
            p = Ir(r),
            v = mr(r),
            y = aa(r) === "y",
            { width: b, height: x } = o.floating;
          let C, E;
          p === "top" || p === "bottom"
            ? ((C = p),
              (E =
                v === ((await (s.isRTL == null ? void 0 : s.isRTL(c.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((E = p), (C = v === "end" ? "top" : "bottom"));
          const N = x - h[C],
            M = b - h[E],
            L = !t.middlewareData.shift;
          let D = N,
            A = M;
          if (y) {
            const z = b - h.left - h.right;
            A = v || L ? Wl(M, z) : z;
          } else {
            const z = x - h.top - h.bottom;
            D = v || L ? Wl(N, z) : z;
          }
          if (L && !v) {
            const z = wo(h.left, 0),
              J = wo(h.right, 0),
              ie = wo(h.top, 0),
              ne = wo(h.bottom, 0);
            y
              ? (A = b - 2 * (z !== 0 || J !== 0 ? z + J : wo(h.left, h.right)))
              : (D = x - 2 * (ie !== 0 || ne !== 0 ? ie + ne : wo(h.top, h.bottom)));
          }
          await f({ ...t, availableWidth: A, availableHeight: D });
          const H = await s.getDimensions(c.floating);
          return b !== H.width || x !== H.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Jn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $r(e) {
  return Jn(e).getComputedStyle(e);
}
const pm = Math.min,
  Al = Math.max,
  Wc = Math.round;
function sb(e) {
  const t = $r(e);
  let r = parseFloat(t.width),
    o = parseFloat(t.height);
  const s = e.offsetWidth,
    c = e.offsetHeight,
    f = Wc(r) !== s || Wc(o) !== c;
  return f && ((r = s), (o = c)), { width: r, height: o, fallback: f };
}
function ji(e) {
  return ab(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ec;
function lb() {
  if (ec) return ec;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((ec = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), ec)
    : navigator.userAgent;
}
function Or(e) {
  return e instanceof Jn(e).HTMLElement;
}
function Wi(e) {
  return e instanceof Jn(e).Element;
}
function ab(e) {
  return e instanceof Jn(e).Node;
}
function gm(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Jn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Cu(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: s } = $r(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function BC(e) {
  return ["table", "td", "th"].includes(ji(e));
}
function Ld(e) {
  const t = /firefox/i.test(lb()),
    r = $r(e),
    o = r.backdropFilter || r.WebkitBackdropFilter;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (!!o && o !== "none") ||
    (t && r.willChange === "filter") ||
    (t && !!r.filter && r.filter !== "none") ||
    ["transform", "perspective"].some((s) => r.willChange.includes(s)) ||
    ["paint", "layout", "strict", "content"].some((s) => {
      const c = r.contain;
      return c != null && c.includes(s);
    })
  );
}
function cb() {
  return !/^((?!chrome|android).)*safari/i.test(lb());
}
function $h(e) {
  return ["html", "body", "#document"].includes(ji(e));
}
function ub(e) {
  return Wi(e) ? e : e.contextElement;
}
const fb = { x: 1, y: 1 };
function gs(e) {
  const t = ub(e);
  if (!Or(t)) return fb;
  const r = t.getBoundingClientRect(),
    { width: o, height: s, fallback: c } = sb(t);
  let f = (c ? Wc(r.width) : r.width) / o,
    d = (c ? Wc(r.height) : r.height) / s;
  return (f && Number.isFinite(f)) || (f = 1), (d && Number.isFinite(d)) || (d = 1), { x: f, y: d };
}
function Ul(e, t, r, o) {
  var s, c;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(),
    d = ub(e);
  let h = fb;
  t && (o ? Wi(o) && (h = gs(o)) : (h = gs(e)));
  const p = d ? Jn(d) : window,
    v = !cb() && r;
  let y = (f.left + ((v && ((s = p.visualViewport) == null ? void 0 : s.offsetLeft)) || 0)) / h.x,
    b = (f.top + ((v && ((c = p.visualViewport) == null ? void 0 : c.offsetTop)) || 0)) / h.y,
    x = f.width / h.x,
    C = f.height / h.y;
  if (d) {
    const E = Jn(d),
      N = o && Wi(o) ? Jn(o) : o;
    let M = E.frameElement;
    for (; M && o && N !== E; ) {
      const L = gs(M),
        D = M.getBoundingClientRect(),
        A = getComputedStyle(M);
      (D.x += (M.clientLeft + parseFloat(A.paddingLeft)) * L.x),
        (D.y += (M.clientTop + parseFloat(A.paddingTop)) * L.y),
        (y *= L.x),
        (b *= L.y),
        (x *= L.x),
        (C *= L.y),
        (y += D.x),
        (b += D.y),
        (M = Jn(M).frameElement);
    }
  }
  return { width: x, height: C, top: b, right: y + x, bottom: b + C, left: y, x: y, y: b };
}
function Ui(e) {
  return ((ab(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Eu(e) {
  return Wi(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function db(e) {
  return Ul(Ui(e)).left + Eu(e).scrollLeft;
}
function Vl(e) {
  if (ji(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (gm(e) && e.host) || Ui(e);
  return gm(t) ? t.host : t;
}
function hb(e) {
  const t = Vl(e);
  return $h(t) ? t.ownerDocument.body : Or(t) && Cu(t) ? t : hb(t);
}
function Uc(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = hb(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    c = Jn(o);
  return s ? t.concat(c, c.visualViewport || [], Cu(o) ? o : []) : t.concat(o, Uc(o));
}
function vm(e, t, r) {
  return t === "viewport"
    ? Ll(
        (function (o, s) {
          const c = Jn(o),
            f = Ui(o),
            d = c.visualViewport;
          let h = f.clientWidth,
            p = f.clientHeight,
            v = 0,
            y = 0;
          if (d) {
            (h = d.width), (p = d.height);
            const b = cb();
            (b || (!b && s === "fixed")) && ((v = d.offsetLeft), (y = d.offsetTop));
          }
          return { width: h, height: p, x: v, y };
        })(e, r),
      )
    : Wi(t)
      ? Ll(
          (function (o, s) {
            const c = Ul(o, !0, s === "fixed"),
              f = c.top + o.clientTop,
              d = c.left + o.clientLeft,
              h = Or(o) ? gs(o) : { x: 1, y: 1 };
            return {
              width: o.clientWidth * h.x,
              height: o.clientHeight * h.y,
              x: d * h.x,
              y: f * h.y,
            };
          })(t, r),
        )
      : Ll(
          (function (o) {
            const s = Ui(o),
              c = Eu(o),
              f = o.ownerDocument.body,
              d = Al(s.scrollWidth, s.clientWidth, f.scrollWidth, f.clientWidth),
              h = Al(s.scrollHeight, s.clientHeight, f.scrollHeight, f.clientHeight);
            let p = -c.scrollLeft + db(o);
            const v = -c.scrollTop;
            return (
              $r(f).direction === "rtl" && (p += Al(s.clientWidth, f.clientWidth) - d),
              { width: d, height: h, x: p, y: v }
            );
          })(Ui(e)),
        );
}
function mm(e) {
  return Or(e) && $r(e).position !== "fixed" ? e.offsetParent : null;
}
function ym(e) {
  const t = Jn(e);
  let r = mm(e);
  for (; r && BC(r) && $r(r).position === "static"; ) r = mm(r);
  return r && (ji(r) === "html" || (ji(r) === "body" && $r(r).position === "static" && !Ld(r)))
    ? t
    : r ||
        (function (o) {
          let s = Vl(o);
          for (; Or(s) && !$h(s); ) {
            if (Ld(s)) return s;
            s = Vl(s);
          }
          return null;
        })(e) ||
        t;
}
function WC(e, t, r) {
  const o = Or(t),
    s = Ui(t),
    c = Ul(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (o || (!o && r !== "fixed"))
    if (((ji(t) !== "body" || Cu(s)) && (f = Eu(t)), Or(t))) {
      const h = Ul(t, !0);
      (d.x = h.x + t.clientLeft), (d.y = h.y + t.clientTop);
    } else s && (d.x = db(s));
  return {
    x: c.left + f.scrollLeft - d.x,
    y: c.top + f.scrollTop - d.y,
    width: c.width,
    height: c.height,
  };
}
const UC = {
    getClippingRect: function (e) {
      let { element: t, boundary: r, rootBoundary: o, strategy: s } = e;
      const c =
          r === "clippingAncestors"
            ? (function (p, v) {
                const y = v.get(p);
                if (y) return y;
                let b = Uc(p).filter((N) => Wi(N) && ji(N) !== "body"),
                  x = null;
                const C = $r(p).position === "fixed";
                let E = C ? Vl(p) : p;
                for (; Wi(E) && !$h(E); ) {
                  const N = $r(E),
                    M = Ld(E);
                  (
                    C
                      ? M || x
                      : M ||
                        N.position !== "static" ||
                        !x ||
                        !["absolute", "fixed"].includes(x.position)
                  )
                    ? (x = N)
                    : (b = b.filter((L) => L !== E)),
                    (E = Vl(E));
                }
                return v.set(p, b), b;
              })(t, this._c)
            : [].concat(r),
        f = [...c, o],
        d = f[0],
        h = f.reduce(
          (p, v) => {
            const y = vm(t, v, s);
            return (
              (p.top = Al(y.top, p.top)),
              (p.right = pm(y.right, p.right)),
              (p.bottom = pm(y.bottom, p.bottom)),
              (p.left = Al(y.left, p.left)),
              p
            );
          },
          vm(t, d, s),
        );
      return { width: h.right - h.left, height: h.bottom - h.top, x: h.left, y: h.top };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: r, strategy: o } = e;
      const s = Or(r),
        c = Ui(r);
      if (r === c) return t;
      let f = { scrollLeft: 0, scrollTop: 0 },
        d = { x: 1, y: 1 };
      const h = { x: 0, y: 0 };
      if ((s || (!s && o !== "fixed")) && ((ji(r) !== "body" || Cu(c)) && (f = Eu(r)), Or(r))) {
        const p = Ul(r);
        (d = gs(r)), (h.x = p.x + r.clientLeft), (h.y = p.y + r.clientTop);
      }
      return {
        width: t.width * d.x,
        height: t.height * d.y,
        x: t.x * d.x - f.scrollLeft * d.x + h.x,
        y: t.y * d.y - f.scrollTop * d.y + h.y,
      };
    },
    isElement: Wi,
    getDimensions: function (e) {
      return Or(e) ? sb(e) : e.getBoundingClientRect();
    },
    getOffsetParent: ym,
    getDocumentElement: Ui,
    getScale: gs,
    async getElementRects(e) {
      let { reference: t, floating: r, strategy: o } = e;
      const s = this.getOffsetParent || ym,
        c = this.getDimensions;
      return { reference: WC(t, await s(r), o), floating: { x: 0, y: 0, ...(await c(r)) } };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => $r(e).direction === "rtl",
  },
  VC = (e, t, r) => {
    const o = new Map(),
      s = { platform: UC, ...r },
      c = { ...s.platform, _c: o };
    return OC(e, t, { ...s, platform: c });
  };
function pb(e, t) {
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      (typeof t[r] == "object" && e[r] ? pb(e[r], t[r]) : (e[r] = t[r]));
}
const yr = {
  disabled: !1,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: !1,
  disposeTimeout: 150,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: !0,
  flip: !0,
  shift: !0,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: !0,
  autoHideOnMousedown: !1,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: (e) => [...e, "click"],
      delay: { show: 200, hide: 0 },
      handleResize: !1,
      html: !1,
      loadingContent: "...",
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: !0,
      autoHide: !0,
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: { show: 0, hide: 400 },
    },
  },
};
function jl(e, t) {
  let r = yr.themes[e] || {},
    o;
  do
    (o = r[t]),
      typeof o > "u"
        ? r.$extend
          ? (r = yr.themes[r.$extend] || {})
          : ((r = null), (o = yr[t]))
        : (r = null);
  while (r);
  return o;
}
function jC(e) {
  const t = [e];
  let r = yr.themes[e] || {};
  do r.$extend && !r.$resetCss ? (t.push(r.$extend), (r = yr.themes[r.$extend] || {})) : (r = null);
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function bm(e) {
  const t = [e];
  let r = yr.themes[e] || {};
  do r.$extend ? (t.push(r.$extend), (r = yr.themes[r.$extend] || {})) : (r = null);
  while (r);
  return t;
}
let Ss = !1;
if (typeof window < "u") {
  Ss = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ss = !0;
      },
    });
    window.addEventListener("test", null, e);
  } catch {}
}
let gb = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (gb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const vb = ["auto", "top", "bottom", "left", "right"].reduce(
    (e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
    [],
  ),
  wm = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown",
  },
  xm = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup",
  };
function _m(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function Xf() {
  return new Promise((e) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    }),
  );
}
const Bn = [];
let bo = null;
const Sm = {};
function km(e) {
  let t = Sm[e];
  return t || (t = Sm[e] = []), t;
}
let Ad = function () {};
typeof window < "u" && (Ad = window.Element);
function at(e) {
  return function (t) {
    return jl(t.theme, e);
  };
}
const Yf = "__floating-vue__popper",
  mb = () =>
    gt({
      name: "VPopper",
      provide() {
        return { [Yf]: { parentPopper: this } };
      },
      inject: { [Yf]: { default: null } },
      props: {
        theme: { type: String, required: !0 },
        targetNodes: { type: Function, required: !0 },
        referenceNode: { type: Function, default: null },
        popperNode: { type: Function, required: !0 },
        shown: { type: Boolean, default: !1 },
        showGroup: { type: String, default: null },
        ariaId: { default: null },
        disabled: { type: Boolean, default: at("disabled") },
        positioningDisabled: { type: Boolean, default: at("positioningDisabled") },
        placement: { type: String, default: at("placement"), validator: (e) => vb.includes(e) },
        delay: { type: [String, Number, Object], default: at("delay") },
        distance: { type: [Number, String], default: at("distance") },
        skidding: { type: [Number, String], default: at("skidding") },
        triggers: { type: Array, default: at("triggers") },
        showTriggers: { type: [Array, Function], default: at("showTriggers") },
        hideTriggers: { type: [Array, Function], default: at("hideTriggers") },
        popperTriggers: { type: Array, default: at("popperTriggers") },
        popperShowTriggers: { type: [Array, Function], default: at("popperShowTriggers") },
        popperHideTriggers: { type: [Array, Function], default: at("popperHideTriggers") },
        container: { type: [String, Object, Ad, Boolean], default: at("container") },
        boundary: { type: [String, Ad], default: at("boundary") },
        strategy: {
          type: String,
          validator: (e) => ["absolute", "fixed"].includes(e),
          default: at("strategy"),
        },
        autoHide: { type: [Boolean, Function], default: at("autoHide") },
        handleResize: { type: Boolean, default: at("handleResize") },
        instantMove: { type: Boolean, default: at("instantMove") },
        eagerMount: { type: Boolean, default: at("eagerMount") },
        popperClass: { type: [String, Array, Object], default: at("popperClass") },
        computeTransformOrigin: { type: Boolean, default: at("computeTransformOrigin") },
        autoMinSize: { type: Boolean, default: at("autoMinSize") },
        autoSize: { type: [Boolean, String], default: at("autoSize") },
        autoMaxSize: { type: Boolean, default: at("autoMaxSize") },
        autoBoundaryMaxSize: { type: Boolean, default: at("autoBoundaryMaxSize") },
        preventOverflow: { type: Boolean, default: at("preventOverflow") },
        overflowPadding: { type: [Number, String], default: at("overflowPadding") },
        arrowPadding: { type: [Number, String], default: at("arrowPadding") },
        arrowOverflow: { type: Boolean, default: at("arrowOverflow") },
        flip: { type: Boolean, default: at("flip") },
        shift: { type: Boolean, default: at("shift") },
        shiftCrossAxis: { type: Boolean, default: at("shiftCrossAxis") },
        noAutoFocus: { type: Boolean, default: at("noAutoFocus") },
        disposeTimeout: { type: Number, default: at("disposeTimeout") },
      },
      emits: {
        show: () => !0,
        hide: () => !0,
        "update:shown": (e) => !0,
        "apply-show": () => !0,
        "apply-hide": () => !0,
        "close-group": () => !0,
        "close-directive": () => !0,
        "auto-hide": () => !0,
        resize: () => !0,
      },
      data() {
        return {
          isShown: !1,
          isMounted: !1,
          skipTransition: !1,
          classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
          result: {
            x: 0,
            y: 0,
            placement: "",
            strategy: this.strategy,
            arrow: { x: 0, y: 0, centerOffset: 0 },
            transformOrigin: null,
          },
          randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
          shownChildren: new Set(),
          lastAutoHide: !0,
          pendingHide: !1,
          containsGlobalTarget: !1,
          isDisposed: !0,
          mouseDownContains: !1,
        };
      },
      computed: {
        popperId() {
          return this.ariaId != null ? this.ariaId : this.randomId;
        },
        shouldMountContent() {
          return this.eagerMount || this.isMounted;
        },
        slotData() {
          return {
            popperId: this.popperId,
            isShown: this.isShown,
            shouldMountContent: this.shouldMountContent,
            skipTransition: this.skipTransition,
            autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
            show: this.show,
            hide: this.hide,
            handleResize: this.handleResize,
            onResize: this.onResize,
            classes: { ...this.classes, popperClass: this.popperClass },
            result: this.positioningDisabled ? null : this.result,
            attrs: this.$attrs,
          };
        },
        parentPopper() {
          var e;
          return (e = this[Yf]) == null ? void 0 : e.parentPopper;
        },
        hasPopperShowTriggerHover() {
          var e, t;
          return (
            ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) ||
            ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"))
          );
        },
      },
      watch: {
        shown: "$_autoShowHide",
        disabled(e) {
          e ? this.dispose() : this.init();
        },
        async container() {
          this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers: { handler: "$_refreshListeners", deep: !0 },
        positioningDisabled: "$_refreshListeners",
        ...[
          "placement",
          "distance",
          "skidding",
          "boundary",
          "strategy",
          "overflowPadding",
          "arrowPadding",
          "preventOverflow",
          "shift",
          "shiftCrossAxis",
          "flip",
        ].reduce((e, t) => ((e[t] = "$_computePosition"), e), {}),
      },
      created() {
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.',
          ),
          this.autoMaxSize &&
            console.warn(
              "[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.",
            );
      },
      mounted() {
        this.init(), this.$_detachPopperNode();
      },
      activated() {
        this.$_autoShowHide();
      },
      deactivated() {
        this.hide();
      },
      beforeUnmount() {
        this.dispose();
      },
      methods: {
        show({ event: e = null, skipDelay: t = !1, force: r = !1 } = {}) {
          var o, s;
          ((o = this.parentPopper) != null &&
            o.lockedChild &&
            this.parentPopper.lockedChild !== this) ||
            ((this.pendingHide = !1),
            (r || !this.disabled) &&
              (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this &&
                (this.parentPopper.lockedChild = null),
              this.$_scheduleShow(e, t),
              this.$emit("show"),
              (this.$_showFrameLocked = !0),
              requestAnimationFrame(() => {
                this.$_showFrameLocked = !1;
              })),
            this.$emit("update:shown", !0));
        },
        hide({ event: e = null, skipDelay: t = !1 } = {}) {
          var r;
          if (!this.$_hideInProgress) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = !0;
              return;
            }
            if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
              this.parentPopper &&
                ((this.parentPopper.lockedChild = this),
                clearTimeout(this.parentPopper.lockedChildTimer),
                (this.parentPopper.lockedChildTimer = setTimeout(() => {
                  this.parentPopper.lockedChild === this &&
                    (this.parentPopper.lockedChild.hide({ skipDelay: t }),
                    (this.parentPopper.lockedChild = null));
                }, 1e3)));
              return;
            }
            ((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this &&
              (this.parentPopper.lockedChild = null),
              (this.pendingHide = !1),
              this.$_scheduleHide(e, t),
              this.$emit("hide"),
              this.$emit("update:shown", !1);
          }
        },
        init() {
          var e;
          this.isDisposed &&
            ((this.isDisposed = !1),
            (this.isMounted = !1),
            (this.$_events = []),
            (this.$_preventShow = !1),
            (this.$_referenceNode =
              ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el),
            (this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE)),
            (this.$_popperNode = this.popperNode()),
            (this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner")),
            (this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container")),
            this.$_swapTargetAttrs("title", "data-original-title"),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show());
        },
        dispose() {
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.$_removeEventListeners(),
            this.hide({ skipDelay: !0 }),
            this.$_detachPopperNode(),
            (this.isMounted = !1),
            (this.isShown = !1),
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs("data-original-title", "title"));
        },
        async onResize() {
          this.isShown && (await this.$_computePosition(), this.$emit("resize"));
        },
        async $_computePosition() {
          if (this.isDisposed || this.positioningDisabled) return;
          const e = { strategy: this.strategy, middleware: [] };
          (this.distance || this.skidding) &&
            e.middleware.push(FC({ mainAxis: this.distance, crossAxis: this.skidding }));
          const t = this.placement.startsWith("auto");
          if (
            (t
              ? e.middleware.push(DC({ alignment: this.placement.split("-")[1] ?? "" }))
              : (e.placement = this.placement),
            this.preventOverflow &&
              (this.shift &&
                e.middleware.push(
                  HC({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                    crossAxis: this.shiftCrossAxis,
                  }),
                ),
              !t &&
                this.flip &&
                e.middleware.push(zC({ padding: this.overflowPadding, boundary: this.boundary }))),
            e.middleware.push(PC({ element: this.$_arrowNode, padding: this.arrowPadding })),
            this.arrowOverflow &&
              e.middleware.push({
                name: "arrowOverflow",
                fn: ({ placement: o, rects: s, middlewareData: c }) => {
                  let f;
                  const { centerOffset: d } = c.arrow;
                  return (
                    o.startsWith("top") || o.startsWith("bottom")
                      ? (f = Math.abs(d) > s.reference.width / 2)
                      : (f = Math.abs(d) > s.reference.height / 2),
                    { data: { overflow: f } }
                  );
                },
              }),
            this.autoMinSize || this.autoSize)
          ) {
            const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
            e.middleware.push({
              name: "autoSize",
              fn: ({ rects: s, placement: c, middlewareData: f }) => {
                var d;
                if ((d = f.autoSize) != null && d.skip) return {};
                let h, p;
                return (
                  c.startsWith("top") || c.startsWith("bottom")
                    ? (h = s.reference.width)
                    : (p = s.reference.height),
                  (this.$_innerNode.style[
                    o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"
                  ] = h != null ? `${h}px` : null),
                  (this.$_innerNode.style[
                    o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"
                  ] = p != null ? `${p}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            });
          }
          (this.autoMaxSize || this.autoBoundaryMaxSize) &&
            ((this.$_innerNode.style.maxWidth = null),
            (this.$_innerNode.style.maxHeight = null),
            e.middleware.push(
              qC({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ availableWidth: o, availableHeight: s }) => {
                  (this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null),
                    (this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null);
                },
              }),
            ));
          const r = await VC(this.$_referenceNode, this.$_popperNode, e);
          Object.assign(this.result, {
            x: r.x,
            y: r.y,
            placement: r.placement,
            strategy: r.strategy,
            arrow: { ...r.middlewareData.arrow, ...r.middlewareData.arrowOverflow },
          });
        },
        $_scheduleShow(e, t = !1) {
          if (
            (this.$_updateParentShownChildren(!0),
            (this.$_hideInProgress = !1),
            clearTimeout(this.$_scheduleTimer),
            bo && this.instantMove && bo.instantMove && bo !== this.parentPopper)
          ) {
            bo.$_applyHide(!0), this.$_applyShow(!0);
            return;
          }
          t
            ? this.$_applyShow()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyShow.bind(this),
                this.$_computeDelay("show"),
              ));
        },
        $_scheduleHide(e, t = !1) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          this.$_updateParentShownChildren(!1),
            (this.$_hideInProgress = !0),
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (bo = this),
            t
              ? this.$_applyHide()
              : (this.$_scheduleTimer = setTimeout(
                  this.$_applyHide.bind(this),
                  this.$_computeDelay("hide"),
                ));
        },
        $_computeDelay(e) {
          const t = this.delay;
          return parseInt((t && t[e]) || t || 0);
        },
        async $_applyShow(e = !1) {
          clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            (this.skipTransition = e),
            !this.isShown &&
              (this.$_ensureTeleport(),
              await Xf(),
              await this.$_computePosition(),
              await this.$_applyShowEffect(),
              this.positioningDisabled ||
                this.$_registerEventListeners(
                  [...Uc(this.$_referenceNode), ...Uc(this.$_popperNode)],
                  "scroll",
                  () => {
                    this.$_computePosition();
                  },
                ));
        },
        async $_applyShowEffect() {
          if (this.$_hideInProgress) return;
          if (this.computeTransformOrigin) {
            const t = this.$_referenceNode.getBoundingClientRect(),
              r = this.$_popperNode.querySelector(".v-popper__wrapper"),
              o = r.parentNode.getBoundingClientRect(),
              s = t.x + t.width / 2 - (o.left + r.offsetLeft),
              c = t.y + t.height / 2 - (o.top + r.offsetTop);
            this.result.transformOrigin = `${s}px ${c}px`;
          }
          (this.isShown = !0),
            this.$_applyAttrsToTarget({
              "aria-describedby": this.popperId,
              "data-popper-shown": "",
            });
          const e = this.showGroup;
          if (e) {
            let t;
            for (let r = 0; r < Bn.length; r++)
              (t = Bn[r]), t.showGroup !== e && (t.hide(), t.$emit("close-group"));
          }
          Bn.push(this), document.body.classList.add("v-popper--some-open");
          for (const t of bm(this.theme))
            km(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
          this.$emit("apply-show"),
            (this.classes.showFrom = !0),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !1),
            await Xf(),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !0),
            this.noAutoFocus || this.$_popperNode.focus();
        },
        async $_applyHide(e = !1) {
          if (this.shownChildren.size > 0) {
            (this.pendingHide = !0), (this.$_hideInProgress = !1);
            return;
          }
          if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
          (this.skipTransition = e),
            _m(Bn, this),
            Bn.length === 0 && document.body.classList.remove("v-popper--some-open");
          for (const r of bm(this.theme)) {
            const o = km(r);
            _m(o, this),
              o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
          }
          bo === this && (bo = null),
            (this.isShown = !1),
            this.$_applyAttrsToTarget({ "aria-describedby": void 0, "data-popper-shown": void 0 }),
            clearTimeout(this.$_disposeTimer);
          const t = this.disposeTimeout;
          t !== null &&
            (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode && (this.$_detachPopperNode(), (this.isMounted = !1));
            }, t)),
            this.$_removeEventListeners("scroll"),
            this.$emit("apply-hide"),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !0),
            (this.classes.hideTo = !1),
            await Xf(),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !0);
        },
        $_autoShowHide() {
          this.shown ? this.show() : this.hide();
        },
        $_ensureTeleport() {
          if (this.isDisposed) return;
          let e = this.container;
          if (
            (typeof e == "string"
              ? (e = window.document.querySelector(e))
              : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
          )
            throw new Error("No container for popover: " + this.container);
          e.appendChild(this.$_popperNode), (this.isMounted = !0);
        },
        $_addEventListeners() {
          const e = (r) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((r.usedByTooltip = !0), !this.$_preventShow && this.show({ event: r }));
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            wm,
            this.triggers,
            this.showTriggers,
            e,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              wm,
              this.popperTriggers,
              this.popperShowTriggers,
              e,
            );
          const t = (r) => {
            r.usedByTooltip || this.hide({ event: r });
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            xm,
            this.triggers,
            this.hideTriggers,
            t,
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              xm,
              this.popperTriggers,
              this.popperHideTriggers,
              t,
            );
        },
        $_registerEventListeners(e, t, r) {
          this.$_events.push({ targetNodes: e, eventType: t, handler: r }),
            e.forEach((o) => o.addEventListener(t, r, Ss ? { passive: !0 } : void 0));
        },
        $_registerTriggerListeners(e, t, r, o, s) {
          let c = r;
          o != null && (c = typeof o == "function" ? o(c) : o),
            c.forEach((f) => {
              const d = t[f];
              d && this.$_registerEventListeners(e, d, s);
            });
        },
        $_removeEventListeners(e) {
          const t = [];
          this.$_events.forEach((r) => {
            const { targetNodes: o, eventType: s, handler: c } = r;
            !e || e === s ? o.forEach((f) => f.removeEventListener(s, c)) : t.push(r);
          }),
            (this.$_events = t);
        },
        $_refreshListeners() {
          this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
        },
        $_handleGlobalClose(e, t = !1) {
          this.$_showFrameLocked ||
            (this.hide({ event: e }),
            e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"),
            t &&
              ((this.$_preventShow = !0),
              setTimeout(() => {
                this.$_preventShow = !1;
              }, 300)));
        },
        $_detachPopperNode() {
          this.$_popperNode.parentNode &&
            this.$_popperNode.parentNode.removeChild(this.$_popperNode);
        },
        $_swapTargetAttrs(e, t) {
          for (const r of this.$_targetNodes) {
            const o = r.getAttribute(e);
            o && (r.removeAttribute(e), r.setAttribute(t, o));
          }
        },
        $_applyAttrsToTarget(e) {
          for (const t of this.$_targetNodes)
            for (const r in e) {
              const o = e[r];
              o == null ? t.removeAttribute(r) : t.setAttribute(r, o);
            }
        },
        $_updateParentShownChildren(e) {
          let t = this.parentPopper;
          for (; t; )
            e
              ? t.shownChildren.add(this.randomId)
              : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()),
              (t = t.parentPopper);
        },
        $_isAimingPopper() {
          const e = this.$_referenceNode.getBoundingClientRect();
          if (Ml >= e.left && Ml <= e.right && Nl >= e.top && Nl <= e.bottom) {
            const t = this.$_popperNode.getBoundingClientRect(),
              r = Ml - Ai,
              o = Nl - Mi,
              s = t.left + t.width / 2 - Ai + (t.top + t.height / 2) - Mi + t.width + t.height,
              c = Ai + r * s,
              f = Mi + o * s;
            return (
              tc(Ai, Mi, c, f, t.left, t.top, t.left, t.bottom) ||
              tc(Ai, Mi, c, f, t.left, t.top, t.right, t.top) ||
              tc(Ai, Mi, c, f, t.right, t.top, t.right, t.bottom) ||
              tc(Ai, Mi, c, f, t.left, t.bottom, t.right, t.bottom)
            );
          }
          return !1;
        },
      },
      render() {
        return this.$slots.default(this.slotData);
      },
    });
if (typeof document < "u" && typeof window < "u") {
  if (gb) {
    const e = Ss ? { passive: !0, capture: !0 } : !0;
    document.addEventListener("touchstart", (t) => Tm(t, !0), e),
      document.addEventListener("touchend", (t) => Cm(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Tm(e, !1), !0),
      window.addEventListener("click", (e) => Cm(e, !1), !0);
  window.addEventListener("resize", KC);
}
function Tm(e, t) {
  if (yr.autoHideOnMousedown) yb(e, t);
  else
    for (let r = 0; r < Bn.length; r++) {
      const o = Bn[r];
      try {
        o.mouseDownContains = o.popperNode().contains(e.target);
      } catch {}
    }
}
function Cm(e, t) {
  yr.autoHideOnMousedown || yb(e, t);
}
function yb(e, t) {
  const r = {};
  for (let o = Bn.length - 1; o >= 0; o--) {
    const s = Bn[o];
    try {
      const c = (s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target));
      (s.pendingHide = !1),
        requestAnimationFrame(() => {
          if (((s.pendingHide = !1), !r[s.randomId] && Em(s, c, e))) {
            if ((s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && c)) {
              let d = s.parentPopper;
              for (; d; ) (r[d.randomId] = !0), (d = d.parentPopper);
              return;
            }
            let f = s.parentPopper;
            for (; f && Em(f, f.containsGlobalTarget, e); )
              f.$_handleGlobalClose(e, t), (f = f.parentPopper);
          }
        });
    } catch {}
  }
}
function Em(e, t, r) {
  return r.closeAllPopover || (r.closePopover && t) || (GC(e, r) && !t);
}
function GC(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return (e.lastAutoHide = r), r;
  }
  return e.autoHide;
}
function KC() {
  for (let e = 0; e < Bn.length; e++) Bn[e].$_computePosition();
}
function Lm() {
  for (let e = 0; e < Bn.length; e++) Bn[e].hide();
}
let Ai = 0,
  Mi = 0,
  Ml = 0,
  Nl = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (e) => {
      (Ai = Ml), (Mi = Nl), (Ml = e.clientX), (Nl = e.clientY);
    },
    Ss ? { passive: !0 } : void 0,
  );
function tc(e, t, r, o, s, c, f, d) {
  const h = ((f - s) * (t - c) - (d - c) * (e - s)) / ((d - c) * (r - e) - (f - s) * (o - t)),
    p = ((r - e) * (t - c) - (o - t) * (e - s)) / ((d - c) * (r - e) - (f - s) * (o - t));
  return h >= 0 && h <= 1 && p >= 0 && p <= 1;
}
const XC = { extends: mb() },
  Lu = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [o, s] of t) r[o] = s;
    return r;
  };
function YC(e, t, r, o, s, c) {
  return (
    le(),
    be(
      "div",
      { ref: "reference", class: st(["v-popper", { "v-popper--shown": e.slotData.isShown }]) },
      [hn(e.$slots, "default", U_(zy(e.slotData)))],
      2,
    )
  );
}
const ZC = Lu(XC, [["render", YC]]);
function JC() {
  var e = window.navigator.userAgent,
    t = e.indexOf("MSIE ");
  if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let bc;
function Md() {
  Md.init || ((Md.init = !0), (bc = JC() !== -1));
}
var Au = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    Md(),
      ln(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const e = document.createElement("object");
    (this._resizeObject = e),
      e.setAttribute("aria-hidden", "true"),
      e.setAttribute("tabindex", -1),
      (e.onload = this.addResizeHandlers),
      (e.type = "text/html"),
      bc && this.$el.appendChild(e),
      (e.data = "about:blank"),
      bc || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.emitSize());
    },
    emitSize() {
      this.$emit("notify", { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        "resize",
        this.compareAndNotify,
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!bc &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            "resize",
            this.compareAndNotify,
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const QC = fy();
gu("data-v-b329ee4c");
const eE = { class: "resize-observer", tabindex: "-1" };
vu();
const tE = QC((e, t, r, o, s, c) => (le(), ot("div", eE)));
Au.render = tE;
Au.__scopeId = "data-v-b329ee4c";
Au.__file = "src/components/ResizeObserver.vue";
const bb = (e = "theme") => ({
    computed: {
      themeClass() {
        return jC(this[e]);
      },
    },
  }),
  nE = gt({
    name: "VPopperContent",
    components: { ResizeObserver: Au },
    mixins: [bb()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ["hide", "resize"],
    methods: {
      toPx(e) {
        return e != null && !isNaN(e) ? `${e}px` : null;
      },
    },
  }),
  rE = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  iE = { ref: "inner", class: "v-popper__inner" },
  oE = Y("div", { class: "v-popper__arrow-outer" }, null, -1),
  sE = Y("div", { class: "v-popper__arrow-inner" }, null, -1),
  lE = [oE, sE];
function aE(e, t, r, o, s, c) {
  const f = Lo("ResizeObserver");
  return (
    le(),
    be(
      "div",
      {
        id: e.popperId,
        ref: "popover",
        class: st([
          "v-popper__popper",
          [
            e.themeClass,
            e.classes.popperClass,
            {
              "v-popper__popper--shown": e.shown,
              "v-popper__popper--hidden": !e.shown,
              "v-popper__popper--show-from": e.classes.showFrom,
              "v-popper__popper--show-to": e.classes.showTo,
              "v-popper__popper--hide-from": e.classes.hideFrom,
              "v-popper__popper--hide-to": e.classes.hideTo,
              "v-popper__popper--skip-transition": e.skipTransition,
              "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
              "v-popper__popper--no-positioning": !e.result,
            },
          ],
        ]),
        style: Zt(
          e.result
            ? {
                position: e.result.strategy,
                transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`,
              }
            : void 0,
        ),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = Sd((d) => e.autoHide && e.$emit("hide"), ["esc"])),
      },
      [
        Y("div", {
          class: "v-popper__backdrop",
          onClick: t[0] || (t[0] = (d) => e.autoHide && e.$emit("hide")),
        }),
        Y(
          "div",
          {
            class: "v-popper__wrapper",
            style: Zt(e.result ? { transformOrigin: e.result.transformOrigin } : void 0),
          },
          [
            Y(
              "div",
              iE,
              [
                e.mounted
                  ? (le(),
                    be(
                      ht,
                      { key: 0 },
                      [
                        Y("div", null, [hn(e.$slots, "default")]),
                        e.handleResize
                          ? (le(),
                            ot(f, {
                              key: 0,
                              onNotify: t[1] || (t[1] = (d) => e.$emit("resize", d)),
                            }))
                          : rt("", !0),
                      ],
                      64,
                    ))
                  : rt("", !0),
              ],
              512,
            ),
            Y(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: Zt(
                  e.result
                    ? { left: e.toPx(e.result.arrow.x), top: e.toPx(e.result.arrow.y) }
                    : void 0,
                ),
              },
              lE,
              4,
            ),
          ],
          4,
        ),
      ],
      46,
      rE,
    )
  );
}
const wb = Lu(nE, [["render", aE]]),
  xb = {
    methods: {
      show(...e) {
        return this.$refs.popper.show(...e);
      },
      hide(...e) {
        return this.$refs.popper.hide(...e);
      },
      dispose(...e) {
        return this.$refs.popper.dispose(...e);
      },
      onResize(...e) {
        return this.$refs.popper.onResize(...e);
      },
    },
  };
let Nd = function () {};
typeof window < "u" && (Nd = window.Element);
const cE = gt({
  name: "VPopperWrapper",
  components: { Popper: ZC, PopperContent: wb },
  mixins: [xb, bb("finalTheme")],
  props: {
    theme: { type: String, default: null },
    referenceNode: { type: Function, default: null },
    shown: { type: Boolean, default: !1 },
    showGroup: { type: String, default: null },
    ariaId: { default: null },
    disabled: { type: Boolean, default: void 0 },
    positioningDisabled: { type: Boolean, default: void 0 },
    placement: { type: String, default: void 0 },
    delay: { type: [String, Number, Object], default: void 0 },
    distance: { type: [Number, String], default: void 0 },
    skidding: { type: [Number, String], default: void 0 },
    triggers: { type: Array, default: void 0 },
    showTriggers: { type: [Array, Function], default: void 0 },
    hideTriggers: { type: [Array, Function], default: void 0 },
    popperTriggers: { type: Array, default: void 0 },
    popperShowTriggers: { type: [Array, Function], default: void 0 },
    popperHideTriggers: { type: [Array, Function], default: void 0 },
    container: { type: [String, Object, Nd, Boolean], default: void 0 },
    boundary: { type: [String, Nd], default: void 0 },
    strategy: { type: String, default: void 0 },
    autoHide: { type: [Boolean, Function], default: void 0 },
    handleResize: { type: Boolean, default: void 0 },
    instantMove: { type: Boolean, default: void 0 },
    eagerMount: { type: Boolean, default: void 0 },
    popperClass: { type: [String, Array, Object], default: void 0 },
    computeTransformOrigin: { type: Boolean, default: void 0 },
    autoMinSize: { type: Boolean, default: void 0 },
    autoSize: { type: [Boolean, String], default: void 0 },
    autoMaxSize: { type: Boolean, default: void 0 },
    autoBoundaryMaxSize: { type: Boolean, default: void 0 },
    preventOverflow: { type: Boolean, default: void 0 },
    overflowPadding: { type: [Number, String], default: void 0 },
    arrowPadding: { type: [Number, String], default: void 0 },
    arrowOverflow: { type: Boolean, default: void 0 },
    flip: { type: Boolean, default: void 0 },
    shift: { type: Boolean, default: void 0 },
    shiftCrossAxis: { type: Boolean, default: void 0 },
    noAutoFocus: { type: Boolean, default: void 0 },
    disposeTimeout: { type: Number, default: void 0 },
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0,
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    },
  },
});
function uE(e, t, r, o, s, c) {
  const f = Lo("PopperContent"),
    d = Lo("Popper");
  return (
    le(),
    ot(
      d,
      ii({ ref: "popper" }, e.$props, {
        theme: e.finalTheme,
        "target-nodes": e.getTargetNodes,
        "popper-node": () => e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = () => e.$emit("show")),
        onHide: t[1] || (t[1] = () => e.$emit("hide")),
        "onUpdate:shown": t[2] || (t[2] = (h) => e.$emit("update:shown", h)),
        onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
        onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
        onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
        onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
        onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
        onResize: t[8] || (t[8] = () => e.$emit("resize")),
      }),
      {
        default: lt(
          ({
            popperId: h,
            isShown: p,
            shouldMountContent: v,
            skipTransition: y,
            autoHide: b,
            show: x,
            hide: C,
            handleResize: E,
            onResize: N,
            classes: M,
            result: L,
          }) => [
            hn(e.$slots, "default", { shown: p, show: x, hide: C }),
            Pe(
              f,
              {
                ref: "popperContent",
                "popper-id": h,
                theme: e.finalTheme,
                shown: p,
                mounted: v,
                "skip-transition": y,
                "auto-hide": b,
                "handle-resize": E,
                classes: M,
                result: L,
                onHide: C,
                onResize: N,
              },
              { default: lt(() => [hn(e.$slots, "popper", { shown: p, hide: C })]), _: 2 },
              1032,
              [
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ],
            ),
          ],
        ),
        _: 3,
      },
      16,
      ["theme", "target-nodes", "popper-node", "class"],
    )
  );
}
const Oh = Lu(cE, [["render", uE]]),
  fE = { ...Oh, name: "VDropdown", vPopperTheme: "dropdown" },
  dE = { ...Oh, name: "VMenu", vPopperTheme: "menu" },
  _b = { ...Oh, name: "VTooltip", vPopperTheme: "tooltip" },
  hE = gt({
    name: "VTooltipDirective",
    components: { Popper: mb(), PopperContent: wb },
    mixins: [xb],
    inheritAttrs: !1,
    props: {
      theme: { type: String, default: "tooltip" },
      html: { type: Boolean, default: (e) => jl(e.theme, "html") },
      content: { type: [String, Number, Function], default: null },
      loadingContent: { type: String, default: (e) => jl(e.theme, "loadingContent") },
      targetNodes: { type: Function, required: !0 },
    },
    data() {
      return { asyncContent: null };
    },
    computed: {
      isContentAsync() {
        return typeof this.content == "function";
      },
      loading() {
        return this.isContentAsync && this.asyncContent == null;
      },
      finalContent() {
        return this.isContentAsync
          ? this.loading
            ? this.loadingContent
            : this.asyncContent
          : this.content;
      },
    },
    watch: {
      content: {
        handler() {
          this.fetchContent(!0);
        },
        immediate: !0,
      },
      async finalContent() {
        await this.$nextTick(), this.$refs.popper.onResize();
      },
    },
    created() {
      this.$_fetchId = 0;
    },
    methods: {
      fetchContent(e) {
        if (
          typeof this.content == "function" &&
          this.$_isShown &&
          (e || (!this.$_loading && this.asyncContent == null))
        ) {
          (this.asyncContent = null), (this.$_loading = !0);
          const t = ++this.$_fetchId,
            r = this.content(this);
          r.then ? r.then((o) => this.onResult(t, o)) : this.onResult(t, r);
        }
      },
      onResult(e, t) {
        e === this.$_fetchId && ((this.$_loading = !1), (this.asyncContent = t));
      },
      onShow() {
        (this.$_isShown = !0), this.fetchContent();
      },
      onHide() {
        this.$_isShown = !1;
      },
    },
  }),
  pE = ["innerHTML"],
  gE = ["textContent"];
function vE(e, t, r, o, s, c) {
  const f = Lo("PopperContent"),
    d = Lo("Popper");
  return (
    le(),
    ot(
      d,
      ii({ ref: "popper" }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": () => e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide,
      }),
      {
        default: lt(
          ({
            popperId: h,
            isShown: p,
            shouldMountContent: v,
            skipTransition: y,
            autoHide: b,
            hide: x,
            handleResize: C,
            onResize: E,
            classes: N,
            result: M,
          }) => [
            Pe(
              f,
              {
                ref: "popperContent",
                class: st({ "v-popper--tooltip-loading": e.loading }),
                "popper-id": h,
                theme: e.theme,
                shown: p,
                mounted: v,
                "skip-transition": y,
                "auto-hide": b,
                "handle-resize": C,
                classes: N,
                result: M,
                onHide: x,
                onResize: E,
              },
              {
                default: lt(() => [
                  e.html
                    ? (le(), be("div", { key: 0, innerHTML: e.finalContent }, null, 8, pE))
                    : (le(), be("div", { key: 1, textContent: qe(e.finalContent) }, null, 8, gE)),
                ]),
                _: 2,
              },
              1032,
              [
                "class",
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ],
            ),
          ],
        ),
        _: 1,
      },
      16,
      ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"],
    )
  );
}
const mE = Lu(hE, [["render", vE]]),
  Sb = "v-popper--has-tooltip";
function yE(e, t) {
  let r = e.placement;
  if (!r && t) for (const o of vb) t[o] && (r = o);
  return r || (r = jl(e.theme || "tooltip", "placement")), r;
}
function kb(e, t, r) {
  let o;
  const s = typeof t;
  return (
    s === "string" ? (o = { content: t }) : t && s === "object" ? (o = t) : (o = { content: !1 }),
    (o.placement = yE(o, r)),
    (o.targetNodes = () => [e]),
    (o.referenceNode = () => e),
    o
  );
}
let Zf,
  Gl,
  bE = 0;
function wE() {
  if (Zf) return;
  (Gl = je([])),
    (Zf = Uy({
      name: "VTooltipDirectiveApp",
      setup() {
        return { directives: Gl };
      },
      render() {
        return this.directives.map((t) =>
          la(mE, { ...t.options, shown: t.shown || t.options.shown, key: t.id }),
        );
      },
      devtools: { hide: !0 },
    }));
  const e = document.createElement("div");
  document.body.appendChild(e), Zf.mount(e);
}
function Tb(e, t, r) {
  wE();
  const o = je(kb(e, t, r)),
    s = je(!1),
    c = { id: bE++, options: o, shown: s };
  return (
    Gl.value.push(c),
    e.classList && e.classList.add(Sb),
    (e.$_popper = {
      options: o,
      item: c,
      show() {
        s.value = !0;
      },
      hide() {
        s.value = !1;
      },
    })
  );
}
function Ph(e) {
  if (e.$_popper) {
    const t = Gl.value.indexOf(e.$_popper.item);
    t !== -1 && Gl.value.splice(t, 1),
      delete e.$_popper,
      delete e.$_popperOldShown,
      delete e.$_popperMountTarget;
  }
  e.classList && e.classList.remove(Sb);
}
function Am(e, { value: t, modifiers: r }) {
  const o = kb(e, t, r);
  if (!o.content || jl(o.theme || "tooltip", "disabled")) Ph(e);
  else {
    let s;
    e.$_popper ? ((s = e.$_popper), (s.options.value = o)) : (s = Tb(e, t, r)),
      typeof t.shown < "u" &&
        t.shown !== e.$_popperOldShown &&
        ((e.$_popperOldShown = t.shown), t.shown ? s.show() : s.hide());
  }
}
const Cb = {
  beforeMount: Am,
  updated: Am,
  beforeUnmount(e) {
    Ph(e);
  },
};
function Mm(e) {
  e.addEventListener("mousedown", Vc),
    e.addEventListener("click", Vc),
    e.addEventListener("touchstart", Eb, Ss ? { passive: !0 } : !1);
}
function Nm(e) {
  e.removeEventListener("mousedown", Vc),
    e.removeEventListener("click", Vc),
    e.removeEventListener("touchstart", Eb),
    e.removeEventListener("touchend", Lb),
    e.removeEventListener("touchcancel", Ab);
}
function Vc(e) {
  const t = e.currentTarget;
  (e.closePopover = !t.$_vclosepopover_touch),
    (e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
}
function Eb(e) {
  if (e.changedTouches.length === 1) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !0;
    const r = e.changedTouches[0];
    (t.$_vclosepopover_touchPoint = r),
      t.addEventListener("touchend", Lb),
      t.addEventListener("touchcancel", Ab);
  }
}
function Lb(e) {
  const t = e.currentTarget;
  if (((t.$_vclosepopover_touch = !1), e.changedTouches.length === 1)) {
    const r = e.changedTouches[0],
      o = t.$_vclosepopover_touchPoint;
    (e.closePopover = Math.abs(r.screenY - o.screenY) < 20 && Math.abs(r.screenX - o.screenX) < 20),
      (e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all);
  }
}
function Ab(e) {
  const t = e.currentTarget;
  t.$_vclosepopover_touch = !1;
}
const xE = {
    beforeMount(e, { value: t, modifiers: r }) {
      (e.$_closePopoverModifiers = r), (typeof t > "u" || t) && Mm(e);
    },
    updated(e, { value: t, oldValue: r, modifiers: o }) {
      (e.$_closePopoverModifiers = o), t !== r && (typeof t > "u" || t ? Mm(e) : Nm(e));
    },
    beforeUnmount(e) {
      Nm(e);
    },
  },
  _E = Cb,
  Mb = _b;
function SE(e, t = {}) {
  e.$_vTooltipInstalled ||
    ((e.$_vTooltipInstalled = !0),
    pb(yr, t),
    e.directive("tooltip", Cb),
    e.directive("close-popper", xE),
    e.component("VTooltip", _b),
    e.component("VDropdown", fE),
    e.component("VMenu", dE));
}
const Nb = { version: "5.2.2", install: SE, options: yr },
  kE = 6e4;
function $b(e) {
  return e;
}
const TE = $b,
  { clearTimeout: CE, setTimeout: EE } = globalThis,
  LE = Math.random.bind(Math);
function AE(e, t) {
  const {
      post: r,
      on: o,
      eventNames: s = [],
      serialize: c = $b,
      deserialize: f = TE,
      resolver: d,
      timeout: h = kE,
    } = t,
    p = new Map();
  let v;
  const y = new Proxy(
    {},
    {
      get(b, x) {
        if (x === "$functions") return e;
        if (x === "then" && !s.includes("then") && !("then" in e)) return;
        const C = (...N) => {
          r(c({ m: x, a: N, t: "q" }));
        };
        if (s.includes(x)) return (C.asEvent = C), C;
        const E = async (...N) => (
          await v,
          new Promise((M, L) => {
            var H;
            const D = NE();
            let A;
            h >= 0 &&
              ((A = EE(() => {
                var z;
                try {
                  throw (
                    ((z = t.onTimeoutError) == null || z.call(t, x, N),
                    new Error(`[birpc] timeout on calling "${x}"`))
                  );
                } catch (J) {
                  L(J);
                }
                p.delete(D);
              }, h)),
              typeof A == "object" && (A = (H = A.unref) == null ? void 0 : H.call(A))),
              p.set(D, { resolve: M, reject: L, timeoutId: A }),
              r(c({ m: x, a: N, i: D, t: "q" }));
          })
        );
        return (E.asEvent = C), E;
      },
    },
  );
  return (
    (v = o(async (b, ...x) => {
      const C = f(b);
      if (C.t === "q") {
        const { m: E, a: N } = C;
        let M, L;
        const D = d ? d(E, e[E]) : e[E];
        if (!D) L = new Error(`[birpc] function "${E}" not found`);
        else
          try {
            M = await D.apply(y, N);
          } catch (A) {
            L = A;
          }
        C.i && (L && t.onError && t.onError(L, E, N), r(c({ t: "s", i: C.i, r: M, e: L }), ...x));
      } else {
        const { i: E, r: N, e: M } = C,
          L = p.get(E);
        L && (CE(L.timeoutId), M ? L.reject(M) : L.resolve(N)), p.delete(E);
      }
    })),
    y
  );
}
const ME = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function NE(e = 21) {
  let t = "",
    r = e;
  for (; r--; ) t += ME[(LE() * 64) | 0];
  return t;
}
const { parse: $E, stringify: OE } = JSON,
  { keys: PE } = Object,
  Kl = String,
  Ob = "string",
  $m = {},
  jc = "object",
  Pb = (e, t) => t,
  RE = (e) => (e instanceof Kl ? Kl(e) : e),
  DE = (e, t) => (typeof t === Ob ? new Kl(t) : t),
  Rb = (e, t, r, o) => {
    const s = [];
    for (let c = PE(r), { length: f } = c, d = 0; d < f; d++) {
      const h = c[d],
        p = r[h];
      if (p instanceof Kl) {
        const v = e[p];
        typeof v === jc && !t.has(v)
          ? (t.add(v), (r[h] = $m), s.push({ k: h, a: [e, t, v, o] }))
          : (r[h] = o.call(r, h, v));
      } else r[h] !== $m && (r[h] = o.call(r, h, p));
    }
    for (let { length: c } = s, f = 0; f < c; f++) {
      const { k: d, a: h } = s[f];
      r[d] = o.call(r, d, Rb.apply(null, h));
    }
    return r;
  },
  Om = (e, t, r) => {
    const o = Kl(t.push(r) - 1);
    return e.set(r, o), o;
  },
  $d = (e, t) => {
    const r = $E(e, DE).map(RE),
      o = r[0],
      s = t || Pb,
      c = typeof o === jc && o ? Rb(r, new Set(), o, s) : o;
    return s.call({ "": c }, "", c);
  },
  zE = (e, t, r) => {
    const o =
        t && typeof t === jc ? (v, y) => (v === "" || -1 < t.indexOf(v) ? y : void 0) : t || Pb,
      s = new Map(),
      c = [],
      f = [];
    let d = +Om(s, c, o.call({ "": e }, "", e)),
      h = !d;
    for (; d < c.length; ) (h = !0), (f[d] = OE(c[d++], p, r));
    return "[" + f.join(",") + "]";
    function p(v, y) {
      if (h) return (h = !h), y;
      const b = o.call(this, v, y);
      switch (typeof b) {
        case jc:
          if (b === null) return b;
        case Ob:
          return s.get(b) || Om(s, c, b);
      }
      return b;
    }
  };
var Ao =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Db(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function zb(e) {
  return e != null;
}
function Rh(e) {
  return e == null && (e = []), Array.isArray(e) ? e : [e];
}
const IE = /^[A-Za-z]:\//;
function FE(e = "") {
  return e && e.replace(/\\/g, "/").replace(IE, (t) => t.toUpperCase());
}
const HE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,
  Pm = /^\/([A-Za-z]:)?$/;
function qE() {
  return typeof process < "u" && typeof process.cwd == "function"
    ? process.cwd().replace(/\\/g, "/")
    : "/";
}
const Rm = function (...e) {
  e = e.map((o) => FE(o));
  let t = "",
    r = !1;
  for (let o = e.length - 1; o >= -1 && !r; o--) {
    const s = o >= 0 ? e[o] : qE();
    !s || s.length === 0 || ((t = `${s}/${t}`), (r = Dm(s)));
  }
  return (t = BE(t, !r)), r && !Dm(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function BE(e, t) {
  let r = "",
    o = 0,
    s = -1,
    c = 0,
    f = null;
  for (let d = 0; d <= e.length; ++d) {
    if (d < e.length) f = e[d];
    else {
      if (f === "/") break;
      f = "/";
    }
    if (f === "/") {
      if (!(s === d - 1 || c === 1))
        if (c === 2) {
          if (r.length < 2 || o !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
            if (r.length > 2) {
              const h = r.lastIndexOf("/");
              h === -1
                ? ((r = ""), (o = 0))
                : ((r = r.slice(0, h)), (o = r.length - 1 - r.lastIndexOf("/"))),
                (s = d),
                (c = 0);
              continue;
            } else if (r.length > 0) {
              (r = ""), (o = 0), (s = d), (c = 0);
              continue;
            }
          }
          t && ((r += r.length > 0 ? "/.." : ".."), (o = 2));
        } else
          r.length > 0 ? (r += `/${e.slice(s + 1, d)}`) : (r = e.slice(s + 1, d)), (o = d - s - 1);
      (s = d), (c = 0);
    } else f === "." && c !== -1 ? ++c : (c = -1);
  }
  return r;
}
const Dm = function (e) {
    return HE.test(e);
  },
  WE = function (e, t) {
    const r = Rm(e).replace(Pm, "$1").split("/"),
      o = Rm(t).replace(Pm, "$1").split("/");
    if (o[0][1] === ":" && r[0][1] === ":" && r[0] !== o[0]) return o.join("/");
    const s = [...r];
    for (const c of s) {
      if (o[0] !== c) break;
      r.shift(), o.shift();
    }
    return [...r.map(() => ".."), ...o].join("/");
  };
function Mu(e) {
  return B0() ? (Y_(e), !0) : !1;
}
function li(e) {
  return typeof e == "function" ? e() : B(e);
}
const UE = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const VE = Object.prototype.toString,
  jE = (e) => VE.call(e) === "[object Object]",
  Xl = () => {};
function Ib(e, t) {
  function r(...o) {
    return new Promise((s, c) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o }))
        .then(s)
        .catch(c);
    });
  }
  return r;
}
const Fb = (e) => e();
function Hb(e, t = {}) {
  let r,
    o,
    s = Xl;
  const c = (d) => {
    clearTimeout(d), s(), (s = Xl);
  };
  return (d) => {
    const h = li(e),
      p = li(t.maxWait);
    return (
      r && c(r),
      h <= 0 || (p !== void 0 && p <= 0)
        ? (o && (c(o), (o = null)), Promise.resolve(d()))
        : new Promise((v, y) => {
            (s = t.rejectOnCancel ? y : v),
              p &&
                !o &&
                (o = setTimeout(() => {
                  r && c(r), (o = null), v(d());
                }, p)),
              (r = setTimeout(() => {
                o && c(o), (o = null), v(d());
              }, h));
          })
    );
  };
}
function GE(e = Fb) {
  const t = je(!0);
  function r() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const s = (...c) => {
    t.value && e(...c);
  };
  return { isActive: ra(t), pause: r, resume: o, eventFilter: s };
}
function KE(e) {
  return oa();
}
function XE(...e) {
  if (e.length !== 1) return du(...e);
  const t = e[0];
  return typeof t == "function" ? ra(iy(() => ({ get: t, set: Xl }))) : je(t);
}
function zm(e, t = 200, r = {}) {
  return Ib(Hb(t, r), e);
}
function qb(e, t, r = {}) {
  const { eventFilter: o = Fb, ...s } = r;
  return qt(e, Ib(o, t), s);
}
function Bb(e, t, r = {}) {
  const { eventFilter: o, ...s } = r,
    { eventFilter: c, pause: f, resume: d, isActive: h } = GE(o);
  return { stop: qb(e, t, { ...s, eventFilter: c }), pause: f, resume: d, isActive: h };
}
function Dh(e, t = !0, r) {
  KE() ? Ms(e, r) : t ? e() : ln(e);
}
function YE(e = !1, t = {}) {
  const { truthyValue: r = !0, falsyValue: o = !1 } = t,
    s = It(e),
    c = je(e);
  function f(d) {
    if (arguments.length) return (c.value = d), c.value;
    {
      const h = li(r);
      return (c.value = c.value === h ? li(o) : h), c.value;
    }
  }
  return s ? f : [c, f];
}
function Wb(e, t, r = {}) {
  const { debounce: o = 0, maxWait: s = void 0, ...c } = r;
  return qb(e, t, { ...c, eventFilter: Hb(o, { maxWait: s }) });
}
function ZE(e, t, r) {
  const o = qt(e, (...s) => (ln(() => o()), t(...s)), r);
  return o;
}
function JE(e, t, r) {
  let o;
  It(r) ? (o = { evaluating: r }) : (o = {});
  const { lazy: s = !1, evaluating: c = void 0, shallow: f = !0, onError: d = Xl } = o,
    h = je(!s),
    p = f ? Fr(t) : je(t);
  let v = 0;
  return (
    kh(async (y) => {
      if (!h.value) return;
      v++;
      const b = v;
      let x = !1;
      c &&
        Promise.resolve().then(() => {
          c.value = !0;
        });
      try {
        const C = await e((E) => {
          y(() => {
            c && (c.value = !1), x || E();
          });
        });
        b === v && (p.value = C);
      } catch (C) {
        d(C);
      } finally {
        c && b === v && (c.value = !1), (x = !0);
      }
    }),
    s ? $e(() => ((h.value = !0), p.value)) : p
  );
}
function Gc(e) {
  var t;
  const r = li(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
const nr = UE ? window : void 0;
function ks(...e) {
  let t, r, o, s;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([r, o, s] = e), (t = nr))
      : ([t, r, o, s] = e),
    !t)
  )
    return Xl;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const c = [],
    f = () => {
      c.forEach((v) => v()), (c.length = 0);
    },
    d = (v, y, b, x) => (v.addEventListener(y, b, x), () => v.removeEventListener(y, b, x)),
    h = qt(
      () => [Gc(t), li(s)],
      ([v, y]) => {
        if ((f(), !v)) return;
        const b = jE(y) ? { ...y } : y;
        c.push(...r.flatMap((x) => o.map((C) => d(v, x, C, b))));
      },
      { immediate: !0, flush: "post" },
    ),
    p = () => {
      h(), f();
    };
  return Mu(p), p;
}
function QE(e) {
  return typeof e == "function"
    ? e
    : typeof e == "string"
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0;
}
function eL(...e) {
  let t,
    r,
    o = {};
  e.length === 3
    ? ((t = e[0]), (r = e[1]), (o = e[2]))
    : e.length === 2
      ? typeof e[1] == "object"
        ? ((t = !0), (r = e[0]), (o = e[1]))
        : ((t = e[0]), (r = e[1]))
      : ((t = !0), (r = e[0]));
  const { target: s = nr, eventName: c = "keydown", passive: f = !1, dedupe: d = !1 } = o,
    h = QE(t);
  return ks(
    s,
    c,
    (v) => {
      (v.repeat && li(d)) || (h(v) && r(v));
    },
    f,
  );
}
function tL() {
  const e = je(!1),
    t = oa();
  return (
    t &&
      Ms(() => {
        e.value = !0;
      }, t),
    e
  );
}
function Ub(e) {
  const t = tL();
  return $e(() => (t.value, !!e()));
}
function nL(e, t = {}) {
  const { immediate: r = !0, fpsLimit: o = void 0, window: s = nr } = t,
    c = je(!1),
    f = o ? 1e3 / o : null;
  let d = 0,
    h = null;
  function p(b) {
    if (!c.value || !s) return;
    d || (d = b);
    const x = b - d;
    if (f && x < f) {
      h = s.requestAnimationFrame(p);
      return;
    }
    (d = b), e({ delta: x, timestamp: b }), (h = s.requestAnimationFrame(p));
  }
  function v() {
    !c.value && s && ((c.value = !0), (d = 0), (h = s.requestAnimationFrame(p)));
  }
  function y() {
    (c.value = !1), h != null && s && (s.cancelAnimationFrame(h), (h = null));
  }
  return r && v(), Mu(y), { isActive: ra(c), pause: y, resume: v };
}
function Vb(e, t = {}) {
  const { window: r = nr } = t,
    o = Ub(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let s;
  const c = je(!1),
    f = (p) => {
      c.value = p.matches;
    },
    d = () => {
      s && ("removeEventListener" in s ? s.removeEventListener("change", f) : s.removeListener(f));
    },
    h = kh(() => {
      o.value &&
        (d(),
        (s = r.matchMedia(li(e))),
        "addEventListener" in s ? s.addEventListener("change", f) : s.addListener(f),
        (c.value = s.matches));
    });
  return (
    Mu(() => {
      h(), d(), (s = void 0);
    }),
    c
  );
}
const nc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  rc = "__vueuse_ssr_handlers__",
  rL = iL();
function iL() {
  return rc in nc || (nc[rc] = nc[rc] || {}), nc[rc];
}
function jb(e, t) {
  return rL[e] || t;
}
function oL(e) {
  return e == null
    ? "any"
    : e instanceof Set
      ? "set"
      : e instanceof Map
        ? "map"
        : e instanceof Date
          ? "date"
          : typeof e == "boolean"
            ? "boolean"
            : typeof e == "string"
              ? "string"
              : typeof e == "object"
                ? "object"
                : Number.isNaN(e)
                  ? "any"
                  : "number";
}
const sL = {
    boolean: { read: (e) => e === "true", write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Im = "vueuse-storage";
function Gb(e, t, r, o = {}) {
  var s;
  const {
      flush: c = "pre",
      deep: f = !0,
      listenToStorageChanges: d = !0,
      writeDefaults: h = !0,
      mergeDefaults: p = !1,
      shallow: v,
      window: y = nr,
      eventFilter: b,
      onError: x = (j) => {
        console.error(j);
      },
      initOnMounted: C,
    } = o,
    E = (v ? Fr : je)(typeof t == "function" ? t() : t);
  if (!r)
    try {
      r = jb("getDefaultStorage", () => {
        var j;
        return (j = nr) == null ? void 0 : j.localStorage;
      })();
    } catch (j) {
      x(j);
    }
  if (!r) return E;
  const N = li(t),
    M = oL(N),
    L = (s = o.serializer) != null ? s : sL[M],
    { pause: D, resume: A } = Bb(E, () => z(E.value), { flush: c, deep: f, eventFilter: b });
  y &&
    d &&
    Dh(() => {
      ks(y, "storage", ie), ks(y, Im, ne), C && ie();
    }),
    C || ie();
  function H(j, te) {
    y &&
      y.dispatchEvent(
        new CustomEvent(Im, { detail: { key: e, oldValue: j, newValue: te, storageArea: r } }),
      );
  }
  function z(j) {
    try {
      const te = r.getItem(e);
      if (j == null) H(te, null), r.removeItem(e);
      else {
        const K = L.write(j);
        te !== K && (r.setItem(e, K), H(te, K));
      }
    } catch (te) {
      x(te);
    }
  }
  function J(j) {
    const te = j ? j.newValue : r.getItem(e);
    if (te == null) return h && N != null && r.setItem(e, L.write(N)), N;
    if (!j && p) {
      const K = L.read(te);
      return typeof p == "function"
        ? p(K, N)
        : M === "object" && !Array.isArray(K)
          ? { ...N, ...K }
          : K;
    } else return typeof te != "string" ? te : L.read(te);
  }
  function ie(j) {
    if (!(j && j.storageArea !== r)) {
      if (j && j.key == null) {
        E.value = N;
        return;
      }
      if (!(j && j.key !== e)) {
        D();
        try {
          (j == null ? void 0 : j.newValue) !== L.write(E.value) && (E.value = J(j));
        } catch (te) {
          x(te);
        } finally {
          j ? ln(A) : A();
        }
      }
    }
  }
  function ne(j) {
    ie(j.detail);
  }
  return E;
}
function Kb(e) {
  return Vb("(prefers-color-scheme: dark)", e);
}
function lL(e = {}) {
  const {
      selector: t = "html",
      attribute: r = "class",
      initialValue: o = "auto",
      window: s = nr,
      storage: c,
      storageKey: f = "vueuse-color-scheme",
      listenToStorageChanges: d = !0,
      storageRef: h,
      emitAuto: p,
      disableTransition: v = !0,
    } = e,
    y = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
    b = Kb({ window: s }),
    x = $e(() => (b.value ? "dark" : "light")),
    C = h || (f == null ? XE(o) : Gb(f, o, c, { window: s, listenToStorageChanges: d })),
    E = $e(() => (C.value === "auto" ? x.value : C.value)),
    N = jb("updateHTMLAttrs", (A, H, z) => {
      const J = typeof A == "string" ? (s == null ? void 0 : s.document.querySelector(A)) : Gc(A);
      if (!J) return;
      let ie;
      if (
        (v &&
          ((ie = s.document.createElement("style")),
          ie.appendChild(
            document.createTextNode(
              "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
            ),
          ),
          s.document.head.appendChild(ie)),
        H === "class")
      ) {
        const ne = z.split(/\s/g);
        Object.values(y)
          .flatMap((j) => (j || "").split(/\s/g))
          .filter(Boolean)
          .forEach((j) => {
            ne.includes(j) ? J.classList.add(j) : J.classList.remove(j);
          });
      } else J.setAttribute(H, z);
      v && (s.getComputedStyle(ie).opacity, document.head.removeChild(ie));
    });
  function M(A) {
    var H;
    N(t, r, (H = y[A]) != null ? H : A);
  }
  function L(A) {
    e.onChanged ? e.onChanged(A, M) : M(A);
  }
  qt(E, L, { flush: "post", immediate: !0 }), Dh(() => L(E.value));
  const D = $e({
    get() {
      return p ? C.value : E.value;
    },
    set(A) {
      C.value = A;
    },
  });
  try {
    return Object.assign(D, { store: C, system: x, state: E });
  } catch {
    return D;
  }
}
function aL(e = {}) {
  const { valueDark: t = "dark", valueLight: r = "", window: o = nr } = e,
    s = lL({
      ...e,
      onChanged: (d, h) => {
        var p;
        e.onChanged ? (p = e.onChanged) == null || p.call(e, d === "dark", h, d) : h(d);
      },
      modes: { dark: t, light: r },
    }),
    c = $e(() => (s.system ? s.system.value : Kb({ window: o }).value ? "dark" : "light"));
  return $e({
    get() {
      return s.value === "dark";
    },
    set(d) {
      const h = d ? "dark" : "light";
      c.value === h ? (s.value = "auto") : (s.value = h);
    },
  });
}
function Xb(e, t, r = {}) {
  const { window: o = nr, ...s } = r;
  let c;
  const f = Ub(() => o && "ResizeObserver" in o),
    d = () => {
      c && (c.disconnect(), (c = void 0));
    },
    h = $e(() => (Array.isArray(e) ? e.map((y) => Gc(y)) : [Gc(e)])),
    p = qt(
      h,
      (y) => {
        if ((d(), f.value && o)) {
          c = new ResizeObserver(t);
          for (const b of y) b && c.observe(b, s);
        }
      },
      { immediate: !0, flush: "post" },
    ),
    v = () => {
      d(), p();
    };
  return Mu(v), { isSupported: f, stop: v };
}
function Nu(e, t, r = {}) {
  const { window: o = nr } = r;
  return Gb(e, t, o == null ? void 0 : o.localStorage, r);
}
function cL(e = "history", t = {}) {
  const {
    initialValue: r = {},
    removeNullishValues: o = !0,
    removeFalsyValues: s = !1,
    write: c = !0,
    window: f = nr,
  } = t;
  if (!f) return Qn(r);
  const d = Qn({});
  function h() {
    if (e === "history") return f.location.search || "";
    if (e === "hash") {
      const M = f.location.hash || "",
        L = M.indexOf("?");
      return L > 0 ? M.slice(L) : "";
    } else return (f.location.hash || "").replace(/^#/, "");
  }
  function p(M) {
    const L = M.toString();
    if (e === "history") return `${L ? `?${L}` : ""}${f.location.hash || ""}`;
    if (e === "hash-params") return `${f.location.search || ""}${L ? `#${L}` : ""}`;
    const D = f.location.hash || "#",
      A = D.indexOf("?");
    return A > 0 ? `${D.slice(0, A)}${L ? `?${L}` : ""}` : `${D}${L ? `?${L}` : ""}`;
  }
  function v() {
    return new URLSearchParams(h());
  }
  function y(M) {
    const L = new Set(Object.keys(d));
    for (const D of M.keys()) {
      const A = M.getAll(D);
      (d[D] = A.length > 1 ? A : M.get(D) || ""), L.delete(D);
    }
    Array.from(L).forEach((D) => delete d[D]);
  }
  const { pause: b, resume: x } = Bb(
    d,
    () => {
      const M = new URLSearchParams("");
      Object.keys(d).forEach((L) => {
        const D = d[L];
        Array.isArray(D)
          ? D.forEach((A) => M.append(L, A))
          : (o && D == null) || (s && !D)
            ? M.delete(L)
            : M.set(L, D);
      }),
        C(M);
    },
    { deep: !0 },
  );
  function C(M, L) {
    b(),
      L && y(M),
      f.history.replaceState(f.history.state, f.document.title, f.location.pathname + p(M)),
      x();
  }
  function E() {
    c && C(v(), !0);
  }
  ks(f, "popstate", E, !1), e !== "history" && ks(f, "hashchange", E, !1);
  const N = v();
  return N.keys().next().value ? y(N) : Object.assign(d, r), d;
}
function uL(e = {}) {
  const {
      window: t = nr,
      initialWidth: r = Number.POSITIVE_INFINITY,
      initialHeight: o = Number.POSITIVE_INFINITY,
      listenOrientation: s = !0,
      includeScrollbar: c = !0,
    } = e,
    f = je(r),
    d = je(o),
    h = () => {
      t &&
        (c
          ? ((f.value = t.innerWidth), (d.value = t.innerHeight))
          : ((f.value = t.document.documentElement.clientWidth),
            (d.value = t.document.documentElement.clientHeight)));
    };
  if ((h(), Dh(h), ks("resize", h, { passive: !0 }), s)) {
    const p = Vb("(orientation: portrait)");
    qt(p, () => h());
  }
  return { width: f, height: d };
}
const zh = cL("hash", { initialValue: { file: "", view: null, line: null } }),
  Gi = du(zh, "file"),
  Hn = du(zh, "view"),
  Od = du(zh, "line");
function fL(e) {
  let t = 0;
  if (e.length === 0) return `${t}`;
  for (let r = 0; r < e.length; r++) {
    const o = e.charCodeAt(r);
    (t = (t << 5) - t + o), (t = t & t);
  }
  return `${t}`;
}
function Pd(e, t, r, o) {
  const s = WE(t, e),
    c = {
      id: fL(`${s}${r || ""}`),
      name: s,
      type: "suite",
      mode: "run",
      filepath: e,
      tasks: [],
      meta: Object.create(null),
      projectName: r,
      file: void 0,
      pool: o,
    };
  return (c.file = c), c;
}
function Ts(e) {
  return e.type === "test" || e.type === "custom";
}
function Yb(e) {
  const t = [],
    r = Rh(e);
  for (const o of r)
    if (Ts(o)) t.push(o);
    else
      for (const s of o.tasks)
        if (Ts(s)) t.push(s);
        else {
          const c = Yb(s);
          for (const f of c) t.push(f);
        }
  return t;
}
function Ih(e = []) {
  return Rh(e).flatMap((t) => (Ts(t) ? [t] : [t, ...Ih(t.tasks)]));
}
function dL(e) {
  const t = [e.name];
  let r = e;
  for (; r != null && r.suite; ) (r = r.suite), r != null && r.name && t.unshift(r.name);
  return r !== e.file && t.unshift(e.file.name), t;
}
function hL(e) {
  return typeof AggregateError < "u" && e instanceof AggregateError
    ? !0
    : e instanceof Error && "errors" in e;
}
class Zb {
  constructor() {
    Xr(this, "filesMap", new Map());
    Xr(this, "pathsSet", new Set());
    Xr(this, "idMap", new Map());
    Xr(this, "taskFileMap", new WeakMap());
    Xr(this, "errorsSet", new Set());
    Xr(this, "processTimeoutCauses", new Set());
  }
  catchError(t, r) {
    if (hL(t)) return t.errors.forEach((s) => this.catchError(s, r));
    t === Object(t) ? (t.type = r) : (t = { type: r, message: t });
    const o = t;
    if (o && typeof o == "object" && o.code === "VITEST_PENDING") {
      const s = this.idMap.get(o.taskId);
      s &&
        ((s.mode = "skip"), s.result ?? (s.result = { state: "skip" }), (s.result.state = "skip"));
      return;
    }
    this.errorsSet.add(t);
  }
  clearErrors() {
    this.errorsSet.clear();
  }
  getUnhandledErrors() {
    return Array.from(this.errorsSet.values());
  }
  addProcessTimeoutCause(t) {
    this.processTimeoutCauses.add(t);
  }
  getProcessTimeoutCauses() {
    return Array.from(this.processTimeoutCauses.values());
  }
  getPaths() {
    return Array.from(this.pathsSet);
  }
  getFiles(t) {
    return t
      ? t
          .map((r) => this.filesMap.get(r))
          .flat()
          .filter((r) => r && !r.local)
      : Array.from(this.filesMap.values())
          .flat()
          .filter((r) => !r.local);
  }
  getFilepaths() {
    return Array.from(this.filesMap.keys());
  }
  getFailedFilepaths() {
    return this.getFiles()
      .filter((t) => {
        var r;
        return ((r = t.result) == null ? void 0 : r.state) === "fail";
      })
      .map((t) => t.filepath);
  }
  collectPaths(t = []) {
    t.forEach((r) => {
      this.pathsSet.add(r);
    });
  }
  collectFiles(t = []) {
    t.forEach((r) => {
      const o = this.filesMap.get(r.filepath) || [],
        s = o.filter((f) => f.projectName !== r.projectName),
        c = o.find((f) => f.projectName === r.projectName);
      c && (r.logs = c.logs), s.push(r), this.filesMap.set(r.filepath, s), this.updateId(r);
    });
  }
  clearFiles(t, r = []) {
    const o = t;
    r.forEach((s) => {
      const c = this.filesMap.get(s),
        f = Pd(s, o.config.root, o.config.name);
      if (((f.local = !0), this.idMap.set(f.id, f), !c)) {
        this.filesMap.set(s, [f]);
        return;
      }
      const d = c.filter((h) => h.projectName !== o.config.name);
      d.length ? this.filesMap.set(s, [...d, f]) : this.filesMap.set(s, [f]);
    });
  }
  updateId(t) {
    this.idMap.get(t.id) !== t &&
      (this.idMap.set(t.id, t),
      t.type === "suite" &&
        t.tasks.forEach((r) => {
          this.updateId(r);
        }));
  }
  updateTasks(t) {
    for (const [r, o, s] of t) {
      const c = this.idMap.get(r);
      c &&
        ((c.result = o),
        (c.meta = s),
        (o == null ? void 0 : o.state) === "skip" && (c.mode = "skip"));
    }
  }
  updateUserLog(t) {
    const r = t.taskId && this.idMap.get(t.taskId);
    r && (r.logs || (r.logs = []), r.logs.push(t));
  }
  getCountOfFailedTests() {
    return Array.from(this.idMap.values()).filter((t) => {
      var r;
      return ((r = t.result) == null ? void 0 : r.state) === "fail";
    }).length;
  }
  cancelFiles(t, r, o) {
    this.collectFiles(t.map((s) => Pd(s, r, o)));
  }
}
function Fh(e) {
  return Yb(e).some((t) => {
    var r, o;
    return (o = (r = t.result) == null ? void 0 : r.errors) == null
      ? void 0
      : o.some(
          (s) =>
            typeof (s == null ? void 0 : s.message) == "string" &&
            s.message.match(/Snapshot .* mismatched/),
        );
  });
}
function pL(e, t = {}) {
  const {
    handlers: r = {},
    autoReconnect: o = !0,
    reconnectInterval: s = 2e3,
    reconnectTries: c = 10,
    connectTimeout: f = 6e4,
    reactive: d = (L) => L,
    WebSocketConstructor: h = globalThis.WebSocket,
  } = t;
  let p = c;
  const v = d({ ws: new h(e), state: new Zb(), waitForConnection: M, reconnect: E }, "state");
  (v.state.filesMap = d(v.state.filesMap, "filesMap")), (v.state.idMap = d(v.state.idMap, "idMap"));
  let y;
  const b = {
      onSpecsCollected(L) {
        var D;
        L == null ||
          L.forEach(([A, H]) => {
            v.state.clearFiles({ config: A }, [H]);
          }),
          (D = r.onSpecsCollected) == null || D.call(r, L);
      },
      onPathsCollected(L) {
        var D;
        v.state.collectPaths(L), (D = r.onPathsCollected) == null || D.call(r, L);
      },
      onCollected(L) {
        var D;
        v.state.collectFiles(L), (D = r.onCollected) == null || D.call(r, L);
      },
      onTaskUpdate(L) {
        var D;
        v.state.updateTasks(L), (D = r.onTaskUpdate) == null || D.call(r, L);
      },
      onUserConsoleLog(L) {
        var D;
        v.state.updateUserLog(L), (D = r.onUserConsoleLog) == null || D.call(r, L);
      },
      onFinished(L, D) {
        var A;
        (A = r.onFinished) == null || A.call(r, L, D);
      },
      onFinishedReportCoverage() {
        var L;
        (L = r.onFinishedReportCoverage) == null || L.call(r);
      },
    },
    x = {
      post: (L) => v.ws.send(L),
      on: (L) => (y = L),
      serialize: (L) =>
        zE(L, (D, A) =>
          A instanceof Error ? { name: A.name, message: A.message, stack: A.stack } : A,
        ),
      deserialize: $d,
      onTimeoutError(L) {
        throw new Error(`[vitest-ws-client]: Timeout calling "${L}"`);
      },
    };
  v.rpc = AE(b, x);
  let C;
  function E(L = !1) {
    L && (p = c), (v.ws = new h(e)), N();
  }
  function N() {
    (C = new Promise((L, D) => {
      var H, z;
      const A =
        (z =
          (H = setTimeout(() => {
            D(new Error(`Cannot connect to the server in ${f / 1e3} seconds`));
          }, f)) == null
            ? void 0
            : H.unref) == null
          ? void 0
          : z.call(H);
      v.ws.OPEN === v.ws.readyState && L(),
        v.ws.addEventListener("open", () => {
          (p = c), L(), clearTimeout(A);
        });
    })),
      v.ws.addEventListener("message", (L) => {
        y(L.data);
      }),
      v.ws.addEventListener("close", () => {
        (p -= 1), o && p > 0 && setTimeout(E, s);
      });
  }
  N();
  function M() {
    return C;
  }
  return v;
}
const gL = location.port,
  vL = [location.hostname, gL].filter(Boolean).join(":"),
  mL = `${location.protocol === "https:" ? "wss:" : "ws:"}//${vL}/__vitest_api__`,
  Pr = !!window.METADATA_PATH;
var Jb = {},
  oi = {};
const yL = "Á",
  bL = "á",
  wL = "Ă",
  xL = "ă",
  _L = "∾",
  SL = "∿",
  kL = "∾̳",
  TL = "Â",
  CL = "â",
  EL = "´",
  LL = "А",
  AL = "а",
  ML = "Æ",
  NL = "æ",
  $L = "⁡",
  OL = "𝔄",
  PL = "𝔞",
  RL = "À",
  DL = "à",
  zL = "ℵ",
  IL = "ℵ",
  FL = "Α",
  HL = "α",
  qL = "Ā",
  BL = "ā",
  WL = "⨿",
  UL = "&",
  VL = "&",
  jL = "⩕",
  GL = "⩓",
  KL = "∧",
  XL = "⩜",
  YL = "⩘",
  ZL = "⩚",
  JL = "∠",
  QL = "⦤",
  eA = "∠",
  tA = "⦨",
  nA = "⦩",
  rA = "⦪",
  iA = "⦫",
  oA = "⦬",
  sA = "⦭",
  lA = "⦮",
  aA = "⦯",
  cA = "∡",
  uA = "∟",
  fA = "⊾",
  dA = "⦝",
  hA = "∢",
  pA = "Å",
  gA = "⍼",
  vA = "Ą",
  mA = "ą",
  yA = "𝔸",
  bA = "𝕒",
  wA = "⩯",
  xA = "≈",
  _A = "⩰",
  SA = "≊",
  kA = "≋",
  TA = "'",
  CA = "⁡",
  EA = "≈",
  LA = "≊",
  AA = "Å",
  MA = "å",
  NA = "𝒜",
  $A = "𝒶",
  OA = "≔",
  PA = "*",
  RA = "≈",
  DA = "≍",
  zA = "Ã",
  IA = "ã",
  FA = "Ä",
  HA = "ä",
  qA = "∳",
  BA = "⨑",
  WA = "≌",
  UA = "϶",
  VA = "‵",
  jA = "∽",
  GA = "⋍",
  KA = "∖",
  XA = "⫧",
  YA = "⊽",
  ZA = "⌅",
  JA = "⌆",
  QA = "⌅",
  eM = "⎵",
  tM = "⎶",
  nM = "≌",
  rM = "Б",
  iM = "б",
  oM = "„",
  sM = "∵",
  lM = "∵",
  aM = "∵",
  cM = "⦰",
  uM = "϶",
  fM = "ℬ",
  dM = "ℬ",
  hM = "Β",
  pM = "β",
  gM = "ℶ",
  vM = "≬",
  mM = "𝔅",
  yM = "𝔟",
  bM = "⋂",
  wM = "◯",
  xM = "⋃",
  _M = "⨀",
  SM = "⨁",
  kM = "⨂",
  TM = "⨆",
  CM = "★",
  EM = "▽",
  LM = "△",
  AM = "⨄",
  MM = "⋁",
  NM = "⋀",
  $M = "⤍",
  OM = "⧫",
  PM = "▪",
  RM = "▴",
  DM = "▾",
  zM = "◂",
  IM = "▸",
  FM = "␣",
  HM = "▒",
  qM = "░",
  BM = "▓",
  WM = "█",
  UM = "=⃥",
  VM = "≡⃥",
  jM = "⫭",
  GM = "⌐",
  KM = "𝔹",
  XM = "𝕓",
  YM = "⊥",
  ZM = "⊥",
  JM = "⋈",
  QM = "⧉",
  eN = "┐",
  tN = "╕",
  nN = "╖",
  rN = "╗",
  iN = "┌",
  oN = "╒",
  sN = "╓",
  lN = "╔",
  aN = "─",
  cN = "═",
  uN = "┬",
  fN = "╤",
  dN = "╥",
  hN = "╦",
  pN = "┴",
  gN = "╧",
  vN = "╨",
  mN = "╩",
  yN = "⊟",
  bN = "⊞",
  wN = "⊠",
  xN = "┘",
  _N = "╛",
  SN = "╜",
  kN = "╝",
  TN = "└",
  CN = "╘",
  EN = "╙",
  LN = "╚",
  AN = "│",
  MN = "║",
  NN = "┼",
  $N = "╪",
  ON = "╫",
  PN = "╬",
  RN = "┤",
  DN = "╡",
  zN = "╢",
  IN = "╣",
  FN = "├",
  HN = "╞",
  qN = "╟",
  BN = "╠",
  WN = "‵",
  UN = "˘",
  VN = "˘",
  jN = "¦",
  GN = "𝒷",
  KN = "ℬ",
  XN = "⁏",
  YN = "∽",
  ZN = "⋍",
  JN = "⧅",
  QN = "\\",
  e$ = "⟈",
  t$ = "•",
  n$ = "•",
  r$ = "≎",
  i$ = "⪮",
  o$ = "≏",
  s$ = "≎",
  l$ = "≏",
  a$ = "Ć",
  c$ = "ć",
  u$ = "⩄",
  f$ = "⩉",
  d$ = "⩋",
  h$ = "∩",
  p$ = "⋒",
  g$ = "⩇",
  v$ = "⩀",
  m$ = "ⅅ",
  y$ = "∩︀",
  b$ = "⁁",
  w$ = "ˇ",
  x$ = "ℭ",
  _$ = "⩍",
  S$ = "Č",
  k$ = "č",
  T$ = "Ç",
  C$ = "ç",
  E$ = "Ĉ",
  L$ = "ĉ",
  A$ = "∰",
  M$ = "⩌",
  N$ = "⩐",
  $$ = "Ċ",
  O$ = "ċ",
  P$ = "¸",
  R$ = "¸",
  D$ = "⦲",
  z$ = "¢",
  I$ = "·",
  F$ = "·",
  H$ = "𝔠",
  q$ = "ℭ",
  B$ = "Ч",
  W$ = "ч",
  U$ = "✓",
  V$ = "✓",
  j$ = "Χ",
  G$ = "χ",
  K$ = "ˆ",
  X$ = "≗",
  Y$ = "↺",
  Z$ = "↻",
  J$ = "⊛",
  Q$ = "⊚",
  eO = "⊝",
  tO = "⊙",
  nO = "®",
  rO = "Ⓢ",
  iO = "⊖",
  oO = "⊕",
  sO = "⊗",
  lO = "○",
  aO = "⧃",
  cO = "≗",
  uO = "⨐",
  fO = "⫯",
  dO = "⧂",
  hO = "∲",
  pO = "”",
  gO = "’",
  vO = "♣",
  mO = "♣",
  yO = ":",
  bO = "∷",
  wO = "⩴",
  xO = "≔",
  _O = "≔",
  SO = ",",
  kO = "@",
  TO = "∁",
  CO = "∘",
  EO = "∁",
  LO = "ℂ",
  AO = "≅",
  MO = "⩭",
  NO = "≡",
  $O = "∮",
  OO = "∯",
  PO = "∮",
  RO = "𝕔",
  DO = "ℂ",
  zO = "∐",
  IO = "∐",
  FO = "©",
  HO = "©",
  qO = "℗",
  BO = "∳",
  WO = "↵",
  UO = "✗",
  VO = "⨯",
  jO = "𝒞",
  GO = "𝒸",
  KO = "⫏",
  XO = "⫑",
  YO = "⫐",
  ZO = "⫒",
  JO = "⋯",
  QO = "⤸",
  eP = "⤵",
  tP = "⋞",
  nP = "⋟",
  rP = "↶",
  iP = "⤽",
  oP = "⩈",
  sP = "⩆",
  lP = "≍",
  aP = "∪",
  cP = "⋓",
  uP = "⩊",
  fP = "⊍",
  dP = "⩅",
  hP = "∪︀",
  pP = "↷",
  gP = "⤼",
  vP = "⋞",
  mP = "⋟",
  yP = "⋎",
  bP = "⋏",
  wP = "¤",
  xP = "↶",
  _P = "↷",
  SP = "⋎",
  kP = "⋏",
  TP = "∲",
  CP = "∱",
  EP = "⌭",
  LP = "†",
  AP = "‡",
  MP = "ℸ",
  NP = "↓",
  $P = "↡",
  OP = "⇓",
  PP = "‐",
  RP = "⫤",
  DP = "⊣",
  zP = "⤏",
  IP = "˝",
  FP = "Ď",
  HP = "ď",
  qP = "Д",
  BP = "д",
  WP = "‡",
  UP = "⇊",
  VP = "ⅅ",
  jP = "ⅆ",
  GP = "⤑",
  KP = "⩷",
  XP = "°",
  YP = "∇",
  ZP = "Δ",
  JP = "δ",
  QP = "⦱",
  eR = "⥿",
  tR = "𝔇",
  nR = "𝔡",
  rR = "⥥",
  iR = "⇃",
  oR = "⇂",
  sR = "´",
  lR = "˙",
  aR = "˝",
  cR = "`",
  uR = "˜",
  fR = "⋄",
  dR = "⋄",
  hR = "⋄",
  pR = "♦",
  gR = "♦",
  vR = "¨",
  mR = "ⅆ",
  yR = "ϝ",
  bR = "⋲",
  wR = "÷",
  xR = "÷",
  _R = "⋇",
  SR = "⋇",
  kR = "Ђ",
  TR = "ђ",
  CR = "⌞",
  ER = "⌍",
  LR = "$",
  AR = "𝔻",
  MR = "𝕕",
  NR = "¨",
  $R = "˙",
  OR = "⃜",
  PR = "≐",
  RR = "≑",
  DR = "≐",
  zR = "∸",
  IR = "∔",
  FR = "⊡",
  HR = "⌆",
  qR = "∯",
  BR = "¨",
  WR = "⇓",
  UR = "⇐",
  VR = "⇔",
  jR = "⫤",
  GR = "⟸",
  KR = "⟺",
  XR = "⟹",
  YR = "⇒",
  ZR = "⊨",
  JR = "⇑",
  QR = "⇕",
  eD = "∥",
  tD = "⤓",
  nD = "↓",
  rD = "↓",
  iD = "⇓",
  oD = "⇵",
  sD = "̑",
  lD = "⇊",
  aD = "⇃",
  cD = "⇂",
  uD = "⥐",
  fD = "⥞",
  dD = "⥖",
  hD = "↽",
  pD = "⥟",
  gD = "⥗",
  vD = "⇁",
  mD = "↧",
  yD = "⊤",
  bD = "⤐",
  wD = "⌟",
  xD = "⌌",
  _D = "𝒟",
  SD = "𝒹",
  kD = "Ѕ",
  TD = "ѕ",
  CD = "⧶",
  ED = "Đ",
  LD = "đ",
  AD = "⋱",
  MD = "▿",
  ND = "▾",
  $D = "⇵",
  OD = "⥯",
  PD = "⦦",
  RD = "Џ",
  DD = "џ",
  zD = "⟿",
  ID = "É",
  FD = "é",
  HD = "⩮",
  qD = "Ě",
  BD = "ě",
  WD = "Ê",
  UD = "ê",
  VD = "≖",
  jD = "≕",
  GD = "Э",
  KD = "э",
  XD = "⩷",
  YD = "Ė",
  ZD = "ė",
  JD = "≑",
  QD = "ⅇ",
  e2 = "≒",
  t2 = "𝔈",
  n2 = "𝔢",
  r2 = "⪚",
  i2 = "È",
  o2 = "è",
  s2 = "⪖",
  l2 = "⪘",
  a2 = "⪙",
  c2 = "∈",
  u2 = "⏧",
  f2 = "ℓ",
  d2 = "⪕",
  h2 = "⪗",
  p2 = "Ē",
  g2 = "ē",
  v2 = "∅",
  m2 = "∅",
  y2 = "◻",
  b2 = "∅",
  w2 = "▫",
  x2 = " ",
  _2 = " ",
  S2 = " ",
  k2 = "Ŋ",
  T2 = "ŋ",
  C2 = " ",
  E2 = "Ę",
  L2 = "ę",
  A2 = "𝔼",
  M2 = "𝕖",
  N2 = "⋕",
  $2 = "⧣",
  O2 = "⩱",
  P2 = "ε",
  R2 = "Ε",
  D2 = "ε",
  z2 = "ϵ",
  I2 = "≖",
  F2 = "≕",
  H2 = "≂",
  q2 = "⪖",
  B2 = "⪕",
  W2 = "⩵",
  U2 = "=",
  V2 = "≂",
  j2 = "≟",
  G2 = "⇌",
  K2 = "≡",
  X2 = "⩸",
  Y2 = "⧥",
  Z2 = "⥱",
  J2 = "≓",
  Q2 = "ℯ",
  ez = "ℰ",
  tz = "≐",
  nz = "⩳",
  rz = "≂",
  iz = "Η",
  oz = "η",
  sz = "Ð",
  lz = "ð",
  az = "Ë",
  cz = "ë",
  uz = "€",
  fz = "!",
  dz = "∃",
  hz = "∃",
  pz = "ℰ",
  gz = "ⅇ",
  vz = "ⅇ",
  mz = "≒",
  yz = "Ф",
  bz = "ф",
  wz = "♀",
  xz = "ﬃ",
  _z = "ﬀ",
  Sz = "ﬄ",
  kz = "𝔉",
  Tz = "𝔣",
  Cz = "ﬁ",
  Ez = "◼",
  Lz = "▪",
  Az = "fj",
  Mz = "♭",
  Nz = "ﬂ",
  $z = "▱",
  Oz = "ƒ",
  Pz = "𝔽",
  Rz = "𝕗",
  Dz = "∀",
  zz = "∀",
  Iz = "⋔",
  Fz = "⫙",
  Hz = "ℱ",
  qz = "⨍",
  Bz = "½",
  Wz = "⅓",
  Uz = "¼",
  Vz = "⅕",
  jz = "⅙",
  Gz = "⅛",
  Kz = "⅔",
  Xz = "⅖",
  Yz = "¾",
  Zz = "⅗",
  Jz = "⅜",
  Qz = "⅘",
  eI = "⅚",
  tI = "⅝",
  nI = "⅞",
  rI = "⁄",
  iI = "⌢",
  oI = "𝒻",
  sI = "ℱ",
  lI = "ǵ",
  aI = "Γ",
  cI = "γ",
  uI = "Ϝ",
  fI = "ϝ",
  dI = "⪆",
  hI = "Ğ",
  pI = "ğ",
  gI = "Ģ",
  vI = "Ĝ",
  mI = "ĝ",
  yI = "Г",
  bI = "г",
  wI = "Ġ",
  xI = "ġ",
  _I = "≥",
  SI = "≧",
  kI = "⪌",
  TI = "⋛",
  CI = "≥",
  EI = "≧",
  LI = "⩾",
  AI = "⪩",
  MI = "⩾",
  NI = "⪀",
  $I = "⪂",
  OI = "⪄",
  PI = "⋛︀",
  RI = "⪔",
  DI = "𝔊",
  zI = "𝔤",
  II = "≫",
  FI = "⋙",
  HI = "⋙",
  qI = "ℷ",
  BI = "Ѓ",
  WI = "ѓ",
  UI = "⪥",
  VI = "≷",
  jI = "⪒",
  GI = "⪤",
  KI = "⪊",
  XI = "⪊",
  YI = "⪈",
  ZI = "≩",
  JI = "⪈",
  QI = "≩",
  eF = "⋧",
  tF = "𝔾",
  nF = "𝕘",
  rF = "`",
  iF = "≥",
  oF = "⋛",
  sF = "≧",
  lF = "⪢",
  aF = "≷",
  cF = "⩾",
  uF = "≳",
  fF = "𝒢",
  dF = "ℊ",
  hF = "≳",
  pF = "⪎",
  gF = "⪐",
  vF = "⪧",
  mF = "⩺",
  yF = ">",
  bF = ">",
  wF = "≫",
  xF = "⋗",
  _F = "⦕",
  SF = "⩼",
  kF = "⪆",
  TF = "⥸",
  CF = "⋗",
  EF = "⋛",
  LF = "⪌",
  AF = "≷",
  MF = "≳",
  NF = "≩︀",
  $F = "≩︀",
  OF = "ˇ",
  PF = " ",
  RF = "½",
  DF = "ℋ",
  zF = "Ъ",
  IF = "ъ",
  FF = "⥈",
  HF = "↔",
  qF = "⇔",
  BF = "↭",
  WF = "^",
  UF = "ℏ",
  VF = "Ĥ",
  jF = "ĥ",
  GF = "♥",
  KF = "♥",
  XF = "…",
  YF = "⊹",
  ZF = "𝔥",
  JF = "ℌ",
  QF = "ℋ",
  eH = "⤥",
  tH = "⤦",
  nH = "⇿",
  rH = "∻",
  iH = "↩",
  oH = "↪",
  sH = "𝕙",
  lH = "ℍ",
  aH = "―",
  cH = "─",
  uH = "𝒽",
  fH = "ℋ",
  dH = "ℏ",
  hH = "Ħ",
  pH = "ħ",
  gH = "≎",
  vH = "≏",
  mH = "⁃",
  yH = "‐",
  bH = "Í",
  wH = "í",
  xH = "⁣",
  _H = "Î",
  SH = "î",
  kH = "И",
  TH = "и",
  CH = "İ",
  EH = "Е",
  LH = "е",
  AH = "¡",
  MH = "⇔",
  NH = "𝔦",
  $H = "ℑ",
  OH = "Ì",
  PH = "ì",
  RH = "ⅈ",
  DH = "⨌",
  zH = "∭",
  IH = "⧜",
  FH = "℩",
  HH = "Ĳ",
  qH = "ĳ",
  BH = "Ī",
  WH = "ī",
  UH = "ℑ",
  VH = "ⅈ",
  jH = "ℐ",
  GH = "ℑ",
  KH = "ı",
  XH = "ℑ",
  YH = "⊷",
  ZH = "Ƶ",
  JH = "⇒",
  QH = "℅",
  eq = "∞",
  tq = "⧝",
  nq = "ı",
  rq = "⊺",
  iq = "∫",
  oq = "∬",
  sq = "ℤ",
  lq = "∫",
  aq = "⊺",
  cq = "⋂",
  uq = "⨗",
  fq = "⨼",
  dq = "⁣",
  hq = "⁢",
  pq = "Ё",
  gq = "ё",
  vq = "Į",
  mq = "į",
  yq = "𝕀",
  bq = "𝕚",
  wq = "Ι",
  xq = "ι",
  _q = "⨼",
  Sq = "¿",
  kq = "𝒾",
  Tq = "ℐ",
  Cq = "∈",
  Eq = "⋵",
  Lq = "⋹",
  Aq = "⋴",
  Mq = "⋳",
  Nq = "∈",
  $q = "⁢",
  Oq = "Ĩ",
  Pq = "ĩ",
  Rq = "І",
  Dq = "і",
  zq = "Ï",
  Iq = "ï",
  Fq = "Ĵ",
  Hq = "ĵ",
  qq = "Й",
  Bq = "й",
  Wq = "𝔍",
  Uq = "𝔧",
  Vq = "ȷ",
  jq = "𝕁",
  Gq = "𝕛",
  Kq = "𝒥",
  Xq = "𝒿",
  Yq = "Ј",
  Zq = "ј",
  Jq = "Є",
  Qq = "є",
  eB = "Κ",
  tB = "κ",
  nB = "ϰ",
  rB = "Ķ",
  iB = "ķ",
  oB = "К",
  sB = "к",
  lB = "𝔎",
  aB = "𝔨",
  cB = "ĸ",
  uB = "Х",
  fB = "х",
  dB = "Ќ",
  hB = "ќ",
  pB = "𝕂",
  gB = "𝕜",
  vB = "𝒦",
  mB = "𝓀",
  yB = "⇚",
  bB = "Ĺ",
  wB = "ĺ",
  xB = "⦴",
  _B = "ℒ",
  SB = "Λ",
  kB = "λ",
  TB = "⟨",
  CB = "⟪",
  EB = "⦑",
  LB = "⟨",
  AB = "⪅",
  MB = "ℒ",
  NB = "«",
  $B = "⇤",
  OB = "⤟",
  PB = "←",
  RB = "↞",
  DB = "⇐",
  zB = "⤝",
  IB = "↩",
  FB = "↫",
  HB = "⤹",
  qB = "⥳",
  BB = "↢",
  WB = "⤙",
  UB = "⤛",
  VB = "⪫",
  jB = "⪭",
  GB = "⪭︀",
  KB = "⤌",
  XB = "⤎",
  YB = "❲",
  ZB = "{",
  JB = "[",
  QB = "⦋",
  e3 = "⦏",
  t3 = "⦍",
  n3 = "Ľ",
  r3 = "ľ",
  i3 = "Ļ",
  o3 = "ļ",
  s3 = "⌈",
  l3 = "{",
  a3 = "Л",
  c3 = "л",
  u3 = "⤶",
  f3 = "“",
  d3 = "„",
  h3 = "⥧",
  p3 = "⥋",
  g3 = "↲",
  v3 = "≤",
  m3 = "≦",
  y3 = "⟨",
  b3 = "⇤",
  w3 = "←",
  x3 = "←",
  _3 = "⇐",
  S3 = "⇆",
  k3 = "↢",
  T3 = "⌈",
  C3 = "⟦",
  E3 = "⥡",
  L3 = "⥙",
  A3 = "⇃",
  M3 = "⌊",
  N3 = "↽",
  $3 = "↼",
  O3 = "⇇",
  P3 = "↔",
  R3 = "↔",
  D3 = "⇔",
  z3 = "⇆",
  I3 = "⇋",
  F3 = "↭",
  H3 = "⥎",
  q3 = "↤",
  B3 = "⊣",
  W3 = "⥚",
  U3 = "⋋",
  V3 = "⧏",
  j3 = "⊲",
  G3 = "⊴",
  K3 = "⥑",
  X3 = "⥠",
  Y3 = "⥘",
  Z3 = "↿",
  J3 = "⥒",
  Q3 = "↼",
  e5 = "⪋",
  t5 = "⋚",
  n5 = "≤",
  r5 = "≦",
  i5 = "⩽",
  o5 = "⪨",
  s5 = "⩽",
  l5 = "⩿",
  a5 = "⪁",
  c5 = "⪃",
  u5 = "⋚︀",
  f5 = "⪓",
  d5 = "⪅",
  h5 = "⋖",
  p5 = "⋚",
  g5 = "⪋",
  v5 = "⋚",
  m5 = "≦",
  y5 = "≶",
  b5 = "≶",
  w5 = "⪡",
  x5 = "≲",
  _5 = "⩽",
  S5 = "≲",
  k5 = "⥼",
  T5 = "⌊",
  C5 = "𝔏",
  E5 = "𝔩",
  L5 = "≶",
  A5 = "⪑",
  M5 = "⥢",
  N5 = "↽",
  $5 = "↼",
  O5 = "⥪",
  P5 = "▄",
  R5 = "Љ",
  D5 = "љ",
  z5 = "⇇",
  I5 = "≪",
  F5 = "⋘",
  H5 = "⌞",
  q5 = "⇚",
  B5 = "⥫",
  W5 = "◺",
  U5 = "Ŀ",
  V5 = "ŀ",
  j5 = "⎰",
  G5 = "⎰",
  K5 = "⪉",
  X5 = "⪉",
  Y5 = "⪇",
  Z5 = "≨",
  J5 = "⪇",
  Q5 = "≨",
  e8 = "⋦",
  t8 = "⟬",
  n8 = "⇽",
  r8 = "⟦",
  i8 = "⟵",
  o8 = "⟵",
  s8 = "⟸",
  l8 = "⟷",
  a8 = "⟷",
  c8 = "⟺",
  u8 = "⟼",
  f8 = "⟶",
  d8 = "⟶",
  h8 = "⟹",
  p8 = "↫",
  g8 = "↬",
  v8 = "⦅",
  m8 = "𝕃",
  y8 = "𝕝",
  b8 = "⨭",
  w8 = "⨴",
  x8 = "∗",
  _8 = "_",
  S8 = "↙",
  k8 = "↘",
  T8 = "◊",
  C8 = "◊",
  E8 = "⧫",
  L8 = "(",
  A8 = "⦓",
  M8 = "⇆",
  N8 = "⌟",
  $8 = "⇋",
  O8 = "⥭",
  P8 = "‎",
  R8 = "⊿",
  D8 = "‹",
  z8 = "𝓁",
  I8 = "ℒ",
  F8 = "↰",
  H8 = "↰",
  q8 = "≲",
  B8 = "⪍",
  W8 = "⪏",
  U8 = "[",
  V8 = "‘",
  j8 = "‚",
  G8 = "Ł",
  K8 = "ł",
  X8 = "⪦",
  Y8 = "⩹",
  Z8 = "<",
  J8 = "<",
  Q8 = "≪",
  eW = "⋖",
  tW = "⋋",
  nW = "⋉",
  rW = "⥶",
  iW = "⩻",
  oW = "◃",
  sW = "⊴",
  lW = "◂",
  aW = "⦖",
  cW = "⥊",
  uW = "⥦",
  fW = "≨︀",
  dW = "≨︀",
  hW = "¯",
  pW = "♂",
  gW = "✠",
  vW = "✠",
  mW = "↦",
  yW = "↦",
  bW = "↧",
  wW = "↤",
  xW = "↥",
  _W = "▮",
  SW = "⨩",
  kW = "М",
  TW = "м",
  CW = "—",
  EW = "∺",
  LW = "∡",
  AW = " ",
  MW = "ℳ",
  NW = "𝔐",
  $W = "𝔪",
  OW = "℧",
  PW = "µ",
  RW = "*",
  DW = "⫰",
  zW = "∣",
  IW = "·",
  FW = "⊟",
  HW = "−",
  qW = "∸",
  BW = "⨪",
  WW = "∓",
  UW = "⫛",
  VW = "…",
  jW = "∓",
  GW = "⊧",
  KW = "𝕄",
  XW = "𝕞",
  YW = "∓",
  ZW = "𝓂",
  JW = "ℳ",
  QW = "∾",
  eU = "Μ",
  tU = "μ",
  nU = "⊸",
  rU = "⊸",
  iU = "∇",
  oU = "Ń",
  sU = "ń",
  lU = "∠⃒",
  aU = "≉",
  cU = "⩰̸",
  uU = "≋̸",
  fU = "ŉ",
  dU = "≉",
  hU = "♮",
  pU = "ℕ",
  gU = "♮",
  vU = " ",
  mU = "≎̸",
  yU = "≏̸",
  bU = "⩃",
  wU = "Ň",
  xU = "ň",
  _U = "Ņ",
  SU = "ņ",
  kU = "≇",
  TU = "⩭̸",
  CU = "⩂",
  EU = "Н",
  LU = "н",
  AU = "–",
  MU = "⤤",
  NU = "↗",
  $U = "⇗",
  OU = "↗",
  PU = "≠",
  RU = "≐̸",
  DU = "​",
  zU = "​",
  IU = "​",
  FU = "​",
  HU = "≢",
  qU = "⤨",
  BU = "≂̸",
  WU = "≫",
  UU = "≪",
  VU = `
`,
  jU = "∄",
  GU = "∄",
  KU = "𝔑",
  XU = "𝔫",
  YU = "≧̸",
  ZU = "≱",
  JU = "≱",
  QU = "≧̸",
  e4 = "⩾̸",
  t4 = "⩾̸",
  n4 = "⋙̸",
  r4 = "≵",
  i4 = "≫⃒",
  o4 = "≯",
  s4 = "≯",
  l4 = "≫̸",
  a4 = "↮",
  c4 = "⇎",
  u4 = "⫲",
  f4 = "∋",
  d4 = "⋼",
  h4 = "⋺",
  p4 = "∋",
  g4 = "Њ",
  v4 = "њ",
  m4 = "↚",
  y4 = "⇍",
  b4 = "‥",
  w4 = "≦̸",
  x4 = "≰",
  _4 = "↚",
  S4 = "⇍",
  k4 = "↮",
  T4 = "⇎",
  C4 = "≰",
  E4 = "≦̸",
  L4 = "⩽̸",
  A4 = "⩽̸",
  M4 = "≮",
  N4 = "⋘̸",
  $4 = "≴",
  O4 = "≪⃒",
  P4 = "≮",
  R4 = "⋪",
  D4 = "⋬",
  z4 = "≪̸",
  I4 = "∤",
  F4 = "⁠",
  H4 = " ",
  q4 = "𝕟",
  B4 = "ℕ",
  W4 = "⫬",
  U4 = "¬",
  V4 = "≢",
  j4 = "≭",
  G4 = "∦",
  K4 = "∉",
  X4 = "≠",
  Y4 = "≂̸",
  Z4 = "∄",
  J4 = "≯",
  Q4 = "≱",
  e6 = "≧̸",
  t6 = "≫̸",
  n6 = "≹",
  r6 = "⩾̸",
  i6 = "≵",
  o6 = "≎̸",
  s6 = "≏̸",
  l6 = "∉",
  a6 = "⋵̸",
  c6 = "⋹̸",
  u6 = "∉",
  f6 = "⋷",
  d6 = "⋶",
  h6 = "⧏̸",
  p6 = "⋪",
  g6 = "⋬",
  v6 = "≮",
  m6 = "≰",
  y6 = "≸",
  b6 = "≪̸",
  w6 = "⩽̸",
  x6 = "≴",
  _6 = "⪢̸",
  S6 = "⪡̸",
  k6 = "∌",
  T6 = "∌",
  C6 = "⋾",
  E6 = "⋽",
  L6 = "⊀",
  A6 = "⪯̸",
  M6 = "⋠",
  N6 = "∌",
  $6 = "⧐̸",
  O6 = "⋫",
  P6 = "⋭",
  R6 = "⊏̸",
  D6 = "⋢",
  z6 = "⊐̸",
  I6 = "⋣",
  F6 = "⊂⃒",
  H6 = "⊈",
  q6 = "⊁",
  B6 = "⪰̸",
  W6 = "⋡",
  U6 = "≿̸",
  V6 = "⊃⃒",
  j6 = "⊉",
  G6 = "≁",
  K6 = "≄",
  X6 = "≇",
  Y6 = "≉",
  Z6 = "∤",
  J6 = "∦",
  Q6 = "∦",
  eV = "⫽⃥",
  tV = "∂̸",
  nV = "⨔",
  rV = "⊀",
  iV = "⋠",
  oV = "⊀",
  sV = "⪯̸",
  lV = "⪯̸",
  aV = "⤳̸",
  cV = "↛",
  uV = "⇏",
  fV = "↝̸",
  dV = "↛",
  hV = "⇏",
  pV = "⋫",
  gV = "⋭",
  vV = "⊁",
  mV = "⋡",
  yV = "⪰̸",
  bV = "𝒩",
  wV = "𝓃",
  xV = "∤",
  _V = "∦",
  SV = "≁",
  kV = "≄",
  TV = "≄",
  CV = "∤",
  EV = "∦",
  LV = "⋢",
  AV = "⋣",
  MV = "⊄",
  NV = "⫅̸",
  $V = "⊈",
  OV = "⊂⃒",
  PV = "⊈",
  RV = "⫅̸",
  DV = "⊁",
  zV = "⪰̸",
  IV = "⊅",
  FV = "⫆̸",
  HV = "⊉",
  qV = "⊃⃒",
  BV = "⊉",
  WV = "⫆̸",
  UV = "≹",
  VV = "Ñ",
  jV = "ñ",
  GV = "≸",
  KV = "⋪",
  XV = "⋬",
  YV = "⋫",
  ZV = "⋭",
  JV = "Ν",
  QV = "ν",
  ej = "#",
  tj = "№",
  nj = " ",
  rj = "≍⃒",
  ij = "⊬",
  oj = "⊭",
  sj = "⊮",
  lj = "⊯",
  aj = "≥⃒",
  cj = ">⃒",
  uj = "⤄",
  fj = "⧞",
  dj = "⤂",
  hj = "≤⃒",
  pj = "<⃒",
  gj = "⊴⃒",
  vj = "⤃",
  mj = "⊵⃒",
  yj = "∼⃒",
  bj = "⤣",
  wj = "↖",
  xj = "⇖",
  _j = "↖",
  Sj = "⤧",
  kj = "Ó",
  Tj = "ó",
  Cj = "⊛",
  Ej = "Ô",
  Lj = "ô",
  Aj = "⊚",
  Mj = "О",
  Nj = "о",
  $j = "⊝",
  Oj = "Ő",
  Pj = "ő",
  Rj = "⨸",
  Dj = "⊙",
  zj = "⦼",
  Ij = "Œ",
  Fj = "œ",
  Hj = "⦿",
  qj = "𝔒",
  Bj = "𝔬",
  Wj = "˛",
  Uj = "Ò",
  Vj = "ò",
  jj = "⧁",
  Gj = "⦵",
  Kj = "Ω",
  Xj = "∮",
  Yj = "↺",
  Zj = "⦾",
  Jj = "⦻",
  Qj = "‾",
  eG = "⧀",
  tG = "Ō",
  nG = "ō",
  rG = "Ω",
  iG = "ω",
  oG = "Ο",
  sG = "ο",
  lG = "⦶",
  aG = "⊖",
  cG = "𝕆",
  uG = "𝕠",
  fG = "⦷",
  dG = "“",
  hG = "‘",
  pG = "⦹",
  gG = "⊕",
  vG = "↻",
  mG = "⩔",
  yG = "∨",
  bG = "⩝",
  wG = "ℴ",
  xG = "ℴ",
  _G = "ª",
  SG = "º",
  kG = "⊶",
  TG = "⩖",
  CG = "⩗",
  EG = "⩛",
  LG = "Ⓢ",
  AG = "𝒪",
  MG = "ℴ",
  NG = "Ø",
  $G = "ø",
  OG = "⊘",
  PG = "Õ",
  RG = "õ",
  DG = "⨶",
  zG = "⨷",
  IG = "⊗",
  FG = "Ö",
  HG = "ö",
  qG = "⌽",
  BG = "‾",
  WG = "⏞",
  UG = "⎴",
  VG = "⏜",
  jG = "¶",
  GG = "∥",
  KG = "∥",
  XG = "⫳",
  YG = "⫽",
  ZG = "∂",
  JG = "∂",
  QG = "П",
  e9 = "п",
  t9 = "%",
  n9 = ".",
  r9 = "‰",
  i9 = "⊥",
  o9 = "‱",
  s9 = "𝔓",
  l9 = "𝔭",
  a9 = "Φ",
  c9 = "φ",
  u9 = "ϕ",
  f9 = "ℳ",
  d9 = "☎",
  h9 = "Π",
  p9 = "π",
  g9 = "⋔",
  v9 = "ϖ",
  m9 = "ℏ",
  y9 = "ℎ",
  b9 = "ℏ",
  w9 = "⨣",
  x9 = "⊞",
  _9 = "⨢",
  S9 = "+",
  k9 = "∔",
  T9 = "⨥",
  C9 = "⩲",
  E9 = "±",
  L9 = "±",
  A9 = "⨦",
  M9 = "⨧",
  N9 = "±",
  $9 = "ℌ",
  O9 = "⨕",
  P9 = "𝕡",
  R9 = "ℙ",
  D9 = "£",
  z9 = "⪷",
  I9 = "⪻",
  F9 = "≺",
  H9 = "≼",
  q9 = "⪷",
  B9 = "≺",
  W9 = "≼",
  U9 = "≺",
  V9 = "⪯",
  j9 = "≼",
  G9 = "≾",
  K9 = "⪯",
  X9 = "⪹",
  Y9 = "⪵",
  Z9 = "⋨",
  J9 = "⪯",
  Q9 = "⪳",
  e7 = "≾",
  t7 = "′",
  n7 = "″",
  r7 = "ℙ",
  i7 = "⪹",
  o7 = "⪵",
  s7 = "⋨",
  l7 = "∏",
  a7 = "∏",
  c7 = "⌮",
  u7 = "⌒",
  f7 = "⌓",
  d7 = "∝",
  h7 = "∝",
  p7 = "∷",
  g7 = "∝",
  v7 = "≾",
  m7 = "⊰",
  y7 = "𝒫",
  b7 = "𝓅",
  w7 = "Ψ",
  x7 = "ψ",
  _7 = " ",
  S7 = "𝔔",
  k7 = "𝔮",
  T7 = "⨌",
  C7 = "𝕢",
  E7 = "ℚ",
  L7 = "⁗",
  A7 = "𝒬",
  M7 = "𝓆",
  N7 = "ℍ",
  $7 = "⨖",
  O7 = "?",
  P7 = "≟",
  R7 = '"',
  D7 = '"',
  z7 = "⇛",
  I7 = "∽̱",
  F7 = "Ŕ",
  H7 = "ŕ",
  q7 = "√",
  B7 = "⦳",
  W7 = "⟩",
  U7 = "⟫",
  V7 = "⦒",
  j7 = "⦥",
  G7 = "⟩",
  K7 = "»",
  X7 = "⥵",
  Y7 = "⇥",
  Z7 = "⤠",
  J7 = "⤳",
  Q7 = "→",
  eK = "↠",
  tK = "⇒",
  nK = "⤞",
  rK = "↪",
  iK = "↬",
  oK = "⥅",
  sK = "⥴",
  lK = "⤖",
  aK = "↣",
  cK = "↝",
  uK = "⤚",
  fK = "⤜",
  dK = "∶",
  hK = "ℚ",
  pK = "⤍",
  gK = "⤏",
  vK = "⤐",
  mK = "❳",
  yK = "}",
  bK = "]",
  wK = "⦌",
  xK = "⦎",
  _K = "⦐",
  SK = "Ř",
  kK = "ř",
  TK = "Ŗ",
  CK = "ŗ",
  EK = "⌉",
  LK = "}",
  AK = "Р",
  MK = "р",
  NK = "⤷",
  $K = "⥩",
  OK = "”",
  PK = "”",
  RK = "↳",
  DK = "ℜ",
  zK = "ℛ",
  IK = "ℜ",
  FK = "ℝ",
  HK = "ℜ",
  qK = "▭",
  BK = "®",
  WK = "®",
  UK = "∋",
  VK = "⇋",
  jK = "⥯",
  GK = "⥽",
  KK = "⌋",
  XK = "𝔯",
  YK = "ℜ",
  ZK = "⥤",
  JK = "⇁",
  QK = "⇀",
  eX = "⥬",
  tX = "Ρ",
  nX = "ρ",
  rX = "ϱ",
  iX = "⟩",
  oX = "⇥",
  sX = "→",
  lX = "→",
  aX = "⇒",
  cX = "⇄",
  uX = "↣",
  fX = "⌉",
  dX = "⟧",
  hX = "⥝",
  pX = "⥕",
  gX = "⇂",
  vX = "⌋",
  mX = "⇁",
  yX = "⇀",
  bX = "⇄",
  wX = "⇌",
  xX = "⇉",
  _X = "↝",
  SX = "↦",
  kX = "⊢",
  TX = "⥛",
  CX = "⋌",
  EX = "⧐",
  LX = "⊳",
  AX = "⊵",
  MX = "⥏",
  NX = "⥜",
  $X = "⥔",
  OX = "↾",
  PX = "⥓",
  RX = "⇀",
  DX = "˚",
  zX = "≓",
  IX = "⇄",
  FX = "⇌",
  HX = "‏",
  qX = "⎱",
  BX = "⎱",
  WX = "⫮",
  UX = "⟭",
  VX = "⇾",
  jX = "⟧",
  GX = "⦆",
  KX = "𝕣",
  XX = "ℝ",
  YX = "⨮",
  ZX = "⨵",
  JX = "⥰",
  QX = ")",
  eY = "⦔",
  tY = "⨒",
  nY = "⇉",
  rY = "⇛",
  iY = "›",
  oY = "𝓇",
  sY = "ℛ",
  lY = "↱",
  aY = "↱",
  cY = "]",
  uY = "’",
  fY = "’",
  dY = "⋌",
  hY = "⋊",
  pY = "▹",
  gY = "⊵",
  vY = "▸",
  mY = "⧎",
  yY = "⧴",
  bY = "⥨",
  wY = "℞",
  xY = "Ś",
  _Y = "ś",
  SY = "‚",
  kY = "⪸",
  TY = "Š",
  CY = "š",
  EY = "⪼",
  LY = "≻",
  AY = "≽",
  MY = "⪰",
  NY = "⪴",
  $Y = "Ş",
  OY = "ş",
  PY = "Ŝ",
  RY = "ŝ",
  DY = "⪺",
  zY = "⪶",
  IY = "⋩",
  FY = "⨓",
  HY = "≿",
  qY = "С",
  BY = "с",
  WY = "⊡",
  UY = "⋅",
  VY = "⩦",
  jY = "⤥",
  GY = "↘",
  KY = "⇘",
  XY = "↘",
  YY = "§",
  ZY = ";",
  JY = "⤩",
  QY = "∖",
  eZ = "∖",
  tZ = "✶",
  nZ = "𝔖",
  rZ = "𝔰",
  iZ = "⌢",
  oZ = "♯",
  sZ = "Щ",
  lZ = "щ",
  aZ = "Ш",
  cZ = "ш",
  uZ = "↓",
  fZ = "←",
  dZ = "∣",
  hZ = "∥",
  pZ = "→",
  gZ = "↑",
  vZ = "­",
  mZ = "Σ",
  yZ = "σ",
  bZ = "ς",
  wZ = "ς",
  xZ = "∼",
  _Z = "⩪",
  SZ = "≃",
  kZ = "≃",
  TZ = "⪞",
  CZ = "⪠",
  EZ = "⪝",
  LZ = "⪟",
  AZ = "≆",
  MZ = "⨤",
  NZ = "⥲",
  $Z = "←",
  OZ = "∘",
  PZ = "∖",
  RZ = "⨳",
  DZ = "⧤",
  zZ = "∣",
  IZ = "⌣",
  FZ = "⪪",
  HZ = "⪬",
  qZ = "⪬︀",
  BZ = "Ь",
  WZ = "ь",
  UZ = "⌿",
  VZ = "⧄",
  jZ = "/",
  GZ = "𝕊",
  KZ = "𝕤",
  XZ = "♠",
  YZ = "♠",
  ZZ = "∥",
  JZ = "⊓",
  QZ = "⊓︀",
  eJ = "⊔",
  tJ = "⊔︀",
  nJ = "√",
  rJ = "⊏",
  iJ = "⊑",
  oJ = "⊏",
  sJ = "⊑",
  lJ = "⊐",
  aJ = "⊒",
  cJ = "⊐",
  uJ = "⊒",
  fJ = "□",
  dJ = "□",
  hJ = "⊓",
  pJ = "⊏",
  gJ = "⊑",
  vJ = "⊐",
  mJ = "⊒",
  yJ = "⊔",
  bJ = "▪",
  wJ = "□",
  xJ = "▪",
  _J = "→",
  SJ = "𝒮",
  kJ = "𝓈",
  TJ = "∖",
  CJ = "⌣",
  EJ = "⋆",
  LJ = "⋆",
  AJ = "☆",
  MJ = "★",
  NJ = "ϵ",
  $J = "ϕ",
  OJ = "¯",
  PJ = "⊂",
  RJ = "⋐",
  DJ = "⪽",
  zJ = "⫅",
  IJ = "⊆",
  FJ = "⫃",
  HJ = "⫁",
  qJ = "⫋",
  BJ = "⊊",
  WJ = "⪿",
  UJ = "⥹",
  VJ = "⊂",
  jJ = "⋐",
  GJ = "⊆",
  KJ = "⫅",
  XJ = "⊆",
  YJ = "⊊",
  ZJ = "⫋",
  JJ = "⫇",
  QJ = "⫕",
  eQ = "⫓",
  tQ = "⪸",
  nQ = "≻",
  rQ = "≽",
  iQ = "≻",
  oQ = "⪰",
  sQ = "≽",
  lQ = "≿",
  aQ = "⪰",
  cQ = "⪺",
  uQ = "⪶",
  fQ = "⋩",
  dQ = "≿",
  hQ = "∋",
  pQ = "∑",
  gQ = "∑",
  vQ = "♪",
  mQ = "¹",
  yQ = "²",
  bQ = "³",
  wQ = "⊃",
  xQ = "⋑",
  _Q = "⪾",
  SQ = "⫘",
  kQ = "⫆",
  TQ = "⊇",
  CQ = "⫄",
  EQ = "⊃",
  LQ = "⊇",
  AQ = "⟉",
  MQ = "⫗",
  NQ = "⥻",
  $Q = "⫂",
  OQ = "⫌",
  PQ = "⊋",
  RQ = "⫀",
  DQ = "⊃",
  zQ = "⋑",
  IQ = "⊇",
  FQ = "⫆",
  HQ = "⊋",
  qQ = "⫌",
  BQ = "⫈",
  WQ = "⫔",
  UQ = "⫖",
  VQ = "⤦",
  jQ = "↙",
  GQ = "⇙",
  KQ = "↙",
  XQ = "⤪",
  YQ = "ß",
  ZQ = "	",
  JQ = "⌖",
  QQ = "Τ",
  eee = "τ",
  tee = "⎴",
  nee = "Ť",
  ree = "ť",
  iee = "Ţ",
  oee = "ţ",
  see = "Т",
  lee = "т",
  aee = "⃛",
  cee = "⌕",
  uee = "𝔗",
  fee = "𝔱",
  dee = "∴",
  hee = "∴",
  pee = "∴",
  gee = "Θ",
  vee = "θ",
  mee = "ϑ",
  yee = "ϑ",
  bee = "≈",
  wee = "∼",
  xee = "  ",
  _ee = " ",
  See = " ",
  kee = "≈",
  Tee = "∼",
  Cee = "Þ",
  Eee = "þ",
  Lee = "˜",
  Aee = "∼",
  Mee = "≃",
  Nee = "≅",
  $ee = "≈",
  Oee = "⨱",
  Pee = "⊠",
  Ree = "×",
  Dee = "⨰",
  zee = "∭",
  Iee = "⤨",
  Fee = "⌶",
  Hee = "⫱",
  qee = "⊤",
  Bee = "𝕋",
  Wee = "𝕥",
  Uee = "⫚",
  Vee = "⤩",
  jee = "‴",
  Gee = "™",
  Kee = "™",
  Xee = "▵",
  Yee = "▿",
  Zee = "◃",
  Jee = "⊴",
  Qee = "≜",
  ete = "▹",
  tte = "⊵",
  nte = "◬",
  rte = "≜",
  ite = "⨺",
  ote = "⃛",
  ste = "⨹",
  lte = "⧍",
  ate = "⨻",
  cte = "⏢",
  ute = "𝒯",
  fte = "𝓉",
  dte = "Ц",
  hte = "ц",
  pte = "Ћ",
  gte = "ћ",
  vte = "Ŧ",
  mte = "ŧ",
  yte = "≬",
  bte = "↞",
  wte = "↠",
  xte = "Ú",
  _te = "ú",
  Ste = "↑",
  kte = "↟",
  Tte = "⇑",
  Cte = "⥉",
  Ete = "Ў",
  Lte = "ў",
  Ate = "Ŭ",
  Mte = "ŭ",
  Nte = "Û",
  $te = "û",
  Ote = "У",
  Pte = "у",
  Rte = "⇅",
  Dte = "Ű",
  zte = "ű",
  Ite = "⥮",
  Fte = "⥾",
  Hte = "𝔘",
  qte = "𝔲",
  Bte = "Ù",
  Wte = "ù",
  Ute = "⥣",
  Vte = "↿",
  jte = "↾",
  Gte = "▀",
  Kte = "⌜",
  Xte = "⌜",
  Yte = "⌏",
  Zte = "◸",
  Jte = "Ū",
  Qte = "ū",
  ene = "¨",
  tne = "_",
  nne = "⏟",
  rne = "⎵",
  ine = "⏝",
  one = "⋃",
  sne = "⊎",
  lne = "Ų",
  ane = "ų",
  cne = "𝕌",
  une = "𝕦",
  fne = "⤒",
  dne = "↑",
  hne = "↑",
  pne = "⇑",
  gne = "⇅",
  vne = "↕",
  mne = "↕",
  yne = "⇕",
  bne = "⥮",
  wne = "↿",
  xne = "↾",
  _ne = "⊎",
  Sne = "↖",
  kne = "↗",
  Tne = "υ",
  Cne = "ϒ",
  Ene = "ϒ",
  Lne = "Υ",
  Ane = "υ",
  Mne = "↥",
  Nne = "⊥",
  $ne = "⇈",
  One = "⌝",
  Pne = "⌝",
  Rne = "⌎",
  Dne = "Ů",
  zne = "ů",
  Ine = "◹",
  Fne = "𝒰",
  Hne = "𝓊",
  qne = "⋰",
  Bne = "Ũ",
  Wne = "ũ",
  Une = "▵",
  Vne = "▴",
  jne = "⇈",
  Gne = "Ü",
  Kne = "ü",
  Xne = "⦧",
  Yne = "⦜",
  Zne = "ϵ",
  Jne = "ϰ",
  Qne = "∅",
  ere = "ϕ",
  tre = "ϖ",
  nre = "∝",
  rre = "↕",
  ire = "⇕",
  ore = "ϱ",
  sre = "ς",
  lre = "⊊︀",
  are = "⫋︀",
  cre = "⊋︀",
  ure = "⫌︀",
  fre = "ϑ",
  dre = "⊲",
  hre = "⊳",
  pre = "⫨",
  gre = "⫫",
  vre = "⫩",
  mre = "В",
  yre = "в",
  bre = "⊢",
  wre = "⊨",
  xre = "⊩",
  _re = "⊫",
  Sre = "⫦",
  kre = "⊻",
  Tre = "∨",
  Cre = "⋁",
  Ere = "≚",
  Lre = "⋮",
  Are = "|",
  Mre = "‖",
  Nre = "|",
  $re = "‖",
  Ore = "∣",
  Pre = "|",
  Rre = "❘",
  Dre = "≀",
  zre = " ",
  Ire = "𝔙",
  Fre = "𝔳",
  Hre = "⊲",
  qre = "⊂⃒",
  Bre = "⊃⃒",
  Wre = "𝕍",
  Ure = "𝕧",
  Vre = "∝",
  jre = "⊳",
  Gre = "𝒱",
  Kre = "𝓋",
  Xre = "⫋︀",
  Yre = "⊊︀",
  Zre = "⫌︀",
  Jre = "⊋︀",
  Qre = "⊪",
  eie = "⦚",
  tie = "Ŵ",
  nie = "ŵ",
  rie = "⩟",
  iie = "∧",
  oie = "⋀",
  sie = "≙",
  lie = "℘",
  aie = "𝔚",
  cie = "𝔴",
  uie = "𝕎",
  fie = "𝕨",
  die = "℘",
  hie = "≀",
  pie = "≀",
  gie = "𝒲",
  vie = "𝓌",
  mie = "⋂",
  yie = "◯",
  bie = "⋃",
  wie = "▽",
  xie = "𝔛",
  _ie = "𝔵",
  Sie = "⟷",
  kie = "⟺",
  Tie = "Ξ",
  Cie = "ξ",
  Eie = "⟵",
  Lie = "⟸",
  Aie = "⟼",
  Mie = "⋻",
  Nie = "⨀",
  $ie = "𝕏",
  Oie = "𝕩",
  Pie = "⨁",
  Rie = "⨂",
  Die = "⟶",
  zie = "⟹",
  Iie = "𝒳",
  Fie = "𝓍",
  Hie = "⨆",
  qie = "⨄",
  Bie = "△",
  Wie = "⋁",
  Uie = "⋀",
  Vie = "Ý",
  jie = "ý",
  Gie = "Я",
  Kie = "я",
  Xie = "Ŷ",
  Yie = "ŷ",
  Zie = "Ы",
  Jie = "ы",
  Qie = "¥",
  eoe = "𝔜",
  toe = "𝔶",
  noe = "Ї",
  roe = "ї",
  ioe = "𝕐",
  ooe = "𝕪",
  soe = "𝒴",
  loe = "𝓎",
  aoe = "Ю",
  coe = "ю",
  uoe = "ÿ",
  foe = "Ÿ",
  doe = "Ź",
  hoe = "ź",
  poe = "Ž",
  goe = "ž",
  voe = "З",
  moe = "з",
  yoe = "Ż",
  boe = "ż",
  woe = "ℨ",
  xoe = "​",
  _oe = "Ζ",
  Soe = "ζ",
  koe = "𝔷",
  Toe = "ℨ",
  Coe = "Ж",
  Eoe = "ж",
  Loe = "⇝",
  Aoe = "𝕫",
  Moe = "ℤ",
  Noe = "𝒵",
  $oe = "𝓏",
  Ooe = "‍",
  Poe = "‌",
  Qb = {
    Aacute: yL,
    aacute: bL,
    Abreve: wL,
    abreve: xL,
    ac: _L,
    acd: SL,
    acE: kL,
    Acirc: TL,
    acirc: CL,
    acute: EL,
    Acy: LL,
    acy: AL,
    AElig: ML,
    aelig: NL,
    af: $L,
    Afr: OL,
    afr: PL,
    Agrave: RL,
    agrave: DL,
    alefsym: zL,
    aleph: IL,
    Alpha: FL,
    alpha: HL,
    Amacr: qL,
    amacr: BL,
    amalg: WL,
    amp: UL,
    AMP: VL,
    andand: jL,
    And: GL,
    and: KL,
    andd: XL,
    andslope: YL,
    andv: ZL,
    ang: JL,
    ange: QL,
    angle: eA,
    angmsdaa: tA,
    angmsdab: nA,
    angmsdac: rA,
    angmsdad: iA,
    angmsdae: oA,
    angmsdaf: sA,
    angmsdag: lA,
    angmsdah: aA,
    angmsd: cA,
    angrt: uA,
    angrtvb: fA,
    angrtvbd: dA,
    angsph: hA,
    angst: pA,
    angzarr: gA,
    Aogon: vA,
    aogon: mA,
    Aopf: yA,
    aopf: bA,
    apacir: wA,
    ap: xA,
    apE: _A,
    ape: SA,
    apid: kA,
    apos: TA,
    ApplyFunction: CA,
    approx: EA,
    approxeq: LA,
    Aring: AA,
    aring: MA,
    Ascr: NA,
    ascr: $A,
    Assign: OA,
    ast: PA,
    asymp: RA,
    asympeq: DA,
    Atilde: zA,
    atilde: IA,
    Auml: FA,
    auml: HA,
    awconint: qA,
    awint: BA,
    backcong: WA,
    backepsilon: UA,
    backprime: VA,
    backsim: jA,
    backsimeq: GA,
    Backslash: KA,
    Barv: XA,
    barvee: YA,
    barwed: ZA,
    Barwed: JA,
    barwedge: QA,
    bbrk: eM,
    bbrktbrk: tM,
    bcong: nM,
    Bcy: rM,
    bcy: iM,
    bdquo: oM,
    becaus: sM,
    because: lM,
    Because: aM,
    bemptyv: cM,
    bepsi: uM,
    bernou: fM,
    Bernoullis: dM,
    Beta: hM,
    beta: pM,
    beth: gM,
    between: vM,
    Bfr: mM,
    bfr: yM,
    bigcap: bM,
    bigcirc: wM,
    bigcup: xM,
    bigodot: _M,
    bigoplus: SM,
    bigotimes: kM,
    bigsqcup: TM,
    bigstar: CM,
    bigtriangledown: EM,
    bigtriangleup: LM,
    biguplus: AM,
    bigvee: MM,
    bigwedge: NM,
    bkarow: $M,
    blacklozenge: OM,
    blacksquare: PM,
    blacktriangle: RM,
    blacktriangledown: DM,
    blacktriangleleft: zM,
    blacktriangleright: IM,
    blank: FM,
    blk12: HM,
    blk14: qM,
    blk34: BM,
    block: WM,
    bne: UM,
    bnequiv: VM,
    bNot: jM,
    bnot: GM,
    Bopf: KM,
    bopf: XM,
    bot: YM,
    bottom: ZM,
    bowtie: JM,
    boxbox: QM,
    boxdl: eN,
    boxdL: tN,
    boxDl: nN,
    boxDL: rN,
    boxdr: iN,
    boxdR: oN,
    boxDr: sN,
    boxDR: lN,
    boxh: aN,
    boxH: cN,
    boxhd: uN,
    boxHd: fN,
    boxhD: dN,
    boxHD: hN,
    boxhu: pN,
    boxHu: gN,
    boxhU: vN,
    boxHU: mN,
    boxminus: yN,
    boxplus: bN,
    boxtimes: wN,
    boxul: xN,
    boxuL: _N,
    boxUl: SN,
    boxUL: kN,
    boxur: TN,
    boxuR: CN,
    boxUr: EN,
    boxUR: LN,
    boxv: AN,
    boxV: MN,
    boxvh: NN,
    boxvH: $N,
    boxVh: ON,
    boxVH: PN,
    boxvl: RN,
    boxvL: DN,
    boxVl: zN,
    boxVL: IN,
    boxvr: FN,
    boxvR: HN,
    boxVr: qN,
    boxVR: BN,
    bprime: WN,
    breve: UN,
    Breve: VN,
    brvbar: jN,
    bscr: GN,
    Bscr: KN,
    bsemi: XN,
    bsim: YN,
    bsime: ZN,
    bsolb: JN,
    bsol: QN,
    bsolhsub: e$,
    bull: t$,
    bullet: n$,
    bump: r$,
    bumpE: i$,
    bumpe: o$,
    Bumpeq: s$,
    bumpeq: l$,
    Cacute: a$,
    cacute: c$,
    capand: u$,
    capbrcup: f$,
    capcap: d$,
    cap: h$,
    Cap: p$,
    capcup: g$,
    capdot: v$,
    CapitalDifferentialD: m$,
    caps: y$,
    caret: b$,
    caron: w$,
    Cayleys: x$,
    ccaps: _$,
    Ccaron: S$,
    ccaron: k$,
    Ccedil: T$,
    ccedil: C$,
    Ccirc: E$,
    ccirc: L$,
    Cconint: A$,
    ccups: M$,
    ccupssm: N$,
    Cdot: $$,
    cdot: O$,
    cedil: P$,
    Cedilla: R$,
    cemptyv: D$,
    cent: z$,
    centerdot: I$,
    CenterDot: F$,
    cfr: H$,
    Cfr: q$,
    CHcy: B$,
    chcy: W$,
    check: U$,
    checkmark: V$,
    Chi: j$,
    chi: G$,
    circ: K$,
    circeq: X$,
    circlearrowleft: Y$,
    circlearrowright: Z$,
    circledast: J$,
    circledcirc: Q$,
    circleddash: eO,
    CircleDot: tO,
    circledR: nO,
    circledS: rO,
    CircleMinus: iO,
    CirclePlus: oO,
    CircleTimes: sO,
    cir: lO,
    cirE: aO,
    cire: cO,
    cirfnint: uO,
    cirmid: fO,
    cirscir: dO,
    ClockwiseContourIntegral: hO,
    CloseCurlyDoubleQuote: pO,
    CloseCurlyQuote: gO,
    clubs: vO,
    clubsuit: mO,
    colon: yO,
    Colon: bO,
    Colone: wO,
    colone: xO,
    coloneq: _O,
    comma: SO,
    commat: kO,
    comp: TO,
    compfn: CO,
    complement: EO,
    complexes: LO,
    cong: AO,
    congdot: MO,
    Congruent: NO,
    conint: $O,
    Conint: OO,
    ContourIntegral: PO,
    copf: RO,
    Copf: DO,
    coprod: zO,
    Coproduct: IO,
    copy: FO,
    COPY: HO,
    copysr: qO,
    CounterClockwiseContourIntegral: BO,
    crarr: WO,
    cross: UO,
    Cross: VO,
    Cscr: jO,
    cscr: GO,
    csub: KO,
    csube: XO,
    csup: YO,
    csupe: ZO,
    ctdot: JO,
    cudarrl: QO,
    cudarrr: eP,
    cuepr: tP,
    cuesc: nP,
    cularr: rP,
    cularrp: iP,
    cupbrcap: oP,
    cupcap: sP,
    CupCap: lP,
    cup: aP,
    Cup: cP,
    cupcup: uP,
    cupdot: fP,
    cupor: dP,
    cups: hP,
    curarr: pP,
    curarrm: gP,
    curlyeqprec: vP,
    curlyeqsucc: mP,
    curlyvee: yP,
    curlywedge: bP,
    curren: wP,
    curvearrowleft: xP,
    curvearrowright: _P,
    cuvee: SP,
    cuwed: kP,
    cwconint: TP,
    cwint: CP,
    cylcty: EP,
    dagger: LP,
    Dagger: AP,
    daleth: MP,
    darr: NP,
    Darr: $P,
    dArr: OP,
    dash: PP,
    Dashv: RP,
    dashv: DP,
    dbkarow: zP,
    dblac: IP,
    Dcaron: FP,
    dcaron: HP,
    Dcy: qP,
    dcy: BP,
    ddagger: WP,
    ddarr: UP,
    DD: VP,
    dd: jP,
    DDotrahd: GP,
    ddotseq: KP,
    deg: XP,
    Del: YP,
    Delta: ZP,
    delta: JP,
    demptyv: QP,
    dfisht: eR,
    Dfr: tR,
    dfr: nR,
    dHar: rR,
    dharl: iR,
    dharr: oR,
    DiacriticalAcute: sR,
    DiacriticalDot: lR,
    DiacriticalDoubleAcute: aR,
    DiacriticalGrave: cR,
    DiacriticalTilde: uR,
    diam: fR,
    diamond: dR,
    Diamond: hR,
    diamondsuit: pR,
    diams: gR,
    die: vR,
    DifferentialD: mR,
    digamma: yR,
    disin: bR,
    div: wR,
    divide: xR,
    divideontimes: _R,
    divonx: SR,
    DJcy: kR,
    djcy: TR,
    dlcorn: CR,
    dlcrop: ER,
    dollar: LR,
    Dopf: AR,
    dopf: MR,
    Dot: NR,
    dot: $R,
    DotDot: OR,
    doteq: PR,
    doteqdot: RR,
    DotEqual: DR,
    dotminus: zR,
    dotplus: IR,
    dotsquare: FR,
    doublebarwedge: HR,
    DoubleContourIntegral: qR,
    DoubleDot: BR,
    DoubleDownArrow: WR,
    DoubleLeftArrow: UR,
    DoubleLeftRightArrow: VR,
    DoubleLeftTee: jR,
    DoubleLongLeftArrow: GR,
    DoubleLongLeftRightArrow: KR,
    DoubleLongRightArrow: XR,
    DoubleRightArrow: YR,
    DoubleRightTee: ZR,
    DoubleUpArrow: JR,
    DoubleUpDownArrow: QR,
    DoubleVerticalBar: eD,
    DownArrowBar: tD,
    downarrow: nD,
    DownArrow: rD,
    Downarrow: iD,
    DownArrowUpArrow: oD,
    DownBreve: sD,
    downdownarrows: lD,
    downharpoonleft: aD,
    downharpoonright: cD,
    DownLeftRightVector: uD,
    DownLeftTeeVector: fD,
    DownLeftVectorBar: dD,
    DownLeftVector: hD,
    DownRightTeeVector: pD,
    DownRightVectorBar: gD,
    DownRightVector: vD,
    DownTeeArrow: mD,
    DownTee: yD,
    drbkarow: bD,
    drcorn: wD,
    drcrop: xD,
    Dscr: _D,
    dscr: SD,
    DScy: kD,
    dscy: TD,
    dsol: CD,
    Dstrok: ED,
    dstrok: LD,
    dtdot: AD,
    dtri: MD,
    dtrif: ND,
    duarr: $D,
    duhar: OD,
    dwangle: PD,
    DZcy: RD,
    dzcy: DD,
    dzigrarr: zD,
    Eacute: ID,
    eacute: FD,
    easter: HD,
    Ecaron: qD,
    ecaron: BD,
    Ecirc: WD,
    ecirc: UD,
    ecir: VD,
    ecolon: jD,
    Ecy: GD,
    ecy: KD,
    eDDot: XD,
    Edot: YD,
    edot: ZD,
    eDot: JD,
    ee: QD,
    efDot: e2,
    Efr: t2,
    efr: n2,
    eg: r2,
    Egrave: i2,
    egrave: o2,
    egs: s2,
    egsdot: l2,
    el: a2,
    Element: c2,
    elinters: u2,
    ell: f2,
    els: d2,
    elsdot: h2,
    Emacr: p2,
    emacr: g2,
    empty: v2,
    emptyset: m2,
    EmptySmallSquare: y2,
    emptyv: b2,
    EmptyVerySmallSquare: w2,
    emsp13: x2,
    emsp14: _2,
    emsp: S2,
    ENG: k2,
    eng: T2,
    ensp: C2,
    Eogon: E2,
    eogon: L2,
    Eopf: A2,
    eopf: M2,
    epar: N2,
    eparsl: $2,
    eplus: O2,
    epsi: P2,
    Epsilon: R2,
    epsilon: D2,
    epsiv: z2,
    eqcirc: I2,
    eqcolon: F2,
    eqsim: H2,
    eqslantgtr: q2,
    eqslantless: B2,
    Equal: W2,
    equals: U2,
    EqualTilde: V2,
    equest: j2,
    Equilibrium: G2,
    equiv: K2,
    equivDD: X2,
    eqvparsl: Y2,
    erarr: Z2,
    erDot: J2,
    escr: Q2,
    Escr: ez,
    esdot: tz,
    Esim: nz,
    esim: rz,
    Eta: iz,
    eta: oz,
    ETH: sz,
    eth: lz,
    Euml: az,
    euml: cz,
    euro: uz,
    excl: fz,
    exist: dz,
    Exists: hz,
    expectation: pz,
    exponentiale: gz,
    ExponentialE: vz,
    fallingdotseq: mz,
    Fcy: yz,
    fcy: bz,
    female: wz,
    ffilig: xz,
    fflig: _z,
    ffllig: Sz,
    Ffr: kz,
    ffr: Tz,
    filig: Cz,
    FilledSmallSquare: Ez,
    FilledVerySmallSquare: Lz,
    fjlig: Az,
    flat: Mz,
    fllig: Nz,
    fltns: $z,
    fnof: Oz,
    Fopf: Pz,
    fopf: Rz,
    forall: Dz,
    ForAll: zz,
    fork: Iz,
    forkv: Fz,
    Fouriertrf: Hz,
    fpartint: qz,
    frac12: Bz,
    frac13: Wz,
    frac14: Uz,
    frac15: Vz,
    frac16: jz,
    frac18: Gz,
    frac23: Kz,
    frac25: Xz,
    frac34: Yz,
    frac35: Zz,
    frac38: Jz,
    frac45: Qz,
    frac56: eI,
    frac58: tI,
    frac78: nI,
    frasl: rI,
    frown: iI,
    fscr: oI,
    Fscr: sI,
    gacute: lI,
    Gamma: aI,
    gamma: cI,
    Gammad: uI,
    gammad: fI,
    gap: dI,
    Gbreve: hI,
    gbreve: pI,
    Gcedil: gI,
    Gcirc: vI,
    gcirc: mI,
    Gcy: yI,
    gcy: bI,
    Gdot: wI,
    gdot: xI,
    ge: _I,
    gE: SI,
    gEl: kI,
    gel: TI,
    geq: CI,
    geqq: EI,
    geqslant: LI,
    gescc: AI,
    ges: MI,
    gesdot: NI,
    gesdoto: $I,
    gesdotol: OI,
    gesl: PI,
    gesles: RI,
    Gfr: DI,
    gfr: zI,
    gg: II,
    Gg: FI,
    ggg: HI,
    gimel: qI,
    GJcy: BI,
    gjcy: WI,
    gla: UI,
    gl: VI,
    glE: jI,
    glj: GI,
    gnap: KI,
    gnapprox: XI,
    gne: YI,
    gnE: ZI,
    gneq: JI,
    gneqq: QI,
    gnsim: eF,
    Gopf: tF,
    gopf: nF,
    grave: rF,
    GreaterEqual: iF,
    GreaterEqualLess: oF,
    GreaterFullEqual: sF,
    GreaterGreater: lF,
    GreaterLess: aF,
    GreaterSlantEqual: cF,
    GreaterTilde: uF,
    Gscr: fF,
    gscr: dF,
    gsim: hF,
    gsime: pF,
    gsiml: gF,
    gtcc: vF,
    gtcir: mF,
    gt: yF,
    GT: bF,
    Gt: wF,
    gtdot: xF,
    gtlPar: _F,
    gtquest: SF,
    gtrapprox: kF,
    gtrarr: TF,
    gtrdot: CF,
    gtreqless: EF,
    gtreqqless: LF,
    gtrless: AF,
    gtrsim: MF,
    gvertneqq: NF,
    gvnE: $F,
    Hacek: OF,
    hairsp: PF,
    half: RF,
    hamilt: DF,
    HARDcy: zF,
    hardcy: IF,
    harrcir: FF,
    harr: HF,
    hArr: qF,
    harrw: BF,
    Hat: WF,
    hbar: UF,
    Hcirc: VF,
    hcirc: jF,
    hearts: GF,
    heartsuit: KF,
    hellip: XF,
    hercon: YF,
    hfr: ZF,
    Hfr: JF,
    HilbertSpace: QF,
    hksearow: eH,
    hkswarow: tH,
    hoarr: nH,
    homtht: rH,
    hookleftarrow: iH,
    hookrightarrow: oH,
    hopf: sH,
    Hopf: lH,
    horbar: aH,
    HorizontalLine: cH,
    hscr: uH,
    Hscr: fH,
    hslash: dH,
    Hstrok: hH,
    hstrok: pH,
    HumpDownHump: gH,
    HumpEqual: vH,
    hybull: mH,
    hyphen: yH,
    Iacute: bH,
    iacute: wH,
    ic: xH,
    Icirc: _H,
    icirc: SH,
    Icy: kH,
    icy: TH,
    Idot: CH,
    IEcy: EH,
    iecy: LH,
    iexcl: AH,
    iff: MH,
    ifr: NH,
    Ifr: $H,
    Igrave: OH,
    igrave: PH,
    ii: RH,
    iiiint: DH,
    iiint: zH,
    iinfin: IH,
    iiota: FH,
    IJlig: HH,
    ijlig: qH,
    Imacr: BH,
    imacr: WH,
    image: UH,
    ImaginaryI: VH,
    imagline: jH,
    imagpart: GH,
    imath: KH,
    Im: XH,
    imof: YH,
    imped: ZH,
    Implies: JH,
    incare: QH,
    in: "∈",
    infin: eq,
    infintie: tq,
    inodot: nq,
    intcal: rq,
    int: iq,
    Int: oq,
    integers: sq,
    Integral: lq,
    intercal: aq,
    Intersection: cq,
    intlarhk: uq,
    intprod: fq,
    InvisibleComma: dq,
    InvisibleTimes: hq,
    IOcy: pq,
    iocy: gq,
    Iogon: vq,
    iogon: mq,
    Iopf: yq,
    iopf: bq,
    Iota: wq,
    iota: xq,
    iprod: _q,
    iquest: Sq,
    iscr: kq,
    Iscr: Tq,
    isin: Cq,
    isindot: Eq,
    isinE: Lq,
    isins: Aq,
    isinsv: Mq,
    isinv: Nq,
    it: $q,
    Itilde: Oq,
    itilde: Pq,
    Iukcy: Rq,
    iukcy: Dq,
    Iuml: zq,
    iuml: Iq,
    Jcirc: Fq,
    jcirc: Hq,
    Jcy: qq,
    jcy: Bq,
    Jfr: Wq,
    jfr: Uq,
    jmath: Vq,
    Jopf: jq,
    jopf: Gq,
    Jscr: Kq,
    jscr: Xq,
    Jsercy: Yq,
    jsercy: Zq,
    Jukcy: Jq,
    jukcy: Qq,
    Kappa: eB,
    kappa: tB,
    kappav: nB,
    Kcedil: rB,
    kcedil: iB,
    Kcy: oB,
    kcy: sB,
    Kfr: lB,
    kfr: aB,
    kgreen: cB,
    KHcy: uB,
    khcy: fB,
    KJcy: dB,
    kjcy: hB,
    Kopf: pB,
    kopf: gB,
    Kscr: vB,
    kscr: mB,
    lAarr: yB,
    Lacute: bB,
    lacute: wB,
    laemptyv: xB,
    lagran: _B,
    Lambda: SB,
    lambda: kB,
    lang: TB,
    Lang: CB,
    langd: EB,
    langle: LB,
    lap: AB,
    Laplacetrf: MB,
    laquo: NB,
    larrb: $B,
    larrbfs: OB,
    larr: PB,
    Larr: RB,
    lArr: DB,
    larrfs: zB,
    larrhk: IB,
    larrlp: FB,
    larrpl: HB,
    larrsim: qB,
    larrtl: BB,
    latail: WB,
    lAtail: UB,
    lat: VB,
    late: jB,
    lates: GB,
    lbarr: KB,
    lBarr: XB,
    lbbrk: YB,
    lbrace: ZB,
    lbrack: JB,
    lbrke: QB,
    lbrksld: e3,
    lbrkslu: t3,
    Lcaron: n3,
    lcaron: r3,
    Lcedil: i3,
    lcedil: o3,
    lceil: s3,
    lcub: l3,
    Lcy: a3,
    lcy: c3,
    ldca: u3,
    ldquo: f3,
    ldquor: d3,
    ldrdhar: h3,
    ldrushar: p3,
    ldsh: g3,
    le: v3,
    lE: m3,
    LeftAngleBracket: y3,
    LeftArrowBar: b3,
    leftarrow: w3,
    LeftArrow: x3,
    Leftarrow: _3,
    LeftArrowRightArrow: S3,
    leftarrowtail: k3,
    LeftCeiling: T3,
    LeftDoubleBracket: C3,
    LeftDownTeeVector: E3,
    LeftDownVectorBar: L3,
    LeftDownVector: A3,
    LeftFloor: M3,
    leftharpoondown: N3,
    leftharpoonup: $3,
    leftleftarrows: O3,
    leftrightarrow: P3,
    LeftRightArrow: R3,
    Leftrightarrow: D3,
    leftrightarrows: z3,
    leftrightharpoons: I3,
    leftrightsquigarrow: F3,
    LeftRightVector: H3,
    LeftTeeArrow: q3,
    LeftTee: B3,
    LeftTeeVector: W3,
    leftthreetimes: U3,
    LeftTriangleBar: V3,
    LeftTriangle: j3,
    LeftTriangleEqual: G3,
    LeftUpDownVector: K3,
    LeftUpTeeVector: X3,
    LeftUpVectorBar: Y3,
    LeftUpVector: Z3,
    LeftVectorBar: J3,
    LeftVector: Q3,
    lEg: e5,
    leg: t5,
    leq: n5,
    leqq: r5,
    leqslant: i5,
    lescc: o5,
    les: s5,
    lesdot: l5,
    lesdoto: a5,
    lesdotor: c5,
    lesg: u5,
    lesges: f5,
    lessapprox: d5,
    lessdot: h5,
    lesseqgtr: p5,
    lesseqqgtr: g5,
    LessEqualGreater: v5,
    LessFullEqual: m5,
    LessGreater: y5,
    lessgtr: b5,
    LessLess: w5,
    lesssim: x5,
    LessSlantEqual: _5,
    LessTilde: S5,
    lfisht: k5,
    lfloor: T5,
    Lfr: C5,
    lfr: E5,
    lg: L5,
    lgE: A5,
    lHar: M5,
    lhard: N5,
    lharu: $5,
    lharul: O5,
    lhblk: P5,
    LJcy: R5,
    ljcy: D5,
    llarr: z5,
    ll: I5,
    Ll: F5,
    llcorner: H5,
    Lleftarrow: q5,
    llhard: B5,
    lltri: W5,
    Lmidot: U5,
    lmidot: V5,
    lmoustache: j5,
    lmoust: G5,
    lnap: K5,
    lnapprox: X5,
    lne: Y5,
    lnE: Z5,
    lneq: J5,
    lneqq: Q5,
    lnsim: e8,
    loang: t8,
    loarr: n8,
    lobrk: r8,
    longleftarrow: i8,
    LongLeftArrow: o8,
    Longleftarrow: s8,
    longleftrightarrow: l8,
    LongLeftRightArrow: a8,
    Longleftrightarrow: c8,
    longmapsto: u8,
    longrightarrow: f8,
    LongRightArrow: d8,
    Longrightarrow: h8,
    looparrowleft: p8,
    looparrowright: g8,
    lopar: v8,
    Lopf: m8,
    lopf: y8,
    loplus: b8,
    lotimes: w8,
    lowast: x8,
    lowbar: _8,
    LowerLeftArrow: S8,
    LowerRightArrow: k8,
    loz: T8,
    lozenge: C8,
    lozf: E8,
    lpar: L8,
    lparlt: A8,
    lrarr: M8,
    lrcorner: N8,
    lrhar: $8,
    lrhard: O8,
    lrm: P8,
    lrtri: R8,
    lsaquo: D8,
    lscr: z8,
    Lscr: I8,
    lsh: F8,
    Lsh: H8,
    lsim: q8,
    lsime: B8,
    lsimg: W8,
    lsqb: U8,
    lsquo: V8,
    lsquor: j8,
    Lstrok: G8,
    lstrok: K8,
    ltcc: X8,
    ltcir: Y8,
    lt: Z8,
    LT: J8,
    Lt: Q8,
    ltdot: eW,
    lthree: tW,
    ltimes: nW,
    ltlarr: rW,
    ltquest: iW,
    ltri: oW,
    ltrie: sW,
    ltrif: lW,
    ltrPar: aW,
    lurdshar: cW,
    luruhar: uW,
    lvertneqq: fW,
    lvnE: dW,
    macr: hW,
    male: pW,
    malt: gW,
    maltese: vW,
    Map: "⤅",
    map: mW,
    mapsto: yW,
    mapstodown: bW,
    mapstoleft: wW,
    mapstoup: xW,
    marker: _W,
    mcomma: SW,
    Mcy: kW,
    mcy: TW,
    mdash: CW,
    mDDot: EW,
    measuredangle: LW,
    MediumSpace: AW,
    Mellintrf: MW,
    Mfr: NW,
    mfr: $W,
    mho: OW,
    micro: PW,
    midast: RW,
    midcir: DW,
    mid: zW,
    middot: IW,
    minusb: FW,
    minus: HW,
    minusd: qW,
    minusdu: BW,
    MinusPlus: WW,
    mlcp: UW,
    mldr: VW,
    mnplus: jW,
    models: GW,
    Mopf: KW,
    mopf: XW,
    mp: YW,
    mscr: ZW,
    Mscr: JW,
    mstpos: QW,
    Mu: eU,
    mu: tU,
    multimap: nU,
    mumap: rU,
    nabla: iU,
    Nacute: oU,
    nacute: sU,
    nang: lU,
    nap: aU,
    napE: cU,
    napid: uU,
    napos: fU,
    napprox: dU,
    natural: hU,
    naturals: pU,
    natur: gU,
    nbsp: vU,
    nbump: mU,
    nbumpe: yU,
    ncap: bU,
    Ncaron: wU,
    ncaron: xU,
    Ncedil: _U,
    ncedil: SU,
    ncong: kU,
    ncongdot: TU,
    ncup: CU,
    Ncy: EU,
    ncy: LU,
    ndash: AU,
    nearhk: MU,
    nearr: NU,
    neArr: $U,
    nearrow: OU,
    ne: PU,
    nedot: RU,
    NegativeMediumSpace: DU,
    NegativeThickSpace: zU,
    NegativeThinSpace: IU,
    NegativeVeryThinSpace: FU,
    nequiv: HU,
    nesear: qU,
    nesim: BU,
    NestedGreaterGreater: WU,
    NestedLessLess: UU,
    NewLine: VU,
    nexist: jU,
    nexists: GU,
    Nfr: KU,
    nfr: XU,
    ngE: YU,
    nge: ZU,
    ngeq: JU,
    ngeqq: QU,
    ngeqslant: e4,
    nges: t4,
    nGg: n4,
    ngsim: r4,
    nGt: i4,
    ngt: o4,
    ngtr: s4,
    nGtv: l4,
    nharr: a4,
    nhArr: c4,
    nhpar: u4,
    ni: f4,
    nis: d4,
    nisd: h4,
    niv: p4,
    NJcy: g4,
    njcy: v4,
    nlarr: m4,
    nlArr: y4,
    nldr: b4,
    nlE: w4,
    nle: x4,
    nleftarrow: _4,
    nLeftarrow: S4,
    nleftrightarrow: k4,
    nLeftrightarrow: T4,
    nleq: C4,
    nleqq: E4,
    nleqslant: L4,
    nles: A4,
    nless: M4,
    nLl: N4,
    nlsim: $4,
    nLt: O4,
    nlt: P4,
    nltri: R4,
    nltrie: D4,
    nLtv: z4,
    nmid: I4,
    NoBreak: F4,
    NonBreakingSpace: H4,
    nopf: q4,
    Nopf: B4,
    Not: W4,
    not: U4,
    NotCongruent: V4,
    NotCupCap: j4,
    NotDoubleVerticalBar: G4,
    NotElement: K4,
    NotEqual: X4,
    NotEqualTilde: Y4,
    NotExists: Z4,
    NotGreater: J4,
    NotGreaterEqual: Q4,
    NotGreaterFullEqual: e6,
    NotGreaterGreater: t6,
    NotGreaterLess: n6,
    NotGreaterSlantEqual: r6,
    NotGreaterTilde: i6,
    NotHumpDownHump: o6,
    NotHumpEqual: s6,
    notin: l6,
    notindot: a6,
    notinE: c6,
    notinva: u6,
    notinvb: f6,
    notinvc: d6,
    NotLeftTriangleBar: h6,
    NotLeftTriangle: p6,
    NotLeftTriangleEqual: g6,
    NotLess: v6,
    NotLessEqual: m6,
    NotLessGreater: y6,
    NotLessLess: b6,
    NotLessSlantEqual: w6,
    NotLessTilde: x6,
    NotNestedGreaterGreater: _6,
    NotNestedLessLess: S6,
    notni: k6,
    notniva: T6,
    notnivb: C6,
    notnivc: E6,
    NotPrecedes: L6,
    NotPrecedesEqual: A6,
    NotPrecedesSlantEqual: M6,
    NotReverseElement: N6,
    NotRightTriangleBar: $6,
    NotRightTriangle: O6,
    NotRightTriangleEqual: P6,
    NotSquareSubset: R6,
    NotSquareSubsetEqual: D6,
    NotSquareSuperset: z6,
    NotSquareSupersetEqual: I6,
    NotSubset: F6,
    NotSubsetEqual: H6,
    NotSucceeds: q6,
    NotSucceedsEqual: B6,
    NotSucceedsSlantEqual: W6,
    NotSucceedsTilde: U6,
    NotSuperset: V6,
    NotSupersetEqual: j6,
    NotTilde: G6,
    NotTildeEqual: K6,
    NotTildeFullEqual: X6,
    NotTildeTilde: Y6,
    NotVerticalBar: Z6,
    nparallel: J6,
    npar: Q6,
    nparsl: eV,
    npart: tV,
    npolint: nV,
    npr: rV,
    nprcue: iV,
    nprec: oV,
    npreceq: sV,
    npre: lV,
    nrarrc: aV,
    nrarr: cV,
    nrArr: uV,
    nrarrw: fV,
    nrightarrow: dV,
    nRightarrow: hV,
    nrtri: pV,
    nrtrie: gV,
    nsc: vV,
    nsccue: mV,
    nsce: yV,
    Nscr: bV,
    nscr: wV,
    nshortmid: xV,
    nshortparallel: _V,
    nsim: SV,
    nsime: kV,
    nsimeq: TV,
    nsmid: CV,
    nspar: EV,
    nsqsube: LV,
    nsqsupe: AV,
    nsub: MV,
    nsubE: NV,
    nsube: $V,
    nsubset: OV,
    nsubseteq: PV,
    nsubseteqq: RV,
    nsucc: DV,
    nsucceq: zV,
    nsup: IV,
    nsupE: FV,
    nsupe: HV,
    nsupset: qV,
    nsupseteq: BV,
    nsupseteqq: WV,
    ntgl: UV,
    Ntilde: VV,
    ntilde: jV,
    ntlg: GV,
    ntriangleleft: KV,
    ntrianglelefteq: XV,
    ntriangleright: YV,
    ntrianglerighteq: ZV,
    Nu: JV,
    nu: QV,
    num: ej,
    numero: tj,
    numsp: nj,
    nvap: rj,
    nvdash: ij,
    nvDash: oj,
    nVdash: sj,
    nVDash: lj,
    nvge: aj,
    nvgt: cj,
    nvHarr: uj,
    nvinfin: fj,
    nvlArr: dj,
    nvle: hj,
    nvlt: pj,
    nvltrie: gj,
    nvrArr: vj,
    nvrtrie: mj,
    nvsim: yj,
    nwarhk: bj,
    nwarr: wj,
    nwArr: xj,
    nwarrow: _j,
    nwnear: Sj,
    Oacute: kj,
    oacute: Tj,
    oast: Cj,
    Ocirc: Ej,
    ocirc: Lj,
    ocir: Aj,
    Ocy: Mj,
    ocy: Nj,
    odash: $j,
    Odblac: Oj,
    odblac: Pj,
    odiv: Rj,
    odot: Dj,
    odsold: zj,
    OElig: Ij,
    oelig: Fj,
    ofcir: Hj,
    Ofr: qj,
    ofr: Bj,
    ogon: Wj,
    Ograve: Uj,
    ograve: Vj,
    ogt: jj,
    ohbar: Gj,
    ohm: Kj,
    oint: Xj,
    olarr: Yj,
    olcir: Zj,
    olcross: Jj,
    oline: Qj,
    olt: eG,
    Omacr: tG,
    omacr: nG,
    Omega: rG,
    omega: iG,
    Omicron: oG,
    omicron: sG,
    omid: lG,
    ominus: aG,
    Oopf: cG,
    oopf: uG,
    opar: fG,
    OpenCurlyDoubleQuote: dG,
    OpenCurlyQuote: hG,
    operp: pG,
    oplus: gG,
    orarr: vG,
    Or: mG,
    or: yG,
    ord: bG,
    order: wG,
    orderof: xG,
    ordf: _G,
    ordm: SG,
    origof: kG,
    oror: TG,
    orslope: CG,
    orv: EG,
    oS: LG,
    Oscr: AG,
    oscr: MG,
    Oslash: NG,
    oslash: $G,
    osol: OG,
    Otilde: PG,
    otilde: RG,
    otimesas: DG,
    Otimes: zG,
    otimes: IG,
    Ouml: FG,
    ouml: HG,
    ovbar: qG,
    OverBar: BG,
    OverBrace: WG,
    OverBracket: UG,
    OverParenthesis: VG,
    para: jG,
    parallel: GG,
    par: KG,
    parsim: XG,
    parsl: YG,
    part: ZG,
    PartialD: JG,
    Pcy: QG,
    pcy: e9,
    percnt: t9,
    period: n9,
    permil: r9,
    perp: i9,
    pertenk: o9,
    Pfr: s9,
    pfr: l9,
    Phi: a9,
    phi: c9,
    phiv: u9,
    phmmat: f9,
    phone: d9,
    Pi: h9,
    pi: p9,
    pitchfork: g9,
    piv: v9,
    planck: m9,
    planckh: y9,
    plankv: b9,
    plusacir: w9,
    plusb: x9,
    pluscir: _9,
    plus: S9,
    plusdo: k9,
    plusdu: T9,
    pluse: C9,
    PlusMinus: E9,
    plusmn: L9,
    plussim: A9,
    plustwo: M9,
    pm: N9,
    Poincareplane: $9,
    pointint: O9,
    popf: P9,
    Popf: R9,
    pound: D9,
    prap: z9,
    Pr: I9,
    pr: F9,
    prcue: H9,
    precapprox: q9,
    prec: B9,
    preccurlyeq: W9,
    Precedes: U9,
    PrecedesEqual: V9,
    PrecedesSlantEqual: j9,
    PrecedesTilde: G9,
    preceq: K9,
    precnapprox: X9,
    precneqq: Y9,
    precnsim: Z9,
    pre: J9,
    prE: Q9,
    precsim: e7,
    prime: t7,
    Prime: n7,
    primes: r7,
    prnap: i7,
    prnE: o7,
    prnsim: s7,
    prod: l7,
    Product: a7,
    profalar: c7,
    profline: u7,
    profsurf: f7,
    prop: d7,
    Proportional: h7,
    Proportion: p7,
    propto: g7,
    prsim: v7,
    prurel: m7,
    Pscr: y7,
    pscr: b7,
    Psi: w7,
    psi: x7,
    puncsp: _7,
    Qfr: S7,
    qfr: k7,
    qint: T7,
    qopf: C7,
    Qopf: E7,
    qprime: L7,
    Qscr: A7,
    qscr: M7,
    quaternions: N7,
    quatint: $7,
    quest: O7,
    questeq: P7,
    quot: R7,
    QUOT: D7,
    rAarr: z7,
    race: I7,
    Racute: F7,
    racute: H7,
    radic: q7,
    raemptyv: B7,
    rang: W7,
    Rang: U7,
    rangd: V7,
    range: j7,
    rangle: G7,
    raquo: K7,
    rarrap: X7,
    rarrb: Y7,
    rarrbfs: Z7,
    rarrc: J7,
    rarr: Q7,
    Rarr: eK,
    rArr: tK,
    rarrfs: nK,
    rarrhk: rK,
    rarrlp: iK,
    rarrpl: oK,
    rarrsim: sK,
    Rarrtl: lK,
    rarrtl: aK,
    rarrw: cK,
    ratail: uK,
    rAtail: fK,
    ratio: dK,
    rationals: hK,
    rbarr: pK,
    rBarr: gK,
    RBarr: vK,
    rbbrk: mK,
    rbrace: yK,
    rbrack: bK,
    rbrke: wK,
    rbrksld: xK,
    rbrkslu: _K,
    Rcaron: SK,
    rcaron: kK,
    Rcedil: TK,
    rcedil: CK,
    rceil: EK,
    rcub: LK,
    Rcy: AK,
    rcy: MK,
    rdca: NK,
    rdldhar: $K,
    rdquo: OK,
    rdquor: PK,
    rdsh: RK,
    real: DK,
    realine: zK,
    realpart: IK,
    reals: FK,
    Re: HK,
    rect: qK,
    reg: BK,
    REG: WK,
    ReverseElement: UK,
    ReverseEquilibrium: VK,
    ReverseUpEquilibrium: jK,
    rfisht: GK,
    rfloor: KK,
    rfr: XK,
    Rfr: YK,
    rHar: ZK,
    rhard: JK,
    rharu: QK,
    rharul: eX,
    Rho: tX,
    rho: nX,
    rhov: rX,
    RightAngleBracket: iX,
    RightArrowBar: oX,
    rightarrow: sX,
    RightArrow: lX,
    Rightarrow: aX,
    RightArrowLeftArrow: cX,
    rightarrowtail: uX,
    RightCeiling: fX,
    RightDoubleBracket: dX,
    RightDownTeeVector: hX,
    RightDownVectorBar: pX,
    RightDownVector: gX,
    RightFloor: vX,
    rightharpoondown: mX,
    rightharpoonup: yX,
    rightleftarrows: bX,
    rightleftharpoons: wX,
    rightrightarrows: xX,
    rightsquigarrow: _X,
    RightTeeArrow: SX,
    RightTee: kX,
    RightTeeVector: TX,
    rightthreetimes: CX,
    RightTriangleBar: EX,
    RightTriangle: LX,
    RightTriangleEqual: AX,
    RightUpDownVector: MX,
    RightUpTeeVector: NX,
    RightUpVectorBar: $X,
    RightUpVector: OX,
    RightVectorBar: PX,
    RightVector: RX,
    ring: DX,
    risingdotseq: zX,
    rlarr: IX,
    rlhar: FX,
    rlm: HX,
    rmoustache: qX,
    rmoust: BX,
    rnmid: WX,
    roang: UX,
    roarr: VX,
    robrk: jX,
    ropar: GX,
    ropf: KX,
    Ropf: XX,
    roplus: YX,
    rotimes: ZX,
    RoundImplies: JX,
    rpar: QX,
    rpargt: eY,
    rppolint: tY,
    rrarr: nY,
    Rrightarrow: rY,
    rsaquo: iY,
    rscr: oY,
    Rscr: sY,
    rsh: lY,
    Rsh: aY,
    rsqb: cY,
    rsquo: uY,
    rsquor: fY,
    rthree: dY,
    rtimes: hY,
    rtri: pY,
    rtrie: gY,
    rtrif: vY,
    rtriltri: mY,
    RuleDelayed: yY,
    ruluhar: bY,
    rx: wY,
    Sacute: xY,
    sacute: _Y,
    sbquo: SY,
    scap: kY,
    Scaron: TY,
    scaron: CY,
    Sc: EY,
    sc: LY,
    sccue: AY,
    sce: MY,
    scE: NY,
    Scedil: $Y,
    scedil: OY,
    Scirc: PY,
    scirc: RY,
    scnap: DY,
    scnE: zY,
    scnsim: IY,
    scpolint: FY,
    scsim: HY,
    Scy: qY,
    scy: BY,
    sdotb: WY,
    sdot: UY,
    sdote: VY,
    searhk: jY,
    searr: GY,
    seArr: KY,
    searrow: XY,
    sect: YY,
    semi: ZY,
    seswar: JY,
    setminus: QY,
    setmn: eZ,
    sext: tZ,
    Sfr: nZ,
    sfr: rZ,
    sfrown: iZ,
    sharp: oZ,
    SHCHcy: sZ,
    shchcy: lZ,
    SHcy: aZ,
    shcy: cZ,
    ShortDownArrow: uZ,
    ShortLeftArrow: fZ,
    shortmid: dZ,
    shortparallel: hZ,
    ShortRightArrow: pZ,
    ShortUpArrow: gZ,
    shy: vZ,
    Sigma: mZ,
    sigma: yZ,
    sigmaf: bZ,
    sigmav: wZ,
    sim: xZ,
    simdot: _Z,
    sime: SZ,
    simeq: kZ,
    simg: TZ,
    simgE: CZ,
    siml: EZ,
    simlE: LZ,
    simne: AZ,
    simplus: MZ,
    simrarr: NZ,
    slarr: $Z,
    SmallCircle: OZ,
    smallsetminus: PZ,
    smashp: RZ,
    smeparsl: DZ,
    smid: zZ,
    smile: IZ,
    smt: FZ,
    smte: HZ,
    smtes: qZ,
    SOFTcy: BZ,
    softcy: WZ,
    solbar: UZ,
    solb: VZ,
    sol: jZ,
    Sopf: GZ,
    sopf: KZ,
    spades: XZ,
    spadesuit: YZ,
    spar: ZZ,
    sqcap: JZ,
    sqcaps: QZ,
    sqcup: eJ,
    sqcups: tJ,
    Sqrt: nJ,
    sqsub: rJ,
    sqsube: iJ,
    sqsubset: oJ,
    sqsubseteq: sJ,
    sqsup: lJ,
    sqsupe: aJ,
    sqsupset: cJ,
    sqsupseteq: uJ,
    square: fJ,
    Square: dJ,
    SquareIntersection: hJ,
    SquareSubset: pJ,
    SquareSubsetEqual: gJ,
    SquareSuperset: vJ,
    SquareSupersetEqual: mJ,
    SquareUnion: yJ,
    squarf: bJ,
    squ: wJ,
    squf: xJ,
    srarr: _J,
    Sscr: SJ,
    sscr: kJ,
    ssetmn: TJ,
    ssmile: CJ,
    sstarf: EJ,
    Star: LJ,
    star: AJ,
    starf: MJ,
    straightepsilon: NJ,
    straightphi: $J,
    strns: OJ,
    sub: PJ,
    Sub: RJ,
    subdot: DJ,
    subE: zJ,
    sube: IJ,
    subedot: FJ,
    submult: HJ,
    subnE: qJ,
    subne: BJ,
    subplus: WJ,
    subrarr: UJ,
    subset: VJ,
    Subset: jJ,
    subseteq: GJ,
    subseteqq: KJ,
    SubsetEqual: XJ,
    subsetneq: YJ,
    subsetneqq: ZJ,
    subsim: JJ,
    subsub: QJ,
    subsup: eQ,
    succapprox: tQ,
    succ: nQ,
    succcurlyeq: rQ,
    Succeeds: iQ,
    SucceedsEqual: oQ,
    SucceedsSlantEqual: sQ,
    SucceedsTilde: lQ,
    succeq: aQ,
    succnapprox: cQ,
    succneqq: uQ,
    succnsim: fQ,
    succsim: dQ,
    SuchThat: hQ,
    sum: pQ,
    Sum: gQ,
    sung: vQ,
    sup1: mQ,
    sup2: yQ,
    sup3: bQ,
    sup: wQ,
    Sup: xQ,
    supdot: _Q,
    supdsub: SQ,
    supE: kQ,
    supe: TQ,
    supedot: CQ,
    Superset: EQ,
    SupersetEqual: LQ,
    suphsol: AQ,
    suphsub: MQ,
    suplarr: NQ,
    supmult: $Q,
    supnE: OQ,
    supne: PQ,
    supplus: RQ,
    supset: DQ,
    Supset: zQ,
    supseteq: IQ,
    supseteqq: FQ,
    supsetneq: HQ,
    supsetneqq: qQ,
    supsim: BQ,
    supsub: WQ,
    supsup: UQ,
    swarhk: VQ,
    swarr: jQ,
    swArr: GQ,
    swarrow: KQ,
    swnwar: XQ,
    szlig: YQ,
    Tab: ZQ,
    target: JQ,
    Tau: QQ,
    tau: eee,
    tbrk: tee,
    Tcaron: nee,
    tcaron: ree,
    Tcedil: iee,
    tcedil: oee,
    Tcy: see,
    tcy: lee,
    tdot: aee,
    telrec: cee,
    Tfr: uee,
    tfr: fee,
    there4: dee,
    therefore: hee,
    Therefore: pee,
    Theta: gee,
    theta: vee,
    thetasym: mee,
    thetav: yee,
    thickapprox: bee,
    thicksim: wee,
    ThickSpace: xee,
    ThinSpace: _ee,
    thinsp: See,
    thkap: kee,
    thksim: Tee,
    THORN: Cee,
    thorn: Eee,
    tilde: Lee,
    Tilde: Aee,
    TildeEqual: Mee,
    TildeFullEqual: Nee,
    TildeTilde: $ee,
    timesbar: Oee,
    timesb: Pee,
    times: Ree,
    timesd: Dee,
    tint: zee,
    toea: Iee,
    topbot: Fee,
    topcir: Hee,
    top: qee,
    Topf: Bee,
    topf: Wee,
    topfork: Uee,
    tosa: Vee,
    tprime: jee,
    trade: Gee,
    TRADE: Kee,
    triangle: Xee,
    triangledown: Yee,
    triangleleft: Zee,
    trianglelefteq: Jee,
    triangleq: Qee,
    triangleright: ete,
    trianglerighteq: tte,
    tridot: nte,
    trie: rte,
    triminus: ite,
    TripleDot: ote,
    triplus: ste,
    trisb: lte,
    tritime: ate,
    trpezium: cte,
    Tscr: ute,
    tscr: fte,
    TScy: dte,
    tscy: hte,
    TSHcy: pte,
    tshcy: gte,
    Tstrok: vte,
    tstrok: mte,
    twixt: yte,
    twoheadleftarrow: bte,
    twoheadrightarrow: wte,
    Uacute: xte,
    uacute: _te,
    uarr: Ste,
    Uarr: kte,
    uArr: Tte,
    Uarrocir: Cte,
    Ubrcy: Ete,
    ubrcy: Lte,
    Ubreve: Ate,
    ubreve: Mte,
    Ucirc: Nte,
    ucirc: $te,
    Ucy: Ote,
    ucy: Pte,
    udarr: Rte,
    Udblac: Dte,
    udblac: zte,
    udhar: Ite,
    ufisht: Fte,
    Ufr: Hte,
    ufr: qte,
    Ugrave: Bte,
    ugrave: Wte,
    uHar: Ute,
    uharl: Vte,
    uharr: jte,
    uhblk: Gte,
    ulcorn: Kte,
    ulcorner: Xte,
    ulcrop: Yte,
    ultri: Zte,
    Umacr: Jte,
    umacr: Qte,
    uml: ene,
    UnderBar: tne,
    UnderBrace: nne,
    UnderBracket: rne,
    UnderParenthesis: ine,
    Union: one,
    UnionPlus: sne,
    Uogon: lne,
    uogon: ane,
    Uopf: cne,
    uopf: une,
    UpArrowBar: fne,
    uparrow: dne,
    UpArrow: hne,
    Uparrow: pne,
    UpArrowDownArrow: gne,
    updownarrow: vne,
    UpDownArrow: mne,
    Updownarrow: yne,
    UpEquilibrium: bne,
    upharpoonleft: wne,
    upharpoonright: xne,
    uplus: _ne,
    UpperLeftArrow: Sne,
    UpperRightArrow: kne,
    upsi: Tne,
    Upsi: Cne,
    upsih: Ene,
    Upsilon: Lne,
    upsilon: Ane,
    UpTeeArrow: Mne,
    UpTee: Nne,
    upuparrows: $ne,
    urcorn: One,
    urcorner: Pne,
    urcrop: Rne,
    Uring: Dne,
    uring: zne,
    urtri: Ine,
    Uscr: Fne,
    uscr: Hne,
    utdot: qne,
    Utilde: Bne,
    utilde: Wne,
    utri: Une,
    utrif: Vne,
    uuarr: jne,
    Uuml: Gne,
    uuml: Kne,
    uwangle: Xne,
    vangrt: Yne,
    varepsilon: Zne,
    varkappa: Jne,
    varnothing: Qne,
    varphi: ere,
    varpi: tre,
    varpropto: nre,
    varr: rre,
    vArr: ire,
    varrho: ore,
    varsigma: sre,
    varsubsetneq: lre,
    varsubsetneqq: are,
    varsupsetneq: cre,
    varsupsetneqq: ure,
    vartheta: fre,
    vartriangleleft: dre,
    vartriangleright: hre,
    vBar: pre,
    Vbar: gre,
    vBarv: vre,
    Vcy: mre,
    vcy: yre,
    vdash: bre,
    vDash: wre,
    Vdash: xre,
    VDash: _re,
    Vdashl: Sre,
    veebar: kre,
    vee: Tre,
    Vee: Cre,
    veeeq: Ere,
    vellip: Lre,
    verbar: Are,
    Verbar: Mre,
    vert: Nre,
    Vert: $re,
    VerticalBar: Ore,
    VerticalLine: Pre,
    VerticalSeparator: Rre,
    VerticalTilde: Dre,
    VeryThinSpace: zre,
    Vfr: Ire,
    vfr: Fre,
    vltri: Hre,
    vnsub: qre,
    vnsup: Bre,
    Vopf: Wre,
    vopf: Ure,
    vprop: Vre,
    vrtri: jre,
    Vscr: Gre,
    vscr: Kre,
    vsubnE: Xre,
    vsubne: Yre,
    vsupnE: Zre,
    vsupne: Jre,
    Vvdash: Qre,
    vzigzag: eie,
    Wcirc: tie,
    wcirc: nie,
    wedbar: rie,
    wedge: iie,
    Wedge: oie,
    wedgeq: sie,
    weierp: lie,
    Wfr: aie,
    wfr: cie,
    Wopf: uie,
    wopf: fie,
    wp: die,
    wr: hie,
    wreath: pie,
    Wscr: gie,
    wscr: vie,
    xcap: mie,
    xcirc: yie,
    xcup: bie,
    xdtri: wie,
    Xfr: xie,
    xfr: _ie,
    xharr: Sie,
    xhArr: kie,
    Xi: Tie,
    xi: Cie,
    xlarr: Eie,
    xlArr: Lie,
    xmap: Aie,
    xnis: Mie,
    xodot: Nie,
    Xopf: $ie,
    xopf: Oie,
    xoplus: Pie,
    xotime: Rie,
    xrarr: Die,
    xrArr: zie,
    Xscr: Iie,
    xscr: Fie,
    xsqcup: Hie,
    xuplus: qie,
    xutri: Bie,
    xvee: Wie,
    xwedge: Uie,
    Yacute: Vie,
    yacute: jie,
    YAcy: Gie,
    yacy: Kie,
    Ycirc: Xie,
    ycirc: Yie,
    Ycy: Zie,
    ycy: Jie,
    yen: Qie,
    Yfr: eoe,
    yfr: toe,
    YIcy: noe,
    yicy: roe,
    Yopf: ioe,
    yopf: ooe,
    Yscr: soe,
    yscr: loe,
    YUcy: aoe,
    yucy: coe,
    yuml: uoe,
    Yuml: foe,
    Zacute: doe,
    zacute: hoe,
    Zcaron: poe,
    zcaron: goe,
    Zcy: voe,
    zcy: moe,
    Zdot: yoe,
    zdot: boe,
    zeetrf: woe,
    ZeroWidthSpace: xoe,
    Zeta: _oe,
    zeta: Soe,
    zfr: koe,
    Zfr: Toe,
    ZHcy: Coe,
    zhcy: Eoe,
    zigrarr: Loe,
    zopf: Aoe,
    Zopf: Moe,
    Zscr: Noe,
    zscr: $oe,
    zwj: Ooe,
    zwnj: Poe,
  },
  Roe = "Á",
  Doe = "á",
  zoe = "Â",
  Ioe = "â",
  Foe = "´",
  Hoe = "Æ",
  qoe = "æ",
  Boe = "À",
  Woe = "à",
  Uoe = "&",
  Voe = "&",
  joe = "Å",
  Goe = "å",
  Koe = "Ã",
  Xoe = "ã",
  Yoe = "Ä",
  Zoe = "ä",
  Joe = "¦",
  Qoe = "Ç",
  ese = "ç",
  tse = "¸",
  nse = "¢",
  rse = "©",
  ise = "©",
  ose = "¤",
  sse = "°",
  lse = "÷",
  ase = "É",
  cse = "é",
  use = "Ê",
  fse = "ê",
  dse = "È",
  hse = "è",
  pse = "Ð",
  gse = "ð",
  vse = "Ë",
  mse = "ë",
  yse = "½",
  bse = "¼",
  wse = "¾",
  xse = ">",
  _se = ">",
  Sse = "Í",
  kse = "í",
  Tse = "Î",
  Cse = "î",
  Ese = "¡",
  Lse = "Ì",
  Ase = "ì",
  Mse = "¿",
  Nse = "Ï",
  $se = "ï",
  Ose = "«",
  Pse = "<",
  Rse = "<",
  Dse = "¯",
  zse = "µ",
  Ise = "·",
  Fse = " ",
  Hse = "¬",
  qse = "Ñ",
  Bse = "ñ",
  Wse = "Ó",
  Use = "ó",
  Vse = "Ô",
  jse = "ô",
  Gse = "Ò",
  Kse = "ò",
  Xse = "ª",
  Yse = "º",
  Zse = "Ø",
  Jse = "ø",
  Qse = "Õ",
  ele = "õ",
  tle = "Ö",
  nle = "ö",
  rle = "¶",
  ile = "±",
  ole = "£",
  sle = '"',
  lle = '"',
  ale = "»",
  cle = "®",
  ule = "®",
  fle = "§",
  dle = "­",
  hle = "¹",
  ple = "²",
  gle = "³",
  vle = "ß",
  mle = "Þ",
  yle = "þ",
  ble = "×",
  wle = "Ú",
  xle = "ú",
  _le = "Û",
  Sle = "û",
  kle = "Ù",
  Tle = "ù",
  Cle = "¨",
  Ele = "Ü",
  Lle = "ü",
  Ale = "Ý",
  Mle = "ý",
  Nle = "¥",
  $le = "ÿ",
  Ole = {
    Aacute: Roe,
    aacute: Doe,
    Acirc: zoe,
    acirc: Ioe,
    acute: Foe,
    AElig: Hoe,
    aelig: qoe,
    Agrave: Boe,
    agrave: Woe,
    amp: Uoe,
    AMP: Voe,
    Aring: joe,
    aring: Goe,
    Atilde: Koe,
    atilde: Xoe,
    Auml: Yoe,
    auml: Zoe,
    brvbar: Joe,
    Ccedil: Qoe,
    ccedil: ese,
    cedil: tse,
    cent: nse,
    copy: rse,
    COPY: ise,
    curren: ose,
    deg: sse,
    divide: lse,
    Eacute: ase,
    eacute: cse,
    Ecirc: use,
    ecirc: fse,
    Egrave: dse,
    egrave: hse,
    ETH: pse,
    eth: gse,
    Euml: vse,
    euml: mse,
    frac12: yse,
    frac14: bse,
    frac34: wse,
    gt: xse,
    GT: _se,
    Iacute: Sse,
    iacute: kse,
    Icirc: Tse,
    icirc: Cse,
    iexcl: Ese,
    Igrave: Lse,
    igrave: Ase,
    iquest: Mse,
    Iuml: Nse,
    iuml: $se,
    laquo: Ose,
    lt: Pse,
    LT: Rse,
    macr: Dse,
    micro: zse,
    middot: Ise,
    nbsp: Fse,
    not: Hse,
    Ntilde: qse,
    ntilde: Bse,
    Oacute: Wse,
    oacute: Use,
    Ocirc: Vse,
    ocirc: jse,
    Ograve: Gse,
    ograve: Kse,
    ordf: Xse,
    ordm: Yse,
    Oslash: Zse,
    oslash: Jse,
    Otilde: Qse,
    otilde: ele,
    Ouml: tle,
    ouml: nle,
    para: rle,
    plusmn: ile,
    pound: ole,
    quot: sle,
    QUOT: lle,
    raquo: ale,
    reg: cle,
    REG: ule,
    sect: fle,
    shy: dle,
    sup1: hle,
    sup2: ple,
    sup3: gle,
    szlig: vle,
    THORN: mle,
    thorn: yle,
    times: ble,
    Uacute: wle,
    uacute: xle,
    Ucirc: _le,
    ucirc: Sle,
    Ugrave: kle,
    ugrave: Tle,
    uml: Cle,
    Uuml: Ele,
    uuml: Lle,
    Yacute: Ale,
    yacute: Mle,
    yen: Nle,
    yuml: $le,
  },
  Ple = "&",
  Rle = "'",
  Dle = ">",
  zle = "<",
  Ile = '"',
  ew = { amp: Ple, apos: Rle, gt: Dle, lt: zle, quot: Ile };
var Hh = {};
const Fle = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376,
};
var Hle =
  (Ao && Ao.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Hh, "__esModule", { value: !0 });
var Fm = Hle(Fle),
  qle =
    String.fromCodePoint ||
    function (e) {
      var t = "";
      return (
        e > 65535 &&
          ((e -= 65536),
          (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
          (e = 56320 | (e & 1023))),
        (t += String.fromCharCode(e)),
        t
      );
    };
function Ble(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? "�"
    : (e in Fm.default && (e = Fm.default[e]), qle(e));
}
Hh.default = Ble;
var $u =
  (Ao && Ao.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.decodeHTML = oi.decodeHTMLStrict = oi.decodeXML = void 0;
var Rd = $u(Qb),
  Wle = $u(Ole),
  Ule = $u(ew),
  Hm = $u(Hh),
  Vle = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
oi.decodeXML = tw(Ule.default);
oi.decodeHTMLStrict = tw(Rd.default);
function tw(e) {
  var t = nw(e);
  return function (r) {
    return String(r).replace(Vle, t);
  };
}
var qm = function (e, t) {
  return e < t ? 1 : -1;
};
oi.decodeHTML = (function () {
  for (
    var e = Object.keys(Wle.default).sort(qm), t = Object.keys(Rd.default).sort(qm), r = 0, o = 0;
    r < t.length;
    r++
  )
    e[o] === t[r] ? ((t[r] += ";?"), o++) : (t[r] += ";");
  var s = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
    c = nw(Rd.default);
  function f(d) {
    return d.substr(-1) !== ";" && (d += ";"), c(d);
  }
  return function (d) {
    return String(d).replace(s, f);
  };
})();
function nw(e) {
  return function (r) {
    if (r.charAt(1) === "#") {
      var o = r.charAt(2);
      return o === "X" || o === "x"
        ? Hm.default(parseInt(r.substr(3), 16))
        : Hm.default(parseInt(r.substr(2), 10));
    }
    return e[r.slice(1, -1)] || r;
  };
}
var Wn = {},
  rw =
    (Ao && Ao.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.escapeUTF8 = Wn.escape = Wn.encodeNonAsciiHTML = Wn.encodeHTML = Wn.encodeXML = void 0;
var jle = rw(ew),
  iw = sw(jle.default),
  ow = lw(iw);
Wn.encodeXML = uw(iw);
var Gle = rw(Qb),
  qh = sw(Gle.default),
  Kle = lw(qh);
Wn.encodeHTML = Yle(qh, Kle);
Wn.encodeNonAsciiHTML = uw(qh);
function sw(e) {
  return Object.keys(e)
    .sort()
    .reduce(function (t, r) {
      return (t[e[r]] = "&" + r + ";"), t;
    }, {});
}
function lw(e) {
  for (var t = [], r = [], o = 0, s = Object.keys(e); o < s.length; o++) {
    var c = s[o];
    c.length === 1 ? t.push("\\" + c) : r.push(c);
  }
  t.sort();
  for (var f = 0; f < t.length - 1; f++) {
    for (var d = f; d < t.length - 1 && t[d].charCodeAt(1) + 1 === t[d + 1].charCodeAt(1); ) d += 1;
    var h = 1 + d - f;
    h < 3 || t.splice(f, h, t[f] + "-" + t[d]);
  }
  return r.unshift("[" + t.join("") + "]"), new RegExp(r.join("|"), "g");
}
var aw =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  Xle =
    String.prototype.codePointAt != null
      ? function (e) {
          return e.codePointAt(0);
        }
      : function (e) {
          return (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536;
        };
function Ou(e) {
  return "&#x" + (e.length > 1 ? Xle(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function Yle(e, t) {
  return function (r) {
    return r
      .replace(t, function (o) {
        return e[o];
      })
      .replace(aw, Ou);
  };
}
var cw = new RegExp(ow.source + "|" + aw.source, "g");
function Zle(e) {
  return e.replace(cw, Ou);
}
Wn.escape = Zle;
function Jle(e) {
  return e.replace(ow, Ou);
}
Wn.escapeUTF8 = Jle;
function uw(e) {
  return function (t) {
    return t.replace(cw, function (r) {
      return e[r] || Ou(r);
    });
  };
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.decodeXMLStrict =
      e.decodeHTML5Strict =
      e.decodeHTML4Strict =
      e.decodeHTML5 =
      e.decodeHTML4 =
      e.decodeHTMLStrict =
      e.decodeHTML =
      e.decodeXML =
      e.encodeHTML5 =
      e.encodeHTML4 =
      e.escapeUTF8 =
      e.escape =
      e.encodeNonAsciiHTML =
      e.encodeHTML =
      e.encodeXML =
      e.encode =
      e.decodeStrict =
      e.decode =
        void 0);
  var t = oi,
    r = Wn;
  function o(h, p) {
    return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(h);
  }
  e.decode = o;
  function s(h, p) {
    return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(h);
  }
  e.decodeStrict = s;
  function c(h, p) {
    return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(h);
  }
  e.encode = c;
  var f = Wn;
  Object.defineProperty(e, "encodeXML", {
    enumerable: !0,
    get: function () {
      return f.encodeXML;
    },
  }),
    Object.defineProperty(e, "encodeHTML", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(e, "encodeNonAsciiHTML", {
      enumerable: !0,
      get: function () {
        return f.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(e, "escape", {
      enumerable: !0,
      get: function () {
        return f.escape;
      },
    }),
    Object.defineProperty(e, "escapeUTF8", {
      enumerable: !0,
      get: function () {
        return f.escapeUTF8;
      },
    }),
    Object.defineProperty(e, "encodeHTML4", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    }),
    Object.defineProperty(e, "encodeHTML5", {
      enumerable: !0,
      get: function () {
        return f.encodeHTML;
      },
    });
  var d = oi;
  Object.defineProperty(e, "decodeXML", {
    enumerable: !0,
    get: function () {
      return d.decodeXML;
    },
  }),
    Object.defineProperty(e, "decodeHTML", {
      enumerable: !0,
      get: function () {
        return d.decodeHTML;
      },
    }),
    Object.defineProperty(e, "decodeHTMLStrict", {
      enumerable: !0,
      get: function () {
        return d.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, "decodeHTML4", {
      enumerable: !0,
      get: function () {
        return d.decodeHTML;
      },
    }),
    Object.defineProperty(e, "decodeHTML5", {
      enumerable: !0,
      get: function () {
        return d.decodeHTML;
      },
    }),
    Object.defineProperty(e, "decodeHTML4Strict", {
      enumerable: !0,
      get: function () {
        return d.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, "decodeHTML5Strict", {
      enumerable: !0,
      get: function () {
        return d.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, "decodeXMLStrict", {
      enumerable: !0,
      get: function () {
        return d.decodeXML;
      },
    });
})(Jb);
function Qle(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function eae(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function tae(e, t, r) {
  return t && eae(e.prototype, t), e;
}
function fw(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = nae(e)) || t) {
      r && (e = r);
      var o = 0,
        s = function () {};
      return {
        s,
        n: function () {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        },
        e: function (p) {
          throw p;
        },
        f: s,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var c = !0,
    f = !1,
    d;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var p = r.next();
      return (c = p.done), p;
    },
    e: function (p) {
      (f = !0), (d = p);
    },
    f: function () {
      try {
        !c && r.return != null && r.return();
      } finally {
        if (f) throw d;
      }
    },
  };
}
function nae(e, t) {
  if (e) {
    if (typeof e == "string") return Bm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bm(e, t);
  }
}
function Bm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
  return o;
}
var rae = Jb,
  Wm = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: iae() };
function iae() {
  var e = {
    0: "#000",
    1: "#A00",
    2: "#0A0",
    3: "#A50",
    4: "#00A",
    5: "#A0A",
    6: "#0AA",
    7: "#AAA",
    8: "#555",
    9: "#F55",
    10: "#5F5",
    11: "#FF5",
    12: "#55F",
    13: "#F5F",
    14: "#5FF",
    15: "#FFF",
  };
  return (
    ic(0, 5).forEach(function (t) {
      ic(0, 5).forEach(function (r) {
        ic(0, 5).forEach(function (o) {
          return oae(t, r, o, e);
        });
      });
    }),
    ic(0, 23).forEach(function (t) {
      var r = t + 232,
        o = dw(t * 10 + 8);
      e[r] = "#" + o + o + o;
    }),
    e
  );
}
function oae(e, t, r, o) {
  var s = 16 + e * 36 + t * 6 + r,
    c = e > 0 ? e * 40 + 55 : 0,
    f = t > 0 ? t * 40 + 55 : 0,
    d = r > 0 ? r * 40 + 55 : 0;
  o[s] = sae([c, f, d]);
}
function dw(e) {
  for (var t = e.toString(16); t.length < 2; ) t = "0" + t;
  return t;
}
function sae(e) {
  var t = [],
    r = fw(e),
    o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var s = o.value;
      t.push(dw(s));
    }
  } catch (c) {
    r.e(c);
  } finally {
    r.f();
  }
  return "#" + t.join("");
}
function Um(e, t, r, o) {
  var s;
  return (
    t === "text"
      ? (s = uae(r, o))
      : t === "display"
        ? (s = aae(e, r, o))
        : t === "xterm256Foreground"
          ? (s = xc(e, o.colors[r]))
          : t === "xterm256Background"
            ? (s = _c(e, o.colors[r]))
            : t === "rgb" && (s = lae(e, r)),
    s
  );
}
function lae(e, t) {
  t = t.substring(2).slice(0, -1);
  var r = +t.substr(0, 2),
    o = t.substring(5).split(";"),
    s = o
      .map(function (c) {
        return ("0" + Number(c).toString(16)).substr(-2);
      })
      .join("");
  return wc(e, (r === 38 ? "color:#" : "background-color:#") + s);
}
function aae(e, t, r) {
  t = parseInt(t, 10);
  var o = {
      "-1": function () {
        return "<br/>";
      },
      0: function () {
        return e.length && hw(e);
      },
      1: function () {
        return Ii(e, "b");
      },
      3: function () {
        return Ii(e, "i");
      },
      4: function () {
        return Ii(e, "u");
      },
      8: function () {
        return wc(e, "display:none");
      },
      9: function () {
        return Ii(e, "strike");
      },
      22: function () {
        return wc(e, "font-weight:normal;text-decoration:none;font-style:normal");
      },
      23: function () {
        return jm(e, "i");
      },
      24: function () {
        return jm(e, "u");
      },
      39: function () {
        return xc(e, r.fg);
      },
      49: function () {
        return _c(e, r.bg);
      },
      53: function () {
        return wc(e, "text-decoration:overline");
      },
    },
    s;
  return (
    o[t]
      ? (s = o[t]())
      : 4 < t && t < 7
        ? (s = Ii(e, "blink"))
        : 29 < t && t < 38
          ? (s = xc(e, r.colors[t - 30]))
          : 39 < t && t < 48
            ? (s = _c(e, r.colors[t - 40]))
            : 89 < t && t < 98
              ? (s = xc(e, r.colors[8 + (t - 90)]))
              : 99 < t && t < 108 && (s = _c(e, r.colors[8 + (t - 100)])),
    s
  );
}
function hw(e) {
  var t = e.slice(0);
  return (
    (e.length = 0),
    t
      .reverse()
      .map(function (r) {
        return "</" + r + ">";
      })
      .join("")
  );
}
function ic(e, t) {
  for (var r = [], o = e; o <= t; o++) r.push(o);
  return r;
}
function cae(e) {
  return function (t) {
    return (e === null || t.category !== e) && e !== "all";
  };
}
function Vm(e) {
  e = parseInt(e, 10);
  var t = null;
  return (
    e === 0
      ? (t = "all")
      : e === 1
        ? (t = "bold")
        : 2 < e && e < 5
          ? (t = "underline")
          : 4 < e && e < 7
            ? (t = "blink")
            : e === 8
              ? (t = "hide")
              : e === 9
                ? (t = "strike")
                : (29 < e && e < 38) || e === 39 || (89 < e && e < 98)
                  ? (t = "foreground-color")
                  : ((39 < e && e < 48) || e === 49 || (99 < e && e < 108)) &&
                    (t = "background-color"),
    t
  );
}
function uae(e, t) {
  return t.escapeXML ? rae.encodeXML(e) : e;
}
function Ii(e, t, r) {
  return r || (r = ""), e.push(t), "<".concat(t).concat(r ? ' style="'.concat(r, '"') : "", ">");
}
function wc(e, t) {
  return Ii(e, "span", t);
}
function xc(e, t) {
  return Ii(e, "span", "color:" + t);
}
function _c(e, t) {
  return Ii(e, "span", "background-color:" + t);
}
function jm(e, t) {
  var r;
  if ((e.slice(-1)[0] === t && (r = e.pop()), r)) return "</" + t + ">";
}
function fae(e, t, r) {
  var o = !1,
    s = 3;
  function c() {
    return "";
  }
  function f(H, z) {
    return r("xterm256Foreground", z), "";
  }
  function d(H, z) {
    return r("xterm256Background", z), "";
  }
  function h(H) {
    return t.newline ? r("display", -1) : r("text", H), "";
  }
  function p(H, z) {
    (o = !0), z.trim().length === 0 && (z = "0"), (z = z.trimRight(";").split(";"));
    var J = fw(z),
      ie;
    try {
      for (J.s(); !(ie = J.n()).done; ) {
        var ne = ie.value;
        r("display", ne);
      }
    } catch (j) {
      J.e(j);
    } finally {
      J.f();
    }
    return "";
  }
  function v(H) {
    return r("text", H), "";
  }
  function y(H) {
    return r("rgb", H), "";
  }
  var b = [
    { pattern: /^\x08+/, sub: c },
    { pattern: /^\x1b\[[012]?K/, sub: c },
    { pattern: /^\x1b\[\(B/, sub: c },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: y },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: f },
    { pattern: /^\x1b\[48;5;(\d+)m/, sub: d },
    { pattern: /^\n/, sub: h },
    { pattern: /^\r+\n/, sub: h },
    { pattern: /^\r/, sub: h },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: p },
    { pattern: /^\x1b\[\d?J/, sub: c },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: c },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: c },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: v },
  ];
  function x(H, z) {
    (z > s && o) || ((o = !1), (e = e.replace(H.pattern, H.sub)));
  }
  var C = [],
    E = e,
    N = E.length;
  e: for (; N > 0; ) {
    for (var M = 0, L = 0, D = b.length; L < D; M = ++L) {
      var A = b[M];
      if ((x(A, M), e.length !== N)) {
        N = e.length;
        continue e;
      }
    }
    if (e.length === N) break;
    C.push(0), (N = e.length);
  }
  return C;
}
function dae(e, t, r) {
  return (
    t !== "text" && ((e = e.filter(cae(Vm(r)))), e.push({ token: t, data: r, category: Vm(r) })), e
  );
}
var hae = (function () {
    function e(t) {
      Qle(this, e),
        (t = t || {}),
        t.colors && (t.colors = Object.assign({}, Wm.colors, t.colors)),
        (this.options = Object.assign({}, Wm, t)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      tae(e, [
        {
          key: "toHtml",
          value: function (r) {
            var o = this;
            r = typeof r == "string" ? [r] : r;
            var s = this.stack,
              c = this.options,
              f = [];
            return (
              this.stickyStack.forEach(function (d) {
                var h = Um(s, d.token, d.data, c);
                h && f.push(h);
              }),
              fae(r.join(""), c, function (d, h) {
                var p = Um(s, d, h, c);
                p && f.push(p), c.stream && (o.stickyStack = dae(o.stickyStack, d, h));
              }),
              s.length && f.push(hw(s)),
              f.join("")
            );
          },
        },
      ]),
      e
    );
  })(),
  pae = hae;
const gae = Db(pae),
  vae = /^[A-Za-z]:\//;
function mae(e = "") {
  return e && e.replace(/\\/g, "/").replace(vae, (t) => t.toUpperCase());
}
const yae = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function bae() {
  return typeof process < "u" && typeof process.cwd == "function"
    ? process.cwd().replace(/\\/g, "/")
    : "/";
}
const wae = function (...e) {
  e = e.map((o) => mae(o));
  let t = "",
    r = !1;
  for (let o = e.length - 1; o >= -1 && !r; o--) {
    const s = o >= 0 ? e[o] : bae();
    !s || s.length === 0 || ((t = `${s}/${t}`), (r = Gm(s)));
  }
  return (t = xae(t, !r)), r && !Gm(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function xae(e, t) {
  let r = "",
    o = 0,
    s = -1,
    c = 0,
    f = null;
  for (let d = 0; d <= e.length; ++d) {
    if (d < e.length) f = e[d];
    else {
      if (f === "/") break;
      f = "/";
    }
    if (f === "/") {
      if (!(s === d - 1 || c === 1))
        if (c === 2) {
          if (r.length < 2 || o !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
            if (r.length > 2) {
              const h = r.lastIndexOf("/");
              h === -1
                ? ((r = ""), (o = 0))
                : ((r = r.slice(0, h)), (o = r.length - 1 - r.lastIndexOf("/"))),
                (s = d),
                (c = 0);
              continue;
            } else if (r.length > 0) {
              (r = ""), (o = 0), (s = d), (c = 0);
              continue;
            }
          }
          t && ((r += r.length > 0 ? "/.." : ".."), (o = 2));
        } else
          r.length > 0 ? (r += `/${e.slice(s + 1, d)}`) : (r = e.slice(s + 1, d)), (o = d - s - 1);
      (s = d), (c = 0);
    } else f === "." && c !== -1 ? ++c : (c = -1);
  }
  return r;
}
const Gm = function (e) {
    return yae.test(e);
  },
  _ae = 44,
  Km = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Sae = new Uint8Array(64),
  pw = new Uint8Array(128);
for (let e = 0; e < Km.length; e++) {
  const t = Km.charCodeAt(e);
  (Sae[e] = t), (pw[t] = e);
}
function kae(e) {
  const t = new Int32Array(5),
    r = [];
  let o = 0;
  do {
    const s = Tae(e, o),
      c = [];
    let f = !0,
      d = 0;
    t[0] = 0;
    for (let h = o; h < s; h++) {
      let p;
      h = dl(e, h, t, 0);
      const v = t[0];
      v < d && (f = !1),
        (d = v),
        Xm(e, h, s)
          ? ((h = dl(e, h, t, 1)),
            (h = dl(e, h, t, 2)),
            (h = dl(e, h, t, 3)),
            Xm(e, h, s)
              ? ((h = dl(e, h, t, 4)), (p = [v, t[1], t[2], t[3], t[4]]))
              : (p = [v, t[1], t[2], t[3]]))
          : (p = [v]),
        c.push(p);
    }
    f || Cae(c), r.push(c), (o = s + 1);
  } while (o <= e.length);
  return r;
}
function Tae(e, t) {
  const r = e.indexOf(";", t);
  return r === -1 ? e.length : r;
}
function dl(e, t, r, o) {
  let s = 0,
    c = 0,
    f = 0;
  do {
    const h = e.charCodeAt(t++);
    (f = pw[h]), (s |= (f & 31) << c), (c += 5);
  } while (f & 32);
  const d = s & 1;
  return (s >>>= 1), d && (s = -2147483648 | -s), (r[o] += s), t;
}
function Xm(e, t, r) {
  return t >= r ? !1 : e.charCodeAt(t) !== _ae;
}
function Cae(e) {
  e.sort(Eae);
}
function Eae(e, t) {
  return e[0] - t[0];
}
const Lae = /^[\w+.-]+:\/\//,
  Aae = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
  Mae = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Dt;
(function (e) {
  (e[(e.Empty = 1)] = "Empty"),
    (e[(e.Hash = 2)] = "Hash"),
    (e[(e.Query = 3)] = "Query"),
    (e[(e.RelativePath = 4)] = "RelativePath"),
    (e[(e.AbsolutePath = 5)] = "AbsolutePath"),
    (e[(e.SchemeRelative = 6)] = "SchemeRelative"),
    (e[(e.Absolute = 7)] = "Absolute");
})(Dt || (Dt = {}));
function Nae(e) {
  return Lae.test(e);
}
function $ae(e) {
  return e.startsWith("//");
}
function gw(e) {
  return e.startsWith("/");
}
function Oae(e) {
  return e.startsWith("file:");
}
function Ym(e) {
  return /^[.?#]/.test(e);
}
function oc(e) {
  const t = Aae.exec(e);
  return vw(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function Pae(e) {
  const t = Mae.exec(e),
    r = t[2];
  return vw("file:", "", t[1] || "", "", gw(r) ? r : "/" + r, t[3] || "", t[4] || "");
}
function vw(e, t, r, o, s, c, f) {
  return { scheme: e, user: t, host: r, port: o, path: s, query: c, hash: f, type: Dt.Absolute };
}
function Zm(e) {
  if ($ae(e)) {
    const r = oc("http:" + e);
    return (r.scheme = ""), (r.type = Dt.SchemeRelative), r;
  }
  if (gw(e)) {
    const r = oc("http://foo.com" + e);
    return (r.scheme = ""), (r.host = ""), (r.type = Dt.AbsolutePath), r;
  }
  if (Oae(e)) return Pae(e);
  if (Nae(e)) return oc(e);
  const t = oc("http://foo.com/" + e);
  return (
    (t.scheme = ""),
    (t.host = ""),
    (t.type = e
      ? e.startsWith("?")
        ? Dt.Query
        : e.startsWith("#")
          ? Dt.Hash
          : Dt.RelativePath
      : Dt.Empty),
    t
  );
}
function Rae(e) {
  if (e.endsWith("/..")) return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function Dae(e, t) {
  mw(t, t.type), e.path === "/" ? (e.path = t.path) : (e.path = Rae(t.path) + e.path);
}
function mw(e, t) {
  const r = t <= Dt.RelativePath,
    o = e.path.split("/");
  let s = 1,
    c = 0,
    f = !1;
  for (let h = 1; h < o.length; h++) {
    const p = o[h];
    if (!p) {
      f = !0;
      continue;
    }
    if (((f = !1), p !== ".")) {
      if (p === "..") {
        c ? ((f = !0), c--, s--) : r && (o[s++] = p);
        continue;
      }
      (o[s++] = p), c++;
    }
  }
  let d = "";
  for (let h = 1; h < s; h++) d += "/" + o[h];
  (!d || (f && !d.endsWith("/.."))) && (d += "/"), (e.path = d);
}
function zae(e, t) {
  if (!e && !t) return "";
  const r = Zm(e);
  let o = r.type;
  if (t && o !== Dt.Absolute) {
    const c = Zm(t),
      f = c.type;
    switch (o) {
      case Dt.Empty:
        r.hash = c.hash;
      case Dt.Hash:
        r.query = c.query;
      case Dt.Query:
      case Dt.RelativePath:
        Dae(r, c);
      case Dt.AbsolutePath:
        (r.user = c.user), (r.host = c.host), (r.port = c.port);
      case Dt.SchemeRelative:
        r.scheme = c.scheme;
    }
    f > o && (o = f);
  }
  mw(r, o);
  const s = r.query + r.hash;
  switch (o) {
    case Dt.Hash:
    case Dt.Query:
      return s;
    case Dt.RelativePath: {
      const c = r.path.slice(1);
      return c ? (Ym(t || e) && !Ym(c) ? "./" + c + s : c + s) : s || ".";
    }
    case Dt.AbsolutePath:
      return r.path + s;
    default:
      return r.scheme + "//" + r.user + r.host + r.port + r.path + s;
  }
}
function Jm(e, t) {
  return t && !t.endsWith("/") && (t += "/"), zae(e, t);
}
function Iae(e) {
  if (!e) return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const Ki = 0,
  Fae = 1,
  Hae = 2,
  qae = 3,
  Bae = 4;
function Wae(e, t) {
  const r = Qm(e, 0);
  if (r === e.length) return e;
  t || (e = e.slice());
  for (let o = r; o < e.length; o = Qm(e, o + 1)) e[o] = Vae(e[o], t);
  return e;
}
function Qm(e, t) {
  for (let r = t; r < e.length; r++) if (!Uae(e[r])) return r;
  return e.length;
}
function Uae(e) {
  for (let t = 1; t < e.length; t++) if (e[t][Ki] < e[t - 1][Ki]) return !1;
  return !0;
}
function Vae(e, t) {
  return t || (e = e.slice()), e.sort(jae);
}
function jae(e, t) {
  return e[Ki] - t[Ki];
}
let Kc = !1;
function Gae(e, t, r, o) {
  for (; r <= o; ) {
    const s = r + ((o - r) >> 1),
      c = e[s][Ki] - t;
    if (c === 0) return (Kc = !0), s;
    c < 0 ? (r = s + 1) : (o = s - 1);
  }
  return (Kc = !1), r - 1;
}
function Kae(e, t, r) {
  for (let o = r + 1; o < e.length && e[o][Ki] === t; r = o++);
  return r;
}
function Xae(e, t, r) {
  for (let o = r - 1; o >= 0 && e[o][Ki] === t; r = o--);
  return r;
}
function Yae() {
  return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
}
function Zae(e, t, r, o) {
  const { lastKey: s, lastNeedle: c, lastIndex: f } = r;
  let d = 0,
    h = e.length - 1;
  if (o === s) {
    if (t === c) return (Kc = f !== -1 && e[f][Ki] === t), f;
    t >= c ? (d = f === -1 ? 0 : f) : (h = f);
  }
  return (r.lastKey = o), (r.lastNeedle = t), (r.lastIndex = Gae(e, t, d, h));
}
const Jae = "`line` must be greater than 0 (lines start at line 1)",
  Qae = "`column` must be greater than or equal to 0 (columns start at column 0)",
  e0 = -1,
  ece = 1;
class tce {
  constructor(t, r) {
    const o = typeof t == "string";
    if (!o && t._decodedMemo) return t;
    const s = o ? JSON.parse(t) : t,
      { version: c, file: f, names: d, sourceRoot: h, sources: p, sourcesContent: v } = s;
    (this.version = c),
      (this.file = f),
      (this.names = d || []),
      (this.sourceRoot = h),
      (this.sources = p),
      (this.sourcesContent = v),
      (this.ignoreList = s.ignoreList || s.x_google_ignoreList || void 0);
    const y = Jm(h || "", Iae(r));
    this.resolvedSources = p.map((x) => Jm(x || "", y));
    const { mappings: b } = s;
    typeof b == "string"
      ? ((this._encoded = b), (this._decoded = void 0))
      : ((this._encoded = void 0), (this._decoded = Wae(b, o))),
      (this._decodedMemo = Yae()),
      (this._bySources = void 0),
      (this._bySourceMemos = void 0);
  }
}
function nce(e) {
  var t;
  return (t = e)._decoded || (t._decoded = kae(e._encoded));
}
function rce(e, t) {
  let { line: r, column: o, bias: s } = t;
  if ((r--, r < 0)) throw new Error(Jae);
  if (o < 0) throw new Error(Qae);
  const c = nce(e);
  if (r >= c.length) return sc(null, null, null, null);
  const f = c[r],
    d = ice(f, e._decodedMemo, r, o, s || ece);
  if (d === -1) return sc(null, null, null, null);
  const h = f[d];
  if (h.length === 1) return sc(null, null, null, null);
  const { names: p, resolvedSources: v } = e;
  return sc(v[h[Fae]], h[Hae] + 1, h[qae], h.length === 5 ? p[h[Bae]] : null);
}
function sc(e, t, r, o) {
  return { source: e, line: t, column: r, name: o };
}
function ice(e, t, r, o, s) {
  let c = Zae(e, o, t, r);
  return (
    Kc ? (c = (s === e0 ? Kae : Xae)(e, o, c)) : s === e0 && c++,
    c === -1 || c === e.length ? -1 : c
  );
}
const yw = /^\s*at .*(?:\S:\d+|\(native\))/m,
  oce = /^(?:eval@)?(?:\[native code\])?$/,
  sce = [
    "node:internal",
    /\/packages\/\w+\/dist\//,
    /\/@vitest\/\w+\/dist\//,
    "/vitest/dist/",
    "/vitest/src/",
    "/vite-node/dist/",
    "/vite-node/src/",
    "/node_modules/chai/",
    "/node_modules/tinypool/",
    "/node_modules/tinyspy/",
    "/deps/chunk-",
    "/deps/@vitest",
    "/deps/loupe",
    "/deps/chai",
    /node:\w+/,
    /__vitest_test__/,
    /__vitest_browser__/,
    /\/deps\/vitest_/,
  ];
function bw(e) {
  if (!e.includes(":")) return [e];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!r) return [e];
  let o = r[1];
  if (
    (o.startsWith("async ") && (o = o.slice(6)),
    (o.startsWith("http:") || o.startsWith("https:")) && (o = new URL(o).pathname),
    o.startsWith("/@fs/"))
  ) {
    const s = /^\/@fs\/[a-zA-Z]:\//.test(o);
    o = o.slice(s ? 5 : 4);
  }
  return [o, r[2] || void 0, r[3] || void 0];
}
function lce(e) {
  let t = e.trim();
  if (
    oce.test(t) ||
    (t.includes(" > eval") &&
      (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
    !t.includes("@") && !t.includes(":"))
  )
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(@)/,
    o = t.match(r),
    s = o && o[1] ? o[1] : void 0,
    [c, f, d] = bw(t.replace(r, ""));
  return !c || !f || !d
    ? null
    : { file: c, method: s || "", line: Number.parseInt(f), column: Number.parseInt(d) };
}
function ace(e) {
  let t = e.trim();
  if (!yw.test(t)) return null;
  t.includes("(eval ") &&
    (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = t
    .replace(/^\s+/, "")
    .replace(/\(eval code/g, "(")
    .replace(/^.*?\s+/, "");
  const o = r.match(/ (\(.+\)$)/);
  r = o ? r.replace(o[0], "") : r;
  const [s, c, f] = bw(o ? o[1] : r);
  let d = (o && r) || "",
    h = s && ["eval", "<anonymous>"].includes(s) ? void 0 : s;
  return !h || !c || !f
    ? null
    : (d.startsWith("async ") && (d = d.slice(6)),
      h.startsWith("file://") && (h = h.slice(7)),
      (h = wae(h)),
      d && (d = d.replace(/__vite_ssr_import_\d+__\./g, "")),
      { method: d, file: h, line: Number.parseInt(c), column: Number.parseInt(f) });
}
function cce(e, t = {}) {
  const { ignoreStackEntries: r = sce } = t;
  let o = yw.test(e) ? fce(e) : uce(e);
  return (
    r.length && (o = o.filter((s) => !r.some((c) => s.file.match(c)))),
    o.map((s) => {
      var c;
      t.getFileName && (s.file = t.getFileName(s.file));
      const f = (c = t.getSourceMap) == null ? void 0 : c.call(t, s.file);
      if (!f || typeof f != "object" || !f.version) return s;
      const d = new tce(f),
        { line: h, column: p } = rce(d, s);
      return h != null && p != null ? { ...s, line: h, column: p } : s;
    })
  );
}
function uce(e) {
  return e
    .split(
      `
`,
    )
    .map((t) => lce(t))
    .filter(zb);
}
function fce(e) {
  return e
    .split(
      `
`,
    )
    .map((t) => ace(t))
    .filter(zb);
}
function dce(e, t) {
  return t && e.endsWith(t);
}
async function ww(e, t, r) {
  const o = encodeURI(`${e}:${t}:${r}`);
  await fetch(`/__open-in-editor?file=${o}`);
}
function Bh(e) {
  return new gae({ fg: e ? "#FFF" : "#000", bg: e ? "#000" : "#FFF" });
}
function hce(e) {
  return e === null || (typeof e != "function" && typeof e != "object");
}
function xw(e) {
  let t = e;
  if ((hce(e) && (t = { message: String(t).split(/\n/g)[0], stack: String(t), name: "" }), !e)) {
    const r = new Error("unknown error");
    t = { message: r.message, stack: r.stack, name: "" };
  }
  return (t.stacks = cce(t.stack || t.stackStr || "", { ignoreStackEntries: [] })), t;
}
var Un = Uint8Array,
  ls = Uint16Array,
  pce = Int32Array,
  _w = new Un([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
  ]),
  Sw = new Un([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
    13, 0, 0,
  ]),
  gce = new Un([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  kw = function (e, t) {
    for (var r = new ls(31), o = 0; o < 31; ++o) r[o] = t += 1 << e[o - 1];
    for (var s = new pce(r[30]), o = 1; o < 30; ++o)
      for (var c = r[o]; c < r[o + 1]; ++c) s[c] = ((c - r[o]) << 5) | o;
    return { b: r, r: s };
  },
  Tw = kw(_w, 2),
  Cw = Tw.b,
  vce = Tw.r;
(Cw[28] = 258), (vce[258] = 28);
var mce = kw(Sw, 0),
  yce = mce.b,
  Dd = new ls(32768);
for (var Tt = 0; Tt < 32768; ++Tt) {
  var Li = ((Tt & 43690) >> 1) | ((Tt & 21845) << 1);
  (Li = ((Li & 52428) >> 2) | ((Li & 13107) << 2)),
    (Li = ((Li & 61680) >> 4) | ((Li & 3855) << 4)),
    (Dd[Tt] = (((Li & 65280) >> 8) | ((Li & 255) << 8)) >> 1);
}
var $l = function (e, t, r) {
    for (var o = e.length, s = 0, c = new ls(t); s < o; ++s) e[s] && ++c[e[s] - 1];
    var f = new ls(t);
    for (s = 1; s < t; ++s) f[s] = (f[s - 1] + c[s - 1]) << 1;
    var d;
    if (r) {
      d = new ls(1 << t);
      var h = 15 - t;
      for (s = 0; s < o; ++s)
        if (e[s])
          for (
            var p = (s << 4) | e[s], v = t - e[s], y = f[e[s] - 1]++ << v, b = y | ((1 << v) - 1);
            y <= b;
            ++y
          )
            d[Dd[y] >> h] = p;
    } else for (d = new ls(o), s = 0; s < o; ++s) e[s] && (d[s] = Dd[f[e[s] - 1]++] >> (15 - e[s]));
    return d;
  },
  ca = new Un(288);
for (var Tt = 0; Tt < 144; ++Tt) ca[Tt] = 8;
for (var Tt = 144; Tt < 256; ++Tt) ca[Tt] = 9;
for (var Tt = 256; Tt < 280; ++Tt) ca[Tt] = 7;
for (var Tt = 280; Tt < 288; ++Tt) ca[Tt] = 8;
var Ew = new Un(32);
for (var Tt = 0; Tt < 32; ++Tt) Ew[Tt] = 5;
var bce = $l(ca, 9, 1),
  wce = $l(Ew, 5, 1),
  Jf = function (e) {
    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
    return t;
  },
  pr = function (e, t, r) {
    var o = (t / 8) | 0;
    return ((e[o] | (e[o + 1] << 8)) >> (t & 7)) & r;
  },
  Qf = function (e, t) {
    var r = (t / 8) | 0;
    return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (t & 7);
  },
  xce = function (e) {
    return ((e + 7) / 8) | 0;
  },
  Lw = function (e, t, r) {
    return (
      (t == null || t < 0) && (t = 0),
      (r == null || r > e.length) && (r = e.length),
      new Un(e.subarray(t, r))
    );
  },
  _ce = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data",
  ],
  Nn = function (e, t, r) {
    var o = new Error(t || _ce[e]);
    if (((o.code = e), Error.captureStackTrace && Error.captureStackTrace(o, Nn), !r)) throw o;
    return o;
  },
  Wh = function (e, t, r, o) {
    var s = e.length,
      c = 0;
    if (!s || (t.f && !t.l)) return r || new Un(0);
    var f = !r,
      d = f || t.i != 2,
      h = t.i;
    f && (r = new Un(s * 3));
    var p = function (Ce) {
        var Ye = r.length;
        if (Ce > Ye) {
          var O = new Un(Math.max(Ye * 2, Ce));
          O.set(r), (r = O);
        }
      },
      v = t.f || 0,
      y = t.p || 0,
      b = t.b || 0,
      x = t.l,
      C = t.d,
      E = t.m,
      N = t.n,
      M = s * 8;
    do {
      if (!x) {
        v = pr(e, y, 1);
        var L = pr(e, y + 1, 3);
        if (((y += 3), L))
          if (L == 1) (x = bce), (C = wce), (E = 9), (N = 5);
          else if (L == 2) {
            var z = pr(e, y, 31) + 257,
              J = pr(e, y + 10, 15) + 4,
              ie = z + pr(e, y + 5, 31) + 1;
            y += 14;
            for (var ne = new Un(ie), j = new Un(19), te = 0; te < J; ++te)
              j[gce[te]] = pr(e, y + te * 3, 7);
            y += J * 3;
            for (var K = Jf(j), V = (1 << K) - 1, I = $l(j, K, 1), te = 0; te < ie; ) {
              var k = I[pr(e, y, V)];
              y += k & 15;
              var D = k >> 4;
              if (D < 16) ne[te++] = D;
              else {
                var q = 0,
                  W = 0;
                for (
                  D == 16
                    ? ((W = 3 + pr(e, y, 3)), (y += 2), (q = ne[te - 1]))
                    : D == 17
                      ? ((W = 3 + pr(e, y, 7)), (y += 3))
                      : D == 18 && ((W = 11 + pr(e, y, 127)), (y += 7));
                  W--;

                )
                  ne[te++] = q;
              }
            }
            var re = ne.subarray(0, z),
              me = ne.subarray(z);
            (E = Jf(re)), (N = Jf(me)), (x = $l(re, E, 1)), (C = $l(me, N, 1));
          } else Nn(1);
        else {
          var D = xce(y) + 4,
            A = e[D - 4] | (e[D - 3] << 8),
            H = D + A;
          if (H > s) {
            h && Nn(0);
            break;
          }
          d && p(b + A), r.set(e.subarray(D, H), b), (t.b = b += A), (t.p = y = H * 8), (t.f = v);
          continue;
        }
        if (y > M) {
          h && Nn(0);
          break;
        }
      }
      d && p(b + 131072);
      for (var Me = (1 << E) - 1, Be = (1 << N) - 1, Ve = y; ; Ve = y) {
        var q = x[Qf(e, y) & Me],
          it = q >> 4;
        if (((y += q & 15), y > M)) {
          h && Nn(0);
          break;
        }
        if ((q || Nn(2), it < 256)) r[b++] = it;
        else if (it == 256) {
          (Ve = y), (x = null);
          break;
        } else {
          var nt = it - 254;
          if (it > 264) {
            var te = it - 257,
              Ze = _w[te];
            (nt = pr(e, y, (1 << Ze) - 1) + Cw[te]), (y += Ze);
          }
          var Te = C[Qf(e, y) & Be],
            X = Te >> 4;
          Te || Nn(3), (y += Te & 15);
          var me = yce[X];
          if (X > 3) {
            var Ze = Sw[X];
            (me += Qf(e, y) & ((1 << Ze) - 1)), (y += Ze);
          }
          if (y > M) {
            h && Nn(0);
            break;
          }
          d && p(b + 131072);
          var ae = b + nt;
          if (b < me) {
            var de = c - me,
              Ne = Math.min(me, ae);
            for (de + b < 0 && Nn(3); b < Ne; ++b) r[b] = o[de + b];
          }
          for (; b < ae; ++b) r[b] = r[b - me];
        }
      }
      (t.l = x), (t.p = Ve), (t.b = b), (t.f = v), x && ((v = 1), (t.m = E), (t.d = C), (t.n = N));
    } while (!v);
    return b != r.length && f ? Lw(r, 0, b) : r.subarray(0, b);
  },
  Sce = new Un(0),
  kce = function (e) {
    (e[0] != 31 || e[1] != 139 || e[2] != 8) && Nn(6, "invalid gzip data");
    var t = e[3],
      r = 10;
    t & 4 && (r += (e[10] | (e[11] << 8)) + 2);
    for (var o = ((t >> 3) & 1) + ((t >> 4) & 1); o > 0; o -= !e[r++]);
    return r + (t & 2);
  },
  Tce = function (e) {
    var t = e.length;
    return (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0;
  },
  Cce = function (e, t) {
    return (
      ((e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31) &&
        Nn(6, "invalid zlib data"),
      ((e[1] >> 5) & 1) == +!t &&
        Nn(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"),
      ((e[1] >> 3) & 4) + 2
    );
  };
function Ece(e, t) {
  return Wh(e, { i: 2 }, t, t);
}
function Lce(e, t) {
  var r = kce(e);
  return (
    r + 8 > e.length && Nn(6, "invalid gzip data"),
    Wh(e.subarray(r, -8), { i: 2 }, new Un(Tce(e)), t)
  );
}
function Ace(e, t) {
  return Wh(e.subarray(Cce(e, t), -4), { i: 2 }, t, t);
}
function Mce(e, t) {
  return e[0] == 31 && e[1] == 139 && e[2] == 8
    ? Lce(e, t)
    : (e[0] & 15) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31
      ? Ece(e, t)
      : Ace(e, t);
}
var zd = typeof TextDecoder < "u" && new TextDecoder(),
  Nce = 0;
try {
  zd.decode(Sce, { stream: !0 }), (Nce = 1);
} catch {}
var $ce = function (e) {
  for (var t = "", r = 0; ; ) {
    var o = e[r++],
      s = (o > 127) + (o > 223) + (o > 239);
    if (r + s > e.length) return { s: t, r: Lw(e, r - 1) };
    s
      ? s == 3
        ? ((o =
            (((o & 15) << 18) | ((e[r++] & 63) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)) -
            65536),
          (t += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
        : s & 1
          ? (t += String.fromCharCode(((o & 31) << 6) | (e[r++] & 63)))
          : (t += String.fromCharCode(((o & 15) << 12) | ((e[r++] & 63) << 6) | (e[r++] & 63)))
      : (t += String.fromCharCode(o));
  }
};
function Oce(e, t) {
  var r;
  if (zd) return zd.decode(e);
  var o = $ce(e),
    s = o.s,
    r = o.r;
  return r.length && Nn(8), s;
}
const ed = () => {},
  un = () => Promise.resolve();
function Pce() {
  const e = Qn({ state: new Zb(), waitForConnection: f, reconnect: s, ws: new EventTarget() });
  (e.state.filesMap = Qn(e.state.filesMap)), (e.state.idMap = Qn(e.state.idMap));
  let t;
  const r = {
    getFiles: () => t.files,
    getPaths: () => t.paths,
    getConfig: () => t.config,
    getModuleGraph: async (d, h) => {
      var p;
      return (p = t.moduleGraph[d]) == null ? void 0 : p[h];
    },
    getUnhandledErrors: () => t.unhandledErrors,
    getTransformResult: un,
    onDone: ed,
    onCollected: un,
    onTaskUpdate: ed,
    writeFile: un,
    rerun: un,
    updateSnapshot: un,
    resolveSnapshotPath: un,
    snapshotSaved: un,
    onAfterSuiteRun: un,
    onCancel: un,
    getCountOfFailedTests: () => 0,
    sendLog: un,
    resolveSnapshotRawPath: un,
    readSnapshotFile: un,
    saveSnapshotFile: un,
    readTestFile: async (d) => t.sources[d],
    removeSnapshotFile: un,
    onUnhandledError: ed,
    saveTestFile: un,
    getProvidedContext: () => ({}),
    getTestFiles: un,
  };
  e.rpc = r;
  let o;
  function s() {
    c();
  }
  async function c() {
    var v;
    const d = await fetch(window.METADATA_PATH),
      h = ((v = d.headers.get("content-type")) == null ? void 0 : v.toLowerCase()) || "";
    if (h.includes("application/gzip") || h.includes("application/x-gzip")) {
      const y = new Uint8Array(await d.arrayBuffer()),
        b = Oce(Mce(y));
      t = $d(b);
    } else t = $d(await d.text());
    const p = new Event("open");
    e.ws.dispatchEvent(p);
  }
  c();
  function f() {
    return o;
  }
  return e;
}
const Xc = je("idle"),
  Rce = $e(() => Xc.value === "idle"),
  Ri = je([]);
function Pu(e) {
  return Object.hasOwnProperty.call(e, "tasks");
}
function Dce(e, t) {
  return typeof e != "string" || typeof t != "string"
    ? !1
    : e.toLowerCase().includes(t.toLowerCase());
}
function Aw(e) {
  if (!e) return "";
  const t = e.split("").reduce((o, s, c) => o + s.charCodeAt(0) + c, 0),
    r = ["blue", "yellow", "cyan", "green", "magenta"];
  return r[t % r.length];
}
function zce(e) {
  return e.type === "test" || e.type === "custom";
}
function Ice(e) {
  return e.mode === "run" && (e.type === "test" || e.type === "custom");
}
function tr(e) {
  return e.type === "file";
}
function Fce(e) {
  return e.type === "suite";
}
function to(e) {
  return e.type === "file" || e.type === "suite";
}
function Uh(e, t = !1) {
  var o, s, c, f;
  let r = Le.nodes.get(e.id);
  if (
    (r
      ? ((r.state = (o = e.result) == null ? void 0 : o.state),
        (r.mode = e.mode),
        (r.duration = (s = e.result) == null ? void 0 : s.duration),
        (r.collectDuration = e.collectDuration),
        (r.setupDuration = e.setupDuration),
        (r.environmentLoad = e.environmentLoad),
        (r.prepareDuration = e.prepareDuration))
      : ((r = {
          id: e.id,
          parentId: "root",
          name: e.name,
          mode: e.mode,
          expandable: !0,
          expanded: Zc.value.size > 0 && Zc.value.has(e.id),
          type: "file",
          children: new Set(),
          tasks: [],
          indent: 0,
          duration: (c = e.result) == null ? void 0 : c.duration,
          filepath: e.filepath,
          projectName: e.projectName || "",
          projectNameColor: Aw(e.projectName),
          collectDuration: e.collectDuration,
          setupDuration: e.setupDuration,
          environmentLoad: e.environmentLoad,
          prepareDuration: e.prepareDuration,
          state: (f = e.result) == null ? void 0 : f.state,
        }),
        Le.nodes.set(e.id, r),
        Le.root.tasks.push(r)),
    t)
  )
    for (let d = 0; d < e.tasks.length; d++) ua(e.id, e.tasks[d], !0);
}
function Mw(e, t) {
  const r = Le.nodes.get(e);
  if (!r || !to(r)) return;
  const o = bt.state.idMap.get(e);
  if (!(!o || !Pu(o))) return ua(r.parentId, o, t && o.tasks.length > 0), [r, o];
}
function Hce(e) {
  const t = Le.nodes.get(e);
  if (!t) return;
  const r = bt.state.idMap.get(e);
  !r || !Ts(r) || ua(t.parentId, r, !1);
}
function ua(e, t, r) {
  var c, f, d, h, p, v;
  const o = Le.nodes.get(e);
  let s;
  if (
    o &&
    ((s = Le.nodes.get(t.id)),
    s
      ? (o.children.has(t.id) || (o.tasks.push(s), o.children.add(t.id)),
        (s.mode = t.mode),
        (s.duration = (c = t.result) == null ? void 0 : c.duration),
        (s.state = (f = t.result) == null ? void 0 : f.state),
        Fce(s) && (s.typecheck = !!t.meta && "typecheck" in t.meta))
      : (Ts(t)
          ? (s = {
              id: t.id,
              parentId: e,
              name: t.name,
              mode: t.mode,
              type: t.type,
              expandable: !1,
              expanded: !1,
              indent: o.indent + 1,
              duration: (d = t.result) == null ? void 0 : d.duration,
              state: (h = t.result) == null ? void 0 : h.state,
            })
          : (s = {
              id: t.id,
              parentId: e,
              name: t.name,
              mode: t.mode,
              typecheck: !!t.meta && "typecheck" in t.meta,
              type: "suite",
              expandable: !0,
              expanded: Zc.value.size > 0 && Zc.value.has(t.id),
              children: new Set(),
              tasks: [],
              indent: o.indent + 1,
              duration: (p = t.result) == null ? void 0 : p.duration,
              state: (v = t.result) == null ? void 0 : v.state,
            }),
        Le.nodes.set(t.id, s),
        o.tasks.push(s),
        o.children.add(t.id)),
    s && r && Pu(t))
  )
    for (let y = 0; y < t.tasks.length; y++) ua(s.id, t.tasks[y], r);
}
function qce(e, t, r) {
  return e ? Ow(e, t, r) : !1;
}
function Vh(e, t) {
  const r = [...Nw(e, t)];
  (Dn.value = r), (Ru.value = r.filter(tr).map((o) => _r(o.id)));
}
function* Nw(e, t) {
  for (const r of Le.root.tasks) yield* $w(r, e, t);
}
function* $w(e, t, r) {
  const o = new Set(),
    s = [];
  for (const p of Pw(e, o, (v) => Vce(v, t, r))) s.push(p);
  const c = new Set(),
    f = [...Wce(s, r.onlyTests, o, c)].reverse(),
    d = Le.nodes,
    h = new Set(
      f
        .filter((p) => {
          var v;
          return tr(p) || (to(p) && ((v = d.get(p.parentId)) == null ? void 0 : v.expanded));
        })
        .map((p) => p.id),
    );
  yield* f.filter((p) => {
    var v;
    return tr(p) || (h.has(p.parentId) && ((v = d.get(p.parentId)) == null ? void 0 : v.expanded));
  });
}
function Bce(e, t, r, o, s) {
  if (o) {
    if (tr(t)) return s.has(t.id) ? t : void 0;
    if (r.has(t.id)) {
      const c = Le.nodes.get(t.parentId);
      return c && tr(c) && s.add(c.id), t;
    }
  } else if (e || r.has(t.id) || s.has(t.id)) {
    const c = Le.nodes.get(t.parentId);
    return c && tr(c) && s.add(c.id), t;
  }
}
function* Wce(e, t, r, o) {
  for (let s = e.length - 1; s >= 0; s--) {
    const [c, f] = e[s];
    if (to(f)) {
      const d = Bce(c, f, r, t, o);
      d && (yield d);
    } else if (c) {
      const d = Le.nodes.get(f.parentId);
      d && tr(d) && o.add(d.id), yield f;
    }
  }
}
function Uce(e, t) {
  var r, o;
  return (t.success || t.failed) &&
    "result" in e &&
    ((t.success && ((r = e.result) == null ? void 0 : r.state) === "pass") ||
      (t.failed && ((o = e.result) == null ? void 0 : o.state) === "fail"))
    ? !0
    : t.skipped && "mode" in e
      ? e.mode === "skip" || e.mode === "todo"
      : !1;
}
function Ow(e, t, r) {
  if (t.length === 0 || Dce(e.name, t))
    if (r.success || r.failed || r.skipped) {
      if (Uce(e, r)) return !0;
    } else return !0;
  return !1;
}
function* Pw(e, t, r) {
  const o = r(e);
  if (o)
    if (zce(e)) {
      let s = Le.nodes.get(e.parentId);
      for (; s; ) t.add(s.id), (s = Le.nodes.get(s.parentId));
    } else if (tr(e)) t.add(e.id);
    else {
      t.add(e.id);
      let s = Le.nodes.get(e.parentId);
      for (; s; ) t.add(s.id), (s = Le.nodes.get(s.parentId));
    }
  if ((yield [o, e], to(e))) for (let s = 0; s < e.tasks.length; s++) yield* Pw(e.tasks[s], t, r);
}
function Vce(e, t, r) {
  const o = bt.state.idMap.get(e.id);
  return o ? Ow(o, t, r) : !1;
}
function jce(e, t, r) {
  const o = Mw(e, !1);
  if (!o) return;
  const [s, c] = o;
  for (const p of c.tasks) ua(s.id, p, !1);
  s.expanded = !0;
  const f = new Set(xr.value);
  f.add(s.id);
  const d = new Set($w(s, t, r)),
    h = [...Xce(s, d)];
  (xr.value = Array.from(f)), (Dn.value = h);
}
function Gce(e, t) {
  jh(Le.root.tasks, !1);
  const r = [...Nw(e, t)];
  (on.value.expandAll = !1),
    (xr.value = []),
    (Dn.value = r),
    (Ru.value = r.filter(tr).map((o) => _r(o.id)));
}
function Kce(e, t) {
  if (e.size) for (const r of Dn.value) e.has(r.id) && (r.expanded = !0);
  else t && jh(Dn.value.filter(tr), !0);
}
function jh(e, t) {
  for (const r of e) to(r) && ((r.expanded = !0), jh(r.tasks, !1));
  t && ((on.value.expandAll = !1), (xr.value = []));
}
function* Xce(e, t) {
  const r = e.id,
    o = new Set(Array.from(t).map((s) => s.id));
  for (const s of Dn.value)
    s.id === r ? ((s.expanded = !0), o.has(s.id) || (yield e), yield* t) : o.has(s.id) || (yield s);
}
function Yce(e, t, r, o) {
  e
    .map((s) => [`${s.filepath}:${s.projectName || ""}`, s])
    .sort(([s], [c]) => s.localeCompare(c))
    .map(([, s]) => Uh(s, t)),
    (Yc.value = [...Le.root.tasks]),
    Vh(r.trim(), {
      failed: o.failed,
      success: o.success,
      skipped: o.skipped,
      onlyTests: o.onlyTests,
    });
}
function Zce(e) {
  queueMicrotask(() => {
    const t = Le.pendingTasks,
      r = bt.state.idMap;
    for (const o of e)
      if (o[1]) {
        const c = r.get(o[0]);
        if (c) {
          let f = t.get(c.file.id);
          f || ((f = new Set()), t.set(c.file.id, f)), f.add(c.id);
        }
      }
  });
}
function t0(e, t, r, o, s) {
  e && rue(r);
  const c = !e;
  queueMicrotask(() => {
    t ? eue(c) : tue(c);
  }),
    queueMicrotask(() => {
      iue(r);
    }),
    queueMicrotask(() => {
      t &&
        ((r.failedSnapshot = Yc.value && Fh(Yc.value.map((f) => _r(f.id)))),
        (r.failedSnapshotEnabled = !0));
    }),
    queueMicrotask(() => {
      nue(o, s, t);
    });
}
function* Jce() {
  yield* Dn.value.filter(Ice);
}
function Qce() {
  const e = bt.state.idMap;
  let t;
  for (const r of Jce())
    (t = e.get(r.parentId)),
      t && Pu(t) && t.mode === "todo" && ((t = e.get(r.id)), t && (t.mode = "todo"));
}
function eue(e) {
  const t = Le.root.tasks;
  for (let r = 0; r < t.length; r++) {
    const o = t[r],
      s = _r(o.id);
    if (!s) continue;
    Uh(s, e);
    const c = s.tasks;
    c != null && c.length && Rw(s.tasks);
  }
}
function tue(e) {
  const t = Le.root.tasks,
    r = new Map(Le.pendingTasks.entries());
  Le.pendingTasks.clear();
  const o = bt.state.idMap;
  for (let s = 0; s < t.length; s++) {
    const c = t[s],
      f = _r(c.id);
    if (!f) continue;
    const d = r.get(f.id);
    d &&
      (Uh(f, e),
      Rw(
        Array.from(d)
          .map((h) => o.get(h))
          .filter(Boolean),
      ));
  }
}
function nue(e, t, r = !1) {
  const o = on.value.expandAll,
    s = o !== !0,
    c = new Set(xr.value),
    f = (c.size > 0 && o === !1) || s;
  queueMicrotask(() => {
    n0(e, t, r);
  }),
    Cs.value ||
      queueMicrotask(() => {
        (Dn.value.length || r) && (Cs.value = !0);
      }),
    f &&
      (queueMicrotask(() => {
        Kce(c, r), s && (on.value.expandAll = !1);
      }),
      queueMicrotask(() => {
        n0(e, t, r);
      }));
}
function n0(e, t, r) {
  Vh(e, t), r && Qce();
}
function Rw(e) {
  let t;
  for (let r = 0; r < e.length; r++) (t = e[r]), Pu(t) ? Mw(t.id, !0) : Hce(t.id);
}
function rue(e) {
  (e.files = 0),
    (e.time = ""),
    (e.filesFailed = 0),
    (e.filesSuccess = 0),
    (e.filesIgnore = 0),
    (e.filesRunning = 0),
    (e.filesSkipped = 0),
    (e.filesTodo = 0),
    (e.testsFailed = 0),
    (e.testsSuccess = 0),
    (e.testsIgnore = 0),
    (e.testsSkipped = 0),
    (e.testsTodo = 0),
    (e.totalTests = 0),
    (e.failedSnapshotEnabled = !1);
}
function iue(e) {
  var f, d, h, p, v;
  const t = bt.state.idMap,
    r = new Map(Le.root.tasks.filter((y) => t.has(y.id)).map((y) => [y.id, y])),
    o = Array.from(r.values()).map((y) => [y.id, _r(y.id)]),
    s = {
      files: r.size,
      time: "",
      filesFailed: 0,
      filesSuccess: 0,
      filesIgnore: 0,
      filesRunning: 0,
      filesSkipped: 0,
      filesTodo: 0,
      filesSnapshotFailed: 0,
      testsFailed: 0,
      testsSuccess: 0,
      testsIgnore: 0,
      testsSkipped: 0,
      testsTodo: 0,
      totalTests: 0,
      failedSnapshot: !1,
      failedSnapshotEnabled: !1,
    };
  let c = 0;
  for (const [y, b] of o) {
    if (!b) continue;
    const x = r.get(y);
    x &&
      ((x.mode = b.mode),
      (x.setupDuration = b.setupDuration),
      (x.prepareDuration = b.prepareDuration),
      (x.environmentLoad = b.environmentLoad),
      (x.collectDuration = b.collectDuration),
      (x.duration = (f = b.result) == null ? void 0 : f.duration),
      (x.state = (d = b.result) == null ? void 0 : d.state)),
      (c += Math.max(0, b.collectDuration || 0)),
      (c += Math.max(0, b.setupDuration || 0)),
      (c += Math.max(0, ((h = b.result) == null ? void 0 : h.duration) || 0)),
      (c += Math.max(0, b.environmentLoad || 0)),
      (c += Math.max(0, b.prepareDuration || 0)),
      (s.time = c > 1e3 ? `${(c / 1e3).toFixed(2)}s` : `${Math.round(c)}ms`),
      ((p = b.result) == null ? void 0 : p.state) === "fail"
        ? s.filesFailed++
        : ((v = b.result) == null ? void 0 : v.state) === "pass"
          ? s.filesSuccess++
          : b.mode === "skip"
            ? (s.filesIgnore++, s.filesSkipped++)
            : b.mode === "todo"
              ? (s.filesIgnore++, s.filesTodo++)
              : s.filesRunning++;
    const { failed: C, success: E, skipped: N, total: M, ignored: L, todo: D } = Dw(b);
    (s.totalTests += M),
      (s.testsFailed += C),
      (s.testsSuccess += E),
      (s.testsSkipped += N),
      (s.testsTodo += D),
      (s.testsIgnore += L);
  }
  (e.files = s.files),
    (e.time = s.time),
    (e.filesFailed = s.filesFailed),
    (e.filesSuccess = s.filesSuccess),
    (e.filesIgnore = s.filesIgnore),
    (e.filesRunning = s.filesRunning),
    (e.filesSkipped = s.filesSkipped),
    (e.filesTodo = s.filesTodo),
    (e.testsFailed = s.testsFailed),
    (e.testsSuccess = s.testsSuccess),
    (e.testsFailed = s.testsFailed),
    (e.testsTodo = s.testsTodo),
    (e.testsIgnore = s.testsIgnore),
    (e.testsSkipped = s.testsSkipped),
    (e.totalTests = s.totalTests);
}
function Dw(e, t = "", r) {
  var s, c;
  const o = { failed: 0, success: 0, skipped: 0, running: 0, total: 0, ignored: 0, todo: 0 };
  for (const f of zw(e))
    (!r || qce(f, t, r)) &&
      (o.total++,
      ((s = f.result) == null ? void 0 : s.state) === "fail"
        ? o.failed++
        : ((c = f.result) == null ? void 0 : c.state) === "pass"
          ? o.success++
          : f.mode === "skip"
            ? (o.ignored++, o.skipped++)
            : f.mode === "todo" && (o.ignored++, o.todo++));
  return (o.running = o.total - o.failed - o.success - o.ignored), o;
}
function oue(e, t, r, o, s, c) {
  var f, d;
  if (t)
    return r
      .map((h) => Dw(h, s, c))
      .reduce(
        (h, { failed: p, success: v, ignored: y, running: b }) => (
          (h.failed += p), (h.success += v), (h.skipped += y), (h.running += b), h
        ),
        { failed: 0, success: 0, skipped: 0, running: 0 },
      );
  if (e) {
    const h = { failed: 0, success: 0, skipped: 0, running: 0 },
      p = !c.success && !c.failed,
      v = c.failed || p,
      y = c.success || p;
    for (const b of r)
      ((f = b.result) == null ? void 0 : f.state) === "fail"
        ? (h.failed += v ? 1 : 0)
        : ((d = b.result) == null ? void 0 : d.state) === "pass"
          ? (h.success += y ? 1 : 0)
          : b.mode === "skip" || b.mode === "todo" || h.running++;
    return h;
  }
  return o;
}
function* zw(e) {
  const t = Rh(e);
  let r;
  for (let o = 0; o < t.length; o++) (r = t[o]), Ts(r) ? yield r : yield* zw(r.tasks);
}
function sue(e) {
  const t = Le.nodes.get(e);
  if (!t || !to(t)) return;
  const r = new Set(xr.value);
  r.delete(t.id);
  const o = [...aue(t)];
  (xr.value = Array.from(r)), (Dn.value = o);
}
function lue() {
  Id(Le.root.tasks);
  const e = [...Dn.value.filter(tr)];
  Id(e), (xr.value = []), (on.value.expandAll = !0), (Dn.value = e);
}
function Id(e) {
  for (const t of e) to(t) && ((t.expanded = !1), Id(t.tasks));
}
function* Iw(e, t) {
  if ((t && (yield e.id), to(e)))
    for (let r = 0; r < e.tasks.length; r++) yield* Iw(e.tasks[r], !0);
}
function* aue(e) {
  const t = e.id,
    r = new Set(Iw(e, !1));
  for (let o = 0; o < Dn.value.length; o++) {
    const s = Dn.value[o];
    if (s.id === t) {
      (s.expanded = !1), yield s;
      continue;
    }
    if (r.has(s.id)) {
      r.delete(s.id);
      continue;
    }
    yield s;
  }
}
class cue {
  constructor(
    t = !1,
    r = 500,
    o = { id: "vitest-root-node", expandable: !0, expanded: !0, tasks: [] },
    s = new Map(),
    c = new Map(),
    f = Qn({
      files: 0,
      time: "",
      filesFailed: 0,
      filesSuccess: 0,
      filesIgnore: 0,
      filesRunning: 0,
      filesSkipped: 0,
      filesSnapshotFailed: 0,
      filesTodo: 0,
      testsFailed: 0,
      testsSuccess: 0,
      testsIgnore: 0,
      testsSkipped: 0,
      testsTodo: 0,
      totalTests: 0,
      failedSnapshot: !1,
      failedSnapshotEnabled: !1,
    }),
  ) {
    Xr(this, "rafCollector");
    Xr(this, "resumeEndRunId");
    (this.onTaskUpdateCalled = t),
      (this.resumeEndTimeout = r),
      (this.root = o),
      (this.pendingTasks = s),
      (this.nodes = c),
      (this.summary = f),
      (this.rafCollector = nL(this.runCollect.bind(this), { fpsLimit: 10, immediate: !1 }));
  }
  loadFiles(t) {
    Yce(t, !0, $n.value.trim(), {
      failed: Qe.failed,
      success: Qe.success,
      skipped: Qe.skipped,
      onlyTests: Qe.onlyTests,
    });
  }
  startRun() {
    (this.resumeEndRunId = setTimeout(() => this.endRun(), this.resumeEndTimeout)),
      this.collect(!0, !1);
  }
  resumeRun(t) {
    Zce(t),
      this.onTaskUpdateCalled ||
        (clearTimeout(this.resumeEndRunId),
        (this.onTaskUpdateCalled = !0),
        this.collect(!0, !1, !1),
        this.rafCollector.resume());
  }
  endRun() {
    this.rafCollector.pause(), (this.onTaskUpdateCalled = !1), this.collect(!1, !0);
  }
  runCollect() {
    this.collect(!1, !1);
  }
  collect(t, r, o = !0) {
    o
      ? queueMicrotask(() => {
          t0(t, r, this.summary, $n.value.trim(), {
            failed: Qe.failed,
            success: Qe.success,
            skipped: Qe.skipped,
            onlyTests: Qe.onlyTests,
          });
        })
      : t0(t, r, this.summary, $n.value.trim(), {
          failed: Qe.failed,
          success: Qe.success,
          skipped: Qe.skipped,
          onlyTests: Qe.onlyTests,
        });
  }
  collectTestsTotal(t, r, o, s) {
    return oue(t, r, o, s, $n.value.trim(), {
      failed: Qe.failed,
      success: Qe.success,
      skipped: Qe.skipped,
      onlyTests: Qe.onlyTests,
    });
  }
  collapseNode(t) {
    queueMicrotask(() => {
      sue(t);
    });
  }
  expandNode(t) {
    queueMicrotask(() => {
      jce(t, $n.value.trim(), {
        failed: Qe.failed,
        success: Qe.success,
        skipped: Qe.skipped,
        onlyTests: Qe.onlyTests,
      });
    });
  }
  collapseAllNodes() {
    queueMicrotask(() => {
      lue();
    });
  }
  expandAllNodes() {
    queueMicrotask(() => {
      Gce($n.value.trim(), {
        failed: Qe.failed,
        success: Qe.success,
        skipped: Qe.skipped,
        onlyTests: Qe.onlyTests,
      });
    });
  }
  filterNodes() {
    queueMicrotask(() => {
      Vh($n.value.trim(), {
        failed: Qe.failed,
        success: Qe.success,
        skipped: Qe.skipped,
        onlyTests: Qe.onlyTests,
      });
    });
  }
}
const Le = new cue(),
  Yc = Fr([]),
  Dn = Fr([]),
  xr = Nu("vitest-ui_task-tree-opened", [], { shallow: !0 }),
  Zc = $e(() => new Set(xr.value)),
  on = Nu("vitest-ui_task-tree-filter", {
    expandAll: void 0,
    failed: !1,
    success: !1,
    skipped: !1,
    onlyTests: !1,
    search: "",
  }),
  $n = je(on.value.search),
  Fw = $e(() => $n.value.trim() !== ""),
  Qe = Qn({
    failed: on.value.failed,
    success: on.value.success,
    skipped: on.value.skipped,
    onlyTests: on.value.onlyTests,
  }),
  Fd = $e(() => !!(Qe.failed || Qe.success || Qe.skipped)),
  Ru = Fr([]),
  Cs = je(!1),
  r0 = $e(() => {
    const e = on.value.expandAll;
    return xr.value.length > 0 ? e !== !0 : e !== !1;
  }),
  uue = $e(() => {
    const e = Fw.value,
      t = Fd.value,
      r = Qe.onlyTests,
      o = Le.summary.filesFailed,
      s = Le.summary.filesSuccess,
      c = Le.summary.filesSkipped,
      f = Le.summary.filesRunning,
      d = Ru.value;
    return Le.collectTestsTotal(e || t, r, d, { failed: o, success: s, skipped: c, running: f });
  }),
  bt = (function () {
    return Pr
      ? Pce()
      : pL(mL, {
          reactive: (t, r) => (r === "state" ? Qn(t) : Fr(t)),
          handlers: {
            onTaskUpdate(t) {
              Le.resumeRun(t), (Xc.value = "running");
            },
            onFinished(t, r) {
              Le.endRun(), (Xc.value = "idle"), (Ri.value = (r || []).map(xw));
            },
            onFinishedReportCoverage() {
              const t = document.querySelector("iframe#vitest-ui-coverage");
              t instanceof HTMLIFrameElement &&
                t.contentWindow &&
                t.contentWindow.location.reload();
            },
          },
        });
  })(),
  Du = Fr({}),
  So = je("CONNECTING"),
  Xt = $e(() => {
    const e = Gi.value,
      t = Yc.value.find((r) => r.id === e);
    return t ? _r(t.id) : void 0;
  }),
  Hw = $e(
    () =>
      Ih(Xt.value)
        .map((e) => (e == null ? void 0 : e.logs) || [])
        .flat() || [],
  );
function _r(e) {
  const t = bt.state.idMap.get(e);
  return t || void 0;
}
const fue = $e(() => So.value === "OPEN"),
  td = $e(() => So.value === "CONNECTING");
$e(() => So.value === "CLOSED");
function due() {
  return Gh(bt.state.getFiles());
}
function hue(e) {
  const t = Le.nodes;
  e.forEach((r) => {
    delete r.result,
      Ih(r).forEach((s) => {
        if ((delete s.result, t.has(s.id))) {
          const c = t.get(s.id);
          c && ((c.state = void 0), (c.duration = void 0));
        }
      });
    const o = t.get(r.id);
    o && ((o.state = void 0), (o.duration = void 0), tr(o) && (o.collectDuration = void 0));
  });
}
function Gh(e) {
  return hue(e), Le.startRun(), bt.rpc.rerun(e.map((t) => t.filepath));
}
const Yl = window.__vitest_browser_runner__;
qt(
  () => bt.ws,
  (e) => {
    (So.value = Pr ? "OPEN" : "CONNECTING"),
      e.addEventListener("open", async () => {
        (So.value = "OPEN"), bt.state.filesMap.clear();
        const [t, r, o] = await Promise.all([
          bt.rpc.getFiles(),
          bt.rpc.getConfig(),
          bt.rpc.getUnhandledErrors(),
        ]);
        if (r.standalone) {
          const c = (await bt.rpc.getTestFiles()).map(([{ name: f, root: d }, h]) => Pd(h, d, f));
          bt.state.collectFiles(c);
        } else Le.loadFiles(t), bt.state.collectFiles(t), Le.startRun();
        (Ri.value = (o || []).map(xw)), (Du.value = r);
      }),
      e.addEventListener("close", () => {
        setTimeout(() => {
          So.value === "CONNECTING" && (So.value = "CLOSED");
        }, 1e3);
      });
  },
  { immediate: !0 },
);
const pue = { "text-2xl": "" },
  gue = { "text-lg": "", op50: "" },
  vue = gt({
    __name: "ConnectionOverlay",
    setup(e) {
      return (t, r) =>
        B(fue)
          ? rt("", !0)
          : (le(),
            be(
              "div",
              {
                key: 0,
                fixed: "",
                "inset-0": "",
                p2: "",
                "z-10": "",
                "select-none": "",
                text: "center sm",
                bg: "overlay",
                "backdrop-blur-sm": "",
                "backdrop-saturate-0": "",
                onClick: r[0] || (r[0] = (...o) => B(bt).reconnect && B(bt).reconnect(...o)),
              },
              [
                Y(
                  "div",
                  {
                    "h-full": "",
                    flex: "~ col gap-2",
                    "items-center": "",
                    "justify-center": "",
                    class: st(B(td) ? "animate-pulse" : ""),
                  },
                  [
                    Y(
                      "div",
                      {
                        text: "5xl",
                        class: st(
                          B(td)
                            ? "i-carbon:renew animate-spin animate-reverse"
                            : "i-carbon-wifi-off",
                        ),
                      },
                      null,
                      2,
                    ),
                    Y("div", pue, qe(B(td) ? "Connecting..." : "Disconnected"), 1),
                    Y(
                      "div",
                      gue,
                      " Check your terminal or start a new server with `" +
                        qe(
                          B(Yl) ? `vitest --browser=${B(Yl).config.browser.name}` : "vitest --ui",
                        ) +
                        "` ",
                      1,
                    ),
                  ],
                  2,
                ),
              ],
            ));
    },
  }),
  mue = ["aria-label", "opacity", "disabled", "hover"],
  $o = gt({
    __name: "IconButton",
    props: { icon: {}, title: {}, disabled: { type: Boolean }, active: { type: Boolean } },
    setup(e) {
      return (t, r) => (
        le(),
        be(
          "button",
          {
            "aria-label": t.title,
            role: "button",
            opacity: t.disabled ? 10 : 70,
            rounded: "",
            disabled: t.disabled,
            hover: t.disabled || t.active ? "" : "bg-active op100",
            class: st(["w-1.4em h-1.4em flex", [{ "bg-gray-500:35 op100": t.active }]]),
          },
          [
            hn(t.$slots, "default", {}, () => [
              Y("span", { class: st(t.icon), ma: "", block: "" }, null, 2),
            ]),
          ],
          10,
          mue,
        )
      );
    },
  }),
  Jr = je("full"),
  Hd = je();
function nd(e) {
  const t = document.querySelector("#tester-ui");
  t && (t.style.pointerEvents = e ? "none" : "");
}
const Es = je(),
  vs = je(!0),
  Xi = je(!1),
  Jc = je(!0),
  as = $e(() => {
    var e;
    return (e = Du.value) == null ? void 0 : e.coverage;
  }),
  qd = $e(() => {
    var e;
    return (e = as.value) == null ? void 0 : e.enabled;
  }),
  cs = $e(() => qd.value && as.value.reporter.map(([e]) => e).includes("html")),
  Sc = Nu("vitest-ui_splitpanes-detailSizes", [33, 67], { initOnMounted: !0 }),
  i0 = $e(() => {
    if (cs.value) {
      const e = as.value.reportsDirectory.lastIndexOf("/"),
        t = as.value.reporter.find((r) => {
          if (r[0] === "html") return r;
        });
      return t && "subdir" in t[1]
        ? `/${as.value.reportsDirectory.slice(e + 1)}/${t[1].subdir}/index.html`
        : `/${as.value.reportsDirectory.slice(e + 1)}/index.html`;
    }
  });
qt(
  Xc,
  (e) => {
    Jc.value = e === "running";
  },
  { immediate: !0 },
);
function yue() {
  const e = Gi.value;
  if (e && e.length > 0) {
    const t = _r(e);
    t
      ? ((Es.value = t), (vs.value = !1), (Xi.value = !1))
      : ZE(
          () => bt.state.getFiles(),
          () => {
            (Es.value = _r(e)), (vs.value = !1), (Xi.value = !1);
          },
        );
  }
  return vs;
}
function Qc(e) {
  (vs.value = e), (Xi.value = !1), e && ((Es.value = void 0), (Gi.value = ""));
}
function qw(e, t = null) {
  (Gi.value = e.file.id),
    (Od.value = null),
    t != null &&
      (ln(() => {
        Od.value = t;
      }),
      (Hn.value = "editor")),
    (Es.value = _r(e.file.id)),
    Qc(!1);
}
function bue() {
  (Xi.value = !0), (vs.value = !1), (Es.value = void 0), (Gi.value = "");
}
const wue = {
  setCurrentFileId(e) {
    (Gi.value = e), (Es.value = _r(e)), Qc(!1);
  },
  async setIframeViewport(e, t) {
    (Jr.value = "custom"), (Hd.value = [e, t]), await Bw(e, t);
  },
};
window.__vitest_ui_api__ = wue;
function xue() {
  const e = Kh(),
    r = document.querySelector("#details-splitpanes").clientWidth,
    o = e.clientWidth,
    s = Math.min((o / r) * 100, 95),
    c = 100 - s;
  Sc.value = [s, c];
}
function Kh() {
  return document.querySelector("#tester-ui iframe[data-vitest]");
}
async function Bw(e, t) {
  const r = Kh();
  (r.style.width = typeof e == "string" ? e : `${e}px`),
    (r.style.height = typeof t == "string" ? t : `${t}px`),
    await new Promise((o) => requestAnimationFrame(o)),
    xue();
}
const _ue = { h: "full", flex: "~ col" },
  Sue = Y(
    "div",
    { p: "3", "h-10": "", flex: "~ gap-2", "items-center": "", "bg-header": "", border: "b base" },
    [
      Y("div", { class: "i-carbon-content-delivery-network" }),
      Y(
        "span",
        {
          "pl-1": "",
          "font-bold": "",
          "text-sm": "",
          "flex-auto": "",
          "ws-nowrap": "",
          "overflow-hidden": "",
          truncate: "",
        },
        "Browser UI",
      ),
    ],
    -1,
  ),
  kue = { p: "l3 y2 r2", flex: "~ gap-2", "items-center": "", "bg-header": "", border: "b-2 base" },
  Tue = Y(
    "div",
    { "flex-auto": "", class: "scrolls" },
    [
      Y(
        "div",
        {
          id: "tester-ui",
          class: "flex h-full justify-center items-center font-light op70",
          style: { overflow: "auto", width: "100%", height: "100%" },
        },
        " Select a test to run ",
      ),
    ],
    -1,
  ),
  Cue = gt({
    __name: "BrowserIframe",
    setup(e) {
      const t = {
        "small-mobile": ["320px", "568px"],
        "large-mobile": ["414px", "896px"],
        tablet: ["834px", "1112px"],
        full: ["100%", "100%"],
        custom: null,
      };
      async function r(o) {
        if ((Jr.value === o ? (Jr.value = Hd.value ? "custom" : "full") : (Jr.value = o), !Kh())) {
          console.warn("Iframe not found");
          return;
        }
        const [c, f] = t[Jr.value] || Hd.value || t.full;
        await Bw(c, f);
      }
      return (o, s) => {
        const c = $o,
          f = ci("tooltip");
        return (
          le(),
          be("div", _ue, [
            Sue,
            Y("div", kue, [
              kt(
                Pe(
                  c,
                  {
                    title: "Flexible",
                    icon: "i-carbon:fit-to-screen",
                    active: B(Jr) === "full",
                    onClick: s[0] || (s[0] = (d) => r("full")),
                  },
                  null,
                  8,
                  ["active"],
                ),
                [[f, "Flexible", void 0, { bottom: !0 }]],
              ),
              kt(
                Pe(
                  c,
                  {
                    title: "Small mobile",
                    icon: "i-carbon:mobile",
                    active: B(Jr) === "small-mobile",
                    onClick: s[1] || (s[1] = (d) => r("small-mobile")),
                  },
                  null,
                  8,
                  ["active"],
                ),
                [[f, "Small mobile", void 0, { bottom: !0 }]],
              ),
              kt(
                Pe(
                  c,
                  {
                    title: "Large mobile",
                    icon: "i-carbon:mobile-add",
                    active: B(Jr) === "large-mobile",
                    onClick: s[2] || (s[2] = (d) => r("large-mobile")),
                  },
                  null,
                  8,
                  ["active"],
                ),
                [[f, "Large mobile", void 0, { bottom: !0 }]],
              ),
              kt(
                Pe(
                  c,
                  {
                    title: "Tablet",
                    icon: "i-carbon:tablet",
                    active: B(Jr) === "tablet",
                    onClick: s[3] || (s[3] = (d) => r("tablet")),
                  },
                  null,
                  8,
                  ["active"],
                ),
                [[f, "Tablet", void 0, { bottom: !0 }]],
              ),
            ]),
            Tue,
          ])
        );
      };
    },
  });
function Ol(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
const fa = aL(),
  Eue = YE(fa),
  Lue = { class: "scrolls scrolls-rounded task-error" },
  Aue = ["onClickPassive"],
  Mue = ["innerHTML"],
  Nue = gt({
    __name: "ViewReportError",
    props: { root: {}, filename: {}, error: {} },
    setup(e) {
      const t = e;
      function r(f) {
        return f.startsWith(t.root) ? f.slice(t.root.length) : f;
      }
      const o = $e(() => Bh(fa.value)),
        s = $e(() => {
          var f;
          return !!((f = t.error) != null && f.diff);
        }),
        c = $e(() => (t.error.diff ? o.value.toHtml(Ol(t.error.diff)) : void 0));
      return (f, d) => {
        const h = ci("tooltip");
        return (
          le(),
          be("div", Lue, [
            Y("pre", null, [
              Y("b", null, qe(f.error.name || f.error.nameStr), 1),
              dt(": " + qe(f.error.message), 1),
            ]),
            (le(!0),
            be(
              ht,
              null,
              si(
                f.error.stacks,
                (p, v) => (
                  le(),
                  be(
                    "div",
                    { key: v, class: "op80 flex gap-x-2 items-center", "data-testid": "stack" },
                    [
                      Y(
                        "pre",
                        null,
                        " - " + qe(r(p.file)) + ":" + qe(p.line) + ":" + qe(p.column),
                        1,
                      ),
                      B(dce)(p.file, f.filename)
                        ? kt(
                            (le(),
                            be(
                              "div",
                              {
                                key: 0,
                                class:
                                  "i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em",
                                tabindex: "0",
                                "aria-label": "Open in Editor",
                                onClickPassive: (y) => B(ww)(p.file, p.line, p.column),
                              },
                              null,
                              40,
                              Aue,
                            )),
                            [[h, "Open in Editor", void 0, { bottom: !0 }]],
                          )
                        : rt("", !0),
                    ],
                  )
                ),
              ),
              128,
            )),
            B(s)
              ? (le(), be("pre", { key: 0, "data-testid": "diff", innerHTML: B(c) }, null, 8, Mue))
              : rt("", !0),
          ])
        );
      };
    },
  }),
  $ue = eo(Nue, [["__scopeId", "data-v-9dd6eaea"]]),
  Oue = { "h-full": "", class: "scrolls" },
  Pue = { key: 0, class: "scrolls scrolls-rounded task-error", "data-testid": "task-error" },
  Rue = ["innerHTML"],
  Due = { key: 1, bg: "green-500/10", text: "green-500 sm", p: "x4 y2", "m-2": "", rounded: "" },
  zue = gt({
    __name: "ViewReport",
    props: { file: {} },
    setup(e) {
      const t = e;
      function r(f, d) {
        var h;
        return ((h = f.result) == null ? void 0 : h.state) !== "fail"
          ? []
          : f.type === "test" || f.type === "custom"
            ? [{ ...f, level: d }]
            : [{ ...f, level: d }, ...f.tasks.flatMap((p) => r(p, d + 1))];
      }
      function o(f, d) {
        var v, y, b;
        let h = "";
        (v = d.message) != null &&
          v.includes("\x1B") &&
          (h = `<b>${d.nameStr || d.name}</b>: ${f.toHtml(Ol(d.message))}`);
        const p = (y = d.stackStr) == null ? void 0 : y.includes("\x1B");
        return (
          (p || ((b = d.stack) != null && b.includes("\x1B"))) &&
            (h.length > 0
              ? (h += f.toHtml(Ol(p ? d.stackStr : d.stack)))
              : (h = `<b>${d.nameStr || d.name}</b>: ${d.message}${f.toHtml(Ol(p ? d.stackStr : d.stack))}`)),
          h.length > 0 ? h : null
        );
      }
      function s(f, d) {
        const h = Bh(f);
        return d.map((p) => {
          var b;
          const v = p.result;
          if (!v) return p;
          const y =
            (b = v.errors) == null
              ? void 0
              : b
                  .map((x) => o(h, x))
                  .filter((x) => x != null)
                  .join("<br><br>");
          return y != null && y.length && (v.htmlError = y), p;
        });
      }
      const c = $e(() => {
        var v, y;
        const f = t.file,
          d =
            ((v = f == null ? void 0 : f.tasks) == null ? void 0 : v.flatMap((b) => r(b, 0))) ?? [],
          h = f == null ? void 0 : f.result;
        if ((y = h == null ? void 0 : h.errors) == null ? void 0 : y[0]) {
          const b = {
            id: f.id,
            file: f,
            name: f.name,
            level: 0,
            type: "suite",
            mode: "run",
            meta: {},
            tasks: [],
            result: h,
          };
          d.unshift(b);
        }
        return d.length > 0 ? s(fa.value, d) : d;
      });
      return (f, d) => {
        const h = $ue;
        return (
          le(),
          be("div", Oue, [
            B(c).length
              ? (le(!0),
                be(
                  ht,
                  { key: 0 },
                  si(B(c), (p) => {
                    var v, y, b;
                    return (
                      le(),
                      be("div", { key: p.id }, [
                        Y(
                          "div",
                          {
                            bg: "red-500/10",
                            text: "red-500 sm",
                            p: "x3 y2",
                            "m-2": "",
                            rounded: "",
                            style: Zt({
                              "margin-left": `${(v = p.result) != null && v.htmlError ? 0.5 : 2 * p.level + 0.5}rem`,
                            }),
                          },
                          [
                            dt(qe(p.name) + " ", 1),
                            (y = p.result) != null && y.htmlError
                              ? (le(),
                                be("div", Pue, [
                                  Y("pre", { innerHTML: p.result.htmlError }, null, 8, Rue),
                                ]))
                              : (b = p.result) != null && b.errors
                                ? (le(!0),
                                  be(
                                    ht,
                                    { key: 1 },
                                    si(p.result.errors, (x, C) => {
                                      var E;
                                      return (
                                        le(),
                                        ot(
                                          h,
                                          {
                                            key: C,
                                            error: x,
                                            filename: (E = f.file) == null ? void 0 : E.name,
                                            root: B(Du).root,
                                          },
                                          null,
                                          8,
                                          ["error", "filename", "root"],
                                        )
                                      );
                                    }),
                                    128,
                                  ))
                                : rt("", !0),
                          ],
                          4,
                        ),
                      ])
                    );
                  }),
                  128,
                ))
              : (le(), be("div", Due, " All tests passed in this file ")),
          ])
        );
      };
    },
  }),
  Iue = eo(zue, [["__scopeId", "data-v-5503cb37"]]),
  Fue = { border: "b base", "p-4": "" },
  Hue = ["innerHTML"],
  que = gt({
    __name: "ViewConsoleOutputEntry",
    props: { taskName: {}, type: {}, time: {}, content: {} },
    setup(e) {
      function t(r) {
        return new Date(r).toLocaleTimeString();
      }
      return (r, o) => (
        le(),
        be("div", Fue, [
          Y(
            "div",
            {
              "text-xs": "",
              "mb-1": "",
              class: st(r.type === "stderr" ? "text-red-600 dark:text-red-300" : "op30"),
            },
            qe(t(r.time)) + " | " + qe(r.taskName) + " | " + qe(r.type),
            3,
          ),
          Y("pre", { "data-type": "html", innerHTML: r.content }, null, 8, Hue),
        ])
      );
    },
  }),
  Bue = { key: 0, "h-full": "", class: "scrolls", flex: "", "flex-col": "", "data-testid": "logs" },
  Wue = { key: 1, p6: "" },
  Uue = Y("pre", { inline: "" }, "console.log(foo)", -1),
  Vue = gt({
    __name: "ViewConsoleOutput",
    setup(e) {
      const t = $e(() => {
        const o = Hw.value;
        if (o) {
          const s = Bh(fa.value);
          return o.map(({ taskId: c, type: f, time: d, content: h }) => ({
            taskId: c,
            type: f,
            time: d,
            content: s.toHtml(Ol(h)),
          }));
        }
      });
      function r(o) {
        const s = o && bt.state.idMap.get(o);
        return s && "filepath" in s ? s.name : (s ? dL(s).slice(1).join(" > ") : "-") || "-";
      }
      return (o, s) => {
        var f;
        const c = que;
        return (f = B(t)) != null && f.length
          ? (le(),
            be("div", Bue, [
              (le(!0),
              be(
                ht,
                null,
                si(
                  B(t),
                  ({ taskId: d, type: h, time: p, content: v }) => (
                    le(),
                    be("div", { key: d, "font-mono": "" }, [
                      Pe(c, { "task-name": r(d), type: h, time: p, content: v }, null, 8, [
                        "task-name",
                        "type",
                        "time",
                        "content",
                      ]),
                    ])
                  ),
                ),
                128,
              )),
            ]))
          : (le(),
            be("p", Wue, [
              dt(" Log something in your test and it would print here. (e.g. "),
              Uue,
              dt(") "),
            ]));
      };
    },
  });
var Ww = { exports: {} };
(function (e, t) {
  (function (r, o) {
    e.exports = o();
  })(Ao, function () {
    var r = navigator.userAgent,
      o = navigator.platform,
      s = /gecko\/\d/i.test(r),
      c = /MSIE \d/.test(r),
      f = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(r),
      d = /Edge\/(\d+)/.exec(r),
      h = c || f || d,
      p = h && (c ? document.documentMode || 6 : +(d || f)[1]),
      v = !d && /WebKit\//.test(r),
      y = v && /Qt\/\d+\.\d+/.test(r),
      b = !d && /Chrome\/(\d+)/.exec(r),
      x = b && +b[1],
      C = /Opera\//.test(r),
      E = /Apple Computer/.test(navigator.vendor),
      N = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(r),
      M = /PhantomJS/.test(r),
      L = E && (/Mobile\/\w+/.test(r) || navigator.maxTouchPoints > 2),
      D = /Android/.test(r),
      A = L || D || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(r),
      H = L || /Mac/.test(o),
      z = /\bCrOS\b/.test(r),
      J = /win/i.test(o),
      ie = C && r.match(/Version\/(\d*\.\d*)/);
    ie && (ie = Number(ie[1])), ie && ie >= 15 && ((C = !1), (v = !0));
    var ne = H && (y || (C && (ie == null || ie < 12.11))),
      j = s || (h && p >= 9);
    function te(n) {
      return new RegExp("(^|\\s)" + n + "(?:$|\\s)\\s*");
    }
    var K = function (n, i) {
      var a = n.className,
        l = te(i).exec(a);
      if (l) {
        var u = a.slice(l.index + l[0].length);
        n.className = a.slice(0, l.index) + (u ? l[1] + u : "");
      }
    };
    function V(n) {
      for (var i = n.childNodes.length; i > 0; --i) n.removeChild(n.firstChild);
      return n;
    }
    function I(n, i) {
      return V(n).appendChild(i);
    }
    function k(n, i, a, l) {
      var u = document.createElement(n);
      if ((a && (u.className = a), l && (u.style.cssText = l), typeof i == "string"))
        u.appendChild(document.createTextNode(i));
      else if (i) for (var g = 0; g < i.length; ++g) u.appendChild(i[g]);
      return u;
    }
    function q(n, i, a, l) {
      var u = k(n, i, a, l);
      return u.setAttribute("role", "presentation"), u;
    }
    var W;
    document.createRange
      ? (W = function (n, i, a, l) {
          var u = document.createRange();
          return u.setEnd(l || n, a), u.setStart(n, i), u;
        })
      : (W = function (n, i, a) {
          var l = document.body.createTextRange();
          try {
            l.moveToElementText(n.parentNode);
          } catch {
            return l;
          }
          return l.collapse(!0), l.moveEnd("character", a), l.moveStart("character", i), l;
        });
    function re(n, i) {
      if ((i.nodeType == 3 && (i = i.parentNode), n.contains)) return n.contains(i);
      do if ((i.nodeType == 11 && (i = i.host), i == n)) return !0;
      while ((i = i.parentNode));
    }
    function me(n) {
      var i = n.ownerDocument || n,
        a;
      try {
        a = n.activeElement;
      } catch {
        a = i.body || null;
      }
      for (; a && a.shadowRoot && a.shadowRoot.activeElement; ) a = a.shadowRoot.activeElement;
      return a;
    }
    function Me(n, i) {
      var a = n.className;
      te(i).test(a) || (n.className += (a ? " " : "") + i);
    }
    function Be(n, i) {
      for (var a = n.split(" "), l = 0; l < a.length; l++)
        a[l] && !te(a[l]).test(i) && (i += " " + a[l]);
      return i;
    }
    var Ve = function (n) {
      n.select();
    };
    L
      ? (Ve = function (n) {
          (n.selectionStart = 0), (n.selectionEnd = n.value.length);
        })
      : h &&
        (Ve = function (n) {
          try {
            n.select();
          } catch {}
        });
    function it(n) {
      return n.display.wrapper.ownerDocument;
    }
    function nt(n) {
      return Ze(n.display.wrapper);
    }
    function Ze(n) {
      return n.getRootNode ? n.getRootNode() : n.ownerDocument;
    }
    function Te(n) {
      return it(n).defaultView;
    }
    function X(n) {
      var i = Array.prototype.slice.call(arguments, 1);
      return function () {
        return n.apply(null, i);
      };
    }
    function ae(n, i, a) {
      i || (i = {});
      for (var l in n) n.hasOwnProperty(l) && (a !== !1 || !i.hasOwnProperty(l)) && (i[l] = n[l]);
      return i;
    }
    function de(n, i, a, l, u) {
      i == null && ((i = n.search(/[^\s\u00a0]/)), i == -1 && (i = n.length));
      for (var g = l || 0, m = u || 0; ; ) {
        var w = n.indexOf("	", g);
        if (w < 0 || w >= i) return m + (i - g);
        (m += w - g), (m += a - (m % a)), (g = w + 1);
      }
    }
    var Ne = function () {
      (this.id = null), (this.f = null), (this.time = 0), (this.handler = X(this.onTimeout, this));
    };
    (Ne.prototype.onTimeout = function (n) {
      (n.id = 0), n.time <= +new Date() ? n.f() : setTimeout(n.handler, n.time - +new Date());
    }),
      (Ne.prototype.set = function (n, i) {
        this.f = i;
        var a = +new Date() + n;
        (!this.id || a < this.time) &&
          (clearTimeout(this.id), (this.id = setTimeout(this.handler, n)), (this.time = a));
      });
    function Ce(n, i) {
      for (var a = 0; a < n.length; ++a) if (n[a] == i) return a;
      return -1;
    }
    var Ye = 50,
      O = {
        toString: function () {
          return "CodeMirror.Pass";
        },
      },
      F = { scroll: !1 },
      Z = { origin: "*mouse" },
      ce = { origin: "+move" };
    function se(n, i, a) {
      for (var l = 0, u = 0; ; ) {
        var g = n.indexOf("	", l);
        g == -1 && (g = n.length);
        var m = g - l;
        if (g == n.length || u + m >= i) return l + Math.min(m, i - u);
        if (((u += g - l), (u += a - (u % a)), (l = g + 1), u >= i)) return l;
      }
    }
    var ve = [""];
    function Se(n) {
      for (; ve.length <= n; ) ve.push(ue(ve) + " ");
      return ve[n];
    }
    function ue(n) {
      return n[n.length - 1];
    }
    function ye(n, i) {
      for (var a = [], l = 0; l < n.length; l++) a[l] = i(n[l], l);
      return a;
    }
    function he(n, i, a) {
      for (var l = 0, u = a(i); l < n.length && a(n[l]) <= u; ) l++;
      n.splice(l, 0, i);
    }
    function Ae() {}
    function Ie(n, i) {
      var a;
      return (
        Object.create ? (a = Object.create(n)) : ((Ae.prototype = n), (a = new Ae())),
        i && ae(i, a),
        a
      );
    }
    var De =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function We(n) {
      return /\w/.test(n) || (n > "" && (n.toUpperCase() != n.toLowerCase() || De.test(n)));
    }
    function Ge(n, i) {
      return i ? (i.source.indexOf("\\w") > -1 && We(n) ? !0 : i.test(n)) : We(n);
    }
    function vt(n) {
      for (var i in n) if (n.hasOwnProperty(i) && n[i]) return !1;
      return !0;
    }
    var et =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function tt(n) {
      return n.charCodeAt(0) >= 768 && et.test(n);
    }
    function Ft(n, i, a) {
      for (; (a < 0 ? i > 0 : i < n.length) && tt(n.charAt(i)); ) i += a;
      return i;
    }
    function Jt(n, i, a) {
      for (var l = i > a ? -1 : 1; ; ) {
        if (i == a) return i;
        var u = (i + a) / 2,
          g = l < 0 ? Math.ceil(u) : Math.floor(u);
        if (g == i) return n(g) ? i : a;
        n(g) ? (a = g) : (i = g + l);
      }
    }
    function rr(n, i, a, l) {
      if (!n) return l(i, a, "ltr", 0);
      for (var u = !1, g = 0; g < n.length; ++g) {
        var m = n[g];
        ((m.from < a && m.to > i) || (i == a && m.to == i)) &&
          (l(Math.max(m.from, i), Math.min(m.to, a), m.level == 1 ? "rtl" : "ltr", g), (u = !0));
      }
      u || l(i, a, "ltr");
    }
    var zn = null;
    function ir(n, i, a) {
      var l;
      zn = null;
      for (var u = 0; u < n.length; ++u) {
        var g = n[u];
        if (g.from < i && g.to > i) return u;
        g.to == i && (g.from != g.to && a == "before" ? (l = u) : (zn = u)),
          g.from == i && (g.from != g.to && a != "before" ? (l = u) : (zn = u));
      }
      return l ?? zn;
    }
    var Qt = (function () {
      var n =
          "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
        i =
          "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
      function a(S) {
        return S <= 247
          ? n.charAt(S)
          : 1424 <= S && S <= 1524
            ? "R"
            : 1536 <= S && S <= 1785
              ? i.charAt(S - 1536)
              : 1774 <= S && S <= 2220
                ? "r"
                : 8192 <= S && S <= 8203
                  ? "w"
                  : S == 8204
                    ? "b"
                    : "L";
      }
      var l = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        u = /[stwN]/,
        g = /[LRr]/,
        m = /[Lb1n]/,
        w = /[1n]/;
      function _(S, $, R) {
        (this.level = S), (this.from = $), (this.to = R);
      }
      return function (S, $) {
        var R = $ == "ltr" ? "L" : "R";
        if (S.length == 0 || ($ == "ltr" && !l.test(S))) return !1;
        for (var G = S.length, U = [], ee = 0; ee < G; ++ee) U.push(a(S.charCodeAt(ee)));
        for (var fe = 0, ge = R; fe < G; ++fe) {
          var we = U[fe];
          we == "m" ? (U[fe] = ge) : (ge = we);
        }
        for (var ke = 0, xe = R; ke < G; ++ke) {
          var Ee = U[ke];
          Ee == "1" && xe == "r"
            ? (U[ke] = "n")
            : g.test(Ee) && ((xe = Ee), Ee == "r" && (U[ke] = "R"));
        }
        for (var He = 1, Re = U[0]; He < G - 1; ++He) {
          var Je = U[He];
          Je == "+" && Re == "1" && U[He + 1] == "1"
            ? (U[He] = "1")
            : Je == "," && Re == U[He + 1] && (Re == "1" || Re == "n") && (U[He] = Re),
            (Re = Je);
        }
        for (var wt = 0; wt < G; ++wt) {
          var jt = U[wt];
          if (jt == ",") U[wt] = "N";
          else if (jt == "%") {
            var Ct = void 0;
            for (Ct = wt + 1; Ct < G && U[Ct] == "%"; ++Ct);
            for (
              var An = (wt && U[wt - 1] == "!") || (Ct < G && U[Ct] == "1") ? "1" : "N", yn = wt;
              yn < Ct;
              ++yn
            )
              U[yn] = An;
            wt = Ct - 1;
          }
        }
        for (var Ot = 0, bn = R; Ot < G; ++Ot) {
          var Kt = U[Ot];
          bn == "L" && Kt == "1" ? (U[Ot] = "L") : g.test(Kt) && (bn = Kt);
        }
        for (var Ht = 0; Ht < G; ++Ht)
          if (u.test(U[Ht])) {
            var Pt = void 0;
            for (Pt = Ht + 1; Pt < G && u.test(U[Pt]); ++Pt);
            for (
              var Mt = (Ht ? U[Ht - 1] : R) == "L",
                wn = (Pt < G ? U[Pt] : R) == "L",
                is = Mt == wn ? (Mt ? "L" : "R") : R,
                Si = Ht;
              Si < Pt;
              ++Si
            )
              U[Si] = is;
            Ht = Pt - 1;
          }
        for (var rn = [], Lr, Gt = 0; Gt < G; )
          if (m.test(U[Gt])) {
            var Rf = Gt;
            for (++Gt; Gt < G && m.test(U[Gt]); ++Gt);
            rn.push(new _(0, Rf, Gt));
          } else {
            var Kr = Gt,
              ho = rn.length,
              po = $ == "rtl" ? 1 : 0;
            for (++Gt; Gt < G && U[Gt] != "L"; ++Gt);
            for (var cn = Kr; cn < Gt; )
              if (w.test(U[cn])) {
                Kr < cn && (rn.splice(ho, 0, new _(1, Kr, cn)), (ho += po));
                var os = cn;
                for (++cn; cn < Gt && w.test(U[cn]); ++cn);
                rn.splice(ho, 0, new _(2, os, cn)), (ho += po), (Kr = cn);
              } else ++cn;
            Kr < Gt && rn.splice(ho, 0, new _(1, Kr, Gt));
          }
        return (
          $ == "ltr" &&
            (rn[0].level == 1 &&
              (Lr = S.match(/^\s+/)) &&
              ((rn[0].from = Lr[0].length), rn.unshift(new _(0, 0, Lr[0].length))),
            ue(rn).level == 1 &&
              (Lr = S.match(/\s+$/)) &&
              ((ue(rn).to -= Lr[0].length), rn.push(new _(0, G - Lr[0].length, G)))),
          $ == "rtl" ? rn.reverse() : rn
        );
      };
    })();
    function Ue(n, i) {
      var a = n.order;
      return a == null && (a = n.order = Qt(n.text, i)), a;
    }
    var no = [],
      Fe = function (n, i, a) {
        if (n.addEventListener) n.addEventListener(i, a, !1);
        else if (n.attachEvent) n.attachEvent("on" + i, a);
        else {
          var l = n._handlers || (n._handlers = {});
          l[i] = (l[i] || no).concat(a);
        }
      };
    function qr(n, i) {
      return (n._handlers && n._handlers[i]) || no;
    }
    function en(n, i, a) {
      if (n.removeEventListener) n.removeEventListener(i, a, !1);
      else if (n.detachEvent) n.detachEvent("on" + i, a);
      else {
        var l = n._handlers,
          u = l && l[i];
        if (u) {
          var g = Ce(u, a);
          g > -1 && (l[i] = u.slice(0, g).concat(u.slice(g + 1)));
        }
      }
    }
    function Et(n, i) {
      var a = qr(n, i);
      if (a.length)
        for (var l = Array.prototype.slice.call(arguments, 2), u = 0; u < a.length; ++u)
          a[u].apply(null, l);
    }
    function Lt(n, i, a) {
      return (
        typeof i == "string" &&
          (i = {
            type: i,
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
          }),
        Et(n, a || i.type, n, i),
        pn(i) || i.codemirrorIgnore
      );
    }
    function jn(n) {
      var i = n._handlers && n._handlers.cursorActivity;
      if (i)
        for (
          var a = n.curOp.cursorActivityHandlers || (n.curOp.cursorActivityHandlers = []), l = 0;
          l < i.length;
          ++l
        )
          Ce(a, i[l]) == -1 && a.push(i[l]);
    }
    function En(n, i) {
      return qr(n, i).length > 0;
    }
    function or(n) {
      (n.prototype.on = function (i, a) {
        Fe(this, i, a);
      }),
        (n.prototype.off = function (i, a) {
          en(this, i, a);
        });
    }
    function tn(n) {
      n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
    }
    function Oo(n) {
      n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0);
    }
    function pn(n) {
      return n.defaultPrevented != null ? n.defaultPrevented : n.returnValue == !1;
    }
    function fi(n) {
      tn(n), Oo(n);
    }
    function $s(n) {
      return n.target || n.srcElement;
    }
    function sr(n) {
      var i = n.which;
      return (
        i == null && (n.button & 1 ? (i = 1) : n.button & 2 ? (i = 3) : n.button & 4 && (i = 2)),
        H && n.ctrlKey && i == 1 && (i = 3),
        i
      );
    }
    var qu = (function () {
        if (h && p < 9) return !1;
        var n = k("div");
        return "draggable" in n || "dragDrop" in n;
      })(),
      Po;
    function ga(n) {
      if (Po == null) {
        var i = k("span", "​");
        I(n, k("span", [i, document.createTextNode("x")])),
          n.firstChild.offsetHeight != 0 &&
            (Po = i.offsetWidth <= 1 && i.offsetHeight > 2 && !(h && p < 8));
      }
      var a = Po
        ? k("span", "​")
        : k("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
      return a.setAttribute("cm-text", ""), a;
    }
    var Os;
    function di(n) {
      if (Os != null) return Os;
      var i = I(n, document.createTextNode("AخA")),
        a = W(i, 0, 1).getBoundingClientRect(),
        l = W(i, 1, 2).getBoundingClientRect();
      return V(n), !a || a.left == a.right ? !1 : (Os = l.right - a.right < 3);
    }
    var Gn =
        `

b`.split(/\n/).length != 3
          ? function (n) {
              for (var i = 0, a = [], l = n.length; i <= l; ) {
                var u = n.indexOf(
                  `
`,
                  i,
                );
                u == -1 && (u = n.length);
                var g = n.slice(i, n.charAt(u - 1) == "\r" ? u - 1 : u),
                  m = g.indexOf("\r");
                m != -1 ? (a.push(g.slice(0, m)), (i += m + 1)) : (a.push(g), (i = u + 1));
              }
              return a;
            }
          : function (n) {
              return n.split(/\r\n?|\n/);
            },
      hi = window.getSelection
        ? function (n) {
            try {
              return n.selectionStart != n.selectionEnd;
            } catch {
              return !1;
            }
          }
        : function (n) {
            var i;
            try {
              i = n.ownerDocument.selection.createRange();
            } catch {}
            return !i || i.parentElement() != n ? !1 : i.compareEndPoints("StartToEnd", i) != 0;
          },
      va = (function () {
        var n = k("div");
        return "oncopy" in n
          ? !0
          : (n.setAttribute("oncopy", "return;"), typeof n.oncopy == "function");
      })(),
      lr = null;
    function Bu(n) {
      if (lr != null) return lr;
      var i = I(n, k("span", "x")),
        a = i.getBoundingClientRect(),
        l = W(i, 0, 1).getBoundingClientRect();
      return (lr = Math.abs(a.left - l.left) > 1);
    }
    var Ro = {},
      ar = {};
    function cr(n, i) {
      arguments.length > 2 && (i.dependencies = Array.prototype.slice.call(arguments, 2)),
        (Ro[n] = i);
    }
    function ro(n, i) {
      ar[n] = i;
    }
    function Do(n) {
      if (typeof n == "string" && ar.hasOwnProperty(n)) n = ar[n];
      else if (n && typeof n.name == "string" && ar.hasOwnProperty(n.name)) {
        var i = ar[n.name];
        typeof i == "string" && (i = { name: i }), (n = Ie(i, n)), (n.name = i.name);
      } else {
        if (typeof n == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(n)) return Do("application/xml");
        if (typeof n == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(n))
          return Do("application/json");
      }
      return typeof n == "string" ? { name: n } : n || { name: "null" };
    }
    function zo(n, i) {
      i = Do(i);
      var a = Ro[i.name];
      if (!a) return zo(n, "text/plain");
      var l = a(n, i);
      if (pi.hasOwnProperty(i.name)) {
        var u = pi[i.name];
        for (var g in u)
          u.hasOwnProperty(g) && (l.hasOwnProperty(g) && (l["_" + g] = l[g]), (l[g] = u[g]));
      }
      if (((l.name = i.name), i.helperType && (l.helperType = i.helperType), i.modeProps))
        for (var m in i.modeProps) l[m] = i.modeProps[m];
      return l;
    }
    var pi = {};
    function Io(n, i) {
      var a = pi.hasOwnProperty(n) ? pi[n] : (pi[n] = {});
      ae(i, a);
    }
    function kr(n, i) {
      if (i === !0) return i;
      if (n.copyState) return n.copyState(i);
      var a = {};
      for (var l in i) {
        var u = i[l];
        u instanceof Array && (u = u.concat([])), (a[l] = u);
      }
      return a;
    }
    function Ps(n, i) {
      for (var a; n.innerMode && ((a = n.innerMode(i)), !(!a || a.mode == n)); )
        (i = a.state), (n = a.mode);
      return a || { mode: n, state: i };
    }
    function Fo(n, i, a) {
      return n.startState ? n.startState(i, a) : !0;
    }
    var At = function (n, i, a) {
      (this.pos = this.start = 0),
        (this.string = n),
        (this.tabSize = i || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = a);
    };
    (At.prototype.eol = function () {
      return this.pos >= this.string.length;
    }),
      (At.prototype.sol = function () {
        return this.pos == this.lineStart;
      }),
      (At.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0;
      }),
      (At.prototype.next = function () {
        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
      }),
      (At.prototype.eat = function (n) {
        var i = this.string.charAt(this.pos),
          a;
        if ((typeof n == "string" ? (a = i == n) : (a = i && (n.test ? n.test(i) : n(i))), a))
          return ++this.pos, i;
      }),
      (At.prototype.eatWhile = function (n) {
        for (var i = this.pos; this.eat(n); );
        return this.pos > i;
      }),
      (At.prototype.eatSpace = function () {
        for (var n = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
        return this.pos > n;
      }),
      (At.prototype.skipToEnd = function () {
        this.pos = this.string.length;
      }),
      (At.prototype.skipTo = function (n) {
        var i = this.string.indexOf(n, this.pos);
        if (i > -1) return (this.pos = i), !0;
      }),
      (At.prototype.backUp = function (n) {
        this.pos -= n;
      }),
      (At.prototype.column = function () {
        return (
          this.lastColumnPos < this.start &&
            ((this.lastColumnValue = de(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue,
            )),
            (this.lastColumnPos = this.start)),
          this.lastColumnValue -
            (this.lineStart ? de(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (At.prototype.indentation = function () {
        return (
          de(this.string, null, this.tabSize) -
          (this.lineStart ? de(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (At.prototype.match = function (n, i, a) {
        if (typeof n == "string") {
          var l = function (m) {
              return a ? m.toLowerCase() : m;
            },
            u = this.string.substr(this.pos, n.length);
          if (l(u) == l(n)) return i !== !1 && (this.pos += n.length), !0;
        } else {
          var g = this.string.slice(this.pos).match(n);
          return g && g.index > 0 ? null : (g && i !== !1 && (this.pos += g[0].length), g);
        }
      }),
      (At.prototype.current = function () {
        return this.string.slice(this.start, this.pos);
      }),
      (At.prototype.hideFirstChars = function (n, i) {
        this.lineStart += n;
        try {
          return i();
        } finally {
          this.lineStart -= n;
        }
      }),
      (At.prototype.lookAhead = function (n) {
        var i = this.lineOracle;
        return i && i.lookAhead(n);
      }),
      (At.prototype.baseToken = function () {
        var n = this.lineOracle;
        return n && n.baseToken(this.pos);
      });
    function Oe(n, i) {
      if (((i -= n.first), i < 0 || i >= n.size))
        throw new Error("There is no line " + (i + n.first) + " in the document.");
      for (var a = n; !a.lines; )
        for (var l = 0; ; ++l) {
          var u = a.children[l],
            g = u.chunkSize();
          if (i < g) {
            a = u;
            break;
          }
          i -= g;
        }
      return a.lines[i];
    }
    function Br(n, i, a) {
      var l = [],
        u = i.line;
      return (
        n.iter(i.line, a.line + 1, function (g) {
          var m = g.text;
          u == a.line && (m = m.slice(0, a.ch)), u == i.line && (m = m.slice(i.ch)), l.push(m), ++u;
        }),
        l
      );
    }
    function Rs(n, i, a) {
      var l = [];
      return (
        n.iter(i, a, function (u) {
          l.push(u.text);
        }),
        l
      );
    }
    function In(n, i) {
      var a = i - n.height;
      if (a) for (var l = n; l; l = l.parent) l.height += a;
    }
    function T(n) {
      if (n.parent == null) return null;
      for (var i = n.parent, a = Ce(i.lines, n), l = i.parent; l; i = l, l = l.parent)
        for (var u = 0; l.children[u] != i; ++u) a += l.children[u].chunkSize();
      return a + i.first;
    }
    function P(n, i) {
      var a = n.first;
      e: do {
        for (var l = 0; l < n.children.length; ++l) {
          var u = n.children[l],
            g = u.height;
          if (i < g) {
            n = u;
            continue e;
          }
          (i -= g), (a += u.chunkSize());
        }
        return a;
      } while (!n.lines);
      for (var m = 0; m < n.lines.length; ++m) {
        var w = n.lines[m],
          _ = w.height;
        if (i < _) break;
        i -= _;
      }
      return a + m;
    }
    function oe(n, i) {
      return i >= n.first && i < n.first + n.size;
    }
    function pe(n, i) {
      return String(n.lineNumberFormatter(i + n.firstLineNumber));
    }
    function Q(n, i, a) {
      if ((a === void 0 && (a = null), !(this instanceof Q))) return new Q(n, i, a);
      (this.line = n), (this.ch = i), (this.sticky = a);
    }
    function _e(n, i) {
      return n.line - i.line || n.ch - i.ch;
    }
    function ut(n, i) {
      return n.sticky == i.sticky && _e(n, i) == 0;
    }
    function Bt(n) {
      return Q(n.line, n.ch);
    }
    function gn(n, i) {
      return _e(n, i) < 0 ? i : n;
    }
    function Ho(n, i) {
      return _e(n, i) < 0 ? n : i;
    }
    function cp(n, i) {
      return Math.max(n.first, Math.min(i, n.first + n.size - 1));
    }
    function Ke(n, i) {
      if (i.line < n.first) return Q(n.first, 0);
      var a = n.first + n.size - 1;
      return i.line > a ? Q(a, Oe(n, a).text.length) : P1(i, Oe(n, i.line).text.length);
    }
    function P1(n, i) {
      var a = n.ch;
      return a == null || a > i ? Q(n.line, i) : a < 0 ? Q(n.line, 0) : n;
    }
    function up(n, i) {
      for (var a = [], l = 0; l < i.length; l++) a[l] = Ke(n, i[l]);
      return a;
    }
    var ma = function (n, i) {
        (this.state = n), (this.lookAhead = i);
      },
      Tr = function (n, i, a, l) {
        (this.state = i),
          (this.doc = n),
          (this.line = a),
          (this.maxLookAhead = l || 0),
          (this.baseTokens = null),
          (this.baseTokenPos = 1);
      };
    (Tr.prototype.lookAhead = function (n) {
      var i = this.doc.getLine(this.line + n);
      return i != null && n > this.maxLookAhead && (this.maxLookAhead = n), i;
    }),
      (Tr.prototype.baseToken = function (n) {
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= n; ) this.baseTokenPos += 2;
        var i = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: i && i.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - n,
        };
      }),
      (Tr.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }),
      (Tr.fromSaved = function (n, i, a) {
        return i instanceof ma
          ? new Tr(n, kr(n.mode, i.state), a, i.lookAhead)
          : new Tr(n, kr(n.mode, i), a);
      }),
      (Tr.prototype.save = function (n) {
        var i = n !== !1 ? kr(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new ma(i, this.maxLookAhead) : i;
      });
    function fp(n, i, a, l) {
      var u = [n.state.modeGen],
        g = {};
      mp(
        n,
        i.text,
        n.doc.mode,
        a,
        function (S, $) {
          return u.push(S, $);
        },
        g,
        l,
      );
      for (
        var m = a.state,
          w = function (S) {
            a.baseTokens = u;
            var $ = n.state.overlays[S],
              R = 1,
              G = 0;
            (a.state = !0),
              mp(
                n,
                i.text,
                $.mode,
                a,
                function (U, ee) {
                  for (var fe = R; G < U; ) {
                    var ge = u[R];
                    ge > U && u.splice(R, 1, U, u[R + 1], ge), (R += 2), (G = Math.min(U, ge));
                  }
                  if (ee)
                    if ($.opaque) u.splice(fe, R - fe, U, "overlay " + ee), (R = fe + 2);
                    else
                      for (; fe < R; fe += 2) {
                        var we = u[fe + 1];
                        u[fe + 1] = (we ? we + " " : "") + "overlay " + ee;
                      }
                },
                g,
              ),
              (a.state = m),
              (a.baseTokens = null),
              (a.baseTokenPos = 1);
          },
          _ = 0;
        _ < n.state.overlays.length;
        ++_
      )
        w(_);
      return { styles: u, classes: g.bgClass || g.textClass ? g : null };
    }
    function dp(n, i, a) {
      if (!i.styles || i.styles[0] != n.state.modeGen) {
        var l = Ds(n, T(i)),
          u = i.text.length > n.options.maxHighlightLength && kr(n.doc.mode, l.state),
          g = fp(n, i, l);
        u && (l.state = u),
          (i.stateAfter = l.save(!u)),
          (i.styles = g.styles),
          g.classes ? (i.styleClasses = g.classes) : i.styleClasses && (i.styleClasses = null),
          a === n.doc.highlightFrontier &&
            (n.doc.modeFrontier = Math.max(n.doc.modeFrontier, ++n.doc.highlightFrontier));
      }
      return i.styles;
    }
    function Ds(n, i, a) {
      var l = n.doc,
        u = n.display;
      if (!l.mode.startState) return new Tr(l, !0, i);
      var g = R1(n, i, a),
        m = g > l.first && Oe(l, g - 1).stateAfter,
        w = m ? Tr.fromSaved(l, m, g) : new Tr(l, Fo(l.mode), g);
      return (
        l.iter(g, i, function (_) {
          Wu(n, _.text, w);
          var S = w.line;
          (_.stateAfter =
            S == i - 1 || S % 5 == 0 || (S >= u.viewFrom && S < u.viewTo) ? w.save() : null),
            w.nextLine();
        }),
        a && (l.modeFrontier = w.line),
        w
      );
    }
    function Wu(n, i, a, l) {
      var u = n.doc.mode,
        g = new At(i, n.options.tabSize, a);
      for (g.start = g.pos = l || 0, i == "" && hp(u, a.state); !g.eol(); )
        Uu(u, g, a.state), (g.start = g.pos);
    }
    function hp(n, i) {
      if (n.blankLine) return n.blankLine(i);
      if (n.innerMode) {
        var a = Ps(n, i);
        if (a.mode.blankLine) return a.mode.blankLine(a.state);
      }
    }
    function Uu(n, i, a, l) {
      for (var u = 0; u < 10; u++) {
        l && (l[0] = Ps(n, a).mode);
        var g = n.token(i, a);
        if (i.pos > i.start) return g;
      }
      throw new Error("Mode " + n.name + " failed to advance stream.");
    }
    var pp = function (n, i, a) {
      (this.start = n.start),
        (this.end = n.pos),
        (this.string = n.current()),
        (this.type = i || null),
        (this.state = a);
    };
    function gp(n, i, a, l) {
      var u = n.doc,
        g = u.mode,
        m;
      i = Ke(u, i);
      var w = Oe(u, i.line),
        _ = Ds(n, i.line, a),
        S = new At(w.text, n.options.tabSize, _),
        $;
      for (l && ($ = []); (l || S.pos < i.ch) && !S.eol(); )
        (S.start = S.pos), (m = Uu(g, S, _.state)), l && $.push(new pp(S, m, kr(u.mode, _.state)));
      return l ? $ : new pp(S, m, _.state);
    }
    function vp(n, i) {
      if (n)
        for (;;) {
          var a = n.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!a) break;
          n = n.slice(0, a.index) + n.slice(a.index + a[0].length);
          var l = a[1] ? "bgClass" : "textClass";
          i[l] == null
            ? (i[l] = a[2])
            : new RegExp("(?:^|\\s)" + a[2] + "(?:$|\\s)").test(i[l]) || (i[l] += " " + a[2]);
        }
      return n;
    }
    function mp(n, i, a, l, u, g, m) {
      var w = a.flattenSpans;
      w == null && (w = n.options.flattenSpans);
      var _ = 0,
        S = null,
        $ = new At(i, n.options.tabSize, l),
        R,
        G = n.options.addModeClass && [null];
      for (i == "" && vp(hp(a, l.state), g); !$.eol(); ) {
        if (
          ($.pos > n.options.maxHighlightLength
            ? ((w = !1), m && Wu(n, i, l, $.pos), ($.pos = i.length), (R = null))
            : (R = vp(Uu(a, $, l.state, G), g)),
          G)
        ) {
          var U = G[0].name;
          U && (R = "m-" + (R ? U + " " + R : U));
        }
        if (!w || S != R) {
          for (; _ < $.start; ) (_ = Math.min($.start, _ + 5e3)), u(_, S);
          S = R;
        }
        $.start = $.pos;
      }
      for (; _ < $.pos; ) {
        var ee = Math.min($.pos, _ + 5e3);
        u(ee, S), (_ = ee);
      }
    }
    function R1(n, i, a) {
      for (
        var l, u, g = n.doc, m = a ? -1 : i - (n.doc.mode.innerMode ? 1e3 : 100), w = i;
        w > m;
        --w
      ) {
        if (w <= g.first) return g.first;
        var _ = Oe(g, w - 1),
          S = _.stateAfter;
        if (S && (!a || w + (S instanceof ma ? S.lookAhead : 0) <= g.modeFrontier)) return w;
        var $ = de(_.text, null, n.options.tabSize);
        (u == null || l > $) && ((u = w - 1), (l = $));
      }
      return u;
    }
    function D1(n, i) {
      if (((n.modeFrontier = Math.min(n.modeFrontier, i)), !(n.highlightFrontier < i - 10))) {
        for (var a = n.first, l = i - 1; l > a; l--) {
          var u = Oe(n, l).stateAfter;
          if (u && (!(u instanceof ma) || l + u.lookAhead < i)) {
            a = l + 1;
            break;
          }
        }
        n.highlightFrontier = Math.min(n.highlightFrontier, a);
      }
    }
    var yp = !1,
      Wr = !1;
    function z1() {
      yp = !0;
    }
    function I1() {
      Wr = !0;
    }
    function ya(n, i, a) {
      (this.marker = n), (this.from = i), (this.to = a);
    }
    function zs(n, i) {
      if (n)
        for (var a = 0; a < n.length; ++a) {
          var l = n[a];
          if (l.marker == i) return l;
        }
    }
    function F1(n, i) {
      for (var a, l = 0; l < n.length; ++l) n[l] != i && (a || (a = [])).push(n[l]);
      return a;
    }
    function H1(n, i, a) {
      var l = a && window.WeakSet && (a.markedSpans || (a.markedSpans = new WeakSet()));
      l && n.markedSpans && l.has(n.markedSpans)
        ? n.markedSpans.push(i)
        : ((n.markedSpans = n.markedSpans ? n.markedSpans.concat([i]) : [i]),
          l && l.add(n.markedSpans)),
        i.marker.attachLine(n);
    }
    function q1(n, i, a) {
      var l;
      if (n)
        for (var u = 0; u < n.length; ++u) {
          var g = n[u],
            m = g.marker,
            w = g.from == null || (m.inclusiveLeft ? g.from <= i : g.from < i);
          if (w || (g.from == i && m.type == "bookmark" && (!a || !g.marker.insertLeft))) {
            var _ = g.to == null || (m.inclusiveRight ? g.to >= i : g.to > i);
            (l || (l = [])).push(new ya(m, g.from, _ ? null : g.to));
          }
        }
      return l;
    }
    function B1(n, i, a) {
      var l;
      if (n)
        for (var u = 0; u < n.length; ++u) {
          var g = n[u],
            m = g.marker,
            w = g.to == null || (m.inclusiveRight ? g.to >= i : g.to > i);
          if (w || (g.from == i && m.type == "bookmark" && (!a || g.marker.insertLeft))) {
            var _ = g.from == null || (m.inclusiveLeft ? g.from <= i : g.from < i);
            (l || (l = [])).push(new ya(m, _ ? null : g.from - i, g.to == null ? null : g.to - i));
          }
        }
      return l;
    }
    function Vu(n, i) {
      if (i.full) return null;
      var a = oe(n, i.from.line) && Oe(n, i.from.line).markedSpans,
        l = oe(n, i.to.line) && Oe(n, i.to.line).markedSpans;
      if (!a && !l) return null;
      var u = i.from.ch,
        g = i.to.ch,
        m = _e(i.from, i.to) == 0,
        w = q1(a, u, m),
        _ = B1(l, g, m),
        S = i.text.length == 1,
        $ = ue(i.text).length + (S ? u : 0);
      if (w)
        for (var R = 0; R < w.length; ++R) {
          var G = w[R];
          if (G.to == null) {
            var U = zs(_, G.marker);
            U ? S && (G.to = U.to == null ? null : U.to + $) : (G.to = u);
          }
        }
      if (_)
        for (var ee = 0; ee < _.length; ++ee) {
          var fe = _[ee];
          if ((fe.to != null && (fe.to += $), fe.from == null)) {
            var ge = zs(w, fe.marker);
            ge || ((fe.from = $), S && (w || (w = [])).push(fe));
          } else (fe.from += $), S && (w || (w = [])).push(fe);
        }
      w && (w = bp(w)), _ && _ != w && (_ = bp(_));
      var we = [w];
      if (!S) {
        var ke = i.text.length - 2,
          xe;
        if (ke > 0 && w)
          for (var Ee = 0; Ee < w.length; ++Ee)
            w[Ee].to == null && (xe || (xe = [])).push(new ya(w[Ee].marker, null, null));
        for (var He = 0; He < ke; ++He) we.push(xe);
        we.push(_);
      }
      return we;
    }
    function bp(n) {
      for (var i = 0; i < n.length; ++i) {
        var a = n[i];
        a.from != null && a.from == a.to && a.marker.clearWhenEmpty !== !1 && n.splice(i--, 1);
      }
      return n.length ? n : null;
    }
    function W1(n, i, a) {
      var l = null;
      if (
        (n.iter(i.line, a.line + 1, function (U) {
          if (U.markedSpans)
            for (var ee = 0; ee < U.markedSpans.length; ++ee) {
              var fe = U.markedSpans[ee].marker;
              fe.readOnly && (!l || Ce(l, fe) == -1) && (l || (l = [])).push(fe);
            }
        }),
        !l)
      )
        return null;
      for (var u = [{ from: i, to: a }], g = 0; g < l.length; ++g)
        for (var m = l[g], w = m.find(0), _ = 0; _ < u.length; ++_) {
          var S = u[_];
          if (!(_e(S.to, w.from) < 0 || _e(S.from, w.to) > 0)) {
            var $ = [_, 1],
              R = _e(S.from, w.from),
              G = _e(S.to, w.to);
            (R < 0 || (!m.inclusiveLeft && !R)) && $.push({ from: S.from, to: w.from }),
              (G > 0 || (!m.inclusiveRight && !G)) && $.push({ from: w.to, to: S.to }),
              u.splice.apply(u, $),
              (_ += $.length - 3);
          }
        }
      return u;
    }
    function wp(n) {
      var i = n.markedSpans;
      if (i) {
        for (var a = 0; a < i.length; ++a) i[a].marker.detachLine(n);
        n.markedSpans = null;
      }
    }
    function xp(n, i) {
      if (i) {
        for (var a = 0; a < i.length; ++a) i[a].marker.attachLine(n);
        n.markedSpans = i;
      }
    }
    function ba(n) {
      return n.inclusiveLeft ? -1 : 0;
    }
    function wa(n) {
      return n.inclusiveRight ? 1 : 0;
    }
    function ju(n, i) {
      var a = n.lines.length - i.lines.length;
      if (a != 0) return a;
      var l = n.find(),
        u = i.find(),
        g = _e(l.from, u.from) || ba(n) - ba(i);
      if (g) return -g;
      var m = _e(l.to, u.to) || wa(n) - wa(i);
      return m || i.id - n.id;
    }
    function _p(n, i) {
      var a = Wr && n.markedSpans,
        l;
      if (a)
        for (var u = void 0, g = 0; g < a.length; ++g)
          (u = a[g]),
            u.marker.collapsed &&
              (i ? u.from : u.to) == null &&
              (!l || ju(l, u.marker) < 0) &&
              (l = u.marker);
      return l;
    }
    function Sp(n) {
      return _p(n, !0);
    }
    function xa(n) {
      return _p(n, !1);
    }
    function U1(n, i) {
      var a = Wr && n.markedSpans,
        l;
      if (a)
        for (var u = 0; u < a.length; ++u) {
          var g = a[u];
          g.marker.collapsed &&
            (g.from == null || g.from < i) &&
            (g.to == null || g.to > i) &&
            (!l || ju(l, g.marker) < 0) &&
            (l = g.marker);
        }
      return l;
    }
    function kp(n, i, a, l, u) {
      var g = Oe(n, i),
        m = Wr && g.markedSpans;
      if (m)
        for (var w = 0; w < m.length; ++w) {
          var _ = m[w];
          if (_.marker.collapsed) {
            var S = _.marker.find(0),
              $ = _e(S.from, a) || ba(_.marker) - ba(u),
              R = _e(S.to, l) || wa(_.marker) - wa(u);
            if (
              !(($ >= 0 && R <= 0) || ($ <= 0 && R >= 0)) &&
              (($ <= 0 &&
                (_.marker.inclusiveRight && u.inclusiveLeft
                  ? _e(S.to, a) >= 0
                  : _e(S.to, a) > 0)) ||
                ($ >= 0 &&
                  (_.marker.inclusiveRight && u.inclusiveLeft
                    ? _e(S.from, l) <= 0
                    : _e(S.from, l) < 0)))
            )
              return !0;
          }
        }
    }
    function ur(n) {
      for (var i; (i = Sp(n)); ) n = i.find(-1, !0).line;
      return n;
    }
    function V1(n) {
      for (var i; (i = xa(n)); ) n = i.find(1, !0).line;
      return n;
    }
    function j1(n) {
      for (var i, a; (i = xa(n)); ) (n = i.find(1, !0).line), (a || (a = [])).push(n);
      return a;
    }
    function Gu(n, i) {
      var a = Oe(n, i),
        l = ur(a);
      return a == l ? i : T(l);
    }
    function Tp(n, i) {
      if (i > n.lastLine()) return i;
      var a = Oe(n, i),
        l;
      if (!gi(n, a)) return i;
      for (; (l = xa(a)); ) a = l.find(1, !0).line;
      return T(a) + 1;
    }
    function gi(n, i) {
      var a = Wr && i.markedSpans;
      if (a) {
        for (var l = void 0, u = 0; u < a.length; ++u)
          if (((l = a[u]), !!l.marker.collapsed)) {
            if (l.from == null) return !0;
            if (!l.marker.widgetNode && l.from == 0 && l.marker.inclusiveLeft && Ku(n, i, l))
              return !0;
          }
      }
    }
    function Ku(n, i, a) {
      if (a.to == null) {
        var l = a.marker.find(1, !0);
        return Ku(n, l.line, zs(l.line.markedSpans, a.marker));
      }
      if (a.marker.inclusiveRight && a.to == i.text.length) return !0;
      for (var u = void 0, g = 0; g < i.markedSpans.length; ++g)
        if (
          ((u = i.markedSpans[g]),
          u.marker.collapsed &&
            !u.marker.widgetNode &&
            u.from == a.to &&
            (u.to == null || u.to != a.from) &&
            (u.marker.inclusiveLeft || a.marker.inclusiveRight) &&
            Ku(n, i, u))
        )
          return !0;
    }
    function Ur(n) {
      n = ur(n);
      for (var i = 0, a = n.parent, l = 0; l < a.lines.length; ++l) {
        var u = a.lines[l];
        if (u == n) break;
        i += u.height;
      }
      for (var g = a.parent; g; a = g, g = a.parent)
        for (var m = 0; m < g.children.length; ++m) {
          var w = g.children[m];
          if (w == a) break;
          i += w.height;
        }
      return i;
    }
    function _a(n) {
      if (n.height == 0) return 0;
      for (var i = n.text.length, a, l = n; (a = Sp(l)); ) {
        var u = a.find(0, !0);
        (l = u.from.line), (i += u.from.ch - u.to.ch);
      }
      for (l = n; (a = xa(l)); ) {
        var g = a.find(0, !0);
        (i -= l.text.length - g.from.ch), (l = g.to.line), (i += l.text.length - g.to.ch);
      }
      return i;
    }
    function Xu(n) {
      var i = n.display,
        a = n.doc;
      (i.maxLine = Oe(a, a.first)),
        (i.maxLineLength = _a(i.maxLine)),
        (i.maxLineChanged = !0),
        a.iter(function (l) {
          var u = _a(l);
          u > i.maxLineLength && ((i.maxLineLength = u), (i.maxLine = l));
        });
    }
    var qo = function (n, i, a) {
      (this.text = n), xp(this, i), (this.height = a ? a(this) : 1);
    };
    (qo.prototype.lineNo = function () {
      return T(this);
    }),
      or(qo);
    function G1(n, i, a, l) {
      (n.text = i),
        n.stateAfter && (n.stateAfter = null),
        n.styles && (n.styles = null),
        n.order != null && (n.order = null),
        wp(n),
        xp(n, a);
      var u = l ? l(n) : 1;
      u != n.height && In(n, u);
    }
    function K1(n) {
      (n.parent = null), wp(n);
    }
    var X1 = {},
      Y1 = {};
    function Cp(n, i) {
      if (!n || /^\s*$/.test(n)) return null;
      var a = i.addModeClass ? Y1 : X1;
      return a[n] || (a[n] = n.replace(/\S+/g, "cm-$&"));
    }
    function Ep(n, i) {
      var a = q("span", null, null, v ? "padding-right: .1px" : null),
        l = {
          pre: q("pre", [a], "CodeMirror-line"),
          content: a,
          col: 0,
          pos: 0,
          cm: n,
          trailingSpace: !1,
          splitSpaces: n.getOption("lineWrapping"),
        };
      i.measure = {};
      for (var u = 0; u <= (i.rest ? i.rest.length : 0); u++) {
        var g = u ? i.rest[u - 1] : i.line,
          m = void 0;
        (l.pos = 0),
          (l.addToken = J1),
          di(n.display.measure) && (m = Ue(g, n.doc.direction)) && (l.addToken = ex(l.addToken, m)),
          (l.map = []);
        var w = i != n.display.externalMeasured && T(g);
        tx(g, l, dp(n, g, w)),
          g.styleClasses &&
            (g.styleClasses.bgClass && (l.bgClass = Be(g.styleClasses.bgClass, l.bgClass || "")),
            g.styleClasses.textClass &&
              (l.textClass = Be(g.styleClasses.textClass, l.textClass || ""))),
          l.map.length == 0 && l.map.push(0, 0, l.content.appendChild(ga(n.display.measure))),
          u == 0
            ? ((i.measure.map = l.map), (i.measure.cache = {}))
            : ((i.measure.maps || (i.measure.maps = [])).push(l.map),
              (i.measure.caches || (i.measure.caches = [])).push({}));
      }
      if (v) {
        var _ = l.content.lastChild;
        (/\bcm-tab\b/.test(_.className) || (_.querySelector && _.querySelector(".cm-tab"))) &&
          (l.content.className = "cm-tab-wrap-hack");
      }
      return (
        Et(n, "renderLine", n, i.line, l.pre),
        l.pre.className && (l.textClass = Be(l.pre.className, l.textClass || "")),
        l
      );
    }
    function Z1(n) {
      var i = k("span", "•", "cm-invalidchar");
      return (
        (i.title = "\\u" + n.charCodeAt(0).toString(16)), i.setAttribute("aria-label", i.title), i
      );
    }
    function J1(n, i, a, l, u, g, m) {
      if (i) {
        var w = n.splitSpaces ? Q1(i, n.trailingSpace) : i,
          _ = n.cm.state.specialChars,
          S = !1,
          $;
        if (!_.test(i))
          (n.col += i.length),
            ($ = document.createTextNode(w)),
            n.map.push(n.pos, n.pos + i.length, $),
            h && p < 9 && (S = !0),
            (n.pos += i.length);
        else {
          $ = document.createDocumentFragment();
          for (var R = 0; ; ) {
            _.lastIndex = R;
            var G = _.exec(i),
              U = G ? G.index - R : i.length - R;
            if (U) {
              var ee = document.createTextNode(w.slice(R, R + U));
              h && p < 9 ? $.appendChild(k("span", [ee])) : $.appendChild(ee),
                n.map.push(n.pos, n.pos + U, ee),
                (n.col += U),
                (n.pos += U);
            }
            if (!G) break;
            R += U + 1;
            var fe = void 0;
            if (G[0] == "	") {
              var ge = n.cm.options.tabSize,
                we = ge - (n.col % ge);
              (fe = $.appendChild(k("span", Se(we), "cm-tab"))),
                fe.setAttribute("role", "presentation"),
                fe.setAttribute("cm-text", "	"),
                (n.col += we);
            } else
              G[0] == "\r" ||
              G[0] ==
                `
`
                ? ((fe = $.appendChild(k("span", G[0] == "\r" ? "␍" : "␤", "cm-invalidchar"))),
                  fe.setAttribute("cm-text", G[0]),
                  (n.col += 1))
                : ((fe = n.cm.options.specialCharPlaceholder(G[0])),
                  fe.setAttribute("cm-text", G[0]),
                  h && p < 9 ? $.appendChild(k("span", [fe])) : $.appendChild(fe),
                  (n.col += 1));
            n.map.push(n.pos, n.pos + 1, fe), n.pos++;
          }
        }
        if (((n.trailingSpace = w.charCodeAt(i.length - 1) == 32), a || l || u || S || g || m)) {
          var ke = a || "";
          l && (ke += l), u && (ke += u);
          var xe = k("span", [$], ke, g);
          if (m)
            for (var Ee in m)
              m.hasOwnProperty(Ee) && Ee != "style" && Ee != "class" && xe.setAttribute(Ee, m[Ee]);
          return n.content.appendChild(xe);
        }
        n.content.appendChild($);
      }
    }
    function Q1(n, i) {
      if (n.length > 1 && !/  /.test(n)) return n;
      for (var a = i, l = "", u = 0; u < n.length; u++) {
        var g = n.charAt(u);
        g == " " && a && (u == n.length - 1 || n.charCodeAt(u + 1) == 32) && (g = " "),
          (l += g),
          (a = g == " ");
      }
      return l;
    }
    function ex(n, i) {
      return function (a, l, u, g, m, w, _) {
        u = u ? u + " cm-force-border" : "cm-force-border";
        for (var S = a.pos, $ = S + l.length; ; ) {
          for (
            var R = void 0, G = 0;
            G < i.length && ((R = i[G]), !(R.to > S && R.from <= S));
            G++
          );
          if (R.to >= $) return n(a, l, u, g, m, w, _);
          n(a, l.slice(0, R.to - S), u, g, null, w, _),
            (g = null),
            (l = l.slice(R.to - S)),
            (S = R.to);
        }
      };
    }
    function Lp(n, i, a, l) {
      var u = !l && a.widgetNode;
      u && n.map.push(n.pos, n.pos + i, u),
        !l &&
          n.cm.display.input.needsContentAttribute &&
          (u || (u = n.content.appendChild(document.createElement("span"))),
          u.setAttribute("cm-marker", a.id)),
        u && (n.cm.display.input.setUneditable(u), n.content.appendChild(u)),
        (n.pos += i),
        (n.trailingSpace = !1);
    }
    function tx(n, i, a) {
      var l = n.markedSpans,
        u = n.text,
        g = 0;
      if (!l) {
        for (var m = 1; m < a.length; m += 2)
          i.addToken(i, u.slice(g, (g = a[m])), Cp(a[m + 1], i.cm.options));
        return;
      }
      for (var w = u.length, _ = 0, S = 1, $ = "", R, G, U = 0, ee, fe, ge, we, ke; ; ) {
        if (U == _) {
          (ee = fe = ge = G = ""), (ke = null), (we = null), (U = 1 / 0);
          for (var xe = [], Ee = void 0, He = 0; He < l.length; ++He) {
            var Re = l[He],
              Je = Re.marker;
            if (Je.type == "bookmark" && Re.from == _ && Je.widgetNode) xe.push(Je);
            else if (
              Re.from <= _ &&
              (Re.to == null || Re.to > _ || (Je.collapsed && Re.to == _ && Re.from == _))
            ) {
              if (
                (Re.to != null && Re.to != _ && U > Re.to && ((U = Re.to), (fe = "")),
                Je.className && (ee += " " + Je.className),
                Je.css && (G = (G ? G + ";" : "") + Je.css),
                Je.startStyle && Re.from == _ && (ge += " " + Je.startStyle),
                Je.endStyle && Re.to == U && (Ee || (Ee = [])).push(Je.endStyle, Re.to),
                Je.title && ((ke || (ke = {})).title = Je.title),
                Je.attributes)
              )
                for (var wt in Je.attributes) (ke || (ke = {}))[wt] = Je.attributes[wt];
              Je.collapsed && (!we || ju(we.marker, Je) < 0) && (we = Re);
            } else Re.from > _ && U > Re.from && (U = Re.from);
          }
          if (Ee) for (var jt = 0; jt < Ee.length; jt += 2) Ee[jt + 1] == U && (fe += " " + Ee[jt]);
          if (!we || we.from == _) for (var Ct = 0; Ct < xe.length; ++Ct) Lp(i, 0, xe[Ct]);
          if (we && (we.from || 0) == _) {
            if (
              (Lp(i, (we.to == null ? w + 1 : we.to) - _, we.marker, we.from == null),
              we.to == null)
            )
              return;
            we.to == _ && (we = !1);
          }
        }
        if (_ >= w) break;
        for (var An = Math.min(w, U); ; ) {
          if ($) {
            var yn = _ + $.length;
            if (!we) {
              var Ot = yn > An ? $.slice(0, An - _) : $;
              i.addToken(i, Ot, R ? R + ee : ee, ge, _ + Ot.length == U ? fe : "", G, ke);
            }
            if (yn >= An) {
              ($ = $.slice(An - _)), (_ = An);
              break;
            }
            (_ = yn), (ge = "");
          }
          ($ = u.slice(g, (g = a[S++]))), (R = Cp(a[S++], i.cm.options));
        }
      }
    }
    function Ap(n, i, a) {
      (this.line = i),
        (this.rest = j1(i)),
        (this.size = this.rest ? T(ue(this.rest)) - a + 1 : 1),
        (this.node = this.text = null),
        (this.hidden = gi(n, i));
    }
    function Sa(n, i, a) {
      for (var l = [], u, g = i; g < a; g = u) {
        var m = new Ap(n.doc, Oe(n.doc, g), g);
        (u = g + m.size), l.push(m);
      }
      return l;
    }
    var Bo = null;
    function nx(n) {
      Bo ? Bo.ops.push(n) : (n.ownsGroup = Bo = { ops: [n], delayedCallbacks: [] });
    }
    function rx(n) {
      var i = n.delayedCallbacks,
        a = 0;
      do {
        for (; a < i.length; a++) i[a].call(null);
        for (var l = 0; l < n.ops.length; l++) {
          var u = n.ops[l];
          if (u.cursorActivityHandlers)
            for (; u.cursorActivityCalled < u.cursorActivityHandlers.length; )
              u.cursorActivityHandlers[u.cursorActivityCalled++].call(null, u.cm);
        }
      } while (a < i.length);
    }
    function ix(n, i) {
      var a = n.ownsGroup;
      if (a)
        try {
          rx(a);
        } finally {
          (Bo = null), i(a);
        }
    }
    var Is = null;
    function Wt(n, i) {
      var a = qr(n, i);
      if (a.length) {
        var l = Array.prototype.slice.call(arguments, 2),
          u;
        Bo ? (u = Bo.delayedCallbacks) : Is ? (u = Is) : ((u = Is = []), setTimeout(ox, 0));
        for (
          var g = function (w) {
              u.push(function () {
                return a[w].apply(null, l);
              });
            },
            m = 0;
          m < a.length;
          ++m
        )
          g(m);
      }
    }
    function ox() {
      var n = Is;
      Is = null;
      for (var i = 0; i < n.length; ++i) n[i]();
    }
    function Mp(n, i, a, l) {
      for (var u = 0; u < i.changes.length; u++) {
        var g = i.changes[u];
        g == "text"
          ? lx(n, i)
          : g == "gutter"
            ? $p(n, i, a, l)
            : g == "class"
              ? Yu(n, i)
              : g == "widget" && ax(n, i, l);
      }
      i.changes = null;
    }
    function Fs(n) {
      return (
        n.node == n.text &&
          ((n.node = k("div", null, null, "position: relative")),
          n.text.parentNode && n.text.parentNode.replaceChild(n.node, n.text),
          n.node.appendChild(n.text),
          h && p < 8 && (n.node.style.zIndex = 2)),
        n.node
      );
    }
    function sx(n, i) {
      var a = i.bgClass ? i.bgClass + " " + (i.line.bgClass || "") : i.line.bgClass;
      if ((a && (a += " CodeMirror-linebackground"), i.background))
        a
          ? (i.background.className = a)
          : (i.background.parentNode.removeChild(i.background), (i.background = null));
      else if (a) {
        var l = Fs(i);
        (i.background = l.insertBefore(k("div", null, a), l.firstChild)),
          n.display.input.setUneditable(i.background);
      }
    }
    function Np(n, i) {
      var a = n.display.externalMeasured;
      return a && a.line == i.line
        ? ((n.display.externalMeasured = null), (i.measure = a.measure), a.built)
        : Ep(n, i);
    }
    function lx(n, i) {
      var a = i.text.className,
        l = Np(n, i);
      i.text == i.node && (i.node = l.pre),
        i.text.parentNode.replaceChild(l.pre, i.text),
        (i.text = l.pre),
        l.bgClass != i.bgClass || l.textClass != i.textClass
          ? ((i.bgClass = l.bgClass), (i.textClass = l.textClass), Yu(n, i))
          : a && (i.text.className = a);
    }
    function Yu(n, i) {
      sx(n, i),
        i.line.wrapClass
          ? (Fs(i).className = i.line.wrapClass)
          : i.node != i.text && (i.node.className = "");
      var a = i.textClass ? i.textClass + " " + (i.line.textClass || "") : i.line.textClass;
      i.text.className = a || "";
    }
    function $p(n, i, a, l) {
      if (
        (i.gutter && (i.node.removeChild(i.gutter), (i.gutter = null)),
        i.gutterBackground && (i.node.removeChild(i.gutterBackground), (i.gutterBackground = null)),
        i.line.gutterClass)
      ) {
        var u = Fs(i);
        (i.gutterBackground = k(
          "div",
          null,
          "CodeMirror-gutter-background " + i.line.gutterClass,
          "left: " +
            (n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) +
            "px; width: " +
            l.gutterTotalWidth +
            "px",
        )),
          n.display.input.setUneditable(i.gutterBackground),
          u.insertBefore(i.gutterBackground, i.text);
      }
      var g = i.line.gutterMarkers;
      if (n.options.lineNumbers || g) {
        var m = Fs(i),
          w = (i.gutter = k(
            "div",
            null,
            "CodeMirror-gutter-wrapper",
            "left: " + (n.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) + "px",
          ));
        if (
          (w.setAttribute("aria-hidden", "true"),
          n.display.input.setUneditable(w),
          m.insertBefore(w, i.text),
          i.line.gutterClass && (w.className += " " + i.line.gutterClass),
          n.options.lineNumbers &&
            (!g || !g["CodeMirror-linenumbers"]) &&
            (i.lineNumber = w.appendChild(
              k(
                "div",
                pe(n.options, a),
                "CodeMirror-linenumber CodeMirror-gutter-elt",
                "left: " +
                  l.gutterLeft["CodeMirror-linenumbers"] +
                  "px; width: " +
                  n.display.lineNumInnerWidth +
                  "px",
              ),
            )),
          g)
        )
          for (var _ = 0; _ < n.display.gutterSpecs.length; ++_) {
            var S = n.display.gutterSpecs[_].className,
              $ = g.hasOwnProperty(S) && g[S];
            $ &&
              w.appendChild(
                k(
                  "div",
                  [$],
                  "CodeMirror-gutter-elt",
                  "left: " + l.gutterLeft[S] + "px; width: " + l.gutterWidth[S] + "px",
                ),
              );
          }
      }
    }
    function ax(n, i, a) {
      i.alignable && (i.alignable = null);
      for (var l = te("CodeMirror-linewidget"), u = i.node.firstChild, g = void 0; u; u = g)
        (g = u.nextSibling), l.test(u.className) && i.node.removeChild(u);
      Op(n, i, a);
    }
    function cx(n, i, a, l) {
      var u = Np(n, i);
      return (
        (i.text = i.node = u.pre),
        u.bgClass && (i.bgClass = u.bgClass),
        u.textClass && (i.textClass = u.textClass),
        Yu(n, i),
        $p(n, i, a, l),
        Op(n, i, l),
        i.node
      );
    }
    function Op(n, i, a) {
      if ((Pp(n, i.line, i, a, !0), i.rest))
        for (var l = 0; l < i.rest.length; l++) Pp(n, i.rest[l], i, a, !1);
    }
    function Pp(n, i, a, l, u) {
      if (i.widgets)
        for (var g = Fs(a), m = 0, w = i.widgets; m < w.length; ++m) {
          var _ = w[m],
            S = k(
              "div",
              [_.node],
              "CodeMirror-linewidget" + (_.className ? " " + _.className : ""),
            );
          _.handleMouseEvents || S.setAttribute("cm-ignore-events", "true"),
            ux(_, S, a, l),
            n.display.input.setUneditable(S),
            u && _.above ? g.insertBefore(S, a.gutter || a.text) : g.appendChild(S),
            Wt(_, "redraw");
        }
    }
    function ux(n, i, a, l) {
      if (n.noHScroll) {
        (a.alignable || (a.alignable = [])).push(i);
        var u = l.wrapperWidth;
        (i.style.left = l.fixedPos + "px"),
          n.coverGutter ||
            ((u -= l.gutterTotalWidth), (i.style.paddingLeft = l.gutterTotalWidth + "px")),
          (i.style.width = u + "px");
      }
      n.coverGutter &&
        ((i.style.zIndex = 5),
        (i.style.position = "relative"),
        n.noHScroll || (i.style.marginLeft = -l.gutterTotalWidth + "px"));
    }
    function Hs(n) {
      if (n.height != null) return n.height;
      var i = n.doc.cm;
      if (!i) return 0;
      if (!re(document.body, n.node)) {
        var a = "position: relative;";
        n.coverGutter && (a += "margin-left: -" + i.display.gutters.offsetWidth + "px;"),
          n.noHScroll && (a += "width: " + i.display.wrapper.clientWidth + "px;"),
          I(i.display.measure, k("div", [n.node], null, a));
      }
      return (n.height = n.node.parentNode.offsetHeight);
    }
    function Vr(n, i) {
      for (var a = $s(i); a != n.wrapper; a = a.parentNode)
        if (
          !a ||
          (a.nodeType == 1 && a.getAttribute("cm-ignore-events") == "true") ||
          (a.parentNode == n.sizer && a != n.mover)
        )
          return !0;
    }
    function ka(n) {
      return n.lineSpace.offsetTop;
    }
    function Zu(n) {
      return n.mover.offsetHeight - n.lineSpace.offsetHeight;
    }
    function Rp(n) {
      if (n.cachedPaddingH) return n.cachedPaddingH;
      var i = I(n.measure, k("pre", "x", "CodeMirror-line-like")),
        a = window.getComputedStyle ? window.getComputedStyle(i) : i.currentStyle,
        l = { left: parseInt(a.paddingLeft), right: parseInt(a.paddingRight) };
      return !isNaN(l.left) && !isNaN(l.right) && (n.cachedPaddingH = l), l;
    }
    function Cr(n) {
      return Ye - n.display.nativeBarWidth;
    }
    function io(n) {
      return n.display.scroller.clientWidth - Cr(n) - n.display.barWidth;
    }
    function Ju(n) {
      return n.display.scroller.clientHeight - Cr(n) - n.display.barHeight;
    }
    function fx(n, i, a) {
      var l = n.options.lineWrapping,
        u = l && io(n);
      if (!i.measure.heights || (l && i.measure.width != u)) {
        var g = (i.measure.heights = []);
        if (l) {
          i.measure.width = u;
          for (var m = i.text.firstChild.getClientRects(), w = 0; w < m.length - 1; w++) {
            var _ = m[w],
              S = m[w + 1];
            Math.abs(_.bottom - S.bottom) > 2 && g.push((_.bottom + S.top) / 2 - a.top);
          }
        }
        g.push(a.bottom - a.top);
      }
    }
    function Dp(n, i, a) {
      if (n.line == i) return { map: n.measure.map, cache: n.measure.cache };
      if (n.rest) {
        for (var l = 0; l < n.rest.length; l++)
          if (n.rest[l] == i) return { map: n.measure.maps[l], cache: n.measure.caches[l] };
        for (var u = 0; u < n.rest.length; u++)
          if (T(n.rest[u]) > a)
            return { map: n.measure.maps[u], cache: n.measure.caches[u], before: !0 };
      }
    }
    function dx(n, i) {
      i = ur(i);
      var a = T(i),
        l = (n.display.externalMeasured = new Ap(n.doc, i, a));
      l.lineN = a;
      var u = (l.built = Ep(n, l));
      return (l.text = u.pre), I(n.display.lineMeasure, u.pre), l;
    }
    function zp(n, i, a, l) {
      return Er(n, Wo(n, i), a, l);
    }
    function Qu(n, i) {
      if (i >= n.display.viewFrom && i < n.display.viewTo) return n.display.view[lo(n, i)];
      var a = n.display.externalMeasured;
      if (a && i >= a.lineN && i < a.lineN + a.size) return a;
    }
    function Wo(n, i) {
      var a = T(i),
        l = Qu(n, a);
      l && !l.text
        ? (l = null)
        : l && l.changes && (Mp(n, l, a, of(n)), (n.curOp.forceUpdate = !0)),
        l || (l = dx(n, i));
      var u = Dp(l, i, a);
      return {
        line: i,
        view: l,
        rect: null,
        map: u.map,
        cache: u.cache,
        before: u.before,
        hasHeights: !1,
      };
    }
    function Er(n, i, a, l, u) {
      i.before && (a = -1);
      var g = a + (l || ""),
        m;
      return (
        i.cache.hasOwnProperty(g)
          ? (m = i.cache[g])
          : (i.rect || (i.rect = i.view.text.getBoundingClientRect()),
            i.hasHeights || (fx(n, i.view, i.rect), (i.hasHeights = !0)),
            (m = px(n, i, a, l)),
            m.bogus || (i.cache[g] = m)),
        { left: m.left, right: m.right, top: u ? m.rtop : m.top, bottom: u ? m.rbottom : m.bottom }
      );
    }
    var Ip = { left: 0, right: 0, top: 0, bottom: 0 };
    function Fp(n, i, a) {
      for (var l, u, g, m, w, _, S = 0; S < n.length; S += 3)
        if (
          ((w = n[S]),
          (_ = n[S + 1]),
          i < w
            ? ((u = 0), (g = 1), (m = "left"))
            : i < _
              ? ((u = i - w), (g = u + 1))
              : (S == n.length - 3 || (i == _ && n[S + 3] > i)) &&
                ((g = _ - w), (u = g - 1), i >= _ && (m = "right")),
          u != null)
        ) {
          if (
            ((l = n[S + 2]),
            w == _ && a == (l.insertLeft ? "left" : "right") && (m = a),
            a == "left" && u == 0)
          )
            for (; S && n[S - 2] == n[S - 3] && n[S - 1].insertLeft; )
              (l = n[(S -= 3) + 2]), (m = "left");
          if (a == "right" && u == _ - w)
            for (; S < n.length - 3 && n[S + 3] == n[S + 4] && !n[S + 5].insertLeft; )
              (l = n[(S += 3) + 2]), (m = "right");
          break;
        }
      return { node: l, start: u, end: g, collapse: m, coverStart: w, coverEnd: _ };
    }
    function hx(n, i) {
      var a = Ip;
      if (i == "left") for (var l = 0; l < n.length && (a = n[l]).left == a.right; l++);
      else for (var u = n.length - 1; u >= 0 && (a = n[u]).left == a.right; u--);
      return a;
    }
    function px(n, i, a, l) {
      var u = Fp(i.map, a, l),
        g = u.node,
        m = u.start,
        w = u.end,
        _ = u.collapse,
        S;
      if (g.nodeType == 3) {
        for (var $ = 0; $ < 4; $++) {
          for (; m && tt(i.line.text.charAt(u.coverStart + m)); ) --m;
          for (; u.coverStart + w < u.coverEnd && tt(i.line.text.charAt(u.coverStart + w)); ) ++w;
          if (
            (h && p < 9 && m == 0 && w == u.coverEnd - u.coverStart
              ? (S = g.parentNode.getBoundingClientRect())
              : (S = hx(W(g, m, w).getClientRects(), l)),
            S.left || S.right || m == 0)
          )
            break;
          (w = m), (m = m - 1), (_ = "right");
        }
        h && p < 11 && (S = gx(n.display.measure, S));
      } else {
        m > 0 && (_ = l = "right");
        var R;
        n.options.lineWrapping && (R = g.getClientRects()).length > 1
          ? (S = R[l == "right" ? R.length - 1 : 0])
          : (S = g.getBoundingClientRect());
      }
      if (h && p < 9 && !m && (!S || (!S.left && !S.right))) {
        var G = g.parentNode.getClientRects()[0];
        G
          ? (S = { left: G.left, right: G.left + Vo(n.display), top: G.top, bottom: G.bottom })
          : (S = Ip);
      }
      for (
        var U = S.top - i.rect.top,
          ee = S.bottom - i.rect.top,
          fe = (U + ee) / 2,
          ge = i.view.measure.heights,
          we = 0;
        we < ge.length - 1 && !(fe < ge[we]);
        we++
      );
      var ke = we ? ge[we - 1] : 0,
        xe = ge[we],
        Ee = {
          left: (_ == "right" ? S.right : S.left) - i.rect.left,
          right: (_ == "left" ? S.left : S.right) - i.rect.left,
          top: ke,
          bottom: xe,
        };
      return (
        !S.left && !S.right && (Ee.bogus = !0),
        n.options.singleCursorHeightPerLine || ((Ee.rtop = U), (Ee.rbottom = ee)),
        Ee
      );
    }
    function gx(n, i) {
      if (
        !window.screen ||
        screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI ||
        !Bu(n)
      )
        return i;
      var a = screen.logicalXDPI / screen.deviceXDPI,
        l = screen.logicalYDPI / screen.deviceYDPI;
      return { left: i.left * a, right: i.right * a, top: i.top * l, bottom: i.bottom * l };
    }
    function Hp(n) {
      if (n.measure && ((n.measure.cache = {}), (n.measure.heights = null), n.rest))
        for (var i = 0; i < n.rest.length; i++) n.measure.caches[i] = {};
    }
    function qp(n) {
      (n.display.externalMeasure = null), V(n.display.lineMeasure);
      for (var i = 0; i < n.display.view.length; i++) Hp(n.display.view[i]);
    }
    function qs(n) {
      qp(n),
        (n.display.cachedCharWidth = n.display.cachedTextHeight = n.display.cachedPaddingH = null),
        n.options.lineWrapping || (n.display.maxLineChanged = !0),
        (n.display.lineNumChars = null);
    }
    function Bp(n) {
      return b && D
        ? -(n.body.getBoundingClientRect().left - parseInt(getComputedStyle(n.body).marginLeft))
        : n.defaultView.pageXOffset || (n.documentElement || n.body).scrollLeft;
    }
    function Wp(n) {
      return b && D
        ? -(n.body.getBoundingClientRect().top - parseInt(getComputedStyle(n.body).marginTop))
        : n.defaultView.pageYOffset || (n.documentElement || n.body).scrollTop;
    }
    function ef(n) {
      var i = ur(n),
        a = i.widgets,
        l = 0;
      if (a) for (var u = 0; u < a.length; ++u) a[u].above && (l += Hs(a[u]));
      return l;
    }
    function Ta(n, i, a, l, u) {
      if (!u) {
        var g = ef(i);
        (a.top += g), (a.bottom += g);
      }
      if (l == "line") return a;
      l || (l = "local");
      var m = Ur(i);
      if (
        (l == "local" ? (m += ka(n.display)) : (m -= n.display.viewOffset),
        l == "page" || l == "window")
      ) {
        var w = n.display.lineSpace.getBoundingClientRect();
        m += w.top + (l == "window" ? 0 : Wp(it(n)));
        var _ = w.left + (l == "window" ? 0 : Bp(it(n)));
        (a.left += _), (a.right += _);
      }
      return (a.top += m), (a.bottom += m), a;
    }
    function Up(n, i, a) {
      if (a == "div") return i;
      var l = i.left,
        u = i.top;
      if (a == "page") (l -= Bp(it(n))), (u -= Wp(it(n)));
      else if (a == "local" || !a) {
        var g = n.display.sizer.getBoundingClientRect();
        (l += g.left), (u += g.top);
      }
      var m = n.display.lineSpace.getBoundingClientRect();
      return { left: l - m.left, top: u - m.top };
    }
    function Ca(n, i, a, l, u) {
      return l || (l = Oe(n.doc, i.line)), Ta(n, l, zp(n, l, i.ch, u), a);
    }
    function fr(n, i, a, l, u, g) {
      (l = l || Oe(n.doc, i.line)), u || (u = Wo(n, l));
      function m(ee, fe) {
        var ge = Er(n, u, ee, fe ? "right" : "left", g);
        return fe ? (ge.left = ge.right) : (ge.right = ge.left), Ta(n, l, ge, a);
      }
      var w = Ue(l, n.doc.direction),
        _ = i.ch,
        S = i.sticky;
      if (
        (_ >= l.text.length
          ? ((_ = l.text.length), (S = "before"))
          : _ <= 0 && ((_ = 0), (S = "after")),
        !w)
      )
        return m(S == "before" ? _ - 1 : _, S == "before");
      function $(ee, fe, ge) {
        var we = w[fe],
          ke = we.level == 1;
        return m(ge ? ee - 1 : ee, ke != ge);
      }
      var R = ir(w, _, S),
        G = zn,
        U = $(_, R, S == "before");
      return G != null && (U.other = $(_, G, S != "before")), U;
    }
    function Vp(n, i) {
      var a = 0;
      (i = Ke(n.doc, i)), n.options.lineWrapping || (a = Vo(n.display) * i.ch);
      var l = Oe(n.doc, i.line),
        u = Ur(l) + ka(n.display);
      return { left: a, right: a, top: u, bottom: u + l.height };
    }
    function tf(n, i, a, l, u) {
      var g = Q(n, i, a);
      return (g.xRel = u), l && (g.outside = l), g;
    }
    function nf(n, i, a) {
      var l = n.doc;
      if (((a += n.display.viewOffset), a < 0)) return tf(l.first, 0, null, -1, -1);
      var u = P(l, a),
        g = l.first + l.size - 1;
      if (u > g) return tf(l.first + l.size - 1, Oe(l, g).text.length, null, 1, 1);
      i < 0 && (i = 0);
      for (var m = Oe(l, u); ; ) {
        var w = vx(n, m, u, i, a),
          _ = U1(m, w.ch + (w.xRel > 0 || w.outside > 0 ? 1 : 0));
        if (!_) return w;
        var S = _.find(1);
        if (S.line == u) return S;
        m = Oe(l, (u = S.line));
      }
    }
    function jp(n, i, a, l) {
      l -= ef(i);
      var u = i.text.length,
        g = Jt(
          function (m) {
            return Er(n, a, m - 1).bottom <= l;
          },
          u,
          0,
        );
      return (
        (u = Jt(
          function (m) {
            return Er(n, a, m).top > l;
          },
          g,
          u,
        )),
        { begin: g, end: u }
      );
    }
    function Gp(n, i, a, l) {
      a || (a = Wo(n, i));
      var u = Ta(n, i, Er(n, a, l), "line").top;
      return jp(n, i, a, u);
    }
    function rf(n, i, a, l) {
      return n.bottom <= a ? !1 : n.top > a ? !0 : (l ? n.left : n.right) > i;
    }
    function vx(n, i, a, l, u) {
      u -= Ur(i);
      var g = Wo(n, i),
        m = ef(i),
        w = 0,
        _ = i.text.length,
        S = !0,
        $ = Ue(i, n.doc.direction);
      if ($) {
        var R = (n.options.lineWrapping ? yx : mx)(n, i, a, g, $, l, u);
        (S = R.level != 1), (w = S ? R.from : R.to - 1), (_ = S ? R.to : R.from - 1);
      }
      var G = null,
        U = null,
        ee = Jt(
          function (He) {
            var Re = Er(n, g, He);
            return (
              (Re.top += m),
              (Re.bottom += m),
              rf(Re, l, u, !1) ? (Re.top <= u && Re.left <= l && ((G = He), (U = Re)), !0) : !1
            );
          },
          w,
          _,
        ),
        fe,
        ge,
        we = !1;
      if (U) {
        var ke = l - U.left < U.right - l,
          xe = ke == S;
        (ee = G + (xe ? 0 : 1)), (ge = xe ? "after" : "before"), (fe = ke ? U.left : U.right);
      } else {
        !S && (ee == _ || ee == w) && ee++,
          (ge =
            ee == 0
              ? "after"
              : ee == i.text.length
                ? "before"
                : Er(n, g, ee - (S ? 1 : 0)).bottom + m <= u == S
                  ? "after"
                  : "before");
        var Ee = fr(n, Q(a, ee, ge), "line", i, g);
        (fe = Ee.left), (we = u < Ee.top ? -1 : u >= Ee.bottom ? 1 : 0);
      }
      return (ee = Ft(i.text, ee, 1)), tf(a, ee, ge, we, l - fe);
    }
    function mx(n, i, a, l, u, g, m) {
      var w = Jt(
          function (R) {
            var G = u[R],
              U = G.level != 1;
            return rf(
              fr(n, Q(a, U ? G.to : G.from, U ? "before" : "after"), "line", i, l),
              g,
              m,
              !0,
            );
          },
          0,
          u.length - 1,
        ),
        _ = u[w];
      if (w > 0) {
        var S = _.level != 1,
          $ = fr(n, Q(a, S ? _.from : _.to, S ? "after" : "before"), "line", i, l);
        rf($, g, m, !0) && $.top > m && (_ = u[w - 1]);
      }
      return _;
    }
    function yx(n, i, a, l, u, g, m) {
      var w = jp(n, i, l, m),
        _ = w.begin,
        S = w.end;
      /\s/.test(i.text.charAt(S - 1)) && S--;
      for (var $ = null, R = null, G = 0; G < u.length; G++) {
        var U = u[G];
        if (!(U.from >= S || U.to <= _)) {
          var ee = U.level != 1,
            fe = Er(n, l, ee ? Math.min(S, U.to) - 1 : Math.max(_, U.from)).right,
            ge = fe < g ? g - fe + 1e9 : fe - g;
          (!$ || R > ge) && (($ = U), (R = ge));
        }
      }
      return (
        $ || ($ = u[u.length - 1]),
        $.from < _ && ($ = { from: _, to: $.to, level: $.level }),
        $.to > S && ($ = { from: $.from, to: S, level: $.level }),
        $
      );
    }
    var oo;
    function Uo(n) {
      if (n.cachedTextHeight != null) return n.cachedTextHeight;
      if (oo == null) {
        oo = k("pre", null, "CodeMirror-line-like");
        for (var i = 0; i < 49; ++i)
          oo.appendChild(document.createTextNode("x")), oo.appendChild(k("br"));
        oo.appendChild(document.createTextNode("x"));
      }
      I(n.measure, oo);
      var a = oo.offsetHeight / 50;
      return a > 3 && (n.cachedTextHeight = a), V(n.measure), a || 1;
    }
    function Vo(n) {
      if (n.cachedCharWidth != null) return n.cachedCharWidth;
      var i = k("span", "xxxxxxxxxx"),
        a = k("pre", [i], "CodeMirror-line-like");
      I(n.measure, a);
      var l = i.getBoundingClientRect(),
        u = (l.right - l.left) / 10;
      return u > 2 && (n.cachedCharWidth = u), u || 10;
    }
    function of(n) {
      for (
        var i = n.display,
          a = {},
          l = {},
          u = i.gutters.clientLeft,
          g = i.gutters.firstChild,
          m = 0;
        g;
        g = g.nextSibling, ++m
      ) {
        var w = n.display.gutterSpecs[m].className;
        (a[w] = g.offsetLeft + g.clientLeft + u), (l[w] = g.clientWidth);
      }
      return {
        fixedPos: sf(i),
        gutterTotalWidth: i.gutters.offsetWidth,
        gutterLeft: a,
        gutterWidth: l,
        wrapperWidth: i.wrapper.clientWidth,
      };
    }
    function sf(n) {
      return n.scroller.getBoundingClientRect().left - n.sizer.getBoundingClientRect().left;
    }
    function Kp(n) {
      var i = Uo(n.display),
        a = n.options.lineWrapping,
        l = a && Math.max(5, n.display.scroller.clientWidth / Vo(n.display) - 3);
      return function (u) {
        if (gi(n.doc, u)) return 0;
        var g = 0;
        if (u.widgets)
          for (var m = 0; m < u.widgets.length; m++)
            u.widgets[m].height && (g += u.widgets[m].height);
        return a ? g + (Math.ceil(u.text.length / l) || 1) * i : g + i;
      };
    }
    function lf(n) {
      var i = n.doc,
        a = Kp(n);
      i.iter(function (l) {
        var u = a(l);
        u != l.height && In(l, u);
      });
    }
    function so(n, i, a, l) {
      var u = n.display;
      if (!a && $s(i).getAttribute("cm-not-content") == "true") return null;
      var g,
        m,
        w = u.lineSpace.getBoundingClientRect();
      try {
        (g = i.clientX - w.left), (m = i.clientY - w.top);
      } catch {
        return null;
      }
      var _ = nf(n, g, m),
        S;
      if (l && _.xRel > 0 && (S = Oe(n.doc, _.line).text).length == _.ch) {
        var $ = de(S, S.length, n.options.tabSize) - S.length;
        _ = Q(_.line, Math.max(0, Math.round((g - Rp(n.display).left) / Vo(n.display)) - $));
      }
      return _;
    }
    function lo(n, i) {
      if (i >= n.display.viewTo || ((i -= n.display.viewFrom), i < 0)) return null;
      for (var a = n.display.view, l = 0; l < a.length; l++)
        if (((i -= a[l].size), i < 0)) return l;
    }
    function vn(n, i, a, l) {
      i == null && (i = n.doc.first), a == null && (a = n.doc.first + n.doc.size), l || (l = 0);
      var u = n.display;
      if (
        (l &&
          a < u.viewTo &&
          (u.updateLineNumbers == null || u.updateLineNumbers > i) &&
          (u.updateLineNumbers = i),
        (n.curOp.viewChanged = !0),
        i >= u.viewTo)
      )
        Wr && Gu(n.doc, i) < u.viewTo && mi(n);
      else if (a <= u.viewFrom)
        Wr && Tp(n.doc, a + l) > u.viewFrom ? mi(n) : ((u.viewFrom += l), (u.viewTo += l));
      else if (i <= u.viewFrom && a >= u.viewTo) mi(n);
      else if (i <= u.viewFrom) {
        var g = Ea(n, a, a + l, 1);
        g ? ((u.view = u.view.slice(g.index)), (u.viewFrom = g.lineN), (u.viewTo += l)) : mi(n);
      } else if (a >= u.viewTo) {
        var m = Ea(n, i, i, -1);
        m ? ((u.view = u.view.slice(0, m.index)), (u.viewTo = m.lineN)) : mi(n);
      } else {
        var w = Ea(n, i, i, -1),
          _ = Ea(n, a, a + l, 1);
        w && _
          ? ((u.view = u.view
              .slice(0, w.index)
              .concat(Sa(n, w.lineN, _.lineN))
              .concat(u.view.slice(_.index))),
            (u.viewTo += l))
          : mi(n);
      }
      var S = u.externalMeasured;
      S && (a < S.lineN ? (S.lineN += l) : i < S.lineN + S.size && (u.externalMeasured = null));
    }
    function vi(n, i, a) {
      n.curOp.viewChanged = !0;
      var l = n.display,
        u = n.display.externalMeasured;
      if (
        (u && i >= u.lineN && i < u.lineN + u.size && (l.externalMeasured = null),
        !(i < l.viewFrom || i >= l.viewTo))
      ) {
        var g = l.view[lo(n, i)];
        if (g.node != null) {
          var m = g.changes || (g.changes = []);
          Ce(m, a) == -1 && m.push(a);
        }
      }
    }
    function mi(n) {
      (n.display.viewFrom = n.display.viewTo = n.doc.first),
        (n.display.view = []),
        (n.display.viewOffset = 0);
    }
    function Ea(n, i, a, l) {
      var u = lo(n, i),
        g,
        m = n.display.view;
      if (!Wr || a == n.doc.first + n.doc.size) return { index: u, lineN: a };
      for (var w = n.display.viewFrom, _ = 0; _ < u; _++) w += m[_].size;
      if (w != i) {
        if (l > 0) {
          if (u == m.length - 1) return null;
          (g = w + m[u].size - i), u++;
        } else g = w - i;
        (i += g), (a += g);
      }
      for (; Gu(n.doc, a) != a; ) {
        if (u == (l < 0 ? 0 : m.length - 1)) return null;
        (a += l * m[u - (l < 0 ? 1 : 0)].size), (u += l);
      }
      return { index: u, lineN: a };
    }
    function bx(n, i, a) {
      var l = n.display,
        u = l.view;
      u.length == 0 || i >= l.viewTo || a <= l.viewFrom
        ? ((l.view = Sa(n, i, a)), (l.viewFrom = i))
        : (l.viewFrom > i
            ? (l.view = Sa(n, i, l.viewFrom).concat(l.view))
            : l.viewFrom < i && (l.view = l.view.slice(lo(n, i))),
          (l.viewFrom = i),
          l.viewTo < a
            ? (l.view = l.view.concat(Sa(n, l.viewTo, a)))
            : l.viewTo > a && (l.view = l.view.slice(0, lo(n, a)))),
        (l.viewTo = a);
    }
    function Xp(n) {
      for (var i = n.display.view, a = 0, l = 0; l < i.length; l++) {
        var u = i[l];
        !u.hidden && (!u.node || u.changes) && ++a;
      }
      return a;
    }
    function Bs(n) {
      n.display.input.showSelection(n.display.input.prepareSelection());
    }
    function Yp(n, i) {
      i === void 0 && (i = !0);
      var a = n.doc,
        l = {},
        u = (l.cursors = document.createDocumentFragment()),
        g = (l.selection = document.createDocumentFragment()),
        m = n.options.$customCursor;
      m && (i = !0);
      for (var w = 0; w < a.sel.ranges.length; w++)
        if (!(!i && w == a.sel.primIndex)) {
          var _ = a.sel.ranges[w];
          if (!(_.from().line >= n.display.viewTo || _.to().line < n.display.viewFrom)) {
            var S = _.empty();
            if (m) {
              var $ = m(n, _);
              $ && af(n, $, u);
            } else (S || n.options.showCursorWhenSelecting) && af(n, _.head, u);
            S || wx(n, _, g);
          }
        }
      return l;
    }
    function af(n, i, a) {
      var l = fr(n, i, "div", null, null, !n.options.singleCursorHeightPerLine),
        u = a.appendChild(k("div", " ", "CodeMirror-cursor"));
      if (
        ((u.style.left = l.left + "px"),
        (u.style.top = l.top + "px"),
        (u.style.height = Math.max(0, l.bottom - l.top) * n.options.cursorHeight + "px"),
        /\bcm-fat-cursor\b/.test(n.getWrapperElement().className))
      ) {
        var g = Ca(n, i, "div", null, null),
          m = g.right - g.left;
        u.style.width = (m > 0 ? m : n.defaultCharWidth()) + "px";
      }
      if (l.other) {
        var w = a.appendChild(k("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
        (w.style.display = ""),
          (w.style.left = l.other.left + "px"),
          (w.style.top = l.other.top + "px"),
          (w.style.height = (l.other.bottom - l.other.top) * 0.85 + "px");
      }
    }
    function La(n, i) {
      return n.top - i.top || n.left - i.left;
    }
    function wx(n, i, a) {
      var l = n.display,
        u = n.doc,
        g = document.createDocumentFragment(),
        m = Rp(n.display),
        w = m.left,
        _ = Math.max(l.sizerWidth, io(n) - l.sizer.offsetLeft) - m.right,
        S = u.direction == "ltr";
      function $(xe, Ee, He, Re) {
        Ee < 0 && (Ee = 0),
          (Ee = Math.round(Ee)),
          (Re = Math.round(Re)),
          g.appendChild(
            k(
              "div",
              null,
              "CodeMirror-selected",
              "position: absolute; left: " +
                xe +
                `px;
                             top: ` +
                Ee +
                "px; width: " +
                (He ?? _ - xe) +
                `px;
                             height: ` +
                (Re - Ee) +
                "px",
            ),
          );
      }
      function R(xe, Ee, He) {
        var Re = Oe(u, xe),
          Je = Re.text.length,
          wt,
          jt;
        function Ct(Ot, bn) {
          return Ca(n, Q(xe, Ot), "div", Re, bn);
        }
        function An(Ot, bn, Kt) {
          var Ht = Gp(n, Re, null, Ot),
            Pt = (bn == "ltr") == (Kt == "after") ? "left" : "right",
            Mt =
              Kt == "after" ? Ht.begin : Ht.end - (/\s/.test(Re.text.charAt(Ht.end - 1)) ? 2 : 1);
          return Ct(Mt, Pt)[Pt];
        }
        var yn = Ue(Re, u.direction);
        return (
          rr(yn, Ee || 0, He ?? Je, function (Ot, bn, Kt, Ht) {
            var Pt = Kt == "ltr",
              Mt = Ct(Ot, Pt ? "left" : "right"),
              wn = Ct(bn - 1, Pt ? "right" : "left"),
              is = Ee == null && Ot == 0,
              Si = He == null && bn == Je,
              rn = Ht == 0,
              Lr = !yn || Ht == yn.length - 1;
            if (wn.top - Mt.top <= 3) {
              var Gt = (S ? is : Si) && rn,
                Rf = (S ? Si : is) && Lr,
                Kr = Gt ? w : (Pt ? Mt : wn).left,
                ho = Rf ? _ : (Pt ? wn : Mt).right;
              $(Kr, Mt.top, ho - Kr, Mt.bottom);
            } else {
              var po, cn, os, Df;
              Pt
                ? ((po = S && is && rn ? w : Mt.left),
                  (cn = S ? _ : An(Ot, Kt, "before")),
                  (os = S ? w : An(bn, Kt, "after")),
                  (Df = S && Si && Lr ? _ : wn.right))
                : ((po = S ? An(Ot, Kt, "before") : w),
                  (cn = !S && is && rn ? _ : Mt.right),
                  (os = !S && Si && Lr ? w : wn.left),
                  (Df = S ? An(bn, Kt, "after") : _)),
                $(po, Mt.top, cn - po, Mt.bottom),
                Mt.bottom < wn.top && $(w, Mt.bottom, null, wn.top),
                $(os, wn.top, Df - os, wn.bottom);
            }
            (!wt || La(Mt, wt) < 0) && (wt = Mt),
              La(wn, wt) < 0 && (wt = wn),
              (!jt || La(Mt, jt) < 0) && (jt = Mt),
              La(wn, jt) < 0 && (jt = wn);
          }),
          { start: wt, end: jt }
        );
      }
      var G = i.from(),
        U = i.to();
      if (G.line == U.line) R(G.line, G.ch, U.ch);
      else {
        var ee = Oe(u, G.line),
          fe = Oe(u, U.line),
          ge = ur(ee) == ur(fe),
          we = R(G.line, G.ch, ge ? ee.text.length + 1 : null).end,
          ke = R(U.line, ge ? 0 : null, U.ch).start;
        ge &&
          (we.top < ke.top - 2
            ? ($(we.right, we.top, null, we.bottom), $(w, ke.top, ke.left, ke.bottom))
            : $(we.right, we.top, ke.left - we.right, we.bottom)),
          we.bottom < ke.top && $(w, we.bottom, null, ke.top);
      }
      a.appendChild(g);
    }
    function cf(n) {
      if (n.state.focused) {
        var i = n.display;
        clearInterval(i.blinker);
        var a = !0;
        (i.cursorDiv.style.visibility = ""),
          n.options.cursorBlinkRate > 0
            ? (i.blinker = setInterval(function () {
                n.hasFocus() || jo(n), (i.cursorDiv.style.visibility = (a = !a) ? "" : "hidden");
              }, n.options.cursorBlinkRate))
            : n.options.cursorBlinkRate < 0 && (i.cursorDiv.style.visibility = "hidden");
      }
    }
    function Zp(n) {
      n.hasFocus() || (n.display.input.focus(), n.state.focused || ff(n));
    }
    function uf(n) {
      (n.state.delayingBlurEvent = !0),
        setTimeout(function () {
          n.state.delayingBlurEvent && ((n.state.delayingBlurEvent = !1), n.state.focused && jo(n));
        }, 100);
    }
    function ff(n, i) {
      n.state.delayingBlurEvent && !n.state.draggingText && (n.state.delayingBlurEvent = !1),
        n.options.readOnly != "nocursor" &&
          (n.state.focused ||
            (Et(n, "focus", n, i),
            (n.state.focused = !0),
            Me(n.display.wrapper, "CodeMirror-focused"),
            !n.curOp &&
              n.display.selForContextMenu != n.doc.sel &&
              (n.display.input.reset(),
              v &&
                setTimeout(function () {
                  return n.display.input.reset(!0);
                }, 20)),
            n.display.input.receivedFocus()),
          cf(n));
    }
    function jo(n, i) {
      n.state.delayingBlurEvent ||
        (n.state.focused &&
          (Et(n, "blur", n, i), (n.state.focused = !1), K(n.display.wrapper, "CodeMirror-focused")),
        clearInterval(n.display.blinker),
        setTimeout(function () {
          n.state.focused || (n.display.shift = !1);
        }, 150));
    }
    function Aa(n) {
      for (
        var i = n.display,
          a = i.lineDiv.offsetTop,
          l = Math.max(0, i.scroller.getBoundingClientRect().top),
          u = i.lineDiv.getBoundingClientRect().top,
          g = 0,
          m = 0;
        m < i.view.length;
        m++
      ) {
        var w = i.view[m],
          _ = n.options.lineWrapping,
          S = void 0,
          $ = 0;
        if (!w.hidden) {
          if (((u += w.line.height), h && p < 8)) {
            var R = w.node.offsetTop + w.node.offsetHeight;
            (S = R - a), (a = R);
          } else {
            var G = w.node.getBoundingClientRect();
            (S = G.bottom - G.top),
              !_ &&
                w.text.firstChild &&
                ($ = w.text.firstChild.getBoundingClientRect().right - G.left - 1);
          }
          var U = w.line.height - S;
          if ((U > 0.005 || U < -0.005) && (u < l && (g -= U), In(w.line, S), Jp(w.line), w.rest))
            for (var ee = 0; ee < w.rest.length; ee++) Jp(w.rest[ee]);
          if ($ > n.display.sizerWidth) {
            var fe = Math.ceil($ / Vo(n.display));
            fe > n.display.maxLineLength &&
              ((n.display.maxLineLength = fe),
              (n.display.maxLine = w.line),
              (n.display.maxLineChanged = !0));
          }
        }
      }
      Math.abs(g) > 2 && (i.scroller.scrollTop += g);
    }
    function Jp(n) {
      if (n.widgets)
        for (var i = 0; i < n.widgets.length; ++i) {
          var a = n.widgets[i],
            l = a.node.parentNode;
          l && (a.height = l.offsetHeight);
        }
    }
    function Ma(n, i, a) {
      var l = a && a.top != null ? Math.max(0, a.top) : n.scroller.scrollTop;
      l = Math.floor(l - ka(n));
      var u = a && a.bottom != null ? a.bottom : l + n.wrapper.clientHeight,
        g = P(i, l),
        m = P(i, u);
      if (a && a.ensure) {
        var w = a.ensure.from.line,
          _ = a.ensure.to.line;
        w < g
          ? ((g = w), (m = P(i, Ur(Oe(i, w)) + n.wrapper.clientHeight)))
          : Math.min(_, i.lastLine()) >= m &&
            ((g = P(i, Ur(Oe(i, _)) - n.wrapper.clientHeight)), (m = _));
      }
      return { from: g, to: Math.max(m, g + 1) };
    }
    function xx(n, i) {
      if (!Lt(n, "scrollCursorIntoView")) {
        var a = n.display,
          l = a.sizer.getBoundingClientRect(),
          u = null,
          g = a.wrapper.ownerDocument;
        if (
          (i.top + l.top < 0
            ? (u = !0)
            : i.bottom + l.top > (g.defaultView.innerHeight || g.documentElement.clientHeight) &&
              (u = !1),
          u != null && !M)
        ) {
          var m = k(
            "div",
            "​",
            null,
            `position: absolute;
                         top: ` +
              (i.top - a.viewOffset - ka(n.display)) +
              `px;
                         height: ` +
              (i.bottom - i.top + Cr(n) + a.barHeight) +
              `px;
                         left: ` +
              i.left +
              "px; width: " +
              Math.max(2, i.right - i.left) +
              "px;",
          );
          n.display.lineSpace.appendChild(m),
            m.scrollIntoView(u),
            n.display.lineSpace.removeChild(m);
        }
      }
    }
    function _x(n, i, a, l) {
      l == null && (l = 0);
      var u;
      !n.options.lineWrapping &&
        i == a &&
        ((a = i.sticky == "before" ? Q(i.line, i.ch + 1, "before") : i),
        (i = i.ch ? Q(i.line, i.sticky == "before" ? i.ch - 1 : i.ch, "after") : i));
      for (var g = 0; g < 5; g++) {
        var m = !1,
          w = fr(n, i),
          _ = !a || a == i ? w : fr(n, a);
        u = {
          left: Math.min(w.left, _.left),
          top: Math.min(w.top, _.top) - l,
          right: Math.max(w.left, _.left),
          bottom: Math.max(w.bottom, _.bottom) + l,
        };
        var S = df(n, u),
          $ = n.doc.scrollTop,
          R = n.doc.scrollLeft;
        if (
          (S.scrollTop != null &&
            (Us(n, S.scrollTop), Math.abs(n.doc.scrollTop - $) > 1 && (m = !0)),
          S.scrollLeft != null &&
            (ao(n, S.scrollLeft), Math.abs(n.doc.scrollLeft - R) > 1 && (m = !0)),
          !m)
        )
          break;
      }
      return u;
    }
    function Sx(n, i) {
      var a = df(n, i);
      a.scrollTop != null && Us(n, a.scrollTop), a.scrollLeft != null && ao(n, a.scrollLeft);
    }
    function df(n, i) {
      var a = n.display,
        l = Uo(n.display);
      i.top < 0 && (i.top = 0);
      var u = n.curOp && n.curOp.scrollTop != null ? n.curOp.scrollTop : a.scroller.scrollTop,
        g = Ju(n),
        m = {};
      i.bottom - i.top > g && (i.bottom = i.top + g);
      var w = n.doc.height + Zu(a),
        _ = i.top < l,
        S = i.bottom > w - l;
      if (i.top < u) m.scrollTop = _ ? 0 : i.top;
      else if (i.bottom > u + g) {
        var $ = Math.min(i.top, (S ? w : i.bottom) - g);
        $ != u && (m.scrollTop = $);
      }
      var R = n.options.fixedGutter ? 0 : a.gutters.offsetWidth,
        G = n.curOp && n.curOp.scrollLeft != null ? n.curOp.scrollLeft : a.scroller.scrollLeft - R,
        U = io(n) - a.gutters.offsetWidth,
        ee = i.right - i.left > U;
      return (
        ee && (i.right = i.left + U),
        i.left < 10
          ? (m.scrollLeft = 0)
          : i.left < G
            ? (m.scrollLeft = Math.max(0, i.left + R - (ee ? 0 : 10)))
            : i.right > U + G - 3 && (m.scrollLeft = i.right + (ee ? 0 : 10) - U),
        m
      );
    }
    function hf(n, i) {
      i != null &&
        (Na(n),
        (n.curOp.scrollTop =
          (n.curOp.scrollTop == null ? n.doc.scrollTop : n.curOp.scrollTop) + i));
    }
    function Go(n) {
      Na(n);
      var i = n.getCursor();
      n.curOp.scrollToPos = { from: i, to: i, margin: n.options.cursorScrollMargin };
    }
    function Ws(n, i, a) {
      (i != null || a != null) && Na(n),
        i != null && (n.curOp.scrollLeft = i),
        a != null && (n.curOp.scrollTop = a);
    }
    function kx(n, i) {
      Na(n), (n.curOp.scrollToPos = i);
    }
    function Na(n) {
      var i = n.curOp.scrollToPos;
      if (i) {
        n.curOp.scrollToPos = null;
        var a = Vp(n, i.from),
          l = Vp(n, i.to);
        Qp(n, a, l, i.margin);
      }
    }
    function Qp(n, i, a, l) {
      var u = df(n, {
        left: Math.min(i.left, a.left),
        top: Math.min(i.top, a.top) - l,
        right: Math.max(i.right, a.right),
        bottom: Math.max(i.bottom, a.bottom) + l,
      });
      Ws(n, u.scrollLeft, u.scrollTop);
    }
    function Us(n, i) {
      Math.abs(n.doc.scrollTop - i) < 2 ||
        (s || gf(n, { top: i }), eg(n, i, !0), s && gf(n), Gs(n, 100));
    }
    function eg(n, i, a) {
      (i = Math.max(
        0,
        Math.min(n.display.scroller.scrollHeight - n.display.scroller.clientHeight, i),
      )),
        !(n.display.scroller.scrollTop == i && !a) &&
          ((n.doc.scrollTop = i),
          n.display.scrollbars.setScrollTop(i),
          n.display.scroller.scrollTop != i && (n.display.scroller.scrollTop = i));
    }
    function ao(n, i, a, l) {
      (i = Math.max(
        0,
        Math.min(i, n.display.scroller.scrollWidth - n.display.scroller.clientWidth),
      )),
        !((a ? i == n.doc.scrollLeft : Math.abs(n.doc.scrollLeft - i) < 2) && !l) &&
          ((n.doc.scrollLeft = i),
          og(n),
          n.display.scroller.scrollLeft != i && (n.display.scroller.scrollLeft = i),
          n.display.scrollbars.setScrollLeft(i));
    }
    function Vs(n) {
      var i = n.display,
        a = i.gutters.offsetWidth,
        l = Math.round(n.doc.height + Zu(n.display));
      return {
        clientHeight: i.scroller.clientHeight,
        viewHeight: i.wrapper.clientHeight,
        scrollWidth: i.scroller.scrollWidth,
        clientWidth: i.scroller.clientWidth,
        viewWidth: i.wrapper.clientWidth,
        barLeft: n.options.fixedGutter ? a : 0,
        docHeight: l,
        scrollHeight: l + Cr(n) + i.barHeight,
        nativeBarWidth: i.nativeBarWidth,
        gutterWidth: a,
      };
    }
    var co = function (n, i, a) {
      this.cm = a;
      var l = (this.vert = k(
          "div",
          [k("div", null, null, "min-width: 1px")],
          "CodeMirror-vscrollbar",
        )),
        u = (this.horiz = k(
          "div",
          [k("div", null, null, "height: 100%; min-height: 1px")],
          "CodeMirror-hscrollbar",
        ));
      (l.tabIndex = u.tabIndex = -1),
        n(l),
        n(u),
        Fe(l, "scroll", function () {
          l.clientHeight && i(l.scrollTop, "vertical");
        }),
        Fe(u, "scroll", function () {
          u.clientWidth && i(u.scrollLeft, "horizontal");
        }),
        (this.checkedZeroWidth = !1),
        h && p < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };
    (co.prototype.update = function (n) {
      var i = n.scrollWidth > n.clientWidth + 1,
        a = n.scrollHeight > n.clientHeight + 1,
        l = n.nativeBarWidth;
      if (a) {
        (this.vert.style.display = "block"), (this.vert.style.bottom = i ? l + "px" : "0");
        var u = n.viewHeight - (i ? l : 0);
        this.vert.firstChild.style.height = Math.max(0, n.scrollHeight - n.clientHeight + u) + "px";
      } else
        (this.vert.scrollTop = 0),
          (this.vert.style.display = ""),
          (this.vert.firstChild.style.height = "0");
      if (i) {
        (this.horiz.style.display = "block"),
          (this.horiz.style.right = a ? l + "px" : "0"),
          (this.horiz.style.left = n.barLeft + "px");
        var g = n.viewWidth - n.barLeft - (a ? l : 0);
        this.horiz.firstChild.style.width = Math.max(0, n.scrollWidth - n.clientWidth + g) + "px";
      } else (this.horiz.style.display = ""), (this.horiz.firstChild.style.width = "0");
      return (
        !this.checkedZeroWidth &&
          n.clientHeight > 0 &&
          (l == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
        { right: a ? l : 0, bottom: i ? l : 0 }
      );
    }),
      (co.prototype.setScrollLeft = function (n) {
        this.horiz.scrollLeft != n && (this.horiz.scrollLeft = n),
          this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }),
      (co.prototype.setScrollTop = function (n) {
        this.vert.scrollTop != n && (this.vert.scrollTop = n),
          this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }),
      (co.prototype.zeroWidthHack = function () {
        var n = H && !N ? "12px" : "18px";
        (this.horiz.style.height = this.vert.style.width = n),
          (this.horiz.style.visibility = this.vert.style.visibility = "hidden"),
          (this.disableHoriz = new Ne()),
          (this.disableVert = new Ne());
      }),
      (co.prototype.enableZeroWidthBar = function (n, i, a) {
        n.style.visibility = "";
        function l() {
          var u = n.getBoundingClientRect(),
            g =
              a == "vert"
                ? document.elementFromPoint(u.right - 1, (u.top + u.bottom) / 2)
                : document.elementFromPoint((u.right + u.left) / 2, u.bottom - 1);
          g != n ? (n.style.visibility = "hidden") : i.set(1e3, l);
        }
        i.set(1e3, l);
      }),
      (co.prototype.clear = function () {
        var n = this.horiz.parentNode;
        n.removeChild(this.horiz), n.removeChild(this.vert);
      });
    var js = function () {};
    (js.prototype.update = function () {
      return { bottom: 0, right: 0 };
    }),
      (js.prototype.setScrollLeft = function () {}),
      (js.prototype.setScrollTop = function () {}),
      (js.prototype.clear = function () {});
    function Ko(n, i) {
      i || (i = Vs(n));
      var a = n.display.barWidth,
        l = n.display.barHeight;
      tg(n, i);
      for (var u = 0; (u < 4 && a != n.display.barWidth) || l != n.display.barHeight; u++)
        a != n.display.barWidth && n.options.lineWrapping && Aa(n),
          tg(n, Vs(n)),
          (a = n.display.barWidth),
          (l = n.display.barHeight);
    }
    function tg(n, i) {
      var a = n.display,
        l = a.scrollbars.update(i);
      (a.sizer.style.paddingRight = (a.barWidth = l.right) + "px"),
        (a.sizer.style.paddingBottom = (a.barHeight = l.bottom) + "px"),
        (a.heightForcer.style.borderBottom = l.bottom + "px solid transparent"),
        l.right && l.bottom
          ? ((a.scrollbarFiller.style.display = "block"),
            (a.scrollbarFiller.style.height = l.bottom + "px"),
            (a.scrollbarFiller.style.width = l.right + "px"))
          : (a.scrollbarFiller.style.display = ""),
        l.bottom && n.options.coverGutterNextToScrollbar && n.options.fixedGutter
          ? ((a.gutterFiller.style.display = "block"),
            (a.gutterFiller.style.height = l.bottom + "px"),
            (a.gutterFiller.style.width = i.gutterWidth + "px"))
          : (a.gutterFiller.style.display = "");
    }
    var ng = { native: co, null: js };
    function rg(n) {
      n.display.scrollbars &&
        (n.display.scrollbars.clear(),
        n.display.scrollbars.addClass && K(n.display.wrapper, n.display.scrollbars.addClass)),
        (n.display.scrollbars = new ng[n.options.scrollbarStyle](
          function (i) {
            n.display.wrapper.insertBefore(i, n.display.scrollbarFiller),
              Fe(i, "mousedown", function () {
                n.state.focused &&
                  setTimeout(function () {
                    return n.display.input.focus();
                  }, 0);
              }),
              i.setAttribute("cm-not-content", "true");
          },
          function (i, a) {
            a == "horizontal" ? ao(n, i) : Us(n, i);
          },
          n,
        )),
        n.display.scrollbars.addClass && Me(n.display.wrapper, n.display.scrollbars.addClass);
    }
    var Tx = 0;
    function uo(n) {
      (n.curOp = {
        cm: n,
        viewChanged: !1,
        startHeight: n.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++Tx,
        markArrays: null,
      }),
        nx(n.curOp);
    }
    function fo(n) {
      var i = n.curOp;
      i &&
        ix(i, function (a) {
          for (var l = 0; l < a.ops.length; l++) a.ops[l].cm.curOp = null;
          Cx(a);
        });
    }
    function Cx(n) {
      for (var i = n.ops, a = 0; a < i.length; a++) Ex(i[a]);
      for (var l = 0; l < i.length; l++) Lx(i[l]);
      for (var u = 0; u < i.length; u++) Ax(i[u]);
      for (var g = 0; g < i.length; g++) Mx(i[g]);
      for (var m = 0; m < i.length; m++) Nx(i[m]);
    }
    function Ex(n) {
      var i = n.cm,
        a = i.display;
      Ox(i),
        n.updateMaxLine && Xu(i),
        (n.mustUpdate =
          n.viewChanged ||
          n.forceUpdate ||
          n.scrollTop != null ||
          (n.scrollToPos &&
            (n.scrollToPos.from.line < a.viewFrom || n.scrollToPos.to.line >= a.viewTo)) ||
          (a.maxLineChanged && i.options.lineWrapping)),
        (n.update =
          n.mustUpdate &&
          new $a(i, n.mustUpdate && { top: n.scrollTop, ensure: n.scrollToPos }, n.forceUpdate));
    }
    function Lx(n) {
      n.updatedDisplay = n.mustUpdate && pf(n.cm, n.update);
    }
    function Ax(n) {
      var i = n.cm,
        a = i.display;
      n.updatedDisplay && Aa(i),
        (n.barMeasure = Vs(i)),
        a.maxLineChanged &&
          !i.options.lineWrapping &&
          ((n.adjustWidthTo = zp(i, a.maxLine, a.maxLine.text.length).left + 3),
          (i.display.sizerWidth = n.adjustWidthTo),
          (n.barMeasure.scrollWidth = Math.max(
            a.scroller.clientWidth,
            a.sizer.offsetLeft + n.adjustWidthTo + Cr(i) + i.display.barWidth,
          )),
          (n.maxScrollLeft = Math.max(0, a.sizer.offsetLeft + n.adjustWidthTo - io(i)))),
        (n.updatedDisplay || n.selectionChanged) &&
          (n.preparedSelection = a.input.prepareSelection());
    }
    function Mx(n) {
      var i = n.cm;
      n.adjustWidthTo != null &&
        ((i.display.sizer.style.minWidth = n.adjustWidthTo + "px"),
        n.maxScrollLeft < i.doc.scrollLeft &&
          ao(i, Math.min(i.display.scroller.scrollLeft, n.maxScrollLeft), !0),
        (i.display.maxLineChanged = !1));
      var a = n.focus && n.focus == me(nt(i));
      n.preparedSelection && i.display.input.showSelection(n.preparedSelection, a),
        (n.updatedDisplay || n.startHeight != i.doc.height) && Ko(i, n.barMeasure),
        n.updatedDisplay && mf(i, n.barMeasure),
        n.selectionChanged && cf(i),
        i.state.focused && n.updateInput && i.display.input.reset(n.typing),
        a && Zp(n.cm);
    }
    function Nx(n) {
      var i = n.cm,
        a = i.display,
        l = i.doc;
      if (
        (n.updatedDisplay && ig(i, n.update),
        a.wheelStartX != null &&
          (n.scrollTop != null || n.scrollLeft != null || n.scrollToPos) &&
          (a.wheelStartX = a.wheelStartY = null),
        n.scrollTop != null && eg(i, n.scrollTop, n.forceScroll),
        n.scrollLeft != null && ao(i, n.scrollLeft, !0, !0),
        n.scrollToPos)
      ) {
        var u = _x(i, Ke(l, n.scrollToPos.from), Ke(l, n.scrollToPos.to), n.scrollToPos.margin);
        xx(i, u);
      }
      var g = n.maybeHiddenMarkers,
        m = n.maybeUnhiddenMarkers;
      if (g) for (var w = 0; w < g.length; ++w) g[w].lines.length || Et(g[w], "hide");
      if (m) for (var _ = 0; _ < m.length; ++_) m[_].lines.length && Et(m[_], "unhide");
      a.wrapper.offsetHeight && (l.scrollTop = i.display.scroller.scrollTop),
        n.changeObjs && Et(i, "changes", i, n.changeObjs),
        n.update && n.update.finish();
    }
    function Ln(n, i) {
      if (n.curOp) return i();
      uo(n);
      try {
        return i();
      } finally {
        fo(n);
      }
    }
    function Ut(n, i) {
      return function () {
        if (n.curOp) return i.apply(n, arguments);
        uo(n);
        try {
          return i.apply(n, arguments);
        } finally {
          fo(n);
        }
      };
    }
    function an(n) {
      return function () {
        if (this.curOp) return n.apply(this, arguments);
        uo(this);
        try {
          return n.apply(this, arguments);
        } finally {
          fo(this);
        }
      };
    }
    function Vt(n) {
      return function () {
        var i = this.cm;
        if (!i || i.curOp) return n.apply(this, arguments);
        uo(i);
        try {
          return n.apply(this, arguments);
        } finally {
          fo(i);
        }
      };
    }
    function Gs(n, i) {
      n.doc.highlightFrontier < n.display.viewTo && n.state.highlight.set(i, X($x, n));
    }
    function $x(n) {
      var i = n.doc;
      if (!(i.highlightFrontier >= n.display.viewTo)) {
        var a = +new Date() + n.options.workTime,
          l = Ds(n, i.highlightFrontier),
          u = [];
        i.iter(l.line, Math.min(i.first + i.size, n.display.viewTo + 500), function (g) {
          if (l.line >= n.display.viewFrom) {
            var m = g.styles,
              w = g.text.length > n.options.maxHighlightLength ? kr(i.mode, l.state) : null,
              _ = fp(n, g, l, !0);
            w && (l.state = w), (g.styles = _.styles);
            var S = g.styleClasses,
              $ = _.classes;
            $ ? (g.styleClasses = $) : S && (g.styleClasses = null);
            for (
              var R =
                  !m ||
                  m.length != g.styles.length ||
                  (S != $ && (!S || !$ || S.bgClass != $.bgClass || S.textClass != $.textClass)),
                G = 0;
              !R && G < m.length;
              ++G
            )
              R = m[G] != g.styles[G];
            R && u.push(l.line), (g.stateAfter = l.save()), l.nextLine();
          } else
            g.text.length <= n.options.maxHighlightLength && Wu(n, g.text, l),
              (g.stateAfter = l.line % 5 == 0 ? l.save() : null),
              l.nextLine();
          if (+new Date() > a) return Gs(n, n.options.workDelay), !0;
        }),
          (i.highlightFrontier = l.line),
          (i.modeFrontier = Math.max(i.modeFrontier, l.line)),
          u.length &&
            Ln(n, function () {
              for (var g = 0; g < u.length; g++) vi(n, u[g], "text");
            });
      }
    }
    var $a = function (n, i, a) {
      var l = n.display;
      (this.viewport = i),
        (this.visible = Ma(l, n.doc, i)),
        (this.editorIsHidden = !l.wrapper.offsetWidth),
        (this.wrapperHeight = l.wrapper.clientHeight),
        (this.wrapperWidth = l.wrapper.clientWidth),
        (this.oldDisplayWidth = io(n)),
        (this.force = a),
        (this.dims = of(n)),
        (this.events = []);
    };
    ($a.prototype.signal = function (n, i) {
      En(n, i) && this.events.push(arguments);
    }),
      ($a.prototype.finish = function () {
        for (var n = 0; n < this.events.length; n++) Et.apply(null, this.events[n]);
      });
    function Ox(n) {
      var i = n.display;
      !i.scrollbarsClipped &&
        i.scroller.offsetWidth &&
        ((i.nativeBarWidth = i.scroller.offsetWidth - i.scroller.clientWidth),
        (i.heightForcer.style.height = Cr(n) + "px"),
        (i.sizer.style.marginBottom = -i.nativeBarWidth + "px"),
        (i.sizer.style.borderRightWidth = Cr(n) + "px"),
        (i.scrollbarsClipped = !0));
    }
    function Px(n) {
      if (n.hasFocus()) return null;
      var i = me(nt(n));
      if (!i || !re(n.display.lineDiv, i)) return null;
      var a = { activeElt: i };
      if (window.getSelection) {
        var l = Te(n).getSelection();
        l.anchorNode &&
          l.extend &&
          re(n.display.lineDiv, l.anchorNode) &&
          ((a.anchorNode = l.anchorNode),
          (a.anchorOffset = l.anchorOffset),
          (a.focusNode = l.focusNode),
          (a.focusOffset = l.focusOffset));
      }
      return a;
    }
    function Rx(n) {
      if (
        !(!n || !n.activeElt || n.activeElt == me(Ze(n.activeElt))) &&
        (n.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(n.activeElt.nodeName) &&
          n.anchorNode &&
          re(document.body, n.anchorNode) &&
          re(document.body, n.focusNode))
      ) {
        var i = n.activeElt.ownerDocument,
          a = i.defaultView.getSelection(),
          l = i.createRange();
        l.setEnd(n.anchorNode, n.anchorOffset),
          l.collapse(!1),
          a.removeAllRanges(),
          a.addRange(l),
          a.extend(n.focusNode, n.focusOffset);
      }
    }
    function pf(n, i) {
      var a = n.display,
        l = n.doc;
      if (i.editorIsHidden) return mi(n), !1;
      if (
        !i.force &&
        i.visible.from >= a.viewFrom &&
        i.visible.to <= a.viewTo &&
        (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo) &&
        a.renderedView == a.view &&
        Xp(n) == 0
      )
        return !1;
      sg(n) && (mi(n), (i.dims = of(n)));
      var u = l.first + l.size,
        g = Math.max(i.visible.from - n.options.viewportMargin, l.first),
        m = Math.min(u, i.visible.to + n.options.viewportMargin);
      a.viewFrom < g && g - a.viewFrom < 20 && (g = Math.max(l.first, a.viewFrom)),
        a.viewTo > m && a.viewTo - m < 20 && (m = Math.min(u, a.viewTo)),
        Wr && ((g = Gu(n.doc, g)), (m = Tp(n.doc, m)));
      var w =
        g != a.viewFrom ||
        m != a.viewTo ||
        a.lastWrapHeight != i.wrapperHeight ||
        a.lastWrapWidth != i.wrapperWidth;
      bx(n, g, m),
        (a.viewOffset = Ur(Oe(n.doc, a.viewFrom))),
        (n.display.mover.style.top = a.viewOffset + "px");
      var _ = Xp(n);
      if (
        !w &&
        _ == 0 &&
        !i.force &&
        a.renderedView == a.view &&
        (a.updateLineNumbers == null || a.updateLineNumbers >= a.viewTo)
      )
        return !1;
      var S = Px(n);
      return (
        _ > 4 && (a.lineDiv.style.display = "none"),
        Dx(n, a.updateLineNumbers, i.dims),
        _ > 4 && (a.lineDiv.style.display = ""),
        (a.renderedView = a.view),
        Rx(S),
        V(a.cursorDiv),
        V(a.selectionDiv),
        (a.gutters.style.height = a.sizer.style.minHeight = 0),
        w && ((a.lastWrapHeight = i.wrapperHeight), (a.lastWrapWidth = i.wrapperWidth), Gs(n, 400)),
        (a.updateLineNumbers = null),
        !0
      );
    }
    function ig(n, i) {
      for (var a = i.viewport, l = !0; ; l = !1) {
        if (!l || !n.options.lineWrapping || i.oldDisplayWidth == io(n)) {
          if (
            (a &&
              a.top != null &&
              (a = { top: Math.min(n.doc.height + Zu(n.display) - Ju(n), a.top) }),
            (i.visible = Ma(n.display, n.doc, a)),
            i.visible.from >= n.display.viewFrom && i.visible.to <= n.display.viewTo)
          )
            break;
        } else l && (i.visible = Ma(n.display, n.doc, a));
        if (!pf(n, i)) break;
        Aa(n);
        var u = Vs(n);
        Bs(n), Ko(n, u), mf(n, u), (i.force = !1);
      }
      i.signal(n, "update", n),
        (n.display.viewFrom != n.display.reportedViewFrom ||
          n.display.viewTo != n.display.reportedViewTo) &&
          (i.signal(n, "viewportChange", n, n.display.viewFrom, n.display.viewTo),
          (n.display.reportedViewFrom = n.display.viewFrom),
          (n.display.reportedViewTo = n.display.viewTo));
    }
    function gf(n, i) {
      var a = new $a(n, i);
      if (pf(n, a)) {
        Aa(n), ig(n, a);
        var l = Vs(n);
        Bs(n), Ko(n, l), mf(n, l), a.finish();
      }
    }
    function Dx(n, i, a) {
      var l = n.display,
        u = n.options.lineNumbers,
        g = l.lineDiv,
        m = g.firstChild;
      function w(ee) {
        var fe = ee.nextSibling;
        return (
          v && H && n.display.currentWheelTarget == ee
            ? (ee.style.display = "none")
            : ee.parentNode.removeChild(ee),
          fe
        );
      }
      for (var _ = l.view, S = l.viewFrom, $ = 0; $ < _.length; $++) {
        var R = _[$];
        if (!R.hidden)
          if (!R.node || R.node.parentNode != g) {
            var G = cx(n, R, S, a);
            g.insertBefore(G, m);
          } else {
            for (; m != R.node; ) m = w(m);
            var U = u && i != null && i <= S && R.lineNumber;
            R.changes && (Ce(R.changes, "gutter") > -1 && (U = !1), Mp(n, R, S, a)),
              U &&
                (V(R.lineNumber),
                R.lineNumber.appendChild(document.createTextNode(pe(n.options, S)))),
              (m = R.node.nextSibling);
          }
        S += R.size;
      }
      for (; m; ) m = w(m);
    }
    function vf(n) {
      var i = n.gutters.offsetWidth;
      (n.sizer.style.marginLeft = i + "px"), Wt(n, "gutterChanged", n);
    }
    function mf(n, i) {
      (n.display.sizer.style.minHeight = i.docHeight + "px"),
        (n.display.heightForcer.style.top = i.docHeight + "px"),
        (n.display.gutters.style.height = i.docHeight + n.display.barHeight + Cr(n) + "px");
    }
    function og(n) {
      var i = n.display,
        a = i.view;
      if (!(!i.alignWidgets && (!i.gutters.firstChild || !n.options.fixedGutter))) {
        for (
          var l = sf(i) - i.scroller.scrollLeft + n.doc.scrollLeft,
            u = i.gutters.offsetWidth,
            g = l + "px",
            m = 0;
          m < a.length;
          m++
        )
          if (!a[m].hidden) {
            n.options.fixedGutter &&
              (a[m].gutter && (a[m].gutter.style.left = g),
              a[m].gutterBackground && (a[m].gutterBackground.style.left = g));
            var w = a[m].alignable;
            if (w) for (var _ = 0; _ < w.length; _++) w[_].style.left = g;
          }
        n.options.fixedGutter && (i.gutters.style.left = l + u + "px");
      }
    }
    function sg(n) {
      if (!n.options.lineNumbers) return !1;
      var i = n.doc,
        a = pe(n.options, i.first + i.size - 1),
        l = n.display;
      if (a.length != l.lineNumChars) {
        var u = l.measure.appendChild(
            k("div", [k("div", a)], "CodeMirror-linenumber CodeMirror-gutter-elt"),
          ),
          g = u.firstChild.offsetWidth,
          m = u.offsetWidth - g;
        return (
          (l.lineGutter.style.width = ""),
          (l.lineNumInnerWidth = Math.max(g, l.lineGutter.offsetWidth - m) + 1),
          (l.lineNumWidth = l.lineNumInnerWidth + m),
          (l.lineNumChars = l.lineNumInnerWidth ? a.length : -1),
          (l.lineGutter.style.width = l.lineNumWidth + "px"),
          vf(n.display),
          !0
        );
      }
      return !1;
    }
    function yf(n, i) {
      for (var a = [], l = !1, u = 0; u < n.length; u++) {
        var g = n[u],
          m = null;
        if (
          (typeof g != "string" && ((m = g.style), (g = g.className)),
          g == "CodeMirror-linenumbers")
        )
          if (i) l = !0;
          else continue;
        a.push({ className: g, style: m });
      }
      return i && !l && a.push({ className: "CodeMirror-linenumbers", style: null }), a;
    }
    function lg(n) {
      var i = n.gutters,
        a = n.gutterSpecs;
      V(i), (n.lineGutter = null);
      for (var l = 0; l < a.length; ++l) {
        var u = a[l],
          g = u.className,
          m = u.style,
          w = i.appendChild(k("div", null, "CodeMirror-gutter " + g));
        m && (w.style.cssText = m),
          g == "CodeMirror-linenumbers" &&
            ((n.lineGutter = w), (w.style.width = (n.lineNumWidth || 1) + "px"));
      }
      (i.style.display = a.length ? "" : "none"), vf(n);
    }
    function Ks(n) {
      lg(n.display), vn(n), og(n);
    }
    function zx(n, i, a, l) {
      var u = this;
      (this.input = a),
        (u.scrollbarFiller = k("div", null, "CodeMirror-scrollbar-filler")),
        u.scrollbarFiller.setAttribute("cm-not-content", "true"),
        (u.gutterFiller = k("div", null, "CodeMirror-gutter-filler")),
        u.gutterFiller.setAttribute("cm-not-content", "true"),
        (u.lineDiv = q("div", null, "CodeMirror-code")),
        (u.selectionDiv = k("div", null, null, "position: relative; z-index: 1")),
        (u.cursorDiv = k("div", null, "CodeMirror-cursors")),
        (u.measure = k("div", null, "CodeMirror-measure")),
        (u.lineMeasure = k("div", null, "CodeMirror-measure")),
        (u.lineSpace = q(
          "div",
          [u.measure, u.lineMeasure, u.selectionDiv, u.cursorDiv, u.lineDiv],
          null,
          "position: relative; outline: none",
        ));
      var g = q("div", [u.lineSpace], "CodeMirror-lines");
      (u.mover = k("div", [g], null, "position: relative")),
        (u.sizer = k("div", [u.mover], "CodeMirror-sizer")),
        (u.sizerWidth = null),
        (u.heightForcer = k(
          "div",
          null,
          null,
          "position: absolute; height: " + Ye + "px; width: 1px;",
        )),
        (u.gutters = k("div", null, "CodeMirror-gutters")),
        (u.lineGutter = null),
        (u.scroller = k("div", [u.sizer, u.heightForcer, u.gutters], "CodeMirror-scroll")),
        u.scroller.setAttribute("tabIndex", "-1"),
        (u.wrapper = k("div", [u.scrollbarFiller, u.gutterFiller, u.scroller], "CodeMirror")),
        b && x >= 105 && (u.wrapper.style.clipPath = "inset(0px)"),
        u.wrapper.setAttribute("translate", "no"),
        h && p < 8 && ((u.gutters.style.zIndex = -1), (u.scroller.style.paddingRight = 0)),
        !v && !(s && A) && (u.scroller.draggable = !0),
        n && (n.appendChild ? n.appendChild(u.wrapper) : n(u.wrapper)),
        (u.viewFrom = u.viewTo = i.first),
        (u.reportedViewFrom = u.reportedViewTo = i.first),
        (u.view = []),
        (u.renderedView = null),
        (u.externalMeasured = null),
        (u.viewOffset = 0),
        (u.lastWrapHeight = u.lastWrapWidth = 0),
        (u.updateLineNumbers = null),
        (u.nativeBarWidth = u.barHeight = u.barWidth = 0),
        (u.scrollbarsClipped = !1),
        (u.lineNumWidth = u.lineNumInnerWidth = u.lineNumChars = null),
        (u.alignWidgets = !1),
        (u.cachedCharWidth = u.cachedTextHeight = u.cachedPaddingH = null),
        (u.maxLine = null),
        (u.maxLineLength = 0),
        (u.maxLineChanged = !1),
        (u.wheelDX = u.wheelDY = u.wheelStartX = u.wheelStartY = null),
        (u.shift = !1),
        (u.selForContextMenu = null),
        (u.activeTouch = null),
        (u.gutterSpecs = yf(l.gutters, l.lineNumbers)),
        lg(u),
        a.init(u);
    }
    var Oa = 0,
      jr = null;
    h ? (jr = -0.53) : s ? (jr = 15) : b ? (jr = -0.7) : E && (jr = -1 / 3);
    function ag(n) {
      var i = n.wheelDeltaX,
        a = n.wheelDeltaY;
      return (
        i == null && n.detail && n.axis == n.HORIZONTAL_AXIS && (i = n.detail),
        a == null && n.detail && n.axis == n.VERTICAL_AXIS
          ? (a = n.detail)
          : a == null && (a = n.wheelDelta),
        { x: i, y: a }
      );
    }
    function Ix(n) {
      var i = ag(n);
      return (i.x *= jr), (i.y *= jr), i;
    }
    function cg(n, i) {
      b &&
        x == 102 &&
        (n.display.chromeScrollHack == null
          ? (n.display.sizer.style.pointerEvents = "none")
          : clearTimeout(n.display.chromeScrollHack),
        (n.display.chromeScrollHack = setTimeout(function () {
          (n.display.chromeScrollHack = null), (n.display.sizer.style.pointerEvents = "");
        }, 100)));
      var a = ag(i),
        l = a.x,
        u = a.y,
        g = jr;
      i.deltaMode === 0 && ((l = i.deltaX), (u = i.deltaY), (g = 1));
      var m = n.display,
        w = m.scroller,
        _ = w.scrollWidth > w.clientWidth,
        S = w.scrollHeight > w.clientHeight;
      if ((l && _) || (u && S)) {
        if (u && H && v) {
          e: for (var $ = i.target, R = m.view; $ != w; $ = $.parentNode)
            for (var G = 0; G < R.length; G++)
              if (R[G].node == $) {
                n.display.currentWheelTarget = $;
                break e;
              }
        }
        if (l && !s && !C && g != null) {
          u && S && Us(n, Math.max(0, w.scrollTop + u * g)),
            ao(n, Math.max(0, w.scrollLeft + l * g)),
            (!u || (u && S)) && tn(i),
            (m.wheelStartX = null);
          return;
        }
        if (u && g != null) {
          var U = u * g,
            ee = n.doc.scrollTop,
            fe = ee + m.wrapper.clientHeight;
          U < 0 ? (ee = Math.max(0, ee + U - 50)) : (fe = Math.min(n.doc.height, fe + U + 50)),
            gf(n, { top: ee, bottom: fe });
        }
        Oa < 20 &&
          i.deltaMode !== 0 &&
          (m.wheelStartX == null
            ? ((m.wheelStartX = w.scrollLeft),
              (m.wheelStartY = w.scrollTop),
              (m.wheelDX = l),
              (m.wheelDY = u),
              setTimeout(function () {
                if (m.wheelStartX != null) {
                  var ge = w.scrollLeft - m.wheelStartX,
                    we = w.scrollTop - m.wheelStartY,
                    ke = (we && m.wheelDY && we / m.wheelDY) || (ge && m.wheelDX && ge / m.wheelDX);
                  (m.wheelStartX = m.wheelStartY = null),
                    ke && ((jr = (jr * Oa + ke) / (Oa + 1)), ++Oa);
                }
              }, 200))
            : ((m.wheelDX += l), (m.wheelDY += u)));
      }
    }
    var Fn = function (n, i) {
      (this.ranges = n), (this.primIndex = i);
    };
    (Fn.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }),
      (Fn.prototype.equals = function (n) {
        if (n == this) return !0;
        if (n.primIndex != this.primIndex || n.ranges.length != this.ranges.length) return !1;
        for (var i = 0; i < this.ranges.length; i++) {
          var a = this.ranges[i],
            l = n.ranges[i];
          if (!ut(a.anchor, l.anchor) || !ut(a.head, l.head)) return !1;
        }
        return !0;
      }),
      (Fn.prototype.deepCopy = function () {
        for (var n = [], i = 0; i < this.ranges.length; i++)
          n[i] = new ft(Bt(this.ranges[i].anchor), Bt(this.ranges[i].head));
        return new Fn(n, this.primIndex);
      }),
      (Fn.prototype.somethingSelected = function () {
        for (var n = 0; n < this.ranges.length; n++) if (!this.ranges[n].empty()) return !0;
        return !1;
      }),
      (Fn.prototype.contains = function (n, i) {
        i || (i = n);
        for (var a = 0; a < this.ranges.length; a++) {
          var l = this.ranges[a];
          if (_e(i, l.from()) >= 0 && _e(n, l.to()) <= 0) return a;
        }
        return -1;
      });
    var ft = function (n, i) {
      (this.anchor = n), (this.head = i);
    };
    (ft.prototype.from = function () {
      return Ho(this.anchor, this.head);
    }),
      (ft.prototype.to = function () {
        return gn(this.anchor, this.head);
      }),
      (ft.prototype.empty = function () {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      });
    function dr(n, i, a) {
      var l = n && n.options.selectionsMayTouch,
        u = i[a];
      i.sort(function (G, U) {
        return _e(G.from(), U.from());
      }),
        (a = Ce(i, u));
      for (var g = 1; g < i.length; g++) {
        var m = i[g],
          w = i[g - 1],
          _ = _e(w.to(), m.from());
        if (l && !m.empty() ? _ > 0 : _ >= 0) {
          var S = Ho(w.from(), m.from()),
            $ = gn(w.to(), m.to()),
            R = w.empty() ? m.from() == m.head : w.from() == w.head;
          g <= a && --a, i.splice(--g, 2, new ft(R ? $ : S, R ? S : $));
        }
      }
      return new Fn(i, a);
    }
    function yi(n, i) {
      return new Fn([new ft(n, i || n)], 0);
    }
    function bi(n) {
      return n.text
        ? Q(
            n.from.line + n.text.length - 1,
            ue(n.text).length + (n.text.length == 1 ? n.from.ch : 0),
          )
        : n.to;
    }
    function ug(n, i) {
      if (_e(n, i.from) < 0) return n;
      if (_e(n, i.to) <= 0) return bi(i);
      var a = n.line + i.text.length - (i.to.line - i.from.line) - 1,
        l = n.ch;
      return n.line == i.to.line && (l += bi(i).ch - i.to.ch), Q(a, l);
    }
    function bf(n, i) {
      for (var a = [], l = 0; l < n.sel.ranges.length; l++) {
        var u = n.sel.ranges[l];
        a.push(new ft(ug(u.anchor, i), ug(u.head, i)));
      }
      return dr(n.cm, a, n.sel.primIndex);
    }
    function fg(n, i, a) {
      return n.line == i.line ? Q(a.line, n.ch - i.ch + a.ch) : Q(a.line + (n.line - i.line), n.ch);
    }
    function Fx(n, i, a) {
      for (var l = [], u = Q(n.first, 0), g = u, m = 0; m < i.length; m++) {
        var w = i[m],
          _ = fg(w.from, u, g),
          S = fg(bi(w), u, g);
        if (((u = w.to), (g = S), a == "around")) {
          var $ = n.sel.ranges[m],
            R = _e($.head, $.anchor) < 0;
          l[m] = new ft(R ? S : _, R ? _ : S);
        } else l[m] = new ft(_, _);
      }
      return new Fn(l, n.sel.primIndex);
    }
    function wf(n) {
      (n.doc.mode = zo(n.options, n.doc.modeOption)), Xs(n);
    }
    function Xs(n) {
      n.doc.iter(function (i) {
        i.stateAfter && (i.stateAfter = null), i.styles && (i.styles = null);
      }),
        (n.doc.modeFrontier = n.doc.highlightFrontier = n.doc.first),
        Gs(n, 100),
        n.state.modeGen++,
        n.curOp && vn(n);
    }
    function dg(n, i) {
      return (
        i.from.ch == 0 &&
        i.to.ch == 0 &&
        ue(i.text) == "" &&
        (!n.cm || n.cm.options.wholeLineUpdateBefore)
      );
    }
    function xf(n, i, a, l) {
      function u(ke) {
        return a ? a[ke] : null;
      }
      function g(ke, xe, Ee) {
        G1(ke, xe, Ee, l), Wt(ke, "change", ke, i);
      }
      function m(ke, xe) {
        for (var Ee = [], He = ke; He < xe; ++He) Ee.push(new qo(S[He], u(He), l));
        return Ee;
      }
      var w = i.from,
        _ = i.to,
        S = i.text,
        $ = Oe(n, w.line),
        R = Oe(n, _.line),
        G = ue(S),
        U = u(S.length - 1),
        ee = _.line - w.line;
      if (i.full) n.insert(0, m(0, S.length)), n.remove(S.length, n.size - S.length);
      else if (dg(n, i)) {
        var fe = m(0, S.length - 1);
        g(R, R.text, U), ee && n.remove(w.line, ee), fe.length && n.insert(w.line, fe);
      } else if ($ == R)
        if (S.length == 1) g($, $.text.slice(0, w.ch) + G + $.text.slice(_.ch), U);
        else {
          var ge = m(1, S.length - 1);
          ge.push(new qo(G + $.text.slice(_.ch), U, l)),
            g($, $.text.slice(0, w.ch) + S[0], u(0)),
            n.insert(w.line + 1, ge);
        }
      else if (S.length == 1)
        g($, $.text.slice(0, w.ch) + S[0] + R.text.slice(_.ch), u(0)), n.remove(w.line + 1, ee);
      else {
        g($, $.text.slice(0, w.ch) + S[0], u(0)), g(R, G + R.text.slice(_.ch), U);
        var we = m(1, S.length - 1);
        ee > 1 && n.remove(w.line + 1, ee - 1), n.insert(w.line + 1, we);
      }
      Wt(n, "change", n, i);
    }
    function wi(n, i, a) {
      function l(u, g, m) {
        if (u.linked)
          for (var w = 0; w < u.linked.length; ++w) {
            var _ = u.linked[w];
            if (_.doc != g) {
              var S = m && _.sharedHist;
              (a && !S) || (i(_.doc, S), l(_.doc, u, S));
            }
          }
      }
      l(n, null, !0);
    }
    function hg(n, i) {
      if (i.cm) throw new Error("This document is already in use.");
      (n.doc = i),
        (i.cm = n),
        lf(n),
        wf(n),
        pg(n),
        (n.options.direction = i.direction),
        n.options.lineWrapping || Xu(n),
        (n.options.mode = i.modeOption),
        vn(n);
    }
    function pg(n) {
      (n.doc.direction == "rtl" ? Me : K)(n.display.lineDiv, "CodeMirror-rtl");
    }
    function Hx(n) {
      Ln(n, function () {
        pg(n), vn(n);
      });
    }
    function Pa(n) {
      (this.done = []),
        (this.undone = []),
        (this.undoDepth = n ? n.undoDepth : 1 / 0),
        (this.lastModTime = this.lastSelTime = 0),
        (this.lastOp = this.lastSelOp = null),
        (this.lastOrigin = this.lastSelOrigin = null),
        (this.generation = this.maxGeneration = n ? n.maxGeneration : 1);
    }
    function _f(n, i) {
      var a = { from: Bt(i.from), to: bi(i), text: Br(n, i.from, i.to) };
      return (
        mg(n, a, i.from.line, i.to.line + 1),
        wi(
          n,
          function (l) {
            return mg(l, a, i.from.line, i.to.line + 1);
          },
          !0,
        ),
        a
      );
    }
    function gg(n) {
      for (; n.length; ) {
        var i = ue(n);
        if (i.ranges) n.pop();
        else break;
      }
    }
    function qx(n, i) {
      if (i) return gg(n.done), ue(n.done);
      if (n.done.length && !ue(n.done).ranges) return ue(n.done);
      if (n.done.length > 1 && !n.done[n.done.length - 2].ranges) return n.done.pop(), ue(n.done);
    }
    function vg(n, i, a, l) {
      var u = n.history;
      u.undone.length = 0;
      var g = +new Date(),
        m,
        w;
      if (
        (u.lastOp == l ||
          (u.lastOrigin == i.origin &&
            i.origin &&
            ((i.origin.charAt(0) == "+" &&
              u.lastModTime > g - (n.cm ? n.cm.options.historyEventDelay : 500)) ||
              i.origin.charAt(0) == "*"))) &&
        (m = qx(u, u.lastOp == l))
      )
        (w = ue(m.changes)),
          _e(i.from, i.to) == 0 && _e(i.from, w.to) == 0
            ? (w.to = bi(i))
            : m.changes.push(_f(n, i));
      else {
        var _ = ue(u.done);
        for (
          (!_ || !_.ranges) && Ra(n.sel, u.done),
            m = { changes: [_f(n, i)], generation: u.generation },
            u.done.push(m);
          u.done.length > u.undoDepth;

        )
          u.done.shift(), u.done[0].ranges || u.done.shift();
      }
      u.done.push(a),
        (u.generation = ++u.maxGeneration),
        (u.lastModTime = u.lastSelTime = g),
        (u.lastOp = u.lastSelOp = l),
        (u.lastOrigin = u.lastSelOrigin = i.origin),
        w || Et(n, "historyAdded");
    }
    function Bx(n, i, a, l) {
      var u = i.charAt(0);
      return (
        u == "*" ||
        (u == "+" &&
          a.ranges.length == l.ranges.length &&
          a.somethingSelected() == l.somethingSelected() &&
          new Date() - n.history.lastSelTime <= (n.cm ? n.cm.options.historyEventDelay : 500))
      );
    }
    function Wx(n, i, a, l) {
      var u = n.history,
        g = l && l.origin;
      a == u.lastSelOp ||
      (g &&
        u.lastSelOrigin == g &&
        ((u.lastModTime == u.lastSelTime && u.lastOrigin == g) || Bx(n, g, ue(u.done), i)))
        ? (u.done[u.done.length - 1] = i)
        : Ra(i, u.done),
        (u.lastSelTime = +new Date()),
        (u.lastSelOrigin = g),
        (u.lastSelOp = a),
        l && l.clearRedo !== !1 && gg(u.undone);
    }
    function Ra(n, i) {
      var a = ue(i);
      (a && a.ranges && a.equals(n)) || i.push(n);
    }
    function mg(n, i, a, l) {
      var u = i["spans_" + n.id],
        g = 0;
      n.iter(Math.max(n.first, a), Math.min(n.first + n.size, l), function (m) {
        m.markedSpans && ((u || (u = i["spans_" + n.id] = {}))[g] = m.markedSpans), ++g;
      });
    }
    function Ux(n) {
      if (!n) return null;
      for (var i, a = 0; a < n.length; ++a)
        n[a].marker.explicitlyCleared ? i || (i = n.slice(0, a)) : i && i.push(n[a]);
      return i ? (i.length ? i : null) : n;
    }
    function Vx(n, i) {
      var a = i["spans_" + n.id];
      if (!a) return null;
      for (var l = [], u = 0; u < i.text.length; ++u) l.push(Ux(a[u]));
      return l;
    }
    function yg(n, i) {
      var a = Vx(n, i),
        l = Vu(n, i);
      if (!a) return l;
      if (!l) return a;
      for (var u = 0; u < a.length; ++u) {
        var g = a[u],
          m = l[u];
        if (g && m)
          e: for (var w = 0; w < m.length; ++w) {
            for (var _ = m[w], S = 0; S < g.length; ++S) if (g[S].marker == _.marker) continue e;
            g.push(_);
          }
        else m && (a[u] = m);
      }
      return a;
    }
    function Xo(n, i, a) {
      for (var l = [], u = 0; u < n.length; ++u) {
        var g = n[u];
        if (g.ranges) {
          l.push(a ? Fn.prototype.deepCopy.call(g) : g);
          continue;
        }
        var m = g.changes,
          w = [];
        l.push({ changes: w });
        for (var _ = 0; _ < m.length; ++_) {
          var S = m[_],
            $ = void 0;
          if ((w.push({ from: S.from, to: S.to, text: S.text }), i))
            for (var R in S)
              ($ = R.match(/^spans_(\d+)$/)) &&
                Ce(i, Number($[1])) > -1 &&
                ((ue(w)[R] = S[R]), delete S[R]);
        }
      }
      return l;
    }
    function Sf(n, i, a, l) {
      if (l) {
        var u = n.anchor;
        if (a) {
          var g = _e(i, u) < 0;
          g != _e(a, u) < 0 ? ((u = i), (i = a)) : g != _e(i, a) < 0 && (i = a);
        }
        return new ft(u, i);
      } else return new ft(a || i, i);
    }
    function Da(n, i, a, l, u) {
      u == null && (u = n.cm && (n.cm.display.shift || n.extend)),
        nn(n, new Fn([Sf(n.sel.primary(), i, a, u)], 0), l);
    }
    function bg(n, i, a) {
      for (
        var l = [], u = n.cm && (n.cm.display.shift || n.extend), g = 0;
        g < n.sel.ranges.length;
        g++
      )
        l[g] = Sf(n.sel.ranges[g], i[g], null, u);
      var m = dr(n.cm, l, n.sel.primIndex);
      nn(n, m, a);
    }
    function kf(n, i, a, l) {
      var u = n.sel.ranges.slice(0);
      (u[i] = a), nn(n, dr(n.cm, u, n.sel.primIndex), l);
    }
    function wg(n, i, a, l) {
      nn(n, yi(i, a), l);
    }
    function jx(n, i, a) {
      var l = {
        ranges: i.ranges,
        update: function (u) {
          this.ranges = [];
          for (var g = 0; g < u.length; g++)
            this.ranges[g] = new ft(Ke(n, u[g].anchor), Ke(n, u[g].head));
        },
        origin: a && a.origin,
      };
      return (
        Et(n, "beforeSelectionChange", n, l),
        n.cm && Et(n.cm, "beforeSelectionChange", n.cm, l),
        l.ranges != i.ranges ? dr(n.cm, l.ranges, l.ranges.length - 1) : i
      );
    }
    function xg(n, i, a) {
      var l = n.history.done,
        u = ue(l);
      u && u.ranges ? ((l[l.length - 1] = i), za(n, i, a)) : nn(n, i, a);
    }
    function nn(n, i, a) {
      za(n, i, a), Wx(n, n.sel, n.cm ? n.cm.curOp.id : NaN, a);
    }
    function za(n, i, a) {
      (En(n, "beforeSelectionChange") || (n.cm && En(n.cm, "beforeSelectionChange"))) &&
        (i = jx(n, i, a));
      var l = (a && a.bias) || (_e(i.primary().head, n.sel.primary().head) < 0 ? -1 : 1);
      _g(n, kg(n, i, l, !0)),
        !(a && a.scroll === !1) && n.cm && n.cm.getOption("readOnly") != "nocursor" && Go(n.cm);
    }
    function _g(n, i) {
      i.equals(n.sel) ||
        ((n.sel = i),
        n.cm && ((n.cm.curOp.updateInput = 1), (n.cm.curOp.selectionChanged = !0), jn(n.cm)),
        Wt(n, "cursorActivity", n));
    }
    function Sg(n) {
      _g(n, kg(n, n.sel, null, !1));
    }
    function kg(n, i, a, l) {
      for (var u, g = 0; g < i.ranges.length; g++) {
        var m = i.ranges[g],
          w = i.ranges.length == n.sel.ranges.length && n.sel.ranges[g],
          _ = Ia(n, m.anchor, w && w.anchor, a, l),
          S = m.head == m.anchor ? _ : Ia(n, m.head, w && w.head, a, l);
        (u || _ != m.anchor || S != m.head) &&
          (u || (u = i.ranges.slice(0, g)), (u[g] = new ft(_, S)));
      }
      return u ? dr(n.cm, u, i.primIndex) : i;
    }
    function Yo(n, i, a, l, u) {
      var g = Oe(n, i.line);
      if (g.markedSpans)
        for (var m = 0; m < g.markedSpans.length; ++m) {
          var w = g.markedSpans[m],
            _ = w.marker,
            S = "selectLeft" in _ ? !_.selectLeft : _.inclusiveLeft,
            $ = "selectRight" in _ ? !_.selectRight : _.inclusiveRight;
          if (
            (w.from == null || (S ? w.from <= i.ch : w.from < i.ch)) &&
            (w.to == null || ($ ? w.to >= i.ch : w.to > i.ch))
          ) {
            if (u && (Et(_, "beforeCursorEnter"), _.explicitlyCleared))
              if (g.markedSpans) {
                --m;
                continue;
              } else break;
            if (!_.atomic) continue;
            if (a) {
              var R = _.find(l < 0 ? 1 : -1),
                G = void 0;
              if (
                ((l < 0 ? $ : S) && (R = Tg(n, R, -l, R && R.line == i.line ? g : null)),
                R && R.line == i.line && (G = _e(R, a)) && (l < 0 ? G < 0 : G > 0))
              )
                return Yo(n, R, i, l, u);
            }
            var U = _.find(l < 0 ? -1 : 1);
            return (
              (l < 0 ? S : $) && (U = Tg(n, U, l, U.line == i.line ? g : null)),
              U ? Yo(n, U, i, l, u) : null
            );
          }
        }
      return i;
    }
    function Ia(n, i, a, l, u) {
      var g = l || 1,
        m =
          Yo(n, i, a, g, u) ||
          (!u && Yo(n, i, a, g, !0)) ||
          Yo(n, i, a, -g, u) ||
          (!u && Yo(n, i, a, -g, !0));
      return m || ((n.cantEdit = !0), Q(n.first, 0));
    }
    function Tg(n, i, a, l) {
      return a < 0 && i.ch == 0
        ? i.line > n.first
          ? Ke(n, Q(i.line - 1))
          : null
        : a > 0 && i.ch == (l || Oe(n, i.line)).text.length
          ? i.line < n.first + n.size - 1
            ? Q(i.line + 1, 0)
            : null
          : new Q(i.line, i.ch + a);
    }
    function Cg(n) {
      n.setSelection(Q(n.firstLine(), 0), Q(n.lastLine()), F);
    }
    function Eg(n, i, a) {
      var l = {
        canceled: !1,
        from: i.from,
        to: i.to,
        text: i.text,
        origin: i.origin,
        cancel: function () {
          return (l.canceled = !0);
        },
      };
      return (
        a &&
          (l.update = function (u, g, m, w) {
            u && (l.from = Ke(n, u)),
              g && (l.to = Ke(n, g)),
              m && (l.text = m),
              w !== void 0 && (l.origin = w);
          }),
        Et(n, "beforeChange", n, l),
        n.cm && Et(n.cm, "beforeChange", n.cm, l),
        l.canceled
          ? (n.cm && (n.cm.curOp.updateInput = 2), null)
          : { from: l.from, to: l.to, text: l.text, origin: l.origin }
      );
    }
    function Zo(n, i, a) {
      if (n.cm) {
        if (!n.cm.curOp) return Ut(n.cm, Zo)(n, i, a);
        if (n.cm.state.suppressEdits) return;
      }
      if (
        !((En(n, "beforeChange") || (n.cm && En(n.cm, "beforeChange"))) && ((i = Eg(n, i, !0)), !i))
      ) {
        var l = yp && !a && W1(n, i.from, i.to);
        if (l)
          for (var u = l.length - 1; u >= 0; --u)
            Lg(n, { from: l[u].from, to: l[u].to, text: u ? [""] : i.text, origin: i.origin });
        else Lg(n, i);
      }
    }
    function Lg(n, i) {
      if (!(i.text.length == 1 && i.text[0] == "" && _e(i.from, i.to) == 0)) {
        var a = bf(n, i);
        vg(n, i, a, n.cm ? n.cm.curOp.id : NaN), Ys(n, i, a, Vu(n, i));
        var l = [];
        wi(n, function (u, g) {
          !g && Ce(l, u.history) == -1 && ($g(u.history, i), l.push(u.history)),
            Ys(u, i, null, Vu(u, i));
        });
      }
    }
    function Fa(n, i, a) {
      var l = n.cm && n.cm.state.suppressEdits;
      if (!(l && !a)) {
        for (
          var u = n.history,
            g,
            m = n.sel,
            w = i == "undo" ? u.done : u.undone,
            _ = i == "undo" ? u.undone : u.done,
            S = 0;
          S < w.length && ((g = w[S]), !(a ? g.ranges && !g.equals(n.sel) : !g.ranges));
          S++
        );
        if (S != w.length) {
          for (u.lastOrigin = u.lastSelOrigin = null; ; )
            if (((g = w.pop()), g.ranges)) {
              if ((Ra(g, _), a && !g.equals(n.sel))) {
                nn(n, g, { clearRedo: !1 });
                return;
              }
              m = g;
            } else if (l) {
              w.push(g);
              return;
            } else break;
          var $ = [];
          Ra(m, _),
            _.push({ changes: $, generation: u.generation }),
            (u.generation = g.generation || ++u.maxGeneration);
          for (
            var R = En(n, "beforeChange") || (n.cm && En(n.cm, "beforeChange")),
              G = function (fe) {
                var ge = g.changes[fe];
                if (((ge.origin = i), R && !Eg(n, ge, !1))) return (w.length = 0), {};
                $.push(_f(n, ge));
                var we = fe ? bf(n, ge) : ue(w);
                Ys(n, ge, we, yg(n, ge)),
                  !fe && n.cm && n.cm.scrollIntoView({ from: ge.from, to: bi(ge) });
                var ke = [];
                wi(n, function (xe, Ee) {
                  !Ee && Ce(ke, xe.history) == -1 && ($g(xe.history, ge), ke.push(xe.history)),
                    Ys(xe, ge, null, yg(xe, ge));
                });
              },
              U = g.changes.length - 1;
            U >= 0;
            --U
          ) {
            var ee = G(U);
            if (ee) return ee.v;
          }
        }
      }
    }
    function Ag(n, i) {
      if (
        i != 0 &&
        ((n.first += i),
        (n.sel = new Fn(
          ye(n.sel.ranges, function (u) {
            return new ft(Q(u.anchor.line + i, u.anchor.ch), Q(u.head.line + i, u.head.ch));
          }),
          n.sel.primIndex,
        )),
        n.cm)
      ) {
        vn(n.cm, n.first, n.first - i, i);
        for (var a = n.cm.display, l = a.viewFrom; l < a.viewTo; l++) vi(n.cm, l, "gutter");
      }
    }
    function Ys(n, i, a, l) {
      if (n.cm && !n.cm.curOp) return Ut(n.cm, Ys)(n, i, a, l);
      if (i.to.line < n.first) {
        Ag(n, i.text.length - 1 - (i.to.line - i.from.line));
        return;
      }
      if (!(i.from.line > n.lastLine())) {
        if (i.from.line < n.first) {
          var u = i.text.length - 1 - (n.first - i.from.line);
          Ag(n, u),
            (i = {
              from: Q(n.first, 0),
              to: Q(i.to.line + u, i.to.ch),
              text: [ue(i.text)],
              origin: i.origin,
            });
        }
        var g = n.lastLine();
        i.to.line > g &&
          (i = {
            from: i.from,
            to: Q(g, Oe(n, g).text.length),
            text: [i.text[0]],
            origin: i.origin,
          }),
          (i.removed = Br(n, i.from, i.to)),
          a || (a = bf(n, i)),
          n.cm ? Gx(n.cm, i, l) : xf(n, i, l),
          za(n, a, F),
          n.cantEdit && Ia(n, Q(n.firstLine(), 0)) && (n.cantEdit = !1);
      }
    }
    function Gx(n, i, a) {
      var l = n.doc,
        u = n.display,
        g = i.from,
        m = i.to,
        w = !1,
        _ = g.line;
      n.options.lineWrapping ||
        ((_ = T(ur(Oe(l, g.line)))),
        l.iter(_, m.line + 1, function (U) {
          if (U == u.maxLine) return (w = !0), !0;
        })),
        l.sel.contains(i.from, i.to) > -1 && jn(n),
        xf(l, i, a, Kp(n)),
        n.options.lineWrapping ||
          (l.iter(_, g.line + i.text.length, function (U) {
            var ee = _a(U);
            ee > u.maxLineLength &&
              ((u.maxLine = U), (u.maxLineLength = ee), (u.maxLineChanged = !0), (w = !1));
          }),
          w && (n.curOp.updateMaxLine = !0)),
        D1(l, g.line),
        Gs(n, 400);
      var S = i.text.length - (m.line - g.line) - 1;
      i.full
        ? vn(n)
        : g.line == m.line && i.text.length == 1 && !dg(n.doc, i)
          ? vi(n, g.line, "text")
          : vn(n, g.line, m.line + 1, S);
      var $ = En(n, "changes"),
        R = En(n, "change");
      if (R || $) {
        var G = { from: g, to: m, text: i.text, removed: i.removed, origin: i.origin };
        R && Wt(n, "change", n, G), $ && (n.curOp.changeObjs || (n.curOp.changeObjs = [])).push(G);
      }
      n.display.selForContextMenu = null;
    }
    function Jo(n, i, a, l, u) {
      var g;
      l || (l = a),
        _e(l, a) < 0 && ((g = [l, a]), (a = g[0]), (l = g[1])),
        typeof i == "string" && (i = n.splitLines(i)),
        Zo(n, { from: a, to: l, text: i, origin: u });
    }
    function Mg(n, i, a, l) {
      a < n.line ? (n.line += l) : i < n.line && ((n.line = i), (n.ch = 0));
    }
    function Ng(n, i, a, l) {
      for (var u = 0; u < n.length; ++u) {
        var g = n[u],
          m = !0;
        if (g.ranges) {
          g.copied || ((g = n[u] = g.deepCopy()), (g.copied = !0));
          for (var w = 0; w < g.ranges.length; w++)
            Mg(g.ranges[w].anchor, i, a, l), Mg(g.ranges[w].head, i, a, l);
          continue;
        }
        for (var _ = 0; _ < g.changes.length; ++_) {
          var S = g.changes[_];
          if (a < S.from.line)
            (S.from = Q(S.from.line + l, S.from.ch)), (S.to = Q(S.to.line + l, S.to.ch));
          else if (i <= S.to.line) {
            m = !1;
            break;
          }
        }
        m || (n.splice(0, u + 1), (u = 0));
      }
    }
    function $g(n, i) {
      var a = i.from.line,
        l = i.to.line,
        u = i.text.length - (l - a) - 1;
      Ng(n.done, a, l, u), Ng(n.undone, a, l, u);
    }
    function Zs(n, i, a, l) {
      var u = i,
        g = i;
      return (
        typeof i == "number" ? (g = Oe(n, cp(n, i))) : (u = T(i)),
        u == null ? null : (l(g, u) && n.cm && vi(n.cm, u, a), g)
      );
    }
    function Js(n) {
      (this.lines = n), (this.parent = null);
      for (var i = 0, a = 0; a < n.length; ++a) (n[a].parent = this), (i += n[a].height);
      this.height = i;
    }
    Js.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (n, i) {
        for (var a = n, l = n + i; a < l; ++a) {
          var u = this.lines[a];
          (this.height -= u.height), K1(u), Wt(u, "delete");
        }
        this.lines.splice(n, i);
      },
      collapse: function (n) {
        n.push.apply(n, this.lines);
      },
      insertInner: function (n, i, a) {
        (this.height += a),
          (this.lines = this.lines.slice(0, n).concat(i).concat(this.lines.slice(n)));
        for (var l = 0; l < i.length; ++l) i[l].parent = this;
      },
      iterN: function (n, i, a) {
        for (var l = n + i; n < l; ++n) if (a(this.lines[n])) return !0;
      },
    };
    function Qs(n) {
      this.children = n;
      for (var i = 0, a = 0, l = 0; l < n.length; ++l) {
        var u = n[l];
        (i += u.chunkSize()), (a += u.height), (u.parent = this);
      }
      (this.size = i), (this.height = a), (this.parent = null);
    }
    Qs.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (n, i) {
        this.size -= i;
        for (var a = 0; a < this.children.length; ++a) {
          var l = this.children[a],
            u = l.chunkSize();
          if (n < u) {
            var g = Math.min(i, u - n),
              m = l.height;
            if (
              (l.removeInner(n, g),
              (this.height -= m - l.height),
              u == g && (this.children.splice(a--, 1), (l.parent = null)),
              (i -= g) == 0)
            )
              break;
            n = 0;
          } else n -= u;
        }
        if (this.size - i < 25 && (this.children.length > 1 || !(this.children[0] instanceof Js))) {
          var w = [];
          this.collapse(w), (this.children = [new Js(w)]), (this.children[0].parent = this);
        }
      },
      collapse: function (n) {
        for (var i = 0; i < this.children.length; ++i) this.children[i].collapse(n);
      },
      insertInner: function (n, i, a) {
        (this.size += i.length), (this.height += a);
        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
            g = u.chunkSize();
          if (n <= g) {
            if ((u.insertInner(n, i, a), u.lines && u.lines.length > 50)) {
              for (var m = (u.lines.length % 25) + 25, w = m; w < u.lines.length; ) {
                var _ = new Js(u.lines.slice(w, (w += 25)));
                (u.height -= _.height), this.children.splice(++l, 0, _), (_.parent = this);
              }
              (u.lines = u.lines.slice(0, m)), this.maybeSpill();
            }
            break;
          }
          n -= g;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var n = this;
          do {
            var i = n.children.splice(n.children.length - 5, 5),
              a = new Qs(i);
            if (n.parent) {
              (n.size -= a.size), (n.height -= a.height);
              var u = Ce(n.parent.children, n);
              n.parent.children.splice(u + 1, 0, a);
            } else {
              var l = new Qs(n.children);
              (l.parent = n), (n.children = [l, a]), (n = l);
            }
            a.parent = n.parent;
          } while (n.children.length > 10);
          n.parent.maybeSpill();
        }
      },
      iterN: function (n, i, a) {
        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
            g = u.chunkSize();
          if (n < g) {
            var m = Math.min(i, g - n);
            if (u.iterN(n, m, a)) return !0;
            if ((i -= m) == 0) break;
            n = 0;
          } else n -= g;
        }
      },
    };
    var el = function (n, i, a) {
      if (a) for (var l in a) a.hasOwnProperty(l) && (this[l] = a[l]);
      (this.doc = n), (this.node = i);
    };
    (el.prototype.clear = function () {
      var n = this.doc.cm,
        i = this.line.widgets,
        a = this.line,
        l = T(a);
      if (!(l == null || !i)) {
        for (var u = 0; u < i.length; ++u) i[u] == this && i.splice(u--, 1);
        i.length || (a.widgets = null);
        var g = Hs(this);
        In(a, Math.max(0, a.height - g)),
          n &&
            (Ln(n, function () {
              Og(n, a, -g), vi(n, l, "widget");
            }),
            Wt(n, "lineWidgetCleared", n, this, l));
      }
    }),
      (el.prototype.changed = function () {
        var n = this,
          i = this.height,
          a = this.doc.cm,
          l = this.line;
        this.height = null;
        var u = Hs(this) - i;
        u &&
          (gi(this.doc, l) || In(l, l.height + u),
          a &&
            Ln(a, function () {
              (a.curOp.forceUpdate = !0), Og(a, l, u), Wt(a, "lineWidgetChanged", a, n, T(l));
            }));
      }),
      or(el);
    function Og(n, i, a) {
      Ur(i) < ((n.curOp && n.curOp.scrollTop) || n.doc.scrollTop) && hf(n, a);
    }
    function Kx(n, i, a, l) {
      var u = new el(n, a, l),
        g = n.cm;
      return (
        g && u.noHScroll && (g.display.alignWidgets = !0),
        Zs(n, i, "widget", function (m) {
          var w = m.widgets || (m.widgets = []);
          if (
            (u.insertAt == null
              ? w.push(u)
              : w.splice(Math.min(w.length, Math.max(0, u.insertAt)), 0, u),
            (u.line = m),
            g && !gi(n, m))
          ) {
            var _ = Ur(m) < n.scrollTop;
            In(m, m.height + Hs(u)), _ && hf(g, u.height), (g.curOp.forceUpdate = !0);
          }
          return !0;
        }),
        g && Wt(g, "lineWidgetAdded", g, u, typeof i == "number" ? i : T(i)),
        u
      );
    }
    var Pg = 0,
      xi = function (n, i) {
        (this.lines = []), (this.type = i), (this.doc = n), (this.id = ++Pg);
      };
    (xi.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var n = this.doc.cm,
          i = n && !n.curOp;
        if ((i && uo(n), En(this, "clear"))) {
          var a = this.find();
          a && Wt(this, "clear", a.from, a.to);
        }
        for (var l = null, u = null, g = 0; g < this.lines.length; ++g) {
          var m = this.lines[g],
            w = zs(m.markedSpans, this);
          n && !this.collapsed
            ? vi(n, T(m), "text")
            : n && (w.to != null && (u = T(m)), w.from != null && (l = T(m))),
            (m.markedSpans = F1(m.markedSpans, w)),
            w.from == null && this.collapsed && !gi(this.doc, m) && n && In(m, Uo(n.display));
        }
        if (n && this.collapsed && !n.options.lineWrapping)
          for (var _ = 0; _ < this.lines.length; ++_) {
            var S = ur(this.lines[_]),
              $ = _a(S);
            $ > n.display.maxLineLength &&
              ((n.display.maxLine = S),
              (n.display.maxLineLength = $),
              (n.display.maxLineChanged = !0));
          }
        l != null && n && this.collapsed && vn(n, l, u + 1),
          (this.lines.length = 0),
          (this.explicitlyCleared = !0),
          this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), n && Sg(n.doc)),
          n && Wt(n, "markerCleared", n, this, l, u),
          i && fo(n),
          this.parent && this.parent.clear();
      }
    }),
      (xi.prototype.find = function (n, i) {
        n == null && this.type == "bookmark" && (n = 1);
        for (var a, l, u = 0; u < this.lines.length; ++u) {
          var g = this.lines[u],
            m = zs(g.markedSpans, this);
          if (m.from != null && ((a = Q(i ? g : T(g), m.from)), n == -1)) return a;
          if (m.to != null && ((l = Q(i ? g : T(g), m.to)), n == 1)) return l;
        }
        return a && { from: a, to: l };
      }),
      (xi.prototype.changed = function () {
        var n = this,
          i = this.find(-1, !0),
          a = this,
          l = this.doc.cm;
        !i ||
          !l ||
          Ln(l, function () {
            var u = i.line,
              g = T(i.line),
              m = Qu(l, g);
            if (
              (m && (Hp(m), (l.curOp.selectionChanged = l.curOp.forceUpdate = !0)),
              (l.curOp.updateMaxLine = !0),
              !gi(a.doc, u) && a.height != null)
            ) {
              var w = a.height;
              a.height = null;
              var _ = Hs(a) - w;
              _ && In(u, u.height + _);
            }
            Wt(l, "markerChanged", l, n);
          });
      }),
      (xi.prototype.attachLine = function (n) {
        if (!this.lines.length && this.doc.cm) {
          var i = this.doc.cm.curOp;
          (!i.maybeHiddenMarkers || Ce(i.maybeHiddenMarkers, this) == -1) &&
            (i.maybeUnhiddenMarkers || (i.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(n);
      }),
      (xi.prototype.detachLine = function (n) {
        if ((this.lines.splice(Ce(this.lines, n), 1), !this.lines.length && this.doc.cm)) {
          var i = this.doc.cm.curOp;
          (i.maybeHiddenMarkers || (i.maybeHiddenMarkers = [])).push(this);
        }
      }),
      or(xi);
    function Qo(n, i, a, l, u) {
      if (l && l.shared) return Xx(n, i, a, l, u);
      if (n.cm && !n.cm.curOp) return Ut(n.cm, Qo)(n, i, a, l, u);
      var g = new xi(n, u),
        m = _e(i, a);
      if ((l && ae(l, g, !1), m > 0 || (m == 0 && g.clearWhenEmpty !== !1))) return g;
      if (
        (g.replacedWith &&
          ((g.collapsed = !0),
          (g.widgetNode = q("span", [g.replacedWith], "CodeMirror-widget")),
          l.handleMouseEvents || g.widgetNode.setAttribute("cm-ignore-events", "true"),
          l.insertLeft && (g.widgetNode.insertLeft = !0)),
        g.collapsed)
      ) {
        if (kp(n, i.line, i, a, g) || (i.line != a.line && kp(n, a.line, i, a, g)))
          throw new Error("Inserting collapsed marker partially overlapping an existing one");
        I1();
      }
      g.addToHistory && vg(n, { from: i, to: a, origin: "markText" }, n.sel, NaN);
      var w = i.line,
        _ = n.cm,
        S;
      if (
        (n.iter(w, a.line + 1, function (R) {
          _ && g.collapsed && !_.options.lineWrapping && ur(R) == _.display.maxLine && (S = !0),
            g.collapsed && w != i.line && In(R, 0),
            H1(
              R,
              new ya(g, w == i.line ? i.ch : null, w == a.line ? a.ch : null),
              n.cm && n.cm.curOp,
            ),
            ++w;
        }),
        g.collapsed &&
          n.iter(i.line, a.line + 1, function (R) {
            gi(n, R) && In(R, 0);
          }),
        g.clearOnEnter &&
          Fe(g, "beforeCursorEnter", function () {
            return g.clear();
          }),
        g.readOnly &&
          (z1(), (n.history.done.length || n.history.undone.length) && n.clearHistory()),
        g.collapsed && ((g.id = ++Pg), (g.atomic = !0)),
        _)
      ) {
        if ((S && (_.curOp.updateMaxLine = !0), g.collapsed)) vn(_, i.line, a.line + 1);
        else if (g.className || g.startStyle || g.endStyle || g.css || g.attributes || g.title)
          for (var $ = i.line; $ <= a.line; $++) vi(_, $, "text");
        g.atomic && Sg(_.doc), Wt(_, "markerAdded", _, g);
      }
      return g;
    }
    var tl = function (n, i) {
      (this.markers = n), (this.primary = i);
      for (var a = 0; a < n.length; ++a) n[a].parent = this;
    };
    (tl.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var n = 0; n < this.markers.length; ++n) this.markers[n].clear();
        Wt(this, "clear");
      }
    }),
      (tl.prototype.find = function (n, i) {
        return this.primary.find(n, i);
      }),
      or(tl);
    function Xx(n, i, a, l, u) {
      (l = ae(l)), (l.shared = !1);
      var g = [Qo(n, i, a, l, u)],
        m = g[0],
        w = l.widgetNode;
      return (
        wi(n, function (_) {
          w && (l.widgetNode = w.cloneNode(!0)), g.push(Qo(_, Ke(_, i), Ke(_, a), l, u));
          for (var S = 0; S < _.linked.length; ++S) if (_.linked[S].isParent) return;
          m = ue(g);
        }),
        new tl(g, m)
      );
    }
    function Rg(n) {
      return n.findMarks(Q(n.first, 0), n.clipPos(Q(n.lastLine())), function (i) {
        return i.parent;
      });
    }
    function Yx(n, i) {
      for (var a = 0; a < i.length; a++) {
        var l = i[a],
          u = l.find(),
          g = n.clipPos(u.from),
          m = n.clipPos(u.to);
        if (_e(g, m)) {
          var w = Qo(n, g, m, l.primary, l.primary.type);
          l.markers.push(w), (w.parent = l);
        }
      }
    }
    function Zx(n) {
      for (
        var i = function (l) {
            var u = n[l],
              g = [u.primary.doc];
            wi(u.primary.doc, function (_) {
              return g.push(_);
            });
            for (var m = 0; m < u.markers.length; m++) {
              var w = u.markers[m];
              Ce(g, w.doc) == -1 && ((w.parent = null), u.markers.splice(m--, 1));
            }
          },
          a = 0;
        a < n.length;
        a++
      )
        i(a);
    }
    var Jx = 0,
      mn = function (n, i, a, l, u) {
        if (!(this instanceof mn)) return new mn(n, i, a, l, u);
        a == null && (a = 0),
          Qs.call(this, [new Js([new qo("", null)])]),
          (this.first = a),
          (this.scrollTop = this.scrollLeft = 0),
          (this.cantEdit = !1),
          (this.cleanGeneration = 1),
          (this.modeFrontier = this.highlightFrontier = a);
        var g = Q(a, 0);
        (this.sel = yi(g)),
          (this.history = new Pa(null)),
          (this.id = ++Jx),
          (this.modeOption = i),
          (this.lineSep = l),
          (this.direction = u == "rtl" ? "rtl" : "ltr"),
          (this.extend = !1),
          typeof n == "string" && (n = this.splitLines(n)),
          xf(this, { from: g, to: g, text: n }),
          nn(this, yi(g), F);
      };
    (mn.prototype = Ie(Qs.prototype, {
      constructor: mn,
      iter: function (n, i, a) {
        a
          ? this.iterN(n - this.first, i - n, a)
          : this.iterN(this.first, this.first + this.size, n);
      },
      insert: function (n, i) {
        for (var a = 0, l = 0; l < i.length; ++l) a += i[l].height;
        this.insertInner(n - this.first, i, a);
      },
      remove: function (n, i) {
        this.removeInner(n - this.first, i);
      },
      getValue: function (n) {
        var i = Rs(this, this.first, this.first + this.size);
        return n === !1 ? i : i.join(n || this.lineSeparator());
      },
      setValue: Vt(function (n) {
        var i = Q(this.first, 0),
          a = this.first + this.size - 1;
        Zo(
          this,
          {
            from: i,
            to: Q(a, Oe(this, a).text.length),
            text: this.splitLines(n),
            origin: "setValue",
            full: !0,
          },
          !0,
        ),
          this.cm && Ws(this.cm, 0, 0),
          nn(this, yi(i), F);
      }),
      replaceRange: function (n, i, a, l) {
        (i = Ke(this, i)), (a = a ? Ke(this, a) : i), Jo(this, n, i, a, l);
      },
      getRange: function (n, i, a) {
        var l = Br(this, Ke(this, n), Ke(this, i));
        return a === !1 ? l : a === "" ? l.join("") : l.join(a || this.lineSeparator());
      },
      getLine: function (n) {
        var i = this.getLineHandle(n);
        return i && i.text;
      },
      getLineHandle: function (n) {
        if (oe(this, n)) return Oe(this, n);
      },
      getLineNumber: function (n) {
        return T(n);
      },
      getLineHandleVisualStart: function (n) {
        return typeof n == "number" && (n = Oe(this, n)), ur(n);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (n) {
        return Ke(this, n);
      },
      getCursor: function (n) {
        var i = this.sel.primary(),
          a;
        return (
          n == null || n == "head"
            ? (a = i.head)
            : n == "anchor"
              ? (a = i.anchor)
              : n == "end" || n == "to" || n === !1
                ? (a = i.to())
                : (a = i.from()),
          a
        );
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: Vt(function (n, i, a) {
        wg(this, Ke(this, typeof n == "number" ? Q(n, i || 0) : n), null, a);
      }),
      setSelection: Vt(function (n, i, a) {
        wg(this, Ke(this, n), Ke(this, i || n), a);
      }),
      extendSelection: Vt(function (n, i, a) {
        Da(this, Ke(this, n), i && Ke(this, i), a);
      }),
      extendSelections: Vt(function (n, i) {
        bg(this, up(this, n), i);
      }),
      extendSelectionsBy: Vt(function (n, i) {
        var a = ye(this.sel.ranges, n);
        bg(this, up(this, a), i);
      }),
      setSelections: Vt(function (n, i, a) {
        if (n.length) {
          for (var l = [], u = 0; u < n.length; u++)
            l[u] = new ft(Ke(this, n[u].anchor), Ke(this, n[u].head || n[u].anchor));
          i == null && (i = Math.min(n.length - 1, this.sel.primIndex)),
            nn(this, dr(this.cm, l, i), a);
        }
      }),
      addSelection: Vt(function (n, i, a) {
        var l = this.sel.ranges.slice(0);
        l.push(new ft(Ke(this, n), Ke(this, i || n))), nn(this, dr(this.cm, l, l.length - 1), a);
      }),
      getSelection: function (n) {
        for (var i = this.sel.ranges, a, l = 0; l < i.length; l++) {
          var u = Br(this, i[l].from(), i[l].to());
          a = a ? a.concat(u) : u;
        }
        return n === !1 ? a : a.join(n || this.lineSeparator());
      },
      getSelections: function (n) {
        for (var i = [], a = this.sel.ranges, l = 0; l < a.length; l++) {
          var u = Br(this, a[l].from(), a[l].to());
          n !== !1 && (u = u.join(n || this.lineSeparator())), (i[l] = u);
        }
        return i;
      },
      replaceSelection: function (n, i, a) {
        for (var l = [], u = 0; u < this.sel.ranges.length; u++) l[u] = n;
        this.replaceSelections(l, i, a || "+input");
      },
      replaceSelections: Vt(function (n, i, a) {
        for (var l = [], u = this.sel, g = 0; g < u.ranges.length; g++) {
          var m = u.ranges[g];
          l[g] = { from: m.from(), to: m.to(), text: this.splitLines(n[g]), origin: a };
        }
        for (var w = i && i != "end" && Fx(this, l, i), _ = l.length - 1; _ >= 0; _--)
          Zo(this, l[_]);
        w ? xg(this, w) : this.cm && Go(this.cm);
      }),
      undo: Vt(function () {
        Fa(this, "undo");
      }),
      redo: Vt(function () {
        Fa(this, "redo");
      }),
      undoSelection: Vt(function () {
        Fa(this, "undo", !0);
      }),
      redoSelection: Vt(function () {
        Fa(this, "redo", !0);
      }),
      setExtending: function (n) {
        this.extend = n;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var n = this.history, i = 0, a = 0, l = 0; l < n.done.length; l++)
          n.done[l].ranges || ++i;
        for (var u = 0; u < n.undone.length; u++) n.undone[u].ranges || ++a;
        return { undo: i, redo: a };
      },
      clearHistory: function () {
        var n = this;
        (this.history = new Pa(this.history)),
          wi(
            this,
            function (i) {
              return (i.history = n.history);
            },
            !0,
          );
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (n) {
        return (
          n && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
          this.history.generation
        );
      },
      isClean: function (n) {
        return this.history.generation == (n || this.cleanGeneration);
      },
      getHistory: function () {
        return { done: Xo(this.history.done), undone: Xo(this.history.undone) };
      },
      setHistory: function (n) {
        var i = (this.history = new Pa(this.history));
        (i.done = Xo(n.done.slice(0), null, !0)), (i.undone = Xo(n.undone.slice(0), null, !0));
      },
      setGutterMarker: Vt(function (n, i, a) {
        return Zs(this, n, "gutter", function (l) {
          var u = l.gutterMarkers || (l.gutterMarkers = {});
          return (u[i] = a), !a && vt(u) && (l.gutterMarkers = null), !0;
        });
      }),
      clearGutter: Vt(function (n) {
        var i = this;
        this.iter(function (a) {
          a.gutterMarkers &&
            a.gutterMarkers[n] &&
            Zs(i, a, "gutter", function () {
              return (
                (a.gutterMarkers[n] = null), vt(a.gutterMarkers) && (a.gutterMarkers = null), !0
              );
            });
        });
      }),
      lineInfo: function (n) {
        var i;
        if (typeof n == "number") {
          if (!oe(this, n) || ((i = n), (n = Oe(this, n)), !n)) return null;
        } else if (((i = T(n)), i == null)) return null;
        return {
          line: i,
          handle: n,
          text: n.text,
          gutterMarkers: n.gutterMarkers,
          textClass: n.textClass,
          bgClass: n.bgClass,
          wrapClass: n.wrapClass,
          widgets: n.widgets,
        };
      },
      addLineClass: Vt(function (n, i, a) {
        return Zs(this, n, i == "gutter" ? "gutter" : "class", function (l) {
          var u =
            i == "text"
              ? "textClass"
              : i == "background"
                ? "bgClass"
                : i == "gutter"
                  ? "gutterClass"
                  : "wrapClass";
          if (!l[u]) l[u] = a;
          else {
            if (te(a).test(l[u])) return !1;
            l[u] += " " + a;
          }
          return !0;
        });
      }),
      removeLineClass: Vt(function (n, i, a) {
        return Zs(this, n, i == "gutter" ? "gutter" : "class", function (l) {
          var u =
              i == "text"
                ? "textClass"
                : i == "background"
                  ? "bgClass"
                  : i == "gutter"
                    ? "gutterClass"
                    : "wrapClass",
            g = l[u];
          if (g)
            if (a == null) l[u] = null;
            else {
              var m = g.match(te(a));
              if (!m) return !1;
              var w = m.index + m[0].length;
              l[u] =
                g.slice(0, m.index) + (!m.index || w == g.length ? "" : " ") + g.slice(w) || null;
            }
          else return !1;
          return !0;
        });
      }),
      addLineWidget: Vt(function (n, i, a) {
        return Kx(this, n, i, a);
      }),
      removeLineWidget: function (n) {
        n.clear();
      },
      markText: function (n, i, a) {
        return Qo(this, Ke(this, n), Ke(this, i), a, (a && a.type) || "range");
      },
      setBookmark: function (n, i) {
        var a = {
          replacedWith: i && (i.nodeType == null ? i.widget : i),
          insertLeft: i && i.insertLeft,
          clearWhenEmpty: !1,
          shared: i && i.shared,
          handleMouseEvents: i && i.handleMouseEvents,
        };
        return (n = Ke(this, n)), Qo(this, n, n, a, "bookmark");
      },
      findMarksAt: function (n) {
        n = Ke(this, n);
        var i = [],
          a = Oe(this, n.line).markedSpans;
        if (a)
          for (var l = 0; l < a.length; ++l) {
            var u = a[l];
            (u.from == null || u.from <= n.ch) &&
              (u.to == null || u.to >= n.ch) &&
              i.push(u.marker.parent || u.marker);
          }
        return i;
      },
      findMarks: function (n, i, a) {
        (n = Ke(this, n)), (i = Ke(this, i));
        var l = [],
          u = n.line;
        return (
          this.iter(n.line, i.line + 1, function (g) {
            var m = g.markedSpans;
            if (m)
              for (var w = 0; w < m.length; w++) {
                var _ = m[w];
                !(
                  (_.to != null && u == n.line && n.ch >= _.to) ||
                  (_.from == null && u != n.line) ||
                  (_.from != null && u == i.line && _.from >= i.ch)
                ) &&
                  (!a || a(_.marker)) &&
                  l.push(_.marker.parent || _.marker);
              }
            ++u;
          }),
          l
        );
      },
      getAllMarks: function () {
        var n = [];
        return (
          this.iter(function (i) {
            var a = i.markedSpans;
            if (a) for (var l = 0; l < a.length; ++l) a[l].from != null && n.push(a[l].marker);
          }),
          n
        );
      },
      posFromIndex: function (n) {
        var i,
          a = this.first,
          l = this.lineSeparator().length;
        return (
          this.iter(function (u) {
            var g = u.text.length + l;
            if (g > n) return (i = n), !0;
            (n -= g), ++a;
          }),
          Ke(this, Q(a, i))
        );
      },
      indexFromPos: function (n) {
        n = Ke(this, n);
        var i = n.ch;
        if (n.line < this.first || n.ch < 0) return 0;
        var a = this.lineSeparator().length;
        return (
          this.iter(this.first, n.line, function (l) {
            i += l.text.length + a;
          }),
          i
        );
      },
      copy: function (n) {
        var i = new mn(
          Rs(this, this.first, this.first + this.size),
          this.modeOption,
          this.first,
          this.lineSep,
          this.direction,
        );
        return (
          (i.scrollTop = this.scrollTop),
          (i.scrollLeft = this.scrollLeft),
          (i.sel = this.sel),
          (i.extend = !1),
          n && ((i.history.undoDepth = this.history.undoDepth), i.setHistory(this.getHistory())),
          i
        );
      },
      linkedDoc: function (n) {
        n || (n = {});
        var i = this.first,
          a = this.first + this.size;
        n.from != null && n.from > i && (i = n.from), n.to != null && n.to < a && (a = n.to);
        var l = new mn(Rs(this, i, a), n.mode || this.modeOption, i, this.lineSep, this.direction);
        return (
          n.sharedHist && (l.history = this.history),
          (this.linked || (this.linked = [])).push({ doc: l, sharedHist: n.sharedHist }),
          (l.linked = [{ doc: this, isParent: !0, sharedHist: n.sharedHist }]),
          Yx(l, Rg(this)),
          l
        );
      },
      unlinkDoc: function (n) {
        if ((n instanceof St && (n = n.doc), this.linked))
          for (var i = 0; i < this.linked.length; ++i) {
            var a = this.linked[i];
            if (a.doc == n) {
              this.linked.splice(i, 1), n.unlinkDoc(this), Zx(Rg(this));
              break;
            }
          }
        if (n.history == this.history) {
          var l = [n.id];
          wi(
            n,
            function (u) {
              return l.push(u.id);
            },
            !0,
          ),
            (n.history = new Pa(null)),
            (n.history.done = Xo(this.history.done, l)),
            (n.history.undone = Xo(this.history.undone, l));
        }
      },
      iterLinkedDocs: function (n) {
        wi(this, n);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (n) {
        return this.lineSep ? n.split(this.lineSep) : Gn(n);
      },
      lineSeparator: function () {
        return (
          this.lineSep ||
          `
`
        );
      },
      setDirection: Vt(function (n) {
        n != "rtl" && (n = "ltr"),
          n != this.direction &&
            ((this.direction = n),
            this.iter(function (i) {
              return (i.order = null);
            }),
            this.cm && Hx(this.cm));
      }),
    })),
      (mn.prototype.eachLine = mn.prototype.iter);
    var Dg = 0;
    function Qx(n) {
      var i = this;
      if ((zg(i), !(Lt(i, n) || Vr(i.display, n)))) {
        tn(n), h && (Dg = +new Date());
        var a = so(i, n, !0),
          l = n.dataTransfer.files;
        if (!(!a || i.isReadOnly()))
          if (l && l.length && window.FileReader && window.File)
            for (
              var u = l.length,
                g = Array(u),
                m = 0,
                w = function () {
                  ++m == u &&
                    Ut(i, function () {
                      a = Ke(i.doc, a);
                      var U = {
                        from: a,
                        to: a,
                        text: i.doc.splitLines(
                          g
                            .filter(function (ee) {
                              return ee != null;
                            })
                            .join(i.doc.lineSeparator()),
                        ),
                        origin: "paste",
                      };
                      Zo(i.doc, U), xg(i.doc, yi(Ke(i.doc, a), Ke(i.doc, bi(U))));
                    })();
                },
                _ = function (U, ee) {
                  if (
                    i.options.allowDropFileTypes &&
                    Ce(i.options.allowDropFileTypes, U.type) == -1
                  ) {
                    w();
                    return;
                  }
                  var fe = new FileReader();
                  (fe.onerror = function () {
                    return w();
                  }),
                    (fe.onload = function () {
                      var ge = fe.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(ge)) {
                        w();
                        return;
                      }
                      (g[ee] = ge), w();
                    }),
                    fe.readAsText(U);
                },
                S = 0;
              S < l.length;
              S++
            )
              _(l[S], S);
          else {
            if (i.state.draggingText && i.doc.sel.contains(a) > -1) {
              i.state.draggingText(n),
                setTimeout(function () {
                  return i.display.input.focus();
                }, 20);
              return;
            }
            try {
              var $ = n.dataTransfer.getData("Text");
              if ($) {
                var R;
                if (
                  (i.state.draggingText && !i.state.draggingText.copy && (R = i.listSelections()),
                  za(i.doc, yi(a, a)),
                  R)
                )
                  for (var G = 0; G < R.length; ++G) Jo(i.doc, "", R[G].anchor, R[G].head, "drag");
                i.replaceSelection($, "around", "paste"), i.display.input.focus();
              }
            } catch {}
          }
      }
    }
    function e_(n, i) {
      if (h && (!n.state.draggingText || +new Date() - Dg < 100)) {
        fi(i);
        return;
      }
      if (
        !(Lt(n, i) || Vr(n.display, i)) &&
        (i.dataTransfer.setData("Text", n.getSelection()),
        (i.dataTransfer.effectAllowed = "copyMove"),
        i.dataTransfer.setDragImage && !E)
      ) {
        var a = k("img", null, null, "position: fixed; left: 0; top: 0;");
        (a.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          C && ((a.width = a.height = 1), n.display.wrapper.appendChild(a), (a._top = a.offsetTop)),
          i.dataTransfer.setDragImage(a, 0, 0),
          C && a.parentNode.removeChild(a);
      }
    }
    function t_(n, i) {
      var a = so(n, i);
      if (a) {
        var l = document.createDocumentFragment();
        af(n, a, l),
          n.display.dragCursor ||
            ((n.display.dragCursor = k("div", null, "CodeMirror-cursors CodeMirror-dragcursors")),
            n.display.lineSpace.insertBefore(n.display.dragCursor, n.display.cursorDiv)),
          I(n.display.dragCursor, l);
      }
    }
    function zg(n) {
      n.display.dragCursor &&
        (n.display.lineSpace.removeChild(n.display.dragCursor), (n.display.dragCursor = null));
    }
    function Ig(n) {
      if (document.getElementsByClassName) {
        for (
          var i = document.getElementsByClassName("CodeMirror"), a = [], l = 0;
          l < i.length;
          l++
        ) {
          var u = i[l].CodeMirror;
          u && a.push(u);
        }
        a.length &&
          a[0].operation(function () {
            for (var g = 0; g < a.length; g++) n(a[g]);
          });
      }
    }
    var Fg = !1;
    function n_() {
      Fg || (r_(), (Fg = !0));
    }
    function r_() {
      var n;
      Fe(window, "resize", function () {
        n == null &&
          (n = setTimeout(function () {
            (n = null), Ig(i_);
          }, 100));
      }),
        Fe(window, "blur", function () {
          return Ig(jo);
        });
    }
    function i_(n) {
      var i = n.display;
      (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
        (i.scrollbarsClipped = !1),
        n.setSize();
    }
    for (
      var _i = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          224: "Mod",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert",
        },
        nl = 0;
      nl < 10;
      nl++
    )
      _i[nl + 48] = _i[nl + 96] = String(nl);
    for (var Ha = 65; Ha <= 90; Ha++) _i[Ha] = String.fromCharCode(Ha);
    for (var rl = 1; rl <= 12; rl++) _i[rl + 111] = _i[rl + 63235] = "F" + rl;
    var Gr = {};
    (Gr.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection",
    }),
      (Gr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic",
      }),
      (Gr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine",
      }),
      (Gr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"],
      }),
      (Gr.default = H ? Gr.macDefault : Gr.pcDefault);
    function o_(n) {
      var i = n.split(/-(?!$)/);
      n = i[i.length - 1];
      for (var a, l, u, g, m = 0; m < i.length - 1; m++) {
        var w = i[m];
        if (/^(cmd|meta|m)$/i.test(w)) g = !0;
        else if (/^a(lt)?$/i.test(w)) a = !0;
        else if (/^(c|ctrl|control)$/i.test(w)) l = !0;
        else if (/^s(hift)?$/i.test(w)) u = !0;
        else throw new Error("Unrecognized modifier name: " + w);
      }
      return (
        a && (n = "Alt-" + n),
        l && (n = "Ctrl-" + n),
        g && (n = "Cmd-" + n),
        u && (n = "Shift-" + n),
        n
      );
    }
    function s_(n) {
      var i = {};
      for (var a in n)
        if (n.hasOwnProperty(a)) {
          var l = n[a];
          if (/^(name|fallthrough|(de|at)tach)$/.test(a)) continue;
          if (l == "...") {
            delete n[a];
            continue;
          }
          for (var u = ye(a.split(" "), o_), g = 0; g < u.length; g++) {
            var m = void 0,
              w = void 0;
            g == u.length - 1
              ? ((w = u.join(" ")), (m = l))
              : ((w = u.slice(0, g + 1).join(" ")), (m = "..."));
            var _ = i[w];
            if (!_) i[w] = m;
            else if (_ != m) throw new Error("Inconsistent bindings for " + w);
          }
          delete n[a];
        }
      for (var S in i) n[S] = i[S];
      return n;
    }
    function es(n, i, a, l) {
      i = qa(i);
      var u = i.call ? i.call(n, l) : i[n];
      if (u === !1) return "nothing";
      if (u === "...") return "multi";
      if (u != null && a(u)) return "handled";
      if (i.fallthrough) {
        if (Object.prototype.toString.call(i.fallthrough) != "[object Array]")
          return es(n, i.fallthrough, a, l);
        for (var g = 0; g < i.fallthrough.length; g++) {
          var m = es(n, i.fallthrough[g], a, l);
          if (m) return m;
        }
      }
    }
    function Hg(n) {
      var i = typeof n == "string" ? n : _i[n.keyCode];
      return i == "Ctrl" || i == "Alt" || i == "Shift" || i == "Mod";
    }
    function qg(n, i, a) {
      var l = n;
      return (
        i.altKey && l != "Alt" && (n = "Alt-" + n),
        (ne ? i.metaKey : i.ctrlKey) && l != "Ctrl" && (n = "Ctrl-" + n),
        (ne ? i.ctrlKey : i.metaKey) && l != "Mod" && (n = "Cmd-" + n),
        !a && i.shiftKey && l != "Shift" && (n = "Shift-" + n),
        n
      );
    }
    function Bg(n, i) {
      if (C && n.keyCode == 34 && n.char) return !1;
      var a = _i[n.keyCode];
      return a == null || n.altGraphKey
        ? !1
        : (n.keyCode == 3 && n.code && (a = n.code), qg(a, n, i));
    }
    function qa(n) {
      return typeof n == "string" ? Gr[n] : n;
    }
    function ts(n, i) {
      for (var a = n.doc.sel.ranges, l = [], u = 0; u < a.length; u++) {
        for (var g = i(a[u]); l.length && _e(g.from, ue(l).to) <= 0; ) {
          var m = l.pop();
          if (_e(m.from, g.from) < 0) {
            g.from = m.from;
            break;
          }
        }
        l.push(g);
      }
      Ln(n, function () {
        for (var w = l.length - 1; w >= 0; w--) Jo(n.doc, "", l[w].from, l[w].to, "+delete");
        Go(n);
      });
    }
    function Tf(n, i, a) {
      var l = Ft(n.text, i + a, a);
      return l < 0 || l > n.text.length ? null : l;
    }
    function Cf(n, i, a) {
      var l = Tf(n, i.ch, a);
      return l == null ? null : new Q(i.line, l, a < 0 ? "after" : "before");
    }
    function Ef(n, i, a, l, u) {
      if (n) {
        i.doc.direction == "rtl" && (u = -u);
        var g = Ue(a, i.doc.direction);
        if (g) {
          var m = u < 0 ? ue(g) : g[0],
            w = u < 0 == (m.level == 1),
            _ = w ? "after" : "before",
            S;
          if (m.level > 0 || i.doc.direction == "rtl") {
            var $ = Wo(i, a);
            S = u < 0 ? a.text.length - 1 : 0;
            var R = Er(i, $, S).top;
            (S = Jt(
              function (G) {
                return Er(i, $, G).top == R;
              },
              u < 0 == (m.level == 1) ? m.from : m.to - 1,
              S,
            )),
              _ == "before" && (S = Tf(a, S, 1));
          } else S = u < 0 ? m.to : m.from;
          return new Q(l, S, _);
        }
      }
      return new Q(l, u < 0 ? a.text.length : 0, u < 0 ? "before" : "after");
    }
    function l_(n, i, a, l) {
      var u = Ue(i, n.doc.direction);
      if (!u) return Cf(i, a, l);
      a.ch >= i.text.length
        ? ((a.ch = i.text.length), (a.sticky = "before"))
        : a.ch <= 0 && ((a.ch = 0), (a.sticky = "after"));
      var g = ir(u, a.ch, a.sticky),
        m = u[g];
      if (n.doc.direction == "ltr" && m.level % 2 == 0 && (l > 0 ? m.to > a.ch : m.from < a.ch))
        return Cf(i, a, l);
      var w = function (we, ke) {
          return Tf(i, we instanceof Q ? we.ch : we, ke);
        },
        _,
        S = function (we) {
          return n.options.lineWrapping
            ? ((_ = _ || Wo(n, i)), Gp(n, i, _, we))
            : { begin: 0, end: i.text.length };
        },
        $ = S(a.sticky == "before" ? w(a, -1) : a.ch);
      if (n.doc.direction == "rtl" || m.level == 1) {
        var R = (m.level == 1) == l < 0,
          G = w(a, R ? 1 : -1);
        if (G != null && (R ? G <= m.to && G <= $.end : G >= m.from && G >= $.begin)) {
          var U = R ? "before" : "after";
          return new Q(a.line, G, U);
        }
      }
      var ee = function (we, ke, xe) {
          for (
            var Ee = function (wt, jt) {
              return jt ? new Q(a.line, w(wt, 1), "before") : new Q(a.line, wt, "after");
            };
            we >= 0 && we < u.length;
            we += ke
          ) {
            var He = u[we],
              Re = ke > 0 == (He.level != 1),
              Je = Re ? xe.begin : w(xe.end, -1);
            if (
              (He.from <= Je && Je < He.to) ||
              ((Je = Re ? He.from : w(He.to, -1)), xe.begin <= Je && Je < xe.end)
            )
              return Ee(Je, Re);
          }
        },
        fe = ee(g + l, l, $);
      if (fe) return fe;
      var ge = l > 0 ? $.end : w($.begin, -1);
      return ge != null &&
        !(l > 0 && ge == i.text.length) &&
        ((fe = ee(l > 0 ? 0 : u.length - 1, l, S(ge))), fe)
        ? fe
        : null;
    }
    var il = {
      selectAll: Cg,
      singleSelection: function (n) {
        return n.setSelection(n.getCursor("anchor"), n.getCursor("head"), F);
      },
      killLine: function (n) {
        return ts(n, function (i) {
          if (i.empty()) {
            var a = Oe(n.doc, i.head.line).text.length;
            return i.head.ch == a && i.head.line < n.lastLine()
              ? { from: i.head, to: Q(i.head.line + 1, 0) }
              : { from: i.head, to: Q(i.head.line, a) };
          } else return { from: i.from(), to: i.to() };
        });
      },
      deleteLine: function (n) {
        return ts(n, function (i) {
          return { from: Q(i.from().line, 0), to: Ke(n.doc, Q(i.to().line + 1, 0)) };
        });
      },
      delLineLeft: function (n) {
        return ts(n, function (i) {
          return { from: Q(i.from().line, 0), to: i.from() };
        });
      },
      delWrappedLineLeft: function (n) {
        return ts(n, function (i) {
          var a = n.charCoords(i.head, "div").top + 5,
            l = n.coordsChar({ left: 0, top: a }, "div");
          return { from: l, to: i.from() };
        });
      },
      delWrappedLineRight: function (n) {
        return ts(n, function (i) {
          var a = n.charCoords(i.head, "div").top + 5,
            l = n.coordsChar({ left: n.display.lineDiv.offsetWidth + 100, top: a }, "div");
          return { from: i.from(), to: l };
        });
      },
      undo: function (n) {
        return n.undo();
      },
      redo: function (n) {
        return n.redo();
      },
      undoSelection: function (n) {
        return n.undoSelection();
      },
      redoSelection: function (n) {
        return n.redoSelection();
      },
      goDocStart: function (n) {
        return n.extendSelection(Q(n.firstLine(), 0));
      },
      goDocEnd: function (n) {
        return n.extendSelection(Q(n.lastLine()));
      },
      goLineStart: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return Wg(n, i.head.line);
          },
          { origin: "+move", bias: 1 },
        );
      },
      goLineStartSmart: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return Ug(n, i.head);
          },
          { origin: "+move", bias: 1 },
        );
      },
      goLineEnd: function (n) {
        return n.extendSelectionsBy(
          function (i) {
            return a_(n, i.head.line);
          },
          { origin: "+move", bias: -1 },
        );
      },
      goLineRight: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5;
          return n.coordsChar({ left: n.display.lineDiv.offsetWidth + 100, top: a }, "div");
        }, ce);
      },
      goLineLeft: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5;
          return n.coordsChar({ left: 0, top: a }, "div");
        }, ce);
      },
      goLineLeftSmart: function (n) {
        return n.extendSelectionsBy(function (i) {
          var a = n.cursorCoords(i.head, "div").top + 5,
            l = n.coordsChar({ left: 0, top: a }, "div");
          return l.ch < n.getLine(l.line).search(/\S/) ? Ug(n, i.head) : l;
        }, ce);
      },
      goLineUp: function (n) {
        return n.moveV(-1, "line");
      },
      goLineDown: function (n) {
        return n.moveV(1, "line");
      },
      goPageUp: function (n) {
        return n.moveV(-1, "page");
      },
      goPageDown: function (n) {
        return n.moveV(1, "page");
      },
      goCharLeft: function (n) {
        return n.moveH(-1, "char");
      },
      goCharRight: function (n) {
        return n.moveH(1, "char");
      },
      goColumnLeft: function (n) {
        return n.moveH(-1, "column");
      },
      goColumnRight: function (n) {
        return n.moveH(1, "column");
      },
      goWordLeft: function (n) {
        return n.moveH(-1, "word");
      },
      goGroupRight: function (n) {
        return n.moveH(1, "group");
      },
      goGroupLeft: function (n) {
        return n.moveH(-1, "group");
      },
      goWordRight: function (n) {
        return n.moveH(1, "word");
      },
      delCharBefore: function (n) {
        return n.deleteH(-1, "codepoint");
      },
      delCharAfter: function (n) {
        return n.deleteH(1, "char");
      },
      delWordBefore: function (n) {
        return n.deleteH(-1, "word");
      },
      delWordAfter: function (n) {
        return n.deleteH(1, "word");
      },
      delGroupBefore: function (n) {
        return n.deleteH(-1, "group");
      },
      delGroupAfter: function (n) {
        return n.deleteH(1, "group");
      },
      indentAuto: function (n) {
        return n.indentSelection("smart");
      },
      indentMore: function (n) {
        return n.indentSelection("add");
      },
      indentLess: function (n) {
        return n.indentSelection("subtract");
      },
      insertTab: function (n) {
        return n.replaceSelection("	");
      },
      insertSoftTab: function (n) {
        for (var i = [], a = n.listSelections(), l = n.options.tabSize, u = 0; u < a.length; u++) {
          var g = a[u].from(),
            m = de(n.getLine(g.line), g.ch, l);
          i.push(Se(l - (m % l)));
        }
        n.replaceSelections(i);
      },
      defaultTab: function (n) {
        n.somethingSelected() ? n.indentSelection("add") : n.execCommand("insertTab");
      },
      transposeChars: function (n) {
        return Ln(n, function () {
          for (var i = n.listSelections(), a = [], l = 0; l < i.length; l++)
            if (i[l].empty()) {
              var u = i[l].head,
                g = Oe(n.doc, u.line).text;
              if (g) {
                if ((u.ch == g.length && (u = new Q(u.line, u.ch - 1)), u.ch > 0))
                  (u = new Q(u.line, u.ch + 1)),
                    n.replaceRange(
                      g.charAt(u.ch - 1) + g.charAt(u.ch - 2),
                      Q(u.line, u.ch - 2),
                      u,
                      "+transpose",
                    );
                else if (u.line > n.doc.first) {
                  var m = Oe(n.doc, u.line - 1).text;
                  m &&
                    ((u = new Q(u.line, 1)),
                    n.replaceRange(
                      g.charAt(0) + n.doc.lineSeparator() + m.charAt(m.length - 1),
                      Q(u.line - 1, m.length - 1),
                      u,
                      "+transpose",
                    ));
                }
              }
              a.push(new ft(u, u));
            }
          n.setSelections(a);
        });
      },
      newlineAndIndent: function (n) {
        return Ln(n, function () {
          for (var i = n.listSelections(), a = i.length - 1; a >= 0; a--)
            n.replaceRange(n.doc.lineSeparator(), i[a].anchor, i[a].head, "+input");
          i = n.listSelections();
          for (var l = 0; l < i.length; l++) n.indentLine(i[l].from().line, null, !0);
          Go(n);
        });
      },
      openLine: function (n) {
        return n.replaceSelection(
          `
`,
          "start",
        );
      },
      toggleOverwrite: function (n) {
        return n.toggleOverwrite();
      },
    };
    function Wg(n, i) {
      var a = Oe(n.doc, i),
        l = ur(a);
      return l != a && (i = T(l)), Ef(!0, n, l, i, 1);
    }
    function a_(n, i) {
      var a = Oe(n.doc, i),
        l = V1(a);
      return l != a && (i = T(l)), Ef(!0, n, a, i, -1);
    }
    function Ug(n, i) {
      var a = Wg(n, i.line),
        l = Oe(n.doc, a.line),
        u = Ue(l, n.doc.direction);
      if (!u || u[0].level == 0) {
        var g = Math.max(a.ch, l.text.search(/\S/)),
          m = i.line == a.line && i.ch <= g && i.ch;
        return Q(a.line, m ? 0 : g, a.sticky);
      }
      return a;
    }
    function Ba(n, i, a) {
      if (typeof i == "string" && ((i = il[i]), !i)) return !1;
      n.display.input.ensurePolled();
      var l = n.display.shift,
        u = !1;
      try {
        n.isReadOnly() && (n.state.suppressEdits = !0),
          a && (n.display.shift = !1),
          (u = i(n) != O);
      } finally {
        (n.display.shift = l), (n.state.suppressEdits = !1);
      }
      return u;
    }
    function c_(n, i, a) {
      for (var l = 0; l < n.state.keyMaps.length; l++) {
        var u = es(i, n.state.keyMaps[l], a, n);
        if (u) return u;
      }
      return (
        (n.options.extraKeys && es(i, n.options.extraKeys, a, n)) || es(i, n.options.keyMap, a, n)
      );
    }
    var u_ = new Ne();
    function ol(n, i, a, l) {
      var u = n.state.keySeq;
      if (u) {
        if (Hg(i)) return "handled";
        if (
          (/\'$/.test(i)
            ? (n.state.keySeq = null)
            : u_.set(50, function () {
                n.state.keySeq == u && ((n.state.keySeq = null), n.display.input.reset());
              }),
          Vg(n, u + " " + i, a, l))
        )
          return !0;
      }
      return Vg(n, i, a, l);
    }
    function Vg(n, i, a, l) {
      var u = c_(n, i, l);
      return (
        u == "multi" && (n.state.keySeq = i),
        u == "handled" && Wt(n, "keyHandled", n, i, a),
        (u == "handled" || u == "multi") && (tn(a), cf(n)),
        !!u
      );
    }
    function jg(n, i) {
      var a = Bg(i, !0);
      return a
        ? i.shiftKey && !n.state.keySeq
          ? ol(n, "Shift-" + a, i, function (l) {
              return Ba(n, l, !0);
            }) ||
            ol(n, a, i, function (l) {
              if (typeof l == "string" ? /^go[A-Z]/.test(l) : l.motion) return Ba(n, l);
            })
          : ol(n, a, i, function (l) {
              return Ba(n, l);
            })
        : !1;
    }
    function f_(n, i, a) {
      return ol(n, "'" + a + "'", i, function (l) {
        return Ba(n, l, !0);
      });
    }
    var Lf = null;
    function Gg(n) {
      var i = this;
      if (
        !(n.target && n.target != i.display.input.getField()) &&
        ((i.curOp.focus = me(nt(i))), !Lt(i, n))
      ) {
        h && p < 11 && n.keyCode == 27 && (n.returnValue = !1);
        var a = n.keyCode;
        i.display.shift = a == 16 || n.shiftKey;
        var l = jg(i, n);
        C &&
          ((Lf = l ? a : null),
          !l &&
            a == 88 &&
            !va &&
            (H ? n.metaKey : n.ctrlKey) &&
            i.replaceSelection("", null, "cut")),
          s &&
            !H &&
            !l &&
            a == 46 &&
            n.shiftKey &&
            !n.ctrlKey &&
            document.execCommand &&
            document.execCommand("cut"),
          a == 18 && !/\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) && d_(i);
      }
    }
    function d_(n) {
      var i = n.display.lineDiv;
      Me(i, "CodeMirror-crosshair");
      function a(l) {
        (l.keyCode == 18 || !l.altKey) &&
          (K(i, "CodeMirror-crosshair"), en(document, "keyup", a), en(document, "mouseover", a));
      }
      Fe(document, "keyup", a), Fe(document, "mouseover", a);
    }
    function Kg(n) {
      n.keyCode == 16 && (this.doc.sel.shift = !1), Lt(this, n);
    }
    function Xg(n) {
      var i = this;
      if (
        !(n.target && n.target != i.display.input.getField()) &&
        !(Vr(i.display, n) || Lt(i, n) || (n.ctrlKey && !n.altKey) || (H && n.metaKey))
      ) {
        var a = n.keyCode,
          l = n.charCode;
        if (C && a == Lf) {
          (Lf = null), tn(n);
          return;
        }
        if (!(C && (!n.which || n.which < 10) && jg(i, n))) {
          var u = String.fromCharCode(l ?? a);
          u != "\b" && (f_(i, n, u) || i.display.input.onKeyPress(n));
        }
      }
    }
    var h_ = 400,
      Af = function (n, i, a) {
        (this.time = n), (this.pos = i), (this.button = a);
      };
    Af.prototype.compare = function (n, i, a) {
      return this.time + h_ > n && _e(i, this.pos) == 0 && a == this.button;
    };
    var sl, ll;
    function p_(n, i) {
      var a = +new Date();
      return ll && ll.compare(a, n, i)
        ? ((sl = ll = null), "triple")
        : sl && sl.compare(a, n, i)
          ? ((ll = new Af(a, n, i)), (sl = null), "double")
          : ((sl = new Af(a, n, i)), (ll = null), "single");
    }
    function Yg(n) {
      var i = this,
        a = i.display;
      if (!(Lt(i, n) || (a.activeTouch && a.input.supportsTouch()))) {
        if ((a.input.ensurePolled(), (a.shift = n.shiftKey), Vr(a, n))) {
          v ||
            ((a.scroller.draggable = !1),
            setTimeout(function () {
              return (a.scroller.draggable = !0);
            }, 100));
          return;
        }
        if (!Mf(i, n)) {
          var l = so(i, n),
            u = sr(n),
            g = l ? p_(l, u) : "single";
          Te(i).focus(),
            u == 1 && i.state.selectingText && i.state.selectingText(n),
            !(l && g_(i, u, l, g, n)) &&
              (u == 1
                ? l
                  ? m_(i, l, g, n)
                  : $s(n) == a.scroller && tn(n)
                : u == 2
                  ? (l && Da(i.doc, l),
                    setTimeout(function () {
                      return a.input.focus();
                    }, 20))
                  : u == 3 && (j ? i.display.input.onContextMenu(n) : uf(i)));
        }
      }
    }
    function g_(n, i, a, l, u) {
      var g = "Click";
      return (
        l == "double" ? (g = "Double" + g) : l == "triple" && (g = "Triple" + g),
        (g = (i == 1 ? "Left" : i == 2 ? "Middle" : "Right") + g),
        ol(n, qg(g, u), u, function (m) {
          if ((typeof m == "string" && (m = il[m]), !m)) return !1;
          var w = !1;
          try {
            n.isReadOnly() && (n.state.suppressEdits = !0), (w = m(n, a) != O);
          } finally {
            n.state.suppressEdits = !1;
          }
          return w;
        })
      );
    }
    function v_(n, i, a) {
      var l = n.getOption("configureMouse"),
        u = l ? l(n, i, a) : {};
      if (u.unit == null) {
        var g = z ? a.shiftKey && a.metaKey : a.altKey;
        u.unit = g ? "rectangle" : i == "single" ? "char" : i == "double" ? "word" : "line";
      }
      return (
        (u.extend == null || n.doc.extend) && (u.extend = n.doc.extend || a.shiftKey),
        u.addNew == null && (u.addNew = H ? a.metaKey : a.ctrlKey),
        u.moveOnDrag == null && (u.moveOnDrag = !(H ? a.altKey : a.ctrlKey)),
        u
      );
    }
    function m_(n, i, a, l) {
      h ? setTimeout(X(Zp, n), 0) : (n.curOp.focus = me(nt(n)));
      var u = v_(n, a, l),
        g = n.doc.sel,
        m;
      n.options.dragDrop &&
      qu &&
      !n.isReadOnly() &&
      a == "single" &&
      (m = g.contains(i)) > -1 &&
      (_e((m = g.ranges[m]).from(), i) < 0 || i.xRel > 0) &&
      (_e(m.to(), i) > 0 || i.xRel < 0)
        ? y_(n, l, i, u)
        : b_(n, l, i, u);
    }
    function y_(n, i, a, l) {
      var u = n.display,
        g = !1,
        m = Ut(n, function (S) {
          v && (u.scroller.draggable = !1),
            (n.state.draggingText = !1),
            n.state.delayingBlurEvent && (n.hasFocus() ? (n.state.delayingBlurEvent = !1) : uf(n)),
            en(u.wrapper.ownerDocument, "mouseup", m),
            en(u.wrapper.ownerDocument, "mousemove", w),
            en(u.scroller, "dragstart", _),
            en(u.scroller, "drop", m),
            g ||
              (tn(S),
              l.addNew || Da(n.doc, a, null, null, l.extend),
              (v && !E) || (h && p == 9)
                ? setTimeout(function () {
                    u.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), u.input.focus();
                  }, 20)
                : u.input.focus());
        }),
        w = function (S) {
          g = g || Math.abs(i.clientX - S.clientX) + Math.abs(i.clientY - S.clientY) >= 10;
        },
        _ = function () {
          return (g = !0);
        };
      v && (u.scroller.draggable = !0),
        (n.state.draggingText = m),
        (m.copy = !l.moveOnDrag),
        Fe(u.wrapper.ownerDocument, "mouseup", m),
        Fe(u.wrapper.ownerDocument, "mousemove", w),
        Fe(u.scroller, "dragstart", _),
        Fe(u.scroller, "drop", m),
        (n.state.delayingBlurEvent = !0),
        setTimeout(function () {
          return u.input.focus();
        }, 20),
        u.scroller.dragDrop && u.scroller.dragDrop();
    }
    function Zg(n, i, a) {
      if (a == "char") return new ft(i, i);
      if (a == "word") return n.findWordAt(i);
      if (a == "line") return new ft(Q(i.line, 0), Ke(n.doc, Q(i.line + 1, 0)));
      var l = a(n, i);
      return new ft(l.from, l.to);
    }
    function b_(n, i, a, l) {
      h && uf(n);
      var u = n.display,
        g = n.doc;
      tn(i);
      var m,
        w,
        _ = g.sel,
        S = _.ranges;
      if (
        (l.addNew && !l.extend
          ? ((w = g.sel.contains(a)), w > -1 ? (m = S[w]) : (m = new ft(a, a)))
          : ((m = g.sel.primary()), (w = g.sel.primIndex)),
        l.unit == "rectangle")
      )
        l.addNew || (m = new ft(a, a)), (a = so(n, i, !0, !0)), (w = -1);
      else {
        var $ = Zg(n, a, l.unit);
        l.extend ? (m = Sf(m, $.anchor, $.head, l.extend)) : (m = $);
      }
      l.addNew
        ? w == -1
          ? ((w = S.length), nn(g, dr(n, S.concat([m]), w), { scroll: !1, origin: "*mouse" }))
          : S.length > 1 && S[w].empty() && l.unit == "char" && !l.extend
            ? (nn(g, dr(n, S.slice(0, w).concat(S.slice(w + 1)), 0), {
                scroll: !1,
                origin: "*mouse",
              }),
              (_ = g.sel))
            : kf(g, w, m, Z)
        : ((w = 0), nn(g, new Fn([m], 0), Z), (_ = g.sel));
      var R = a;
      function G(xe) {
        if (_e(R, xe) != 0)
          if (((R = xe), l.unit == "rectangle")) {
            for (
              var Ee = [],
                He = n.options.tabSize,
                Re = de(Oe(g, a.line).text, a.ch, He),
                Je = de(Oe(g, xe.line).text, xe.ch, He),
                wt = Math.min(Re, Je),
                jt = Math.max(Re, Je),
                Ct = Math.min(a.line, xe.line),
                An = Math.min(n.lastLine(), Math.max(a.line, xe.line));
              Ct <= An;
              Ct++
            ) {
              var yn = Oe(g, Ct).text,
                Ot = se(yn, wt, He);
              wt == jt
                ? Ee.push(new ft(Q(Ct, Ot), Q(Ct, Ot)))
                : yn.length > Ot && Ee.push(new ft(Q(Ct, Ot), Q(Ct, se(yn, jt, He))));
            }
            Ee.length || Ee.push(new ft(a, a)),
              nn(g, dr(n, _.ranges.slice(0, w).concat(Ee), w), { origin: "*mouse", scroll: !1 }),
              n.scrollIntoView(xe);
          } else {
            var bn = m,
              Kt = Zg(n, xe, l.unit),
              Ht = bn.anchor,
              Pt;
            _e(Kt.anchor, Ht) > 0
              ? ((Pt = Kt.head), (Ht = Ho(bn.from(), Kt.anchor)))
              : ((Pt = Kt.anchor), (Ht = gn(bn.to(), Kt.head)));
            var Mt = _.ranges.slice(0);
            (Mt[w] = w_(n, new ft(Ke(g, Ht), Pt))), nn(g, dr(n, Mt, w), Z);
          }
      }
      var U = u.wrapper.getBoundingClientRect(),
        ee = 0;
      function fe(xe) {
        var Ee = ++ee,
          He = so(n, xe, !0, l.unit == "rectangle");
        if (He)
          if (_e(He, R) != 0) {
            (n.curOp.focus = me(nt(n))), G(He);
            var Re = Ma(u, g);
            (He.line >= Re.to || He.line < Re.from) &&
              setTimeout(
                Ut(n, function () {
                  ee == Ee && fe(xe);
                }),
                150,
              );
          } else {
            var Je = xe.clientY < U.top ? -20 : xe.clientY > U.bottom ? 20 : 0;
            Je &&
              setTimeout(
                Ut(n, function () {
                  ee == Ee && ((u.scroller.scrollTop += Je), fe(xe));
                }),
                50,
              );
          }
      }
      function ge(xe) {
        (n.state.selectingText = !1),
          (ee = 1 / 0),
          xe && (tn(xe), u.input.focus()),
          en(u.wrapper.ownerDocument, "mousemove", we),
          en(u.wrapper.ownerDocument, "mouseup", ke),
          (g.history.lastSelOrigin = null);
      }
      var we = Ut(n, function (xe) {
          xe.buttons === 0 || !sr(xe) ? ge(xe) : fe(xe);
        }),
        ke = Ut(n, ge);
      (n.state.selectingText = ke),
        Fe(u.wrapper.ownerDocument, "mousemove", we),
        Fe(u.wrapper.ownerDocument, "mouseup", ke);
    }
    function w_(n, i) {
      var a = i.anchor,
        l = i.head,
        u = Oe(n.doc, a.line);
      if (_e(a, l) == 0 && a.sticky == l.sticky) return i;
      var g = Ue(u);
      if (!g) return i;
      var m = ir(g, a.ch, a.sticky),
        w = g[m];
      if (w.from != a.ch && w.to != a.ch) return i;
      var _ = m + ((w.from == a.ch) == (w.level != 1) ? 0 : 1);
      if (_ == 0 || _ == g.length) return i;
      var S;
      if (l.line != a.line) S = (l.line - a.line) * (n.doc.direction == "ltr" ? 1 : -1) > 0;
      else {
        var $ = ir(g, l.ch, l.sticky),
          R = $ - m || (l.ch - a.ch) * (w.level == 1 ? -1 : 1);
        $ == _ - 1 || $ == _ ? (S = R < 0) : (S = R > 0);
      }
      var G = g[_ + (S ? -1 : 0)],
        U = S == (G.level == 1),
        ee = U ? G.from : G.to,
        fe = U ? "after" : "before";
      return a.ch == ee && a.sticky == fe ? i : new ft(new Q(a.line, ee, fe), l);
    }
    function Jg(n, i, a, l) {
      var u, g;
      if (i.touches) (u = i.touches[0].clientX), (g = i.touches[0].clientY);
      else
        try {
          (u = i.clientX), (g = i.clientY);
        } catch {
          return !1;
        }
      if (u >= Math.floor(n.display.gutters.getBoundingClientRect().right)) return !1;
      l && tn(i);
      var m = n.display,
        w = m.lineDiv.getBoundingClientRect();
      if (g > w.bottom || !En(n, a)) return pn(i);
      g -= w.top - m.viewOffset;
      for (var _ = 0; _ < n.display.gutterSpecs.length; ++_) {
        var S = m.gutters.childNodes[_];
        if (S && S.getBoundingClientRect().right >= u) {
          var $ = P(n.doc, g),
            R = n.display.gutterSpecs[_];
          return Et(n, a, n, $, R.className, i), pn(i);
        }
      }
    }
    function Mf(n, i) {
      return Jg(n, i, "gutterClick", !0);
    }
    function Qg(n, i) {
      Vr(n.display, i) ||
        x_(n, i) ||
        Lt(n, i, "contextmenu") ||
        j ||
        n.display.input.onContextMenu(i);
    }
    function x_(n, i) {
      return En(n, "gutterContextMenu") ? Jg(n, i, "gutterContextMenu", !1) : !1;
    }
    function ev(n) {
      (n.display.wrapper.className =
        n.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
        n.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
        qs(n);
    }
    var ns = {
        toString: function () {
          return "CodeMirror.Init";
        },
      },
      tv = {},
      Wa = {};
    function __(n) {
      var i = n.optionHandlers;
      function a(l, u, g, m) {
        (n.defaults[l] = u),
          g &&
            (i[l] = m
              ? function (w, _, S) {
                  S != ns && g(w, _, S);
                }
              : g);
      }
      (n.defineOption = a),
        (n.Init = ns),
        a(
          "value",
          "",
          function (l, u) {
            return l.setValue(u);
          },
          !0,
        ),
        a(
          "mode",
          null,
          function (l, u) {
            (l.doc.modeOption = u), wf(l);
          },
          !0,
        ),
        a("indentUnit", 2, wf, !0),
        a("indentWithTabs", !1),
        a("smartIndent", !0),
        a(
          "tabSize",
          4,
          function (l) {
            Xs(l), qs(l), vn(l);
          },
          !0,
        ),
        a("lineSeparator", null, function (l, u) {
          if (((l.doc.lineSep = u), !!u)) {
            var g = [],
              m = l.doc.first;
            l.doc.iter(function (_) {
              for (var S = 0; ; ) {
                var $ = _.text.indexOf(u, S);
                if ($ == -1) break;
                (S = $ + u.length), g.push(Q(m, $));
              }
              m++;
            });
            for (var w = g.length - 1; w >= 0; w--)
              Jo(l.doc, u, g[w], Q(g[w].line, g[w].ch + u.length));
          }
        }),
        a(
          "specialChars",
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
          function (l, u, g) {
            (l.state.specialChars = new RegExp(u.source + (u.test("	") ? "" : "|	"), "g")),
              g != ns && l.refresh();
          },
        ),
        a(
          "specialCharPlaceholder",
          Z1,
          function (l) {
            return l.refresh();
          },
          !0,
        ),
        a("electricChars", !0),
        a(
          "inputStyle",
          A ? "contenteditable" : "textarea",
          function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          },
          !0,
        ),
        a(
          "spellcheck",
          !1,
          function (l, u) {
            return (l.getInputField().spellcheck = u);
          },
          !0,
        ),
        a(
          "autocorrect",
          !1,
          function (l, u) {
            return (l.getInputField().autocorrect = u);
          },
          !0,
        ),
        a(
          "autocapitalize",
          !1,
          function (l, u) {
            return (l.getInputField().autocapitalize = u);
          },
          !0,
        ),
        a("rtlMoveVisually", !J),
        a("wholeLineUpdateBefore", !0),
        a(
          "theme",
          "default",
          function (l) {
            ev(l), Ks(l);
          },
          !0,
        ),
        a("keyMap", "default", function (l, u, g) {
          var m = qa(u),
            w = g != ns && qa(g);
          w && w.detach && w.detach(l, m), m.attach && m.attach(l, w || null);
        }),
        a("extraKeys", null),
        a("configureMouse", null),
        a("lineWrapping", !1, k_, !0),
        a(
          "gutters",
          [],
          function (l, u) {
            (l.display.gutterSpecs = yf(u, l.options.lineNumbers)), Ks(l);
          },
          !0,
        ),
        a(
          "fixedGutter",
          !0,
          function (l, u) {
            (l.display.gutters.style.left = u ? sf(l.display) + "px" : "0"), l.refresh();
          },
          !0,
        ),
        a(
          "coverGutterNextToScrollbar",
          !1,
          function (l) {
            return Ko(l);
          },
          !0,
        ),
        a(
          "scrollbarStyle",
          "native",
          function (l) {
            rg(l),
              Ko(l),
              l.display.scrollbars.setScrollTop(l.doc.scrollTop),
              l.display.scrollbars.setScrollLeft(l.doc.scrollLeft);
          },
          !0,
        ),
        a(
          "lineNumbers",
          !1,
          function (l, u) {
            (l.display.gutterSpecs = yf(l.options.gutters, u)), Ks(l);
          },
          !0,
        ),
        a("firstLineNumber", 1, Ks, !0),
        a(
          "lineNumberFormatter",
          function (l) {
            return l;
          },
          Ks,
          !0,
        ),
        a("showCursorWhenSelecting", !1, Bs, !0),
        a("resetSelectionOnContextMenu", !0),
        a("lineWiseCopyCut", !0),
        a("pasteLinesPerSelection", !0),
        a("selectionsMayTouch", !1),
        a("readOnly", !1, function (l, u) {
          u == "nocursor" && (jo(l), l.display.input.blur()), l.display.input.readOnlyChanged(u);
        }),
        a("screenReaderLabel", null, function (l, u) {
          (u = u === "" ? null : u), l.display.input.screenReaderLabelChanged(u);
        }),
        a(
          "disableInput",
          !1,
          function (l, u) {
            u || l.display.input.reset();
          },
          !0,
        ),
        a("dragDrop", !0, S_),
        a("allowDropFileTypes", null),
        a("cursorBlinkRate", 530),
        a("cursorScrollMargin", 0),
        a("cursorHeight", 1, Bs, !0),
        a("singleCursorHeightPerLine", !0, Bs, !0),
        a("workTime", 100),
        a("workDelay", 100),
        a("flattenSpans", !0, Xs, !0),
        a("addModeClass", !1, Xs, !0),
        a("pollInterval", 100),
        a("undoDepth", 200, function (l, u) {
          return (l.doc.history.undoDepth = u);
        }),
        a("historyEventDelay", 1250),
        a(
          "viewportMargin",
          10,
          function (l) {
            return l.refresh();
          },
          !0,
        ),
        a("maxHighlightLength", 1e4, Xs, !0),
        a("moveInputWithCursor", !0, function (l, u) {
          u || l.display.input.resetPosition();
        }),
        a("tabindex", null, function (l, u) {
          return (l.display.input.getField().tabIndex = u || "");
        }),
        a("autofocus", null),
        a(
          "direction",
          "ltr",
          function (l, u) {
            return l.doc.setDirection(u);
          },
          !0,
        ),
        a("phrases", null);
    }
    function S_(n, i, a) {
      var l = a && a != ns;
      if (!i != !l) {
        var u = n.display.dragFunctions,
          g = i ? Fe : en;
        g(n.display.scroller, "dragstart", u.start),
          g(n.display.scroller, "dragenter", u.enter),
          g(n.display.scroller, "dragover", u.over),
          g(n.display.scroller, "dragleave", u.leave),
          g(n.display.scroller, "drop", u.drop);
      }
    }
    function k_(n) {
      n.options.lineWrapping
        ? (Me(n.display.wrapper, "CodeMirror-wrap"),
          (n.display.sizer.style.minWidth = ""),
          (n.display.sizerWidth = null))
        : (K(n.display.wrapper, "CodeMirror-wrap"), Xu(n)),
        lf(n),
        vn(n),
        qs(n),
        setTimeout(function () {
          return Ko(n);
        }, 100);
    }
    function St(n, i) {
      var a = this;
      if (!(this instanceof St)) return new St(n, i);
      (this.options = i = i ? ae(i) : {}), ae(tv, i, !1);
      var l = i.value;
      typeof l == "string"
        ? (l = new mn(l, i.mode, null, i.lineSeparator, i.direction))
        : i.mode && (l.modeOption = i.mode),
        (this.doc = l);
      var u = new St.inputStyles[i.inputStyle](this),
        g = (this.display = new zx(n, l, u, i));
      (g.wrapper.CodeMirror = this),
        ev(this),
        i.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
        rg(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new Ne(),
          keySeq: null,
          specialChars: null,
        }),
        i.autofocus && !A && g.input.focus(),
        h &&
          p < 11 &&
          setTimeout(function () {
            return a.display.input.reset(!0);
          }, 20),
        T_(this),
        n_(),
        uo(this),
        (this.curOp.forceUpdate = !0),
        hg(this, l),
        (i.autofocus && !A) || this.hasFocus()
          ? setTimeout(function () {
              a.hasFocus() && !a.state.focused && ff(a);
            }, 20)
          : jo(this);
      for (var m in Wa) Wa.hasOwnProperty(m) && Wa[m](this, i[m], ns);
      sg(this), i.finishInit && i.finishInit(this);
      for (var w = 0; w < Nf.length; ++w) Nf[w](this);
      fo(this),
        v &&
          i.lineWrapping &&
          getComputedStyle(g.lineDiv).textRendering == "optimizelegibility" &&
          (g.lineDiv.style.textRendering = "auto");
    }
    (St.defaults = tv), (St.optionHandlers = Wa);
    function T_(n) {
      var i = n.display;
      Fe(i.scroller, "mousedown", Ut(n, Yg)),
        h && p < 11
          ? Fe(
              i.scroller,
              "dblclick",
              Ut(n, function (_) {
                if (!Lt(n, _)) {
                  var S = so(n, _);
                  if (!(!S || Mf(n, _) || Vr(n.display, _))) {
                    tn(_);
                    var $ = n.findWordAt(S);
                    Da(n.doc, $.anchor, $.head);
                  }
                }
              }),
            )
          : Fe(i.scroller, "dblclick", function (_) {
              return Lt(n, _) || tn(_);
            }),
        Fe(i.scroller, "contextmenu", function (_) {
          return Qg(n, _);
        }),
        Fe(i.input.getField(), "contextmenu", function (_) {
          i.scroller.contains(_.target) || Qg(n, _);
        });
      var a,
        l = { end: 0 };
      function u() {
        i.activeTouch &&
          ((a = setTimeout(function () {
            return (i.activeTouch = null);
          }, 1e3)),
          (l = i.activeTouch),
          (l.end = +new Date()));
      }
      function g(_) {
        if (_.touches.length != 1) return !1;
        var S = _.touches[0];
        return S.radiusX <= 1 && S.radiusY <= 1;
      }
      function m(_, S) {
        if (S.left == null) return !0;
        var $ = S.left - _.left,
          R = S.top - _.top;
        return $ * $ + R * R > 20 * 20;
      }
      Fe(i.scroller, "touchstart", function (_) {
        if (!Lt(n, _) && !g(_) && !Mf(n, _)) {
          i.input.ensurePolled(), clearTimeout(a);
          var S = +new Date();
          (i.activeTouch = { start: S, moved: !1, prev: S - l.end <= 300 ? l : null }),
            _.touches.length == 1 &&
              ((i.activeTouch.left = _.touches[0].pageX), (i.activeTouch.top = _.touches[0].pageY));
        }
      }),
        Fe(i.scroller, "touchmove", function () {
          i.activeTouch && (i.activeTouch.moved = !0);
        }),
        Fe(i.scroller, "touchend", function (_) {
          var S = i.activeTouch;
          if (S && !Vr(i, _) && S.left != null && !S.moved && new Date() - S.start < 300) {
            var $ = n.coordsChar(i.activeTouch, "page"),
              R;
            !S.prev || m(S, S.prev)
              ? (R = new ft($, $))
              : !S.prev.prev || m(S, S.prev.prev)
                ? (R = n.findWordAt($))
                : (R = new ft(Q($.line, 0), Ke(n.doc, Q($.line + 1, 0)))),
              n.setSelection(R.anchor, R.head),
              n.focus(),
              tn(_);
          }
          u();
        }),
        Fe(i.scroller, "touchcancel", u),
        Fe(i.scroller, "scroll", function () {
          i.scroller.clientHeight &&
            (Us(n, i.scroller.scrollTop), ao(n, i.scroller.scrollLeft, !0), Et(n, "scroll", n));
        }),
        Fe(i.scroller, "mousewheel", function (_) {
          return cg(n, _);
        }),
        Fe(i.scroller, "DOMMouseScroll", function (_) {
          return cg(n, _);
        }),
        Fe(i.wrapper, "scroll", function () {
          return (i.wrapper.scrollTop = i.wrapper.scrollLeft = 0);
        }),
        (i.dragFunctions = {
          enter: function (_) {
            Lt(n, _) || fi(_);
          },
          over: function (_) {
            Lt(n, _) || (t_(n, _), fi(_));
          },
          start: function (_) {
            return e_(n, _);
          },
          drop: Ut(n, Qx),
          leave: function (_) {
            Lt(n, _) || zg(n);
          },
        });
      var w = i.input.getField();
      Fe(w, "keyup", function (_) {
        return Kg.call(n, _);
      }),
        Fe(w, "keydown", Ut(n, Gg)),
        Fe(w, "keypress", Ut(n, Xg)),
        Fe(w, "focus", function (_) {
          return ff(n, _);
        }),
        Fe(w, "blur", function (_) {
          return jo(n, _);
        });
    }
    var Nf = [];
    St.defineInitHook = function (n) {
      return Nf.push(n);
    };
    function al(n, i, a, l) {
      var u = n.doc,
        g;
      a == null && (a = "add"),
        a == "smart" && (u.mode.indent ? (g = Ds(n, i).state) : (a = "prev"));
      var m = n.options.tabSize,
        w = Oe(u, i),
        _ = de(w.text, null, m);
      w.stateAfter && (w.stateAfter = null);
      var S = w.text.match(/^\s*/)[0],
        $;
      if (!l && !/\S/.test(w.text)) ($ = 0), (a = "not");
      else if (
        a == "smart" &&
        (($ = u.mode.indent(g, w.text.slice(S.length), w.text)), $ == O || $ > 150)
      ) {
        if (!l) return;
        a = "prev";
      }
      a == "prev"
        ? i > u.first
          ? ($ = de(Oe(u, i - 1).text, null, m))
          : ($ = 0)
        : a == "add"
          ? ($ = _ + n.options.indentUnit)
          : a == "subtract"
            ? ($ = _ - n.options.indentUnit)
            : typeof a == "number" && ($ = _ + a),
        ($ = Math.max(0, $));
      var R = "",
        G = 0;
      if (n.options.indentWithTabs) for (var U = Math.floor($ / m); U; --U) (G += m), (R += "	");
      if ((G < $ && (R += Se($ - G)), R != S))
        return Jo(u, R, Q(i, 0), Q(i, S.length), "+input"), (w.stateAfter = null), !0;
      for (var ee = 0; ee < u.sel.ranges.length; ee++) {
        var fe = u.sel.ranges[ee];
        if (fe.head.line == i && fe.head.ch < S.length) {
          var ge = Q(i, S.length);
          kf(u, ee, new ft(ge, ge));
          break;
        }
      }
    }
    var hr = null;
    function Ua(n) {
      hr = n;
    }
    function $f(n, i, a, l, u) {
      var g = n.doc;
      (n.display.shift = !1), l || (l = g.sel);
      var m = +new Date() - 200,
        w = u == "paste" || n.state.pasteIncoming > m,
        _ = Gn(i),
        S = null;
      if (w && l.ranges.length > 1)
        if (
          hr &&
          hr.text.join(`
`) == i
        ) {
          if (l.ranges.length % hr.text.length == 0) {
            S = [];
            for (var $ = 0; $ < hr.text.length; $++) S.push(g.splitLines(hr.text[$]));
          }
        } else
          _.length == l.ranges.length &&
            n.options.pasteLinesPerSelection &&
            (S = ye(_, function (we) {
              return [we];
            }));
      for (var R = n.curOp.updateInput, G = l.ranges.length - 1; G >= 0; G--) {
        var U = l.ranges[G],
          ee = U.from(),
          fe = U.to();
        U.empty() &&
          (a && a > 0
            ? (ee = Q(ee.line, ee.ch - a))
            : n.state.overwrite && !w
              ? (fe = Q(fe.line, Math.min(Oe(g, fe.line).text.length, fe.ch + ue(_).length)))
              : w &&
                hr &&
                hr.lineWise &&
                hr.text.join(`
`) ==
                  _.join(`
`) &&
                (ee = fe = Q(ee.line, 0)));
        var ge = {
          from: ee,
          to: fe,
          text: S ? S[G % S.length] : _,
          origin: u || (w ? "paste" : n.state.cutIncoming > m ? "cut" : "+input"),
        };
        Zo(n.doc, ge), Wt(n, "inputRead", n, ge);
      }
      i && !w && rv(n, i),
        Go(n),
        n.curOp.updateInput < 2 && (n.curOp.updateInput = R),
        (n.curOp.typing = !0),
        (n.state.pasteIncoming = n.state.cutIncoming = -1);
    }
    function nv(n, i) {
      var a = n.clipboardData && n.clipboardData.getData("Text");
      if (a)
        return (
          n.preventDefault(),
          !i.isReadOnly() &&
            !i.options.disableInput &&
            i.hasFocus() &&
            Ln(i, function () {
              return $f(i, a, 0, null, "paste");
            }),
          !0
        );
    }
    function rv(n, i) {
      if (!(!n.options.electricChars || !n.options.smartIndent))
        for (var a = n.doc.sel, l = a.ranges.length - 1; l >= 0; l--) {
          var u = a.ranges[l];
          if (!(u.head.ch > 100 || (l && a.ranges[l - 1].head.line == u.head.line))) {
            var g = n.getModeAt(u.head),
              m = !1;
            if (g.electricChars) {
              for (var w = 0; w < g.electricChars.length; w++)
                if (i.indexOf(g.electricChars.charAt(w)) > -1) {
                  m = al(n, u.head.line, "smart");
                  break;
                }
            } else
              g.electricInput &&
                g.electricInput.test(Oe(n.doc, u.head.line).text.slice(0, u.head.ch)) &&
                (m = al(n, u.head.line, "smart"));
            m && Wt(n, "electricInput", n, u.head.line);
          }
        }
    }
    function iv(n) {
      for (var i = [], a = [], l = 0; l < n.doc.sel.ranges.length; l++) {
        var u = n.doc.sel.ranges[l].head.line,
          g = { anchor: Q(u, 0), head: Q(u + 1, 0) };
        a.push(g), i.push(n.getRange(g.anchor, g.head));
      }
      return { text: i, ranges: a };
    }
    function Of(n, i, a, l) {
      n.setAttribute("autocorrect", a ? "on" : "off"),
        n.setAttribute("autocapitalize", l ? "on" : "off"),
        n.setAttribute("spellcheck", !!i);
    }
    function ov() {
      var n = k(
          "textarea",
          null,
          null,
          "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none",
        ),
        i = k("div", [n], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return (
        v ? (n.style.width = "1000px") : n.setAttribute("wrap", "off"),
        L && (n.style.border = "1px solid black"),
        i
      );
    }
    function C_(n) {
      var i = n.optionHandlers,
        a = (n.helpers = {});
      (n.prototype = {
        constructor: n,
        focus: function () {
          Te(this).focus(), this.display.input.focus();
        },
        setOption: function (l, u) {
          var g = this.options,
            m = g[l];
          (g[l] == u && l != "mode") ||
            ((g[l] = u),
            i.hasOwnProperty(l) && Ut(this, i[l])(this, u, m),
            Et(this, "optionChange", this, l));
        },
        getOption: function (l) {
          return this.options[l];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (l, u) {
          this.state.keyMaps[u ? "push" : "unshift"](qa(l));
        },
        removeKeyMap: function (l) {
          for (var u = this.state.keyMaps, g = 0; g < u.length; ++g)
            if (u[g] == l || u[g].name == l) return u.splice(g, 1), !0;
        },
        addOverlay: an(function (l, u) {
          var g = l.token ? l : n.getMode(this.options, l);
          if (g.startState) throw new Error("Overlays may not be stateful.");
          he(
            this.state.overlays,
            { mode: g, modeSpec: l, opaque: u && u.opaque, priority: (u && u.priority) || 0 },
            function (m) {
              return m.priority;
            },
          ),
            this.state.modeGen++,
            vn(this);
        }),
        removeOverlay: an(function (l) {
          for (var u = this.state.overlays, g = 0; g < u.length; ++g) {
            var m = u[g].modeSpec;
            if (m == l || (typeof l == "string" && m.name == l)) {
              u.splice(g, 1), this.state.modeGen++, vn(this);
              return;
            }
          }
        }),
        indentLine: an(function (l, u, g) {
          typeof u != "string" &&
            typeof u != "number" &&
            (u == null
              ? (u = this.options.smartIndent ? "smart" : "prev")
              : (u = u ? "add" : "subtract")),
            oe(this.doc, l) && al(this, l, u, g);
        }),
        indentSelection: an(function (l) {
          for (var u = this.doc.sel.ranges, g = -1, m = 0; m < u.length; m++) {
            var w = u[m];
            if (w.empty())
              w.head.line > g &&
                (al(this, w.head.line, l, !0),
                (g = w.head.line),
                m == this.doc.sel.primIndex && Go(this));
            else {
              var _ = w.from(),
                S = w.to(),
                $ = Math.max(g, _.line);
              g = Math.min(this.lastLine(), S.line - (S.ch ? 0 : 1)) + 1;
              for (var R = $; R < g; ++R) al(this, R, l);
              var G = this.doc.sel.ranges;
              _.ch == 0 &&
                u.length == G.length &&
                G[m].from().ch > 0 &&
                kf(this.doc, m, new ft(_, G[m].to()), F);
            }
          }
        }),
        getTokenAt: function (l, u) {
          return gp(this, l, u);
        },
        getLineTokens: function (l, u) {
          return gp(this, Q(l), u, !0);
        },
        getTokenTypeAt: function (l) {
          l = Ke(this.doc, l);
          var u = dp(this, Oe(this.doc, l.line)),
            g = 0,
            m = (u.length - 1) / 2,
            w = l.ch,
            _;
          if (w == 0) _ = u[2];
          else
            for (;;) {
              var S = (g + m) >> 1;
              if ((S ? u[S * 2 - 1] : 0) >= w) m = S;
              else if (u[S * 2 + 1] < w) g = S + 1;
              else {
                _ = u[S * 2 + 2];
                break;
              }
            }
          var $ = _ ? _.indexOf("overlay ") : -1;
          return $ < 0 ? _ : $ == 0 ? null : _.slice(0, $ - 1);
        },
        getModeAt: function (l) {
          var u = this.doc.mode;
          return u.innerMode ? n.innerMode(u, this.getTokenAt(l).state).mode : u;
        },
        getHelper: function (l, u) {
          return this.getHelpers(l, u)[0];
        },
        getHelpers: function (l, u) {
          var g = [];
          if (!a.hasOwnProperty(u)) return g;
          var m = a[u],
            w = this.getModeAt(l);
          if (typeof w[u] == "string") m[w[u]] && g.push(m[w[u]]);
          else if (w[u])
            for (var _ = 0; _ < w[u].length; _++) {
              var S = m[w[u][_]];
              S && g.push(S);
            }
          else
            w.helperType && m[w.helperType]
              ? g.push(m[w.helperType])
              : m[w.name] && g.push(m[w.name]);
          for (var $ = 0; $ < m._global.length; $++) {
            var R = m._global[$];
            R.pred(w, this) && Ce(g, R.val) == -1 && g.push(R.val);
          }
          return g;
        },
        getStateAfter: function (l, u) {
          var g = this.doc;
          return (l = cp(g, l ?? g.first + g.size - 1)), Ds(this, l + 1, u).state;
        },
        cursorCoords: function (l, u) {
          var g,
            m = this.doc.sel.primary();
          return (
            l == null
              ? (g = m.head)
              : typeof l == "object"
                ? (g = Ke(this.doc, l))
                : (g = l ? m.from() : m.to()),
            fr(this, g, u || "page")
          );
        },
        charCoords: function (l, u) {
          return Ca(this, Ke(this.doc, l), u || "page");
        },
        coordsChar: function (l, u) {
          return (l = Up(this, l, u || "page")), nf(this, l.left, l.top);
        },
        lineAtHeight: function (l, u) {
          return (
            (l = Up(this, { top: l, left: 0 }, u || "page").top),
            P(this.doc, l + this.display.viewOffset)
          );
        },
        heightAtLine: function (l, u, g) {
          var m = !1,
            w;
          if (typeof l == "number") {
            var _ = this.doc.first + this.doc.size - 1;
            l < this.doc.first ? (l = this.doc.first) : l > _ && ((l = _), (m = !0)),
              (w = Oe(this.doc, l));
          } else w = l;
          return (
            Ta(this, w, { top: 0, left: 0 }, u || "page", g || m).top +
            (m ? this.doc.height - Ur(w) : 0)
          );
        },
        defaultTextHeight: function () {
          return Uo(this.display);
        },
        defaultCharWidth: function () {
          return Vo(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (l, u, g, m, w) {
          var _ = this.display;
          l = fr(this, Ke(this.doc, l));
          var S = l.bottom,
            $ = l.left;
          if (
            ((u.style.position = "absolute"),
            u.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(u),
            _.sizer.appendChild(u),
            m == "over")
          )
            S = l.top;
          else if (m == "above" || m == "near") {
            var R = Math.max(_.wrapper.clientHeight, this.doc.height),
              G = Math.max(_.sizer.clientWidth, _.lineSpace.clientWidth);
            (m == "above" || l.bottom + u.offsetHeight > R) && l.top > u.offsetHeight
              ? (S = l.top - u.offsetHeight)
              : l.bottom + u.offsetHeight <= R && (S = l.bottom),
              $ + u.offsetWidth > G && ($ = G - u.offsetWidth);
          }
          (u.style.top = S + "px"),
            (u.style.left = u.style.right = ""),
            w == "right"
              ? (($ = _.sizer.clientWidth - u.offsetWidth), (u.style.right = "0px"))
              : (w == "left"
                  ? ($ = 0)
                  : w == "middle" && ($ = (_.sizer.clientWidth - u.offsetWidth) / 2),
                (u.style.left = $ + "px")),
            g &&
              Sx(this, { left: $, top: S, right: $ + u.offsetWidth, bottom: S + u.offsetHeight });
        },
        triggerOnKeyDown: an(Gg),
        triggerOnKeyPress: an(Xg),
        triggerOnKeyUp: Kg,
        triggerOnMouseDown: an(Yg),
        execCommand: function (l) {
          if (il.hasOwnProperty(l)) return il[l].call(null, this);
        },
        triggerElectric: an(function (l) {
          rv(this, l);
        }),
        findPosH: function (l, u, g, m) {
          var w = 1;
          u < 0 && ((w = -1), (u = -u));
          for (
            var _ = Ke(this.doc, l), S = 0;
            S < u && ((_ = Pf(this.doc, _, w, g, m)), !_.hitSide);
            ++S
          );
          return _;
        },
        moveH: an(function (l, u) {
          var g = this;
          this.extendSelectionsBy(function (m) {
            return g.display.shift || g.doc.extend || m.empty()
              ? Pf(g.doc, m.head, l, u, g.options.rtlMoveVisually)
              : l < 0
                ? m.from()
                : m.to();
          }, ce);
        }),
        deleteH: an(function (l, u) {
          var g = this.doc.sel,
            m = this.doc;
          g.somethingSelected()
            ? m.replaceSelection("", null, "+delete")
            : ts(this, function (w) {
                var _ = Pf(m, w.head, l, u, !1);
                return l < 0 ? { from: _, to: w.head } : { from: w.head, to: _ };
              });
        }),
        findPosV: function (l, u, g, m) {
          var w = 1,
            _ = m;
          u < 0 && ((w = -1), (u = -u));
          for (var S = Ke(this.doc, l), $ = 0; $ < u; ++$) {
            var R = fr(this, S, "div");
            if ((_ == null ? (_ = R.left) : (R.left = _), (S = sv(this, R, w, g)), S.hitSide))
              break;
          }
          return S;
        },
        moveV: an(function (l, u) {
          var g = this,
            m = this.doc,
            w = [],
            _ = !this.display.shift && !m.extend && m.sel.somethingSelected();
          if (
            (m.extendSelectionsBy(function ($) {
              if (_) return l < 0 ? $.from() : $.to();
              var R = fr(g, $.head, "div");
              $.goalColumn != null && (R.left = $.goalColumn), w.push(R.left);
              var G = sv(g, R, l, u);
              return u == "page" && $ == m.sel.primary() && hf(g, Ca(g, G, "div").top - R.top), G;
            }, ce),
            w.length)
          )
            for (var S = 0; S < m.sel.ranges.length; S++) m.sel.ranges[S].goalColumn = w[S];
        }),
        findWordAt: function (l) {
          var u = this.doc,
            g = Oe(u, l.line).text,
            m = l.ch,
            w = l.ch;
          if (g) {
            var _ = this.getHelper(l, "wordChars");
            (l.sticky == "before" || w == g.length) && m ? --m : ++w;
            for (
              var S = g.charAt(m),
                $ = Ge(S, _)
                  ? function (R) {
                      return Ge(R, _);
                    }
                  : /\s/.test(S)
                    ? function (R) {
                        return /\s/.test(R);
                      }
                    : function (R) {
                        return !/\s/.test(R) && !Ge(R);
                      };
              m > 0 && $(g.charAt(m - 1));

            )
              --m;
            for (; w < g.length && $(g.charAt(w)); ) ++w;
          }
          return new ft(Q(l.line, m), Q(l.line, w));
        },
        toggleOverwrite: function (l) {
          (l != null && l == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? Me(this.display.cursorDiv, "CodeMirror-overwrite")
              : K(this.display.cursorDiv, "CodeMirror-overwrite"),
            Et(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == me(nt(this));
        },
        isReadOnly: function () {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: an(function (l, u) {
          Ws(this, l, u);
        }),
        getScrollInfo: function () {
          var l = this.display.scroller;
          return {
            left: l.scrollLeft,
            top: l.scrollTop,
            height: l.scrollHeight - Cr(this) - this.display.barHeight,
            width: l.scrollWidth - Cr(this) - this.display.barWidth,
            clientHeight: Ju(this),
            clientWidth: io(this),
          };
        },
        scrollIntoView: an(function (l, u) {
          l == null
            ? ((l = { from: this.doc.sel.primary().head, to: null }),
              u == null && (u = this.options.cursorScrollMargin))
            : typeof l == "number"
              ? (l = { from: Q(l, 0), to: null })
              : l.from == null && (l = { from: l, to: null }),
            l.to || (l.to = l.from),
            (l.margin = u || 0),
            l.from.line != null ? kx(this, l) : Qp(this, l.from, l.to, l.margin);
        }),
        setSize: an(function (l, u) {
          var g = this,
            m = function (_) {
              return typeof _ == "number" || /^\d+$/.test(String(_)) ? _ + "px" : _;
            };
          l != null && (this.display.wrapper.style.width = m(l)),
            u != null && (this.display.wrapper.style.height = m(u)),
            this.options.lineWrapping && qp(this);
          var w = this.display.viewFrom;
          this.doc.iter(w, this.display.viewTo, function (_) {
            if (_.widgets) {
              for (var S = 0; S < _.widgets.length; S++)
                if (_.widgets[S].noHScroll) {
                  vi(g, w, "widget");
                  break;
                }
            }
            ++w;
          }),
            (this.curOp.forceUpdate = !0),
            Et(this, "refresh", this);
        }),
        operation: function (l) {
          return Ln(this, l);
        },
        startOperation: function () {
          return uo(this);
        },
        endOperation: function () {
          return fo(this);
        },
        refresh: an(function () {
          var l = this.display.cachedTextHeight;
          vn(this),
            (this.curOp.forceUpdate = !0),
            qs(this),
            Ws(this, this.doc.scrollLeft, this.doc.scrollTop),
            vf(this.display),
            (l == null || Math.abs(l - Uo(this.display)) > 0.5 || this.options.lineWrapping) &&
              lf(this),
            Et(this, "refresh", this);
        }),
        swapDoc: an(function (l) {
          var u = this.doc;
          return (
            (u.cm = null),
            this.state.selectingText && this.state.selectingText(),
            hg(this, l),
            qs(this),
            this.display.input.reset(),
            Ws(this, l.scrollLeft, l.scrollTop),
            (this.curOp.forceScroll = !0),
            Wt(this, "swapDoc", this, u),
            u
          );
        }),
        phrase: function (l) {
          var u = this.options.phrases;
          return u && Object.prototype.hasOwnProperty.call(u, l) ? u[l] : l;
        },
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        or(n),
        (n.registerHelper = function (l, u, g) {
          a.hasOwnProperty(l) || (a[l] = n[l] = { _global: [] }), (a[l][u] = g);
        }),
        (n.registerGlobalHelper = function (l, u, g, m) {
          n.registerHelper(l, u, m), a[l]._global.push({ pred: g, val: m });
        });
    }
    function Pf(n, i, a, l, u) {
      var g = i,
        m = a,
        w = Oe(n, i.line),
        _ = u && n.direction == "rtl" ? -a : a;
      function S() {
        var ke = i.line + _;
        return ke < n.first || ke >= n.first + n.size
          ? !1
          : ((i = new Q(ke, i.ch, i.sticky)), (w = Oe(n, ke)));
      }
      function $(ke) {
        var xe;
        if (l == "codepoint") {
          var Ee = w.text.charCodeAt(i.ch + (a > 0 ? 0 : -1));
          if (isNaN(Ee)) xe = null;
          else {
            var He = a > 0 ? Ee >= 55296 && Ee < 56320 : Ee >= 56320 && Ee < 57343;
            xe = new Q(i.line, Math.max(0, Math.min(w.text.length, i.ch + a * (He ? 2 : 1))), -a);
          }
        } else u ? (xe = l_(n.cm, w, i, a)) : (xe = Cf(w, i, a));
        if (xe == null)
          if (!ke && S()) i = Ef(u, n.cm, w, i.line, _);
          else return !1;
        else i = xe;
        return !0;
      }
      if (l == "char" || l == "codepoint") $();
      else if (l == "column") $(!0);
      else if (l == "word" || l == "group")
        for (
          var R = null, G = l == "group", U = n.cm && n.cm.getHelper(i, "wordChars"), ee = !0;
          !(a < 0 && !$(!ee));
          ee = !1
        ) {
          var fe =
              w.text.charAt(i.ch) ||
              `
`,
            ge = Ge(fe, U)
              ? "w"
              : G &&
                  fe ==
                    `
`
                ? "n"
                : !G || /\s/.test(fe)
                  ? null
                  : "p";
          if ((G && !ee && !ge && (ge = "s"), R && R != ge)) {
            a < 0 && ((a = 1), $(), (i.sticky = "after"));
            break;
          }
          if ((ge && (R = ge), a > 0 && !$(!ee))) break;
        }
      var we = Ia(n, i, g, m, !0);
      return ut(g, we) && (we.hitSide = !0), we;
    }
    function sv(n, i, a, l) {
      var u = n.doc,
        g = i.left,
        m;
      if (l == "page") {
        var w = Math.min(
            n.display.wrapper.clientHeight,
            Te(n).innerHeight || u(n).documentElement.clientHeight,
          ),
          _ = Math.max(w - 0.5 * Uo(n.display), 3);
        m = (a > 0 ? i.bottom : i.top) + a * _;
      } else l == "line" && (m = a > 0 ? i.bottom + 3 : i.top - 3);
      for (var S; (S = nf(n, g, m)), !!S.outside; ) {
        if (a < 0 ? m <= 0 : m >= u.height) {
          S.hitSide = !0;
          break;
        }
        m += a * 5;
      }
      return S;
    }
    var mt = function (n) {
      (this.cm = n),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new Ne()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
    (mt.prototype.init = function (n) {
      var i = this,
        a = this,
        l = a.cm,
        u = (a.div = n.lineDiv);
      (u.contentEditable = !0),
        Of(u, l.options.spellcheck, l.options.autocorrect, l.options.autocapitalize);
      function g(w) {
        for (var _ = w.target; _; _ = _.parentNode) {
          if (_ == u) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(_.className)) break;
        }
        return !1;
      }
      Fe(u, "paste", function (w) {
        !g(w) ||
          Lt(l, w) ||
          nv(w, l) ||
          (p <= 11 &&
            setTimeout(
              Ut(l, function () {
                return i.updateFromDOM();
              }),
              20,
            ));
      }),
        Fe(u, "compositionstart", function (w) {
          i.composing = { data: w.data, done: !1 };
        }),
        Fe(u, "compositionupdate", function (w) {
          i.composing || (i.composing = { data: w.data, done: !1 });
        }),
        Fe(u, "compositionend", function (w) {
          i.composing &&
            (w.data != i.composing.data && i.readFromDOMSoon(), (i.composing.done = !0));
        }),
        Fe(u, "touchstart", function () {
          return a.forceCompositionEnd();
        }),
        Fe(u, "input", function () {
          i.composing || i.readFromDOMSoon();
        });
      function m(w) {
        if (!(!g(w) || Lt(l, w))) {
          if (l.somethingSelected())
            Ua({ lineWise: !1, text: l.getSelections() }),
              w.type == "cut" && l.replaceSelection("", null, "cut");
          else if (l.options.lineWiseCopyCut) {
            var _ = iv(l);
            Ua({ lineWise: !0, text: _.text }),
              w.type == "cut" &&
                l.operation(function () {
                  l.setSelections(_.ranges, 0, F), l.replaceSelection("", null, "cut");
                });
          } else return;
          if (w.clipboardData) {
            w.clipboardData.clearData();
            var S = hr.text.join(`
`);
            if ((w.clipboardData.setData("Text", S), w.clipboardData.getData("Text") == S)) {
              w.preventDefault();
              return;
            }
          }
          var $ = ov(),
            R = $.firstChild;
          Of(R),
            l.display.lineSpace.insertBefore($, l.display.lineSpace.firstChild),
            (R.value = hr.text.join(`
`));
          var G = me(Ze(u));
          Ve(R),
            setTimeout(function () {
              l.display.lineSpace.removeChild($), G.focus(), G == u && a.showPrimarySelection();
            }, 50);
        }
      }
      Fe(u, "copy", m), Fe(u, "cut", m);
    }),
      (mt.prototype.screenReaderLabelChanged = function (n) {
        n ? this.div.setAttribute("aria-label", n) : this.div.removeAttribute("aria-label");
      }),
      (mt.prototype.prepareSelection = function () {
        var n = Yp(this.cm, !1);
        return (n.focus = me(Ze(this.div)) == this.div), n;
      }),
      (mt.prototype.showSelection = function (n, i) {
        !n ||
          !this.cm.display.view.length ||
          ((n.focus || i) && this.showPrimarySelection(), this.showMultipleSelections(n));
      }),
      (mt.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }),
      (mt.prototype.showPrimarySelection = function () {
        var n = this.getSelection(),
          i = this.cm,
          a = i.doc.sel.primary(),
          l = a.from(),
          u = a.to();
        if (
          i.display.viewTo == i.display.viewFrom ||
          l.line >= i.display.viewTo ||
          u.line < i.display.viewFrom
        ) {
          n.removeAllRanges();
          return;
        }
        var g = Va(i, n.anchorNode, n.anchorOffset),
          m = Va(i, n.focusNode, n.focusOffset);
        if (!(g && !g.bad && m && !m.bad && _e(Ho(g, m), l) == 0 && _e(gn(g, m), u) == 0)) {
          var w = i.display.view,
            _ = (l.line >= i.display.viewFrom && lv(i, l)) || {
              node: w[0].measure.map[2],
              offset: 0,
            },
            S = u.line < i.display.viewTo && lv(i, u);
          if (!S) {
            var $ = w[w.length - 1].measure,
              R = $.maps ? $.maps[$.maps.length - 1] : $.map;
            S = { node: R[R.length - 1], offset: R[R.length - 2] - R[R.length - 3] };
          }
          if (!_ || !S) {
            n.removeAllRanges();
            return;
          }
          var G = n.rangeCount && n.getRangeAt(0),
            U;
          try {
            U = W(_.node, _.offset, S.offset, S.node);
          } catch {}
          U &&
            (!s && i.state.focused
              ? (n.collapse(_.node, _.offset), U.collapsed || (n.removeAllRanges(), n.addRange(U)))
              : (n.removeAllRanges(), n.addRange(U)),
            G && n.anchorNode == null ? n.addRange(G) : s && this.startGracePeriod()),
            this.rememberSelection();
        }
      }),
      (mt.prototype.startGracePeriod = function () {
        var n = this;
        clearTimeout(this.gracePeriod),
          (this.gracePeriod = setTimeout(function () {
            (n.gracePeriod = !1),
              n.selectionChanged() &&
                n.cm.operation(function () {
                  return (n.cm.curOp.selectionChanged = !0);
                });
          }, 20));
      }),
      (mt.prototype.showMultipleSelections = function (n) {
        I(this.cm.display.cursorDiv, n.cursors), I(this.cm.display.selectionDiv, n.selection);
      }),
      (mt.prototype.rememberSelection = function () {
        var n = this.getSelection();
        (this.lastAnchorNode = n.anchorNode),
          (this.lastAnchorOffset = n.anchorOffset),
          (this.lastFocusNode = n.focusNode),
          (this.lastFocusOffset = n.focusOffset);
      }),
      (mt.prototype.selectionInEditor = function () {
        var n = this.getSelection();
        if (!n.rangeCount) return !1;
        var i = n.getRangeAt(0).commonAncestorContainer;
        return re(this.div, i);
      }),
      (mt.prototype.focus = function () {
        this.cm.options.readOnly != "nocursor" &&
          ((!this.selectionInEditor() || me(Ze(this.div)) != this.div) &&
            this.showSelection(this.prepareSelection(), !0),
          this.div.focus());
      }),
      (mt.prototype.blur = function () {
        this.div.blur();
      }),
      (mt.prototype.getField = function () {
        return this.div;
      }),
      (mt.prototype.supportsTouch = function () {
        return !0;
      }),
      (mt.prototype.receivedFocus = function () {
        var n = this,
          i = this;
        this.selectionInEditor()
          ? setTimeout(function () {
              return n.pollSelection();
            }, 20)
          : Ln(this.cm, function () {
              return (i.cm.curOp.selectionChanged = !0);
            });
        function a() {
          i.cm.state.focused && (i.pollSelection(), i.polling.set(i.cm.options.pollInterval, a));
        }
        this.polling.set(this.cm.options.pollInterval, a);
      }),
      (mt.prototype.selectionChanged = function () {
        var n = this.getSelection();
        return (
          n.anchorNode != this.lastAnchorNode ||
          n.anchorOffset != this.lastAnchorOffset ||
          n.focusNode != this.lastFocusNode ||
          n.focusOffset != this.lastFocusOffset
        );
      }),
      (mt.prototype.pollSelection = function () {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var n = this.getSelection(),
            i = this.cm;
          if (D && b && this.cm.display.gutterSpecs.length && E_(n.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }),
              this.blur(),
              this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var a = Va(i, n.anchorNode, n.anchorOffset),
              l = Va(i, n.focusNode, n.focusOffset);
            a &&
              l &&
              Ln(i, function () {
                nn(i.doc, yi(a, l), F), (a.bad || l.bad) && (i.curOp.selectionChanged = !0);
              });
          }
        }
      }),
      (mt.prototype.pollContent = function () {
        this.readDOMTimeout != null &&
          (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
        var n = this.cm,
          i = n.display,
          a = n.doc.sel.primary(),
          l = a.from(),
          u = a.to();
        if (
          (l.ch == 0 && l.line > n.firstLine() && (l = Q(l.line - 1, Oe(n.doc, l.line - 1).length)),
          u.ch == Oe(n.doc, u.line).text.length && u.line < n.lastLine() && (u = Q(u.line + 1, 0)),
          l.line < i.viewFrom || u.line > i.viewTo - 1)
        )
          return !1;
        var g, m, w;
        l.line == i.viewFrom || (g = lo(n, l.line)) == 0
          ? ((m = T(i.view[0].line)), (w = i.view[0].node))
          : ((m = T(i.view[g].line)), (w = i.view[g - 1].node.nextSibling));
        var _ = lo(n, u.line),
          S,
          $;
        if (
          (_ == i.view.length - 1
            ? ((S = i.viewTo - 1), ($ = i.lineDiv.lastChild))
            : ((S = T(i.view[_ + 1].line) - 1), ($ = i.view[_ + 1].node.previousSibling)),
          !w)
        )
          return !1;
        for (
          var R = n.doc.splitLines(L_(n, w, $, m, S)),
            G = Br(n.doc, Q(m, 0), Q(S, Oe(n.doc, S).text.length));
          R.length > 1 && G.length > 1;

        )
          if (ue(R) == ue(G)) R.pop(), G.pop(), S--;
          else if (R[0] == G[0]) R.shift(), G.shift(), m++;
          else break;
        for (
          var U = 0, ee = 0, fe = R[0], ge = G[0], we = Math.min(fe.length, ge.length);
          U < we && fe.charCodeAt(U) == ge.charCodeAt(U);

        )
          ++U;
        for (
          var ke = ue(R),
            xe = ue(G),
            Ee = Math.min(ke.length - (R.length == 1 ? U : 0), xe.length - (G.length == 1 ? U : 0));
          ee < Ee && ke.charCodeAt(ke.length - ee - 1) == xe.charCodeAt(xe.length - ee - 1);

        )
          ++ee;
        if (R.length == 1 && G.length == 1 && m == l.line)
          for (
            ;
            U && U > l.ch && ke.charCodeAt(ke.length - ee - 1) == xe.charCodeAt(xe.length - ee - 1);

          )
            U--, ee++;
        (R[R.length - 1] = ke.slice(0, ke.length - ee).replace(/^\u200b+/, "")),
          (R[0] = R[0].slice(U).replace(/\u200b+$/, ""));
        var He = Q(m, U),
          Re = Q(S, G.length ? ue(G).length - ee : 0);
        if (R.length > 1 || R[0] || _e(He, Re)) return Jo(n.doc, R, He, Re, "+input"), !0;
      }),
      (mt.prototype.ensurePolled = function () {
        this.forceCompositionEnd();
      }),
      (mt.prototype.reset = function () {
        this.forceCompositionEnd();
      }),
      (mt.prototype.forceCompositionEnd = function () {
        this.composing &&
          (clearTimeout(this.readDOMTimeout),
          (this.composing = null),
          this.updateFromDOM(),
          this.div.blur(),
          this.div.focus());
      }),
      (mt.prototype.readFromDOMSoon = function () {
        var n = this;
        this.readDOMTimeout == null &&
          (this.readDOMTimeout = setTimeout(function () {
            if (((n.readDOMTimeout = null), n.composing))
              if (n.composing.done) n.composing = null;
              else return;
            n.updateFromDOM();
          }, 80));
      }),
      (mt.prototype.updateFromDOM = function () {
        var n = this;
        (this.cm.isReadOnly() || !this.pollContent()) &&
          Ln(this.cm, function () {
            return vn(n.cm);
          });
      }),
      (mt.prototype.setUneditable = function (n) {
        n.contentEditable = "false";
      }),
      (mt.prototype.onKeyPress = function (n) {
        n.charCode == 0 ||
          this.composing ||
          (n.preventDefault(),
          this.cm.isReadOnly() ||
            Ut(this.cm, $f)(
              this.cm,
              String.fromCharCode(n.charCode == null ? n.keyCode : n.charCode),
              0,
            ));
      }),
      (mt.prototype.readOnlyChanged = function (n) {
        this.div.contentEditable = String(n != "nocursor");
      }),
      (mt.prototype.onContextMenu = function () {}),
      (mt.prototype.resetPosition = function () {}),
      (mt.prototype.needsContentAttribute = !0);
    function lv(n, i) {
      var a = Qu(n, i.line);
      if (!a || a.hidden) return null;
      var l = Oe(n.doc, i.line),
        u = Dp(a, l, i.line),
        g = Ue(l, n.doc.direction),
        m = "left";
      if (g) {
        var w = ir(g, i.ch);
        m = w % 2 ? "right" : "left";
      }
      var _ = Fp(u.map, i.ch, m);
      return (_.offset = _.collapse == "right" ? _.end : _.start), _;
    }
    function E_(n) {
      for (var i = n; i; i = i.parentNode)
        if (/CodeMirror-gutter-wrapper/.test(i.className)) return !0;
      return !1;
    }
    function rs(n, i) {
      return i && (n.bad = !0), n;
    }
    function L_(n, i, a, l, u) {
      var g = "",
        m = !1,
        w = n.doc.lineSeparator(),
        _ = !1;
      function S(U) {
        return function (ee) {
          return ee.id == U;
        };
      }
      function $() {
        m && ((g += w), _ && (g += w), (m = _ = !1));
      }
      function R(U) {
        U && ($(), (g += U));
      }
      function G(U) {
        if (U.nodeType == 1) {
          var ee = U.getAttribute("cm-text");
          if (ee) {
            R(ee);
            return;
          }
          var fe = U.getAttribute("cm-marker"),
            ge;
          if (fe) {
            var we = n.findMarks(Q(l, 0), Q(u + 1, 0), S(+fe));
            we.length && (ge = we[0].find(0)) && R(Br(n.doc, ge.from, ge.to).join(w));
            return;
          }
          if (U.getAttribute("contenteditable") == "false") return;
          var ke = /^(pre|div|p|li|table|br)$/i.test(U.nodeName);
          if (!/^br$/i.test(U.nodeName) && U.textContent.length == 0) return;
          ke && $();
          for (var xe = 0; xe < U.childNodes.length; xe++) G(U.childNodes[xe]);
          /^(pre|p)$/i.test(U.nodeName) && (_ = !0), ke && (m = !0);
        } else U.nodeType == 3 && R(U.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
      for (; G(i), i != a; ) (i = i.nextSibling), (_ = !1);
      return g;
    }
    function Va(n, i, a) {
      var l;
      if (i == n.display.lineDiv) {
        if (((l = n.display.lineDiv.childNodes[a]), !l))
          return rs(n.clipPos(Q(n.display.viewTo - 1)), !0);
        (i = null), (a = 0);
      } else
        for (l = i; ; l = l.parentNode) {
          if (!l || l == n.display.lineDiv) return null;
          if (l.parentNode && l.parentNode == n.display.lineDiv) break;
        }
      for (var u = 0; u < n.display.view.length; u++) {
        var g = n.display.view[u];
        if (g.node == l) return A_(g, i, a);
      }
    }
    function A_(n, i, a) {
      var l = n.text.firstChild,
        u = !1;
      if (!i || !re(l, i)) return rs(Q(T(n.line), 0), !0);
      if (i == l && ((u = !0), (i = l.childNodes[a]), (a = 0), !i)) {
        var g = n.rest ? ue(n.rest) : n.line;
        return rs(Q(T(g), g.text.length), u);
      }
      var m = i.nodeType == 3 ? i : null,
        w = i;
      for (
        !m &&
        i.childNodes.length == 1 &&
        i.firstChild.nodeType == 3 &&
        ((m = i.firstChild), a && (a = m.nodeValue.length));
        w.parentNode != l;

      )
        w = w.parentNode;
      var _ = n.measure,
        S = _.maps;
      function $(ge, we, ke) {
        for (var xe = -1; xe < (S ? S.length : 0); xe++)
          for (var Ee = xe < 0 ? _.map : S[xe], He = 0; He < Ee.length; He += 3) {
            var Re = Ee[He + 2];
            if (Re == ge || Re == we) {
              var Je = T(xe < 0 ? n.line : n.rest[xe]),
                wt = Ee[He] + ke;
              return (ke < 0 || Re != ge) && (wt = Ee[He + (ke ? 1 : 0)]), Q(Je, wt);
            }
          }
      }
      var R = $(m, w, a);
      if (R) return rs(R, u);
      for (var G = w.nextSibling, U = m ? m.nodeValue.length - a : 0; G; G = G.nextSibling) {
        if (((R = $(G, G.firstChild, 0)), R)) return rs(Q(R.line, R.ch - U), u);
        U += G.textContent.length;
      }
      for (var ee = w.previousSibling, fe = a; ee; ee = ee.previousSibling) {
        if (((R = $(ee, ee.firstChild, -1)), R)) return rs(Q(R.line, R.ch + fe), u);
        fe += ee.textContent.length;
      }
    }
    var Nt = function (n) {
      (this.cm = n),
        (this.prevInput = ""),
        (this.pollingFast = !1),
        (this.polling = new Ne()),
        (this.hasSelection = !1),
        (this.composing = null),
        (this.resetting = !1);
    };
    (Nt.prototype.init = function (n) {
      var i = this,
        a = this,
        l = this.cm;
      this.createField(n);
      var u = this.textarea;
      n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
        L && (u.style.width = "0px"),
        Fe(u, "input", function () {
          h && p >= 9 && i.hasSelection && (i.hasSelection = null), a.poll();
        }),
        Fe(u, "paste", function (m) {
          Lt(l, m) || nv(m, l) || ((l.state.pasteIncoming = +new Date()), a.fastPoll());
        });
      function g(m) {
        if (!Lt(l, m)) {
          if (l.somethingSelected()) Ua({ lineWise: !1, text: l.getSelections() });
          else if (l.options.lineWiseCopyCut) {
            var w = iv(l);
            Ua({ lineWise: !0, text: w.text }),
              m.type == "cut"
                ? l.setSelections(w.ranges, null, F)
                : ((a.prevInput = ""),
                  (u.value = w.text.join(`
`)),
                  Ve(u));
          } else return;
          m.type == "cut" && (l.state.cutIncoming = +new Date());
        }
      }
      Fe(u, "cut", g),
        Fe(u, "copy", g),
        Fe(n.scroller, "paste", function (m) {
          if (!(Vr(n, m) || Lt(l, m))) {
            if (!u.dispatchEvent) {
              (l.state.pasteIncoming = +new Date()), a.focus();
              return;
            }
            var w = new Event("paste");
            (w.clipboardData = m.clipboardData), u.dispatchEvent(w);
          }
        }),
        Fe(n.lineSpace, "selectstart", function (m) {
          Vr(n, m) || tn(m);
        }),
        Fe(u, "compositionstart", function () {
          var m = l.getCursor("from");
          a.composing && a.composing.range.clear(),
            (a.composing = {
              start: m,
              range: l.markText(m, l.getCursor("to"), { className: "CodeMirror-composing" }),
            });
        }),
        Fe(u, "compositionend", function () {
          a.composing && (a.poll(), a.composing.range.clear(), (a.composing = null));
        });
    }),
      (Nt.prototype.createField = function (n) {
        (this.wrapper = ov()), (this.textarea = this.wrapper.firstChild);
        var i = this.cm.options;
        Of(this.textarea, i.spellcheck, i.autocorrect, i.autocapitalize);
      }),
      (Nt.prototype.screenReaderLabelChanged = function (n) {
        n
          ? this.textarea.setAttribute("aria-label", n)
          : this.textarea.removeAttribute("aria-label");
      }),
      (Nt.prototype.prepareSelection = function () {
        var n = this.cm,
          i = n.display,
          a = n.doc,
          l = Yp(n);
        if (n.options.moveInputWithCursor) {
          var u = fr(n, a.sel.primary().head, "div"),
            g = i.wrapper.getBoundingClientRect(),
            m = i.lineDiv.getBoundingClientRect();
          (l.teTop = Math.max(0, Math.min(i.wrapper.clientHeight - 10, u.top + m.top - g.top))),
            (l.teLeft = Math.max(
              0,
              Math.min(i.wrapper.clientWidth - 10, u.left + m.left - g.left),
            ));
        }
        return l;
      }),
      (Nt.prototype.showSelection = function (n) {
        var i = this.cm,
          a = i.display;
        I(a.cursorDiv, n.cursors),
          I(a.selectionDiv, n.selection),
          n.teTop != null &&
            ((this.wrapper.style.top = n.teTop + "px"),
            (this.wrapper.style.left = n.teLeft + "px"));
      }),
      (Nt.prototype.reset = function (n) {
        if (!(this.contextMenuPending || (this.composing && n))) {
          var i = this.cm;
          if (((this.resetting = !0), i.somethingSelected())) {
            this.prevInput = "";
            var a = i.getSelection();
            (this.textarea.value = a),
              i.state.focused && Ve(this.textarea),
              h && p >= 9 && (this.hasSelection = a);
          } else
            n ||
              ((this.prevInput = this.textarea.value = ""),
              h && p >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }),
      (Nt.prototype.getField = function () {
        return this.textarea;
      }),
      (Nt.prototype.supportsTouch = function () {
        return !1;
      }),
      (Nt.prototype.focus = function () {
        if (
          this.cm.options.readOnly != "nocursor" &&
          (!A || me(Ze(this.textarea)) != this.textarea)
        )
          try {
            this.textarea.focus();
          } catch {}
      }),
      (Nt.prototype.blur = function () {
        this.textarea.blur();
      }),
      (Nt.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }),
      (Nt.prototype.receivedFocus = function () {
        this.slowPoll();
      }),
      (Nt.prototype.slowPoll = function () {
        var n = this;
        this.pollingFast ||
          this.polling.set(this.cm.options.pollInterval, function () {
            n.poll(), n.cm.state.focused && n.slowPoll();
          });
      }),
      (Nt.prototype.fastPoll = function () {
        var n = !1,
          i = this;
        i.pollingFast = !0;
        function a() {
          var l = i.poll();
          !l && !n ? ((n = !0), i.polling.set(60, a)) : ((i.pollingFast = !1), i.slowPoll());
        }
        i.polling.set(20, a);
      }),
      (Nt.prototype.poll = function () {
        var n = this,
          i = this.cm,
          a = this.textarea,
          l = this.prevInput;
        if (
          this.contextMenuPending ||
          this.resetting ||
          !i.state.focused ||
          (hi(a) && !l && !this.composing) ||
          i.isReadOnly() ||
          i.options.disableInput ||
          i.state.keySeq
        )
          return !1;
        var u = a.value;
        if (u == l && !i.somethingSelected()) return !1;
        if ((h && p >= 9 && this.hasSelection === u) || (H && /[\uf700-\uf7ff]/.test(u)))
          return i.display.input.reset(), !1;
        if (i.doc.sel == i.display.selForContextMenu) {
          var g = u.charCodeAt(0);
          if ((g == 8203 && !l && (l = "​"), g == 8666))
            return this.reset(), this.cm.execCommand("undo");
        }
        for (
          var m = 0, w = Math.min(l.length, u.length);
          m < w && l.charCodeAt(m) == u.charCodeAt(m);

        )
          ++m;
        return (
          Ln(i, function () {
            $f(i, u.slice(m), l.length - m, null, n.composing ? "*compose" : null),
              u.length > 1e3 ||
              u.indexOf(`
`) > -1
                ? (a.value = n.prevInput = "")
                : (n.prevInput = u),
              n.composing &&
                (n.composing.range.clear(),
                (n.composing.range = i.markText(n.composing.start, i.getCursor("to"), {
                  className: "CodeMirror-composing",
                })));
          }),
          !0
        );
      }),
      (Nt.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }),
      (Nt.prototype.onKeyPress = function () {
        h && p >= 9 && (this.hasSelection = null), this.fastPoll();
      }),
      (Nt.prototype.onContextMenu = function (n) {
        var i = this,
          a = i.cm,
          l = a.display,
          u = i.textarea;
        i.contextMenuPending && i.contextMenuPending();
        var g = so(a, n),
          m = l.scroller.scrollTop;
        if (!g || C) return;
        var w = a.options.resetSelectionOnContextMenu;
        w && a.doc.sel.contains(g) == -1 && Ut(a, nn)(a.doc, yi(g), F);
        var _ = u.style.cssText,
          S = i.wrapper.style.cssText,
          $ = i.wrapper.offsetParent.getBoundingClientRect();
        (i.wrapper.style.cssText = "position: static"),
          (u.style.cssText =
            `position: absolute; width: 30px; height: 30px;
      top: ` +
            (n.clientY - $.top - 5) +
            "px; left: " +
            (n.clientX - $.left - 5) +
            `px;
      z-index: 1000; background: ` +
            (h ? "rgba(255, 255, 255, .05)" : "transparent") +
            `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
        var R;
        v && (R = u.ownerDocument.defaultView.scrollY),
          l.input.focus(),
          v && u.ownerDocument.defaultView.scrollTo(null, R),
          l.input.reset(),
          a.somethingSelected() || (u.value = i.prevInput = " "),
          (i.contextMenuPending = U),
          (l.selForContextMenu = a.doc.sel),
          clearTimeout(l.detectingSelectAll);
        function G() {
          if (u.selectionStart != null) {
            var fe = a.somethingSelected(),
              ge = "​" + (fe ? u.value : "");
            (u.value = "⇚"),
              (u.value = ge),
              (i.prevInput = fe ? "" : "​"),
              (u.selectionStart = 1),
              (u.selectionEnd = ge.length),
              (l.selForContextMenu = a.doc.sel);
          }
        }
        function U() {
          if (
            i.contextMenuPending == U &&
            ((i.contextMenuPending = !1),
            (i.wrapper.style.cssText = S),
            (u.style.cssText = _),
            h && p < 9 && l.scrollbars.setScrollTop((l.scroller.scrollTop = m)),
            u.selectionStart != null)
          ) {
            (!h || (h && p < 9)) && G();
            var fe = 0,
              ge = function () {
                l.selForContextMenu == a.doc.sel &&
                u.selectionStart == 0 &&
                u.selectionEnd > 0 &&
                i.prevInput == "​"
                  ? Ut(a, Cg)(a)
                  : fe++ < 10
                    ? (l.detectingSelectAll = setTimeout(ge, 500))
                    : ((l.selForContextMenu = null), l.input.reset());
              };
            l.detectingSelectAll = setTimeout(ge, 200);
          }
        }
        if ((h && p >= 9 && G(), j)) {
          fi(n);
          var ee = function () {
            en(window, "mouseup", ee), setTimeout(U, 20);
          };
          Fe(window, "mouseup", ee);
        } else setTimeout(U, 50);
      }),
      (Nt.prototype.readOnlyChanged = function (n) {
        n || this.reset(),
          (this.textarea.disabled = n == "nocursor"),
          (this.textarea.readOnly = !!n);
      }),
      (Nt.prototype.setUneditable = function () {}),
      (Nt.prototype.needsContentAttribute = !1);
    function M_(n, i) {
      if (
        ((i = i ? ae(i) : {}),
        (i.value = n.value),
        !i.tabindex && n.tabIndex && (i.tabindex = n.tabIndex),
        !i.placeholder && n.placeholder && (i.placeholder = n.placeholder),
        i.autofocus == null)
      ) {
        var a = me(Ze(n));
        i.autofocus = a == n || (n.getAttribute("autofocus") != null && a == document.body);
      }
      function l() {
        n.value = w.getValue();
      }
      var u;
      if (n.form && (Fe(n.form, "submit", l), !i.leaveSubmitMethodAlone)) {
        var g = n.form;
        u = g.submit;
        try {
          var m = (g.submit = function () {
            l(), (g.submit = u), g.submit(), (g.submit = m);
          });
        } catch {}
      }
      (i.finishInit = function (_) {
        (_.save = l),
          (_.getTextArea = function () {
            return n;
          }),
          (_.toTextArea = function () {
            (_.toTextArea = isNaN),
              l(),
              n.parentNode.removeChild(_.getWrapperElement()),
              (n.style.display = ""),
              n.form &&
                (en(n.form, "submit", l),
                !i.leaveSubmitMethodAlone &&
                  typeof n.form.submit == "function" &&
                  (n.form.submit = u));
          });
      }),
        (n.style.display = "none");
      var w = St(function (_) {
        return n.parentNode.insertBefore(_, n.nextSibling);
      }, i);
      return w;
    }
    function N_(n) {
      (n.off = en),
        (n.on = Fe),
        (n.wheelEventPixels = Ix),
        (n.Doc = mn),
        (n.splitLines = Gn),
        (n.countColumn = de),
        (n.findColumn = se),
        (n.isWordChar = We),
        (n.Pass = O),
        (n.signal = Et),
        (n.Line = qo),
        (n.changeEnd = bi),
        (n.scrollbarModel = ng),
        (n.Pos = Q),
        (n.cmpPos = _e),
        (n.modes = Ro),
        (n.mimeModes = ar),
        (n.resolveMode = Do),
        (n.getMode = zo),
        (n.modeExtensions = pi),
        (n.extendMode = Io),
        (n.copyState = kr),
        (n.startState = Fo),
        (n.innerMode = Ps),
        (n.commands = il),
        (n.keyMap = Gr),
        (n.keyName = Bg),
        (n.isModifierKey = Hg),
        (n.lookupKey = es),
        (n.normalizeKeyMap = s_),
        (n.StringStream = At),
        (n.SharedTextMarker = tl),
        (n.TextMarker = xi),
        (n.LineWidget = el),
        (n.e_preventDefault = tn),
        (n.e_stopPropagation = Oo),
        (n.e_stop = fi),
        (n.addClass = Me),
        (n.contains = re),
        (n.rmClass = K),
        (n.keyNames = _i);
    }
    __(St), C_(St);
    var $_ = "iter insert remove copy getEditor constructor".split(" ");
    for (var ja in mn.prototype)
      mn.prototype.hasOwnProperty(ja) &&
        Ce($_, ja) < 0 &&
        (St.prototype[ja] = (function (n) {
          return function () {
            return n.apply(this.doc, arguments);
          };
        })(mn.prototype[ja]));
    return (
      or(mn),
      (St.inputStyles = { textarea: Nt, contenteditable: mt }),
      (St.defineMode = function (n) {
        !St.defaults.mode && n != "null" && (St.defaults.mode = n), cr.apply(this, arguments);
      }),
      (St.defineMIME = ro),
      St.defineMode("null", function () {
        return {
          token: function (n) {
            return n.skipToEnd();
          },
        };
      }),
      St.defineMIME("text/plain", "null"),
      (St.defineExtension = function (n, i) {
        St.prototype[n] = i;
      }),
      (St.defineDocExtension = function (n, i) {
        mn.prototype[n] = i;
      }),
      (St.fromTextArea = M_),
      N_(St),
      (St.version = "5.65.16"),
      St
    );
  });
})(Ww);
var Ns = Ww.exports;
const jue = Db(Ns);
var Gue = { exports: {} };
(function (e, t) {
  (function (r) {
    r(Ns);
  })(function (r) {
    r.defineMode("javascript", function (o, s) {
      var c = o.indentUnit,
        f = s.statementIndent,
        d = s.jsonld,
        h = s.json || d,
        p = s.trackScope !== !1,
        v = s.typescript,
        y = s.wordCharacters || /[\w$\xa1-\uffff]/,
        b = (function () {
          function T(Bt) {
            return { type: Bt, style: "keyword" };
          }
          var P = T("keyword a"),
            oe = T("keyword b"),
            pe = T("keyword c"),
            Q = T("keyword d"),
            _e = T("operator"),
            ut = { type: "atom", style: "atom" };
          return {
            if: T("if"),
            while: P,
            with: P,
            else: oe,
            do: oe,
            try: oe,
            finally: oe,
            return: Q,
            break: Q,
            continue: Q,
            new: T("new"),
            delete: pe,
            void: pe,
            throw: pe,
            debugger: T("debugger"),
            var: T("var"),
            const: T("var"),
            let: T("var"),
            function: T("function"),
            catch: T("catch"),
            for: T("for"),
            switch: T("switch"),
            case: T("case"),
            default: T("default"),
            in: _e,
            typeof: _e,
            instanceof: _e,
            true: ut,
            false: ut,
            null: ut,
            undefined: ut,
            NaN: ut,
            Infinity: ut,
            this: T("this"),
            class: T("class"),
            super: T("atom"),
            yield: pe,
            export: T("export"),
            import: T("import"),
            extends: pe,
            await: pe,
          };
        })(),
        x = /[+\-*&%=<>!?|~^@]/,
        C = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function E(T) {
        for (var P = !1, oe, pe = !1; (oe = T.next()) != null; ) {
          if (!P) {
            if (oe == "/" && !pe) return;
            oe == "[" ? (pe = !0) : pe && oe == "]" && (pe = !1);
          }
          P = !P && oe == "\\";
        }
      }
      var N, M;
      function L(T, P, oe) {
        return (N = T), (M = oe), P;
      }
      function D(T, P) {
        var oe = T.next();
        if (oe == '"' || oe == "'") return (P.tokenize = A(oe)), P.tokenize(T, P);
        if (oe == "." && T.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return L("number", "number");
        if (oe == "." && T.match("..")) return L("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(oe)) return L(oe);
        if (oe == "=" && T.eat(">")) return L("=>", "operator");
        if (oe == "0" && T.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return L("number", "number");
        if (/\d/.test(oe))
          return T.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), L("number", "number");
        if (oe == "/")
          return T.eat("*")
            ? ((P.tokenize = H), H(T, P))
            : T.eat("/")
              ? (T.skipToEnd(), L("comment", "comment"))
              : In(T, P, 1)
                ? (E(T), T.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), L("regexp", "string-2"))
                : (T.eat("="), L("operator", "operator", T.current()));
        if (oe == "`") return (P.tokenize = z), z(T, P);
        if (oe == "#" && T.peek() == "!") return T.skipToEnd(), L("meta", "meta");
        if (oe == "#" && T.eatWhile(y)) return L("variable", "property");
        if (
          (oe == "<" && T.match("!--")) ||
          (oe == "-" && T.match("->") && !/\S/.test(T.string.slice(0, T.start)))
        )
          return T.skipToEnd(), L("comment", "comment");
        if (x.test(oe))
          return (
            (oe != ">" || !P.lexical || P.lexical.type != ">") &&
              (T.eat("=")
                ? (oe == "!" || oe == "=") && T.eat("=")
                : /[<>*+\-|&?]/.test(oe) && (T.eat(oe), oe == ">" && T.eat(oe))),
            oe == "?" && T.eat(".") ? L(".") : L("operator", "operator", T.current())
          );
        if (y.test(oe)) {
          T.eatWhile(y);
          var pe = T.current();
          if (P.lastType != ".") {
            if (b.propertyIsEnumerable(pe)) {
              var Q = b[pe];
              return L(Q.type, Q.style, pe);
            }
            if (pe == "async" && T.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
              return L("async", "keyword", pe);
          }
          return L("variable", "variable", pe);
        }
      }
      function A(T) {
        return function (P, oe) {
          var pe = !1,
            Q;
          if (d && P.peek() == "@" && P.match(C))
            return (oe.tokenize = D), L("jsonld-keyword", "meta");
          for (; (Q = P.next()) != null && !(Q == T && !pe); ) pe = !pe && Q == "\\";
          return pe || (oe.tokenize = D), L("string", "string");
        };
      }
      function H(T, P) {
        for (var oe = !1, pe; (pe = T.next()); ) {
          if (pe == "/" && oe) {
            P.tokenize = D;
            break;
          }
          oe = pe == "*";
        }
        return L("comment", "comment");
      }
      function z(T, P) {
        for (var oe = !1, pe; (pe = T.next()) != null; ) {
          if (!oe && (pe == "`" || (pe == "$" && T.eat("{")))) {
            P.tokenize = D;
            break;
          }
          oe = !oe && pe == "\\";
        }
        return L("quasi", "string-2", T.current());
      }
      var J = "([{}])";
      function ie(T, P) {
        P.fatArrowAt && (P.fatArrowAt = null);
        var oe = T.string.indexOf("=>", T.start);
        if (!(oe < 0)) {
          if (v) {
            var pe = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(T.string.slice(T.start, oe));
            pe && (oe = pe.index);
          }
          for (var Q = 0, _e = !1, ut = oe - 1; ut >= 0; --ut) {
            var Bt = T.string.charAt(ut),
              gn = J.indexOf(Bt);
            if (gn >= 0 && gn < 3) {
              if (!Q) {
                ++ut;
                break;
              }
              if (--Q == 0) {
                Bt == "(" && (_e = !0);
                break;
              }
            } else if (gn >= 3 && gn < 6) ++Q;
            else if (y.test(Bt)) _e = !0;
            else if (/["'\/`]/.test(Bt))
              for (; ; --ut) {
                if (ut == 0) return;
                var Ho = T.string.charAt(ut - 1);
                if (Ho == Bt && T.string.charAt(ut - 2) != "\\") {
                  ut--;
                  break;
                }
              }
            else if (_e && !Q) {
              ++ut;
              break;
            }
          }
          _e && !Q && (P.fatArrowAt = ut);
        }
      }
      var ne = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        "jsonld-keyword": !0,
      };
      function j(T, P, oe, pe, Q, _e) {
        (this.indented = T),
          (this.column = P),
          (this.type = oe),
          (this.prev = Q),
          (this.info = _e),
          pe != null && (this.align = pe);
      }
      function te(T, P) {
        if (!p) return !1;
        for (var oe = T.localVars; oe; oe = oe.next) if (oe.name == P) return !0;
        for (var pe = T.context; pe; pe = pe.prev)
          for (var oe = pe.vars; oe; oe = oe.next) if (oe.name == P) return !0;
      }
      function K(T, P, oe, pe, Q) {
        var _e = T.cc;
        for (
          V.state = T,
            V.stream = Q,
            V.marked = null,
            V.cc = _e,
            V.style = P,
            T.lexical.hasOwnProperty("align") || (T.lexical.align = !0);
          ;

        ) {
          var ut = _e.length ? _e.pop() : h ? Ce : de;
          if (ut(oe, pe)) {
            for (; _e.length && _e[_e.length - 1].lex; ) _e.pop()();
            return V.marked ? V.marked : oe == "variable" && te(T, pe) ? "variable-2" : P;
          }
        }
      }
      var V = { state: null, column: null, marked: null, cc: null };
      function I() {
        for (var T = arguments.length - 1; T >= 0; T--) V.cc.push(arguments[T]);
      }
      function k() {
        return I.apply(null, arguments), !0;
      }
      function q(T, P) {
        for (var oe = P; oe; oe = oe.next) if (oe.name == T) return !0;
        return !1;
      }
      function W(T) {
        var P = V.state;
        if (((V.marked = "def"), !!p)) {
          if (P.context) {
            if (P.lexical.info == "var" && P.context && P.context.block) {
              var oe = re(T, P.context);
              if (oe != null) {
                P.context = oe;
                return;
              }
            } else if (!q(T, P.localVars)) {
              P.localVars = new Be(T, P.localVars);
              return;
            }
          }
          s.globalVars && !q(T, P.globalVars) && (P.globalVars = new Be(T, P.globalVars));
        }
      }
      function re(T, P) {
        if (P)
          if (P.block) {
            var oe = re(T, P.prev);
            return oe ? (oe == P.prev ? P : new Me(oe, P.vars, !0)) : null;
          } else return q(T, P.vars) ? P : new Me(P.prev, new Be(T, P.vars), !1);
        else return null;
      }
      function me(T) {
        return (
          T == "public" || T == "private" || T == "protected" || T == "abstract" || T == "readonly"
        );
      }
      function Me(T, P, oe) {
        (this.prev = T), (this.vars = P), (this.block = oe);
      }
      function Be(T, P) {
        (this.name = T), (this.next = P);
      }
      var Ve = new Be("this", new Be("arguments", null));
      function it() {
        (V.state.context = new Me(V.state.context, V.state.localVars, !1)),
          (V.state.localVars = Ve);
      }
      function nt() {
        (V.state.context = new Me(V.state.context, V.state.localVars, !0)),
          (V.state.localVars = null);
      }
      it.lex = nt.lex = !0;
      function Ze() {
        (V.state.localVars = V.state.context.vars), (V.state.context = V.state.context.prev);
      }
      Ze.lex = !0;
      function Te(T, P) {
        var oe = function () {
          var pe = V.state,
            Q = pe.indented;
          if (pe.lexical.type == "stat") Q = pe.lexical.indented;
          else
            for (var _e = pe.lexical; _e && _e.type == ")" && _e.align; _e = _e.prev)
              Q = _e.indented;
          pe.lexical = new j(Q, V.stream.column(), T, null, pe.lexical, P);
        };
        return (oe.lex = !0), oe;
      }
      function X() {
        var T = V.state;
        T.lexical.prev &&
          (T.lexical.type == ")" && (T.indented = T.lexical.indented),
          (T.lexical = T.lexical.prev));
      }
      X.lex = !0;
      function ae(T) {
        function P(oe) {
          return oe == T ? k() : T == ";" || oe == "}" || oe == ")" || oe == "]" ? I() : k(P);
        }
        return P;
      }
      function de(T, P) {
        return T == "var"
          ? k(Te("vardef", P), Oo, ae(";"), X)
          : T == "keyword a"
            ? k(Te("form"), O, de, X)
            : T == "keyword b"
              ? k(Te("form"), de, X)
              : T == "keyword d"
                ? V.stream.match(/^\s*$/, !1)
                  ? k()
                  : k(Te("stat"), Z, ae(";"), X)
                : T == "debugger"
                  ? k(ae(";"))
                  : T == "{"
                    ? k(Te("}"), nt, Jt, X, Ze)
                    : T == ";"
                      ? k()
                      : T == "if"
                        ? (V.state.lexical.info == "else" &&
                            V.state.cc[V.state.cc.length - 1] == X &&
                            V.state.cc.pop()(),
                          k(Te("form"), O, de, X, Po))
                        : T == "function"
                          ? k(Gn)
                          : T == "for"
                            ? k(Te("form"), nt, ga, de, Ze, X)
                            : T == "class" || (v && P == "interface")
                              ? ((V.marked = "keyword"), k(Te("form", T == "class" ? T : P), Ro, X))
                              : T == "variable"
                                ? v && P == "declare"
                                  ? ((V.marked = "keyword"), k(de))
                                  : v &&
                                      (P == "module" || P == "enum" || P == "type") &&
                                      V.stream.match(/^\s*\w/, !1)
                                    ? ((V.marked = "keyword"),
                                      P == "enum"
                                        ? k(Oe)
                                        : P == "type"
                                          ? k(va, ae("operator"), Ue, ae(";"))
                                          : k(Te("form"), pn, ae("{"), Te("}"), Jt, X, X))
                                    : v && P == "namespace"
                                      ? ((V.marked = "keyword"), k(Te("form"), Ce, de, X))
                                      : v && P == "abstract"
                                        ? ((V.marked = "keyword"), k(de))
                                        : k(Te("stat"), De)
                                : T == "switch"
                                  ? k(Te("form"), O, ae("{"), Te("}", "switch"), nt, Jt, X, X, Ze)
                                  : T == "case"
                                    ? k(Ce, ae(":"))
                                    : T == "default"
                                      ? k(ae(":"))
                                      : T == "catch"
                                        ? k(Te("form"), it, Ne, de, X, Ze)
                                        : T == "export"
                                          ? k(Te("stat"), Do, X)
                                          : T == "import"
                                            ? k(Te("stat"), pi, X)
                                            : T == "async"
                                              ? k(de)
                                              : P == "@"
                                                ? k(Ce, de)
                                                : I(Te("stat"), Ce, ae(";"), X);
      }
      function Ne(T) {
        if (T == "(") return k(lr, ae(")"));
      }
      function Ce(T, P) {
        return F(T, P, !1);
      }
      function Ye(T, P) {
        return F(T, P, !0);
      }
      function O(T) {
        return T != "(" ? I() : k(Te(")"), Z, ae(")"), X);
      }
      function F(T, P, oe) {
        if (V.state.fatArrowAt == V.stream.start) {
          var pe = oe ? ye : ue;
          if (T == "(") return k(it, Te(")"), tt(lr, ")"), X, ae("=>"), pe, Ze);
          if (T == "variable") return I(it, pn, ae("=>"), pe, Ze);
        }
        var Q = oe ? se : ce;
        return ne.hasOwnProperty(T)
          ? k(Q)
          : T == "function"
            ? k(Gn, Q)
            : T == "class" || (v && P == "interface")
              ? ((V.marked = "keyword"), k(Te("form"), Bu, X))
              : T == "keyword c" || T == "async"
                ? k(oe ? Ye : Ce)
                : T == "("
                  ? k(Te(")"), Z, ae(")"), X, Q)
                  : T == "operator" || T == "spread"
                    ? k(oe ? Ye : Ce)
                    : T == "["
                      ? k(Te("]"), At, X, Q)
                      : T == "{"
                        ? Ft(Ge, "}", null, Q)
                        : T == "quasi"
                          ? I(ve, Q)
                          : T == "new"
                            ? k(he(oe))
                            : k();
      }
      function Z(T) {
        return T.match(/[;\}\)\],]/) ? I() : I(Ce);
      }
      function ce(T, P) {
        return T == "," ? k(Z) : se(T, P, !1);
      }
      function se(T, P, oe) {
        var pe = oe == !1 ? ce : se,
          Q = oe == !1 ? Ce : Ye;
        if (T == "=>") return k(it, oe ? ye : ue, Ze);
        if (T == "operator")
          return /\+\+|--/.test(P) || (v && P == "!")
            ? k(pe)
            : v && P == "<" && V.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? k(Te(">"), tt(Ue, ">"), X, pe)
              : P == "?"
                ? k(Ce, ae(":"), Q)
                : k(Q);
        if (T == "quasi") return I(ve, pe);
        if (T != ";") {
          if (T == "(") return Ft(Ye, ")", "call", pe);
          if (T == ".") return k(We, pe);
          if (T == "[") return k(Te("]"), Z, ae("]"), X, pe);
          if (v && P == "as") return (V.marked = "keyword"), k(Ue, pe);
          if (T == "regexp")
            return (
              (V.state.lastType = V.marked = "operator"),
              V.stream.backUp(V.stream.pos - V.stream.start - 1),
              k(Q)
            );
        }
      }
      function ve(T, P) {
        return T != "quasi" ? I() : P.slice(P.length - 2) != "${" ? k(ve) : k(Z, Se);
      }
      function Se(T) {
        if (T == "}") return (V.marked = "string-2"), (V.state.tokenize = z), k(ve);
      }
      function ue(T) {
        return ie(V.stream, V.state), I(T == "{" ? de : Ce);
      }
      function ye(T) {
        return ie(V.stream, V.state), I(T == "{" ? de : Ye);
      }
      function he(T) {
        return function (P) {
          return P == "."
            ? k(T ? Ie : Ae)
            : P == "variable" && v
              ? k(En, T ? se : ce)
              : I(T ? Ye : Ce);
        };
      }
      function Ae(T, P) {
        if (P == "target") return (V.marked = "keyword"), k(ce);
      }
      function Ie(T, P) {
        if (P == "target") return (V.marked = "keyword"), k(se);
      }
      function De(T) {
        return T == ":" ? k(X, de) : I(ce, ae(";"), X);
      }
      function We(T) {
        if (T == "variable") return (V.marked = "property"), k();
      }
      function Ge(T, P) {
        if (T == "async") return (V.marked = "property"), k(Ge);
        if (T == "variable" || V.style == "keyword") {
          if (((V.marked = "property"), P == "get" || P == "set")) return k(vt);
          var oe;
          return (
            v &&
              V.state.fatArrowAt == V.stream.start &&
              (oe = V.stream.match(/^\s*:\s*/, !1)) &&
              (V.state.fatArrowAt = V.stream.pos + oe[0].length),
            k(et)
          );
        } else {
          if (T == "number" || T == "string")
            return (V.marked = d ? "property" : V.style + " property"), k(et);
          if (T == "jsonld-keyword") return k(et);
          if (v && me(P)) return (V.marked = "keyword"), k(Ge);
          if (T == "[") return k(Ce, rr, ae("]"), et);
          if (T == "spread") return k(Ye, et);
          if (P == "*") return (V.marked = "keyword"), k(Ge);
          if (T == ":") return I(et);
        }
      }
      function vt(T) {
        return T != "variable" ? I(et) : ((V.marked = "property"), k(Gn));
      }
      function et(T) {
        if (T == ":") return k(Ye);
        if (T == "(") return I(Gn);
      }
      function tt(T, P, oe) {
        function pe(Q, _e) {
          if (oe ? oe.indexOf(Q) > -1 : Q == ",") {
            var ut = V.state.lexical;
            return (
              ut.info == "call" && (ut.pos = (ut.pos || 0) + 1),
              k(function (Bt, gn) {
                return Bt == P || gn == P ? I() : I(T);
              }, pe)
            );
          }
          return Q == P || _e == P ? k() : oe && oe.indexOf(";") > -1 ? I(T) : k(ae(P));
        }
        return function (Q, _e) {
          return Q == P || _e == P ? k() : I(T, pe);
        };
      }
      function Ft(T, P, oe) {
        for (var pe = 3; pe < arguments.length; pe++) V.cc.push(arguments[pe]);
        return k(Te(P, oe), tt(T, P), X);
      }
      function Jt(T) {
        return T == "}" ? k() : I(de, Jt);
      }
      function rr(T, P) {
        if (v) {
          if (T == ":") return k(Ue);
          if (P == "?") return k(rr);
        }
      }
      function zn(T, P) {
        if (v && (T == ":" || P == "in")) return k(Ue);
      }
      function ir(T) {
        if (v && T == ":") return V.stream.match(/^\s*\w+\s+is\b/, !1) ? k(Ce, Qt, Ue) : k(Ue);
      }
      function Qt(T, P) {
        if (P == "is") return (V.marked = "keyword"), k();
      }
      function Ue(T, P) {
        if (P == "keyof" || P == "typeof" || P == "infer" || P == "readonly")
          return (V.marked = "keyword"), k(P == "typeof" ? Ye : Ue);
        if (T == "variable" || P == "void") return (V.marked = "type"), k(jn);
        if (P == "|" || P == "&") return k(Ue);
        if (T == "string" || T == "number" || T == "atom") return k(jn);
        if (T == "[") return k(Te("]"), tt(Ue, "]", ","), X, jn);
        if (T == "{") return k(Te("}"), Fe, X, jn);
        if (T == "(") return k(tt(Lt, ")"), no, jn);
        if (T == "<") return k(tt(Ue, ">"), Ue);
        if (T == "quasi") return I(en, jn);
      }
      function no(T) {
        if (T == "=>") return k(Ue);
      }
      function Fe(T) {
        return T.match(/[\}\)\]]/) ? k() : T == "," || T == ";" ? k(Fe) : I(qr, Fe);
      }
      function qr(T, P) {
        if (T == "variable" || V.style == "keyword") return (V.marked = "property"), k(qr);
        if (P == "?" || T == "number" || T == "string") return k(qr);
        if (T == ":") return k(Ue);
        if (T == "[") return k(ae("variable"), zn, ae("]"), qr);
        if (T == "(") return I(hi, qr);
        if (!T.match(/[;\}\)\],]/)) return k();
      }
      function en(T, P) {
        return T != "quasi" ? I() : P.slice(P.length - 2) != "${" ? k(en) : k(Ue, Et);
      }
      function Et(T) {
        if (T == "}") return (V.marked = "string-2"), (V.state.tokenize = z), k(en);
      }
      function Lt(T, P) {
        return (T == "variable" && V.stream.match(/^\s*[?:]/, !1)) || P == "?"
          ? k(Lt)
          : T == ":"
            ? k(Ue)
            : T == "spread"
              ? k(Lt)
              : I(Ue);
      }
      function jn(T, P) {
        if (P == "<") return k(Te(">"), tt(Ue, ">"), X, jn);
        if (P == "|" || T == "." || P == "&") return k(Ue);
        if (T == "[") return k(Ue, ae("]"), jn);
        if (P == "extends" || P == "implements") return (V.marked = "keyword"), k(Ue);
        if (P == "?") return k(Ue, ae(":"), Ue);
      }
      function En(T, P) {
        if (P == "<") return k(Te(">"), tt(Ue, ">"), X, jn);
      }
      function or() {
        return I(Ue, tn);
      }
      function tn(T, P) {
        if (P == "=") return k(Ue);
      }
      function Oo(T, P) {
        return P == "enum" ? ((V.marked = "keyword"), k(Oe)) : I(pn, rr, sr, qu);
      }
      function pn(T, P) {
        if (v && me(P)) return (V.marked = "keyword"), k(pn);
        if (T == "variable") return W(P), k();
        if (T == "spread") return k(pn);
        if (T == "[") return Ft($s, "]");
        if (T == "{") return Ft(fi, "}");
      }
      function fi(T, P) {
        return T == "variable" && !V.stream.match(/^\s*:/, !1)
          ? (W(P), k(sr))
          : (T == "variable" && (V.marked = "property"),
            T == "spread"
              ? k(pn)
              : T == "}"
                ? I()
                : T == "["
                  ? k(Ce, ae("]"), ae(":"), fi)
                  : k(ae(":"), pn, sr));
      }
      function $s() {
        return I(pn, sr);
      }
      function sr(T, P) {
        if (P == "=") return k(Ye);
      }
      function qu(T) {
        if (T == ",") return k(Oo);
      }
      function Po(T, P) {
        if (T == "keyword b" && P == "else") return k(Te("form", "else"), de, X);
      }
      function ga(T, P) {
        if (P == "await") return k(ga);
        if (T == "(") return k(Te(")"), Os, X);
      }
      function Os(T) {
        return T == "var" ? k(Oo, di) : T == "variable" ? k(di) : I(di);
      }
      function di(T, P) {
        return T == ")"
          ? k()
          : T == ";"
            ? k(di)
            : P == "in" || P == "of"
              ? ((V.marked = "keyword"), k(Ce, di))
              : I(Ce, di);
      }
      function Gn(T, P) {
        if (P == "*") return (V.marked = "keyword"), k(Gn);
        if (T == "variable") return W(P), k(Gn);
        if (T == "(") return k(it, Te(")"), tt(lr, ")"), X, ir, de, Ze);
        if (v && P == "<") return k(Te(">"), tt(or, ">"), X, Gn);
      }
      function hi(T, P) {
        if (P == "*") return (V.marked = "keyword"), k(hi);
        if (T == "variable") return W(P), k(hi);
        if (T == "(") return k(it, Te(")"), tt(lr, ")"), X, ir, Ze);
        if (v && P == "<") return k(Te(">"), tt(or, ">"), X, hi);
      }
      function va(T, P) {
        if (T == "keyword" || T == "variable") return (V.marked = "type"), k(va);
        if (P == "<") return k(Te(">"), tt(or, ">"), X);
      }
      function lr(T, P) {
        return (
          P == "@" && k(Ce, lr),
          T == "spread"
            ? k(lr)
            : v && me(P)
              ? ((V.marked = "keyword"), k(lr))
              : v && T == "this"
                ? k(rr, sr)
                : I(pn, rr, sr)
        );
      }
      function Bu(T, P) {
        return T == "variable" ? Ro(T, P) : ar(T, P);
      }
      function Ro(T, P) {
        if (T == "variable") return W(P), k(ar);
      }
      function ar(T, P) {
        if (P == "<") return k(Te(">"), tt(or, ">"), X, ar);
        if (P == "extends" || P == "implements" || (v && T == ","))
          return P == "implements" && (V.marked = "keyword"), k(v ? Ue : Ce, ar);
        if (T == "{") return k(Te("}"), cr, X);
      }
      function cr(T, P) {
        if (
          T == "async" ||
          (T == "variable" &&
            (P == "static" || P == "get" || P == "set" || (v && me(P))) &&
            V.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
        )
          return (V.marked = "keyword"), k(cr);
        if (T == "variable" || V.style == "keyword") return (V.marked = "property"), k(ro, cr);
        if (T == "number" || T == "string") return k(ro, cr);
        if (T == "[") return k(Ce, rr, ae("]"), ro, cr);
        if (P == "*") return (V.marked = "keyword"), k(cr);
        if (v && T == "(") return I(hi, cr);
        if (T == ";" || T == ",") return k(cr);
        if (T == "}") return k();
        if (P == "@") return k(Ce, cr);
      }
      function ro(T, P) {
        if (P == "!" || P == "?") return k(ro);
        if (T == ":") return k(Ue, sr);
        if (P == "=") return k(Ye);
        var oe = V.state.lexical.prev,
          pe = oe && oe.info == "interface";
        return I(pe ? hi : Gn);
      }
      function Do(T, P) {
        return P == "*"
          ? ((V.marked = "keyword"), k(Fo, ae(";")))
          : P == "default"
            ? ((V.marked = "keyword"), k(Ce, ae(";")))
            : T == "{"
              ? k(tt(zo, "}"), Fo, ae(";"))
              : I(de);
      }
      function zo(T, P) {
        if (P == "as") return (V.marked = "keyword"), k(ae("variable"));
        if (T == "variable") return I(Ye, zo);
      }
      function pi(T) {
        return T == "string" ? k() : T == "(" ? I(Ce) : T == "." ? I(ce) : I(Io, kr, Fo);
      }
      function Io(T, P) {
        return T == "{"
          ? Ft(Io, "}")
          : (T == "variable" && W(P), P == "*" && (V.marked = "keyword"), k(Ps));
      }
      function kr(T) {
        if (T == ",") return k(Io, kr);
      }
      function Ps(T, P) {
        if (P == "as") return (V.marked = "keyword"), k(Io);
      }
      function Fo(T, P) {
        if (P == "from") return (V.marked = "keyword"), k(Ce);
      }
      function At(T) {
        return T == "]" ? k() : I(tt(Ye, "]"));
      }
      function Oe() {
        return I(Te("form"), pn, ae("{"), Te("}"), tt(Br, "}"), X, X);
      }
      function Br() {
        return I(pn, sr);
      }
      function Rs(T, P) {
        return (
          T.lastType == "operator" ||
          T.lastType == "," ||
          x.test(P.charAt(0)) ||
          /[,.]/.test(P.charAt(0))
        );
      }
      function In(T, P, oe) {
        return (
          (P.tokenize == D &&
            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
              P.lastType,
            )) ||
          (P.lastType == "quasi" && /\{\s*$/.test(T.string.slice(0, T.pos - (oe || 0))))
        );
      }
      return {
        startState: function (T) {
          var P = {
            tokenize: D,
            lastType: "sof",
            cc: [],
            lexical: new j((T || 0) - c, 0, "block", !1),
            localVars: s.localVars,
            context: s.localVars && new Me(null, null, !1),
            indented: T || 0,
          };
          return (
            s.globalVars && typeof s.globalVars == "object" && (P.globalVars = s.globalVars), P
          );
        },
        token: function (T, P) {
          if (
            (T.sol() &&
              (P.lexical.hasOwnProperty("align") || (P.lexical.align = !1),
              (P.indented = T.indentation()),
              ie(T, P)),
            P.tokenize != H && T.eatSpace())
          )
            return null;
          var oe = P.tokenize(T, P);
          return N == "comment"
            ? oe
            : ((P.lastType = N == "operator" && (M == "++" || M == "--") ? "incdec" : N),
              K(P, oe, N, M, T));
        },
        indent: function (T, P) {
          if (T.tokenize == H || T.tokenize == z) return r.Pass;
          if (T.tokenize != D) return 0;
          var oe = P && P.charAt(0),
            pe = T.lexical,
            Q;
          if (!/^\s*else\b/.test(P))
            for (var _e = T.cc.length - 1; _e >= 0; --_e) {
              var ut = T.cc[_e];
              if (ut == X) pe = pe.prev;
              else if (ut != Po && ut != Ze) break;
            }
          for (
            ;
            (pe.type == "stat" || pe.type == "form") &&
            (oe == "}" ||
              ((Q = T.cc[T.cc.length - 1]) && (Q == ce || Q == se) && !/^[,\.=+\-*:?[\(]/.test(P)));

          )
            pe = pe.prev;
          f && pe.type == ")" && pe.prev.type == "stat" && (pe = pe.prev);
          var Bt = pe.type,
            gn = oe == Bt;
          return Bt == "vardef"
            ? pe.indented + (T.lastType == "operator" || T.lastType == "," ? pe.info.length + 1 : 0)
            : Bt == "form" && oe == "{"
              ? pe.indented
              : Bt == "form"
                ? pe.indented + c
                : Bt == "stat"
                  ? pe.indented + (Rs(T, P) ? f || c : 0)
                  : pe.info == "switch" && !gn && s.doubleIndentSwitch != !1
                    ? pe.indented + (/^(?:case|default)\b/.test(P) ? c : 2 * c)
                    : pe.align
                      ? pe.column + (gn ? 0 : 1)
                      : pe.indented + (gn ? 0 : c);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: h ? null : "/*",
        blockCommentEnd: h ? null : "*/",
        blockCommentContinue: h ? null : " * ",
        lineComment: h ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: h ? "json" : "javascript",
        jsonldMode: d,
        jsonMode: h,
        expressionAllowed: In,
        skipExpression: function (T) {
          K(T, "atom", "atom", "true", new r.StringStream("", 2, null));
        },
      };
    }),
      r.registerHelper("wordChars", "javascript", /[\w$]/),
      r.defineMIME("text/javascript", "javascript"),
      r.defineMIME("text/ecmascript", "javascript"),
      r.defineMIME("application/javascript", "javascript"),
      r.defineMIME("application/x-javascript", "javascript"),
      r.defineMIME("application/ecmascript", "javascript"),
      r.defineMIME("application/json", { name: "javascript", json: !0 }),
      r.defineMIME("application/x-json", { name: "javascript", json: !0 }),
      r.defineMIME("application/manifest+json", { name: "javascript", json: !0 }),
      r.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
      r.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
      r.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
  });
})();
var Kue = Gue.exports,
  Xue = { exports: {} };
(function (e, t) {
  (function (r) {
    r(Ns);
  })(function (r) {
    var o = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 },
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0,
      },
      s = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1,
      };
    r.defineMode("xml", function (c, f) {
      var d = c.indentUnit,
        h = {},
        p = f.htmlMode ? o : s;
      for (var v in p) h[v] = p[v];
      for (var v in f) h[v] = f[v];
      var y, b;
      function x(k, q) {
        function W(Me) {
          return (q.tokenize = Me), Me(k, q);
        }
        var re = k.next();
        if (re == "<")
          return k.eat("!")
            ? k.eat("[")
              ? k.match("CDATA[")
                ? W(N("atom", "]]>"))
                : null
              : k.match("--")
                ? W(N("comment", "-->"))
                : k.match("DOCTYPE", !0, !0)
                  ? (k.eatWhile(/[\w\._\-]/), W(M(1)))
                  : null
            : k.eat("?")
              ? (k.eatWhile(/[\w\._\-]/), (q.tokenize = N("meta", "?>")), "meta")
              : ((y = k.eat("/") ? "closeTag" : "openTag"), (q.tokenize = C), "tag bracket");
        if (re == "&") {
          var me;
          return (
            k.eat("#")
              ? k.eat("x")
                ? (me = k.eatWhile(/[a-fA-F\d]/) && k.eat(";"))
                : (me = k.eatWhile(/[\d]/) && k.eat(";"))
              : (me = k.eatWhile(/[\w\.\-:]/) && k.eat(";")),
            me ? "atom" : "error"
          );
        } else return k.eatWhile(/[^&<]/), null;
      }
      x.isInText = !0;
      function C(k, q) {
        var W = k.next();
        if (W == ">" || (W == "/" && k.eat(">")))
          return (q.tokenize = x), (y = W == ">" ? "endTag" : "selfcloseTag"), "tag bracket";
        if (W == "=") return (y = "equals"), null;
        if (W == "<") {
          (q.tokenize = x), (q.state = z), (q.tagName = q.tagStart = null);
          var re = q.tokenize(k, q);
          return re ? re + " tag error" : "tag error";
        } else
          return /[\'\"]/.test(W)
            ? ((q.tokenize = E(W)), (q.stringStartCol = k.column()), q.tokenize(k, q))
            : (k.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
      }
      function E(k) {
        var q = function (W, re) {
          for (; !W.eol(); )
            if (W.next() == k) {
              re.tokenize = C;
              break;
            }
          return "string";
        };
        return (q.isInAttribute = !0), q;
      }
      function N(k, q) {
        return function (W, re) {
          for (; !W.eol(); ) {
            if (W.match(q)) {
              re.tokenize = x;
              break;
            }
            W.next();
          }
          return k;
        };
      }
      function M(k) {
        return function (q, W) {
          for (var re; (re = q.next()) != null; ) {
            if (re == "<") return (W.tokenize = M(k + 1)), W.tokenize(q, W);
            if (re == ">")
              if (k == 1) {
                W.tokenize = x;
                break;
              } else return (W.tokenize = M(k - 1)), W.tokenize(q, W);
          }
          return "meta";
        };
      }
      function L(k) {
        return k && k.toLowerCase();
      }
      function D(k, q, W) {
        (this.prev = k.context),
          (this.tagName = q || ""),
          (this.indent = k.indented),
          (this.startOfLine = W),
          (h.doNotIndent.hasOwnProperty(q) || (k.context && k.context.noIndent)) &&
            (this.noIndent = !0);
      }
      function A(k) {
        k.context && (k.context = k.context.prev);
      }
      function H(k, q) {
        for (var W; ; ) {
          if (
            !k.context ||
            ((W = k.context.tagName),
            !h.contextGrabbers.hasOwnProperty(L(W)) ||
              !h.contextGrabbers[L(W)].hasOwnProperty(L(q)))
          )
            return;
          A(k);
        }
      }
      function z(k, q, W) {
        return k == "openTag" ? ((W.tagStart = q.column()), J) : k == "closeTag" ? ie : z;
      }
      function J(k, q, W) {
        return k == "word"
          ? ((W.tagName = q.current()), (b = "tag"), te)
          : h.allowMissingTagName && k == "endTag"
            ? ((b = "tag bracket"), te(k, q, W))
            : ((b = "error"), J);
      }
      function ie(k, q, W) {
        if (k == "word") {
          var re = q.current();
          return (
            W.context &&
              W.context.tagName != re &&
              h.implicitlyClosed.hasOwnProperty(L(W.context.tagName)) &&
              A(W),
            (W.context && W.context.tagName == re) || h.matchClosing === !1
              ? ((b = "tag"), ne)
              : ((b = "tag error"), j)
          );
        } else
          return h.allowMissingTagName && k == "endTag"
            ? ((b = "tag bracket"), ne(k, q, W))
            : ((b = "error"), j);
      }
      function ne(k, q, W) {
        return k != "endTag" ? ((b = "error"), ne) : (A(W), z);
      }
      function j(k, q, W) {
        return (b = "error"), ne(k, q, W);
      }
      function te(k, q, W) {
        if (k == "word") return (b = "attribute"), K;
        if (k == "endTag" || k == "selfcloseTag") {
          var re = W.tagName,
            me = W.tagStart;
          return (
            (W.tagName = W.tagStart = null),
            k == "selfcloseTag" || h.autoSelfClosers.hasOwnProperty(L(re))
              ? H(W, re)
              : (H(W, re), (W.context = new D(W, re, me == W.indented))),
            z
          );
        }
        return (b = "error"), te;
      }
      function K(k, q, W) {
        return k == "equals" ? V : (h.allowMissing || (b = "error"), te(k, q, W));
      }
      function V(k, q, W) {
        return k == "string"
          ? I
          : k == "word" && h.allowUnquoted
            ? ((b = "string"), te)
            : ((b = "error"), te(k, q, W));
      }
      function I(k, q, W) {
        return k == "string" ? I : te(k, q, W);
      }
      return {
        startState: function (k) {
          var q = {
            tokenize: x,
            state: z,
            indented: k || 0,
            tagName: null,
            tagStart: null,
            context: null,
          };
          return k != null && (q.baseIndent = k), q;
        },
        token: function (k, q) {
          if ((!q.tagName && k.sol() && (q.indented = k.indentation()), k.eatSpace())) return null;
          y = null;
          var W = q.tokenize(k, q);
          return (
            (W || y) &&
              W != "comment" &&
              ((b = null),
              (q.state = q.state(y || W, k, q)),
              b && (W = b == "error" ? W + " error" : b)),
            W
          );
        },
        indent: function (k, q, W) {
          var re = k.context;
          if (k.tokenize.isInAttribute)
            return k.tagStart == k.indented ? k.stringStartCol + 1 : k.indented + d;
          if (re && re.noIndent) return r.Pass;
          if (k.tokenize != C && k.tokenize != x) return W ? W.match(/^(\s*)/)[0].length : 0;
          if (k.tagName)
            return h.multilineTagIndentPastTag !== !1
              ? k.tagStart + k.tagName.length + 2
              : k.tagStart + d * (h.multilineTagIndentFactor || 1);
          if (h.alignCDATA && /<!\[CDATA\[/.test(q)) return 0;
          var me = q && /^<(\/)?([\w_:\.-]*)/.exec(q);
          if (me && me[1])
            for (; re; )
              if (re.tagName == me[2]) {
                re = re.prev;
                break;
              } else if (h.implicitlyClosed.hasOwnProperty(L(re.tagName))) re = re.prev;
              else break;
          else if (me)
            for (; re; ) {
              var Me = h.contextGrabbers[L(re.tagName)];
              if (Me && Me.hasOwnProperty(L(me[2]))) re = re.prev;
              else break;
            }
          for (; re && re.prev && !re.startOfLine; ) re = re.prev;
          return re ? re.indent + d : k.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "<!--",
        blockCommentEnd: "-->",
        configuration: h.htmlMode ? "html" : "xml",
        helperType: h.htmlMode ? "html" : "xml",
        skipAttribute: function (k) {
          k.state == V && (k.state = te);
        },
        xmlCurrentTag: function (k) {
          return k.tagName ? { name: k.tagName, close: k.type == "closeTag" } : null;
        },
        xmlCurrentContext: function (k) {
          for (var q = [], W = k.context; W; W = W.prev) q.push(W.tagName);
          return q.reverse();
        },
      };
    }),
      r.defineMIME("text/xml", "xml"),
      r.defineMIME("application/xml", "xml"),
      r.mimeModes.hasOwnProperty("text/html") ||
        r.defineMIME("text/html", { name: "xml", htmlMode: !0 });
  });
})();
var Yue = Xue.exports;
(function (e, t) {
  (function (r) {
    r(Ns, Yue, Kue);
  })(function (r) {
    function o(c, f, d, h) {
      (this.state = c), (this.mode = f), (this.depth = d), (this.prev = h);
    }
    function s(c) {
      return new o(r.copyState(c.mode, c.state), c.mode, c.depth, c.prev && s(c.prev));
    }
    r.defineMode(
      "jsx",
      function (c, f) {
        var d = r.getMode(c, {
            name: "xml",
            allowMissing: !0,
            multilineTagIndentPastTag: !1,
            allowMissingTagName: !0,
          }),
          h = r.getMode(c, (f && f.base) || "javascript");
        function p(x) {
          var C = x.tagName;
          x.tagName = null;
          var E = d.indent(x, "", "");
          return (x.tagName = C), E;
        }
        function v(x, C) {
          return C.context.mode == d ? y(x, C, C.context) : b(x, C, C.context);
        }
        function y(x, C, E) {
          if (E.depth == 2) return x.match(/^.*?\*\//) ? (E.depth = 1) : x.skipToEnd(), "comment";
          if (x.peek() == "{") {
            d.skipAttribute(E.state);
            var N = p(E.state),
              M = E.state.context;
            if (M && x.match(/^[^>]*>\s*$/, !1)) {
              for (; M.prev && !M.startOfLine; ) M = M.prev;
              M.startOfLine
                ? (N -= c.indentUnit)
                : E.prev.state.lexical && (N = E.prev.state.lexical.indented);
            } else E.depth == 1 && (N += c.indentUnit);
            return (C.context = new o(r.startState(h, N), h, 0, C.context)), null;
          }
          if (E.depth == 1) {
            if (x.peek() == "<")
              return (
                d.skipAttribute(E.state),
                (C.context = new o(r.startState(d, p(E.state)), d, 0, C.context)),
                null
              );
            if (x.match("//")) return x.skipToEnd(), "comment";
            if (x.match("/*")) return (E.depth = 2), v(x, C);
          }
          var L = d.token(x, E.state),
            D = x.current(),
            A;
          return (
            /\btag\b/.test(L)
              ? />$/.test(D)
                ? E.state.context
                  ? (E.depth = 0)
                  : (C.context = C.context.prev)
                : /^</.test(D) && (E.depth = 1)
              : !L && (A = D.indexOf("{")) > -1 && x.backUp(D.length - A),
            L
          );
        }
        function b(x, C, E) {
          if (
            x.peek() == "<" &&
            !x.match(/^<([^<>]|<[^>]*>)+,\s*>/, !1) &&
            h.expressionAllowed(x, E.state)
          )
            return (
              (C.context = new o(r.startState(d, h.indent(E.state, "", "")), d, 0, C.context)),
              h.skipExpression(E.state),
              null
            );
          var N = h.token(x, E.state);
          if (!N && E.depth != null) {
            var M = x.current();
            M == "{" ? E.depth++ : M == "}" && --E.depth == 0 && (C.context = C.context.prev);
          }
          return N;
        }
        return {
          startState: function () {
            return { context: new o(r.startState(h), h) };
          },
          copyState: function (x) {
            return { context: s(x.context) };
          },
          token: v,
          indent: function (x, C, E) {
            return x.context.mode.indent(x.context.state, C, E);
          },
          innerMode: function (x) {
            return x.context;
          },
        };
      },
      "xml",
      "javascript",
    ),
      r.defineMIME("text/jsx", "jsx"),
      r.defineMIME("text/typescript-jsx", {
        name: "jsx",
        base: { name: "javascript", typescript: !0 },
      });
  });
})();
(function (e, t) {
  (function (r) {
    r(Ns);
  })(function (r) {
    r.defineOption("placeholder", "", function (p, v, y) {
      var b = y && y != r.Init;
      if (v && !b)
        p.on("blur", f),
          p.on("change", d),
          p.on("swapDoc", d),
          r.on(
            p.getInputField(),
            "compositionupdate",
            (p.state.placeholderCompose = function () {
              c(p);
            }),
          ),
          d(p);
      else if (!v && b) {
        p.off("blur", f),
          p.off("change", d),
          p.off("swapDoc", d),
          r.off(p.getInputField(), "compositionupdate", p.state.placeholderCompose),
          o(p);
        var x = p.getWrapperElement();
        x.className = x.className.replace(" CodeMirror-empty", "");
      }
      v && !p.hasFocus() && f(p);
    });
    function o(p) {
      p.state.placeholder &&
        (p.state.placeholder.parentNode.removeChild(p.state.placeholder),
        (p.state.placeholder = null));
    }
    function s(p) {
      o(p);
      var v = (p.state.placeholder = document.createElement("pre"));
      (v.style.cssText = "height: 0; overflow: visible"),
        (v.style.direction = p.getOption("direction")),
        (v.className = "CodeMirror-placeholder CodeMirror-line-like");
      var y = p.getOption("placeholder");
      typeof y == "string" && (y = document.createTextNode(y)),
        v.appendChild(y),
        p.display.lineSpace.insertBefore(v, p.display.lineSpace.firstChild);
    }
    function c(p) {
      setTimeout(function () {
        var v = !1;
        if (p.lineCount() == 1) {
          var y = p.getInputField();
          v =
            y.nodeName == "TEXTAREA"
              ? !p.getLine(0).length
              : !/[^\u200b]/.test(y.querySelector(".CodeMirror-line").textContent);
        }
        v ? s(p) : o(p);
      }, 20);
    }
    function f(p) {
      h(p) && s(p);
    }
    function d(p) {
      var v = p.getWrapperElement(),
        y = h(p);
      (v.className = v.className.replace(" CodeMirror-empty", "") + (y ? " CodeMirror-empty" : "")),
        y ? s(p) : o(p);
    }
    function h(p) {
      return p.lineCount() === 1 && p.getLine(0) === "";
    }
  });
})();
(function (e, t) {
  (function (r) {
    r(Ns);
  })(function (r) {
    function o(f, d, h) {
      (this.orientation = d),
        (this.scroll = h),
        (this.screen = this.total = this.size = 1),
        (this.pos = 0),
        (this.node = document.createElement("div")),
        (this.node.className = f + "-" + d),
        (this.inner = this.node.appendChild(document.createElement("div")));
      var p = this;
      r.on(this.inner, "mousedown", function (y) {
        if (y.which != 1) return;
        r.e_preventDefault(y);
        var b = p.orientation == "horizontal" ? "pageX" : "pageY",
          x = y[b],
          C = p.pos;
        function E() {
          r.off(document, "mousemove", N), r.off(document, "mouseup", E);
        }
        function N(M) {
          if (M.which != 1) return E();
          p.moveTo(C + (M[b] - x) * (p.total / p.size));
        }
        r.on(document, "mousemove", N), r.on(document, "mouseup", E);
      }),
        r.on(this.node, "click", function (y) {
          r.e_preventDefault(y);
          var b = p.inner.getBoundingClientRect(),
            x;
          p.orientation == "horizontal"
            ? (x = y.clientX < b.left ? -1 : y.clientX > b.right ? 1 : 0)
            : (x = y.clientY < b.top ? -1 : y.clientY > b.bottom ? 1 : 0),
            p.moveTo(p.pos + x * p.screen);
        });
      function v(y) {
        var b = r.wheelEventPixels(y)[p.orientation == "horizontal" ? "x" : "y"],
          x = p.pos;
        p.moveTo(p.pos + b), p.pos != x && r.e_preventDefault(y);
      }
      r.on(this.node, "mousewheel", v), r.on(this.node, "DOMMouseScroll", v);
    }
    (o.prototype.setPos = function (f, d) {
      return (
        f < 0 && (f = 0),
        f > this.total - this.screen && (f = this.total - this.screen),
        !d && f == this.pos
          ? !1
          : ((this.pos = f),
            (this.inner.style[this.orientation == "horizontal" ? "left" : "top"] =
              f * (this.size / this.total) + "px"),
            !0)
      );
    }),
      (o.prototype.moveTo = function (f) {
        this.setPos(f) && this.scroll(f, this.orientation);
      });
    var s = 10;
    o.prototype.update = function (f, d, h) {
      var p = this.screen != d || this.total != f || this.size != h;
      p && ((this.screen = d), (this.total = f), (this.size = h));
      var v = this.screen * (this.size / this.total);
      v < s && ((this.size -= s - v), (v = s)),
        (this.inner.style[this.orientation == "horizontal" ? "width" : "height"] = v + "px"),
        this.setPos(this.pos, p);
    };
    function c(f, d, h) {
      (this.addClass = f),
        (this.horiz = new o(f, "horizontal", h)),
        d(this.horiz.node),
        (this.vert = new o(f, "vertical", h)),
        d(this.vert.node),
        (this.width = null);
    }
    (c.prototype.update = function (f) {
      if (this.width == null) {
        var d = window.getComputedStyle
          ? window.getComputedStyle(this.horiz.node)
          : this.horiz.node.currentStyle;
        d && (this.width = parseInt(d.height));
      }
      var h = this.width || 0,
        p = f.scrollWidth > f.clientWidth + 1,
        v = f.scrollHeight > f.clientHeight + 1;
      return (
        (this.vert.node.style.display = v ? "block" : "none"),
        (this.horiz.node.style.display = p ? "block" : "none"),
        v &&
          (this.vert.update(f.scrollHeight, f.clientHeight, f.viewHeight - (p ? h : 0)),
          (this.vert.node.style.bottom = p ? h + "px" : "0")),
        p &&
          (this.horiz.update(f.scrollWidth, f.clientWidth, f.viewWidth - (v ? h : 0) - f.barLeft),
          (this.horiz.node.style.right = v ? h + "px" : "0"),
          (this.horiz.node.style.left = f.barLeft + "px")),
        { right: v ? h : 0, bottom: p ? h : 0 }
      );
    }),
      (c.prototype.setScrollTop = function (f) {
        this.vert.setPos(f);
      }),
      (c.prototype.setScrollLeft = function (f) {
        this.horiz.setPos(f);
      }),
      (c.prototype.clear = function () {
        var f = this.horiz.node.parentNode;
        f.removeChild(this.horiz.node), f.removeChild(this.vert.node);
      }),
      (r.scrollbarModel.simple = function (f, d) {
        return new c("CodeMirror-simplescroll", f, d);
      }),
      (r.scrollbarModel.overlay = function (f, d) {
        return new c("CodeMirror-overlayscroll", f, d);
      });
  });
})();
const Xn = Fr();
function Zue(e, t, r = {}) {
  const o = jue.fromTextArea(e.value, { theme: "vars", ...r, scrollbarStyle: "simple" });
  let s = !1;
  return (
    o.on("change", () => {
      if (s) {
        s = !1;
        return;
      }
      t.value = o.getValue();
    }),
    qt(
      t,
      (c) => {
        if (c !== o.getValue()) {
          s = !0;
          const f = o.listSelections();
          o.replaceRange(c, o.posFromIndex(0), o.posFromIndex(Number.POSITIVE_INFINITY)),
            o.setSelections(f);
        }
      },
      { immediate: !0 },
    ),
    yu(() => {
      Xn.value = void 0;
    }),
    ph(o)
  );
}
async function Jue(e) {
  var t;
  qw(e, ((t = e.location) == null ? void 0 : t.line) ?? 0);
}
const Que = { relative: "", "font-mono": "", "text-sm": "", class: "codemirror-scrolls" },
  Uw = gt({
    __name: "CodeMirrorContainer",
    props: Pc({ mode: {}, readOnly: { type: Boolean } }, { modelValue: {}, modelModifiers: {} }),
    emits: Pc(["save"], ["update:modelValue"]),
    setup(e, { emit: t }) {
      const r = t,
        o = Ch(e, "modelValue"),
        s = QS(),
        c = {
          js: "javascript",
          mjs: "javascript",
          cjs: "javascript",
          ts: { name: "javascript", typescript: !0 },
          mts: { name: "javascript", typescript: !0 },
          cts: { name: "javascript", typescript: !0 },
          jsx: { name: "javascript", jsx: !0 },
          tsx: { name: "javascript", typescript: !0, jsx: !0 },
        },
        f = je();
      return (
        Ms(async () => {
          const d = Zue(f, o, {
            ...s,
            mode: c[e.mode || ""] || e.mode,
            readOnly: e.readOnly ? !0 : void 0,
            extraKeys: {
              "Cmd-S": function (h) {
                r("save", h.getValue());
              },
              "Ctrl-S": function (h) {
                r("save", h.getValue());
              },
            },
          });
          d.setSize("100%", "100%"),
            d.clearHistory(),
            (Xn.value = d),
            setTimeout(() => Xn.value.refresh(), 100);
        }),
        (d, h) => (le(), be("div", Que, [Y("textarea", { ref_key: "el", ref: f }, null, 512)]))
      );
    },
  }),
  efe = gt({
    __name: "ViewEditor",
    props: { file: {} },
    emits: ["draft"],
    setup(e, { emit: t }) {
      const r = e,
        o = t,
        s = je(""),
        c = Fr(void 0),
        f = je(!1),
        d = je(!0);
      qt(
        () => r.file,
        async () => {
          var A;
          d.value = !0;
          try {
            if (!r.file || !((A = r.file) != null && A.filepath)) {
              (s.value = ""), (c.value = s.value), (f.value = !1);
              return;
            }
            (s.value = (await bt.rpc.readTestFile(r.file.filepath)) || ""),
              (c.value = s.value),
              (f.value = !1);
          } finally {
            ln(() => (d.value = !1));
          }
        },
        { immediate: !0 },
      ),
        qt(
          () => [d.value, r.file, Od.value],
          ([A, H, z]) => {
            A ||
              (z != null
                ? ln(() => {
                    var ie;
                    const J = { line: z ?? 0, ch: 0 };
                    (ie = Xn.value) == null || ie.scrollIntoView(J, 100),
                      ln(() => {
                        var ne, j;
                        (ne = Xn.value) == null || ne.focus(),
                          (j = Xn.value) == null || j.setCursor(J);
                      });
                  })
                : ln(() => {
                    var J;
                    (J = Xn.value) == null || J.focus();
                  }));
          },
          { flush: "post" },
        );
      const h = $e(() => {
          var A, H;
          return (
            ((H = (A = r.file) == null ? void 0 : A.filepath) == null
              ? void 0
              : H.split(/\./g).pop()) || "js"
          );
        }),
        p = je(),
        v = $e(() => {
          var A;
          return (A = p.value) == null ? void 0 : A.cm;
        }),
        y = $e(() => {
          var A;
          return (
            ((A = r.file) == null
              ? void 0
              : A.tasks.filter((H) => {
                  var z;
                  return ((z = H.result) == null ? void 0 : z.state) === "fail";
                })) || []
          );
        }),
        b = [],
        x = [],
        C = [],
        E = je(!1);
      function N() {
        C.forEach(([A, H, z]) => {
          A.removeEventListener("click", H), z();
        }),
          (C.length = 0);
      }
      Xb(p, () => {
        var A;
        (A = Xn.value) == null || A.refresh();
      });
      function M() {
        f.value = c.value !== Xn.value.getValue();
      }
      qt(
        f,
        (A) => {
          o("draft", A);
        },
        { immediate: !0 },
      );
      function L(A) {
        const H = ((A == null ? void 0 : A.stacks) || []).filter((te) => {
            var K;
            return te.file && te.file === ((K = r.file) == null ? void 0 : K.filepath);
          }),
          z = H == null ? void 0 : H[0];
        if (!z) return;
        const J = document.createElement("div");
        J.className = "op80 flex gap-x-2 items-center";
        const ie = document.createElement("pre");
        (ie.className = "c-red-600 dark:c-red-400"),
          (ie.textContent = `${" ".repeat(z.column)}^ ${(A == null ? void 0 : A.nameStr) || A.name}: ${(A == null ? void 0 : A.message) || ""}`),
          J.appendChild(ie);
        const ne = document.createElement("span");
        (ne.className =
          "i-carbon-launch c-red-600 dark:c-red-400 hover:cursor-pointer min-w-1em min-h-1em"),
          (ne.tabIndex = 0),
          (ne.ariaLabel = "Open in Editor"),
          Tb(ne, { content: "Open in Editor", placement: "bottom" }, !1);
        const j = async () => {
          await ww(z.file, z.line, z.column);
        };
        J.appendChild(ne),
          C.push([ne, j, () => Ph(ne)]),
          x.push(Xn.value.addLineClass(z.line - 1, "wrap", "bg-red-500/10")),
          b.push(Xn.value.addLineWidget(z.line - 1, J));
      }
      qt(
        [v, y],
        ([A]) => {
          if (!A) {
            N();
            return;
          }
          setTimeout(() => {
            N(),
              b.forEach((H) => H.clear()),
              x.forEach((H) => {
                var z;
                return (z = Xn.value) == null ? void 0 : z.removeLineClass(H, "wrap");
              }),
              (b.length = 0),
              (x.length = 0),
              A.on("changes", M),
              y.value.forEach((H) => {
                var z, J;
                (J = (z = H.result) == null ? void 0 : z.errors) == null || J.forEach(L);
              }),
              E.value || A.clearHistory();
          }, 100);
        },
        { flush: "post" },
      );
      async function D(A) {
        (E.value = !0),
          await bt.rpc.saveTestFile(r.file.filepath, A),
          (c.value = A),
          (f.value = !1);
      }
      return (A, H) => {
        const z = Uw;
        return (
          le(),
          ot(
            z,
            ii(
              {
                ref_key: "editor",
                ref: p,
                modelValue: B(s),
                "onUpdate:modelValue": H[0] || (H[0] = (J) => (It(s) ? (s.value = J) : null)),
                "h-full": "",
              },
              { lineNumbers: !0, readOnly: B(Pr) },
              { mode: B(h), "data-testid": "code-mirror", onSave: D },
            ),
            null,
            16,
            ["modelValue", "mode"],
          )
        );
      };
    },
  }),
  tfe = gt({
    __name: "Modal",
    props: Pc(
      { direction: { default: "bottom" } },
      { modelValue: { type: Boolean, default: !1 }, modelModifiers: {} },
    ),
    emits: ["update:modelValue"],
    setup(e) {
      const t = Ch(e, "modelValue"),
        r = $e(() => {
          switch (e.direction) {
            case "bottom":
              return "bottom-0 left-0 right-0 border-t";
            case "top":
              return "top-0 left-0 right-0 border-b";
            case "left":
              return "bottom-0 left-0 top-0 border-r";
            case "right":
              return "bottom-0 top-0 right-0 border-l";
            default:
              return "";
          }
        }),
        o = $e(() => {
          switch (e.direction) {
            case "bottom":
              return "translateY(100%)";
            case "top":
              return "translateY(-100%)";
            case "left":
              return "translateX(-100%)";
            case "right":
              return "translateX(100%)";
            default:
              return "";
          }
        }),
        s = () => (t.value = !1);
      return (c, f) => (
        le(),
        be(
          "div",
          { class: st(["fixed inset-0 z-40", t.value ? "" : "pointer-events-none"]) },
          [
            Y(
              "div",
              {
                class: st([
                  "bg-base inset-0 absolute transition-opacity duration-500 ease-out",
                  t.value ? "opacity-50" : "opacity-0",
                ]),
                onClick: s,
              },
              null,
              2,
            ),
            Y(
              "div",
              {
                class: st([
                  "bg-base border-base absolute transition-all duration-200 ease-out scrolls",
                  [B(r)],
                ]),
                style: Zt(t.value ? {} : { transform: B(o) }),
              },
              [hn(c.$slots, "default")],
              6,
            ),
          ],
          2,
        )
      );
    },
  }),
  nfe = { "w-350": "", "max-w-screen": "", "h-full": "", flex: "", "flex-col": "" },
  rfe = { "p-4": "", relative: "" },
  ife = Y("p", null, "Module Info", -1),
  ofe = { op50: "", "font-mono": "", "text-sm": "" },
  sfe = { key: 0, "p-5": "" },
  lfe = { grid: "~ cols-2 rows-[min-content_auto]", "overflow-hidden": "", "flex-auto": "" },
  afe = Y("div", { p: "x3 y-1", "bg-overlay": "", border: "base b t r" }, " Source ", -1),
  cfe = Y("div", { p: "x3 y-1", "bg-overlay": "", border: "base b t" }, " Transformed ", -1),
  ufe = { key: 0 },
  ffe = { p: "x3 y-1", "bg-overlay": "", border: "base b t" },
  dfe = gt({
    __name: "ModuleTransformResultView",
    props: { id: {}, projectName: {} },
    emits: ["close"],
    setup(e, { emit: t }) {
      const r = e,
        o = t,
        s = JE(() => bt.rpc.getTransformResult(r.projectName, r.id, !!Yl)),
        c = $e(() => {
          var p;
          return ((p = r.id) == null ? void 0 : p.split(/\./g).pop()) || "js";
        }),
        f = $e(() => {
          var p, v;
          return (
            ((v = (p = s.value) == null ? void 0 : p.source) == null ? void 0 : v.trim()) || ""
          );
        }),
        d = $e(() => {
          var p, v;
          return (
            ((v = (p = s.value) == null ? void 0 : p.code) == null
              ? void 0
              : v.replace(/\/\/# sourceMappingURL=.*\n/, "").trim()) || ""
          );
        }),
        h = $e(() => {
          var p, v, y, b;
          return {
            mappings:
              ((v = (p = s.value) == null ? void 0 : p.map) == null ? void 0 : v.mappings) ?? "",
            version: (b = (y = s.value) == null ? void 0 : y.map) == null ? void 0 : b.version,
          };
        });
      return (
        eL("Escape", () => {
          o("close");
        }),
        (p, v) => {
          const y = $o,
            b = Uw;
          return (
            le(),
            be("div", nfe, [
              Y("div", rfe, [
                ife,
                Y("p", ofe, qe(p.id), 1),
                Pe(y, {
                  icon: "i-carbon-close",
                  absolute: "",
                  "top-5px": "",
                  "right-5px": "",
                  "text-2xl": "",
                  onClick: v[0] || (v[0] = (x) => o("close")),
                }),
              ]),
              B(s)
                ? (le(),
                  be(
                    ht,
                    { key: 1 },
                    [
                      Y("div", lfe, [
                        afe,
                        cfe,
                        Pe(
                          b,
                          ii(
                            { "h-full": "", "model-value": B(f), "read-only": "" },
                            { lineNumbers: !0 },
                            { mode: B(c) },
                          ),
                          null,
                          16,
                          ["model-value", "mode"],
                        ),
                        Pe(
                          b,
                          ii(
                            { "h-full": "", "model-value": B(d), "read-only": "" },
                            { lineNumbers: !0 },
                            { mode: B(c) },
                          ),
                          null,
                          16,
                          ["model-value", "mode"],
                        ),
                      ]),
                      B(h).mappings !== ""
                        ? (le(),
                          be("div", ufe, [
                            Y("div", ffe, " Source map (v" + qe(B(h).version) + ") ", 1),
                            Pe(
                              b,
                              ii(
                                { "model-value": B(h).mappings, "read-only": "" },
                                { lineNumbers: !0 },
                                { mode: B(c) },
                              ),
                              null,
                              16,
                              ["model-value", "mode"],
                            ),
                          ]))
                        : rt("", !0),
                    ],
                    64,
                  ))
                : (le(), be("div", sfe, " No transform result found for this module. ")),
            ])
          );
        }
      );
    },
  });
function hfe(e, t) {
  let r;
  return (...o) => {
    r !== void 0 && clearTimeout(r), (r = setTimeout(() => e(...o), t));
  };
}
var Bd = "http://www.w3.org/1999/xhtml";
const o0 = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Bd,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function zu(e) {
  var t = (e += ""),
    r = t.indexOf(":");
  return (
    r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)),
    o0.hasOwnProperty(t) ? { space: o0[t], local: e } : e
  );
}
function pfe(e) {
  return function () {
    var t = this.ownerDocument,
      r = this.namespaceURI;
    return r === Bd && t.documentElement.namespaceURI === Bd
      ? t.createElement(e)
      : t.createElementNS(r, e);
  };
}
function gfe(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Vw(e) {
  var t = zu(e);
  return (t.local ? gfe : pfe)(t);
}
function vfe() {}
function Xh(e) {
  return e == null
    ? vfe
    : function () {
        return this.querySelector(e);
      };
}
function mfe(e) {
  typeof e != "function" && (e = Xh(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var c = t[s], f = c.length, d = (o[s] = new Array(f)), h, p, v = 0; v < f; ++v)
      (h = c[v]) &&
        (p = e.call(h, h.__data__, v, c)) &&
        ("__data__" in h && (p.__data__ = h.__data__), (d[v] = p));
  return new Vn(o, this._parents);
}
function yfe(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function bfe() {
  return [];
}
function jw(e) {
  return e == null
    ? bfe
    : function () {
        return this.querySelectorAll(e);
      };
}
function wfe(e) {
  return function () {
    return yfe(e.apply(this, arguments));
  };
}
function xfe(e) {
  typeof e == "function" ? (e = wfe(e)) : (e = jw(e));
  for (var t = this._groups, r = t.length, o = [], s = [], c = 0; c < r; ++c)
    for (var f = t[c], d = f.length, h, p = 0; p < d; ++p)
      (h = f[p]) && (o.push(e.call(h, h.__data__, p, f)), s.push(h));
  return new Vn(o, s);
}
function Gw(e) {
  return function () {
    return this.matches(e);
  };
}
function Kw(e) {
  return function (t) {
    return t.matches(e);
  };
}
var _fe = Array.prototype.find;
function Sfe(e) {
  return function () {
    return _fe.call(this.children, e);
  };
}
function kfe() {
  return this.firstElementChild;
}
function Tfe(e) {
  return this.select(e == null ? kfe : Sfe(typeof e == "function" ? e : Kw(e)));
}
var Cfe = Array.prototype.filter;
function Efe() {
  return Array.from(this.children);
}
function Lfe(e) {
  return function () {
    return Cfe.call(this.children, e);
  };
}
function Afe(e) {
  return this.selectAll(e == null ? Efe : Lfe(typeof e == "function" ? e : Kw(e)));
}
function Mfe(e) {
  typeof e != "function" && (e = Gw(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var c = t[s], f = c.length, d = (o[s] = []), h, p = 0; p < f; ++p)
      (h = c[p]) && e.call(h, h.__data__, p, c) && d.push(h);
  return new Vn(o, this._parents);
}
function Xw(e) {
  return new Array(e.length);
}
function Nfe() {
  return new Vn(this._enter || this._groups.map(Xw), this._parents);
}
function eu(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
eu.prototype = {
  constructor: eu,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function $fe(e) {
  return function () {
    return e;
  };
}
function Ofe(e, t, r, o, s, c) {
  for (var f = 0, d, h = t.length, p = c.length; f < p; ++f)
    (d = t[f]) ? ((d.__data__ = c[f]), (o[f] = d)) : (r[f] = new eu(e, c[f]));
  for (; f < h; ++f) (d = t[f]) && (s[f] = d);
}
function Pfe(e, t, r, o, s, c, f) {
  var d,
    h,
    p = new Map(),
    v = t.length,
    y = c.length,
    b = new Array(v),
    x;
  for (d = 0; d < v; ++d)
    (h = t[d]) &&
      ((b[d] = x = f.call(h, h.__data__, d, t) + ""), p.has(x) ? (s[d] = h) : p.set(x, h));
  for (d = 0; d < y; ++d)
    (x = f.call(e, c[d], d, c) + ""),
      (h = p.get(x)) ? ((o[d] = h), (h.__data__ = c[d]), p.delete(x)) : (r[d] = new eu(e, c[d]));
  for (d = 0; d < v; ++d) (h = t[d]) && p.get(b[d]) === h && (s[d] = h);
}
function Rfe(e) {
  return e.__data__;
}
function Dfe(e, t) {
  if (!arguments.length) return Array.from(this, Rfe);
  var r = t ? Pfe : Ofe,
    o = this._parents,
    s = this._groups;
  typeof e != "function" && (e = $fe(e));
  for (var c = s.length, f = new Array(c), d = new Array(c), h = new Array(c), p = 0; p < c; ++p) {
    var v = o[p],
      y = s[p],
      b = y.length,
      x = zfe(e.call(v, v && v.__data__, p, o)),
      C = x.length,
      E = (d[p] = new Array(C)),
      N = (f[p] = new Array(C)),
      M = (h[p] = new Array(b));
    r(v, y, E, N, M, x, t);
    for (var L = 0, D = 0, A, H; L < C; ++L)
      if ((A = E[L])) {
        for (L >= D && (D = L + 1); !(H = N[D]) && ++D < C; );
        A._next = H || null;
      }
  }
  return (f = new Vn(f, o)), (f._enter = d), (f._exit = h), f;
}
function zfe(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ife() {
  return new Vn(this._exit || this._groups.map(Xw), this._parents);
}
function Ffe(e, t, r) {
  var o = this.enter(),
    s = this,
    c = this.exit();
  return (
    typeof e == "function" ? ((o = e(o)), o && (o = o.selection())) : (o = o.append(e + "")),
    t != null && ((s = t(s)), s && (s = s.selection())),
    r == null ? c.remove() : r(c),
    o && s ? o.merge(s).order() : s
  );
}
function Hfe(e) {
  for (
    var t = e.selection ? e.selection() : e,
      r = this._groups,
      o = t._groups,
      s = r.length,
      c = o.length,
      f = Math.min(s, c),
      d = new Array(s),
      h = 0;
    h < f;
    ++h
  )
    for (var p = r[h], v = o[h], y = p.length, b = (d[h] = new Array(y)), x, C = 0; C < y; ++C)
      (x = p[C] || v[C]) && (b[C] = x);
  for (; h < s; ++h) d[h] = r[h];
  return new Vn(d, this._parents);
}
function qfe() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var o = e[t], s = o.length - 1, c = o[s], f; --s >= 0; )
      (f = o[s]) &&
        (c && f.compareDocumentPosition(c) ^ 4 && c.parentNode.insertBefore(f, c), (c = f));
  return this;
}
function Bfe(e) {
  e || (e = Wfe);
  function t(y, b) {
    return y && b ? e(y.__data__, b.__data__) : !y - !b;
  }
  for (var r = this._groups, o = r.length, s = new Array(o), c = 0; c < o; ++c) {
    for (var f = r[c], d = f.length, h = (s[c] = new Array(d)), p, v = 0; v < d; ++v)
      (p = f[v]) && (h[v] = p);
    h.sort(t);
  }
  return new Vn(s, this._parents).order();
}
function Wfe(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ufe() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function Vfe() {
  return Array.from(this);
}
function jfe() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, c = o.length; s < c; ++s) {
      var f = o[s];
      if (f) return f;
    }
  return null;
}
function Gfe() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Kfe() {
  return !this.node();
}
function Xfe(e) {
  for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
    for (var s = t[r], c = 0, f = s.length, d; c < f; ++c)
      (d = s[c]) && e.call(d, d.__data__, c, s);
  return this;
}
function Yfe(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function Zfe(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Jfe(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function Qfe(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ede(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function tde(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function nde(e, t) {
  var r = zu(e);
  if (arguments.length < 2) {
    var o = this.node();
    return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r);
  }
  return this.each(
    (t == null
      ? r.local
        ? Zfe
        : Yfe
      : typeof t == "function"
        ? r.local
          ? tde
          : ede
        : r.local
          ? Qfe
          : Jfe)(r, t),
  );
}
function Yw(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function rde(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function ide(e, t, r) {
  return function () {
    this.style.setProperty(e, t, r);
  };
}
function ode(e, t, r) {
  return function () {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, r);
  };
}
function sde(e, t, r) {
  return arguments.length > 1
    ? this.each((t == null ? rde : typeof t == "function" ? ode : ide)(e, t, r ?? ""))
    : Ls(this.node(), e);
}
function Ls(e, t) {
  return e.style.getPropertyValue(t) || Yw(e).getComputedStyle(e, null).getPropertyValue(t);
}
function lde(e) {
  return function () {
    delete this[e];
  };
}
function ade(e, t) {
  return function () {
    this[e] = t;
  };
}
function cde(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : (this[e] = r);
  };
}
function ude(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? lde : typeof t == "function" ? cde : ade)(e, t))
    : this.node()[e];
}
function Zw(e) {
  return e.trim().split(/^|\s+/);
}
function Yh(e) {
  return e.classList || new Jw(e);
}
function Jw(e) {
  (this._node = e), (this._names = Zw(e.getAttribute("class") || ""));
}
Jw.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Qw(e, t) {
  for (var r = Yh(e), o = -1, s = t.length; ++o < s; ) r.add(t[o]);
}
function e1(e, t) {
  for (var r = Yh(e), o = -1, s = t.length; ++o < s; ) r.remove(t[o]);
}
function fde(e) {
  return function () {
    Qw(this, e);
  };
}
function dde(e) {
  return function () {
    e1(this, e);
  };
}
function hde(e, t) {
  return function () {
    (t.apply(this, arguments) ? Qw : e1)(this, e);
  };
}
function pde(e, t) {
  var r = Zw(e + "");
  if (arguments.length < 2) {
    for (var o = Yh(this.node()), s = -1, c = r.length; ++s < c; ) if (!o.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? hde : t ? fde : dde)(r, t));
}
function gde() {
  this.textContent = "";
}
function vde(e) {
  return function () {
    this.textContent = e;
  };
}
function mde(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function yde(e) {
  return arguments.length
    ? this.each(e == null ? gde : (typeof e == "function" ? mde : vde)(e))
    : this.node().textContent;
}
function bde() {
  this.innerHTML = "";
}
function wde(e) {
  return function () {
    this.innerHTML = e;
  };
}
function xde(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function _de(e) {
  return arguments.length
    ? this.each(e == null ? bde : (typeof e == "function" ? xde : wde)(e))
    : this.node().innerHTML;
}
function Sde() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function kde() {
  return this.each(Sde);
}
function Tde() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cde() {
  return this.each(Tde);
}
function Ede(e) {
  var t = typeof e == "function" ? e : Vw(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Lde() {
  return null;
}
function Ade(e, t) {
  var r = typeof e == "function" ? e : Vw(e),
    o = t == null ? Lde : typeof t == "function" ? t : Xh(t);
  return this.select(function () {
    return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function Mde() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Nde() {
  return this.each(Mde);
}
function $de() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ode() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Pde(e) {
  return this.select(e ? Ode : $de);
}
function Rde(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dde(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function zde(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var r = "",
        o = t.indexOf(".");
      return o >= 0 && ((r = t.slice(o + 1)), (t = t.slice(0, o))), { type: t, name: r };
    });
}
function Ide(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var r = 0, o = -1, s = t.length, c; r < s; ++r)
        (c = t[r]),
          (!e.type || c.type === e.type) && c.name === e.name
            ? this.removeEventListener(c.type, c.listener, c.options)
            : (t[++o] = c);
      ++o ? (t.length = o) : delete this.__on;
    }
  };
}
function Fde(e, t, r) {
  return function () {
    var o = this.__on,
      s,
      c = Dde(t);
    if (o) {
      for (var f = 0, d = o.length; f < d; ++f)
        if ((s = o[f]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options),
            this.addEventListener(s.type, (s.listener = c), (s.options = r)),
            (s.value = t);
          return;
        }
    }
    this.addEventListener(e.type, c, r),
      (s = { type: e.type, name: e.name, value: t, listener: c, options: r }),
      o ? o.push(s) : (this.__on = [s]);
  };
}
function Hde(e, t, r) {
  var o = zde(e + ""),
    s,
    c = o.length,
    f;
  if (arguments.length < 2) {
    var d = this.node().__on;
    if (d) {
      for (var h = 0, p = d.length, v; h < p; ++h)
        for (s = 0, v = d[h]; s < c; ++s)
          if ((f = o[s]).type === v.type && f.name === v.name) return v.value;
    }
    return;
  }
  for (d = t ? Fde : Ide, s = 0; s < c; ++s) this.each(d(o[s], t, r));
  return this;
}
function t1(e, t, r) {
  var o = Yw(e),
    s = o.CustomEvent;
  typeof s == "function"
    ? (s = new s(t, r))
    : ((s = o.document.createEvent("Event")),
      r
        ? (s.initEvent(t, r.bubbles, r.cancelable), (s.detail = r.detail))
        : s.initEvent(t, !1, !1)),
    e.dispatchEvent(s);
}
function qde(e, t) {
  return function () {
    return t1(this, e, t);
  };
}
function Bde(e, t) {
  return function () {
    return t1(this, e, t.apply(this, arguments));
  };
}
function Wde(e, t) {
  return this.each((typeof t == "function" ? Bde : qde)(e, t));
}
function* Ude() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var o = e[t], s = 0, c = o.length, f; s < c; ++s) (f = o[s]) && (yield f);
}
var n1 = [null];
function Vn(e, t) {
  (this._groups = e), (this._parents = t);
}
function da() {
  return new Vn([[document.documentElement]], n1);
}
function Vde() {
  return this;
}
Vn.prototype = da.prototype = {
  constructor: Vn,
  select: mfe,
  selectAll: xfe,
  selectChild: Tfe,
  selectChildren: Afe,
  filter: Mfe,
  data: Dfe,
  enter: Nfe,
  exit: Ife,
  join: Ffe,
  merge: Hfe,
  selection: Vde,
  order: qfe,
  sort: Bfe,
  call: Ufe,
  nodes: Vfe,
  node: jfe,
  size: Gfe,
  empty: Kfe,
  each: Xfe,
  attr: nde,
  style: sde,
  property: ude,
  classed: pde,
  text: yde,
  html: _de,
  raise: kde,
  lower: Cde,
  append: Ede,
  insert: Ade,
  remove: Nde,
  clone: Pde,
  datum: Rde,
  on: Hde,
  dispatch: Wde,
  [Symbol.iterator]: Ude,
};
function On(e) {
  return typeof e == "string"
    ? new Vn([[document.querySelector(e)]], [document.documentElement])
    : new Vn([[e]], n1);
}
function jde(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function ei(e, t) {
  if (((e = jde(e)), t === void 0 && (t = e.currentTarget), t)) {
    var r = t.ownerSVGElement || t;
    if (r.createSVGPoint) {
      var o = r.createSVGPoint();
      return (
        (o.x = e.clientX),
        (o.y = e.clientY),
        (o = o.matrixTransform(t.getScreenCTM().inverse())),
        [o.x, o.y]
      );
    }
    if (t.getBoundingClientRect) {
      var s = t.getBoundingClientRect();
      return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
class _n {
  constructor(t, r) {
    (this.x = t), (this.y = r);
  }
  static of([t, r]) {
    return new _n(t, r);
  }
  add(t) {
    return new _n(this.x + t.x, this.y + t.y);
  }
  subtract(t) {
    return new _n(this.x - t.x, this.y - t.y);
  }
  multiply(t) {
    return new _n(this.x * t, this.y * t);
  }
  divide(t) {
    return new _n(this.x / t, this.y / t);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - t.x * this.y;
  }
  hadamard(t) {
    return new _n(this.x * t.x, this.y * t.y);
  }
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  normalize() {
    const t = this.length();
    return new _n(this.x / t, this.y / t);
  }
  rotateByRadians(t) {
    const r = Math.cos(t),
      o = Math.sin(t);
    return new _n(this.x * r - this.y * o, this.x * o + this.y * r);
  }
  rotateByDegrees(t) {
    return this.rotateByRadians((t * Math.PI) / 180);
  }
}
var Gde = { value: () => {} };
function ha() {
  for (var e = 0, t = arguments.length, r = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in r || /[\s.]/.test(o))
      throw new Error("illegal type: " + o);
    r[o] = [];
  }
  return new kc(r);
}
function kc(e) {
  this._ = e;
}
function Kde(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (r) {
      var o = "",
        s = r.indexOf(".");
      if ((s >= 0 && ((o = r.slice(s + 1)), (r = r.slice(0, s))), r && !t.hasOwnProperty(r)))
        throw new Error("unknown type: " + r);
      return { type: r, name: o };
    });
}
kc.prototype = ha.prototype = {
  constructor: kc,
  on: function (e, t) {
    var r = this._,
      o = Kde(e + "", r),
      s,
      c = -1,
      f = o.length;
    if (arguments.length < 2) {
      for (; ++c < f; ) if ((s = (e = o[c]).type) && (s = Xde(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++c < f; )
      if ((s = (e = o[c]).type)) r[s] = s0(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = s0(r[s], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new kc(e);
  },
  call: function (e, t) {
    if ((s = arguments.length - 2) > 0)
      for (var r = new Array(s), o = 0, s, c; o < s; ++o) r[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (c = this._[e], o = 0, s = c.length; o < s; ++o) c[o].value.apply(t, r);
  },
  apply: function (e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], s = 0, c = o.length; s < c; ++s) o[s].value.apply(t, r);
  },
};
function Xde(e, t) {
  for (var r = 0, o = e.length, s; r < o; ++r) if ((s = e[r]).name === t) return s.value;
}
function s0(e, t, r) {
  for (var o = 0, s = e.length; o < s; ++o)
    if (e[o].name === t) {
      (e[o] = Gde), (e = e.slice(0, o).concat(e.slice(o + 1)));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
const Yde = { passive: !1 },
  Zl = { capture: !0, passive: !1 };
function rd(e) {
  e.stopImmediatePropagation();
}
function ms(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function r1(e) {
  var t = e.document.documentElement,
    r = On(e).on("dragstart.drag", ms, Zl);
  "onselectstart" in t
    ? r.on("selectstart.drag", ms, Zl)
    : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = "none"));
}
function i1(e, t) {
  var r = e.document.documentElement,
    o = On(e).on("dragstart.drag", null);
  t &&
    (o.on("click.drag", ms, Zl),
    setTimeout(function () {
      o.on("click.drag", null);
    }, 0)),
    "onselectstart" in r
      ? o.on("selectstart.drag", null)
      : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
}
const lc = (e) => () => e;
function Wd(
  e,
  {
    sourceEvent: t,
    subject: r,
    target: o,
    identifier: s,
    active: c,
    x: f,
    y: d,
    dx: h,
    dy: p,
    dispatch: v,
  },
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: s, enumerable: !0, configurable: !0 },
    active: { value: c, enumerable: !0, configurable: !0 },
    x: { value: f, enumerable: !0, configurable: !0 },
    y: { value: d, enumerable: !0, configurable: !0 },
    dx: { value: h, enumerable: !0, configurable: !0 },
    dy: { value: p, enumerable: !0, configurable: !0 },
    _: { value: v },
  });
}
Wd.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Zde(e) {
  return !e.ctrlKey && !e.button;
}
function Jde() {
  return this.parentNode;
}
function Qde(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function ehe() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function the() {
  var e = Zde,
    t = Jde,
    r = Qde,
    o = ehe,
    s = {},
    c = ha("start", "drag", "end"),
    f = 0,
    d,
    h,
    p,
    v,
    y = 0;
  function b(A) {
    A.on("mousedown.drag", x)
      .filter(o)
      .on("touchstart.drag", N)
      .on("touchmove.drag", M, Yde)
      .on("touchend.drag touchcancel.drag", L)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function x(A, H) {
    if (!(v || !e.call(this, A, H))) {
      var z = D(this, t.call(this, A, H), A, H, "mouse");
      z &&
        (On(A.view).on("mousemove.drag", C, Zl).on("mouseup.drag", E, Zl),
        r1(A.view),
        rd(A),
        (p = !1),
        (d = A.clientX),
        (h = A.clientY),
        z("start", A));
    }
  }
  function C(A) {
    if ((ms(A), !p)) {
      var H = A.clientX - d,
        z = A.clientY - h;
      p = H * H + z * z > y;
    }
    s.mouse("drag", A);
  }
  function E(A) {
    On(A.view).on("mousemove.drag mouseup.drag", null), i1(A.view, p), ms(A), s.mouse("end", A);
  }
  function N(A, H) {
    if (e.call(this, A, H)) {
      var z = A.changedTouches,
        J = t.call(this, A, H),
        ie = z.length,
        ne,
        j;
      for (ne = 0; ne < ie; ++ne)
        (j = D(this, J, A, H, z[ne].identifier, z[ne])) && (rd(A), j("start", A, z[ne]));
    }
  }
  function M(A) {
    var H = A.changedTouches,
      z = H.length,
      J,
      ie;
    for (J = 0; J < z; ++J) (ie = s[H[J].identifier]) && (ms(A), ie("drag", A, H[J]));
  }
  function L(A) {
    var H = A.changedTouches,
      z = H.length,
      J,
      ie;
    for (
      v && clearTimeout(v),
        v = setTimeout(function () {
          v = null;
        }, 500),
        J = 0;
      J < z;
      ++J
    )
      (ie = s[H[J].identifier]) && (rd(A), ie("end", A, H[J]));
  }
  function D(A, H, z, J, ie, ne) {
    var j = c.copy(),
      te = ei(ne || z, H),
      K,
      V,
      I;
    if (
      (I = r.call(
        A,
        new Wd("beforestart", {
          sourceEvent: z,
          target: b,
          identifier: ie,
          active: f,
          x: te[0],
          y: te[1],
          dx: 0,
          dy: 0,
          dispatch: j,
        }),
        J,
      )) != null
    )
      return (
        (K = I.x - te[0] || 0),
        (V = I.y - te[1] || 0),
        function k(q, W, re) {
          var me = te,
            Me;
          switch (q) {
            case "start":
              (s[ie] = k), (Me = f++);
              break;
            case "end":
              delete s[ie], --f;
            case "drag":
              (te = ei(re || W, H)), (Me = f);
              break;
          }
          j.call(
            q,
            A,
            new Wd(q, {
              sourceEvent: W,
              subject: I,
              target: b,
              identifier: ie,
              active: Me,
              x: te[0] + K,
              y: te[1] + V,
              dx: te[0] - me[0],
              dy: te[1] - me[1],
              dispatch: j,
            }),
            J,
          );
        }
      );
  }
  return (
    (b.filter = function (A) {
      return arguments.length ? ((e = typeof A == "function" ? A : lc(!!A)), b) : e;
    }),
    (b.container = function (A) {
      return arguments.length ? ((t = typeof A == "function" ? A : lc(A)), b) : t;
    }),
    (b.subject = function (A) {
      return arguments.length ? ((r = typeof A == "function" ? A : lc(A)), b) : r;
    }),
    (b.touchable = function (A) {
      return arguments.length ? ((o = typeof A == "function" ? A : lc(!!A)), b) : o;
    }),
    (b.on = function () {
      var A = c.on.apply(c, arguments);
      return A === c ? b : A;
    }),
    (b.clickDistance = function (A) {
      return arguments.length ? ((y = (A = +A) * A), b) : Math.sqrt(y);
    }),
    b
  );
}
function Zh(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function o1(e, t) {
  var r = Object.create(e.prototype);
  for (var o in t) r[o] = t[o];
  return r;
}
function pa() {}
var Jl = 0.7,
  tu = 1 / Jl,
  ys = "\\s*([+-]?\\d+)\\s*",
  Ql = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Rr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  nhe = /^#([0-9a-f]{3,8})$/,
  rhe = new RegExp(`^rgb\\(${ys},${ys},${ys}\\)$`),
  ihe = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`),
  ohe = new RegExp(`^rgba\\(${ys},${ys},${ys},${Ql}\\)$`),
  she = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${Ql}\\)$`),
  lhe = new RegExp(`^hsl\\(${Ql},${Rr},${Rr}\\)$`),
  ahe = new RegExp(`^hsla\\(${Ql},${Rr},${Rr},${Ql}\\)$`),
  l0 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Zh(pa, ea, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: a0,
  formatHex: a0,
  formatHex8: che,
  formatHsl: uhe,
  formatRgb: c0,
  toString: c0,
});
function a0() {
  return this.rgb().formatHex();
}
function che() {
  return this.rgb().formatHex8();
}
function uhe() {
  return s1(this).formatHsl();
}
function c0() {
  return this.rgb().formatRgb();
}
function ea(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = nhe.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? u0(t)
          : r === 3
            ? new Pn(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? ac((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
              : r === 4
                ? ac(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = rhe.exec(e))
        ? new Pn(t[1], t[2], t[3], 1)
        : (t = ihe.exec(e))
          ? new Pn((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
          : (t = ohe.exec(e))
            ? ac(t[1], t[2], t[3], t[4])
            : (t = she.exec(e))
              ? ac((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
              : (t = lhe.exec(e))
                ? h0(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = ahe.exec(e))
                  ? h0(t[1], t[2] / 100, t[3] / 100, t[4])
                  : l0.hasOwnProperty(e)
                    ? u0(l0[e])
                    : e === "transparent"
                      ? new Pn(NaN, NaN, NaN, 0)
                      : null
  );
}
function u0(e) {
  return new Pn((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ac(e, t, r, o) {
  return o <= 0 && (e = t = r = NaN), new Pn(e, t, r, o);
}
function fhe(e) {
  return (
    e instanceof pa || (e = ea(e)), e ? ((e = e.rgb()), new Pn(e.r, e.g, e.b, e.opacity)) : new Pn()
  );
}
function Ud(e, t, r, o) {
  return arguments.length === 1 ? fhe(e) : new Pn(e, t, r, o ?? 1);
}
function Pn(e, t, r, o) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +o);
}
Zh(
  Pn,
  Ud,
  o1(pa, {
    brighter(e) {
      return (
        (e = e == null ? tu : Math.pow(tu, e)),
        new Pn(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)),
        new Pn(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Pn(Eo(this.r), Eo(this.g), Eo(this.b), nu(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: f0,
    formatHex: f0,
    formatHex8: dhe,
    formatRgb: d0,
    toString: d0,
  }),
);
function f0() {
  return `#${ko(this.r)}${ko(this.g)}${ko(this.b)}`;
}
function dhe() {
  return `#${ko(this.r)}${ko(this.g)}${ko(this.b)}${ko((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function d0() {
  const e = nu(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Eo(this.r)}, ${Eo(this.g)}, ${Eo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function nu(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Eo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ko(e) {
  return (e = Eo(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function h0(e, t, r, o) {
  return (
    o <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new vr(e, t, r, o)
  );
}
function s1(e) {
  if (e instanceof vr) return new vr(e.h, e.s, e.l, e.opacity);
  if ((e instanceof pa || (e = ea(e)), !e)) return new vr();
  if (e instanceof vr) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    o = e.b / 255,
    s = Math.min(t, r, o),
    c = Math.max(t, r, o),
    f = NaN,
    d = c - s,
    h = (c + s) / 2;
  return (
    d
      ? (t === c
          ? (f = (r - o) / d + (r < o) * 6)
          : r === c
            ? (f = (o - t) / d + 2)
            : (f = (t - r) / d + 4),
        (d /= h < 0.5 ? c + s : 2 - c - s),
        (f *= 60))
      : (d = h > 0 && h < 1 ? 0 : f),
    new vr(f, d, h, e.opacity)
  );
}
function hhe(e, t, r, o) {
  return arguments.length === 1 ? s1(e) : new vr(e, t, r, o ?? 1);
}
function vr(e, t, r, o) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +o);
}
Zh(
  vr,
  hhe,
  o1(pa, {
    brighter(e) {
      return (
        (e = e == null ? tu : Math.pow(tu, e)), new vr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)), new vr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        o = r + (r < 0.5 ? r : 1 - r) * t,
        s = 2 * r - o;
      return new Pn(
        id(e >= 240 ? e - 240 : e + 120, s, o),
        id(e, s, o),
        id(e < 120 ? e + 240 : e - 120, s, o),
        this.opacity,
      );
    },
    clamp() {
      return new vr(p0(this.h), cc(this.s), cc(this.l), nu(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = nu(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${p0(this.h)}, ${cc(this.s) * 100}%, ${cc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function p0(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function cc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function id(e, t, r) {
  return (
    (e < 60 ? t + ((r - t) * e) / 60 : e < 180 ? r : e < 240 ? t + ((r - t) * (240 - e)) / 60 : t) *
    255
  );
}
const l1 = (e) => () => e;
function phe(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function ghe(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (o) {
      return Math.pow(e + o * t, r);
    }
  );
}
function vhe(e) {
  return (e = +e) == 1
    ? a1
    : function (t, r) {
        return r - t ? ghe(t, r, e) : l1(isNaN(t) ? r : t);
      };
}
function a1(e, t) {
  var r = t - e;
  return r ? phe(e, r) : l1(isNaN(e) ? t : e);
}
const g0 = (function e(t) {
  var r = vhe(t);
  function o(s, c) {
    var f = r((s = Ud(s)).r, (c = Ud(c)).r),
      d = r(s.g, c.g),
      h = r(s.b, c.b),
      p = a1(s.opacity, c.opacity);
    return function (v) {
      return (s.r = f(v)), (s.g = d(v)), (s.b = h(v)), (s.opacity = p(v)), s + "";
    };
  }
  return (o.gamma = e), o;
})(1);
function Di(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
var Vd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  od = new RegExp(Vd.source, "g");
function mhe(e) {
  return function () {
    return e;
  };
}
function yhe(e) {
  return function (t) {
    return e(t) + "";
  };
}
function bhe(e, t) {
  var r = (Vd.lastIndex = od.lastIndex = 0),
    o,
    s,
    c,
    f = -1,
    d = [],
    h = [];
  for (e = e + "", t = t + ""; (o = Vd.exec(e)) && (s = od.exec(t)); )
    (c = s.index) > r && ((c = t.slice(r, c)), d[f] ? (d[f] += c) : (d[++f] = c)),
      (o = o[0]) === (s = s[0])
        ? d[f]
          ? (d[f] += s)
          : (d[++f] = s)
        : ((d[++f] = null), h.push({ i: f, x: Di(o, s) })),
      (r = od.lastIndex);
  return (
    r < t.length && ((c = t.slice(r)), d[f] ? (d[f] += c) : (d[++f] = c)),
    d.length < 2
      ? h[0]
        ? yhe(h[0].x)
        : mhe(t)
      : ((t = h.length),
        function (p) {
          for (var v = 0, y; v < t; ++v) d[(y = h[v]).i] = y.x(p);
          return d.join("");
        })
  );
}
var v0 = 180 / Math.PI,
  jd = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function c1(e, t, r, o, s, c) {
  var f, d, h;
  return (
    (f = Math.sqrt(e * e + t * t)) && ((e /= f), (t /= f)),
    (h = e * r + t * o) && ((r -= e * h), (o -= t * h)),
    (d = Math.sqrt(r * r + o * o)) && ((r /= d), (o /= d), (h /= d)),
    e * o < t * r && ((e = -e), (t = -t), (h = -h), (f = -f)),
    {
      translateX: s,
      translateY: c,
      rotate: Math.atan2(t, e) * v0,
      skewX: Math.atan(h) * v0,
      scaleX: f,
      scaleY: d,
    }
  );
}
var uc;
function whe(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? jd : c1(t.a, t.b, t.c, t.d, t.e, t.f);
}
function xhe(e) {
  return e == null ||
    (uc || (uc = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    uc.setAttribute("transform", e),
    !(e = uc.transform.baseVal.consolidate()))
    ? jd
    : ((e = e.matrix), c1(e.a, e.b, e.c, e.d, e.e, e.f));
}
function u1(e, t, r, o) {
  function s(p) {
    return p.length ? p.pop() + " " : "";
  }
  function c(p, v, y, b, x, C) {
    if (p !== y || v !== b) {
      var E = x.push("translate(", null, t, null, r);
      C.push({ i: E - 4, x: Di(p, y) }, { i: E - 2, x: Di(v, b) });
    } else (y || b) && x.push("translate(" + y + t + b + r);
  }
  function f(p, v, y, b) {
    p !== v
      ? (p - v > 180 ? (v += 360) : v - p > 180 && (p += 360),
        b.push({ i: y.push(s(y) + "rotate(", null, o) - 2, x: Di(p, v) }))
      : v && y.push(s(y) + "rotate(" + v + o);
  }
  function d(p, v, y, b) {
    p !== v
      ? b.push({ i: y.push(s(y) + "skewX(", null, o) - 2, x: Di(p, v) })
      : v && y.push(s(y) + "skewX(" + v + o);
  }
  function h(p, v, y, b, x, C) {
    if (p !== y || v !== b) {
      var E = x.push(s(x) + "scale(", null, ",", null, ")");
      C.push({ i: E - 4, x: Di(p, y) }, { i: E - 2, x: Di(v, b) });
    } else (y !== 1 || b !== 1) && x.push(s(x) + "scale(" + y + "," + b + ")");
  }
  return function (p, v) {
    var y = [],
      b = [];
    return (
      (p = e(p)),
      (v = e(v)),
      c(p.translateX, p.translateY, v.translateX, v.translateY, y, b),
      f(p.rotate, v.rotate, y, b),
      d(p.skewX, v.skewX, y, b),
      h(p.scaleX, p.scaleY, v.scaleX, v.scaleY, y, b),
      (p = v = null),
      function (x) {
        for (var C = -1, E = b.length, N; ++C < E; ) y[(N = b[C]).i] = N.x(x);
        return y.join("");
      }
    );
  };
}
var _he = u1(whe, "px, ", "px)", "deg)"),
  She = u1(xhe, ", ", ")", ")"),
  khe = 1e-12;
function m0(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function The(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Che(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ehe = (function e(t, r, o) {
  function s(c, f) {
    var d = c[0],
      h = c[1],
      p = c[2],
      v = f[0],
      y = f[1],
      b = f[2],
      x = v - d,
      C = y - h,
      E = x * x + C * C,
      N,
      M;
    if (E < khe)
      (M = Math.log(b / p) / t),
        (N = function (J) {
          return [d + J * x, h + J * C, p * Math.exp(t * J * M)];
        });
    else {
      var L = Math.sqrt(E),
        D = (b * b - p * p + o * E) / (2 * p * r * L),
        A = (b * b - p * p - o * E) / (2 * b * r * L),
        H = Math.log(Math.sqrt(D * D + 1) - D),
        z = Math.log(Math.sqrt(A * A + 1) - A);
      (M = (z - H) / t),
        (N = function (J) {
          var ie = J * M,
            ne = m0(H),
            j = (p / (r * L)) * (ne * Che(t * ie + H) - The(H));
          return [d + j * x, h + j * C, (p * ne) / m0(t * ie + H)];
        });
    }
    return (N.duration = (M * 1e3 * t) / Math.SQRT2), N;
  }
  return (
    (s.rho = function (c) {
      var f = Math.max(0.001, +c),
        d = f * f,
        h = d * d;
      return e(f, d, h);
    }),
    s
  );
})(Math.SQRT2, 2, 4);
var As = 0,
  ml = 0,
  hl = 0,
  f1 = 1e3,
  ru,
  yl,
  iu = 0,
  Mo = 0,
  Iu = 0,
  ta = typeof performance == "object" && performance.now ? performance : Date,
  d1 =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Jh() {
  return Mo || (d1(Lhe), (Mo = ta.now() + Iu));
}
function Lhe() {
  Mo = 0;
}
function ou() {
  this._call = this._time = this._next = null;
}
ou.prototype = Qh.prototype = {
  constructor: ou,
  restart: function (e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    (r = (r == null ? Jh() : +r) + (t == null ? 0 : +t)),
      !this._next && yl !== this && (yl ? (yl._next = this) : (ru = this), (yl = this)),
      (this._call = e),
      (this._time = r),
      Gd();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), Gd());
  },
};
function Qh(e, t, r) {
  var o = new ou();
  return o.restart(e, t, r), o;
}
function Ahe() {
  Jh(), ++As;
  for (var e = ru, t; e; ) (t = Mo - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --As;
}
function y0() {
  (Mo = (iu = ta.now()) + Iu), (As = ml = 0);
  try {
    Ahe();
  } finally {
    (As = 0), Nhe(), (Mo = 0);
  }
}
function Mhe() {
  var e = ta.now(),
    t = e - iu;
  t > f1 && ((Iu -= t), (iu = e));
}
function Nhe() {
  for (var e, t = ru, r, o = 1 / 0; t; )
    t._call
      ? (o > t._time && (o = t._time), (e = t), (t = t._next))
      : ((r = t._next), (t._next = null), (t = e ? (e._next = r) : (ru = r)));
  (yl = e), Gd(o);
}
function Gd(e) {
  if (!As) {
    ml && (ml = clearTimeout(ml));
    var t = e - Mo;
    t > 24
      ? (e < 1 / 0 && (ml = setTimeout(y0, e - ta.now() - Iu)), hl && (hl = clearInterval(hl)))
      : (hl || ((iu = ta.now()), (hl = setInterval(Mhe, f1))), (As = 1), d1(y0));
  }
}
function b0(e, t, r) {
  var o = new ou();
  return (
    (t = t == null ? 0 : +t),
    o.restart(
      (s) => {
        o.stop(), e(s + t);
      },
      t,
      r,
    ),
    o
  );
}
var $he = ha("start", "end", "cancel", "interrupt"),
  Ohe = [],
  h1 = 0,
  w0 = 1,
  Kd = 2,
  Tc = 3,
  x0 = 4,
  Xd = 5,
  Cc = 6;
function Fu(e, t, r, o, s, c) {
  var f = e.__transition;
  if (!f) e.__transition = {};
  else if (r in f) return;
  Phe(e, r, {
    name: t,
    index: o,
    group: s,
    on: $he,
    tween: Ohe,
    time: c.time,
    delay: c.delay,
    duration: c.duration,
    ease: c.ease,
    timer: null,
    state: h1,
  });
}
function ep(e, t) {
  var r = Sr(e, t);
  if (r.state > h1) throw new Error("too late; already scheduled");
  return r;
}
function Hr(e, t) {
  var r = Sr(e, t);
  if (r.state > Tc) throw new Error("too late; already running");
  return r;
}
function Sr(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function Phe(e, t, r) {
  var o = e.__transition,
    s;
  (o[t] = r), (r.timer = Qh(c, 0, r.time));
  function c(p) {
    (r.state = w0), r.timer.restart(f, r.delay, r.time), r.delay <= p && f(p - r.delay);
  }
  function f(p) {
    var v, y, b, x;
    if (r.state !== w0) return h();
    for (v in o)
      if (((x = o[v]), x.name === r.name)) {
        if (x.state === Tc) return b0(f);
        x.state === x0
          ? ((x.state = Cc),
            x.timer.stop(),
            x.on.call("interrupt", e, e.__data__, x.index, x.group),
            delete o[v])
          : +v < t &&
            ((x.state = Cc),
            x.timer.stop(),
            x.on.call("cancel", e, e.__data__, x.index, x.group),
            delete o[v]);
      }
    if (
      (b0(function () {
        r.state === Tc && ((r.state = x0), r.timer.restart(d, r.delay, r.time), d(p));
      }),
      (r.state = Kd),
      r.on.call("start", e, e.__data__, r.index, r.group),
      r.state === Kd)
    ) {
      for (r.state = Tc, s = new Array((b = r.tween.length)), v = 0, y = -1; v < b; ++v)
        (x = r.tween[v].value.call(e, e.__data__, r.index, r.group)) && (s[++y] = x);
      s.length = y + 1;
    }
  }
  function d(p) {
    for (
      var v =
          p < r.duration
            ? r.ease.call(null, p / r.duration)
            : (r.timer.restart(h), (r.state = Xd), 1),
        y = -1,
        b = s.length;
      ++y < b;

    )
      s[y].call(e, v);
    r.state === Xd && (r.on.call("end", e, e.__data__, r.index, r.group), h());
  }
  function h() {
    (r.state = Cc), r.timer.stop(), delete o[t];
    for (var p in o) return;
    delete e.__transition;
  }
}
function Ec(e, t) {
  var r = e.__transition,
    o,
    s,
    c = !0,
    f;
  if (r) {
    t = t == null ? null : t + "";
    for (f in r) {
      if ((o = r[f]).name !== t) {
        c = !1;
        continue;
      }
      (s = o.state > Kd && o.state < Xd),
        (o.state = Cc),
        o.timer.stop(),
        o.on.call(s ? "interrupt" : "cancel", e, e.__data__, o.index, o.group),
        delete r[f];
    }
    c && delete e.__transition;
  }
}
function Rhe(e) {
  return this.each(function () {
    Ec(this, e);
  });
}
function Dhe(e, t) {
  var r, o;
  return function () {
    var s = Hr(this, e),
      c = s.tween;
    if (c !== r) {
      o = r = c;
      for (var f = 0, d = o.length; f < d; ++f)
        if (o[f].name === t) {
          (o = o.slice()), o.splice(f, 1);
          break;
        }
    }
    s.tween = o;
  };
}
function zhe(e, t, r) {
  var o, s;
  if (typeof r != "function") throw new Error();
  return function () {
    var c = Hr(this, e),
      f = c.tween;
    if (f !== o) {
      s = (o = f).slice();
      for (var d = { name: t, value: r }, h = 0, p = s.length; h < p; ++h)
        if (s[h].name === t) {
          s[h] = d;
          break;
        }
      h === p && s.push(d);
    }
    c.tween = s;
  };
}
function Ihe(e, t) {
  var r = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var o = Sr(this.node(), r).tween, s = 0, c = o.length, f; s < c; ++s)
      if ((f = o[s]).name === e) return f.value;
    return null;
  }
  return this.each((t == null ? Dhe : zhe)(r, e, t));
}
function tp(e, t, r) {
  var o = e._id;
  return (
    e.each(function () {
      var s = Hr(this, o);
      (s.value || (s.value = {}))[t] = r.apply(this, arguments);
    }),
    function (s) {
      return Sr(s, o).value[t];
    }
  );
}
function p1(e, t) {
  var r;
  return (typeof t == "number" ? Di : t instanceof ea ? g0 : (r = ea(t)) ? ((t = r), g0) : bhe)(
    e,
    t,
  );
}
function Fhe(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function Hhe(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qhe(e, t, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = this.getAttribute(e);
    return f === s ? null : f === o ? c : (c = t((o = f), r));
  };
}
function Bhe(e, t, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = this.getAttributeNS(e.space, e.local);
    return f === s ? null : f === o ? c : (c = t((o = f), r));
  };
}
function Whe(e, t, r) {
  var o, s, c;
  return function () {
    var f,
      d = r(this),
      h;
    return d == null
      ? void this.removeAttribute(e)
      : ((f = this.getAttribute(e)),
        (h = d + ""),
        f === h ? null : f === o && h === s ? c : ((s = h), (c = t((o = f), d))));
  };
}
function Uhe(e, t, r) {
  var o, s, c;
  return function () {
    var f,
      d = r(this),
      h;
    return d == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((f = this.getAttributeNS(e.space, e.local)),
        (h = d + ""),
        f === h ? null : f === o && h === s ? c : ((s = h), (c = t((o = f), d))));
  };
}
function Vhe(e, t) {
  var r = zu(e),
    o = r === "transform" ? She : p1;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (r.local ? Uhe : Whe)(r, o, tp(this, "attr." + e, t))
      : t == null
        ? (r.local ? Hhe : Fhe)(r)
        : (r.local ? Bhe : qhe)(r, o, t),
  );
}
function jhe(e, t) {
  return function (r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Ghe(e, t) {
  return function (r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Khe(e, t) {
  var r, o;
  function s() {
    var c = t.apply(this, arguments);
    return c !== o && (r = (o = c) && Ghe(e, c)), r;
  }
  return (s._value = t), s;
}
function Xhe(e, t) {
  var r, o;
  function s() {
    var c = t.apply(this, arguments);
    return c !== o && (r = (o = c) && jhe(e, c)), r;
  }
  return (s._value = t), s;
}
function Yhe(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var o = zu(e);
  return this.tween(r, (o.local ? Khe : Xhe)(o, t));
}
function Zhe(e, t) {
  return function () {
    ep(this, e).delay = +t.apply(this, arguments);
  };
}
function Jhe(e, t) {
  return (
    (t = +t),
    function () {
      ep(this, e).delay = t;
    }
  );
}
function Qhe(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? Zhe : Jhe)(t, e))
    : Sr(this.node(), t).delay;
}
function epe(e, t) {
  return function () {
    Hr(this, e).duration = +t.apply(this, arguments);
  };
}
function tpe(e, t) {
  return (
    (t = +t),
    function () {
      Hr(this, e).duration = t;
    }
  );
}
function npe(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? epe : tpe)(t, e))
    : Sr(this.node(), t).duration;
}
function rpe(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    Hr(this, e).ease = t;
  };
}
function ipe(e) {
  var t = this._id;
  return arguments.length ? this.each(rpe(t, e)) : Sr(this.node(), t).ease;
}
function ope(e, t) {
  return function () {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Hr(this, e).ease = r;
  };
}
function spe(e) {
  if (typeof e != "function") throw new Error();
  return this.each(ope(this._id, e));
}
function lpe(e) {
  typeof e != "function" && (e = Gw(e));
  for (var t = this._groups, r = t.length, o = new Array(r), s = 0; s < r; ++s)
    for (var c = t[s], f = c.length, d = (o[s] = []), h, p = 0; p < f; ++p)
      (h = c[p]) && e.call(h, h.__data__, p, c) && d.push(h);
  return new ai(o, this._parents, this._name, this._id);
}
function ape(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      r = e._groups,
      o = t.length,
      s = r.length,
      c = Math.min(o, s),
      f = new Array(o),
      d = 0;
    d < c;
    ++d
  )
    for (var h = t[d], p = r[d], v = h.length, y = (f[d] = new Array(v)), b, x = 0; x < v; ++x)
      (b = h[x] || p[x]) && (y[x] = b);
  for (; d < o; ++d) f[d] = t[d];
  return new ai(f, this._parents, this._name, this._id);
}
function cpe(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var r = t.indexOf(".");
      return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
    });
}
function upe(e, t, r) {
  var o,
    s,
    c = cpe(t) ? ep : Hr;
  return function () {
    var f = c(this, e),
      d = f.on;
    d !== o && (s = (o = d).copy()).on(t, r), (f.on = s);
  };
}
function fpe(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Sr(this.node(), r).on.on(e) : this.each(upe(r, e, t));
}
function dpe(e) {
  return function () {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function hpe() {
  return this.on("end.remove", dpe(this._id));
}
function ppe(e) {
  var t = this._name,
    r = this._id;
  typeof e != "function" && (e = Xh(e));
  for (var o = this._groups, s = o.length, c = new Array(s), f = 0; f < s; ++f)
    for (var d = o[f], h = d.length, p = (c[f] = new Array(h)), v, y, b = 0; b < h; ++b)
      (v = d[b]) &&
        (y = e.call(v, v.__data__, b, d)) &&
        ("__data__" in v && (y.__data__ = v.__data__), (p[b] = y), Fu(p[b], t, r, b, p, Sr(v, r)));
  return new ai(c, this._parents, t, r);
}
function gpe(e) {
  var t = this._name,
    r = this._id;
  typeof e != "function" && (e = jw(e));
  for (var o = this._groups, s = o.length, c = [], f = [], d = 0; d < s; ++d)
    for (var h = o[d], p = h.length, v, y = 0; y < p; ++y)
      if ((v = h[y])) {
        for (var b = e.call(v, v.__data__, y, h), x, C = Sr(v, r), E = 0, N = b.length; E < N; ++E)
          (x = b[E]) && Fu(x, t, r, E, b, C);
        c.push(b), f.push(v);
      }
  return new ai(c, f, t, r);
}
var vpe = da.prototype.constructor;
function mpe() {
  return new vpe(this._groups, this._parents);
}
function ype(e, t) {
  var r, o, s;
  return function () {
    var c = Ls(this, e),
      f = (this.style.removeProperty(e), Ls(this, e));
    return c === f ? null : c === r && f === o ? s : (s = t((r = c), (o = f)));
  };
}
function g1(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function bpe(e, t, r) {
  var o,
    s = r + "",
    c;
  return function () {
    var f = Ls(this, e);
    return f === s ? null : f === o ? c : (c = t((o = f), r));
  };
}
function wpe(e, t, r) {
  var o, s, c;
  return function () {
    var f = Ls(this, e),
      d = r(this),
      h = d + "";
    return (
      d == null && (h = d = (this.style.removeProperty(e), Ls(this, e))),
      f === h ? null : f === o && h === s ? c : ((s = h), (c = t((o = f), d)))
    );
  };
}
function xpe(e, t) {
  var r,
    o,
    s,
    c = "style." + t,
    f = "end." + c,
    d;
  return function () {
    var h = Hr(this, e),
      p = h.on,
      v = h.value[c] == null ? d || (d = g1(t)) : void 0;
    (p !== r || s !== v) && (o = (r = p).copy()).on(f, (s = v)), (h.on = o);
  };
}
function _pe(e, t, r) {
  var o = (e += "") == "transform" ? _he : p1;
  return t == null
    ? this.styleTween(e, ype(e, o)).on("end.style." + e, g1(e))
    : typeof t == "function"
      ? this.styleTween(e, wpe(e, o, tp(this, "style." + e, t))).each(xpe(this._id, e))
      : this.styleTween(e, bpe(e, o, t), r).on("end.style." + e, null);
}
function Spe(e, t, r) {
  return function (o) {
    this.style.setProperty(e, t.call(this, o), r);
  };
}
function kpe(e, t, r) {
  var o, s;
  function c() {
    var f = t.apply(this, arguments);
    return f !== s && (o = (s = f) && Spe(e, f, r)), o;
  }
  return (c._value = t), c;
}
function Tpe(e, t, r) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, kpe(e, t, r ?? ""));
}
function Cpe(e) {
  return function () {
    this.textContent = e;
  };
}
function Epe(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Lpe(e) {
  return this.tween(
    "text",
    typeof e == "function" ? Epe(tp(this, "text", e)) : Cpe(e == null ? "" : e + ""),
  );
}
function Ape(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function Mpe(e) {
  var t, r;
  function o() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && Ape(s)), t;
  }
  return (o._value = e), o;
}
function Npe(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Mpe(e));
}
function $pe() {
  for (
    var e = this._name, t = this._id, r = v1(), o = this._groups, s = o.length, c = 0;
    c < s;
    ++c
  )
    for (var f = o[c], d = f.length, h, p = 0; p < d; ++p)
      if ((h = f[p])) {
        var v = Sr(h, t);
        Fu(h, e, r, p, f, {
          time: v.time + v.delay + v.duration,
          delay: 0,
          duration: v.duration,
          ease: v.ease,
        });
      }
  return new ai(o, this._parents, e, r);
}
function Ope() {
  var e,
    t,
    r = this,
    o = r._id,
    s = r.size();
  return new Promise(function (c, f) {
    var d = { value: f },
      h = {
        value: function () {
          --s === 0 && c();
        },
      };
    r.each(function () {
      var p = Hr(this, o),
        v = p.on;
      v !== e && ((t = (e = v).copy()), t._.cancel.push(d), t._.interrupt.push(d), t._.end.push(h)),
        (p.on = t);
    }),
      s === 0 && c();
  });
}
var Ppe = 0;
function ai(e, t, r, o) {
  (this._groups = e), (this._parents = t), (this._name = r), (this._id = o);
}
function v1() {
  return ++Ppe;
}
var Zr = da.prototype;
ai.prototype = {
  constructor: ai,
  select: ppe,
  selectAll: gpe,
  selectChild: Zr.selectChild,
  selectChildren: Zr.selectChildren,
  filter: lpe,
  merge: ape,
  selection: mpe,
  transition: $pe,
  call: Zr.call,
  nodes: Zr.nodes,
  node: Zr.node,
  size: Zr.size,
  empty: Zr.empty,
  each: Zr.each,
  on: fpe,
  attr: Vhe,
  attrTween: Yhe,
  style: _pe,
  styleTween: Tpe,
  text: Lpe,
  textTween: Npe,
  remove: hpe,
  tween: Ihe,
  delay: Qhe,
  duration: npe,
  ease: ipe,
  easeVarying: spe,
  end: Ope,
  [Symbol.iterator]: Zr[Symbol.iterator],
};
function Rpe(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Dpe = { time: null, delay: 0, duration: 250, ease: Rpe };
function zpe(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return r;
}
function Ipe(e) {
  var t, r;
  e instanceof ai
    ? ((t = e._id), (e = e._name))
    : ((t = v1()), ((r = Dpe).time = Jh()), (e = e == null ? null : e + ""));
  for (var o = this._groups, s = o.length, c = 0; c < s; ++c)
    for (var f = o[c], d = f.length, h, p = 0; p < d; ++p)
      (h = f[p]) && Fu(h, e, t, p, f, r || zpe(h, t));
  return new ai(o, this._parents, e, t);
}
da.prototype.interrupt = Rhe;
da.prototype.transition = Ipe;
const fc = (e) => () => e;
function Fpe(e, { sourceEvent: t, target: r, transform: o, dispatch: s }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: s },
  });
}
function ti(e, t, r) {
  (this.k = e), (this.x = t), (this.y = r);
}
ti.prototype = {
  constructor: ti,
  scale: function (e) {
    return e === 1 ? this : new ti(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0) ? this : new ti(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var np = new ti(1, 0, 0);
ti.prototype;
function sd(e) {
  e.stopImmediatePropagation();
}
function pl(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hpe(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function qpe() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function _0() {
  return this.__zoom || np;
}
function Bpe(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function Wpe() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Upe(e, t, r) {
  var o = e.invertX(t[0][0]) - r[0][0],
    s = e.invertX(t[1][0]) - r[1][0],
    c = e.invertY(t[0][1]) - r[0][1],
    f = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s),
    f > c ? (c + f) / 2 : Math.min(0, c) || Math.max(0, f),
  );
}
function Vpe() {
  var e = Hpe,
    t = qpe,
    r = Upe,
    o = Bpe,
    s = Wpe,
    c = [0, 1 / 0],
    f = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    d = 250,
    h = Ehe,
    p = ha("start", "zoom", "end"),
    v,
    y,
    b,
    x = 500,
    C = 150,
    E = 0,
    N = 10;
  function M(I) {
    I.property("__zoom", _0)
      .on("wheel.zoom", ie, { passive: !1 })
      .on("mousedown.zoom", ne)
      .on("dblclick.zoom", j)
      .filter(s)
      .on("touchstart.zoom", te)
      .on("touchmove.zoom", K)
      .on("touchend.zoom touchcancel.zoom", V)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  (M.transform = function (I, k, q, W) {
    var re = I.selection ? I.selection() : I;
    re.property("__zoom", _0),
      I !== re
        ? H(I, k, q, W)
        : re.interrupt().each(function () {
            z(this, arguments)
              .event(W)
              .start()
              .zoom(null, typeof k == "function" ? k.apply(this, arguments) : k)
              .end();
          });
  }),
    (M.scaleBy = function (I, k, q, W) {
      M.scaleTo(
        I,
        function () {
          var re = this.__zoom.k,
            me = typeof k == "function" ? k.apply(this, arguments) : k;
          return re * me;
        },
        q,
        W,
      );
    }),
    (M.scaleTo = function (I, k, q, W) {
      M.transform(
        I,
        function () {
          var re = t.apply(this, arguments),
            me = this.__zoom,
            Me = q == null ? A(re) : typeof q == "function" ? q.apply(this, arguments) : q,
            Be = me.invert(Me),
            Ve = typeof k == "function" ? k.apply(this, arguments) : k;
          return r(D(L(me, Ve), Me, Be), re, f);
        },
        q,
        W,
      );
    }),
    (M.translateBy = function (I, k, q, W) {
      M.transform(
        I,
        function () {
          return r(
            this.__zoom.translate(
              typeof k == "function" ? k.apply(this, arguments) : k,
              typeof q == "function" ? q.apply(this, arguments) : q,
            ),
            t.apply(this, arguments),
            f,
          );
        },
        null,
        W,
      );
    }),
    (M.translateTo = function (I, k, q, W, re) {
      M.transform(
        I,
        function () {
          var me = t.apply(this, arguments),
            Me = this.__zoom,
            Be = W == null ? A(me) : typeof W == "function" ? W.apply(this, arguments) : W;
          return r(
            np
              .translate(Be[0], Be[1])
              .scale(Me.k)
              .translate(
                typeof k == "function" ? -k.apply(this, arguments) : -k,
                typeof q == "function" ? -q.apply(this, arguments) : -q,
              ),
            me,
            f,
          );
        },
        W,
        re,
      );
    });
  function L(I, k) {
    return (k = Math.max(c[0], Math.min(c[1], k))), k === I.k ? I : new ti(k, I.x, I.y);
  }
  function D(I, k, q) {
    var W = k[0] - q[0] * I.k,
      re = k[1] - q[1] * I.k;
    return W === I.x && re === I.y ? I : new ti(I.k, W, re);
  }
  function A(I) {
    return [(+I[0][0] + +I[1][0]) / 2, (+I[0][1] + +I[1][1]) / 2];
  }
  function H(I, k, q, W) {
    I.on("start.zoom", function () {
      z(this, arguments).event(W).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        z(this, arguments).event(W).end();
      })
      .tween("zoom", function () {
        var re = this,
          me = arguments,
          Me = z(re, me).event(W),
          Be = t.apply(re, me),
          Ve = q == null ? A(Be) : typeof q == "function" ? q.apply(re, me) : q,
          it = Math.max(Be[1][0] - Be[0][0], Be[1][1] - Be[0][1]),
          nt = re.__zoom,
          Ze = typeof k == "function" ? k.apply(re, me) : k,
          Te = h(nt.invert(Ve).concat(it / nt.k), Ze.invert(Ve).concat(it / Ze.k));
        return function (X) {
          if (X === 1) X = Ze;
          else {
            var ae = Te(X),
              de = it / ae[2];
            X = new ti(de, Ve[0] - ae[0] * de, Ve[1] - ae[1] * de);
          }
          Me.zoom(null, X);
        };
      });
  }
  function z(I, k, q) {
    return (!q && I.__zooming) || new J(I, k);
  }
  function J(I, k) {
    (this.that = I),
      (this.args = k),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(I, k)),
      (this.taps = 0);
  }
  J.prototype = {
    event: function (I) {
      return I && (this.sourceEvent = I), this;
    },
    start: function () {
      return ++this.active === 1 && ((this.that.__zooming = this), this.emit("start")), this;
    },
    zoom: function (I, k) {
      return (
        this.mouse && I !== "mouse" && (this.mouse[1] = k.invert(this.mouse[0])),
        this.touch0 && I !== "touch" && (this.touch0[1] = k.invert(this.touch0[0])),
        this.touch1 && I !== "touch" && (this.touch1[1] = k.invert(this.touch1[0])),
        (this.that.__zoom = k),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function (I) {
      var k = On(this.that).datum();
      p.call(
        I,
        this.that,
        new Fpe(I, {
          sourceEvent: this.sourceEvent,
          target: M,
          type: I,
          transform: this.that.__zoom,
          dispatch: p,
        }),
        k,
      );
    },
  };
  function ie(I, ...k) {
    if (!e.apply(this, arguments)) return;
    var q = z(this, k).event(I),
      W = this.__zoom,
      re = Math.max(c[0], Math.min(c[1], W.k * Math.pow(2, o.apply(this, arguments)))),
      me = ei(I);
    if (q.wheel)
      (q.mouse[0][0] !== me[0] || q.mouse[0][1] !== me[1]) &&
        (q.mouse[1] = W.invert((q.mouse[0] = me))),
        clearTimeout(q.wheel);
    else {
      if (W.k === re) return;
      (q.mouse = [me, W.invert(me)]), Ec(this), q.start();
    }
    pl(I),
      (q.wheel = setTimeout(Me, C)),
      q.zoom("mouse", r(D(L(W, re), q.mouse[0], q.mouse[1]), q.extent, f));
    function Me() {
      (q.wheel = null), q.end();
    }
  }
  function ne(I, ...k) {
    if (b || !e.apply(this, arguments)) return;
    var q = I.currentTarget,
      W = z(this, k, !0).event(I),
      re = On(I.view).on("mousemove.zoom", Ve, !0).on("mouseup.zoom", it, !0),
      me = ei(I, q),
      Me = I.clientX,
      Be = I.clientY;
    r1(I.view), sd(I), (W.mouse = [me, this.__zoom.invert(me)]), Ec(this), W.start();
    function Ve(nt) {
      if ((pl(nt), !W.moved)) {
        var Ze = nt.clientX - Me,
          Te = nt.clientY - Be;
        W.moved = Ze * Ze + Te * Te > E;
      }
      W.event(nt).zoom(
        "mouse",
        r(D(W.that.__zoom, (W.mouse[0] = ei(nt, q)), W.mouse[1]), W.extent, f),
      );
    }
    function it(nt) {
      re.on("mousemove.zoom mouseup.zoom", null), i1(nt.view, W.moved), pl(nt), W.event(nt).end();
    }
  }
  function j(I, ...k) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom,
        W = ei(I.changedTouches ? I.changedTouches[0] : I, this),
        re = q.invert(W),
        me = q.k * (I.shiftKey ? 0.5 : 2),
        Me = r(D(L(q, me), W, re), t.apply(this, k), f);
      pl(I),
        d > 0
          ? On(this).transition().duration(d).call(H, Me, W, I)
          : On(this).call(M.transform, Me, W, I);
    }
  }
  function te(I, ...k) {
    if (e.apply(this, arguments)) {
      var q = I.touches,
        W = q.length,
        re = z(this, k, I.changedTouches.length === W).event(I),
        me,
        Me,
        Be,
        Ve;
      for (sd(I), Me = 0; Me < W; ++Me)
        (Be = q[Me]),
          (Ve = ei(Be, this)),
          (Ve = [Ve, this.__zoom.invert(Ve), Be.identifier]),
          re.touch0
            ? !re.touch1 && re.touch0[2] !== Ve[2] && ((re.touch1 = Ve), (re.taps = 0))
            : ((re.touch0 = Ve), (me = !0), (re.taps = 1 + !!v));
      v && (v = clearTimeout(v)),
        me &&
          (re.taps < 2 &&
            ((y = Ve[0]),
            (v = setTimeout(function () {
              v = null;
            }, x))),
          Ec(this),
          re.start());
    }
  }
  function K(I, ...k) {
    if (this.__zooming) {
      var q = z(this, k).event(I),
        W = I.changedTouches,
        re = W.length,
        me,
        Me,
        Be,
        Ve;
      for (pl(I), me = 0; me < re; ++me)
        (Me = W[me]),
          (Be = ei(Me, this)),
          q.touch0 && q.touch0[2] === Me.identifier
            ? (q.touch0[0] = Be)
            : q.touch1 && q.touch1[2] === Me.identifier && (q.touch1[0] = Be);
      if (((Me = q.that.__zoom), q.touch1)) {
        var it = q.touch0[0],
          nt = q.touch0[1],
          Ze = q.touch1[0],
          Te = q.touch1[1],
          X = (X = Ze[0] - it[0]) * X + (X = Ze[1] - it[1]) * X,
          ae = (ae = Te[0] - nt[0]) * ae + (ae = Te[1] - nt[1]) * ae;
        (Me = L(Me, Math.sqrt(X / ae))),
          (Be = [(it[0] + Ze[0]) / 2, (it[1] + Ze[1]) / 2]),
          (Ve = [(nt[0] + Te[0]) / 2, (nt[1] + Te[1]) / 2]);
      } else if (q.touch0) (Be = q.touch0[0]), (Ve = q.touch0[1]);
      else return;
      q.zoom("touch", r(D(Me, Be, Ve), q.extent, f));
    }
  }
  function V(I, ...k) {
    if (this.__zooming) {
      var q = z(this, k).event(I),
        W = I.changedTouches,
        re = W.length,
        me,
        Me;
      for (
        sd(I),
          b && clearTimeout(b),
          b = setTimeout(function () {
            b = null;
          }, x),
          me = 0;
        me < re;
        ++me
      )
        (Me = W[me]),
          q.touch0 && q.touch0[2] === Me.identifier
            ? delete q.touch0
            : q.touch1 && q.touch1[2] === Me.identifier && delete q.touch1;
      if ((q.touch1 && !q.touch0 && ((q.touch0 = q.touch1), delete q.touch1), q.touch0))
        q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (
        (q.end(), q.taps === 2 && ((Me = ei(Me, this)), Math.hypot(y[0] - Me[0], y[1] - Me[1]) < N))
      ) {
        var Be = On(this).on("dblclick.zoom");
        Be && Be.apply(this, arguments);
      }
    }
  }
  return (
    (M.wheelDelta = function (I) {
      return arguments.length ? ((o = typeof I == "function" ? I : fc(+I)), M) : o;
    }),
    (M.filter = function (I) {
      return arguments.length ? ((e = typeof I == "function" ? I : fc(!!I)), M) : e;
    }),
    (M.touchable = function (I) {
      return arguments.length ? ((s = typeof I == "function" ? I : fc(!!I)), M) : s;
    }),
    (M.extent = function (I) {
      return arguments.length
        ? ((t =
            typeof I == "function"
              ? I
              : fc([
                  [+I[0][0], +I[0][1]],
                  [+I[1][0], +I[1][1]],
                ])),
          M)
        : t;
    }),
    (M.scaleExtent = function (I) {
      return arguments.length ? ((c[0] = +I[0]), (c[1] = +I[1]), M) : [c[0], c[1]];
    }),
    (M.translateExtent = function (I) {
      return arguments.length
        ? ((f[0][0] = +I[0][0]),
          (f[1][0] = +I[1][0]),
          (f[0][1] = +I[0][1]),
          (f[1][1] = +I[1][1]),
          M)
        : [
            [f[0][0], f[0][1]],
            [f[1][0], f[1][1]],
          ];
    }),
    (M.constrain = function (I) {
      return arguments.length ? ((r = I), M) : r;
    }),
    (M.duration = function (I) {
      return arguments.length ? ((d = +I), M) : d;
    }),
    (M.interpolate = function (I) {
      return arguments.length ? ((h = I), M) : h;
    }),
    (M.on = function () {
      var I = p.on.apply(p, arguments);
      return I === p ? M : I;
    }),
    (M.clickDistance = function (I) {
      return arguments.length ? ((E = (I = +I) * I), M) : Math.sqrt(E);
    }),
    (M.tapDistance = function (I) {
      return arguments.length ? ((N = +I), M) : N;
    }),
    M
  );
}
function jpe(e) {
  const t = +this._x.call(null, e),
    r = +this._y.call(null, e);
  return m1(this.cover(t, r), t, r, e);
}
function m1(e, t, r, o) {
  if (isNaN(t) || isNaN(r)) return e;
  var s,
    c = e._root,
    f = { data: o },
    d = e._x0,
    h = e._y0,
    p = e._x1,
    v = e._y1,
    y,
    b,
    x,
    C,
    E,
    N,
    M,
    L;
  if (!c) return (e._root = f), e;
  for (; c.length; )
    if (
      ((E = t >= (y = (d + p) / 2)) ? (d = y) : (p = y),
      (N = r >= (b = (h + v) / 2)) ? (h = b) : (v = b),
      (s = c),
      !(c = c[(M = (N << 1) | E)]))
    )
      return (s[M] = f), e;
  if (((x = +e._x.call(null, c.data)), (C = +e._y.call(null, c.data)), t === x && r === C))
    return (f.next = c), s ? (s[M] = f) : (e._root = f), e;
  do
    (s = s ? (s[M] = new Array(4)) : (e._root = new Array(4))),
      (E = t >= (y = (d + p) / 2)) ? (d = y) : (p = y),
      (N = r >= (b = (h + v) / 2)) ? (h = b) : (v = b);
  while ((M = (N << 1) | E) === (L = ((C >= b) << 1) | (x >= y)));
  return (s[L] = c), (s[M] = f), e;
}
function Gpe(e) {
  var t,
    r,
    o = e.length,
    s,
    c,
    f = new Array(o),
    d = new Array(o),
    h = 1 / 0,
    p = 1 / 0,
    v = -1 / 0,
    y = -1 / 0;
  for (r = 0; r < o; ++r)
    isNaN((s = +this._x.call(null, (t = e[r])))) ||
      isNaN((c = +this._y.call(null, t))) ||
      ((f[r] = s),
      (d[r] = c),
      s < h && (h = s),
      s > v && (v = s),
      c < p && (p = c),
      c > y && (y = c));
  if (h > v || p > y) return this;
  for (this.cover(h, p).cover(v, y), r = 0; r < o; ++r) m1(this, f[r], d[r], e[r]);
  return this;
}
function Kpe(e, t) {
  if (isNaN((e = +e)) || isNaN((t = +t))) return this;
  var r = this._x0,
    o = this._y0,
    s = this._x1,
    c = this._y1;
  if (isNaN(r)) (s = (r = Math.floor(e)) + 1), (c = (o = Math.floor(t)) + 1);
  else {
    for (var f = s - r || 1, d = this._root, h, p; r > e || e >= s || o > t || t >= c; )
      switch (
        ((p = ((t < o) << 1) | (e < r)), (h = new Array(4)), (h[p] = d), (d = h), (f *= 2), p)
      ) {
        case 0:
          (s = r + f), (c = o + f);
          break;
        case 1:
          (r = s - f), (c = o + f);
          break;
        case 2:
          (s = r + f), (o = c - f);
          break;
        case 3:
          (r = s - f), (o = c - f);
          break;
      }
    this._root && this._root.length && (this._root = d);
  }
  return (this._x0 = r), (this._y0 = o), (this._x1 = s), (this._y1 = c), this;
}
function Xpe() {
  var e = [];
  return (
    this.visit(function (t) {
      if (!t.length)
        do e.push(t.data);
        while ((t = t.next));
    }),
    e
  );
}
function Ype(e) {
  return arguments.length
    ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
    : isNaN(this._x0)
      ? void 0
      : [
          [this._x0, this._y0],
          [this._x1, this._y1],
        ];
}
function Sn(e, t, r, o, s) {
  (this.node = e), (this.x0 = t), (this.y0 = r), (this.x1 = o), (this.y1 = s);
}
function Zpe(e, t, r) {
  var o,
    s = this._x0,
    c = this._y0,
    f,
    d,
    h,
    p,
    v = this._x1,
    y = this._y1,
    b = [],
    x = this._root,
    C,
    E;
  for (
    x && b.push(new Sn(x, s, c, v, y)),
      r == null ? (r = 1 / 0) : ((s = e - r), (c = t - r), (v = e + r), (y = t + r), (r *= r));
    (C = b.pop());

  )
    if (!(!(x = C.node) || (f = C.x0) > v || (d = C.y0) > y || (h = C.x1) < s || (p = C.y1) < c))
      if (x.length) {
        var N = (f + h) / 2,
          M = (d + p) / 2;
        b.push(
          new Sn(x[3], N, M, h, p),
          new Sn(x[2], f, M, N, p),
          new Sn(x[1], N, d, h, M),
          new Sn(x[0], f, d, N, M),
        ),
          (E = ((t >= M) << 1) | (e >= N)) &&
            ((C = b[b.length - 1]),
            (b[b.length - 1] = b[b.length - 1 - E]),
            (b[b.length - 1 - E] = C));
      } else {
        var L = e - +this._x.call(null, x.data),
          D = t - +this._y.call(null, x.data),
          A = L * L + D * D;
        if (A < r) {
          var H = Math.sqrt((r = A));
          (s = e - H), (c = t - H), (v = e + H), (y = t + H), (o = x.data);
        }
      }
  return o;
}
function Jpe(e) {
  if (isNaN((v = +this._x.call(null, e))) || isNaN((y = +this._y.call(null, e)))) return this;
  var t,
    r = this._root,
    o,
    s,
    c,
    f = this._x0,
    d = this._y0,
    h = this._x1,
    p = this._y1,
    v,
    y,
    b,
    x,
    C,
    E,
    N,
    M;
  if (!r) return this;
  if (r.length)
    for (;;) {
      if (
        ((C = v >= (b = (f + h) / 2)) ? (f = b) : (h = b),
        (E = y >= (x = (d + p) / 2)) ? (d = x) : (p = x),
        (t = r),
        !(r = r[(N = (E << 1) | C)]))
      )
        return this;
      if (!r.length) break;
      (t[(N + 1) & 3] || t[(N + 2) & 3] || t[(N + 3) & 3]) && ((o = t), (M = N));
    }
  for (; r.data !== e; ) if (((s = r), !(r = r.next))) return this;
  return (
    (c = r.next) && delete r.next,
    s
      ? (c ? (s.next = c) : delete s.next, this)
      : t
        ? (c ? (t[N] = c) : delete t[N],
          (r = t[0] || t[1] || t[2] || t[3]) &&
            r === (t[3] || t[2] || t[1] || t[0]) &&
            !r.length &&
            (o ? (o[M] = r) : (this._root = r)),
          this)
        : ((this._root = c), this)
  );
}
function Qpe(e) {
  for (var t = 0, r = e.length; t < r; ++t) this.remove(e[t]);
  return this;
}
function ege() {
  return this._root;
}
function tge() {
  var e = 0;
  return (
    this.visit(function (t) {
      if (!t.length)
        do ++e;
        while ((t = t.next));
    }),
    e
  );
}
function nge(e) {
  var t = [],
    r,
    o = this._root,
    s,
    c,
    f,
    d,
    h;
  for (o && t.push(new Sn(o, this._x0, this._y0, this._x1, this._y1)); (r = t.pop()); )
    if (!e((o = r.node), (c = r.x0), (f = r.y0), (d = r.x1), (h = r.y1)) && o.length) {
      var p = (c + d) / 2,
        v = (f + h) / 2;
      (s = o[3]) && t.push(new Sn(s, p, v, d, h)),
        (s = o[2]) && t.push(new Sn(s, c, v, p, h)),
        (s = o[1]) && t.push(new Sn(s, p, f, d, v)),
        (s = o[0]) && t.push(new Sn(s, c, f, p, v));
    }
  return this;
}
function rge(e) {
  var t = [],
    r = [],
    o;
  for (
    this._root && t.push(new Sn(this._root, this._x0, this._y0, this._x1, this._y1));
    (o = t.pop());

  ) {
    var s = o.node;
    if (s.length) {
      var c,
        f = o.x0,
        d = o.y0,
        h = o.x1,
        p = o.y1,
        v = (f + h) / 2,
        y = (d + p) / 2;
      (c = s[0]) && t.push(new Sn(c, f, d, v, y)),
        (c = s[1]) && t.push(new Sn(c, v, d, h, y)),
        (c = s[2]) && t.push(new Sn(c, f, y, v, p)),
        (c = s[3]) && t.push(new Sn(c, v, y, h, p));
    }
    r.push(o);
  }
  for (; (o = r.pop()); ) e(o.node, o.x0, o.y0, o.x1, o.y1);
  return this;
}
function ige(e) {
  return e[0];
}
function oge(e) {
  return arguments.length ? ((this._x = e), this) : this._x;
}
function sge(e) {
  return e[1];
}
function lge(e) {
  return arguments.length ? ((this._y = e), this) : this._y;
}
function rp(e, t, r) {
  var o = new ip(t ?? ige, r ?? sge, NaN, NaN, NaN, NaN);
  return e == null ? o : o.addAll(e);
}
function ip(e, t, r, o, s, c) {
  (this._x = e),
    (this._y = t),
    (this._x0 = r),
    (this._y0 = o),
    (this._x1 = s),
    (this._y1 = c),
    (this._root = void 0);
}
function S0(e) {
  for (var t = { data: e.data }, r = t; (e = e.next); ) r = r.next = { data: e.data };
  return t;
}
var Tn = (rp.prototype = ip.prototype);
Tn.copy = function () {
  var e = new ip(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
    t = this._root,
    r,
    o;
  if (!t) return e;
  if (!t.length) return (e._root = S0(t)), e;
  for (r = [{ source: t, target: (e._root = new Array(4)) }]; (t = r.pop()); )
    for (var s = 0; s < 4; ++s)
      (o = t.source[s]) &&
        (o.length
          ? r.push({ source: o, target: (t.target[s] = new Array(4)) })
          : (t.target[s] = S0(o)));
  return e;
};
Tn.add = jpe;
Tn.addAll = Gpe;
Tn.cover = Kpe;
Tn.data = Xpe;
Tn.extent = Ype;
Tn.find = Zpe;
Tn.remove = Jpe;
Tn.removeAll = Qpe;
Tn.root = ege;
Tn.size = tge;
Tn.visit = nge;
Tn.visitAfter = rge;
Tn.x = oge;
Tn.y = lge;
function kn(e) {
  return function () {
    return e;
  };
}
function Fi(e) {
  return (e() - 0.5) * 1e-6;
}
function age(e) {
  return e.x + e.vx;
}
function cge(e) {
  return e.y + e.vy;
}
function uge(e) {
  var t,
    r,
    o,
    s = 1,
    c = 1;
  typeof e != "function" && (e = kn(e == null ? 1 : +e));
  function f() {
    for (var p, v = t.length, y, b, x, C, E, N, M = 0; M < c; ++M)
      for (y = rp(t, age, cge).visitAfter(d), p = 0; p < v; ++p)
        (b = t[p]), (E = r[b.index]), (N = E * E), (x = b.x + b.vx), (C = b.y + b.vy), y.visit(L);
    function L(D, A, H, z, J) {
      var ie = D.data,
        ne = D.r,
        j = E + ne;
      if (ie) {
        if (ie.index > b.index) {
          var te = x - ie.x - ie.vx,
            K = C - ie.y - ie.vy,
            V = te * te + K * K;
          V < j * j &&
            (te === 0 && ((te = Fi(o)), (V += te * te)),
            K === 0 && ((K = Fi(o)), (V += K * K)),
            (V = ((j - (V = Math.sqrt(V))) / V) * s),
            (b.vx += (te *= V) * (j = (ne *= ne) / (N + ne))),
            (b.vy += (K *= V) * j),
            (ie.vx -= te * (j = 1 - j)),
            (ie.vy -= K * j));
        }
        return;
      }
      return A > x + j || z < x - j || H > C + j || J < C - j;
    }
  }
  function d(p) {
    if (p.data) return (p.r = r[p.data.index]);
    for (var v = (p.r = 0); v < 4; ++v) p[v] && p[v].r > p.r && (p.r = p[v].r);
  }
  function h() {
    if (t) {
      var p,
        v = t.length,
        y;
      for (r = new Array(v), p = 0; p < v; ++p) (y = t[p]), (r[y.index] = +e(y, p, t));
    }
  }
  return (
    (f.initialize = function (p, v) {
      (t = p), (o = v), h();
    }),
    (f.iterations = function (p) {
      return arguments.length ? ((c = +p), f) : c;
    }),
    (f.strength = function (p) {
      return arguments.length ? ((s = +p), f) : s;
    }),
    (f.radius = function (p) {
      return arguments.length ? ((e = typeof p == "function" ? p : kn(+p)), h(), f) : e;
    }),
    f
  );
}
function fge(e) {
  return e.index;
}
function k0(e, t) {
  var r = e.get(t);
  if (!r) throw new Error("node not found: " + t);
  return r;
}
function dge(e) {
  var t = fge,
    r = y,
    o,
    s = kn(30),
    c,
    f,
    d,
    h,
    p,
    v = 1;
  e == null && (e = []);
  function y(N) {
    return 1 / Math.min(d[N.source.index], d[N.target.index]);
  }
  function b(N) {
    for (var M = 0, L = e.length; M < v; ++M)
      for (var D = 0, A, H, z, J, ie, ne, j; D < L; ++D)
        (A = e[D]),
          (H = A.source),
          (z = A.target),
          (J = z.x + z.vx - H.x - H.vx || Fi(p)),
          (ie = z.y + z.vy - H.y - H.vy || Fi(p)),
          (ne = Math.sqrt(J * J + ie * ie)),
          (ne = ((ne - c[D]) / ne) * N * o[D]),
          (J *= ne),
          (ie *= ne),
          (z.vx -= J * (j = h[D])),
          (z.vy -= ie * j),
          (H.vx += J * (j = 1 - j)),
          (H.vy += ie * j);
  }
  function x() {
    if (f) {
      var N,
        M = f.length,
        L = e.length,
        D = new Map(f.map((H, z) => [t(H, z, f), H])),
        A;
      for (N = 0, d = new Array(M); N < L; ++N)
        (A = e[N]),
          (A.index = N),
          typeof A.source != "object" && (A.source = k0(D, A.source)),
          typeof A.target != "object" && (A.target = k0(D, A.target)),
          (d[A.source.index] = (d[A.source.index] || 0) + 1),
          (d[A.target.index] = (d[A.target.index] || 0) + 1);
      for (N = 0, h = new Array(L); N < L; ++N)
        (A = e[N]), (h[N] = d[A.source.index] / (d[A.source.index] + d[A.target.index]));
      (o = new Array(L)), C(), (c = new Array(L)), E();
    }
  }
  function C() {
    if (f) for (var N = 0, M = e.length; N < M; ++N) o[N] = +r(e[N], N, e);
  }
  function E() {
    if (f) for (var N = 0, M = e.length; N < M; ++N) c[N] = +s(e[N], N, e);
  }
  return (
    (b.initialize = function (N, M) {
      (f = N), (p = M), x();
    }),
    (b.links = function (N) {
      return arguments.length ? ((e = N), x(), b) : e;
    }),
    (b.id = function (N) {
      return arguments.length ? ((t = N), b) : t;
    }),
    (b.iterations = function (N) {
      return arguments.length ? ((v = +N), b) : v;
    }),
    (b.strength = function (N) {
      return arguments.length ? ((r = typeof N == "function" ? N : kn(+N)), C(), b) : r;
    }),
    (b.distance = function (N) {
      return arguments.length ? ((s = typeof N == "function" ? N : kn(+N)), E(), b) : s;
    }),
    b
  );
}
const hge = 1664525,
  pge = 1013904223,
  T0 = 4294967296;
function gge() {
  let e = 1;
  return () => (e = (hge * e + pge) % T0) / T0;
}
function vge(e) {
  return e.x;
}
function mge(e) {
  return e.y;
}
var yge = 10,
  bge = Math.PI * (3 - Math.sqrt(5));
function wge(e) {
  var t,
    r = 1,
    o = 0.001,
    s = 1 - Math.pow(o, 1 / 300),
    c = 0,
    f = 0.6,
    d = new Map(),
    h = Qh(y),
    p = ha("tick", "end"),
    v = gge();
  e == null && (e = []);
  function y() {
    b(), p.call("tick", t), r < o && (h.stop(), p.call("end", t));
  }
  function b(E) {
    var N,
      M = e.length,
      L;
    E === void 0 && (E = 1);
    for (var D = 0; D < E; ++D)
      for (
        r += (c - r) * s,
          d.forEach(function (A) {
            A(r);
          }),
          N = 0;
        N < M;
        ++N
      )
        (L = e[N]),
          L.fx == null ? (L.x += L.vx *= f) : ((L.x = L.fx), (L.vx = 0)),
          L.fy == null ? (L.y += L.vy *= f) : ((L.y = L.fy), (L.vy = 0));
    return t;
  }
  function x() {
    for (var E = 0, N = e.length, M; E < N; ++E) {
      if (
        ((M = e[E]),
        (M.index = E),
        M.fx != null && (M.x = M.fx),
        M.fy != null && (M.y = M.fy),
        isNaN(M.x) || isNaN(M.y))
      ) {
        var L = yge * Math.sqrt(0.5 + E),
          D = E * bge;
        (M.x = L * Math.cos(D)), (M.y = L * Math.sin(D));
      }
      (isNaN(M.vx) || isNaN(M.vy)) && (M.vx = M.vy = 0);
    }
  }
  function C(E) {
    return E.initialize && E.initialize(e, v), E;
  }
  return (
    x(),
    (t = {
      tick: b,
      restart: function () {
        return h.restart(y), t;
      },
      stop: function () {
        return h.stop(), t;
      },
      nodes: function (E) {
        return arguments.length ? ((e = E), x(), d.forEach(C), t) : e;
      },
      alpha: function (E) {
        return arguments.length ? ((r = +E), t) : r;
      },
      alphaMin: function (E) {
        return arguments.length ? ((o = +E), t) : o;
      },
      alphaDecay: function (E) {
        return arguments.length ? ((s = +E), t) : +s;
      },
      alphaTarget: function (E) {
        return arguments.length ? ((c = +E), t) : c;
      },
      velocityDecay: function (E) {
        return arguments.length ? ((f = 1 - E), t) : 1 - f;
      },
      randomSource: function (E) {
        return arguments.length ? ((v = E), d.forEach(C), t) : v;
      },
      force: function (E, N) {
        return arguments.length > 1 ? (N == null ? d.delete(E) : d.set(E, C(N)), t) : d.get(E);
      },
      find: function (E, N, M) {
        var L = 0,
          D = e.length,
          A,
          H,
          z,
          J,
          ie;
        for (M == null ? (M = 1 / 0) : (M *= M), L = 0; L < D; ++L)
          (J = e[L]),
            (A = E - J.x),
            (H = N - J.y),
            (z = A * A + H * H),
            z < M && ((ie = J), (M = z));
        return ie;
      },
      on: function (E, N) {
        return arguments.length > 1 ? (p.on(E, N), t) : p.on(E);
      },
    })
  );
}
function xge() {
  var e,
    t,
    r,
    o,
    s = kn(-30),
    c,
    f = 1,
    d = 1 / 0,
    h = 0.81;
  function p(x) {
    var C,
      E = e.length,
      N = rp(e, vge, mge).visitAfter(y);
    for (o = x, C = 0; C < E; ++C) (t = e[C]), N.visit(b);
  }
  function v() {
    if (e) {
      var x,
        C = e.length,
        E;
      for (c = new Array(C), x = 0; x < C; ++x) (E = e[x]), (c[E.index] = +s(E, x, e));
    }
  }
  function y(x) {
    var C = 0,
      E,
      N,
      M = 0,
      L,
      D,
      A;
    if (x.length) {
      for (L = D = A = 0; A < 4; ++A)
        (E = x[A]) &&
          (N = Math.abs(E.value)) &&
          ((C += E.value), (M += N), (L += N * E.x), (D += N * E.y));
      (x.x = L / M), (x.y = D / M);
    } else {
      (E = x), (E.x = E.data.x), (E.y = E.data.y);
      do C += c[E.data.index];
      while ((E = E.next));
    }
    x.value = C;
  }
  function b(x, C, E, N) {
    if (!x.value) return !0;
    var M = x.x - t.x,
      L = x.y - t.y,
      D = N - C,
      A = M * M + L * L;
    if ((D * D) / h < A)
      return (
        A < d &&
          (M === 0 && ((M = Fi(r)), (A += M * M)),
          L === 0 && ((L = Fi(r)), (A += L * L)),
          A < f && (A = Math.sqrt(f * A)),
          (t.vx += (M * x.value * o) / A),
          (t.vy += (L * x.value * o) / A)),
        !0
      );
    if (x.length || A >= d) return;
    (x.data !== t || x.next) &&
      (M === 0 && ((M = Fi(r)), (A += M * M)),
      L === 0 && ((L = Fi(r)), (A += L * L)),
      A < f && (A = Math.sqrt(f * A)));
    do x.data !== t && ((D = (c[x.data.index] * o) / A), (t.vx += M * D), (t.vy += L * D));
    while ((x = x.next));
  }
  return (
    (p.initialize = function (x, C) {
      (e = x), (r = C), v();
    }),
    (p.strength = function (x) {
      return arguments.length ? ((s = typeof x == "function" ? x : kn(+x)), v(), p) : s;
    }),
    (p.distanceMin = function (x) {
      return arguments.length ? ((f = x * x), p) : Math.sqrt(f);
    }),
    (p.distanceMax = function (x) {
      return arguments.length ? ((d = x * x), p) : Math.sqrt(d);
    }),
    (p.theta = function (x) {
      return arguments.length ? ((h = x * x), p) : Math.sqrt(h);
    }),
    p
  );
}
function _ge(e) {
  var t = kn(0.1),
    r,
    o,
    s;
  typeof e != "function" && (e = kn(e == null ? 0 : +e));
  function c(d) {
    for (var h = 0, p = r.length, v; h < p; ++h) (v = r[h]), (v.vx += (s[h] - v.x) * o[h] * d);
  }
  function f() {
    if (r) {
      var d,
        h = r.length;
      for (o = new Array(h), s = new Array(h), d = 0; d < h; ++d)
        o[d] = isNaN((s[d] = +e(r[d], d, r))) ? 0 : +t(r[d], d, r);
    }
  }
  return (
    (c.initialize = function (d) {
      (r = d), f();
    }),
    (c.strength = function (d) {
      return arguments.length ? ((t = typeof d == "function" ? d : kn(+d)), f(), c) : t;
    }),
    (c.x = function (d) {
      return arguments.length ? ((e = typeof d == "function" ? d : kn(+d)), f(), c) : e;
    }),
    c
  );
}
function Sge(e) {
  var t = kn(0.1),
    r,
    o,
    s;
  typeof e != "function" && (e = kn(e == null ? 0 : +e));
  function c(d) {
    for (var h = 0, p = r.length, v; h < p; ++h) (v = r[h]), (v.vy += (s[h] - v.y) * o[h] * d);
  }
  function f() {
    if (r) {
      var d,
        h = r.length;
      for (o = new Array(h), s = new Array(h), d = 0; d < h; ++d)
        o[d] = isNaN((s[d] = +e(r[d], d, r))) ? 0 : +t(r[d], d, r);
    }
  }
  return (
    (c.initialize = function (d) {
      (r = d), f();
    }),
    (c.strength = function (d) {
      return arguments.length ? ((t = typeof d == "function" ? d : kn(+d)), f(), c) : t;
    }),
    (c.y = function (d) {
      return arguments.length ? ((e = typeof d == "function" ? d : kn(+d)), f(), c) : e;
    }),
    c
  );
}
var kge = Object.defineProperty,
  Tge = (e, t, r) =>
    t in e ? kge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  Rt = (e, t, r) => Tge(e, typeof t != "symbol" ? t + "" : t, r);
function Cge() {
  return {
    drag: { end: 0, start: 0.1 },
    filter: { link: 1, type: 0.1, unlinked: { include: 0.1, exclude: 0.1 } },
    focus: { acquire: () => 0.1, release: () => 0.1 },
    initialize: 1,
    labels: { links: { hide: 0, show: 0 }, nodes: { hide: 0, show: 0 } },
    resize: 0.5,
  };
}
function C0(e) {
  if (typeof e == "object" && e !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t = Object.getPrototypeOf(e);
      return t === Object.prototype || t === null;
    }
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  return !1;
}
function Hi(...e) {
  return e.reduce((t, r) => {
    if (Array.isArray(r))
      throw new TypeError("Arguments provided to deepmerge must be objects, not arrays.");
    return (
      Object.keys(r).forEach((o) => {
        ["__proto__", "constructor", "prototype"].includes(o) ||
          (Array.isArray(t[o]) && Array.isArray(r[o])
            ? (t[o] = Hi.options.mergeArrays ? Array.from(new Set(t[o].concat(r[o]))) : r[o])
            : C0(t[o]) && C0(r[o])
              ? (t[o] = Hi(t[o], r[o]))
              : (t[o] = r[o]));
      }),
      t
    );
  }, {});
}
const y1 = { mergeArrays: !0 };
Hi.options = y1;
Hi.withOptions = (e, ...t) => {
  Hi.options = { mergeArrays: !0, ...e };
  const r = Hi(...t);
  return (Hi.options = y1), r;
};
function Ege() {
  return {
    centering: { enabled: !0, strength: 0.1 },
    charge: { enabled: !0, strength: -1 },
    collision: { enabled: !0, strength: 1, radiusMultiplier: 2 },
    link: { enabled: !0, strength: 1, length: 128 },
  };
}
function Lge() {
  return {
    includeUnlinked: !0,
    linkFilter: () => !0,
    nodeTypeFilter: void 0,
    showLinkLabels: !0,
    showNodeLabels: !0,
  };
}
function b1(e) {
  e.preventDefault(), e.stopPropagation();
}
function w1(e) {
  return typeof e == "number";
}
function Yi(e, t) {
  return w1(e.nodeRadius) ? e.nodeRadius : e.nodeRadius(t);
}
function Age(e) {
  return `${e.source.id}-${e.target.id}`;
}
function x1(e) {
  return `link-arrow-${e}`.replace(/[()]/g, "~");
}
function Mge(e) {
  return `url(#${x1(e.color)})`;
}
function Nge(e) {
  return {
    size: e,
    padding: (t, r) => Yi(r, t) + 2 * e,
    ref: [e / 2, e / 2],
    path: [
      [0, 0],
      [0, e],
      [e, e / 2],
    ],
    viewBox: [0, 0, e, e].join(","),
  };
}
const _1 = { Arrow: (e) => Nge(e) },
  $ge = (e, t, r) => [t / 2, r / 2],
  S1 = (e, t, r) => [E0(0, t), E0(0, r)];
function E0(e, t) {
  return Math.random() * (t - e) + e;
}
function Oge(e) {
  const t = Object.fromEntries(e.nodes.map((r) => [r.id, [r.x, r.y]]));
  return (r, o, s) => {
    const [c, f] = t[r.id] ?? [];
    return !c || !f ? S1(r, o, s) : [c, f];
  };
}
const Yd = { Centered: $ge, Randomized: S1, Stable: Oge };
function Pge() {
  return {
    autoResize: !1,
    callbacks: {},
    hooks: {},
    initial: Lge(),
    nodeRadius: 16,
    marker: _1.Arrow(4),
    modifiers: {},
    positionInitializer: Yd.Centered,
    simulation: { alphas: Cge(), forces: Ege() },
    zoom: { initial: 1, min: 0.1, max: 2 },
  };
}
function Rge(e = {}) {
  return Hi.withOptions({ mergeArrays: !1 }, Pge(), e);
}
function Dge({
  applyZoom: e,
  container: t,
  onDoubleClick: r,
  onPointerMoved: o,
  onPointerUp: s,
  offset: [c, f],
  scale: d,
  zoom: h,
}) {
  const p = t
    .classed("graph", !0)
    .append("svg")
    .attr("height", "100%")
    .attr("width", "100%")
    .call(h)
    .on("contextmenu", (v) => b1(v))
    .on("dblclick", (v) => (r == null ? void 0 : r(v)))
    .on("dblclick.zoom", null)
    .on("pointermove", (v) => (o == null ? void 0 : o(v)))
    .on("pointerup", (v) => (s == null ? void 0 : s(v)))
    .style("cursor", "grab");
  return e && p.call(h.transform, np.translate(c, f).scale(d)), p.append("g");
}
function zge({ canvas: e, scale: t, xOffset: r, yOffset: o }) {
  e == null || e.attr("transform", `translate(${r},${o})scale(${t})`);
}
function Ige({ config: e, onDragStart: t, onDragEnd: r }) {
  var o, s;
  const c = the()
    .filter((f) =>
      f.type === "mousedown"
        ? f.button === 0
        : f.type === "touchstart"
          ? f.touches.length === 1
          : !1,
    )
    .on("start", (f, d) => {
      f.active === 0 && t(f, d),
        On(f.sourceEvent.target).classed("grabbed", !0),
        (d.fx = d.x),
        (d.fy = d.y);
    })
    .on("drag", (f, d) => {
      (d.fx = f.x), (d.fy = f.y);
    })
    .on("end", (f, d) => {
      f.active === 0 && r(f, d),
        On(f.sourceEvent.target).classed("grabbed", !1),
        (d.fx = void 0),
        (d.fy = void 0);
    });
  return (s = (o = e.modifiers).drag) == null || s.call(o, c), c;
}
function Fge({ graph: e, filter: t, focusedNode: r, includeUnlinked: o, linkFilter: s }) {
  const c = e.links.filter((h) => t.includes(h.source.type) && t.includes(h.target.type) && s(h)),
    f = (h) => c.find((p) => p.source.id === h.id || p.target.id === h.id) !== void 0,
    d = e.nodes.filter((h) => t.includes(h.type) && (o || f(h)));
  return r === void 0 || !t.includes(r.type)
    ? { nodes: d, links: c }
    : Hge({ nodes: d, links: c }, r);
}
function Hge(e, t) {
  const r = [...qge(e, t), ...Bge(e, t)],
    o = r.flatMap((s) => [s.source, s.target]);
  return { nodes: [...new Set([...o, t])], links: [...new Set(r)] };
}
function qge(e, t) {
  return k1(e, t, (r, o) => r.target.id === o.id);
}
function Bge(e, t) {
  return k1(e, t, (r, o) => r.source.id === o.id);
}
function k1(e, t, r) {
  const o = new Set(e.links),
    s = new Set([t]),
    c = [];
  for (; o.size > 0; ) {
    const f = [...o].filter((d) => [...s].some((h) => r(d, h)));
    if (f.length === 0) return c;
    f.forEach((d) => {
      s.add(d.source), s.add(d.target), c.push(d), o.delete(d);
    });
  }
  return c;
}
function Zd(e) {
  return e.x ?? 0;
}
function Jd(e) {
  return e.y ?? 0;
}
function op({ source: e, target: t }) {
  const r = new _n(Zd(e), Jd(e)),
    o = new _n(Zd(t), Jd(t)),
    s = o.subtract(r),
    c = s.length(),
    f = s.normalize(),
    d = f.multiply(-1);
  return { s: r, t: o, dist: c, norm: f, endNorm: d };
}
function T1({ center: e, node: t }) {
  const r = new _n(Zd(t), Jd(t));
  let o = e;
  return r.x === o.x && r.y === o.y && (o = o.add(new _n(0, 1))), { n: r, c: o };
}
function C1({ config: e, source: t, target: r }) {
  const { s: o, t: s, norm: c } = op({ config: e, source: t, target: r }),
    f = o.add(c.multiply(Yi(e, t) - 1)),
    d = s.subtract(c.multiply(e.marker.padding(r, e)));
  return { start: f, end: d };
}
function Wge(e) {
  const { start: t, end: r } = C1(e);
  return `M${t.x},${t.y}
          L${r.x},${r.y}`;
}
function Uge(e) {
  const { start: t, end: r } = C1(e),
    o = r.subtract(t).multiply(0.5),
    s = t.add(o);
  return `translate(${s.x - 8},${s.y - 4})`;
}
function Vge({ config: e, source: t, target: r }) {
  const { s: o, t: s, dist: c, norm: f, endNorm: d } = op({ config: e, source: t, target: r }),
    h = 10,
    p = f
      .rotateByDegrees(-h)
      .multiply(Yi(e, t) - 1)
      .add(o),
    v = d
      .rotateByDegrees(h)
      .multiply(Yi(e, r))
      .add(s)
      .add(d.rotateByDegrees(h).multiply(2 * e.marker.size)),
    y = 1.2 * c;
  return `M${p.x},${p.y}
          A${y},${y},0,0,1,${v.x},${v.y}`;
}
function jge({ center: e, config: t, node: r }) {
  const { n: o, c: s } = T1({ center: e, config: t, node: r }),
    c = Yi(t, r),
    f = o.subtract(s),
    d = f.multiply(1 / f.length()),
    h = 40,
    p = d
      .rotateByDegrees(h)
      .multiply(c - 1)
      .add(o),
    v = d
      .rotateByDegrees(-h)
      .multiply(c)
      .add(o)
      .add(d.rotateByDegrees(-h).multiply(2 * t.marker.size));
  return `M${p.x},${p.y}
          A${c},${c},0,1,0,${v.x},${v.y}`;
}
function Gge({ config: e, source: t, target: r }) {
  const { t: o, dist: s, endNorm: c } = op({ config: e, source: t, target: r }),
    f = c
      .rotateByDegrees(10)
      .multiply(0.5 * s)
      .add(o);
  return `translate(${f.x},${f.y})`;
}
function Kge({ center: e, config: t, node: r }) {
  const { n: o, c: s } = T1({ center: e, config: t, node: r }),
    c = o.subtract(s),
    f = c
      .multiply(1 / c.length())
      .multiply(3 * Yi(t, r) + 8)
      .add(o);
  return `translate(${f.x},${f.y})`;
}
const bs = {
  line: { labelTransform: Uge, path: Wge },
  arc: { labelTransform: Gge, path: Vge },
  reflexive: { labelTransform: Kge, path: jge },
};
function Xge(e) {
  return e.append("g").classed("links", !0).selectAll("path");
}
function Yge({ config: e, graph: t, selection: r, showLabels: o }) {
  const s =
    r == null
      ? void 0
      : r
          .data(t.links, (c) => Age(c))
          .join((c) => {
            var f, d, h, p;
            const v = c.append("g"),
              y = v
                .append("path")
                .classed("link", !0)
                .style("marker-end", (x) => Mge(x))
                .style("stroke", (x) => x.color);
            (d = (f = e.modifiers).link) == null || d.call(f, y);
            const b = v
              .append("text")
              .classed("link__label", !0)
              .style("fill", (x) => (x.label ? x.label.color : null))
              .style("font-size", (x) => (x.label ? x.label.fontSize : null))
              .text((x) => (x.label ? x.label.text : null));
            return (p = (h = e.modifiers).linkLabel) == null || p.call(h, b), v;
          });
  return s == null || s.select(".link__label").attr("opacity", (c) => (c.label && o ? 1 : 0)), s;
}
function Zge(e) {
  Jge(e), Qge(e);
}
function Jge({ center: e, config: t, graph: r, selection: o }) {
  o == null ||
    o
      .selectAll("path")
      .attr("d", (s) =>
        s.source.x === void 0 ||
        s.source.y === void 0 ||
        s.target.x === void 0 ||
        s.target.y === void 0
          ? ""
          : s.source.id === s.target.id
            ? bs.reflexive.path({ config: t, node: s.source, center: e })
            : E1(r, s.source, s.target)
              ? bs.arc.path({ config: t, source: s.source, target: s.target })
              : bs.line.path({ config: t, source: s.source, target: s.target }),
      );
}
function Qge({ config: e, center: t, graph: r, selection: o }) {
  o == null ||
    o
      .select(".link__label")
      .attr("transform", (s) =>
        s.source.x === void 0 ||
        s.source.y === void 0 ||
        s.target.x === void 0 ||
        s.target.y === void 0
          ? "translate(0, 0)"
          : s.source.id === s.target.id
            ? bs.reflexive.labelTransform({ config: e, node: s.source, center: t })
            : E1(r, s.source, s.target)
              ? bs.arc.labelTransform({ config: e, source: s.source, target: s.target })
              : bs.line.labelTransform({ config: e, source: s.source, target: s.target }),
      );
}
function E1(e, t, r) {
  return (
    t.id !== r.id &&
    e.links.some((o) => o.target.id === t.id && o.source.id === r.id) &&
    e.links.some((o) => o.target.id === r.id && o.source.id === t.id)
  );
}
function eve(e) {
  return e.append("defs").selectAll("marker");
}
function tve({ config: e, graph: t, selection: r }) {
  return r == null
    ? void 0
    : r
        .data(nve(t), (o) => o)
        .join((o) => {
          const s = o
            .append("marker")
            .attr("id", (c) => x1(c))
            .attr("markerHeight", 4 * e.marker.size)
            .attr("markerWidth", 4 * e.marker.size)
            .attr("markerUnits", "userSpaceOnUse")
            .attr("orient", "auto")
            .attr("refX", e.marker.ref[0])
            .attr("refY", e.marker.ref[1])
            .attr("viewBox", e.marker.viewBox)
            .style("fill", (c) => c);
          return s.append("path").attr("d", rve(e.marker.path)), s;
        });
}
function nve(e) {
  return [...new Set(e.links.map((t) => t.color))];
}
function rve(e) {
  const [t, ...r] = e;
  if (!t) return "M0,0";
  const [o, s] = t;
  return r.reduce((c, [f, d]) => `${c}L${f},${d}`, `M${o},${s}`);
}
function ive(e) {
  return e.append("g").classed("nodes", !0).selectAll("circle");
}
function ove({
  config: e,
  drag: t,
  graph: r,
  onNodeContext: o,
  onNodeSelected: s,
  selection: c,
  showLabels: f,
}) {
  const d =
    c == null
      ? void 0
      : c
          .data(r.nodes, (h) => h.id)
          .join((h) => {
            var p, v, y, b;
            const x = h.append("g");
            t !== void 0 && x.call(t);
            const C = x
              .append("circle")
              .classed("node", !0)
              .attr("r", (N) => Yi(e, N))
              .on("contextmenu", (N, M) => {
                b1(N), o(M);
              })
              .on("pointerdown", (N, M) => lve(N, M, s ?? o))
              .style("fill", (N) => N.color);
            (v = (p = e.modifiers).node) == null || v.call(p, C);
            const E = x
              .append("text")
              .classed("node__label", !0)
              .attr("dy", "0.33em")
              .style("fill", (N) => (N.label ? N.label.color : null))
              .style("font-size", (N) => (N.label ? N.label.fontSize : null))
              .style("stroke", "none")
              .text((N) => (N.label ? N.label.text : null));
            return (b = (y = e.modifiers).nodeLabel) == null || b.call(y, E), x;
          });
  return (
    d == null || d.select(".node").classed("focused", (h) => h.isFocused),
    d == null || d.select(".node__label").attr("opacity", f ? 1 : 0),
    d
  );
}
const sve = 500;
function lve(e, t, r) {
  if (e.button !== void 0 && e.button !== 0) return;
  const o = t.lastInteractionTimestamp,
    s = Date.now();
  if (o === void 0 || s - o > sve) {
    t.lastInteractionTimestamp = s;
    return;
  }
  (t.lastInteractionTimestamp = void 0), r(t);
}
function ave(e) {
  e == null || e.attr("transform", (t) => `translate(${t.x ?? 0},${t.y ?? 0})`);
}
function cve({ center: e, config: t, graph: r, onTick: o }) {
  var s, c;
  const f = wge(r.nodes),
    d = t.simulation.forces.centering;
  if (d && d.enabled) {
    const y = d.strength;
    f.force("x", _ge(() => e().x).strength(y)).force("y", Sge(() => e().y).strength(y));
  }
  const h = t.simulation.forces.charge;
  h && h.enabled && f.force("charge", xge().strength(h.strength));
  const p = t.simulation.forces.collision;
  p &&
    p.enabled &&
    f.force(
      "collision",
      uge().radius((y) => p.radiusMultiplier * Yi(t, y)),
    );
  const v = t.simulation.forces.link;
  return (
    v &&
      v.enabled &&
      f.force(
        "link",
        dge(r.links)
          .id((y) => y.id)
          .distance(t.simulation.forces.link.length)
          .strength(v.strength),
      ),
    f.on("tick", () => o()),
    (c = (s = t.modifiers).simulation) == null || c.call(s, f),
    f
  );
}
function uve({ canvasContainer: e, config: t, min: r, max: o, onZoom: s }) {
  var c, f;
  const d = Vpe()
    .scaleExtent([r, o])
    .filter((h) => {
      var p;
      return h.button === 0 || ((p = h.touches) == null ? void 0 : p.length) >= 2;
    })
    .on("start", () => e().classed("grabbed", !0))
    .on("zoom", (h) => s(h))
    .on("end", () => e().classed("grabbed", !1));
  return (f = (c = t.modifiers).zoom) == null || f.call(c, d), d;
}
class fve {
  constructor(t, r, o) {
    if (
      (Rt(this, "nodeTypes"),
      Rt(this, "_nodeTypeFilter"),
      Rt(this, "_includeUnlinked", !0),
      Rt(this, "_linkFilter", () => !0),
      Rt(this, "_showLinkLabels", !0),
      Rt(this, "_showNodeLabels", !0),
      Rt(this, "filteredGraph"),
      Rt(this, "width", 0),
      Rt(this, "height", 0),
      Rt(this, "simulation"),
      Rt(this, "canvas"),
      Rt(this, "linkSelection"),
      Rt(this, "nodeSelection"),
      Rt(this, "markerSelection"),
      Rt(this, "zoom"),
      Rt(this, "drag"),
      Rt(this, "xOffset", 0),
      Rt(this, "yOffset", 0),
      Rt(this, "scale"),
      Rt(this, "focusedNode"),
      Rt(this, "resizeObserver"),
      (this.container = t),
      (this.graph = r),
      (this.config = o),
      (this.scale = o.zoom.initial),
      this.resetView(),
      this.graph.nodes.forEach((s) => {
        const [c, f] = o.positionInitializer(s, this.effectiveWidth, this.effectiveHeight);
        (s.x = s.x ?? c), (s.y = s.y ?? f);
      }),
      (this.nodeTypes = [...new Set(r.nodes.map((s) => s.type))]),
      (this._nodeTypeFilter = [...this.nodeTypes]),
      o.initial)
    ) {
      const {
        includeUnlinked: s,
        nodeTypeFilter: c,
        linkFilter: f,
        showLinkLabels: d,
        showNodeLabels: h,
      } = o.initial;
      (this._includeUnlinked = s ?? this._includeUnlinked),
        (this._showLinkLabels = d ?? this._showLinkLabels),
        (this._showNodeLabels = h ?? this._showNodeLabels),
        (this._nodeTypeFilter = c ?? this._nodeTypeFilter),
        (this._linkFilter = f ?? this._linkFilter);
    }
    this.filterGraph(void 0),
      this.initGraph(),
      this.restart(o.simulation.alphas.initialize),
      o.autoResize &&
        ((this.resizeObserver = new ResizeObserver(hfe(() => this.resize()))),
        this.resizeObserver.observe(this.container));
  }
  get nodeTypeFilter() {
    return this._nodeTypeFilter;
  }
  get includeUnlinked() {
    return this._includeUnlinked;
  }
  set includeUnlinked(t) {
    (this._includeUnlinked = t), this.filterGraph(this.focusedNode);
    const { include: r, exclude: o } = this.config.simulation.alphas.filter.unlinked,
      s = t ? r : o;
    this.restart(s);
  }
  set linkFilter(t) {
    (this._linkFilter = t),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.link);
  }
  get linkFilter() {
    return this._linkFilter;
  }
  get showNodeLabels() {
    return this._showNodeLabels;
  }
  set showNodeLabels(t) {
    this._showNodeLabels = t;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.nodes,
      s = t ? o : r;
    this.restart(s);
  }
  get showLinkLabels() {
    return this._showLinkLabels;
  }
  set showLinkLabels(t) {
    this._showLinkLabels = t;
    const { hide: r, show: o } = this.config.simulation.alphas.labels.links,
      s = t ? o : r;
    this.restart(s);
  }
  get effectiveWidth() {
    return this.width / this.scale;
  }
  get effectiveHeight() {
    return this.height / this.scale;
  }
  get effectiveCenter() {
    return _n
      .of([this.width, this.height])
      .divide(2)
      .subtract(_n.of([this.xOffset, this.yOffset]))
      .divide(this.scale);
  }
  resize() {
    const t = this.width,
      r = this.height,
      o = this.container.getBoundingClientRect().width,
      s = this.container.getBoundingClientRect().height,
      c = t.toFixed() !== o.toFixed(),
      f = r.toFixed() !== s.toFixed();
    if (!c && !f) return;
    (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
    const d = this.config.simulation.alphas.resize;
    this.restart(w1(d) ? d : d({ oldWidth: t, oldHeight: r, newWidth: o, newHeight: s }));
  }
  restart(t) {
    var r;
    (this.markerSelection = tve({
      config: this.config,
      graph: this.filteredGraph,
      selection: this.markerSelection,
    })),
      (this.linkSelection = Yge({
        config: this.config,
        graph: this.filteredGraph,
        selection: this.linkSelection,
        showLabels: this._showLinkLabels,
      })),
      (this.nodeSelection = ove({
        config: this.config,
        drag: this.drag,
        graph: this.filteredGraph,
        onNodeContext: (o) => this.toggleNodeFocus(o),
        onNodeSelected: this.config.callbacks.nodeClicked,
        selection: this.nodeSelection,
        showLabels: this._showNodeLabels,
      })),
      (r = this.simulation) == null || r.stop(),
      (this.simulation = cve({
        center: () => this.effectiveCenter,
        config: this.config,
        graph: this.filteredGraph,
        onTick: () => this.onTick(),
      })
        .alpha(t)
        .restart());
  }
  filterNodesByType(t, r) {
    t
      ? this._nodeTypeFilter.push(r)
      : (this._nodeTypeFilter = this._nodeTypeFilter.filter((o) => o !== r)),
      this.filterGraph(this.focusedNode),
      this.restart(this.config.simulation.alphas.filter.type);
  }
  shutdown() {
    var t, r;
    this.focusedNode !== void 0 && ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      (t = this.resizeObserver) == null || t.unobserve(this.container),
      (r = this.simulation) == null || r.stop();
  }
  initGraph() {
    (this.zoom = uve({
      config: this.config,
      canvasContainer: () => On(this.container).select("svg"),
      min: this.config.zoom.min,
      max: this.config.zoom.max,
      onZoom: (t) => this.onZoom(t),
    })),
      (this.canvas = Dge({
        applyZoom: this.scale !== 1,
        container: On(this.container),
        offset: [this.xOffset, this.yOffset],
        scale: this.scale,
        zoom: this.zoom,
      })),
      this.applyZoom(),
      (this.linkSelection = Xge(this.canvas)),
      (this.nodeSelection = ive(this.canvas)),
      (this.markerSelection = eve(this.canvas)),
      (this.drag = Ige({
        config: this.config,
        onDragStart: () => {
          var t;
          return (t = this.simulation) == null
            ? void 0
            : t.alphaTarget(this.config.simulation.alphas.drag.start).restart();
        },
        onDragEnd: () => {
          var t;
          return (t = this.simulation) == null
            ? void 0
            : t.alphaTarget(this.config.simulation.alphas.drag.end).restart();
        },
      }));
  }
  onTick() {
    ave(this.nodeSelection),
      Zge({
        config: this.config,
        center: this.effectiveCenter,
        graph: this.filteredGraph,
        selection: this.linkSelection,
      });
  }
  resetView() {
    var t;
    (t = this.simulation) == null || t.stop(),
      On(this.container).selectChildren().remove(),
      (this.zoom = void 0),
      (this.canvas = void 0),
      (this.linkSelection = void 0),
      (this.nodeSelection = void 0),
      (this.markerSelection = void 0),
      (this.simulation = void 0),
      (this.width = this.container.getBoundingClientRect().width),
      (this.height = this.container.getBoundingClientRect().height);
  }
  onZoom(t) {
    var r, o, s;
    (this.xOffset = t.transform.x),
      (this.yOffset = t.transform.y),
      (this.scale = t.transform.k),
      this.applyZoom(),
      (o = (r = this.config.hooks).afterZoom) == null ||
        o.call(r, this.scale, this.xOffset, this.yOffset),
      (s = this.simulation) == null || s.restart();
  }
  applyZoom() {
    zge({ canvas: this.canvas, scale: this.scale, xOffset: this.xOffset, yOffset: this.yOffset });
  }
  toggleNodeFocus(t) {
    t.isFocused
      ? (this.filterGraph(void 0), this.restart(this.config.simulation.alphas.focus.release(t)))
      : this.focusNode(t);
  }
  focusNode(t) {
    this.filterGraph(t), this.restart(this.config.simulation.alphas.focus.acquire(t));
  }
  filterGraph(t) {
    this.focusedNode !== void 0 && ((this.focusedNode.isFocused = !1), (this.focusedNode = void 0)),
      t !== void 0 &&
        this._nodeTypeFilter.includes(t.type) &&
        ((t.isFocused = !0), (this.focusedNode = t)),
      (this.filteredGraph = Fge({
        graph: this.graph,
        filter: this._nodeTypeFilter,
        focusedNode: this.focusedNode,
        includeUnlinked: this._includeUnlinked,
        linkFilter: this._linkFilter,
      }));
  }
}
function L0({ nodes: e, links: t }) {
  return { nodes: e ?? [], links: t ?? [] };
}
function dve(e) {
  return { ...e };
}
function L1(e) {
  return { ...e, isFocused: !1, lastInteractionTimestamp: void 0 };
}
const hve = { "h-full": "", "min-h-75": "", "flex-1": "", overflow: "hidden" },
  pve = { flex: "", "items-center": "", "gap-4": "", "px-3": "", "py-2": "" },
  gve = ["id", "checked", "onChange"],
  vve = ["for"],
  mve = Y("div", { "flex-auto": "" }, null, -1),
  yve = gt({
    __name: "ViewModuleGraph",
    props: { graph: {}, projectName: {} },
    setup(e) {
      const t = e,
        { graph: r } = xS(t),
        o = je(),
        s = je(!1),
        c = je(),
        f = je();
      kh(
        () => {
          s.value === !1 && setTimeout(() => (c.value = void 0), 300);
        },
        { flush: "post" },
      ),
        Ms(() => {
          p();
        }),
        yu(() => {
          var y;
          (y = f.value) == null || y.shutdown();
        }),
        qt(r, p);
      function d(y, b) {
        var x;
        (x = f.value) == null || x.filterNodesByType(b, y);
      }
      function h(y) {
        (c.value = y), (s.value = !0);
      }
      function p() {
        var y;
        (y = f.value) == null || y.shutdown(),
          !(!r.value || !o.value) &&
            (f.value = new fve(
              o.value,
              r.value,
              Rge({
                nodeRadius: 10,
                autoResize: !0,
                simulation: {
                  alphas: {
                    initialize: 1,
                    resize: ({ newHeight: b, newWidth: x }) => (b === 0 && x === 0 ? 0 : 0.25),
                  },
                  forces: { collision: { radiusMultiplier: 10 }, link: { length: 240 } },
                },
                marker: _1.Arrow(2),
                modifiers: { node: v },
                positionInitializer: r.value.nodes.length > 1 ? Yd.Randomized : Yd.Centered,
                zoom: { min: 0.5, max: 2 },
              }),
            ));
      }
      function v(y) {
        if (Pr) return;
        const b = (N) => N.button === 0;
        let x = 0,
          C = 0,
          E = 0;
        y.on("pointerdown", (N, M) => {
          M.type !== "external" &&
            (!M.x || !M.y || !b(N) || ((x = M.x), (C = M.y), (E = Date.now())));
        }).on("pointerup", (N, M) => {
          if (M.type === "external" || !M.x || !M.y || !b(N) || Date.now() - E > 500) return;
          const L = M.x - x,
            D = M.y - C;
          L ** 2 + D ** 2 < 100 && h(M.id);
        });
      }
      return (y, b) => {
        var M;
        const x = $o,
          C = dfe,
          E = tfe,
          N = ci("tooltip");
        return (
          le(),
          be("div", hve, [
            Y("div", null, [
              Y("div", pve, [
                (le(!0),
                be(
                  ht,
                  null,
                  si((M = B(f)) == null ? void 0 : M.nodeTypes.sort(), (L) => {
                    var D;
                    return (
                      le(),
                      be(
                        "div",
                        { key: L, flex: "~ gap-1", "items-center": "", "select-none": "" },
                        [
                          Y(
                            "input",
                            {
                              id: `type-${L}`,
                              type: "checkbox",
                              checked: (D = B(f)) == null ? void 0 : D.nodeTypeFilter.includes(L),
                              onChange: (A) => d(L, A.target.checked),
                            },
                            null,
                            40,
                            gve,
                          ),
                          Y(
                            "label",
                            {
                              "font-light": "",
                              "text-sm": "",
                              "ws-nowrap": "",
                              "overflow-hidden": "",
                              capitalize: "",
                              truncate: "",
                              for: `type-${L}`,
                              "border-b-2": "",
                              style: Zt({ "border-color": `var(--color-node-${L})` }),
                            },
                            qe(L) + " Modules",
                            13,
                            vve,
                          ),
                        ],
                      )
                    );
                  }),
                  128,
                )),
                mve,
                Y("div", null, [
                  kt(Pe(x, { icon: "i-carbon-reset", onClick: p }, null, 512), [
                    [N, "Reset", void 0, { bottom: !0 }],
                  ]),
                ]),
              ]),
            ]),
            Y("div", { ref_key: "el", ref: o }, null, 512),
            Pe(
              E,
              {
                modelValue: B(s),
                "onUpdate:modelValue": b[1] || (b[1] = (L) => (It(s) ? (s.value = L) : null)),
                direction: "right",
              },
              {
                default: lt(() => [
                  B(c)
                    ? (le(),
                      ot(
                        DS,
                        { key: 0 },
                        {
                          default: lt(() => [
                            Pe(
                              C,
                              {
                                id: B(c),
                                "project-name": y.projectName,
                                onClose: b[0] || (b[0] = (L) => (s.value = !1)),
                              },
                              null,
                              8,
                              ["id", "project-name"],
                            ),
                          ]),
                          _: 1,
                        },
                      ))
                    : rt("", !0),
                ]),
                _: 1,
              },
              8,
              ["modelValue"],
            ),
          ])
        );
      };
    },
  }),
  bve = { key: 0, "text-green-500": "", "flex-shrink-0": "", "i-carbon:checkmark": "" },
  wve = { key: 1, "text-red-500": "", "flex-shrink-0": "", "i-carbon:compare": "" },
  xve = { key: 2, "text-red-500": "", "flex-shrink-0": "", "i-carbon:close": "" },
  _ve = { key: 3, "text-gray-500": "", "flex-shrink-0": "", "i-carbon:document-blank": "" },
  Sve = { key: 4, "text-gray-500": "", "flex-shrink-0": "", "i-carbon:redo": "", "rotate-90": "" },
  kve = {
    key: 5,
    "text-yellow-500": "",
    "flex-shrink-0": "",
    "i-carbon:circle-dash": "",
    "animate-spin": "",
  },
  A1 = gt({
    __name: "StatusIcon",
    props: { state: {}, mode: {}, failedSnapshot: { type: Boolean } },
    setup(e) {
      return (t, r) => {
        const o = ci("tooltip");
        return t.state === "pass"
          ? (le(), be("div", bve))
          : t.failedSnapshot
            ? kt((le(), be("div", wve, null, 512)), [
                [o, "Contains failed snapshot", void 0, { right: !0 }],
              ])
            : t.state === "fail"
              ? (le(), be("div", xve))
              : t.mode === "todo"
                ? kt((le(), be("div", _ve, null, 512)), [[o, "Todo", void 0, { right: !0 }]])
                : t.mode === "skip" || t.state === "skip"
                  ? kt((le(), be("div", Sve, null, 512)), [[o, "Skipped", void 0, { right: !0 }]])
                  : (le(), be("div", kve));
      };
    },
  });
function Tve(e) {
  const t = new Map(),
    r = new Map(),
    o = [];
  for (;;) {
    let s = 0;
    if (
      (e.forEach((c, f) => {
        var v;
        const { splits: d, finished: h } = c;
        if (h) {
          s++;
          const { raw: y, candidate: b } = c;
          t.set(y, b);
          return;
        }
        if (d.length === 0) {
          c.finished = !0;
          return;
        }
        const p = d[0];
        r.has(p)
          ? ((c.candidate += c.candidate === "" ? p : `/${p}`),
            (v = r.get(p)) == null || v.push(f),
            d.shift())
          : (r.set(p, [f]), o.push(f));
      }),
      o.forEach((c) => {
        const f = e[c],
          d = f.splits.shift();
        f.candidate += f.candidate === "" ? d : `/${d}`;
      }),
      r.forEach((c) => {
        if (c.length === 1) {
          const f = c[0];
          e[f].finished = !0;
        }
      }),
      r.clear(),
      (o.length = 0),
      s === e.length)
    )
      break;
  }
  return t;
}
function Cve(e) {
  let t = e;
  t.includes("/node_modules/") && (t = e.split(/\/node_modules\//g).pop());
  const r = t.split(/\//g);
  return { raw: t, splits: r, candidate: "", finished: !1, id: e };
}
function Eve(e) {
  const t = e.map((o) => Cve(o)),
    r = Tve(t);
  return t.map(({ raw: o, id: s }) =>
    L1({
      color: "var(--color-node-external)",
      label: { color: "var(--color-node-external)", fontSize: "0.875rem", text: r.get(o) ?? "" },
      isFocused: !1,
      id: s,
      type: "external",
    }),
  );
}
function Lve(e, t) {
  return L1({
    color: t ? "var(--color-node-root)" : "var(--color-node-inline)",
    label: {
      color: t ? "var(--color-node-root)" : "var(--color-node-inline)",
      fontSize: "0.875rem",
      text: e.split(/\//g).pop(),
    },
    isFocused: !1,
    id: e,
    type: "inline",
  });
}
function Ave(e, t) {
  if (!e) return L0({});
  const r = Eve(e.externalized),
    o = e.inlined.map((d) => Lve(d, d === t)) ?? [],
    s = [...r, ...o],
    c = Object.fromEntries(s.map((d) => [d.id, d])),
    f = Object.entries(e.graph).flatMap(([d, h]) =>
      h
        .map((p) => {
          const v = c[d],
            y = c[p];
          if (!(v === void 0 || y === void 0))
            return dve({ source: v, target: y, color: "var(--color-link)", label: !1 });
        })
        .filter((p) => p !== void 0),
    );
  return L0({ nodes: s, links: f });
}
const Mve = {
    key: 0,
    flex: "",
    "flex-col": "",
    "h-full": "",
    "max-h-full": "",
    "overflow-hidden": "",
    "data-testid": "file-detail",
  },
  Nve = {
    p: "2",
    "h-10": "",
    flex: "~ gap-2",
    "items-center": "",
    "bg-header": "",
    border: "b base",
  },
  $ve = {
    "flex-1": "",
    "font-light": "",
    "op-50": "",
    "ws-nowrap": "",
    truncate: "",
    "text-sm": "",
  },
  Ove = { class: "flex text-lg" },
  Pve = {
    flex: "~",
    "items-center": "",
    "bg-header": "",
    border: "b-2 base",
    "text-sm": "",
    "h-41px": "",
  },
  Rve = Y("span", { class: "block w-1.4em h-1.4em i-carbon:report" }, null, -1),
  Dve = { key: 0, class: "block w-1.4em h-1.4em i-carbon:circle-dash animate-spin animate-2s" },
  zve = { key: 1, class: "block w-1.4em h-1.4em i-carbon:chart-relationship" },
  Ive = Y("span", { class: "block w-1.4em h-1.4em i-carbon:code" }, null, -1),
  Fve = Y("span", { class: "block w-1.4em h-1.4em i-carbon:terminal-3270" }, null, -1),
  Hve = { flex: "", "flex-col": "", "flex-1": "", overflow: "hidden" },
  qve = ["flex-1"],
  Bve = gt({
    __name: "FileDetails",
    setup(e) {
      const t = je({ nodes: [], links: [] }),
        r = je(!1),
        o = je(!1),
        s = je(!1),
        c = je(void 0),
        f = $e(() => {
          const x = Xt.value;
          if (!(!x || !x.filepath))
            return { filepath: x.filepath, projectName: x.file.projectName || "" };
        }),
        d = $e(() => Xt.value && Fh(Xt.value));
      function h() {
        var C;
        const x = (C = Xt.value) == null ? void 0 : C.filepath;
        x && fetch(`/__open-in-editor?file=${encodeURIComponent(x)}`);
      }
      function p(x) {
        x === "graph" && (o.value = !0), (Hn.value = x);
      }
      const v = $e(() => {
        var x;
        return ((x = Hw.value) == null ? void 0 : x.reduce((C, { size: E }) => C + E, 0)) ?? 0;
      });
      function y(x) {
        r.value = x;
      }
      async function b() {
        var x;
        if (!(s.value || ((x = f.value) == null ? void 0 : x.filepath) === c.value)) {
          (s.value = !0), await ln();
          try {
            const C = f.value;
            if (!C) return;
            (!c.value ||
              C.filepath !== c.value ||
              (!t.value.nodes.length && !t.value.links.length)) &&
              ((t.value = Ave(
                await bt.rpc.getModuleGraph(C.projectName, C.filepath, !!Yl),
                C.filepath,
              )),
              (c.value = C.filepath)),
              p("graph");
          } finally {
            await new Promise((C) => setTimeout(C, 100)), (s.value = !1);
          }
        }
      }
      return (
        Wb(
          () => [f.value, Hn.value],
          ([, x]) => {
            x === "graph" && b();
          },
          { debounce: 100, immediate: !0 },
        ),
        (x, C) => {
          var z, J, ie, ne, j, te;
          const E = A1,
            N = $o,
            M = yve,
            L = efe,
            D = Vue,
            A = Iue,
            H = ci("tooltip");
          return B(Xt)
            ? (le(),
              be("div", Mve, [
                Y("div", null, [
                  Y("div", Nve, [
                    Pe(
                      E,
                      {
                        state: (z = B(Xt).result) == null ? void 0 : z.state,
                        mode: B(Xt).mode,
                        "failed-snapshot": B(d),
                      },
                      null,
                      8,
                      ["state", "mode", "failed-snapshot"],
                    ),
                    (J = B(Xt)) != null && J.file.projectName
                      ? (le(),
                        be(
                          "div",
                          {
                            key: 0,
                            "font-light": "",
                            "op-50": "",
                            "text-sm": "",
                            style: Zt({
                              color: B(Aw)((ie = B(Xt)) == null ? void 0 : ie.file.projectName),
                            }),
                          },
                          " [" +
                            qe(((ne = B(Xt)) == null ? void 0 : ne.file.projectName) || "") +
                            "] ",
                          5,
                        ))
                      : rt("", !0),
                    Y("div", $ve, qe((j = B(Xt)) == null ? void 0 : j.name), 1),
                    Y("div", Ove, [
                      B(Pr)
                        ? rt("", !0)
                        : kt(
                            (le(),
                            ot(
                              N,
                              {
                                key: 0,
                                title: "Open in editor",
                                icon: "i-carbon-launch",
                                disabled: !((te = B(Xt)) != null && te.filepath),
                                onClick: h,
                              },
                              null,
                              8,
                              ["disabled"],
                            )),
                            [[H, "Open in editor", void 0, { bottom: !0 }]],
                          ),
                    ]),
                  ]),
                  Y("div", Pve, [
                    Y(
                      "button",
                      {
                        "tab-button": "",
                        class: st([
                          "flex items-center gap-2",
                          { "tab-button-active": B(Hn) == null },
                        ]),
                        "data-testid": "btn-report",
                        onClick: C[0] || (C[0] = (K) => p(null)),
                      },
                      [Rve, dt(" Report ")],
                      2,
                    ),
                    Y(
                      "button",
                      {
                        "tab-button": "",
                        "data-testid": "btn-graph",
                        class: st([
                          "flex items-center gap-2",
                          { "tab-button-active": B(Hn) === "graph" },
                        ]),
                        onClick: C[1] || (C[1] = (K) => p("graph")),
                      },
                      [
                        B(s) ? (le(), be("span", Dve)) : (le(), be("span", zve)),
                        dt(" Module Graph "),
                      ],
                      2,
                    ),
                    Y(
                      "button",
                      {
                        "tab-button": "",
                        "data-testid": "btn-code",
                        class: st([
                          "flex items-center gap-2",
                          { "tab-button-active": B(Hn) === "editor" },
                        ]),
                        onClick: C[2] || (C[2] = (K) => p("editor")),
                      },
                      [Ive, dt(" " + qe(B(r) ? "* " : "") + "Code ", 1)],
                      2,
                    ),
                    Y(
                      "button",
                      {
                        "tab-button": "",
                        "data-testid": "btn-console",
                        class: st([
                          "flex items-center gap-2",
                          {
                            "tab-button-active": B(Hn) === "console",
                            op20: B(Hn) !== "console" && B(v) === 0,
                          },
                        ]),
                        onClick: C[3] || (C[3] = (K) => p("console")),
                      },
                      [Fve, dt(" Console (" + qe(B(v)) + ") ", 1)],
                      2,
                    ),
                  ]),
                ]),
                Y("div", Hve, [
                  B(o)
                    ? (le(),
                      be(
                        "div",
                        { key: 0, "flex-1": B(Hn) === "graph" && "" },
                        [
                          kt(
                            Pe(
                              M,
                              {
                                graph: B(t),
                                "data-testid": "graph",
                                "project-name": B(Xt).file.projectName || "",
                              },
                              null,
                              8,
                              ["graph", "project-name"],
                            ),
                            [[vl, B(Hn) === "graph" && !B(s)]],
                          ),
                        ],
                        8,
                        qve,
                      ))
                    : rt("", !0),
                  B(Hn) === "editor"
                    ? (le(),
                      ot(
                        L,
                        { key: B(Xt).filepath, file: B(Xt), "data-testid": "editor", onDraft: y },
                        null,
                        8,
                        ["file"],
                      ))
                    : B(Hn) === "console"
                      ? (le(),
                        ot(D, { key: 2, file: B(Xt), "data-testid": "console" }, null, 8, ["file"]))
                      : B(Hn)
                        ? rt("", !0)
                        : (le(),
                          ot(A, { key: 3, file: B(Xt), "data-testid": "report" }, null, 8, [
                            "file",
                          ])),
                ]),
              ]))
            : rt("", !0);
        }
      );
    },
  }),
  Wve = { h: "full", flex: "~ col" },
  Uve = Y(
    "div",
    { p: "3", "h-10": "", flex: "~ gap-2", "items-center": "", "bg-header": "", border: "b base" },
    [
      Y("div", { class: "i-carbon:folder-details-reference" }),
      Y(
        "span",
        {
          "pl-1": "",
          "font-bold": "",
          "text-sm": "",
          "flex-auto": "",
          "ws-nowrap": "",
          "overflow-hidden": "",
          truncate: "",
        },
        "Coverage",
      ),
    ],
    -1,
  ),
  Vve = { "flex-auto": "", "py-1": "", "bg-white": "" },
  jve = ["src"],
  Gve = gt({
    __name: "Coverage",
    props: { src: {} },
    setup(e) {
      return (t, r) => (
        le(),
        be("div", Wve, [
          Uve,
          Y("div", Vve, [Y("iframe", { id: "vitest-ui-coverage", src: t.src }, null, 8, jve)]),
        ])
      );
    },
  }),
  Kve = { bg: "red500/10", "p-1": "", "mb-1": "", "mt-2": "", rounded: "" },
  Xve = { "font-bold": "" },
  Yve = {
    key: 0,
    class: "scrolls",
    text: "xs",
    "font-mono": "",
    "mx-1": "",
    "my-2": "",
    "pb-2": "",
    "overflow-auto": "",
  },
  Zve = ["font-bold"],
  Jve = { text: "red500/70" },
  Qve = Y("br", null, null, -1),
  eme = { key: 1, text: "sm", "mb-2": "" },
  tme = { "font-bold": "" },
  nme = { key: 2, text: "sm", "mb-2": "" },
  rme = { "font-bold": "" },
  ime = Y("br", null, null, -1),
  ome = Y(
    "ul",
    null,
    [
      Y("li", null, " The error was thrown, while Vitest was running this test. "),
      Y(
        "li",
        null,
        " If the error occurred after the test had been completed, this was the last documented test before it was thrown. ",
      ),
    ],
    -1,
  ),
  sme = { key: 3, text: "sm", "font-thin": "" },
  lme = Y("br", null, null, -1),
  ame = Y(
    "ul",
    null,
    [
      Y("li", null, " Cancel timeouts using clearTimeout and clearInterval. "),
      Y("li", null, " Wait for promises to resolve using the await keyword. "),
    ],
    -1,
  ),
  cme = gt({
    __name: "ErrorEntry",
    props: { error: {} },
    setup(e) {
      return (t, r) => {
        var o;
        return (
          le(),
          be(
            ht,
            null,
            [
              Y("h4", Kve, [
                Y("span", Xve, [
                  dt(qe(t.error.name || t.error.nameStr || "Unknown Error"), 1),
                  t.error.message ? (le(), be(ht, { key: 0 }, [dt(":")], 64)) : rt("", !0),
                ]),
                dt(" " + qe(t.error.message), 1),
              ]),
              (o = t.error.stacks) != null && o.length
                ? (le(),
                  be("p", Yve, [
                    (le(!0),
                    be(
                      ht,
                      null,
                      si(
                        t.error.stacks,
                        (s, c) => (
                          le(),
                          be(
                            "span",
                            { key: c, "whitespace-pre": "", "font-bold": c === 0 ? "" : null },
                            [
                              dt("❯ " + qe(s.method) + " " + qe(s.file) + ":", 1),
                              Y("span", Jve, qe(s.line) + ":" + qe(s.column), 1),
                              Qve,
                            ],
                            8,
                            Zve,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : rt("", !0),
              t.error.VITEST_TEST_PATH
                ? (le(),
                  be("p", eme, [
                    dt(" This error originated in "),
                    Y("span", tme, qe(t.error.VITEST_TEST_PATH), 1),
                    dt(
                      " test file. It doesn't mean the error was thrown inside the file itself, but while it was running. ",
                    ),
                  ]))
                : rt("", !0),
              t.error.VITEST_TEST_NAME
                ? (le(),
                  be("p", nme, [
                    dt(" The latest test that might've caused the error is "),
                    Y("span", rme, qe(t.error.VITEST_TEST_NAME), 1),
                    dt(". It might mean one of the following:"),
                    ime,
                    ome,
                  ]))
                : rt("", !0),
              t.error.VITEST_AFTER_ENV_TEARDOWN
                ? (le(),
                  be("p", sme, [
                    dt(
                      " This error was caught after test environment was torn down. Make sure to cancel any running tasks before test finishes:",
                    ),
                    lme,
                    ame,
                  ]))
                : rt("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Cn = (e) => (gu("data-v-0178ddee"), (e = e()), vu(), e),
  ume = {
    "data-testid": "test-files-entry",
    grid: "~ cols-[min-content_1fr_min-content]",
    "items-center": "",
    gap: "x-2 y-3",
    p: "x4",
    relative: "",
    "font-light": "",
    "w-80": "",
    op80: "",
  },
  fme = Cn(() => Y("div", { "i-carbon-document": "" }, null, -1)),
  dme = Cn(() => Y("div", null, "Files", -1)),
  hme = { class: "number", "data-testid": "num-files" },
  pme = Cn(() => Y("div", { "i-carbon-checkmark": "" }, null, -1)),
  gme = Cn(() => Y("div", null, "Pass", -1)),
  vme = { class: "number" },
  mme = Cn(() => Y("div", { "i-carbon-close": "" }, null, -1)),
  yme = Cn(() => Y("div", null, " Fail ", -1)),
  bme = { class: "number", "text-red5": "" },
  wme = Cn(() => Y("div", { "i-carbon-compare": "" }, null, -1)),
  xme = Cn(() => Y("div", null, " Snapshot Fail ", -1)),
  _me = { class: "number", "text-red5": "" },
  Sme = Cn(() => Y("div", { "i-carbon-checkmark-outline-error": "" }, null, -1)),
  kme = Cn(() => Y("div", null, " Errors ", -1)),
  Tme = { class: "number", "text-red5": "" },
  Cme = Cn(() => Y("div", { "i-carbon-timer": "" }, null, -1)),
  Eme = Cn(() => Y("div", null, "Time", -1)),
  Lme = { class: "number", "data-testid": "run-time" },
  Ame = {
    key: 0,
    bg: "red500/10",
    text: "red500",
    p: "x3 y2",
    "max-w-xl": "",
    "m-2": "",
    rounded: "",
  },
  Mme = Cn(() => Y("h3", { "text-center": "", "mb-2": "" }, " Unhandled Errors ", -1)),
  Nme = { text: "sm", "font-thin": "", "mb-2": "", "data-testid": "unhandled-errors" },
  $me = Cn(() => Y("br", null, null, -1)),
  Ome = {
    "data-testid": "unhandled-errors-details",
    class: "scrolls unhandled-errors",
    text: "sm",
    "font-thin": "",
    "pe-2.5": "",
    "open:max-h-52": "",
    "overflow-auto": "",
  },
  Pme = Cn(() => Y("summary", { "font-bold": "", "cursor-pointer": "" }, " Errors ", -1)),
  Rme = gt({
    __name: "TestFilesEntry",
    setup(e) {
      return (t, r) => {
        const o = cme;
        return (
          le(),
          be(
            ht,
            null,
            [
              Y("div", ume, [
                fme,
                dme,
                Y("div", hme, qe(B(Le).summary.files), 1),
                B(Le).summary.filesSuccess
                  ? (le(),
                    be(
                      ht,
                      { key: 0 },
                      [pme, gme, Y("div", vme, qe(B(Le).summary.filesSuccess), 1)],
                      64,
                    ))
                  : rt("", !0),
                B(Le).summary.filesFailed
                  ? (le(),
                    be(
                      ht,
                      { key: 1 },
                      [mme, yme, Y("div", bme, qe(B(Le).summary.filesFailed), 1)],
                      64,
                    ))
                  : rt("", !0),
                B(Le).summary.filesSnapshotFailed
                  ? (le(),
                    be(
                      ht,
                      { key: 2 },
                      [wme, xme, Y("div", _me, qe(B(Le).summary.filesSnapshotFailed), 1)],
                      64,
                    ))
                  : rt("", !0),
                B(Ri).length
                  ? (le(), be(ht, { key: 3 }, [Sme, kme, Y("div", Tme, qe(B(Ri).length), 1)], 64))
                  : rt("", !0),
                Cme,
                Eme,
                Y("div", Lme, qe(B(Le).summary.time), 1),
              ]),
              B(Ri).length
                ? (le(),
                  be("div", Ame, [
                    Mme,
                    Y("p", Nme, [
                      dt(
                        " Vitest caught " +
                          qe(B(Ri).length) +
                          " error" +
                          qe(B(Ri).length > 1 ? "s" : "") +
                          " during the test run.",
                        1,
                      ),
                      $me,
                      dt(
                        " This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected. ",
                      ),
                    ]),
                    Y("details", Ome, [
                      Pme,
                      (le(!0),
                      be(
                        ht,
                        null,
                        si(
                          B(Ri),
                          (s, c) => (le(), ot(o, { key: c, error: s }, null, 8, ["error"])),
                        ),
                        128,
                      )),
                    ]),
                  ]))
                : rt("", !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Dme = eo(Rme, [["__scopeId", "data-v-0178ddee"]]),
  zme = { "p-2": "", "text-center": "", flex: "" },
  Ime = { "text-4xl": "", "min-w-2em": "" },
  Fme = { "text-md": "" },
  Hme = gt({
    __name: "DashboardEntry",
    setup(e) {
      return (t, r) => (
        le(),
        be("div", zme, [
          Y("div", null, [
            Y("div", Ime, [hn(t.$slots, "body")]),
            Y("div", Fme, [hn(t.$slots, "header")]),
          ]),
        ])
      );
    },
  }),
  qme = { flex: "~ wrap", "justify-evenly": "", "gap-2": "", p: "x-4", relative: "" },
  Bme = gt({
    __name: "TestsEntry",
    setup(e) {
      return (t, r) => {
        const o = Hme;
        return (
          le(),
          be("div", qme, [
            Pe(
              o,
              { "text-green5": "", "data-testid": "pass-entry" },
              {
                header: lt(() => [dt(" Pass ")]),
                body: lt(() => [dt(qe(B(Le).summary.testsSuccess), 1)]),
                _: 1,
              },
            ),
            Pe(
              o,
              {
                class: st({
                  "text-red5": B(Le).summary.testsFailed,
                  op50: !B(Le).summary.testsFailed,
                }),
                "data-testid": "fail-entry",
              },
              {
                header: lt(() => [dt(" Fail ")]),
                body: lt(() => [dt(qe(B(Le).summary.testsFailed), 1)]),
                _: 1,
              },
              8,
              ["class"],
            ),
            B(Le).summary.testsSkipped
              ? (le(),
                ot(
                  o,
                  { key: 0, op50: "", "data-testid": "skipped-entry" },
                  {
                    header: lt(() => [dt(" Skip ")]),
                    body: lt(() => [dt(qe(B(Le).summary.testsSkipped), 1)]),
                    _: 1,
                  },
                ))
              : rt("", !0),
            B(Le).summary.testsTodo
              ? (le(),
                ot(
                  o,
                  { key: 1, op50: "", "data-testid": "todo-entry" },
                  {
                    header: lt(() => [dt(" Todo ")]),
                    body: lt(() => [dt(qe(B(Le).summary.testsTodo), 1)]),
                    _: 1,
                  },
                ))
              : rt("", !0),
            Pe(
              o,
              { tail: !0, "data-testid": "total-entry" },
              {
                header: lt(() => [dt(" Total ")]),
                body: lt(() => [dt(qe(B(Le).summary.totalTests), 1)]),
                _: 1,
              },
            ),
          ])
        );
      };
    },
  }),
  Wme = {},
  Ume = {
    "gap-0": "",
    flex: "~ col gap-4",
    "h-full": "",
    "justify-center": "",
    "items-center": "",
  },
  Vme = { "aria-labelledby": "tests", m: "y-4 x-2" };
function jme(e, t) {
  const r = Bme,
    o = Dme;
  return le(), be("div", Ume, [Y("section", Vme, [Pe(r)]), Pe(o)]);
}
const Gme = eo(Wme, [["render", jme]]),
  Kme = {},
  Xme = { h: "full", flex: "~ col" },
  Yme = Y(
    "div",
    { p: "3", "h-10": "", flex: "~ gap-2", "items-center": "", "bg-header": "", border: "b base" },
    [
      Y("div", { class: "i-carbon-dashboard" }),
      Y(
        "span",
        {
          "pl-1": "",
          "font-bold": "",
          "text-sm": "",
          "flex-auto": "",
          "ws-nowrap": "",
          "overflow-hidden": "",
          truncate: "",
        },
        "Dashboard",
      ),
    ],
    -1,
  ),
  Zme = { class: "scrolls", "flex-auto": "", "py-1": "" };
function Jme(e, t) {
  const r = Gme;
  return le(), be("div", Xme, [Yme, Y("div", Zme, [Pe(r)])]);
}
const Qme = eo(Kme, [["render", Jme]]),
  e0e = ["open"],
  t0e = Y("div", { "flex-1": "", "h-1px": "", border: "base b", op80: "" }, null, -1),
  n0e = Y("div", { "flex-1": "", "h-1px": "", border: "base b", op80: "" }, null, -1),
  r0e = gt({
    __name: "DetailsPanel",
    props: { color: {} },
    setup(e) {
      const t = je(!0);
      return (r, o) => (
        le(),
        be(
          "div",
          {
            open: B(t),
            class: "details-panel",
            "data-testid": "details-panel",
            onToggle: o[0] || (o[0] = (s) => (t.value = s.target.open)),
          },
          [
            Y(
              "div",
              {
                p: "y1",
                "text-sm": "",
                "bg-base": "",
                "items-center": "",
                "z-5": "",
                "gap-2": "",
                class: st(r.color),
                "w-full": "",
                flex: "",
                "select-none": "",
                sticky: "",
                top: "-1",
              },
              [t0e, hn(r.$slots, "summary", { open: B(t) }), n0e],
              2,
            ),
            hn(r.$slots, "default"),
          ],
          40,
          e0e,
        )
      );
    },
  }),
  i0e = {
    type: "button",
    dark: "op75",
    bg: "gray-200 dark:#111",
    hover: "op100",
    "rounded-1": "",
    "p-0.5": "",
  },
  o0e = {
    __name: "IconAction",
    props: { icon: String },
    setup(e) {
      return (t, r) => (
        le(),
        be("button", i0e, [
          Y("span", { block: "", class: st([e.icon, "dark:op85 hover:op100"]), op65: "" }, null, 2),
        ])
      );
    },
  },
  sp = (e) => (gu("data-v-26d571d7"), (e = e()), vu(), e),
  s0e = ["aria-label", "data-current"],
  l0e = { key: 1, "w-4": "" },
  a0e = { key: 2, class: "i-logos:typescript-icon", "flex-shrink-0": "", "mr-2": "" },
  c0e = ["text"],
  u0e = { "text-sm": "", truncate: "", "font-light": "" },
  f0e = ["innerHTML"],
  d0e = { key: 0, text: "xs", op20: "", style: { "white-space": "nowrap" } },
  h0e = { "gap-1": "", "justify-end": "", "flex-grow-1": "", "pl-1": "", class: "test-actions" },
  p0e = { key: 0, class: "op100 gap-1 p-y-1", grid: "~ items-center cols-[1.5em_1fr]" },
  g0e = sp(() => Y("div", { class: "i-carbon:information-square w-1.5em h-1.5em" }, null, -1)),
  v0e = sp(() => Y("span", { class: "text-[#add467]" }, "includeTaskLocation", -1)),
  m0e = sp(() =>
    Y(
      "div",
      { style: { "grid-column": "2" } },
      " Clicking this button the code tab will position the cursor at first line in the source code since the UI doesn't have the information available. ",
      -1,
    ),
  ),
  y0e = { key: 1 },
  b0e = gt({
    __name: "ExplorerItem",
    props: {
      taskId: {},
      name: {},
      indent: {},
      typecheck: { type: Boolean },
      duration: {},
      state: {},
      current: { type: Boolean },
      type: {},
      opened: { type: Boolean },
      expandable: { type: Boolean },
      search: {},
      projectName: {},
      projectNameColor: {},
      disableTaskLocation: { type: Boolean },
      onItemClick: { type: Function },
    },
    setup(e) {
      const t = $e(() => bt.state.idMap.get(e.taskId)),
        r = $e(() => {
          if (Pr) return !1;
          const C = t.value;
          return C && Fh(C);
        });
      function o() {
        e.expandable && (e.opened ? Le.collapseNode(e.taskId) : Le.expandNode(e.taskId));
      }
      async function s(C) {
        var E;
        (E = e.onItemClick) == null || E.call(e, C),
          cs.value && ((Jc.value = !0), await ln()),
          await Gh([C.file]);
      }
      function c(C) {
        return bt.rpc.updateSnapshot(C.file);
      }
      const f = $e(() =>
          e.indent <= 0 ? [] : Array.from({ length: e.indent }, (C, E) => `${e.taskId}-${E}`),
        ),
        d = $e(() => {
          const C = f.value,
            E = [];
          return (
            (e.type === "file" || e.type === "suite") && E.push("min-content"),
            E.push("min-content"),
            e.type === "suite" && e.typecheck && E.push("min-content"),
            E.push("minmax(0, 1fr)"),
            E.push("min-content"),
            `grid-template-columns: ${C.map(() => "1rem").join(" ")} ${E.join(" ")};`
          );
        }),
        h = $e(() => {
          const C = $n.value.toLowerCase();
          return C.length ? new RegExp(`(${C})`, "gi") : null;
        }),
        p = $e(() => {
          const C = h.value;
          return C ? e.name.replace(C, (E) => `<span class="highlight">${E}</span>`) : e.name;
        }),
        v = $e(() => e.type !== "file" && e.disableTaskLocation),
        y = $e(() =>
          e.type === "file"
            ? "Open test details"
            : e.type === "suite"
              ? "View Suite Source Code"
              : "View Test Source Code",
        ),
        b = $e(() => (v.value ? "color-red5 dark:color-#f43f5e" : null));
      function x() {
        var E;
        const C = t.value;
        e.type === "file" ? (E = e.onItemClick) == null || E.call(e, C) : Jue(C);
      }
      return (C, E) => {
        const N = A1,
          M = o0e,
          L = $o,
          D = ci("tooltip");
        return B(t)
          ? (le(),
            be(
              "div",
              {
                key: 0,
                "items-center": "",
                p: "x-2 y-1",
                grid: "~ rows-1 items-center gap-x-2",
                "w-full": "",
                "h-28px": "",
                "border-rounded": "",
                hover: "bg-active",
                "cursor-pointer": "",
                class: "item-wrapper",
                style: Zt(B(d)),
                "aria-label": C.name,
                "data-current": C.current,
                onClick: E[2] || (E[2] = (A) => o()),
              },
              [
                C.indent > 0
                  ? (le(!0),
                    be(
                      ht,
                      { key: 0 },
                      si(
                        B(f),
                        (A) => (
                          le(),
                          be("div", {
                            key: A,
                            border: "solid gray-500 dark:gray-400",
                            class: "vertical-line",
                            "h-28px": "",
                            "inline-flex": "",
                            "mx-2": "",
                            op20: "",
                          })
                        ),
                      ),
                      128,
                    ))
                  : rt("", !0),
                C.type === "file" || C.type === "suite"
                  ? (le(),
                    be("div", l0e, [
                      Y(
                        "div",
                        {
                          class: st(
                            C.opened ? "i-carbon:chevron-down" : "i-carbon:chevron-right op20",
                          ),
                          op20: "",
                        },
                        null,
                        2,
                      ),
                    ]))
                  : rt("", !0),
                Pe(
                  N,
                  { state: C.state, mode: B(t).mode, "failed-snapshot": B(r), "w-4": "" },
                  null,
                  8,
                  ["state", "mode", "failed-snapshot"],
                ),
                C.type === "suite" && C.typecheck ? (le(), be("div", a0e)) : rt("", !0),
                Y(
                  "div",
                  {
                    flex: "",
                    "items-end": "",
                    "gap-2": "",
                    text: C.state === "fail" ? "red-500" : "",
                    "overflow-hidden": "",
                  },
                  [
                    Y("span", u0e, [
                      C.type === "file" && C.projectName
                        ? (le(),
                          be(
                            "span",
                            { key: 0, style: Zt({ color: C.projectNameColor }) },
                            " [" + qe(C.projectName) + "] ",
                            5,
                          ))
                        : rt("", !0),
                      Y("span", { innerHTML: B(p) }, null, 8, f0e),
                    ]),
                    typeof C.duration == "number"
                      ? (le(), be("span", d0e, qe(C.duration > 0 ? C.duration : "< 1") + "ms ", 1))
                      : rt("", !0),
                  ],
                  8,
                  c0e,
                ),
                Y("div", h0e, [
                  !B(Pr) && B(r)
                    ? kt(
                        (le(),
                        ot(
                          M,
                          {
                            key: 0,
                            "data-testid": "btn-fix-snapshot",
                            title: "Fix failed snapshot(s)",
                            icon: "i-carbon:result-old",
                            onClick: E[0] || (E[0] = yc((A) => c(B(t)), ["prevent", "stop"])),
                          },
                          null,
                          512,
                        )),
                        [[D, "Fix failed snapshot(s)", void 0, { bottom: !0 }]],
                      )
                    : rt("", !0),
                  Pe(
                    B(Mb),
                    {
                      placement: "bottom",
                      class: st(["w-1.4em h-1.4em op100 rounded flex", B(b)]),
                    },
                    {
                      popper: lt(() => [
                        B(v)
                          ? (le(),
                            be("div", p0e, [
                              g0e,
                              Y("div", null, [
                                dt(
                                  qe(B(y)) + ": this feature is not available, you have disabled ",
                                  1,
                                ),
                                v0e,
                                dt(" in your configuration file."),
                              ]),
                              m0e,
                            ]))
                          : (le(), be("div", y0e, qe(B(y)), 1)),
                      ]),
                      default: lt(() => [
                        Pe(L, {
                          "data-testid": "btn-open-details",
                          icon: "i-carbon:intrusion-prevention",
                          onClick: yc(x, ["prevent", "stop"]),
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                  B(Pr)
                    ? rt("", !0)
                    : kt(
                        (le(),
                        ot(
                          L,
                          {
                            key: 1,
                            "data-testid": "btn-run-test",
                            title: "Run current test",
                            icon: "i-carbon:play-filled-alt",
                            "text-green5": "",
                            disabled: C.type !== "file",
                            onClick: E[1] || (E[1] = yc((A) => s(B(t)), ["prevent", "stop"])),
                          },
                          null,
                          8,
                          ["disabled"],
                        )),
                        [[D, "Run current test", void 0, { bottom: !0 }]],
                      ),
                ]),
              ],
              12,
              s0e,
            ))
          : rt("", !0);
      };
    },
  }),
  w0e = eo(b0e, [["__scopeId", "data-v-26d571d7"]]),
  x0e = { "flex-1": "", "ms-2": "", "select-none": "" },
  _0e = gt({
    __name: "FilterStatus",
    props: Pc({ label: {} }, { modelValue: { type: [Boolean, null] }, modelModifiers: {} }),
    emits: ["update:modelValue"],
    setup(e) {
      const t = Ch(e, "modelValue");
      return (r, o) => (
        le(),
        be(
          "label",
          ii(
            {
              class:
                "font-light text-sm checkbox flex items-center cursor-pointer py-1 text-sm w-full gap-y-1 mb-1px",
            },
            r.$attrs,
            { onClick: o[1] || (o[1] = yc((s) => (t.value = !t.value), ["prevent"])) },
          ),
          [
            Y(
              "span",
              {
                class: st([t.value ? "i-carbon:checkbox-checked-filled" : "i-carbon:checkbox"]),
                "text-lg": "",
                "aria-hidden": "true",
              },
              null,
              2,
            ),
            kt(
              Y(
                "input",
                {
                  "onUpdate:modelValue": o[0] || (o[0] = (s) => (t.value = s)),
                  type: "checkbox",
                  "sr-only": "",
                },
                null,
                512,
              ),
              [[cT, t.value]],
            ),
            Y("span", x0e, qe(r.label), 1),
          ],
          16,
        )
      );
    },
  });
function S0e() {
  var e = window.navigator.userAgent,
    t = e.indexOf("MSIE ");
  if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let Lc;
function Qd() {
  Qd.init || ((Qd.init = !0), (Lc = S0e() !== -1));
}
var Hu = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    Qd(),
      ln(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const e = document.createElement("object");
    (this._resizeObject = e),
      e.setAttribute("aria-hidden", "true"),
      e.setAttribute("tabindex", -1),
      (e.onload = this.addResizeHandlers),
      (e.type = "text/html"),
      Lc && this.$el.appendChild(e),
      (e.data = "about:blank"),
      Lc || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth), (this._h = this.$el.offsetHeight), this.emitSize());
    },
    emitSize() {
      this.$emit("notify", { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        "resize",
        this.compareAndNotify,
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!Lc &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            "resize",
            this.compareAndNotify,
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const k0e = fy();
gu("data-v-b329ee4c");
const T0e = { class: "resize-observer", tabindex: "-1" };
vu();
const C0e = k0e((e, t, r, o, s, c) => (le(), ot("div", T0e)));
Hu.render = C0e;
Hu.__scopeId = "data-v-b329ee4c";
Hu.__file = "src/components/ResizeObserver.vue";
function Ac(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ac = function (t) {
          return typeof t;
        })
      : (Ac = function (t) {
          return t &&
            typeof Symbol == "function" &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        }),
    Ac(e)
  );
}
function E0e(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function L0e(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function A0e(e, t, r) {
  return t && L0e(e.prototype, t), e;
}
function A0(e) {
  return M0e(e) || N0e(e) || $0e(e) || O0e();
}
function M0e(e) {
  if (Array.isArray(e)) return eh(e);
}
function N0e(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function $0e(e, t) {
  if (e) {
    if (typeof e == "string") return eh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if ((r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set"))
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eh(e, t);
  }
}
function eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
  return o;
}
function O0e() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P0e(e) {
  var t;
  return typeof e == "function" ? (t = { callback: e }) : (t = e), t;
}
function R0e(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    o,
    s,
    c,
    f = function (h) {
      for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++)
        v[y - 1] = arguments[y];
      if (((c = v), !(o && h === s))) {
        var b = r.leading;
        typeof b == "function" && (b = b(h, s)),
          (!o || h !== s) && b && e.apply(void 0, [h].concat(A0(c))),
          (s = h),
          clearTimeout(o),
          (o = setTimeout(function () {
            e.apply(void 0, [h].concat(A0(c))), (o = 0);
          }, t));
      }
    };
  return (
    (f._clear = function () {
      clearTimeout(o), (o = null);
    }),
    f
  );
}
function M1(e, t) {
  if (e === t) return !0;
  if (Ac(e) === "object") {
    for (var r in e) if (!M1(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var D0e = (function () {
  function e(t, r, o) {
    E0e(this, e),
      (this.el = t),
      (this.observer = null),
      (this.frozen = !1),
      this.createObserver(r, o);
  }
  return (
    A0e(e, [
      {
        key: "createObserver",
        value: function (r, o) {
          var s = this;
          if ((this.observer && this.destroyObserver(), !this.frozen)) {
            if (
              ((this.options = P0e(r)),
              (this.callback = function (d, h) {
                s.options.callback(d, h),
                  d && s.options.once && ((s.frozen = !0), s.destroyObserver());
              }),
              this.callback && this.options.throttle)
            ) {
              var c = this.options.throttleOptions || {},
                f = c.leading;
              this.callback = R0e(this.callback, this.options.throttle, {
                leading: function (h) {
                  return f === "both" || (f === "visible" && h) || (f === "hidden" && !h);
                },
              });
            }
            (this.oldResult = void 0),
              (this.observer = new IntersectionObserver(function (d) {
                var h = d[0];
                if (d.length > 1) {
                  var p = d.find(function (y) {
                    return y.isIntersecting;
                  });
                  p && (h = p);
                }
                if (s.callback) {
                  var v = h.isIntersecting && h.intersectionRatio >= s.threshold;
                  if (v === s.oldResult) return;
                  (s.oldResult = v), s.callback(v, h);
                }
              }, this.options.intersection)),
              ln(function () {
                s.observer && s.observer.observe(s.el);
              });
          }
        },
      },
      {
        key: "destroyObserver",
        value: function () {
          this.observer && (this.observer.disconnect(), (this.observer = null)),
            this.callback &&
              this.callback._clear &&
              (this.callback._clear(), (this.callback = null));
        },
      },
      {
        key: "threshold",
        get: function () {
          return this.options.intersection && typeof this.options.intersection.threshold == "number"
            ? this.options.intersection.threshold
            : 0;
        },
      },
    ]),
    e
  );
})();
function N1(e, t, r) {
  var o = t.value;
  if (o)
    if (typeof IntersectionObserver > "u")
      console.warn(
        "[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill",
      );
    else {
      var s = new D0e(e, o, r);
      e._vue_visibilityState = s;
    }
}
function z0e(e, t, r) {
  var o = t.value,
    s = t.oldValue;
  if (!M1(o, s)) {
    var c = e._vue_visibilityState;
    if (!o) {
      $1(e);
      return;
    }
    c ? c.createObserver(o, r) : N1(e, { value: o }, r);
  }
}
function $1(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var I0e = { beforeMount: N1, updated: z0e, unmounted: $1 },
  F0e = { itemsLimit: 1e3 },
  H0e = /(auto|scroll)/;
function O1(e, t) {
  return e.parentNode === null ? t : O1(e.parentNode, t.concat([e]));
}
var ld = function (t, r) {
    return getComputedStyle(t, null).getPropertyValue(r);
  },
  q0e = function (t) {
    return ld(t, "overflow") + ld(t, "overflow-y") + ld(t, "overflow-x");
  },
  B0e = function (t) {
    return H0e.test(q0e(t));
  };
function M0(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = O1(e.parentNode, []), r = 0; r < t.length; r += 1) if (B0e(t[r])) return t[r];
    return document.scrollingElement || document.documentElement;
  }
}
function th(e) {
  "@babel/helpers - typeof";
  return (
    (th =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    th(e)
  );
}
var W0e = {
  items: { type: Array, required: !0 },
  keyField: { type: String, default: "id" },
  direction: {
    type: String,
    default: "vertical",
    validator: function (t) {
      return ["vertical", "horizontal"].includes(t);
    },
  },
  listTag: { type: String, default: "div" },
  itemTag: { type: String, default: "div" },
};
function U0e() {
  return this.items.length && th(this.items[0]) !== "object";
}
var nh = !1;
if (typeof window < "u") {
  nh = !1;
  try {
    var V0e = Object.defineProperty({}, "passive", {
      get: function () {
        nh = !0;
      },
    });
    window.addEventListener("test", null, V0e);
  } catch {}
}
let j0e = 0;
var lp = {
  name: "RecycleScroller",
  components: { ResizeObserver: Hu },
  directives: { ObserveVisibility: I0e },
  props: {
    ...W0e,
    itemSize: { type: Number, default: null },
    gridItems: { type: Number, default: void 0 },
    itemSecondarySize: { type: Number, default: void 0 },
    minItemSize: { type: [Number, String], default: null },
    sizeField: { type: String, default: "size" },
    typeField: { type: String, default: "type" },
    buffer: { type: Number, default: 200 },
    pageMode: { type: Boolean, default: !1 },
    prerender: { type: Number, default: 0 },
    emitUpdate: { type: Boolean, default: !1 },
    updateInterval: { type: Number, default: 0 },
    skipHover: { type: Boolean, default: !1 },
    listTag: { type: String, default: "div" },
    itemTag: { type: String, default: "div" },
    listClass: { type: [String, Object, Array], default: "" },
    itemClass: { type: [String, Object, Array], default: "" },
  },
  emits: ["resize", "visible", "hidden", "update", "scroll-start", "scroll-end"],
  data() {
    return { pool: [], totalSize: 0, ready: !1, hoverKey: null };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = { "-1": { accumulator: 0 } },
          t = this.items,
          r = this.sizeField,
          o = this.minItemSize;
        let s = 1e4,
          c = 0,
          f;
        for (let d = 0, h = t.length; d < h; d++)
          (f = t[d][r] || o), f < s && (s = f), (c += f), (e[d] = { accumulator: c, size: f });
        return (this.$_computedMinItemSize = s), e;
      }
      return [];
    },
    simpleArray: U0e,
    itemIndexByKey() {
      const { keyField: e, items: t } = this,
        r = {};
      for (let o = 0, s = t.length; o < s; o++) r[t[o][e]] = o;
      return r;
    },
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0,
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    },
  },
  created() {
    (this.$_startIndex = 0),
      (this.$_endIndex = 0),
      (this.$_views = new Map()),
      (this.$_unusedViews = new Map()),
      (this.$_scrollDirty = !1),
      (this.$_lastUpdateScrollPosition = 0),
      this.prerender && ((this.$_prerender = !0), this.updateVisibleItems(!1)),
      this.gridItems &&
        !this.itemSize &&
        console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(),
      this.$nextTick(() => {
        (this.$_prerender = !1), this.updateVisibleItems(!0), (this.ready = !0);
      });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" &&
      this.$nextTick(() => {
        this.scrollToPosition(e);
      });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, r, o, s) {
      const c = ph({ id: j0e++, index: t, used: !0, key: o, type: s }),
        f = dh({ item: r, position: 0, nr: c });
      return e.push(f), f;
    },
    unuseView(e, t = !1) {
      const r = this.$_unusedViews,
        o = e.nr.type;
      let s = r.get(o);
      s || ((s = []), r.set(o, s)), s.push(e), t || ((e.nr.used = !1), (e.position = -9999));
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (((this.$_scrollDirty = !0), this.$_updateTimeout)) return;
        const t = () =>
          requestAnimationFrame(() => {
            this.$_scrollDirty = !1;
            const { continuous: r } = this.updateVisibleItems(!1, !0);
            r ||
              (clearTimeout(this.$_refreshTimout),
              (this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100)));
          });
        t(),
          this.updateInterval &&
            (this.$_updateTimeout = setTimeout(() => {
              (this.$_updateTimeout = 0), this.$_scrollDirty && t();
            }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready &&
        (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0
          ? (this.$emit("visible"),
            requestAnimationFrame(() => {
              this.updateVisibleItems(!1);
            }))
          : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const r = this.itemSize,
        o = this.gridItems || 1,
        s = this.itemSecondarySize || r,
        c = this.$_computedMinItemSize,
        f = this.typeField,
        d = this.simpleArray ? null : this.keyField,
        h = this.items,
        p = h.length,
        v = this.sizes,
        y = this.$_views,
        b = this.$_unusedViews,
        x = this.pool,
        C = this.itemIndexByKey;
      let E, N, M, L, D;
      if (!p) E = N = L = D = M = 0;
      else if (this.$_prerender)
        (E = L = 0), (N = D = Math.min(this.prerender, h.length)), (M = null);
      else {
        const j = this.getScroll();
        if (t) {
          let V = j.start - this.$_lastUpdateScrollPosition;
          if ((V < 0 && (V = -V), (r === null && V < c) || V < r)) return { continuous: !0 };
        }
        this.$_lastUpdateScrollPosition = j.start;
        const te = this.buffer;
        (j.start -= te), (j.end += te);
        let K = 0;
        if (
          (this.$refs.before && ((K = this.$refs.before.scrollHeight), (j.start -= K)),
          this.$refs.after)
        ) {
          const V = this.$refs.after.scrollHeight;
          j.end += V;
        }
        if (r === null) {
          let V,
            I = 0,
            k = p - 1,
            q = ~~(p / 2),
            W;
          do
            (W = q),
              (V = v[q].accumulator),
              V < j.start ? (I = q) : q < p - 1 && v[q + 1].accumulator > j.start && (k = q),
              (q = ~~((I + k) / 2));
          while (q !== W);
          for (
            q < 0 && (q = 0), E = q, M = v[p - 1].accumulator, N = q;
            N < p && v[N].accumulator < j.end;
            N++
          );
          for (
            N === -1 ? (N = h.length - 1) : (N++, N > p && (N = p)), L = E;
            L < p && K + v[L].accumulator < j.start;
            L++
          );
          for (D = L; D < p && K + v[D].accumulator < j.end; D++);
        } else {
          E = ~~((j.start / r) * o);
          const V = E % o;
          (E -= V),
            (N = Math.ceil((j.end / r) * o)),
            (L = Math.max(0, Math.floor(((j.start - K) / r) * o))),
            (D = Math.floor(((j.end - K) / r) * o)),
            E < 0 && (E = 0),
            N > p && (N = p),
            L < 0 && (L = 0),
            D > p && (D = p),
            (M = Math.ceil(p / o) * r);
        }
      }
      N - E > F0e.itemsLimit && this.itemsLimitError(), (this.totalSize = M);
      let A;
      const H = E <= this.$_endIndex && N >= this.$_startIndex;
      if (H)
        for (let j = 0, te = x.length; j < te; j++)
          (A = x[j]),
            A.nr.used &&
              (e && (A.nr.index = C[A.item[d]]),
              (A.nr.index == null || A.nr.index < E || A.nr.index >= N) && this.unuseView(A));
      const z = H ? null : new Map();
      let J, ie, ne;
      for (let j = E; j < N; j++) {
        J = h[j];
        const te = d ? J[d] : J;
        if (te == null) throw new Error(`Key is ${te} on item (keyField is '${d}')`);
        if (((A = y.get(te)), !r && !v[j].size)) {
          A && this.unuseView(A);
          continue;
        }
        ie = J[f];
        let K = b.get(ie),
          V = !1;
        if (!A)
          H
            ? K && K.length
              ? (A = K.pop())
              : (A = this.addView(x, j, J, te, ie))
            : ((ne = z.get(ie) || 0),
              (!K || ne >= K.length) &&
                ((A = this.addView(x, j, J, te, ie)), this.unuseView(A, !0), (K = b.get(ie))),
              (A = K[ne]),
              z.set(ie, ne + 1)),
            y.delete(A.nr.key),
            (A.nr.used = !0),
            (A.nr.index = j),
            (A.nr.key = te),
            (A.nr.type = ie),
            y.set(te, A),
            (V = !0);
        else if (!A.nr.used && ((A.nr.used = !0), (V = !0), K)) {
          const I = K.indexOf(A);
          I !== -1 && K.splice(I, 1);
        }
        (A.item = J),
          V &&
            (j === h.length - 1 && this.$emit("scroll-end"), j === 0 && this.$emit("scroll-start")),
          r === null
            ? ((A.position = v[j - 1].accumulator), (A.offset = 0))
            : ((A.position = Math.floor(j / o) * r), (A.offset = (j % o) * s));
      }
      return (
        (this.$_startIndex = E),
        (this.$_endIndex = N),
        this.emitUpdate && this.$emit("update", E, N, L, D),
        clearTimeout(this.$_sortTimer),
        (this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300)),
        { continuous: H }
      );
    },
    getListenerTarget() {
      let e = M0(this.$el);
      return (
        window.document &&
          (e === window.document.documentElement || e === window.document.body) &&
          (e = window),
        e
      );
    },
    getScroll() {
      const { $el: e, direction: t } = this,
        r = t === "vertical";
      let o;
      if (this.pageMode) {
        const s = e.getBoundingClientRect(),
          c = r ? s.height : s.width;
        let f = -(r ? s.top : s.left),
          d = r ? window.innerHeight : window.innerWidth;
        f < 0 && ((d += f), (f = 0)), f + d > c && (d = c - f), (o = { start: f, end: f + d });
      } else
        r
          ? (o = { start: e.scrollTop, end: e.scrollTop + e.clientHeight })
          : (o = { start: e.scrollLeft, end: e.scrollLeft + e.clientWidth });
      return o;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      (this.listenerTarget = this.getListenerTarget()),
        this.listenerTarget.addEventListener(
          "scroll",
          this.handleScroll,
          nh ? { passive: !0 } : !1,
        ),
        this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget &&
        (this.listenerTarget.removeEventListener("scroll", this.handleScroll),
        this.listenerTarget.removeEventListener("resize", this.handleResize),
        (this.listenerTarget = null));
    },
    scrollToItem(e) {
      let t;
      const r = this.gridItems || 1;
      this.itemSize === null
        ? (t = e > 0 ? this.sizes[e - 1].accumulator : 0)
        : (t = Math.floor(e / r) * this.itemSize),
        this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t =
        this.direction === "vertical"
          ? { scroll: "scrollTop", start: "top" }
          : { scroll: "scrollLeft", start: "left" };
      let r, o, s;
      if (this.pageMode) {
        const c = M0(this.$el),
          f = c.tagName === "HTML" ? 0 : c[t.scroll],
          d = c.getBoundingClientRect(),
          p = this.$el.getBoundingClientRect()[t.start] - d[t.start];
        (r = c), (o = t.scroll), (s = e + f + p);
      } else (r = this.$el), (o = t.scroll), (s = e);
      r[o] = s;
    },
    itemsLimitError() {
      throw (
        (setTimeout(() => {
          console.log(
            "It seems the scroller element isn't scrolling, so it tries to render all the items at once.",
            "Scroller:",
            this.$el,
          ),
            console.log(
              "Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.",
            );
        }),
        new Error("Rendered items limit reached"))
      );
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    },
  },
};
const G0e = { key: 0, ref: "before", class: "vue-recycle-scroller__slot" },
  K0e = { key: 1, ref: "after", class: "vue-recycle-scroller__slot" };
function X0e(e, t, r, o, s, c) {
  const f = Lo("ResizeObserver"),
    d = ci("observe-visibility");
  return kt(
    (le(),
    be(
      "div",
      {
        class: st([
          "vue-recycle-scroller",
          { ready: s.ready, "page-mode": r.pageMode, [`direction-${e.direction}`]: !0 },
        ]),
        onScrollPassive: t[0] || (t[0] = (...h) => c.handleScroll && c.handleScroll(...h)),
      },
      [
        e.$slots.before ? (le(), be("div", G0e, [hn(e.$slots, "before")], 512)) : rt("v-if", !0),
        (le(),
        ot(
          bv(r.listTag),
          {
            ref: "wrapper",
            style: Zt({
              [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px",
            }),
            class: st(["vue-recycle-scroller__item-wrapper", r.listClass]),
          },
          {
            default: lt(() => [
              (le(!0),
              be(
                ht,
                null,
                si(
                  s.pool,
                  (h) => (
                    le(),
                    ot(
                      bv(r.itemTag),
                      ii(
                        {
                          key: h.nr.id,
                          style: s.ready
                            ? {
                                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${h.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${h.offset}px)`,
                                width: r.gridItems
                                  ? `${(e.direction === "vertical" && r.itemSecondarySize) || r.itemSize}px`
                                  : void 0,
                                height: r.gridItems
                                  ? `${(e.direction === "horizontal" && r.itemSecondarySize) || r.itemSize}px`
                                  : void 0,
                              }
                            : null,
                          class: [
                            "vue-recycle-scroller__item-view",
                            [r.itemClass, { hover: !r.skipHover && s.hoverKey === h.nr.key }],
                          ],
                        },
                        ZS(
                          r.skipHover
                            ? {}
                            : {
                                mouseenter: () => {
                                  s.hoverKey = h.nr.key;
                                },
                                mouseleave: () => {
                                  s.hoverKey = null;
                                },
                              },
                        ),
                      ),
                      {
                        default: lt(() => [
                          hn(e.$slots, "default", {
                            item: h.item,
                            index: h.nr.index,
                            active: h.nr.used,
                          }),
                        ]),
                        _: 2,
                      },
                      1040,
                      ["style", "class"],
                    )
                  ),
                ),
                128,
              )),
              hn(e.$slots, "empty"),
            ]),
            _: 3,
          },
          8,
          ["style", "class"],
        )),
        e.$slots.after ? (le(), be("div", K0e, [hn(e.$slots, "after")], 512)) : rt("v-if", !0),
        Pe(f, { onNotify: c.handleResize }, null, 8, ["onNotify"]),
      ],
      34,
    )),
    [[d, c.handleVisibilityChange]],
  );
}
lp.render = X0e;
lp.__file = "src/components/RecycleScroller.vue";
function Y0e(e) {
  const t = $e(() => (Fd.value ? !1 : !Qe.onlyTests)),
    r = $e(() => $n.value === ""),
    o = je($n.value);
  Wb(
    $n,
    (h) => {
      o.value = (h == null ? void 0 : h.trim()) ?? "";
    },
    { debounce: 256 },
  );
  function s(h) {
    var p;
    ($n.value = ""), h && ((p = e.value) == null || p.focus());
  }
  function c(h) {
    var p;
    (Qe.failed = !1),
      (Qe.success = !1),
      (Qe.skipped = !1),
      (Qe.onlyTests = !1),
      h && ((p = e.value) == null || p.focus());
  }
  function f() {
    c(!1), s(!0);
  }
  function d(h, p, v, y, b) {
    Cs.value &&
      ((on.value.search = (h == null ? void 0 : h.trim()) ?? ""),
      (on.value.failed = p),
      (on.value.success = v),
      (on.value.skipped = y),
      (on.value.onlyTests = b));
  }
  return (
    qt(
      () => [o.value, Qe.failed, Qe.success, Qe.skipped, Qe.onlyTests],
      ([h, p, v, y, b]) => {
        d(h, p, v, y, b), Le.filterNodes();
      },
      { flush: "post" },
    ),
    qt(
      () => xr.value.length,
      (h) => {
        h && (on.value.expandAll = void 0);
      },
      { flush: "post" },
    ),
    {
      initialized: Cs,
      filter: Qe,
      search: $n,
      disableFilter: t,
      isFiltered: Fw,
      isFilteredByStatus: Fd,
      disableClearSearch: r,
      clearAll: f,
      clearSearch: s,
      clearFilter: c,
      filteredFiles: Ru,
      testsTotal: uue,
      uiEntries: Dn,
    }
  );
}
const Z0e = {
    p: "2",
    "h-10": "",
    flex: "~ gap-2",
    "items-center": "",
    "bg-header": "",
    border: "b base",
  },
  J0e = { p: "l3 y2 r2", flex: "~ gap-2", "items-center": "", "bg-header": "", border: "b-2 base" },
  Q0e = Y("div", { class: "i-carbon:search", "flex-shrink-0": "" }, null, -1),
  eye = ["op"],
  tye = Y("div", { "aria-hidden": "true", class: "i-carbon:filter" }, null, -1),
  nye = Y("div", { "flex-grow-1": "", "text-sm": "" }, " Filter ", -1),
  rye = {
    grid: "~ items-center gap-x-1 cols-[auto_min-content_auto] rows-[min-content_min-content]",
  },
  iye = { "text-red5": "" },
  oye = Y("span", null, "/", -1),
  sye = { "text-yellow5": "" },
  lye = { "text-green5": "" },
  aye = Y("span", null, "/", -1),
  cye = { class: "text-purple5:50" },
  uye = { key: 0, flex: "~ col", "items-center": "", p: "x4 y4", "font-light": "" },
  fye = Y("div", { op30: "" }, " No matched test ", -1),
  dye = ["disabled"],
  hye = ["disabled"],
  pye = { key: 1, flex: "~ col", "items-center": "", p: "x4 y4", "font-light": "" },
  gye = Y("div", { class: "i-carbon:circle-dash animate-spin" }, null, -1),
  vye = Y("div", { op30: "" }, " Loading... ", -1),
  mye = [gye, vye],
  yye = gt({
    inheritAttrs: !1,
    __name: "Explorer",
    props: { onItemClick: { type: Function } },
    emits: ["item-click", "run"],
    setup(e, { emit: t }) {
      const r = t,
        o = $e(() => Du.value.includeTaskLocation),
        s = je(),
        {
          initialized: c,
          filter: f,
          search: d,
          disableFilter: h,
          isFiltered: p,
          isFilteredByStatus: v,
          disableClearSearch: y,
          clearAll: b,
          clearSearch: x,
          clearFilter: C,
          filteredFiles: E,
          testsTotal: N,
          uiEntries: M,
        } = Y0e(s),
        L = je("grid-cols-2"),
        D = je("grid-col-span-2"),
        A = je();
      return (
        Xb(A, (H) => {
          const { width: z } = H[0].contentRect;
          z < 420
            ? ((L.value = "grid-cols-2"), (D.value = "grid-col-span-2"))
            : ((L.value = "grid-cols-4"), (D.value = "grid-col-span-4"));
        }),
        (H, z) => {
          const J = $o,
            ie = _0e,
            ne = w0e,
            j = r0e,
            te = ci("tooltip");
          return (
            le(),
            be(
              "div",
              { ref_key: "testExplorerRef", ref: A, h: "full", flex: "~ col" },
              [
                Y("div", null, [
                  Y("div", Z0e, [
                    hn(H.$slots, "header", { filteredFiles: B(p) || B(v) ? B(E) : void 0 }),
                  ]),
                  Y("div", J0e, [
                    Q0e,
                    kt(
                      Y(
                        "input",
                        {
                          ref_key: "searchBox",
                          ref: s,
                          "onUpdate:modelValue":
                            z[0] || (z[0] = (K) => (It(d) ? (d.value = K) : null)),
                          placeholder: "Search...",
                          outline: "none",
                          bg: "transparent",
                          font: "light",
                          text: "sm",
                          "flex-1": "",
                          "pl-1": "",
                          op: B(d).length ? "100" : "50",
                          onKeydown: [
                            z[1] || (z[1] = Sd((K) => B(x)(!1), ["esc"])),
                            z[2] ||
                              (z[2] = Sd((K) => r("run", B(p) || B(v) ? B(E) : void 0), ["enter"])),
                          ],
                        },
                        null,
                        40,
                        eye,
                      ),
                      [[aT, B(d)]],
                    ),
                    kt(
                      Pe(
                        J,
                        {
                          disabled: B(y),
                          title: "Clear search",
                          icon: "i-carbon:filter-remove",
                          onClickPassive: z[3] || (z[3] = (K) => B(x)(!0)),
                        },
                        null,
                        8,
                        ["disabled"],
                      ),
                      [[te, "Clear search", void 0, { bottom: !0 }]],
                    ),
                  ]),
                  Y(
                    "div",
                    {
                      p: "l3 y2 r2",
                      "items-center": "",
                      "bg-header": "",
                      border: "b-2 base",
                      grid: "~ items-center gap-x-2 rows-[auto_auto]",
                      class: st(B(L)),
                    },
                    [
                      Y(
                        "div",
                        { class: st(B(D)), flex: "~ gap-2 items-center" },
                        [
                          tye,
                          nye,
                          kt(
                            Pe(
                              J,
                              {
                                disabled: B(h),
                                title: "Clear search",
                                icon: "i-carbon:filter-remove",
                                onClickPassive: z[4] || (z[4] = (K) => B(C)(!1)),
                              },
                              null,
                              8,
                              ["disabled"],
                            ),
                            [[te, "Clear Filter", void 0, { bottom: !0 }]],
                          ),
                        ],
                        2,
                      ),
                      Pe(
                        ie,
                        {
                          modelValue: B(f).failed,
                          "onUpdate:modelValue": z[5] || (z[5] = (K) => (B(f).failed = K)),
                          label: "Fail",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                      Pe(
                        ie,
                        {
                          modelValue: B(f).success,
                          "onUpdate:modelValue": z[6] || (z[6] = (K) => (B(f).success = K)),
                          label: "Pass",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                      Pe(
                        ie,
                        {
                          modelValue: B(f).skipped,
                          "onUpdate:modelValue": z[7] || (z[7] = (K) => (B(f).skipped = K)),
                          label: "Skip",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                      Pe(
                        ie,
                        {
                          modelValue: B(f).onlyTests,
                          "onUpdate:modelValue": z[8] || (z[8] = (K) => (B(f).onlyTests = K)),
                          label: "Only Tests",
                        },
                        null,
                        8,
                        ["modelValue"],
                      ),
                    ],
                    2,
                  ),
                ]),
                Y(
                  "div",
                  {
                    class: "scrolls",
                    "flex-auto": "",
                    "py-1": "",
                    onScrollPassive: z[12] || (z[12] = (...K) => B(Lm) && B(Lm)(...K)),
                  },
                  [
                    Pe(
                      j,
                      null,
                      YS(
                        {
                          default: lt(() => [
                            (B(p) || B(v)) && B(M).length === 0
                              ? (le(),
                                be(
                                  ht,
                                  { key: 0 },
                                  [
                                    B(c)
                                      ? (le(),
                                        be("div", uye, [
                                          fye,
                                          Y(
                                            "button",
                                            {
                                              type: "button",
                                              "font-light": "",
                                              "text-sm": "",
                                              border: "~ gray-400/50 rounded",
                                              p: "x2 y0.5",
                                              m: "t2",
                                              op: "50",
                                              class: st(B(y) ? null : "hover:op100"),
                                              disabled: B(y),
                                              onClickPassive: z[9] || (z[9] = (K) => B(x)(!0)),
                                            },
                                            " Clear Search ",
                                            42,
                                            dye,
                                          ),
                                          Y(
                                            "button",
                                            {
                                              type: "button",
                                              "font-light": "",
                                              "text-sm": "",
                                              border: "~ gray-400/50 rounded",
                                              p: "x2 y0.5",
                                              m: "t2",
                                              op: "50",
                                              class: st(B(h) ? null : "hover:op100"),
                                              disabled: B(h),
                                              onClickPassive: z[10] || (z[10] = (K) => B(C)(!0)),
                                            },
                                            " Clear Filter ",
                                            42,
                                            hye,
                                          ),
                                          Y(
                                            "button",
                                            {
                                              type: "button",
                                              "font-light": "",
                                              op: "50 hover:100",
                                              "text-sm": "",
                                              border: "~ gray-400/50 rounded",
                                              p: "x2 y0.5",
                                              m: "t2",
                                              onClickPassive:
                                                z[11] || (z[11] = (...K) => B(b) && B(b)(...K)),
                                            },
                                            " Clear All ",
                                            32,
                                          ),
                                        ]))
                                      : (le(), be("div", pye, mye)),
                                  ],
                                  64,
                                ))
                              : (le(),
                                ot(
                                  B(lp),
                                  {
                                    key: 1,
                                    "page-mode": "",
                                    "key-field": "id",
                                    "item-size": 28,
                                    items: B(M),
                                    buffer: 100,
                                  },
                                  {
                                    default: lt(({ item: K }) => [
                                      Pe(
                                        ne,
                                        {
                                          class: st([
                                            "h-28px m-0 p-0",
                                            B(Gi) === K.id ? "bg-active" : "",
                                          ]),
                                          "task-id": K.id,
                                          expandable: K.expandable,
                                          type: K.type,
                                          current: B(Gi) === K.id,
                                          indent: K.indent,
                                          name: K.name,
                                          typecheck: K.typecheck === !0,
                                          "project-name": K.projectName ?? "",
                                          "project-name-color": K.projectNameColor ?? "",
                                          state: K.state,
                                          duration: K.duration,
                                          opened: K.expanded,
                                          "disable-task-location": !B(o),
                                          "on-item-click": H.onItemClick,
                                        },
                                        null,
                                        8,
                                        [
                                          "task-id",
                                          "expandable",
                                          "type",
                                          "current",
                                          "indent",
                                          "name",
                                          "typecheck",
                                          "project-name",
                                          "project-name-color",
                                          "state",
                                          "duration",
                                          "opened",
                                          "disable-task-location",
                                          "class",
                                          "on-item-click",
                                        ],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["items"],
                                )),
                          ]),
                          _: 2,
                        },
                        [
                          B(c)
                            ? {
                                name: "summary",
                                fn: lt(() => [
                                  Y("div", rye, [
                                    Y("span", iye, " FAIL (" + qe(B(N).failed) + ") ", 1),
                                    oye,
                                    Y("span", sye, " RUNNING (" + qe(B(N).running) + ") ", 1),
                                    Y("span", lye, " PASS (" + qe(B(N).success) + ") ", 1),
                                    aye,
                                    Y(
                                      "span",
                                      cye,
                                      " SKIP (" + qe(B(f).onlyTests ? B(N).skipped : "--") + ") ",
                                      1,
                                    ),
                                  ]),
                                ]),
                                key: "0",
                              }
                            : void 0,
                        ],
                      ),
                      1024,
                    ),
                  ],
                  32,
                ),
              ],
              512,
            )
          );
        }
      );
    },
  }),
  bye = "" + new URL("../favicon.svg", import.meta.url).href,
  wye = Y("img", { "w-6": "", "h-6": "", src: bye, alt: "Vitest logo" }, null, -1),
  xye = Y("span", { "font-light": "", "text-sm": "", "flex-1": "" }, "Vitest", -1),
  _ye = { class: "flex text-lg" },
  Sye = Y("div", { class: "i-carbon:folder-off ma" }, null, -1),
  kye = Y(
    "div",
    { class: "op100 gap-1 p-y-1", grid: "~ items-center cols-[1.5em_1fr]" },
    [
      Y("div", { class: "i-carbon:information-square w-1.5em h-1.5em" }),
      Y("div", null, "Coverage enabled but missing html reporter."),
      Y(
        "div",
        { style: { "grid-column": "2" } },
        " Add html reporter to your configuration to see coverage here. ",
      ),
    ],
    -1,
  ),
  Tye = gt({
    __name: "Navigation",
    setup(e) {
      function t() {
        return bt.rpc.updateSnapshot();
      }
      const r = $e(() => (fa.value ? "light" : "dark"));
      async function o(f) {
        cs.value && ((Jc.value = !0), await ln(), Xi.value && (Qc(!0), await ln())),
          f != null && f.length ? await Gh(f) : await due();
      }
      function s() {
        Le.collapseAllNodes();
      }
      function c() {
        Le.expandAllNodes();
      }
      return (f, d) => {
        const h = $o,
          p = yye,
          v = ci("tooltip");
        return (
          le(),
          ot(
            p,
            { border: "r base", "on-item-click": B(qw), nested: !0, onRun: o },
            {
              header: lt(({ filteredFiles: y }) => [
                wye,
                xye,
                Y("div", _ye, [
                  kt(
                    Pe(
                      h,
                      {
                        title: "Collapse tests",
                        disabled: !B(Cs),
                        icon: "i-carbon:collapse-all",
                        onClick: d[0] || (d[0] = (b) => s()),
                      },
                      null,
                      8,
                      ["disabled"],
                    ),
                    [
                      [vl, !B(r0)],
                      [v, "Collapse tests", void 0, { bottom: !0 }],
                    ],
                  ),
                  kt(
                    Pe(
                      h,
                      {
                        disabled: !B(Cs),
                        title: "Expand tests",
                        icon: "i-carbon:expand-all",
                        onClick: d[1] || (d[1] = (b) => c()),
                      },
                      null,
                      8,
                      ["disabled"],
                    ),
                    [
                      [vl, B(r0)],
                      [v, "Expand tests", void 0, { bottom: !0 }],
                    ],
                  ),
                  kt(
                    Pe(
                      h,
                      {
                        title: "Show dashboard",
                        class: "!animate-100ms",
                        "animate-count-1": "",
                        icon: "i-carbon:dashboard",
                        onClick: d[2] || (d[2] = (b) => B(Qc)(!0)),
                      },
                      null,
                      512,
                    ),
                    [
                      [vl, (B(qd) && !B(cs)) || !B(vs)],
                      [v, "Dashboard", void 0, { bottom: !0 }],
                    ],
                  ),
                  B(qd) && !B(cs)
                    ? (le(),
                      ot(
                        B(Mb),
                        {
                          key: 0,
                          title: "Coverage enabled but missing html reporter",
                          class:
                            "w-1.4em h-1.4em op100 rounded flex color-red5 dark:color-#f43f5e cursor-help",
                        },
                        { popper: lt(() => [kye]), default: lt(() => [Sye]), _: 1 },
                      ))
                    : rt("", !0),
                  B(cs)
                    ? kt(
                        (le(),
                        ot(
                          h,
                          {
                            key: 1,
                            disabled: B(Jc),
                            title: "Show coverage",
                            class: "!animate-100ms",
                            "animate-count-1": "",
                            icon: "i-carbon:folder-details-reference",
                            onClick: d[3] || (d[3] = (b) => B(bue)()),
                          },
                          null,
                          8,
                          ["disabled"],
                        )),
                        [
                          [vl, !B(Xi)],
                          [v, "Coverage", void 0, { bottom: !0 }],
                        ],
                      )
                    : rt("", !0),
                  B(Le).summary.failedSnapshot && !B(Pr)
                    ? kt(
                        (le(),
                        ot(
                          h,
                          {
                            key: 2,
                            icon: "i-carbon:result-old",
                            disabled: !B(Le).summary.failedSnapshotEnabled,
                            onClick:
                              d[4] || (d[4] = (b) => B(Le).summary.failedSnapshotEnabled && t()),
                          },
                          null,
                          8,
                          ["disabled"],
                        )),
                        [[v, "Update all failed snapshot(s)", void 0, { bottom: !0 }]],
                      )
                    : rt("", !0),
                  B(Pr)
                    ? rt("", !0)
                    : kt(
                        (le(),
                        ot(
                          h,
                          {
                            key: 3,
                            disabled: (y == null ? void 0 : y.length) === 0,
                            icon: "i-carbon:play",
                            onClick: (b) => o(y),
                          },
                          null,
                          8,
                          ["disabled", "onClick"],
                        )),
                        [
                          [
                            v,
                            y
                              ? y.length === 0
                                ? "No test to run (clear filter)"
                                : "Rerun filtered"
                              : "Rerun all",
                            void 0,
                            { bottom: !0 },
                          ],
                        ],
                      ),
                  kt(
                    Pe(
                      h,
                      {
                        icon: "dark:i-carbon-moon i-carbon:sun",
                        onClick: d[5] || (d[5] = (b) => B(Eue)()),
                      },
                      null,
                      512,
                    ),
                    [[v, `Toggle to ${B(r)} mode`, void 0, { bottom: !0 }]],
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ["on-item-click"],
          )
        );
      };
    },
  }),
  Cye = { "h-3px": "", relative: "", "overflow-hidden": "", class: "px-0", "w-screen": "" },
  Eye = gt({
    __name: "ProgressBar",
    setup(e) {
      const { width: t } = uL(),
        r = $e(() =>
          Le.summary.files === 0
            ? "!bg-gray-4 !dark:bg-gray-7 in-progress"
            : Rce.value
              ? null
              : "in-progress",
        ),
        o = $e(() => {
          const d = Le.summary.files;
          return d > 0 ? (t.value * Le.summary.filesSuccess) / d : 0;
        }),
        s = $e(() => {
          const d = Le.summary.files;
          return d > 0 ? (t.value * Le.summary.filesFailed) / d : 0;
        }),
        c = $e(() => Le.summary.files - Le.summary.filesFailed - Le.summary.filesSuccess),
        f = $e(() => {
          const d = Le.summary.files;
          return d > 0 ? (t.value * c.value) / d : 0;
        });
      return (d, h) => (
        le(),
        be(
          "div",
          {
            absolute: "",
            "t-0": "",
            "l-0": "",
            "r-0": "",
            "z-index-1031": "",
            "pointer-events-none": "",
            "p-0": "",
            "h-3px": "",
            grid: "~ auto-cols-max",
            "justify-items-center": "",
            "w-screen": "",
            class: st(B(r)),
          },
          [
            Y("div", Cye, [
              Y(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-red5": "",
                  "h-3px": "",
                  class: st(B(r)),
                  style: Zt(`width: ${B(s)}px;`),
                },
                "   ",
                6,
              ),
              Y(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-green5": "",
                  "h-3px": "",
                  class: st(B(r)),
                  style: Zt(`left: ${B(s)}px; width: ${B(o)}px;`),
                },
                "   ",
                6,
              ),
              Y(
                "div",
                {
                  absolute: "",
                  "l-0": "",
                  "t-0": "",
                  "bg-yellow5": "",
                  "h-3px": "",
                  class: st(B(r)),
                  style: Zt(`left: ${B(o) + B(s)}px; width: ${B(f)}px;`),
                },
                "   ",
                6,
              ),
            ]),
          ],
          2,
        )
      );
    },
  }),
  Lye = eo(Eye, [["__scopeId", "data-v-38451300"]]),
  N0 = {
    name: "splitpanes",
    emits: [
      "ready",
      "resize",
      "resized",
      "pane-click",
      "pane-maximize",
      "pane-add",
      "pane-remove",
      "splitter-click",
    ],
    props: {
      horizontal: { type: Boolean },
      pushOtherPanes: { type: Boolean, default: !0 },
      dblClickSplitter: { type: Boolean, default: !0 },
      rtl: { type: Boolean, default: !1 },
      firstSplitter: { type: Boolean },
    },
    provide() {
      return {
        requestUpdate: this.requestUpdate,
        onPaneAdd: this.onPaneAdd,
        onPaneRemove: this.onPaneRemove,
        onPaneClick: this.onPaneClick,
      };
    },
    data: () => ({
      container: null,
      ready: !1,
      panes: [],
      touch: { mouseDown: !1, dragging: !1, activeSplitter: null },
      splitterTaps: { splitter: null, timeoutId: null },
    }),
    computed: {
      panesCount() {
        return this.panes.length;
      },
      indexedPanes() {
        return this.panes.reduce((e, t) => (e[t.id] = t) && e, {});
      },
    },
    methods: {
      updatePaneComponents() {
        this.panes.forEach((e) => {
          e.update &&
            e.update({
              [this.horizontal ? "height" : "width"]: `${this.indexedPanes[e.id].size}%`,
            });
        });
      },
      bindEvents() {
        document.addEventListener("mousemove", this.onMouseMove, { passive: !1 }),
          document.addEventListener("mouseup", this.onMouseUp),
          "ontouchstart" in window &&
            (document.addEventListener("touchmove", this.onMouseMove, { passive: !1 }),
            document.addEventListener("touchend", this.onMouseUp));
      },
      unbindEvents() {
        document.removeEventListener("mousemove", this.onMouseMove, { passive: !1 }),
          document.removeEventListener("mouseup", this.onMouseUp),
          "ontouchstart" in window &&
            (document.removeEventListener("touchmove", this.onMouseMove, { passive: !1 }),
            document.removeEventListener("touchend", this.onMouseUp));
      },
      onMouseDown(e, t) {
        this.bindEvents(), (this.touch.mouseDown = !0), (this.touch.activeSplitter = t);
      },
      onMouseMove(e) {
        this.touch.mouseDown &&
          (e.preventDefault(),
          (this.touch.dragging = !0),
          this.calculatePanesSize(this.getCurrentMouseDrag(e)),
          this.$emit(
            "resize",
            this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
          ));
      },
      onMouseUp() {
        this.touch.dragging &&
          this.$emit(
            "resized",
            this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size })),
          ),
          (this.touch.mouseDown = !1),
          setTimeout(() => {
            (this.touch.dragging = !1), this.unbindEvents();
          }, 100);
      },
      onSplitterClick(e, t) {
        "ontouchstart" in window &&
          (e.preventDefault(),
          this.dblClickSplitter &&
            (this.splitterTaps.splitter === t
              ? (clearTimeout(this.splitterTaps.timeoutId),
                (this.splitterTaps.timeoutId = null),
                this.onSplitterDblClick(e, t),
                (this.splitterTaps.splitter = null))
              : ((this.splitterTaps.splitter = t),
                (this.splitterTaps.timeoutId = setTimeout(() => {
                  this.splitterTaps.splitter = null;
                }, 500))))),
          this.touch.dragging || this.$emit("splitter-click", this.panes[t]);
      },
      onSplitterDblClick(e, t) {
        let r = 0;
        (this.panes = this.panes.map(
          (o, s) => ((o.size = s === t ? o.max : o.min), s !== t && (r += o.min), o),
        )),
          (this.panes[t].size -= r),
          this.$emit("pane-maximize", this.panes[t]),
          this.$emit(
            "resized",
            this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })),
          );
      },
      onPaneClick(e, t) {
        this.$emit("pane-click", this.indexedPanes[t]);
      },
      getCurrentMouseDrag(e) {
        const t = this.container.getBoundingClientRect(),
          { clientX: r, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
        return { x: r - t.left, y: o - t.top };
      },
      getCurrentDragPercentage(e) {
        e = e[this.horizontal ? "y" : "x"];
        const t = this.container[this.horizontal ? "clientHeight" : "clientWidth"];
        return this.rtl && !this.horizontal && (e = t - e), (e * 100) / t;
      },
      calculatePanesSize(e) {
        const t = this.touch.activeSplitter;
        let r = {
          prevPanesSize: this.sumPrevPanesSize(t),
          nextPanesSize: this.sumNextPanesSize(t),
          prevReachedMinPanes: 0,
          nextReachedMinPanes: 0,
        };
        const o = 0 + (this.pushOtherPanes ? 0 : r.prevPanesSize),
          s = 100 - (this.pushOtherPanes ? 0 : r.nextPanesSize),
          c = Math.max(Math.min(this.getCurrentDragPercentage(e), s), o);
        let f = [t, t + 1],
          d = this.panes[f[0]] || null,
          h = this.panes[f[1]] || null;
        const p = d.max < 100 && c >= d.max + r.prevPanesSize,
          v = h.max < 100 && c <= 100 - (h.max + this.sumNextPanesSize(t + 1));
        if (p || v) {
          p
            ? ((d.size = d.max),
              (h.size = Math.max(100 - d.max - r.prevPanesSize - r.nextPanesSize, 0)))
            : ((d.size = Math.max(100 - h.max - r.prevPanesSize - this.sumNextPanesSize(t + 1), 0)),
              (h.size = h.max));
          return;
        }
        if (this.pushOtherPanes) {
          const y = this.doPushOtherPanes(r, c);
          if (!y) return;
          ({ sums: r, panesToResize: f } = y),
            (d = this.panes[f[0]] || null),
            (h = this.panes[f[1]] || null);
        }
        d !== null &&
          (d.size = Math.min(Math.max(c - r.prevPanesSize - r.prevReachedMinPanes, d.min), d.max)),
          h !== null &&
            (h.size = Math.min(
              Math.max(100 - c - r.nextPanesSize - r.nextReachedMinPanes, h.min),
              h.max,
            ));
      },
      doPushOtherPanes(e, t) {
        const r = this.touch.activeSplitter,
          o = [r, r + 1];
        return t < e.prevPanesSize + this.panes[o[0]].min &&
          ((o[0] = this.findPrevExpandedPane(r).index),
          (e.prevReachedMinPanes = 0),
          o[0] < r &&
            this.panes.forEach((s, c) => {
              c > o[0] && c <= r && ((s.size = s.min), (e.prevReachedMinPanes += s.min));
            }),
          (e.prevPanesSize = this.sumPrevPanesSize(o[0])),
          o[0] === void 0)
          ? ((e.prevReachedMinPanes = 0),
            (this.panes[0].size = this.panes[0].min),
            this.panes.forEach((s, c) => {
              c > 0 && c <= r && ((s.size = s.min), (e.prevReachedMinPanes += s.min));
            }),
            (this.panes[o[1]].size =
              100 - e.prevReachedMinPanes - this.panes[0].min - e.prevPanesSize - e.nextPanesSize),
            null)
          : t > 100 - e.nextPanesSize - this.panes[o[1]].min &&
              ((o[1] = this.findNextExpandedPane(r).index),
              (e.nextReachedMinPanes = 0),
              o[1] > r + 1 &&
                this.panes.forEach((s, c) => {
                  c > r && c < o[1] && ((s.size = s.min), (e.nextReachedMinPanes += s.min));
                }),
              (e.nextPanesSize = this.sumNextPanesSize(o[1] - 1)),
              o[1] === void 0)
            ? ((e.nextReachedMinPanes = 0),
              (this.panes[this.panesCount - 1].size = this.panes[this.panesCount - 1].min),
              this.panes.forEach((s, c) => {
                c < this.panesCount - 1 &&
                  c >= r + 1 &&
                  ((s.size = s.min), (e.nextReachedMinPanes += s.min));
              }),
              (this.panes[o[0]].size =
                100 -
                e.prevPanesSize -
                e.nextReachedMinPanes -
                this.panes[this.panesCount - 1].min -
                e.nextPanesSize),
              null)
            : { sums: e, panesToResize: o };
      },
      sumPrevPanesSize(e) {
        return this.panes.reduce((t, r, o) => t + (o < e ? r.size : 0), 0);
      },
      sumNextPanesSize(e) {
        return this.panes.reduce((t, r, o) => t + (o > e + 1 ? r.size : 0), 0);
      },
      findPrevExpandedPane(e) {
        return [...this.panes].reverse().find((t) => t.index < e && t.size > t.min) || {};
      },
      findNextExpandedPane(e) {
        return this.panes.find((t) => t.index > e + 1 && t.size > t.min) || {};
      },
      checkSplitpanesNodes() {
        Array.from(this.container.children).forEach((e) => {
          const t = e.classList.contains("splitpanes__pane"),
            r = e.classList.contains("splitpanes__splitter");
          !t &&
            !r &&
            (e.parentNode.removeChild(e),
            console.warn(
              "Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.",
            ));
        });
      },
      addSplitter(e, t, r = !1) {
        const o = e - 1,
          s = document.createElement("div");
        s.classList.add("splitpanes__splitter"),
          r ||
            ((s.onmousedown = (c) => this.onMouseDown(c, o)),
            typeof window < "u" &&
              "ontouchstart" in window &&
              (s.ontouchstart = (c) => this.onMouseDown(c, o)),
            (s.onclick = (c) => this.onSplitterClick(c, o + 1))),
          this.dblClickSplitter && (s.ondblclick = (c) => this.onSplitterDblClick(c, o + 1)),
          t.parentNode.insertBefore(s, t);
      },
      removeSplitter(e) {
        (e.onmousedown = void 0),
          (e.onclick = void 0),
          (e.ondblclick = void 0),
          e.parentNode.removeChild(e);
      },
      redoSplitters() {
        const e = Array.from(this.container.children);
        e.forEach((r) => {
          r.className.includes("splitpanes__splitter") && this.removeSplitter(r);
        });
        let t = 0;
        e.forEach((r) => {
          r.className.includes("splitpanes__pane") &&
            (!t && this.firstSplitter ? this.addSplitter(t, r, !0) : t && this.addSplitter(t, r),
            t++);
        });
      },
      requestUpdate({ target: e, ...t }) {
        const r = this.indexedPanes[e._.uid];
        Object.entries(t).forEach(([o, s]) => (r[o] = s));
      },
      onPaneAdd(e) {
        let t = -1;
        Array.from(e.$el.parentNode.children).some(
          (s) => (s.className.includes("splitpanes__pane") && t++, s === e.$el),
        );
        const r = parseFloat(e.minSize),
          o = parseFloat(e.maxSize);
        this.panes.splice(t, 0, {
          id: e._.uid,
          index: t,
          min: isNaN(r) ? 0 : r,
          max: isNaN(o) ? 100 : o,
          size: e.size === null ? null : parseFloat(e.size),
          givenSize: e.size,
          update: e.update,
        }),
          this.panes.forEach((s, c) => (s.index = c)),
          this.ready &&
            this.$nextTick(() => {
              this.redoSplitters(),
                this.resetPaneSizes({ addedPane: this.panes[t] }),
                this.$emit("pane-add", {
                  index: t,
                  panes: this.panes.map((s) => ({ min: s.min, max: s.max, size: s.size })),
                });
            });
      },
      onPaneRemove(e) {
        const t = this.panes.findIndex((o) => o.id === e._.uid),
          r = this.panes.splice(t, 1)[0];
        this.panes.forEach((o, s) => (o.index = s)),
          this.$nextTick(() => {
            this.redoSplitters(),
              this.resetPaneSizes({ removedPane: { ...r, index: t } }),
              this.$emit("pane-remove", {
                removed: r,
                panes: this.panes.map((o) => ({ min: o.min, max: o.max, size: o.size })),
              });
          });
      },
      resetPaneSizes(e = {}) {
        !e.addedPane && !e.removedPane
          ? this.initialPanesSizing()
          : this.panes.some((t) => t.givenSize !== null || t.min || t.max < 100)
            ? this.equalizeAfterAddOrRemove(e)
            : this.equalize(),
          this.ready &&
            this.$emit(
              "resized",
              this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })),
            );
      },
      equalize() {
        const e = 100 / this.panesCount;
        let t = 0;
        const r = [],
          o = [];
        this.panes.forEach((s) => {
          (s.size = Math.max(Math.min(e, s.max), s.min)),
            (t -= s.size),
            s.size >= s.max && r.push(s.id),
            s.size <= s.min && o.push(s.id);
        }),
          t > 0.1 && this.readjustSizes(t, r, o);
      },
      initialPanesSizing() {
        let e = 100;
        const t = [],
          r = [];
        let o = 0;
        this.panes.forEach((c) => {
          (e -= c.size),
            c.size !== null && o++,
            c.size >= c.max && t.push(c.id),
            c.size <= c.min && r.push(c.id);
        });
        let s = 100;
        e > 0.1 &&
          (this.panes.forEach((c) => {
            c.size === null &&
              (c.size = Math.max(Math.min(e / (this.panesCount - o), c.max), c.min)),
              (s -= c.size);
          }),
          s > 0.1 && this.readjustSizes(e, t, r));
      },
      equalizeAfterAddOrRemove({ addedPane: e, removedPane: t } = {}) {
        let r = 100 / this.panesCount,
          o = 0;
        const s = [],
          c = [];
        e && e.givenSize !== null && (r = (100 - e.givenSize) / (this.panesCount - 1)),
          this.panes.forEach((f) => {
            (o -= f.size), f.size >= f.max && s.push(f.id), f.size <= f.min && c.push(f.id);
          }),
          !(Math.abs(o) < 0.1) &&
            (this.panes.forEach((f) => {
              (e && e.givenSize !== null && e.id === f.id) ||
                (f.size = Math.max(Math.min(r, f.max), f.min)),
                (o -= f.size),
                f.size >= f.max && s.push(f.id),
                f.size <= f.min && c.push(f.id);
            }),
            o > 0.1 && this.readjustSizes(o, s, c));
      },
      readjustSizes(e, t, r) {
        let o;
        e > 0 ? (o = e / (this.panesCount - t.length)) : (o = e / (this.panesCount - r.length)),
          this.panes.forEach((s, c) => {
            if (e > 0 && !t.includes(s.id)) {
              const f = Math.max(Math.min(s.size + o, s.max), s.min),
                d = f - s.size;
              (e -= d), (s.size = f);
            } else if (!r.includes(s.id)) {
              const f = Math.max(Math.min(s.size + o, s.max), s.min),
                d = f - s.size;
              (e -= d), (s.size = f);
            }
            s.update({
              [this.horizontal ? "height" : "width"]: `${this.indexedPanes[s.id].size}%`,
            });
          }),
          Math.abs(e) > 0.1 &&
            this.$nextTick(() => {
              this.ready &&
                console.warn(
                  "Splitpanes: Could not resize panes correctly due to their constraints.",
                );
            });
      },
    },
    watch: {
      panes: {
        deep: !0,
        immediate: !1,
        handler() {
          this.updatePaneComponents();
        },
      },
      horizontal() {
        this.updatePaneComponents();
      },
      firstSplitter() {
        this.redoSplitters();
      },
      dblClickSplitter(e) {
        [...this.container.querySelectorAll(".splitpanes__splitter")].forEach((t, r) => {
          t.ondblclick = e ? (o) => this.onSplitterDblClick(o, r) : void 0;
        });
      },
    },
    beforeUnmount() {
      this.ready = !1;
    },
    mounted() {
      (this.container = this.$refs.container),
        this.checkSplitpanesNodes(),
        this.redoSplitters(),
        this.resetPaneSizes(),
        this.$emit("ready"),
        (this.ready = !0);
    },
    render() {
      return la(
        "div",
        {
          ref: "container",
          class: [
            "splitpanes",
            `splitpanes--${this.horizontal ? "horizontal" : "vertical"}`,
            { "splitpanes--dragging": this.touch.dragging },
          ],
        },
        this.$slots.default(),
      );
    },
  },
  Aye = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [o, s] of t) r[o] = s;
    return r;
  },
  Mye = {
    name: "pane",
    inject: ["requestUpdate", "onPaneAdd", "onPaneRemove", "onPaneClick"],
    props: {
      size: { type: [Number, String], default: null },
      minSize: { type: [Number, String], default: 0 },
      maxSize: { type: [Number, String], default: 100 },
    },
    data: () => ({ style: {} }),
    mounted() {
      this.onPaneAdd(this);
    },
    beforeUnmount() {
      this.onPaneRemove(this);
    },
    methods: {
      update(e) {
        this.style = e;
      },
    },
    computed: {
      sizeNumber() {
        return this.size || this.size === 0 ? parseFloat(this.size) : null;
      },
      minSizeNumber() {
        return parseFloat(this.minSize);
      },
      maxSizeNumber() {
        return parseFloat(this.maxSize);
      },
    },
    watch: {
      sizeNumber(e) {
        this.requestUpdate({ target: this, size: e });
      },
      minSizeNumber(e) {
        this.requestUpdate({ target: this, min: e });
      },
      maxSizeNumber(e) {
        this.requestUpdate({ target: this, max: e });
      },
    },
  };
function Nye(e, t, r, o, s, c) {
  return (
    le(),
    be(
      "div",
      {
        class: "splitpanes__pane",
        onClick: t[0] || (t[0] = (f) => c.onPaneClick(f, e._.uid)),
        style: Zt(e.style),
      },
      [hn(e.$slots, "default")],
      4,
    )
  );
}
const dc = Aye(Mye, [["render", Nye]]),
  $ye = { "h-screen": "", "w-screen": "", overflow: "hidden" },
  Oye = gt({
    __name: "index",
    setup(e) {
      const t = yue(),
        r = Nu("vitest-ui_splitpanes-mainSizes", [33, 67], { initOnMounted: !0 }),
        o = zm((f) => {
          f.forEach((d, h) => {
            r.value[h] = d.size;
          });
        }, 0),
        s = zm((f) => {
          f.forEach((d, h) => {
            Sc.value[h] = d.size;
          }),
            nd(!1);
        }, 0);
      function c() {
        const f = window.innerWidth,
          d = Math.min(f / 3, 300);
        (r.value[0] = (100 * d) / f), (r.value[1] = 100 - r.value[0]);
      }
      return (f, d) => {
        const h = Lye,
          p = Tye,
          v = Qme,
          y = Gve,
          b = Bve,
          x = Cue,
          C = vue;
        return (
          le(),
          be(
            ht,
            null,
            [
              Pe(h),
              Y("div", $ye, [
                Pe(
                  B(N0),
                  {
                    class: "pt-4px",
                    onResized: B(o),
                    onResize: d[2] || (d[2] = (E) => B(nd)(!0)),
                    onReady: c,
                  },
                  {
                    default: lt(() => [
                      Pe(B(dc), { size: B(r)[0] }, { default: lt(() => [Pe(p)]), _: 1 }, 8, [
                        "size",
                      ]),
                      Pe(
                        B(dc),
                        { size: B(r)[1] },
                        {
                          default: lt(() => [
                            B(Yl)
                              ? (le(),
                                ot(
                                  B(N0),
                                  {
                                    id: "details-splitpanes",
                                    key: "browser-detail",
                                    onResize: d[1] || (d[1] = (E) => B(nd)(!0)),
                                    onResized: B(s),
                                  },
                                  {
                                    default: lt(() => [
                                      Pe(
                                        B(dc),
                                        { size: B(Sc)[0], "min-size": "10" },
                                        {
                                          default: lt(() => [
                                            d[0] || (zc(-1), (d[0] = Pe(x)), zc(1), d[0]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["size"],
                                      ),
                                      Pe(
                                        B(dc),
                                        { size: B(Sc)[1], "min-size": "5" },
                                        {
                                          default: lt(() => [
                                            B(t)
                                              ? (le(), ot(v, { key: "summary" }))
                                              : B(Xi)
                                                ? (le(),
                                                  ot(y, { key: "coverage", src: B(i0) }, null, 8, [
                                                    "src",
                                                  ]))
                                                : (le(), ot(b, { key: "details" })),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["size"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["onResized"],
                                ))
                              : (le(),
                                ot(
                                  Eh,
                                  { key: "ui-detail" },
                                  {
                                    default: lt(() => [
                                      B(t)
                                        ? (le(), ot(v, { key: "summary" }))
                                        : B(Xi)
                                          ? (le(),
                                            ot(y, { key: "coverage", src: B(i0) }, null, 8, [
                                              "src",
                                            ]))
                                          : (le(), ot(b, { key: "details" })),
                                    ]),
                                    _: 1,
                                  },
                                )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["size"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onResized"],
                ),
              ]),
              Pe(C),
            ],
            64,
          )
        );
      };
    },
  }),
  Pye = [{ name: "index", path: "/", component: Oye, props: !0 }],
  Rye = { tooltip: _E };
Nb.options.instantMove = !0;
Nb.options.distance = 10;
function Dye() {
  return kC({ history: JT(), routes: Pye });
}
const zye = [Dye],
  ap = Uy(wT);
zye.forEach((e) => {
  ap.use(e());
});
Object.entries(Rye).forEach(([e, t]) => {
  ap.directive(e, t);
});
ap.mount("#app");
