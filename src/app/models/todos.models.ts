

export interface Todo{
    todo: String;
    done: Boolean;
    id: Number;
}

export class TodoClass implements Todo{
    public todo: string = "";
    public done: boolean = false;
    public id: Number = 0;

    constructor(
        todo: string, 
        done: boolean, 
        id: number) 
    {
        this.todo = todo;
        this.done = done;
        this.id = Math.floor((Math.random()*6)+1); 
    }
    
}