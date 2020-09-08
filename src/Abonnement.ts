import Formule from 'Formule'
import { PERIODICITE } from '../test/abonnement.test'

export default class Abonnement {
  constructor(public readonly formule: Formule,public readonly periodicite: PERIODICITE) {
  }

  static creer(formule: Formule, periodicite: PERIODICITE): Abonnement {
    return new Abonnement(formule, periodicite)
  }
}
