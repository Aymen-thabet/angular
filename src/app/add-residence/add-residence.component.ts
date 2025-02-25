
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private rs: ResidenceService, private rt:Router) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required)
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  save() {
    this.rs.addResidence(this.residenceForm.value).subscribe(
      ()=> this.rt.navigateByUrl('/residence')
    )
  }
}
  


