import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
