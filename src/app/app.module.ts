import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { CartasFormComponent } from './components/cartas-form/cartas-form.component';


//Services
import { CardsService } from './services/cards.service';
import { WantsService } from './services/wants.service';
import { SellersService } from './services/sellers.service';


@NgModule({
  declarations: [
    AppComponent,
    CartasFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//TODO importar services