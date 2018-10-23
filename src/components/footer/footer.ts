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
        this.hour = formatDate(this.date.getHours());
        this.minute = formatDate(this.date.getMinutes());
        this.second = formatDate(this.date.getSeconds());
      }, 1);

    }; 

}

/**
 * Check if the hour & minute & second is < 10 to format it and put a 0 in front
 * of it.
 * @param a 
 * @return a 
 */
function formatDate(a) : number{
  return a = (a < 10) ? ("0" + a) : a;
}
