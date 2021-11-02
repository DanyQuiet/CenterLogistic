/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\r\n\r\n\r\n\r\n\t/* Navigation burger\r\n\t=================================*/\r\n\r\n\r\n\tlet navToggle = $(\"#navToggle\");\r\n\tlet nav = $('#nav');\r\n\r\n\tnavToggle.on('click', function (event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\t$('body').toggleClass('show-nav');\r\n\t\t$(this).toggleClass('active');\r\n\t\tnav.toggleClass('show');\r\n\t})\r\n\r\n\t$(window).on(\"resize\", function () {\r\n\t\t$('body').removeClass('show-nav');\r\n\t\tnavToggle.removeClass('active');\r\n\t\tnav.removeClass('show');\r\n\t});\r\n\r\n\r\n\r\n\r\n\r\n\tlet intro = $(\"#intro\");\r\n\tlet header = $(\"#header\");\r\n\tlet introH = intro.innerHeight();\r\n\tlet headerH = header.innerHeight();\r\n\tlet scrollTop = $(window).scrollTop();\r\n\r\n\t/* header class on scroll \r\n\t=================================*/\r\n\r\n\r\n\theaderScroll();\r\n\t// resize нужен что при повороте устройства обновлялись переменные\r\n\t$(window).on(\"scroll resize\", function () {\r\n\t\theaderScroll()\r\n\t});\r\n\r\n\tfunction headerScroll() {\r\n\t\t$(window).on(\"scroll resize\", function () {\r\n\r\n\t\t\tintroH = intro.innerHeight();\r\n\t\t\theaderH = header.innerHeight();\r\n\r\n\r\n\t\t\tlet scrollTop = $(this).scrollTop();\r\n\r\n\t\t\tif (scrollTop >= (introH - headerH)) {\r\n\r\n\t\t\t\theader.addClass(\"header--dark\")\r\n\t\t\t} else {\r\n\t\t\t\theader.removeClass(\"header--dark\")\r\n\t\t\t}\r\n\r\n\t\t});\r\n\t}\r\n\r\n\r\n\r\n\r\n\t/* Smooth scroll to section \r\n=================================*/\r\n\r\n\t$(\"[data-scroll]\").on(\"click\", function (event) {\r\n\r\n\t\tevent.preventDefault();\r\n\r\n\t\tlet scrollEl = $(this).data(\"scroll\");\r\n\t\tlet scrollElPos = $(scrollEl).offset().top;\r\n\r\n\t\t$('body').removeClass('show-nav');\r\n\t\tnavToggle.removeClass('active');\r\n\t\tnav.removeClass('show');\r\n\r\n\t\t$(\"html, body\").animate({\r\n\t\t\tscrollTop: scrollElPos - headerH\r\n\t\t}, 500);\r\n\t});\r\n\r\n\r\n\r\n\t/* Scroll spy\r\n=================================*/\r\n\tlet windowH = $(window).height();\r\n\tscrollSpy(scrollTop)\r\n\r\n\t$(window).on(\"scroll\", function () {\r\n\t\tscrollTop = $(this).scrollTop();\r\n\t\tscrollSpy(scrollTop)\r\n\r\n\t});\r\n\r\n\tfunction scrollSpy(scrollTop) {\r\n\t\t$(\"[data-scrollspy]\").each(function () {\r\n\r\n\t\t\tlet $this = $(this);\r\n\t\t\tlet sectionId = $this.data('scrollspy');\r\n\t\t\tlet sectionOffset = $this.offset().top;\r\n\t\t\tsectionOffset = sectionOffset - (windowH * 0.3);\r\n\r\n\t\t\tif (scrollTop >= sectionOffset) {\r\n\t\t\t\t$('#nav [data-scroll]').removeClass('active');\r\n\r\n\t\t\t\t$('#nav [data-scroll=\"' + sectionId + '\"]').addClass('active');\r\n\t\t\t}\r\n\r\n\t\t\tif (scrollTop == 0) {\r\n\t\t\t\t$('#nav [data-scroll]').removeClass('active');\r\n\t\t\t}\r\n\r\n\t\t});\r\n\t}\r\n\r\n\r\n\t/* Modal\r\n=================================*/\r\n\r\n\t$('[data-modal]').on('click', function (event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tlet modal = $(this).data('modal');\r\n\r\n\t\t$('body').addClass('no-scroll');\r\n\r\n\t\t$(modal).addClass('show');\r\n\r\n\t\tsetTimeout(function () {\r\n\t\t\t$(modal).find('.modal__content').css({\r\n\t\t\t\ttransform: 'scale(1)',\r\n\t\t\t\topacity: '1'\r\n\r\n\t\t\t});\r\n\t\t}, 100);\r\n\t});\r\n\r\n\t// close modal\r\n\t$('[data-modal-close=\"\"]').on('click', function (event) {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tlet modal = $(this).parents('.modal');\r\n\t\tmodalClose(modal);\r\n\r\n\t});\r\n\r\n\t$('.modal').on('click', function () {\r\n\t\tlet modal = $(this);\r\n\t\tmodalClose(modal);\r\n\t});\r\n\r\n\r\n\t$('.modal__content').on('click', function (event) {\r\n\t\tevent.stopPropagation();\r\n\t});\r\n\r\n\tfunction modalClose(modal) {\r\n\t\tmodal.find('.modal__content').css({\r\n\t\t\ttransform: 'scale(0.5)',\r\n\t\t\topacity: '0'\r\n\t\t});\r\n\r\n\t\tsetTimeout(function () {\r\n\t\t\t$('body').removeClass('no-scroll');\r\n\t\t\tmodal.removeClass('show');\r\n\t\t}, 200);\r\n\t}\r\n\r\n\r\n\r\n\r\n\t// =====Swiper======\r\n\t// https://swiperjs.com/get-started\r\n\tconst swiper = new Swiper('.swiper', {\r\n\t\t// Optional parameters\r\n\t\tdirection: 'horizontal',\r\n\t\tloop: true,\r\n\r\n\t\tautoplay: {\r\n\t\t\tdelay: 5000,\r\n\t\t},\r\n\r\n\r\n\r\n\t\t// Navigation arrows\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '.swiper-button-next',\r\n\t\t\tprevEl: '.swiper-button-prev',\r\n\t\t},\r\n\r\n\r\n\t});\r\n\r\n\tconst swiperCl = new Swiper('.swiper__clients', {\r\n\t\t// Optional parameters\r\n\t\tdirection: 'horizontal',\r\n\t\tloop: true,\r\n\r\n\t\tautoplay: {\r\n\t\t\tdelay: 5000,\r\n\t\t},\r\n\r\n\t\tpagination: {\r\n\t\t\tel: '.swiper-pagination',\r\n\t\t\ttype: \"bullets\",\r\n\t\t},\r\n\r\n\r\n\r\n\r\n\t});\r\n\r\n\r\n\r\n\r\n\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");

/***/ })

/******/ });