export class Services {
    _url='https://shpapi-production.up.railway.app/';

    getAllCategories() {
        return  fetch(`${this._url}api/categories/`).then(value => value.json());
    }

    
    getAllProducts() {
        return fetch(`${this._url}api/products/`).then(value => value.json())
    }

    getProductsLists(categoryId) {
        return fetch(`${this._url}api/products/?category=${categoryId}`).then(value => value.json())
    }

    getProductID(id) {
        return fetch(`${this._url}api/products/${id}/`).then(value => value.json())
    }

     
}