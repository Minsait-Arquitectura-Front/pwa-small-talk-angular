import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=10&limit=10')
      .subscribe(response => {
        this.pokemons = response.results;
      });
  }
}