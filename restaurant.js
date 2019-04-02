
let Restaurant = class {
    constructor(id, name, price, rating, menu, schedule, cuisine) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.menu = menu;
        this.schedule = schedule;
        this.cuisine = cuisine;
    };

    // gets current address at the given time
    getAddress(dow, hr) {
        for (let i = 0; i < this.schedule.length; i++) {
            let dowSchedule = this.schedule[i][3][dow];

            for (let j = 0; j < dowSchedule.length; j++) {
                let hrSchedule = dowSchedule[j];

                if (hr >= hrSchedule[1] && hr < hrSchedule[2]) {
                    return [ this.schedule[i], hrSchedule ];
                }
            }
        }

        return [ ];
    }
};

let Restaurants = [
    new Restaurant(
        0,
        "Power Breakfast Truck",
        3,
        4.2,
        [
            ['Breakfast Sandwich', 2.99, "some sandwich"],
            ['Black Coffee', 1.99, "unsweetened and crappy"],
            ['Avocado Toast', 5.99, "millenial approved"],
            ['Scrambled Eggs', 2.99, "idk its eggs gggg gggg gggggg gggggg ggggg gggg gggggg gggggg"]
        ],
        [
            [
                '1191 - 1137 S Halsted St<br>Chicago, IL 60607',
                41.867354,
                -87.647072,
                [
                    [ ],
                    [ [ " 7AM - 10AM", 7, 10 ] ],
                    [ [ " 7AM -  9AM", 7,  9 ], [ "10AM - 12PM", 10, 12 ] ],
                    [ [ " 7AM - 10AM", 7, 10 ] ],
                    [ [ " 7AM -  9AM", 7,  9 ], [ "10AM - 12PM", 10, 12 ] ],
                    [ [ " 7AM - 10AM", 7, 10 ] ],
                    [ ]
                ]
            ],
            [
                '1199 - 1131 Michigan Avenue<br>Chicago, IL 60605',
                41.867712,
                -87.623920,
                [
                    [ ],
                    [ [ "10AM - 12PM", 10, 12 ] ],
                    [ ],
                    [ [ "10AM - 12PM", 10, 12 ] ],
                    [ ],
                    [ [ "10AM - 12PM", 10, 12 ] ],
                    [ ]
                ]
            ]
        ],
        [
            "American",
            "Canadian"
        ]
    )
];
