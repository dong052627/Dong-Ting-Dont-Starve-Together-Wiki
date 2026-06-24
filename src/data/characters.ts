export interface Circuit {
  id: string;
  name: string;
  englishName: string;
  slots: number;
  maxCount: number;
  effect: string;
  statBonus?: {
    health?: number;
    sanity?: number;
    hunger?: number;
  };
}

export interface Character {
  id: string;
  name: string;
  englishName: string;
  title: string;
  health: number;
  hunger: number;
  sanity: number;
  perks: { title: string; desc: string }[];
  description: string;
  favoriteFood: string; // recipe ID
  favoriteFoodBonus: string;
  circuits?: Circuit[];
}

export const CHARACTERS: Character[] = [
  {
    id: "wx78",
    name: "WX-78",
    englishName: "The Soulless Automaton",
    title: "🤖 殘酷的機器人",
    health: 150,
    hunger: 150,
    sanity: 150,
    description: "沒有靈魂的機器人。討厭雨水，但可以吃齒輪來升級並回復狀態。擁有可插拔的「電路板升級系統」，能夠自由客製化自己的三維與特殊能力！",
    favoriteFood: "butterflymuffin", // 蝴蝶松餅
    favoriteFoodBonus: "食用蝴蝶松餅（Butter Muffin）時，額外獲得 +15 飢餓值（共計 52.5）。",
    perks: [
      { title: "⚙️ 齒輪研磨者", desc: "可以直接吞食齒輪（Gears）來升級並回復大量狀態（+60 生命、+75 飢餓、+50 理智）。" },
      { title: "⚡ 系統過載", desc: "被雷電擊中時不會受傷，反而會進入過載狀態：發光、提升速度且防寒，但會流失理智。" },
      { title: "☔ 怕水金屬", desc: "雨水和潮溼值會侵蝕金屬身體，持續造成扣血傷害並冒出火花。" }
    ],
    circuits: [
      {
        id: "hardy",
        name: "耐力電路板",
        englishName: "Hardy Circuit",
        slots: 2,
        maxCount: 3,
        effect: "最大生命值 +40",
        statBonus: { health: 40 }
      },
      {
        id: "logic",
        name: "理智電路板",
        englishName: "Logic Circuit",
        slots: 2,
        maxCount: 3,
        effect: "最大理智值 +40",
        statBonus: { sanity: 40 }
      },
      {
        id: "gastric",
        name: "胃電路板",
        englishName: "Gastric Circuit",
        slots: 2,
        maxCount: 3,
        effect: "最大飢餓值 +40",
        statBonus: { hunger: 40 }
      },
      {
        id: "acceleration",
        name: "處理速度電路板",
        englishName: "Acceleration Circuit",
        slots: 6,
        maxCount: 1,
        effect: "移動速度 +25%"
      },
      {
        id: "illumination",
        name: "照亮電路板",
        englishName: "Illumination Circuit",
        slots: 4,
        maxCount: 1,
        effect: "提供隨身光源，照亮四周"
      },
      {
        id: "thermal",
        name: "防寒電路板",
        englishName: "Thermal Circuit",
        slots: 3,
        maxCount: 1,
        effect: "提供內部熱源，免疫凍傷"
      },
      {
        id: "refrigerant",
        name: "散熱電路板",
        englishName: "Refrigerant Circuit",
        slots: 3,
        maxCount: 1,
        effect: "提供內部冷源，免疫中暑"
      }
    ]
  }
];
