import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent  {

  constructor(private mapService:MapService,
    private placesService: PlacesService 
    ) { }

  goToMyLocation(){
    console.log('jeje');
    
    if (!this.placesService.isUserLocationReady) {
      throwError('No hay ubicacion del usuario')
    }


    if (!this.mapService.isMapReady) {
      throwError('No se ha inicializado el mapa')
    }
    console.log('ir a mi ubicacion');
    this.mapService.flyTo(this.placesService.userLocation!)
    
  }

}
