import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../src/App';


chai.use(chaiHttp);
const expect = chai.expect;

/* describe test base */
describe('baseRoute', () => {
    /* assertations tests */
    it('should be json', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });// end of it should

    /* assertations tests */
    it('should have a message prop', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.body.message).to.eql('Hello World!');
            });
    });// end of it should
});// end of describe test base