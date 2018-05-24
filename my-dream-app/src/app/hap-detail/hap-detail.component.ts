import { Component, OnInit, Input } from '@angular/core';
import { Hap } from '../_models';


@Component({
  selector: 'app-hap-detail',
  templateUrl: './hap-detail.component.html',
  styleUrls: ['./hap-detail.component.css']
})
export class HapDetailComponent implements OnInit {

  @Input() hap: Hap;

  // hap = new Hap('Naphtalène', 'Nap', 2, 'C10H8', '91-20-3');

  constructor() { }

  ngOnInit() {
  }



}
