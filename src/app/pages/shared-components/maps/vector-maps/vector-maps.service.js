"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_config_1 = require("../../../../app.config");
var VectorMapsService = (function () {
    function VectorMapsService(_appConfig) {
        this._appConfig = _appConfig;
        this.bubbles = [
            { city: 'Tokyo', country: 'Japan', population: '37.2 million', rate: '0.6%', link: 'https://en.wikipedia.org/wiki/Tokyo', latitude: 35.69, longitude: 139.69, radius: 7, fillKey: 'danger' },
            { city: 'Delhi', country: 'India', population: '25 million', rate: '2.5%', link: 'https://en.wikipedia.org/wiki/Delhi', latitude: 28.70, longitude: 77.10, radius: 7, fillKey: 'danger' },
            { city: 'Shanghai', country: 'China', population: '23 million', rate: '2.9%', link: 'https://en.wikipedia.org/wiki/Shanghai', latitude: 31.23, longitude: 121.47, radius: 7, fillKey: 'danger' },
            { city: 'Mexico City', country: 'Mexico', population: 'Approx 21 million', rate: '1.5%', link: 'https://en.wikipedia.org/wiki/Mexico_City', latitude: 19.43, longitude: -99.13, radius: 7, fillKey: 'danger' },
            { city: 'Mumbai', country: 'India', population: 'Approx 21 million', rate: '2.5%', link: 'https://en.wikipedia.org/wiki/Mumbai', latitude: 19.07, longitude: 72.88, radius: 7, fillKey: 'danger' },
            { city: 'Sao Paulo', country: 'Brazil', population: 'Approx 21 million', rate: '1.2%', link: 'https://en.wikipedia.org/wiki/S%C3%A3o_Paulo', latitude: -23.55, longitude: -46.63, radius: 7, fillKey: 'danger' },
            { city: 'Osaka', country: 'Japan', population: 'Approx 20 million', rate: '0.6%', link: 'https://en.wikipedia.org/wiki/Osaka', latitude: 34.69, longitude: 135.50, radius: 7, fillKey: 'danger' },
            { city: 'Beijing', country: 'China', population: 'Approx 20 million', rate: '2.9%', link: 'https://en.wikipedia.org/wiki/Beijing', latitude: 39.90, longitude: 116.41, radius: 7, fillKey: 'danger' },
            { city: 'New York', country: 'United States of America', population: 'Approx 18.5 million', rate: '1.1%', link: 'https://en.wikipedia.org/wiki/New_York', latitude: 40.71, longitude: -74.01, radius: 7, fillKey: 'danger' },
            { city: 'Cairo', country: 'Egypt', population: 'Approx 18.5 million', rate: '2%', link: 'https://en.wikipedia.org/wiki/Cairo', latitude: 30.04, longitude: 31.24, radius: 7, fillKey: 'danger' }
        ];
        this.arcs = [
            { origin: 'CA', destination: 'TX' },
            { origin: 'OR', destination: 'TX' },
            { origin: 'NY', destination: 'TX' },
            { origin: { latitude: 40.639722, longitude: -73.778889 },
                destination: { latitude: 37.618889, longitude: -122.375 }
            },
            { origin: { latitude: 30.194444, longitude: -97.67 },
                destination: { latitude: 25.793333, longitude: -80.290556 },
                options: { strokeWidth: 2, strokeColor: this._appConfig.config.colors.danger, greatArc: true }
            },
            { origin: { latitude: 39.861667, longitude: -104.673056 },
                destination: { latitude: 35.877778, longitude: -78.7875 }
            }
        ];
        this._appConfig = _appConfig;
    }
    VectorMapsService.prototype.getBubbles = function () {
        return this.bubbles;
    };
    VectorMapsService.prototype.getArcs = function () {
        return this.arcs;
    };
    return VectorMapsService;
}());
VectorMapsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], VectorMapsService);
exports.VectorMapsService = VectorMapsService;
//# sourceMappingURL=vector-maps.service.js.map