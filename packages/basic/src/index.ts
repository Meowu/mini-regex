
export const matchOne = (pattern: string, text: string): boolean => {
  if (!pattern) return true;
  if (!text) return false;
  if (pattern === '.' && text !== '\n' && text !== '\r') return true;
  return pattern === text
};

export const match = (pattern: string, text: string): boolean => {
  if (!pattern) return true;
  // if (!text) return false; // we don't need this because we match the end with $.
  if (pattern === '$' && text === '') return true;
  if (pattern[1] === '?') {
    return matchQuestion(pattern, text)
  }
  if (pattern[1] === '*') {
    return matchStar(pattern, text);
  }
  return matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
};

export const search = (pattern: string, text: string): boolean => {
  if (pattern[0] === '^') {
    return match(pattern.slice(1), text)
  } else {
    // TODO: refactor this to be more efficient.
    return text.split('').some((_: string, index: number) => {
      return match(pattern, text.slice(index))
    })
  }
};

export const matchQuestion = (pattern: string, text: string): boolean => {
  // if (!text) return true; // in case 'b?', ''
  return !text || (matchOne(pattern[0], text[0]) && match(pattern.slice(2), text.slice(1))) || search(pattern.slice(2), text)
  // use search instead of match because match function do not match strings start anywhere, we may have 'b?a', 'ca'.
};

export const matchStar = (pattern: string, text: string): boolean => {
  return !text || (matchOne(pattern, text) && matchStar(pattern, text.slice(1))) || search(pattern.slice(2), text)
};
