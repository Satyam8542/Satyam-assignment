"use strict";
exports.__esModule = true;
exports.metadata = void 0;
// app/layout.tsx (Refactored layout with separate client Dropdown component)
require("./globals.css");
var google_1 = require("next/font/google");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Practo Clone',
    description: 'Search doctors, clinics, hospitals'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement("header", { className: "w-full bg-white text-black shadow-sm sticky top-0 z-50" },
                React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" },
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement("img", { src: "/Practologo.png", alt: "Logo", className: "h-6 w-auto" })),
                    React.createElement("nav", { className: "hidden md:flex gap-6 text-sm font-medium items-left justify-left" },
                        React.createElement("a", { href: "/", className: "hover:text-blue-600" }, "Find Doctors"),
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "Video Consult"),
                        React.createElement("a", { href: "#", className: "hover:text-blue-600" }, "Surgeries")),
                    React.createElement("div", { className: "dropdown" },
                        React.createElement("button", { className: "dropbtn" },
                            "Menu",
                            React.createElement("i", { className: "arrow down" })),
                        React.createElement("div", { className: "dropdown-content" },
                            React.createElement("a", { href: "#" }, "Home"),
                            React.createElement("a", { href: "#" }, "About"),
                            React.createElement("a", { href: "#" }, "Contact")),
                        React.createElement("button", { className: "dropbtn" },
                            "Menu",
                            React.createElement("i", { className: "arrow down" })),
                        React.createElement("div", { className: "dropdown-content" },
                            React.createElement("a", { href: "#" }, "Home"),
                            React.createElement("a", { href: "#" }, "About"),
                            React.createElement("a", { href: "#" }, "Contact")),
                        React.createElement("button", { className: "dropbtn" },
                            "Menu ",
                            React.createElement("i", { className: "arrow down" })),
                        React.createElement("div", { className: "dropdown-content" },
                            React.createElement("a", { href: "#" }, "Home"),
                            React.createElement("a", { href: "#" }, "About"),
                            React.createElement("a", { href: "#" }, "Contact"))),
                    React.createElement("div", null,
                        React.createElement("button", { className: "text-sm hover:text-blue-600" }, "Login"),
                        React.createElement("button", { className: "text-sm hover:bg-blue-700" }, "Sign up")))),
            React.createElement("main", null, children))));
}
exports["default"] = RootLayout;
