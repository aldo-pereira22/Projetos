import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product
  constructor(private prodcutService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.prodcutService.readById(id).subscribe(product => {
      this.product = product
    });
  }


  upDateProduct(): void {
    this.prodcutService.upDate(this.product).subscribe(() => {
      this.prodcutService.showMessage('Produto Alterado!!')
      // this.router.navigate(['/products'])
      this.cancel()

    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
