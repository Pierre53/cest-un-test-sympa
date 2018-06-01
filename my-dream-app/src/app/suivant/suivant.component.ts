import { Component, OnInit, Input } from '@angular/core';
import { Hap } from '../_models';

@Component({
  selector: 'app-suivant',
  templateUrl: './suivant.component.html',
  styleUrls: ['./suivant.component.css']
})
export class SuivantComponent implements OnInit {

  @Input() hap: Hap;

  constructor() { }

  ngOnInit() {
  }

}
