type validator<T> = (v: T) => boolean;

export const required: validator<string> = (v) => !!v;

export const rangeValidator = (min: number, max: number): validator<string> => v => {
  if (!v) return false;
  const parsedValue = parseInt(v);

  return parsedValue >= min && parsedValue <= max;
}

export interface IRangeForUnits {
  [unit: string]: [ number, number]
}

export const heightValidator = (rangesForUnits: IRangeForUnits): validator<string> => v => {
  const [ unit ] = v && v.match(/(cm|in)/) || [];
  if (!unit) return false;

  return rangeValidator(...rangesForUnits[unit])(v);
}

export const oneOfValidator = (allowed: string[]): validator<string> => v => {
  return allowed.some(a => a === v);
}

export const regexValidator = (regex: RegExp): validator<string> => v => {
  return v && !!v.match(regex);
}