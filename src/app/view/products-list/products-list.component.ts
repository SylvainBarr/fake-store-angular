import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{

  products$!: Promise<Product[]>
  token$!:Observable<string>

  constructor(private productService: ProductService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('name')
    if(category){
      this.products$ = this.productService.getAllByCategory(category)
    }
    else{
      this.products$ = this.productService.getAll()
    }
    this.token$ = this.authService.token$
  }
}
