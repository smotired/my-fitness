// Defines the default meal plan. This is the main file to edit with diet changes.
import { Weekday, DailyMealPlan } from "../types";

const MealPlan: Record<Weekday, DailyMealPlan> = {
    monday: {
        breakfast: [
            { kind: 'proteinShake', servings: 1 },
        ],
        lunch: [
            { kind: 'peanutBar', servings: 2 },
        ],
        dinner: [
            { kind: 'cheesesteak', servings: 1 },
            { kind: 'fries', servings: 1 },
            { kind: 'soda', servings: 30 },
        ],
    },
    tuesday: {
        breakfast: [
            { kind: 'proteinShake', servings: 1 },
        ],
        lunch: [
            { kind: 'turkeyWrap', servings: 1 },
        ],
        dinner: [
            { kind: 'pasta', servings: 1 },
            { kind: 'broccoli', servings: 1 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
    wednesday: {
        breakfast: [
            { kind: 'proteinShake', servings: 1 },
        ],
        lunch: [
            { kind: 'chickenBowl', servings: 1 },
        ],
        dinner: [
            { kind: 'pasta', servings: 1 },
            { kind: 'broccoli', servings: 1 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
    thursday: {
        breakfast: [
            { kind: 'proteinShake', servings: 1 },
        ],
        lunch: [
            { kind: 'turkeyWrap', servings: 1 },
        ],
        dinner: [
            { kind: 'pasta', servings: 1 },
            { kind: 'broccoli', servings: 1 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
    friday: {
        breakfast: [
            { kind: 'proteinShake', servings: 1 },
        ],
        lunch: [
            { kind: 'chickenBowl', servings: 1 },
        ],
        dinner: [
            { kind: 'pizza', servings: 3 },
            { kind: 'crazyBread', servings: 3 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
    saturday: {
        breakfast: [],
        lunch: [
            { kind: 'pizza', servings: 2 },
            { kind: 'crazyBread', servings: 2 },
        ],
        dinner: [
            { kind: 'pizza', servings: 3 },
            { kind: 'crazyBread', servings: 3 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
    sunday: {
        breakfast: [],
        lunch: [
            { kind: 'pasta', servings: 1 },
            { kind: 'broccoli', servings: 1 },
        ],
        dinner: [
            { kind: 'stirFry', servings: 1 },
            { kind: 'dietSoda', servings: 12 },
        ],
    },
};

export default MealPlan;