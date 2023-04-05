/**
 * Check if a child element is a decendant of a parent
 * @param child child element
 * @param parent parent element
 * @returns boolean
 */

const FAILED_REQUIRE = 'browser required'

/**
 * Check if a child element is a decendant of a parent
 * @param child child element
 * @param parent parent element
 * @returns boolean
 */
const isDescendant = (child: HTMLElement, parent: HTMLElement): boolean | string =>  document ? parent.contains(child) : FAILED_REQUIRE

/**
 * Check if an element is in focus
 * @param element element to detect focus on
 * @returns boolean
 */
const isFocused = (element: HTMLElement): boolean | string => document ? element === document.activeElement : FAILED_REQUIRE
/**
 * Detect if touch is supported in browser
 * @returns boolean
 */
// @ts-ignore
const touchSupported = (): boolean => Boolean('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

/**
 * Check if user scrolls to bottom of the page
 * @returns boolean
 */
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;

/**
 * Detect IE browser
 * @returns boolean
 */
// @ts-ignore
const isIE = () => document ? !!document.documentMode : false;

/**
 * Detects MacOS browser
 * @returns boolean
 */
const isMacBrowser = () => window? /Mac|iPod|iPhone|iPad/.test(navigator.platform) : false

/**
 * Get all siblings of an element
 * @param element element to query
 * @returns
 */
const getSiblings = (element: HTMLElement) => [].slice.call(element?.parentNode?.children).filter((child) => (child !== element));

/**
 * Get Selected text
 * @returns string
 */
const getSelectedText = () => window? window?.getSelection()?.toString() : false;

export {
  isDescendant,
  isFocused,
  touchSupported,
  isAtBottom,
  isIE,
  isMacBrowser,
  getSiblings,
  getSelectedText
}
