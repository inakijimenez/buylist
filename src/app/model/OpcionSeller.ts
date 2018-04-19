import { OpcionCompra } from "./OpcionCompra";

export class OpcionSeller {
    compras: OpcionCompra[];
    envio: number;

    constructor(){
        this.compras=[];
        this.envio = -1;
    }
}