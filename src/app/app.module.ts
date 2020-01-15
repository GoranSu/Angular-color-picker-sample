import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponentComponent } from './card-component/card-component.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
  imports:      [
     BrowserModule, 
     FormsModule, 
     MatCardModule, 
     FlexLayoutModule, 
     MatButtonModule ,
     MatToolbarModule, 
     MatExpansionModule, 
     BrowserAnimationsModule,
     MatIconModule, 
     MatTooltipModule
     ],
  declarations: [ AppComponent, CardComponentComponent, ColorPickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
