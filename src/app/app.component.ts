import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apgular-student-app';
  id:number=20;
  studentName:string='kiran';
  grade:boolean=true;



  constructor(){
    // this.add(1,2);
    // this.subtraction(3,4);
    // this.multiplication(4,3);
    // this.ageSexName(1,'male','kiran');
    this.numberBooleanString(10,true,'kiran');




  



  }

add(n1:number,n2:number){
console.log(n1+n2);

}
subtraction(n1,n2){
console.log(n1-n2);


}
multiplication(n1,n2){
console.log(n1*n2);

}
name(a){
  console.log(a);


}
ageSexName(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);


}
numberBooleanString(a:number,b:boolean,c:string){
  console.log(a);
  console.log(b);
  console.log(c);
}



}
