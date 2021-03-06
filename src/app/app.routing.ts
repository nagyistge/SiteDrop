import { CreateSiteComponent } from './dashboard/create-site/create-site.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './authentication/auth.guard';
import { ProfileComponent } from './authentication/profile/profile.component';
import { SignupComponent } from './authentication/signup.component';
import { LoginComponent } from './authentication/login.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateSiteComponent, canActivate: [AuthGuard] },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
