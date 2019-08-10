
export const matchOne = (pattern: string, text: string): boolean => {
  if (!pattern) return true;
  if (!text) return false;
  if (pattern === '.') return true;
  return pattern === text
};
