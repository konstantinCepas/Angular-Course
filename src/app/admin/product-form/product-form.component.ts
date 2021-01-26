import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  constructor(categoryService: CategoryService, private productService : ProductService, private router: Router) {
    this.categories$ = categoryService.getCatergories();
   }
   
   form = new FormGroup({
    urlV: new FormControl('', [Validators.required, Validators.pattern(this.urlRegex)])
  });
                                              
  ngOnInit(): void {
  }

  get imageUrl() {
    return this.form.get('urlV');
  }
   save(product) {
     this.productService.create(product);
     this.router.navigate(['/admin/products']);
   }
}
