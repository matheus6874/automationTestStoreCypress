const locators = {
    COMMON_PAGE:{
        INPUT_EMAIL: '#email',
        INPUT_PASSWORD: '#password1',
        INPUT_FORGOT_EMAIL: '#forgottenFrm_email',
        CY_CONTINUE: 'Continue' ,
    },
    USER_LOGIN_PAGE: {
        BTN_LOGIN: '#loginFrm > fieldset > .btn',
        INPUT_LOGIN_NAME: '#loginFrm_loginname',
        INPUT_PASSWORD: '#loginFrm_password',
    },
    FORGOT_PASSWORD_PAGE: {
        INPUT_LOGIN_NAME: '#forgottenFrm_loginname',
    },
    FORGOT_LOGIN_PAGE: {
        INPUT_LAST_NAME: '#forgottenFrm_lastname',
    },
    REGISTER_PAGE: {
        CHECK_BOX_PRIVACY_POLICY: '#AccountFrm_agree',
        INPUT_FIRST_NAME: '#AccountFrm_firstname',
        INPUT_LAST_NAME: '#AccountFrm_lastname',
        INPUT_EMAIL: '#AccountFrm_email',
        INPUT_ADRESS: '#AccountFrm_address_1',
        SELECT_REGION: '#AccountFrm_zone_id',
        SELECT_COUNTRY: '#AccountFrm_country_id',
        INPUT_CITY: '#AccountFrm_city',
        INPUT_ZIP_CODE: '#AccountFrm_postcode',
        INPUT_LOGIN_NAME: '#AccountFrm_loginname',
        INPUT_PASSWORD: '#AccountFrm_password',
        INPUT_CONFIRM_PASSOWRD: '#AccountFrm_confirm'
    },
    HOME: {
        BTN_HOMEAPPAREL_ACCESSORIES: '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]',
        CY_SHOES_PRODUCTS: 'Shoes',
        CY_FIORELLA_PURPLE_PRODUCT: 'Fiorella Purple ',
        BTN_CART: '.cart',
        BTN_CHECKOUT: '#cart_checkout1',
        CY_LOGIN: 'Login',
        BTN_CONFIRM_ORDER: '#checkout_btn',
    }
  }
  
  export default locators