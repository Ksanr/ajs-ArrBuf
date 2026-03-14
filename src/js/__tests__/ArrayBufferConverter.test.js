import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test.each([
    { description: 'загруженный буфер с данными', buffer: getBuffer(), expected: '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}' },
    { description: 'буфер не загружен', buffer: null, expected: '' },
    { description: 'загружен пустой буфер', buffer: new ArrayBuffer(0), expected: '' },
  ])('$description, toString возвращает "$expected"', ({ buffer, expected }) => {
    if (buffer) converter.load(buffer);
    expect(converter.toString()).toBe(expected);
  });
});