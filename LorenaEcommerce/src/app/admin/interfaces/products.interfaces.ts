export interface ProductsResponse {
    ok:        boolean;
    dbProduct: DBProduct[];
}

export interface DBProduct {
    _id:         string;
    name:        string;
    descripcion: string;
    img:         string;
    price:       string;
    discount:    string;
    __v:         number;
}
