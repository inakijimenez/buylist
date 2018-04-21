import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Card } from '../../model/Card';
import { CardsService } from '../../providers/cards.service';

@Component({
  selector: 'app-cartas-form',
  templateUrl: './cartas-form.component.html',
  styleUrls: ['./cartas-form.component.scss']
})
export class CartasFormComponent implements OnInit {

  formCartas: FormGroup;
  carta: Card;

  constructor(private fb: FormBuilder, private cardsService: CardsService) {
    console.log('CartasFormComponent constructor');

    this.carta = new Card();
    this.limpiarForm();

  }

  ngOnInit() {
  }

  limpiarForm() {
    this.carta = new Card();

    this.formCartas = this.fb.group({
      nombreCarta: ['']
    });
  }

  submit() {

    this.mapearForm(this.formCartas);

    this.formCartas = this.fb.group({
      nombreCarta: ''
    });

    console.log(this.carta);
    (this.carta);

    //llamada al servicio
    this.cardsService.post(this.carta)
      .subscribe(data => {
        console.log('Se ha creado %o', data);
      }, error => {
        console.log('Error al crear carta');
      });
  }

  mapearForm(form) {
    
    this.carta.name = form.value.nombreCarta;
  }
}
