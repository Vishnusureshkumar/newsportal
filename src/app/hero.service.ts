import { Injectable } from '@angular/core';
import { database,homeCard, malayalam,hindi,tamil,telungu,international,entertainment,business,tech,sports, } from 'src/assets/data/data';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fireauth : AngularFireAuth,private router : Router) { }

//login
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then ( ()=>{
    localStorage.setItem('token','true');
    this.router.navigate(['home']);

    },err =>{
        alert(err.message);
        this.router.navigate(['/login']);
    }
    )
  }

//register

register(email : string, password : string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then ( ()=>{
  alert('registration successful')
  this.router.navigate(['/login']);

  },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
  }
  )
}


//signout
logout(){
this.fireauth.signOut().then( () =>{
localStorage.removeItem('Token');
this.router.navigate(['/login']);
},err=>{
alert(err.message)
}

)
}


  getData(){
    return database
  }

  getDatas(){
    return malayalam
  }
  getDatass(){
    return hindi
  }
  getData1(){
    return tamil
  }
  getData2(){
    return telungu
  }
  getData3(){
    return sports
  }
  getData4(){
    return tech
  }
  getData5(){
    return international
  }
  getData6(){
    return entertainment  
   }
  getData7(){
    return business
  }

getHomeCard(){
return homeCard
}

}
