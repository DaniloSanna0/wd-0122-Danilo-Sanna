import { Component } from '@angular/core';
import { P } from './p';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http';

  favCounter = 0
  
  poto:P[] = []

  constructor(private foto:PhotoService){
  }

  

  ngOnInit():void{
    this.foto.getPhotos().subscribe((res) => {
      console.log(res);
      this.poto = res.slice(0, 10)
    })

    this.foto.favouritePhotos.next(this.favCounter)
  }

  elimina(id:number){
    this.foto.deltePhoto(id).subscribe((res)=>{
      console.log("delte", res);
      // this.poto = res.slice(0,10)
      this.poto = this.poto.filter(p => p.id != id)
    })
  }
  

  like() {
    this.foto.addFav()
    this.favCounter = this.foto.counter
  }
}
