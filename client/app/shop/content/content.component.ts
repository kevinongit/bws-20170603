import { Component, Input } from '@angular/core';


@Component({
    selector: 'shop-content',
    templateUrl: './content.component.html'
})
export class ContentComponent {
    @Input() products: any[];
}