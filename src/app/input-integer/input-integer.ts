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

  @Input() quantity: number = 0;
  @Input() max: number = 0;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() maxReached = new EventEmitter<string>();

  ngOnInit(): void {}

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzó el máximo de stock');
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(): void {
    this.quantityChange.emit(this.quantity);
  }
}