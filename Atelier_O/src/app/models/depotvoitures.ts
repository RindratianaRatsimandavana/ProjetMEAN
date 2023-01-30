// export class User {
//     matricule: string = '';
//     nom?: string = '';
//     direction?: string = '';
//     service?: string = '';
//     fonction?: string = '';
//     codeDr?: string = '';
//   }
  

  export class depotvoitures {
        _id?: String;
        idClient ?: String;
        numVoiture ?: String;
        dateDepotVoit ?: Date;
        dateRecupVoit ?: Date;
        etatReception ?: Number;
        etatRecuperation ?: Number;
        etatTTlPaieemnt ?: Number;
        montantTTlPaiement ?: Number;
        dateDepotVoitAvecFormat ?:String;
        nomEtatReception ?:String;
  }
  