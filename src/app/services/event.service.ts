import {Injectable} from '@angular/core';
import {Event} from '../entities/event';
import {City} from '../entities/city';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {getTimeFromDate} from '../utils/date';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'api/events';  // URL to web api

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl).pipe(
      map((events: any[]) => events.map(event => {
        return {
          ...event,
          city: this.getCities().find(city => city.id == event.city).name,
          getStartTime: getTimeFromDate(event.startDate)
        };
      }))
    );
  }

  getCities(): City[] {
    return citiesServerFake;
  }
}



export const citiesServerFake = [
  {
    id: 1,
    name: 'Barcelona'
  },
  {
    id: 2,
    name: 'Amsterdam'
  },
  {
    id: 3,
    name: 'Seville'
  },
  {
    id: 4,
    name: 'London'
  },
  {
    id: 5,
    name: 'London'
  },
  {
    id: 6,
    name: 'Palma de Mallorca'
  },
  {
    id: 7,
    name: 'Dusseldorf'
  },
  {
    id: 8,
    name: 'Barcelona'
  },
  {
    id: 9,
    name: 'Dusseldorf'
  },
  {
    id: 10,
    name: 'Edimburg'
  }
];

