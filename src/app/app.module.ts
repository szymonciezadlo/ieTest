import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './one/one.component';
import { DataService } from './model/services/data.service';
import { TwoComponentComponent } from './two-component/two-component.component';
import { ExamplePipe } from './pipes/example.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponentComponent,
    ExamplePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
