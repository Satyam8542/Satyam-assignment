'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var axios_1 = require("axios");
function DoctorsList() {
    var searchParams = navigation_1.useSearchParams();
    var location = searchParams.get('location') || '';
    var specialty = searchParams.get('specialty') || '';
    var _a = react_1.useState([]), doctors = _a[0], setDoctors = _a[1];
    react_1.useEffect(function () {
        if (location && specialty) {
            axios_1["default"]
                .get("/api/doctors?location=" + location + "&specialty=" + specialty)
                .then(function (res) { return setDoctors(res.data); });
        }
    }, [location, specialty]);
    return (React.createElement("div", { className: "p-6 max-w-5xl mx-auto" },
        React.createElement("h2", { className: "text-2xl font-semibold mb-4" },
            doctors.length,
            " Dermatologists available in ",
            location),
        React.createElement("div", { className: "grid gap-6" }, doctors.map(function (doc) { return (React.createElement("div", { key: doc._id, className: "border p-4 rounded shadow-md flex flex-col md:flex-row justify-between" },
            React.createElement("div", null,
                React.createElement("h3", { className: "text-xl font-bold" }, doc.name),
                React.createElement("p", null, doc.specialty),
                React.createElement("p", null,
                    doc.experience,
                    " years experience"),
                React.createElement("p", null, doc.area),
                React.createElement("p", null,
                    "\u20B9",
                    doc.fee,
                    " Consultation Fee"),
                React.createElement("p", { className: "text-green-600 font-medium" }, doc.availability)),
            React.createElement("div", { className: "flex flex-col gap-2 mt-4 md:mt-0" },
                React.createElement("button", { className: "bg-blue-500 text-white px-4 py-2 rounded" }, "Book Clinic Visit"),
                React.createElement("button", { className: "border border-gray-400 text-gray-700 px-4 py-2 rounded" }, "Contact Clinic")))); }))));
}
exports["default"] = DoctorsList;
