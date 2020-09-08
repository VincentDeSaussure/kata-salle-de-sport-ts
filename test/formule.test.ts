import Formule from '../src/Formule'
import EventStore, { Event } from '../src/EventStore'
import CréerUneFormule from '../src/CreerUneFormule'

const moment = () => {
  const date = new Date()
  return (date.getMonth() + 1) + '/' + date.getDate()
}

export class UneFormuleAEtéCréée implements Event {
  name = 'une formule a été créée'
  date = moment()
  data: Formule

  constructor(data) {
    this.data = data
  }
}

describe('créer une formule', () => {
  const eventStore = new EventStore()
  describe('avec un nom et un prix de base', () => {
    it('publie un évènement: "une formule a été créée"', () => {
      const créerUneFormule = new CréerUneFormule(eventStore)
      const formule = new Formule('Gold', 35)
      const uneFormuleAEtéCréée = new UneFormuleAEtéCréée(formule)
      créerUneFormule.execute('Gold', 35)
      expect(eventStore.list[0]).toEqual(uneFormuleAEtéCréée)
    })
  })
})
