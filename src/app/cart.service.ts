import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {
  items=[];  //用来把当前商品的列表（数组）存储在购物车中

  constructor(
    private http:HttpClient
  ){}

  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }


}