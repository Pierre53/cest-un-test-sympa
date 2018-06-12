// Les exports permettent d'utiliser la classe en dehors du fichier
export class Hap {
    // static count = 0;
    public id;
    public nom: string;
    public abreviation: string;
    public nbrCycles: number;
    public formuleChimique: string;
    public CAS: string;
    public MasseMolaire: number;
    public densite: number;
    public photo: string;
    constructor(nom = '', abreviation = '', nbrCycles = 0, formuleChimique = '', CAS = '', MasseMolaire = 0,
        densite = 0, photo = '') {
        // this.id = Hap.count++;
        this.nom = nom;
        this.abreviation = abreviation;
        this.nbrCycles = nbrCycles;
        this.formuleChimique = formuleChimique;
        this.CAS = CAS;
        this.MasseMolaire = MasseMolaire;
        this.densite = densite;
        this.photo = photo;
    }
    constructor1() {}
}
