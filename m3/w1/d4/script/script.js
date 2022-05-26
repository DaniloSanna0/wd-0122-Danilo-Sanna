var Objject = /** @class */ (function () {
    function Objject(id, codprod, collezione, capo, prezzoivainclusa, disponibile, saldo, modello, quantita, colore, prezzoivaesclusa) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
    }
    Objject.prototype.getsaldocapo = function () {
        return this.saldo = this.prezzoivainclusa * 0.3;
    };
    Objject.prototype.getaquistocapo = function () {
        return this.prezzoivainclusa;
    };
    return Objject;
}());
fetch('../json/Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (res) {
    //  for(let Objject of res){
    //     console.log(Objject.prezzoivaesclusa);
    // }
    var vestiti = [];
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var a = res_1[_i];
        var abb = new Objject(a.id, a.codprod, a.collezione, a.capo, a.prezzoivainclusa, a.disponibile, a.saldo, a.modello, a.quantita, a.colore, a.prezzoivaesclusa);
        vestiti.push(abb);
    }
    console.log(vestiti[0]);
    for (var _a = 0, vestiti_1 = vestiti; _a < vestiti_1.length; _a++) {
        var x = vestiti_1[_a];
        console.log(x.getaquistocapo());
        console.log(x.getsaldocapo());
    }
});
