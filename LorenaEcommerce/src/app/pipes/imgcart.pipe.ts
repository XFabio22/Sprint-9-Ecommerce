import { Pedido } from './../admin/interfaces/pedidos.interfaces';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'imgCart'
})

export class imgCart implements PipeTransform{
    transform(item: Pedido ):string {
        return `../../assets/imgpastel/${item.img}.jpg`
    }
}