import { Component } from '@angular/core';

@Component({
  selector: 'c-footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

    private date = new Date();

    public hour: number;
    public minute: number;
    public second: number;

    constructor(){

      setInterval(() => {
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
      }, 1);

    }; 

}