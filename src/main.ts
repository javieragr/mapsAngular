import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aWVyYWdyIiwiYSI6ImNrejNnNmUzZDA2OHgybm04dzZwdzc2YmwifQ.GU-eXMvPoc64mxL8sqKTTw';
if (!navigator.geolocation) {
  alert('El navegador no soporta la geolocalizacion')
  throw new Error("Navegador no soporta Geolocalizacion");

  
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
