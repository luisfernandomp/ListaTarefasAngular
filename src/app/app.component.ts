import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoClass } from './models/todos.models';
import { faPlusSquare, faTrash, faSave, faTimes, faPlusCircle, faCheckCircle, faRedo, faMinusSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root', // Se transforma numa tag HTMl
  templateUrl: './app.component.html',
  /*
    O HTML pode ser colocado aqui dentro dessas aspas no template
    template : ''
  */

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* 
    Qualquer coisa - any
    Tipo object em C#
  */
  public mode: string = 'list';
  public faMinusSquare = faMinusSquare;
  public faPlusSquare = faPlusSquare;
  public faTimes = faTimes;
  public faCheckCircle = faCheckCircle;
  public faTrash = faTrash;
  public faPlusCircle = faPlusCircle;
  public faRedo = faRedo;
  public faSave = faSave;
  public todos: TodoClass[] = []; //[]
  public title: String = "Minhas tarefas";
  public form!: FormGroup;
  // public todos: any[] -> undefined

  /**
   *
   */
  constructor(private formBuilder: FormBuilder) {
    // super() -> usado para herdar o construtor da classe que eu estou herdando
    // se fosse o caso

    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  
  }

  ngOnInit(): void{
    this.load();
  }

  remove(todo: TodoClass): void{
    const index = this.todos.indexOf(todo);

    if(index !== -1){
      this.todos.splice(index, 1);
    }
    this.save();
  }

  add(): void{
    const title = this.form.controls['title'].value;
    const id = this.todos.length  + 1;
    this.todos.push(new TodoClass(title, false, id ));
    this.save();
    this.clear();
  }

  markAsDone(todo: TodoClass): void{
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: TodoClass): void{
    todo.done = false;
    this.save();
  }

  clear(): void{
    this.form.reset();
  }

  //SessionStorage é limpo toda vez que você fecha uma aba
  //LocalStorage até reiniciando a máquina ele está lá

  save(): void{
    const data = JSON.stringify(this.todos);
    localStorage.setItem("todos", data);
    this.mode = 'list';
  }

  load(): void{
    const data = localStorage.getItem("todos");
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }

  changeMode(mode: string){
    this.mode = mode;
  }
}
