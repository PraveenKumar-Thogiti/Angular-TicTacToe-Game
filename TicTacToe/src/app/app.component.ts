import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  squareList= new Array(9);
  isXNext= true;


  setValue(i: any){
    console.log('test');
    
    if(this.squareList[i] || this.calculateWinner()){
      return;
    }
    if(this.isXNext){
      this.squareList[i]="X";
    } else {
      this.squareList[i]="0";
    }
    this.isXNext=!this.isXNext;
  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if ( this.squareList[a] &&  this.squareList[a] ===  this.squareList[b] &&  this.squareList[a] ===  this.squareList[c]) {
        return  this.squareList[a];
      }
    }
    return null;
  }
}
