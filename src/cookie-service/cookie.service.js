var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var CookieService = (function () {
    function CookieService() {
    }
    /*
     * Create a cookie
     * @param cookieName
     * @param cookieValue
     * @param exdays
     * @return {string} cookie
     */
    CookieService.prototype.createCookie = function (cookieName, cookieValue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        return document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
    };
    /*
     * Get a cookie by name
     * @param cookieName
     * @return {string} cookie
     */
    CookieService.prototype.getCookie = function (cookieName) {
        var name = cookieName + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    /*
     * Check if a cookie exists
     * @param cookieName
     * @return {string} cookie
     */
    CookieService.prototype.checkCookie = function (cookieName) {
        var cookie = this.getCookie(cookieName);
        if (cookie != '') {
            alert('Cookie exists');
        }
        else {
            alert('This cookie does not exist.');
        }
    };
    CookieService = __decorate([
        core_1.Injectable()
    ], CookieService);
    return CookieService;
})();
exports.CookieService = CookieService;
