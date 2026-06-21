export interface Ingredient {
  id: string;
  name: string;
  englishName: string;
  category: string; // "meat" | "veg" | "fruit" | "egg" | "sweetener" | "dairy" | "filler" | "special"
  values: {
    meat?: number;
    monster?: number;
    veg?: number;
    fruit?: number;
    egg?: number;
    sweetener?: number;
    dairy?: number;
    fish?: number;
    twigs?: number;
    ice?: number;
    drumstick?: number;
    butterfly?: number;
    mandrake?: number;
    birchnut?: number;
    watermelon?: number;
    dragonfruit?: number;
    flower?: number;
    mole?: number;
    lichen?: number;
    eel?: number;
  };
  color: string; // for UI tag illustration
  avatarText: string; // short Emoji or text
}

export interface Recipe {
  id: string;
  name: string;
  englishName: string;
  hp: number;
  hunger: number;
  sanity: number;
  cookTime: number; // in seconds
  perishDays: number; // rot time
  priority: number;
  requirementsZH: string;
  requirementsEN: string;
  canCookWith: (totals: Record<string, number>, ingredients: Ingredient[]) => boolean;
  idealCombo: string[]; // exemplary recipe combo IDs e.g. ["monster_meat", "berries", "berries", "berries"]
  description: string;
}

// 1. Ingredients List
export const INGREDIENTS: Ingredient[] = [
  {
    id: "large_meat",
    name: "大肉",
    englishName: "Meat",
    category: "meat",
    values: { meat: 1.0 },
    color: "bg-red-600 hover:bg-red-700 text-white border-red-800",
    avatarText: "🥩",
  },
  {
    id: "morsel",
    name: "小肉",
    englishName: "Morsel",
    category: "meat",
    values: { meat: 0.5 },
    color: "bg-orange-600 hover:bg-orange-700 text-white border-orange-800",
    avatarText: "🍖",
  },
  {
    id: "monster_meat",
    name: "怪物肉",
    englishName: "Monster Meat",
    category: "meat",
    values: { meat: 1.0, monster: 1.0 },
    color: "bg-purple-700 hover:bg-purple-800 text-white border-purple-950",
    avatarText: "👾",
  },
  {
    id: "drumstick",
    name: "火雞腿",
    englishName: "Drumstick",
    category: "meat",
    values: { meat: 0.5, drumstick: 1.0 },
    color: "bg-amber-600 hover:bg-amber-700 text-white border-amber-800",
    avatarText: "🍗",
  },
  {
    id: "frog_legs",
    name: "蛙腿",
    englishName: "Frog Legs",
    category: "meat",
    values: { meat: 0.5 },
    color: "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-800",
    avatarText: "🐸",
  },
  {
    id: "fish",
    name: "魚肉",
    englishName: "Fish",
    category: "meat",
    values: { meat: 0.5, fish: 1.0 },
    color: "bg-blue-600 hover:bg-blue-700 text-white border-blue-800",
    avatarText: "🐟",
  },
  {
    id: "eel",
    name: "鰻魚",
    englishName: "Eel",
    category: "meat",
    values: { meat: 1.0, fish: 1.0, eel: 1.0 },
    color: "bg-slate-700 hover:bg-slate-800 text-white border-slate-900",
    avatarText: "🐉",
  },
  {
    id: "carrot",
    name: "胡蘿蔔",
    englishName: "Carrot",
    category: "veg",
    values: { veg: 1.0 },
    color: "bg-orange-400 hover:bg-orange-500 text-stone-900 border-orange-600",
    avatarText: "🥕",
  },
  {
    id: "mushroom",
    name: "蕈類",
    englishName: "Mushroom",
    category: "veg",
    values: { veg: 0.5 },
    color: "bg-teal-600 hover:bg-teal-700 text-white border-teal-800",
    avatarText: "🍄",
  },
  {
    id: "pumpkin",
    name: "南瓜",
    englishName: "Pumpkin",
    category: "veg",
    values: { veg: 1.0 },
    color: "bg-amber-500 hover:bg-amber-600 text-stone-950 border-amber-700",
    avatarText: "🎃",
  },
  {
    id: "eggplant",
    name: "茄子",
    englishName: "Eggplant",
    category: "veg",
    values: { veg: 1.0 },
    color: "bg-violet-800 hover:bg-violet-900 text-white border-violet-950",
    avatarText: "🍆",
  },
  {
    id: "cactus_flesh",
    name: "仙人掌肉",
    englishName: "Cactus Flesh",
    category: "veg",
    values: { veg: 1.0 },
    color: "bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-900",
    avatarText: "🌵",
  },
  {
    id: "lichen",
    name: "洞穴苔蘚",
    englishName: "Lichen",
    category: "veg",
    values: { veg: 1.0, lichen: 1.0 },
    color: "bg-green-800 hover:bg-green-900 text-white border-green-950",
    avatarText: "🌿",
  },
  {
    id: "berries",
    name: "漿果",
    englishName: "Berries",
    category: "fruit",
    values: { fruit: 0.5 },
    color: "bg-rose-600 hover:bg-rose-700 text-white border-rose-800",
    avatarText: "🍒",
  },
  {
    id: "dragonfruit",
    name: "火龍果",
    englishName: "Dragon Fruit",
    category: "fruit",
    values: { fruit: 1.0, dragonfruit: 1.0 },
    color: "bg-pink-600 hover:bg-pink-700 text-white border-pink-800",
    avatarText: "🐉",
  },
  {
    id: "watermelon",
    name: "西瓜",
    englishName: "Watermelon",
    category: "fruit",
    values: { fruit: 1.0, watermelon: 1.0 },
    color: "bg-emerald-500 hover:bg-emerald-600 text-stone-900 border-emerald-700",
    avatarText: "🍉",
  },
  {
    id: "durian",
    name: "榴槤",
    englishName: "Durian",
    category: "fruit",
    values: { fruit: 1.0, monster: 1.0 },
    color: "bg-yellow-700 hover:bg-yellow-800 text-white border-yellow-900",
    avatarText: "🍈",
  },
  {
    id: "egg",
    name: "雞蛋",
    englishName: "Egg",
    category: "egg",
    values: { egg: 1.0 },
    color: "bg-yellow-50 hover:bg-yellow-100 text-stone-900 border-yellow-300",
    avatarText: "🥚",
  },
  {
    id: "tallbird_egg",
    name: "高鳥蛋",
    englishName: "Tallbird Egg",
    category: "egg",
    values: { egg: 4.0 },
    color: "bg-yellow-200 hover:bg-yellow-300 text-stone-900 border-yellow-400",
    avatarText: "🪺",
  },
  {
    id: "honey",
    name: "蜂蜜",
    englishName: "Honey",
    category: "sweetener",
    values: { sweetener: 1.0 },
    color: "bg-yellow-400 hover:bg-yellow-500 text-stone-950 border-yellow-600",
    avatarText: "🍯",
  },
  {
    id: "butter",
    name: "黃油",
    englishName: "Butter",
    category: "dairy",
    values: { dairy: 1.0 },
    color: "bg-yellow-100 hover:bg-yellow-200 text-stone-900 border-yellow-400",
    avatarText: "🧈",
  },
  {
    id: "electric_milk",
    name: "羊奶",
    englishName: "Electric Milk",
    category: "dairy",
    values: { dairy: 1.0 },
    color: "bg-sky-100 hover:bg-sky-200 text-stone-900 border-sky-300",
    avatarText: "🥛",
  },
  {
    id: "twigs",
    name: "樹枝",
    englishName: "Twigs",
    category: "filler",
    values: { twigs: 1.0 },
    color: "bg-amber-800 hover:bg-amber-900 text-white border-amber-950",
    avatarText: "🥢",
  },
  {
    id: "ice",
    name: "冰塊",
    englishName: "Ice",
    category: "filler",
    values: { ice: 1.0 },
    color: "bg-sky-300 hover:bg-sky-450 text-stone-900 border-sky-400",
    avatarText: "🧊",
  },
  {
    id: "butterfly_wings",
    name: "蝴蝶翅膀",
    englishName: "Butterfly Wings",
    category: "special",
    values: { butterfly: 1.0 },
    color: "bg-pink-400 hover:bg-pink-500 text-white border-pink-600",
    avatarText: "🦋",
  },
  {
    id: "mandrake",
    name: "曼德拉草",
    englishName: "Mandrake",
    category: "special",
    values: { mandrake: 1.0 },
    color: "bg-lime-500 hover:bg-lime-600 text-stone-950 border-lime-700",
    avatarText: "🌱",
  },
  {
    id: "roasted_birchnut",
    name: "烤樺木果",
    englishName: "Roasted Birchnut",
    category: "special",
    values: { birchnut: 1.0 },
    color: "bg-amber-700 hover:bg-amber-800 text-white border-amber-900",
    avatarText: "🌰",
  },
  {
    id: "cactus_flower",
    name: "仙人掌花",
    englishName: "Cactus Flower",
    category: "special",
    values: { flower: 1.0 },
    color: "bg-pink-300 hover:bg-pink-400 text-stone-900 border-pink-500",
    avatarText: "🌸",
  },
  {
    id: "mole",
    name: "鼴鼠",
    englishName: "Mole",
    category: "special",
    values: { mole: 1.0, meat: 0.5 },
    color: "bg-stone-500 hover:bg-stone-600 text-white border-stone-700",
    avatarText: "🐹",
  }
];

export const INGREDIENT_MAP = INGREDIENTS.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as Record<string, Ingredient>);

// Helper helper function to sum up parameters
export function sumIngredients(ingredientIds: string[]): Record<string, number> {
  const totals: Record<string, number> = {
    meat: 0,
    monster: 0,
    veg: 0,
    fruit: 0,
    egg: 0,
    sweetener: 0,
    dairy: 0,
    fish: 0,
    twigs: 0,
    ice: 0,
    drumstick: 0,
    butterfly: 0,
    mandrake: 0,
    birchnut: 0,
    watermelon: 0,
    dragonfruit: 0,
    flower: 0,
    mole: 0,
    lichen: 0,
    eel: 0,
  };

  for (const id of ingredientIds) {
    const ing = INGREDIENT_MAP[id];
    if (ing && ing.values) {
      for (const [key, val] of Object.entries(ing.values)) {
        if (typeof val === "number") {
          totals[key] = (totals[key] || 0) + val;
        }
      }
    }
  }
  return totals;
}

// 2. Recipes List
export const RECIPES: Recipe[] = [
  {
    id: "mandrake_soup",
    name: "曼德拉草湯",
    englishName: "Mandrake Soup",
    hp: 100,
    hunger: 150,
    sanity: 5,
    cookTime: 60,
    perishDays: 6,
    priority: 30,
    requirementsZH: "包含至少 1 個曼德拉草",
    requirementsEN: "At least 1 Mandrake",
    idealCombo: ["mandrake", "twigs", "twigs", "twigs"],
    description: "大補品！能夠回復極大量的生命值和飢餓值，一喝下去瞬間拉滿！",
    canCookWith: (t) => t.mandrake >= 1,
  },
  {
    id: "waffles",
    name: "鬆餅",
    englishName: "Waffles",
    hp: 60,
    hunger: 37.5,
    sanity: 5,
    cookTime: 10,
    perishDays: 6,
    priority: 10,
    requirementsZH: "包含 1 個黃油、至少 1 個蛋、1 個漿果",
    requirementsEN: "1 Butter, 1 Egg, 1 Berries",
    idealCombo: ["butter", "egg", "berries", "twigs"],
    description: "高檔奢華甜食！需要極為罕見的黃油（擊殺蝴蝶 2% 機率獲得）。生命值恢復量僅次於曼德拉草湯！",
    canCookWith: (t, ings) => {
      const hasButter = ings.some(i => i.id === "butter");
      const hasBerries = ings.some(i => i.id === "berries");
      return hasButter && t.egg >= 1 && hasBerries;
    },
  },
  {
    id: "surf_n_turf",
    name: "海陸雙拼",
    englishName: "Surf 'n' Turf",
    hp: 60,
    hunger: 37.5,
    sanity: 33,
    cookTime: 20,
    perishDays: 10,
    priority: 30,
    requirementsZH: "肉類係數 >= 2.5 且 魚類係數 >= 1.5，不能有冰塊",
    requirementsEN: "Meat >= 2.5, Fish >= 1.5. No Ice",
    idealCombo: ["large_meat", "large_meat", "fish", "fish"],
    description: "超級出色的中後期料理，高額回復生命值與精神值。在船難或聯機版地洞垂釣中極受歡迎！",
    canCookWith: (t) => t.meat >= 2.5 && t.fish >= 1.5 && t.ice === 0,
  },
  {
    id: "ice_cream",
    name: "冰淇淋",
    englishName: "Ice Cream",
    hp: 0,
    hunger: 25,
    sanity: 50,
    cookTime: 15,
    perishDays: 3,
    priority: 10,
    requirementsZH: "至少 1 個乳製品、1 個冰塊、1 個甜味劑。不能包含肉類、蔬菜、樹枝",
    requirementsEN: "At least 1 Dairy, 1 Ice, 1 Sweetener. No Meat, Veg, or Twigs",
    idealCombo: ["electric_milk", "ice", "honey", "honey"],
    description: "精神回復之王（+50）！夏日降溫神物，但保存期限非常短暫，建議現做現吃。",
    canCookWith: (t) => t.dairy >= 1 && t.ice >= 1 && t.sweetener >= 1 && t.meat === 0 && t.veg === 0 && t.twigs === 0,
  },
  {
    id: "pierogi",
    name: "波蘭餃子",
    englishName: "Pierogi",
    hp: 40,
    hunger: 37.5,
    sanity: 5,
    cookTime: 20,
    perishDays: 20,
    priority: 5,
    requirementsZH: "包含肉類係數 >= 0.5、蛋類係數 >= 1、蔬菜類係數 >= 0.5。不能有樹枝",
    requirementsEN: "Meat >= 0.5, Egg >= 1, Veg >= 0.5. No Twigs",
    idealCombo: ["monster_meat", "egg", "carrot", "berries"],
    description: "飢荒「性價比最高」的打怪戰鬥回血神藥。保存時間極長（20天），材料極易取得！",
    canCookWith: (t) => t.meat >= 0.5 && t.egg >= 1 && t.veg >= 0.5 && t.twigs === 0,
  },
  {
    id: "dragonpie",
    name: "火龍果派",
    englishName: "Dragonpie",
    hp: 40,
    hunger: 75,
    sanity: 5,
    cookTime: 40,
    perishDays: 15,
    priority: 1,
    requirementsZH: "包含至少 1 個火龍果。不能包含任何肉類",
    requirementsEN: "At least 1 Dragon Fruit. No Meat",
    idealCombo: ["dragonfruit", "twigs", "twigs", "twigs"],
    description: "素食玩家與中後期基地的必備至尊！一個火龍果加上三個樹枝就能做出來（極致省料）。",
    canCookWith: (t) => t.dragonfruit >= 1 && t.meat === 0,
  },
  {
    id: "fishsticks",
    name: "魚條",
    englishName: "Fishsticks",
    hp: 40,
    hunger: 37.5,
    sanity: 5,
    cookTime: 40,
    perishDays: 10,
    priority: 10,
    requirementsZH: "包含至少 1 個魚肉、至少 1 個樹枝。且肉類係數 <= 1.0",
    requirementsEN: "At least 1 Fish, 1 Twigs. Meat <= 1.0",
    idealCombo: ["fish", "twigs", "berries", "berries"],
    description: "池塘垂釣愛好者的回血神物（高達+40血），做法簡單，加一根樹枝即可成型。",
    canCookWith: (t) => t.fish >= 0.25 && t.twigs >= 1 && t.meat <= 1.0,
  },
  {
    id: "flower_salad",
    name: "鮮花沙拉",
    englishName: "Flower Salad",
    hp: 40,
    hunger: 12.5,
    sanity: 5,
    cookTime: 10,
    perishDays: 6,
    priority: 10,
    requirementsZH: "包含至少 1 個仙人掌花、蔬菜係數 >= 1.5。不能有肉類",
    requirementsEN: "At least 1 Cactus Flower, Veg >= 1.5. No Meat",
    idealCombo: ["cactus_flower", "cactus_flesh", "cactus_flesh", "berries"],
    description: "夏季限定高回血料理（+40），仙人掌開花時的絕佳美味，素食玩家首選。",
    canCookWith: (t) => t.flower >= 1 && t.veg >= 1.5 && t.meat === 0,
  },
  {
    id: "trail_mix",
    name: "綜合堅果",
    englishName: "Trail Mix",
    hp: 30,
    hunger: 12.5,
    sanity: 5,
    cookTime: 40,
    perishDays: 15,
    priority: 10,
    requirementsZH: "熟樺木果 >= 1、漿果 >= 1、水果類 >= 1.0。不能包含肉類、蔬菜、蛋類、乳製品",
    requirementsEN: "1 Roasted Birchnut, 1 Berries, Fruit >= 1.0. No Meat, Veg, Egg, or Dairy",
    idealCombo: ["roasted_birchnut", "berries", "berries", "twigs"],
    description: "秋季砍樺樹最愛的保命零食，回血 30 性價比突出。注意原材料必須是「烤過」的樹果！",
    canCookWith: (t, ings) => {
      const hasBirchnut = ings.some(i => i.id === "roasted_birchnut");
      const hasBerries = ings.some(i => i.id === "berries");
      return (
        hasBirchnut &&
        hasBerries &&
        t.fruit >= 1.0 &&
        t.meat === 0 &&
        t.veg === 0 &&
        t.egg === 0 &&
        t.dairy === 0
      );
    },
  },
  {
    id: "unagi",
    name: "鰻魚料理",
    englishName: "Unagi",
    hp: 20,
    hunger: 18.75,
    sanity: 5,
    cookTime: 10,
    perishDays: 10,
    priority: 20,
    requirementsZH: "包含至少 1 個鰻魚、1 個洞穴苔蘚",
    requirementsEN: "At least 1 Eel, 1 Lichen",
    idealCombo: ["eel", "lichen", "twigs", "twigs"],
    description: "地洞深處釣鰻魚者的常規點心，烹飪迅速，屬快遞料理。",
    canCookWith: (t, ings) => {
      const hasEel = ings.some(i => i.id === "eel");
      const hasLichen = ings.some(i => i.id === "lichen");
      return hasEel && hasLichen;
    },
  },
  {
    id: "guacamole",
    name: "酪梨沙拉",
    englishName: "Guacamole",
    hp: 20,
    hunger: 37.5,
    sanity: 10,
    cookTime: 10,
    perishDays: 10,
    priority: 10,
    requirementsZH: "包含至少 1 個活鼴鼠、1 個仙人掌肉或蔬菜。不能有水果",
    requirementsEN: "At least 1 Live Mole, 1 Cactus/Veg. No Fruit",
    idealCombo: ["mole", "cactus_flesh", "twigs", "twigs"],
    description: "風味獨特，能稍微回復精神。捕捉一隻肥碩的鼴鼠放入砂鍋中敲暈製作！",
    canCookWith: (t) => t.mole >= 1 && t.veg >= 1.0 && t.fruit === 0,
  },
  {
    id: "butter_muffin",
    name: "蝴蝶鬆餅",
    englishName: "Butter Muffin",
    hp: 20,
    hunger: 37.5,
    sanity: 5,
    cookTime: 40,
    perishDays: 15,
    priority: 1,
    requirementsZH: "包含 1 個蝴蝶翅膀、蔬菜係數 >= 0.5。不能含有肉類",
    requirementsEN: "1 Butterfly Wings, Veg >= 0.5. No Meat",
    idealCombo: ["butterfly_wings", "carrot", "twigs", "twigs"],
    description: "綠地探險與前期保命不可多得的美味（回血20），僅需拍扁一條蝴蝶加根胡蘿蔔!",
    canCookWith: (t, ings) => {
      const hasButterfly = ings.some(i => i.id === "butterfly_wings");
      return hasButterfly && t.veg >= 0.5 && t.meat === 0;
    },
  },
  {
    id: "turkey_dinner",
    name: "火雞大餐",
    englishName: "Turkey Dinner",
    hp: 20,
    hunger: 75,
    sanity: 5,
    cookTime: 60,
    perishDays: 6,
    priority: 10,
    requirementsZH: "包含至少 2 個火雞腿、肉類係數 > 1.0、且有 0.5 以上的水果或蔬菜",
    requirementsEN: "At least 2 Drumsticks, Meat > 1.0, Fruit/Veg >= 0.5",
    idealCombo: ["drumstick", "drumstick", "monster_meat", "carrot"],
    description: "飽腹感拉滿的美味派對火雞！也是對付騷擾灌木叢火雞的香噴噴報復餐。",
    canCookWith: (t) => t.drumstick >= 2 && t.meat > 1.0 && (t.veg >= 0.5 || t.fruit >= 0.5),
  },
  {
    id: "bacon_and_eggs",
    name: "培根蛋",
    englishName: "Bacon and Eggs",
    hp: 20,
    hunger: 75,
    sanity: 5,
    cookTime: 40,
    perishDays: 20,
    priority: 10,
    requirementsZH: "蛋類係數 >= 2.0、肉類係數 > 1.5。不能包含蔬菜",
    requirementsEN: "Egg >= 2.0, Meat > 1.5. No Veg",
    idealCombo: ["monster_meat", "morsel", "egg", "egg"],
    description: "高飽腹（75）、保質期極長（20天）的優質出遠門口糧，但會消耗較多肉與蛋。",
    canCookWith: (t) => t.egg >= 2.0 && t.meat > 1.5 && t.veg === 0,
  },
  {
    id: "melonsicle",
    name: "西瓜冰棒",
    englishName: "Melonsicle",
    hp: 3,
    hunger: 12.5,
    sanity: 20,
    cookTime: 10,
    perishDays: 3,
    priority: 10,
    requirementsZH: "包含至少 1 個西瓜、1 個冰塊、1 個樹枝。不能有肉類、蔬菜",
    requirementsEN: "At least 1 Watermelon, 1 Ice, 1 Twigs. No Meat, No Veg",
    idealCombo: ["watermelon", "ice", "twigs", "twigs"],
    description: "精神回復利器 (+20 三分)。夏日解暑必備，自帶降溫效果，非常消暑。",
    canCookWith: (t, ings) => {
      const hasWatermelon = ings.some(i => i.id === "watermelon");
      return hasWatermelon && t.ice >= 1 && t.twigs >= 1 && t.meat === 0 && t.veg === 0;
    },
  },
  {
    id: "taffy",
    name: "太妃糖",
    englishName: "Taffy",
    hp: -3,
    hunger: 25,
    sanity: 15,
    cookTime: 40,
    perishDays: 15,
    priority: 10,
    requirementsZH: "包含至少 3 個甜味劑。不能含肉",
    requirementsEN: "At least 3 Sweeteners. No Meat",
    idealCombo: ["honey", "honey", "honey", "twigs"],
    description: "前期性價比極高的回腦（精神+15）料理，但也因為太甜會微幅扣減生命 3 點。",
    canCookWith: (t) => t.sweetener >= 3 && t.meat === 0,
  },
  {
    id: "meaty_stew",
    name: "肉湯",
    englishName: "Meaty Stew",
    hp: 12,
    hunger: 150,
    sanity: 5,
    cookTime: 15,
    perishDays: 10,
    priority: 0,
    requirementsZH: "肉類係數 >= 3.0。不能包含樹枝、怪物肉係數 <= 1.0",
    requirementsEN: "Meat >= 3.0. No Twigs, Monster <= 1.0",
    idealCombo: ["large_meat", "large_meat", "morsel", "morsel"],
    description: "飢餓值大魔王（+150）！一鍋下去大部分角色能直接吃撐。注意不能有樹枝，否則會變肉串甚至是濕滑焦糊。",
    canCookWith: (t) => t.meat >= 3.0 && t.twigs === 0 && t.monster <= 1,
  },
  {
    id: "meatballs",
    name: "肉丸",
    englishName: "Meatballs",
    hp: 3,
    hunger: 62.5,
    sanity: 5,
    cookTime: 15,
    perishDays: 10,
    priority: -1,
    requirementsZH: "肉類係數 >= 0.5。不能含有樹枝",
    requirementsEN: "Meat >= 0.5. No Twigs",
    idealCombo: ["monster_meat", "berries", "berries", "berries"],
    description: "飢荒新手老手的大眾常客，俗稱「萬能飽腹神丸」。放一塊怪物肉與三個漿果，高達 62.5 飢餓值回復！",
    canCookWith: (t) => t.meat >= 0.5 && t.twigs === 0,
  },
  {
    id: "fist_full_of_jam",
    name: "果醬蜜餞",
    englishName: "Fist Full of Jam",
    hp: 3,
    hunger: 37.5,
    sanity: 5,
    cookTime: 10,
    perishDays: 15,
    priority: 0,
    requirementsZH: "水果係數 >= 0.5。不能包含肉類、蔬菜、樹枝",
    requirementsEN: "Fruit >= 0.5. No Meat, Veg, or Twigs",
    idealCombo: ["berries", "berries", "berries", "ice"],
    description: "簡單極致的水果甜食，沒有肉菜時可以烹飪用於前期飽腹。",
    canCookWith: (t) => t.fruit >= 0.5 && t.meat === 0 && t.veg === 0 && t.twigs === 0,
  },
  {
    id: "ratatouille",
    name: "蔬菜雜燴",
    englishName: "Ratatouille",
    hp: 3,
    hunger: 25,
    sanity: 5,
    cookTime: 20,
    perishDays: 15,
    priority: 0,
    requirementsZH: "蔬菜係數 >= 0.5。不能包含肉類、樹枝",
    requirementsEN: "Veg >= 0.5. No Meat, No Twigs",
    idealCombo: ["carrot", "berries", "berries", "berries"],
    description: "清淡健康的素食小餐，蔬菜溢出時可以作為保溫素食。",
    canCookWith: (t) => t.veg >= 0.5 && t.meat === 0 && t.twigs === 0,
  },
  {
    id: "kabobs",
    name: "肉串",
    englishName: "Kabobs",
    hp: 3,
    hunger: 37.5,
    sanity: 5,
    cookTime: 40,
    perishDays: 15,
    priority: 5,
    requirementsZH: "肉類係數 >= 0.5、樹枝 >= 1。怪物肉係數 <= 1.0",
    requirementsEN: "Meat >= 0.5, Twigs >= 1. Monster <= 1.0",
    idealCombo: ["morsel", "twigs", "berries", "berries"],
    description: "最便宜的烤肉串！可以用樹枝作為烤籤與多餘的肉屑來烹飪。",
    canCookWith: (t) => t.meat >= 0.5 && t.twigs >= 1 && t.monster <= 1,
  },
  {
    id: "monster_lasagna",
    name: "怪物千層麵",
    englishName: "Monster Lasagna",
    hp: -20,
    hunger: 37.5,
    sanity: -20,
    cookTime: 10,
    perishDays: 6,
    priority: 10,
    requirementsZH: "包含至少 2 個怪物食物（如怪物肉、榴槤）。不能有樹枝",
    requirementsEN: "At least 2 Monster items. No Twigs",
    idealCombo: ["monster_meat", "monster_meat", "berries", "berries"],
    description: "極其致命的紫紅色千層麵，正常角色吃下會大幅流失生命與神智。只有韋伯（Webber）可以免疫其副作用！",
    canCookWith: (t) => t.monster >= 2 && t.twigs === 0,
  },
  {
    id: "wet_goop",
    name: "濕滑焦糊",
    englishName: "Wet Goop",
    hp: 0,
    hunger: 0,
    sanity: 0,
    cookTime: 5,
    perishDays: 6,
    priority: -2,
    requirementsZH: "當放入的食材完全不符合任何其他食譜時，會變成這款毫無用處的焦黑菜渣。",
    requirementsEN: "Matches when no other combination is met",
    idealCombo: ["twigs", "twigs", "twigs", "twigs"],
    description: "烹飪災難！浪費了精力與食材後得到的一坨無法下嚥的焦黑糊糊。",
    canCookWith: () => true, // Fallback
  }
];

// Helper function to calculate Crock Pot output for 4 selected ingredient IDs
export function cookCrockPot(selectedIds: string[]): Recipe {
  if (selectedIds.length !== 4) {
    return RECIPES.find((r) => r.id === "wet_goop")!;
  }

  const totals = sumIngredients(selectedIds);
  const selectedIngredients = selectedIds.map((id) => INGREDIENT_MAP[id]).filter(Boolean);

  // Filter recipes whose requirements are satisfied
  const matchingRecipes = RECIPES.filter((recipe) => {
    // Wet goop can match anytime but has priority -2.
    if (recipe.id === "wet_goop") return true;
    try {
      return recipe.canCookWith(totals, selectedIngredients);
    } catch {
      return false;
    }
  });

  if (matchingRecipes.length === 0) {
    return RECIPES.find((r) => r.id === "wet_goop")!;
  }

  // Sort by priority landing the highest priority on index 0
  matchingRecipes.sort((a, b) => b.priority - a.priority);

  return matchingRecipes[0];
}

// Check what recipes are "cookable" if the user has ONLY access to the subset of checkedIngredients
// Since quantities of checked ingredients are not specified (it's a binary checklist), we check if there exists
// a combination of 4 items picked from the checked list that yields the recipe.
export function getCookableRecipes(checkedIds: string[]): Recipe[] {
  if (checkedIds.length === 0) return [];

  // Generate all 4-combinations of checked ids (with replacement, since we can pick multiple of the same type)
  // To make it efficient and highly accurate:
  // Since 4 items are picked fromcheckedIds, if checkedIds length is N, the number of combinations with replacement is (N + 3 choose 4).
  // E.g., for N=5, combinations with replacement: (5+3) choose 4 = 8 choose 4 = 70 combinations, which is extremely small!
  // Even for N=25 (all ingredients): (25+3) choose 4 = 28 choose 4 = 20,475 combinations.
  // We can optimize. A recipe can be cooked if we can find AT LEAST ONE valid 4-item list from checkedIds that results in this recipe.
  const cookableMap: Record<string, boolean> = {};

  // Find all possible outputs of any 4-combination of the checkedIds
  // Helper to get combinations with replacement
  const combinations: string[][] = [];
  const n = checkedIds.length;

  // Let's do a fast recursive or direct combination generator up to size 4
  const current: string[] = [];
  function generateCombos(index: number, depth: number) {
    if (depth === 4) {
      combinations.push([...current]);
      return;
    }
    for (let i = index; i < n; i++) {
      current.push(checkedIds[i]);
      generateCombos(i, depth + 1);
      current.pop();
    }
  }

  // Optimize: if n is very large, generating combinations might take time.
  // But wait! N is at most 25 (our INGREDIENTS list).
  // Let's run a simple loop or limit it. Generating combos is fast in JS.
  // 20475 calculations takes ~1-3 milliseconds in modern engines.
  generateCombos(0, 0);

  for (const combo of combinations) {
    const result = cookCrockPot(combo);
    cookableMap[result.id] = true;
  }

  return RECIPES.filter((r) => cookableMap[r.id]);
}
