import { Geolocation } from "@ionic-native/geolocation";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "c-geolocation",
  templateUrl: "c-geolocation.html"
})

export class GeolocationComponent {
  
    coord: string = "";

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    
    this.getCurrentPosition(); // First call function

    // Check geolocation every 5 minutes
    setInterval(() => {
      this.getCurrentPosition();
    }, 300000);
    
  }

  getCurrentPosition() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.coord = "Lat:" + resp.coords.latitude;
        console.log(this.coord);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

}
