const departmentStores = [
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
        id: 567897,
        store: 'Walmart',
        location: 'Clifton Park NY',
        storeType: '3 floors',
        open: false
      },
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
];

module.exports = {
  departmentStores
};
