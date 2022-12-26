import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  squares:any = [];
  xIsNext = true;
  winner =  '';
  counter = 0;
  isdraw = '';
  newgame = true
  constructor() { }

  ngOnInit(): void {
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isdraw = '';
    this.counter = 0;
    this.newgame = false;
  }
  get player(){
    return this.xIsNext?'X':'O'
  }

  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player)
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
    this.winner=this.calWinner();
    if(!this.winner && this.counter == 9){
      this.isdraw = 'yes'
    }
  }

  calWinner(){
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],//row
      [0,3,6],[1,4,7],[2,5,8],//col
      [0,4,8],[2,4,6] //diagonal
    ]
    for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a];
      }
    }
    return null;
  }
}