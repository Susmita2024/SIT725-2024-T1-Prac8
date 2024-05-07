const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');
const axios = require('axios');

describe('test GET api', function () {
  it('returns statusCode of 200', async () => {
    //const response = await fetch('http://localhost:3000/api/cards');
    const response = await axios.get('http://localhost:3000/api/cards');
    assert.equal(response.status, 200);
  });
});

describe('test POST api', () => {
  it('post dog to DB', async () => {
    const json = {
      value: {
        title: 'myDog',
        color: 'white',
        imagePath: 'https://i.postimg.cc/g2ZG44ks/dog.png',
        description: 'my awesome dog',
      },
    };
    request.post(
      'http://localhost:3000/api/cards',
      { json: json },
      (error, response, body) => {
        if (error) {
          assert.fail(0, 1, 'error not expected');
        }
      });
  });
});

describe('test DELETE api', () => {
  it('delete dog from DB', async () => {
    const json = {
      "title": "kutta",
      "color": "black",
      "imagePath": "https://i.postimg.cc/j2J0x4Cj/dog1.png",
      "description": "Kala kutta"
    };
    request.delete(
      'http://localhost:3000/api/cards',
      { json: json },
      (error, response, body) => {
        if (error) {
          assert.fail(0, 1, 'error not expected');
        }
      });
  });
});
