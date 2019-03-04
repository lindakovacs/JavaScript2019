const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
chai.use(require('chai-arrays'));

const {
  findId,
  deleteStore
} = require('../../exercises/10-recursion/recursion');
const {
  departmentStores
} = require('../../exercises/10-recursion/recursion-departmentStores-data');
const { tree } = require('../../exercises/10-recursion/recursion-tree-data');

describe('Recursion', () => {
  it('it should return a node that matches the given id', () => {
    const node = findId(tree, 567897);
    expect(node).to.eql({
      id: 567897,
      name: 'Consultants, Reviewers, and National Geographic Exploration',
      activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
      nodeType: 'activity',
      suppressed: false,
      hidden: false
    });
  });
  it('it should return a list of stores excluding the store with a matching id', () => {
    const nodeTree = deleteStore(departmentStores, 567897);
    expect(nodeTree).to.eql([
      {
        id: 1234567,
        store: 'Walmart HD',
        location: 'Albany NY',
        storeType: '2 floors',
        open: true
      },
      {
        branches: [
          {
            id: 567890,
            store: 'Walmart',
            location: 'White Plains NY',
            storeType: '2 floors',
            open: true
          }
        ]
      },
      {
        id: 54321,
        store: 'Target HD',
        location: 'Clifton Park',
        storeType: '3 floors',
        open: true
      },
      {
        branches: [
          {
            id: 575655,
            store: 'Target',
            location: 'Peekskill NY',
            storeType: '2 floors',
            open: true
          },
          {
            id: 5555555767667,
            store: 'target',
            activityId: 'JZLS37EVZQM22H9Q4655',
            location: 'white plains',
            open: false
          }
        ]
      }
    ]);
  });
});
