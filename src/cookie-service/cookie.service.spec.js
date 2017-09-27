var testing_1 = require('@angular/core/testing');
var cookie_service_1 = require('./cookie.service');
describe('CookieService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cookie_service_1.CookieService]
        });
    });
    it('should be created', testing_1.inject([cookie_service_1.CookieService], function (service) {
        expect(service).toBeTruthy();
    }));
});
