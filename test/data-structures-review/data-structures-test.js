const chai = require('chai');
chai.use(require('chai-arrays'));
const expect = chai.expect;

const {
  upperCaseEachElementInArray,
  addMiddleNameToObject,
  stringToArrayConverter,
  dynamicObject
} = require('../../exercises/03-data-structures-review/data.structures-review');

describe('Data Structures review', () => {
  it('it should upper case Each Element In An Array', () => {
    const upperCasedArray = upperCaseEachElementInArray([
      'rusty',
      'nails',
      'fido'
    ]);
    expect(upperCasedArray).to.be.equalTo(['Rusty', 'Nails', 'Fido']);
  });
  it('it should add a Middle Name to an Existing Object', () => {
    const nameObj = addMiddleNameToObject(
      { firstName: 'Tom', lastName: 'Kent' },
      'Edward'
    );
    expect(nameObj).to.deep.equal({
      firstName: 'Tom',
      lastName: 'Kent',
      middleName: 'Edward'
    });
  });
  it('it should convert a String to an Array', () => {
    const array = stringToArrayConverter('I went to the store');
    expect(array).to.be.array();
    expect(array.length).to.equal(5);
  });
  it('it should return an object tallying the amount of occurrences inside a given array', () => {
    const occurrences = dynamicObject([
      'Rusty',
      'Rusty',
      'Nails',
      'Baki',
      'Baki',
      'Doppa'
    ]);
    expect(occurrences).to.deep.equal({
      Rusty: 2,
      Nails: 1,
      Baki: 2,
      Doppa: 1
    });
  });
});
