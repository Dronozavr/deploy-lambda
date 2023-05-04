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
const handler = (_event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = {
            statusCode: 200,
            body: 'GET trucks/',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnVuY3Rpb25zL3RydWNrcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDTyxNQUFNLE9BQU8sR0FBRyxDQUFPLE1BQTRCLEVBQWtDLEVBQUU7SUFDMUYsSUFBSTtRQUNBLE1BQU0sUUFBUSxHQUFHO1lBQ2IsVUFBVSxFQUFFLEdBQUc7WUFDZixJQUFJLEVBQUUsYUFBYTtTQUN0QixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7S0FDbkI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU87WUFDSCxVQUFVLEVBQUUsR0FBRztZQUNmLElBQUksRUFBRSx1QkFBdUI7U0FDaEMsQ0FBQztLQUNMO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFiVyxRQUFBLE9BQU8sV0FhbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChfZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50KTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGJvZHk6ICdHRVQgdHJ1Y2tzLycsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICAgICAgICAgIGJvZHk6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICB9O1xuICAgIH1cbn07Il19