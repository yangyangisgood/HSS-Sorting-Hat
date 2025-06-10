const questions = [
  {
    id: 1,
    text: "你從山下走上人社院，腳下的石階刻著一道道句子。你彎下身，摸了摸那些字，有些已被鞋底磨去輪廓。風從遠方吹來，一張紙片剛好飄落在你腳邊，上面寫著：「從哪裡開始，才算真正的走入？」",
    options: [
      {
        label: "A",
        text: "「認識你自己」",
        tags: ["philosophy"]
      },
      {
        label: "B",
        text: "（待補）",
        tags: []
      },
      {
        label: "C",
        text: "（待補）",
        tags: []
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
    text: "推開二樓大門，一股涼意撲面而來。一位身穿長袍的老師走過，低聲問到：「你打算在這座學院，追問什麼？」",
    options: [
      {
        label: "A",
        text: "「我想知道，這些牆曾聽過哪些未被記錄的對話。」",
        tags: ["sociology", "philosophy"]
      },
      {
        label: "B",
        text: "「我想拆開時間的骨頭，看它是怎麼腐爛的。」",
        tags: ["anthropology", "history"]
      },
      {
        label: "C",
        text: "「我想讓沉默開口，哪怕只是顫抖一個音節。」",
        tags: ["linguistics"]
      },
      {
        label: "D",
        text: "「我想寫下我無法理解的情緒，看看文字會不會替我翻譯。」",
        tags: ["literature", "culture"]
      }
    ]
  }, 
  {
    id: 3,
    text: "你走進人社圖書館。地下一層比我想像中更深，牆上有水漬，書的氣味混著潮濕。我翻開一本封面模糊的書，裡頭是四段沒有標題的段落，像是從不同世界撕來的：",
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
        tags: ["history", "politics"]
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
    text: "你走過B棟筆直的走廊，階梯一格一格像拍子，踩出一首無人作曲的進行曲。前方傳來爭論聲，你靠過去偷聽，有四個人正各說各話，沒有人回應彼此。",
    options: [
      {
        label: "A",
        text: "「國家是誰說它存在，它才存在的東西。」",
        tags: ["politics", "sociology"]
      },
      {
        label: "B",
        text: "「文明不該只靠紀錄，而該由想像補完。」",
        tags: ["anthropology", "culture"]
      },
      {
        label: "C",
        text: "「我們無法共識，是因為語言太忠於立場了。」",
        tags: ["philosophy", "linguistics"]
      },
      {
        label: "D",
        text: "「這個世界從沒承諾公平，是你自己太浪漫。」",
        tags: ["literature", "gender"]
      }
    ]
  },
  {
    id: 5,
    text: "你坐在哲學家花園的長椅上，陽光從花葉縫隙照在手上。有位穿襯衫的學生坐在你旁邊，遞給你一張紙條：「寫下你的答案，風會幫你寄出去。」",
    options: [
      {
        label: "A",
        text: "「靜默不是結束，而是另一種開始的方式。」",
        tags: ["literature"]
      },
      {
        label: "B",
        text: "「如果一朵花能思考，它會選擇生長在哪裡嗎？」",
        tags: ["philosophy"]
      },
      {
        label: "C",
        text: "「我想讓思辨長出根來，扎進他人的日常。」",
        tags: ["sociology"]
      },
      {
        label: "D",
        text: "「說故事的人，比故事還難被定義。」",
        tags: ["literature", "history"]
      }
    ]
  },
  {
    id: 6,
    text: "現在是禮拜三下午的社會學導論，你走進C404，教室已經坐滿。窗外陽光刺眼，教授卻說：「今天，我們不上課，我們選擇我們是誰。」你看見黑板上出現四段無名的敘述：",
    options: [
      {
        label: "A",
        text: "「在足夠長的沉默之後，一切都能重新定義。」",
        tags: ["culture"]
      },
      {
        label: "B",
        text: "「知識不是為了證明對錯，而是為了打破『理所當然』。」",
        tags: ["sociology", "philosophy"]
      },
      {
        label: "C",
        text: "「傳說從來不是真的，但它們比事實更堅硬。」",
        tags: ["history", "anthropology"]
      },
      {
        label: "D",
        text: "「你無法同時用兩種語言說出真相，但你可以試著唱出來。」",
        tags: ["linguistics"]
      }
    ]
  }, 
  {
    id: 7,
    text: "下課時，你走進吸菸區，即使你不抽菸。那裡總有一群人圍成小圈，用煙霧包圍著問題。今天，他們的對話像煙一樣飄進你耳裡。",
    options: [
      {
        label: "A",
        text: "「其實我們只是在尋找可以輸掉的論點，好讓別人贏一次。」",
        tags: ["politics"]
      },
      {
        label: "B",
        text: "「說話不過是給沉默找個出口。」",
        tags: ["linguistics"]
      },
      {
        label: "C",
        text: "「如果世界是一場劇，那我選擇當台詞錯亂的角色。」",
        tags: ["literature"]
      },
      {
        label: "D",
        text: "「觀點是穿得下但不屬於你的外套。」",
        tags: ["sociology"]
      }
    ]
  },
  {
    id: 8,
    text: "你坐在C310會議室裡聽著演講，講者聲音像碎玻璃，每一句都讓你重新懷疑自己。結束後，你記得他說的話只有一句：",
    options: [
      {
				label: "A",
        text: "「不要怕被消化，有時候思想需要先被誤解，才能留下痕跡。」",
        tags: ["philosophy"]
      },
      {
				label: "B",
        text: "「世界並不是要你理解它，只是希望你不放棄提問。」",
        tags: ["philosophy"]
      },
      {
				label: "C",
        text: "「一種制度能承載的不是秩序，而是習慣性的逃避。」",
        tags: ["politics"]
      },
      {
				label: "D",
        text: "「如果你的故事裡沒有你，那你為誰寫？」",
        tags: ["literature"]
      }
    ]
  },
  {
    id: 9,
    text: "你進了C204，卻發現今天只有你一個學生。老師對你說：「這堂課沒教材，只有選擇。」\n你挑了桌上的一張紙條：",
    options: [
      {
        label: "A",
        text: "「真理從不單身，它總是帶著偏見來赴約。」",
        tags: ["philosophy"]
      },
      {
        label: "B",
        text: "「我想教你一種語言，它無法翻譯，但能傳染。」",
        tags: ["literature"]
      },
      {
        label: "C",
        text: "「如果一場革命從一行詩開始，它還會有人相信嗎？」",
        tags: ["politics"]
      },
      {
        label: "D",
        text: "「這裡的牆有耳朵，但他們學不會語法。」",
        tags: ["linguistics"]
      }
    ]
  },
  {
    id: 10,
    text: "你窩在A201系學會辦公室，沙發上攤著睡午覺的人。窗邊的電風扇咿咿呀呀地轉著，你翻開桌上的筆記本，上頭寫著：",
    options: [
      {
        label: "A",
        text: "「我不是來這裡成為某人，而是來搞懂我為什麼不想成為任何人。」",
        tags: ["gender", "sociology"]
      },
      {
        label: "B",
        text: "「那些無聊的對話，其實是讓世界鬆動的地方。」",
        tags: ["culture"]
      },
      {
        label: "C",
        text: "「聯誼是某種社會儀式嗎？我決定參加來做田野調查。」",
        tags: ["anthropology"]
      },
      {
        label: "D",
        text: "「朋友是一種語用上的親密協議。」",
        tags: ["gender"]
      }
    ]
  },
  {
    id: 11,
    text: "你在三樓神壇前停下腳步。那裡太安靜，像是有人偷偷封印了時間。你看見一張黃紙，上頭寫著祈願。",
    options: [
      {
        label: "A",
        text: "「請賜我一雙能看見話語背後制度的眼睛。」",
        tags: ["politics", "sociology", "gender"]
      },
      {
        label: "B",
        text: "「我不求真相，但希望學會承受歧義。」",
        tags: ["philosophy"]
      },
      {
        label: "C",
        text: "「願我能記得我來自哪個祖先的沉默裡。」",
        tags: ["history"]
      },
      {
        label: "D",
        text: "「讓我的名字在誤用中找到新的歸屬。」",
        tags: ["anthropology", "gender"]
      }
    ]
  },
  {
    id: 12,
    text: "你仰望那座始終上鎖的鐘塔，總有人說那裡藏著院長的秘密。但今天，你看見一張字條從塔頂飄下來。",
    options: [
      {
        label: "A",
        text: "「最遙遠的不是未來，而是你從不敢問的過去。」",
        tags: ["history"]
      },
      {
        label: "B",
        text: "「知識之塔不會倒，但會忘記為誰存在。」",
        tags: ["philosophy"]
      },
      {
        label: "C",
        text: "「如果真有聲音從塔中傳來，你希望它叫你什麼？」",
        tags: ["anthropology"]
      },
      {
        label: "D",
        text: "「有人說這座塔只會對不服從的人說話。」",
        tags: ["sociology"]
      }
  	]
  },
  {
    id: 13,
    text: "你夢見自己走進地下室，夢裡的你手裡拿著一盞燈。那裡堆滿木箱，你打開其中一個，裡面不是骨頭，是—",
    options: [
      {
        label: "A",
        text: "一本寫滿沒有主詞的歷史書",
        tags: ["history"]
      },
      {
        label: "B",
        text: "一堆舊報紙，上頭標註「請勿引用」",
        tags: ["culture"]
      },
      {
        label: "C",
        text: "一疊泛黃講義，都是消失曾經存在，但現在已經消失的學程課綱",
        tags: ["history", "sociology"]
      },
      {
        label: "D",
        text: "一張地圖，標示著不存在的國界線",
        tags: ["politics"]
      }
    ]
  },
  {
    id: 14,
    text: "你參加小劇場的排練，演出主題是「無人旁白的世界」。導演對你說：「你只要說出你真正不想說的那句話就好。」",
    options: [
      {
        label: "A",
        text: "「我並不想成為任何理論的例子。」",
        tags: ["culture", "gender"]
      },
      {
        label: "B",
        text: "「我不知道怎麼把創傷說得漂亮一點。」",
        tags: ["literature"]
      },
      {
        label: "C",
        text: "「我的語言比我自己還早老去。」",
        tags: ["anthropology", "linguistics"]
      },
      {
        label: "D",
        text: "「我不是主角，但我也是敘事者。」",
        tags: ["anthropology", "sociology"]
      }
    ]
  },
  {
    id: 15,
    text: "你走在人社C棟盡頭，唯一的燈微微閃爍。牆上寫著一串未完成的句子：「如果我是____，也許我可以_____。」",
    options: [
      {
        label: "A",
        text: "一份紀錄；遺忘",
        tags: ["anthropology"]
      },
      {
        label: "B",
        text: "一首詩；反抗",
        tags: ["literature"]
      },
      {
        label: "C",
        text: "一句錯譯；留下",
        tags: ["philosophy"]
      },
      {
        label: "D",
        text: "一場誤會；發聲",
        tags: ["sociology", "gender"]
      }
    ]
  },
  {
    id: 16,
    text: "你被叫進系主任辦公室，不知道是因為什麼。辦公桌後擺著一張巨大的椅子，像是從另一個世紀留下的。系主任沒說話，只遞給你一張紙，上頭只寫了一句話：「你想坐這張椅子的話，你得先——」",
    options: [
      {
        label: "A",
        text: "「承認制度只是另一種說故事的方法。」",
        tags: ["politics"]
      },
      {
        label: "B",
        text: "「讓自己成為眾聲中的沉默，卻依舊有重量。」",
        tags: ["gender", "sociology"]
      },
      {
        label: "C",
        text: "「定義出一個理論，讓它從你手中逃跑。」",
        tags: ["culture"]
      },
      {
        label: "D",
        text: "「學會如何在桌下，交換立場與眼神。」",
        tags: ["anthropology", "culture"]
      }
    ]
  },
  {
    id: 17,
    text: "你站在那幅「認識你自己」的書法畫前，墨跡斑駁，彷彿筆者寫到一半也開始懷疑自己。你盯著它良久，腦中響起一個問題：「哪一種理解，是你最抗拒卻最渴望的？」",
    options: [
      {
        label: "A",
        text: "「被當成一種象徵，而非一個人。」",
        tags: ["literature", "culture"]
      },
      {
        label: "B",
        text: "「在歷史中找到自己，卻無法選擇角色。」",
        tags: ["history"]
      },
      {
        label: "C",
        text: "「用別人的語言說自己的痛，卻被鼓掌。」",
        tags: ["literature"]
      },
      {
        label: "D",
        text: "「發現自己一直用錯方法問對的問題。」",
        tags: ["philosophy"]
      }
    ]
  },
  {
    id: 18,
    text: "你終於來到分類帽前。它不再問你要主修什麼，而是輕聲問：「你最想在人社院留下的是哪種痕跡？」",
    options: [
      {
        label: "A",
        text: "一段會被引用卻難以被解釋的話",
        tags: ["linguistics"]
      },
      {
        label: "B",
        text: "一場沒人錄影、但有人記得的行動",
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
        tags: ["history", "literature"]
      }
    ]
  }
]
