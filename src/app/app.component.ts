import { Component } from '@angular/core';
import { HobbyService } from './hobby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: string[]=[];
  title:string="";
  selectedItem:string =this.items[0];
  oldSelectedItem:string=this.items[0];

  onSelect(item: string):void{
    if(this.selectedItem){
      this.oldSelectedItem=this.selectedItem;
    }
    else{
      this.oldSelectedItem=item;
    }
    this.selectedItem=item;
   
    console.log(this.oldSelectedItem);
    console.log(this.selectedItem);
  }

  constructor(private hobbyService:HobbyService){}

  addItem(title:string){
    this.hobbyService.addData(title);
  }

  editItem(title:string){
    for(let i in this.items){
      console.log(i);
      if(this.items[i]==this.oldSelectedItem){
        this.items[i]=title;
      }
      console.log(i);
    }
  }
  ngOnInit(){
  this.items=this.hobbyService.getData();
  }
}
