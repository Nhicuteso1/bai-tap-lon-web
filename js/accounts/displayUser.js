import { getStorageItem } from "../feature/utils.js";

const displayUser = () => {
    let user = getStorageItem('user')
    if(!Array.isArray(user)) {
        $("#hoVaTen").val(user.fullName)
        $("#tenDangNhap").val(user.userName)
        $("#emailUser").val(user.email)
        $(".info-user").addClass('is-login')
    }
    
    $(".Log-out-btn").click(() => {
        $("#hoVaTen").val("")
        $("#tenDangNhap").val("")
        $("#emailUser").val("")
        $(".info-user").removeClass('is-login')
        localStorage.removeItem('user');
    })
}

export default displayUser
