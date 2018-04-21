import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from '../../model/Seller';
import { SellersService } from '../../providers/sellers.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  formSellers: FormGroup;
  seller: Seller;

  constructor(private fb: FormBuilder, private cardsService: SellersService) {
    console.log('SellersComponent constructor');

    this.seller = new Seller();
    this.limpiarForm();

  }

  ngOnInit() {
  }

  limpiarForm() {
    this.seller = new Seller();

    this.formSellers = this.fb.group({
      nombreSeller: ['']
    });
  }

  submit() {

    this.mapearForm(this.formSellers);

    this.formSellers = this.fb.group({
      nombreSeller: ''
    });

    console.log(this.seller);
    (this.seller);

    //llamada al servicio
    this.cardsService.post(this.seller)
      .subscribe(data => {
        console.log('Se ha creado %o', data);
      }, error => {
        console.log('Error al crear seller');
      });
  }

  mapearForm(form) {
    
    this.seller.name = form.value.nombreSeller;
  }
}
