/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/APIs.js":
/*!*****************************!*\
  !*** ./src/modules/APIs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDataList: () => (/* binding */ GetDataList),
/* harmony export */   GetDataObject: () => (/* binding */ GetDataObject),
/* harmony export */   commentsAPI: () => (/* binding */ commentsAPI),
/* harmony export */   likesAPI: () => (/* binding */ likesAPI),
/* harmony export */   pokemonAPI: () => (/* binding */ pokemonAPI)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// I run this code in console when I want to reset the board by creating a id for involvement api
// const comment ={'name':'comment'}

// async function addNewComment(itemId, username, comment) {
//   // const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments', {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: itemId,
//       username,
//       comment,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// the id I get running the previous fetch code
// const ID = 'woTq8RsLkSavLaCMQAAP';

// APIs list
// const appID = 'y6YPEOFIRnRk7yGZhKxu';
var pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
var commentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments';
var likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes';

// const pokemonList = document.getElementById('pokemonList');

// this will get an api array

var GetDataList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(APIUrl) {
    var response, dataList, itemsArray;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(APIUrl);
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          dataList = _context.sent;
          itemsArray = dataList.results;
          return _context.abrupt("return", itemsArray);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function GetDataList(_x) {
    return _ref.apply(this, arguments);
  };
}();
var GetDataObject = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(APIUrl) {
    var response, dataList;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(APIUrl);
        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return response.json();
        case 5:
          dataList = _context2.sent;
          return _context2.abrupt("return", dataList);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function GetDataObject(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// to get the pokemon Data
GetDataList(pokemonAPI);


/***/ }),

/***/ "./src/modules/pageRendering.js":
/*!**************************************!*\
  !*** ./src/modules/pageRendering.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderList: () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var _APIs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIs.js */ "./src/modules/APIs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import { pokemonAPI } from './APIs.js';

// export const renderList = async (listData) => {
//   const pokemonList = document.getElementById('pokemonList');
//   pokemonList.innerHTML = '';
//   // to get the pokemon main object that has name & url
//   let response = await fetch(pokemonAPI);
//   listData = await response.json();
//   listData = listData.results;

//   console.log(listData);

//   // to sort the array elements
//   const sortedDataList = [...listData];
//   sortedDataList.sort((a, b) => b.score - a.score);
//   console.log(sortedDataList);
//   const objects = sortedDataList;
//   console.log(objects[0]);
//   // to loop through 18 elements of the array
//   for (let i = 0; i < 18; i++) {
//     const li = document.createElement('li');
//     const pokemonPopup = document.querySelector('.popup');
//     const commentBtn = document.querySelectorAll('.commentPopup');

//     const object = objects[i];
//     // to fetch the pokemon Image
//     let response = await fetch(object.url);
//     const pokeObject = await response.json();
//     console.log(pokeObject);

//     // to get the image of pokemon
//     console.log(pokeObject.sprites.other.dream_world.front_default);

//     li.innerHTML = `
//       <li class="pokemonItem">
//       <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//       <div class="likeDiv">
//         <h3>${object.name}</h3>
//         <img src="./assets/like.svg" alt="like" />
//       </div>
//       <div class="commentDiv">
//         <button class="commentPopup" data-url="${object.url}">Comment</button>
//         <div>
//           <h4>
//             likes<span>1</span>
//           </h4>
//         </div>
//       </div>
//     </li>
//            `;

//     commentBtn.forEach((btn) => {
//       btn.addEventListener('click', async () => {
//         const clickedUrl = btn.getAttribute('data-url');
//         const pokeResponse = await fetch(clickedUrl);
//         const pokeObject = await pokeResponse.json();
//         pokemonList.innerHTML = '';
//         pokemonPopup.innerHTML = `
//                  <div class="pokemonImg">
//                  <img class="pageX" src="./assets/x.svg" alt="close" />
//                  <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//                  <h3>${object.name}</h3>
//                  </div>
//                <div class="comments">
//                  <h3>Recent Comments</h3>
//                  <ul class="recentComments"></ul>
//                </div>
//                <form autocomplete="off" class="AddComment">
//                  <label>Add a Comment</label>
//                  <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
//                  <textarea rows="7"></textarea>
//                  <button id="submit" class="btn" type="submit">Comment</button>
//                </form>
//                  `;
//         const closeBtn = document.querySelector('.pageX');
//         closeBtn.addEventListener('click', () => {
//           pokemonPopup.innerHTML = '';
//           location.reload();
//         });
//       });
//     });
//     pokemonList.appendChild(li);
//   }
// };

// import { pokemonAPI } from './APIs.js';

// export const renderList = async () => {
//   const pokemonList = document.getElementById('pokemonList');
//   pokemonList.innerHTML = '';

//   try {
//     // Fetch the list of Pokemon
//     let response = await fetch(pokemonAPI);
//     let listData = await response.json();
//     listData = listData.results;

//     console.log(listData);

//     // Sort the array elements
//     const sortedDataList = [...listData];
//     sortedDataList.sort((a, b) => b.score - a.score);
//     console.log(sortedDataList);
//     const objects = sortedDataList;
//     console.log(objects[0]);

//     // Loop through 18 elements of the array
//     for (let i = 0; i < 18; i++) {
//       const li = document.createElement('li');
//       const pokemonPopup = document.querySelector('.popup');
//       const commentBtn = document.querySelectorAll('.commentPopup');

//       const object = objects[i];

//       // Fetch the Pokemon image
//       response = await fetch(object.url);
//       const pokeObject = await response.json();
//       console.log(pokeObject);

//       // Get the image of the Pokemon
//       console.log(pokeObject.sprites.other.dream_world.front_default);

//       li.innerHTML = `
//         <li class="pokemonItem">
//           <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//           <div class="likeDiv">
//             <h3>${object.name}</h3>
//             <img src="./assets/like.svg" alt="like" />
//           </div>
//           <div class="commentDiv">
//             <button class="commentPopup" data-url="${object.url}">Comment</button>
//             <div>
//               <h4>
//                 likes<span>1</span>
//               </h4>
//             </div>
//           </div>
//         </li>
//       `;

//       commentBtn.forEach((btn) => {
//         btn.addEventListener('click', async () => {
//           const clickedUrl = btn.getAttribute('data-url');
//           const pokeResponse = await fetch(clickedUrl);
//           const pokeObject = await pokeResponse.json();
//           pokemonList.innerHTML = '';
//           pokemonPopup.innerHTML = `
//             <div class="pokemonImg">
//               <img class="pageX" src="./assets/x.svg" alt="close" />
//               <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//               <h3>${object.name}</h3>
//             </div>
//             <div class="comments">
//               <h3>Recent Comments</h3>
//               <ul class="recentComments"></ul>
//             </div>
//             <form autocomplete="off" class="AddComment">
//               <label>Add a Comment</label>
//               <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
//               <textarea rows="7"></textarea>
//               <button id="submit" class="btn" type="submit">Comment</button>
//             </form>
//           `;
//           const closeBtn = document.querySelector('.pageX');
//           closeBtn.addEventListener('click', () => {
//             pokemonPopup.innerHTML = '';
//             location.reload();
//           });
//         });
//       });
//       pokemonList.appendChild(li);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };



// Function to generate a unique ID
function generateUniqueId() {
  // Generate a random timestamp value
  var timestamp = Date.now();

  // Generate a random alphanumeric string
  var randomString = Math.random().toString(36).substring(2, 8);

  // Concatenate the timestamp and random string to form the unique ID
  var uniqueId = "item_".concat(timestamp, "_").concat(randomString);
  return uniqueId;
}
var renderList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var pokemonList, response, listData, sortedDataList, objects, _loop, i;
    return _regeneratorRuntime().wrap(function _callee3$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          pokemonList = document.getElementById('pokemonList');
          pokemonList.innerHTML = '';
          _context4.prev = 2;
          _context4.next = 5;
          return fetch(_APIs_js__WEBPACK_IMPORTED_MODULE_0__.pokemonAPI);
        case 5:
          response = _context4.sent;
          _context4.next = 8;
          return response.json();
        case 8:
          listData = _context4.sent;
          listData = listData.results;
          console.log(listData);

          // Sort the array elements
          sortedDataList = _toConsumableArray(listData);
          sortedDataList.sort(function (a, b) {
            return b.score - a.score;
          });
          console.log(sortedDataList);
          objects = sortedDataList;
          console.log(objects[0]);

          // Loop through 18 elements of the array
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var li, pokemonPopup, commentBtn, object, pokeObject;
            return _regeneratorRuntime().wrap(function _loop$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  li = document.createElement('li');
                  pokemonPopup = document.querySelector('.popup');
                  commentBtn = document.querySelectorAll('.commentPopup');
                  object = objects[i]; // Fetch the Pokemon image
                  _context3.next = 6;
                  return fetch(object.url);
                case 6:
                  response = _context3.sent;
                  _context3.next = 9;
                  return response.json();
                case 9:
                  pokeObject = _context3.sent;
                  console.log(pokeObject);

                  // Get the image of the Pokemon
                  console.log(pokeObject.sprites.other.dream_world.front_default);
                  li.innerHTML = "\n        <li class=\"pokemonItem\">\n          <img src=\"".concat(pokeObject.sprites.other.dream_world.front_default, "\" alt=\"").concat(object.name, "\" />\n          <div class=\"likeDiv\">\n            <h3>").concat(object.name, "</h3>\n            <img src=\"./assets/like.svg\" alt=\"like\" />\n          </div>\n          <div class=\"commentDiv\">\n            <button class=\"commentPopup\" data-url=\"").concat(object.url, "\">Comment</button>\n            <div>\n              <h4>\n                likes<span>1</span>\n              </h4>\n            </div>\n          </div>\n        </li>\n      ");
                  commentBtn.forEach(function (btn) {
                    btn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var clickedUrl, pokeResponse, pokeObject, commentForm, closeBtn;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            clickedUrl = btn.getAttribute('data-url');
                            _context2.next = 3;
                            return fetch(clickedUrl);
                          case 3:
                            pokeResponse = _context2.sent;
                            _context2.next = 6;
                            return pokeResponse.json();
                          case 6:
                            pokeObject = _context2.sent;
                            pokemonList.innerHTML = '';
                            pokemonPopup.innerHTML = "\n            <div class=\"pokemonImg\">\n              <img class=\"pageX\" src=\"./assets/x.svg\" alt=\"close\" />\n              <img src=\"".concat(pokeObject.sprites.other.dream_world.front_default, "\" alt=\"").concat(object.name, "\" />\n              <h3>").concat(object.name, "</h3>\n            </div>\n            <div class=\"comments\">\n              <h3>Recent Comments</h3>\n              <ul class=\"recentComments\"></ul>\n            </div>\n            <form autocomplete=\"off\" class=\"AddComment\">\n              <label>Add a Comment</label>\n              <input type=\"text\" id=\"name\" placeholder=\"Your Name\" required maxLength=\"20\" />\n              <textarea rows=\"7\" id=\"commentText\"></textarea>\n              <button id=\"submit\" class=\"btn\" type=\"submit\">Comment</button>\n            </form>\n          ");
                            commentForm = document.querySelector('.AddComment');
                            commentForm.addEventListener('submit', /*#__PURE__*/function () {
                              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
                                var nameInput, commentInput, username, comment, item_id, data, postResponse, commentsResponse, responseData, commentsData, recentComments;
                                return _regeneratorRuntime().wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                      event.preventDefault();
                                      nameInput = document.getElementById('name');
                                      commentInput = document.getElementById('commentText');
                                      username = nameInput.value;
                                      comment = commentInput.value; // Generate a unique item_id
                                      item_id = generateUniqueId(); // Prepare the data to be sent
                                      data = {
                                        item_id: item_id,
                                        username: username,
                                        comment: comment
                                      };
                                      _context.prev = 7;
                                      _context.next = 10;
                                      return fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments', {
                                        method: 'POST',
                                        headers: {
                                          'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(data)
                                      });
                                    case 10:
                                      postResponse = _context.sent;
                                      if (!postResponse.ok) {
                                        _context.next = 31;
                                        break;
                                      }
                                      // Handle the successful response
                                      console.log('Comment posted successfully');
                                      _context.prev = 13;
                                      _context.next = 16;
                                      return fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments');
                                    case 16:
                                      commentsResponse = _context.sent;
                                      _context.next = 19;
                                      return commentsResponse.json();
                                    case 19:
                                      responseData = _context.sent;
                                      commentsData = responseData.comments; // Get the recentComments element
                                      recentComments = document.querySelector('.recentComments'); // Clear the existing list
                                      recentComments.innerHTML = '';
                                      if (Array.isArray(commentsData)) {
                                        // Loop through the comments and create list items
                                        commentsData.forEach(function (comment) {
                                          var commentLi = document.createElement('li');
                                          commentLi.textContent = comment.comment;
                                          recentComments.appendChild(commentLi);
                                        });
                                      } else {
                                        console.error('Invalid comments data format:', commentsData);
                                      }
                                      _context.next = 29;
                                      break;
                                    case 26:
                                      _context.prev = 26;
                                      _context.t0 = _context["catch"](13);
                                      console.error('An error occurred while fetching comments:', _context.t0);
                                    case 29:
                                      _context.next = 32;
                                      break;
                                    case 31:
                                      // Handle the error response
                                      console.error('Failed to post comment');
                                    case 32:
                                      _context.next = 37;
                                      break;
                                    case 34:
                                      _context.prev = 34;
                                      _context.t1 = _context["catch"](7);
                                      console.error('An error occurred while posting the comment', _context.t1);
                                    case 37:
                                      // Clear the input fields
                                      nameInput.value = '';
                                      commentInput.value = '';
                                    case 39:
                                    case "end":
                                      return _context.stop();
                                  }
                                }, _callee, null, [[7, 34], [13, 26]]);
                              }));
                              return function (_x) {
                                return _ref3.apply(this, arguments);
                              };
                            }());
                            closeBtn = document.querySelector('.pageX');
                            closeBtn.addEventListener('click', function () {
                              pokemonPopup.innerHTML = '';
                              location.reload();
                            });
                          case 13:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    })));
                  });
                  pokemonList.appendChild(li);
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _loop);
          });
          i = 0;
        case 18:
          if (!(i < 18)) {
            _context4.next = 23;
            break;
          }
          return _context4.delegateYield(_loop(), "t0", 20);
        case 20:
          i++;
          _context4.next = 18;
          break;
        case 23:
          _context4.next = 28;
          break;
        case 25:
          _context4.prev = 25;
          _context4.t1 = _context4["catch"](2);
          console.error(_context4.t1);
        case 28:
        case "end":
          return _context4.stop();
      }
    }, _callee3, null, [[2, 25]]);
  }));
  return function renderList() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Sass/main.sass":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Sass/main.sass ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  background-color: #2fa8cc;
  font-family: "Roboto", sans-serif;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 12px;
}

img {
  max-width: 5rem;
  max-height: 7rem;
  cursor: pointer;
}
img:active {
  transform: scale(0.98);
}
img:focus {
  outline: 0;
}

h1, h2, h3, li, input, label {
  color: #002d67;
}

h1 {
  font-size: 1.2rem;
}

h2 {
  font-size: 0.7rem;
}

h3 {
  font-size: 0.5rem;
}

li, input, a, .copyRights {
  border-radius: 0.15rem;
  font-size: 0.7rem;
}

header {
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  white-space: nowrap;
}
nav img {
  flex: 0.8;
  align-self: flex-start;
}
nav h2 {
  flex: 0.4;
}

#pokemonList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  align-items: center;
  padding: 0.2rem;
  gap: 0.7rem;
}
#pokemonList img {
  max-width: 6rem;
  max-height: 4rem;
}

.pokemonItem, .popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  background: #72bbce;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
}

.likeDiv, .commentDiv {
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: stretch;
  justify-content: space-between;
  padding: 0.2rem;
}
.likeDiv div, .likeDiv img, .commentDiv div, .commentDiv img {
  align-self: flex-end;
}
.likeDiv img, .commentDiv img {
  max-width: 1rem !important;
  max-height: 1rem !important;
}

button {
  transition: all 0.5s;
  border-radius: 4px;
  font-size: 0.6rem;
  font-weight: 600;
  color: #002d67 !important;
  background-color: #2fa8cc !important;
  border: 1px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 4px;
  cursor: pointer;
  text-align: center;
  align-self: flex-start;
}
button:active {
  transform: scale(0.98);
}
button:focus {
  outline: 0;
}
button:active {
  transform: scale(0.98);
}
button:focus {
  outline: 0;
}

.popup {
  align-items: stretch;
}
.popup .pokemonImg {
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
}
.popup .pokemonImg img {
  align-self: center;
  max-width: 15rem;
  max-height: 10rem;
}
.popup .pokemonImg .pageX {
  align-self: flex-end;
  max-width: 1rem;
  max-height: 1rem;
}
.popup .pokemonImg h3 {
  align-self: center;
  margin-top: 1rem;
}
.popup .recentComments {
  overflow-y: scroll;
}
.popup .AddComment, .popup .comments {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.5rem;
  gap: 0.3rem;
}
.popup .AddComment button, .popup .comments button {
  align-self: center;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  background-color: #c2e2ea !important;
}
.popup .AddComment textarea, .popup .AddComment input, .popup .comments textarea, .popup .comments input {
  align-self: stretch;
  border-radius: 3px;
  padding: 0.3rem;
  background: #c2e2ea;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
}
.popup label, .popup h3 {
  font-size: 1rem;
}

footer {
  position: relative;
  margin-top: 2rem;
  padding-bottom: 0.3rem;
  top: auto;
  bottom: 0.1rem;
}

@media (min-width: 768px) {
  main {
    font-size: 18px;
    padding-left: calc(25% - 120px);
    padding-right: calc(25% - 120px);
  }
  section, .popup {
    gap: 2rem;
  }
}
@media (min-width: 999px) {
  body {
    font-size: 23px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/Sass/main.sass","webpack://./src/styles/Sass/global.sass"],"names":[],"mappings":"AAMA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAJJ;;AAMA;ECAI,aAAA;EACA,sBAAA;EDCA,yBAXY;EAYZ,iCAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;AAFJ;;AAGA;EACI,eAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AACI;EACI,sBAAA;AACR;AACI;EACI,UAAA;AACR;;AACA;EACI,cC3BQ;AD6BZ;;AAAA;EACI,iBAAA;AAGJ;;AAFA;EACI,iBAAA;AAKJ;;AAHA;EACI,iBAAA;AAMJ;;AAJA;EACI,sBAAA;EACA,iBAAA;AAOJ;;AANA;EACI,eAAA;ECjCA,aAAA;EACA,sBAAA;EDkCA,oBAAA;EACA,uBAAA;AAUJ;;AATA;ECjCI,aAAA;EACA,mBAAA;EDkCA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;AAaJ;AAZI;EACI,SAAA;EACA,sBAAA;AAcR;AAbI;EACI,SAAA;AAeR;;AAdA;ECXI,aAAA;EACA,kCAAA;EACA,mBAAA;EDWA,mBAAA;EACA,eAAA;EAEA,WAAA;AAkBJ;AAjBI;EACI,eAAA;EACA,gBAAA;AAmBR;;AAjBA;EC1DI,aAAA;EACA,sBAAA;ED2DA,mBAAA;EAEA,WAAA;EACA,mBCxEa;ED0Eb,kBAAA;EACA,wEAzES;AA4Fb;;AAjBA;EChEI,aAAA;EACA,mBAAA;EDiEA,mBAAA;EACA,oBAAA;EACA,8BAAA;EACA,eAAA;AAqBJ;AApBI;EACI,oBAAA;AAsBR;AArBI;EACI,0BAAA;EACA,2BAAA;AAuBR;;AArBA;ECxEI,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,oCAAA;EACA,WAAA;EACA,wEDtBS;ECuBT,YAAA;EACA,eAAA;EACA,kBAAA;EDgEA,sBAAA;AAkCJ;AChGI;EACI,sBAAA;ADkGR;AChGI;EACI,UAAA;ADkGR;AAtCI;EACI,sBAAA;AAwCR;AAtCI;EACI,UAAA;AAwCR;;AAtCA;EACI,oBAAA;AAyCJ;AAxCI;EACI,eAAA;EC7FJ,aAAA;EACA,sBAAA;ADwIJ;AAxCQ;EACI,kBAAA;EACA,gBAAA;EACA,iBAAA;AA0CZ;AAzCQ;EACI,oBAAA;EACA,eAAA;EACA,gBAAA;AA2CZ;AA1CQ;EACI,kBAAA;EACA,gBAAA;AA4CZ;AA1CI;EACI,kBAAA;AA4CR;AA3CI;EC/GA,aAAA;EACA,sBAAA;EDgHI,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,WAAA;AA8CR;AA7CQ;EACI,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,oCAAA;AA+CZ;AA9CQ;EACI,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,mBCzIG;ED0IH,wEAvIC;AAuLb;AA/CI;EACI,eAAA;AAiDR;;AA/CA;EACI,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,SAAA;EACA,cAAA;AAkDJ;;AA/CA;EACI;IACI,eAAA;IACA,+BClJI;IDmJJ,gCCrJI;EDuMV;EAhDE;IACI,SAAA;EAkDN;AACF;AAjDA;EACI;IACI,eAAA;EAmDN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')\r\n@import global\r\n$primary-color: #2fa8cc\r\n$secondary-color: #f4f4f4\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n\r\n*\r\n    box-sizing: border-box\r\n    margin: 0\r\n    padding: 0\r\n\r\nbody\r\n    @include columnFlex\r\n    background-color: $primary-color\r\n    font-family: 'Roboto', sans-serif\r\n    align-items: center\r\n    justify-content: center\r\n    padding: 5px\r\n    font-size: 12px\r\nimg\r\n    max-width: 5rem\r\n    max-height: 7rem\r\n    cursor: pointer\r\n    &:active\r\n        transform: scale(0.98)\r\n\r\n    &:focus\r\n        outline: 0\r\n\r\nh1, h2, h3,li, input,label\r\n    color: $fontColor\r\n\r\nh1\r\n    font-size: 1.2rem\r\nh2\r\n    font-size: .7rem\r\n\r\nh3\r\n    font-size: .5rem\r\n\r\nli, input, a, .copyRights\r\n    border-radius: .15rem\r\n    font-size: .7rem\r\nheader\r\n    padding: .2rem\r\n    @include columnFlex\r\n    align-items: stretch\r\n    justify-content: center\r\nnav\r\n    @include rowFlex\r\n    align-items: center\r\n    justify-content: space-between\r\n    gap: 5rem\r\n    white-space: nowrap\r\n    img\r\n        flex: .8\r\n        align-self: flex-start\r\n    h2\r\n        flex: .4\r\n#pokemonList\r\n    @include threeThreeGrid\r\n    align-items: center\r\n    padding: .2rem\r\n    // justify-content: space-evenly\r\n    gap: .7rem\r\n    img\r\n        max-width: 6rem\r\n        max-height: 4rem\r\n\r\n.pokemonItem, .popup\r\n    @include columnFlex\r\n    align-items: center\r\n    // justify-content: center\r\n    gap: .4rem\r\n    background: $secondarycolor\r\n    // padding: .2rem\r\n    border-radius: 3px\r\n    box-shadow: $box-shadow\r\n\r\n.likeDiv, .commentDiv\r\n    @include rowFlex\r\n    align-self: stretch\r\n    align-items: stretch\r\n    justify-content: space-between\r\n    padding: .2rem\r\n    div, img\r\n        align-self: flex-end\r\n    img\r\n        max-width: 1rem !important\r\n        max-height: 1rem !important\r\n\r\nbutton\r\n    @include button\r\n    align-self: flex-start\r\n\r\n    &:active\r\n        transform: scale(0.98)\r\n\r\n    &:focus\r\n        outline: 0\r\n\r\n.popup\r\n    align-items: stretch\r\n    .pokemonImg\r\n        padding: .3rem\r\n        @include columnFlex\r\n        // align-items: stretch !important\r\n        // justify-content: center !important\r\n        img\r\n            align-self: center\r\n            max-width: 15rem\r\n            max-height: 10rem\r\n        .pageX\r\n            align-self: flex-end\r\n            max-width: 1rem\r\n            max-height: 1rem\r\n        h3\r\n            align-self: center\r\n            margin-top: 1rem\r\n\r\n    .recentComments\r\n        overflow-y: scroll\r\n    .AddComment, .comments\r\n        @include columnFlex\r\n        align-self: stretch\r\n        align-items: center\r\n        justify-content: center\r\n        padding: .3rem .5rem\r\n        gap: .3rem\r\n        button\r\n            align-self: center\r\n            margin-bottom: .5rem\r\n            padding: .4rem\r\n            background-color: $primarycolor !important\r\n        textarea, input\r\n            align-self: stretch\r\n            border-radius: 3px\r\n            padding: .3rem\r\n            background: $primarycolor\r\n            box-shadow: $box-shadow\r\n    label, h3\r\n        font-size: 1rem\r\n\r\nfooter\r\n    position: relative\r\n    margin-top: 2rem\r\n    padding-bottom: 0.3rem\r\n    top: auto\r\n    bottom: 0.1rem\r\n    // width: 50%\r\n    \r\n@media ( min-width: 768px  )\r\n    main\r\n        font-size: 18px\r\n        padding-left: $Qlpadding\r\n        padding-right: $Qrpadding\r\n\r\n    section, .popup\r\n        gap: 2rem\r\n\r\n@media ( min-width: 999px  )\r\n    body\r\n        font-size: 23px\r\n","$InterFont: \"Inter\", sans-serif\r\n$primarycolor: #c2e2ea\r\n$secondarycolor: #72bbce\r\n$fontColor: #002d67\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)\r\n$qrpadding: calc( 12% - 80px )\r\n$Qrpadding: calc( 25% - 120px )\r\n$qlpadding: calc( 12% - 80px )\r\n$Qlpadding: calc( 25% - 120px )\r\n\r\n@mixin columnFlex\r\n    display: flex\r\n    flex-direction: column\r\n\r\n@mixin rowFlex\r\n    display: flex\r\n    flex-direction: row\r\n\r\n@mixin button\r\n    transition: all 0.5s\r\n    border-radius: 4px\r\n    font-size: .6rem\r\n    font-weight: 600\r\n    color: $fontColor !important\r\n    background-color: $primary-color !important\r\n    border: 1px\r\n    box-shadow: $box-shadow\r\n    padding: 4px\r\n    cursor: pointer\r\n    text-align: center\r\n\r\n    &:active\r\n        transform: scale(0.98)\r\n\r\n    &:focus\r\n        outline: 0\r\n\r\n@mixin oneFiveGrid\r\n    display: grid\r\n    grid-template-columns: 1fr\r\n    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr\r\n\r\n@mixin fiveOneGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr\r\n    grid-auto-rows: 1fr\r\n\r\n@mixin threeThreeGrid\r\n    display: grid\r\n    grid-template-columns: 1fr 1fr 1fr\r\n    grid-auto-rows: 1fr\r\n\r\n@mixin globalFont\r\n    font-family: $InterFont\r\n    font-weight: 500\r\n    font-size: 1.2rem\r\n\r\n@mixin smlInterH1\r\n    color: black\r\n    font-size: 2rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0525rem\r\n\r\n@mixin smlInterH2\r\n    color: black\r\n    font-size: 1.5rem\r\n    font-family: $InterFont\r\n    font-weight: 800\r\n    letter-spacing: -0.0225rem\r\n\r\n@mixin smlInterH3\r\n    color: black\r\n    font-size: 1.2rem\r\n    font-family: $InterFont\r\n    font-weight: 600\r\n    letter-spacing: 0.0025rem\r\n\r\n@mixin smlInterP\r\n    color: black\r\n    font-size: .9rem\r\n    font-family: $InterFont\r\n    letter-spacing: 0.0125rem\r\n\r\n@mixin transparentText\r\n    background-image: url('#{$assetsPath}/Flag-Yemen.webp')\r\n    background-size: 100% 100%\r\n    background-repeat: no-repeat\r\n    -webkit-background-clip: text\r\n    -webkit-text-fill-color: transparent\r\n\r\n@mixin transparentBg\r\n    background-image: url('#{$assetsPath}/Flag-Yemen.webp')\r\n    background-size: 100% 100%\r\n    background-blend-mode: color-burn\r\n    background-repeat: no-repeat\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/1.svg":
/*!**************************!*\
  !*** ./src/assets/1.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/1.svg");

/***/ }),

/***/ "./src/assets/bikatshoo.svg":
/*!**********************************!*\
  !*** ./src/assets/bikatshoo.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/bikatshoo.svg");

/***/ }),

/***/ "./src/assets/like.svg":
/*!*****************************!*\
  !*** ./src/assets/like.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/like.svg");

/***/ }),

/***/ "./src/assets/pokemon.png":
/*!********************************!*\
  !*** ./src/assets/pokemon.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/pokemon.png");

/***/ }),

/***/ "./src/assets/x.svg":
/*!**************************!*\
  !*** ./src/assets/x.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/x.svg");

/***/ }),

/***/ "./src/styles/Sass/main.sass":
/*!***********************************!*\
  !*** ./src/styles/Sass/main.sass ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/Sass/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Sass/main.sass */ "./src/styles/Sass/main.sass");
/* harmony import */ var _assets_pokemon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pokemon.png */ "./src/assets/pokemon.png");
/* harmony import */ var _assets_like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/like.svg */ "./src/assets/like.svg");
/* harmony import */ var _assets_bikatshoo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/bikatshoo.svg */ "./src/assets/bikatshoo.svg");
/* harmony import */ var _assets_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/1.svg */ "./src/assets/1.svg");
/* harmony import */ var _assets_x_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/x.svg */ "./src/assets/x.svg");
/* harmony import */ var _modules_pageRendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageRendering */ "./src/modules/pageRendering.js");





// import './assets/2.svg';
// import './assets/3.svg';
// import './assets/4.svg';
// import './assets/5.svg';
// import './assets/6.svg';
// import './assets/7.svg';
// import './assets/8.svg';
// import './assets/9.svg';


window.addEventListener('load', function () {
  (0,_modules_pageRendering__WEBPACK_IMPORTED_MODULE_6__.renderList)();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle36548dabfde3eb2e7c81.js.map