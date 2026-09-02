// Defines the default daily routine. This is the main file to edit with routine changes.
import { Weekday, DailyRoutine } from "../types";

const Routine: Record<Weekday, DailyRoutine> = {
    // Chest and Triceps
    monday: {
        preStretches: [
            {
                kind: 'armCircles',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'crossSwings',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'shoulderRolls',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'pushUpDownDog',
                amount: { kind: 'count', count: 10 },
            },
        ],
        dumbbells: [
            {
                'kind': 'dumbbellFloorPress',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'dumbbellFlyes',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'overheadTricep',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'tricepKickbacks',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
        ],
        postStretches: [
            {
                kind: 'doorwayStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'overheadTricepStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'crossShoulderStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'childPose',
                amount: { kind: 'duration', seconds: 20 },
            },
        ],
        cardio: [
            {
                kind: 'rowing',
                amount: { kind: 'duration', seconds: 1800 },
            }
        ],
    },
    // Back and Biceps
    tuesday: {
        preStretches: [
            {
                kind: 'catCow',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'armCircles',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'torsoTwists',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'crossSwings',
                amount: { kind: 'duration', seconds: 30 },
            },
        ],
        dumbbells: [
            {
                'kind': 'bentOverRows',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'singleArmRows',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'bicepCurls',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'hammerCurls',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
        ],
        postStretches: [
            {
                kind: 'childPose',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'kneelingLatStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'seatedForwardFold',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'crossBicepStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
        ],
        cardio: [
            {
                kind: 'treadmillIncline',
                amount: { kind: 'duration', seconds: 1800 },
            }
        ],
    },
    // Legs and Glutes
    wednesday: {
        preStretches: [
            {
                kind: 'legSwings',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'hipCircles',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'squats',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'highKnees',
                amount: { kind: 'duration', seconds: 30 },
            },
        ],
        dumbbells: [
            {
                'kind': 'gobletSquats',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'walkingLunges',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'romanianDeadlifts',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'gluteBridges',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 15 } },
            },
        ],
        postStretches: [
            {
                kind: 'standingQuadStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'seatedHamstringStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'fig4GluteStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'standingCalfStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'kneelingHipFlexorStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
        ],
        cardio: [
            {
                kind: 'elliptical',
                amount: { kind: 'duration', seconds: 1800 },
            }
        ],
    },
    // Shoulders and Core
    thursday: {
        preStretches: [
            {
                kind: 'armCircles',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'shoulderRolls',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'standingSideBends',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'catCow',
                amount: { kind: 'count', count: 10 },
            },
        ],
        dumbbells: [
            {
                'kind': 'overheadPress',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'lateralRaises',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'frontRaises',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 12 } },
            },
            {
                'kind': 'weightedTwists',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 20 } },
            },
        ],
        postStretches: [
            {
                kind: 'overheadShoulderStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'crossShoulderStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'cobraStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'seatedSpinalTwist',
                amount: { kind: 'duration', seconds: 20 },
            },
        ],
        cardio: [
            {
                kind: 'treadmillIncline',
                amount: { kind: 'duration', seconds: 1800 },
            }
        ],
    },
    // Full Body
    friday: {
        preStretches: [
            {
                kind: 'jumpingJacks',
                amount: { kind: 'duration', seconds: 60 },
            },
            {
                kind: 'armCircles',
                amount: { kind: 'duration', seconds: 30 },
            },
            {
                kind: 'legSwings',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'squats',
                amount: { kind: 'count', count: 10 },
            },
            {
                kind: 'torsoTwists',
                amount: { kind: 'duration', seconds: 30 },
            },
        ],
        dumbbells: [
            {
                'kind': 'squatToPress',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'renegadeRows',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'deadliftToCurl',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'count', count: 10 } },
            },
            {
                'kind': 'plank',
                amount: { kind: 'sets', sets: 3, amount: { kind: 'duration', seconds: 40 } },
            },
        ],
        postStretches: [
            {
                kind: 'standingForwardFold',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'standingQuadStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'seatedHamstringStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'doorwayStretch',
                amount: { kind: 'duration', seconds: 20 },
            },
            {
                kind: 'childPose',
                amount: { kind: 'duration', seconds: 20 },
            },
        ],
        cardio: [
            {
                kind: 'elliptical',
                amount: { kind: 'duration', seconds: 1800 },
            }
        ],
    },
    // Rest on weekends, filling in lightly with a walk/bike ride/yoga as desired
    saturday: {
        preStretches: [],
        dumbbells: [],
        postStretches: [],
        cardio: [],
    },
    sunday: {
        preStretches: [],
        dumbbells: [],
        postStretches: [],
        cardio: [],
    },
};

export default Routine;