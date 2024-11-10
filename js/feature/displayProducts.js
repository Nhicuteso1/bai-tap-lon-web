import { fomatPrice, handleRate, getStorageItem, setStorageItem, findProduct } from "./utils.js";


const display = (products, element) => {
    element.innerHTML = products.map((product) => {
        const { id, name, price, rate, img } = product
        return `
        <div class="product-item col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div class="product-item-wrap" data-id=${id}>
                <img src="${img}" alt="" class="product-item-img">
                <div class="product-item-info">
                    <h4 class="product-item-name">${name}</h4>
                    <div class="product-item_rating">${handleRate(rate)}</div>
                    <span class="product-item-price">Giá: <span>${fomatPrice(price)}</span></span>
                    <button class="btnn" data-id=${id}>Mua ngay</button>
                </div>
            </div>
        </div>
        `
    }).join("");
    // setTimeout(handleClickBtn, 1);
}

const handleClickBtn = () => {
    const productItemBtns = $(".product-item-btn")
    for (let i = 0; i < productItemBtns.length; i++) {
        productItemBtns.get(i).addEventListener('click', (e) => {
            e.stopPropagation()
            const idProduct = e.target.dataset.id
            let carts = getStorageItem("cart")
            let item = carts.find(cart => cart.id == idProduct)
            if (item) {
                carts = carts.map((cart) => {
                    if (cart.id == idProduct) {
                        let newAmount = cart.amount + 1
                        cart = { ...cart, amount: newAmount }
                    }
                    return cart
                })
            } else {
                let product = findProduct(Number.parseInt(idProduct))
                product = { ...product, amount: 1 }
                carts = [...carts, product]
            }
            setStorageItem('cart', carts)
            window.location.href = "./cart.html";
        })
    }
}

const findId = (element) => {
    while(!element.classList.contains('product-item-wrap')) {   
        element = element.parentNode
    }
    return element.dataset.id 
}

const handleClickItem = () => {
    const productItems = $('.product-item')
    for(let i = 0; i < productItems.length; i++) {
        productItems.get(i).addEventListener('click', (e) => {
            if(!e.target.classList.contains('product-item-btn')) {
                const id = findId(e.target)
                window.location.href = `./product.html?id=${id}`
            }
        })
    }
}

export { handleClickBtn, handleClickItem }
export default display