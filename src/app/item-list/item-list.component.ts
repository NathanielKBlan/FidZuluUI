import { Component, OnInit } from '@angular/core';
import { ItemsAService } from '../items/items-a.service';
import { ItemsBService } from '../items/items-b.service';

import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  //items to be displayed
  items: Item[] = [];

  //items from the 2 services
  itemsA: Item[] = [];
  itemsB: Item[] = [];

  serviceErrorMessage: string = '';

  constructor(private itemsAService: ItemsAService, 
              private itemsBService: ItemsBService) { }

  ngOnInit(): void {
    this.getItemsA();
    this.getItemsB();

    this.items = this.itemsA.concat(this.itemsB);
  }

  getItemsA() {
    this.itemsAService.getItemsA()
      .subscribe({
          next: data => {
              this.itemsA = data;
              this.serviceErrorMessage = '';
          },
          error: e => this.serviceErrorMessage = e
      });
  }

  //FIXME: implement service B
  getItemsB() {
    this.itemsBService.getItemsB()
      .subscribe({
          next: data => {
              this.itemsB = data;
              this.serviceErrorMessage = '';
          },
          error: e => this.serviceErrorMessage = e
      });
  }

  //Methods for buttons to get specific items //

  //from service A
  getBikes(){
    this.itemsAService.getBikes()
    .subscribe(data => this.items = data)
  }
  
  getFoods() {
    this.itemsAService.getFoods()
        .subscribe(data => this.items = data)
  }

  getToys() {
    this.itemsAService.getToys()
    .subscribe(data => this.items = data)
  }

  //from service B
  getBooks() {
    this.itemsBService.getBooks()
        .subscribe(data => this.items = data)
  }

  getDVDs() {
    this.itemsBService.getDVDs()
    .subscribe(data => this.items = data)
  }

  getLaptops(){
    this.itemsBService.getLaptops()
    .subscribe(data => this.items = data)
  }

}
