import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.sass']
})
export class ProjectStatusComponent implements OnInit {

  users = [
    {
      img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-512.png',
      assignee: "David Grey",
      subject: 'Funds is not received',
      status: "Done",
      css: 'do',
      update: '26 jun 2017',
      id: 'WD-12345'
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cloud_crying_rain_avatar-512.png',
      assignee: "Stella Johnson",
      subject: 'assign a new task Design Purpleadmin',
      status: "Progress",
      css: 'pr',
      update: '27 jun 2017',
      id: 'WD-12346'
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/nun_sister_woman_avatar-512.png',
      assignee: "Marina Michel",
      subject: 'Website down for one week',
      status: "On Hold",
      css: 'on',
      update: '28 jun 2017',
      id: 'WD-12347'
    },
    {
      img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/old_man_male_portrait-512.png',
      assignee: "John Doe",
      subject: 'Understanding dashboard problems',
      status: "Rejected",
      css: 're',
      update: '29 jun 2017',
      id: 'WD-12348'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
