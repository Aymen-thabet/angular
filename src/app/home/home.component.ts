import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color:string=''
  // ou bien color!:string
  title: string = "welcome 4arctic 7"

prixProduit!:number

  products = [
    {title: 'iphone 14' , price: 1000 , quantity : 5 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {title: 'iphone 14' , price: 1000 , quantity : 5 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {title: 'iphone 15' , price: 2000 , quantity : 8 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {title: 'iphone 16' , price: 3000 , quantity : 2 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},

  ]

  show(){
    alert ( "bonjour")
  }
  like(i: number) {
    this.products[i].like++
  }

  acheterProduit(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      alert("Stock épuisé !");
    }
  }

}
