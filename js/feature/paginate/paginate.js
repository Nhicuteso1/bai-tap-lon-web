import data from "../../data/data.js";
import display from "../displayProducts.js";
import displayBtnPag from './displayBtnPag.js'
import setupPaginate from "./setupPaginate.js";
import { handleClickBtn, handleClickItem } from "../displayProducts.js";

const paginate = () => {
    let index = 0
    let page = []

    const setupUI = () => {
        display(page[index], $(".product-list").get(0))
        displayBtnPag($(".pagination").get(0), page, index)
    }
    page = setupPaginate(data);
    setupUI()
    setTimeout(handleClickBtn, 1);
    setTimeout(handleClickItem, 2);

    $(".pagination").get(0).addEventListener("click", (e) => {
        if (e.target.classList.contains('paginate')) return
        if (e.target.classList.contains('num-page')) {
            index = parseInt(e.target.dataset.index);
        }
        const isNextPage = e.target.classList.contains('next-page') || e.target.parentNode.classList.contains('next-page') || e.target.parentNode.parentNode.classList.contains('next-page')
        if (isNextPage) {
            index++;
            if (index > page.length - 1) {
                index = 0
            }
        }
        const isPrevPage = e.target.classList.contains('prev-page') || e.target.parentNode.classList.contains('prev-page') || e.target.parentNode.parentNode.classList.contains('prev-page')
        if (isPrevPage) {
            index--;
            if (index < 0) {
                index = page.length - 1
            }
        }
        setupUI();
        setTimeout(handleClickBtn, 1);
        setTimeout(handleClickItem, 2);
    })

}

export default paginate