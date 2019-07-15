(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-principal>\r\n  <div class=\"container mt-5 mb-5\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</app-menu-principal>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TP-Sala-de-Juegos-Mia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-principal/menu-principal.component */ "./src/app/components/menu-principal/menu-principal.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/carrusel/carrusel.component */ "./src/app/components/carrusel/carrusel.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_boton_boton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/boton/boton.component */ "./src/app/components/boton/boton.component.ts");
/* harmony import */ var _components_boton_login_boton_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/boton-login/boton-login.component */ "./src/app/components/boton-login/boton-login.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_aguilidad_aritmetica_aguilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/aguilidad-aritmetica/aguilidad-aritmetica.component */ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.ts");
/* harmony import */ var _components_cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cronometro/cronometro.component */ "./src/app/components/cronometro/cronometro.component.ts");
/* harmony import */ var _components_boton2_boton2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/boton2/boton2.component */ "./src/app/components/boton2/boton2.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_modal_game_over1_modal_game_over1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modal-game-over1/modal-game-over1.component */ "./src/app/components/modal-game-over1/modal-game-over1.component.ts");
/* harmony import */ var _components_modal_game_over2_modal_game_over2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/modal-game-over2/modal-game-over2.component */ "./src/app/components/modal-game-over2/modal-game-over2.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _components_boton_arcade_boton_arcade_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/boton-arcade/boton-arcade.component */ "./src/app/components/boton-arcade/boton-arcade.component.ts");
/* harmony import */ var _components_boton_arcade_piedra_boton_arcade_piedra_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/boton-arcade-piedra/boton-arcade-piedra.component */ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.ts");
/* harmony import */ var _components_boton_arcade_papel_boton_arcade_papel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/boton-arcade-papel/boton-arcade-papel.component */ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.ts");
/* harmony import */ var _components_boton_arcade_tijera_boton_arcade_tijera_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/boton-arcade-tijera/boton-arcade-tijera.component */ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.ts");
/* harmony import */ var _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/adivina-el-numero/adivina-el-numero.component */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _components_burbuja_mensaje_burbuja_mensaje_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/burbuja-mensaje/burbuja-mensaje.component */ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.ts");
/* harmony import */ var _components_genio_genio_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/genio/genio.component */ "./src/app/components/genio/genio.component.ts");
/* harmony import */ var _components_burbuja_mensaje2_burbuja_mensaje2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/burbuja-mensaje2/burbuja-mensaje2.component */ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.ts");
/* harmony import */ var _components_you_win_you_win_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/you-win/you-win.component */ "./src/app/components/you-win/you-win.component.ts");
/* harmony import */ var _app_routes_routes_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../app/routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _components_boton_retro_boton_retro_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/boton-retro/boton-retro.component */ "./src/app/components/boton-retro/boton-retro.component.ts");
/* harmony import */ var _directives_solo_numeros_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/solo-numeros.directive */ "./src/app/directives/solo-numeros.directive.ts");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_menu_principal_menu_principal_component__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalComponent"],
                _components_carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_7__["CarruselComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__["LogoComponent"],
                _components_boton_boton_component__WEBPACK_IMPORTED_MODULE_11__["BotonComponent"],
                _components_boton_login_boton_login_component__WEBPACK_IMPORTED_MODULE_12__["BotonLoginComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                _components_aguilidad_aritmetica_aguilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AguilidadAritmeticaComponent"],
                _components_cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_15__["CronometroComponent"],
                _components_boton2_boton2_component__WEBPACK_IMPORTED_MODULE_16__["Boton2Component"],
                _components_modal_game_over1_modal_game_over1_component__WEBPACK_IMPORTED_MODULE_18__["ModalGameOver1Component"],
                _components_modal_game_over2_modal_game_over2_component__WEBPACK_IMPORTED_MODULE_19__["ModalGameOver2Component"],
                _components_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_21__["PiedraPapelTijeraComponent"],
                _components_boton_arcade_boton_arcade_component__WEBPACK_IMPORTED_MODULE_22__["BotonArcadeComponent"],
                _components_boton_arcade_piedra_boton_arcade_piedra_component__WEBPACK_IMPORTED_MODULE_23__["BotonArcadePiedraComponent"],
                _components_boton_arcade_papel_boton_arcade_papel_component__WEBPACK_IMPORTED_MODULE_24__["BotonArcadePapelComponent"],
                _components_boton_arcade_tijera_boton_arcade_tijera_component__WEBPACK_IMPORTED_MODULE_25__["BotonArcadeTijeraComponent"],
                _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_26__["AdivinaElNumeroComponent"],
                _components_burbuja_mensaje_burbuja_mensaje_component__WEBPACK_IMPORTED_MODULE_27__["BurbujaMensajeComponent"],
                _components_genio_genio_component__WEBPACK_IMPORTED_MODULE_28__["GenioComponent"],
                _components_burbuja_mensaje2_burbuja_mensaje2_component__WEBPACK_IMPORTED_MODULE_29__["BurbujaMensaje2Component"],
                _components_you_win_you_win_component__WEBPACK_IMPORTED_MODULE_30__["YouWinComponent"],
                _components_boton_retro_boton_retro_component__WEBPACK_IMPORTED_MODULE_32__["BotonRetroComponent"],
                _directives_solo_numeros_directive__WEBPACK_IMPORTED_MODULE_33__["SoloNumerosDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes_routes_module__WEBPACK_IMPORTED_MODULE_31__["RoutesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"].forRoot(),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/juego-adivina.ts":
/*!****************************************!*\
  !*** ./src/app/class/juego-adivina.ts ***!
  \****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juego */ "./src/app/class/juego.ts");


var estados;
(function (estados) {
    estados[estados["Espera"] = 0] = "Espera";
    estados[estados["Jugando"] = 1] = "Jugando";
    estados[estados["Gano"] = 2] = "Gano";
    estados[estados["Perdio"] = 3] = "Perdio";
})(estados || (estados = {}));
;
var JuegoAdivina = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, 'Adivina el número', gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        _this.numeroIngresadoString = '';
        _this.mostrarInput = false;
        return _this;
    }
    JuegoAdivina.prototype.nuevoJuego = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.estado = 'jugando';
                        this.mensaje1 = 'Genial!';
                        this.mensaje2 = 'Preparado para perder..?';
                        return [4 /*yield*/, this.delay(2000)];
                    case 1:
                        _a.sent();
                        this.mensaje1 = 'A ver si tenes suerte y lo embocas';
                        this.mensaje2 = 'en el primer intento';
                        this.mostrarInput = true;
                        this.generarNumero();
                        return [2 /*return*/];
                }
            });
        });
    };
    JuegoAdivina.prototype.delay = function (timeInMillis) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, timeInMillis); });
    };
    JuegoAdivina.prototype.generarNumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        this.gano = false;
    };
    JuegoAdivina.prototype.verificar = function () {
        var auxReturn = false;
        if (this.numeroSecreto === this.numeroIngresado) {
            auxReturn = true;
        }
        else {
            auxReturn = false;
        }
        return auxReturn;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        var auxReturn = '';
        if (this.numeroIngresado < this.numeroSecreto) {
            auxReturn = 'Falta';
        }
        else if (this.numeroIngresado > this.numeroSecreto) {
            auxReturn = 'Te pasaste';
        }
        return auxReturn;
    };
    return JuegoAdivina;
}(_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



/***/ }),

/***/ "./src/app/class/juego-agilidad.ts":
/*!*****************************************!*\
  !*** ./src/app/class/juego-agilidad.ts ***!
  \*****************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
var estados;
(function (estados) {
    estados[estados["Jugando"] = 0] = "Jugando";
    estados[estados["Gano"] = 1] = "Gano";
    estados[estados["Perdio"] = 2] = "Perdio";
})(estados || (estados = {}));
;
var JuegoAgilidad = /** @class */ (function () {
    function JuegoAgilidad() {
        this.operaciones = ['+', '-', 'X', '/'];
        this.nivel = 1;
    }
    /* #endregion */
    JuegoAgilidad.prototype.nuevoJuego = function () {
        this.estado = estados.Jugando;
        this.operador1 = Math.floor(Math.random() * (10 * this.nivel)) + 1;
        this.operador2 = Math.floor(Math.random() * (10 * this.nivel)) + 1;
        this.operacion = this.operaciones[Math.floor(Math.random() * 3)];
    };
    JuegoAgilidad.prototype.calcular = function () {
        var auxReturn = 0;
        switch (this.operacion) {
            case '+':
                auxReturn = this.operador1 + this.operador2;
                break;
            case '-':
                auxReturn = this.operador1 - this.operador2;
                break;
            case 'X':
                auxReturn = this.operador1 * this.operador2;
                break;
            case '/':
                auxReturn = this.operador1 / this.operador2;
                break;
        }
        return auxReturn;
    };
    JuegoAgilidad.prototype.verificar = function () {
        var auxReturn = false;
        this.resultado = this.calcular();
        console.log(this.resultadoIngresado, this.resultado);
        if (this.resultado.toString() === this.resultadoIngresado.toString()) {
            this.gano();
            auxReturn = true;
        }
        else {
            auxReturn = false;
            this.perdio();
        }
        return auxReturn;
    };
    JuegoAgilidad.prototype.perdio = function () {
        this.estado = estados.Perdio;
    };
    JuegoAgilidad.prototype.gano = function () {
        this.nivel++;
        this.estado = estados.Gano;
        this.resultado = null;
        //this.resultadoIngresado = 0;
        this.nuevoJuego();
    };
    return JuegoAgilidad;
}());



/***/ }),

/***/ "./src/app/class/juego.ts":
/*!********************************!*\
  !*** ./src/app/class/juego.ts ***!
  \********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
var Juego = /** @class */ (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        this.estado = 'esperando';
        if (nombre) {
            this.nombre = nombre;
        }
        if (gano) {
            this.gano = gano;
        }
        if (jugador) {
            this.jugador = jugador;
        }
        else {
            this.jugador = 'natalia natalia';
        }
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());



/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: matematica;\r\n  src: url('Mathematical.ttf') format(\"truetype\");\r\n}\r\n\r\nh2 {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n\r\n.operador1 {\r\n  background-color:#1d1d1d;\r\n  font-family: matematica;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 4.5rem;\r\n  border-radius: 25px;\r\n  border: 2px solid aqua;\r\n}\r\n\r\n/* input {\r\n  width: 10rem;\r\n  font-size: 2rem;\r\n  margin: 3rem 0;\r\n} */\r\n\r\n.canvas {\r\n  background-image: url('pay-530338_1920-900x636.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 25px;\r\n  border: 2px solid black;\r\n  background-size: cover;\r\n  background-color: dimgray;\r\n  padding: 2px;\r\n  border: 3px solid #000;\r\n  box-shadow: 6px 6px 0 #aaa;\r\n  max-height: 480px;\r\n  min-height: 480px;\r\n\r\n}\r\n\r\n.vertical-align {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.vertical-align > [class^=\"col-\"],\r\n.vertical-align > [class*=\" col-\"] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center; /* Optional, to align inner items\r\n                              horizontally inside the column */\r\n}\r\n\r\n/**\r\n *  Do NOT include this part into your stylesheet.\r\n *  \"flex: 1\" or \"flex-grow: 1\" is added to make the inner div\r\n *  - Which is also a flex-item - take up all the horizontal space\r\n *  available space inside the flex container (.col-* elements)\r\n */\r\n\r\n.vertical-align > [class^=\"col-\"] > div,\r\n.vertical-align > [class*=\" col-\"] > div {\r\n  flex-grow: 1;\r\n}\r\n\r\nbody {\r\n  font-family: Verdana, sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: underline;\r\n  color: #404040;\r\n}\r\n\r\nh1 {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.text--left {\r\n  text-align: left;\r\n}\r\n\r\n.text--right {\r\n  text-align: right;\r\n}\r\n\r\n.credits {\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.description {\r\n  font-size: 12px;\r\n}\r\n\r\nstrong {\r\n  font-weight: 700;\r\n}\r\n\r\nhr {\r\n  margin: 10px 0;\r\n}\r\n\r\n.inner__row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.inner__title,\r\n.inner__desc {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.inner__title {\r\n  font-weight: 700;\r\n}\r\n\r\n.inner__desc {\r\n  font-size: 14px;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  border: none;\r\n  min-height: 30px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-family: Verdana, sans-serif;\r\n}\r\n\r\ninput:active,\r\nbutton:active,\r\ninput:focus,\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n}\r\n\r\n.cbbl {\r\n  font-size: 20px;\r\n  font-family: 'Iceland', cursive;\r\n  position: absolute;\r\n  max-width: 200px;\r\n  margin-left: 50px;\r\n  left: 10px;\r\n}\r\n\r\n.cbbl input {\r\n  font-family: 'Iceland', cursive;\r\n  /* max-width: 180px; */\r\n}\r\n\r\n.miInput {\r\n  font-size: 30px;\r\n  bottom: auto;\r\n  max-width: 150px;\r\n  margin-right: 2px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n}\r\n\r\n.cbbl {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 10px 9px 29px 6px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.cbbl::before,\r\n.cbbl::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n  left: 20%;\r\n}\r\n\r\n.cbbl::after {\r\n  background: #fff;\r\n  width: 9px;\r\n  height: 3px;\r\n  bottom: -14px;\r\n  margin-left: 6px;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px 3px #fff, 0px 3px #000, 6px 3px #000, 9px 3px #aaa, 3px 6px #000, 6px 6px #000, 9px 6px #aaa, 6px 9px #aaa;\r\n}\r\n\r\n.cbbl::before {\r\n  width: 15px;\r\n  height: 8px;\r\n  background: #fff;\r\n  bottom: -11px;\r\n  border-left: 3px solid #000;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.cbbl.-hover:hover {\r\n  background-color: #eee;\r\n  color: #000;\r\n  box-shadow: 0 -3px #eee, 0 -6px #7bc8a4, 3px 0 #eee, 3px -3px #7bc8a4, 6px 0 #7bc8a4, 0 3px #eee, 0 6px #7bc8a4, -3px 0 #eee, -3px 3px #7bc8a4, -6px 0 #7bc8a4, -3px -3px #7bc8a4, 3px 3px #7bc8a4, 3px 9px #cae9db, 6px 6px #cae9db, 9px 3px #cae9db;\r\n}\r\n\r\n.cbbl.-hover:hover::before {\r\n  background: #eee;\r\n  border-left-color: #7bc8a4;\r\n  border-right-color: #7bc8a4;\r\n}\r\n\r\n.cbbl.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px 3px #eee, 0px 3px #7bc8a4, 6px 3px #7bc8a4, 9px 3px #cae9db, 3px 6px #7bc8a4, 6px 6px #7bc8a4, 9px 6px #cae9db, 6px 9px #cae9db, 9px 9px #7bc8a4;\r\n}\r\n\r\n.cbbl.-hover:hover.-control input[type=submit],\r\n.cbbl.-hover:hover.-control button,\r\n.cbbl.-hover:hover.-control a {\r\n  color: #000;\r\n}\r\n\r\n.cbbl.-up {\r\n  margin: 29px 9px 10px 6px;\r\n}\r\n\r\n.cbbl.-up::before {\r\n  top: -11px;\r\n  bottom: auto;\r\n}\r\n\r\n.cbbl.-up::after {\r\n  top: -14px;\r\n  bottom: auto;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px -3px #fff, 0px -3px #000, 6px -3px #000, 3px -6px #000, 6px -6px #000;\r\n}\r\n\r\n.cbbl.-up.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px -3px #eee, 0px -3px #7bc8a4, 6px -3px #7bc8a4, 3px -6px #7bc8a4, 6px -6px #7bc8a4;\r\n}\r\n\r\n.cbbl.-up.-right::after {\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px -3px #fff, 0px -3px #000, -6px -3px #000, -3px -6px #000, -6px -6px #000;\r\n}\r\n\r\n.cbbl.-up.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px -3px #eee, 0px -3px #7bc8a4, -6px -3px #7bc8a4, -3px -6px #7bc8a4, -6px -6px #7bc8a4;\r\n}\r\n\r\n.cbbl.-right::before,\r\n.cbbl.-right::after {\r\n  left: auto;\r\n  right: 20%;\r\n}\r\n\r\n.cbbl.-right::after {\r\n  margin-left: 0;\r\n  margin-right: 6px;\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px 3px #fff, 0px 3px #000, -6px 3px #000, -3px 6px #000, -6px 6px #000, -3px 9px #aaa, 0 6px #aaa, 3px 3px #aaa, 6px 0px #aaa;\r\n}\r\n\r\n.cbbl.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px 3px #eee, 0px 3px #7bc8a4, -6px 3px #7bc8a4, -3px 6px #7bc8a4, -6px 6px #7bc8a4, -3px 9px #cae9db, 0 6px #cae9db, 3px 3px #cae9db, 6px 0px #cae9db;\r\n}\r\n\r\n.cbbl.-no-selection {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.cbbl.-control {\r\n  cursor: pointer;\r\n}\r\n\r\n.cbbl.-control input[type=submit],\r\n.cbbl.-control button,\r\n.cbbl.-control a {\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.cbbl.-control:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\r\n}\r\n\r\n.fade-in {\r\n  animation: fadeIn ease 5s;\r\n  -webkit-animation: fadeIn ease 5s;\r\n  -moz-animation: fadeIn ease 5s;\r\n  -o-animation: fadeIn ease 5s;\r\n  -ms-animation: fadeIn ease 5s;\r\n}\r\n\r\n@keyframes fadeIn{\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtDQUFtRjtBQUNyRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFJQTs7OztHQUlHOztBQUVIO0VBQ0Usb0RBQXdFO0VBQ3hFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFFOzhEQUNtQztBQUM5RDs7QUFFQTs7Ozs7RUFLRTs7QUFDRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBSUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvTkFBb047QUFDdE47O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9OQUFvTjtFQUNwTix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtSkFBbUo7QUFDcko7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscVBBQXFQO0FBQ3ZQOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSwrTEFBK0w7QUFDak07O0FBQ0E7OztFQUdFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDhHQUE4RztBQUNoSDs7QUFDQTtFQUNFLGdJQUFnSTtBQUNsSTs7QUFDQTtFQUNFLGtIQUFrSDtBQUNwSDs7QUFDQTtFQUNFLG9JQUFvSTtBQUN0STs7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvS0FBb0s7QUFDdEs7O0FBQ0E7RUFDRSxrTUFBa007QUFDcE07O0FBQ0E7RUFDRSx5QkFBeUI7S0FDdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBR0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkaXZpbmEtZWwtbnVtZXJvL2FkaXZpbmEtZWwtbnVtZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbWF0ZW1hdGljYTtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy8vZm9udHMvbWF0aGVtYXRpY2FsL01hdGhlbWF0aWNhbC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5vcGVyYWRvcjEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFkMWQxZDtcclxuICBmb250LWZhbWlseTogbWF0ZW1hdGljYTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYXF1YTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDNyZW0gMDtcclxufSAqL1xyXG5cclxuLmNhbnZhcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXktNTMwMzM4XzE5MjAtOTAweDYzNi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyYXk7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAwICNhYWE7XHJcbiAgbWF4LWhlaWdodDogNDgwcHg7XHJcbiAgbWluLWhlaWdodDogNDgwcHg7XHJcblxyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduID4gW2NsYXNzXj1cImNvbC1cIl0sXHJcbi52ZXJ0aWNhbC1hbGlnbiA+IFtjbGFzcyo9XCIgY29sLVwiXSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBPcHRpb25hbCwgdG8gYWxpZ24gaW5uZXIgaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbGx5IGluc2lkZSB0aGUgY29sdW1uICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgRG8gTk9UIGluY2x1ZGUgdGhpcyBwYXJ0IGludG8geW91ciBzdHlsZXNoZWV0LlxyXG4gKiAgXCJmbGV4OiAxXCIgb3IgXCJmbGV4LWdyb3c6IDFcIiBpcyBhZGRlZCB0byBtYWtlIHRoZSBpbm5lciBkaXZcclxuICogIC0gV2hpY2ggaXMgYWxzbyBhIGZsZXgtaXRlbSAtIHRha2UgdXAgYWxsIHRoZSBob3Jpem9udGFsIHNwYWNlXHJcbiAqICBhdmFpbGFibGUgc3BhY2UgaW5zaWRlIHRoZSBmbGV4IGNvbnRhaW5lciAoLmNvbC0qIGVsZW1lbnRzKVxyXG4gKi9cclxuLnZlcnRpY2FsLWFsaWduID4gW2NsYXNzXj1cImNvbC1cIl0gPiBkaXYsXHJcbi52ZXJ0aWNhbC1hbGlnbiA+IFtjbGFzcyo9XCIgY29sLVwiXSA+IGRpdiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRleHQtLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3JlZGl0cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuaHIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5pbm5lcl9fcm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5pbm5lcl9fdGl0bGUsXHJcbi5pbm5lcl9fZGVzYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5uZXJfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbm5lcl9fZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dDphY3RpdmUsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmlucHV0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY2JibCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnSWNlbGFuZCcsIGN1cnNpdmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG4uY2JibCBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdJY2VsYW5kJywgY3Vyc2l2ZTtcclxuICAvKiBtYXgtd2lkdGg6IDE4MHB4OyAqL1xyXG59XHJcblxyXG4ubWlJbnB1dCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvdHRvbTogYXV0bztcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTNweCAjZmZmLCAwIC02cHggIzAwMCwgM3B4IDAgI2ZmZiwgM3B4IC0zcHggIzAwMCwgNnB4IDAgIzAwMCwgMCAzcHggI2ZmZiwgMCA2cHggIzAwMCwgLTNweCAwICNmZmYsIC0zcHggM3B4ICMwMDAsIC02cHggMCAjMDAwLCAtM3B4IC0zcHggIzAwMCwgM3B4IDNweCAjMDAwLCAzcHggOXB4ICNhYWEsIDZweCA2cHggI2FhYSwgOXB4IDNweCAjYWFhO1xyXG59XHJcblxyXG5cclxuLmNiYmwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IDlweCAyOXB4IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3gtc2hhZG93OiAwIC0zcHggI2ZmZiwgMCAtNnB4ICMwMDAsIDNweCAwICNmZmYsIDNweCAtM3B4ICMwMDAsIDZweCAwICMwMDAsIDAgM3B4ICNmZmYsIDAgNnB4ICMwMDAsIC0zcHggMCAjZmZmLCAtM3B4IDNweCAjMDAwLCAtNnB4IDAgIzAwMCwgLTNweCAtM3B4ICMwMDAsIDNweCAzcHggIzAwMCwgM3B4IDlweCAjYWFhLCA2cHggNnB4ICNhYWEsIDlweCAzcHggI2FhYTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNiYmw6OmJlZm9yZSxcclxuLmNiYmw6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxlZnQ6IDIwJTtcclxufVxyXG4uY2JibDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgd2lkdGg6IDlweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBib3R0b206IC0xNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICMwMDAsIDNweCAwICMwMDAsIDNweCAzcHggI2ZmZiwgMHB4IDNweCAjMDAwLCA2cHggM3B4ICMwMDAsIDlweCAzcHggI2FhYSwgM3B4IDZweCAjMDAwLCA2cHggNnB4ICMwMDAsIDlweCA2cHggI2FhYSwgNnB4IDlweCAjYWFhO1xyXG59XHJcbi5jYmJsOjpiZWZvcmUge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm90dG9tOiAtMTFweDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzAwMDtcclxufVxyXG4uY2JibC4taG92ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgYm94LXNoYWRvdzogMCAtM3B4ICNlZWUsIDAgLTZweCAjN2JjOGE0LCAzcHggMCAjZWVlLCAzcHggLTNweCAjN2JjOGE0LCA2cHggMCAjN2JjOGE0LCAwIDNweCAjZWVlLCAwIDZweCAjN2JjOGE0LCAtM3B4IDAgI2VlZSwgLTNweCAzcHggIzdiYzhhNCwgLTZweCAwICM3YmM4YTQsIC0zcHggLTNweCAjN2JjOGE0LCAzcHggM3B4ICM3YmM4YTQsIDNweCA5cHggI2NhZTlkYiwgNnB4IDZweCAjY2FlOWRiLCA5cHggM3B4ICNjYWU5ZGI7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM3YmM4YTQ7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjN2JjOGE0O1xyXG59XHJcbi5jYmJsLi1ob3Zlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IC0zcHggMCAjN2JjOGE0LCAzcHggMCAjN2JjOGE0LCAzcHggM3B4ICNlZWUsIDBweCAzcHggIzdiYzhhNCwgNnB4IDNweCAjN2JjOGE0LCA5cHggM3B4ICNjYWU5ZGIsIDNweCA2cHggIzdiYzhhNCwgNnB4IDZweCAjN2JjOGE0LCA5cHggNnB4ICNjYWU5ZGIsIDZweCA5cHggI2NhZTlkYiwgOXB4IDlweCAjN2JjOGE0O1xyXG59XHJcbi5jYmJsLi1ob3Zlcjpob3Zlci4tY29udHJvbCBpbnB1dFt0eXBlPXN1Ym1pdF0sXHJcbi5jYmJsLi1ob3Zlcjpob3Zlci4tY29udHJvbCBidXR0b24sXHJcbi5jYmJsLi1ob3Zlcjpob3Zlci4tY29udHJvbCBhIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uY2JibC4tdXAge1xyXG4gIG1hcmdpbjogMjlweCA5cHggMTBweCA2cHg7XHJcbn1cclxuLmNiYmwuLXVwOjpiZWZvcmUge1xyXG4gIHRvcDogLTExcHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG59XHJcbi5jYmJsLi11cDo6YWZ0ZXIge1xyXG4gIHRvcDogLTE0cHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IC0zcHggMCAjMDAwLCAzcHggMCAjMDAwLCAzcHggLTNweCAjZmZmLCAwcHggLTNweCAjMDAwLCA2cHggLTNweCAjMDAwLCAzcHggLTZweCAjMDAwLCA2cHggLTZweCAjMDAwO1xyXG59XHJcbi5jYmJsLi11cC4taG92ZXI6aG92ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAtM3B4IDAgIzdiYzhhNCwgM3B4IDAgIzdiYzhhNCwgM3B4IC0zcHggI2VlZSwgMHB4IC0zcHggIzdiYzhhNCwgNnB4IC0zcHggIzdiYzhhNCwgM3B4IC02cHggIzdiYzhhNCwgNnB4IC02cHggIzdiYzhhNDtcclxufVxyXG4uY2JibC4tdXAuLXJpZ2h0OjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgIzAwMCwgLTNweCAwICMwMDAsIC0zcHggLTNweCAjZmZmLCAwcHggLTNweCAjMDAwLCAtNnB4IC0zcHggIzAwMCwgLTNweCAtNnB4ICMwMDAsIC02cHggLTZweCAjMDAwO1xyXG59XHJcbi5jYmJsLi11cC4tcmlnaHQuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgIzdiYzhhNCwgLTNweCAwICM3YmM4YTQsIC0zcHggLTNweCAjZWVlLCAwcHggLTNweCAjN2JjOGE0LCAtNnB4IC0zcHggIzdiYzhhNCwgLTNweCAtNnB4ICM3YmM4YTQsIC02cHggLTZweCAjN2JjOGE0O1xyXG59XHJcbi5jYmJsLi1yaWdodDo6YmVmb3JlLFxyXG4uY2JibC4tcmlnaHQ6OmFmdGVyIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbn1cclxuLmNiYmwuLXJpZ2h0OjphZnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgIzAwMCwgLTNweCAwICMwMDAsIC0zcHggM3B4ICNmZmYsIDBweCAzcHggIzAwMCwgLTZweCAzcHggIzAwMCwgLTNweCA2cHggIzAwMCwgLTZweCA2cHggIzAwMCwgLTNweCA5cHggI2FhYSwgMCA2cHggI2FhYSwgM3B4IDNweCAjYWFhLCA2cHggMHB4ICNhYWE7XHJcbn1cclxuLmNiYmwuLXJpZ2h0Li1ob3Zlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IDNweCAwICM3YmM4YTQsIC0zcHggMCAjN2JjOGE0LCAtM3B4IDNweCAjZWVlLCAwcHggM3B4ICM3YmM4YTQsIC02cHggM3B4ICM3YmM4YTQsIC0zcHggNnB4ICM3YmM4YTQsIC02cHggNnB4ICM3YmM4YTQsIC0zcHggOXB4ICNjYWU5ZGIsIDAgNnB4ICNjYWU5ZGIsIDNweCAzcHggI2NhZTlkYiwgNnB4IDBweCAjY2FlOWRiO1xyXG59XHJcbi5jYmJsLi1uby1zZWxlY3Rpb24ge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmNiYmwuLWNvbnRyb2wge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2JibC4tY29udHJvbCBpbnB1dFt0eXBlPXN1Ym1pdF0sXHJcbi5jYmJsLi1jb250cm9sIGJ1dHRvbixcclxuLmNiYmwuLWNvbnRyb2wgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG4uY2JibC4tY29udHJvbDphY3RpdmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUlue1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"canvas\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row vertical-align\">\r\n      <div class=\"col-1\"></div>\r\n      <div class=\"col-3\">\r\n        <!-- <app-burbuja-mensaje2 class=\"v-center\" [valor]=\"juego.numeroIngresado\" [efecto]=\"this.juego.mostrarInput\" *ngIf=\"this.juego.mostrarInput\" (keydown.enter)=\"verificar()\"></app-burbuja-mensaje2> -->\r\n\r\n        <div class=\"inner\" *ngIf=\"juego.mostrarInput\">\r\n          <div class=\"\">\r\n              <div class=\"miInput\" [ngClass]=\"{'fade-in': this.juego.mostrarInput === true}\">\r\n                  <input type=\"text\" style=\"width: 150px\" placeholder=\"numero\" appSoloNumeros [(ngModel)]=\"juego.numeroIngresadoString\" autofocus (keydown.enter)=\"verificar()\" #inputNro>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <p>-</p>\r\n        <p>-</p>\r\n        <p>-</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n              <app-boton-retro [efecto]=\"this.juego.mostrarInput\" [textoBoton]=\"'Probar'\" *ngIf=\"this.juego.mostrarInput\" (click)=\"verificar()\"></app-boton-retro>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-7\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5\"></div>\r\n          <div class=\"col-7\">\r\n            <app-genio class=\"genio\" [mensaje1]=\"juego.mensaje1\" [mensaje2]=\"juego.mensaje2\"\r\n              (miClick)=\"onClickEnGenio()\"></app-genio>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_class_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/class/juego-adivina */ "./src/app/class/juego-adivina.ts");



var AdivinaElNumeroComponent = /** @class */ (function () {
    function AdivinaElNumeroComponent() {
        this.juego = new src_app_class_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        this.contador = 0;
        this.juego.mensaje1 = 'Hola! Queres jugar?';
        this.juego.mensaje2 = 'COMENZAR';
    }
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        var mensaje1;
        var mensaje2;
        this.juego.numeroIngresado = Number(this.juego.numeroIngresadoString);
        console.log(this.juego.numeroIngresado, this.juego.numeroSecreto);
        this.juego.numeroIngresadoString = '';
        this.contador++;
        if (this.juego.verificar()) {
            this.juego.mensaje1 = 'Ganaste! Bien ahí maquinola';
            this.juego.estado = 'esperando';
            this.juego.mostrarInput = false;
            this.juego.mensaje2 = 'Queres jugar de nuevo? COMENZAR';
        }
        else {
            switch (this.contador) {
                case 1:
                    mensaje1 = 'Le erraste! Te quedan 5 tiros.';
                    break;
                case 2:
                    mensaje1 = 'Le pifiaste de nuevo';
                    break;
                case 3:
                    mensaje1 = 'Crei que la tercera era la vencida.';
                    break;
                case 4:
                    mensaje1 = 'No era el  ' + this.juego.numeroIngresado;
                    break;
                case 5:
                    mensaje1 = 'intentos y nada.';
                    break;
                case 6:
                    mensaje1 = 'Ultima posibilidad.';
                    break;
                default:
                    mensaje1 = "Perdiste! El numero era el " + this.juego.numeroSecreto;
                    mensaje2 = 'Queres jugar de nuevo? COMENZAR';
                    this.juego.estado = 'esperando';
                    this.juego.mostrarInput = false;
                    break;
            }
            if (this.juego.estado === 'jugando') {
                mensaje2 = "Te doy una pista: " + this.juego.retornarAyuda();
            }
            this.juego.mensaje1 = mensaje1;
            this.juego.mensaje2 = mensaje2;
            this.juego.numeroIngresado = 0;
        }
    };
    AdivinaElNumeroComponent.prototype.onClickEnGenio = function () {
        var _this = this;
        if (this.juego.estado === 'esperando') {
            this.juego.nuevoJuego();
            this.contador = 0;
            setTimeout(function () { return _this.inputNumeroIngresado.nativeElement.focus(); }, 1000);
        }
    };
    AdivinaElNumeroComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('afterinit');
        setTimeout(function () {
            _this.inputNumeroIngresado.nativeElement.focus();
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputNro'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdivinaElNumeroComponent.prototype, "inputNumeroIngresado", void 0);
    AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adivina-el-numero',
            template: __webpack_require__(/*! ./adivina-el-numero.component.html */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.html"),
            styles: [__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdivinaElNumeroComponent);
    return AdivinaElNumeroComponent;
}());



/***/ }),

/***/ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: matematica;\r\n  src: url('Mathematical.ttf') format(\"truetype\");\r\n}\r\n\r\nh2 {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n\r\n.operador1 {\r\n  background-color:#1d1d1d;\r\n  font-family: matematica;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 4.5rem;\r\n  border-radius: 25px;\r\n  border: 2px solid aqua;\r\n}\r\n\r\ninput {\r\n  width: 170px;\r\n  height: 60px;\r\n  text-align:center;\r\n  font-weight: bold;\r\n  font-size: 3rem;\r\n  border: 2px solid aqua;\r\n  background-color:lightgray;\r\n  font-family: matematica;\r\n}\r\n\r\n/* input {\r\n  width: 10rem;\r\n  font-size: 2rem;\r\n  margin: 3rem 0;\r\n} */\r\n\r\n.canvas {\r\n  background-image: url('confused-math-png-1.png');\r\n  padding: 10px;\r\n  border-radius: 25px;\r\n  border: 2px solid black;\r\n  /* background-color: #1d1d1d; */\r\n  background-color: dimgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZ3VpbGlkYWQtYXJpdG1ldGljYS9hZ3VpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtDQUFtRjtBQUNyRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGdEQUFvRTtFQUNwRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZ3VpbGlkYWQtYXJpdG1ldGljYS9hZ3VpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGVtYXRpY2E7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2ZvbnRzL21hdGhlbWF0aWNhbC9NYXRoZW1hdGljYWwudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ub3BlcmFkb3IxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFkMWQ7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGVtYXRpY2E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWE7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBhcXVhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRlbWF0aWNhO1xyXG59XHJcblxyXG4vKiBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDNyZW0gMDtcclxufSAqL1xyXG5cclxuLmNhbnZhcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jb25mdXNlZC1tYXRoLXBuZy0xLnBuZ1wiKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"canvas\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <h2 class=\"text-center\">Nivel {{juego.nivel}}</h2>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-4\">\r\n        <div class=\"operador1\">\r\n          <span>{{juego.operador1}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4\">\r\n        <div class=\"operador1 operacion\">\r\n          <span>{{juego.operacion}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-4\">\r\n        <div class=\"operador1\">\r\n          <span>{{juego.operador2}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-3\"><input type=\"text\" [(ngModel)]=\"juego.resultadoIngresado\" placeholder=\"Resultado\"\r\n            (keydown.enter)=\"verificar()\" #txtValorIngresado></div>\r\n        <div class=\"col-2\">\r\n          <app-boton2 [texto]=\"'Verificar'\" (miClick)=\"verificar()\" data-toggle=\"modal\" data-target=\"#modalBook\"></app-boton2>\r\n        </div>\r\n        <div class=\"col-3 text-center\"></div>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-5\"></div>\r\n      <div class=\"col-3 text-center\">\r\n        <app-cronometro (fin)=\"perdio()\" #cronometro></app-cronometro>\r\n      </div>\r\n      <div class=\"col-4\"></div>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\r\n  </div>\r\n  <ng-template #content let-modal>\r\n      <app-modal-game-over1 (jugarDeNuevo)=\"nuevoJuego()\" (salir)=\"salir()\"></app-modal-game-over1>\r\n  </ng-template>\r\n</section>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AguilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AguilidadAritmeticaComponent", function() { return AguilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class/juego-agilidad */ "./src/app/class/juego-agilidad.ts");
/* harmony import */ var _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cronometro/cronometro.component */ "./src/app/components/cronometro/cronometro.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");





var AguilidadAritmeticaComponent = /** @class */ (function () {
    function AguilidadAritmeticaComponent(modalService) {
        this.modalService = modalService;
        this.reiniciarTimer = false;
    }
    AguilidadAritmeticaComponent.prototype.ngOnInit = function () {
        this.juego = new _class_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
        this.juego.nuevoJuego();
        this.txtValorIngresado.nativeElement.focus();
    };
    AguilidadAritmeticaComponent.prototype.verificar = function () {
        this.txtValorIngresado.nativeElement.value = '';
        if (this.juego.verificar()) {
            this.cronometro.reset(10);
        }
    };
    AguilidadAritmeticaComponent.prototype.perdio = function () {
        this.juego.perdio();
        this.open(this.modal);
    };
    AguilidadAritmeticaComponent.prototype.nuevoJuego = function () {
        this.modalRef.close();
        this.juego.nuevoJuego();
        this.cronometro.reset(10);
    };
    AguilidadAritmeticaComponent.prototype.open = function (content) {
        this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        // .result.then((result) => {
        //   this.closeResult = `Closed with: ${result}`;
        // }, (reason) => {
        //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        // });
    };
    AguilidadAritmeticaComponent.prototype.salir = function () {
        this.modalRef.close();
    };
    AguilidadAritmeticaComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('txtValorIngresado'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AguilidadAritmeticaComponent.prototype, "txtValorIngresado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cronometro'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cronometro_cronometro_component__WEBPACK_IMPORTED_MODULE_3__["CronometroComponent"])
    ], AguilidadAritmeticaComponent.prototype, "cronometro", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], AguilidadAritmeticaComponent.prototype, "modal", void 0);
    AguilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aguilidad-aritmetica',
            template: __webpack_require__(/*! ./aguilidad-aritmetica.component.html */ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.html"),
            styles: [__webpack_require__(/*! ./aguilidad-aritmetica.component.css */ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], AguilidadAritmeticaComponent);
    return AguilidadAritmeticaComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-papel/boton-arcade-papel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"push--skeuo\"></button>\r\n"

/***/ }),

/***/ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-papel/boton-arcade-papel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 1em;\n  background: #333;\n  color: #ccc;\n  font: normal 3vw/1 'Montserrat', sans-serif;\n  text-align: center;\n  text-transform: uppercase; }\n\nh1 {\n  font-size: 5vw; }\n\n[class*=\"push\"] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border: 0;\n  margin: 1em;\n  outline: none;\n  background-color: #c2290a;\n  background-image: url('Papel3.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: box-shadow 200ms; }\n\n.push--flat {\n  box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 10.86956522px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.7), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 5px 0 rgba(0, 0, 0, 0.3); }\n\n.push--flat:after {\n    content: '';\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n    display: block;\n    width: 80px;\n    height: 80px;\n    border: 6.66666667px solid rgba(0, 0, 0, 0.3);\n    border-width: 0 0 6.66666667px;\n    border-radius: 50%;\n    transition-duration: 200ms; }\n\n.push--flat:active, .push--flat.is-pushed {\n    box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 11.76470588px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 5px 0 rgba(0, 0, 0, 0.3);\n    background-color: #b8270a; }\n\n.push--flat:active:after, .push--flat.is-pushed:after {\n      bottom: 11.66666667px;\n      border-width: 0; }\n\n.push--skeuo {\n  box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 0.83333333px 10.86956522px black, inset 0 0 0.83333333px 12.5px rgba(247, 133, 110, 0.7), inset 0 5px 0 11.76470588px rgba(244, 71, 37, 0.7), inset 0 -5px 1.66666667px 11.76470588px rgba(145, 31, 8, 0.2), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 2.5px 5px rgba(0, 0, 0, 0.5); }\n\n.push--skeuo:active, .push--skeuo.is-pushed {\n    box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 2.5px 11.76470588px black, inset 0 0 0.83333333px 13.33333333px rgba(247, 133, 110, 0.2), inset 0 5px 0 28px rgba(244, 71, 37, 0.5), inset 0 -5px 1.66666667px 28px rgba(97, 20, 5, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 2.5px 5px rgba(0, 0, 0, 0.5);\n    background-color: #b8270a; }\n\n.push--skeuo:active:before, .push--skeuo.is-pushed:before {\n      opacity: .5; }\n\n.push--skeuo:before {\n    content: '';\n    position: absolute;\n    bottom: 22.22222222px;\n    left: 27.77777778px;\n    display: block;\n    width: 45.45454545px;\n    height: 30.3030303px;\n    background: rgba(247, 133, 110, 0.2);\n    background: linear-gradient(to top, rgba(250, 173, 158, 0.3) 0%, rgba(194, 41, 10, 0.1) 100%);\n    border-radius: 40% 40% 60% 60%;\n    transition: opacity 200ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1hcmNhZGUtcGFwZWwvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm90b24tYXJjYWRlLXBhcGVsXFxib3Rvbi1hcmNhZGUtcGFwZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlLXBhcGVsL2JvdG9uLWFyY2FkZS1wYXBlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQVc7RUFDWCxnQkFQTztFQVFQLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWMsRUFBQTs7QUNIaEI7RURNRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBaEJlO0VBaUJmLGFBakJlO0VBa0JmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQXZCZ0M7RUF3QmhDLG1DQUFpRjtFQUNqRixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLHdYQVdxQyxFQUFBOztBQVp2QztJQWVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBcUI7SUFDckIsVUFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQXNCO0lBQ3RCLFlBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3Qyw4QkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLDBCQUEwQixFQUFBOztBQXpCOUI7SUErQkksd1hBV3FDO0lBQ3JDLHlCQUF5QyxFQUFBOztBQTNDN0M7TUE4Q00scUJBQXFDO01BQ3JDLGVBQWUsRUFBQTs7QUFLckI7RUFDRSwrdEJBaUJpRCxFQUFBOztBQWxCbkQ7SUF1QkksNHNCQWlCaUQ7SUFDakQseUJBQXlDLEVBQUE7O0FBekM3QztNQTRDTSxXQUFXLEVBQUE7O0FBNUNqQjtJQWlESSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFzQjtJQUN0QixtQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFxQjtJQUNyQixvQkFBc0I7SUFDdEIsb0NBQXlEO0lBQ3pELDZGQUEySDtJQUMzSCw4QkFBOEI7SUFDOUIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvdG9uLWFyY2FkZS1wYXBlbC9ib3Rvbi1hcmNhZGUtcGFwZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICMzMzM7XHJcbiRwdXNoLWNvbG9yOiBoc2xhKDEwLCA5MCUsIDQwJSwgMSk7XHJcblxyXG4kcHVzaC1zaXplOiAxMDBweDtcclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICRiZztcclxuICBjb2xvcjogI2NjYztcclxuICBmb250OiBub3JtYWwgM3Z3LzEgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbn1cclxuW2NsYXNzKj1cInB1c2hcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6ICRwdXNoLXNpemU7XHJcbiAgaGVpZ2h0OiAkcHVzaC1zaXplO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDFlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXNoLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9waWVkcmFQYXBlbFRpamVyYS9ib3RvbmVzL1BhcGVsMy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXM7XHJcbn1cclxuLnB1c2gtLWZsYXQge1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICBpbnNldCAwICRwdXNoLXNpemUvMzIgMCBsaWdodGVuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMikgMCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMzIgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzEyICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzkuMiBkYXJrZW4oJHB1c2gtY29sb3IsIDUwJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzcuNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuMyksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLFxyXG4gICAgMCAkcHVzaC1zaXplLzIwIDAgcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRwdXNoLXNpemUvMjA7XHJcbiAgICBsZWZ0OiAkcHVzaC1zaXplLzEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogJHB1c2gtc2l6ZS8xLjI1O1xyXG4gICAgaGVpZ2h0OiAkcHVzaC1zaXplLzEuMjU7XHJcbiAgICBib3JkZXI6ICRwdXNoLXNpemUvMTUgc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAkcHVzaC1zaXplLzE1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSxcclxuICAvLyAmOmhvdmVyLFxyXG4gICYuaXMtcHVzaGVkIHtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8zMiAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMzIpIDAgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMzIgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTAgZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzguNSBkYXJrZW4oJHB1c2gtY29sb3IsIDQwJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS81LjUgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA4JSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDE1JSksXHJcbiAgICAgIDAgJHB1c2gtc2l6ZS8yMCAwIHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwdXNoLWNvbG9yLCAyJSk7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJvdHRvbTogJHB1c2gtc2l6ZS8yMCArICRwdXNoLXNpemUvMTU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wdXNoLS1za2V1byB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yNCAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzI0KSAkcHVzaC1zaXplLzYwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCBkYXJrZW4oJHB1c2gtY29sb3IsIDE1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC41KSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMCkgJHB1c2gtc2l6ZS80MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvOS4yIGRhcmtlbigkcHVzaC1jb2xvciwgNTAlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEyMCAkcHVzaC1zaXplLzggdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMzAlKSwgLjMpLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIwIDAgJHB1c2gtc2l6ZS84LjUgdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMTUlKSwgLjMpLFxyXG4gICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMjApICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS84LjUgdHJhbnNwYXJlbnRpemUoZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLCAuOCksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLFxyXG4gICAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMjAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gIC8vICY6aG92ZXIsXHJcbiAgJi5pcy1wdXNoZWQge1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzI0IDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yNCkgJHB1c2gtc2l6ZS82MCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMzAgdHJhbnNwYXJlbnRpemUoJGJnLCAuNSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMwKSAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS80MCAkcHVzaC1zaXplLzguNSBkYXJrZW4oJHB1c2gtY29sb3IsIDQwJSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEyMCAkcHVzaC1zaXplLzcuNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuOCksXHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yMCAwIDI4cHggdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMTUlKSwgLjUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yMCkgJHB1c2gtc2l6ZS82MCAyOHB4IHRyYW5zcGFyZW50aXplKGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSwgLjgpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDglKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTAgJHB1c2gtc2l6ZS82IGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMjAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHB1c2gtY29sb3IsIDIlKTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRwdXNoLXNpemUvNC41O1xyXG4gICAgbGVmdDogJHB1c2gtc2l6ZS8zLjY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkcHVzaC1zaXplLzIuMjtcclxuICAgIGhlaWdodDogJHB1c2gtc2l6ZS8zLjM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCA0MCUpLCAuNykgMCUsIHRyYW5zcGFyZW50aXplKCRwdXNoLWNvbG9yLCAuOSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MCUgNDAlIDYwJSA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIH1cclxufVxyXG4iLCJib2R5IHtcbiAgbWFyZ2luOiAxZW07XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250OiBub3JtYWwgM3Z3LzEgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuaDEge1xuICBmb250LXNpemU6IDV2dzsgfVxuXG5bY2xhc3MqPVwicHVzaFwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAxZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjI5MGE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGllZHJhUGFwZWxUaWplcmEvYm90b25lcy9QYXBlbDMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtczsgfVxuXG4ucHVzaC0tZmxhdCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMy4xMjVweCAwICNkYTJlMGIsIGluc2V0IDAgLTMuMTI1cHggMCAjYWEyNDA5LCBpbnNldCAwIDAgMCAzLjEyNXB4ICNiMzI2MDksIGluc2V0IDAgMCAwIDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIDAgMCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAwIDEwLjg2OTU2NTIycHggYmxhY2ssIGluc2V0IDAgMCAwIDEzLjMzMzMzMzMzcHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDAgMCAxOC4xODE4MTgxOHB4ICNjMjI5MGEsIGluc2V0IDAgNDBweCAxMy4zMzMzMzMzM3B4ICNhYTI0MDksIGluc2V0IDAgMCAxMHB4IDE2LjY2NjY2NjY3cHggIzkxMWYwOCwgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgLnB1c2gtLWZsYXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IDYuNjY2NjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgNi42NjY2NjY2N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgfVxuICAucHVzaC0tZmxhdDphY3RpdmUsIC5wdXNoLS1mbGF0LmlzLXB1c2hlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzLjEyNXB4IDAgI2RhMmUwYiwgaW5zZXQgMCAtMy4xMjVweCAwICNhYTI0MDksIGluc2V0IDAgMCAwIDMuMTI1cHggI2IzMjYwOSwgaW5zZXQgMCAwIDAgOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgMCAwIDEwcHggIzYxMTQwNSwgaW5zZXQgMCAwIDAgMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAgMTMuMzMzMzMzMzNweCByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMiksIGluc2V0IDAgMCAwIDE4LjE4MTgxODE4cHggI2IzMjYwOSwgaW5zZXQgMCA0MHB4IDEzLjMzMzMzMzMzcHggIzliMjEwOCwgaW5zZXQgMCAwIDEwcHggMTYuNjY2NjY2NjdweCAjNzkxYTA2LCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLWZsYXQ6YWN0aXZlOmFmdGVyLCAucHVzaC0tZmxhdC5pcy1wdXNoZWQ6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAxMS42NjY2NjY2N3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XG5cbi5wdXNoLS1za2V1byB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNC4xNjY2NjY2N3B4IDAgI2RhMmUwYiwgaW5zZXQgMCAtNC4xNjY2NjY2N3B4IDEuNjY2NjY2NjdweCAjYWEyNDA5LCAwIDAgMS42NjY2NjY2N3B4ICNjMjI5MGEsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggIzc5MWEwNiwgaW5zZXQgMCAwIDMuMzMzMzMzMzNweCByZ2JhKDUxLCA1MSwgNTEsIDAuNSksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgLTMuMzMzMzMzMzNweCAyLjVweCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KSwgaW5zZXQgMCAwIDEuNjY2NjY2NjdweCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAwLjgzMzMzMzMzcHggMTAuODY5NTY1MjJweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMi41cHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDVweCAwIDExLjc2NDcwNTg4cHggcmdiYSgyNDQsIDcxLCAzNywgMC43KSwgaW5zZXQgMCAtNXB4IDEuNjY2NjY2NjdweCAxMS43NjQ3MDU4OHB4IHJnYmEoMTQ1LCAzMSwgOCwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYzIyOTBhLCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjYWEyNDA5LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM5MTFmMDgsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAucHVzaC0tc2tldW86YWN0aXZlLCAucHVzaC0tc2tldW8uaXMtcHVzaGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDQuMTY2NjY2NjdweCAwICNkYTJlMGIsIGluc2V0IDAgLTQuMTY2NjY2NjdweCAxLjY2NjY2NjY3cHggI2FhMjQwOSwgMCAwIDEuNjY2NjY2NjdweCAjYzIyOTBhLCBpbnNldCAwIDAgMy4zMzMzMzMzM3B4ICM3OTFhMDYsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggcmdiYSg1MSwgNTEsIDUxLCAwLjUpLCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIC0zLjMzMzMzMzMzcHggMi41cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCAjNjExNDA1LCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDEwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpLCBpbnNldCAwIDAgMi41cHggMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMy4zMzMzMzMzM3B4IHJnYmEoMjQ3LCAxMzMsIDExMCwgMC4yKSwgaW5zZXQgMCA1cHggMCAyOHB4IHJnYmEoMjQ0LCA3MSwgMzcsIDAuNSksIGluc2V0IDAgLTVweCAxLjY2NjY2NjY3cHggMjhweCByZ2JhKDk3LCAyMCwgNSwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYjMyNjA5LCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjOWIyMTA4LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM3OTFhMDYsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLXNrZXVvOmFjdGl2ZTpiZWZvcmUsIC5wdXNoLS1za2V1by5pcy1wdXNoZWQ6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IC41OyB9XG4gIC5wdXNoLS1za2V1bzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIyLjIyMjIyMjIycHg7XG4gICAgbGVmdDogMjcuNzc3Nzc3NzhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDVweDtcbiAgICBoZWlnaHQ6IDMwLjMwMzAzMDNweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTAsIDE3MywgMTU4LCAwLjMpIDAlLCByZ2JhKDE5NCwgNDEsIDEwLCAwLjEpIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/boton-arcade-papel/boton-arcade-papel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BotonArcadePapelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonArcadePapelComponent", function() { return BotonArcadePapelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonArcadePapelComponent = /** @class */ (function () {
    function BotonArcadePapelComponent() {
    }
    BotonArcadePapelComponent.prototype.ngOnInit = function () {
    };
    BotonArcadePapelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-arcade-papel',
            template: __webpack_require__(/*! ./boton-arcade-papel.component.html */ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.html"),
            styles: [__webpack_require__(/*! ./boton-arcade-papel.component.scss */ "./src/app/components/boton-arcade-papel/boton-arcade-papel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonArcadePapelComponent);
    return BotonArcadePapelComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"push--skeuo\"></button>\r\n"

/***/ }),

/***/ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 1em;\n  background: #333;\n  color: #ccc;\n  font: normal 3vw/1 'Montserrat', sans-serif;\n  text-align: center;\n  text-transform: uppercase; }\n\nh1 {\n  font-size: 5vw; }\n\n[class*=\"push\"] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border: 0;\n  margin: 1em;\n  outline: none;\n  background-color: #c2290a;\n  background-image: url('piedra3.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: box-shadow 200ms; }\n\n.push--flat {\n  box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 10.86956522px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.7), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 5px 0 rgba(0, 0, 0, 0.3); }\n\n.push--flat:after {\n    content: '';\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n    display: block;\n    width: 80px;\n    height: 80px;\n    border: 6.66666667px solid rgba(0, 0, 0, 0.3);\n    border-width: 0 0 6.66666667px;\n    border-radius: 50%;\n    transition-duration: 200ms; }\n\n.push--flat:active, .push--flat.is-pushed {\n    box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 11.76470588px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 5px 0 rgba(0, 0, 0, 0.3);\n    background-color: #b8270a; }\n\n.push--flat:active:after, .push--flat.is-pushed:after {\n      bottom: 11.66666667px;\n      border-width: 0; }\n\n.push--skeuo {\n  box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 0.83333333px 10.86956522px black, inset 0 0 0.83333333px 12.5px rgba(247, 133, 110, 0.7), inset 0 5px 0 11.76470588px rgba(244, 71, 37, 0.7), inset 0 -5px 1.66666667px 11.76470588px rgba(145, 31, 8, 0.2), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 2.5px 5px rgba(0, 0, 0, 0.5); }\n\n.push--skeuo:active, .push--skeuo.is-pushed {\n    box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 2.5px 11.76470588px black, inset 0 0 0.83333333px 13.33333333px rgba(247, 133, 110, 0.2), inset 0 5px 0 28px rgba(244, 71, 37, 0.5), inset 0 -5px 1.66666667px 28px rgba(97, 20, 5, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 2.5px 5px rgba(0, 0, 0, 0.5);\n    background-color: #b8270a; }\n\n.push--skeuo:active:before, .push--skeuo.is-pushed:before {\n      opacity: .5; }\n\n.push--skeuo:before {\n    content: '';\n    position: absolute;\n    bottom: 22.22222222px;\n    left: 27.77777778px;\n    display: block;\n    width: 45.45454545px;\n    height: 30.3030303px;\n    background: rgba(247, 133, 110, 0.2);\n    background: linear-gradient(to top, rgba(250, 173, 158, 0.3) 0%, rgba(194, 41, 10, 0.1) 100%);\n    border-radius: 40% 40% 60% 60%;\n    transition: opacity 200ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1hcmNhZGUtcGllZHJhL0M6XFxVc2Vyc1xcSW5maXN0aW90aWNvc1xcRG9jdW1lbnRzXFxVVE4gRlJBXFxOdWV2YSBjYXJwZXRhICgzKVxcVFAtTWktU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJvdG9uLWFyY2FkZS1waWVkcmFcXGJvdG9uLWFyY2FkZS1waWVkcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlLXBpZWRyYS9ib3Rvbi1hcmNhZGUtcGllZHJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0FBVztFQUNYLGdCQVBPO0VBUVAsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYyxFQUFBOztBQ0hoQjtFRE1FLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFoQmU7RUFpQmYsYUFqQmU7RUFrQmYsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBdkJnQztFQXdCaEMsb0NBQWtGO0VBQ2xGLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0Usd1hBV3FDLEVBQUE7O0FBWnZDO0lBZUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFxQjtJQUNyQixVQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBc0I7SUFDdEIsWUFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLDhCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsMEJBQTBCLEVBQUE7O0FBekI5QjtJQStCSSx3WEFXcUM7SUFDckMseUJBQXlDLEVBQUE7O0FBM0M3QztNQThDTSxxQkFBcUM7TUFDckMsZUFBZSxFQUFBOztBQUtyQjtFQUNFLCt0QkFpQmlELEVBQUE7O0FBbEJuRDtJQXVCSSw0c0JBaUJpRDtJQUNqRCx5QkFBeUMsRUFBQTs7QUF6QzdDO01BNENNLFdBQVcsRUFBQTs7QUE1Q2pCO0lBaURJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXNCO0lBQ3RCLG1CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsb0JBQXFCO0lBQ3JCLG9CQUFzQjtJQUN0QixvQ0FBeUQ7SUFDekQsNkZBQTJIO0lBQzNILDhCQUE4QjtJQUM5Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlLXBpZWRyYS9ib3Rvbi1hcmNhZGUtcGllZHJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjMzMzO1xyXG4kcHVzaC1jb2xvcjogaHNsYSgxMCwgOTAlLCA0MCUsIDEpO1xyXG5cclxuJHB1c2gtc2l6ZTogMTAwcHg7XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udDogbm9ybWFsIDN2dy8xICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjs7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcbltjbGFzcyo9XCJwdXNoXCJdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAkcHVzaC1zaXplO1xyXG4gIGhlaWdodDogJHB1c2gtc2l6ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVzaC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGllZHJhUGFwZWxUaWplcmEvYm90b25lcy9waWVkcmEzLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcztcclxufVxyXG4ucHVzaC0tZmxhdCB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8zMiAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMyKSAwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8zMiBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzEwIGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvOS4yIGRhcmtlbigkcHVzaC1jb2xvciwgNTAlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC4zKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41ICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksXHJcbiAgICAwICRwdXNoLXNpemUvMjAgMCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJHB1c2gtc2l6ZS8yMDtcclxuICAgIGxlZnQ6ICRwdXNoLXNpemUvMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkcHVzaC1zaXplLzEuMjU7XHJcbiAgICBoZWlnaHQ6ICRwdXNoLXNpemUvMS4yNTtcclxuICAgIGJvcmRlcjogJHB1c2gtc2l6ZS8xNSBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIGJvcmRlci13aWR0aDogMCAwICRwdXNoLXNpemUvMTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gIC8vICY6aG92ZXIsXHJcbiAgJi5pcy1wdXNoZWQge1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzMyIDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMikgMCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8zMiBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvOC41IGRhcmtlbigkcHVzaC1jb2xvciwgNDAlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS83LjUgdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMzAlKSwgLjgpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDglKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTAgJHB1c2gtc2l6ZS82IGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgMCAkcHVzaC1zaXplLzIwIDAgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHB1c2gtY29sb3IsIDIlKTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgYm90dG9tOiAkcHVzaC1zaXplLzIwICsgJHB1c2gtc2l6ZS8xNTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnB1c2gtLXNrZXVvIHtcclxuICBib3gtc2hhZG93OlxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzI0IDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMjQpICRwdXNoLXNpemUvNjAgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIHRyYW5zcGFyZW50aXplKCRiZywgLjUpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMwKSAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMjAgJHB1c2gtc2l6ZS85LjIgZGFya2VuKCRwdXNoLWNvbG9yLCA1MCUpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvOCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuMyksXHJcbiAgICBpbnNldCAwICRwdXNoLXNpemUvMjAgMCAkcHVzaC1zaXplLzguNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAxNSUpLCAuMyksXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yMCkgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzguNSB0cmFuc3BhcmVudGl6ZShkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksIC44KSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41ICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksXHJcbiAgICAwICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8yMCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgLy8gJjpob3ZlcixcclxuICAmLmlzLXB1c2hlZCB7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICBpbnNldCAwICRwdXNoLXNpemUvMjQgMCBsaWdodGVuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzI0KSAkcHVzaC1zaXplLzYwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMzAgZGFya2VuKCRwdXNoLWNvbG9yLCAxNSUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC41KSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMzApICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8xMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC4zKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvOC41IGRhcmtlbigkcHVzaC1jb2xvciwgNDAlKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIwIDAgMjhweCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAxNSUpLCAuNSksXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzIwKSAkcHVzaC1zaXplLzYwIDI4cHggdHJhbnNwYXJlbnRpemUoZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLCAuOCksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41IGRhcmtlbigkcHVzaC1jb2xvciwgMyUpLFxyXG4gICAgICBpbnNldCAwICRwdXNoLXNpemUvMi41ICRwdXNoLXNpemUvNy41IGRhcmtlbigkcHVzaC1jb2xvciwgOCUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxNSUpLFxyXG4gICAgICAwICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8yMCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHVzaC1jb2xvciwgMiUpO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJHB1c2gtc2l6ZS80LjU7XHJcbiAgICBsZWZ0OiAkcHVzaC1zaXplLzMuNjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6ICRwdXNoLXNpemUvMi4yO1xyXG4gICAgaGVpZ2h0OiAkcHVzaC1zaXplLzMuMztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDQwJSksIC43KSAwJSwgdHJhbnNwYXJlbnRpemUoJHB1c2gtY29sb3IsIC45KSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcbiAgfVxyXG59XHJcbiIsImJvZHkge1xuICBtYXJnaW46IDFlbTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQ6IG5vcm1hbCAzdncvMSAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNXZ3OyB9XG5cbltjbGFzcyo9XCJwdXNoXCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDFlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMjkwYTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9waWVkcmFQYXBlbFRpamVyYS9ib3RvbmVzL3BpZWRyYTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtczsgfVxuXG4ucHVzaC0tZmxhdCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMy4xMjVweCAwICNkYTJlMGIsIGluc2V0IDAgLTMuMTI1cHggMCAjYWEyNDA5LCBpbnNldCAwIDAgMCAzLjEyNXB4ICNiMzI2MDksIGluc2V0IDAgMCAwIDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIDAgMCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAwIDEwLjg2OTU2NTIycHggYmxhY2ssIGluc2V0IDAgMCAwIDEzLjMzMzMzMzMzcHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDAgMCAxOC4xODE4MTgxOHB4ICNjMjI5MGEsIGluc2V0IDAgNDBweCAxMy4zMzMzMzMzM3B4ICNhYTI0MDksIGluc2V0IDAgMCAxMHB4IDE2LjY2NjY2NjY3cHggIzkxMWYwOCwgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgLnB1c2gtLWZsYXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IDYuNjY2NjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgNi42NjY2NjY2N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgfVxuICAucHVzaC0tZmxhdDphY3RpdmUsIC5wdXNoLS1mbGF0LmlzLXB1c2hlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzLjEyNXB4IDAgI2RhMmUwYiwgaW5zZXQgMCAtMy4xMjVweCAwICNhYTI0MDksIGluc2V0IDAgMCAwIDMuMTI1cHggI2IzMjYwOSwgaW5zZXQgMCAwIDAgOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgMCAwIDEwcHggIzYxMTQwNSwgaW5zZXQgMCAwIDAgMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAgMTMuMzMzMzMzMzNweCByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMiksIGluc2V0IDAgMCAwIDE4LjE4MTgxODE4cHggI2IzMjYwOSwgaW5zZXQgMCA0MHB4IDEzLjMzMzMzMzMzcHggIzliMjEwOCwgaW5zZXQgMCAwIDEwcHggMTYuNjY2NjY2NjdweCAjNzkxYTA2LCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLWZsYXQ6YWN0aXZlOmFmdGVyLCAucHVzaC0tZmxhdC5pcy1wdXNoZWQ6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAxMS42NjY2NjY2N3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XG5cbi5wdXNoLS1za2V1byB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNC4xNjY2NjY2N3B4IDAgI2RhMmUwYiwgaW5zZXQgMCAtNC4xNjY2NjY2N3B4IDEuNjY2NjY2NjdweCAjYWEyNDA5LCAwIDAgMS42NjY2NjY2N3B4ICNjMjI5MGEsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggIzc5MWEwNiwgaW5zZXQgMCAwIDMuMzMzMzMzMzNweCByZ2JhKDUxLCA1MSwgNTEsIDAuNSksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgLTMuMzMzMzMzMzNweCAyLjVweCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KSwgaW5zZXQgMCAwIDEuNjY2NjY2NjdweCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAwLjgzMzMzMzMzcHggMTAuODY5NTY1MjJweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMi41cHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDVweCAwIDExLjc2NDcwNTg4cHggcmdiYSgyNDQsIDcxLCAzNywgMC43KSwgaW5zZXQgMCAtNXB4IDEuNjY2NjY2NjdweCAxMS43NjQ3MDU4OHB4IHJnYmEoMTQ1LCAzMSwgOCwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYzIyOTBhLCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjYWEyNDA5LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM5MTFmMDgsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAucHVzaC0tc2tldW86YWN0aXZlLCAucHVzaC0tc2tldW8uaXMtcHVzaGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDQuMTY2NjY2NjdweCAwICNkYTJlMGIsIGluc2V0IDAgLTQuMTY2NjY2NjdweCAxLjY2NjY2NjY3cHggI2FhMjQwOSwgMCAwIDEuNjY2NjY2NjdweCAjYzIyOTBhLCBpbnNldCAwIDAgMy4zMzMzMzMzM3B4ICM3OTFhMDYsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggcmdiYSg1MSwgNTEsIDUxLCAwLjUpLCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIC0zLjMzMzMzMzMzcHggMi41cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCAjNjExNDA1LCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDEwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpLCBpbnNldCAwIDAgMi41cHggMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMy4zMzMzMzMzM3B4IHJnYmEoMjQ3LCAxMzMsIDExMCwgMC4yKSwgaW5zZXQgMCA1cHggMCAyOHB4IHJnYmEoMjQ0LCA3MSwgMzcsIDAuNSksIGluc2V0IDAgLTVweCAxLjY2NjY2NjY3cHggMjhweCByZ2JhKDk3LCAyMCwgNSwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYjMyNjA5LCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjOWIyMTA4LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM3OTFhMDYsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLXNrZXVvOmFjdGl2ZTpiZWZvcmUsIC5wdXNoLS1za2V1by5pcy1wdXNoZWQ6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IC41OyB9XG4gIC5wdXNoLS1za2V1bzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIyLjIyMjIyMjIycHg7XG4gICAgbGVmdDogMjcuNzc3Nzc3NzhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDVweDtcbiAgICBoZWlnaHQ6IDMwLjMwMzAzMDNweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTAsIDE3MywgMTU4LCAwLjMpIDAlLCByZ2JhKDE5NCwgNDEsIDEwLCAwLjEpIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BotonArcadePiedraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonArcadePiedraComponent", function() { return BotonArcadePiedraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonArcadePiedraComponent = /** @class */ (function () {
    function BotonArcadePiedraComponent() {
    }
    BotonArcadePiedraComponent.prototype.ngOnInit = function () {
    };
    BotonArcadePiedraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-arcade-piedra',
            template: __webpack_require__(/*! ./boton-arcade-piedra.component.html */ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.html"),
            styles: [__webpack_require__(/*! ./boton-arcade-piedra.component.scss */ "./src/app/components/boton-arcade-piedra/boton-arcade-piedra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonArcadePiedraComponent);
    return BotonArcadePiedraComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"push--skeuo\"></button>\r\n"

/***/ }),

/***/ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 1em;\n  background: #333;\n  color: #ccc;\n  font: normal 3vw/1 'Montserrat', sans-serif;\n  text-align: center;\n  text-transform: uppercase; }\n\nh1 {\n  font-size: 5vw; }\n\n[class*=\"push\"] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border: 0;\n  margin: 1em;\n  outline: none;\n  background-color: #c2290a;\n  background-image: url('tijera3.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: box-shadow 200ms; }\n\n.push--flat {\n  box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 10.86956522px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.7), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 5px 0 rgba(0, 0, 0, 0.3); }\n\n.push--flat:after {\n    content: '';\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n    display: block;\n    width: 80px;\n    height: 80px;\n    border: 6.66666667px solid rgba(0, 0, 0, 0.3);\n    border-width: 0 0 6.66666667px;\n    border-radius: 50%;\n    transition-duration: 200ms; }\n\n.push--flat:active, .push--flat.is-pushed {\n    box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 11.76470588px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 5px 0 rgba(0, 0, 0, 0.3);\n    background-color: #b8270a; }\n\n.push--flat:active:after, .push--flat.is-pushed:after {\n      bottom: 11.66666667px;\n      border-width: 0; }\n\n.push--skeuo {\n  box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 0.83333333px 10.86956522px black, inset 0 0 0.83333333px 12.5px rgba(247, 133, 110, 0.7), inset 0 5px 0 11.76470588px rgba(244, 71, 37, 0.7), inset 0 -5px 1.66666667px 11.76470588px rgba(145, 31, 8, 0.2), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 2.5px 5px rgba(0, 0, 0, 0.5); }\n\n.push--skeuo:active, .push--skeuo.is-pushed {\n    box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 2.5px 11.76470588px black, inset 0 0 0.83333333px 13.33333333px rgba(247, 133, 110, 0.2), inset 0 5px 0 28px rgba(244, 71, 37, 0.5), inset 0 -5px 1.66666667px 28px rgba(97, 20, 5, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 2.5px 5px rgba(0, 0, 0, 0.5);\n    background-color: #b8270a; }\n\n.push--skeuo:active:before, .push--skeuo.is-pushed:before {\n      opacity: .5; }\n\n.push--skeuo:before {\n    content: '';\n    position: absolute;\n    bottom: 22.22222222px;\n    left: 27.77777778px;\n    display: block;\n    width: 45.45454545px;\n    height: 30.3030303px;\n    background: rgba(247, 133, 110, 0.2);\n    background: linear-gradient(to top, rgba(250, 173, 158, 0.3) 0%, rgba(194, 41, 10, 0.1) 100%);\n    border-radius: 40% 40% 60% 60%;\n    transition: opacity 200ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1hcmNhZGUtdGlqZXJhL0M6XFxVc2Vyc1xcSW5maXN0aW90aWNvc1xcRG9jdW1lbnRzXFxVVE4gRlJBXFxOdWV2YSBjYXJwZXRhICgzKVxcVFAtTWktU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJvdG9uLWFyY2FkZS10aWplcmFcXGJvdG9uLWFyY2FkZS10aWplcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlLXRpamVyYS9ib3Rvbi1hcmNhZGUtdGlqZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsV0FBVztFQUNYLGdCQVBPO0VBUVAsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsY0FBYyxFQUFBOztBQ0hoQjtFRE1FLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFoQmU7RUFpQmYsYUFqQmU7RUFrQmYsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBdkJnQztFQXdCaEMsb0NBQWtGO0VBQ2xGLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0Usd1hBV3FDLEVBQUE7O0FBWnZDO0lBZUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFxQjtJQUNyQixVQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBc0I7SUFDdEIsWUFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLDhCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsMEJBQTBCLEVBQUE7O0FBekI5QjtJQStCSSx3WEFXcUM7SUFDckMseUJBQXlDLEVBQUE7O0FBM0M3QztNQThDTSxxQkFBcUM7TUFDckMsZUFBZSxFQUFBOztBQUtyQjtFQUNFLCt0QkFpQmlELEVBQUE7O0FBbEJuRDtJQXVCSSw0c0JBaUJpRDtJQUNqRCx5QkFBeUMsRUFBQTs7QUF6QzdDO01BNENNLFdBQVcsRUFBQTs7QUE1Q2pCO0lBaURJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXNCO0lBQ3RCLG1CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsb0JBQXFCO0lBQ3JCLG9CQUFzQjtJQUN0QixvQ0FBeUQ7SUFDekQsNkZBQTJIO0lBQzNILDhCQUE4QjtJQUM5Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlLXRpamVyYS9ib3Rvbi1hcmNhZGUtdGlqZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjMzMzO1xyXG4kcHVzaC1jb2xvcjogaHNsYSgxMCwgOTAlLCA0MCUsIDEpO1xyXG5cclxuJHB1c2gtc2l6ZTogMTAwcHg7XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udDogbm9ybWFsIDN2dy8xICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjs7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcbltjbGFzcyo9XCJwdXNoXCJdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAkcHVzaC1zaXplO1xyXG4gIGhlaWdodDogJHB1c2gtc2l6ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVzaC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGllZHJhUGFwZWxUaWplcmEvYm90b25lcy90aWplcmEzLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcztcclxufVxyXG4ucHVzaC0tZmxhdCB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8zMiAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMyKSAwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8zMiBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzEwIGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvOS4yIGRhcmtlbigkcHVzaC1jb2xvciwgNTAlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC4zKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41ICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksXHJcbiAgICAwICRwdXNoLXNpemUvMjAgMCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJHB1c2gtc2l6ZS8yMDtcclxuICAgIGxlZnQ6ICRwdXNoLXNpemUvMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkcHVzaC1zaXplLzEuMjU7XHJcbiAgICBoZWlnaHQ6ICRwdXNoLXNpemUvMS4yNTtcclxuICAgIGJvcmRlcjogJHB1c2gtc2l6ZS8xNSBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIGJvcmRlci13aWR0aDogMCAwICRwdXNoLXNpemUvMTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICB9XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gIC8vICY6aG92ZXIsXHJcbiAgJi5pcy1wdXNoZWQge1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzMyIDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMikgMCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8zMiBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvOC41IGRhcmtlbigkcHVzaC1jb2xvciwgNDAlKSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS83LjUgdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMzAlKSwgLjgpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDglKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTAgJHB1c2gtc2l6ZS82IGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgMCAkcHVzaC1zaXplLzIwIDAgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHB1c2gtY29sb3IsIDIlKTtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgYm90dG9tOiAkcHVzaC1zaXplLzIwICsgJHB1c2gtc2l6ZS8xNTtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnB1c2gtLXNrZXVvIHtcclxuICBib3gtc2hhZG93OlxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzI0IDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMjQpICRwdXNoLXNpemUvNjAgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIHRyYW5zcGFyZW50aXplKCRiZywgLjUpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMwKSAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMjAgJHB1c2gtc2l6ZS85LjIgZGFya2VuKCRwdXNoLWNvbG9yLCA1MCUpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvOCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuMyksXHJcbiAgICBpbnNldCAwICRwdXNoLXNpemUvMjAgMCAkcHVzaC1zaXplLzguNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAxNSUpLCAuMyksXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yMCkgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzguNSB0cmFuc3BhcmVudGl6ZShkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksIC44KSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41ICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDEwJSksXHJcbiAgICAwICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8yMCByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiAgJjphY3RpdmUsXHJcbiAgLy8gJjpob3ZlcixcclxuICAmLmlzLXB1c2hlZCB7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICBpbnNldCAwICRwdXNoLXNpemUvMjQgMCBsaWdodGVuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzI0KSAkcHVzaC1zaXplLzYwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMzAgZGFya2VuKCRwdXNoLWNvbG9yLCAxNSUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC41KSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMiAkcHVzaC1jb2xvcixcclxuICAgICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMzApICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8xMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC4zKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvOC41IGRhcmtlbigkcHVzaC1jb2xvciwgNDAlKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIwIDAgMjhweCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAxNSUpLCAuNSksXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzIwKSAkcHVzaC1zaXplLzYwIDI4cHggdHJhbnNwYXJlbnRpemUoZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLCAuOCksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNS41IGRhcmtlbigkcHVzaC1jb2xvciwgMyUpLFxyXG4gICAgICBpbnNldCAwICRwdXNoLXNpemUvMi41ICRwdXNoLXNpemUvNy41IGRhcmtlbigkcHVzaC1jb2xvciwgOCUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxNSUpLFxyXG4gICAgICAwICRwdXNoLXNpemUvNDAgJHB1c2gtc2l6ZS8yMCByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHVzaC1jb2xvciwgMiUpO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJHB1c2gtc2l6ZS80LjU7XHJcbiAgICBsZWZ0OiAkcHVzaC1zaXplLzMuNjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6ICRwdXNoLXNpemUvMi4yO1xyXG4gICAgaGVpZ2h0OiAkcHVzaC1zaXplLzMuMztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDQwJSksIC43KSAwJSwgdHJhbnNwYXJlbnRpemUoJHB1c2gtY29sb3IsIC45KSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XHJcbiAgfVxyXG59XHJcbiIsImJvZHkge1xuICBtYXJnaW46IDFlbTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQ6IG5vcm1hbCAzdncvMSAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNXZ3OyB9XG5cbltjbGFzcyo9XCJwdXNoXCJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDFlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMjkwYTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9waWVkcmFQYXBlbFRpamVyYS9ib3RvbmVzL3RpamVyYTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtczsgfVxuXG4ucHVzaC0tZmxhdCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMy4xMjVweCAwICNkYTJlMGIsIGluc2V0IDAgLTMuMTI1cHggMCAjYWEyNDA5LCBpbnNldCAwIDAgMCAzLjEyNXB4ICNiMzI2MDksIGluc2V0IDAgMCAwIDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIDAgMCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAwIDEwLjg2OTU2NTIycHggYmxhY2ssIGluc2V0IDAgMCAwIDEzLjMzMzMzMzMzcHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDAgMCAxOC4xODE4MTgxOHB4ICNjMjI5MGEsIGluc2V0IDAgNDBweCAxMy4zMzMzMzMzM3B4ICNhYTI0MDksIGluc2V0IDAgMCAxMHB4IDE2LjY2NjY2NjY3cHggIzkxMWYwOCwgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgLnB1c2gtLWZsYXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IDYuNjY2NjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgNi42NjY2NjY2N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgfVxuICAucHVzaC0tZmxhdDphY3RpdmUsIC5wdXNoLS1mbGF0LmlzLXB1c2hlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzLjEyNXB4IDAgI2RhMmUwYiwgaW5zZXQgMCAtMy4xMjVweCAwICNhYTI0MDksIGluc2V0IDAgMCAwIDMuMTI1cHggI2IzMjYwOSwgaW5zZXQgMCAwIDAgOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgMCAwIDEwcHggIzYxMTQwNSwgaW5zZXQgMCAwIDAgMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAgMTMuMzMzMzMzMzNweCByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMiksIGluc2V0IDAgMCAwIDE4LjE4MTgxODE4cHggI2IzMjYwOSwgaW5zZXQgMCA0MHB4IDEzLjMzMzMzMzMzcHggIzliMjEwOCwgaW5zZXQgMCAwIDEwcHggMTYuNjY2NjY2NjdweCAjNzkxYTA2LCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLWZsYXQ6YWN0aXZlOmFmdGVyLCAucHVzaC0tZmxhdC5pcy1wdXNoZWQ6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAxMS42NjY2NjY2N3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XG5cbi5wdXNoLS1za2V1byB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNC4xNjY2NjY2N3B4IDAgI2RhMmUwYiwgaW5zZXQgMCAtNC4xNjY2NjY2N3B4IDEuNjY2NjY2NjdweCAjYWEyNDA5LCAwIDAgMS42NjY2NjY2N3B4ICNjMjI5MGEsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggIzc5MWEwNiwgaW5zZXQgMCAwIDMuMzMzMzMzMzNweCByZ2JhKDUxLCA1MSwgNTEsIDAuNSksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgLTMuMzMzMzMzMzNweCAyLjVweCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KSwgaW5zZXQgMCAwIDEuNjY2NjY2NjdweCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAwLjgzMzMzMzMzcHggMTAuODY5NTY1MjJweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMi41cHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDVweCAwIDExLjc2NDcwNTg4cHggcmdiYSgyNDQsIDcxLCAzNywgMC43KSwgaW5zZXQgMCAtNXB4IDEuNjY2NjY2NjdweCAxMS43NjQ3MDU4OHB4IHJnYmEoMTQ1LCAzMSwgOCwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYzIyOTBhLCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjYWEyNDA5LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM5MTFmMDgsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAucHVzaC0tc2tldW86YWN0aXZlLCAucHVzaC0tc2tldW8uaXMtcHVzaGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDQuMTY2NjY2NjdweCAwICNkYTJlMGIsIGluc2V0IDAgLTQuMTY2NjY2NjdweCAxLjY2NjY2NjY3cHggI2FhMjQwOSwgMCAwIDEuNjY2NjY2NjdweCAjYzIyOTBhLCBpbnNldCAwIDAgMy4zMzMzMzMzM3B4ICM3OTFhMDYsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggcmdiYSg1MSwgNTEsIDUxLCAwLjUpLCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIC0zLjMzMzMzMzMzcHggMi41cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCAjNjExNDA1LCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDEwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpLCBpbnNldCAwIDAgMi41cHggMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMy4zMzMzMzMzM3B4IHJnYmEoMjQ3LCAxMzMsIDExMCwgMC4yKSwgaW5zZXQgMCA1cHggMCAyOHB4IHJnYmEoMjQ0LCA3MSwgMzcsIDAuNSksIGluc2V0IDAgLTVweCAxLjY2NjY2NjY3cHggMjhweCByZ2JhKDk3LCAyMCwgNSwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYjMyNjA5LCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjOWIyMTA4LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM3OTFhMDYsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLXNrZXVvOmFjdGl2ZTpiZWZvcmUsIC5wdXNoLS1za2V1by5pcy1wdXNoZWQ6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IC41OyB9XG4gIC5wdXNoLS1za2V1bzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIyLjIyMjIyMjIycHg7XG4gICAgbGVmdDogMjcuNzc3Nzc3NzhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDVweDtcbiAgICBoZWlnaHQ6IDMwLjMwMzAzMDNweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTAsIDE3MywgMTU4LCAwLjMpIDAlLCByZ2JhKDE5NCwgNDEsIDEwLCAwLjEpIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BotonArcadeTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonArcadeTijeraComponent", function() { return BotonArcadeTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonArcadeTijeraComponent = /** @class */ (function () {
    function BotonArcadeTijeraComponent() {
        this.miClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BotonArcadeTijeraComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BotonArcadeTijeraComponent.prototype, "miClick", void 0);
    BotonArcadeTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-arcade-tijera',
            template: __webpack_require__(/*! ./boton-arcade-tijera.component.html */ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.html"),
            styles: [__webpack_require__(/*! ./boton-arcade-tijera.component.scss */ "./src/app/components/boton-arcade-tijera/boton-arcade-tijera.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonArcadeTijeraComponent);
    return BotonArcadeTijeraComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-arcade/boton-arcade.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/boton-arcade/boton-arcade.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"push--flat\"></button>\r\n<button class=\"push--skeuo\"></button>\r\n"

/***/ }),

/***/ "./src/app/components/boton-arcade/boton-arcade.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/boton-arcade/boton-arcade.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 1em;\n  background: #333;\n  color: #ccc;\n  font: normal 3vw/1 'Montserrat', sans-serif;\n  text-align: center;\n  text-transform: uppercase; }\n\nh1 {\n  font-size: 5vw; }\n\n[class*=\"push\"] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border: 0;\n  margin: 1em;\n  outline: none;\n  background-color: #c2290a;\n  background-image: url('Papel3.png');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: box-shadow 200ms; }\n\n.push--flat {\n  box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 10.86956522px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.7), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 5px 0 rgba(0, 0, 0, 0.3); }\n\n.push--flat:after {\n    content: '';\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n    display: block;\n    width: 80px;\n    height: 80px;\n    border: 6.66666667px solid rgba(0, 0, 0, 0.3);\n    border-width: 0 0 6.66666667px;\n    border-radius: 50%;\n    transition-duration: 200ms; }\n\n.push--flat:active, .push--flat.is-pushed {\n    box-shadow: inset 0 3.125px 0 #da2e0b, inset 0 -3.125px 0 #aa2409, inset 0 0 0 3.125px #b32609, inset 0 0 0 8.33333333px #c2290a, inset 0 0 0 10px #611405, inset 0 0 0 11.76470588px black, inset 0 0 0 13.33333333px rgba(247, 133, 110, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 5px 0 rgba(0, 0, 0, 0.3);\n    background-color: #b8270a; }\n\n.push--flat:active:after, .push--flat.is-pushed:after {\n      bottom: 11.66666667px;\n      border-width: 0; }\n\n.push--skeuo {\n  box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 0.83333333px 10.86956522px black, inset 0 0 0.83333333px 12.5px rgba(247, 133, 110, 0.7), inset 0 5px 0 11.76470588px rgba(244, 71, 37, 0.7), inset 0 -5px 1.66666667px 11.76470588px rgba(145, 31, 8, 0.2), inset 0 0 0 18.18181818px #c2290a, inset 0 40px 13.33333333px #aa2409, inset 0 0 10px 16.66666667px #911f08, 0 2.5px 5px rgba(0, 0, 0, 0.5); }\n\n.push--skeuo:active, .push--skeuo.is-pushed {\n    box-shadow: inset 0 4.16666667px 0 #da2e0b, inset 0 -4.16666667px 1.66666667px #aa2409, 0 0 1.66666667px #c2290a, inset 0 0 3.33333333px #791a06, inset 0 0 3.33333333px rgba(51, 51, 51, 0.5), inset 0 0 1.66666667px 8.33333333px #c2290a, inset 0 -3.33333333px 2.5px 10px rgba(51, 51, 51, 0.7), inset 0 0 1.66666667px 10px #611405, inset 0 0 1.66666667px 10px rgba(51, 51, 51, 0.7), inset 0 0 2.5px 11.76470588px black, inset 0 0 0.83333333px 13.33333333px rgba(247, 133, 110, 0.2), inset 0 5px 0 28px rgba(244, 71, 37, 0.5), inset 0 -5px 1.66666667px 28px rgba(97, 20, 5, 0.2), inset 0 0 0 18.18181818px #b32609, inset 0 40px 13.33333333px #9b2108, inset 0 0 10px 16.66666667px #791a06, 0 2.5px 5px rgba(0, 0, 0, 0.5);\n    background-color: #b8270a; }\n\n.push--skeuo:active:before, .push--skeuo.is-pushed:before {\n      opacity: .5; }\n\n.push--skeuo:before {\n    content: '';\n    position: absolute;\n    bottom: 22.22222222px;\n    left: 27.77777778px;\n    display: block;\n    width: 45.45454545px;\n    height: 30.3030303px;\n    background: rgba(247, 133, 110, 0.2);\n    background: linear-gradient(to top, rgba(250, 173, 158, 0.3) 0%, rgba(194, 41, 10, 0.1) 100%);\n    border-radius: 40% 40% 60% 60%;\n    transition: opacity 200ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1hcmNhZGUvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm90b24tYXJjYWRlXFxib3Rvbi1hcmNhZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tYXJjYWRlL2JvdG9uLWFyY2FkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQVc7RUFDWCxnQkFQTztFQVFQLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGNBQWMsRUFBQTs7QUNIaEI7RURNRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBaEJlO0VBaUJmLGFBakJlO0VBa0JmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQXZCZ0M7RUF3QmhDLG1DQUFpRjtFQUNqRixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLHdYQVdxQyxFQUFBOztBQVp2QztJQWVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBcUI7SUFDckIsVUFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQXNCO0lBQ3RCLFlBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3Qyw4QkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLDBCQUEwQixFQUFBOztBQXpCOUI7SUErQkksd1hBV3FDO0lBQ3JDLHlCQUF5QyxFQUFBOztBQTNDN0M7TUE4Q00scUJBQXFDO01BQ3JDLGVBQWUsRUFBQTs7QUFLckI7RUFDRSwrdEJBaUJpRCxFQUFBOztBQWxCbkQ7SUF1QkksNHNCQWlCaUQ7SUFDakQseUJBQXlDLEVBQUE7O0FBekM3QztNQTRDTSxXQUFXLEVBQUE7O0FBNUNqQjtJQWlESSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFzQjtJQUN0QixtQkFBb0I7SUFDcEIsY0FBYztJQUNkLG9CQUFxQjtJQUNyQixvQkFBc0I7SUFDdEIsb0NBQXlEO0lBQ3pELDZGQUEySDtJQUMzSCw4QkFBOEI7SUFDOUIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvdG9uLWFyY2FkZS9ib3Rvbi1hcmNhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICMzMzM7XHJcbiRwdXNoLWNvbG9yOiBoc2xhKDEwLCA5MCUsIDQwJSwgMSk7XHJcblxyXG4kcHVzaC1zaXplOiAxMDBweDtcclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQ6ICRiZztcclxuICBjb2xvcjogI2NjYztcclxuICBmb250OiBub3JtYWwgM3Z3LzEgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbn1cclxuW2NsYXNzKj1cInB1c2hcIl0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6ICRwdXNoLXNpemU7XHJcbiAgaGVpZ2h0OiAkcHVzaC1zaXplO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDFlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXNoLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9waWVkcmFQYXBlbFRpamVyYS9ib3RvbmVzL1BhcGVsMy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXM7XHJcbn1cclxuLnB1c2gtLWZsYXQge1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICBpbnNldCAwICRwdXNoLXNpemUvMzIgMCBsaWdodGVuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMikgMCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMzIgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzEyICRwdXNoLWNvbG9yLFxyXG4gICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzkuMiBkYXJrZW4oJHB1c2gtY29sb3IsIDUwJSksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzcuNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuMyksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLFxyXG4gICAgMCAkcHVzaC1zaXplLzIwIDAgcmdiYSgwLCAwLCAwLCAuMyk7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRwdXNoLXNpemUvMjA7XHJcbiAgICBsZWZ0OiAkcHVzaC1zaXplLzEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogJHB1c2gtc2l6ZS8xLjI1O1xyXG4gICAgaGVpZ2h0OiAkcHVzaC1zaXplLzEuMjU7XHJcbiAgICBib3JkZXI6ICRwdXNoLXNpemUvMTUgc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAkcHVzaC1zaXplLzE1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSxcclxuICAvLyAmOmhvdmVyLFxyXG4gICYuaXMtcHVzaGVkIHtcclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8zMiAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMzIpIDAgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMzIgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvMTAgZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzguNSBkYXJrZW4oJHB1c2gtY29sb3IsIDQwJSksXHJcbiAgICAgIGluc2V0IDAgMCAwICRwdXNoLXNpemUvNy41IHRyYW5zcGFyZW50aXplKGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDMwJSksIC44KSxcclxuICAgICAgaW5zZXQgMCAwIDAgJHB1c2gtc2l6ZS81LjUgZGFya2VuKCRwdXNoLWNvbG9yLCAzJSksXHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA4JSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEwICRwdXNoLXNpemUvNiBkYXJrZW4oJHB1c2gtY29sb3IsIDE1JSksXHJcbiAgICAgIDAgJHB1c2gtc2l6ZS8yMCAwIHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwdXNoLWNvbG9yLCAyJSk7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJvdHRvbTogJHB1c2gtc2l6ZS8yMCArICRwdXNoLXNpemUvMTU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wdXNoLS1za2V1byB7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yNCAwIGxpZ2h0ZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzI0KSAkcHVzaC1zaXplLzYwIGRhcmtlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCBkYXJrZW4oJHB1c2gtY29sb3IsIDE1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8zMCB0cmFuc3BhcmVudGl6ZSgkYmcsIC41KSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8zMCkgJHB1c2gtc2l6ZS80MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS8xMCBkYXJrZW4oJHB1c2gtY29sb3IsIDIwJSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTIwICRwdXNoLXNpemUvOS4yIGRhcmtlbigkcHVzaC1jb2xvciwgNTAlKSxcclxuICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEyMCAkcHVzaC1zaXplLzggdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMzAlKSwgLjMpLFxyXG4gICAgaW5zZXQgMCAkcHVzaC1zaXplLzIwIDAgJHB1c2gtc2l6ZS84LjUgdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMTUlKSwgLjMpLFxyXG4gICAgaW5zZXQgMCAoLSRwdXNoLXNpemUvMjApICRwdXNoLXNpemUvNjAgJHB1c2gtc2l6ZS84LjUgdHJhbnNwYXJlbnRpemUoZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLCAuOCksXHJcbiAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSAkcHVzaC1jb2xvcixcclxuICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yLjUgJHB1c2gtc2l6ZS83LjUgZGFya2VuKCRwdXNoLWNvbG9yLCA1JSksXHJcbiAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS8xMCAkcHVzaC1zaXplLzYgZGFya2VuKCRwdXNoLWNvbG9yLCAxMCUpLFxyXG4gICAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMjAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcblxyXG4gICY6YWN0aXZlLFxyXG4gIC8vICY6aG92ZXIsXHJcbiAgJi5pcy1wdXNoZWQge1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzI0IDAgbGlnaHRlbigkcHVzaC1jb2xvciwgNSUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yNCkgJHB1c2gtc2l6ZS82MCBkYXJrZW4oJHB1c2gtY29sb3IsIDUlKSxcclxuICAgICAgMCAwICRwdXNoLXNpemUvNjAgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzMwIGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMzAgdHJhbnNwYXJlbnRpemUoJGJnLCAuNSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTIgJHB1c2gtY29sb3IsXHJcbiAgICAgIGluc2V0IDAgKC0kcHVzaC1zaXplLzMwKSAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMTAgdHJhbnNwYXJlbnRpemUoJGJnLCAuMyksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzYwICRwdXNoLXNpemUvMTAgZGFya2VuKCRwdXNoLWNvbG9yLCAyMCUpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS82MCAkcHVzaC1zaXplLzEwIHRyYW5zcGFyZW50aXplKCRiZywgLjMpLFxyXG4gICAgICBpbnNldCAwIDAgJHB1c2gtc2l6ZS80MCAkcHVzaC1zaXplLzguNSBkYXJrZW4oJHB1c2gtY29sb3IsIDQwJSksXHJcbiAgICAgIGluc2V0IDAgMCAkcHVzaC1zaXplLzEyMCAkcHVzaC1zaXplLzcuNSB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuOCksXHJcbiAgICAgIGluc2V0IDAgJHB1c2gtc2l6ZS8yMCAwIDI4cHggdHJhbnNwYXJlbnRpemUobGlnaHRlbigkcHVzaC1jb2xvciwgMTUlKSwgLjUpLFxyXG4gICAgICBpbnNldCAwICgtJHB1c2gtc2l6ZS8yMCkgJHB1c2gtc2l6ZS82MCAyOHB4IHRyYW5zcGFyZW50aXplKGRhcmtlbigkcHVzaC1jb2xvciwgMjAlKSwgLjgpLFxyXG4gICAgICBpbnNldCAwIDAgMCAkcHVzaC1zaXplLzUuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDMlKSxcclxuICAgICAgaW5zZXQgMCAkcHVzaC1zaXplLzIuNSAkcHVzaC1zaXplLzcuNSBkYXJrZW4oJHB1c2gtY29sb3IsIDglKSxcclxuICAgICAgaW5zZXQgMCAwICRwdXNoLXNpemUvMTAgJHB1c2gtc2l6ZS82IGRhcmtlbigkcHVzaC1jb2xvciwgMTUlKSxcclxuICAgICAgMCAkcHVzaC1zaXplLzQwICRwdXNoLXNpemUvMjAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHB1c2gtY29sb3IsIDIlKTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRwdXNoLXNpemUvNC41O1xyXG4gICAgbGVmdDogJHB1c2gtc2l6ZS8zLjY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkcHVzaC1zaXplLzIuMjtcclxuICAgIGhlaWdodDogJHB1c2gtc2l6ZS8zLjM7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCAzMCUpLCAuOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudGl6ZShsaWdodGVuKCRwdXNoLWNvbG9yLCA0MCUpLCAuNykgMCUsIHRyYW5zcGFyZW50aXplKCRwdXNoLWNvbG9yLCAuOSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MCUgNDAlIDYwJSA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gIH1cclxufVxyXG4iLCJib2R5IHtcbiAgbWFyZ2luOiAxZW07XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250OiBub3JtYWwgM3Z3LzEgJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuaDEge1xuICBmb250LXNpemU6IDV2dzsgfVxuXG5bY2xhc3MqPVwicHVzaFwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAxZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjI5MGE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGllZHJhUGFwZWxUaWplcmEvYm90b25lcy9QYXBlbDMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtczsgfVxuXG4ucHVzaC0tZmxhdCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMy4xMjVweCAwICNkYTJlMGIsIGluc2V0IDAgLTMuMTI1cHggMCAjYWEyNDA5LCBpbnNldCAwIDAgMCAzLjEyNXB4ICNiMzI2MDksIGluc2V0IDAgMCAwIDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIDAgMCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAwIDEwLjg2OTU2NTIycHggYmxhY2ssIGluc2V0IDAgMCAwIDEzLjMzMzMzMzMzcHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDAgMCAxOC4xODE4MTgxOHB4ICNjMjI5MGEsIGluc2V0IDAgNDBweCAxMy4zMzMzMzMzM3B4ICNhYTI0MDksIGluc2V0IDAgMCAxMHB4IDE2LjY2NjY2NjY3cHggIzkxMWYwOCwgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgLnB1c2gtLWZsYXQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IDYuNjY2NjY2NjdweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgNi42NjY2NjY2N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtczsgfVxuICAucHVzaC0tZmxhdDphY3RpdmUsIC5wdXNoLS1mbGF0LmlzLXB1c2hlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzLjEyNXB4IDAgI2RhMmUwYiwgaW5zZXQgMCAtMy4xMjVweCAwICNhYTI0MDksIGluc2V0IDAgMCAwIDMuMTI1cHggI2IzMjYwOSwgaW5zZXQgMCAwIDAgOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgMCAwIDEwcHggIzYxMTQwNSwgaW5zZXQgMCAwIDAgMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAgMTMuMzMzMzMzMzNweCByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMiksIGluc2V0IDAgMCAwIDE4LjE4MTgxODE4cHggI2IzMjYwOSwgaW5zZXQgMCA0MHB4IDEzLjMzMzMzMzMzcHggIzliMjEwOCwgaW5zZXQgMCAwIDEwcHggMTYuNjY2NjY2NjdweCAjNzkxYTA2LCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLWZsYXQ6YWN0aXZlOmFmdGVyLCAucHVzaC0tZmxhdC5pcy1wdXNoZWQ6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAxMS42NjY2NjY2N3B4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwOyB9XG5cbi5wdXNoLS1za2V1byB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgNC4xNjY2NjY2N3B4IDAgI2RhMmUwYiwgaW5zZXQgMCAtNC4xNjY2NjY2N3B4IDEuNjY2NjY2NjdweCAjYWEyNDA5LCAwIDAgMS42NjY2NjY2N3B4ICNjMjI5MGEsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggIzc5MWEwNiwgaW5zZXQgMCAwIDMuMzMzMzMzMzNweCByZ2JhKDUxLCA1MSwgNTEsIDAuNSksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggOC4zMzMzMzMzM3B4ICNjMjI5MGEsIGluc2V0IDAgLTMuMzMzMzMzMzNweCAyLjVweCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC43KSwgaW5zZXQgMCAwIDEuNjY2NjY2NjdweCAxMHB4ICM2MTE0MDUsIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAwLjgzMzMzMzMzcHggMTAuODY5NTY1MjJweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMi41cHggcmdiYSgyNDcsIDEzMywgMTEwLCAwLjcpLCBpbnNldCAwIDVweCAwIDExLjc2NDcwNTg4cHggcmdiYSgyNDQsIDcxLCAzNywgMC43KSwgaW5zZXQgMCAtNXB4IDEuNjY2NjY2NjdweCAxMS43NjQ3MDU4OHB4IHJnYmEoMTQ1LCAzMSwgOCwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYzIyOTBhLCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjYWEyNDA5LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM5MTFmMDgsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAucHVzaC0tc2tldW86YWN0aXZlLCAucHVzaC0tc2tldW8uaXMtcHVzaGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDQuMTY2NjY2NjdweCAwICNkYTJlMGIsIGluc2V0IDAgLTQuMTY2NjY2NjdweCAxLjY2NjY2NjY3cHggI2FhMjQwOSwgMCAwIDEuNjY2NjY2NjdweCAjYzIyOTBhLCBpbnNldCAwIDAgMy4zMzMzMzMzM3B4ICM3OTFhMDYsIGluc2V0IDAgMCAzLjMzMzMzMzMzcHggcmdiYSg1MSwgNTEsIDUxLCAwLjUpLCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDguMzMzMzMzMzNweCAjYzIyOTBhLCBpbnNldCAwIC0zLjMzMzMzMzMzcHggMi41cHggMTBweCByZ2JhKDUxLCA1MSwgNTEsIDAuNyksIGluc2V0IDAgMCAxLjY2NjY2NjY3cHggMTBweCAjNjExNDA1LCBpbnNldCAwIDAgMS42NjY2NjY2N3B4IDEwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjcpLCBpbnNldCAwIDAgMi41cHggMTEuNzY0NzA1ODhweCBibGFjaywgaW5zZXQgMCAwIDAuODMzMzMzMzNweCAxMy4zMzMzMzMzM3B4IHJnYmEoMjQ3LCAxMzMsIDExMCwgMC4yKSwgaW5zZXQgMCA1cHggMCAyOHB4IHJnYmEoMjQ0LCA3MSwgMzcsIDAuNSksIGluc2V0IDAgLTVweCAxLjY2NjY2NjY3cHggMjhweCByZ2JhKDk3LCAyMCwgNSwgMC4yKSwgaW5zZXQgMCAwIDAgMTguMTgxODE4MThweCAjYjMyNjA5LCBpbnNldCAwIDQwcHggMTMuMzMzMzMzMzNweCAjOWIyMTA4LCBpbnNldCAwIDAgMTBweCAxNi42NjY2NjY2N3B4ICM3OTFhMDYsIDAgMi41cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjgyNzBhOyB9XG4gICAgLnB1c2gtLXNrZXVvOmFjdGl2ZTpiZWZvcmUsIC5wdXNoLS1za2V1by5pcy1wdXNoZWQ6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IC41OyB9XG4gIC5wdXNoLS1za2V1bzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIyLjIyMjIyMjIycHg7XG4gICAgbGVmdDogMjcuNzc3Nzc3NzhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDVweDtcbiAgICBoZWlnaHQ6IDMwLjMwMzAzMDNweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMTMzLCAxMTAsIDAuMik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNTAsIDE3MywgMTU4LCAwLjMpIDAlLCByZ2JhKDE5NCwgNDEsIDEwLCAwLjEpIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA0MCUgNjAlIDYwJTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton-arcade/boton-arcade.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/boton-arcade/boton-arcade.component.ts ***!
  \*******************************************************************/
/*! exports provided: BotonArcadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonArcadeComponent", function() { return BotonArcadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonArcadeComponent = /** @class */ (function () {
    function BotonArcadeComponent() {
    }
    BotonArcadeComponent.prototype.ngOnInit = function () {
    };
    BotonArcadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-arcade',
            template: __webpack_require__(/*! ./boton-arcade.component.html */ "./src/app/components/boton-arcade/boton-arcade.component.html"),
            styles: [__webpack_require__(/*! ./boton-arcade.component.scss */ "./src/app/components/boton-arcade/boton-arcade.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonArcadeComponent);
    return BotonArcadeComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-login/boton-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/boton-login/boton-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn draw-border\"><i class=\"fa fa-user\"></i> ENTRAR</button>\r\n"

/***/ }),

/***/ "./src/app/components/boton-login/boton-login.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/boton-login/boton-login.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".draw-border {\n  box-shadow: inset 0 0 0 4px #ffffff;\n  color: #ffffff;\n  transition: color 0.25s 0.08333333s;\n  position: relative; }\n  .draw-border::before, .draw-border::after {\n    border: 0 solid transparent;\n    box-sizing: border-box;\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 0;\n    height: 0;\n    bottom: 0;\n    right: 0; }\n  .draw-border::before {\n    border-bottom-width: 4px;\n    border-left-width: 4px; }\n  .draw-border::after {\n    border-top-width: 4px;\n    border-right-width: 4px; }\n  .draw-border:hover {\n    color: orange; }\n  .draw-border:hover::before, .draw-border:hover::after {\n      border-color: orange;\n      transition: border-color 0s, width 0.25s, height 0.25s;\n      width: 100%;\n      height: 100%; }\n  .draw-border:hover::before {\n      transition-delay: 0s, 0s, 0.25s; }\n  .draw-border:hover::after {\n      transition-delay: 0s, 0.25s, 0s; }\n  .btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font-size: 700 2rem;\n  padding: 1em 2em;\n  letter-spacing: 0.05rem; }\n  .btn:focus {\n    outline: 2px dotted #55d7dc; }\n  body {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1sb2dpbi9DOlxcVXNlcnNcXEluZmlzdGlvdGljb3NcXERvY3VtZW50c1xcVVROIEZSQVxcTnVldmEgY2FycGV0YSAoMylcXFRQLU1pLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib3Rvbi1sb2dpblxcYm90b24tbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RBO0VBakRFLG1DQWtEbUM7RUFqRG5DLGNBaURtQztFQWhEbkMsbUNBQXVDO0VBQ3ZDLGtCQUFrQixFQUFBO0VBRWxCO0lBRUUsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQUUsU0FBUztJQUVuQixTQUFlO0lBQ2YsUUFBaUIsRUFBQTtFQUduQjtJQUdFLHdCQTZCOEM7SUE1QjlDLHNCQTRCOEMsRUFBQTtFQXpCaEQ7SUFHRSxxQkFzQjhDO0lBckI5Qyx1QkFxQjhDLEVBQUE7RUFsQmhEO0lBQ0UsYUFpQnlDLEVBQUE7RUFmekM7TUFFRSxvQkFhdUM7TUFadkMsc0RBdkNpSDtNQXdDakgsV0FBVztNQUNYLFlBQVksRUFBQTtFQUdkO01BQVksK0JBNUN1RyxFQUFBO0VBOENuSDtNQUFXLCtCQUFtQyxFQUFBO0VBU2xEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7RUFSekI7SUFVWSwyQkFBMkIsRUFBQTtFQUl2QztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tbG9naW4vYm90b24tbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLz09PSBEcmF3aW5nIGVmZmVjdFxyXG5cclxuQG1peGluIGJ0bi1ib3JkZXItZHJhd2luZygkY29sb3I6ICNjY2MsICRob3ZlcjogYmxhY2ssICR3aWR0aDogMnB4LCAkdmVydGljYWw6IHRvcCwgJGhvcml6b250YWw6IGxlZnQsICRkdXJhdGlvbjogMC4yNXMpIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkd2lkdGggJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgJGR1cmF0aW9uICRkdXJhdGlvbi8zO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDtcclxuXHJcbiAgICAjeyR2ZXJ0aWNhbH06IDA7XHJcbiAgICAjeyRob3Jpem9udGFsfTogMDtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICAkaC1zaWRlOiBpZigkaG9yaXpvbnRhbCA9PSAnbGVmdCcsICdyaWdodCcsICdsZWZ0Jyk7XHJcblxyXG4gICAgYm9yZGVyLSN7JHZlcnRpY2FsfS13aWR0aDogJHdpZHRoO1xyXG4gICAgYm9yZGVyLSN7JGgtc2lkZX0td2lkdGg6ICR3aWR0aDtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgICR2LXNpZGU6IGlmKCR2ZXJ0aWNhbCA9PSAndG9wJywgJ2JvdHRvbScsICd0b3AnKTtcclxuXHJcbiAgICBib3JkZXItI3skdi1zaWRlfS13aWR0aDogJHdpZHRoO1xyXG4gICAgYm9yZGVyLSN7JGhvcml6b250YWx9LXdpZHRoOiAkd2lkdGg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaG92ZXI7XHJcblxyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRob3ZlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAkZHVyYXRpb24sIGhlaWdodCAkZHVyYXRpb247XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkZHVyYXRpb247IH1cclxuXHJcbiAgICAmOjphZnRlciB7IHRyYW5zaXRpb24tZGVsYXk6IDBzLCAkZHVyYXRpb24sIDBzOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHJhdy1ib3JkZXIge1xyXG4gIEBpbmNsdWRlIGJ0bi1ib3JkZXItZHJhd2luZygjZmZmZmZmLCBvcmFuZ2UsIDRweCwgYm90dG9tLCByaWdodCk7XHJcbn1cclxuXHJcbi8vPT09IEJ1dHRvbiBzdHlsaW5nLCBzZW1pLWlnbm9yZVxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDcwMCAycmVtO1xyXG4gIC8vIGZvbnQ6IDcwMCAxLjJyZW0gJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xyXG5cclxuICAmOmZvY3VzIHsgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjOyB9XHJcbn1cclxuXHJcbi8vPT09IFBlbiBzdHlsaW5nLCBpZ25vcmVcclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzFmMWEyNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/boton-login/boton-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/boton-login/boton-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: BotonLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonLoginComponent", function() { return BotonLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonLoginComponent = /** @class */ (function () {
    function BotonLoginComponent() {
    }
    BotonLoginComponent.prototype.ngOnInit = function () {
    };
    BotonLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-login',
            template: __webpack_require__(/*! ./boton-login.component.html */ "./src/app/components/boton-login/boton-login.component.html"),
            styles: [__webpack_require__(/*! ./boton-login.component.scss */ "./src/app/components/boton-login/boton-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonLoginComponent);
    return BotonLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/boton-retro/boton-retro.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/boton-retro/boton-retro.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"eightbit-btn eightbit-btn--reset\" [ngClass]=\"{'fade-in': efecto === true}\">{{textoBoton}}</a>\r\n"

/***/ }),

/***/ "./src/app/components/boton-retro/boton-retro.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/boton-retro/boton-retro.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Press Start 2P';\n  src: url('PressStart2P.ttf') format(\"truetype\"); }\n\nbody {\n  text-align: center;\n  padding: 30px; }\n\n.eightbit-btn {\n  background: #92CD41;\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  font-size: 20px;\n  padding: 10px;\n  font-family: 'Press Start 2P', cursive;\n  text-decoration: none;\n  color: white;\n  box-shadow: inset -4px -4px 0px 0px #4AA52E; }\n\n.eightbit-btn:hover, .eightbit-btn:focus {\n    background: #76c442;\n    box-shadow: inset -6px -6px 0px 0px #4AA52E; }\n\n.eightbit-btn:active {\n    box-shadow: inset 4px 4px 0px 0px #4AA52E; }\n\n.eightbit-btn:before, .eightbit-btn:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    box-sizing: content-box; }\n\n.eightbit-btn:before {\n    top: -6px;\n    left: 0;\n    border-top: 6px black solid;\n    border-bottom: 6px black solid; }\n\n.eightbit-btn:after {\n    left: -6px;\n    top: 0;\n    border-left: 6px black solid;\n    border-right: 6px black solid; }\n\n.eightbit-btn--reset {\n    background: #E76E55;\n    box-shadow: inset -4px -4px 0px 0px #8C2022; }\n\n.eightbit-btn--reset:hover, .eightbit-btn--reset:focus {\n      background: #CE372B;\n      box-shadow: inset -6px -6px 0px 0px #8C2022; }\n\n.eightbit-btn--reset:active {\n      box-shadow: inset 4px 4px 0px 0px #8C2022; }\n\n.eightbit-btn--proceed {\n    background: #F7D51D;\n    box-shadow: inset -4px -4px 0px 0px #E59400; }\n\n.eightbit-btn--proceed:hover, .eightbit-btn--proceed:focus {\n      background: #F2C409;\n      box-shadow: inset -6px -6px 0px 0px #E59400; }\n\n.eightbit-btn--proceed:active {\n      box-shadow: inset 4px 4px 0px 0px #E59400; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\nbody {\n  font-family: sans-serif;\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 30px;\n  font-family: 'Maven Pro', sans-serif;\n  text-align: center; }\n\nh1 {\n  font-size: 2.8rem;\n  line-height: 3.4rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh1, h2 {\n  font-family: 'Press Start 2P', cursive; }\n\np {\n  font-size: 1.25rem;\n  line-height: 1.75rem; }\n\nhr {\n  margin: 40px auto;\n  max-width: 100px;\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  padding: 0; }\n\n.pen-intro {\n  text-align: center; }\n\n.fade-in {\n  animation: fadeIn ease 5s;\n  -webkit-animation: fadeIn ease 5s;\n  -moz-animation: fadeIn ease 5s;\n  -o-animation: fadeIn ease 5s;\n  -ms-animation: fadeIn ease 5s; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi1yZXRyby9DOlxcVXNlcnNcXEluZmlzdGlvdGljb3NcXERvY3VtZW50c1xcVVROIEZSQVxcTnVldmEgY2FycGV0YSAoMylcXFRQLU1pLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib3Rvbi1yZXRyb1xcYm90b24tcmV0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsK0NBQW9GLEVBQUE7O0FBR3RGO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFtQmY7RUFDRSxtQkFkeUI7RUFlekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiwyQ0FyQnFCLEVBQUE7O0FBV3ZCO0lBY00sbUJBMUJ5QjtJQTJCekIsMkNBMUJpQixFQUFBOztBQVd2QjtJQW1CTSx5Q0E5QmlCLEVBQUE7O0FBV3ZCO0lBd0JFLFdBQVc7SUFDUCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUIsRUFBQTs7QUE1QjdCO0lBZ0NNLFNBaERhO0lBaURiLE9BQU87SUFDUCwyQkFBc0M7SUFDdEMsOEJBQXlDLEVBQUE7O0FBbkMvQztJQXVDTSxVQXZEYTtJQXdEYixNQUFNO0lBQ04sNEJBQXVDO0lBQ3ZDLDZCQUF3QyxFQUFBOztBQUc1QztJQUNJLG1CQW5EMkI7SUFvRDNCLDJDQWxEdUIsRUFBQTs7QUFnRDFCO01BTU8sbUJBdkQyQjtNQXdEM0IsMkNBdkRtQixFQUFBOztBQWdEMUI7TUFXTyx5Q0EzRG1CLEVBQUE7O0FBZ0UzQjtJQUNJLG1CQXZFeUI7SUF3RXpCLDJDQXRFcUIsRUFBQTs7QUFvRXhCO01BTU8sbUJBM0V5QjtNQTRFekIsMkNBM0VpQixFQUFBOztBQW9FeEI7TUFXTyx5Q0EvRWlCLEVBQUE7O0FBNkYzQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHVCQUF1QjtFQUN2QixpQkFSd0I7RUFTeEIsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxzQ0FBc0MsRUFBQTs7QUFHeEM7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUkvQjtFQUNFO0lBQ0UsVUFBUyxFQUFBO0VBRVg7SUFDRSxVQUFTLEVBQUEsRUFBQTs7QUFhYjtFQUNFO0lBQ0UsVUFBUyxFQUFBO0VBRVg7SUFDRSxVQUFTLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24tcmV0cm8vYm90b24tcmV0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJztcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wcmVzc19zdGFydF8ycC9QcmVzc1N0YXJ0MlAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuJG91dGxpbmUtd2lkdGg6IDZweDtcclxuJHNoYWRvdy13aWR0aDogNHB4O1xyXG5cclxuJGJ1dHRvbi1iYWNrZ3JvdW5kOiAjOTJDRDQxO1xyXG4kc2VjLWJ1dHRvbi1iYWNrZ3JvdW5kOiAjNzZjNDQyO1xyXG4kc2hhZG93LWNvbG9yOiAgIzRBQTUyRTtcclxuXHJcbiRhbHQtYnV0dG9uLWJhY2tncm91bmQ6ICNGN0Q1MUQ7XHJcbiRhbHQtc2VjLWJ1dHRvbi1iYWNrZ3JvdW5kOiAjRjJDNDA5O1xyXG4kYWx0LXNoYWRvdy1jb2xvcjogICNFNTk0MDA7XHJcblxyXG4kcmVzZXQtYnV0dG9uLWJhY2tncm91bmQ6ICNFNzZFNTU7XHJcbiRyZXNldC1zZWMtYnV0dG9uLWJhY2tncm91bmQ6ICNDRTM3MkI7XHJcbiRyZXNldC1zaGFkb3ctY29sb3I6ICAjOEMyMDIyO1xyXG5cclxuXHJcbi5laWdodGJpdC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICRidXR0b24tYmFja2dyb3VuZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0ICgtJHNoYWRvdy13aWR0aCkgKC0kc2hhZG93LXdpZHRoKSAwcHggMHB4ICRzaGFkb3ctY29sb3I7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRzZWMtYnV0dG9uLWJhY2tncm91bmQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0ICgtJHNoYWRvdy13aWR0aCoxLjUpICgtJHNoYWRvdy13aWR0aCoxLjUpIDBweCAwcHggJHNoYWRvdy1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgJHNoYWRvdy13aWR0aCAkc2hhZG93LXdpZHRoIDBweCAwcHggJHNoYWRvdy1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgICB0b3A6IC0kb3V0bGluZS13aWR0aDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm9yZGVyLXRvcDogJG91dGxpbmUtd2lkdGggYmxhY2sgc29saWQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICRvdXRsaW5lLXdpZHRoIGJsYWNrIHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICAgIGxlZnQ6IC0kb3V0bGluZS13aWR0aDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogJG91dGxpbmUtd2lkdGggYmxhY2sgc29saWQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogJG91dGxpbmUtd2lkdGggYmxhY2sgc29saWQ7XHJcbiAgfVxyXG5cclxuICAmLS1yZXNldCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRyZXNldC1idXR0b24tYmFja2dyb3VuZDtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgKC0kc2hhZG93LXdpZHRoKSAoLSRzaGFkb3ctd2lkdGgpIDBweCAwcHggJHJlc2V0LXNoYWRvdy1jb2xvcjtcclxuXHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHJlc2V0LXNlYy1idXR0b24tYmFja2dyb3VuZDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICgtJHNoYWRvdy13aWR0aCoxLjUpICgtJHNoYWRvdy13aWR0aCoxLjUpIDBweCAwcHggJHJlc2V0LXNoYWRvdy1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgJHNoYWRvdy13aWR0aCAkc2hhZG93LXdpZHRoIDBweCAwcHggJHJlc2V0LXNoYWRvdy1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG4gICYtLXByb2NlZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYWx0LWJ1dHRvbi1iYWNrZ3JvdW5kO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAoLSRzaGFkb3ctd2lkdGgpICgtJHNoYWRvdy13aWR0aCkgMHB4IDBweCAkYWx0LXNoYWRvdy1jb2xvcjtcclxuXHJcbiAgICAgICY6aG92ZXIsXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGFsdC1zZWMtYnV0dG9uLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAoLSRzaGFkb3ctd2lkdGgqMS41KSAoLSRzaGFkb3ctd2lkdGgqMS41KSAwcHggMHB4ICRhbHQtc2hhZG93LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAkc2hhZG93LXdpZHRoICRzaGFkb3ctd2lkdGggMHB4IDBweCAkYWx0LXNoYWRvdy1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHTE9CQUwgU0VUVVBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJHdyYXBwZXItbWF4LXdpZHRoOiAxMDAwcHg7XHJcblxyXG4qLCo6YmVmb3JlLCo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIG1heC13aWR0aDogJHdyYXBwZXItbWF4LXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXZlbiBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjRyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbmgxLGgyIHtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnBlbi1pbnRybyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxuICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/boton-retro/boton-retro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/boton-retro/boton-retro.component.ts ***!
  \*****************************************************************/
/*! exports provided: BotonRetroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonRetroComponent", function() { return BotonRetroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonRetroComponent = /** @class */ (function () {
    function BotonRetroComponent() {
    }
    BotonRetroComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BotonRetroComponent.prototype, "textoBoton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BotonRetroComponent.prototype, "efecto", void 0);
    BotonRetroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton-retro',
            template: __webpack_require__(/*! ./boton-retro.component.html */ "./src/app/components/boton-retro/boton-retro.component.html"),
            styles: [__webpack_require__(/*! ./boton-retro.component.scss */ "./src/app/components/boton-retro/boton-retro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonRetroComponent);
    return BotonRetroComponent;
}());



/***/ }),

/***/ "./src/app/components/boton/boton.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/boton/boton.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Poppins:900i');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.cta {\r\n    display: flex;\r\n    padding: 10px 45px;\r\n    text-decoration: none;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 40px;\r\n    color: white;\r\n    background: #6225E6;\r\n    transition: 1s;\r\n    box-shadow: 6px 6px 0 black;\r\n    -webkit-transform: skewX(-15deg);\r\n            transform: skewX(-15deg);\r\n}\r\n\r\n.cta:focus {\r\n   outline: none;\r\n}\r\n\r\n.cta:hover {\r\n    transition: 0.5s;\r\n    box-shadow: 10px 10px 0 #FBC638;\r\n}\r\n\r\n.cta span:nth-child(2) {\r\n    transition: 0.5s;\r\n    margin-right: 0px;\r\n}\r\n\r\n.cta:hover  span:nth-child(2) {\r\n    transition: 0.5s;\r\n    margin-right: 45px;\r\n}\r\n\r\nspan {\r\n    -webkit-transform: skewX(15deg);\r\n            transform: skewX(15deg)\r\n  }\r\n\r\nspan:nth-child(2) {\r\n    width: 20px;\r\n    margin-left: 30px;\r\n    position: relative;\r\n    top: 12%;\r\n  }\r\n\r\n/**************SVG****************/\r\n\r\npath.one {\r\n    transition: 0.4s;\r\n    -webkit-transform: translateX(-60%);\r\n            transform: translateX(-60%);\r\n}\r\n\r\npath.two {\r\n    transition: 0.5s;\r\n    -webkit-transform: translateX(-30%);\r\n            transform: translateX(-30%);\r\n}\r\n\r\n.cta:hover path.three {\r\n    -webkit-animation: color_anim 1s infinite 0.2s;\r\n            animation: color_anim 1s infinite 0.2s;\r\n}\r\n\r\n.cta:hover path.one {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%);\r\n    -webkit-animation: color_anim 1s infinite 0.6s;\r\n            animation: color_anim 1s infinite 0.6s;\r\n}\r\n\r\n.cta:hover path.two {\r\n    -webkit-transform: translateX(0%);\r\n            transform: translateX(0%);\r\n    -webkit-animation: color_anim 1s infinite 0.4s;\r\n            animation: color_anim 1s infinite 0.4s;\r\n}\r\n\r\n/* SVG animations */\r\n\r\n@-webkit-keyframes color_anim {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    50% {\r\n        fill: #FBC638;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n\r\n@keyframes color_anim {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    50% {\r\n        fill: #FBC638;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3Rvbi9ib3Rvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7QUFFbkU7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1Qjs7QUFFQTtHQUNHLGFBQWE7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUU7SUFDRSwrQkFBc0I7WUFBdEI7RUFDRjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7RUFDVjs7QUFFRixrQ0FBa0M7O0FBRWxDO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFWQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90b24vYm90b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo5MDBpJyk7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggNDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjIyNUU2O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDAgYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0xNWRlZyk7XHJcbn1cclxuXHJcbi5jdGE6Zm9jdXMge1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY3RhOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMCAjRkJDNjM4O1xyXG59XHJcblxyXG4uY3RhIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmN0YTpob3ZlciAgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG5cclxuICBzcGFuIHtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMTVkZWcpXHJcbiAgfVxyXG5cclxuICBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgfVxyXG5cclxuLyoqKioqKioqKioqKioqU1ZHKioqKioqKioqKioqKioqKi9cclxuXHJcbnBhdGgub25lIHtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwJSk7XHJcbn1cclxuXHJcbnBhdGgudHdvIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7XHJcbn1cclxuXHJcbi5jdGE6aG92ZXIgcGF0aC50aHJlZSB7XHJcbiAgICBhbmltYXRpb246IGNvbG9yX2FuaW0gMXMgaW5maW5pdGUgMC4ycztcclxufVxyXG5cclxuLmN0YTpob3ZlciBwYXRoLm9uZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgYW5pbWF0aW9uOiBjb2xvcl9hbmltIDFzIGluZmluaXRlIDAuNnM7XHJcbn1cclxuXHJcbi5jdGE6aG92ZXIgcGF0aC50d28ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIGFuaW1hdGlvbjogY29sb3JfYW5pbSAxcyBpbmZpbml0ZSAwLjRzO1xyXG59XHJcblxyXG4vKiBTVkcgYW5pbWF0aW9ucyAqL1xyXG5cclxuQGtleWZyYW1lcyBjb2xvcl9hbmltIHtcclxuICAgIDAlIHtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgZmlsbDogI0ZCQzYzODtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/boton/boton.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/boton/boton.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- designed by me... enjoy! -->\r\n<div class=\"wrapper\">\r\n  <a class=\"cta\" href=\"#\">\r\n    <span>NEXT</span>\r\n    <span>\r\n      <svg width=\"66px\" height=\"43px\" viewBox=\"0 0 66 43\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        <g id=\"arrow\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n          <path class=\"one\" d=\"M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z\" fill=\"#FFFFFF\"></path>\r\n          <path class=\"two\" d=\"M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z\" fill=\"#FFFFFF\"></path>\r\n          <path class=\"three\" d=\"M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z\" fill=\"#FFFFFF\"></path>\r\n        </g>\r\n      </svg>\r\n    </span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/boton/boton.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/boton/boton.component.ts ***!
  \*****************************************************/
/*! exports provided: BotonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonComponent", function() { return BotonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonComponent = /** @class */ (function () {
    function BotonComponent() {
    }
    BotonComponent.prototype.ngOnInit = function () {
    };
    BotonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton',
            template: __webpack_require__(/*! ./boton.component.html */ "./src/app/components/boton/boton.component.html"),
            styles: [__webpack_require__(/*! ./boton.component.css */ "./src/app/components/boton/boton.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonComponent);
    return BotonComponent;
}());



/***/ }),

/***/ "./src/app/components/boton2/boton2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/boton2/boton2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick($event)\">{{texto}}</button>\r\n"

/***/ }),

/***/ "./src/app/components/boton2/boton2.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/boton2/boton2.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:300);\nbutton {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\nbody {\n  background: #111; }\nbutton {\n  background: #333;\n  color: aqua;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: 'Raleway', sans-serif;\n  transition: .6s;\n  overflow: hidden; }\nbutton:focus {\n    outline: 0; }\nbutton:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255, 255, 255, 0.5);\n    width: 60px;\n    height: 100%;\n    left: 0;\n    top: 0;\n    opacity: .5;\n    -webkit-filter: blur(30px);\n            filter: blur(30px);\n    -webkit-transform: translateX(-100px) skewX(-15deg);\n            transform: translateX(-100px) skewX(-15deg); }\nbutton:after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: rgba(255, 255, 255, 0.2);\n    width: 30px;\n    height: 100%;\n    left: 30px;\n    top: 0;\n    opacity: 0;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n    -webkit-transform: translateX(-100px) skewX(-15deg);\n            transform: translateX(-100px) skewX(-15deg); }\nbutton:hover {\n    background: #338033;\n    cursor: pointer; }\nbutton:hover:before {\n      -webkit-transform: translateX(300px) skewX(-15deg);\n              transform: translateX(300px) skewX(-15deg);\n      opacity: 0.6;\n      transition: .7s; }\nbutton:hover:after {\n      -webkit-transform: translateX(300px) skewX(-15deg);\n              transform: translateX(300px) skewX(-15deg);\n      opacity: 1;\n      transition: .7s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3RvbjIvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm90b24yXFxib3RvbjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0VBQVk7QUFlWjtFQVBRLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9EQUE0QztVQUE1Qyw0Q0FBNEMsRUFBQTtBQVFwRDtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFYbEI7SUFhSSxVQUFVLEVBQUE7QUFiZDtJQWdCSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixvQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCwwQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLG1EQUE0QztZQUE1QywyQ0FBNEMsRUFBQTtBQTFCaEQ7SUE2QkksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0NBQWlDO0lBQ2pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLE1BQU07SUFDTixVQUFVO0lBQ1YseUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixtREFBMkM7WUFBM0MsMkNBQTJDLEVBQUE7QUF2Qy9DO0lBMENJLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7QUEzQ25CO01BNkNNLGtEQUEyQztjQUEzQywwQ0FBMkM7TUFDM0MsWUFBWTtNQUNaLGVBQWUsRUFBQTtBQS9DckI7TUFrRE0sa0RBQTBDO2NBQTFDLDBDQUEwQztNQUMxQyxVQUFVO01BQ1YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib3RvbjIvYm90b24yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MzAwKTtcclxuXHJcbi8vIE1peGluIGJlbG93IHVzZWQgdG8gY2VudGVyIHRoZSBidXR0b24uIElmIHVzaW5nIGluIHByb2R1Y3Rpb24sIHJlbW92ZSB0aGUgbWl4aW4gYW5kIGFkZCBwb3NpdGlvbiByZWxhdGl2ZSBvciBhYnNvbHV0ZSB0byBidXR0b24uXHJcblxyXG5AbWl4aW4gY2VudGVyKCRleHRlbmQ6IHRydWUpIHtcclxuICAgIEBpZiAkZXh0ZW5kIHtcclxuICAgICAgICBAZXh0ZW5kICVjZW50ZXI7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4lY2VudGVyIHtcclxuICAgIEBpbmNsdWRlIGNlbnRlcigkZXh0ZW5kOiBmYWxzZSk7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDogIzExMTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIEBpbmNsdWRlIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiBhcXVhO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmZvY3Vze1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSAgc2tld1goLTE1ZGVnKTtcclxuICB9XHJcbiAgJjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzMzODAzMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpICBza2V3WCgtMTVkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton2/boton2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/boton2/boton2.component.ts ***!
  \*******************************************************/
/*! exports provided: Boton2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boton2Component", function() { return Boton2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Boton2Component = /** @class */ (function () {
    function Boton2Component() {
        this.miClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Boton2Component.prototype.ngOnInit = function () {
    };
    Boton2Component.prototype.onClick = function (e) {
        this.miClick.emit(e);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Boton2Component.prototype, "texto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Boton2Component.prototype, "miClick", void 0);
    Boton2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton2',
            template: __webpack_require__(/*! ./boton2.component.html */ "./src/app/components/boton2/boton2.component.html"),
            styles: [__webpack_require__(/*! ./boton2.component.scss */ "./src/app/components/boton2/boton2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Boton2Component);
    return Boton2Component;
}());



/***/ }),

/***/ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje/burbuja-mensaje.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: Verdana, sans-serif;\r\n}\r\na {\r\n  text-decoration: underline;\r\n  color: #404040;\r\n}\r\n.container {\r\n  max-width: 800px;\r\n  margin: 15px auto;\r\n  background: #fff;\r\n  padding: 50px;\r\n  border: 3px solid #000;\r\n  box-shadow: 6px 6px 0 #aaa;\r\n}\r\nh1 {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n.text--left {\r\n  text-align: left;\r\n}\r\n.text--right {\r\n  text-align: right;\r\n}\r\n.credits {\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;\r\n}\r\n.description {\r\n  font-size: 12px;\r\n}\r\nstrong {\r\n  font-weight: 700;\r\n}\r\nhr {\r\n  margin: 10px 0;\r\n}\r\n.inner__row {\r\n  margin-bottom: 15px;\r\n}\r\n.inner__title,\r\n.inner__desc {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n.inner__title {\r\n  font-weight: 700;\r\n}\r\n.inner__desc {\r\n  font-size: 14px;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n  min-height: 30px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-family: Verdana, sans-serif;\r\n  min-width: 220px;\r\n}\r\ninput:active,\r\nbutton:active,\r\ninput:focus,\r\nbutton:focus {\r\n  outline: none;\r\n}\r\nbutton {\r\n  background-color: transparent;\r\n}\r\n.cbbl {\r\n  font-size: 20px;\r\n  font-family: 'Iceland', cursive;\r\n  position: absolute;\r\n  left: 65px;\r\n  min-width: 400px;\r\n}\r\n.cbbl input {\r\n  font-family: 'Iceland', cursive;\r\n}\r\n.cbbl {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 10px 9px 29px 6px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n.cbbl::before,\r\n.cbbl::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n  left: 20%;\r\n}\r\n.cbbl::after {\r\n  background: #fff;\r\n  width: 9px;\r\n  height: 3px;\r\n  bottom: -14px;\r\n  margin-left: 6px;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px 3px #fff, 0px 3px #000, 6px 3px #000, 9px 3px #aaa, 3px 6px #000, 6px 6px #000, 9px 6px #aaa, 6px 9px #aaa;\r\n}\r\n.cbbl::before {\r\n  width: 15px;\r\n  height: 8px;\r\n  background: #fff;\r\n  bottom: -11px;\r\n  border-left: 3px solid #000;\r\n  border-right: 3px solid #000;\r\n}\r\n.cbbl.-hover:hover {\r\n  background-color: #eee;\r\n  color: #000;\r\n  box-shadow: 0 -3px #eee, 0 -6px #7bc8a4, 3px 0 #eee, 3px -3px #7bc8a4, 6px 0 #7bc8a4, 0 3px #eee, 0 6px #7bc8a4, -3px 0 #eee, -3px 3px #7bc8a4, -6px 0 #7bc8a4, -3px -3px #7bc8a4, 3px 3px #7bc8a4, 3px 9px #cae9db, 6px 6px #cae9db, 9px 3px #cae9db;\r\n}\r\n.cbbl.-hover:hover::before {\r\n  background: #eee;\r\n  border-left-color: #7bc8a4;\r\n  border-right-color: #7bc8a4;\r\n}\r\n.cbbl.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px 3px #eee, 0px 3px #7bc8a4, 6px 3px #7bc8a4, 9px 3px #cae9db, 3px 6px #7bc8a4, 6px 6px #7bc8a4, 9px 6px #cae9db, 6px 9px #cae9db, 9px 9px #7bc8a4;\r\n}\r\n.cbbl.-hover:hover.-control input[type=submit],\r\n.cbbl.-hover:hover.-control button,\r\n.cbbl.-hover:hover.-control a {\r\n  color: #000;\r\n}\r\n.cbbl.-up {\r\n  margin: 29px 9px 10px 6px;\r\n}\r\n.cbbl.-up::before {\r\n  top: -11px;\r\n  bottom: auto;\r\n}\r\n.cbbl.-up::after {\r\n  top: -14px;\r\n  bottom: auto;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px -3px #fff, 0px -3px #000, 6px -3px #000, 3px -6px #000, 6px -6px #000;\r\n}\r\n.cbbl.-up.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px -3px #eee, 0px -3px #7bc8a4, 6px -3px #7bc8a4, 3px -6px #7bc8a4, 6px -6px #7bc8a4;\r\n}\r\n.cbbl.-up.-right::after {\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px -3px #fff, 0px -3px #000, -6px -3px #000, -3px -6px #000, -6px -6px #000;\r\n}\r\n.cbbl.-up.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px -3px #eee, 0px -3px #7bc8a4, -6px -3px #7bc8a4, -3px -6px #7bc8a4, -6px -6px #7bc8a4;\r\n}\r\n.cbbl.-right::before,\r\n.cbbl.-right::after {\r\n  left: auto;\r\n  right: 20%;\r\n}\r\n.cbbl.-right::after {\r\n  margin-left: 0;\r\n  margin-right: 6px;\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px 3px #fff, 0px 3px #000, -6px 3px #000, -3px 6px #000, -6px 6px #000, -3px 9px #aaa, 0 6px #aaa, 3px 3px #aaa, 6px 0px #aaa;\r\n}\r\n.cbbl.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px 3px #eee, 0px 3px #7bc8a4, -6px 3px #7bc8a4, -3px 6px #7bc8a4, -6px 6px #7bc8a4, -3px 9px #cae9db, 0 6px #cae9db, 3px 3px #cae9db, 6px 0px #cae9db;\r\n}\r\n.cbbl.-no-selection {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.cbbl.-control {\r\n  cursor: pointer;\r\n}\r\n.cbbl.-control input[type=submit],\r\n.cbbl.-control button,\r\n.cbbl.-control a {\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n}\r\n.cbbl.-control:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXJidWphLW1lbnNhamUvYnVyYnVqYS1tZW5zYWplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb05BQW9OO0VBQ3BOLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtSkFBbUo7QUFDcko7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFQQUFxUDtBQUN2UDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLCtMQUErTDtBQUNqTTtBQUNBOzs7RUFHRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiw4R0FBOEc7QUFDaEg7QUFDQTtFQUNFLGdJQUFnSTtBQUNsSTtBQUNBO0VBQ0Usa0hBQWtIO0FBQ3BIO0FBQ0E7RUFDRSxvSUFBb0k7QUFDdEk7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9LQUFvSztBQUN0SztBQUNBO0VBQ0Usa01BQWtNO0FBQ3BNO0FBQ0E7RUFDRSx5QkFBeUI7S0FDdEIsc0JBQXNCO01BQ3JCLHFCQUFxQjtVQUNqQixpQkFBaUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsOEJBQThCO1VBQ3RCLHNCQUFzQjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVyYnVqYS1tZW5zYWplL2J1cmJ1amEtbWVuc2FqZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDAgI2FhYTtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRleHQtLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uY3JlZGl0cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuaHIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5pbm5lcl9fcm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5pbm5lcl9fdGl0bGUsXHJcbi5pbm5lcl9fZGVzYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5uZXJfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbm5lcl9fZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBtaW4td2lkdGg6IDIyMHB4O1xyXG59XHJcbmlucHV0OmFjdGl2ZSxcclxuYnV0dG9uOmFjdGl2ZSxcclxuaW5wdXQ6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5jYmJsIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdJY2VsYW5kJywgY3Vyc2l2ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNjVweDtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcbi5jYmJsIGlucHV0IHtcclxuICBmb250LWZhbWlseTogJ0ljZWxhbmQnLCBjdXJzaXZlO1xyXG59XHJcbi5jYmJsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCA5cHggMjlweCA2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAtM3B4ICNmZmYsIDAgLTZweCAjMDAwLCAzcHggMCAjZmZmLCAzcHggLTNweCAjMDAwLCA2cHggMCAjMDAwLCAwIDNweCAjZmZmLCAwIDZweCAjMDAwLCAtM3B4IDAgI2ZmZiwgLTNweCAzcHggIzAwMCwgLTZweCAwICMwMDAsIC0zcHggLTNweCAjMDAwLCAzcHggM3B4ICMwMDAsIDNweCA5cHggI2FhYSwgNnB4IDZweCAjYWFhLCA5cHggM3B4ICNhYWE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jYmJsOjpiZWZvcmUsXHJcbi5jYmJsOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuLmNiYmw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm90dG9tOiAtMTRweDtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IC0zcHggMCAjMDAwLCAzcHggMCAjMDAwLCAzcHggM3B4ICNmZmYsIDBweCAzcHggIzAwMCwgNnB4IDNweCAjMDAwLCA5cHggM3B4ICNhYWEsIDNweCA2cHggIzAwMCwgNnB4IDZweCAjMDAwLCA5cHggNnB4ICNhYWEsIDZweCA5cHggI2FhYTtcclxufVxyXG4uY2JibDo6YmVmb3JlIHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvdHRvbTogLTExcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGJveC1zaGFkb3c6IDAgLTNweCAjZWVlLCAwIC02cHggIzdiYzhhNCwgM3B4IDAgI2VlZSwgM3B4IC0zcHggIzdiYzhhNCwgNnB4IDAgIzdiYzhhNCwgMCAzcHggI2VlZSwgMCA2cHggIzdiYzhhNCwgLTNweCAwICNlZWUsIC0zcHggM3B4ICM3YmM4YTQsIC02cHggMCAjN2JjOGE0LCAtM3B4IC0zcHggIzdiYzhhNCwgM3B4IDNweCAjN2JjOGE0LCAzcHggOXB4ICNjYWU5ZGIsIDZweCA2cHggI2NhZTlkYiwgOXB4IDNweCAjY2FlOWRiO1xyXG59XHJcbi5jYmJsLi1ob3Zlcjpob3Zlcjo6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjN2JjOGE0O1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzdiYzhhNDtcclxufVxyXG4uY2JibC4taG92ZXI6aG92ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAtM3B4IDAgIzdiYzhhNCwgM3B4IDAgIzdiYzhhNCwgM3B4IDNweCAjZWVlLCAwcHggM3B4ICM3YmM4YTQsIDZweCAzcHggIzdiYzhhNCwgOXB4IDNweCAjY2FlOWRiLCAzcHggNnB4ICM3YmM4YTQsIDZweCA2cHggIzdiYzhhNCwgOXB4IDZweCAjY2FlOWRiLCA2cHggOXB4ICNjYWU5ZGIsIDlweCA5cHggIzdiYzhhNDtcclxufVxyXG4uY2JibC4taG92ZXI6aG92ZXIuLWNvbnRyb2wgaW5wdXRbdHlwZT1zdWJtaXRdLFxyXG4uY2JibC4taG92ZXI6aG92ZXIuLWNvbnRyb2wgYnV0dG9uLFxyXG4uY2JibC4taG92ZXI6aG92ZXIuLWNvbnRyb2wgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNiYmwuLXVwIHtcclxuICBtYXJnaW46IDI5cHggOXB4IDEwcHggNnB4O1xyXG59XHJcbi5jYmJsLi11cDo6YmVmb3JlIHtcclxuICB0b3A6IC0xMXB4O1xyXG4gIGJvdHRvbTogYXV0bztcclxufVxyXG4uY2JibC4tdXA6OmFmdGVyIHtcclxuICB0b3A6IC0xNHB4O1xyXG4gIGJvdHRvbTogYXV0bztcclxuICBib3gtc2hhZG93OiAtM3B4IDAgIzAwMCwgM3B4IDAgIzAwMCwgM3B4IC0zcHggI2ZmZiwgMHB4IC0zcHggIzAwMCwgNnB4IC0zcHggIzAwMCwgM3B4IC02cHggIzAwMCwgNnB4IC02cHggIzAwMDtcclxufVxyXG4uY2JibC4tdXAuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICM3YmM4YTQsIDNweCAwICM3YmM4YTQsIDNweCAtM3B4ICNlZWUsIDBweCAtM3B4ICM3YmM4YTQsIDZweCAtM3B4ICM3YmM4YTQsIDNweCAtNnB4ICM3YmM4YTQsIDZweCAtNnB4ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLXVwLi1yaWdodDo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IDNweCAwICMwMDAsIC0zcHggMCAjMDAwLCAtM3B4IC0zcHggI2ZmZiwgMHB4IC0zcHggIzAwMCwgLTZweCAtM3B4ICMwMDAsIC0zcHggLTZweCAjMDAwLCAtNnB4IC02cHggIzAwMDtcclxufVxyXG4uY2JibC4tdXAuLXJpZ2h0Li1ob3Zlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IDNweCAwICM3YmM4YTQsIC0zcHggMCAjN2JjOGE0LCAtM3B4IC0zcHggI2VlZSwgMHB4IC0zcHggIzdiYzhhNCwgLTZweCAtM3B4ICM3YmM4YTQsIC0zcHggLTZweCAjN2JjOGE0LCAtNnB4IC02cHggIzdiYzhhNDtcclxufVxyXG4uY2JibC4tcmlnaHQ6OmJlZm9yZSxcclxuLmNiYmwuLXJpZ2h0OjphZnRlciB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMjAlO1xyXG59XHJcbi5jYmJsLi1yaWdodDo6YWZ0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAwICMwMDAsIC0zcHggMCAjMDAwLCAtM3B4IDNweCAjZmZmLCAwcHggM3B4ICMwMDAsIC02cHggM3B4ICMwMDAsIC0zcHggNnB4ICMwMDAsIC02cHggNnB4ICMwMDAsIC0zcHggOXB4ICNhYWEsIDAgNnB4ICNhYWEsIDNweCAzcHggI2FhYSwgNnB4IDBweCAjYWFhO1xyXG59XHJcbi5jYmJsLi1yaWdodC4taG92ZXI6aG92ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAzcHggMCAjN2JjOGE0LCAtM3B4IDAgIzdiYzhhNCwgLTNweCAzcHggI2VlZSwgMHB4IDNweCAjN2JjOGE0LCAtNnB4IDNweCAjN2JjOGE0LCAtM3B4IDZweCAjN2JjOGE0LCAtNnB4IDZweCAjN2JjOGE0LCAtM3B4IDlweCAjY2FlOWRiLCAwIDZweCAjY2FlOWRiLCAzcHggM3B4ICNjYWU5ZGIsIDZweCAwcHggI2NhZTlkYjtcclxufVxyXG4uY2JibC4tbm8tc2VsZWN0aW9uIHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5jYmJsLi1jb250cm9sIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNiYmwuLWNvbnRyb2wgaW5wdXRbdHlwZT1zdWJtaXRdLFxyXG4uY2JibC4tY29udHJvbCBidXR0b24sXHJcbi5jYmJsLi1jb250cm9sIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuLmNiYmwuLWNvbnRyb2w6YWN0aXZlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje/burbuja-mensaje.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\r\n\r\n  <div class=\"inner__row text--left\">\r\n\r\n    <div class=\"cbbl -control\" (click)=\"onClick($event)\">\r\n        {{mensaje1}}<br/>\r\n        {{mensaje2}}\r\n    </div>\r\n    <br>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje/burbuja-mensaje.component.ts ***!
  \*************************************************************************/
/*! exports provided: BurbujaMensajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurbujaMensajeComponent", function() { return BurbujaMensajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BurbujaMensajeComponent = /** @class */ (function () {
    function BurbujaMensajeComponent() {
        this.miClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BurbujaMensajeComponent.prototype.ngOnInit = function () {
    };
    BurbujaMensajeComponent.prototype.onClick = function (e) {
        this.miClick.emit(e);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BurbujaMensajeComponent.prototype, "mensaje1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BurbujaMensajeComponent.prototype, "mensaje2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BurbujaMensajeComponent.prototype, "miClick", void 0);
    BurbujaMensajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-burbuja-mensaje',
            template: __webpack_require__(/*! ./burbuja-mensaje.component.html */ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.html"),
            styles: [__webpack_require__(/*! ./burbuja-mensaje.component.css */ "./src/app/components/burbuja-mensaje/burbuja-mensaje.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BurbujaMensajeComponent);
    return BurbujaMensajeComponent;
}());



/***/ }),

/***/ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: Verdana, sans-serif;\r\n}\r\na {\r\n  text-decoration: underline;\r\n  color: #404040;\r\n}\r\nh1 {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n.text--left {\r\n  text-align: left;\r\n}\r\n.text--right {\r\n  text-align: right;\r\n}\r\n.credits {\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;\r\n}\r\n.description {\r\n  font-size: 12px;\r\n}\r\nstrong {\r\n  font-weight: 700;\r\n}\r\nhr {\r\n  margin: 10px 0;\r\n}\r\n.inner__row {\r\n  margin-bottom: 15px;\r\n}\r\n.inner__title,\r\n.inner__desc {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n.inner__title {\r\n  font-weight: 700;\r\n}\r\n.inner__desc {\r\n  font-size: 14px;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n  min-height: 30px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-family: Verdana, sans-serif;\r\n}\r\ninput:active,\r\nbutton:active,\r\ninput:focus,\r\nbutton:focus {\r\n  outline: none;\r\n}\r\nbutton {\r\n  background-color: transparent;\r\n}\r\n.cbbl {\r\n  font-size: 30px;\r\n  font-family: 'Iceland', cursive;\r\n  position: absolute;\r\n  max-width: 200px;\r\n  margin-left: 50px;\r\n  left: 10px;\r\n}\r\n.cbbl input {\r\n  font-family: 'Iceland', cursive;\r\n  max-width: 180px;\r\n}\r\n.cbbl {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 10px 9px 29px 6px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n.cbbl::before,\r\n.cbbl::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n  left: 20%;\r\n}\r\n.cbbl::after {\r\n  background: #fff;\r\n  width: 9px;\r\n  height: 3px;\r\n  bottom: -14px;\r\n  margin-left: 6px;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px 3px #fff, 0px 3px #000, 6px 3px #000, 9px 3px #aaa, 3px 6px #000, 6px 6px #000, 9px 6px #aaa, 6px 9px #aaa;\r\n}\r\n.cbbl::before {\r\n  width: 15px;\r\n  height: 8px;\r\n  background: #fff;\r\n  bottom: -11px;\r\n  border-left: 3px solid #000;\r\n  border-right: 3px solid #000;\r\n}\r\n.cbbl.-hover:hover {\r\n  background-color: #eee;\r\n  color: #000;\r\n  box-shadow: 0 -3px #eee, 0 -6px #7bc8a4, 3px 0 #eee, 3px -3px #7bc8a4, 6px 0 #7bc8a4, 0 3px #eee, 0 6px #7bc8a4, -3px 0 #eee, -3px 3px #7bc8a4, -6px 0 #7bc8a4, -3px -3px #7bc8a4, 3px 3px #7bc8a4, 3px 9px #cae9db, 6px 6px #cae9db, 9px 3px #cae9db;\r\n}\r\n.cbbl.-hover:hover::before {\r\n  background: #eee;\r\n  border-left-color: #7bc8a4;\r\n  border-right-color: #7bc8a4;\r\n}\r\n.cbbl.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px 3px #eee, 0px 3px #7bc8a4, 6px 3px #7bc8a4, 9px 3px #cae9db, 3px 6px #7bc8a4, 6px 6px #7bc8a4, 9px 6px #cae9db, 6px 9px #cae9db, 9px 9px #7bc8a4;\r\n}\r\n.cbbl.-hover:hover.-control input[type=submit],\r\n.cbbl.-hover:hover.-control button,\r\n.cbbl.-hover:hover.-control a {\r\n  color: #000;\r\n}\r\n.cbbl.-up {\r\n  margin: 29px 9px 10px 6px;\r\n}\r\n.cbbl.-up::before {\r\n  top: -11px;\r\n  bottom: auto;\r\n}\r\n.cbbl.-up::after {\r\n  top: -14px;\r\n  bottom: auto;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px -3px #fff, 0px -3px #000, 6px -3px #000, 3px -6px #000, 6px -6px #000;\r\n}\r\n.cbbl.-up.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px -3px #eee, 0px -3px #7bc8a4, 6px -3px #7bc8a4, 3px -6px #7bc8a4, 6px -6px #7bc8a4;\r\n}\r\n.cbbl.-up.-right::after {\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px -3px #fff, 0px -3px #000, -6px -3px #000, -3px -6px #000, -6px -6px #000;\r\n}\r\n.cbbl.-up.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px -3px #eee, 0px -3px #7bc8a4, -6px -3px #7bc8a4, -3px -6px #7bc8a4, -6px -6px #7bc8a4;\r\n}\r\n.cbbl.-right::before,\r\n.cbbl.-right::after {\r\n  left: auto;\r\n  right: 20%;\r\n}\r\n.cbbl.-right::after {\r\n  margin-left: 0;\r\n  margin-right: 6px;\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px 3px #fff, 0px 3px #000, -6px 3px #000, -3px 6px #000, -6px 6px #000, -3px 9px #aaa, 0 6px #aaa, 3px 3px #aaa, 6px 0px #aaa;\r\n}\r\n.cbbl.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px 3px #eee, 0px 3px #7bc8a4, -6px 3px #7bc8a4, -3px 6px #7bc8a4, -6px 6px #7bc8a4, -3px 9px #cae9db, 0 6px #cae9db, 3px 3px #cae9db, 6px 0px #cae9db;\r\n}\r\n.cbbl.-no-selection {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.cbbl.-control {\r\n  cursor: pointer;\r\n}\r\n.cbbl.-control input[type=submit],\r\n.cbbl.-control button,\r\n.cbbl.-control a {\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n}\r\n.cbbl.-control:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\r\n}\r\n.fade-in {\r\n  animation: fadeIn ease 5s;\r\n  -webkit-animation: fadeIn ease 5s;\r\n  -moz-animation: fadeIn ease 5s;\r\n  -o-animation: fadeIn ease 5s;\r\n  -ms-animation: fadeIn ease 5s;\r\n}\r\n@keyframes fadeIn{\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXJidWphLW1lbnNhamUyL2J1cmJ1amEtbWVuc2FqZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixvTkFBb047RUFDcE4seUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1KQUFtSjtBQUNySjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscVBBQXFQO0FBQ3ZQO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsK0xBQStMO0FBQ2pNO0FBQ0E7OztFQUdFLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDhHQUE4RztBQUNoSDtBQUNBO0VBQ0UsZ0lBQWdJO0FBQ2xJO0FBQ0E7RUFDRSxrSEFBa0g7QUFDcEg7QUFDQTtFQUNFLG9JQUFvSTtBQUN0STtBQUNBOztFQUVFLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0tBQW9LO0FBQ3RLO0FBQ0E7RUFDRSxrTUFBa007QUFDcE07QUFDQTtFQUNFLHlCQUF5QjtLQUN0QixzQkFBc0I7TUFDckIscUJBQXFCO1VBQ2pCLGlCQUFpQjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw4QkFBOEI7VUFDdEIsc0JBQXNCO0FBQ2hDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0FBR0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVyYnVqYS1tZW5zYWplMi9idXJidWphLW1lbnNhamUyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzQwNDA0MDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi50ZXh0LS1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LS1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNyZWRpdHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uaW5uZXJfX3JvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaW5uZXJfX3RpdGxlLFxyXG4uaW5uZXJfX2Rlc2Mge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmlubmVyX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaW5uZXJfX2Rlc2Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pbnB1dCxcclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW5wdXQ6YWN0aXZlLFxyXG5idXR0b246YWN0aXZlLFxyXG5pbnB1dDpmb2N1cyxcclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmNiYmwge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogJ0ljZWxhbmQnLCBjdXJzaXZlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmNiYmwgaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnSWNlbGFuZCcsIGN1cnNpdmU7XHJcbiAgbWF4LXdpZHRoOiAxODBweDtcclxufVxyXG4uY2JibCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHggOXB4IDI5cHggNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTNweCAjZmZmLCAwIC02cHggIzAwMCwgM3B4IDAgI2ZmZiwgM3B4IC0zcHggIzAwMCwgNnB4IDAgIzAwMCwgMCAzcHggI2ZmZiwgMCA2cHggIzAwMCwgLTNweCAwICNmZmYsIC0zcHggM3B4ICMwMDAsIC02cHggMCAjMDAwLCAtM3B4IC0zcHggIzAwMCwgM3B4IDNweCAjMDAwLCAzcHggOXB4ICNhYWEsIDZweCA2cHggI2FhYSwgOXB4IDNweCAjYWFhO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2JibDo6YmVmb3JlLFxyXG4uY2JibDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbGVmdDogMjAlO1xyXG59XHJcbi5jYmJsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBib3gtc2hhZG93OiAtM3B4IDAgIzAwMCwgM3B4IDAgIzAwMCwgM3B4IDNweCAjZmZmLCAwcHggM3B4ICMwMDAsIDZweCAzcHggIzAwMCwgOXB4IDNweCAjYWFhLCAzcHggNnB4ICMwMDAsIDZweCA2cHggIzAwMCwgOXB4IDZweCAjYWFhLCA2cHggOXB4ICNhYWE7XHJcbn1cclxuLmNiYmw6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3R0b206IC0xMXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5jYmJsLi1ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3gtc2hhZG93OiAwIC0zcHggI2VlZSwgMCAtNnB4ICM3YmM4YTQsIDNweCAwICNlZWUsIDNweCAtM3B4ICM3YmM4YTQsIDZweCAwICM3YmM4YTQsIDAgM3B4ICNlZWUsIDAgNnB4ICM3YmM4YTQsIC0zcHggMCAjZWVlLCAtM3B4IDNweCAjN2JjOGE0LCAtNnB4IDAgIzdiYzhhNCwgLTNweCAtM3B4ICM3YmM4YTQsIDNweCAzcHggIzdiYzhhNCwgM3B4IDlweCAjY2FlOWRiLCA2cHggNnB4ICNjYWU5ZGIsIDlweCAzcHggI2NhZTlkYjtcclxufVxyXG4uY2JibC4taG92ZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzdiYzhhNDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICM3YmM4YTQsIDNweCAwICM3YmM4YTQsIDNweCAzcHggI2VlZSwgMHB4IDNweCAjN2JjOGE0LCA2cHggM3B4ICM3YmM4YTQsIDlweCAzcHggI2NhZTlkYiwgM3B4IDZweCAjN2JjOGE0LCA2cHggNnB4ICM3YmM4YTQsIDlweCA2cHggI2NhZTlkYiwgNnB4IDlweCAjY2FlOWRiLCA5cHggOXB4ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGlucHV0W3R5cGU9c3VibWl0XSxcclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGJ1dHRvbixcclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGEge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jYmJsLi11cCB7XHJcbiAgbWFyZ2luOiAyOXB4IDlweCAxMHB4IDZweDtcclxufVxyXG4uY2JibC4tdXA6OmJlZm9yZSB7XHJcbiAgdG9wOiAtMTFweDtcclxuICBib3R0b206IGF1dG87XHJcbn1cclxuLmNiYmwuLXVwOjphZnRlciB7XHJcbiAgdG9wOiAtMTRweDtcclxuICBib3R0b206IGF1dG87XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICMwMDAsIDNweCAwICMwMDAsIDNweCAtM3B4ICNmZmYsIDBweCAtM3B4ICMwMDAsIDZweCAtM3B4ICMwMDAsIDNweCAtNnB4ICMwMDAsIDZweCAtNnB4ICMwMDA7XHJcbn1cclxuLmNiYmwuLXVwLi1ob3Zlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IC0zcHggMCAjN2JjOGE0LCAzcHggMCAjN2JjOGE0LCAzcHggLTNweCAjZWVlLCAwcHggLTNweCAjN2JjOGE0LCA2cHggLTNweCAjN2JjOGE0LCAzcHggLTZweCAjN2JjOGE0LCA2cHggLTZweCAjN2JjOGE0O1xyXG59XHJcbi5jYmJsLi11cC4tcmlnaHQ6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAzcHggMCAjMDAwLCAtM3B4IDAgIzAwMCwgLTNweCAtM3B4ICNmZmYsIDBweCAtM3B4ICMwMDAsIC02cHggLTNweCAjMDAwLCAtM3B4IC02cHggIzAwMCwgLTZweCAtNnB4ICMwMDA7XHJcbn1cclxuLmNiYmwuLXVwLi1yaWdodC4taG92ZXI6aG92ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAzcHggMCAjN2JjOGE0LCAtM3B4IDAgIzdiYzhhNCwgLTNweCAtM3B4ICNlZWUsIDBweCAtM3B4ICM3YmM4YTQsIC02cHggLTNweCAjN2JjOGE0LCAtM3B4IC02cHggIzdiYzhhNCwgLTZweCAtNnB4ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLXJpZ2h0OjpiZWZvcmUsXHJcbi5jYmJsLi1yaWdodDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDIwJTtcclxufVxyXG4uY2JibC4tcmlnaHQ6OmFmdGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBib3gtc2hhZG93OiAzcHggMCAjMDAwLCAtM3B4IDAgIzAwMCwgLTNweCAzcHggI2ZmZiwgMHB4IDNweCAjMDAwLCAtNnB4IDNweCAjMDAwLCAtM3B4IDZweCAjMDAwLCAtNnB4IDZweCAjMDAwLCAtM3B4IDlweCAjYWFhLCAwIDZweCAjYWFhLCAzcHggM3B4ICNhYWEsIDZweCAwcHggI2FhYTtcclxufVxyXG4uY2JibC4tcmlnaHQuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgIzdiYzhhNCwgLTNweCAwICM3YmM4YTQsIC0zcHggM3B4ICNlZWUsIDBweCAzcHggIzdiYzhhNCwgLTZweCAzcHggIzdiYzhhNCwgLTNweCA2cHggIzdiYzhhNCwgLTZweCA2cHggIzdiYzhhNCwgLTNweCA5cHggI2NhZTlkYiwgMCA2cHggI2NhZTlkYiwgM3B4IDNweCAjY2FlOWRiLCA2cHggMHB4ICNjYWU5ZGI7XHJcbn1cclxuLmNiYmwuLW5vLXNlbGVjdGlvbiB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uY2JibC4tY29udHJvbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYmJsLi1jb250cm9sIGlucHV0W3R5cGU9c3VibWl0XSxcclxuLmNiYmwuLWNvbnRyb2wgYnV0dG9uLFxyXG4uY2JibC4tY29udHJvbCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcbi5jYmJsLi1jb250cm9sOmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxuICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\r\n    <div class=\"inner__row text--left\">\r\n        <div class=\"cbbl\" [ngClass]=\"{'fade-in': efecto === true}\" #inputNumero>\r\n            <input type=\"text\" placeholder=\"numero\" appSoloNumeros (change)=\"onChange($event)\" [(ngModel)]=\"valor\">\r\n        </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.ts ***!
  \***************************************************************************/
/*! exports provided: BurbujaMensaje2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurbujaMensaje2Component", function() { return BurbujaMensaje2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BurbujaMensaje2Component = /** @class */ (function () {
    function BurbujaMensaje2Component() {
        this.enviarTexto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BurbujaMensaje2Component.prototype.ngOnInit = function () {
        this.txtValorIngresado.nativeElement.focus();
    };
    BurbujaMensaje2Component.prototype.onChange = function (event) {
        this.enviarTexto.emit(this.valor);
    };
    BurbujaMensaje2Component.prototype.setFocus = function () {
        this.txtValorIngresado.nativeElement.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BurbujaMensaje2Component.prototype, "efecto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BurbujaMensaje2Component.prototype, "valor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputNumero'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BurbujaMensaje2Component.prototype, "txtValorIngresado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BurbujaMensaje2Component.prototype, "enviarTexto", void 0);
    BurbujaMensaje2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-burbuja-mensaje2',
            template: __webpack_require__(/*! ./burbuja-mensaje2.component.html */ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.html"),
            styles: [__webpack_require__(/*! ./burbuja-mensaje2.component.css */ "./src/app/components/burbuja-mensaje2/burbuja-mensaje2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BurbujaMensaje2Component);
    return BurbujaMensaje2Component;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{background:#ececec; padding:120px 0  80px; position:relative; border:1px solid #ddd}\r\n  .card .card-section{background:#fff; margin-bottom:20px; box-shadow:0px 0px 81px 0 rgba(47,47,47,0.1); transition:all .3s ease-in-out;}\r\n  .card .card-section-image{position:relative;overflow:hidden}\r\n  .card .card-section-image img{width:100%; height:auto; transition:all .3s ease-in-out;\r\n  -webkit-transform: scale(1.06) rotate(0deg);\r\n          transform: scale(1.06) rotate(0deg);}\r\n  .card .card-section:hover .card-section-image img{-webkit-transform:scale(1.1) rotate(4deg);transform:scale(1.1) rotate(4deg);}\r\n  .card .card-section-image .card-purchase{position:absolute;text-align:right;right:0;\r\n  bottom:0;width:100%;\r\n  }\r\n  .card .card-section-image .card-purchase a{background:green; color:#fff; font-size:14px; text-decoration:none;\r\n  padding:5px 25px; display: inline-block;\r\n  }\r\n  .card .card-section .card-desc{padding:30px;}\r\n  .card .card-section .card-desc .title h3{font-size:24px;}\r\n  .card .card-section .card-desc .title h3 a{color:#333; -webkit-text-decoration:0; text-decoration:0;\r\n  }\r\n  .card .card-section .card-desc .card-info{display:flex; justify-content:space-between; align-items:center;padding:10px 0}\r\n  .card .card-section .card-desc .card-info .list-unstyle{list-style:none; padding-left:0}\r\n  .card .card-section .card-desc .card-info ul{margin-bottom:6px}\r\n  .card .card-section .card-desc .card-info ul li{color:#333; font-size:16px; margin-bottom:6px}\r\n  .cart_btn {\r\n\r\n    background: #333;\r\n    font-weight: 500;\r\n    border-radius: 0;\r\n    color: #ffffff;\r\n    font-family: \"Rubik\", sans-serif;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    height: 36px;\r\n    line-height: 36px;\r\n    padding: 0 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQjtFQUN2RixvQkFBb0IsZUFBZSxFQUFFLGtCQUFrQixFQUFFLDRDQUE0QyxFQUFFLDhCQUE4QixDQUFDO0VBQ3RJLDBCQUEwQixpQkFBaUIsQ0FBQyxlQUFlO0VBQzNELDhCQUE4QixVQUFVLEVBQUUsV0FBVyxFQUFFLDhCQUE4QjtFQUNyRiwyQ0FBbUM7VUFBbkMsbUNBQW1DLENBQUM7RUFFcEMsa0RBQWtELHlDQUFpQyxDQUFqQyxpQ0FBaUMsQ0FBQztFQUVwRix5Q0FBeUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTztFQUNuRixRQUFRLENBQUMsVUFBVTtFQUNuQjtFQUNBLDJDQUEyQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLG9CQUFvQjtFQUM3RyxnQkFBZ0IsRUFBRSxxQkFBcUI7RUFDdkM7RUFFQSwrQkFBK0IsWUFBWSxDQUFDO0VBQzVDLHlDQUF5QyxjQUFjLENBQUM7RUFDeEQsMkNBQTJDLFVBQVUsRUFBRSx5QkFBaUIsRUFBakIsaUJBQWlCO0VBQ3hFO0VBQ0EsMENBQTBDLFlBQVksRUFBRSw2QkFBNkIsRUFBRSxrQkFBa0IsQ0FBQyxjQUFjO0VBQ3hILHdEQUF3RCxlQUFlLEVBQUUsY0FBYztFQUN2Riw2Q0FBNkMsaUJBQWlCO0VBQzlELGdEQUFnRCxVQUFVLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjtFQUM3Rjs7SUFFRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7YmFja2dyb3VuZDojZWNlY2VjOyBwYWRkaW5nOjEyMHB4IDAgIDgwcHg7IHBvc2l0aW9uOnJlbGF0aXZlOyBib3JkZXI6MXB4IHNvbGlkICNkZGR9XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbntiYWNrZ3JvdW5kOiNmZmY7IG1hcmdpbi1ib3R0b206MjBweDsgYm94LXNoYWRvdzowcHggMHB4IDgxcHggMCByZ2JhKDQ3LDQ3LDQ3LDAuMSk7IHRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDt9XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbi1pbWFnZXtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbi1pbWFnZSBpbWd7d2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IHRyYW5zaXRpb246YWxsIC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpIHJvdGF0ZSgwZGVnKTt9XHJcblxyXG4gIC5jYXJkIC5jYXJkLXNlY3Rpb246aG92ZXIgLmNhcmQtc2VjdGlvbi1pbWFnZSBpbWd7dHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO31cclxuXHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbi1pbWFnZSAuY2FyZC1wdXJjaGFzZXtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOnJpZ2h0O3JpZ2h0OjA7XHJcbiAgYm90dG9tOjA7d2lkdGg6MTAwJTtcclxuICB9XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbi1pbWFnZSAuY2FyZC1wdXJjaGFzZSBhe2JhY2tncm91bmQ6Z3JlZW47IGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxNHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBwYWRkaW5nOjVweCAyNXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuY2FyZC1zZWN0aW9uIC5jYXJkLWRlc2N7cGFkZGluZzozMHB4O31cclxuICAuY2FyZCAuY2FyZC1zZWN0aW9uIC5jYXJkLWRlc2MgLnRpdGxlIGgze2ZvbnQtc2l6ZToyNHB4O31cclxuICAuY2FyZCAuY2FyZC1zZWN0aW9uIC5jYXJkLWRlc2MgLnRpdGxlIGgzIGF7Y29sb3I6IzMzMzsgdGV4dC1kZWNvcmF0aW9uOjA7XHJcbiAgfVxyXG4gIC5jYXJkIC5jYXJkLXNlY3Rpb24gLmNhcmQtZGVzYyAuY2FyZC1pbmZve2Rpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nOjEwcHggMH1cclxuICAuY2FyZCAuY2FyZC1zZWN0aW9uIC5jYXJkLWRlc2MgLmNhcmQtaW5mbyAubGlzdC11bnN0eWxle2xpc3Qtc3R5bGU6bm9uZTsgcGFkZGluZy1sZWZ0OjB9XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbiAuY2FyZC1kZXNjIC5jYXJkLWluZm8gdWx7bWFyZ2luLWJvdHRvbTo2cHh9XHJcbiAgLmNhcmQgLmNhcmQtc2VjdGlvbiAuY2FyZC1kZXNjIC5jYXJkLWluZm8gdWwgbGl7Y29sb3I6IzMzMzsgZm9udC1zaXplOjE2cHg7IG1hcmdpbi1ib3R0b206NnB4fVxyXG4gIC5jYXJ0X2J0biB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <h3 class=\"text-center\">Bootstrap 4 card with Hover Effect</h3>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-section\">\r\n           <div class=\"card-section-image\">\r\n         <a href=\"#\">\r\n           <img src=\"http://www.ecologytheme.com/theme/eduwise/images/courses/courses_1.jpg\" class=\"img-fluid\">\r\n         </a>\r\n         <div class=\"card-purchase\">\r\n         <a>$ 150</a>\r\n         </div>\r\n         </div>\r\n         <div class=\"card-desc\">\r\n           <div class=\"title\">\r\n           <h3>Card Panel</h3>\r\n           </div>\r\n           <div class=\"card-info\">\r\n           <ul class=\"list-unstyle\">\r\n           <li><i class=\"far fa-calendar-alt\"></i> 130 Dyas</li>\r\n           <li><i class=\"far fa-user\"></i> Admin</li>\r\n           </ul>\r\n           <a href=\"\" class=\"cart_btn btn btn-dark\">Read More..</a>\r\n           </div>\r\n         </div>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-section\">\r\n           <div class=\"card-section-image\">\r\n         <a href=\"#\">\r\n           <img src=\"http://www.ecologytheme.com/theme/eduwise/images/courses/courses_1.jpg\" class=\"img-fluid\">\r\n         </a>\r\n         <div class=\"card-purchase\">\r\n         <a>$ 150</a>\r\n         </div>\r\n         </div>\r\n         <div class=\"card-desc\">\r\n           <div class=\"title\">\r\n           <h3>Card Panel</h3>\r\n           </div>\r\n           <div class=\"card-info\">\r\n           <ul class=\"list-unstyle\">\r\n           <li><i class=\"far fa-calendar-alt\"></i> 130 Dyas</li>\r\n           <li><i class=\"far fa-user\"></i> Admin</li>\r\n           </ul>\r\n           <a href=\"\" class=\"cart_btn btn btn-dark\">Read More..</a>\r\n           </div>\r\n         </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-section\">\r\n           <div class=\"card-section-image\">\r\n         <a href=\"#\">\r\n           <img src=\"http://www.ecologytheme.com/theme/eduwise/images/courses/courses_1.jpg\" class=\"img-fluid\">\r\n         </a>\r\n         <div class=\"card-purchase\">\r\n         <a>$ 150</a>\r\n         </div>\r\n         </div>\r\n         <div class=\"card-desc\">\r\n           <div class=\"title\">\r\n           <h3>Card Panel</h3>\r\n           </div>\r\n           <div class=\"card-info\">\r\n           <ul class=\"list-unstyle\">\r\n           <li><i class=\"far fa-calendar-alt\"></i> 130 Dyas</li>\r\n           <li><i class=\"far fa-user\"></i> Admin</li>\r\n           </ul>\r\n           <a href=\"\" class=\"cart_btn btn btn-dark\">Read More..</a>\r\n           </div>\r\n         </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/carrusel/carrusel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carrusel/carrusel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 64vh;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJydXNlbC9jYXJydXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FycnVzZWwvY2FycnVzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiA2NHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/carrusel/carrusel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carrusel/carrusel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[3]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[4]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ngb-carousel>\r\n"

/***/ }),

/***/ "./src/app/components/carrusel/carrusel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carrusel/carrusel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarruselComponent", function() { return CarruselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarruselComponent = /** @class */ (function () {
    function CarruselComponent() {
        //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
        this.images = ['../../../assets/img/juegos/piedrapapeltijera.gif',
            '../../../assets/img/juegos/velocidadaritmetica.gif',
            '../../../assets/img/juegos/tateti.gif',
            '../../../assets/img/juegos/anagrama.gif',
            '../../../assets/img/juegos/adivinanumero.gif'
        ];
    }
    CarruselComponent.prototype.ngOnInit = function () {
    };
    CarruselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrusel',
            template: __webpack_require__(/*! ./carrusel.component.html */ "./src/app/components/carrusel/carrusel.component.html"),
            styles: [__webpack_require__(/*! ./carrusel.component.css */ "./src/app/components/carrusel/carrusel.component.css")]
        })
    ], CarruselComponent);
    return CarruselComponent;
}());



/***/ }),

/***/ "./src/app/components/cronometro/cronometro.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cronometro/cronometro.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: bttf;\r\n  src: url('bttf.ttf') format(\"opentype\");\r\n}\r\n\r\n@-webkit-keyframes blink { 50% { border-color:aqua;}  }\r\n\r\n@keyframes blink { 50% { border-color:aqua;}  }\r\n\r\ntable{\r\n\tborder: 4px solid teal ;\r\n\t/* position: fixed ; */\r\n\twidth: 3.2em;\r\n\theight: 1.9em ;\r\n\ttext-align:center ;\r\n\tfont-size: 3.2rem ;\r\n\tfont-weight:normal;\r\n\tcolor: aqua;\r\n  background-color:#1d1d1d;\r\n  font-family: bttf;\r\n\t-webkit-animation: blink .5s step-end infinite alternate;\r\n\t        animation: blink .5s step-end infinite alternate;\r\n}\r\n\r\n/* .container{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcm9ub21ldHJvL2Nyb25vbWV0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQix1Q0FBbUU7QUFDckU7O0FBRUEsMkJBQW1CLE1BQU0saUJBQWlCLENBQUMsR0FBRzs7QUFBOUMsbUJBQW1CLE1BQU0saUJBQWlCLENBQUMsR0FBRzs7QUFDOUM7Q0FDQyx1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsV0FBVztFQUNWLHdCQUF3QjtFQUN4QixpQkFBaUI7Q0FDbEIsd0RBQWdEO1NBQWhELGdEQUFnRDtBQUNqRDs7QUFFQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcm9ub21ldHJvL2Nyb25vbWV0cm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBidHRmO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzLy9mb250cy9idHRmL2J0dGYudHRmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHsgNTAlIHsgYm9yZGVyLWNvbG9yOmFxdWE7fSAgfVxyXG50YWJsZXtcclxuXHRib3JkZXI6IDRweCBzb2xpZCB0ZWFsIDtcclxuXHQvKiBwb3NpdGlvbjogZml4ZWQgOyAqL1xyXG5cdHdpZHRoOiAzLjJlbTtcclxuXHRoZWlnaHQ6IDEuOWVtIDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlciA7XHJcblx0Zm9udC1zaXplOiAzLjJyZW0gO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRjb2xvcjogYXF1YTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFkMWQ7XHJcbiAgZm9udC1mYW1pbHk6IGJ0dGY7XHJcblx0YW5pbWF0aW9uOiBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4vKiAuY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cronometro/cronometro.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cronometro/cronometro.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table>\r\n        <tr><td>{{this.tiempoFormateado}}</td></tr>\r\n    </table>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/cronometro/cronometro.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cronometro/cronometro.component.ts ***!
  \***************************************************************/
/*! exports provided: CronometroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronometroComponent", function() { return CronometroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CronometroComponent = /** @class */ (function () {
    /* #endregion */
    function CronometroComponent() {
        /* #region  Atributos */
        this.fin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contadorDecimas = 0;
    }
    CronometroComponent.prototype.ngOnInit = function () {
        if (this.tiempo === 0 || this.tiempo === null || this.tiempo === undefined) {
            this.tiempo = 10; // Si no nos definen ningun tiempo por defecto seteamos 10
        }
        this.tiempoRestante = this.tiempo;
        this.start();
    };
    CronometroComponent.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.contadorDecimas++;
            _this.convertir(_this.contadorDecimas);
            if (_this.tiempoRestante - _this.segundos === 0 && _this.decimas === 0) {
                clearInterval(_this.interval);
                _this.fin.emit(true);
            }
        }, 10); // Usamos 10 porque mostramos decimas
    };
    CronometroComponent.prototype.convertir = function (contadorDecimas) {
        this.segundos = Math.floor(contadorDecimas / 100);
        this.decimas = contadorDecimas % 60;
        this.tiempoFormateado = (this.tiempoRestante - this.segundos).toString().padStart(2, '0') + ":" + this.decimas.toString().padStart(2, '0');
    };
    CronometroComponent.prototype.reset = function (tiempoRestante) {
        clearInterval(this.interval);
        this.decimas = 0;
        this.segundos = 0;
        this.minutos = 0;
        this.contadorDecimas = 0;
        this.tiempoRestante = tiempoRestante;
        this.start();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CronometroComponent.prototype, "fin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CronometroComponent.prototype, "tiempo", void 0);
    CronometroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cronometro',
            template: __webpack_require__(/*! ./cronometro.component.html */ "./src/app/components/cronometro/cronometro.component.html"),
            styles: [__webpack_require__(/*! ./cronometro.component.css */ "./src/app/components/cronometro/cronometro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CronometroComponent);
    return CronometroComponent;
}());



/***/ }),

/***/ "./src/app/components/genio/genio.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/genio/genio.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".burbuja {\r\n  position: relative;\r\n  top: 10px;\r\n  right:120px;\r\n}\r\n\r\n.genio {\r\n  position: relative;\r\n  bottom: 40px;\r\n  max-height: 350px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5pby9nZW5pby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuaW8vZ2VuaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXJidWphIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OjEyMHB4O1xyXG59XHJcblxyXG4uZ2VuaW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/genio/genio.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/genio/genio.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <div class=\"col-6\">\r\n      <app-burbuja-mensaje class=\"burbuja\" [mensaje1]=\"mensaje1\" [mensaje2]=\"mensaje2\" (miClick)=\"onClick($event)\"></app-burbuja-mensaje>\r\n      <img class=\"genio\" src=\"./../../../assets/img/Gnio-Akinator.gif\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/genio/genio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/genio/genio.component.ts ***!
  \*****************************************************/
/*! exports provided: GenioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenioComponent", function() { return GenioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GenioComponent = /** @class */ (function () {
    function GenioComponent() {
        this.miClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GenioComponent.prototype.ngOnInit = function () {
    };
    GenioComponent.prototype.onClick = function (e) {
        this.miClick.emit(e);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GenioComponent.prototype, "mensaje1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GenioComponent.prototype, "mensaje2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GenioComponent.prototype, "miClick", void 0);
    GenioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genio',
            template: __webpack_require__(/*! ./genio.component.html */ "./src/app/components/genio/genio.component.html"),
            styles: [__webpack_require__(/*! ./genio.component.css */ "./src/app/components/genio/genio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GenioComponent);
    return GenioComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carrusel {\r\n   background-image: url('fondo1.jpg')\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJ1c2VsIHtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy93YWxscGFwZXJzL2ZvbmRvMS5qcGdcIilcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid carrusel\">\r\n\r\n  <div class=\"container\">\r\n    <app-carrusel></app-carrusel>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\" style=\"background-color: #ececec\">\r\n\r\n  <div class=\"container\">\r\n    <br>\r\n    <app-card class=\"mt-5\"></app-card>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/logo/logo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/img/logos/Logos-utngames/logo-utngames-solo.png\" height=\"150px\" mt-20>\r\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/components/logo/logo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/menu-principal/menu-principal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/menu-principal/menu-principal.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin-top: 40px;\r\n  height: 75px;\r\n  }\r\n\r\n@font-face {\r\n    font-family: lato;\r\n    src: url('atari.ttf') format(\"opentype\");\r\n  }\r\n\r\n.logo {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'lato', 'arial', sans-serif;\r\n    font-size: 4rem;\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsd0NBQTRFO0VBQzlFOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtcHJpbmNpcGFsL21lbnUtcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgc3JjOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9hdGFyaS9hdGFyaS9hdGFyaS50dGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbGF0bycsICdhcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgfVxyXG5cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/components/menu-principal/menu-principal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/menu-principal/menu-principal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"#\">Anagrama</a>\r\n      <a mat-list-item [routerLink]=\"['/piedrapapelotijera']\" routerLinkActive=\"router-link-active\">Piedra, papel o tijera</a>\r\n      <a mat-list-item [routerLink]=\"['/aguilidad']\" routerLinkActive=\"router-link-active\">Agilidad Artimética</a>\r\n      <a mat-list-item [routerLink]=\"['/adivina']\" routerLinkActive=\"router-link-active\" >Adivina el número</a>\r\n      <a mat-list-item href=\"#\">TaTeTi</a>\r\n      <a mat-list-item href=\"#\">Mi Juego</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span><app-logo></app-logo></span>\r\n      <span class=\"ml-4 logo\">UTN</span><span style=\"color:orange\" class=\"logo ml-2\">Games</span>\r\n      <button class=\"btn\"><i class=\"fa fa-home\"></i></button>\r\n      <app-boton-login style=\"position: absolute; right: 10px;\"></app-boton-login>\r\n    </mat-toolbar>\r\n\r\n    <!-- Add Content Here -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/menu-principal/menu-principal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/menu-principal/menu-principal.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalComponent", function() { return MenuPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MenuPrincipalComponent = /** @class */ (function () {
    function MenuPrincipalComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-principal',
            template: __webpack_require__(/*! ./menu-principal.component.html */ "./src/app/components/menu-principal/menu-principal.component.html"),
            styles: [__webpack_require__(/*! ./menu-principal.component.css */ "./src/app/components/menu-principal/menu-principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MenuPrincipalComponent);
    return MenuPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-game-over1/modal-game-over1.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/modal-game-over1/modal-game-over1.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes blink-Modal { 50% { border-color: #ff0000; }  }\r\n@keyframes blink-Modal { 50% { border-color: #ff0000; }  }\r\n.modal-table {\r\n\tborder: 8px solid #000000 ;\r\n\t/* position: fixed ;\r\n\ttop: 50% ;\r\n\tright: 50% ;\r\n\twidth: 20em ;\r\n\theight: 6em ;\r\n\tmargin: -2.5em -10em ; */\r\n\ttext-align:center ;\r\n\tfont-family: monospace ;\r\n\tfont-size: 25px ;\r\n\tfont-weight: bold;\r\n\tcolor: #ff0000 ;\r\n\tbackground-color: black ;\r\n  -webkit-animation: blink-Modal .5s step-end infinite alternate;\r\n          animation: blink-Modal .5s step-end infinite alternate;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 500%;\r\n  min-width: 490px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\nsection {\r\n\tbackground-color: #000000 ;\r\n\ttext-align:center ;\r\n\tfont-family: arcade, monospace ;\r\n\tfont-size: 15px ;\r\n\tfont-weight: bold ;\r\n  color: #ff0000 ;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 500%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1nYW1lLW92ZXIxL21vZGFsLWdhbWUtb3ZlcjEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBeUIsTUFBTSxxQkFBcUIsRUFBRSxHQUFHO0FBQXpELHlCQUF5QixNQUFNLHFCQUFxQixFQUFFLEdBQUc7QUFDekQ7Q0FDQywwQkFBMEI7Q0FDMUI7Ozs7O3lCQUt3QjtDQUN4QixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLHdCQUF3QjtFQUN2Qiw4REFBc0Q7VUFBdEQsc0RBQXNEO0VBQ3RELGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGdCQUFnQjtFQUNoQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDO0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1nYW1lLW92ZXIxL21vZGFsLWdhbWUtb3ZlcjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYmxpbmstTW9kYWwgeyA1MCUgeyBib3JkZXItY29sb3I6ICNmZjAwMDA7IH0gIH1cclxuLm1vZGFsLXRhYmxlIHtcclxuXHRib3JkZXI6IDhweCBzb2xpZCAjMDAwMDAwIDtcclxuXHQvKiBwb3NpdGlvbjogZml4ZWQgO1xyXG5cdHRvcDogNTAlIDtcclxuXHRyaWdodDogNTAlIDtcclxuXHR3aWR0aDogMjBlbSA7XHJcblx0aGVpZ2h0OiA2ZW0gO1xyXG5cdG1hcmdpbjogLTIuNWVtIC0xMGVtIDsgKi9cclxuXHR0ZXh0LWFsaWduOmNlbnRlciA7XHJcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSA7XHJcblx0Zm9udC1zaXplOiAyNXB4IDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogI2ZmMDAwMCA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2sgO1xyXG4gIGFuaW1hdGlvbjogYmxpbmstTW9kYWwgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAwJTtcclxuICBtaW4td2lkdGg6IDQ5MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwIDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlciA7XHJcblx0Zm9udC1mYW1pbHk6IGFyY2FkZSwgbW9ub3NwYWNlIDtcclxuXHRmb250LXNpemU6IDE1cHggO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkIDtcclxuICBjb2xvcjogI2ZmMDAwMCA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/modal-game-over1/modal-game-over1.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-game-over1/modal-game-over1.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"modal-GameOver\">\r\n<table class=\"modal-table\">\r\n    <tr>\r\n      <td style=\"font-size: 2.5rem\">GAME OVER</td>\r\n    </tr>\r\n    <tr>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-1\"></div>\r\n        <div class=\"col-6\"><button (click)=\"onJugarDeNuevo()\" class=\"mb-4\">Jugar de nuevo</button></div>\r\n        <div class=\"col-4\"><button>Salir</button></div>\r\n      </div>\r\n    </tr>\r\n  </table>\r\n<hr>\r\n<pre>{{closeResult}}</pre>\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/modal-game-over1/modal-game-over1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-game-over1/modal-game-over1.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalGameOver1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGameOver1Component", function() { return ModalGameOver1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ModalGameOver1Component = /** @class */ (function () {
    function ModalGameOver1Component(modalService, router) {
        this.modalService = modalService;
        this.jugarDeNuevo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.salir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ModalGameOver1Component.prototype.ngOnInit = function () {
    };
    ModalGameOver1Component.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalGameOver1Component.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalGameOver1Component.prototype.onJugarDeNuevo = function () {
        this.jugarDeNuevo.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModalGameOver1Component.prototype, "jugarDeNuevo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModalGameOver1Component.prototype, "salir", void 0);
    ModalGameOver1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-game-over1',
            template: __webpack_require__(/*! ./modal-game-over1.component.html */ "./src/app/components/modal-game-over1/modal-game-over1.component.html"),
            styles: [__webpack_require__(/*! ./modal-game-over1.component.css */ "./src/app/components/modal-game-over1/modal-game-over1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]])
    ], ModalGameOver1Component);
    return ModalGameOver1Component;
}());



/***/ }),

/***/ "./src/app/components/modal-game-over2/modal-game-over2.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/modal-game-over2/modal-game-over2.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZ2FtZS1vdmVyMi9tb2RhbC1nYW1lLW92ZXIyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/modal-game-over2/modal-game-over2.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-game-over2/modal-game-over2.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal-game-over2/modal-game-over2.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/modal-game-over2/modal-game-over2.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalGameOver2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGameOver2Component", function() { return ModalGameOver2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalGameOver2Component = /** @class */ (function () {
    function ModalGameOver2Component() {
        this.name = 'Angular 4';
    }
    ModalGameOver2Component.prototype.ngOnInit = function () {
    };
    ModalGameOver2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-game-over2',
            template: __webpack_require__(/*! ./modal-game-over2.component.html */ "./src/app/components/modal-game-over2/modal-game-over2.component.html"),
            styles: [__webpack_require__(/*! ./modal-game-over2.component.css */ "./src/app/components/modal-game-over2/modal-game-over2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalGameOver2Component);
    return ModalGameOver2Component;
}());



/***/ }),

/***/ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: matematica;\r\n  src: url('Mathematical.ttf') format(\"truetype\");\r\n}\r\n\r\nh2 {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n\r\n.canvas {\r\n  background-image: url('RegalAssuredGossamerwingedbutterfly-size_restricted.gif');\r\n  /* padding: 10px; */\r\n  background-repeat: no-repeat;\r\n  border-radius: 25px;\r\n  border: 2px solid black;\r\n  /* background-color: #1d1d1d; */\r\n  background-color: #C6F88C;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\nimg.frame {\r\n  /* border-image: url('//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/frame.png') 93 92 87 92 stretch stretch; */\r\n  /* //border-image: url('../../../assets/img/van/RegalAssuredGossamerwingedbutterfly-size_restricted.gif') 1 92 1 92 stretch stretch; */\r\n  border-color: #f4be52;\r\n  border-style: inset;\r\n  border-width: 10px;\r\n  display: block;\r\n  width: auto;\r\n  background-color: #ffe;\r\n  margin: 0 auto;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media all and (max-width: 500px) {\r\n  img.frame {\r\n    border-width: 0px;\r\n    width: 100%; }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waWVkcmEtcGFwZWwtdGlqZXJhL3BpZWRyYS1wYXBlbC10aWplcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QiwrQ0FBbUY7QUFDckY7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFJQTtFQUNFLGdGQUF3RztFQUN4RyxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEdBQTRHO0VBQzVHLHNJQUFzSTtFQUN0SSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBRTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbWF0ZW1hdGljYTtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy8vZm9udHMvbWF0aGVtYXRpY2FsL01hdGhlbWF0aWNhbC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLmNhbnZhcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy92YW4vUmVnYWxBc3N1cmVkR29zc2FtZXJ3aW5nZWRidXR0ZXJmbHktc2l6ZV9yZXN0cmljdGVkLmdpZlwiKTtcclxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNkY4OEM7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZy5mcmFtZSB7XHJcbiAgLyogYm9yZGVyLWltYWdlOiB1cmwoJy8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQyNzMvZnJhbWUucG5nJykgOTMgOTIgODcgOTIgc3RyZXRjaCBzdHJldGNoOyAqL1xyXG4gIC8qIC8vYm9yZGVyLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdmFuL1JlZ2FsQXNzdXJlZEdvc3NhbWVyd2luZ2VkYnV0dGVyZmx5LXNpemVfcmVzdHJpY3RlZC5naWYnKSAxIDkyIDEgOTIgc3RyZXRjaCBzdHJldGNoOyAqL1xyXG4gIGJvcmRlci1jb2xvcjogI2Y0YmU1MjtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGltZy5mcmFtZSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlOyB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"canvas\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-2\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-6\">\r\n            <app-boton-arcade-piedra (click)=\"onClick_Piedra()\"></app-boton-arcade-piedra>\r\n            <app-boton-arcade-papel  (click)=\"onClick_Papel()\"></app-boton-arcade-papel>\r\n            <app-boton-arcade-tijera (click)=\"onClick_Tijera()\"></app-boton-arcade-tijera>\r\n          </div>\r\n          <div class=\"col-2\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-8\">\r\n        <img [src]=\"imagenActual\" alt=\"\" class=\"frame\">\r\n        <app-you-win *ngIf=\"mostrarMensaje\" [efecto]=\"efectoMensaje\" [mensaje]=\"mensaje\"></app-you-win>\r\n      </div>\r\n\r\n      <div class=\"col-2\"></div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PiedraPapelTijeraComponent = /** @class */ (function () {
    function PiedraPapelTijeraComponent() {
        this.mensaje = '';
        this.mostrarMensaje = true;
        this.efectoMensaje = false;
        this.imagenInicio = '..//..//..//assets//img//piedraPapelTijera/imagenInicio 0.png';
        this.PiedraPapelOTijera = ['piedra', 'papel', 'tijera'];
        this.estado = 'esperando';
        this.imagenActual = this.imagenInicio;
    }
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    PiedraPapelTijeraComponent.prototype.onClick_Tijera = function () {
        if (this.estado === 'esperando') {
            this.nuevoJuego('tijera');
        }
    };
    PiedraPapelTijeraComponent.prototype.onClick_Piedra = function () {
        if (this.estado === 'esperando') {
            this.nuevoJuego('piedra');
        }
    };
    PiedraPapelTijeraComponent.prototype.onClick_Papel = function () {
        if (this.estado === 'esperando') {
            this.nuevoJuego('papel');
        }
    };
    PiedraPapelTijeraComponent.prototype.nuevoJuego = function (juegoJugador) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var indice;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.estado = 'jugando';
                        this.mensaje = '';
                        this.imagenActual = this.imagenInicio;
                        this.efectoMensaje = false;
                        return [4 /*yield*/, this.delay(1000)];
                    case 1:
                        _a.sent();
                        indice = Math.floor(Math.random() * 3);
                        this.juegoComputer = this.PiedraPapelOTijera[indice];
                        this.imagenActual = "..//..//..//assets//img//piedraPapelTijera//sinRepetir//" + juegoJugador + "-" + this.juegoComputer + ".gif";
                        console.log(this.imagenActual);
                        return [4 /*yield*/, this.delay(2000)];
                    case 2:
                        _a.sent();
                        this.verificar(juegoJugador);
                        this.efectoMensaje = true;
                        this.estado = 'esperando';
                        return [2 /*return*/];
                }
            });
        });
    };
    PiedraPapelTijeraComponent.prototype.delay = function (timeInMillis) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, timeInMillis); });
    };
    PiedraPapelTijeraComponent.prototype.verificar = function (juegoJugador) {
        switch (juegoJugador) {
            case 'piedra':
                switch (this.juegoComputer) {
                    case 'piedra':
                        this.mensaje = 'TIE';
                        break;
                    case 'tijera':
                        this.mensaje = 'YOU WIN';
                        break;
                    case 'papel':
                        this.mensaje = 'YOU LOSE';
                        break;
                }
                break;
            case 'papel':
                switch (this.juegoComputer) {
                    case 'papel':
                        this.mensaje = 'TIE';
                        break;
                    case 'piedra':
                        this.mensaje = 'YOU WIN';
                        break;
                    case 'tijera':
                        this.mensaje = 'YOU LOSE';
                        break;
                }
                break;
            case 'tijera':
                switch (this.juegoComputer) {
                    case 'tijera':
                        this.mensaje = 'TIE';
                        break;
                    case 'papel':
                        this.mensaje = 'YOU WIN';
                        break;
                    case 'piedra':
                        this.mensaje = 'YOU LOSE';
                        break;
                }
                break;
        }
    };
    PiedraPapelTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-piedra-papel-tijera',
            template: __webpack_require__(/*! ./piedra-papel-tijera.component.html */ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.html"),
            styles: [__webpack_require__(/*! ./piedra-papel-tijera.component.css */ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PiedraPapelTijeraComponent);
    return PiedraPapelTijeraComponent;
}());



/***/ }),

/***/ "./src/app/components/you-win/you-win.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/you-win/you-win.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: Revue;\r\n  src: url('revuen.ttf') format(\"truetype\");\r\n}\r\n\r\n\r\n.tracking-in-contract-bck {\r\n\t-webkit-animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\r\n\t        animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\r\n}\r\n\r\n\r\n@-webkit-keyframes tracking-in-contract-bck {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n            transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n@keyframes tracking-in-contract-bck {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    -webkit-transform: translateZ(400px);\r\n            transform: translateZ(400px);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    opacity: 0.6;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n.centered {\r\n  font-family: Revue;\r\n  left: 0;\r\n  position:absolute;\r\n  text-align:center;\r\n  bottom: 30px;\r\n  width: 100%;\r\n  color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95b3Utd2luL3lvdS13aW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5Q0FBc0U7QUFDeEU7OztBQUdBO0NBQ0MsNEZBQTRGO1NBQ3BGLG9GQUFvRjtBQUM3Rjs7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixvQ0FBb0M7WUFDNUIsNEJBQTRCO0lBQ3BDLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQ0FBZ0M7WUFDeEIsd0JBQXdCO0lBQ2hDLFVBQVU7RUFDWjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztZQUM1Qiw0QkFBNEI7SUFDcEMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdDQUFnQztZQUN4Qix3QkFBd0I7SUFDaEMsVUFBVTtFQUNaO0FBQ0Y7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy95b3Utd2luL3lvdS13aW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBSZXZ1ZTtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9yZXZ1ZTMvcmV2dWVuLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuXHJcbi50cmFja2luZy1pbi1jb250cmFjdC1iY2sge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiB0cmFja2luZy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiB0cmFja2luZy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHJhY2tpbmctaW4tY29udHJhY3QtYmNrIHtcclxuICAwJSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB0cmFja2luZy1pbi1jb250cmFjdC1iY2sge1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig0MDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig0MDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICBmb250LWZhbWlseTogUmV2dWU7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3R0b206IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/you-win/you-win.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/you-win/you-win.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"centered\" [ngClass]=\"{'tracking-in-contract-bck': this.efecto === true}\">{{mensaje}}</h2>\r\n"

/***/ }),

/***/ "./src/app/components/you-win/you-win.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/you-win/you-win.component.ts ***!
  \*********************************************************/
/*! exports provided: YouWinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouWinComponent", function() { return YouWinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YouWinComponent = /** @class */ (function () {
    function YouWinComponent() {
        this.efecto = false;
    }
    YouWinComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], YouWinComponent.prototype, "mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], YouWinComponent.prototype, "efecto", void 0);
    YouWinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-you-win',
            template: __webpack_require__(/*! ./you-win.component.html */ "./src/app/components/you-win/you-win.component.html"),
            styles: [__webpack_require__(/*! ./you-win.component.css */ "./src/app/components/you-win/you-win.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YouWinComponent);
    return YouWinComponent;
}());



/***/ }),

/***/ "./src/app/directives/solo-numeros.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/solo-numeros.directive.ts ***!
  \******************************************************/
/*! exports provided: SoloNumerosDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoloNumerosDirective", function() { return SoloNumerosDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoloNumerosDirective = /** @class */ (function () {
    function SoloNumerosDirective(_el) {
        this._el = _el;
    }
    SoloNumerosDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SoloNumerosDirective.prototype, "onInputChange", null);
    SoloNumerosDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSoloNumeros]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SoloNumerosDirective);
    return SoloNumerosDirective;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/adivina-el-numero/adivina-el-numero.component */ "./src/app/components/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/components/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _components_aguilidad_aritmetica_aguilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/aguilidad-aritmetica/aguilidad-aritmetica.component */ "./src/app/components/aguilidad-aritmetica/aguilidad-aritmetica.component.ts");







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'adivina', component: _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
    { path: 'piedrapapelotijera', component: _components_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__["PiedraPapelTijeraComponent"] },
    { path: 'aguilidad', component: _components_aguilidad_aritmetica_aguilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AguilidadAritmeticaComponent"] }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Infistioticos\Documents\UTN FRA\Nueva carpeta (3)\TP-Mi-Sala-de-Juegos-ANGULAR-\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map