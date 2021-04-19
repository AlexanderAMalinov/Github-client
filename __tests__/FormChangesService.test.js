import { getUserDataChanges } from '../src/services/FormChangesService.js';

test('common cases', () => {
  const previousData = { name: 'Bill', lastName: 'Clinton' };
  const actualData = { name: 'Bill', lastName: 'Gates' };

  const changes = getUserDataChanges(previousData, actualData);
  expect(changes).toEqual([{ key: 'lastName', value: 'Gates' }]);
});