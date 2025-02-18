export class Services {
    getAllCategories() {
        return  fetch(`/api/api/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`/api/api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`/api/api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`/api/api/products/${id}/`).then(value => value.json())
    }

     
}