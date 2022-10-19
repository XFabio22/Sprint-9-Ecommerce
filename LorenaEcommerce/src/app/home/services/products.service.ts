import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, of,tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class productsService {

    private Auth_URL = environment.BaseUrL


    constructor(private http:HttpClient) { }

}