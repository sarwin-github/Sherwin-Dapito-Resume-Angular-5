import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { ChartModule } from 'primeng/chart';
import { MainModule } from './shared/main.module';
import { SeoService } from './shared/services/seo/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MainModule,
    SharedModule
  ],
  providers: [SeoService, { provide: 'WINDOW', useFactory: getWindow }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getWindow() {
  return (typeof window !== 'undefined') ? window : null;
}
