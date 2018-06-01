import { Injectable } from '@angular/core';
import { Hap } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class HapService {
  liste = [new Hap('Naphtalène', 'Nap', 2, 'C10H8', '91-20-3', 128.2, 1.162, '0.png'),
  new Hap('Acénaphtène', 'Ace', 3, 'C12H10', '83-32-9', 154.2, 1.024, '1.png'),
  new Hap('Fluorène', 'Fluo', 3, 'C13H10', '86-73-7', 166.2, 1.203, '2.png'),
  new Hap('Phénanthrène', 'Phe', 3, 'C14H10', '85-01-8', 178.2, 1.172, '3.png'),
  new Hap('Anthracène', 'Ant', 3, 'C14H10', '120-12-7', 178.2, 1.240, '4.png'),
  new Hap('Fluoranthène', 'Fla', 4, 'C16H10', '206-44-0', 202.3, 1.236, '5.png'),
  new Hap('Pyrène', 'Pyr', 4, 'C16H10', '129-00-0', 202.3, 1.271, '6.png'),
  new Hap('Benzo(a)anthracène', 'B(a)ant', 4, 'C18H12', '56-55-3', 228.3, 1.174, '7.png'),
  new Hap('Chrysène', 'Chry', 4, 'C18H12', '218-01-9', 228.3, 1.274, '8.png'),
  new Hap('Benzo(b)fluoranthène', 'B(b)fla', 5, 'C20H12', '205-99-2', 252.3, 1.286, '9.png'),
  new Hap('Benzo(k)fluoranthène', 'B(k)fla', 5, 'C20H12', '207-08-9', 252.3, 1.286, '10.png'),
  new Hap('Benzo(a)pyrène', 'B(a)pyr', 5, 'C20H12', '50-32-8', 252.3, 1.282, '11.png'),
  new Hap('Dibenzo(ah)anthracène', 'D(ah)ant', 5, 'C22H14', '53-70-3', 278.3, 1.252, '12.png'),
  new Hap('Benzo(ghi)pérylène', 'B(ghi)per', 6, 'C20H12', '191-24-2', 276.3, 1.38, '13.png'),
  new Hap('Bisphénol A', 'BPA', 2, 'C15H16O2', '80-05-7', 228.2, 1.195, '14.png'),
  new Hap('β-oestradiol', 'E2', 4, 'C18H24O2', '50-28-2', 272.3, 1.170, '15.png')];



  constructor() { }

  getHap() {
    return this.liste;
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

  getSuivantId(id: number) {
    let i = 0;
    for (; i < this.liste.length; i++) {
      if (this.liste[i].id === id) {
        return this.liste[(i + 1) % this.liste.length].id;
      }
    }
    return null;
  }

  getPrecedentId(id: number) {
    let i = 0;
    for (; i < this.liste.length; i++) {
      if (this.liste[i].id === id) {
        if (this.liste[i].id === 0) {
          i = 16;
        }
        return this.liste[i - 1].id;
      }
    }
    return null;
  }
}
