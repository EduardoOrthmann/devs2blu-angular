import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FirstExercisesListComponent } from './components/first-exercises-list/first-exercises-list.component';
import { SaveProductComponent } from './components/save-product/save-product.component';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    HeaderComponent,
    HomeComponent,
    FirstExercisesListComponent,
    SaveProductComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
