import User from "./user";

export default class Admin implements User {
    age?: string;
    avatar?: File;
    firstName?: string;
    lastName?: string;
    lang?: string;
    phoneNumber?: string;
    gender?: string;
    password?: string;
    email?: string;
    connected?: boolean;
    
    type?: string;
    role?: string;
    // deviceToken?: string;

    // carInfos?: File;
}
