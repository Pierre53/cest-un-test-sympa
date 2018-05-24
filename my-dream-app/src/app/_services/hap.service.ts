import { Injectable } from '@angular/core';
import { Hap } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class HapService {
  liste = [new Hap('Naphtalène', 'Nap', 2, 'C10H8', '91-20-3'),
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
  new Hap('β-oestradiol', 'E2', 4, 'C18H24O2', '50-28-2')];

  constructor() { }
  getHap() {
    return this.liste;
    
  }
}
