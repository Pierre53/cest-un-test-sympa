// Les exports permettent d'utiliser la classe en dehors du fichier
export class Hap {
    static count = 0;
    public id = 0;
    public nom: string;
    public abreviation: string;
    constructor(nom = '', abreviation = '') {
        this.id = Hap.count++;
        this.nom = nom;
        this.abreviation = abreviation;
    }
}
