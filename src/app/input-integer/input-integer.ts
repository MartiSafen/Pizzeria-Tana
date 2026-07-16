import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-integer.html',
  styleUrls: ['./input-integer.css'],
})
export class InputInteger implements OnInit {

constructor() {}
@Input()
 quantity!: number;

 @Input()
 max!: number;

 @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();  

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}
upQuantity() :void{ 
    if(this.quantity <this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Cantidad máxima alcanzada");
    }
}
downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }


  changeQuantity(): void {
  console.log(this.quantity);
  this.quantityChange.emit(this.quantity);
  }
}