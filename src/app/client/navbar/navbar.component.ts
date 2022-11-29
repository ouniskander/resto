import { Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ClientdataService } from 'src/app/clientdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public client:ClientdataService,private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }
  onLogout() {
    this.client.logout();
  }

  scrollTo(target:any) {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };
    this.scrollToService.scrollTo(config);
  }

}
