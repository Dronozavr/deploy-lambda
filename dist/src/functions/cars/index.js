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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnVuY3Rpb25zL2NhcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsMENBQStDO0FBQ3hDLE1BQU0sT0FBTyxHQUFZLENBQU8sTUFBNEIsRUFBa0MsRUFBRTtJQUNuRyxJQUFJO1FBQ0EsTUFBTSxRQUFRLEdBQUc7WUFDYixVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSxZQUFZLEdBQUcsSUFBQSxtQkFBWSxFQUFDLEdBQUcsQ0FBQztTQUN6QyxDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7S0FDbkI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSx1QkFBdUI7U0FDaEMsQ0FBQztLQUNMO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFiVyxRQUFBLE9BQU8sV0FhbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCBIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tICcuLi8uLi9saWJzL21hdGgnO1xuZXhwb3J0IGNvbnN0IGhhbmRsZXI6IEhhbmRsZXIgPSBhc3luYyAoX2V2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgICAgICBib2R5OiAnR0VUIGNhcnMvICcgKyBnZXRSYW5kb21JbnQoMTAwKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogNTAwLFxuICAgICAgICAgICAgYm9keTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgICAgIH07XG4gICAgfVxufTsiXX0=