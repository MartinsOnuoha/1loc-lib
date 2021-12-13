/**
 * append AM or PM to hour
 * @param h hour of day
 * @returns hour appended with AM or PM
 */
const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

export {
  suffixAmPm
}
