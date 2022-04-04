const app = require("../src/app");
const User = require("../src/db/models/user");
const { userOne, userOneObjectID, setUpDataBase } = require("./utils/db");
const request = require("supertest");
const chai = require("chai");
const sinon = require("sinon");
const assert = require('assert');
const { AssertionError } = require('assert');
const expect = chai.expect;
const should = chai.should;
should();

beforeEach(setUpDataBase);

describe("TestCases", () => {
  //write your code here
  const newUser = {
    firstName: "User",
    lastName: "One",
    age: 40,
    email: "user@one.com"
  };

  it("dummy test case", async () => {
    const dummy = [{}];
    dummy.should.have.length(1);
  });

  it('GET User', async function () {
    const response = await request(app)
      .get('/user')
      .set('Accept', 'application/json');
    response.body.should.be.a('array');
  });

  it('Create User', async function () {
    const response = await request(app)
      .post('/user')
      .send(newUser)
      .set('Accept', 'application/json');
    response.body.should.be.a('object');
  });

  it('Create User Error', async function () {
    const response = await request(app)
      .post('/user')
      .send()
      .set('Accept', 'application/json');
    response.body.should.be.a('object');
    expect(response.status).to.eq(400);
  });

  it('Update User', async function () {
    const response = await request(app)
      .patch('/user/' + userOne._id)
      .send({ "firstName": "UserTwo" })
      .set('Accept', 'application/json');
    response.body.should.be.a('object');
  });

  it('Update Error',  function (done) {
   let stub = sinon.stub(User, 'findById');
        let expectedError = new Error('oops');
        stub.yields(expectedError);

        request(app)
            .patch('/user/' + userOne._id)
            .expect(function(res){
                expect(res.status).to.eq(400)
            })
            .end(done);
  });

  it('Delete User', async function () {
    const response = await request(app)
      .delete('/user/' + userOne._id)
      .set('Accept', 'application/json');
    response.body.should.be.a('object');
  });

  it('Delete Error',  function (done) {
   let stub = sinon.stub(User, 'deleteOne');
        let expectedError = new Error('oops');
        stub.yields(expectedError);

        request(app)
            .delete('/user/' + userOne._id)
            .expect(function(res){
                expect(res.status).to.eq(400)
            })
            .end(done);
  });
})
