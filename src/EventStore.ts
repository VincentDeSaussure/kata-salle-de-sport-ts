export default class EventStore {
  list: Event[] = []

  addEvent(event: Event) {
    this.list.push(event)
  }
}

export interface Event {
  name: string
  date: string
  data: any
}
