"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const math_1 = require("../../libs/math");
const handler = (_event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = {
            statusCode: 200,
            body: 'GET cars/ ' + (0, math_1.getRandomInt)(100),
        };
        return response;
    }
    catch (err) {
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
});
exports.handler = handler;
