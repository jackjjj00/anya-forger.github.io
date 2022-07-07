const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["Senior High Student", "Like to sleep", "Engineer"];

const about = [
    "My name is Jack Wu. I am 16 years old now!",
    "I am studing  Hsinchuang Senior High School in New Taipei Municipal.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to making a basic game code in this fantastic camping.",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

const projects = [
    {
        name: "桌布製作",
        description: "tfolio website for myself that I devA poreloped in NTNU CSIE Camp.",
        image: "https://i.imgur.com/dktCSdZ.jpeg",
        skills: ["Rainmeter"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "Learning Javascript",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "https://hackernoon.com/hn-images/1*bxEkHw1xewxOFjmGunb-Cw.png",
        skills: ["Python", "Algorithm", "Gomoku"],
        url: "https://github.com/anya-forger",
    },
    {
        name: "Learning Python",
        description: "An anime that I starred in.",
        image: "https://www.foolegg.com/wp-content/uploads/2013/01/python-logo-master-v3-TM.png",
        skills: ["Performings"],
        url: "https://spy-family.net",
    },
];

export { pic, titles, about, projects };
