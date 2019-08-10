
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
