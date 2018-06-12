import { Component, OnInit } from '@angular/core';
import { Hap } from '../_models';
import { HapService } from '../_services/hap.service';

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
  /*liste = [new Hap('Naphtalène', 'Nap', 2, 'C10H8', '91-20-3'),
  new Hap('Acénaphtène', 'Ace', 3, 'C12H10', '83-32-9'),
  new Hap('Fluorène', 'Fluo', 3, 'C13H10', '86-73-7'),
  new Hap('Phénanthrène', 'Phe', 3, 'C14H10', '85-01-8'),
  new Hap('Anthracène', 'Ant', 3, 'C14H10', '120-12-7'),
  new Hap('Fluoranthène', 'Fla', 4, 'C16H10', '206-44-0'),
  new Hap('Pyrène', 'Pyr', 4, 'C16H10', '129-00-0'),
  new Hap('Benzo(a)anthracène', 'B(a)ant', 4, 'C18H12', '56-55-3'),
  new Hap('Chrysène', 'Chry', 4, 'C18H12', '218-01-9'),
  new Hap('Benzo(b)fluoranthène', 'B(b)fla', 5, 'C20H12', '205-99-2'),
  new Hap('Benzo(k)fluoranthène', 'B(k)fla', 5, 'C20H12', '207-08-9'),
  new Hap('Benzo(a)pyrène', 'B(a)pyr', 5, 'C20H12', '50-32-8'),
  new Hap('Dibenzo(ah)anthracène', 'D(ah)ant', 5, 'C22H14', '53-70-3'),
  new Hap('Benzo(ghi)pérylène', 'B(ghi)per', 6, 'C20H12', '191-24-2'),
  new Hap('Bisphénol A', 'BPA', 2, 'C15H16O2', '80-05-7'),
  new Hap('β-oestradiol', 'E2', 4, 'C18H24O2', '50-28-2')];*/
  hap = new Hap();
  selectedHap: Hap;
  liste;


  constructor(private hapService: HapService) { }
  // le private rajoute automatiquement la variable aux attributs d'instance (de la classe)

  ngOnInit() {
    this.hapService.getHap<Hap[]>().subscribe(r => this.liste = r);
    // Les [] servent à préciser que l'on veut afficher la liste.
    // this.hapService.getHapByID<Hap>(this.id).subscribe(r => this.hap = r);
  }

  showReturn(r) {
    this.liste = JSON.stringify(r);
    console.log(r);
    this.liste = JSON.parse(this.liste);
  }


  addHap() {
    this.hapService.saveHap<Hap>(this.hap).subscribe(hap => this.liste.push(hap));
    // this.liste.push(this.hap);
    // this.hap = new Hap();
  }

  editHap(id: number) {
    console.log(id);
    this.hap = this.getHapByID(id);
    this.edit = true;
  }
  getHapByID(id: number) {
    // console.log('ok');
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
    // this.hap = new Hap();
    this.hapService.editHap<Hap>(this.hap).subscribe(hap => this.editHap(hap.id));
  }

  select(e: Hap) {
    this.selectedHap = e;
  }
}
