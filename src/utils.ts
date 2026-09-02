/**
 * Basic utility functions
 */

import { Weekday } from "./types";

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface WeekdaySelection {
    type: Weekday,
    name: string,
};

interface WeekdayInfo {
    today: WeekdaySelection,
    yesterday: WeekdaySelection,
    tomorrow: WeekdaySelection,
}

/**
 * Get a day of the week and its surrounding days.
 * @param index The index of the weekday
 * @returns 
 */
export function weekdayInfo(index: number): WeekdayInfo {
    const yesterday = (index + 6) % 7;
    const tomorrow = (index + 1) % 7;
    return {
        today: { type: weekdays[index].toLowerCase() as Weekday, name: weekdays[index] },
        yesterday: { type: weekdays[yesterday].toLowerCase() as Weekday, name: weekdays[yesterday] },
        tomorrow: { type: weekdays[tomorrow].toLowerCase() as Weekday, name: weekdays[tomorrow] },
    }
}