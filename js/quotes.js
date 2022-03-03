const quotes=[
    {
        quote: "서두르지 말되 멈추지 말라.",
        author: "괴테",
    },
    {
        quote: "내가 생각했던 불행은 그다지 일어나지 않았다.",
        author: "몽테뉴",
    },
    {
        quote: "삶의 의미는 발견하는 것이 아니라 만들어가는 것이다.",
        author: "생텍쥐페리",
    },
    {
        quote: "무소유란 아무것도 갖지 않는다는 것이 아니라 불필요한 것을 갖지 않는다는 뜻이다.",
        author: "법정 스님",
    },
    {
        quote: "처음에는 우리가 습관을 만들지만 그다음에는 습관이 우리를 만든다.",
        author: "존 드라이든",
    },
    {
        quote: "자신의 뜻대로 할 수 있는 일과 할 수 없는 일을 구별하라.",
        author: "아리스토텔레스",
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다. 그것은 희망이다.",
        author: "나폴레옹",
    },
    {
        quote: "우리는 생각하는 대로 된다.",
        author: "마가렛 대처",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "메이슨 쿨리",
    },
    {
        quote: "습관이란 인간으로 하여금 그 어떤 일도 할 수 있게 만들어 준다.",
        author: "도스토예프스키",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

