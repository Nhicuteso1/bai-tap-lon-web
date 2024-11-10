import display from "../displayProducts.js";


const displayCate = (data) => {
    const productCateListDOM = $(".product-category-list").get(0)
    let cateList = []
    data.map((item) => {
        const cateName = item.category
        if(!cateList.some(item => item === cateName)) {
            cateList = [ ...cateList, cateName]
        }
    })
    productCateListDOM.innerHTML = cateList.map((cateItem) => {
        return `
            <li class="product-category-item"><button class="btnn">${cateItem}</button></li>
        `
    }).join('')
}

const filterCate = (data) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const URLValue = urlSearchParams.get("cate");
    if(URLValue) {
        let listItemFil = data.filter((item) => item.category == URLValue)
        display(listItemFil, $(".product-list").get(0))
    } 
    const cataBtns = $(".product-category-item button")
    for(let i = 0; i < cataBtns.length; i++) {
        cataBtns.get(i).addEventListener('click', (e) => {
            const cateName = e.target.innerText
            let listItemFil = data.filter((item) => {
                if(item.category === cateName) {
                    return item
                }
            })
            display(listItemFil, $(".product-list").get(0))
        })
    }
}

export { displayCate, filterCate }