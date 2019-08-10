import { matchOne, match, search, matchQuestion, matchStar } from "../src";

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
  });

  test('it should work with pattern that has question mark', () => {
    expect(match('a?b', 'b')).toBeTruthy();
    expect(match('a?b', 'ab')).toBeTruthy();
    expect(match('ab?', 'a')).toBeTruthy();
    expect(match('ab?c', 'ac')).toBeTruthy();
  });

  test('it should support the pattern with *', () => {
    expect(match('ab*c', 'ac')).toBeTruthy();
    expect(match('ab*', 'ac')).toBeTruthy();
    expect(match('b*', 'a')).toBeTruthy();
    expect(match('ab*c', 'abc')).toBeTruthy();
    expect(match('ab*c', 'abbbc')).toBeTruthy();
  })
});

describe('The search function', () => {
  test('it should match the start of string', () => {
    expect(search('^', '')).toBeTruthy();
    expect(search('^a', '')).toBeFalsy();
    expect(search('^.', 'a')).toBeTruthy();
  });

  test('it should match the strings start at any place of the text', () => {
    expect(search('aa', 'baa')).toBeTruthy();
    expect(search('bcs', 'abcs')).toBeTruthy();
    expect(search('abser', 'bsar')).toBeFalsy();
  })
});

describe('The matchQuestion function', () => {

  test('it should detect question mark and return correct result', () => {
    expect(matchQuestion('a?b', 'b')).toBeTruthy();
    expect(matchQuestion('a?b', 'ab')).toBeTruthy();
    expect(matchQuestion('b?', 'a')).toBeTruthy();
    expect(matchQuestion('b?', '')).toBeTruthy();
    expect(matchQuestion('b?c', 'ac')).toBeTruthy();
  })
});

describe('The matchStar function', () => {

  test('it should match the * with 0 or more times', () => {
    expect(matchStar('a*', '')).toBeTruthy();
    expect(matchStar('a*', 'a')).toBeTruthy();
    expect(matchStar('a*', 'aaaa')).toBeTruthy();
  })
});

// Now all string of these test cases was manually write.
// TODO: add more test cases with randomly generated string to strongly hold my engine.
// or use fuzzing: https://nickdrane.com/regex-and-automated-test-fuzzing/
