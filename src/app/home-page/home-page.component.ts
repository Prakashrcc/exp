import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import placesList from '../places.json';  
import {ActivityServiceService} from '../services/activity-service.service';
import { AutoSuggestService } from '../services/auto-suggest.service';
import {Router} from '@angular/router';

interface Place {  
  id: String;  
  name: String;  
  state: String;  
}  

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  mouseInSearch = false;
  searchComponent;
  places: Place[] = placesList;  
  tempPlaces: Place[] = placesList;
  selectedPlace = null;
  activityStartDate:String ;
  activityEndDate:String ;
  public autoSuggestData :any[] = [] ;
  tabName;

  constructor(private http:HttpClient, private service:ActivityServiceService, private route:Router,
    public autosearchService: AutoSuggestService) { 
    console.log(JSON.stringify(this.tempPlaces));
    this.selectedPlace= {
      id : '', name : '',state:'', lat: 1, lng : 1
    }
    this.selectedPlace.name = 'Going to';
  }

  ngOnInit(): void {
  }

  navigate() {
    if (this.tabName == 'Packages') {
      this.navigateToActivity();
    }
    else if (this.tabName == 'Stays') {
      this.navigateToHotel();
    }
  }

  navigateToActivity() {
    console.log('in navigate'+this.activityStartDate);
    
    this.route.navigate(['/activity'],{ queryParams: {lat: this.selectedPlace.lat,long:this.selectedPlace.lng, from: this.activityStartDate, to : this.activityEndDate}});
  }

  navigateToHotel() {
    console.log('in navigate'+this.activityStartDate);
    
    this.route.navigate(['/hotel'],{ queryParams: {lat: this.selectedPlace.lat,long:this.selectedPlace.lng, from: this.activityStartDate, to : this.activityEndDate}});
  }

  getAutosuggest(event){
    var st = event.target.value;
    console.log(st)
    this.autosearchService.autoSuggest(st).subscribe((response:any) => {
    console.log("res->",response);
    this.autoSuggestData = response.s;
    console.log("autoSuggestData->",this.autoSuggestData);
  })
  
 }

  openTab(evt,tabName) {
    var i, tabcontent, tablinks;
    this.tabName = tabName;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  openSearch(event,evtId) {
    this.searchComponent = document.getElementById(evtId);
    this.searchComponent.style.display = 'block';
    document.getElementById('searchInput').focus();
    document.addEventListener('mousedown', (e) => {
      if (!this.mouseInSearch) {
        this.searchComponent.style.display = 'none';
        document.removeEventListener("mousedown", (e) => {});
      }
    })
  }

  mouseOutHandler() {
    this.mouseInSearch = false;
  }

  mouseInHandler() {
    this.mouseInSearch = true;
  }

  onSearchInputChange(event) {
    var term = event.target.value;
    var lowerTerm = term.toLowerCase();
    console.warn(lowerTerm );
    this.tempPlaces = [];
    for (var index = 0; index < this.places.length; index++) {
      if (((this.places[index].name).toLowerCase()).startsWith(lowerTerm)) {
        this.tempPlaces.push(this.places[index]);
      }
    }
  }

  selectPlace(event,place) {
    console.log('i m here');
    this.selectedPlace.lat = place.lat;
    this.selectedPlace.lng = place.lng;
    this.selectedPlace.name = place.cn;
    this.searchComponent.style.display = 'none';
    console.log(this.selectedPlace);
  }

  selectDate(event) {
    console.warn('i m');
    var ele = event.target;
    ele.daterangepicker({
      "startDate": "09/02/2022",
      "endDate": "09/08/2022"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });
  }

}
