const setupPaginate = (data) => {
    const itemPerPage = 13;
    const numberOfPage = Math.ceil(data.length / itemPerPage)

    const newStore = Array.from({ length: numberOfPage}, (_, index) => {
        const start = index * itemPerPage
        return data.slice(start, start + itemPerPage)
    })
    return newStore
}
export default setupPaginate