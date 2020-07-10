import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {
  pageName: String;
  constructor(private pageService: PageService, private ref: ChangeDetectorRef) {
    this.pageService.setCallback(() => {
      this.pageName = this.pageService.getName();
      this.ref.detectChanges();
      console.log('Changed name to' + this.pageName);
    })
  }

  ngOnInit(): void { }
}
