import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'tale', component: SliderComponent },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
