import config from "./config";

export class Services {

    getAllCategories() {
        return  fetch(`${config.apiUrl}/categories/`).then(value => value.json());
    }

    getAllProducts() {
        return fetch(`${config.apiUrl}/products/`).then(value => value.json())
    }
    getProductsLists(categoryId) {
        return fetch(`${config.apiUrl}/products/?category=${categoryId}`).then(value => value.json())
    }
    getProductID(id) {
        return fetch(`${config.apiUrl}/products/?products=${id}/`).then(value => value.json())
    }

     
}

