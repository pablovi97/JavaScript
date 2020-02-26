import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PokemonsModule } from './pokemons/pokemons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { SharedModule } from './shared/shared.module';
// import { CoreModule } from './core/core.module';
// import { PublicModule } from './public/public.module';
import { CommonLayoutModule } from './common-layout/common-layout.module';
// import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // PokemonsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // SharedModule,
    // CoreModule,
    // PublicModule,
    CommonLayoutModule,
    // LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
