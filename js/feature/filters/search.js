import display from "../displayProducts.js";

const search = (data) => {
    const inputDOM = $(".products-search-input").get(0)
    inputDOM.addEventListener('keyup', (e) => {
        const value = inputDOM.value.toLowerCase()
        if(value) {
            const newStore = data.filter((item) => {
                let title = item.name.toLowerCase()
                if(title.startsWith(value)) {
                    return item
                }
            })
            if(newStore < 1) {
                $(".product-list").html(`<h2 class="filter-empty">Xin lỗi, sản phẩn bạn tìm kiếm không có ở đây</h2>`)
            } else {
                display(newStore, $(".product-list").get(0), true)
            }
        } else {
            display(data, $(".product-list").get(0), true)
        }
    })
}

export default search