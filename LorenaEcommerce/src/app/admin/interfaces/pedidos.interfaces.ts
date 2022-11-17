export interface arrayPedidos {
    ok?: boolean;
    dbPedido: DbPedido[];
  }
  
  export interface DbPedido {
    _id: string;
    pedidos: Pedido[];
    __v: number;
    userName: string ;
    userUid: string;
    date: string;
  }
  export interface Pedido {
    tematica: string;
    nameCumpleanero: string;
    sabores: string;
    zise: string;

    horaDeRecogida: string;
    cantidad: number;
    name: string;
    img: string;
    price: number;
    total: number;
    descripcion: string;
    year: number;
    month: number;
    day: number;
  }
  
  export interface FechaDeRecogida {
    year: number;
    month: number;
    day: number;
  }



