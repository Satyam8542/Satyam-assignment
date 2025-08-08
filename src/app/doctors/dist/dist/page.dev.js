"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _navigation = require("next/navigation");

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

'use client';
"use strict";

exports.__esModule = true;

function DoctorsList() {
  var searchParams = navigation_1.useSearchParams();
  var location = searchParams.get('location') || '';
  var specialty = searchParams.get('specialty') || '';

  var _a = react_1.useState([]),
      doctors = _a[0],
      setDoctors = _a[1];

  react_1.useEffect(function () {
    if (location && specialty) {
      axios_1["default"].get("/api/doctors?location=" + location + "&specialty=" + specialty).then(function (res) {
        return setDoctors(res.data);
      });
    }
  }, [location, specialty]);
  return _react["default"].createElement("div", {
    className: "p-6 max-w-5xl mx-auto"
  }, _react["default"].createElement("h2", {
    className: "text-2xl font-semibold mb-4"
  }, doctors.length, " Dermatologists available in ", location), _react["default"].createElement("div", {
    className: "grid gap-6"
  }, doctors.map(function (doc) {
    return _react["default"].createElement("div", {
      key: doc._id,
      className: "border p-4 rounded shadow-md flex flex-col md:flex-row justify-between"
    }, _react["default"].createElement("div", null, _react["default"].createElement("h3", {
      className: "text-xl font-bold"
    }, doc.name), _react["default"].createElement("p", null, doc.specialty), _react["default"].createElement("p", null, doc.experience, " years experience"), _react["default"].createElement("p", null, doc.area), _react["default"].createElement("p", null, "\u20B9", doc.fee, " Consultation Fee"), _react["default"].createElement("p", {
      className: "text-green-600 font-medium"
    }, doc.availability)), _react["default"].createElement("div", {
      className: "flex flex-col gap-2 mt-4 md:mt-0"
    }, _react["default"].createElement("button", {
      className: "bg-blue-500 text-white px-4 py-2 rounded"
    }, "Book Clinic Visit"), _react["default"].createElement("button", {
      className: "border border-gray-400 text-gray-700 px-4 py-2 rounded"
    }, "Contact Clinic")));
  })));
}

exports["default"] = DoctorsList;
//# sourceMappingURL=page.dev.js.map
