import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GaService } from './services/ga.service';
import { AuthService } from './services/auth.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    public router: Router,
    public gaService: GaService
  ) { 
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      })
  }

}
