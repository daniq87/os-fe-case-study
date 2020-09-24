import { Component, OnInit } from '@angular/core';
import {Event, EventDictionary} from '../../entities/event';
import {EventService} from '../../services/event.service';
import * as _ from 'lodash';
import {getDateWithoutTime} from '../../utils/date';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  events: EventDictionary;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe( events => {
      // const test = _(events)
      //   // .groupBy(e => getDateWithoutTime(new Date(e.startDate)).toDateString());
      //   .sortBy(group => {
      //     console.log('sort group0', group[0]);
      //     console.log('sort index', events.indexOf(group[0]));
      //     return events.indexOf(group[0]);
      //   });

      const test = _.chain(events)
        .groupBy(e => getDateWithoutTime(new Date(e.startDate)).toDateString())
        // .map((characters, rating) => ({ rating, characters }))
        .orderBy(group => {
          return group[0].startDate;
        }, ['asc'])
        .value().map(group => {
          console.log('map group=', group);
          console.log('map dict[roup[0].startDate]=', group[0].startDate);
          const dict: EventDictionary = {};
          // dict[group[0].startDate] = group.values();

        });

      console.log('test=', test);
      this.events = _.groupBy(events, (e) => getDateWithoutTime(new Date(e.startDate)).toDateString());
     });
  }
}

