import { Routes } from '@angular/router';
import { AddTrip } from './add-trip/add-trip';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login'; // Import login component

export const routes: Routes = [
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip', component: EditTrip },
  { path: 'login', component: LoginComponent }, // Add login route
  { path: '', component: TripListing, pathMatch: 'full' }
];
