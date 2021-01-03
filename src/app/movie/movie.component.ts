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
    { id: 1, name: "Tenet (2020) ", puan: 8, categoryId: 1, description: "IMDb: 7.8 Süre:125 Dakika ", img: "https://pomelon.com.tr/wp-content/uploads/2020/02/TENET-560x800.jpg" },
    { id: 2, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
    { id: 1, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
    { id: 2, name: "Gay Nihat", puan: 8, categoryId: 1, description: "Nihatın birsudan ayrıldaktan sonra yalnızlıktan dolayı gay olmasını anlatır.", img: "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024" },
   
  ]

  labels: any[]=[
    {name: "Afet"},
    {name: "Aksiyon"},
    {name: "Animasyon"},
    {name: "Komedi"},
    {name: "Dram"},
    {name: "Belgesel"},
    {name: "Biyografik"},
    {name: "Din"},
    {name: "Dövüş"},
    {name: "Gençlik"},
    {name: "Gerilim"},
    {name: "Korku"},
    {name: "Macera"},
    {name: "Müzik"},
    {name: "Savaş"},
    {name: "Suç"},
    {name: "Polisiye"},
    {name: "Cyberpunk"},
    {name: "Soygun"},
    {name: "Müzik"},
    {name: "Distopya"},
    {name: "Klasik"},
    {name: "Gizem"},
    {name: "Film-noir"},
    {name: "Siyah beyaz"},
    {name: "Depresif"},
    {name: "Epik"},
    {name: "Mindfuck"},
    {name: "Tarih"},
    {name: "Bilim kurgu"},

  ]


  ngOnInit(): void {
  }

}
