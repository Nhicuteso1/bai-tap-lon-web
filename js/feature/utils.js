import data from "../data/data.js";
import { dataAccounts } from "../accounts/dataAccounts.js";
const fomatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
    return formattedPrice;
}

const handleRate = (rate) => {
    let result = "";
    let r = rate;
    const yellowStar = '<svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
    const grayStar = '<svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#a6a6a6" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
    for(let i = 0; i < 5; i++) {
        if(r > 0) {
            result += yellowStar;
            r--;
        } else {
            result += grayStar
        }
    }
    return result
}

const handleDesc = (desc) => {
    let descHTML 
    descHTML = desc.map(item => `<li>${item}</li>`).join('')
    return descHTML
}

const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item)
    if(storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
    } else {
        storageItem = []
    }
    return storageItem
}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}

const findProduct = (id) => {
    let products = data.find((item) => item.id === id) 
    return products
}

const findUser = (id) => {
    return dataAccounts.find(user => user.id == id)
}


export { 
    fomatPrice, 
    handleRate, 
    getStorageItem, 
    setStorageItem, 
    findProduct, 
    handleDesc,
    findUser
}


            