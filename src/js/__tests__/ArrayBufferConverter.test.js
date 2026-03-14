import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('загрузить в буфер и преобразовать в строку', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('конвертер без буфера вернёт пустую строку', () => {
    expect(converter.toString()).toBe('');
  });

  test('пустой буфер вернёт пустую строку', () => {
    const emptyBuffer = new ArrayBuffer(0);
    converter.load(emptyBuffer);
    expect(converter.toString()).toBe('');
  });
});