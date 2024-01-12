import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent  implements OnInit {

  @Input() image: string ="";
  @Input() description: string="";
  @Input() title: string="";

  constructor() { }

  ngOnInit() {}

}
