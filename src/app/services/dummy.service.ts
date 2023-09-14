import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  public sayHi(): void {
    console.log('DummyService says Hi!!');
  }
}
