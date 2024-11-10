import data from "../data/data.js";
import search from "../feature/filters/search.js"
import paginate from "../feature/paginate/paginate.js";
import { displayCate, filterCate } from "../feature/filters/category.js";

const init = () => {
    paginate();
    displayCate(data);
    filterCate(data);
    search(data);
}
init()
