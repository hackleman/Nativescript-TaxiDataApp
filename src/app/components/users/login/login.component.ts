import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../../../shared/user/user';
import { UserService } from '../../../shared/user/user.service';

@Component({
    selector: "gr-main",
    providers: [],
    templateUrl: 'app/components/users/login/login.component.html',
    styleUrls: ['app/components/users/login/css/login.component.css', 'app/components/users/login/css/login.css']
})
export class LoginComponent {

    public email = 'hackleman.jason@gmail.com';
    public isLoggingIn = true;
    public user: User;

    constructor( ) {
        this.user = new User();
    }
    
    public submit() {
        alert('You\'re using: ' + this.email);
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}