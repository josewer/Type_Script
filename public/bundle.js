/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Cerdo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Cerdo */ \"./src/model/Cerdo.ts\");\n/* harmony import */ var _model_HorroMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/HorroMovie */ \"./src/model/HorroMovie.ts\");\n/* harmony import */ var _model_Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Movie */ \"./src/model/Movie.ts\");\n/* harmony import */ var _model_Pinguino__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Pinguino */ \"./src/model/Pinguino.ts\");\n\n\n\n\nconsole.log(\"Hola a todos!\");\nlet movie = \"Jose\";\nconsole.log(movie);\nlet n = 9;\nlet s = \"hola\";\nlet array = [1, 2, 3, 4, 5];\nlet arrayString = [\"f\", \"d\"];\nconst movie_1 = {\n    title: \"El señor de los anillos\",\n    duration: 200,\n    hasOscars: true\n};\nlet currentState = \"Loading\";\nfunction sayHello() {\n    console.log(\"Hola\");\n}\nconst h1 = document.querySelector(\"h1\");\nconsole.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);\nconst title = document.querySelector(\".title\");\nconsole.log(title === null || title === void 0 ? void 0 : title.textContent);\nconst userName = document.querySelector(\"#userName\");\nconsole.log(userName === null || userName === void 0 ? void 0 : userName.placeholder);\n// genericos\nfunction getFirtsElement(array) {\n    return array[0];\n}\nconsole.log(getFirtsElement([1, 2, 3, 4]));\nconsole.log(getFirtsElement([4, 2, 3, 4]));\nconsole.log(getFirtsElement([\"a\", \"b\", \"c\"]));\n// clases\nconst movie_3 = new _model_Movie__WEBPACK_IMPORTED_MODULE_2__.Movie(\"Harry potter\", true, 400);\nconsole.log(movie_3);\n// Herencia\nconst peliculaHorror = new _model_HorroMovie__WEBPACK_IMPORTED_MODULE_1__.HorroMovie(\"Payaso\", true, 200, false);\nconst peliculas = [peliculaHorror, movie_3];\nconsole.log(peliculas[0].id);\n// interfaces\nconst persona = {\n    nombre: \"jose\",\n    edad: 32,\n    otrosDatos: 2113,\n    masDatos: \"Mas datos\"\n};\nconst animales = [new _model_Cerdo__WEBPACK_IMPORTED_MODULE_0__.Cerdo(4), new _model_Pinguino__WEBPACK_IMPORTED_MODULE_3__.Pinguino(2)];\nfor (let animal of animales) {\n    animal.sonido();\n}\nconst user = {\n    id: \"wewe\",\n    userName: \"Juan\"\n};\nconst button = document.querySelector(\"#btCargarPeliculas\");\nconsole.log(button == null);\nconsole.log(\"Hola caracol\");\nbutton === null || button === void 0 ? void 0 : button.addEventListener(\"click\", () => {\n    console.log(\"Click en botón\");\n});\nconsole.log(\"Hola caracol 2\");\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?\n}");

/***/ }),

/***/ "./src/model/Cerdo.ts":
/*!****************************!*\
  !*** ./src/model/Cerdo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cerdo: () => (/* binding */ Cerdo)\n/* harmony export */ });\nclass Cerdo {\n    constructor(numPatas) {\n        this.numPatas = numPatas;\n    }\n    sonido() {\n        console.log(\"oinss\");\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/model/Cerdo.ts?\n}");

/***/ }),

/***/ "./src/model/HorroMovie.ts":
/*!*********************************!*\
  !*** ./src/model/HorroMovie.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HorroMovie: () => (/* binding */ HorroMovie)\n/* harmony export */ });\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ \"./src/model/Movie.ts\");\n\nclass HorroMovie extends _Movie__WEBPACK_IMPORTED_MODULE_0__.Movie {\n    constructor(titulo, tieneOscar, duracion, tieneSobresaltos) {\n        super(titulo, tieneOscar, duracion);\n        this.tieneSobresaltos = tieneSobresaltos;\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/model/HorroMovie.ts?\n}");

/***/ }),

/***/ "./src/model/Movie.ts":
/*!****************************!*\
  !*** ./src/model/Movie.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Movie: () => (/* binding */ Movie)\n/* harmony export */ });\nclass Movie {\n    constructor(titulo, tieneOscar, duracion) {\n        this.id = crypto.randomUUID();\n        this.titulo = titulo;\n        this.tieneOscar = tieneOscar;\n        this.duracion = duracion;\n    }\n    getTitulo() {\n        return this.titulo;\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/model/Movie.ts?\n}");

/***/ }),

/***/ "./src/model/Pinguino.ts":
/*!*******************************!*\
  !*** ./src/model/Pinguino.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pinguino: () => (/* binding */ Pinguino)\n/* harmony export */ });\nclass Pinguino {\n    constructor(numPatas) {\n        this.numPatas = numPatas;\n    }\n    sonido() {\n        console.log(\"oinss\");\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/model/Pinguino.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;