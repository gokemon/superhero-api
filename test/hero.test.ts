import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../src/App';


chai.use(chaiHttp);
const expect = chai.expect;

/* describe test base */
describe('GET api/v1/heroes', () => {
    /* assertations tests */
    it('responds with JSON array', () => {
        return chai.request(app).get('/api/v1/heroes')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.length(5);
            });
    }); // end of it responds


    /* assertations tests */
    it('should include Wolverine', () => {
        return chai.request(app).get('/api/v1/heroes')
            .then(res => {
                let Wolverine = res.body.find(hero => hero.name === 'Wolverine');
                expect(Wolverine).to.exist;
                expect(Wolverine).to.have.all.keys([
                    'id',
                    'name',
                    'aliases',
                    'occupation',
                    'gender',
                    'height',
                    'hair',
                    'eyes',
                    'powers'
                ]);
            });
    });// end of it should
});// end of describe test base