import { dataAccounts } from "./dataAccounts.js"
import displayUser from "./displayUser.js"
import { setStorageItem, findUser } from '../feature/utils.js'
$(".Log-in-btn").click(() => {
    $(".modal-signUp").addClass("open-modal")
})
export function closeModal() {
    $(".modal-signUp").removeClass("open-modal")
    $(".modal-container-signUp").addClass("close")
    $(".modal-container-login").removeClass("close")
}
$(".modal__close").click(() => {closeModal()})

$(".modal-container-login .modal__footer button").click(() => {
    $(".modal-container-login").addClass("close")
    $(".modal-container-signUp").removeClass("close")
})

export const getIdUser = (userName) => {
    const user = dataAccounts.find(user => user.userName === userName)
    return user.id 
}
 
const checkValueLogin = (userName, password) => {
    let isOk
    isOk = dataAccounts.some(user => userName === user.userName)
    if(password) {
        isOk = dataAccounts.some((user) => {
            if(userName === user.userName) {
                return password === user.password
            }
        })
    }
    return isOk
}

$(document).ready(() => {

    $("#l_username").blur(() => {
        if(!checkValueLogin($("#l_username").val(), undefined)) {
            $(".form__message.username").text("Tên username không tồn tại");
            $("#l_username").parent().addClass('invalid')
        } else {
            $(".form__message.username").text("");
            $("#l_username").parent().removeClass('invalid')
        }
    })

    $("#l_password").blur(() => {
        if(!checkValueLogin($("#l_username").val(), $("#l_password").val())) {
            $(".form__message.password").text("Sai mật khẩu");
            $("#l_password").parent().addClass('invalid')
        } else {
            $(".form__message.password").text("");
            $("#l_password").parent().removeClass('invalid')
            $('.form__submit').removeClass('disabled')
        }
    })
    
    $('.form__submit').click((e) => {
        e.preventDefault()
        if(!$('.form__submit').hasClass("disabled")) {
            $("#l_password").val("")
            closeModal();
            setStorageItem('user',findUser(getIdUser($("#l_username").val())))
            displayUser()
        }
    }) 
})


