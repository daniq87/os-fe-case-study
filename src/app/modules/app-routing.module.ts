import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllEventsComponent} from '../components/all-events/all-events.component';
import {MyEventsComponent} from '../components/my-events/my-events.component';

const routes: Routes = [
  {path: '', redirectTo: '/myEvents', pathMatch: 'full'},
  {path: 'allEvents', component: AllEventsComponent},
  {path: 'myEvents', component: MyEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
