const months = [
  {
    id: 1,
    func: [
      {
        id: 13,
        month: "January",
        product: "Red Lays",
        inventory: 100
      },
      {
        id: 14,
        month: "January",
        product: "Blue Lays",
        inventory: 200
      },
      {
        id: 37,
        month: "January",
        product: "Green Lays",
        inventory: 1000
      },
      {
        id: 38,
        month: "January",
        product: "Yellow Lays",
        inventory: 2000
      }
    ]
  },
  {
    id: 2,
    func: [
      {
        id: 15,
        month: "February",
        product: "Red Lays",
        inventory: 50
      },
      {
        id: 16,
        month: "February",
        product: "Blue Lays",
        inventory: 100
      },
      {
        id: 39,
        month: "February",
        product: "Green Lays",
        inventory: 500
      },
      {
        id: 40,
        month: "February",
        product: "Yellow Lays",
        inventory: 1000
      }
    ]
  },
  {
    id: 3,
    func: [
      {
        id: 17,
        month: "March",
        product: "Red Lays",
        inventory: 25
      },
      {
        id: 18,
        month: "March",
        product: "Blue Lays",
        inventory: 50
      },
      {
        id: 41,
        month: "March",
        product: "Green Lays",
        inventory: 250
      },
      {
        id: 42,
        month: "March",
        product: "Yellow Lays",
        inventory: 100
      }
    ]
  },
  {
    id: 4,
    func: [
      {
        id: 19,
        month: "April",
        product: "Red Lays",
        inventory: 10
      },
      {
        id: 20,
        month: "April",
        product: "Blue Lays",
        inventory: 0
      },
      {
        id: 43,
        month: "April",
        product: "Green Lays",
        inventory: 0
      },
      {
        id: 44,
        month: "April",
        product: "Yellow Lays",
        inventory: 0
      }
    ]
  },
  {
    id: 5,
    func: [
      {
        id: 21,
        month: "May",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 22,
        month: "May",
        product: "Blue Lays",
        inventory: 0
      },
      {
        id: 45,
        month: "May",
        product: "Green Lays",
        inventory: 500
      },
      {
        id: 46,
        month: "May",
        product: "Yellow Lays",
        inventory: 1000
      }
    ]
  },
  {
    id: 6,
    func: [
      {
        id: 23,
        month: "June",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 24,
        month: "June",
        product: "Blue Lays",
        inventory: 200
      },
      {
        id: 47,
        month: "June",
        product: "Green Lays",
        inventory: 200
      },
      {
        id: 48,
        month: "June",
        product: "Yellow Lays",
        inventory: 200
      }
    ]
  },
  {
    id: 7,
    func: [
      {
        id: 25,
        month: "July",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 26,
        month: "July",
        product: "Blue Lays",
        inventory: 100
      },
      {
        id: 49,
        month: "July",
        product: "Green Lays",
        inventory: 500
      },
      {
        id: 50,
        month: "July",
        product: "Yellow Lays",
        inventory: 100
      }
    ]
  },
  {
    id: 8,
    func: [
      {
        id: 27,
        month: "August",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 28,
        month: "August",
        product: "Blue Lays",
        inventory: 100
      },
      {
        id: 51,
        month: "August",
        product: "Green Lays",
        inventory: 250
      },
      {
        id: 52,
        month: "August",
        product: "Yellow Lays",
        inventory: 100
      }
    ]
  },
  {
    id: 9,
    func: [
      {
        id: 29,
        month: "September",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 30,
        month: "September",
        product: "Blue Lays",
        inventory: 100
      },
      {
        id: 53,
        month: "September",
        product: "Green Lays",
        inventory: 0
      },
      {
        id: 54,
        month: "September",
        product: "Yellow Lays",
        inventory: 100
      }
    ]
  },
  {
    id: 10,
    func: [
      {
        id: 31,
        month: "October",
        product: "Red Lays",
        inventory: 0
      },
      {
        id: 32,
        month: "October",
        product: "Blue Lays",
        inventory: 100
      },
      {
        id: 55,
        month: "October",
        product: "Green Lays",
        inventory: 20
      },
      {
        id: 56,
        month: "October",
        product: "Yellow Lays",
        inventory: 100
      }
    ]
  },
  {
    id: 11,
    func: [
      {
        id: 33,
        month: "November",
        product: "Red Lays",
        inventory: 100
      },
      {
        id: 34,
        month: "November",
        product: "Blue Lays",
        inventory: 50
      },
      {
        id: 57,
        month: "November",
        product: "Green Lays",
        inventory: 100
      },
      {
        id: 58,
        month: "November",
        product: "Yellow Lays",
        inventory: 50
      }
    ]
  },
  {
    id: 12,
    func: [
      {
        id: 35,
        month: "December",
        product: "Red Lays",
        inventory: 100
      },
      {
        id: 36,
        month: "December",
        product: "Blue Lays",
        inventory: 0
      },
      {
        id: 59,
        month: "December",
        product: "Green Lays",
        inventory: 0
      },
      {
        id: 60,
        month: "December",
        product: "Yellow Lays",
        inventory: 10
      }
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  months
};
