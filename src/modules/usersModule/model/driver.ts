import User from "./user";

export default class Driver implements User {
    age?: string;
    avatar?: File;
    deviceToken?: string;
    firstName?: string;
    lastName?: string;
    lang?: string;
    gender?: string;
    email?: string;
    connected?: boolean;

    carInfos?: File;
    sponsorCode?: string;
}