import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }
  title = "Film Listesi"
  movies: any[] = [
    { id: 1, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
    { id: 2, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
    { id: 1, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
    { id: 2, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
   
  ]

  labels: any[]=[
    {name: "Action packed"},
    {name: "Adventurous"},
    {name: "Beautiful"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
    {name: "Action packed"},
  ]


  ngOnInit(): void {
  }

}
