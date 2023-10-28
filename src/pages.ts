interface Choice {
    text: string,
    score_modifier: number,
    // The next page of the "pages" object
    next_identifier: string | null
}

interface Page {
    text: string,
    description: string | null,
    image_attribution: string | null,
    choices: Choice[],
}

const school_name: string = "Kat High";

export const pages: { [key: string]: Page; } =
{
    introduction: {
        text: `You are a student who goes to ${school_name}.`,
        description: "You are trying to reduce your carbon footprint. You will be presented with a series of choices. Each choice will have a different impact on your carbon footprint. Your goal is to make the choices that will reduce your carbon footprint the most.",
        image_attribution: `Photo by <a href="https://unsplash.com/@lanirudhreddy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ANIRUDH</a> on <a href="https://unsplash.com/photos/a-view-of-the-earth-from-space-at-night-Xu4Pz7GI9JY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "Go!",
                score_modifier: 0,
                next_identifier: "shower_temp",
            }
        ]
    },
    shower_temp: {
        text: "You wake up in the morning and want to take a shower. What temperature shower will you take?",
        description: "Water heaters use energy, typically sourced from fossil fuels.",
        image_attribution: `Photo by <a href="https://unsplash.com/@kevinbae?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">kevin Baquerizo</a> on <a href="https://unsplash.com/photos/grey-stainless-steel-shower-head-lJewNo29uf0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "Cold shower",
                score_modifier: 1,
                next_identifier: "transport_to_school",
            },
            {
                text: "Warm shower",
                score_modifier: 0,
                next_identifier: "warm_shower_duration"
            }
        ],
    },
    warm_shower_duration: {
        text: "You are taking a nice warm shower. How long will you shower for?",
        description: "More water is used when a shower is run for longer.",
        image_attribution: `Photo by <a href="https://www.gettyimages.com/search/photographer?photographer=ben-bryant">ben-bryant</a> on <a href="https://www.gettyimages.com/detail/photo/water-running-from-shower-head-and-faucet-in-modern-royalty-free-image/1176125291">Getty Images</a>`,
        choices: [
            {
                text: "3 minutes",
                score_modifier: 1,
                next_identifier: "transport_to_school",
            },
            {
                text: "6 minutes",
                score_modifier: 0,
                next_identifier: "transport_to_school",
            },
            {
                text: "9 minutes",
                score_modifier: -1,
                next_identifier: "transport_to_school",
            }
        ],
    },
    transport_to_school: {
        text: "You now are going to school. What is your mode of transport?",
        description: "Cars typically source power from fossil fuels, either directly or through a charger.",
        image_attribution: `Photo by <a href="https://unsplash.com/@ntwrk_img?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Digital Marketing Agency NTWRK</a> on <a href="https://unsplash.com/photos/white-concrete-building-g39p1kDjvSY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "Car",
                score_modifier: -1,
                next_identifier: "transport_to_school_carpool"
            },
            {
                text: "Bus",
                score_modifier: 2,
                next_identifier: "take_test",
            },
            {
                text: "Bike / Walk",
                score_modifier: 2,
                next_identifier: "take_test"
            },
        ]
    },
    transport_to_school_carpool: {
        text: "How many students ride in the car you take to school?",
        description: "Carpooling allows less cars to go to the same place.",
        image_attribution: null,
        choices: [
            {
                text: "1",
                score_modifier: -1,
                next_identifier: "take_test",
            },
            {
                text: "2 or more",
                score_modifier: 1,
                next_identifier: "take_test"
            }
        ]
    },
    take_test: {
        text: "You have a test in your first period class. The teacher lets you choose to take the test on paper or on computer. What do you choose?",
        description: "Paper and ink are less sustainable than computer pixels.",
        image_attribution: null,
        choices: [
            {
                text: "Computer",
                score_modifier: 1,
                next_identifier: "drink",
            },
            {
                text: "Paper and pencil",
                score_modifier: -1,
                next_identifier: "drink"
            }
        ],
    },
    drink: {
        text: "After your test, you are quite thirsty and desire a drink of water. How do you replenish?",
        description: "Plastic is bad for the environment.",
        image_attribution: null,
        choices: [
            {
                text: "Purchase 1x Dasani",
                score_modifier: -1,
                next_identifier: null,
            },
            {
                text: "Use the water fountain with a reusable botle",
                score_modifier: 1,
                next_identifier: null,
            }
        ]
    },
    // recycle_dasani: {
    // text: "You drank the water. You must dispose of the bottle. How do you do this?",
    //     // description: "Plastic is harmful for aquatic life and can be reused in many cases.",
    // },
};

// Validate all `next_identifier`s and `image_attribution`s are valid
for (const [identifier, page] of Object.entries(pages)) {
    if (page.image_attribution === null) {
        console.warn(`fixme ${identifier}: null image attr.`)
    }
    for (const choice of page.choices) {
        if (pages[choice.next_identifier || "todo"] !== undefined) continue;
        console.error(`fixme ${identifier}: Choice ${choice.text}: Invalid next identifier`);
    }
}