import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { hotelEnvironment } from 'src/environments/environment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  private hotelData :any = [] ;
  private status="";
  lat;
  long;
  from;
  to;

  constructor(public hotelSearchService: HotelServiceService,private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.warn('in hotel component');
    this.route.queryParams.subscribe(params => {
      this.lat = params['lat'];
      this.long = params['lng'];
      this.from = params['from'];
      this.to = params['to'];
    });
    
    console.warn(this.lat);
    this.getHotel(this.lat,this.long, this.from, this.to);
  }
  
 private getStatus(){
   this.hotelSearchService.getStatus().subscribe((response:any) => {
    console.log("hotel: getStatus ->",response); 
    this.status=response.status
    if(this.status!="Completed"){
      this.getStatus();
    }else{
      this.hotelSearchService.getHotel().subscribe((response:any) => {
        console.log("hotel: getHotel response -> ",response);
        this.hotelData= response.hotels;
        console.log("hotelData: ",this.hotelData);
      })
    }
  });
 }

 private getHotel(lat: number,long:number, from: any, to: any) {
    
  this.hotelSearchService.searchInit(lat,long,from,to).subscribe((response : any) => {
    console.log("sessionIdfrom response ",response.sessionId);    
    hotelEnvironment.sessionId=response.sessionId;
    this.getStatus();
    
  })
  
}

}
