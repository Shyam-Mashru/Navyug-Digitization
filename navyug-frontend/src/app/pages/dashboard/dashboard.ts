import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { Card } from './card/card';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar,Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  allModule: { id: number, name: string, description: string, tag: string, anualPrice: number, montlyPrice: number }[] = [];
  moduleSubscribed: { id: number, name: string, description: string, tag: string, anualPrice: number, montlyPrice: number }[] = [];
  moduleUnsubscribed: { id: number, name: string, description: string, tag: string, anualPrice: number, montlyPrice: number }[] = [];
  
  constructor() {
    this.allModule = [
      { id: 1, name: 'Module 1', description: 'Description for Module 1', tag: 'subscribed', anualPrice: 1200, montlyPrice: 120 },
      { id: 2, name: 'Module 2', description: 'Description for Module 2', tag: 'unsubscribed', anualPrice: 1500, montlyPrice: 150 },
      { id: 3, name: 'Module 3', description: 'Description for Module 3', tag: 'unsubscribed', anualPrice: 1800, montlyPrice: 180 },
      { id: 4, name: 'Module 4', description: 'Description for Module 4', tag: 'unsubscribed', anualPrice: 2000, montlyPrice: 200 },
      { id: 5, name: 'Module 5', description: 'Description for Module 5', tag: 'unsubscribed',  anualPrice: 2500, montlyPrice: 250 },
      { id: 6, name: 'Module 6', description: 'Description for Module 6', tag: 'unsubscribed',  anualPrice: 3000, montlyPrice: 300 }
    ]
    this.moduleSubscribed = this.allModule.filter(module => module.tag === 'subscribed');
    this.moduleUnsubscribed = this.allModule.filter(module => module.tag === 'unsubscribed');
  }
}
