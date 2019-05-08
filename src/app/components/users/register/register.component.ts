import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import * as ApplicationSettings from "tns-core-modules/application-settings";


@Component({
  selector: "register",
  moduleId: module.id,
  templateUrl: "./register.component.html",
})

export class RegisterComponent implements OnInit {
    
  constructor( location: Location ) {
  }

ngOnInit(): void {
    
}



}
