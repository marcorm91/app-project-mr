import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// GENERIC IONIC
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// COMPONENTS
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { CurrentDateComponent } from '../components/c-currentDate/c-currentDate';
import { CurrentWeatherComponent } from './../components/c-currentWeather/c-currentWeather';
import { GeolocationComponent } from './../components/c-geolocation/c-geolocation';

// PIPES
import { TransformDate } from '../pipes/transformDate.pipe';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';


@NgModule({
  declarations: [
    MyApp,
    TransformDate,
    HeaderComponent,
    FooterComponent,
    CurrentDateComponent,
    CurrentWeatherComponent,
    GeolocationComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherServiceProvider
  ]
})
export class AppModule {}
