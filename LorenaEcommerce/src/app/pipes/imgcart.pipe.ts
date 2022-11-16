import { Pedido } from './../admin/interfaces/products.interfaces';
import { Pipe, PipeTransform } from "@angular/core";
import { DBProduct } from "src/app/admin/interfaces/products.interfaces";






@Pipe({
    name: 'imgCart'
})

export class imgCart implements PipeTransform{
    transform(item: Pedido ):string {
        return `../../assets/imgpastel/${item.img}.jpg`
    }
}