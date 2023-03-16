import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlehome',
  templateUrl: './singlehome.component.html',
  styleUrls: ['./singlehome.component.css']
})
export class SinglehomeComponent {
  single:any
  constructor(private h:HeroService){}
  ngOnInit(){
    let homeCardId=localStorage.getItem('homeCardId')
    this.single=this.h.getHomeCard().filter(data=>data.id===homeCardId)
    console.log(this.single[0]);
  }

}
