document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignIn = document.querySelector('#sign-in-btn');
    var getBtnSignUp = document.querySelector('#sign-up-btn');
    var getModal = document.querySelector('.modal');
    var getModalOverlay = document.querySelector('.modal__overlay');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getSignInReturn = document.querySelector('#sign-in-return');
    var getSignUpReturn = document.querySelector('#sign-up-return');
    var getFormSignUp = document.querySelector('.form-sign-up');
    var getSignUpSwitch = document.querySelector('.form-sign-in__switch-btn');
    var getSignInSwitch = document.querySelector('.form-sign-up__switch-btn');
    

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

    getSignInSwitch.addEventListener('click', function () {
        getFormSignIn.classList.add('display-block');
        getFormSignUp.classList.remove('display-block');
    })

    getSignUpSwitch.addEventListener('click', function () {
        getFormSignUp.classList.add('display-block');
        getFormSignIn.classList.remove('display-block');
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
        getFormSignUp.classList.remove('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })

    getBtnSignUpMobileTablet.addEventListener('click', function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-block');
        getFormSignIn.classList.remove('display-block');
        getMenu.classList.remove('displayMenu');
        getOverlayMobile.classList.remove('display-block');
    })
}, false)

    /**END */

// SEARCH OPTION
document.addEventListener('DOMContentLoaded', function () {
    var optionBtns = document.querySelectorAll('.header__search-item');

    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].addEventListener('click', function () {
            for (let k = 0; k < optionBtns.length; k++) {
                optionBtns[k].classList.add('header__search--disable-select');
            }
            this.classList.remove('header__search--disable-select');
        })
    }
})
/**END */

    // FILTER BTN
    document.addEventListener('DOMContentLoaded', function () {

        var getFilterBtn = document.querySelectorAll('.home-filter__btn');
        
        for (let i = 0; i < getFilterBtn.length; i++) {
            getFilterBtn[i].addEventListener('click', function () {
                for (let k = 0; k < getFilterBtn.length; k++) {
                    getFilterBtn[k].classList.remove('btn--primary');
                }
                getFilterBtn[i].classList.add('btn--primary');
            })
        }
    }, false)
    /**END */

    // HIDE SOFT FILTER WHEN SCROLL
    document.addEventListener('DOMContentLoaded', function () {
        var getSoftFilter = document.querySelector('.sort-filter');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 10) {
                getSoftFilter.classList.add('hidden');
            }
            else {
                getSoftFilter.classList.remove('hidden');
            }
        })
    })
    /**END */

    // SORT FILTER BTN 
    document.addEventListener('DOMContentLoaded', function () {

        var getFilterBtn = document.querySelectorAll('.sort-filter-item-nothing');
        var getFilterBtnLink = document.querySelectorAll('.sort-filter-link');
        
        for (let i = 0; i < getFilterBtn.length; i++) {
            getFilterBtn[i].addEventListener('click', function () {
                for (let k = 0; k < getFilterBtn.length; k++) {
                    getFilterBtn[k].classList.remove('sort-filter-item--active');
                getFilterBtnLink[k].classList.remove('sort-filter-link--active');

                }
                getFilterBtnLink[i] = event.preventDefault();
                getFilterBtnLink[i].classList.add('sort-filter-link--active');
                getFilterBtn[i].classList.add('sort-filter-item--active');
            })
        }
    }, false)
    /**END */

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
