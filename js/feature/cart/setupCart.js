import { getStorageItem, setStorageItem, fomatPrice, findProduct } from "../utils.js";
import addCartDOM from "./addCartDOM.js";

const cartList = $('.cart-table-list').get(0)
const QuantityItemCart = $(".cart-qtty-item").get(0)
const totalList = $('.num-totals')

let carts = getStorageItem('cart')

const displayQuantityItemCart = () => {
    const amount = carts.reduce((total, cart) => {
        return (total += cart.amount)
    }, 0)
    QuantityItemCart.textContent = amount
}

const displayTotalPerItem = (element) => {
    const id = element.dataset.id
    carts.forEach((cart) => {
        if (cart.id == id) {
            const total = cart.amount * cart.price
            element.textContent = fomatPrice(total)
        }
    })
}

const displayTotalListCart = () => {
    let total = carts.reduce((total, cart) => {
        return (total += cart.amount * cart.price)
    }, 0)
    for (let i = 0; i < totalList.length; i++) {
        totalList.get(i).textContent = fomatPrice(total)
    }
}

const displayCartItemDOM = () => {
    carts.forEach((cart) => { addCartDOM(cart) })
}

const removeItem = (id) => {
    carts = carts.filter((cart) => {
        if (cart.id != id) {
            return cart
        }
    })
}

const increaseAmount = (id) => {
    let newAmount
    carts = carts.map((cart) => {
        if (cart.id == id) {
            newAmount = cart.amount + 1
            cart = { ...cart, amount: newAmount }
        }
        return cart
    })
    return newAmount
}

const decreaseAmount = (id) => {
    let newAmount
    carts = carts.map((cart) => {
        if (cart.id == id) {
            newAmount = cart.amount - 1
            cart = { ...cart, amount: newAmount }
        }
        return cart
    })
    return newAmount
}

const addToCart = (id) => {
    let item = carts.find((cart) => cart.id == id)

    if (item) {
        //update values
        const amount = increaseAmount(id)
        const listCartQuantity = [...cartList.querySelectorAll('.cart-item-quantity span')]
        const CartQuantityDOM = listCartQuantity.find((value) => value.dataset.id === id)
        CartQuantityDOM.textContent = amount
    } else {
        // add Item from product 
        let product = findProduct(id)
        product = { ...product, amount: 1 }
        carts = [...carts, product]
        addCartDOM(product)
    }
    displayQuantityItemCart();
    displayTotalListCart()
    setStorageItem('cart', carts)
}

const findElemnt = (element) => {
    let id
    while (!element.classList.contains('cart-item')) {
        if (element.dataset.id != undefined) {
            id = element.dataset.id
            break
        } else {
            element = element.parentNode
        }
    }
    return { id, element }
}

const setupCartFunctionlity = () => {
    cartList.addEventListener('click', (e) => {
        const element = e.target
        const id = element.dataset.id;
        const parent = element.parentNode
        const parentId = parent.dataset.id
        console.log(element);


        if (element.classList.contains('cart-item-remove-btn') || element.classList.contains('fa-xmark')) {
            if (element.classList.contains('fa-xmark')) {
                removeItem(parentId);
                element.parentNode.parentNode.remove()
            } else {
                removeItem(id);
                element.parentNode.remove()
            }
        }
        if (parent.classList.contains('cart-item-qtt-btn-plus') || parent.parentNode.classList.contains('cart-item-qtt-btn-plus')) {
            const elements = findElemnt(parent)
            const newAmount = increaseAmount(elements.id)
            elements.element.previousElementSibling.textContent = newAmount
            const totalItem = elements.element.parentElement.nextElementSibling.nextElementSibling;
            displayTotalPerItem(totalItem)
        }
        if (parent.classList.contains('cart-item-qtt-btn-subtr') || parent.parentNode.classList.contains('cart-item-qtt-btn-subtr')) {
            const elements = findElemnt(parent)
            const newAmount = decreaseAmount(elements.id)
            if (newAmount == 0) {
                removeItem(elements.id);
                elements.element.parentNode.parentNode.remove()
            } else {
                elements.element.nextElementSibling.textContent = newAmount
                const totalItem = elements.element.parentElement.nextElementSibling.nextElementSibling;
                displayTotalPerItem(totalItem)
            }
        }
        displayTotalListCart()
        displayQuantityItemCart()
        setStorageItem('cart', carts)
    })
}

const init = () => {
    displayCartItemDOM()
    displayQuantityItemCart()
    displayTotalListCart()
    setupCartFunctionlity()
}

init()

export default addToCart
