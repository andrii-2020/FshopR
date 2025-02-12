const _url = 'https://shpapi-production.up.railway.app/'
export class Services {
    getAllCategories() {
        return  fetch(`${_url}api/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`${_url}api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`${_url}api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`${_url}api/products/${id}/`).then(value => value.json())
    }

     
}