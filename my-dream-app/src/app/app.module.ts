import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HAPsComponent } from './haps/haps.component';
import { HapDetailComponent } from './hap-detail/hap-detail.component';
import { HapService } from './_services/hap.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    HAPsComponent,
    HapDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
