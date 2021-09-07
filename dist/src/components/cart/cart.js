"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cart;

var _react = _interopRequireDefault(require("react"));

require("./cart.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cart(_ref) {
  var title = _ref.title,
      text = _ref.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "main",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: text
    })]
  });
}

//# sourceMappingURL=cart.js.map