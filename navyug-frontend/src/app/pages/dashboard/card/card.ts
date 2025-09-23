import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() name!: string;
  @Input() description!: string;
  @Input() id!: number;
  @Input() tag!: string;

  handleClick(id: number, tag: string) {
    console.log(id, tag);
  }
}
