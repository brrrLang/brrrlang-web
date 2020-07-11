import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { PageService } from '../page.service';
import {Page} from "../page";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {
  pageName: Page;
  constructor(private pageService: PageService, private ref: ChangeDetectorRef) {
    this.pageService.addPageChangeCallback(() => {
      this.pageName = this.pageService.getName();
      this.ref.detectChanges();
    });
  }

  ngOnInit(): void { }
}
