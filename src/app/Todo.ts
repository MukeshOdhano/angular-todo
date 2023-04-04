export class Todo {

   title: string;
   subtitle: string;
   description: string;
   active: boolean;

   constructor(title: string, subtitle: string,  desc: string, activ: boolean) {

     this.title = title;
     this.subtitle = subtitle;
     this.description = desc;
     this.active = activ;
   }
}
