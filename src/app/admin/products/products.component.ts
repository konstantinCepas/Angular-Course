import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class AdminProductsComponent implements OnInit {
 products$;
  constructor(private productService: ProductService) {
    this.products$ = productService.getAll()
   }

  ngOnInit(): void {
  }

}
