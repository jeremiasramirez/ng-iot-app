import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from 'src/app/components/module-component.module';
import { HomePage } from './home/home.component';
import { ROUTES } from '../routes/app.routing';
import { StartPage } from './start/start.component';
 



@NgModule({
  declarations: [
    HomePage,
    StartPage
  ],
  imports: [
    CommonModule,
    ROUTES,
    ModuleComponent
  ],
  exports: [
    HomePage,
    StartPage,
    ROUTES,
    ModuleComponent,
   
  ]
})
export class PagesModule { }
