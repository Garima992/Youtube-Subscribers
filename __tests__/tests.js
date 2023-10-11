const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Import your Express app
const expect = chai.expect;
const Subscriber=require('../src/models/subscribers');

//const request = require('supertest');

chai.use(chaiHttp);


describe('GET /subscribers APl',()=>{
         //test for the GET /subscribers endpoint
    describe('GET /subscribers',()=>{
       it('should get all subscribers', (done)=>{
         chai.request(app)
         .get('/subscribers')
         .end((err, res)=>{
          if(err) return done(err);
          expect (res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
         });
       });
     }); 
    



  //test for the GET /subscribers endpoint
describe('GET /subscribers,names',()=>{
it('should get all subscribers naem and channel', (done)=>{
  chai.request(app)
  .get('/subscribers/names')
  .end((err, res)=>{
   if(err) return done(err);
   expect (res).to.have.status(200);
   expect(res.body).to.be.an('array');
   done();
  });
});
}); 



     //test for the GET /subscribers/id endpoint
     describe('GET /subscriber/:id', ()=>{
     it('should get perticular subscriber by id', async()=>{
      //get the suscriber from collection
      const subscriber=await Subscriber.findOne();

      //confirm the susbcriber to be found
      if(!subscriber){
        throw new Error('No subscriber found.');
      }

      //get the id from the fetched document
      const subscriberId=subscriber._id.toString();

      //make request through chai-http
      const response=await chai.request(app).get(`/subscribers/${subscriberId}`);

      //Assertions
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('_id', subscriberId);
     });
    });
});


