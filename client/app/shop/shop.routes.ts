import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

import { ShopComponent } from './shop.component'
import { ModuleWithProviders } from '@angular/core'

export const routes: Routes =  [
    {
        path: '',
        component: ShopComponent,
        // canActivate: [AuthGuard],
        children : [
            // { path: 'childOne', component: ChildOneComponent }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        children : [
            // { path: 'childOne', component: ChildOneComponent }
        ]
    },
    {
        path: 'register',
        component: RegisterComponent,
        children : [
            // { path: 'childOne', component: ChildOneComponent }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);