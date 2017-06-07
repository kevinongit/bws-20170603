import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CarouselModule } from 'ngx-bootstrap'


import { MockBackend, MockConnection } from '@angular/http/testing'
import { BaseRequestOptions } from '@angular/http'

import { ShopComponent } from './shop.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { routing } from './shop.routes'

import { ShopService } from './shop.service';
import { BannerComponent } from './banner';
import { ContentComponent } from './content';
// import { SliderComponent } from './banner'

@NgModule({
    imports: [
        CommonModule,
        CarouselModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        BannerComponent,
        ContentComponent,
        // SliderComponent,
        ShopComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers : [
        ShopService,
        BaseRequestOptions
    ]
})
export class ShopModule {}