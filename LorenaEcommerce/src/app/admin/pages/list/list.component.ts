
import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from '../../interfaces/products.interfaces';
import { productsService } from '../../services/products.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private productsService:productsService,) { }

  // DELETE PRODUCTS
  productDelete(_id:string){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro',
      text: "El prodcuto se eliminara permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminalo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProdcuts(_id)
        .subscribe((res:ProductsResponse)=>{
        })
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'El producto se elimnino correctamnete',
          'success'
        )
       // window.location.reload();//recarga la pagina actual
    
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Tu prodcuto NO se a elimnado :)',
          'error'
        )
      }
    })
  }



  productos:DBProduct[]=[]
  ngOnInit(): void {
    this.productsService.getListProdcuts()
    .subscribe((res:ProductsResponse)=>{
      this.productos.push(...res.dbProduct);
    });
  }



}
