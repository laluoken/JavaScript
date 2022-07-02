"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan yangiliklaringizdsn biri"),
    b = prompt("Unga qqncha baho bergan bo'lardingiz");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalNewsDB.news[a] = b;
      console.log("tayyor")
    } else {
      console.log("error");
      i-- ;
    }
}

if(personalNewsDB.count < 10)  {
  console.log("juda oz sinli yangiliklar o'qilibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("siz klassik tomoshabinsiz");
} else if (personalNewsDB.count >= 30) {
  console.log("siz yangilklar ishqibozisiz");
} else {
  console.log("hato yhuz berdi");
}

console.log(personalNewsDB)
