import {Injectable} from '@angular/core';

@Injectable()
export class CookieService {

  /*
   * Create a cookie
   * @param cookieName
   * @param cookieValue
   * @param exdays
   * @return {string} cookie
   */
  public createCookie(cookieName: string, cookieValue: string, exdays: number): string {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    return document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
  }

  /*
   * Get a cookie by name
   * @param cookieName
   * @return {string} cookie
   */
  public getCookie(cookieName: string): string {
    const name = cookieName + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  /*
   * Check if a cookie exists
   * @param cookieName
   * @return {string} cookie
   */
  public checkCookie(cookieName: string): void {
    const cookie = this.getCookie(cookieName);
    if (cookie != '') {
      alert('Cookie exists');
    } else {
      alert('This cookie does not exist.');
    }
  }
}
