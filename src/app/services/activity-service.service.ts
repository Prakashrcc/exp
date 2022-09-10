import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {

  url: string = environment.host;
  head = new HttpHeaders({'cnx-correlationid':environment.globalCnxCorrelationId, 
  'cnx-userip': environment.cnxUserip,
  'cnx-tenantId': environment.cnxTenantId ,
  'Content-Type' : 'application/json',
  'Accepted-Language' : 'en-US'
  });
  body={};

  constructor(private http: HttpClient) { }

  searchInit(lat: number,long:number, from: string, to: string) {
    this.body={
      "searchQuery": {
          "dateRange": {
              "from": from,
              "to": to
          },
          "bounds": {
              "circle": {
                  "center": {
                      "lat": lat,
                      "long": long
                  },
                  "radiusKm": 48
              }
          },
          "paxNationality": "IN",
          "filters": {
              "price": {},
              "categories": [
                  "16",
                  "12",
                  "4",
                  "9"
              ]
          }
      },
      "customerInfo": {
          "id": "AutoUser",
          "availablePointBalance": 50000,
          "transitCode": "c0e59310-81b9-45e9-b11d-b3b53903c0c2",
          "eligibilityInfo": {
              "programCurrency": "Points",
              "purchaseAllowed": true,
              "redemptionAllowed": true,
              "displayProgramCurrencyAsDecimal": false,
              "useVariableMilesFormula": false,
              "shortfallAllowed": true
          }
      },
      "programId": "1371",
      "currency": "USD"
  }
    return this.http.post(this.url + "/activity/v1.0/search/init",this.body,{headers:this.head});
  }
  getActivity() {
   this.body =  {
      "paging": {
        "pageNo": 1,
        "pageSize": 30,
        "orderBy": "price"
      },
      "sessionId": environment.sessionId,
      "currency": "USD"
    }
    return this.http.post(this.url + "/activity/v1.0/search/result",this.body,{headers:this.head});
  }

}
