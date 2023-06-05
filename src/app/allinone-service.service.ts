import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllinoneServiceService {

  constructor() { }

  selectedItems?: any = [];
  itemQuantity?: any = [];
  food_and_drinks = [
    {
      "productName": "Ice Black Rose",
      "price": "2500 Ks",
      "image": "ice_black_rose.jpg"
    },
    {
      "productName": "Lemon Fresh Ginger",
      "price": "2500 Ks",
      "image": "lemon_fresh_ginger.jpg"
    },
    {
      "productName": "Egg Roll",
      "price": "3000 Ks",
      "image": "egg_roll.jpg"
    },
    {
      "productName": "Strawberry Cream Sandwich",
      "price": "2500 Ks",
      "image": "strawberry_cream_sandwich.jpg"
    },
    {
      "productName": "Sushi Sandwich",
      "price": "3000 Ks",
      "image": "sushi_sandwich.jpg"
    },
    {
      "productName": "Mango Juice",
      "price": "2500 Ks",
      "image": "mango_juice.jpg"
    },
    {
      "productName": "မာလာ ဒုတ်ထိုး",
      "price": "5000 Ks",
      "image": "mala_doat_htoe.jpg"
    },
    {
      "productName": "မာလာ ရှမ်းကော",
      "price": "5000 Ks",
      "image": "mala_shan.jpg"
    },
    {
      "productName": "Spicy + သုံးထပ်သား",
      "price": "3500 Ks",
      "image": "pork_spicy_noodle.jpg"
    }
  ];
  menu = [
    {
      "image": "juice.jpg"
    },
    {
      "image": "coffee.jpg"
    },
    {
      "image": "frappe_milk_tea.jpg"
    },
    {
      "image": "korean_food.jpg"
    },
    {
      "image": "main_course.jpg"
    },
    {
      "image": "seafood_family_set.jpg"
    },
    {
      "image": "special_malar.jpg"
    },
    {
      "image": "spicy_family_set.jpg"
    },
    {
      "image": "steak.jpg"
    },
    {
      "image": "spicy_noodle.jpg"
    },
    {
      "image": "myanmar_food.jpg"
    }
  ];
  new_items = [
    {
      "productName": "Strawberry Cream Sandwich",
      "price": "2500 Ks",
      "image": "strawberry_cream_sandwich.jpg"
    },
    {
      "productName": "Mango crepe",
      "price": "1200 Ks",
      "image": "mango_crepe.jpg"
    },
    {
      "productName": "Hot dog",
      "price": "1200 Ks",
      "image": "hot_dog.jpg"
    },
    {
      "productName": "Cheesy bun",
      "price": "1500 Ks",
      "image": "cheesy_bun.jpg"
    },
    
    {
      "productName": "Hokkaido",
      "price": "1500 Ks",
      "image": "hokkaido.jpg"
    },
    {
      "productName": "Chocolate bread",
      "price": "1200 Ks",
      "image": "chocolate_bread.jpg"
    },
    {
      "productName": "Brownie cake",
      "price": "500 Ks",
      "image": "brownie_cake.jpg"
    },
    {
      "productName": "Chocolate cap cake",
      "price": "1000 Ks",
      "image": "chocolate_cup_cake.jpg"
    },
    {
      "productName": "Chocolate lava cake",
      "price": "1000 Ks",
      "image": "chocolate_lava_cake.jpg"
    },
    {
      "productName": "Black forest cake",
      "price": "1500 Ks",
      "image": "black_forest.jpg"
    },
    {
      "productName": "Chocolate mousse cake",
      "price": "1500 Ks",
      "image": "choco_mousse.jpg"
    }
  ];
  allitem = [
    {
      id : 1,
      productName: 'Espresso (Hot)',
      price: 1500
    },
    {
      id : 2,
      productName: 'Espresso (Cold)',
      price: 2000
    },
    {
      id : 3,
      productName: 'The Met Coffee (Hot)',
      price: 2000
    },
    {
      id : 4,
      productName: 'The Met Coffee (Cold)',
      price: 2500
    },
    {
      id : 5,
      productName: 'Cappuccino (Hot)',
      price: 2000
    },
    {
      id : 6,
      productName: 'Cappuccino (Cold)',
      price: 2500
    },
    {
      id : 7,
      productName: 'Cafe Latte (Hot)',
      price: 2000
    },
    {
      id : 8,
      productName: 'Cafe Latte (Cold)',
      price: 2500
    },
    {
      id : 9,
      productName: 'Cafe Mocha (Hot)',
      price: 2000
    },
    {
      id : 10,
      productName: 'Cafe Mocha (Cold)',
      price: 2500
    },
    {
      id : 11,
      productName: 'Hazelnut Latte (Hot)',
      price: 2000
    },
    {
      id : 12,
      productName: 'Hazelnut Latte (Cold)',
      price: 2500
    },
    {
      id : 13,
      productName: 'Vanilla Latte (Hot)',
      price: 2000
    },
    {
      id : 14,
      productName: 'Vanilla Latte (Cold)',
      price: 2500
    },
    {
      id : 15,
      productName: 'Caramel Latte (Hot)',
      price: 2500
    },
    {
      id : 16,
      productName: 'Caramel Latte (Cold)',
      price: 2500
    },
    // seasonal fresh fruit
    {
      id : 17,
      productName: 'Strawberry Fruit',
      price: 2500
    },
    {
      id : 18,
      productName: 'Papaya Fruit',
      price: 2500
    },
    {
      id : 19,
      productName: 'Sunkist Fruit',
      price: 2500
    },
    {
      id : 20,
      productName: 'Avocado Fruit',
      price: 2500
    },
    {
      id : 21,
      productName: 'Watermelon Fruit',
      price: 2500
    },
    {
      id : 22,
      productName: 'Passion Fruit',
      price: 2500
    },
    {
      id : 23,
      productName: 'Pineapple Fruit',
      price: 2500
    },
    {
      id : 24,
      productName: 'Mango Fruit',
      price: 2500
    },
    {
      id : 25,
      productName: 'Honey Lime Float',
      price: 2500
    },
    {
      id : 26,
      productName: 'Lemon Tea Cheese Foam',
      price: 2500
    },
    // juice
    {
      id : 27,
      productName: 'Orange Juice',
      price: 1500
    },
    {
      id : 28,
      productName: 'Strawberry Juice',
      price: 1500
    },
    {
      id : 29,
      productName: 'Kiwi Juice',
      price: 1500
    },
    {
      id : 30,
      productName: 'Blueberry Juice',
      price: 1500
    },
    {
      id : 31,
      productName: 'Mango Juice',
      price: 1500
    },
    {
      id : 32,
      productName: 'Passion Fruit Juice',
      price: 1500
    },
    {
      id : 33,
      productName: 'Lychee Juice',
      price: 1500
    },
    {
      id : 34,
      productName: 'Green Apple Juice',
      price: 1500
    },
    // smoothies
    {
      id : 35,
      productName: 'Blueberry Smoothies',
      price: 2500
    },
    {
      id : 36,
      productName: 'Mango Smoothies',
      price: 2500
    },
    {
      id : 37,
      productName: 'Kiwi Smoothies',
      price: 2500
    },
    {
      id : 38,
      productName: 'Passion Fruit Smoothies',
      price: 2500
    },
    {
      id : 39,
      productName: 'Vanilla Smoothies',
      price: 2500
    },
    {
      id : 40,
      productName: 'Strawberry Smoothies',
      price: 2500
    },
    {
      id : 41,
      productName: 'Mocha Smoothies',
      price: 2500
    },
    {
      id : 42,
      productName: 'Green Tea Smoothies',
      price: 2500
    },
    // Frappe
    {
      id : 43,
      productName: 'Espresso Frappe',
      price: 2500
    },
    {
      id : 44,
      productName: 'The Met Frappe',
      price: 2500
    },
    {
      id : 45,
      productName: 'Cappuccino Frappe',
      price: 2500
    },
    {
      id : 46,
      productName: 'Latte Frappe',
      price: 2500
    },
    {
      id : 47,
      productName: 'Mocha Frappe',
      price: 2500
    },
    {
      id : 48,
      productName: 'Hazelnut Frappe',
      price: 2500
    },
    {
      id : 49,
      productName: 'Vanilla Frappe',
      price: 2500
    },
    {
      id : 50,
      productName: 'Caramel Frappe',
      price: 2500
    },
    // milk tea
    {
      id : 50,
      productName: 'Bubble Milk Tea',
      price: 2500
    },
    {
      id : 51,
      productName: 'Brown Sugar Bubble Milk Tea',
      price: 2500
    },
    {
      id : 53,
      productName: 'Black jelly Milk Tea',
      price: 2500
    },
    {
      id : 54,
      productName: 'White jelly Milk Tea',
      price: 2500
    },
    {
      id : 55,
      productName: 'Pudding Milk Tea',
      price: 2500
    },
    {
      id : 56,
      productName: 'Thai Bubble Tea',
      price: 2500
    },
    {
      id : 57,
      productName: 'Thai Bubble Green Tea',
      price: 2500
    },
    {
      id : 58,
      productName: 'Chocolate Bubble Tea',
      price: 2500
    },
    // Steak
    {
      id : 59,
      productName: 'Chicken Steak',
      price: 3500
    },
    {
      id : 60,
      productName: 'Beef Steak',
      price: 3500
    },
    {
      id : 61,
      productName: 'Pork Steak',
      price: 3500
    },
    // Burger
    {
      id : 62,
      productName: 'Chicken Burger',
      price: 3000
    },
    {
      id : 63,
      productName: 'Beef Burger',
      price: 3000
    },
    {
      id : 64,
      productName: 'Pork Burger',
      price: 3000
    },
    // Sandwich
    {
      id : 65,
      productName: 'Chicken Sandwich',
      price: 3000
    },
    {
      id : 66,
      productName: 'Tuna Sandwich',
      price: 3000
    },
    {
      id : 67,
      productName: 'BKK Sandwich',
      price: 3000
    },
    // Spicy Noodle
    {
      id : 68,
      productName: 'Spicy + ကြက်ကြော်',
      price: 3500
    },
    {
      id : 69,
      productName: 'Spicy + ကြက်သားပြား',
      price: 3500
    },
    {
      id : 70,
      productName: 'Spicy + ကြက်အူချောင်း',
      price: 3500
    },
    {
      id : 71,
      productName: 'Spicy + ဝက်အူချောင်း',
      price: 3500
    },
    {
      id : 72,
      productName: 'Spicy + သုံးထပ်သား',
      price: 3500
    },
    {
      id : 73,
      productName: 'Spicy + ကြက်ပျားရည်',
      price: 5000
    },
    // AHtaung
    {
      id : 74,
      productName: 'ပင်လယ်စာဗန်းထောင်း',
      price: 15000
    },
    {
      id : 75,
      productName: 'ပင်လယ်စာ ေပြာင်းဖူးထောင်း',
      price: 5000
    },
    {
      id : 76,
      productName: 'ရေဘဝဲထောင်း',
      price: 5000
    },
    {
      id : 77,
      productName: 'ဂဏန်းထောင်း',
      price: 5000
    },
    {
      id : 78,
      productName: 'ပြည်ကြီးငါးထောင်း',
      price: 5000
    },
    {
      id : 79,
      productName: 'ကြက်ခြေထောက်  သင်္ဘောသီးထောင်း',
      price: 5000
    },
    {
      id : 80,
      productName: 'မားမား ထောင်း',
      price: 3000
    },
    {
      id : 81,
      productName: ' ပြောင်းဖူးထောင်း',
      price: 3000
    },
    {
      id : 82,
      productName: 'သင်္ဘောသီးထောင်း',
      price: 3000
    },
    // Spicy Family Set
    {
      id : 83,
      productName: 'Spicy Series 1',
      price: 9500
    },
    {
      id : 84,
      productName: 'Spicy Series 2',
      price: 10500
    },
    {
      id : 85,
      productName: 'Spicy Series 3',
      price: 12000
    },
    {
      id : 86,
      productName: 'Spicy Series 4',
      price: 14000
    },
    {
      id : 87,
      productName: 'ခေါက်ဆွဲကြော်',
      price: 3000
    },
    {
      id : 88,
      productName: 'ကြာဇံကြော်',
      price: 3000
    },
    {
      id : 89,
      productName: 'မာလာခေါက်ဆွဲကြော်',
      price: 3000
    },
    {
      id : 90,
      productName: 'ကြက်သား မြေအိုးဒံပေါက်',
      price: 6500
    },
    {
      id : 91,
      productName: 'ဆိတ်သား မြေအိုးဒံပေါက်',
      price: 10000
    },
    {
      id : 92,
      productName: 'ပုစွန် မြေအိုးဒံပေါက်',
      price: 8000
    },
    {
      id : 93,
      productName: 'သီးစုံ မြေအိုးဒံပေါက်',
      price: 5000
    },
    // Seafood Family Set
    {
      id : 94,
      productName: 'ဂဏန်းမဆလာ + ပုစွန်သံပုရာမွှေး + ရေဘဝဲမာလာချဉ်စပ် + ဂဏန်းထောင်း',
      price: 20000
    },
    {
      id : 95,
      productName: 'ဂဏန်းချဉ်စပ် + ပုစွန်မာလာ + ရေဘဝဲထောင်း + Seafood တုံယမ်းဟင်းချို + ပြောင်းဖူးထောင်း + ကြက်ကြော်',
      price: 30000
    },
    {
      id : 96,
      productName: 'ပုစွန်ပွကြော်+ဂဏန်းမာလာSeafood တုံယမ်းဟင်းချို+ပြည်ကြီးငါးထောင်း+ပင်လယ်စာ ပြောင်းဖူးထောင်း+ဝက်နံရိုးမီးတောက်+ကြက်ချဉ်ကြွပ်မွှေး',
      price: 40000
    },
    {
      id : 97,
      productName: 'ပင်လယ်စာမာလာဗန်း + ပင်လယ်စာဗန်းထောင်း + မားမားထောင်း + မာလာဒုတ်ထိုး + Seafood တုံယမ်းဟင်းချို + ပုစွန်မာလာစပ်မွှေး + ဝက်ချဉ်ကြွပ်မွှေး + မလာရှမ်းကော',
      price: 50000
    },
    // special malar menu
    {
      id : 98,
      productName: 'မာလာရှမ်းကော (သေး)',
      price: 5000
    },
    {
      id : 99,
      productName: 'မာလာရှမ်းကော (လတ်)',
      price: 10000
    },
    {
      id : 100,
      productName: 'မာလာရှမ်းကော (ကြီး)',
      price: 15000
    },
    {
      id : 101,
      productName: 'မာလာဒုတ်ထိုး (သေး)',
      price: 5000
    },
    {
      id : 102,
      productName: 'မာလာဒုတ်ထိုး (ကြီး)',
      price: 10000
    },
    {
      id : 103,
      productName: 'ပုဇွန်မာလာ',
      price: 6000
    },
    {
      id : 104,
      productName: 'ဂဏန်းမာလာ',
      price: 7000
    },
    {
      id : 105,
      productName: 'ဗမာကြက်််ကောင်လုံးမာလာပေါင်း ',
      price: 12000
    },
    {
      id : 106,
      productName: 'ဝက်နံရိုးမာလာပေါင်း',
      price: 7000
    },
    {
      id : 107,
      productName: 'ပင်လယ်စာမာလာဗန်း',
      price: 12000
    },
    {
      id : 108,
      productName: 'ပုဇွန်မာလာစပ်မွှေး',
      price: 6000
    },
    {
      id : 109,
      productName: 'ရေဘဝဲမာလာချဉ််စပ်',
      price: 5000
    },
    // First food and Grills
    {
      id : 110,
      productName: 'ကိုရီးယားကြက်ကြော်',
      price: 5500
    },
    {
      id : 111,
      productName: 'ကြက်ပျားရည် +  အာလူးချောင်းကြော်',
      price: 5000
    },
    {
      id : 112,
      productName: 'ကြက်ကြော်',
      price: 4000
    },
    {
      id : 113,
      productName: 'ကြက်သားပြားကြော်',
      price: 3000
    },
    {
      id : 114,
      productName: 'အာလူးချောင်းကြော်(cheese/spicy)',
      price: 3000
    },
    {
      id : 115,
      productName: 'အာလူးမာလာခြောက်စပ်',
      price: 3000
    },
    {
      id : 116,
      productName: 'အကင်စုံ',
      price: 12000
    },
    {
      id : 117,
      productName: 'ပုဇွန်ကင်',
      price: 15000
    },
    {
      id : 118,
      productName: 'အမဲသားကင်',
      price: 12000
    },
    {
      id : 119,
      productName: 'သုံထပ်သားကင်',
      price: 12000
    },
    {
      id : 120,
      productName: 'ကြက်ရင်အုံကင်',
      price: 10000
    },
    // Fried Rice
    {
      id : 121,
      productName: 'တုံယမ်းထမင်းကြော်(ကြက်/ဝက်/ပင်လယ်စာ)',
      price: 3500
    },
    {
      id : 122,
      productName: 'ပင်လယ်စာထမင်းကြော်(ကြက်/ဝက်/ပင်လယ်စာ)',
      price: 3500
    },
    {
      id : 123,
      productName: 'ပင်စိမ်းထမင်းကြော်(ကြက်/ဝက်/ပင်လယ်စာ)',
      price: 3500
    },
    {
      id : 124,
      productName: 'သီးစုံထမင်းကြော်(ကြက်/ဝက်/ပင်လယ်စာ)',
      price: 3500
    },
    {
      id : 125,
      productName: 'ပသျူးထမင်းကြော်(ကြက်/ဝက်/ပင်လယ်စာ)',
      price: 3500
    },
    {
      id : 126,
      productName: 'ကြက်သွန်ဖြူထမင်းကြော်',
      price: 3000
    },
    {
      id : 127,
      productName: 'အမေရိကန်ထမင်းကြော်',
      price: 5000
    },
    {
      id : 128,
      productName: 'စပိန်ထမင်းကြော်',
      price: 5000
    },
    {
      id : 129,
      productName: 'The Met ထမင်းကြော်',
      price: 5000
    },
    // Main course
    {
      id : 130,
      productName: 'ကြက်ချဉ်ကြွပ်မွှေး',
      price: 5000
    },
    {
      id : 131,
      productName: 'ဝက်ချဉ်ကြွပ်မွှေး',
      price: 5000
    },
    {
      id : 132,
      productName: 'ဂဏန်းမဆလာ',
      price: 7000
    },
    {
      id : 133,
      productName: 'ဂဏန်းချဉ်စပ်',
      price: 7000
    },
    {
      id : 134,
      productName: 'ပုဇွန်ပွကြော်',
      price: 6000
    },
    {
      id : 135,
      productName: 'ပုဇွန်သံပုရာမွှေး',
      price: 6000
    },
    {
      id : 136,
      productName: 'ဝက်နံရိုးမီးတောက်',
      price: 7000
    },
    {
      id : 137,
      productName: 'ဝက်မာလာခြောက်စပ်မွှေး',
      price: 5000
    },
    // Myanmar Food
    {
      id : 138,
      productName: 'ထပ်တရာ(ပဲ၊ အာလူး)',
      price: 700
    },
    {
      id : 139,
      productName: 'ပလာတာ(ပဲ၊ အာလူး)',
      price: 700
    },
    {
      id : 140,
      productName: 'ကြက်ဥပလာတာ',
      price: 1500
    }, 
    {
      id : 141,
      productName: 'ငှက်ပျောပလာတာ',
      price: 1500
    },
    {
      id : 142,
      productName: 'နံပြား(ပဲ၊ ထောပတ်)',
      price: 1000
    },
    {
      id : 143,
      productName: 'ကီးမား (ကြက်၊ ဆိတ်)',
      price: 2500
    },
    {
      id : 144,
      productName: 'စမူဆာ',
      price: 150
    },
    {
      id : 145,
      productName: 'အီကြာကွေး',
      price: 500
    },
    {
      id : 146,
      productName: 'မုန့်ဟင်းခါး',
      price: 2000
    },
    {
      id : 147,
      productName: 'အုန်းနို့ ခေါက်ဆွဲ',
      price: 2000
    },
    {
      id : 148,
      productName: 'မြီးရှည်',
      price: 2000
    },
    {
      id : 149,
      productName: 'ရှမ်းခေါက်ဆွဲ',
      price: 2000
    },
    {
      id : 150,
      productName: 'ဆီချက်ခေါက်ဆွဲ',
      price: 2000
    }, 
    {
      id : 151,
      productName: 'မုန့်တီ',
      price: 2000
    },
    {
      id : 152,
      productName: 'ခေါက်ဆွဲပြားသုပ်',
      price: 2000
    },
    // Korean Food
    {
      id : 153,
      productName: 'ကိုရီးယားပဲခေါက်ဆွဲ',
      price: 3500
    },
    {
      id : 154,
      productName: 'ကိုရီးယားထမင်းသုပ်',
      price: 3500
    },
    {
      id : 155,
      productName: 'တော့ပိုကီ',
      price: 3500
    },
    {
      id : 156,
      productName: 'ငါးအသားပြားချောင်း(ချို/ စပ်)',
      price: 3000
    },
    {
      id : 157,
      productName: 'ငါးသားဂဏန်းချောင်း(ချို/ စပ်)',
      price: 3000
    },
    {
      id : 158,
      productName: 'ငါးသားရေညှိချောင်း(ချို/ စပ်)',
      price: 3000
    },
    {
      id : 159,
      productName: 'ဂင်ချီထမင်းကြော်',
      price: 3000
    },
    {
      id : 160,
      productName: 'ဂင်ချီဟင်းရည်',
      price: 3000
    },
    {
      id : 161,
      productName: 'ကိုရီးယားရေညှိထမင်းလိပ်',
      price: 2000
    },
    {
      id : 162,
      productName: 'တုံယမ်းဟင်းချို',
      price: 5000
    },
    {
      id : 163,
      productName: 'ယိုးဒယားဟင်းချို',
      price: 5000
    },
    {
      id : 164,
      productName: '(၁၂)မျိုးဟင်းချို',
      price: 5000
    },
    {
      id : 165,
      productName: 'Ice Black Rose',
      price: 2500
    },
    {
      id : 166,
      productName : 'Lemon Fresh Ginger',
      price: 2500,
    },
    {
      id : 167,
      productName: 'Egg Roll',
      price: 3000
    },
    {
      id : 168,
      productName: 'Strawberry Cream Sandwich',
      price: 2500
    },
    {
      id : 169,
      productName: 'Sushi Sandwich',
      price: 3000
    },
    {
      id : 170,
      productName: 'Strawberry Cream Sandwich',
      price: 2500
    },
    {
      id : 171,
      productName: 'Mango crepe',
      price: 1200
    
    },
    {
      id : 172,
      productName: 'Hot dog',
      price: 1200
    
    },
    {
      id : 173,
      productName: 'Cheesy bun',
      price: 1500
    
    },
    
    {
      id : 174,
      productName: 'Hokkaido',
      price: 1500
    },
    {
      id : 175,
      productName: 'Chocolate bread',
      price: 1200
    },
    {
      id : 176,
      productName: 'Brownie cake',
      price: 500
    
    },
    {
      id : 177,
      productName: 'Chocolate cap cake',
      price: 1000
    
    },
    {
      id : 178,
      productName: 'Chocolate lava cake',
      price: 1000 
    
    },
    {
      id : 179,
      productName: 'Black forest cake',
      price: 1500
    
    },
    {
      id : 180,
      productName: 'Cholate mousse cake',
      price: 1500
    }
    
  ];

  seeSelectedItem(){
    let length = this.selectedItems.length;
    // let qlength = this.itemQuantity.length;
    console.log("note array", this.selectedItems);
    
    let data: any = localStorage.getItem('data');
    let quantity: any = localStorage.getItem('quan')
    console.log("data", data);
    console.log("quantity getItem>>", quantity);

    let jsonData = JSON.parse(data);
    let jsonQuantity = JSON.parse(quantity);
    console.log("jsonData", jsonData);
    console.log("jsonQuantity", jsonQuantity);
    
    let concatData = Object.assign(jsonData, jsonQuantity);
    console.log("concatData", concatData);
    
    this.selectedItems[length] = concatData;
    // this.itemQuantity[length]=JSON.parse(quantity)
    // console.log("Json format of data", this.selectedItems);
    // console.log("Json format of quantity", this.itemQuantity);
    

    return this.selectedItems;
  }
  // seeQuantity(){
  //   return this.itemQuantity;
  // }

}
