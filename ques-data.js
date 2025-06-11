const questions = [
  {
    id: 1,
    text: "你站在人社院外的階梯，腳下的石階刻著一道道句子。此時躺在一旁的冏媽突然開口說話，他告訴你，踩下不同的階梯，會進入不同的世界。你會選擇：",
    options: [
      {
        label: "A",
        text: "「認識你自己」",
        tags: ["philosophy"]
      },
      {
        label: "B",
        text: "「」",
        tags: [""]
      },
      {
        label: "C",
        text: "「」",
        tags: [""]
      },
      {
        label: "D",
        text: "「沒有土地，哪有文學？」",
        tags: ["literature"]
      }
    ]
  },
  {
    id: 2,
    text: "你順著階梯往上走到門口。推開二樓大門，一股涼意撲面而來。一位戴著眼鏡穿著高腰褲的教授走過，低聲問到：「如果這座建築物會說話，你打算問他什麼？」",
    options: [
      {
        label: "A",
        text: "「你曾聽過哪些未被記錄的對話？」",
        tags: ["sociology", "philosophy"]
      },
      {
        label: "B",
        text: "「這裡過去曾經是什麼呢？」",
        tags: ["anthropology", "history"]
      },
      {
        label: "C",
        text: "「你記得走進這裡的每個人嗎？你會如何記下他們？」",
        tags: ["literature", "linguistics"]
      },
      {
        label: "D",
        text: "「你覺得自己是什麼？你最喜歡自己的哪個空間？」",
        tags: ["gender", "culture", "politics"]
      }
    ]
  },
  {
    id: 3,
    text: "你走進人社圖書館的地下一樓，牆上有水漬，書的氣味混著潮濕。你翻開一本封面模糊的書，裡頭是四段沒有標題的段落，像是從不同世界撕來的：",
    options: [
      {
        label: "A",
        text: "「她戴著假鬍子參與討論，只因她的聲音太高了。」",
        tags: ["gender", "sociology"]
      },
      {
        label: "B",
        text: "「在某些島嶼上，死亡不被宣告，而是慢慢被忘記。」",
        tags: ["history", "culture"]
      },
      {
        label: "C",
        text: "「歷史不是發生，而是被允許發生。」",
        tags: ["politics"]
      },
      {
        label: "D",
        text: "「句子的斷裂處，住著被趕出去的靈魂。」",
        tags: ["linguistics"]
      }
    ]
  },
  {
    id: 4,
    text: "你走進C404，發現剛好是禮拜四上午的台灣啟航，教室已經坐滿。窗外陽光刺眼。教授說今天助教請假，要請你帶討論課。你會與同學們探討：",
    options: [
      {
        label: "A",
        text: "為什麼科學園區要蓋在新竹？",
        tags: ["politics", "history"]
      },
      {
        label: "B",
        text: "大家今天吃什麼早餐？",
        tags: ["anthropology", "culture"]
      },
      {
        label: "C",
        text: "喜歡跟愛有什麼差別？",
        tags: ["linguistics", "gender", "philosophy"]
      },
      {
        label: "D",
        text: "明明黃麗群寫的比較好看，為什麼誠品暢銷榜上都是黃山料？",
        tags: ["sociology", "literature"]
      }
    ]
  },
  {
    id: 5,
    text: "你走進C310會議室，發現裡頭正在進行演講，講者聲音像碎玻璃，讓你聽得入神。結束後，你記得他說的那一句：",
    options: [
      {
        label: "A",
        text: "你以為你以為的就是你以為嗎？",
        tags: ["philosophy", "sociology", "politics"]
      },
      {
        label: "B",
        text: "「對社會而言，女人是被慾望的存在，但不能是慾望本身的存在。」",
        tags: ["gender"]
      },
      {
        label: "C",
        text: "「是他們經歷那段社會動盪的時代，而不是我們；這些看似愚蠢的行動與妄想，就他們的經驗而言是有理有據的。」",
        tags: ["history"]
      },
      {
        label: "D",
        text: "「即使現實世界中從未發生，我書寫的一切也都是真的。」",
        tags: ["literature"]
      }
    ]
  },
  {
    id: 6,
    text: "你走進C204，發現現在正在上古典社會學理論，翻開厚厚一本《資本論》，你心裡在想：",
    options: [
      {
        label: "A",
        text: "「資本家壞壞！資本主義壞壞！」",
        tags: ["sociology", "politics"]
      },
      {
        label: "B",
        text: "「有沒有另外一種生產方式，資本家跟工人的關係不是上對下的宰制呢？」",
        tags: ["anthropology", "culture"]
      },
      {
        label: "C",
        text: "「為什麼都要讀這些西方白人異男的理論= =」",
        tags: ["gender", "culture"]
      },
      {
        label: "D",
        text: "「好想寫一篇馬克思跟恩格斯的同人文，永支馬恩CP！」",
        tags: ["gender", "literature"]
      }
    ]
  },
  {
    id: 7,
    text: "你窩在A201系學會辦公室，沙發上攤著睡午覺的人。窗邊的電風扇咿咿呀呀地轉著。你看見桌上擺著一疊紙，翻開發現這是：",
    options: [
      {
        label: "A",
        text: "一本沒有發完的人社系刊，裡面有篇專欄探討22級學生的社會網絡分析圖。",
        tags: ["literature", "sociology"]
      },
      {
        label: "B",
        text: "一份會議記錄，紀錄了10年前，幾位教授為了學士班開課問題而爭吵的經過",
        tags: ["politics", "history"]
      },
      {
        label: "C",
        text: "一份圖文並茂的筆記，裡頭詳細描述了大一宿營活動的細節以及所有人的互動。",
        tags: ["culture", "anthropology"]
      },
      {
        label: "D",
        text: "某位同學的畢業紀念冊。正面有著伊媚兒、msn、無名小站等欄位，背面寫滿了百事可樂、步步高升、友情可貴的文字。",
        tags: ["linguistics", "history"]
      }
    ]
  },
  {
    id: 8,
    text: "你走到人社C棟二樓的廣場，那裡陳列著某位學姊的畢業展覽。上頭的燈微微閃爍。牆上寫著一串未完成的句子：「如果我是____，也許我可以_____。」",
    options: [
      {
        label: "A",
        text: "一份紀錄；遺忘",
        tags: ["anthropology", "history"]
      },
      {
        label: "B",
        text: "一首詩；反抗",
        tags: ["literature", "linguistics"]
      },
      {
        label: "C",
        text: "一套理論；解釋",
        tags: ["philosophy", "politics"]
      },
      {
        label: "D",
        text: "一段關係；存在",
        tags: ["sociology", "gender"]
      }
    ]
  },
  {
    id: 9,
    text: "走在路上，你聽到幾位同學說人社院過去是亂葬崗，地下室都是當時挖出的骨頭。於是你決定繞去地下室看看。下樓時，你不小心踢到了一根骨頭，喚醒了裡面的小精靈。他要你回答：「哪一種理解，是你最抗拒卻最渴望的？」",
    options: [
      {
        label: "A",
        text: "「被當成一種象徵，而非一個人。」",
        tags: ["literature", "culture", "anthropology"]
      },
      {
        label: "B",
        text: "「在歷史中找到自己，卻無法選擇角色。」",
        tags: ["history"]
      },
      {
        label: "C",
        text: "「用別人的語言說自己的痛，卻被鼓掌。」",
        tags: ["literature", "linguistics", "gender"]
      },
      {
        label: "D",
        text: "「發現自己一直用錯方法問對的問題。」",
        tags: ["philosophy"]
      }
    ]
  },
  {
    id: 10,
    text: "走回系辦，躺在地上的冏媽突然開口你：「你最想在人社院留下的是哪種痕跡？」",
    options: [
      {
        label: "A",
        text: "一段會被引用卻難以被解釋的話",
        tags: ["linguistics"]
      },
      {
        label: "B",
        text: "一場沒有紀錄、但有人記得的行動",
        tags: ["sociology"]
      },
      {
        label: "C",
        text: "一份未完成的田野筆記",
        tags: ["anthropology"]
      },
      {
        label: "D",
        text: "一則故事，沒人知道是你寫的",
        tags: ["literature"]
      }
    ]
  },
	{
		id: 11,
    text: "你終於回到分類帽前，分類帽最後想問你，你想在人社院——",
		options: [
      {
        label: "A",
        text: "認識你自己",
        tags: ["sociology", "history", "politics"]
      },
      {
        label: "B",
        text: "想像你自己",
        tags: ["literature", "anthropology", "linguistics"]
      },
      {
        label: "C",
        text: "質疑你自己",
        tags: ["philosophy", "culture"]
      },
      {
        label: "D",
        text: "成為你自己",
        tags: ["gender"]
      }
    ]
	},
]
