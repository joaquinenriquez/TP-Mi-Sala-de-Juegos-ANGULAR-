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

module.exports = "<app-menu-principal>\r\n  <div class=\"container mt-3 mb-3\">\r\n      <router-outlet class=\"container\"></router-outlet>\r\n  </div>\r\n</app-menu-principal>\r\n\r\n"

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
/* harmony import */ var _components_anagramas_anagramas_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/anagramas/anagramas.component */ "./src/app/components/anagramas/anagramas.component.ts");
/* harmony import */ var _components_cronometro2_cronometro2_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/cronometro2/cronometro2.component */ "./src/app/components/cronometro2/cronometro2.component.ts");
/* harmony import */ var _components_boton3_boton3_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/boton3/boton3.component */ "./src/app/components/boton3/boton3.component.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_puntos_puntos_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/puntos/puntos.component */ "./src/app/components/puntos/puntos.component.ts");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/error404/error404.component */ "./src/app/components/error404/error404.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _components_mi_pong_mi_pong_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/mi-pong/mi-pong.component */ "./src/app/components/mi-pong/mi-pong.component.ts");









































// firebase







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
                _directives_solo_numeros_directive__WEBPACK_IMPORTED_MODULE_33__["SoloNumerosDirective"],
                _components_anagramas_anagramas_component__WEBPACK_IMPORTED_MODULE_34__["AnagramasComponent"],
                _components_cronometro2_cronometro2_component__WEBPACK_IMPORTED_MODULE_35__["Cronometro2Component"],
                _components_boton3_boton3_component__WEBPACK_IMPORTED_MODULE_36__["Boton3Component"],
                _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_37__["TatetiComponent"],
                _components_puntos_puntos_component__WEBPACK_IMPORTED_MODULE_38__["PuntosComponent"],
                _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_39__["Error404Component"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_40__["LoginComponent"],
                _components_mi_pong_mi_pong_component__WEBPACK_IMPORTED_MODULE_47__["MiPongComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes_routes_module__WEBPACK_IMPORTED_MODULE_31__["RoutesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"].forRoot(),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_42__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_41__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_43__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_44__["AngularFireStorageModule"]
            ],
            providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_46__["AngularFireAuth"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_45__["AngularFirestore"]],
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

/***/ "./src/app/class/juego-anagrama.ts":
/*!*****************************************!*\
  !*** ./src/app/class/juego-anagrama.ts ***!
  \*****************************************/
/*! exports provided: JuegoAnagrama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAnagrama", function() { return JuegoAnagrama; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./juego */ "./src/app/class/juego.ts");


var JuegoAnagrama = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, 'Anagrama', gano, jugador) || this;
        _this.anagramasUsados = new Array();
        _this.listaAnagramas = [
            { id: 1, palabras: ['Alegan', 'Angela'] },
            { id: 2, palabras: ['Valora', 'Alvaro'] },
            { id: 3, palabras: ['Colinas', 'Nicolas'] },
            { id: 5, palabras: ['Quieren', 'Enrique'] },
            { id: 6, palabras: ['Riesgo', 'Sergio'] },
            { id: 7, palabras: ['Ramón', 'Norma'] },
            { id: 8, palabras: ['Poder', 'Pedro'] },
            { id: 9, palabras: ['Mora', 'Roma'] },
            { id: 10, palabras: ['Saunas', 'Teresa'] },
            { id: 11, palabras: ['Ventilan', 'Valentin'] },
            { id: 12, palabras: ['Cardiografia', 'radiografia'] },
            { id: 13, palabras: ['Desamparador', 'desparramado'] },
            { id: 14, palabras: ['Conservadora', 'conversadora'] },
            { id: 15, palabras: ['Ironicamente', 'renacimiento'] },
            { id: 16, palabras: ['Escandalizar', 'zascandilear'] },
            { id: 17, palabras: ['Enfriamiento', 'refinamiento'] },
            { id: 18, palabras: ['Sórdidamente', 'desmentidora'] },
            { id: 19, palabras: ['Materialismo', 'memorialista'] },
            { id: 20, palabras: ['Energeticamente', 'genericamente'] },
            { id: 21, palabras: ['Presuposicion', 'superposicion'] },
            { id: 22, palabras: ['Enamoramientos', 'armoniosamente'] },
            { id: 23, palabras: ['Rectificable', 'certificable'] },
            { id: 24, palabras: ['Reconquistados', 'conquistadores'] },
            { id: 25, palabras: ['Escabullimiento', 'bulliciosamente'] },
            { id: 26, palabras: ['Electromagnetico', 'magnetoelectrico'] },
            { id: 27, palabras: ['Imponderablemente', 'imperdonablemente'] },
            { id: 28, palabras: ['Armonizacion', 'romanizacion'] },
            { id: 29, palabras: ['Pronosticacion', 'contraposicion'] },
            { id: 30, palabras: ['Nepal', 'panel'] },
            { id: 31, palabras: ['Agonista', 'Santiago'] },
            { id: 32, palabras: ['Prisa', 'Paris'] },
            { id: 33, palabras: ['Resto', 'retos'] }
        ];
        return _this;
    }
    JuegoAnagrama.prototype.verificar = function () {
        var auxReturn = false;
        if (this.anagramaActual.palabras[1].toLocaleLowerCase() === this.respuesta.toLocaleLowerCase()) {
            auxReturn = true;
            this.puntos++;
        }
        else {
            auxReturn = false;
            this.puntos--;
        }
        return auxReturn;
    };
    JuegoAnagrama.prototype.nuevoJuego = function () {
        var indiceRamdon = Math.floor(Math.random() * this.listaAnagramas.length);
        for (var i = 0; i < this.anagramasUsados.length; i++) {
            if (indiceRamdon === this.anagramasUsados[i]) {
                i = 0;
                indiceRamdon = Math.floor(Math.random() * this.listaAnagramas.length);
                continue;
            }
        }
        this.anagramasUsados.push(indiceRamdon);
        this.anagramaActual = this.listaAnagramas[indiceRamdon];
        console.log(this.anagramaActual.palabras[0], this.anagramaActual.palabras[1]);
        return this.anagramaActual;
    };
    return JuegoAnagrama;
}(_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"]));



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

/***/ "./src/app/class/miPong/controles.enum.ts":
/*!************************************************!*\
  !*** ./src/app/class/miPong/controles.enum.ts ***!
  \************************************************/
/*! exports provided: Controles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controles", function() { return Controles; });
var Controles;
(function (Controles) {
    Controles[Controles["Arriba"] = 38] = "Arriba";
    Controles[Controles["Abajo"] = 40] = "Abajo";
})(Controles || (Controles = {}));


/***/ }),

/***/ "./src/app/class/miPong/juego-pong.ts":
/*!********************************************!*\
  !*** ./src/app/class/miPong/juego-pong.ts ***!
  \********************************************/
/*! exports provided: JuegoPong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPong", function() { return JuegoPong; });
/* harmony import */ var _paleta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paleta */ "./src/app/class/miPong/paleta.ts");
/* harmony import */ var _pelota__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pelota */ "./src/app/class/miPong/pelota.ts");


var JuegoPong = /** @class */ (function () {
    function JuegoPong(height, width) {
        this.height = height;
        this.width = width;
        // Construct game objects
        this.pelota = new _pelota__WEBPACK_IMPORTED_MODULE_1__["Pelota"](15, 15, 2, { x: height / 2, y: width / 2 }, { x: 1, y: 1 });
        this.paletaJugador = new _paleta__WEBPACK_IMPORTED_MODULE_0__["Paleta"](100, 20, 1.5, { x: 50, y: height / 2 });
        this.paletaComputadora = new _paleta__WEBPACK_IMPORTED_MODULE_0__["Paleta"](100, 20, .8, { x: width - 50, y: height / 2 });
    }
    JuegoPong.prototype.restart = function () {
        this.pelota = new _pelota__WEBPACK_IMPORTED_MODULE_1__["Pelota"](15, 15, 2, { x: this.height / 2, y: this.width / 2 }, { x: 1, y: 1 });
    };
    JuegoPong.prototype.controlJuego = function (controlState) {
        this.pelota.mover();
        // Set acceleration, move player paddle based on input
        var paddleBounds = this.paletaJugador.getLimitesColision();
        if (controlState.arribaPresionado && paddleBounds.superior > 0) {
            this.paletaJugador.acelerarHaciaArriba(.03);
        }
        else if (controlState.abajoPresionado && paddleBounds.inferior < this.height) {
            this.paletaJugador.acelerarHaciaAbajo(.03);
        }
        else {
            this.paletaJugador.desacelerar(.05);
        }
        this.paletaJugador.mover();
        this.moveEnemyPaleta();
        this.checkCollisions();
    };
    JuegoPong.prototype.moveEnemyPaleta = function () {
        if (this.pelota.getPosicion().y < this.paletaComputadora.getPosicion().y)
            this.paletaComputadora.acelerarHaciaArriba(1);
        else
            this.paletaComputadora.acelerarHaciaAbajo(1);
        this.paletaComputadora.mover();
    };
    JuegoPong.prototype.checkCollisions = function () {
        // Bounce off superior/inferior
        var pelotaBounds = this.pelota.getLimitesColision();
        if (pelotaBounds.inferior >= this.height || pelotaBounds.superior <= 0)
            this.pelota.cambiarSentidoY();
        var paddleBounds = this.paletaJugador.getLimitesColision();
        // Don't let paddle go past boundaries
        if (paddleBounds.superior <= 0 || paddleBounds.inferior >= this.height)
            this.paletaJugador.desacelerar(1);
        // Player paddle hit
        if (pelotaBounds.izquierda <= paddleBounds.derecha &&
            paddleBounds.derecha - pelotaBounds.izquierda <= 3 &&
            pelotaBounds.inferior >= paddleBounds.superior &&
            pelotaBounds.superior <= paddleBounds.inferior) {
            this.pelota.cambiarSentidoX();
            // Set vertical speed ratio by taking ratio of
            // dist(centerOfPelota, centerOfPaleta) to dist(superiorOfPaleta, centerOfPaleta)
            // Negate because pixels go up as we go down :)
            var vsr = -(this.pelota.getPosicion().y - this.paletaJugador.getPosicion().y)
                / (paddleBounds.superior - this.paletaJugador.getPosicion().y);
            // Max vsr is 1
            vsr = Math.min(vsr, 1);
            this.pelota.setVelocidadVertical(vsr);
        }
        // Enemy paddle hit
        paddleBounds = this.paletaComputadora.getLimitesColision();
        if (pelotaBounds.derecha <= paddleBounds.izquierda &&
            paddleBounds.izquierda - pelotaBounds.derecha <= 3 &&
            pelotaBounds.inferior >= paddleBounds.superior &&
            pelotaBounds.superior <= paddleBounds.inferior) {
            this.pelota.cambiarSentidoX();
            // Set vertical speed ratio by taking ratio of
            // dist(centerOfPelota, centerOfPaleta) to dist(superiorOfPaleta, centerOfPaleta)
            // Negate because pixels go up as we go down :)
            var vsr = -(this.pelota.getPosicion().y - this.paletaComputadora.getPosicion().y)
                / (paddleBounds.superior - this.paletaComputadora.getPosicion().y);
            // Max vsr is 1
            vsr = Math.min(vsr, 1);
            this.pelota.setVelocidadVertical(vsr);
        }
    };
    JuegoPong.prototype.gameOver = function () {
        var collisionBoundaries = this.pelota.getLimitesColision();
        var auxReturn = false;
        if (this.pelota.getLimitesColision().izquierda <= 0) {
            this.ganador = 'jugador';
            auxReturn = true;
        }
        else if (this.pelota.getLimitesColision().derecha >= this.width) {
            this.ganador = 'computadora';
            auxReturn = true;
        }
        else {
            auxReturn = false;
        }
        return auxReturn;
    };
    return JuegoPong;
}());



/***/ }),

/***/ "./src/app/class/miPong/objeto-movible.ts":
/*!************************************************!*\
  !*** ./src/app/class/miPong/objeto-movible.ts ***!
  \************************************************/
/*! exports provided: ObjetoMovible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjetoMovible", function() { return ObjetoMovible; });
var ObjetoMovible = /** @class */ (function () {
    function ObjetoMovible(alto, ancho, velocidadMaxima, posicion) {
        this.alto = alto;
        this.ancho = ancho;
        this.velocidadMaxima = velocidadMaxima;
        this.posicion = posicion;
    }
    ObjetoMovible.prototype.mover = function (relacionVelocidad) {
        this.posicion.x += this.velocidadMaxima * relacionVelocidad.x;
        this.posicion.y += this.velocidadMaxima * relacionVelocidad.y;
    };
    ObjetoMovible.prototype.getPosicion = function () {
        return this.posicion;
    };
    ObjetoMovible.prototype.getLimitesColision = function () {
        // La posicion de nuestro objeto es en base al medio del objeto (por eso /2)
        return {
            superior: this.posicion.y - this.alto / 2,
            inferior: this.posicion.y + this.alto / 2,
            derecha: this.posicion.x + this.ancho / 2,
            izquierda: this.posicion.x - this.ancho / 2
        };
    };
    ObjetoMovible.prototype.getAncho = function () {
        return this.ancho;
    };
    ObjetoMovible.prototype.getAlto = function () {
        return this.alto;
    };
    return ObjetoMovible;
}());



/***/ }),

/***/ "./src/app/class/miPong/paleta.ts":
/*!****************************************!*\
  !*** ./src/app/class/miPong/paleta.ts ***!
  \****************************************/
/*! exports provided: Paleta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paleta", function() { return Paleta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objeto_movible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objeto-movible */ "./src/app/class/miPong/objeto-movible.ts");


var Paleta = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Paleta, _super);
    function Paleta(alto, ancho, velocidadMaxima, posicion) {
        var _this = _super.call(this, alto, ancho, velocidadMaxima, posicion) || this;
        _this.velocidad = { x: 0, y: 0 };
        return _this;
    }
    /**
     * Acelera hasta la velocidad maxima en direccion hacia abajo
     * @param ratioDeCambio - Es el porcentaje de velocidad maxima hasta donde la paleta deberia acelerar
     */
    Paleta.prototype.acelerarHaciaAbajo = function (ratioDeCambio) {
        if (ratioDeCambio < 0 || ratioDeCambio > 1) {
            return;
        }
        this.velocidad.y = Math.min(1, this.velocidad.y + ratioDeCambio);
        this.mover();
    };
    /**
     * Acelera hasta la velocidad maxima en direccion hacia arriba
     * @param ratioDeCambio - Es el porcentaje de velocidad maxima hasta donde la paleta deberia acelerar
     */
    Paleta.prototype.acelerarHaciaArriba = function (ratioDeCambio) {
        if (ratioDeCambio < 0 || ratioDeCambio > 1) {
            return;
        }
        this.velocidad.y = Math.max(-1, this.velocidad.y - ratioDeCambio);
        this.mover();
    };
    /**
     * Desacelera el objeto hacia cero
     * @param ratioDeCambio - Es el porcentaje de velocidad maxima que la paleta deberia desacelerar
     */
    Paleta.prototype.desacelerar = function (ratioDeCambio) {
        if (this.velocidad.y < 0) {
            this.velocidad.y = Math.min(this.velocidad.y + ratioDeCambio, 0);
        }
        else if (this.velocidad.y > 0) {
            this.velocidad.y = Math.max(this.velocidad.y - ratioDeCambio, 0);
        }
        this.mover();
    };
    Paleta.prototype.mover = function () {
        _super.prototype.mover.call(this, this.velocidad);
    };
    return Paleta;
}(_objeto_movible__WEBPACK_IMPORTED_MODULE_1__["ObjetoMovible"]));



/***/ }),

/***/ "./src/app/class/miPong/pelota.ts":
/*!****************************************!*\
  !*** ./src/app/class/miPong/pelota.ts ***!
  \****************************************/
/*! exports provided: Pelota */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pelota", function() { return Pelota; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objeto_movible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objeto-movible */ "./src/app/class/miPong/objeto-movible.ts");


var Pelota = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Pelota, _super);
    function Pelota(alto, ancho, velocidadMaxima, posicion, velocidad) {
        var _this = _super.call(this, alto, ancho, velocidadMaxima, posicion) || this;
        _this.velocidad = velocidad;
        return _this;
    }
    /**
     * Cambia el sentido de la pelotita para cuando llega un limite en X (toca la paleta de un jugador)
     */
    Pelota.prototype.cambiarSentidoX = function () {
        this.velocidad.x = -this.velocidad.x;
    };
    /**
     * Cambia el sentido de la pelotita para cuando llega un limite en Y (toca un borde superior o inferior)
     */
    Pelota.prototype.cambiarSentidoY = function () {
        this.velocidad.y = -this.velocidad.y;
    };
    /**
     * En nuestra version del juego solo tendremos velocidad variable en Y (no en X)
     */
    Pelota.prototype.setVelocidadVertical = function (velocidadVertical) {
        this.velocidad.y = velocidadVertical;
    };
    /**
     * Mueve el objeto a la velocidad especificada
     */
    Pelota.prototype.mover = function () {
        _super.prototype.mover.call(this, this.velocidad);
    };
    return Pelota;
}(_objeto_movible__WEBPACK_IMPORTED_MODULE_1__["ObjetoMovible"]));



/***/ }),

/***/ "./src/app/components/adivina-el-numero/adivina-el-numero.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/adivina-el-numero/adivina-el-numero.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: matematica;\r\n  src: url('Mathematical.ttf') format(\"truetype\");\r\n}\r\n\r\nh2 {\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n}\r\n\r\n.operador1 {\r\n  background-color:#1d1d1d;\r\n  font-family: matematica;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 4.5rem;\r\n  border-radius: 25px;\r\n  border: 2px solid aqua;\r\n\r\n}\r\n\r\n/* input {\r\n  width: 10rem;\r\n  font-size: 2rem;\r\n  margin: 3rem 0;\r\n} */\r\n\r\n.canvas {\r\n  background-image: url('pay-530338_1920-900x636.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 25px;\r\n  border: 2px solid black;\r\n  background-size: cover;\r\n  background-color: dimgray;\r\n  padding: 2px;\r\n  border: 3px solid #000;\r\n  box-shadow: 6px 6px 0 #aaa;\r\n  max-height: 480px;\r\n  min-height: 480px;\r\n\r\n}\r\n\r\n.vertical-align {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.vertical-align > [class^=\"col-\"],\r\n.vertical-align > [class*=\" col-\"] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center; /* Optional, to align inner items\r\n                              horizontally inside the column */\r\n}\r\n\r\n/**\r\n *  Do NOT include this part into your stylesheet.\r\n *  \"flex: 1\" or \"flex-grow: 1\" is added to make the inner div\r\n *  - Which is also a flex-item - take up all the horizontal space\r\n *  available space inside the flex container (.col-* elements)\r\n */\r\n\r\n.vertical-align > [class^=\"col-\"] > div,\r\n.vertical-align > [class*=\" col-\"] > div {\r\n  flex-grow: 1;\r\n}\r\n\r\nbody {\r\n  font-family: Verdana, sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: underline;\r\n  color: #404040;\r\n}\r\n\r\nh1 {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.text--left {\r\n  text-align: left;\r\n}\r\n\r\n.text--right {\r\n  text-align: right;\r\n}\r\n\r\n.credits {\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.description {\r\n  font-size: 12px;\r\n}\r\n\r\nstrong {\r\n  font-weight: 700;\r\n}\r\n\r\nhr {\r\n  margin: 10px 0;\r\n}\r\n\r\n.inner__row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.inner__title,\r\n.inner__desc {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.inner__title {\r\n  font-weight: 700;\r\n}\r\n\r\n.inner__desc {\r\n  font-size: 14px;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  border: none;\r\n  min-height: 30px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-family: Verdana, sans-serif;\r\n}\r\n\r\ninput:active,\r\nbutton:active,\r\ninput:focus,\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n}\r\n\r\n.cbbl {\r\n  font-size: 20px;\r\n  font-family: 'Iceland', cursive;\r\n  position: absolute;\r\n  max-width: 200px;\r\n  margin-left: 50px;\r\n  left: 10px;\r\n}\r\n\r\n.cbbl input {\r\n  font-family: 'Iceland', cursive;\r\n  /* max-width: 180px; */\r\n}\r\n\r\n.miInput {\r\n  font-size: 30px;\r\n  bottom: auto;\r\n  max-width: 150px;\r\n  margin-right: 2px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n}\r\n\r\n.cbbl {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 10px 9px 29px 6px;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 5px;\r\n  box-shadow: 0 -3px #fff, 0 -6px #000, 3px 0 #fff, 3px -3px #000, 6px 0 #000, 0 3px #fff, 0 6px #000, -3px 0 #fff, -3px 3px #000, -6px 0 #000, -3px -3px #000, 3px 3px #000, 3px 9px #aaa, 6px 6px #aaa, 9px 3px #aaa;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.cbbl::before,\r\n.cbbl::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n  left: 20%;\r\n}\r\n\r\n.cbbl::after {\r\n  background: #fff;\r\n  width: 9px;\r\n  height: 3px;\r\n  bottom: -14px;\r\n  margin-left: 6px;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px 3px #fff, 0px 3px #000, 6px 3px #000, 9px 3px #aaa, 3px 6px #000, 6px 6px #000, 9px 6px #aaa, 6px 9px #aaa;\r\n}\r\n\r\n.cbbl::before {\r\n  width: 15px;\r\n  height: 8px;\r\n  background: #fff;\r\n  bottom: -11px;\r\n  border-left: 3px solid #000;\r\n  border-right: 3px solid #000;\r\n}\r\n\r\n.cbbl.-hover:hover {\r\n  background-color: #eee;\r\n  color: #000;\r\n  box-shadow: 0 -3px #eee, 0 -6px #7bc8a4, 3px 0 #eee, 3px -3px #7bc8a4, 6px 0 #7bc8a4, 0 3px #eee, 0 6px #7bc8a4, -3px 0 #eee, -3px 3px #7bc8a4, -6px 0 #7bc8a4, -3px -3px #7bc8a4, 3px 3px #7bc8a4, 3px 9px #cae9db, 6px 6px #cae9db, 9px 3px #cae9db;\r\n}\r\n\r\n.cbbl.-hover:hover::before {\r\n  background: #eee;\r\n  border-left-color: #7bc8a4;\r\n  border-right-color: #7bc8a4;\r\n}\r\n\r\n.cbbl.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px 3px #eee, 0px 3px #7bc8a4, 6px 3px #7bc8a4, 9px 3px #cae9db, 3px 6px #7bc8a4, 6px 6px #7bc8a4, 9px 6px #cae9db, 6px 9px #cae9db, 9px 9px #7bc8a4;\r\n}\r\n\r\n.cbbl.-hover:hover.-control input[type=submit],\r\n.cbbl.-hover:hover.-control button,\r\n.cbbl.-hover:hover.-control a {\r\n  color: #000;\r\n}\r\n\r\n.cbbl.-up {\r\n  margin: 29px 9px 10px 6px;\r\n}\r\n\r\n.cbbl.-up::before {\r\n  top: -11px;\r\n  bottom: auto;\r\n}\r\n\r\n.cbbl.-up::after {\r\n  top: -14px;\r\n  bottom: auto;\r\n  box-shadow: -3px 0 #000, 3px 0 #000, 3px -3px #fff, 0px -3px #000, 6px -3px #000, 3px -6px #000, 6px -6px #000;\r\n}\r\n\r\n.cbbl.-up.-hover:hover::after {\r\n  box-shadow: -3px 0 #7bc8a4, 3px 0 #7bc8a4, 3px -3px #eee, 0px -3px #7bc8a4, 6px -3px #7bc8a4, 3px -6px #7bc8a4, 6px -6px #7bc8a4;\r\n}\r\n\r\n.cbbl.-up.-right::after {\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px -3px #fff, 0px -3px #000, -6px -3px #000, -3px -6px #000, -6px -6px #000;\r\n}\r\n\r\n.cbbl.-up.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px -3px #eee, 0px -3px #7bc8a4, -6px -3px #7bc8a4, -3px -6px #7bc8a4, -6px -6px #7bc8a4;\r\n}\r\n\r\n.cbbl.-right::before,\r\n.cbbl.-right::after {\r\n  left: auto;\r\n  right: 20%;\r\n}\r\n\r\n.cbbl.-right::after {\r\n  margin-left: 0;\r\n  margin-right: 6px;\r\n  box-shadow: 3px 0 #000, -3px 0 #000, -3px 3px #fff, 0px 3px #000, -6px 3px #000, -3px 6px #000, -6px 6px #000, -3px 9px #aaa, 0 6px #aaa, 3px 3px #aaa, 6px 0px #aaa;\r\n}\r\n\r\n.cbbl.-right.-hover:hover::after {\r\n  box-shadow: 3px 0 #7bc8a4, -3px 0 #7bc8a4, -3px 3px #eee, 0px 3px #7bc8a4, -6px 3px #7bc8a4, -3px 6px #7bc8a4, -6px 6px #7bc8a4, -3px 9px #cae9db, 0 6px #cae9db, 3px 3px #cae9db, 6px 0px #cae9db;\r\n}\r\n\r\n.cbbl.-no-selection {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.cbbl.-control {\r\n  cursor: pointer;\r\n}\r\n\r\n.cbbl.-control input[type=submit],\r\n.cbbl.-control button,\r\n.cbbl.-control a {\r\n  cursor: pointer;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.cbbl.-control:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\r\n}\r\n\r\n.fade-in {\r\n  animation: fadeIn ease 5s;\r\n  -webkit-animation: fadeIn ease 5s;\r\n  -moz-animation: fadeIn ease 5s;\r\n  -o-animation: fadeIn ease 5s;\r\n  -ms-animation: fadeIn ease 5s;\r\n}\r\n\r\n@keyframes fadeIn{\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  0% {\r\n    opacity:0;\r\n  }\r\n  100% {\r\n    opacity:1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtDQUFtRjtBQUNyRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7QUFFeEI7O0FBSUE7Ozs7R0FJRzs7QUFFSDtFQUNFLG9EQUF3RTtFQUN4RSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBRTs4REFDbUM7QUFDOUQ7O0FBRUE7Ozs7O0VBS0U7O0FBQ0Y7O0VBRUUsWUFBWTtBQUNkOztBQUlBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBQ0E7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb05BQW9OO0FBQ3ROOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixvTkFBb047RUFDcE4seUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUpBQW1KO0FBQ3JKOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFQQUFxUDtBQUN2UDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsK0xBQStMO0FBQ2pNOztBQUNBOzs7RUFHRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiw4R0FBOEc7QUFDaEg7O0FBQ0E7RUFDRSxnSUFBZ0k7QUFDbEk7O0FBQ0E7RUFDRSxrSEFBa0g7QUFDcEg7O0FBQ0E7RUFDRSxvSUFBb0k7QUFDdEk7O0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0tBQW9LO0FBQ3RLOztBQUNBO0VBQ0Usa01BQWtNO0FBQ3BNOztBQUNBO0VBQ0UseUJBQXlCO0tBQ3RCLHNCQUFzQjtNQUNyQixxQkFBcUI7VUFDakIsaUJBQWlCO0FBQzNCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTs7O0VBR0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDhCQUE4QjtVQUN0QixzQkFBc0I7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQVdBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGVtYXRpY2E7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2ZvbnRzL21hdGhlbWF0aWNhbC9NYXRoZW1hdGljYWwudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ub3BlcmFkb3IxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxZDFkMWQ7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGVtYXRpY2E7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGFxdWE7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIGlucHV0IHtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG59ICovXHJcblxyXG4uY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3BheS01MzAzMzhfMTkyMC05MDB4NjM2LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDAgI2FhYTtcclxuICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuICBtaW4taGVpZ2h0OiA0ODBweDtcclxuXHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24gPiBbY2xhc3NePVwiY29sLVwiXSxcclxuLnZlcnRpY2FsLWFsaWduID4gW2NsYXNzKj1cIiBjb2wtXCJdIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIE9wdGlvbmFsLCB0byBhbGlnbiBpbm5lciBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsbHkgaW5zaWRlIHRoZSBjb2x1bW4gKi9cclxufVxyXG5cclxuLyoqXHJcbiAqICBEbyBOT1QgaW5jbHVkZSB0aGlzIHBhcnQgaW50byB5b3VyIHN0eWxlc2hlZXQuXHJcbiAqICBcImZsZXg6IDFcIiBvciBcImZsZXgtZ3JvdzogMVwiIGlzIGFkZGVkIHRvIG1ha2UgdGhlIGlubmVyIGRpdlxyXG4gKiAgLSBXaGljaCBpcyBhbHNvIGEgZmxleC1pdGVtIC0gdGFrZSB1cCBhbGwgdGhlIGhvcml6b250YWwgc3BhY2VcclxuICogIGF2YWlsYWJsZSBzcGFjZSBpbnNpZGUgdGhlIGZsZXggY29udGFpbmVyICguY29sLSogZWxlbWVudHMpXHJcbiAqL1xyXG4udmVydGljYWwtYWxpZ24gPiBbY2xhc3NePVwiY29sLVwiXSA+IGRpdixcclxuLnZlcnRpY2FsLWFsaWduID4gW2NsYXNzKj1cIiBjb2wtXCJdID4gZGl2IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udGV4dC0tbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4udGV4dC0tcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jcmVkaXRzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbnN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5ociB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmlubmVyX19yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmlubmVyX190aXRsZSxcclxuLmlubmVyX19kZXNjIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbm5lcl9fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmlubmVyX19kZXNjIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW5wdXQsXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlucHV0OmFjdGl2ZSxcclxuYnV0dG9uOmFjdGl2ZSxcclxuaW5wdXQ6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5jYmJsIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdJY2VsYW5kJywgY3Vyc2l2ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcbi5jYmJsIGlucHV0IHtcclxuICBmb250LWZhbWlseTogJ0ljZWxhbmQnLCBjdXJzaXZlO1xyXG4gIC8qIG1heC13aWR0aDogMTgwcHg7ICovXHJcbn1cclxuXHJcbi5taUlucHV0IHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCAtM3B4ICNmZmYsIDAgLTZweCAjMDAwLCAzcHggMCAjZmZmLCAzcHggLTNweCAjMDAwLCA2cHggMCAjMDAwLCAwIDNweCAjZmZmLCAwIDZweCAjMDAwLCAtM3B4IDAgI2ZmZiwgLTNweCAzcHggIzAwMCwgLTZweCAwICMwMDAsIC0zcHggLTNweCAjMDAwLCAzcHggM3B4ICMwMDAsIDNweCA5cHggI2FhYSwgNnB4IDZweCAjYWFhLCA5cHggM3B4ICNhYWE7XHJcbn1cclxuXHJcblxyXG4uY2JibCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDEwcHggOXB4IDI5cHggNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTNweCAjZmZmLCAwIC02cHggIzAwMCwgM3B4IDAgI2ZmZiwgM3B4IC0zcHggIzAwMCwgNnB4IDAgIzAwMCwgMCAzcHggI2ZmZiwgMCA2cHggIzAwMCwgLTNweCAwICNmZmYsIC0zcHggM3B4ICMwMDAsIC02cHggMCAjMDAwLCAtM3B4IC0zcHggIzAwMCwgM3B4IDNweCAjMDAwLCAzcHggOXB4ICNhYWEsIDZweCA2cHggI2FhYSwgOXB4IDNweCAjYWFhO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY2JibDo6YmVmb3JlLFxyXG4uY2JibDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbGVmdDogMjAlO1xyXG59XHJcbi5jYmJsOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogOXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvdHRvbTogLTE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBib3gtc2hhZG93OiAtM3B4IDAgIzAwMCwgM3B4IDAgIzAwMCwgM3B4IDNweCAjZmZmLCAwcHggM3B4ICMwMDAsIDZweCAzcHggIzAwMCwgOXB4IDNweCAjYWFhLCAzcHggNnB4ICMwMDAsIDZweCA2cHggIzAwMCwgOXB4IDZweCAjYWFhLCA2cHggOXB4ICNhYWE7XHJcbn1cclxuLmNiYmw6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3R0b206IC0xMXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5jYmJsLi1ob3Zlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3gtc2hhZG93OiAwIC0zcHggI2VlZSwgMCAtNnB4ICM3YmM4YTQsIDNweCAwICNlZWUsIDNweCAtM3B4ICM3YmM4YTQsIDZweCAwICM3YmM4YTQsIDAgM3B4ICNlZWUsIDAgNnB4ICM3YmM4YTQsIC0zcHggMCAjZWVlLCAtM3B4IDNweCAjN2JjOGE0LCAtNnB4IDAgIzdiYzhhNCwgLTNweCAtM3B4ICM3YmM4YTQsIDNweCAzcHggIzdiYzhhNCwgM3B4IDlweCAjY2FlOWRiLCA2cHggNnB4ICNjYWU5ZGIsIDlweCAzcHggI2NhZTlkYjtcclxufVxyXG4uY2JibC4taG92ZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzdiYzhhNDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICM3YmM4YTQsIDNweCAwICM3YmM4YTQsIDNweCAzcHggI2VlZSwgMHB4IDNweCAjN2JjOGE0LCA2cHggM3B4ICM3YmM4YTQsIDlweCAzcHggI2NhZTlkYiwgM3B4IDZweCAjN2JjOGE0LCA2cHggNnB4ICM3YmM4YTQsIDlweCA2cHggI2NhZTlkYiwgNnB4IDlweCAjY2FlOWRiLCA5cHggOXB4ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGlucHV0W3R5cGU9c3VibWl0XSxcclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGJ1dHRvbixcclxuLmNiYmwuLWhvdmVyOmhvdmVyLi1jb250cm9sIGEge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5jYmJsLi11cCB7XHJcbiAgbWFyZ2luOiAyOXB4IDlweCAxMHB4IDZweDtcclxufVxyXG4uY2JibC4tdXA6OmJlZm9yZSB7XHJcbiAgdG9wOiAtMTFweDtcclxuICBib3R0b206IGF1dG87XHJcbn1cclxuLmNiYmwuLXVwOjphZnRlciB7XHJcbiAgdG9wOiAtMTRweDtcclxuICBib3R0b206IGF1dG87XHJcbiAgYm94LXNoYWRvdzogLTNweCAwICMwMDAsIDNweCAwICMwMDAsIDNweCAtM3B4ICNmZmYsIDBweCAtM3B4ICMwMDAsIDZweCAtM3B4ICMwMDAsIDNweCAtNnB4ICMwMDAsIDZweCAtNnB4ICMwMDA7XHJcbn1cclxuLmNiYmwuLXVwLi1ob3Zlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJveC1zaGFkb3c6IC0zcHggMCAjN2JjOGE0LCAzcHggMCAjN2JjOGE0LCAzcHggLTNweCAjZWVlLCAwcHggLTNweCAjN2JjOGE0LCA2cHggLTNweCAjN2JjOGE0LCAzcHggLTZweCAjN2JjOGE0LCA2cHggLTZweCAjN2JjOGE0O1xyXG59XHJcbi5jYmJsLi11cC4tcmlnaHQ6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAzcHggMCAjMDAwLCAtM3B4IDAgIzAwMCwgLTNweCAtM3B4ICNmZmYsIDBweCAtM3B4ICMwMDAsIC02cHggLTNweCAjMDAwLCAtM3B4IC02cHggIzAwMCwgLTZweCAtNnB4ICMwMDA7XHJcbn1cclxuLmNiYmwuLXVwLi1yaWdodC4taG92ZXI6aG92ZXI6OmFmdGVyIHtcclxuICBib3gtc2hhZG93OiAzcHggMCAjN2JjOGE0LCAtM3B4IDAgIzdiYzhhNCwgLTNweCAtM3B4ICNlZWUsIDBweCAtM3B4ICM3YmM4YTQsIC02cHggLTNweCAjN2JjOGE0LCAtM3B4IC02cHggIzdiYzhhNCwgLTZweCAtNnB4ICM3YmM4YTQ7XHJcbn1cclxuLmNiYmwuLXJpZ2h0OjpiZWZvcmUsXHJcbi5jYmJsLi1yaWdodDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDIwJTtcclxufVxyXG4uY2JibC4tcmlnaHQ6OmFmdGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBib3gtc2hhZG93OiAzcHggMCAjMDAwLCAtM3B4IDAgIzAwMCwgLTNweCAzcHggI2ZmZiwgMHB4IDNweCAjMDAwLCAtNnB4IDNweCAjMDAwLCAtM3B4IDZweCAjMDAwLCAtNnB4IDZweCAjMDAwLCAtM3B4IDlweCAjYWFhLCAwIDZweCAjYWFhLCAzcHggM3B4ICNhYWEsIDZweCAwcHggI2FhYTtcclxufVxyXG4uY2JibC4tcmlnaHQuLWhvdmVyOmhvdmVyOjphZnRlciB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDAgIzdiYzhhNCwgLTNweCAwICM3YmM4YTQsIC0zcHggM3B4ICNlZWUsIDBweCAzcHggIzdiYzhhNCwgLTZweCAzcHggIzdiYzhhNCwgLTNweCA2cHggIzdiYzhhNCwgLTZweCA2cHggIzdiYzhhNCwgLTNweCA5cHggI2NhZTlkYiwgMCA2cHggI2NhZTlkYiwgM3B4IDNweCAjY2FlOWRiLCA2cHggMHB4ICNjYWU5ZGI7XHJcbn1cclxuLmNiYmwuLW5vLXNlbGVjdGlvbiB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uY2JibC4tY29udHJvbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYmJsLi1jb250cm9sIGlucHV0W3R5cGU9c3VibWl0XSxcclxuLmNiYmwuLWNvbnRyb2wgYnV0dG9uLFxyXG4uY2JibC4tY29udHJvbCBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcbi5jYmJsLi1jb250cm9sOmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgNXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSA1cztcclxuICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiBlYXNlIDVzO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/components/anagramas/anagramas.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/anagramas/anagramas.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-2\">\r\n      <div class=\"etiquetas\">\r\n        <span class=\"text-center\">TIEMPO</span>\r\n      </div>\r\n\r\n      <app-cronometro2 class=\"text-center\" #cronometro></app-cronometro2>\r\n\r\n      <br>\r\n\r\n      <div class=\"etiquetas\">\r\n        <span class=\"etiquetas text-center\">PUNTOS</span>\r\n      </div>\r\n      <app-puntos [puntos]=\"puntos\"></app-puntos>\r\n    </div>\r\n\r\n    <div class=\"col-8\">\r\n\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n      <div [ngClass]=\"{'confetti-piece': this.efectoGano === true}\"></div>\r\n\r\n\r\n      <div class=\"canvas\" (click)=\"focusEnInput()\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p class=\"text-center mt-10\">{{this.juegoAnagrama.anagramaActual.palabras[0]}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <input type=\"text\" class=\"text-center chalk-border\" autofocus #palabraRespuesta\r\n              (keydown.enter)=\"verificar()\" [(ngModel)]=\"juegoAnagrama.respuesta\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p class=\"text-center\" *ngIf=\"this.efectoGano\"\r\n              [ngClass]=\"{'focus-in-contract-bck': this.efectoGano === true}\">Ganaste!</p>\r\n            <p class=\"text-center\" *ngIf=\"this.efectoPerdio\"\r\n              [ngClass]=\"{'focus-in-contract-bck': this.efectoPerdio === true}\">Perdiste!</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-2\">\r\n      <app-boton3 (click)=\"verificar()\"></app-boton3>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/anagramas/anagramas.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/anagramas/anagramas.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: crayon;\n  src: url('DK_Cool_Crayon.ttf') format(\"truetype\"); }\n\n.etiquetas {\n  text-align: center;\n  width: 7.8em;\n  height: 1.9em;\n  font-weight: bold; }\n\n.canvas {\n  background-image: url('blackboard.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  /* border-radius: 25px; */\n  /* border: 2px solid black; */\n  background-size: 700px 380px;\n  background-color: #303030;\n  /* padding: 2px; */\n  /* border: 3px solid #000; */\n  /* box-shadow: 6px 6px 0 #aaa; */\n  height: 380px;\n  width: 700px;\n  font-family: crayon;\n  font-size: 70px;\n  padding-top: 20px; }\n\n/* input[type=\"text\"]\r\n{\r\n    /* background: transparent;\r\n    font-family: crayon;\r\n    color: red; */\n\n/* max-width: 700px; */\n\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.8);\n  font-family: crayon;\n  font-size: 50px;\n  height: 125px;\n  padding: 10px 5px 5px;\n  text-align: center;\n  width: 500px;\n  margin: 15px 0px 0px 95px;\n  outline: none; }\n\n.chalk-border {\n  border: 25px solid rgba(255, 255, 255, 0.8);\n  -o-border-image: url(\"https://www.unicefusa.org/sites/default/files/answer-box.png\") 20;\n     border-image: url(\"https://www.unicefusa.org/sites/default/files/answer-box.png\") 20; }\n\n.chalk-border:before {\n  content: ''; }\n\nbody {\n  margin: 0;\n  overflow: hidden; }\n\n.icon {\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 32px;\n  position: relative; }\n\n.confetti {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 200px;\n  overflow: hidden; }\n\n.confetti-piece {\n  position: absolute;\n  width: 8px;\n  height: 16px;\n  background: #ffd300;\n  top: 0;\n  opacity: 0; }\n\n.confetti-piece:nth-child(1) {\n    left: 7%;\n    -webkit-transform: rotate(39deg);\n            transform: rotate(39deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 60ms;\n            animation-delay: 60ms;\n    -webkit-animation-duration: 1130ms;\n            animation-duration: 1130ms; }\n\n.confetti-piece:nth-child(2) {\n    left: 14%;\n    -webkit-transform: rotate(-38deg);\n            transform: rotate(-38deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 182ms;\n            animation-delay: 182ms;\n    -webkit-animation-duration: 750ms;\n            animation-duration: 750ms; }\n\n.confetti-piece:nth-child(3) {\n    left: 21%;\n    -webkit-transform: rotate(31deg);\n            transform: rotate(31deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 169ms;\n            animation-delay: 169ms;\n    -webkit-animation-duration: 914ms;\n            animation-duration: 914ms; }\n\n.confetti-piece:nth-child(4) {\n    left: 28%;\n    -webkit-transform: rotate(-42deg);\n            transform: rotate(-42deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 125ms;\n            animation-delay: 125ms;\n    -webkit-animation-duration: 714ms;\n            animation-duration: 714ms; }\n\n.confetti-piece:nth-child(5) {\n    left: 35%;\n    -webkit-transform: rotate(-42deg);\n            transform: rotate(-42deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 136ms;\n            animation-delay: 136ms;\n    -webkit-animation-duration: 1103ms;\n            animation-duration: 1103ms; }\n\n.confetti-piece:nth-child(6) {\n    left: 42%;\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms;\n    -webkit-animation-duration: 1089ms;\n            animation-duration: 1089ms; }\n\n.confetti-piece:nth-child(7) {\n    left: 49%;\n    -webkit-transform: rotate(32deg);\n            transform: rotate(32deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 276ms;\n            animation-delay: 276ms;\n    -webkit-animation-duration: 867ms;\n            animation-duration: 867ms; }\n\n.confetti-piece:nth-child(8) {\n    left: 56%;\n    -webkit-transform: rotate(-56deg);\n            transform: rotate(-56deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 462ms;\n            animation-delay: 462ms;\n    -webkit-animation-duration: 821ms;\n            animation-duration: 821ms; }\n\n.confetti-piece:nth-child(9) {\n    left: 63%;\n    -webkit-transform: rotate(-14deg);\n            transform: rotate(-14deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 159ms;\n            animation-delay: 159ms;\n    -webkit-animation-duration: 970ms;\n            animation-duration: 970ms; }\n\n.confetti-piece:nth-child(10) {\n    left: 70%;\n    -webkit-transform: rotate(-54deg);\n            transform: rotate(-54deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 363ms;\n            animation-delay: 363ms;\n    -webkit-animation-duration: 988ms;\n            animation-duration: 988ms; }\n\n.confetti-piece:nth-child(11) {\n    left: 77%;\n    -webkit-transform: rotate(80deg);\n            transform: rotate(80deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 195ms;\n            animation-delay: 195ms;\n    -webkit-animation-duration: 1060ms;\n            animation-duration: 1060ms; }\n\n.confetti-piece:nth-child(12) {\n    left: 84%;\n    -webkit-transform: rotate(33deg);\n            transform: rotate(33deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 80ms;\n            animation-delay: 80ms;\n    -webkit-animation-duration: 1111ms;\n            animation-duration: 1111ms; }\n\n.confetti-piece:nth-child(13) {\n    left: 91%;\n    -webkit-transform: rotate(47deg);\n            transform: rotate(47deg);\n    -webkit-animation: makeItRain 1000ms infinite ease-out;\n            animation: makeItRain 1000ms infinite ease-out;\n    -webkit-animation-delay: 457ms;\n            animation-delay: 457ms;\n    -webkit-animation-duration: 1110ms;\n            animation-duration: 1110ms; }\n\n.confetti-piece:nth-child(odd) {\n    background: #17d3ff; }\n\n.confetti-piece:nth-child(even) {\n    z-index: 1; }\n\n.confetti-piece:nth-child(4n) {\n    width: 5px;\n    height: 12px;\n    -webkit-animation-duration: 2000ms;\n            animation-duration: 2000ms; }\n\n.confetti-piece:nth-child(3n) {\n    width: 3px;\n    height: 10px;\n    -webkit-animation-duration: 2500ms;\n            animation-duration: 2500ms;\n    -webkit-animation-delay: 1000ms;\n            animation-delay: 1000ms; }\n\n.confetti-piece:nth-child(4n-7) {\n    background: #ff4e91; }\n\n@-webkit-keyframes makeItRain {\n  from {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  to {\n    -webkit-transform: translateY(200px);\n            transform: translateY(200px); } }\n\n@keyframes makeItRain {\n  from {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  to {\n    -webkit-transform: translateY(200px);\n            transform: translateY(200px); } }\n\n.focus-in-contract-bck {\n  -webkit-animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n\n/* ----------------------------------------------\r\n * Generated by Animista on 2019-7-15 0:59:31\r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\n\n/**\r\n * ----------------------------------------\r\n * animation focus-in-contract-bck\r\n * ----------------------------------------\r\n */\n\n@-webkit-keyframes focus-in-contract-bck {\n  0% {\n    letter-spacing: 1em;\n    -webkit-transform: translateZ(300px);\n    transform: translateZ(300px);\n    -webkit-filter: blur(12px);\n    filter: blur(12px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateZ(12px);\n    transform: translateZ(12px);\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1; } }\n\n@keyframes focus-in-contract-bck {\n  0% {\n    letter-spacing: 1em;\n    -webkit-transform: translateZ(300px);\n    transform: translateZ(300px);\n    -webkit-filter: blur(12px);\n    filter: blur(12px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateZ(12px);\n    transform: translateZ(12px);\n    -webkit-filter: blur(0);\n    filter: blur(0);\n    opacity: 1; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbmFncmFtYXMvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYW5hZ3JhbWFzXFxhbmFncmFtYXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYW5hZ3JhbWFzL2FuYWdyYW1hcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBc0csRUFBQTs7QUFHeEc7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFLbkI7RUFDRSx1Q0FBcUU7RUFDckUsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBSW5COzs7O2lCQ0ZpQjs7QURPYixzQkFBQTs7QUFLSjtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwrQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDJDQUF1QztFQUN2Qyx1RkFBb0Y7S0FBcEYsb0ZBQW9GLEVBQUE7O0FBR3RGO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0UsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQWdCbEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFsQ2M7RUFtQ2QsTUFBTTtFQUNOLFVBQVUsRUFBQTs7QUFOWjtJQVVNLFFBQWE7SUFDYixnQ0FBOEM7WUFBOUMsd0JBQThDO0lBQzlDLHNEQUF1RDtZQUF2RCw4Q0FBdUQ7SUFDdkQsNkJBQWlCO1lBQWpCLHFCQUFpQjtJQUNqQixrQ0FBcUU7WUFBckUsMEJBQXFFLEVBQUE7O0FBZDNFO0lBVU0sU0FBYTtJQUNiLGlDQUE4QztZQUE5Qyx5QkFBOEM7SUFDOUMsc0RBQXVEO1lBQXZELDhDQUF1RDtJQUN2RCw4QkFBaUI7WUFBakIsc0JBQWlCO0lBQ2pCLGlDQUFxRTtZQUFyRSx5QkFBcUUsRUFBQTs7QUFkM0U7SUFVTSxTQUFhO0lBQ2IsZ0NBQThDO1lBQTlDLHdCQUE4QztJQUM5QyxzREFBdUQ7WUFBdkQsOENBQXVEO0lBQ3ZELDhCQUFpQjtZQUFqQixzQkFBaUI7SUFDakIsaUNBQXFFO1lBQXJFLHlCQUFxRSxFQUFBOztBQWQzRTtJQVVNLFNBQWE7SUFDYixpQ0FBOEM7WUFBOUMseUJBQThDO0lBQzlDLHNEQUF1RDtZQUF2RCw4Q0FBdUQ7SUFDdkQsOEJBQWlCO1lBQWpCLHNCQUFpQjtJQUNqQixpQ0FBcUU7WUFBckUseUJBQXFFLEVBQUE7O0FBZDNFO0lBVU0sU0FBYTtJQUNiLGlDQUE4QztZQUE5Qyx5QkFBOEM7SUFDOUMsc0RBQXVEO1lBQXZELDhDQUF1RDtJQUN2RCw4QkFBaUI7WUFBakIsc0JBQWlCO0lBQ2pCLGtDQUFxRTtZQUFyRSwwQkFBcUUsRUFBQTs7QUFkM0U7SUFVTSxTQUFhO0lBQ2IsaUNBQThDO1lBQTlDLHlCQUE4QztJQUM5QyxzREFBdUQ7WUFBdkQsOENBQXVEO0lBQ3ZELDRCQUFpQjtZQUFqQixvQkFBaUI7SUFDakIsa0NBQXFFO1lBQXJFLDBCQUFxRSxFQUFBOztBQWQzRTtJQVVNLFNBQWE7SUFDYixnQ0FBOEM7WUFBOUMsd0JBQThDO0lBQzlDLHNEQUF1RDtZQUF2RCw4Q0FBdUQ7SUFDdkQsOEJBQWlCO1lBQWpCLHNCQUFpQjtJQUNqQixpQ0FBcUU7WUFBckUseUJBQXFFLEVBQUE7O0FBZDNFO0lBVU0sU0FBYTtJQUNiLGlDQUE4QztZQUE5Qyx5QkFBOEM7SUFDOUMsc0RBQXVEO1lBQXZELDhDQUF1RDtJQUN2RCw4QkFBaUI7WUFBakIsc0JBQWlCO0lBQ2pCLGlDQUFxRTtZQUFyRSx5QkFBcUUsRUFBQTs7QUFkM0U7SUFVTSxTQUFhO0lBQ2IsaUNBQThDO1lBQTlDLHlCQUE4QztJQUM5QyxzREFBdUQ7WUFBdkQsOENBQXVEO0lBQ3ZELDhCQUFpQjtZQUFqQixzQkFBaUI7SUFDakIsaUNBQXFFO1lBQXJFLHlCQUFxRSxFQUFBOztBQWQzRTtJQVVNLFNBQWE7SUFDYixpQ0FBOEM7WUFBOUMseUJBQThDO0lBQzlDLHNEQUF1RDtZQUF2RCw4Q0FBdUQ7SUFDdkQsOEJBQWlCO1lBQWpCLHNCQUFpQjtJQUNqQixpQ0FBcUU7WUFBckUseUJBQXFFLEVBQUE7O0FBZDNFO0lBVU0sU0FBYTtJQUNiLGdDQUE4QztZQUE5Qyx3QkFBOEM7SUFDOUMsc0RBQXVEO1lBQXZELDhDQUF1RDtJQUN2RCw4QkFBaUI7WUFBakIsc0JBQWlCO0lBQ2pCLGtDQUFxRTtZQUFyRSwwQkFBcUUsRUFBQTs7QUFkM0U7SUFVTSxTQUFhO0lBQ2IsZ0NBQThDO1lBQTlDLHdCQUE4QztJQUM5QyxzREFBdUQ7WUFBdkQsOENBQXVEO0lBQ3ZELDZCQUFpQjtZQUFqQixxQkFBaUI7SUFDakIsa0NBQXFFO1lBQXJFLDBCQUFxRSxFQUFBOztBQWQzRTtJQVVNLFNBQWE7SUFDYixnQ0FBOEM7WUFBOUMsd0JBQThDO0lBQzlDLHNEQUF1RDtZQUF2RCw4Q0FBdUQ7SUFDdkQsOEJBQWlCO1lBQWpCLHNCQUFpQjtJQUNqQixrQ0FBcUU7WUFBckUsMEJBQXFFLEVBQUE7O0FBZDNFO0lBbUJJLG1CQWhEVSxFQUFBOztBQTZCZDtJQXVCSSxVQUFVLEVBQUE7O0FBdkJkO0lBMkJJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0NBQW1DO1lBQW5DLDBCQUFtQyxFQUFBOztBQTdCdkM7SUFpQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQ0FBcUM7WUFBckMsMEJBQXFDO0lBQ3JDLCtCQUFnQztZQUFoQyx1QkFBZ0MsRUFBQTs7QUFwQ3BDO0lBd0NJLG1CQXBFVSxFQUFBOztBQXdFZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBOztBQVZoQztFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBOztBQU1oQztFQUNDLHFGQUF5RjtFQUNqRiw2RUFBaUYsRUFBQTs7QUFJMUY7OzttRENtQm1EOztBRGRuRDs7OztFQ21CRTs7QURkRDtFQUNDO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUM1Qiw0QkFBNEI7SUFDcEMsMEJBQTBCO0lBQ2xCLGtCQUFrQjtJQUMxQixVQUFVLEVBQUE7RUFFWjtJQUNFLG1DQUFtQztJQUMzQiwyQkFBMkI7SUFDbkMsdUJBQXVCO0lBQ2YsZUFBZTtJQUN2QixVQUFVLEVBQUEsRUFBQTs7QUFHZDtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUM1Qiw0QkFBNEI7SUFDcEMsMEJBQTBCO0lBQ2xCLGtCQUFrQjtJQUMxQixVQUFVLEVBQUE7RUFFWjtJQUNFLG1DQUFtQztJQUMzQiwyQkFBMkI7SUFDbkMsdUJBQXVCO0lBQ2YsZUFBZTtJQUN2QixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5hZ3JhbWFzL2FuYWdyYW1hcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBjcmF5b247XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2ZvbnRzL2RhdmlkLWtlcmtob2ZmX2RrLWNvb2wtY3JheW9uL0RLX0Nvb2xfQ3JheW9uLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuLmV0aXF1ZXRhcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA3LjhlbTtcclxuICBoZWlnaHQ6IDEuOWVtIDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcblxyXG4uY2FudmFzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2FuYWdyYW1hcy9ibGFja2JvYXJkLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMjVweDsgKi9cclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4IDM4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgLyogcGFkZGluZzogMnB4OyAqL1xyXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7ICovXHJcbiAgLyogYm94LXNoYWRvdzogNnB4IDZweCAwICNhYWE7ICovXHJcbiAgaGVpZ2h0OiAzODBweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGNyYXlvbjtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBpbnB1dFt0eXBlPVwidGV4dFwiXVxyXG57XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBjcmF5b247XHJcbiAgICBjb2xvcjogcmVkOyAqL1xyXG4gICAgLyogbWF4LXdpZHRoOiA3MDBweDsgKi9cclxuXHJcblxyXG5cclxuXHJcbmlucHV0IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gIGZvbnQtZmFtaWx5OiBjcmF5b247XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgcGFkZGluZzogMTBweCA1cHggNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxNXB4IDBweCAwcHggOTVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hhbGstYm9yZGVyIHtcclxuICBib3JkZXI6IDI1cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgYm9yZGVyLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy51bmljZWZ1c2Eub3JnL3NpdGVzL2RlZmF1bHQvZmlsZXMvYW5zd2VyLWJveC5wbmdcIikgMjA7XHJcbn1cclxuXHJcbi5jaGFsay1ib3JkZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuXHJcbn1cclxuXHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuJHllbGxvdzogI2ZmZDMwMDtcclxuJGJsdWU6ICMxN2QzZmY7XHJcbiRwaW5rOiAjZmY0ZTkxO1xyXG5cclxuJGR1cmF0aW9uOiAxMDAwO1xyXG5cclxuQGZ1bmN0aW9uIHJhbmRvbU51bSgkbWluLCAkbWF4KSB7XHJcbiAgJHJhbmQ6IHJhbmRvbSgpO1xyXG4gICRyYW5kb21OdW06ICRtaW4gKyBmbG9vcigkcmFuZCAqICgoJG1heCAtICRtaW4pICsgMSkpO1xyXG5cclxuICBAcmV0dXJuICRyYW5kb21OdW07XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDMycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29uZmV0dGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29uZmV0dGktcGllY2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAkeWVsbG93O1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEzIHtcclxuICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgIGxlZnQ6ICRpICogNyU7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKCN7cmFuZG9tTnVtKC04MCwgODApfWRlZyk7XHJcbiAgICAgIGFuaW1hdGlvbjogbWFrZUl0UmFpbiAkZHVyYXRpb24gKiAxbXMgaW5maW5pdGUgZWFzZS1vdXQ7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogI3tyYW5kb21OdW0oMCwgJGR1cmF0aW9uICogLjUpfW1zO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246ICN7cmFuZG9tTnVtKCRkdXJhdGlvbiAqIC43LCAkZHVyYXRpb24gKiAxLjIpfW1zXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gIH1cclxuXHJcbiAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDRuKSB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb24gKiAybXM7XHJcbiAgfVxyXG5cclxuICAmOm50aC1jaGlsZCgzbikge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uICogMi41bXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6ICRkdXJhdGlvbiAqIDFtcztcclxuICB9XHJcblxyXG4gICY6bnRoLWNoaWxkKDRuLTcpIHtcclxuICAgIGJhY2tncm91bmQ6ICRwaW5rO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtYWtlSXRSYWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5mb2N1cy1pbi1jb250cmFjdC1iY2sge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBmb2N1cy1pbi1jb250cmFjdC1iY2sgMXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS03LTE1IDA6NTk6MzFcclxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFuaW1hdGlvbiBmb2N1cy1pbi1jb250cmFjdC1iY2tcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuIEAtd2Via2l0LWtleWZyYW1lcyBmb2N1cy1pbi1jb250cmFjdC1iY2sge1xyXG4gIDAlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigzMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzMDBweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3QtYmNrIHtcclxuICAwJSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMnB4KTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGNyYXlvbjtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2ZvbnRzL2RhdmlkLWtlcmtob2ZmX2RrLWNvb2wtY3JheW9uL0RLX0Nvb2xfQ3JheW9uLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG4uZXRpcXVldGFzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNy44ZW07XG4gIGhlaWdodDogMS45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi5jYW52YXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2FuYWdyYW1hcy9ibGFja2JvYXJkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLyogYm9yZGVyLXJhZGl1czogMjVweDsgKi9cbiAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gIGJhY2tncm91bmQtc2l6ZTogNzAwcHggMzgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIC8qIHBhZGRpbmc6IDJweDsgKi9cbiAgLyogYm9yZGVyOiAzcHggc29saWQgIzAwMDsgKi9cbiAgLyogYm94LXNoYWRvdzogNnB4IDZweCAwICNhYWE7ICovXG4gIGhlaWdodDogMzgwcHg7XG4gIHdpZHRoOiA3MDBweDtcbiAgZm9udC1mYW1pbHk6IGNyYXlvbjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDsgfVxuXG4vKiBpbnB1dFt0eXBlPVwidGV4dFwiXVxyXG57XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBjcmF5b247XHJcbiAgICBjb2xvcjogcmVkOyAqL1xuLyogbWF4LXdpZHRoOiA3MDBweDsgKi9cbmlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBmb250LWZhbWlseTogY3JheW9uO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4IDk1cHg7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLmNoYWxrLWJvcmRlciB7XG4gIGJvcmRlcjogMjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlci1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudW5pY2VmdXNhLm9yZy9zaXRlcy9kZWZhdWx0L2ZpbGVzL2Fuc3dlci1ib3gucG5nXCIpIDIwOyB9XG5cbi5jaGFsay1ib3JkZXI6YmVmb3JlIHtcbiAgY29udGVudDogJyc7IH1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNvbmZldHRpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmNvbmZldHRpLXBpZWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmQzMDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiA3JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzOWRlZyk7XG4gICAgYW5pbWF0aW9uOiBtYWtlSXRSYWluIDEwMDBtcyBpbmZpbml0ZSBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDYwbXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMTMwbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCgyKSB7XG4gICAgbGVmdDogMTQlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zOGRlZyk7XG4gICAgYW5pbWF0aW9uOiBtYWtlSXRSYWluIDEwMDBtcyBpbmZpbml0ZSBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDE4Mm1zO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNzUwbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogMjElO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKTtcbiAgICBhbmltYXRpb246IG1ha2VJdFJhaW4gMTAwMG1zIGluZmluaXRlIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTY5bXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5MTRtczsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiAyOCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQyZGVnKTtcbiAgICBhbmltYXRpb246IG1ha2VJdFJhaW4gMTAwMG1zIGluZmluaXRlIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTI1bXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3MTRtczsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDUpIHtcbiAgICBsZWZ0OiAzNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQyZGVnKTtcbiAgICBhbmltYXRpb246IG1ha2VJdFJhaW4gMTAwMG1zIGluZmluaXRlIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTM2bXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMTAzbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCg2KSB7XG4gICAgbGVmdDogNDIlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7XG4gICAgYW5pbWF0aW9uOiBtYWtlSXRSYWluIDEwMDBtcyBpbmZpbml0ZSBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBtcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwODltczsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDcpIHtcbiAgICBsZWZ0OiA0OSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzJkZWcpO1xuICAgIGFuaW1hdGlvbjogbWFrZUl0UmFpbiAxMDAwbXMgaW5maW5pdGUgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyNzZtcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDg2N21zOyB9XG4gIC5jb25mZXR0aS1waWVjZTpudGgtY2hpbGQoOCkge1xuICAgIGxlZnQ6IDU2JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNTZkZWcpO1xuICAgIGFuaW1hdGlvbjogbWFrZUl0UmFpbiAxMDAwbXMgaW5maW5pdGUgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0NjJtcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgyMW1zOyB9XG4gIC5jb25mZXR0aS1waWVjZTpudGgtY2hpbGQoOSkge1xuICAgIGxlZnQ6IDYzJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTRkZWcpO1xuICAgIGFuaW1hdGlvbjogbWFrZUl0UmFpbiAxMDAwbXMgaW5maW5pdGUgZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNTltcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDk3MG1zOyB9XG4gIC5jb25mZXR0aS1waWVjZTpudGgtY2hpbGQoMTApIHtcbiAgICBsZWZ0OiA3MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTU0ZGVnKTtcbiAgICBhbmltYXRpb246IG1ha2VJdFJhaW4gMTAwMG1zIGluZmluaXRlIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMzYzbXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5ODhtczsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDExKSB7XG4gICAgbGVmdDogNzclO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgwZGVnKTtcbiAgICBhbmltYXRpb246IG1ha2VJdFJhaW4gMTAwMG1zIGluZmluaXRlIGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi1kZWxheTogMTk1bXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDYwbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCgxMikge1xuICAgIGxlZnQ6IDg0JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzM2RlZyk7XG4gICAgYW5pbWF0aW9uOiBtYWtlSXRSYWluIDEwMDBtcyBpbmZpbml0ZSBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDgwbXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMTExbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCgxMykge1xuICAgIGxlZnQ6IDkxJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XG4gICAgYW5pbWF0aW9uOiBtYWtlSXRSYWluIDEwMDBtcyBpbmZpbml0ZSBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDQ1N21zO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTExMG1zOyB9XG4gIC5jb25mZXR0aS1waWVjZTpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZDogIzE3ZDNmZjsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICB6LWluZGV4OiAxOyB9XG4gIC5jb25mZXR0aS1waWVjZTpudGgtY2hpbGQoNG4pIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwMDBtczsgfVxuICAuY29uZmV0dGktcGllY2U6bnRoLWNoaWxkKDNuKSB7XG4gICAgd2lkdGg6IDNweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNTAwbXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMDAwbXM7IH1cbiAgLmNvbmZldHRpLXBpZWNlOm50aC1jaGlsZCg0bi03KSB7XG4gICAgYmFja2dyb3VuZDogI2ZmNGU5MTsgfVxuXG5Aa2V5ZnJhbWVzIG1ha2VJdFJhaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTsgfSB9XG5cbi5mb2N1cy1pbi1jb250cmFjdC1iY2sge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZm9jdXMtaW4tY29udHJhY3QtYmNrIDFzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0LWJjayAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTctMTUgMDo1OTozMVxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIGZvY3VzLWluLWNvbnRyYWN0LWJja1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZvY3VzLWluLWNvbnRyYWN0LWJjayB7XG4gIDAlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMnB4KTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3QtYmNrIHtcbiAgMCUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxZW07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigzMDBweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTJweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/anagramas/anagramas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/anagramas/anagramas.component.ts ***!
  \*************************************************************/
/*! exports provided: AnagramasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramasComponent", function() { return AnagramasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_class_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/class/juego-anagrama */ "./src/app/class/juego-anagrama.ts");
/* harmony import */ var _cronometro2_cronometro2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cronometro2/cronometro2.component */ "./src/app/components/cronometro2/cronometro2.component.ts");




var AnagramasComponent = /** @class */ (function () {
    function AnagramasComponent() {
        this.juegoAnagrama = new src_app_class_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__["JuegoAnagrama"]();
        this.efectoGano = false;
        this.efectoPerdio = false;
        this.puntos = 0;
    }
    AnagramasComponent.prototype.ngOnInit = function () {
        this.nuevoJuego();
        this.focusEnInput();
    };
    AnagramasComponent.prototype.nuevoJuego = function () {
        this.juegoAnagrama.nuevoJuego();
    };
    AnagramasComponent.prototype.focusEnInput = function () {
        this.inputRespuesta.nativeElement.focus();
    };
    AnagramasComponent.prototype.verificar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.juegoAnagrama.verificar()) return [3 /*break*/, 2];
                        this.inputRespuesta.nativeElement.disabled = true;
                        this.efectoGano = true;
                        this.cronometro.pause();
                        return [4 /*yield*/, this.delay(3000)];
                    case 1:
                        _a.sent();
                        this.puntos++;
                        this.nuevoJuego();
                        this.cronometro.pause();
                        this.efectoGano = false;
                        this.juegoAnagrama.respuesta = '';
                        this.inputRespuesta.nativeElement.disabled = false;
                        this.cronometro.start();
                        this.focusEnInput();
                        return [3 /*break*/, 4];
                    case 2:
                        this.efectoPerdio = true;
                        this.inputRespuesta.nativeElement.disabled = true;
                        this.cronometro.pause();
                        return [4 /*yield*/, this.delay(3000)];
                    case 3:
                        _a.sent();
                        this.nuevoJuego();
                        this.puntos--;
                        this.efectoPerdio = false;
                        this.inputRespuesta.nativeElement.disabled = false;
                        this.juegoAnagrama.respuesta = '';
                        this.cronometro.start();
                        this.focusEnInput();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnagramasComponent.prototype.delay = function (timeInMillis) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, timeInMillis); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('palabraRespuesta'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnagramasComponent.prototype, "inputRespuesta", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cronometro'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cronometro2_cronometro2_component__WEBPACK_IMPORTED_MODULE_3__["Cronometro2Component"])
    ], AnagramasComponent.prototype, "cronometro", void 0);
    AnagramasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anagramas',
            template: __webpack_require__(/*! ./anagramas.component.html */ "./src/app/components/anagramas/anagramas.component.html"),
            styles: [__webpack_require__(/*! ./anagramas.component.scss */ "./src/app/components/anagramas/anagramas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnagramasComponent);
    return AnagramasComponent;
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

module.exports = "<button class=\"btn draw-border\"><i class=\"fa fa-user\"></i>{{this.texto}}</button>\r\n"

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BotonLoginComponent.prototype, "texto", void 0);
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

/***/ "./src/app/components/boton3/boton3.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/boton3/boton3.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <a class=\"button button-green\">\n    <i class=\"fa fa-check\"></i>\n    <strong>VERIFICAR</strong>\n  </a>\n"

/***/ }),

/***/ "./src/app/components/boton3/boton3.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/boton3/boton3.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong {\n  font-weight: bold; }\n\n.button {\n  background-color: #f2f2f2;\n  background-image: linear-gradient(to bottom, #f2f2f2, #f2f2f2);\n  border: 1px solid #bfbfbf;\n  box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: #8c8c8c;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  border-radius: 3px;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Verdana, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  padding: 9px 16px 9px;\n  margin: 16px 0 0 16px;\n  transition: all 20ms ease-out;\n  vertical-align: top; }\n\n.button:hover, .button:focus {\n    background: #f2f2f2;\n    border-color: #8c8c8c;\n    box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2; }\n\n.button:active {\n    background: #f2f2f2;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button .fa {\n    color: #bfbfbf;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-blue {\n  background-color: #42b0e3;\n  background-image: linear-gradient(to bottom, #42b0e3, #2ba9e3);\n  border: 1px solid #107db0;\n  box-shadow: inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n\n.button-blue:hover, .button-blue:focus {\n    background: #2ba9e3;\n    border-color: #004c6f;\n    box-shadow: inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3; }\n\n.button-blue:active {\n    background: #2ba9e3;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-blue .fa {\n    color: #107db0;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-green {\n  background-color: #97cc76;\n  background-image: linear-gradient(to bottom, #97cc76, #8bcc62);\n  border: 1px solid #5f993a;\n  box-shadow: inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n\n.button-green:hover, .button-green:focus {\n    background: #8bcc62;\n    border-color: #326612;\n    box-shadow: inset 0 1px 0 #c6e6b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b; }\n\n.button-green:active {\n    background: #8bcc62;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-green .fa {\n    color: #5f993a;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-purple {\n  background-color: #847bba;\n  background-image: linear-gradient(to bottom, #847bba, #7568ba);\n  border: 1px solid #493e87;\n  box-shadow: inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n\n.button-purple:hover, .button-purple:focus {\n    background: #7568ba;\n    border-color: #1f1654;\n    box-shadow: inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba; }\n\n.button-purple:active {\n    background: #7568ba;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-purple .fa {\n    color: #493e87;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-orange {\n  background-color: #f58a38;\n  background-image: linear-gradient(to bottom, #f58a38, #f57c20);\n  border: 1px solid #c25706;\n  box-shadow: inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n\n.button-orange:hover, .button-orange:focus {\n    background: #f57c20;\n    border-color: #773300;\n    box-shadow: inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851; }\n\n.button-orange:active {\n    background: #f57c20;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-orange .fa {\n    color: #c25706;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-red {\n  background-color: #ed6d64;\n  background-image: linear-gradient(to bottom, #ed6d64, #ed574c);\n  border: 1px solid #ba3329;\n  box-shadow: inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }\n\n.button-red:hover, .button-red:focus {\n    background: #ed574c;\n    border-color: #870c03;\n    box-shadow: inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b; }\n\n.button-red:active {\n    background: #ed574c;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-red .fa {\n    color: #ba3329;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button-yellow {\n  background-color: #fce374;\n  background-image: linear-gradient(to bottom, #fce374, #fcdf5b);\n  border: 1px solid #c9ae34;\n  box-shadow: inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d, 0 2px 4px rgba(0, 0, 0, 0.2);\n  color: #967d09;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); }\n\n.button-yellow:hover, .button-yellow:focus {\n    background: #fcdf5b;\n    border-color: #967d09;\n    box-shadow: inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d; }\n\n.button-yellow:active {\n    background: #fcdf5b;\n    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2); }\n\n.button-yellow .fa {\n    color: #c9ae34;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3); }\n\n.button .fa {\n  float: left;\n  font-size: 14px;\n  line-height: 20px;\n  margin: -1px 8px 0 -4px;\n  vertical-align: top; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3RvbjMvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm90b24zXFxib3RvbjMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBO0VBQVEsaUJBQWlCLEVBQUE7O0FBRXpCO0VBdkNFLHlCQXBCMEM7RUFxQjFDLDhEQUFpRTtFQUNqRSx5QkF0QjBDO0VBdUIxQyw4R0FHZ0M7RUFHOUIsY0E3QndDO0VBOEJ4Qyw2Q0FBK0I7RUE2Qk8sa0JBQWtCO0VBQUUsZUFBZTtFQUFFLHFCQUFxQjtFQUFFLGdDQUFnQztFQUFFLGVBQWU7RUFBRSxnQkFBZ0I7RUFBRSxpQkFBaUI7RUFBRSxxQkFBcUI7RUFBRSxxQkFBcUI7RUFBRSw2QkFBNkI7RUFBRSxtQkFBbUIsRUFBQTs7QUF2QjVSO0lBRUUsbUJBdEN3QztJQXVDeEMscUJBdkN3QztJQXdDeEMsZ0ZBeEN3QyxFQUFBOztBQTZDMUM7SUFDRSxtQkE5Q3dDO0lBK0N4Qyw4Q0FBc0MsRUFBQTs7QUFHeEM7SUFDRSxjQW5Ed0M7SUFvRHhDLDZDQUErQixFQUFBOztBQVFuQztFQXhDRSx5QkFwQjBDO0VBcUIxQyw4REFBaUU7RUFDakUseUJBdEIwQztFQXVCMUMsZ0hBR2dDO0VBTTlCLFlBQVk7RUFDWix5Q0FBaUMsRUFBQTs7QUFHbkM7SUFFRSxtQkF0Q3dDO0lBdUN4QyxxQkF2Q3dDO0lBd0N4QyxrRkF4Q3dDLEVBQUE7O0FBNkMxQztJQUNFLG1CQTlDd0M7SUErQ3hDLDhDQUFzQyxFQUFBOztBQUd4QztJQUNFLGNBbkR3QztJQW9EeEMsNkNBQStCLEVBQUE7O0FBU25DO0VBekNFLHlCQXBCMEM7RUFxQjFDLDhEQUFpRTtFQUNqRSx5QkF0QjBDO0VBdUIxQyxnSEFHZ0M7RUFNOUIsWUFBWTtFQUNaLHlDQUFpQyxFQUFBOztBQUduQztJQUVFLG1CQXRDd0M7SUF1Q3hDLHFCQXZDd0M7SUF3Q3hDLGtGQXhDd0MsRUFBQTs7QUE2QzFDO0lBQ0UsbUJBOUN3QztJQStDeEMsOENBQXNDLEVBQUE7O0FBR3hDO0lBQ0UsY0FuRHdDO0lBb0R4Qyw2Q0FBK0IsRUFBQTs7QUFVbkM7RUExQ0UseUJBcEIwQztFQXFCMUMsOERBQWlFO0VBQ2pFLHlCQXRCMEM7RUF1QjFDLGdIQUdnQztFQU05QixZQUFZO0VBQ1oseUNBQWlDLEVBQUE7O0FBR25DO0lBRUUsbUJBdEN3QztJQXVDeEMscUJBdkN3QztJQXdDeEMsa0ZBeEN3QyxFQUFBOztBQTZDMUM7SUFDRSxtQkE5Q3dDO0lBK0N4Qyw4Q0FBc0MsRUFBQTs7QUFHeEM7SUFDRSxjQW5Ed0M7SUFvRHhDLDZDQUErQixFQUFBOztBQVduQztFQTNDRSx5QkFwQjBDO0VBcUIxQyw4REFBaUU7RUFDakUseUJBdEIwQztFQXVCMUMsZ0hBR2dDO0VBTTlCLFlBQVk7RUFDWix5Q0FBaUMsRUFBQTs7QUFHbkM7SUFFRSxtQkF0Q3dDO0lBdUN4QyxxQkF2Q3dDO0lBd0N4QyxrRkF4Q3dDLEVBQUE7O0FBNkMxQztJQUNFLG1CQTlDd0M7SUErQ3hDLDhDQUFzQyxFQUFBOztBQUd4QztJQUNFLGNBbkR3QztJQW9EeEMsNkNBQStCLEVBQUE7O0FBWW5DO0VBNUNFLHlCQXBCMEM7RUFxQjFDLDhEQUFpRTtFQUNqRSx5QkF0QjBDO0VBdUIxQyxnSEFHZ0M7RUFNOUIsWUFBWTtFQUNaLHlDQUFpQyxFQUFBOztBQUduQztJQUVFLG1CQXRDd0M7SUF1Q3hDLHFCQXZDd0M7SUF3Q3hDLGtGQXhDd0MsRUFBQTs7QUE2QzFDO0lBQ0UsbUJBOUN3QztJQStDeEMsOENBQXNDLEVBQUE7O0FBR3hDO0lBQ0UsY0FuRHdDO0lBb0R4Qyw2Q0FBK0IsRUFBQTs7QUFhbkM7RUE3Q0UseUJBcEIwQztFQXFCMUMsOERBQWlFO0VBQ2pFLHlCQXRCMEM7RUF1QjFDLGdIQUdnQztFQUc5QixjQTdCd0M7RUE4QnhDLDZDQUErQixFQUFBOztBQU1qQztJQUVFLG1CQXRDd0M7SUF1Q3hDLHFCQXZDd0M7SUF3Q3hDLGtGQXhDd0MsRUFBQTs7QUE2QzFDO0lBQ0UsbUJBOUN3QztJQStDeEMsOENBQXNDLEVBQUE7O0FBR3hDO0lBQ0UsY0FuRHdDO0lBb0R4Qyw2Q0FBK0IsRUFBQTs7QUFjbkM7RUFBYSxXQUFXO0VBQUUsZUFBZTtFQUFFLGlCQUFpQjtFQUFFLHVCQUF1QjtFQUFFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib3RvbjMvYm90b24zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZ1bmN0aW9uIGhzYigkaC1oc2IsICRzLWhzYiwgJGItaHNiLCAkYTogMSkge1xyXG4gIEBpZiAkYi1oc2IgPT0gMCB7XHJcbiAgICBAcmV0dXJuIGhzbGEoMCwgMCwgMCwgJGEpO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgJGwtaHNsOiAoJGItaHNiLzIpICogKDIgLSAoJHMtaHNiLzEwMCkpO1xyXG4gICAgJHMtaHNsOiAoJGItaHNiICogJHMtaHNiKSAvIGlmKCRsLWhzbCA8IDUwLCAkbC1oc2wgKiAyLCAyMDAgLSAkbC1oc2wgKiAyKTtcclxuICAgIEByZXR1cm4gaHNsYSgkaC1oc2IsICRzLWhzbCwgJGwtaHNsLCAkYSk7XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gaHNiLXNhdHVyYXRlKCRzLCAkYSkge1xyXG4gIEBpZiAkcyA9PSAwIHtcclxuICAgIEByZXR1cm4gMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gJHMgKyAkYTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25pemUoJGgsICRzLCAkYiwgJGxpZ2h0OiAwKSB7XHJcblxyXG4gICRjb2xvcjogaHNiKCRoLCAkcywgJGIpO1xyXG4gICRjb2xvci1kYXJrOiBoc2IoJGgsIGhzYi1zYXR1cmF0ZSgkcywgMTApLCAkYik7XHJcbiAgJGluc2V0LXRvcDogaW5zZXQgMCAxcHggMCBoc2IoJGgsICRzIC0gMjAsICRiICsgMTApO1xyXG4gICRpbnNldC1ib3R0b206IGluc2V0IDAgLTFweCAwIGhzYigkaCwgaHNiLXNhdHVyYXRlKCRzLCAxMCksICRiIC0gMTApO1xyXG4gICRpbnNldDogaW5zZXQgMCAwIDAgMXB4IGhzYigkaCwgaHNiLXNhdHVyYXRlKCRzLCAtIDEwKSwgJGIpO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJGNvbG9yLCAkY29sb3ItZGFyayk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgaHNiKCRoLCBoc2Itc2F0dXJhdGUoJHMsIDIwKSwgJGIgLSAyMCk7XHJcbiAgYm94LXNoYWRvdzogJGluc2V0LXRvcCxcclxuICAgICAgICAgICAgICAkaW5zZXQtYm90dG9tLFxyXG4gICAgICAgICAgICAgICRpbnNldCxcclxuICAgICAgICAgICAgICAwIDJweCA0cHggcmdiYShibGFjaywgMC4yKTtcclxuXHJcbiAgQGlmICRsaWdodCA9PSAxIHtcclxuICAgIGNvbG9yOiBoc2IoJGgsIGhzYi1zYXR1cmF0ZSgkcywgNDApLCAkYiAtIDQwKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEod2hpdGUsIDAuNSk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoYmxhY2ssIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRhcms7XHJcbiAgICBib3JkZXItY29sb3I6IGhzYigkaCwgaHNiLXNhdHVyYXRlKCRzLCA0MCksICRiIC0gNDApO1xyXG4gICAgYm94LXNoYWRvdzogJGluc2V0LXRvcCxcclxuICAgICAgICAgICAgICAgICRpbnNldC1ib3R0b20sXHJcbiAgICAgICAgICAgICAgICAkaW5zZXQ7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGFyaztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDNweCByZ2JhKGJsYWNrLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLmZhIHtcclxuICAgIGNvbG9yOiBoc2IoJGgsIGhzYi1zYXR1cmF0ZSgkcywgMjApLCAkYiAtIDIwKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEod2hpdGUsIDAuMyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuc3Ryb25neyBmb250LXdlaWdodDogYm9sZDt9XHJcblxyXG4uYnV0dG9ueyBAaW5jbHVkZSBidXR0b25pemUoMCwgMCwgOTUsIDEpOyBib3JkZXItcmFkaXVzOiAzcHg7IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMjBweDsgcGFkZGluZzogOXB4IDE2cHggOXB4OyBtYXJnaW46IDE2cHggMCAwIDE2cHg7IHRyYW5zaXRpb246IGFsbCAyMG1zIGVhc2Utb3V0OyB2ZXJ0aWNhbC1hbGlnbjogdG9wO31cclxuLmJ1dHRvbi1ibHVleyBAaW5jbHVkZSBidXR0b25pemUoMTk5LCA3MSwgODkpO31cclxuLmJ1dHRvbi1ncmVlbnsgQGluY2x1ZGUgYnV0dG9uaXplKDk3LCA0MiwgODApO31cclxuLmJ1dHRvbi1wdXJwbGV7IEBpbmNsdWRlIGJ1dHRvbml6ZSgyNDksIDM0LCA3Myk7fVxyXG4uYnV0dG9uLW9yYW5nZXsgQGluY2x1ZGUgYnV0dG9uaXplKDI2LCA3NywgOTYpO31cclxuLmJ1dHRvbi1yZWR7IEBpbmNsdWRlIGJ1dHRvbml6ZSg0LCA1OCwgOTMpO31cclxuLmJ1dHRvbi15ZWxsb3d7IEBpbmNsdWRlIGJ1dHRvbml6ZSg0OSwgNTQsIDk5LCAxKTt9XHJcbi5idXR0b24gLmZheyBmbG9hdDogbGVmdDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMjBweDsgbWFyZ2luOiAtMXB4IDhweCAwIC00cHg7IHZlcnRpY2FsLWFsaWduOiB0b3A7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/boton3/boton3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/boton3/boton3.component.ts ***!
  \*******************************************************/
/*! exports provided: Boton3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boton3Component", function() { return Boton3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Boton3Component = /** @class */ (function () {
    function Boton3Component() {
    }
    Boton3Component.prototype.ngOnInit = function () {
    };
    Boton3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boton3',
            template: __webpack_require__(/*! ./boton3.component.html */ "./src/app/components/boton3/boton3.component.html"),
            styles: [__webpack_require__(/*! ./boton3.component.scss */ "./src/app/components/boton3/boton3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Boton3Component);
    return Boton3Component;
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

module.exports = "img {\r\n  height: 450px;\r\n  width: 90%;\r\n}\r\n\r\n.carrousel {\r\n  outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJydXNlbC9jYXJydXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FycnVzZWwvY2FycnVzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY2Fycm91c2VsIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/carrusel/carrusel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carrusel/carrusel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\" class=\"text-center carrousel\">\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[3]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngbSlide>\r\n    <img [src]=\"images[4]\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ngb-carousel>\r\n"

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

/***/ "./src/app/components/cronometro2/cronometro2.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/cronometro2/cronometro2.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: bttf;\r\n  src: url('bttf.ttf') format(\"opentype\");\r\n}\r\n\r\n@-webkit-keyframes blink { 50% { border-color:red;}  }\r\n\r\n@keyframes blink { 50% { border-color:red;}  }\r\n\r\ntable{\r\n\tborder: 4px solid red ;\r\n\t/* position: fixed ; */\r\n\twidth: 3.2em;\r\n\theight: 1.9em ;\r\n\ttext-align:center ;\r\n\tfont-size: 2rem ;\r\n\tfont-weight:normal;\r\n\tcolor: red;\r\n  background-color:#1d1d1d;\r\n  font-family: bttf;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcm9ub21ldHJvMi9jcm9ub21ldHJvMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVDQUFtRTtBQUNyRTs7QUFFQSwyQkFBbUIsTUFBTSxnQkFBZ0IsQ0FBQyxHQUFHOztBQUE3QyxtQkFBbUIsTUFBTSxnQkFBZ0IsQ0FBQyxHQUFHOztBQUM3QztDQUNDLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0VBQ1Qsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3Jvbm9tZXRybzIvY3Jvbm9tZXRybzIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBidHRmO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzLy9mb250cy9idHRmL2J0dGYudHRmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHsgNTAlIHsgYm9yZGVyLWNvbG9yOnJlZDt9ICB9XHJcbnRhYmxle1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkIHJlZCA7XHJcblx0LyogcG9zaXRpb246IGZpeGVkIDsgKi9cclxuXHR3aWR0aDogMy4yZW07XHJcblx0aGVpZ2h0OiAxLjllbSA7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXIgO1xyXG5cdGZvbnQtc2l6ZTogMnJlbSA7XHJcblx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cdGNvbG9yOiByZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMWQxZDFkO1xyXG4gIGZvbnQtZmFtaWx5OiBidHRmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/cronometro2/cronometro2.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/cronometro2/cronometro2.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table>\n        <tr><td>{{this.tiempoFormateado}}</td></tr>\n    </table>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/cronometro2/cronometro2.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/cronometro2/cronometro2.component.ts ***!
  \*****************************************************************/
/*! exports provided: Cronometro2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cronometro2Component", function() { return Cronometro2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Cronometro2Component = /** @class */ (function () {
    /* #endregion */
    function Cronometro2Component() {
        this.fin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contadorDecimas = 0;
    }
    Cronometro2Component.prototype.ngOnInit = function () {
        if (this.tiempo === 0 || this.tiempo === null || this.tiempo === undefined) {
            this.tiempo = 10; // Si no nos definen ningun tiempo por defecto seteamos 10
        }
        this.start();
    };
    Cronometro2Component.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.contadorDecimas++;
            _this.convertir(_this.contadorDecimas);
        }, 10); // Usamos 10 porque mostramos decimas
    };
    Cronometro2Component.prototype.convertir = function (contadorDecimas) {
        this.segundos = Math.floor(contadorDecimas / 100);
        this.decimas = contadorDecimas % 60;
        // tslint:disable-next-line: max-line-length
        this.tiempoFormateado = (this.segundos).toString().padStart(2, '0') + ":" + this.decimas.toString().padStart(2, '0');
    };
    Cronometro2Component.prototype.reset = function () {
        clearInterval(this.interval);
        this.decimas = 0;
        this.segundos = 0;
        this.minutos = 0;
        this.contadorDecimas = 0;
        this.start();
    };
    Cronometro2Component.prototype.pause = function () {
        clearInterval(this.interval);
        console.log('asd');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], Cronometro2Component.prototype, "fin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Cronometro2Component.prototype, "tiempo", void 0);
    Cronometro2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cronometro2',
            template: __webpack_require__(/*! ./cronometro2.component.html */ "./src/app/components/cronometro2/cronometro2.component.html"),
            styles: [__webpack_require__(/*! ./cronometro2.component.css */ "./src/app/components/cronometro2/cronometro2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Cronometro2Component);
    return Cronometro2Component;
}());



/***/ }),

/***/ "./src/app/components/error404/error404.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/error404/error404.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\"></div>\r\n<div class=\"top\">\r\n  <h1>404</h1>\r\n  <h3>Pagina no encontrada</h3>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"ghost-copy\">\r\n    <div class=\"one\"></div>\r\n    <div class=\"two\"></div>\r\n    <div class=\"three\"></div>\r\n    <div class=\"four\"></div>\r\n  </div>\r\n  <div class=\"ghost\">\r\n    <div class=\"face\">\r\n      <div class=\"eye\"></div>\r\n      <div class=\"eye-right\"></div>\r\n      <div class=\"mouth\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"shadow\"></div>\r\n</div>\r\n<div class=\"bottom\">\r\n  <div class=\"buttons\">\r\n    <button [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" class=\"btn\">Home</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/error404/error404.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/error404/error404.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Abril+Fatface|Lato\");\n.top {\n  margin-top: 30px; }\n.container {\n  margin: 0 auto;\n  position: relative;\n  width: 250px;\n  height: 250px;\n  margin-top: -40px; }\n.ghost {\n  width: 50%;\n  height: 53%;\n  left: 25%;\n  top: 10%;\n  position: absolute;\n  border-radius: 50% 50% 0 0;\n  background: #EDEDED;\n  border: 1px solid #BFC0C0;\n  border-bottom: none;\n  -webkit-animation: float 2s ease-out infinite;\n          animation: float 2s ease-out infinite; }\n.ghost-copy {\n  width: 50%;\n  height: 53%;\n  left: 25%;\n  top: 10%;\n  position: absolute;\n  border-radius: 50% 50% 0 0;\n  background: #EDEDED;\n  border: 1px solid #BFC0C0;\n  border-bottom: none;\n  -webkit-animation: float 2s ease-out infinite;\n          animation: float 2s ease-out infinite;\n  z-index: 0; }\n.face {\n  position: absolute;\n  width: 100%;\n  height: 60%;\n  top: 20%; }\n.eye, .eye-right {\n  position: absolute;\n  background: #585959;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  top: 40%; }\n.eye {\n  left: 25%; }\n.eye-right {\n  right: 25%; }\n.mouth {\n  position: absolute;\n  top: 50%;\n  left: 45%;\n  width: 10px;\n  height: 10px;\n  border: 3px solid;\n  border-radius: 50%;\n  border-color: transparent #585959 #585959 transparent;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n.one, .two, .three, .four {\n  position: absolute;\n  background: #EDEDED;\n  top: 85%;\n  width: 25%;\n  height: 23%;\n  border: 1px solid #BFC0C0;\n  z-index: 0; }\n.one {\n  border-radius: 0 0 100% 30%;\n  left: -1px; }\n.two {\n  left: 23%;\n  border-radius: 0 0 50% 50%; }\n.three {\n  left: 50%;\n  border-radius: 0 0 50% 50%; }\n.four {\n  left: 74.5%;\n  border-radius: 0 0 30% 100%; }\n.shadow {\n  position: absolute;\n  width: 30%;\n  height: 7%;\n  background: #BFC0C0;\n  left: 35%;\n  top: 80%;\n  border-radius: 50%;\n  -webkit-animation: scale 2s infinite;\n          animation: scale 2s infinite; }\n@-webkit-keyframes scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@-webkit-keyframes float {\n  50% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px); } }\n@keyframes float {\n  50% {\n    -webkit-transform: translateY(15px);\n            transform: translateY(15px); } }\n.bottom {\n  margin-top: 10px; }\n/*text styling*/\nh1 {\n  font-family: \"Abril Fatface\", serif;\n  color: #EDEDED;\n  text-align: center;\n  font-size: 9em;\n  margin: 0;\n  text-shadow: -1px 0 #BFC0C0, 0 1px #BFC0C0, 1px 0 #BFC0C0, 0 -1px #BFC0C0; }\nh3 {\n  font-family: \"Lato\", sans-serif;\n  font-size: 2em;\n  text-transform: uppercase;\n  text-align: center;\n  color: #BFC0C0;\n  margin-top: -20px;\n  font-weight: 900; }\np {\n  text-align: center;\n  font-family: \"Lato\", sans-serif;\n  color: #585959;\n  font-size: .6em;\n  margin-top: -20px;\n  text-transform: uppercase; }\n.search {\n  text-align: center; }\n.buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px; }\n/*search style*/\n.search-bar {\n  border: 1px solid #BFC0C0;\n  padding: 5px;\n  height: 20px;\n  margin-left: -30px;\n  width: 200px;\n  outline: none; }\n.search-bar:focus {\n    border: 1px solid #D3DEEA; }\n.search-btn {\n  position: absolute;\n  width: 30px;\n  height: 32px;\n  border: 1px solid #BFC0C0;\n  background: #BFC0C0;\n  text-align: center;\n  color: #EDEDED;\n  cursor: pointer;\n  font-size: 1em;\n  outline: none; }\n.search-btn:hover {\n    background: #EDEDED;\n    border: 1px solid #EDEDED;\n    color: #BFC0C0;\n    transition: all .2s ease; }\n.btn {\n  background: #EDEDED;\n  padding: 15px 20px;\n  margin: 5px;\n  color: #585959;\n  font-family: \"Lato\", sans-serif;\n  text-transform: uppercase;\n  font-size: .6em;\n  letter-spacing: 1px;\n  border: 0; }\n.btn:hover {\n    background: #BFC0C0;\n    transition: all .4s ease-out; }\nfooter {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  font-size: 0.8em;\n  text-transform: uppercase;\n  padding: 10px;\n  color: #EA7996;\n  letter-spacing: 3px;\n  font-family: \"Lato\", sans-serif; }\nfooter a {\n    color: #ffffff;\n    text-decoration: none; }\nfooter a:hover {\n      color: #7d7d7d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvcjQwNC9DOlxcVXNlcnNcXEluZmlzdGlvdGljb3NcXERvY3VtZW50c1xcVVROIEZSQVxcTnVldmEgY2FycGV0YSAoMylcXFRQLU1pLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlcnJvcjQwNFxcZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EseUVBQVk7QUFTWjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUJBakNhO0VBa0NiLHlCQWpDWTtFQWtDWixtQkFBbUI7RUFDbkIsNkNBQXFDO1VBQXJDLHFDQUFxQyxFQUFBO0FBR3ZDO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsbUJBOUNhO0VBK0NiLHlCQTlDWTtFQStDWixtQkFBbUI7RUFDbkIsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyxVQUFVLEVBQUE7QUFJWjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVEsRUFBQTtBQUVWO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQTVEWTtFQTZEWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7QUFHVjtFQUNFLFNBQVMsRUFBQTtBQUVYO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxrQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscURBQWlEO0VBQ2pELGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtBQUcxQjtFQUNFLGtCQUFrQjtFQUNsQixtQkExRmE7RUEyRmIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBN0ZZO0VBOEZaLFVBQVUsRUFBQTtBQUdaO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsU0FBUztFQUNULDBCQUEwQixFQUFBO0FBRzVCO0VBQ0UsU0FBUztFQUNULDBCQUEwQixFQUFBO0FBRzVCO0VBQ0UsV0FBVztFQUNYLDJCQUEyQixFQUFBO0FBRzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsbUJBekhZO0VBMEhaLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG9DQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTtBQUc5QjtFQUNFO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBO0VBRXZCO0lBQ0UsMkJBQW1CO1lBQW5CLG1CQUFtQixFQUFBLEVBQUE7QUFSdkI7RUFDRTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUVyQjtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQTtFQUV2QjtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUIsRUFBQSxFQUFBO0FBSXZCO0VBQ0U7SUFDRyxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUEsRUFBQTtBQUZoQztFQUNFO0lBQ0csbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQUE7QUFJaEM7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQixlQUFBO0FBQ0E7RUFDRSxtQ0FsSjBCO0VBbUoxQixjQTFKYTtFQTJKYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCx5RUE3SlksRUFBQTtBQStKZDtFQUNFLCtCQXpKdUI7RUEwSnZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBcEtZO0VBcUtaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQiwrQkFuS3VCO0VBb0t2QixjQTFLWTtFQTJLWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtBQUdsQixlQUFBO0FBRUE7RUFDRSx5QkEvTFk7RUFnTVosWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBQU5mO0lBUUkseUJBcE1XLEVBQUE7QUF3TWY7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkE5TVk7RUErTVosbUJBL01ZO0VBZ05aLGtCQUFrQjtFQUNsQixjQWxOYTtFQW1OYixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWEsRUFBQTtBQVZmO0lBWUksbUJBdk5XO0lBd05YLHlCQXhOVztJQXlOWCxjQXhOVTtJQXlOVix3QkFBd0IsRUFBQTtBQUk1QjtFQUNFLG1CQS9OYTtFQWdPYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBaE9ZO0VBaU9aLCtCQTNOdUI7RUE0TnZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTtBQVRYO0lBV0ksbUJBeE9VO0lBeU9WLDRCQUE0QixFQUFBO0FBSWhDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsK0JBaFB1QixFQUFBO0FBc096QjtJQVlJLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtBQWJ6QjtNQWVNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNFREVERUQ7XHJcbiRncmF5OiAjQkZDMEMwO1xyXG4kZGFyazogIzU4NTk1OTtcclxuJGxpZ2h0OiAjRDNERUVBO1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYnJpbCtGYXRmYWNlfExhdG8nKTtcclxuXHJcbiRiaWc6ICdBYnJpbCBGYXRmYWNlJywgc2VyaWY7XHJcbiRib2R5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBib2R5IHtcclxuLy8gICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XHJcbi8vIH1cclxuXHJcbi50b3Age1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAtNDBweDtcclxufVxyXG5cclxuLmdob3N0IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTMlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICB0b3A6IDEwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAycyBlYXNlLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmdob3N0LWNvcHkge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MyU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHRvcDogMTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBhbmltYXRpb246IGZsb2F0IDJzIGVhc2Utb3V0IGluZmluaXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcblxyXG4uZmFjZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHRvcDogMjAlO1xyXG59XHJcbi5leWUsIC5leWUtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAkZGFyaztcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRvcDogNDAlO1xyXG59XHJcblxyXG4uZXllIHtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuLmV5ZS1yaWdodCB7XHJcbiAgcmlnaHQ6IDI1JTtcclxufVxyXG5cclxuLm1vdXRoIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA0NSU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRkYXJrICRkYXJrIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLm9uZSwgLnR3bywgLnRocmVlLCAuZm91ciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICB0b3A6IDg1JTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjMlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5vbmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMDAlIDMwJTtcclxuICBsZWZ0OiAtMXB4O1xyXG59XHJcblxyXG4udHdvIHtcclxuICBsZWZ0OiAyMyU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbn1cclxuXHJcbi50aHJlZSB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG59XHJcblxyXG4uZm91ciB7XHJcbiAgbGVmdDogNzQuNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDMwJSAxMDAlO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDclO1xyXG4gIGJhY2tncm91bmQ6ICRncmF5O1xyXG4gIGxlZnQ6IDM1JTtcclxuICB0b3A6IDgwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdCB7XHJcbiAgNTAlIHtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKnRleHQgc3R5bGluZyovXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJGJpZztcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDllbTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAkZ3JheSwgMCAxcHggJGdyYXksIDFweCAwICRncmF5LCAwIC0xcHggJGdyYXk7XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAkYm9keTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5wIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICRib2R5O1xyXG4gIGNvbG9yOiAkZGFyaztcclxuICBmb250LXNpemU6IC42ZW07XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qc2VhcmNoIHN0eWxlKi9cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gIGJhY2tncm91bmQ6ICRncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBjb2xvcjogJGRhcms7XHJcbiAgZm9udC1mYW1pbHk6ICRib2R5O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAuNmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGdyYXk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI0VBNzk5NjtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAkYm9keTtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/error404/error404.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/components/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.scss */ "./src/app/components/error404/error404.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
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

module.exports = ".carrusel {\r\n   /* background-image: url(\"../../../assets/img/wallpapers/fondo1.jpg\") */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLHVFQUF1RTtBQUMxRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FycnVzZWwge1xyXG4gICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3dhbGxwYXBlcnMvZm9uZG8xLmpwZ1wiKSAqL1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2   {color:white}\r\np    {color:white}\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    /*background-image: linear-gradient(135deg, rgba(31,123,229,1) 0%, rgba(58,139,232,1) 47%, rgba(70,153,234,1) 92%, rgba(72,156,234,1) 100%);*/\r\n    background-image: url('fondo1.jpg');\r\n    background-size: 100% 100%;\r\n}\r\n.fondo {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  /*background-image: linear-gradient(135deg, rgba(31,123,229,1) 0%, rgba(58,139,232,1) 47%, rgba(70,153,234,1) 92%, rgba(72,156,234,1) 100%);*/\r\n  background-image: url('fondo1.jpg');\r\n  padding-bottom: 30px;\r\n  padding-top: 5px;\r\n}\r\n.card-container.card {\r\n    width: 350px;\r\n    padding: 40px 40px;\r\n    background-color: #404040;\r\n}\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n    position: absolute;\r\n    top: -87px;\r\n    left: 118px;\r\n    height: 150px;\r\n    margin: 0 auto 30px;\r\n    display: block;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    /*background-color: rgb(104, 145, 162);\r\n    / background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFFakI7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZJQUE2STtJQUM3SSxtQ0FBa0U7SUFDbEUsMEJBQTBCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDZJQUE2STtFQUM3SSxtQ0FBa0U7RUFDbEUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBaUI7UUFBakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTs7RUFFRTtBQUNGO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFHaEMsa0JBQWtCO0lBR2xCLDBDQUEwQztBQUM5QztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7O0VBRUU7QUFDRjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUduQixzQkFBc0I7QUFDMUI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFHbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUVWLHVFQUF1RTtBQUMzRTtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCOzhFQUMwRTtJQUMxRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBR1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFJWixzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiAgIHtjb2xvcjp3aGl0ZX1cclxucCAgICB7Y29sb3I6d2hpdGV9XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTIzLDIyOSwxKSAwJSwgcmdiYSg1OCwxMzksMjMyLDEpIDQ3JSwgcmdiYSg3MCwxNTMsMjM0LDEpIDkyJSwgcmdiYSg3MiwxNTYsMjM0LDEpIDEwMCUpOyovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3dhbGxwYXBlcnMvZm9uZG8xLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uZm9uZG8ge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTIzLDIyOSwxKSAwJSwgcmdiYSg1OCwxMzksMjMyLDEpIDQ3JSwgcmdiYSg3MCwxNTMsMjM0LDEpIDkyJSwgcmdiYSg3MiwxNTYsMjM0LDEpIDEwMCUpOyovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy93YWxscGFwZXJzL2ZvbmRvMS5qcGdcIik7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLypcclxuICogQ2FyZCBjb21wb25lbnRcclxuICovXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXHJcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLyogc2hhZG93cyBhbmQgcm91bmRlZCBib3JkZXJzICovXHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtODdweDtcclxuICAgIGxlZnQ6IDExOHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLypcclxuICogRm9ybSBzdHlsZXNcclxuICovXHJcbi5wcm9maWxlLW5hbWUtY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5yZWF1dGgtZW1haWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gI2lucHV0RW1haWwsXHJcbi5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0sXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdLFxyXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcclxufVxyXG5cclxuLmJ0bi5idG4tc2lnbmluIHtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzRkOTBmZTsgKi9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG4gICAgLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQocmdiKDEwNCwgMTQ1LCAxNjIpLCByZ2IoMTIsIDk3LCAzMykpOyovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xyXG59XHJcblxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgICBjb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkOmhvdmVyLFxyXG4uZm9yZ290LXBhc3N3b3JkOmFjdGl2ZSxcclxuLmZvcmdvdC1wYXNzd29yZDpmb2N1c3tcclxuICAgIGNvbG9yOiByZ2IoMTIsIDk3LCAzMyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card card-container\">\r\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"../../../assets/img/logos/Logos-utngames/logo-utngames-solo.png\">\r\n        <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\r\n        <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n        <form class=\"form-signin\">\r\n            <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n            <input [(ngModel)]=\"this.email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Usuario\" required autofocus name=\"email\">\r\n            <input [(ngModel)]=\"this.password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Contraseña\" required name=\"password\">\r\n            <div class=\"div\"></div>\r\n\r\n            <button class=\"btn btn-lg btn-success btn-block btn-signin mt-5\" type=\"submit\" (click)=\"onLogin()\">Iniciar Sesión</button>\r\n        </form><!-- /form -->\r\n    </div><!-- /card-container -->\r\n</div><!-- /container -->\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.email = '';
        this.password = '';
        this.isError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.loginEmailUser(this.email, this.password)
            .then(function (res) {
            _this.onLoginRedirect();
            _this.isError = false;
            console.log("Logeado");
        })
            .catch(function (err) {
            console.log('ERROR:', err.message);
            _this.isError = true;
        });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            // Aca tenemos los datos del usuario que nos provee el servicio de Google
            console.log('resUser', res);
            _this.onLoginRedirect();
            _this.isError = false;
            console.log("Logeado");
        })
            .catch(function (err) {
            _this.isError = true;
            console.log('Error: ', err.message);
        });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        console.log('Usuario deslogeado');
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 200px;\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin-top: 40px;\r\n  height: 75px;\r\n  }\r\n\r\n@font-face {\r\n    font-family: lato;\r\n    src: url('atari.ttf') format(\"opentype\");\r\n  }\r\n\r\n.logo {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'lato', 'arial', sans-serif;\r\n    font-size: 4rem;\r\n  }\r\n\r\n.fondo {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /*background-image: linear-gradient(135deg, rgba(31,123,229,1) 0%, rgba(58,139,232,1) 47%, rgba(70,153,234,1) 92%, rgba(72,156,234,1) 100%);*/\r\n    background-image: url('fondo1.jpg');\r\n    padding-bottom: 30px;\r\n    padding-top: 5px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsd0NBQTRFO0VBQzlFOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGVBQWU7RUFDakI7O0FBR0E7SUFDRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZJQUE2STtJQUM3SSxtQ0FBa0U7SUFDbEUsb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgICBzcmM6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL2F0YXJpL2F0YXJpL2F0YXJpLnR0ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcblxyXG5cclxuICAuZm9uZG8ge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsMTIzLDIyOSwxKSAwJSwgcmdiYSg1OCwxMzksMjMyLDEpIDQ3JSwgcmdiYSg3MCwxNTMsMjM0LDEpIDkyJSwgcmdiYSg3MiwxNTYsMjM0LDEpIDEwMCUpOyovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3dhbGxwYXBlcnMvZm9uZG8xLmpwZ1wiKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu-principal/menu-principal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/menu-principal/menu-principal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\r\n    <mat-toolbar style=\"outline: none\" [routerLink]=\"['/home']\"><i class=\"fa fa-home\"></i> &nbsp;Home</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item [routerLink]=\"['/anagramas']\" routerLinkActive=\"router-link-active\">Anagrama</a>\r\n      <a mat-list-item [routerLink]=\"['/piedrapapelotijera']\" routerLinkActive=\"router-link-active\">Piedra, papel o tijera</a>\r\n      <a mat-list-item [routerLink]=\"['/aguilidad']\" routerLinkActive=\"router-link-active\">Agilidad Artimética</a>\r\n      <a mat-list-item [routerLink]=\"['/adivina']\" routerLinkActive=\"router-link-active\" >Adivina el número</a>\r\n      <a mat-list-item [routerLink]=\"['/tateti']\" routerLinkActive=\"router-link-active\">TaTeTi</a>\r\n      <a mat-list-item [routerLink]=\"['/mijuego']\" routerLinkActive=\"router-link-active\">Mi Juego</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content class=\"fondo\">\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span><app-logo></app-logo></span>\r\n      <span class=\"ml-4 logo\">UTN</span><span style=\"color:orange\" class=\"logo ml-2\">Games</span>\r\n      <app-boton-login *ngIf=\"!this.isLogged\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" style=\"position: absolute; right: 10px;\" [texto]=\"' ENTRAR'\"></app-boton-login>\r\n      <app-boton-login *ngIf=\"this.isLogged\" [matMenuTriggerFor]=\"beforeMenu\" routerLinkActive=\"router-link-active\" style=\"position: absolute; right: 10px;\" [texto]=\"' MI CUENTA'\"></app-boton-login>\r\n      <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\r\n        <button mat-menu-item>Puntos</button>\r\n        <button mat-menu-item (click)=\"this.onLogout()\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Salir</button>\r\n      </mat-menu>\r\n    </mat-toolbar>\r\n\r\n    <!-- Add Content Here -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var MenuPrincipalComponent = /** @class */ (function () {
    function MenuPrincipalComponent(breakpointObserver, authService, afsAuth) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.isLogged = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MenuPrincipalComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    MenuPrincipalComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log('Usuario logeado');
                _this.isLogged = true;
            }
            else {
                console.log('Usuario no logeado');
                _this.isLogged = false;
            }
        });
    };
    MenuPrincipalComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    MenuPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-principal',
            template: __webpack_require__(/*! ./menu-principal.component.html */ "./src/app/components/menu-principal/menu-principal.component.html"),
            styles: [__webpack_require__(/*! ./menu-principal.component.css */ "./src/app/components/menu-principal/menu-principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], MenuPrincipalComponent);
    return MenuPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/components/mi-pong/mi-pong.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/mi-pong/mi-pong.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".juego {\r\n  outline: white 3px solid;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9taS1wb25nL21pLXBvbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWktcG9uZy9taS1wb25nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVlZ28ge1xyXG4gIG91dGxpbmU6IHdoaXRlIDNweCBzb2xpZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/mi-pong/mi-pong.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/mi-pong/mi-pong.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <canvas class=\"juego\" #PongCanvas [width]=\"ancho\" [height]=\"alto\"></canvas>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/mi-pong/mi-pong.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mi-pong/mi-pong.component.ts ***!
  \*********************************************************/
/*! exports provided: MiPongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiPongComponent", function() { return MiPongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_class_miPong_juego_pong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/class/miPong/juego-pong */ "./src/app/class/miPong/juego-pong.ts");
/* harmony import */ var src_app_class_miPong_controles_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/class/miPong/controles.enum */ "./src/app/class/miPong/controles.enum.ts");




var MiPongComponent = /** @class */ (function () {
    function MiPongComponent() {
        this.ancho = 800;
        this.alto = 420;
        this.puntosJugador = 0;
        this.puntosComputadora = 0;
        this.refresco = 60;
        this.juego = new src_app_class_miPong_juego_pong__WEBPACK_IMPORTED_MODULE_2__["JuegoPong"](this.alto, this.ancho);
        this.joystick = { arribaPresionado: false, abajoPresionado: false };
    }
    MiPongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contexto = this.canvasElement.nativeElement.getContext('2d');
        this.renderFrame();
        this.play = setInterval(function () { return _this.juego.controlJuego(_this.joystick); }, 1 / this.refresco);
    };
    MiPongComponent.prototype.delay = function (timeInMillis) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, timeInMillis); });
    };
    MiPongComponent.prototype.restart = function () {
        var _this = this;
        clearInterval(this.play);
        this.juego = new src_app_class_miPong_juego_pong__WEBPACK_IMPORTED_MODULE_2__["JuegoPong"](this.alto, this.ancho);
        this.renderFrame();
        this.play = setInterval(function () { return _this.juego.controlJuego(_this.joystick); }, 1 / this.refresco);
    };
    MiPongComponent.prototype.renderFrame = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var limites, paletaJugador, paletaComputadora, pelota;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.juego.gameOver()) return [3 /*break*/, 2];
                        this.contexto.font = '30px Arial';
                        if (this.juego.ganador === 'jugador') {
                            this.puntosJugador++;
                        }
                        else if (this.juego.ganador === 'computadora') {
                            this.puntosComputadora++;
                        }
                        this.contexto.fillText(this.puntosJugador + " | " + this.puntosComputadora, this.ancho / 2, 50);
                        return [4 /*yield*/, this.delay(2000)];
                    case 1:
                        _a.sent();
                        console.log('GAME OVER?', this.juego.gameOver());
                        this.restart();
                        return [2 /*return*/];
                    case 2:
                        // Dibujamos el fondo
                        this.contexto.fillStyle = 'rgb(0,0,0)';
                        this.contexto.fillRect(0, 0, this.ancho, this.alto);
                        // Pintamos los objetos
                        this.contexto.fillStyle = 'rgb(255,255,255)';
                        paletaJugador = this.juego.paletaJugador;
                        limites = paletaJugador.getLimitesColision();
                        this.contexto.fillRect(limites.izquierda, limites.superior, paletaJugador.getAncho(), paletaJugador.getAlto());
                        paletaComputadora = this.juego.paletaComputadora;
                        limites = paletaComputadora.getLimitesColision();
                        this.contexto.fillRect(limites.derecha, limites.superior, paletaComputadora.getAncho(), paletaComputadora.getAlto());
                        pelota = this.juego.pelota;
                        limites = pelota.getLimitesColision();
                        this.contexto.fillRect(limites.derecha, limites.superior, pelota.getAncho(), pelota.getAlto());
                        // Renderizamos
                        window.requestAnimationFrame(function () { return _this.renderFrame(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MiPongComponent.prototype.keyUp = function (event) {
        if (event.keyCode == src_app_class_miPong_controles_enum__WEBPACK_IMPORTED_MODULE_3__["Controles"].Arriba) {
            this.joystick.arribaPresionado = true;
            console.log('arriba');
        }
        if (event.keyCode == src_app_class_miPong_controles_enum__WEBPACK_IMPORTED_MODULE_3__["Controles"].Abajo) {
            this.joystick.abajoPresionado = true;
            console.log('asd');
        }
    };
    MiPongComponent.prototype.keyDown = function (event) {
        if (event.keyCode == src_app_class_miPong_controles_enum__WEBPACK_IMPORTED_MODULE_3__["Controles"].Arriba) {
            this.joystick.arribaPresionado = false;
        }
        if (event.keyCode == src_app_class_miPong_controles_enum__WEBPACK_IMPORTED_MODULE_3__["Controles"].Abajo) {
            this.joystick.abajoPresionado = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('PongCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MiPongComponent.prototype, "canvasElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MiPongComponent.prototype, "keyUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MiPongComponent.prototype, "keyDown", null);
    MiPongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mi-pong',
            template: __webpack_require__(/*! ./mi-pong.component.html */ "./src/app/components/mi-pong/mi-pong.component.html"),
            styles: [__webpack_require__(/*! ./mi-pong.component.css */ "./src/app/components/mi-pong/mi-pong.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiPongComponent);
    return MiPongComponent;
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

/***/ "./src/app/components/puntos/puntos.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/puntos/puntos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: bttf;\r\n  src: url('bttf.ttf') format(\"opentype\");\r\n}\r\n\r\n@-webkit-keyframes blink { 50% { border-color:red;}  }\r\n\r\n@keyframes blink { 50% { border-color:red;}  }\r\n\r\n.puntos {\r\n\tborder: 4px solid red ;\r\n\t/* position: fixed ; */\r\n\twidth: 3.2em;\r\n\theight: 1.9em ;\r\n\ttext-align:center ;\r\n\tfont-size: 2rem ;\r\n\tfont-weight:normal;\r\n\tcolor: red;\r\n  background-color:#1d1d1d;\r\n  font-family: bttf;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdW50b3MvcHVudG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQW1FO0FBQ3JFOztBQUVBLDJCQUFtQixNQUFNLGdCQUFnQixDQUFDLEdBQUc7O0FBQTdDLG1CQUFtQixNQUFNLGdCQUFnQixDQUFDLEdBQUc7O0FBQzdDO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osY0FBYztDQUNkLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFVBQVU7RUFDVCx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdW50b3MvcHVudG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogYnR0ZjtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy8vZm9udHMvYnR0Zi9idHRmLnR0ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7IDUwJSB7IGJvcmRlci1jb2xvcjpyZWQ7fSAgfVxyXG4ucHVudG9zIHtcclxuXHRib3JkZXI6IDRweCBzb2xpZCByZWQgO1xyXG5cdC8qIHBvc2l0aW9uOiBmaXhlZCA7ICovXHJcblx0d2lkdGg6IDMuMmVtO1xyXG5cdGhlaWdodDogMS45ZW0gO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyIDtcclxuXHRmb250LXNpemU6IDJyZW0gO1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHRjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzFkMWQxZDtcclxuICBmb250LWZhbWlseTogYnR0ZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/puntos/puntos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/puntos/puntos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"puntos\" (change)=\"this.formatearPuntos()\">\r\n      {{this.puntos}}\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/puntos/puntos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/puntos/puntos.component.ts ***!
  \*******************************************************/
/*! exports provided: PuntosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntosComponent", function() { return PuntosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PuntosComponent = /** @class */ (function () {
    function PuntosComponent() {
    }
    PuntosComponent.prototype.ngOnInit = function () {
    };
    PuntosComponent.prototype.formatearPuntos = function () {
        this.puntosFormateados = "" + (this.puntos).toString().padStart(2, '0');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PuntosComponent.prototype, "puntos", void 0);
    PuntosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-puntos',
            template: __webpack_require__(/*! ./puntos.component.html */ "./src/app/components/puntos/puntos.component.html"),
            styles: [__webpack_require__(/*! ./puntos.component.css */ "./src/app/components/puntos/puntos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PuntosComponent);
    return PuntosComponent;
}());



/***/ }),

/***/ "./src/app/components/tateti/tateti.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-8\">\r\n      <div class=\"tic-tac-toe fondo\">\r\n        <div class=\"holder\">\r\n          <div class=\"row buttons choose-symbol cuadroElegir\" [ngClass]=\"{'active': !tableIsVisible}\">\r\n\r\n            <div class=\"container\">\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <h3 class=\"text-center\">Elegir X/O</h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-2\"></div>\r\n                <div class=\"col-4\"><button class=\"botones btn\" style=\"color:#63A375\"\r\n                    (click)=\"setPlayerSymbol('X')\">X</button></div>\r\n                <div class=\"col-4\"><button class=\"botones btn\" style=\"color:#E94F37\"\r\n                    (click)=\"setPlayerSymbol('O')\">O</button></div>\r\n                <div class=\"col-2\"></div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div id=\"message\" style=\"color:orange\" class=\"center\"></div>\r\n\r\n          <div class=\"table-wrapper\" [ngClass]=\"{'active': tableIsVisible}\">\r\n            <table>\r\n              <tr>\r\n                <td (click)=\"makeAMove($event, 0)\"></td>\r\n                <td (click)=\"makeAMove($event, 1)\"></td>\r\n                <td (click)=\"makeAMove($event, 2)\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td (click)=\"makeAMove($event, 3)\"></td>\r\n                <td (click)=\"makeAMove($event, 4)\"></td>\r\n                <td (click)=\"makeAMove($event, 5)\"></td>\r\n              </tr>\r\n              <tr>\r\n                <td (click)=\"makeAMove($event, 6)\"></td>\r\n                <td (click)=\"makeAMove($event, 7)\"></td>\r\n                <td (click)=\"makeAMove($event, 8)\"></td>\r\n              </tr>\r\n            </table>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div class=\"row buttons\">\r\n              <br>\r\n              <!-- <button class=\"col s4 restart\" (click)=\"restart()\">restart</button> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-2\">\r\n        <div class=\"etiquetas\">\r\n            <span class=\"etiquetas text-center\">PUNTOS</span>\r\n          </div>\r\n          <app-puntos [puntos]=\"this.puntos2\"></app-puntos>\r\n          <br>\r\n          <a class=\"button dark_grey\" (click)=\"restart()\"> Jugar de nuevo</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tateti/tateti.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fondo {\n  background-image: url('109419-paper-yellow-rectangle-line-angle-2560x1600.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  max-height: 400px;\n  min-height: 400px;\n  max-width: 800px;\n  min-width: 800px;\n  border: 3px solid #000;\n  border-radius: 25px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 30px; }\n\n.etiquetas {\n  text-align: center;\n  width: 7.8em;\n  height: 1.9em;\n  font-weight: bold; }\n\n.botones {\n  font-size: 50px; }\n\n.cuadroElegir {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 25px;\n  border: 2px solid black;\n  background-size: cover;\n  background-color: #EDC79B;\n  padding: 5px; }\n\n.tic-tac-toe {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #1DD189; }\n\n.tic-tac-toe .buttons.row {\n    text-align: center; }\n\n.tic-tac-toe .buttons.row button.col {\n      float: none;\n      border: none;\n      font-size: 29px;\n      color: #f9f5ed;\n      border-bottom: 2px solid rgba(249, 245, 237, 0.36);\n      background: transparent;\n      margin: 14px;\n      margin-bottom: 50px; }\n\n.tic-tac-toe .buttons.row button.col.active {\n        border-color: #f9f5ed; }\n\n.tic-tac-toe .buttons.row button.col.restart {\n        border: 0;\n        font-size: 20px;\n        margin-top: 50px; }\n\n.tic-tac-toe #message {\n    margin: 30px 0;\n    font-size: 28px;\n    color: #557592;\n    height: 43px; }\n\n.tic-tac-toe h3 {\n    color: #557592; }\n\n.tic-tac-toe table tr:nth-child(2) {\n    border: 5px solid gray;\n    border-left: 0;\n    border-right: 0; }\n\n.tic-tac-toe table tr td {\n    border: none;\n    width: 100px;\n    height: 100px;\n    text-align: center;\n    color: #f9f5ed;\n    font-size: 70px;\n    font-weight: 300;\n    padding: 0;\n    line-height: 0;\n    transition: all 0.2s ease-in-out; }\n\n.tic-tac-toe table tr td:hover {\n      cursor: default; }\n\n.tic-tac-toe table tr td:nth-child(2) {\n      border: 5px solid gray;\n      border-top: 0;\n      border-bottom: 0; }\n\n.tic-tac-toe table tr .o-symbol {\n    color: #E94F37; }\n\n.tic-tac-toe table tr .x-symbol {\n    color: #63A375; }\n\n.tic-tac-toe .table-wrapper,\n  .tic-tac-toe .choose-symbol {\n    opacity: 0;\n    height: 0;\n    position: relative;\n    z-index: -999; }\n\n.tic-tac-toe .table-wrapper.active,\n    .tic-tac-toe .choose-symbol.active {\n      opacity: 1;\n      height: 100%;\n      z-index: 2; }\n\n/**\r\n * Dark Grey\r\n */\n\na.button.dark_grey {\n  background: #d1d1d1;\n  background: linear-gradient(#d1d1d1, #afafaf);\n  border: solid 1px #b4b4b4;\n  border-bottom: solid 3px #878787;\n  box-shadow: inset 0 0 0 1px #e3e3e3;\n  color: #555;\n  text-shadow: 0 1px 0 #d6d6d6; }\n\na.button.dark_grey:hover {\n  background: #b7b7b7;\n  background: linear-gradient(#b7b7b7, #c2c2c2);\n  border: solid 1px #a2a2a2;\n  border-bottom: solid 3px #878787;\n  box-shadow: inset 0 0 0 1px #d4d4d4; }\n\na.button.dark_grey:active {\n  background: #afafaf;\n  background: linear-gradient(#afafaf, #a9a9a9);\n  border: solid 1px #757575;\n  box-shadow: inset 0 10px 15px 0 #9a9a9a; }\n\na.button::before {\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-box-shadow: #959595 0 2px 5px;\n  -moz-box-shadow: #959595 0 2px 5px;\n  border-radius: 3px;\n  box-shadow: #959595 0 2px 5px;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  padding: 2px 0 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\na.button:active::before {\n  padding: 1px 0 0; }\n\n/**\r\n * Grey\r\n */\n\na.button {\n  -moz-box-shadow: inset 0 0 0 1px #63ad0d;\n  -webkit-box-shadow: inset 0 0 0 1px #63ad0d;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  background: #eee;\n  background: linear-gradient(#eee, #e2e2e2);\n  border: solid 1px #d0d0d0;\n  border-bottom: solid 3px #b2b1b1;\n  border-radius: 3px;\n  box-shadow: inset 0 0 0 1px #f5f5f5;\n  color: #555;\n  display: inline-block;\n  font: bold 12px Arial, Helvetica, Clean, sans-serif;\n  margin: 0 25px 25px 0;\n  padding: 10px 20px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: 0 1px 0 #fafafa; }\n\na.button:hover {\n  background: #e4e4e4;\n  background: linear-gradient(#e4e4e4, #ededed);\n  border: solid 1px #c2c2c2;\n  border-bottom: solid 3px #b2b1b1;\n  box-shadow: inset 0 0 0 1px #efefef; }\n\na.button:active {\n  background: #dfdfdf;\n  background: linear-gradient(#dfdfdf, #e3e3e3);\n  border: solid 1px #959595;\n  box-shadow: inset 0 10px 15px 0 #c4c4c4;\n  top: 2px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXRldGkvQzpcXFVzZXJzXFxJbmZpc3Rpb3RpY29zXFxEb2N1bWVudHNcXFVUTiBGUkFcXE51ZXZhIGNhcnBldGEgKDMpXFxUUC1NaS1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGF0ZXRpXFx0YXRldGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGF0ZXRpL3RhdGV0aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLCtFQUEwRztFQUMxRyw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYztFQUNkLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFFbkIsaUNBQWlDO0VBQ2pDLHlCQUF5QixFQUFBOztBQU4zQjtJQVNJLGtCQUFrQixFQUFBOztBQVR0QjtNQVlNLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLGNBeERlO01BeURmLGtEQUFrRDtNQUNsRCx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLG1CQUFtQixFQUFBOztBQW5CekI7UUFzQlEscUJBQXFCLEVBQUE7O0FBdEI3QjtRQTBCUSxTQUFTO1FBQ1QsZUFBZTtRQUNmLGdCQUFnQixFQUFBOztBQTVCeEI7SUFrQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWSxFQUFBOztBQXJDaEI7SUF5Q0ksY0FBYyxFQUFBOztBQXpDbEI7SUErQ1Esc0JBekZJO0lBMEZKLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBakR2QjtJQXFEUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FsR2E7SUFtR2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUtkLGdDQUFnQyxFQUFBOztBQWxFeEM7TUFxRVUsZUFBZSxFQUFBOztBQXJFekI7TUF5RVUsc0JBbkhFO01Bb0hGLGFBQWE7TUFDYixnQkFBZ0IsRUFBQTs7QUEzRTFCO0lBZ0ZRLGNBQ0YsRUFBQTs7QUFqRk47SUFvRlEsY0FDRixFQUFBOztBQXJGTjs7SUEyRkksVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBOztBQTlGakI7O01BaUdNLFVBQVU7TUFDVixZQUFZO01BQ1osVUFBVSxFQUFBOztBQUtoQjs7RUN4Q0U7O0FEMkNEO0VBQ0MsbUJBQW1CO0VBR25CLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsbUJBQW1CO0VBR25CLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLG1CQUFtQjtFQUduQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLHVDQUF1QyxFQUFBOztBQUV2QztFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXLEVBQUE7O0FBRWY7RUFBMEIsZ0JBQWdCLEVBQUE7O0FBRTFDOztFQ3ZDRTs7QUQwQ0Y7RUFDSSx3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBR2hCLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtREFBbUQ7RUFDbkQscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxtQkFBbUI7RUFHbkIsNkNBQTZDO0VBQzdDLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsbUNBQW1DLEVBQUE7O0FBRXZDO0VBQ0ksbUJBQW1CO0VBR25CLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsdUNBQXVDO0VBQ3ZDLFFBQU8sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGF0ZXRpL3RhdGV0aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbjogZ3JheTtcclxuJGJlaWdlLWxpZ2h0OiAjZjlmNWVkO1xyXG5cclxuLmZvbmRvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3RhdGV0aS8xMDk0MTktcGFwZXIteWVsbG93LXJlY3RhbmdsZS1saW5lLWFuZ2xlLTI1NjB4MTYwMC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmV0aXF1ZXRhcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA3LjhlbTtcclxuICBoZWlnaHQ6IDEuOWVtIDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5jdWFkcm9FbGVnaXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURDNzlCO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnRpYy10YWMtdG9lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUREMTg5O1xyXG5cclxuICAuYnV0dG9ucy5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbi5jb2wge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDI5cHg7XHJcbiAgICAgIGNvbG9yOiAkYmVpZ2UtbGlnaHQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI0OSwgMjQ1LCAyMzcsIDAuMzYpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgbWFyZ2luOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5ZjVlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5yZXN0YXJ0IHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNtZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICM1NTc1OTI7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogIzU1NzU5MjtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHRyIHtcclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRncmVlbjtcclxuICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkYmVpZ2UtbGlnaHQ7O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcblxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkZ3JlZW47XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vLXN5bWJvbCB7XHJcbiAgICAgICAgY29sb3I6ICNFOTRGMzdcclxuICAgICAgfVxyXG5cclxuICAgICAgLngtc3ltYm9sIHtcclxuICAgICAgICBjb2xvcjogIzYzQTM3NVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGFibGUtd3JhcHBlcixcclxuICAuY2hvb3NlLXN5bWJvbCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogLTk5OTtcclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXJrIEdyZXlcclxuICovXHJcbiBhLmJ1dHRvbi5kYXJrX2dyZXkge1xyXG4gIGJhY2tncm91bmQ6ICNkMWQxZDE7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2QxZDFkMSksIHRvKCNhZmFmYWYpKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZDFkMWQxLCAjYWZhZmFmKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2QxZDFkMSwgI2FmYWZhZik7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I0YjRiNDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzg3ODc4NztcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2UzZTNlMztcclxuICBjb2xvcjogIzU1NTtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZDZkNmQ2OyB9XHJcblxyXG5hLmJ1dHRvbi5kYXJrX2dyZXk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiN2I3Yjc7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2I3YjdiNyksIHRvKCNjMmMyYzIpKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjYjdiN2I3LCAjYzJjMmMyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YjdiNywgI2MyYzJjMik7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2EyYTJhMjtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzg3ODc4NztcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q0ZDRkNDsgfVxyXG5cclxuYS5idXR0b24uZGFya19ncmV5OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2FmYWZhZjtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIGJvdHRvbSwgZnJvbSgjYWZhZmFmKSwgdG8oI2E5YTlhOSkpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCNhZmFmYWYsICNhOWE5YTkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWZhZmFmLCAjYTlhOWE5KTtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNzU3NTc1O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxNXB4IDAgIzlhOWE5YTsgfVxyXG5cclxuICBhLmJ1dHRvbjo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICM5NTk1OTUgMCAycHggNXB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAjOTU5NTk1IDAgMnB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6ICM5NTk1OTUgMCAycHggNXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDJweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG5cclxuYS5idXR0b246YWN0aXZlOjpiZWZvcmUgeyBwYWRkaW5nOiAxcHggMCAwOyB9XHJcblxyXG4vKipcclxuICogR3JleVxyXG4gKi9cclxuYS5idXR0b24ge1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzYzYWQwZDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM2M2FkMGQ7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgYm90dG9tLCBmcm9tKCNlZWUpLCB0bygjZTJlMmUyKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZWVlLCAjZTJlMmUyKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWVlLCAjZTJlMmUyKTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMGQwZDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2IyYjFiMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250OiBib2xkIDEycHggQXJpYWwsIEhlbHZldGljYSwgQ2xlYW4sIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmFmYWZhOyB9XHJcblxyXG5hLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2U0ZTRlNCksIHRvKCNlZGVkZWQpKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCNlNGU0ZTQsICNlZGVkZWQpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNGU0ZTQsICNlZGVkZWQpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2MyYzJjMjtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjYjJiMWIxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZmVmZWY7IH1cclxuXHJcbmEuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2RmZGZkZiksIHRvKCNlM2UzZTMpKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCNkZmRmZGYsICNlM2UzZTMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkZmRmZGYsICNlM2UzZTMpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzk1OTU5NTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxNXB4IDAgI2M0YzRjNDtcclxuICAgIHRvcDoycHg7fVxyXG4iLCIuZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3RhdGV0aS8xMDk0MTktcGFwZXIteWVsbG93LXJlY3RhbmdsZS1saW5lLWFuZ2xlLTI1NjB4MTYwMC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtaW4td2lkdGg6IDgwMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyB9XG5cbi5ldGlxdWV0YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3LjhlbTtcbiAgaGVpZ2h0OiAxLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmJvdG9uZXMge1xuICBmb250LXNpemU6IDUwcHg7IH1cblxuLmN1YWRyb0VsZWdpciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREM3OUI7XG4gIHBhZGRpbmc6IDVweDsgfVxuXG4udGljLXRhYy10b2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxREQxODk7IH1cbiAgLnRpYy10YWMtdG9lIC5idXR0b25zLnJvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLnRpYy10YWMtdG9lIC5idXR0b25zLnJvdyBidXR0b24uY29sIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyOXB4O1xuICAgICAgY29sb3I6ICNmOWY1ZWQ7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNDksIDI0NSwgMjM3LCAwLjM2KTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICAgICAgLnRpYy10YWMtdG9lIC5idXR0b25zLnJvdyBidXR0b24uY29sLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y5ZjVlZDsgfVxuICAgICAgLnRpYy10YWMtdG9lIC5idXR0b25zLnJvdyBidXR0b24uY29sLnJlc3RhcnQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDsgfVxuICAudGljLXRhYy10b2UgI21lc3NhZ2Uge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogIzU1NzU5MjtcbiAgICBoZWlnaHQ6IDQzcHg7IH1cbiAgLnRpYy10YWMtdG9lIGgzIHtcbiAgICBjb2xvcjogIzU1NzU5MjsgfVxuICAudGljLXRhYy10b2UgdGFibGUgdHI6bnRoLWNoaWxkKDIpIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogMDsgfVxuICAudGljLXRhYy10b2UgdGFibGUgdHIgdGQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmOWY1ZWQ7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IH1cbiAgICAudGljLXRhYy10b2UgdGFibGUgdHIgdGQ6aG92ZXIge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XG4gICAgLnRpYy10YWMtdG9lIHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7IH1cbiAgLnRpYy10YWMtdG9lIHRhYmxlIHRyIC5vLXN5bWJvbCB7XG4gICAgY29sb3I6ICNFOTRGMzc7IH1cbiAgLnRpYy10YWMtdG9lIHRhYmxlIHRyIC54LXN5bWJvbCB7XG4gICAgY29sb3I6ICM2M0EzNzU7IH1cbiAgLnRpYy10YWMtdG9lIC50YWJsZS13cmFwcGVyLFxuICAudGljLXRhYy10b2UgLmNob29zZS1zeW1ib2wge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAtOTk5OyB9XG4gICAgLnRpYy10YWMtdG9lIC50YWJsZS13cmFwcGVyLmFjdGl2ZSxcbiAgICAudGljLXRhYy10b2UgLmNob29zZS1zeW1ib2wuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB6LWluZGV4OiAyOyB9XG5cbi8qKlxyXG4gKiBEYXJrIEdyZXlcclxuICovXG5hLmJ1dHRvbi5kYXJrX2dyZXkge1xuICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIGJvdHRvbSwgZnJvbSgjZDFkMWQxKSwgdG8oI2FmYWZhZikpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZDFkMWQxLCAjYWZhZmFmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkMWQxZDEsICNhZmFmYWYpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjRiNGI0O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzg3ODc4NztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlM2UzZTM7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZDZkNmQ2OyB9XG5cbmEuYnV0dG9uLmRhcmtfZ3JleTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiN2I3Yjc7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgYm90dG9tLCBmcm9tKCNiN2I3YjcpLCB0bygjYzJjMmMyKSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCNiN2I3YjcsICNjMmMyYzIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2I3YjdiNywgI2MyYzJjMik7XG4gIGJvcmRlcjogc29saWQgMXB4ICNhMmEyYTI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjODc4Nzg3O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggI2Q0ZDRkNDsgfVxuXG5hLmJ1dHRvbi5kYXJrX2dyZXk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2FmYWZhZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2FmYWZhZiksIHRvKCNhOWE5YTkpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoI2FmYWZhZiwgI2E5YTlhOSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjYWZhZmFmLCAjYTlhOWE5KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzc1NzU3NTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDE1cHggMCAjOWE5YTlhOyB9XG5cbmEuYnV0dG9uOjpiZWZvcmUge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogIzk1OTU5NSAwIDJweCA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogIzk1OTU5NSAwIDJweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogIzk1OTU5NSAwIDJweCA1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDJweCAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgfVxuXG5hLmJ1dHRvbjphY3RpdmU6OmJlZm9yZSB7XG4gIHBhZGRpbmc6IDFweCAwIDA7IH1cblxuLyoqXHJcbiAqIEdyZXlcclxuICovXG5hLmJ1dHRvbiB7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM2M2FkMGQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM2M2FkMGQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2VlZSksIHRvKCNlMmUyZTIpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoI2VlZSwgI2UyZTJlMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZWVlLCAjZTJlMmUyKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QwZDBkMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNiMmIxYjE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmNWY1ZjU7XG4gIGNvbG9yOiAjNTU1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IGJvbGQgMTJweCBBcmlhbCwgSGVsdmV0aWNhLCBDbGVhbiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmYWZhZmE7IH1cblxuYS5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgMCAwLCAwIGJvdHRvbSwgZnJvbSgjZTRlNGU0KSwgdG8oI2VkZWRlZCkpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgjZTRlNGU0LCAjZWRlZGVkKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNGU0ZTQsICNlZGVkZWQpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYzJjMmMyO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2IyYjFiMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNlZmVmZWY7IH1cblxuYS5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCBib3R0b20sIGZyb20oI2RmZGZkZiksIHRvKCNlM2UzZTMpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoI2RmZGZkZiwgI2UzZTNlMyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZGZkZmRmLCAjZTNlM2UzKTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzk1OTU5NTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDE1cHggMCAjYzRjNGM0O1xuICB0b3A6IDJweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/tateti/tateti.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tateti/tateti.component.ts ***!
  \*******************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TatetiComponent = /** @class */ (function () {
    function TatetiComponent() {
        this.utils = new UtilService();
        this.tableIsVisible = false;
        this.aiSymbol = 'O';
        this.playerSymbol = 'X';
        this.puntos2 = 0;
    }
    /* #endregion */
    TatetiComponent.prototype.ngOnInit = function () {
    };
    TatetiComponent.prototype.setPlayerSymbol = function (symbol) {
        var turn = this._getTurn(symbol);
        this._setSymbols(symbol);
        this.tableIsVisible = true;
        var ai = new Ai();
        this.game = new Game(ai, turn, this.playerSymbol, this.aiSymbol, this.puntos2);
        ai.plays(this.game);
        this.game.start();
    };
    TatetiComponent.prototype.makeAMove = function (event, index) {
        var element = event.target;
        if (this.game.status === 'running' &&
            this.game.currentState.turn === 'player' &&
            !element.innerHTML) {
            var next = new State(this.game.currentState);
            next.board[index] = 'player';
            this.utils.insertAt(index, this.game.playerSymbol);
            next.nextTurn();
            this.puntos2 = this.game.advanceTo(next);
        }
    };
    TatetiComponent.prototype.restart = function () {
        this.tableIsVisible = false;
        this.utils.clearTheTable();
    };
    TatetiComponent.prototype._getTurn = function (symbol) {
        return symbol === 'X' ? 'player' : 'ai';
    };
    TatetiComponent.prototype._setSymbols = function (symbol) {
        if (symbol === 'X') {
            this.playerSymbol = 'X';
            this.aiSymbol = 'O';
        }
        else {
            this.playerSymbol = 'O';
            this.aiSymbol = 'X';
        }
    };
    TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tateti',
            template: __webpack_require__(/*! ./tateti.component.html */ "./src/app/components/tateti/tateti.component.html"),
            styles: [__webpack_require__(/*! ./tateti.component.scss */ "./src/app/components/tateti/tateti.component.scss")]
        })
    ], TatetiComponent);
    return TatetiComponent;
}());

// bootstrap(TicTacToeComponent);
var AiAction = /** @class */ (function () {
    function AiAction(position) {
        this.movePosition = position;
    }
    AiAction.ascending = function (firstAction, secondAction) {
        if (firstAction.minimaxVal < secondAction.minimaxVal) {
            return -1;
        }
        else if (firstAction.minimaxVal > secondAction.minimaxVal) {
            return 1;
        }
        else {
            return 0;
        }
    };
    AiAction.descending = function (firstAction, secondAction) {
        if (firstAction.minimaxVal > secondAction.minimaxVal) {
            return -1;
        }
        else if (firstAction.minimaxVal < secondAction.minimaxVal) {
            return 1;
        }
        else {
            return 0;
        }
    };
    AiAction.prototype.applyTo = function (state) {
        var next = new State(state);
        next.board[this.movePosition] = state.turn;
        if (state.turn === 'ai') {
            next.oMovesCount++;
        }
        next.nextTurn();
        return next;
    };
    return AiAction;
}());
var Ai = /** @class */ (function () {
    function Ai() {
        this.utils = new UtilService();
    }
    Ai.prototype._minimaxValue = function (state) {
        var _this = this;
        if (state.isVictory()) {
            return Game.score(state);
        }
        else {
            var stateScore_1;
            if (state.turn === 'player') {
                stateScore_1 = -1000;
            }
            else {
                stateScore_1 = 1000;
            }
            var availablePositions = state.emptyCells();
            var availableNextStates = availablePositions.map(function (position) {
                var action = new AiAction(position);
                var nextState = action.applyTo(state);
                return nextState;
            });
            availableNextStates.forEach(function (nextState) {
                var nextScore = _this._minimaxValue(nextState);
                if (state.turn === 'player') {
                    if (nextScore > stateScore_1) {
                        stateScore_1 = nextScore;
                    }
                }
                else {
                    if (nextScore < stateScore_1) {
                        stateScore_1 = nextScore;
                    }
                }
            });
            return stateScore_1;
        }
    };
    Ai.prototype.plays = function (_game) {
        this.game = _game;
    };
    ;
    Ai.prototype.notify = function (turn) {
        this.makeAMove(turn);
    };
    ;
    Ai.prototype.makeAMove = function (turn) {
        var available = this.game.currentState.emptyCells();
        var availableActions = this._getAvailableActions(available);
        if (turn === 'player') {
            availableActions.sort(AiAction.descending);
        }
        else {
            availableActions.sort(AiAction.ascending);
        }
        var chosenAction = availableActions[0];
        var next = chosenAction.applyTo(this.game.currentState);
        this.utils.insertAt(chosenAction.movePosition, this.game.aiSymbol);
        this.game.advanceTo(next);
    };
    Ai.prototype._getAvailableActions = function (available) {
        var _this = this;
        return available.map(function (position) {
            var action = new AiAction(position);
            var next = action.applyTo(_this.game.currentState);
            action.minimaxVal = _this._minimaxValue(next);
            return action;
        });
    };
    return Ai;
}());
var Game = /** @class */ (function () {
    function Game(autoPlayer, turn, playerSymbol, aiSymbol, puntosJuego) {
        this.utils = new UtilService();
        this.ai = autoPlayer;
        this.currentState = new State();
        this.currentState.board = [
            '', '', '',
            '', '', '',
            '', '', ''
        ];
        this.playerSymbol = playerSymbol;
        this.aiSymbol = aiSymbol;
        this.currentState.turn = turn;
        this.status = 'begining';
        this.puntosJuego = puntosJuego;
    }
    Game.score = function (_state) {
        if (_state.status === 'player is the winner!') {
            return 10 - _state.oMovesCount;
        }
        else if (_state.status === 'player is the winner!') {
            return -10 + _state.oMovesCount;
        }
        else {
            return 0;
        }
    };
    Game.prototype.advanceTo = function (_state) {
        var miMensaje = '';
        this.currentState = _state;
        if (_state.isVictory()) {
            this.status = 'ended';
            // this.utils.displayMessage(_state.status);
            switch (_state.status) {
                case 'ai is the winner!':
                    miMensaje = 'Te gane!';
                    this.puntosJuego--;
                    break;
                case 'PLAYER is the winner!':
                    miMensaje = 'Ganaste!';
                    this.puntosJuego++;
                    break;
                case 'It is a draw!':
                    miMensaje = 'Empatamos!';
                    break;
            }
            this.utils.displayMessage(miMensaje);
        }
        else {
            if (this.currentState.turn === 'ai') {
                this.ai.notify('ai');
            }
        }
        return this.puntosJuego;
    };
    Game.prototype.start = function () {
        if (this.status = 'beginning') {
            this.advanceTo(this.currentState);
            this.status = 'running';
        }
    };
    return Game;
}());
var State = /** @class */ (function () {
    function State(oldState) {
        if (oldState === void 0) { oldState = undefined; }
        this.turn = '';
        this.oMovesCount = 0;
        this.status = 'running';
        this.board = [];
        if (oldState) {
            this._initStateWithOldData(oldState);
        }
    }
    State.prototype.nextTurn = function () {
        this.turn = this.turn === 'player' ? 'ai' : 'player';
    };
    State.prototype.emptyCells = function () {
        var indeces = [];
        for (var index = 0; index < 9; ++index) {
            if (this.board[index] === '') {
                indeces.push(index);
            }
        }
        return indeces;
    };
    State.prototype.isVictory = function () {
        if (this._isRowVictory()) {
            return true;
        }
        if (this._isColumnVictory()) {
            return true;
        }
        if (this._isDiagonalVictory()) {
            return true;
        }
        if (this._isDraw()) {
            return true;
        }
        return false;
    };
    State.prototype._initStateWithOldData = function (oldState) {
        this.board = this._getNewBoardFromOldOne(oldState.board);
        this.oMovesCount = oldState.oMovesCount;
        this.status = oldState.status;
        this.turn = oldState.turn;
    };
    State.prototype._getNewBoardFromOldOne = function (oldBoard) {
        var result = new Array(this.board.length);
        for (var _i = 0, oldBoard_1 = oldBoard; _i < oldBoard_1.length; _i++) {
            var itr = oldBoard_1[_i];
            result.push(itr);
        }
        return result;
    };
    State.prototype._isRowVictory = function () {
        var isVictory = false;
        for (var i = 0; i <= 6; i = i + 3) {
            if (this.board[i] !== '' &&
                this.board[i] === this.board[i + 1] &&
                this.board[i + 1] === this.board[i + 2]) {
                this._setStatus(this.board[i]);
                isVictory = true;
            }
        }
        return isVictory;
    };
    State.prototype._isColumnVictory = function () {
        var isVictory = false;
        for (var i = 0; i <= 2; i++) {
            if (this.board[i] !== '' &&
                this.board[i] === this.board[i + 3] &&
                this.board[i + 3] === this.board[i + 6]) {
                this._setStatus(this.board[i]);
                isVictory = true;
            }
        }
        return isVictory;
    };
    State.prototype._isDiagonalVictory = function () {
        var isVictory = false;
        for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
            if (this.board[i] !== '' &&
                this.board[i] === this.board[i + j] &&
                this.board[i + j] === this.board[i + 2 * j]) {
                this._setStatus(this.board[i]);
                isVictory = true;
            }
        }
        return isVictory;
    };
    State.prototype._isDraw = function () {
        var isDraw = false;
        var emptyCells = this.emptyCells();
        if (emptyCells.length === 0) {
            this._setStatus('It is a draw!', false);
            isDraw = true;
        }
        return isDraw;
    };
    State.prototype._setStatus = function (status, isVictory) {
        if (isVictory === void 0) { isVictory = true; }
        if (isVictory) {
            this.status = status + ' is the winner!';
        }
        else {
            this.status = status;
        }
    };
    return State;
}());
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.displayMessage = function (message) {
        var element = document.body.querySelector('#message');
        element.innerHTML = message.toUpperCase();
    };
    UtilService.prototype.insertAt = function (index, symbol) {
        var board = document.body.querySelectorAll('td');
        var targetCell = board[index];
        if (!targetCell.innerHTML) {
            targetCell.textContent = symbol;
            targetCell.classList.add(symbol === 'O' ? 'o-symbol' : 'x-symbol');
        }
    };
    UtilService.prototype.clearTheTable = function () {
        this._clearTheBoard();
        this._clearTheMessage();
    };
    UtilService.prototype._clearTheMessage = function () {
        var message = document.body.querySelector('#message');
        message.innerHTML = '';
    };
    UtilService.prototype._clearTheBoard = function () {
        var board = document.body.querySelectorAll('td');
        for (var _i = 0, _a = board; _i < _a.length; _i++) {
            var b = _a[_i];
            b.innerHTML = '';
            if (b.hasAttribute('class')) {
                b.attributes.removeNamedItem('class');
            }
        }
    };
    return UtilService;
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
/* harmony import */ var _components_anagramas_anagramas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/anagramas/anagramas.component */ "./src/app/components/anagramas/anagramas.component.ts");
/* harmony import */ var _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tateti/tateti.component */ "./src/app/components/tateti/tateti.component.ts");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/error404/error404.component */ "./src/app/components/error404/error404.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_mi_pong_mi_pong_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/mi-pong/mi-pong.component */ "./src/app/components/mi-pong/mi-pong.component.ts");












var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'adivina', component: _components_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_3__["AdivinaElNumeroComponent"] },
    { path: 'anagramas', component: _components_anagramas_anagramas_component__WEBPACK_IMPORTED_MODULE_7__["AnagramasComponent"] },
    { path: 'piedrapapelotijera', component: _components_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_5__["PiedraPapelTijeraComponent"] },
    { path: 'aguilidad', component: _components_aguilidad_aritmetica_aguilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AguilidadAritmeticaComponent"] },
    { path: 'tateti', component: _components_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_8__["TatetiComponent"] },
    { path: 'mijuego', component: _components_mi_pong_mi_pong_component__WEBPACK_IMPORTED_MODULE_11__["MiPongComponent"] },
    { path: '**', component: _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_9__["Error404Component"] }
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

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(afsAuth, afs) {
        this.afsAuth = afsAuth;
        this.afs = afs;
    }
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) {
                resolve(userData),
                    _this.updateDatosUsusuario(userData.user);
            })
                .catch(function (err) { return console.log(reject(err)); });
        });
    };
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        // Cuando nos logeamos nos devuelve un objeto y ese objete le pasamos el usuario a nuestro metodo
        return this.afsAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then(function (credential) { _this.updateDatosUsusuario(credential.user); });
    };
    AuthService.prototype.loginGoogleUser = function () {
        // Cuando nos logeamos nos devuelve un objeto y ese objete le pasamos el usuario a nuestro metodo
        //return this.afsAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
        return this.afsAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
        //.then((credenciales) => this.updateDatosUsusuario(credenciales.user));
    };
    AuthService.prototype.logoutUser = function () {
        return this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.updateDatosUsusuario = function (usuario) {
        var userRef = this.afs.doc("usuarios/" + usuario.uid);
        var datos = {
            id: usuario.uid,
            email: usuario.email,
            roles: {
                admin: true,
                editor: true
            }
        };
        return userRef.set(datos, { merge: true });
    };
    AuthService.prototype.esAdmin = function (userUid) {
        return this.afs.doc("usuarios/" + userUid).valueChanges();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDFaaOWamkO_xRaJBxKq07oE78wxwnUc_8',
        authDomain: 'saladejuegos2-714c3.firebaseapp.com',
        databaseURL: 'https://saladejuegos2-714c3.firebaseio.com',
        projectId: 'saladejuegos2-714c3',
        storageBucket: 'saladejuegos2-714c3.appspot.com',
        messagingSenderId: '516927930203',
        appId: '1:516927930203:web:301500de667f2956'
    }
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