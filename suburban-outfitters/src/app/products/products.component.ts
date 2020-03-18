import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public item: any
  public products: any = []
  constructor(private router: Router) {

    this.products = [
      {title: "product 1"},
      {title: "product 2"},
      {title: "product 3"},
      {title: "product 4"},
      {title: "product 5"},
      {title: "product 6"}
    ]

  }

  ngOnInit(): void {
  }
  public displayProductDetail(product) {
    console.log('displayProductDetail');
    console.log(product);
    this.router.navigateByUrl('/product-detail', { state: { product } });

  }

}
