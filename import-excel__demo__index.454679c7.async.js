(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    gypW: function (e, a, n) {
      'use strict';
      n.r(a);
      n('g9YV');
      var t = n('wCAj'),
        r = (n('14J3'), n('BMrR')),
        d = (n('+L6B'), n('2/Rp')),
        s = n('q1tI'),
        l = n.n(s),
        i = n('/7QA'),
        m = [
          { title: '\u59d3\u540d', dataIndex: 'name', key: 'name' },
          { title: '\u5e74\u9f84', dataIndex: 'age', key: 'age' },
          { title: '\u4f4f\u5740', dataIndex: 'address', key: 'address' },
        ],
        o = [
          {
            name: '\u80e1\u5f66\u658c',
            age: 32,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
          {
            name: '\u80e1\u5f66\u7956',
            age: 42,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
        ],
        c = { name: '\u540d\u5b57', age: '\u5e74\u9f84', address: '\u5730\u5740' },
        g = () => {
          var e = () => {
              i['b'].open({
                filename: '\u6d4b\u8bd5\u4e0b\u8f7ddemo',
                rules: c,
                data: o,
                screening: !1,
              });
            },
            a = (e) => {
              console.log(e);
            };
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              r['a'],
              { justify: 'end', style: { marginBottom: 8 } },
              l.a.createElement(i['e'], { rules: c, onFinish: a }),
              l.a.createElement(
                d['a'],
                { type: 'primary', onClick: e, style: { marginLeft: 12 } },
                '\u70b9\u51fb\u4e0b\u8f7d',
              ),
            ),
            l.a.createElement(t['a'], { dataSource: o, columns: m }),
          );
        };
      a['default'] = g;
    },
  },
]);