document.addEventListener('DOMContentLoaded', function () {
    var getBtnSignIn = document.getElementById('sign-in-btn');
    var getBtnSignUp = document.getElementById('sign-up-btn');
    var getModalOverlay = document.querySelector('.modal__overlay');
    var getModal = document.querySelector('.modal');
    var getFormSignIn = document.querySelector('.form-sign-in');
    var getFormSignUp = document.querySelector('.form-sign-up');
    var returnSignIn = document.querySelector('.form-sign-in__control-back')
    var returnSignUp = document.querySelector('.form-sign-up__control-back')

    getBtnSignIn.onclick = function () {
        getModal.classList.add('display-flex');
        getFormSignUp.classList.add('display-hidden');
        returnSignIn.onclick = function () {
            getModal.classList.remove('display-flex');
        }
    }

    getBtnSignUp.onclick = function () {
        getModal.classList.add('display-flex');
        getFormSignIn.classList.add('display-hidden');
        returnSignUp.onclick = function () {
            getModal.classList.remove('display-flex');
        }
    }

    getModalOverlay.onclick = function () {
        getModal.classList.remove('display-flex');
    }



}, false)