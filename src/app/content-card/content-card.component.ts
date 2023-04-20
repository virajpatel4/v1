import { Component } from '@angular/core';
import { ContentList } from '../../../src/helper-files/content-list';
import { Content } from '../../../src/helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent{
  initContent= new ContentList([]);
  contentIndex:number = 0; 
  fetchedContent:Content | undefined;
  errorMessage:string=``;
  generateContent(id:number,contentArr:(string)[]){
    return {
      id,
      title:contentArr[0],
      description:contentArr[1],
      creator:contentArr[2]
    }
  }
 
  constructor(){
    this.initContent.addContentToPrivateArr({
        ...this.generateContent(
          1,['Virat Kohli','Run Machine Kohli','India']
          ),
          ...{imgURL:'https://www.thestatesman.com/wp-content/uploads/2019/07/Virat-Kohli.jpg'},
          ...{type:'Bating'},
          ...{tags:['Batting']}
        });
    this.initContent.addContentToPrivateArr({
      ...this.generateContent(
        2,['Liton Das',`He is a one of the best batsman for bangladesh`,'Bangladesh']
        ),
        ...{imgURL:'https://staticg.sportskeeda.com/editor/2020/03/797c3-15830758836732-800.jpg'}
      });
    this.initContent.addContentToPrivateArr({
      ...this.generateContent(
        3,['Kevin peterson','highest number of run for england,England']
        )
    });
  }

  onSubmit():void{
    try{
      this.fetchedContent = this.initContent.getContentAtSpecificIndex(this.contentIndex);
      this.errorMessage='';
    }catch{
      this.errorMessage=`Entered Array index is out of bound please enter value between 0 and ${this.initContent.contentArr.length-1} (inclusive)`;
    }
  }

  //totalContents = this.initContent.contentArr
}
