import { Component, OnInit, Input } from '@angular/core';
import { Hap } from '../_models';

@Component({
  selector: 'app-precedent',
  templateUrl: './precedent.component.html',
  styleUrls: ['./precedent.component.css']
})
export class PrecedentComponent implements OnInit {

  @Input() hap: Hap;

  constructor() { }

  ngOnInit() {
  }

}
