import { Pipe, PipeTransform } from "@angular/core";
import { DBProduct } from "../interfaces/products.interfaces";





@Pipe({
    name: 'imagen'
})

export class imgPipe implements PipeTransform{
    transform(item: DBProduct | any):string {
        return `../../../../assets/imgpastel/${item.img}.jpg`
    }
}