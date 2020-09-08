import EventStore from './EventStore'
import Abonnement from './Abonnement'
import Formule, { FormuleCommand } from './Formule'
import { UnAbonnementAEtéCréé } from '../test/abonnement.test'
import { PERIODICITE } from '../test/abonnement.test'

export class SouscrireAUnAbonnement {
  constructor(public eventStore: EventStore) {}

  execute(formule: FormuleCommand, periodicite: PERIODICITE) {
    const abonnement = Abonnement.creer(new Formule(formule.nom, formule.prixDeBase), periodicite)
    const abonnementAEtéCréé = new UnAbonnementAEtéCréé(abonnement)
    this.eventStore.addEvent(abonnementAEtéCréé)
  }
}