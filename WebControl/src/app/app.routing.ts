import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthenComponent } from './authen/authen.component';
import { NetpieComponent } from './netpie/netpie.component';
import { DeviceComponent } from './device/device.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    { path: '', component: AuthenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'netpie', component: NetpieComponent },
    { path: 'device', component: DeviceComponent },
    { path: 'user', component: UserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);