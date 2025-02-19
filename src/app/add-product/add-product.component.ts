import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm = new FormGroup({
    Title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]), // Ensures only numbers (1-9999)
    Quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,3}$')]), // Only numbers (1-999)
    Image: new FormControl('', Validators.required),
    Modele: new FormControl('', Validators.required) // Ensures a valid model is selected
  });

  // Store added products
  products: any[] = [];

  onSubmit() {
    if (this.productForm.valid) {
      // Get form values
      const newProduct = this.productForm.value;

      // Save the product locally
      this.products.push(newProduct);

      // Log for testing
      console.log('Product added:', newProduct);

      // Reset the form
      this.productForm.reset();
    }
  }
}
