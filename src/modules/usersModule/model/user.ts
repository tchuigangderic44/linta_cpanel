export default interface User {
    id?: string;
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
    role?: string;
    status?: string;
    phone?: string;
    internal?: string;
    
    // deviceToken?: string;
    // carInfos?: File;
}