export class Services {
    getAllCategories() {
        return  fetch(`/apim/api/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`/apim/api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`/apim/api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`/apim/api/products/${id}/`).then(value => value.json())
    }

     
}