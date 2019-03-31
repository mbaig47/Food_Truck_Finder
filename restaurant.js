
let Restaurant = class {
    constructor(id, name, price, rating, menu, schedule) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.menu = menu;
        this.schedule = schedule;
    };
};

let Restaurants = [
    new Restaurant(
        0,
        "Power Breakfast Truck",
        3,
        4.2,
        [
            ['Breakfast Sandwich', 2.99],
            ['Black Coffee', 1.99],
            ['Avocado Toast', 5.99],
            ['Scrambled Eggs', 2.99]
        ],
        [
            [
                '1191-1137 S Halsted St, Chicago, IL 60607',
                41.867354,
                -87.647072,
                [ 0, 1, 1, 1, 1, 1, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ],
            [
                '1199-1131 Michigan Avenue, Chicago, IL 60605',
                41.867712,
                -87.623920,
                [ 0, 1, 1, 1, 1, 1, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        ]
    )
];
