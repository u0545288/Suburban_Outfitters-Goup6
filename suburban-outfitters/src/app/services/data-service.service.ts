import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private REST_API_SERVER = "http://localhost/Suburban_Outfitters-Goup6/suburban-outfitter-server/test.php";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  // constructor() { }
}
