import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
   produits : string[]; //un tableau de chînes de caractère
   constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
}
  ngOnInit(): void {
  }}