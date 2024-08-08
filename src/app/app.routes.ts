import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotographerComponent } from './photographer/photographer.component';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {
        path: "", redirectTo: "photographer", pathMatch: "full"
    },
    {
        path: "photographer", component: HomeComponent
    }
];
