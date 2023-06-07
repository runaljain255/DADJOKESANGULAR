import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentJoke = "";
  public http;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public getJoke() {
    this.http.get<Joke>('https://localhost:7211/DadJokes/GetRandomJoke').subscribe(result => {
      this.currentJoke = result.joke;
    }, error => console.error(error));
  }
}

interface Joke {
  joke: string;
}