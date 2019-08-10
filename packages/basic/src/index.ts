
export const matchOne = (pattern: string, text: string): boolean => {
  if (!pattern) return true;
  if (!text) return false;
  if (pattern === '.') return true;
  return pattern === text
};

export const match = (pattern: string, text: string): boolean => {
  if (!pattern) return true;
  // if (!text) return false; // we don't need this because we match the end with $.
  if (pattern === '$' && text === '') return true;
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
