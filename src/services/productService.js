import axios from "axios"
export class ProductService{
    url="http://localhost:8080/api/products/"
    getProducts(){
        let newUrl=this.url+"getall"
        return axios.get(newUrl)
    }
    getByProductsName(productName){
        let newUrl=this.url+"getByProductName?productName="+productName
        return axios.get(newUrl)
    }
} 