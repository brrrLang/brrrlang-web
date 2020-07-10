import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private page: String;
  private headerCallback: () => void;
  constructor() { }
  
  setName(name: String) {
    this.page = name;
    this.headerCallback();
  }

  getName(): String {
    return this.page;
  }

  setCallback(callback: () => void) {
    this.headerCallback = callback;
  }
}
