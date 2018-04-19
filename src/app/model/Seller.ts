import { CardStock } from "./CardStock";

export class Seller {
    id: number;
    name: string;
    stock: CardStock[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.stock = [];
    }
}