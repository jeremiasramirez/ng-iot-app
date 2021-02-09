import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from 'src/app/components/module-component.module';
import { HomePage } from './home/home.component';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ModuleComponent
  ],
  exports: [
    HomePage,
    ModuleComponent
  ]
})
export class PagesModule { }
