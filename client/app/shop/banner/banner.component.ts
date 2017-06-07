import { Component, Input, ViewEncapsulation } from '@angular/core'

// import { SliderComponent } from './slider.component'

// import { CarouselConfig } from 'ngx-bootstrap/carousel'

@Component({
    selector: 'shop-banner',
    templateUrl: './banner.component.html',
    styles : [`
    .glyphicon {
        color: blue !important;
    }
    .carousel {
        background: none !important;
    }
    .left.carousel-control, .right.carousel-control {
        background-image: none;
        filter: progid: none !important;
        display: none;
        filter:none !important;
        outline: 0;
        opacity: 1;
    }
    `],
    encapsulation: ViewEncapsulation.None
    // providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true} }]
})
export class BannerComponent {
    @Input() myCarouselData: any[];
}