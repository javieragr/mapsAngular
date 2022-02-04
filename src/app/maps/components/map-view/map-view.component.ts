import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import {Map,Popup,Marker} from 'mapbox-gl';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapdivElement!: ElementRef

  constructor( private placesServices:PlacesService, private mapService:MapService) { }

  ngAfterViewInit(): void {
    if (!this.placesServices) {
      throw Error('No hay placesService.userLocation')
    }

    const map = new Map({
      container: this.mapdivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });
      

      const popup = new Popup()
      .setHTML(`
        <h6> aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

      new Marker({color:'red'})
      .setLngLat(this.placesServices.userLocation!)
      .setPopup(popup)
      .addTo(map)
      
      this.mapService.setMap(map);

    
  }

}
