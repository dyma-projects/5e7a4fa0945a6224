import { Component, OnInit ,EventEmitter , Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input()  compteur2 : number ;
  @Output() public calc:EventEmitter<number> = new EventEmitter<number>() ;
  public compteur : number = 0 ;


  constructor() { }

  
  incrementer() : void {
    this.compteur ++ ;
    this.calc.emit( this.compteur ) ;
  }

  decrementer() : void {
    this.compteur -- ;
    this.calc.emit( this.compteur ) ;
  }

  ngOnInit() {
  }

}
