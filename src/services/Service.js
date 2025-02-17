export class Services {
    getAllCategories() {
        return  fetch(`${process.env.REACT_APP_API_URL}/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`${process.env.REACT_APP_API_URL}/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`${process.env.REACT_APP_API_URL}/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`${process.env.REACT_APP_API_URL}/products/${id}/`).then(value => value.json())
    }

     
}