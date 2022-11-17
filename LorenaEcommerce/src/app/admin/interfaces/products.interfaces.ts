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



