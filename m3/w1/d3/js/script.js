//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(cod, ral, tin, tir) {
        this.codredd = cod;
        this.redditoAnnuoLordo = ral;
        this.tasseInps = tin;
        this.tasseIrpef = tir;
    }
    Lavoratore.prototype.getTasseInps = function () {
        return this.tasseInps * this.redditoAnnuoLordo;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.tasseIrpef * this.redditoAnnuoLordo;
    };
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * this.codredd;
    };
    return Lavoratore;
}());
//
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.codredd - this.tasseInps - this.tasseIrpef;
    };
    return Artigiano;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.codredd - this.tasseInps - this.tasseIrpef;
    };
    return LiberoProfessionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.codredd - this.tasseInps - this.tasseIrpef;
    };
    return Commerciante;
}(Lavoratore));
var l1 = new Artigiano(300, 30000, 600, 1500);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l2 = new LiberoProfessionista(500, 50000, 1000, 1000);
console.log('utile tasse LiberoProfessionista:' + l2.getUtileTasse() + '€');
console.log('tasse inps LiberoProfessionista:' + l2.getTasseInps() + '€');
console.log('tasse irpef LiberoProfessionista:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LiberoProfessionista:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l3 = new Commerciante(700, 70000, 1700, 2000);
console.log('utile tasse Commerciante:' + l3.getUtileTasse() + '€');
console.log('tasse inps Commerciante:' + l3.getTasseInps() + '€');
console.log('tasse irpef Commerciante:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto Commerciante:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
