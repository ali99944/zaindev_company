"use client";
"use strict";
exports.__esModule = true;
exports.ServicesGrid = void 0;
var grid_loader_1 = require("@/src/components/loaders/grid-loader");
var queries_actions_1 = require("@/src/hooks/queries-actions");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var link_1 = require("next/link");
function ServicesGrid() {
    var _a = queries_actions_1.useGetQuery({
        url: 'services-categories',
        key: ['services-categories']
    }), services = _a.data, is_services_loading = _a.isLoading;
    if (is_services_loading) {
        return React.createElement(grid_loader_1["default"], null);
    }
    return (React.createElement("section", { className: "py-16" },
        React.createElement("div", { className: "container mx-auto px-4" },
            React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "text-center mb-12" },
                React.createElement("h2", { className: "text-3xl font-bold mb-4" }, "\u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u0627\u0644\u0645\u062A\u0645\u064A\u0632\u0629"),
                React.createElement("p", { className: "text-gray-600 max-w-3xl mx-auto" }, "\u0646\u0642\u062F\u0645 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u0629 \u0644\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643\u0645 \u0628\u0623\u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629")),
            (services === null || services === void 0 ? void 0 : services.data.length) === 0 ? (React.createElement("div", { className: "text-center py-12" },
                React.createElement("p", { className: "text-gray-500 text-lg" }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u062F\u0645\u0627\u062A \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629 \u062D\u0627\u0644\u064A\u0627\u064B"))) : (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" }, services === null || services === void 0 ? void 0 : services.data.map(function (service, index) { return (React.createElement(framer_motion_1.motion.div, { key: service.id, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "bg-white rounded overflow-hidden transition-all duration-300 group border border-gray-100" },
                React.createElement("div", { className: "relative h-60 overflow-hidden" },
                    React.createElement(image_1["default"], { src: service.image ||
                            "https://img.freepik.com/premium-photo/high-angle-view-paintbrushes-table_1048944-19944480.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid", alt: service.name, fill: true, className: "object-cover" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                    React.createElement("div", { className: "absolute bottom-4 right-4" },
                        React.createElement("div", { className: "bg-white/90 backdrop-blur-sm p-2 rounded-lg" },
                            React.createElement("div", { className: "w-10 h-10 flex items-center justify-center" },
                                React.createElement(image_1["default"], { src: service.logo || "/logo.svg", alt: service.name, width: 40, height: 40, className: "object-contain" }))))),
                React.createElement("div", { className: "p-4" },
                    React.createElement("div", { className: "flex justify-between items-start mb-4" },
                        React.createElement("div", { className: "bg-amber-100 text-black text-xs font-medium px-2 py-1 rounded-full" },
                            service.services.length,
                            " \u062E\u062F\u0645\u0627\u062A \u0641\u0631\u0639\u064A\u0629"),
                        React.createElement(link_1["default"], { href: "/services/" + service.id },
                            React.createElement("h3", { className: "text-md font-bold transition-colors text-right" }, service.name))),
                    React.createElement("p", { className: "text-gray-600  line-clamp-2 text-right" }, service.short)))); }))))));
}
exports.ServicesGrid = ServicesGrid;
