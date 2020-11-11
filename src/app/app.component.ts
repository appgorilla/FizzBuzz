import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'fizzbuzz';

  public currentInput: number;
  public output: string;
  public inputList: number[] = []
  public fizzBuzzList: string[] = [];
  public startButton: boolean = false;

  addInputToList(value): void{



    this.inputList.push(value);

    this.startButton = this.inputList.length > 0 ? true : false;
  }


  start(): void {


    this.inputList.forEach((num) => {

        const threes = num % 3 === 0;
        const fives = num % 5 === 0;

        if(threes && fives){
          this.output = "fizzBuzz";
        } else if(threes){
          this.output = "Fizz";
        } else if(fives){
          this.output = "Buzz";
        } else if(!threes){
          this.output = num.toString() + " by 3";
        } else if(!fives){
          this.output = num.toString() + " by 5";
        } else {
          this.output =  num.toString() + "";
        }

       this.fizzBuzzList.push(this.output);
    });
  }

  clearNumList(): void {
    this.inputList = [];
  }

  clearResults(): void {
    this.fizzBuzzList = [];
  }

}
