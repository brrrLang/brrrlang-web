import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Page} from "./page"

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private page: Page;
  private headerCallback: () => void = undefined;
  constructor(private titleService: Title) {
    this.headerCallback = () => {}
  }

  setName(name: Page) {
    this.page = name;
    this.headerCallback();
    this.titleService.setTitle(name.toString() + " - brrrLang");
  }

  getName(): Page {
    return this.page;
  }

  addPageChangeCallback(callback: () => void) {
    if (this.headerCallback == undefined) {
      this.headerCallback = () => {
        callback();
      }
    } else {
      let prevCallback = this.headerCallback;
      this.headerCallback = () => {
        prevCallback();
        callback();
      }
    }
  }
}
