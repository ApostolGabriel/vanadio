import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { ColorBannerComponent } from './components/home/color-banner/color-banner.component';
import { LogoCardComponent } from './components/home/logo-card/logo-card.component';
import { SocialsComponent } from './components/socials/socials.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { ContactRegistrationComponent } from './components/contact-us/contact-registration/contact-registration.component';
import { ContactBannerComponent } from './components/contact-us/contact-banner/contact-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    EventsComponent,
    FooterComponent,
    HeaderMenuComponent,
    ColorBannerComponent,
    LogoCardComponent,
    SocialsComponent,
    PresentationComponent,
    ContactRegistrationComponent,
    ContactBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
