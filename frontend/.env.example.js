const _Environments = {
    LOG_IN_URL: '',
    REGISTER_URL: '',
    USER_URL: '',
    DISCIPLINE_URL: '',
    CLASSES_URL: '',
    DELETE_CLASS_URL: '',
    LOG_OUT_USER_URL: '',
}

function getEnvironment() {
    return _Environments
}

export const env = getEnvironment()