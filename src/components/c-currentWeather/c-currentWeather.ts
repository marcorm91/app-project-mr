import { WeatherServiceProvider } from './../../providers/weather-service/weather-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'c-currentWeather',
  templateUrl: 'c-currentWeather.html',
})
export class CurrentWeatherComponent {

  constructor(public navCtrl: NavController, public WeatherServiceProvider: WeatherServiceProvider) {

  }

  ionViewDidLoad(){
    // this.WeatherServiceProvider.getLocation()
  }

}
