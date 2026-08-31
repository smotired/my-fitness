// Definitions for each type of exercise.

type ExerciseDefinition = {
    name: string,
    description: string,
    double?: boolean, // If the exercise must be completed individually for each direction or side
};

export const Stretches = {
    armCircles: {
        name: "Arm Circles",
        description: "Hold arms out sideways. Rotate clockwise in small circles, building up larger. Repeat counter-clockwise.",
        double: true,
    },
    crossSwings: {
        name: "Cross-body Arm Swings",
        description: "Swing both arms in front of chest, and swing back out wide.",
    },
    shoulderRolls: {
        name: "Shoulder Rolls",
        description: "Roll sholders forward and backward.",
    },
    pushUpDownDog: {
        name: "Push-up to Downward Dog",
        description: "From a push-up position, push hips up and back into downward dog, then return.",
    },
    doorwayStretch: {
        name: "Doorway Chest Stretch",
        description: "Forearm on a doorframe, elbow shoulder height. Step through doorway to stretch chest.",
        double: true,
    },
    overheadTricepStretch: {
        name: "Overhead Tricep Stretch",
        description: "Bend arm behind head. Use other hand to gently push elbow back.",
        double: true,
    },
    crossShoulderStretch: {
        name: "Cross-body Shoulder Stretch",
        description: "Pull arm straight across chest with other arm.",
        double: true,
    },
    childPose: {
        name: "Child's Pose",
        description: "Kneel, sit back on heals, reach arms forward, forehead down.",
    },
    catCow: {
        name: "Cat-Cow",
        description: "Hands and knees. Arch back up, hold, dip down, repeat.",
    },
    torsoTwists: {
        name: "Torso Twists",
        description: "Rotate upper body side to side, arms loose.",
    },
    kneelingLatStretch: {
        name: "Kneeling Lat Stretch",
        description: "Kneel, reach one arm forward onto low surface, sit hips back to stretch side.",
        double: true,
    },
    seatedForwardFold: {
        name: "Seated Forward Fold",
        description: "Sit, reach for toes, rounding lower back.",
    },
    crossBicepStretch: {
        name: "Cross-body Bicep Stretch",
        description: "Extend one arm to side, palm up. Gently pull fingers back with other hand.",
        double: true,
    },
    legSwings: {
        name: "Leg Swings",
        description: "Hold wall for balance. Swing leg front to back X times, then side to side X times.",
        double: true,
    },
    hipCircles: {
        name: "Hip circles",
        description: "Hands on hips, big hula hoop circles.",
        double: true,
    },
    squats: {
        name: "Squats",
        description: "Slow and controlled bodyweight squats.",
    },
    highKnees: {
        name: "High Knees",
        description: "Jog in place bringing knees up high.",
    },
    standingQuadStretch: {
        name: "Standing Quad Stretch",
        description: "Stand on one leg, pull other foot toward glutes.",
        double: true,
    },
    seatedHamstringStretch: {
        name: "Seated Hamstring Stretch",
        description: "Sit one leg extended, other bent with foot to thigh. Reach toward extended foot.",
        double: true,
    },
    fig4GluteStretch: {
        name: "Figure 4 Glute Stretch",
        description: "Lie on back, cross ankle over opposite knee, raise uncrossed leg toward chest.",
        double: true,
    },
    standingCalfStretch: {
        name: "Standing Calf Stretch",
        description: "Hands on wall, one leg back with heel down, lean forward.",
        double: true,
    },
    kneelingHipFlexorStretch: {
        name: "Kneeling Hip Flexor Stretch",
        description: "Kneel on one knee, like lunge, push hips forward.",
        double: true,
    },
    standingSideBends: {
        name: "Standing Side Bends",
        description: "Reach one overhead, lean to opposite side.",
        double: true,
    },
    overheadShoulderStretch: {
        name: "Overhead Shoulder Stretch",
        description: "Bend arm behind head. Use other hand to pull elbow.",
        double: true,
    },
    cobraStretch: {
        name: "Cobra Stretch",
        description: "Lie face down, press body up with hands, keeping hips on floor.",
    },
    seatedSpinalTwist: {
        name: "Seated Spinal Twist",
        description: "Sit, cross one leg over the other, twist torso away from bent knee.",
        double: true,
    },
    jumpingJacks: {
        name: "Jumping Jacks",
        description: "Come on man.",
    },
    standingForwardFold: {
        name: "Standing Forward Fold",
        description: "Hinge forward, letting arms hang, knees soft.",
    }
} satisfies Record<string, ExerciseDefinition>;

export const DumbbellExercises = {
    dumbbellFloorPress: {
        name: "Dumbbell Floor Press",
        description: "Lie on back, knees bent. Press dumbbells straight up, lower until elbows touch floor.",
    },
    dumbbellFlyes: {
        name: "Dumbbell Flyes",
        description: "Lie on back. Hold dumbbells above chest. Lower weights out to sides until stretch chests, then arc back over chest.",
    },
    overheadTricep: {
        name: "Overhead Tricep Extension",
        description: "Sit, hold one dumbbell overhead with both hands. Bend elbows to lower behind head, then extend arms.",
    },
    tricepKickbacks: {
        name: "Tricep Kickbacks",
        description: "Hinge forward, dumbbell in each hand. Bend elbows at 90deg, upper arms close to body. Extend arms back until straight, then bend back.",
    },
    bentOverRows: {
        name: "Bent-over Rows",
        description: "Hinge forward, dumbbells hanging. Pull straight up, squeezing shoulder blades.",
    },
    singleArmRows: {
        name: "Single-arm Rows",
        description: "Knee and hand on bench. Hold dumbbell in other hand straight down. Pull up to hip and lower.",
        double: true,
    },
    bicepCurls: {
        name: "Bicep Curls",
        description: "Curls with palms facing forward.",
        double: true,
    },
    hammerCurls: {
        name: "Hammer Curls",
        description: "Curls with palms facing each other.",
        double:  true,
    },
    gobletSquats: {
        name: "Goblet Squats",
        description: "Squats with a dumbbell held against chest.",
    },
    walkingLunges: {
        name: "Walking Lunges",
        description: "Walking lunges with dumbbell in each hand.",
    },
    romanianDeadlifts: {
        name: "Romanian Deadlifts",
        description: "Hold dumbbells in front of thighs. Hinge at hips to lower and stretch hamstrings, then stand back up with hips.",
    },
    gluteBridges: {
        name: "Glute Bridges",
        description: "Lie on back, knees bent. Hold a dumbbell in place across hips. Lift hips to straighten body, then lower.",
    },
    overheadPress: {
        name: "Overhead Press",
        description: "Dumbells shoulder height, palms forward. Press up and lower.",
    },
    lateralRaises: {
        name: "Lateral Raises",
        description: "Stand with dumbbells at side. Raise arms outward to shoulder height, then lower.",
    },
    frontRaises: {
        name: "Front Raises",
        description: "Stand with dumbbells at side. Raise arms forward to shoulder height, then lower.",
    },
    weightedTwists: {
        name: "Weighted Russian Twists",
        description: "Sit, knees bent, leaning back, feet up. Hold dumbbell at chest. Rotate torso to tap floor beside hip, then rotate to other side.",
    },
    squatToPress: {
        name: "Squat to Press",
        description: "Dumbbells shoulder height. Squat, then press weights overhead as you stand. Lower to shoulder height and repeat.",
    },
    renegadeRows: {
        name: "Renegade Rows",
        description: "Plank with hands on dumbbells. Raise one dumbbell to ribs, then lower and switch.",
        double: true,
    },
    deadliftToCurl: {
        name: "Deadlift to Curl",
        description: "Hold dumbbells in front of thighs. Hinge at hips to lower and stretch hamstrings, then stand back up with hips and curl dumbbells to shoulders.",
    },
    plank: {
        name: "Plank",
        description: "======== <-- That's you",
    }
} satisfies Record<string, ExerciseDefinition>;

export const CardioExercises = {
    rowing: {
        name: "Rowing Machine",
        description: "Use the rowing machine at max resistance.",
    },
    elliptical: {
        name: "Elliptical",
        description: "Use the elliptical at 12 resistance and 6 incline.",
    },
    treadmillIncline: {
        name: "Treadmill Incline",
        description: "Use the treadmill at 3.5 MPH and 3 incline.",
    },
    treadmillInterval: {
        name: "Treadmill Interval",
        description: "Use the treadmill at 0 incline. Alternate 2 intervals at 3 MPH, and 1 interval at 6 MPH.",
    }
} satisfies Record<string, ExerciseDefinition>;

const Exercises = { ...Stretches, ...DumbbellExercises, ...CardioExercises } satisfies Record<string, ExerciseDefinition>;
export default Exercises;