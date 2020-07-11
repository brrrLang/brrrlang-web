import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {PageService} from "../page.service";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.less']
})
export class AppFooterComponent implements OnInit {
  prevVh = 0;
  prevSize = 0;
  recalculateMargin() {
    console.log('Recalculating margin')
    let footer  = $('#footer');
    let header  = $('#header');
    let content = $('#body');
    const vh    = $(window).innerHeight();
    let size = vh - header.outerHeight(true) - content.outerHeight(true) - footer.outerHeight(true);
    if (footer.position().top + footer.outerHeight(true) < vh) {
      footer.css({
        'margin-top': size
      });
    } else {
      footer.css({
        'margin-top': 0,
      });
    }
  }

  constructor(private pageService: PageService) {
    this.pageService.addPageChangeCallback(() => {
      this.recalculateMargin();
    });
    $(window).on('resize', () => {

    });
  }

  ngOnInit(): void {
    this.recalculateMargin();
  }

}
