import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// GENERIC IONIC
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// COMPONENTS
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';
import { CurrentDateComponent } from '../components/c-currentDate/c-currentDate';

//PIPES
import { TransformDate } from '../pipes/transformDate.pipe';


@NgModule({
  declarations: [
    MyApp,
    TransformDate,
    HeaderComponent,
    FooterComponent,
    CurrentDateComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
