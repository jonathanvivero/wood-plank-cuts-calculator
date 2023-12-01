import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { DefaultSideBarComponent } from './features/side-bar/default-side-bar/default-side-bar.component';
import { CalculatorPageComponent } from './features/calculator/pages/calculator-page/calculator-page.component';

export const routes: Routes = [
    {path:'home', component: HomePageComponent},
    {path:'calculator', component: CalculatorPageComponent},
    //Sidebar component
    {path:'default', component: DefaultSideBarComponent, outlet:'sidebar' },    
    //redirections
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '', redirectTo: '/default', pathMatch: 'full', outlet:'sidebar'}
];
