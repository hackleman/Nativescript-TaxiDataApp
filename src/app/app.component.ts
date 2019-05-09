import { Component } from "@angular/core";
import { User } from './shared/user/user';
import { UserService } from './shared/user/user.service';

@Component({
    selector: "ns-app",
    providers: [UserService],
    moduleId: module.id,
    templateUrl: "./app.component.html"
})


export class AppComponent {
  
    constructor() {
    }
}

