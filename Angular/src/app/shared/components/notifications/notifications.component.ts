import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/core/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public notificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

}
