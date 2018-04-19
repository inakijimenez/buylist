import { Card } from "./Card";

export class OpcionCompra {
    card: Card;
    cantidad: number;
    
    constructor(card: Card, cantidad: number) {
        this.card = card;
        this.cantidad = cantidad;
    }
}