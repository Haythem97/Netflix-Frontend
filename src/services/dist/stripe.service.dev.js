"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  createSession: function createSession(body) {
    console.log("test");
    return fetch("http://localhost:3333/api/v1/checkout/", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(function (res) {
      return res.json();
    });
  }
};
exports["default"] = _default;