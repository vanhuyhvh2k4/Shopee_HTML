// HANDLE SIGN IN AND SIGN UP ON DESKTOP
document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignIn = document.querySelector('#sign-in-btn');
    var getBtnSignUp = document.querySelector('#sign-up-btn');
    var getModal = document.querySelector('.modal');
    var getModalOverlay = document.querySelector('.modal__overlay');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getSignInReturn = document.querySelector('#sign-in-return');
    var getSignUpReturn = document.querySelector('#sign-up-return');
    var getFormSignUp = document.querySelector('.form-sign-up');


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
}, false)

/**END  */

// DISPLAY SMALL IMAGE WHEN CLICKED
    function changeImage(fileName) {
        let bigImage = document.querySelector('.product__buy-img-large-img');
        bigImage.setAttribute('style', fileName);
    }
/**END */

// HANDLE SIGN IN AND SIGN UP ON TABLET AND MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignInMobileTablet = document.querySelector('#btn-sign-in-moble-tablet');
    var getBtnSignUpMobileTablet = document.querySelector('#btn-sign-up-moble-tablet');
    var getMenuIcon = document.querySelector('.header__search-menu-icon');
    var getMenu = document.querySelector('.header__search-menu-content');
    var getOverlayMobile = document.querySelector('.header__search-overlay');
    var getCloseIcon = document.querySelector('.header__search-menu-content-icon');
    var getModal = document.querySelector('.modal');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getFormSignUp = document.querySelector('.form-sign-up');




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
}, false)

// /**END */

// SELECT COLOR AND SIZE
document.addEventListener('DOMContentLoaded', function () {
    var getColorBtn = document.querySelectorAll('.product__buy-order-color-square');
    var getSizeBtn = document.querySelectorAll('.product__buy-order-size-square');

    for (let i = 0; i < getColorBtn.length; i++) {
        getColorBtn[i].addEventListener('click', function () {
            for (let k = 0; k < getColorBtn.length; k++) {
                getColorBtn[k].classList.remove('select');
            }

            getColorBtn[i].classList.add('select');
        })
    }

    for (let i = 0; i < getSizeBtn.length; i++) {
        getSizeBtn[i].addEventListener('click', function () {
            for (let k = 0; k < getSizeBtn.length; k++) {
                getSizeBtn[k].classList.remove('select');
            }

            getSizeBtn[i].classList.add('select');
        })
    }
}, false)

/**END */

// QUANTITY OF BUY/
document.addEventListener('DOMContentLoaded', function () {
    var getMinus = document.querySelector('#minus');
    var getPlus = document.querySelector('#plus');
    var getInput = document.querySelector('.product__buy-order-quantity-number');
    let quantity = 1;



    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            quantity = '0' + quantity;
            getInput.innerText = quantity;
        } else {
            getInput.innerText = quantity;

        }
    })

    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                quantity = '0' + quantity;
                getInput.innerText = quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)

/**END */

// QUANTITY OF BUY MORE
document.addEventListener('DOMContentLoaded', function () {
    var getMinus = document.querySelector('.product__more-product-main-option-details-quantity-btn-sub');
    var getPlus = document.querySelector('.product__more-product-main-option-details-quantity-btn-add');
    var getInput = document.querySelector('.product__more-product-main-option-details-quantity-btn-input');
    let quantity = 1;

    getPlus.addEventListener('click', function () {
        quantity++;
        if (quantity < 10) {
            quantity = '0' + quantity;
            getInput.innerText = quantity;
        } else {
            getInput.innerText = quantity;

        }
    })

    getMinus.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            if (quantity < 10) {
                quantity = '0' + quantity;
                getInput.innerText = quantity;
            } else {
                getInput.innerText = quantity;
            }
        }
    })
}, false)
/**END */

// RATING FILTER
document.addEventListener('DOMContentLoaded', function () {
    var RateFilterBtns = document.querySelectorAll('.productRating-filter-right-options-btn');

    for (let i = 0; i < RateFilterBtns.length; i++) {
        RateFilterBtns[i].addEventListener('click', function () {
            for (let k = 0; k < RateFilterBtns.length; k++) {
                RateFilterBtns[k].classList.remove('productRating-filter-right-options-btn--select');
            }
            this.classList.add('productRating-filter-right-options-btn--select');
        })


    }
}, false)
/**END */

// BUY BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var buyBtn = document.querySelector('.product__btn-buy-title');
    var buyDetail = document.querySelector('.product__btn-buy-details');
    var overlayBuy = document.querySelector('.product__btn-buy-details-overlay');
    var closeBtn = document.querySelector('.product__btn-buy-details-form-heading-right > i');

    hidden = function () {
        buyDetail.classList.remove('display-block');
    }

    buyBtn.addEventListener('click', function () {
        buyDetail.classList.add('display-block');
    })

    overlayBuy.addEventListener('click', hidden);
    closeBtn.addEventListener('click', hidden);
}, false)
/**END */

// CART BTN ON MOBILE
document.addEventListener('DOMContentLoaded', function () {
    var cartBtn = document.querySelector('.product__btn-cart-title');
    var cartDetail = document.querySelector('.product__btn-cart-details');
    var overlayCart = document.querySelector('.product__btn-cart-details-overlay');
    var closeBtn = document.querySelector('.product__btn-cart-details-form-heading-right > i');

    hidden = function () {
        cartDetail.classList.remove('display-block');
    }

    cartBtn.addEventListener('click', function () {
        cartDetail.classList.add('display-block');
    })

    overlayCart.addEventListener('click', hidden);
    closeBtn.addEventListener('click', hidden);
}, false)
/**END */