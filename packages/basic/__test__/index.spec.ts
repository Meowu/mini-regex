import { matchOne, match } from "../src";

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

describe('The match function should match the same length string', () => {

  test('it should work with equal length string', () => {
    expect(match('', '22')).toBeTruthy();
    expect(match('a', '')).toBeFalsy();
    expect(match('a', 'a')).toBeTruthy();
    expect(match('a', 'b')).toBeFalsy();
    expect(match('a.', 'ab')).toBeTruthy();
    expect(match('.', 'c')).toBeTruthy();
    expect(match('a.c', 'abc')).toBeTruthy();
  });

  test('it should match the end of the string', () => {
    expect(match('$', '')).toBeTruthy();
    expect(match('az$', 'az')).toBeTruthy();
  })
});
