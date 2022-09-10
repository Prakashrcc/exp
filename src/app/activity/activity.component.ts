import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ActivityServiceService} from '../services/activity-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private http:HttpClient, private searchService:ActivityServiceService,private route: ActivatedRoute) { }
  lat;
  long;
  from;
  to;
  public data = [];
  public autoSuggestData :any[] = [] ;
  public activityData :any = [] ;
  ngOnInit(): void {
    console.warn('in activity component');
    this.route.queryParams.subscribe(params => {
      this.lat = params['lat'];
      this.long = params['lng'];
      this.from = params['from'];
      this.to = params['to'];
    });
    console.warn(this.lat);
    this.getActivity();
  }

  getActivity() {
    console.warn('in getactivity');
    this.searchService.searchInit(this.lat,this.long,this.from,this.to).subscribe((response : any) => {
      console.log("from response ",response.sessionId);    
      environment.sessionId=response.sessionId;
      console.log("from environment ",environment.sessionId);
      this.searchService.getActivity().subscribe((response:any) => {
        console.log(response);
        this.activityData= response.activities;
        console.log(this.activityData[0])
      })
    })
  }

}
