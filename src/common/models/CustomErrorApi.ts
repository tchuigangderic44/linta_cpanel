export default class CustomErrorApi extends Error {
    constructor(message: string) {
        super(JSON.stringify((message)));
    }
}