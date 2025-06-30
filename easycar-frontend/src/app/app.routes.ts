
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnnonceDetailComponent } from './pages/annonce-detail/annonce-detail.component';
import { AnnonceCreateComponent } from './pages/annonce-create/annonce-create.component';
import { AnnonceEditComponent } from './pages/annonce-edit/annonce-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent },
  { path: 'nouvelle-annonce', component: AnnonceCreateComponent },
  { path: 'modifier-annonce/:id', component: AnnonceEditComponent }
];
