import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesResponse, Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

public  userLocation? : [number,number];
public isLoadingPlaces:boolean=false;
public places:Feature[]=[];

get isUserLocationReady():boolean{

return !!this.userLocation;

}

  constructor(private http:HttpClient) { 
    this.getUserLocation();

  }

  public async getUserLocation ():Promise<[number,number]>{

    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.userLocation=[coords.longitude,coords.latitude];
          resolve(this.userLocation!)
        },(err)=>{
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
          

        }
      )
    })
  }
  getPlacesByQuery(query:string){
    this.isLoadingPlaces=true;
    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=-73.93292025662736%2C40.740073536658684&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoiamF2aWVyYWdyIiwiYSI6ImNrejNnNmUzZDA2OHgybm04dzZwdzc2YmwifQ.GU-eXMvPoc64mxL8sqKTTw`)
    .subscribe(resp=>{
      console.log(resp);
      this.isLoadingPlaces=false;
      this.places=resp.features;
      
    });
    
  }
}
