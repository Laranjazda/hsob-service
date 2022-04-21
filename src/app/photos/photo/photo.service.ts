import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

const API = 'http://localhost:2020/api/';

@Injectable({providedIn: 'root'})
export class PhotoService {
    constructor(private http:HttpClient){}

    listFromModule(module: string){
        return this.http
        .get<any[]>(API + 'photos/get-photo-list')
    }
}