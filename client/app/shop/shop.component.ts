import { Component } from '@angular/core';
import { ShopService } from './shop.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./style.css']
})
export class ShopComponent {
    constructor(private shopService:ShopService) {
        
    }
}