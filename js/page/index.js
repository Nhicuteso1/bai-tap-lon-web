import data from '../data/data.js'



const categoryListDOM = $(".h-category-list").get(0)

document.addEventListener('DOMContentLoaded', () => {
    const cateItemDOMs = document.querySelectorAll(".h-category-item");
    cateItemDOMs.forEach(cateItemDOM => {
        cateItemDOM.addEventListener('click', function(e) {
            const cateName = e.target.closest('.wrap_img_h3').querySelector('.btnn').getAttribute('dataset');
            console.log(cateName);
            window.location.href = `./html/products.html?cate=${cateName}`;
        });
    });
});

let categoryList = []
data.map((item) => {
    const { category, img } = item
    if(!categoryList.some(_item => _item.category === category)) {
        const cateItem = { category, img }
        categoryList = [ ...categoryList, cateItem ]
    }
})

categoryListDOM.innerHTML = categoryList.map(({ category, img }) => {
    return `<li class="h-category-item col-xl-4 col-lg-4 col-md-6 col-md-6">
                <div class="wrap_img_h3">
                    <img src="${img.slice(1)}" alt="" class="h-category_img">
                    <h3 class="h-category_info_name">${category}</h3>
                    <a dataset="${category}" class="btnn">Xem danh mục</a>
                </div>
            </li>`
}).join("")
