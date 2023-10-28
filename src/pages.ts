interface Choice {
    text: string,
    score_modifier: number,
    // The next page of the "pages" object
    next_identifier: string | null
}

interface Page {
    text: string,
    image_attribution: string | null,
    choices: Choice[],
}

const school_name: string = "Kat High";

export const pages: { [key: string]: Page; } =
{
    introduction: {
        text: `You are a student who goes to ${school_name}.`
    },
    shower_temp: {
        text: "You wake up in the morning and want to take a shower. What temperature shower will you take?",
        image_attribution: null,
        choices: [
            {
                text: "Cold shower",
                score_modifier: 1,
                next_identifier: null,
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
        image_attribution: null,
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
        image_attribution: null,
        choices: [
            {
                text: "Car",
                score_modifier: -1,
                next_identifier: "transport_to_school_carpool"
            },
            {
                text: "Bus",
                score_modifier: 2,
                next_identifier: null,
            },
            {
                text: "Walk",
                score_modifier: 2,
                next_identifier: null
            },
            {
                text: "Bike",
                score_modifier: 2,
                next_identifier: null,
            },
        ]
    },
    transport_to_school_carpool: {
        text: "How many students ride in the car you take to school?",
        image_attribution: null,
        choices: [
            {
                text: "1",
                score_modifier: -1,
                next_identifier: null,
            },
            {
                text: "2 or more",
                score_modifier: 1,
                next_identifier: null
            }
        ]
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