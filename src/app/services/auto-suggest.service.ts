import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { autosearchEnvironment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoSuggestService {

  constructor(private http:HttpClient) { }
  url: string = autosearchEnvironment.host;
  head = new HttpHeaders(
  {
    'content-type': 'application/json',
    "Authorization": 'Bearer ' + autosearchEnvironment.token,
    'cnx-sessionId': autosearchEnvironment.sessionId,
    'cnx-tenantId': autosearchEnvironment.cnxTenantId,
  });
  body =  {
    "sq": {
      "st": '',
      "sf": [
        "airport",
        "city"
      ]
    },
    "sel": true,
    "rec": 20,
    "c": "activities"
  }
 
     autoSuggest(st:any){
       this.body.sq.st=st;
       return this.http.post(this.url,this.body,{headers:this.head});
     }
}