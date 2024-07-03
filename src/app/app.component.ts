import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssetData } from '../intrefaces/asset.interface';
import { AssetService } from '../services/asset.service';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private assetService: AssetService) { }

  images: string[] = [
    'Image-Master-1.png',
    'Image-Master-2.png',
    'Image-Master-3.png',
    'Image-Master-4.png',
    'Image-Master-5.png'
  ];

  assetData: AssetData[] = [];

  ngOnInit() {
    this.loadAssets();
  }

  loadAssets() {
        this.images.forEach((imageName) => {
          const asset: AssetData = {
            title: this.generateRandomTitle(),
            price: this.generateRandomPrice(),
            size: this.generateRandomSize(),
            type: this.generateRandomType(),
            imageUrl: `assets/images/${imageName}`,
            rental: '12'
          };
          this.assetData.push(asset);
        });
  }

  generateRandomTitle(): string {
    // Generate random title logic
    return 'Product ' + (this.assetData.length + 1);
  }

  generateRandomPrice(): number {
    // Generate random price logic
    return Math.floor(Math.random() * 100) + 50; // Random price between 50 and 149
  }

  generateRandomSize(): string {
    // Generate random size logic
    const sizes = ['xl', 'l', 'm', 's'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }

  generateRandomType(): string {
    // Generate random typr logic
    const sizes = ['Blueberry', 'Prada', 'Bhandage', 'Ansell', 'Desacada'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
}
