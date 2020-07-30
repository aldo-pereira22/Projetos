import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private snackBar: MatSnackBar) {


  }


  showMessage(msg: string) : void {
    this.snackBar.open(msg, '', {
        duration:3000,
        verticalPosition:"top"
    })
  }
}
