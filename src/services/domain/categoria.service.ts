import { CategoriaDTO } from './../../models/categoria.dto';
import { API_CONFIG } from './../../Config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriasService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}