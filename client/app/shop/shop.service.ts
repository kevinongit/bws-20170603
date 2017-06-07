import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {
    private data = {
        myCarouselData: [
            { title : "Smart and Casual", content : "First Something..."},
            { title : "Second Phrase", content : "Second Something..."},
            { title : "Third Porviders", content : "Third Something..."}
        ],
        products: [
            { href : "afile.html", src : "assets/images/p1.jpg", title: "First Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p2.jpg", title: "Second Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p3.jpg", title: "Third Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p4.jpg", title: "Fourth Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p5.jpg", title: "Fifth Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p6.jpg", title: "Sixth Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p7.jpg", title: "Seventh Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p8.jpg", title: "Eighth Good Item", price : "10,000"},
            { href : "afile.html", src : "assets/images/p9.jpg", title: "Nineth Good Item", price : "10,000"}
        ]
    }

    constructor() {}

    public getMyCarouselData() {
        return this.data.myCarouselData;
    }

    public getProducts() {
        return this.data.products;
    }
}