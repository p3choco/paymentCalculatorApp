import { Component, OnInit } from '@angular/core';
import { TaskDto } from 'src/app/Logic/Dtos/task.dto';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })

  export class CardComponent implements OnInit {

    public tasks: TaskDto[];

    constructor(){
    }

    ngOnInit(): void {
        this.tasks = [
            {
                name: "First",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 10,
            },
            {
                name: "Second",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 1000,
            },
        ];
        console.log(this.tasks);
    }
    


  }