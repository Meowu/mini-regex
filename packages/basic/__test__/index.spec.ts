import { matchOne } from "../src";

describe('The matchOne function works fine', () => {

  test('it should be true with empty pattern', () => {
    expect(matchOne('', 'aa')).toBeTruthy()
  });

  test('it should be false when passed empty text', () => {
    expect(matchOne('a', '')).toBeFalsy()
  });

  test('it should always true if pattern is "."', () => {
    expect(matchOne('.', 'a')).toBeTruthy();
    expect(matchOne('.', 'b')).toBeTruthy();
    expect(matchOne('.', '1')).toBeTruthy()
  });

  test('it should work correctly with matching single character', () => {
    expect(matchOne('a', 'a')).toBeTruthy();
    expect(matchOne('a', 'b')).toBeFalsy()
  });

});
