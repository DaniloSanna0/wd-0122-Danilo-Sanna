class Objject{
    public id:number
    private codprod:number
    public collezione:string
    public capo:string
    public prezzoivainclusa:number 
    private disponibile:string 
    protected saldo:number
    public modello:number
    protected quantita:number
    public colore:string
    public prezzoivaesclusa:number

        constructor(id:number,codprod:number,collezione:string,capo:string,prezzoivainclusa:number ,disponibile:string ,saldo:number,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,){
            this.id = id
            this.codprod = codprod
            this.collezione = collezione
            this.capo = capo
            this.prezzoivainclusa = prezzoivainclusa
            this.disponibile = disponibile
            this.saldo = saldo
            this.modello = modello
            this.quantita = quantita
            this.colore = colore
            this.prezzoivaesclusa = prezzoivaesclusa
        }

        getsaldocapo():number{
            return this.saldo = this.prezzoivainclusa * 0.3
        }

        getaquistocapo():number{
            return this.prezzoivainclusa
        }
}


fetch('../json/Abbigliamento.json')
.then(res => res.json())
.then(res => {
    //  for(let Objject of res){
         
    //     console.log(Objject.prezzoivaesclusa);
        
    // }
    let vestiti:Objject[] = []

     for(let a of res){
   
        let abb = new Objject(a.id, a.codprod, a.collezione, a.capo, a.prezzoivainclusa , a.disponibile , a.saldo, a.modello, a.quantita, a.colore, a.prezzoivaesclusa)

        vestiti.push(abb)
    }
    console.log(vestiti[0]);

    for (let x of vestiti) {
        console.log(x.getaquistocapo());
        console.log(x.getsaldocapo());
        
    }
})
