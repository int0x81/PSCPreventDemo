import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { InteractiveZeaLogoComponent } from './navbar/interactive-zea-logo/interactive-zea-logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MlModelCardComponent } from './sidebar/ml-model-card/ml-model-card.component';
import { GlobalEventService } from './services/implementations/globalevent.service';
import { MlModelDirective } from './sidebar/mlmodel.directive';
import { InfoPointComponent } from './navbar/info-point/info-point.component';
import { InfoModalComponent } from './navbar/info-modal/info-modal.component';
import { DarkModeToggleComponent } from './navbar/dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeService } from './services/implementations/darkmode.service';
import { ShipService } from './services/implementations/ship.service';
import { PortStayService } from './services/implementations/portstay.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MLModelService } from './services/implementations/mlmodel.service';
import { CrassusModule } from './crassus/crassus.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShipMock } from './services/mocks/ship.service.mock';
import { PortStayMock } from './services/mocks/portstay.service.mock';
import { StartupInfoModalComponent } from './startup-info-modal/startup-info-modal.component';
import { AtratinusModule } from './atratinus/atratinus.module';
import { MerendaModule } from './merenda/merenda.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InteractiveZeaLogoComponent,
    SidebarComponent,
    MlModelCardComponent,
    InfoPointComponent,
    InfoModalComponent,
    DarkModeToggleComponent,
    PageNotFoundComponent,

    MlModelDirective,

    StartupInfoModalComponent,

    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CrassusModule,
    AtratinusModule,
    MerendaModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [MlModelCardComponent, InfoModalComponent, StartupInfoModalComponent],
  providers: [
    PortStayMock, 
    MLModelService,
    ShipMock,
    GlobalEventService, 
    DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
