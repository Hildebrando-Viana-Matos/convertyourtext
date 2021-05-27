eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '7 0=2.5("8");1 9(){0.3.4="a"}1 b(){0.3.4="c"}1 d(){0.3.4="f"}g 6=2.5("h");6.i("j",1(e){0.k();2.l("m")});',
    23,
    23,
    "textarea|function|document|style|textTransform|getElementById|btn|var|textForConvert|lowerCase|lowercase|upperCase|uppercase|capitalizedCase||capitalize|const|copyBox|addEventListener|click|select|execCommand|copy".split(
      "|"
    ),
    0,
    {}
  )
);
