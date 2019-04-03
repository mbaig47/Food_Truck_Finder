
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
    ),

    new Restaurant(
        1,
        "Desert-a-truck",
        4,
        3.2,
        [
            ['Desert Cup', 10.99, "a to-go cup of deserts"],
            ['Whatabirthday', 9.99, "birthday cake for any ocassion"],
            ['Anchorcake', 12.99, "cake in the shape of an anchor"],
            ['Pie', 3.14, "pie day special everyday"],
            ['Cheesecake', 9.99, "a cheesecake with extra cheese"],
            ['Playcake', 12.99, "a cake for special ocassions"],
            ['Boxcake', 10.99, "a box shaped cake for sharing"]
        ],
        [
            [
                '14 - 10 E Jackson Blvd<br>Chicago, IL 60604',
                41.878273,
                -87.627517,
                [
                    [ ],
                    [ [ " 3PM -  5PM", 15, 17 ] ],
                    [ ],
                    [ [ " 3PM -  5PM", 15, 17 ] ],
                    [ ],
                    [ [ " 3PM  - 5PM", 15, 17 ] ],
                    [ ]
                ]
            ]
        ],
        [
            "American"
        ]
    ),

    new Restaurant(
        2,
        "Dhaba",
        1,
        4.9,
        [
            ['Biryani', 4.99, "biryani with your choice of meat"],
            ['Gyros', 2.99, "lamb gyros served with a tzatziki sauce"],
            ['Fries', 1.99, "potato fries served with a tzatziki sauce"],
            ['Kabob', 5.99, "kabob made from your choice of meat"],
            ["Pita Sandwich", 3.99, "pita bread with your choice of stuffing"],
            ['Mozarella Sticks', 0.99, "5 piece mozarella sticks with choice of dipping sauce"]
        ],
        [
            [
                '107 S Michigan Ave<br>Chicago, IL 60603',
                41.880781,
                -87.624081,
                [
                    [ ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ ],
                    [ ]
                ]
            ],
            [
                '1155 S State St<br>Chicago, IL 60605',
                41.867605,
                -87.627416,
                [
                    [ ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ ],
                    [ ]
                ]
            ],
        ],
        [
            "Indian",
            "Arabic",
            "American"
        ]
    ),
    new Restaurant(
        3,
        "Ameer Nawaz",
        4,
        4.9,
        [
            ['Ameer Biryani', 14.99, "biryani with your choice of meat"],
            ['Ameer Gyros', 15.99, "lamb gyros served with a tzatziki sauce"],
            ['Ameer Fries', 4.99, "potato fries served with a tzatziki sauce"],
            ['Kabob of the kings', 9.99, "kabob made from your choice of meat"],
            ["King Sandwich", 18.99, "pita bread with your choice of stuffing"],
            ['Mozarella Sticks', 3.99, "5 piece mozarella sticks with choice of dipping sauce"]
        ],
        [
            [
                '521 N Rush St<br>Chicago, IL 60611',
                41.8916,
                -87.6252,
                [//Edited upto here
                    [ ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ [ "11AM -  2PM", 11, 14 ] ],
                    [ ],
                    [ ]
                ]
            ],
            [
                '1155 S State St<br>Chicago, IL 60605',
                41.867605,
                -87.627416,
                [
                    [ ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ [ " 2PM -  4PM", 14, 16 ] ],
                    [ ],
                    [ ]
                ]
            ],
        ],
        [
            "Indian",
            "Arabic",
            "American"
        ]
    )

];
