export interface Event {
  id: number;
  name: string;
  isFree: boolean;
  city: string;
  startDate: string;
  endDate: string;
  getStartTime?(date: string): string;
}

export interface EventDictionary {
  [index: string]: Event[];
}
