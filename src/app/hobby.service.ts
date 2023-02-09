export class HobbyService{
    private data: string[]=["Music","Fitness","Modeling","Hunting"];

    getData():string[]{
        return this.data;
    }
    addData(title:string){
        this.data.push(title);
    }
}