import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { ItemListComponent } from './item-list.component';
import { Item } from '../models/item';
import { ItemsAService } from '../items/items-a.service';
import { ItemsBService } from '../items/items-b.service';

const mockItems: Item[] = [{
  name: "Pacific Diamond Bicycle",
  prize: 876,
  location: "US-NC"
}, {
 name: "Harry Potter",
  prize: 41,
  location: "US-NC"
},
{
 name: "Game Of Thrones",
  prize: 90,
  location: "US-NC"
},
{
 name: "Chicken and Broccoli Pasta",
  prize: 10, 
  location: "US-NC"
},
{
 name: "Lenovo",
  prize: 800,
  location: "US-NC"
},
{
 name: "Fast Track",
  prize: 60,
  location: "US-NC"
}];

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
