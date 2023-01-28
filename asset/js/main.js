document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignIn = document.querySelector('#sign-in-btn');
    var getBtnSignUp = document.querySelector('#sign-up-btn');
    var getModal = document.querySelector('.modal');
    var getModalOverlay = document.querySelector('.modal__overlay');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getSignInReturn = document.querySelector('#sign-in-return');
    var getSignUpReturn = document.querySelector('#sign-up-return');
    var getFormSignUp = document.querySelector('.form-sign-up');
    

    // HANDLE SIGN IN AND SIGN UP ON DESKTOP
    getBtnSignIn.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignIn.classList.add('display-block');
    })

    getBtnSignUp.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-block');
    })

    getModalOverlay.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');

    })

    getSignInReturn.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getSignUpReturn.addEventListener('click', function () {
        getModal.classList.remove('display-flex');
        getFormSignIn.classList.remove('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    /**END  */

    // HANDLE SIGN IN AND SIGN UP ON TABLET AND MOBILE
    var getBtnSignInMobileTablet = document.querySelector('#btn-sign-in-moble-tablet');
    var getBtnSignUpMobileTablet = document.querySelector('#btn-sign-up-moble-tablet');
    var getMenuIcon = document.querySelector('.header__search-menu-icon');
    var getMenu = document.querySelector('.header__search-menu-content');
    var getOverlayMobile = document.querySelector('.header__search-overlay');
    var getCloseIcon = document.querySelector('.header__search-menu-content-icon');

    getMenuIcon.addEventListener('click', function () {
        getMenu.classList.add('displayMenu');
        getOverlayMobile.classList.add('display-block');
    })

    getCloseIcon.addEventListener('click', function () {
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getOverlayMobile.addEventListener('click', function () {
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getBtnSignInMobileTablet.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignIn.classList.add('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getBtnSignUpMobileTablet.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })
    /**END */

    // FILTER BTN
    var getFilterBtn = document.querySelectorAll('.home-filter__btn');
    
    for (let i = 0; i < getFilterBtn.length; i++) {
        getFilterBtn[i].addEventListener('click', function () {
            for (let k = 0; k < getFilterBtn.length; k++) {
                getFilterBtn[k].classList.remove('btn--primary');
            }
            getFilterBtn[i].classList.add('btn--primary');
        })
    }
    /**END */
}, false)

// CATEGORY BTN
document.addEventListener('DOMContentLoaded', function () {
    var categoryBtns = document.querySelectorAll('.category-item');

    for (let i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener('click', function () {
            for (let k = 0; k < categoryBtns.length; k++) {
                categoryBtns[k].classList.remove('category-icon__active');
            }
            categoryBtns[i].classList.add('category-icon__active');
        })
    }
}, false)
/**END */