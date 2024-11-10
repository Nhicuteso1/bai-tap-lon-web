import { fomatPrice } from "../utils.js";

const cartListDOM = $('.cart-table-list').get(0)

const addCartDOM = ({ id, name, img, category, price, amount }) => {
    const article = document.createElement("article");
    article.classList.add('cart-item')
    article.setAttribute('data-id', id);
    article.innerHTML = `
        <div class="cart-item-name">
            <img src="${img}" alt="" class="cart-item-name-img">
                <div class="cart-item-name-info">
                    <h4>${name}</h4>
                    <p>${category}</p>  
                </div>
        </div>
        <div class="cart-item-quantity">
            <button class="cart-item-quantity-btn cart-item-qtt-btn-subtr" data-id=${id}>
                <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
            <span data-id=${id}>${amount}</span>
            <button class="cart-item-quantity-btn cart-item-qtt-btn-plus" data-id=${id}>
                <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                </svg>
            </button>
        </div>
        <div class="cart-item-price">${fomatPrice(price)}</div>
        <div class="cart-item-total" data-id=${id}>${fomatPrice(price * amount)}</div>
        <button class="cart-item-remove-btn" data-id=${id} >
            <i class="fa-solid fa-xmark"></i>
        </button>
    `
    cartListDOM.appendChild(article)
}

export default addCartDOM