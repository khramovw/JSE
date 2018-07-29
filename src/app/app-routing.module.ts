import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TimeModuleComponent } from './components/time-module/time-module.component';
import { CountdownModuleComponent } from './components/countdown-module/countdown-module.component';
import { HelloComponent } from './hello/components/hello/hello.component';

const routes: Routes = [
  {path: '', redirectTo: '/time', pathMatch: 'full'},
  {path: 'time', component: TimeModuleComponent},
  {path: 'count', component: CountdownModuleComponent},
  {path: 'hello', component: HelloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
