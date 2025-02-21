import config from "./config";


export class Services {

    getAllCategories() {
        return  fetch(`${config.apiUrl}/api/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`${config.apiUrl}/api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`${config.apiUrl}/api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`${config.apiUrl}/api/products/${id}/`).then(value => value.json())
    }

     
}