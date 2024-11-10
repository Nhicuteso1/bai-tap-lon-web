import { getStorageItem, setStorageItem, findProduct, fomatPrice, handleRate, handleDesc } from '../feature/utils.js'
const productDetailDOM = $('.product-detail').get(0)

const urlSearchParams = new URLSearchParams(window.location.search);
const URLValue = urlSearchParams.get("id");

const product = findProduct(parseInt(URLValue))

document.title = `Kitchen | ${product.name}`

setTimeout(() => {
    const buyBtn = $('.product-detail-btn').get(0)
    buyBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id
        let carts = getStorageItem("cart")
        let item = carts.find(cart => cart.id == id)
        if (item) {
            carts = carts.map((cart) => {
                if (cart.id == id) {
                    let newAmount = cart.amount + 1
                    cart = { ...cart, amount: newAmount }
                }
                return cart
            })
        } else {
            let product = findProduct(Number.parseInt(id))
            product = { ...product, amount: 1 }
            carts = [...carts, product]
        }
        setStorageItem('cart', carts)
        window.location.href = "./cart.html";
    })
}, 1)

const {id, name, desc, img, category, price, rate, quantity} = product
productDetailDOM.innerHTML= `
    <img src="${img}" alt="" class="product-detail-img">
    <section class="product-detail-info">
        <h2 class="product-detail-title">${name}</h2>
        <div class="product-detail-rate">${handleRate(rate)}</div>
        <p class="product-detail-cate">- ${category} -</p>
        <ul class="product-detail-list-desc">
            ${handleDesc(desc)}
        </ul>
        <div class="product-detail-wrap-price-quantity">
            <div class="product-detail-price">Giá: <span>${fomatPrice(price)}</span></div>
            <div class="product-detail-quantity">Số lượng: <span>${quantity}</span></div>
        </div>
        <button class="product-detail-btn btnn mt-4" data-id=${id}>Mua ngay</button>
    </section>
`



