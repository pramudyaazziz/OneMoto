import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailseason',
  templateUrl: './detailseason.page.html',
  styleUrls: ['./detailseason.page.scss'],
})
export class DetailseasonPage implements OnInit {
detail: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.detail) {
        this.detail = JSON.parse(params.detail);
        console.log(this.detail);
      }
    },
    );
   }

  ngOnInit() {
  }

}
