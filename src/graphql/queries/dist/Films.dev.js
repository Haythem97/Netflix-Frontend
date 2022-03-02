"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilm = exports.getFilms = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query getFilm($id:ID){\n        getFilm (id:$id){\n        id,\n        title,\n        description,\n        src,\n        categorie\n        date}\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query {\n        getFilms{\n            id,\n            title,\n            description,\n            src,\n            categorie\n            date}\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getFilms = (0, _graphqlTag["default"])(_templateObject());
exports.getFilms = getFilms;
var getFilm = (0, _graphqlTag["default"])(_templateObject2());
exports.getFilm = getFilm;