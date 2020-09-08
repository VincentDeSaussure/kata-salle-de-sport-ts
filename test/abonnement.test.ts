import Formule, { FormuleCommand } from './../src/Formule'
import EventStore, { Event } from './../src/EventStore'
import { moment } from './formule.test'
import Abonnement from '../src/Abonnement'
import { SouscrireAUnAbonnement } from './../src/SouscrireAUnAbonnement'

export enum PERIODICITE {
  MOIS,
  ANNEE,
}

export class UnAbonnementAEtéCréé implements Event {
  name = 'Un abonnement a été créé'
  date = moment()
  data: Abonnement

  constructor(data) {
    this.data = data
  }
}

describe('souscrire à un abonnement', () => {
  let abonnementStore
  beforeEach(()=> abonnementStore = new EventStore())
  describe('avec une formule', () => {
    describe('au mois', () => {
      it('publie l‘évènement : un abonnement a été créer', () => {
        const formuleCommande: FormuleCommand = { nom: 'Gold', prixDeBase: 35 }
        const souscrireAUnAbonnement = new SouscrireAUnAbonnement(abonnementStore)
        souscrireAUnAbonnement.execute(formuleCommande, PERIODICITE.MOIS)
        const abonnement = Abonnement.creer(Formule.creer(formuleCommande.nom, formuleCommande.prixDeBase), PERIODICITE.MOIS)
        const unAbonnementAEtéCréer = new UnAbonnementAEtéCréé(abonnement)
        expect(abonnementStore.list[0]).toEqual(unAbonnementAEtéCréer)
      })
    })
    describe(`à l'année`, () => {
      it(`publie l'évènement un abonnement a été créé, avec une réduction de 20%`, () => {
        const formuleCommande: FormuleCommand = { nom: 'Gold', prixDeBase: 35 }
        const souscrireAUnAbonnement = new SouscrireAUnAbonnement(abonnementStore)
        souscrireAUnAbonnement.execute(formuleCommande, PERIODICITE.ANNEE)
        const abonnement = Abonnement.creer(Formule.creer(formuleCommande.nom, formuleCommande.prixDeBase), PERIODICITE.ANNEE)
        const unAbonnementAEtéCréer = new UnAbonnementAEtéCréé(abonnement)
        expect(abonnementStore.list[0]).toEqual(unAbonnementAEtéCréer)
      })
    })
  })
})
