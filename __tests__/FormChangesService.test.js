import { getUserDataChanges } from '../src/services/FormChangesService.js';

test('Common case', () => {
  const previousData = { name: 'Bill', lastName: 'Clinton', login: 'Bg211' };
  const actualData = { name: 'Bill', lastName: 'Gates', login: 'Bg212' };
  const changes = getUserDataChanges(previousData, actualData);
  expect(changes).toEqual({ lastName: 'Gates', login: 'Bg212' });
});

test('With unchanged form state', () => {
  const data = { name: 'Bill', lastName: 'Clinton' };
  const emptyChanges = getUserDataChanges(data, data);
  expect(emptyChanges).toBeNull();
});

test('With empty form state', () => {
  const emptyChanges = getUserDataChanges({}, {});
  expect(emptyChanges).toBeNull();
});