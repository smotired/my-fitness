/**
 * Basic utility functions
 */

import { Amount, Weekday } from "./types";

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

/**
 * Scale an amount by a scaling factor
 * @param amount The amount to scale
 * @param scale How much to scale the amount
 * @returns A scaled amount
 */
export function scaleAmount(amount: Amount, scale: number): Amount {
    switch (amount.kind) {
        case 'count':
            return { kind: 'count', count: Math.round(amount.count * scale) };
        case 'duration':
            return { kind: 'duration', seconds: Math.round(amount.seconds * scale) };
        case 'sets':
            // Decide if we should add or remove a set
            let newSets = amount.sets;
            if (scale <= (amount.sets - 1) / amount.sets)
                newSets = amount.sets - 1;
            else if (scale >= (amount.sets + 1) / amount.sets)
                newSets = amount.sets + 1;
            let setFactor = newSets / amount.sets; // this is how much we have scaled already
            let newScale = scale / setFactor; // this is how much to scale the rest of it
            // example: 60%
            // 2 / 3 = 67%, 60%<67% so we will do 2 sets
            // 60% / 67% ~= 90%, so scale the rest of the exercises by 90%
            return {
                kind: 'sets',
                sets: newSets,
                amount: scaleAmount(amount.amount, newScale),
            }; 
    }
}