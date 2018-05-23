import { Component, OnInit } from '@angular/core';
import { Hap } from '../_models';

@Component({
  selector: 'app-haps',
  templateUrl: './haps.component.html',
  styleUrls: ['./haps.component.css']
})
export class HAPsComponent implements OnInit {
  /*haps = [{ 'nom': 'Naphtalène', 'abreviation': 'Nap' }, { 'nom': 'Acénaphtène', 'abreviation': 'Ace' },
  { 'nom': 'Fluorène', 'abreviation': 'Fluo' },
  { 'nom': 'Phénanthrène', 'abreviation': 'Phe' }, { 'nom': 'Anthracène', 'abreviation': 'Ant' },
  { 'nom': 'Fluoranthène', 'abreviation': 'Fla' },
  { 'nom': 'Pyrène', 'abreviation': 'Pyr' }, { 'nom': 'Benzo(a)anthracène', 'abreviation': 'B(a)ant' },
  { 'nom': 'Chrysène', 'abreviation': 'Chry' },
  { 'nom': 'Benzo(b)fluoranthène', 'abreviation': 'B(b)fla' },
  { 'nom': 'Benzo(k)fluoranthène', 'abreviation': 'B(k)fla' },
  { 'nom': 'Benzo(a)pyrène', 'abreviation': 'B(a)pyr' },
  { 'nom': 'Dibenzo(ah)anthracène', 'abreviation': 'D(ah)ant' },
  { 'nom': 'Benzo(ghi)pérylène', 'abreviation': 'B(ghi)per' },
  { 'nom': 'Bisphénol A', 'abreviation': 'BPA' }, { 'nom': 'β-oestradiol', 'abreviation': 'E2' }];*/
  edit = false;
  liste = [new Hap('Naphtalène', 'Nap'), new Hap('Acénaphtène', 'Ace'), new Hap('Fluorène', 'Fluo'),
  new Hap('Phénanthrène', 'Phe'), new Hap('Anthracène', 'Ant'), new Hap('Fluoranthène', 'Fla'),
  new Hap('Pyrène', 'Pyr'), new Hap('Benzo(a)anthracène', 'B(a)ant'), new Hap('Chrysène', 'Chry'),
  new Hap('Benzo(b)fluoranthène', 'B(b)fla'), new Hap('Benzo(k)fluoranthène', 'B(k)fla'),
  new Hap('Benzo(a)pyrène', 'B(a)pyr'),
  new Hap('Dibenzo(ah)anthracène', 'D(ah)ant'), new Hap('Benzo(ghi)pérylène', 'B(ghi)per'),
  new Hap('Bisphénol A', 'BPA'), new Hap('β-oestradiol', 'E2')];
  hap = new Hap();
  constructor() { }

  ngOnInit() {
  }

  addHap() {
    this.liste.push(this.hap);
    this.hap = new Hap();
  }

  editHap(id: number) {
    console.log(id);
   this.hap = this.getHapByID(id);
   this.edit = true;
  }
  getHapByID(id: number): Hap {
    /*for (let i = 0; i < this.liste.length; i++) {
      if (this.liste[i].id === id) {
        return this.liste[i];
      }
    }
    return null;*/
    return this.liste.filter(a => a.id === id)[0];
  }

editOver() {
  this.edit = false;
  this.hap = new Hap();
}
}
