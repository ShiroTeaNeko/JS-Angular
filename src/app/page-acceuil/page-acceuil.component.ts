import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FestkickService } from '../festkick.service';
import { Concert } from '../page-details-concert/page-details-concert.model';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.scss']
})
export class PageAcceuilComponent implements OnInit {

  

  list: any;
  ville : string = '';
  concerts : Concert[]=[];

  constructor(private concert: FestkickService) {
    
  }

  getData(ville){
    this.concert.getConcert().subscribe((data:any) => {
      this.list = data.resultsPage.results.event;
    }
      ); 
     console.log(this.list);
  }

  initConcert():void{
   for(let i=0; i<3; i++){
     const c = new Concert (this.list.start.date,this.list.location.city,this.list.displayName);
     this.concerts.push(c);
   }
 }

  getByCity(ville){
  this.concerts = this.concerts.filter(c => c.lieu == ville);
  console.log(this.list);
 }
  
  ngOnInit(): void {
    
  }
}
