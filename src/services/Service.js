export class Services {
    getAllCategories() {
        return  fetch(`/apicategories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`/api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`/api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`/api/products/${id}/`).then(value => value.json())
    }

     
}