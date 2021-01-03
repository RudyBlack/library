import {arrayUtil} from '../components/index.js';

test('isEmptyArray', () => {
  expect(arrayUtil.isEmptyArray([1, 2])).toBe(false);
});