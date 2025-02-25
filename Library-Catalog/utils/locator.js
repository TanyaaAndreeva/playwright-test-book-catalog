const NAVBAR={
    NAV_NAVBAR: 'nav.navbar',
    ALL_BOOKS_LINK: 'a[href="/catalog"]',
    LOGIN_BUTTON: 'a[href="/login"]',
    REGISTER_BUTTON: 'a[href="/register"]'
}
const LOGIN_FORM ={
    LOGIN_FORM: '#login-form',
    EMAIL:  'input#email' , //'input[id="email"]'
    PASSWORD: 'input#password', //'input[id="password"]'
    LOGIN_BUTTON:'#login-form input[type="submit"]'
}
const LOGGED_NAVBAR ={
    USER_EMAI: '//span[text()="Welcome, test@test.bg"]',
    MY_BOOK: 'a[href="/profile"]',
    ADD_BOOK: 'a[href="/create"]',
    LOGOUT_BUTTON: 'a#logoutBtn.button'
}
const CREATE_FORM ={
    TITLE:'input#title' ,
    DESCRIPTION: 'textarea#description',
    IMAGE: 'input#image',
    TYPE_OPTION: 'select#type',
    ADD_BOOK_BUTTON: 'input.button.submit'
}
const ALL_BOOKS_LIST = 'li.otherBooks'

const DETAILS_BUTTON= '//a[text()="Details"]'; //всички бутони с текстс детайс
const DETAILS_DESCRIPTION= '//h3[text()="Description:"]';
export{
    NAVBAR,
    LOGIN_FORM,
    LOGGED_NAVBAR,
    CREATE_FORM,
    ALL_BOOKS_LIST,
    DETAILS_BUTTON,
    DETAILS_DESCRIPTION,
    
}