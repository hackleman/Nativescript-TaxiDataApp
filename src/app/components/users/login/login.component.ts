import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../../../shared/user/user';
import { UserService } from '../../../shared/user/user.service';

@Component({
    selector: "gr-main",
    providers: [UserService],
    templateUrl: 'app/components/users/login/login.component.html',
    styleUrls: ['app/components/users/login/css/login.component.css', 'app/components/users/login/css/login.css']
})
export class LoginComponent {

    public email = 'hackleman.jason@gmail.com';
    public isLoggingIn = true;
    public user: User;

    constructor(
        private userService: UserService,
        private router: Router
        ) {
        this.user = new User();
    }
    
    public submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    private login() {

         this.userService.authenticate(this.user)
         .subscribe(
             () => this.router.navigate(['/List']),
             (error) => {
                 console.log(error);
                 alert('Unfortunately we could not find your account.');
             }
         );
    }
    
    private signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert('Your account was succesfully created');
                    this.toggleDisplay();
                },
                () => alert('Unfortunately we are unable to create your account')
            );
    }
}