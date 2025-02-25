const BASE_URL = 'http://localhost:3000';

const TEST_URL ={
    TEST_HOME_URL: BASE_URL + '/',
    TEST_LOGIN_URL: BASE_URL + '/login',
    TEST_REGISTER_URL: BASE_URL + '/register',
    TEST_CATALOG_URL: BASE_URL + '/catalog'
}
const TEST_USER ={
    EMAIL_FIELD: 'test@test.bg',
    PASSWORD_FIELD: '123456'
}
const ALERT ={
    ALERT_MESSAGE: 'All fields are required!'
}
const TEST_BOOK ={
    TITLE: "Test Book Title",
    DESCRIPTION: "Test Book description",
    IMAGE: '/images/book3.png',
    TEST_BOOK_OPTIONS: {
        FICTION: 'Fiction',
        ROMANCE: 'Romance',
        MISTERY: 'Mistery',
        CLASSIC: 'Classic',
        OTHER: 'Other'
    }

}

export {
    BASE_URL,
    TEST_URL,
    TEST_USER,
    ALERT,
    TEST_BOOK
}