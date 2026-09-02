/**
 * Basic utility functions
 */

import { Weekday } from "./types";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Get the current day of the week.
 * @returns The type and name of the current weekday.
 */
export function getWeekday(): [ Weekday, string ] {
    const date = weekdays[new Date().getDay()];
    return [ date.toLowerCase() as Weekday, date ];
};