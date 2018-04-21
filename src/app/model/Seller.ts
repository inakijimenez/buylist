import { CardStock } from "./CardStock";

export class Seller {
    id: number;
    name: string;
    stock: CardStock[];

    constructor() {        
        this.name = '';
        this.stock = [];
    }
}