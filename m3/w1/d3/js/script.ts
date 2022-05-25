//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    
    codredd:number
    redditoAnnuoLordo:number
    tasseInps:number
    tasseIrpef:number

    constructor(cod:number, ral:number, tin:number, tir:number){
        this.codredd = cod
        this.redditoAnnuoLordo = ral
        this.tasseInps = tin
        this.tasseIrpef = tir
    }

    getTasseInps():number{
        return this.tasseInps * this.redditoAnnuoLordo
    }

    getTasseIrpef():number{
        return this.tasseIrpef * this.redditoAnnuoLordo
    }

    getUtileTasse():number{
        return this.redditoAnnuoLordo * this.codredd
    }

    abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
        return this.redditoAnnuoLordo - this.codredd -this.tasseInps - this.tasseIrpef
    }
}
class LiberoProfessionista extends Lavoratore {

    getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.codredd -this.tasseInps - this.tasseIrpef
    }
}
class Commerciante extends Lavoratore {

    getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.codredd -this.tasseInps - this.tasseIrpef
        
    }
}

let l1 = new Artigiano(300, 30000, 600, 1500);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(500, 50000, 1000, 1000);
console.log('utile tasse LiberoProfessionista:' + l2.getUtileTasse() + '€');
console.log('tasse inps LiberoProfessionista:' + l2.getTasseInps() + '€');
console.log('tasse irpef LiberoProfessionista:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LiberoProfessionista:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(700, 70000, 1700, 2000);
console.log('utile tasse Commerciante:' + l3.getUtileTasse() + '€');
console.log('tasse inps Commerciante:' + l3.getTasseInps() + '€');
console.log('tasse irpef Commerciante:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto Commerciante:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');