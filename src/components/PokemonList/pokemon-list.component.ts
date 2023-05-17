import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface PokemonInList {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public pokemons: PokemonInList[] = [];

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    };
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10', httpOptions)
      .subscribe(response => {
        this.pokemons = response.results;
      });
  }
}