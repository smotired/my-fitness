// Defines different utility types for the application.
import Exercises from "./definitions/exercises";

export type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

/**
 * Different ways to qualify an exercise.
 */
export type Amount = {
    kind: 'duration',
    seconds: number,
} | {
    kind: 'count',
    count: number,
} | {
    kind: 'sets',
    sets: number,
    amount: Amount,
};

/**
 * Kinds of exercises extrapolated from the exercises record.
 */
export type ExerciseKind = keyof typeof Exercises;

/**
 * Definition of a stretch or exercise.
 */
export type Exercise = {
    kind: ExerciseKind,
    amount: Amount,
}

/**
 * Definition of a single day's workout routine.
 */
export type DailyRoutine = {
    // Stretches before morning dumbbell workout.
    preStretches: Exercise[],
    // Dumbbell workout done first thing in the morning.
    dumbbells: Exercise[],
    // Stretches after dumbbell workout.
    postStretches: Exercise[],
    // Evening cardio at the gym, warming up with the same exercise but slower beforehand.
    cardio: Exercise[],
}