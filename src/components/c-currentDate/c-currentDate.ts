import { Component } from '@angular/core';

@Component({
  selector: 'c-currentDate',
  templateUrl: 'c-currentDate.html'
})
export class CurrentDateComponent {

    private date = new Date();

    public hour: number;
    public minute: number;

    constructor(){

      setInterval(() => {
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
      }, 1);

    }; 

}