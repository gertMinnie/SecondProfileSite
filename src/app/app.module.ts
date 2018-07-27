import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';
import { GertMinnieComponent } from './gert-minnie/gert-minnie.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HobbiesComponent,
    SkillsComponent,
    GertMinnieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
