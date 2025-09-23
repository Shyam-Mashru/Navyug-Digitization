import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-subscriptions',
  imports: [Navbar],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.scss'
})
export class Subscriptions {
  allModule: { id: number, name: string, description: string, tag: string, anualPrice: number, montlyPrice: number }[] = [];
  billingType: string = 'monthly';
  selectedModules: { id: number, name: string, description: string, tag: string, anualPrice: number, montlyPrice: number }[] = [];
  totalPrice: number = 0;
  constructor() {
    this.allModule = [
      { id: 1, name: 'Module 1', description: 'Description for Module 1', tag: 'subscribed', anualPrice: 1200, montlyPrice: 120 },
      { id: 2, name: 'Module 2', description: 'Description for Module 2', tag: 'unsubscribed', anualPrice: 1500, montlyPrice: 150 },
      { id: 3, name: 'Module 3', description: 'Description for Module 3', tag: 'unsubscribed', anualPrice: 1800, montlyPrice: 180 },
      { id: 4, name: 'Module 4', description: 'Description for Module 4', tag: 'unsubscribed', anualPrice: 2000, montlyPrice: 200 },
      { id: 5, name: 'Module 5', description: 'Description for Module 5', tag: 'unsubscribed',  anualPrice: 2500, montlyPrice: 250 },
      { id: 6, name: 'Module 6', description: 'Description for Module 6', tag: 'unsubscribed',  anualPrice: 3000, montlyPrice: 300 }
    ]
  }

  handleClick(billingType: string) {
    this.billingType = billingType;
    this.calculateTotal()
  }

  onCheckboxChange(event: any, moduleId: number) {
    const checkbox = event.target as HTMLInputElement;

    const module = this.allModule.find(m => m.id === moduleId);
    if (!module) return;

    if (checkbox.checked) {
      if (!this.selectedModules.some(m => m.id === moduleId)) {
        this.selectedModules.push(module);
      }
    } else {
    this.selectedModules = this.selectedModules.filter(m => m.id !== moduleId);
    }
    this.calculateTotal()
  }

  calculateTotal() {
    if(this.billingType === 'monthly'){
      this.totalPrice = this.selectedModules.reduce((sum, m) => sum + m.montlyPrice, 0);
    } else {
      this.totalPrice = this.selectedModules.reduce((sum, m) => sum + m.anualPrice, 0);
    }
  }
}
