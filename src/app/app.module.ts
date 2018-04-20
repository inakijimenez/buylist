import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { CartasFormComponent } from './components/cartas-form/cartas-form.component';


//Services
import { CardsService } from './providers/cards.service';
import { WantsService } from './providers/wants.service';
import { SellersService } from './providers/sellers.service';


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
  providers: [CardsService, SellersService, WantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//TODO importar services