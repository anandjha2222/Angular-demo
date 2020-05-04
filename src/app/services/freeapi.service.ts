import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Posts } from "../classes/posts";

@Injectable()
export class freeApiService{

    constructor(private httpClient: HttpClient){}

    // getComments(): Observable<any>{
    //     return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    // }

    // getCommentsbyParam() : Observable<any>{
    //     let param1 = new HttpParams().set('userId', "1");
    //     return this.httpClient.get("https://jsonplaceholder.typicode.com/posts", {params: param1})
    // }


    // post(opost:Posts): Observable<any>{
    //     return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", opost);
    // }

    post(opost:Posts): Observable<any>{
        return this.httpClient.post("http://localhost:8080/hello", opost);
    }

}