import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./components/item/items.component";
import { ItemDetailComponent } from "./components/item/item-detail.component";
import { CreateComponent } from "./components/create/create.component";
import { ListComponent } from "./components/list/list.component";
import { LoginComponent } from "./components/users/login/login.component";
import { RegisterComponent } from "./components/users/register/register.component";


const routes: Routes = [
    { path: "", redirectTo: "/Login", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "Create", component: CreateComponent},
    { path: "List", component: ListComponent},
    { path: "Login", component: LoginComponent},
    { path: "Register", component: RegisterComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
