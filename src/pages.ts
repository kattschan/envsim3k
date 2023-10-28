interface Choice {
    text: string,
    score_modifier: number,
    // The next page of the "pages" object
    next_identifier: string | null
    // Note on environmental friendliness
    note: string | null,
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
                note: null
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
                note: "Cold showers do not use water heaters which cuts down on energy consumption.",
            },
            {
                text: "Warm shower",
                score_modifier: 0,
                next_identifier: "warm_shower_duration",
                note: "Warm showers use water heaters, which use more energy."
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
                note: "Short showers help cut down water heater usage and water usage!",
            },
            {
                text: "8 minutes",
                score_modifier: 0,
                next_identifier: "transport_to_school",
                note: "8 minutes is the average shower length according to the CDC.",
            },
            {
                text: "15 minutes",
                score_modifier: -1,
                next_identifier: "transport_to_school",
                note: "15 minutes uses more water, and warm water means the heater will run for longer."
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
                next_identifier: "transport_to_school_carpool",
                note: "Cars typically source their power from fossil fuels, directly or indirectly",
            },
            {
                text: "Bus",
                score_modifier: 2,
                next_identifier: "take_test",
                note: "More students riding the bus can help reduce carbon emissions from individual cars"
            },
            {
                text: "Bike / Walk",
                score_modifier: 2,
                next_identifier: "take_test",
                note: "Walking and biking home is the most environmentally friendly way of transportation."
            },
        ]
    },
    transport_to_school_carpool: {
        text: "How many students ride in the car you take to school?",
        description: "Carpooling allows less cars to go to the same place.",
        image_attribution: `Photo by <a href="https://unsplash.com/@ollie_walls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ollie Walls</a> on <a href="https://unsplash.com/photos/a-white-van-parked-in-a-parking-lot-at-night-jDo2IZm-uFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "1",
                score_modifier: -1,
                next_identifier: "take_test",
                note: "If you brought a friend home too, then there would be one less car on the road."
            },
            {
                text: "2 or more",
                score_modifier: 1,
                next_identifier: "take_test",
                note: "Carpooling, even with siblings, helps save the ratio of cars to students and helps save the environment!",
            }
        ]
    },
    take_test: {
        text: "You have a test in your first period class. The teacher lets you choose to take the test on paper or on computer. What do you choose?",
        description: "Paper and ink are less sustainable than computer pixels.",
        image_attribution: `Photo by <a href="https://unsplash.com/@nguyendhn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nguyen Dang Hoang Nhu</a> on <a href="https://unsplash.com/photos/person-writing-on-white-paper-qDgTQOYk6B8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        `,
        choices: [
            {
                text: "Computer",
                score_modifier: 1,
                next_identifier: "drink",
                note: "Taking a test on a computer may be a bit harder but "
            },
            {
                text: "Paper and pencil",
                score_modifier: -1,
                next_identifier: "drink",
                note: "Taking a test on a computer may be a bit harder but "
            }
        ],
    },
    drink: {
        text: "After your test, you are quite thirsty and desire a drink of water. How do you replenish?",
        description: "Plastic is bad for the environment.",
        image_attribution: `Photo by Kat Tschan on I literally programmed this website`,
        choices: [
            {
                text: "Purchase 1x Dasani",
                score_modifier: -1,
                next_identifier: "recycle_dasani",
                note: "If given the option, reusable water canteens save plastic!"
            },
            {
                text: "Use the water fountain with a reusable botle",
                score_modifier: 1,
                next_identifier: "transport_to_home",
                note: "Reusable water bottles help save on plastic!"
            }
        ]
    },
    recycle_dasani: {
        text: "You drank the water. You must dispose of the bottle. How do you do this?",
        description: "Plastic is harmful for aquatic life, not biodegradable, and can be reused in many cases.",
        image_attribution: `Photo by <a href="https://unsplash.com/@jannerboy62?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Fewings</a> on <a href="https://unsplash.com/photos/sprite-plastic-bottle-on-table--2lJGRIY5P0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "Recycle",
                score_modifier: 1,
                next_identifier: "transport_to_home",
                note: "Recycling helps to keep plastic from ending up in the ocean!"
            },
            {
                text: "Toss in trash",
                score_modifier: -1,
                next_identifier: "transport_to_home",
                note: "The plastic from a water bottle can be reused and now may end up in a landfill or the ocean, where it won't biodegrade!"
            }
        ]
    },
    transport_to_home: {
        text: "School has ended and it is time to return home. What is your mode of transport?",
        description: "Walking home releases no carbon emissions from burning fossil fuels.",
        image_attribution: `Photo by <a href="https://unsplash.com/@arturokst?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Arturo Castaneyra</a> on <a href="https://unsplash.com/photos/man-in-dress-suit-outfit-walking-in-front-of-building-tPE60iK97qw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "Car",
                score_modifier: -1,
                next_identifier: "transport_to_home_carpool",
                note: "Cars typically source their power from fossil fuels, directly or indirectly",
            },
            {
                text: "Bus",
                score_modifier: 2,
                next_identifier: "outro",
                note: "Riding the bus isn't the most environmentally friendly, but it is better than 24 cars and a better option if biking or walking is unavailable."
            },
            {
                text: "Bike / Walk",
                score_modifier: 2,
                next_identifier: "outro",
                note: "Walking and biking home is the most environmentally friendly way of transportation."
            },
        ]
    },
    transport_to_home_carpool: {
        text: "How many students ride in the car you reside in to head home?",
        description: "Carpooling allows less cars to go to the same place.",
        image_attribution: `Photo by <a href="https://unsplash.com/@ollie_walls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ollie Walls</a> on <a href="https://unsplash.com/photos/a-white-van-parked-in-a-parking-lot-at-night-jDo2IZm-uFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`,
        choices: [
            {
                text: "1",
                score_modifier: -1,
                next_identifier: "outro",
                note: "If you brought a friend home too, then there would be one less car on the road."
            },
            {
                text: "2 or more",
                score_modifier: 1,
                next_identifier: "outro",
                note: "Carpooling, even with siblings, helps save the ratio of cars to students and helps save the environment!",
            }
        ]
    },
    outro: {
        text: "You have finished your journey!",
        description: "Here are your results!",
        image_attribution: null,
        choices: []
    }
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