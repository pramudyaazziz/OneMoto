import { Component, OnInit } from '@angular/core';
import { Navigation } from 'selenium-webdriver';
import { ThesportdbService } from '../services/thesportdb.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public data: any;

  constructor(private ThesportdbService: ThesportdbService, private router: Router) {}

  ngOnInit(): void {
    this.ThesportdbService.getLeague().subscribe(result => {
      this.data = result['countries'];
      console.log(this.data);
    }
    );
  }

  detail(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        detail: JSON.stringify(item)
      }
    };
    this.router.navigate(['league'], navigationExtras);
  }

}
