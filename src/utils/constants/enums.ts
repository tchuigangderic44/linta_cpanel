enum ROLE_USER {
    Manager = 'admin',
    ConflictManager = 'conflict',
    RegistrationManager = 'registration',
    Driver = 'driver',
}

enum ORDER {
    ASC,
    DESC
}

enum ACTION {
    READ,
    EDIT,
    DELETE,
    DOWNLOAD,
}

enum TYPE_CONTENT {
    TEXT,
    IMAGE,
    PRICE,
    BADGE,
    SUBTITLE
}


enum GENDER {
    MALE = "M",
    FEMALE = "F"
}

enum LANG {
    FR = "FR",
    EN = "EN"
}

enum STATUS {
    IDLE,
    LOADING,
    FAIL,
    SUCCESS
}

export { ROLE_USER, ORDER, ACTION, TYPE_CONTENT, GENDER, LANG, STATUS }