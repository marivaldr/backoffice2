import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ubl-blank',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
