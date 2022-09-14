import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { ItemsAService } from './items-a.service';
import { Item } from '../models/item';

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


describe('ItemsAService', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              HttpClientTestingModule
          ]
      });
      httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
      const service: ItemsAService = TestBed.inject(ItemsAService);
      expect(service).toBeTruthy();
  });

  it('should return items', inject([ItemsAService], fakeAsync((service: ItemsAService) => {
      let items: Item[] = [];
      service.getItemsA()
          .subscribe(data => items = data);
      const req = httpTestingController.expectOne(ItemsAService.baseURL);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockItems);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(items).toBeTruthy();
      expect(items.length).toBe(6);
      expect(items[0].name).toBe('Pacific Diamond Bicycle');
  })));

  it('should return an empty list if the REST request returns an empty list',
      inject([ItemsAService], fakeAsync((service: ItemsAService) => {
          let items: Item[] = [];
          service.getItemsA()
              .subscribe(data => items = data);
          const req = httpTestingController.expectOne(ItemsAService.baseURL);
          // Assert that the request is a GET.
          expect(req.request.method).toEqual('GET');
          // Respond with an empty list, causing Observable to resolve.
          req.flush([]);
          // Assert that there are no outstanding requests.
          httpTestingController.verify();
          // Cause all Observables to complete and check the results
          tick();
          expect(items.length).toBe(0);
      })));

/* FIXME: 2 errors below dont work

  it('should handle a 404 error', inject([ItemsAService], fakeAsync((service: ItemsAService) => {
      let errorResp: HttpErrorResponse;
      let errorReply: string = '';
      const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
      service.getItemsA()
          .subscribe({
              next: () => fail('Should not succeed'),
              error: (e) => errorReply = e
          });
      const req = httpTestingController.expectOne(ItemsAService.baseURL);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with error
      req.flush('Forced 404', {
          status: 404,
          statusText: 'Not Found'
      });
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(errorReply).toBe('Unable to contact service; please try again later.');
      expect(errorHandlerSpy).toHaveBeenCalled();
      errorResp = errorHandlerSpy.calls.argsFor(0)[0];
      expect(errorResp.status).toBe(404);
  })));

  it('should handle network error', inject([ItemsAService], fakeAsync((service: ItemsAService) => {
      let errorResp: HttpErrorResponse;
      let errorReply: string = '';
      const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
      service.getItemsA()
          .subscribe({
              next: () => fail('Should not succeed'),
              error: (e) => errorReply = e
          });
      const req = httpTestingController.expectOne(ItemsAService.baseURL);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Create mock ErrorEvent, raised when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc
      const mockError = new ErrorEvent('Network error', {
          message: 'simulated network error',
      });
      // Respond with mock error
      req.error(mockError);
      // Respond with error
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(errorReply).toBe('Unable to contact service; please try again later.');
      expect(errorHandlerSpy).toHaveBeenCalled();
      errorResp = errorHandlerSpy.calls.argsFor(0)[0];
      expect(errorResp.error.message).toBe('simulated network error');

      console.log(errorResp);

  })));

  */

});
