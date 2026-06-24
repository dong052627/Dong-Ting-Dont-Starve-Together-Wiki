export interface Circuit {
  id: string;
  name: string;
  englishName: string;
  slots: number;
  maxCount: number;
  effect: string;
  type: "alpha" | "beta" | "gamma";
  recipe: string;
  scanTarget: string;
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
    health: 100,
    hunger: 100,
    sanity: 100,
    description:
      "沒有靈魂的機器人。討厭雨水，但可以吃齒輪來升級並回復狀態。擁有可插拔的「電路板升級系統」，能夠自由客製化自己的三維與特殊能力！",
    favoriteFood: "butterflymuffin", // 蝴蝶松餅
    favoriteFoodBonus:
      "食用蝴蝶松餅（Butter Muffin）時，額外獲得 +15 飢餓值（共計 52.5）。",
    perks: [
      {
        title: "⚙️ 齒輪研磨者",
        desc: "可以直接吞食齒輪（Gears）來升級並回復大量狀態（+60 生命、+75 飢餓、+50 理智）。",
      },
      {
        title: "⚡ 系統過載",
        desc: "被雷電擊中時不會受傷，反而會進入過載狀態：發光、提升速度且防寒，但會流失理智。",
      },
      {
        title: "☔ 怕水金屬",
        desc: "雨水和潮溼值會侵蝕金屬身體，持續造成扣血傷害並冒出火花。",
      },
    ],
    circuits: [
      // Alpha 阿爾法電路
      {
        id: "alpha_health_1",
        name: "強化電路",
        englishName: "Hardy Circuit",
        slots: 1,
        maxCount: 6,
        effect: "增加 40 生命上限；受二級改裝影響提供少量物理傷害減免",
        type: "alpha",
        recipe: "生物數據×2、蜘蛛腺體×1",
        scanTarget: "蜘蛛",
        statBonus: { health: 40 },
      },
      {
        id: "alpha_health_2",
        name: "超級強化電路",
        englishName: "Super Hardy Circuit",
        slots: 2,
        maxCount: 3,
        effect: "增加 100 生命上限；受二級改裝影響提供較少量物理傷害減免",
        type: "alpha",
        recipe: "生物數據×4、蜘蛛腺體×2、強化電路×1",
        scanTarget: "護士蜘蛛",
        statBonus: { health: 100 },
      },
      {
        id: "alpha_hunger_1",
        name: "胃增益電路",
        englishName: "Gastric Circuit",
        slots: 1,
        maxCount: 6,
        effect: "增加 40 飢餓上限；受一/二級改裝影響降低少量飢餓消耗速率",
        type: "alpha",
        recipe: "生物數據×2、犬牙×1",
        scanTarget: "獵犬",
        statBonus: { hunger: 40 },
      },
      {
        id: "alpha_hunger_2",
        name: "超級胃增益電路",
        englishName: "Super Gastric Circuit",
        slots: 2,
        maxCount: 3,
        effect: "增加 100 飢餓上限；受一/二級改裝影響降低中量飢餓消耗速率",
        type: "alpha",
        recipe: "生物數據×3、啜食者皮×1、胃增益電路×1",
        scanTarget: "熊獾、啜食者",
        statBonus: { hunger: 100 },
      },
      {
        id: "alpha_sanity_1",
        name: "處理器電路",
        englishName: "Logic Circuit",
        slots: 1,
        maxCount: 6,
        effect:
          "增加 40 理智上限；受一級影響降低少量瘋狂光環，受二級影響提高少量裝備理智回復",
        type: "alpha",
        recipe: "生物數據×1、花瓣×1",
        scanTarget: "蝴蝶、月蛾",
        statBonus: { sanity: 40 },
      },
      {
        id: "alpha_sanity_2",
        name: "超級處理器電路",
        englishName: "Super Logic Circuit",
        slots: 2,
        maxCount: 3,
        effect:
          "增加 100 理智上限，每分鐘恢復 2 理智；受一級影響降低中量瘋狂光環，受二級影響提高中量裝備理智回復",
        type: "alpha",
        recipe: "生物數據×3、噩夢燃料×1、處理器電路×1",
        scanTarget:
          "爬行恐懼、爬行夢魘、恐怖尖喙、夢魘尖喙、恐怖利爪、潛伏夢魘",
        statBonus: { sanity: 100 },
      },
      {
        id: "alpha_combo_1",
        name: "豆增壓電路",
        englishName: "Beanboost Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "增加 100 理智上限，每分鐘恢復 2 理智與 10 生命；血滿後受二級改裝影響額外獲得少量護盾",
        type: "alpha",
        recipe: "生物數據×8、蜂王漿×1、超級處理器電路×1",
        scanTarget: "蜂王",
        statBonus: { sanity: 100 },
      },

      // Beta 貝塔電路
      {
        id: "beta_range",
        name: "增程電路",
        englishName: "Extender Circuit",
        slots: 1,
        maxCount: 6,
        effect:
          "攝影機高度上限提高 5；受一級改裝影響提高電刑機、旋翼測繪機及機載掃描儀範圍",
        type: "beta",
        recipe: "生物數據×2、指南針×1",
        scanTarget: "烏鴉、紅雀、雪雀、海鸚、金絲雀",
      },
      {
        id: "beta_choral",
        name: "合唱盒電路",
        englishName: "Choralbox Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "獲得 +4.44/分理智光環；自動照料周圍農作物；受一級影響自動雇傭周圍兔人、豬人、魚人",
        type: "beta",
        recipe: "生物數據×4、低音貝殼鐘×1",
        scanTarget: "寄居蟹隱士、帝王蟹",
      },
      {
        id: "beta_speed_1",
        name: "加速電路",
        englishName: "Acceleration Circuit",
        slots: 6,
        maxCount: 1,
        effect:
          "提升 25% 移動速度；受二級改裝影響降低四分之一來自裝備與地面的減速效果",
        type: "beta",
        recipe: "生物數據×2、兔子×1",
        scanTarget: "兔子",
      },
      {
        id: "beta_speed_2",
        name: "超級加速電路",
        englishName: "Super Acceleration Circuit",
        slots: 2,
        maxCount: 3,
        effect:
          "提升 25%、15%、10% 移速（隨安裝數量遞減）；每個電路降低四分之一減速效果",
        type: "beta",
        recipe: "生物數據×6、齒輪×1、加速電路×1",
        scanTarget: "發條戰車、損壞的發條戰車、遠古守衛者",
      },
      {
        id: "beta_thermal",
        name: "熱能電路",
        englishName: "Thermal Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "體溫上下限各提高 20 度，自身成為 25 度熱源；物品欄腐爛速度 +25%；乾燥速度 +0.1/秒；免疫冰凍",
        type: "beta",
        recipe: "生物數據×4、紅寶石×1",
        scanTarget: "龍蠅、火焰獵犬、地熱蟎",
      },
      {
        id: "beta_refrigerant",
        name: "制冷電路",
        englishName: "Refrigerant Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "體溫上下限各降低 20 度，自身成為 -25 度冷源；物品腐爛度 -25%；乾燥 -0.1/秒；濕度 95 產冰；免疫火焰傷害",
        type: "beta",
        recipe: "生物數據×4、藍寶石×1",
        scanTarget: "獨眼巨鹿、寒冰獵犬",
      },
      {
        id: "beta_electric",
        name: "電氣化電路",
        englishName: "Electri-fy Circuit",
        slots: 2,
        maxCount: 3,
        effect:
          "被攻擊時對攻擊者造成 20 點帶電傷害並使自身絕緣；受二級影響多次受擊進行範圍電擊",
        type: "beta",
        recipe: "生物數據×5、帶電的羊奶×1",
        scanTarget: "伏特羊",
      },
      {
        id: "beta_light_1",
        name: "照明電路",
        englishName: "Illumination Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "持續發光；無法使用草蓆卷和毛皮鋪蓋；受二級影響面朝方向發出手電筒狀光",
        type: "beta",
        recipe: "生物數據×2、螢光果×1",
        scanTarget: "螢火蟲",
      },
      {
        id: "beta_light_2",
        name: "超級照明電路",
        englishName: "Super Illumination Circuit",
        slots: 1,
        maxCount: 6,
        effect: "與照明電路效果一致，提供持續照明",
        type: "beta",
        recipe: "生物數據×6、螢火蟲×1、照明電路×1",
        scanTarget: "魷魚、洞穴蠕蟲、球狀光蟲",
      },
      {
        id: "beta_nightvision",
        name: "光電電路",
        englishName: "Photonic Circuit",
        slots: 4,
        maxCount: 1,
        effect:
          "在黑暗中自動開啟夜視模式（等同於鼴鼠帽）；受一級影響夜視時不改變濾鏡",
        type: "beta",
        recipe: "生物數據×4、鼴鼠×1、照明電路×1",
        scanTarget: "鼴鼠",
      },
      {
        id: "beta_pocket",
        name: "空間擴展電路",
        englishName: "Super-Spatial Circuit",
        slots: 1,
        maxCount: 6,
        effect:
          "每激活一個，在物品欄最右側生成一個可無限堆疊物品的擴展儲存單元",
        type: "beta",
        recipe: "生物數據×8、注能月亮碎片×1",
        scanTarget: "坎普斯",
      },

      // Gamma 伽馬電路
      {
        id: "gamma_digest",
        name: "再消化電路",
        englishName: "Redigestive Circuit",
        slots: 2,
        maxCount: 3,
        effect:
          "吃腐爛物不降三維；每食 5 個腐爛物產一營養磚；受一級影響新鮮度低於 20% 食物計入",
        type: "gamma",
        recipe: "生物數據×2、貓尾×1",
        scanTarget: "浣貓",
      },
      {
        id: "gamma_chess",
        name: "棋聖電路",
        englishName: "Grandmaster Circuit",
        slots: 1,
        maxCount: 6,
        effect:
          "每激活一個，可雇傭發條生物上限增加 1 個，按順序分配給騎士、主教、戰車",
        type: "gamma",
        recipe: "生物數據×3、齒輪×1",
        scanTarget: "發條騎士、損壞的發條騎士、鍍金騎士",
      },
      {
        id: "gamma_block",
        name: "格擋電路",
        englishName: "Parrying Circuit",
        slots: 4,
        maxCount: 1,
        effect:
          "右鍵自身可格擋，獲得 80% 防禦並持續嘲諷；受 100 傷害或超過 5 秒進入 20 秒冷卻；免疫擊退",
        type: "gamma",
        recipe: "生物數據×4、背殼頭盔×1",
        scanTarget: "蛞蝓龜、蝸牛龜、石蝦",
      },
      {
        id: "gamma_sonic",
        name: "聲波激發電路",
        englishName: "Sonic-Arousal Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "右鍵自身發射聲波恐懼周圍生物 8 秒，進入 20 秒冷卻；受一級影響可持續發射聲波",
        type: "gamma",
        recipe: "生物數據×4、裸露鼻孔×1",
        scanTarget: "裸鼴鼠",
      },
      {
        id: "gamma_spin",
        name: "旋轉週期電路",
        englishName: "Spinning-Period Circuit",
        slots: 3,
        maxCount: 2,
        effect:
          "採伐或攻擊時進行旋轉動作；速率更快、可收割作物、耐久消耗更低；受二級影響速率更快",
        type: "gamma",
        recipe: "生物數據×6、麋鹿鵝羽毛×1",
        scanTarget: "麋鹿鵝幼崽",
      },
    ],
  },
];
