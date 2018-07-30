import { GertMinnieComponent } from './gert-minnie/gert-minnie.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/gert-minnie', pathMatch: "full"},
  { path: 'gert-minnie', component: GertMinnieComponent},
  { path: 'hobbies', component: HobbiesComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'contact', component: ContactComponent},

]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
