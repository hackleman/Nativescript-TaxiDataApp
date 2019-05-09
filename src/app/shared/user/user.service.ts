import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../config';

@Injectable()

export class UserService {

    constructor(private http:HttpClient) {    }

    public register(user: User) {
       return this.http.post(
           Config.apiUrl + 'register',
            JSON.stringify({
                name: "Appname_id",
                email: user.email,
                username: user.email,
                password: user.password
            }),
            {headers: this.getCommonHeaders() })
    }

    public authenticate(user: User) {
        console.log(user);
        return this.http.post(
            Config.apiUrl,
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        )
     }


    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });


    }
}