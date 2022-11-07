import { Pipe, PipeTransform } from "@angular/core";
import { DBProduct } from "src/app/admin/interfaces/products.interfaces";






@Pipe({
    name: 'img'
})

export class imgPipe2 implements PipeTransform{
    transform(item: DBProduct ):string {
        return `../../../../assets/imgpastel/${item.img}.jpg`
    }
}