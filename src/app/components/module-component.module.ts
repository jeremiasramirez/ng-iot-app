import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule } from "@angular/material/button";
import { TvComponent } from './tv/tv.component';
import { IconComponent } from './icon/icon.component';
import { IconSpinnerComponent } from './icon-spinner/icon-spinner.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { BannerHomeComponent } from './banner-home/banner-home.component';


@NgModule({
  declarations: [
    

  TvComponent,
  IconComponent,
  IconSpinnerComponent,
  BannerHomeComponent

],

  imports: [
    MatSlideToggleModule,
    CommonModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [
    MatSlideToggleModule,
    TvComponent,
    MatButtonModule,
    MatSliderModule ,
    IconSpinnerComponent,
    BannerHomeComponent

  ]
})
export class ModuleComponent { }
