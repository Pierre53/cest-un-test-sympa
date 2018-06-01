import { Component, OnInit } from '@angular/core';
import { Hap } from '../_models';
import { ActivatedRoute } from '@angular/router';
import { HapService } from '../_services/hap.service';

@Component({
  selector: 'app-hap',
  templateUrl: './hap.component.html',
  styleUrls: ['./hap.component.css']
})
export class HapComponent implements OnInit {

  // hap = new Hap('Naphtalène', 'Nap', 2, 'C10H8', '91-20-3');
  param: number;
  hap;
  id;
  idprecedent;
  idsuivant;
  selectedHapSuivant: Hap;
  selectedHapPrecedent: Hap;

  constructor(private activatedRoute: ActivatedRoute, private hapService: HapService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.loadHap(p['id']));
    // subscribe est asynchrone, le code part tout seul.
  }
  loadHap(id: string) {
    this.param = +id; // le +id sert à convertir une chaîne de caratère en nombre pour l'id.
    this.hap = this.hapService.getHapByID(this.param);
    this.idsuivant = this.hapService.getSuivantId(this.param);
    console.log(this.idsuivant);
    this.idprecedent = this.hapService.getPrecedentId(this.param);
    console.log(this.idprecedent);
    this.selectSuivant();
    this.selectPrecedent();
  }

  selectSuivant() {
    this.selectedHapSuivant = this.hapService.getHapByID(this.hapService.getSuivantId(this.param));
  }

  selectPrecedent() {
    this.selectedHapPrecedent = this.hapService.getHapByID(this.hapService.getPrecedentId(this.param));

  }
}