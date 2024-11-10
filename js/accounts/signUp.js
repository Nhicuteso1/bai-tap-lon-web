import { closeModal } from "./login.js"
import displayUser from "./displayUser.js"
import { setStorageItem } from "../feature/utils.js"
import { addAccount } from "./dataAccounts.js"

$(".modal-container-signUp .modal__footer button").click(() => {
    $(".modal-container-signUp").addClass("close")
    $(".modal-container-login").removeClass("close")
})

const clearValueInput = () => {
    $("#fullName").val("")
    $("#userName").val("")
    $("#email").val("")
    $("#password").val("")
    $("#confirmPassword").val("")
}

$(document).ready(() => {

    $("#fullName").blur(() => {
        const regex = /^[a-zA-Z\s]+$/
        if(!regex.test($("#fullName").val())) {
            $(".form__message.fullName").text("Nhập sai dữ liệu");
            $("#fullName").parent().addClass('invalid')
        } else {
            $(".form__message.fullName").text("");
            $("#fullName").parent().removeClass('invalid')
        }
    })

    $("#userName").blur(() => {
        const regex = /^[a-zA-Z0-9]+$/
        if(!regex.test($("#userName").val())) {
            $(".form__message.userName").text("Username khong chứa kí tự đặt biệt và dấu cách");
            $("#userName").parent().addClass('invalid')
        } else {
            $(".form__message.userName").text("");
            $("#userName").parent().removeClass('invalid')
        }
    })

    $("#email").blur(() => {
        const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if(!regex.test($("#email").val())) {
            $(".form__message.email").text("Nhập sai dữ liệu email");
            $("#email").parent().addClass('invalid')
        } else {
            $(".form__message.email").text("");
            $("#email").parent().removeClass('invalid')
        }
    })

    $("#password").blur(() => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if(!regex.test($("#password").val())) {
            $(".form__message.password").text("Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt");
            $("#password").parent().addClass('invalid')
        } else {
            $(".form__message.password").text("");
            $("#password").parent().removeClass('invalid')
        }
    })

    $("#confirmPassword").blur(() => {
        if(!($("#confirmPassword").val() == $("#password").val())) {
            $(".form__message.confirmPassword").text("Nhập lại mật khẩu không khớp");
            $("#confirmPassword").parent().addClass('invalid')
        } else {
            $(".form__message.confirmPassword").text("");
            $("#confirmPassword").parent().removeClass('invalid')
            $('.form__submit-register').removeClass('disabled')
        }
    })

    $('.form__submit-register').click((e) => {
        e.preventDefault()
        if(!$('.form__submit-register').hasClass("disabled")) {
            const id = new Date()
            const user = {
                id: id.getTime(),
                fullName: $("#fullName").val(),
                userName: $("#userName").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            }
            // addAccount(user)
            closeModal();
            setStorageItem('user', user)
            displayUser()
            clearValueInput()
        }
    }) 
})