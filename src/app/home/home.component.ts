import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";
import {Page} from "../page";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.setName(Page.HOME);
  }

}
