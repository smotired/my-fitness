// Definitions for the foods in the meal plan.
// This is not a strict diet, this is not all of the foods I'm allowed to eat. But this is all the planned meals.
// If I'm going out with friends or something I can eat something else, but otherwise I really should discipline myself to stick to this.

interface FoodDefinition {
    name: string,
    unit: string,
    // TODO: typical serving size, and calories and protein for that serving size, i.e. 250 calories for a 20 oz soft drink.
    // that is probably the best way to do that
}

const FoodItems = {
    proteinShake: {
        name: "Premier Protein",
        unit: 'shakes',
    },
    peanutBar: {
        name: "Nature Valley Peanut Bar",
        unit: 'bars',
    },
    apple: {
        name: "Apple",
        unit: 'apples',
    },
    dietSoda: {
        name: "Diet Soda",
        unit: 'fl oz',
    },
    cheesesteak: {
        name: "Moochies Cheesesteak",
        unit: 'sandwiches',
    },
    fries: {
        name: "Moochies Fries",
        unit: 'bags',
    },
    soda: {
        name: "Sugary Soda",
        unit: 'oz',
    },
    turkeyWrap: {
        name: "Turkey Wrap",
        unit: 'wraps',
    },
    chickenBowl: {
        name: "Popcorn Chicken Salad Bowl",
        unit: 'bowls',
    },
    pasta: {
        name: "Penne Alfredo",
        unit: 'bowls',
    },
    broccoli: {
        name: "Broccoli",
        unit: 'cups',
    },
    pizza: {
        name: "Little Caesar's Pizza",
        unit: 'slices',
    },
    crazyBread: {
        name: "Little Caesar's Crazy Bread",
        unit: 'sticks',
    },
    stirFry: {
        name: "Teriyaki Stir Fry",
        unit: 'plates',
    },
} satisfies Record<string, FoodDefinition>;

export default FoodItems;