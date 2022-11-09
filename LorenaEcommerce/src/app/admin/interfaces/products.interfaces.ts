export interface ProductsResponse {
    ok:        boolean;
    dbProduct: DBProduct[];
}
    export interface DBProduct {
    __v:         number;
    _id:         string;
    category:    string;
    descripcion: string;
    discount?:   number;
    img:         string;
    name:        string;
    price:       number;
    msg?:         string
    }




export interface AddProduct {
    category:    string;
    descripcion: string;
    discount:    string;
    img:         string;
    name:        string;
    ok:          boolean;
    price:       string;
    uid:         string;
    msg:         string
}


export interface arrayPedidos {
    ok?: boolean;
    dbPedido: DbPedido[];
  }
  
  export interface DbPedido {
    _id?: string;
    pedidos: productoAnadido[];
    __v?: number;
  }
  
  export interface productoAnadido {
    tematica: string;
    nameCumpleanero: string;
    sabores: string;
    zise: string;
    fechaDeRecogida: string;
    horaDeRecogida: string;
    cantidad: number;
    name: string;
    img: string;
    price: number;
    total: number;
    descripcion: string;
  }
