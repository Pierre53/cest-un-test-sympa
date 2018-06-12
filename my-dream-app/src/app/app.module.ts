import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HAPsComponent } from './haps/haps.component';
import { HapDetailComponent } from './hap-detail/hap-detail.component';
import { HapService } from './_services/hap.service';
import { RouterModule, Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { HapComponent } from './hap/hap.component';
import { PrecedentComponent } from './precedent/precedent.component';
import { SuivantComponent } from './suivant/suivant.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { WebComponent } from './web/web.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [{ path: '', component: HAPsComponent }, { path: 'hello', component: HelloComponent },
{ path: 'projets', component: ProjetsComponent }, { path: 'presentation', component: PresentationComponent },
{ path: 'localisation', component: LocalisationComponent }, { path: 'hap/:id', component: HapComponent },
{ path: 'extraction', component: ExtractionComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    HAPsComponent,
    HapDetailComponent,
    ProjetsComponent,
    PresentationComponent,
    LocalisationComponent,
    HapComponent,
    PrecedentComponent,
    SuivantComponent,
    ExtractionComponent,
    WebComponent,
    TestComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [HapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
