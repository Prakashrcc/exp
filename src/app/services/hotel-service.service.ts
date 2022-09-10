import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { hotelEnvironment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http: HttpClient) { }
  url: string = hotelEnvironment.host;
  head = new HttpHeaders(
    {
    'Content-Type':'application/json',
    'cnx-userip':hotelEnvironment.cnxUserip,
    'cnx-tenantId':hotelEnvironment.cnxTenantId,
    'cnx-clientId':hotelEnvironment.cnxClientId,
    'cnx-correlationId':hotelEnvironment.globalCnxCorrelationId,
    'cnx-environment-token':hotelEnvironment.cnxEnvironmentToken,
    'Accept-Language':'en-US'

    });
  body = {};

  searchInit(lat: number, long: number, from: string, to: string) {
    this.body =  {
        "currency": "USD",
        "searchQuery": {
          "roomOccupancy": {
            "occupants": [
              {
                "type": "Adult",
                "age": 25
              }
            ]
          },
          "stayPeriod": {
            "start": "2022-09-16T00:00:00",
            "end": "2022-09-21T00:00:00"
          },
          "bounds": {
            "circle": {
              "center": {
                "lat":36.08333206176758,
                "long":-115.16666412353516
              },
              "radiusKm": 50
            }
          }
        },
        "customerInfo": {
          "id": "123_UT",
          "transitCode": "e213c3e9-8376-4505-b413-adf0de74a6fd",
          "availablePointBalance": 1000000.0,
          "eligibilityInfo": {
            "programCurrency": "Points",
            "purchaseAllowed": true,
            "redemptionAllowed": true,
            "displayProgramCurrencyAsDecimal": false,
            "useVariableMilesFormula": false,
            "shortfallAllowed": true
          }
        },
        "programId": "1371"
      }

    
    return this.http.post(this.url + "/hotel/v1.0/search/init", this.body, { headers: this.head });
  }

  getStatus() {
    this.body={
      "sessionId": hotelEnvironment.sessionId,
    }
    
    return this.http.post(this.url + "/hotel/v1.0/search/status", this.body, { headers: this.head });
  }

  getHotel() {
    this.body = {
      "sessionId":hotelEnvironment.sessionId,
      "paging":{
         "pageNo":1,
         "pageSize":20,
         "orderBy":"price asc"
      },
      "filters":{ 
      },
      "currency":"",
      "contentPrefs":[ 
         "All"
      ]
   }
    return this.http.post(this.url + "/hotel/v1.0/search/results", this.body, { headers: this.head });
  }
}

