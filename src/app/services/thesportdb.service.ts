import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThesportdbService {

  constructor (private http: HttpClient) { }

  getLeague() {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?s=Motorsport')
  }

  getSeason(id) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=' + id)
  }

  getDetailSeason(id, year) {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=' + id + '&s=' + year)
  }
}
