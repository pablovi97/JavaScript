import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications: string[] = [];

  constructor() { }

  add(notification: string): void {
    this.notifications.push('[' + new Date() + '] '
          + notification);
  }

  clear(): void {
    this.notifications = [];
  }
}
