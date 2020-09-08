export default class Formule {

  constructor(private nom: string, private prixDeBase: number) {}

  static creer(nom, prixDeBase) {
    return new Formule(nom, prixDeBase)
  }
}
