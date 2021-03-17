import { monthNames } from './../utils/constants';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: any): string {
    const today = new Date().getTime();
    const publishedAt = new Date(date).getTime();
    const difference = Math.round(Math.abs(today - publishedAt));
    const oneDay = 24 * 60 * 60 * 1000;
    const diffMinutes = Math.round(difference / 1000 / 60);
    const diffHours = Math.round(difference / 1000 / 3600);
    const diffDays = Math.round(Math.abs((today - publishedAt) / oneDay));

    const formattedDay = new Date(date).getDate();
    const formattedMonth = new Date(date).getMonth();
    const formattedYear = new Date(date).getFullYear();
    const formattedDate =
      monthNames[formattedMonth] + ' ' + formattedDay + ',' + formattedYear;

    if (diffMinutes === 1) {
      return diffMinutes + ' ' + 'minute ago';
    }
    if (diffMinutes > 1 && diffMinutes < 60) {
      return diffMinutes + ' ' + 'minutes ago';
    }
    if (diffHours === 1) {
      return diffHours + ' ' + 'hour ago';
    }
    if (diffHours > 1 && diffHours < 24) {
      return diffHours + ' ' + 'hours ago';
    }
    if (diffDays === 1) {
      return diffDays + ' ' + 'day ago';
    }
    if (diffDays > 1 && diffDays < 4) {
      return diffDays + ' ' + 'days ago';
    }
    if (diffDays > 4) {
      return formattedDate;
    }
    return 'Unknown date';
  }
}
