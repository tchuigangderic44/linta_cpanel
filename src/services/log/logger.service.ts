export default class LoggerService {
    static logErrorToService(error: Error, info: any) {
        console.error("Caught an error:", error, info);
    }
}