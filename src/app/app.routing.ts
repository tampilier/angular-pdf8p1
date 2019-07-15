import { Routes, RouterModule } from '@angular/router';

import { SubComponent } from './sub.component';

const appRoutes: Routes = [
    { path: '', component: SubComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);