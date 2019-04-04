

const data = require('../database/db.data1.js');

test('counting how many company in database', () => {
    expect(data.length).toBe(100);
  });