import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

// import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // },
    // {
    //     path: 'gymregister',
    //     //canActivate: [AuthGuard],
    //     component: GymDetailsComponent
    // },
    // {
    //     path: 'dashboard',
    //     //canActivate: [AuthGuard],
    //     component: DashboardComponent
    // },
    // { path: 'userDetails/:id', component: UserDetailsComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
