import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from "@angular/material/button";
import { FanComponent } from './fan/fan.component';
import { LightComponent } from './light/light.component';
import { ConditionerComponent } from './conditioner/conditioner.component';
import { TvComponent } from './tv/tv.component'
 

@NgModule({
  declarations: [
    
  FanComponent,
  LightComponent,
  ConditionerComponent,
  TvComponent

],

  imports: [

    CommonModule,
    MatButtonModule
  
  ],
  exports: [
    
    FanComponent,
    LightComponent,
    ConditionerComponent,
    TvComponent,
    MatButtonModule 

  ]
})
export class ModuleComponent { }
