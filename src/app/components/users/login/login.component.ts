import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import * as ApplicationSettings from "tns-core-modules/application-settings";


@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  email: any;
  isLoggingIn = true;

  constructor(  ) {
  }

ngOnInit(): void {
  this.email = "nativescriptrocks@progress.com";
}

  submit() {
    alert("You’re using: " + this.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }




}
