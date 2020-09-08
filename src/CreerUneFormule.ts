import EventStore from "./EventStore"
import { UneFormuleAEtéCréée } from "../test/formule.test"
import Formule from "./Formule"

export default class CréerUneFormule {
  constructor(public eventStore: EventStore) {}

  public execute(nom: string, prixDeBase: number) {
    const formule = Formule.creer(nom, prixDeBase)
    const uneFormuleAEtéCréée = new UneFormuleAEtéCréée(formule)
    this.eventStore.addEvent(uneFormuleAEtéCréée)
  }
}
