import { getFileNameWithoutExt, whiteSpaceAdder } from './utils';

test('getFileNameWithoutExt works', () => {
  const result = whiteSpaceAdder('I am a good rabbit');
  expect(result).toBe('I%20am%20a%20good%20rabbit');
});

test('whiteSpaceAdder works', () => {
  const result = getFileNameWithoutExt('index.ts');
  expect(result).toBe('index');
});
