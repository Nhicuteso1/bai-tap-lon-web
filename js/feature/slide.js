import data from '../data/data.js'
import { fomatPrice, handleRate } from './utils.js'

// const featuredList = document.querySelector(".feature-list")
const featuredList = $(".feature-list").get(0)

setTimeout(() => {
    const featureItemBtns = $('.feature-item_btn')
    for (let i = 0; i < featureItemBtns.length; i++) {
        featureItemBtns.get(i).addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            window.location.href = `./html/product.html?id=${id}`
        })
    }
}, 1)

let listFeatured = [];

data.forEach((item) => {
    const { id, name, desc, price, rate, img, isFeature } = item;
    if (isFeature) {
        const itemFeatured = { id, name, desc, price, rate, img };
        listFeatured = [...listFeatured, itemFeatured];
    }
})

featuredList.innerHTML = listFeatured.map((item, slideIndex) => {
    const { id, name, desc, price, rate, img } = item;
    let position = 'next';
    if (slideIndex === 0) {
        position = 'active';
    }
    if (slideIndex === listFeatured.length - 1) {
        position = 'last';
    }
    return `<div class="feature-item ${position}" data-id=${id}>
        <img src="${img.slice(1)}" alt="" class="feature-item_img">
        <div class="feature-item_info">
            <h3 class="feature-item_title">${name}</h3>
            <ul class="feature-item_list-desc">
                <li class="feature-item_desc">${desc[0]}</li>
                <li class="feature-item_desc">${desc[1]}</li>
            </ul>
            <span class="feature-item_price">Giá: <span>${fomatPrice(price)}</span></span>
            <div class="feature-item_rating">${handleRate(rate)}</div>
            <button class="btnn" data-id=${id}>Chi tiết</button>
        </div>
    </div>`
}).join('');

const startSlide = () => {
    const active = $('.active').get(0);
    const last = $('.last').get(0);
    let next = active.nextElementSibling;
    if (!next) next = featuredList.firstElementChild;
    active.classList.remove('active');
    last.classList.remove('last');
    next.classList.remove('next');

    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');
}

setInterval(() => {
    startSlide();
}, 2000)
// startSlide();