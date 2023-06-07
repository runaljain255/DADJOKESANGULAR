import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public results:any;
  public keyword = "";
  public http;
  public error = false;


  constructor(http: HttpClient) {
    this.http = http;
  }
  public getJoke() {
    this.http.get<JokeSearchResponse>('https://localhost:7211/DadJokes/SearchJokeWithKeyWord?keyword=' + this.keyword).subscribe(result => {
      this.results = result;
      this.error = false;
    }, error => this.error = true);
  }
}

interface Joke {
  joke: string;
}

interface JokeSearchResponse {
  shortJokes: Joke[];
  mediumJokes: Joke[];
  longJokes: Joke[];
}

