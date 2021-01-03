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
                name: "Rysunek na Instagram",
                deadline: new Date("2021-01-30"),
                isDone: false,
                penaltyForDay: 10,
            },
            {
                name: "Second",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 1000,
            },
            {
                name: "Gra w pilke",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 0,
            },
            {
                name: "Programowanie",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 1000,
            },
            {
                name: "Kupić kwiaty dla mamy i taty",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 10,
            },
            {
                name: "Cos",
                deadline: new Date(),
                isDone: false,
                penaltyForDay: 1000,
            },
            {
                name: "Second",
                deadline: new Date("2019-6-5"),
                isDone: false,
                penaltyForDay: 1000,
            },
        ];
        console.log(this.tasks);
    }
    public calculateTimeToExecute(task: TaskDto): number {
         return  Math.floor(( task.deadline.getTime()-new Date().getTime())/(1000 * 3600 * 24));
    }


  }