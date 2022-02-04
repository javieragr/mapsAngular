import { Injectable } from '@angular/core';
import {LngLatLike, Map} from 'mapbox-gl'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map?:Map;
  get isMapReady(){
    return !!this.map;
  }
  constructor() { }
  setMap(map:Map){
    this.map=map;
  }

  flyTo(coords:LngLatLike){
    if (this.isMapReady) {
      throwError('El mapa no esta listo')
    }
    this.map?.flyTo({
      zoom:12,
      center:coords
    });
  }
}
