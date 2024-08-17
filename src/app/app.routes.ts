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
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {UpdatePhotographerComponent} from "./update-photographer/update-photographer.component";
import {UpdateArtworkComponent} from "./update-artwork/update-artwork.component";
import {ErrorpageComponent} from "./errorpage/errorpage.component";
import {environment} from "../environments/environment";

export const routes: Routes = [
  {
    path: "", redirectTo: environment.PHOTOGRAPHER_LIST_URL, pathMatch: "full"
  },
  {
    path: environment.LOGIN_URL, component: LoginComponent
  },
  {
    path: environment.SIGNUP_URL, component: RegistrationComponent
  },
  {
    path: environment.PHOTOGRAPHER_ADD_URL, component: PhotographerRegistrationFormComponent
  },
  {
    path: environment.ARTWORK_ADD_URL, component: ArtworkRegistrationFormComponent
  },
  {
    path: environment.PHOTOGRAPHER_UPDATE_URL, component: UpdatePhotographerComponent
  },
  {
    path: environment.ARTWORK_URL, component: ArtworkComponent
  },
  {
    path: environment.ARTWORK_UPDATE_URL, component: UpdateArtworkComponent
  },
  {
    path: environment.PHOTOGRAPHER_LIST_URL, component: PhotographersComponent
  },
  {
    path: environment.ARTWORK_LIST_URL, component: PhotographerComponent
  },
  {
    path: environment.NOTFOUND_URL, component: ErrorpageComponent
  }
];
