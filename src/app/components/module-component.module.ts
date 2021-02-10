import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from "@angular/material/button";
import { FanComponent } from './fan/fan.component';
import { LightComponent } from './light/light.component';
import { ConditionerComponent } from './conditioner/conditioner.component';
import { TvComponent } from './tv/tv.component';
import { IconComponent } from './icon/icon.component';
import { IconSpinnerComponent } from './icon-spinner/icon-spinner.component'
 

@NgModule({
  declarations: [
    

  TvComponent,
  IconComponent,
  IconSpinnerComponent

],

  imports: [

    CommonModule,
    MatButtonModule
  
  ],
  exports: [

    TvComponent,
    MatButtonModule 

  ]
})
export class ModuleComponent { }
