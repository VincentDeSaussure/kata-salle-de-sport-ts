import Formule from "./../src/Formule"

class Abonnement {
  private formule: Formule
  

  constructor(formule: Formule) {
    this.formule = formule
  }

  static creer(formule: Formule, estEtudiant?: boolean): Abonnement {
    return new Abonnement(formule)
  }
}

describe('créer un abonnement', () => {
  describe('avec une formule', () => {
    it('un abonnement est créer', () => {
      const formule = new Formule('Gold', 35)
      const abonnement = new Abonnement(formule)
      expect(Abonnement.creer(formule)).toEqual(abonnement)
    })
    describe('quand le prospect est étudiant', () => {
      it('une réduction de 20% est appliquée', () => {
        const formule = new Formule('Gold', 35)
        const abonnement = new Abonnement(formule)
        expect(Abonnement.creer(formule)).toEqual(abonnement)
      })
    })
  })
})