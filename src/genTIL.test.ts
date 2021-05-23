import { genTILData } from './genTIL';

test('genTIL output key substring', () => {
  const folder: string = './test/mockFolder/';
  const result: string = genTILData(folder).allTitleAndUrlInMd;
  expect(result).toContain('TS');
  expect(result).toContain('JS');
  expect(result).toContain('ts-a1');
  expect(result).toContain('ts-a2');
  expect(result).toContain('js-t1');
  expect(result).toContain('js-t2');
  expect(result).toContain(
    'https://github.com/re4388/re4388/blob/master/til/TS/ts-a1.md'
  );
  expect(result).toContain(
    'https://github.com/re4388/re4388/blob/master/til/TS/ts-a2.md'
  );
  expect(result).toContain(
    'https://github.com/re4388/re4388/blob/master/til/JS/js-t1.md'
  );
  expect(result).toContain(
    'https://github.com/re4388/re4388/blob/master/til/JS/js-t2.md'
  );
});
