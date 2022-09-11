import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ThesportdbService } from '../services/thesportdb.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
})
export class LeaguePage implements OnInit {
selectTabs = 'info'
detail: any; // detail league
idLeague: any;
seasons: any;
yearSeason: any;
detailSeasons: any;
date = new Date().getFullYear();

  constructor(private route: ActivatedRoute, private router: Router, private service: ThesportdbService, private loadingCtrl: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.detail) {
        this.detail = JSON.parse(params.detail);
        this.idLeague = this.detail.idLeague;
        console.log(this.detail);
      }
    },
    );
  }

  ngOnInit() {
    this.service.getSeason(this.idLeague).subscribe(result => {
      this.seasons = result['seasons'];
      console.log(this.seasons);
    }
    );
  }

  async detailSeason(item) {
    this.yearSeason = item.strSeason;
    this.detailSeasons = null;

    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });

    loading.present();
    let interval = setInterval(() => {
      if (this.detailSeasons == null) {
        this.service.getDetailSeason(this.idLeague, this.yearSeason).subscribe(result => {
          this.detailSeasons = result['events'];
        });
      } else {
        clearInterval(interval);
        let navigationExtras: NavigationExtras = {
          queryParams: {
            detail: JSON.stringify(this.detailSeasons)
            }
          }
        this.router.navigate(['/detailseason'], navigationExtras);
        loading.dismiss();
      }
    }, 1000);
  }
}
