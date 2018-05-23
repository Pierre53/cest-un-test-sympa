import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Dubuisson', 'age': 28, 'saved': false };
  etudiants = [{ 'nom': 'Dubuisson' }, { 'nom': 'Bonvin' }, { 'nom': 'dubuisson' }, { 'nom': 'bonvin' }];
  constructor() { }

  ngOnInit() {
  }

  getEtudiant(): void {
    this.etudiant.nom = 'defaut';
  }
  saveEtudiant() {
    this.etudiant.saved = true;
  }
}
