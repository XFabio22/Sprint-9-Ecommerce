export interface AuthResponse {
    ok:boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?:string,
    admin :boolean
}
export interface Usuario{
    uid:string;
    name:string;
    admin:boolean
}