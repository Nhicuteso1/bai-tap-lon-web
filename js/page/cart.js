import '../feature/cart/setupCart.js'
import '../accounts/login.js'
import '../accounts/signUp.js'
import '../accounts/displayUser.js'
import displayUser from '../accounts/displayUser.js'
import { getStorageItem } from '../feature/utils.js'

displayUser()

$(".order-cart-btn").click(() => {
    let carts = getStorageItem('cart')
    let user = getStorageItem('user')
    if(Array.isArray(user)) {
        $(".modal-signUp").addClass("open-modal")
    } else {
        if(carts.length === 0) {
            alert("Vui lòng thêm sản phẩm vào giỏ hàng để thanh toán")
        }
        alert("Đơn hàng đang được xử lí (mở devtool để xem đơn hàng)")
        const orderHeader = {
            ...user,
            password: "",
            orderDetail: [ ...carts ],
            totals: $(".num-totals").text()
        }
        console.log(orderHeader)
    }
    
})