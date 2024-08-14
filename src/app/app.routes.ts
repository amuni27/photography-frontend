import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PhotographerComponent} from './photographer/photographer.component';
import {HomeComponent} from "./home/home.component";
import {ArtworkComponent} from "./artwork/artwork.component";
import {
  PhotographerRegistrationFormComponent
} from "./photographer-registration-form/photographer-registration-form.component";
import {PhotographersComponent} from "./photographers/photographers.component";
import {ArtworkRegistrationFormComponent} from "./artwork-registration-form/artwork-registration-form.component";

export const routes: Routes = [
  {
    path: "", redirectTo: "photographer", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "photographer/add", component: PhotographerRegistrationFormComponent
  },
  {
    path: "artwork/:id", component: ArtworkComponent
  },
  {
    path: "photographer", component: PhotographersComponent
  },
  {
    path: "photographer/:id", component: PhotographerComponent
  },

  {
    path: "artwork", component: ArtworkRegistrationFormComponent
  }
];
