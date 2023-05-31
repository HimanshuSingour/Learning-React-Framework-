import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";

export class News extends Component {
  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Biden, McCarthy appear near two-year deal on US debt ceiling as default looms - Reuters",
      description:
        "U.S. President Joe Biden and top congressional Republican Kevin McCarthy are closing in on a deal that would raise the government's $31.4 trillion debt ceiling for two years while capping spending on most items, a U.S. official told Reuters.",
      url: "https://www.reuters.com/markets/us/white-house-republicans-seek-close-us-debt-ceiling-deal-deadline-nears-2023-05-25/",
      urlToImage:
        "https://www.reuters.com/resizer/pjsVj1KT60LJ4GGbLGJvMEMzvSk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2M6UZWAYHVJDZLUELMQ4OEUQEM.jpg",
      publishedAt: "2023-05-26T10:14:00Z",
      content:
        "WASHINGTON, May 25 (Reuters) - U.S. President Joe Biden and top congressional Republican Kevin McCarthy are closing in on a deal that would raise the government's $31.4 trillion debt ceiling for two … [+5907 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Nicki Brown,Melissa Alonso",
      title:
        "Indiana medical board reprimands doctor who publicly discussed providing abortion services to 10-year-old Ohio rape victim - CNN",
      description:
        "An Indianapolis doctor who publicly revealed she provided abortion services to a 10-year-old Ohio rape victim last year has been reprimanded and fined by Indiana’s medical licensing board after it determined the disclosure violated federal and state patient p…",
      url: "https://www.cnn.com/2023/05/26/us/dr-caitlin-bernard-indiana-medical-board-hearing/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230526115232-02-dr-caitlin-bernard-hearing-0525.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-26T09:41:00Z",
      content:
        "An Indianapolis doctor who publicly revealed she provided abortion services to a 10-year-old Ohio rape victim last year has been reprimanded and fined by Indianas medical licensing board after it det… [+5041 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Yoonjung Seo,Brad Lendon",
      title:
        "Terrifying moments as plane door opens midair on Asiana Airlines flight - CNN",
      description:
        "The door of an Asiana Airlines jet opened as it was coming in to land in Daegu, South Korea, on Friday afternoon, leaving wind whipping through the plane’s cabin as terrified passengers gripped their armrests, video of the incident shows.",
      url: "https://www.cnn.com/2023/05/26/asia/south-korea-plane-door-opens-midair-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230526041658-asiana-airlines-plane-door-052623.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-26T09:21:00Z",
      content:
        "The door of an Asiana Airlines jet opened as it was coming in to land in Daegu, South Korea, on Friday afternoon, leaving wind whipping through the planes cabin as terrified passengers gripped their … [+1865 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Jay King, Jared Weiss, Joe Vardon",
      title:
        "Celtics trounce Heat in Game 5 of Eastern Conference finals: How Boston’s peak basketball forced Game 6 - The Athletic",
      description:
        "Derrick White, who opened the conference finals as a reserve, went off with 24 points on six 3s, with two steals.",
      url: "https://theathletic.com/4554029/2023/05/25/celtics-heat-game-5-score-results/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/05/25224928/USATSI_20754496-1024x683.jpg",
      publishedAt: "2023-05-26T09:15:33Z",
      content:
        "BOSTON From a series sweep to a serious series, the Boston Celtics are transforming the Eastern Conference finals.\r\nTheyre still in a big hole, but they won again easily Thursday, 110-97, in Game 5 o… [+6465 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Insurers flee climate alliance after ESG backlash in the U.S. - Reuters",
      description:
        "A United Nations-convened climate alliance for insurers suffered at least three more departures on Thursday including the group's chair, as insurance companies take fright in the face of opposition from U.S. Republican politicians.",
      url: "https://www.reuters.com/business/allianz-decides-leave-net-zero-insurance-alliance-2023-05-25/",
      urlToImage:
        "https://www.reuters.com/resizer/kcZTO7GIRFnmTvbwgQAebGenOss=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FXWLCYLDGNNQDOCNYRH64JJC54.jpg",
      publishedAt: "2023-05-26T09:02:00Z",
      content:
        "LONDON/FRANKFURT, May 25 (Reuters) - A United Nations-convened climate alliance for insurers suffered at least three more departures on Thursday including the group's chair, as insurance companies ta… [+3616 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Clare Foran",
      title:
        "Debt limit negotiators under pressure to reach deal as risk of default grows - CNN",
      description:
        "There are signs that negotiations over raising the nation’s debt limit are gaining momentum, but major differences remain and it’s unclear how quickly an agreement could come together. Time is running short as the risk of a first-ever default grows.",
      url: "https://www.cnn.com/2023/05/26/politics/debt-limit-default-risk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230525122125-18-debt-ceiling.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-26T09:01:00Z",
      content:
        "There are signs that negotiations over raising the nations debt limit are gaining momentum, but major differences remain and its unclear how quickly an agreement could come together. Time is running … [+3226 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Sophie Kiderlin",
      title:
        "Treasury yields fall as investors await key inflation data, debt ceiling talk updates - CNBC",
      description:
        "U.S. Treasury yields fell on Friday as investors awaited economic data that could affect Fed interest rate policy and as debt ceiling deal talks continued.",
      url: "https://www.cnbc.com/2023/05/26/us-treasury-yields-investors-await-key-inflation-data.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107244816-1684778781880-gettyimages-1257200054-AFP_33FV2LL.jpeg?v=1685090265&w=1920&h=1080",
      publishedAt: "2023-05-26T08:37:45Z",
      content:
        "U.S. Treasury yields fell on Friday as investors awaited economic data that could affect Federal Reserve interest rate policy and as debt ceiling deal talks continued.\r\nAt 5:51 a.m. ET, the yield on … [+1223 chars]",
    },
    {
      source: { id: null, name: "Euronews" },
      author: null,
      title:
        "Ukraine war: Russian missiles shot down, alliance for Ukraine's F-16s, Scholz to talk to Putin soon - Euronews",
      description: "All the latest developments from the war in Ukraine.",
      url: "https://www.euronews.com/2023/05/26/ukraine-war-drones-and-missiles-shot-down-alliance-for-ukraines-f-16s-wagner-mali-sanction",
      urlToImage:
        "https://static.euronews.com/articles/stories/07/63/13/80/1000x563_cmsv2_5562ea3d-2b0e-5f4b-989a-24c812b62889-7631380.jpg",
      publishedAt: "2023-05-26T08:16:51Z",
      content:
        "All the latest developments from the war in Ukraine. \r\n Ukraine claims shooting down Russian drones and missiles overnight\r\nUkraine shot down ten missiles and 25 drones launched by Russia overnight a… [+4026 chars]",
    },
    {
      source: { id: null, name: "pgatour.com" },
      author: "Kevin Robbins",
      title:
        "Michael Block still grateful after opening-round 81 at Charles Schwab - PGA TOUR - PGA TOUR",
      description:
        "Day includes heroic par from bridge on par-4 10th hole at Colonial CC",
      url: "https://www.pgatour.com/article/news/latest/2023/05/25/michael-block-saves-par-from-bridge-at-charles-schwab-challenge-colonial",
      urlToImage:
        "https://res.cloudinary.com/pgatour-prod/w_1200,h_628,c_fill,f_auto/pgatour/news/editorial/2023/05/25/block-1694.jpg",
      publishedAt: "2023-05-26T06:52:04Z",
      content:
        "Day includes heroic par from bridge on par-4 10th hole at Colonial CC\r\nFORT WORTH, Texas Michael Block took his first question Thursday after the opening day of the Charles Schwab Challenge.\r\nHow wou… [+2221 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Oliver O'Connell",
      title:
        "Ron DeSantis floats Trump and Jan 6 pardons after 'train wreck' Twitter launch - live - The Independent",
      description: "Ron DeSantis launches 2024 presidential bid on Twitter",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/ron-desantis-vp-florida-governor-campaign-twitter-b2346278.html",
      urlToImage:
        "https://static.independent.co.uk/2023/05/24/23/newFile.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-05-26T06:15:56Z",
      content:
        "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nRon DeSantis suffered yet another technical glitch as he… [+8241 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Bevan Hurley",
      title:
        "Tina Turner death – latest: Legendary singer's cause of death revealed after she dies aged 83 - The Independent",
      description: "Tina Turner dies aged 83",
      url: "https://www.independent.co.uk/arts-entertainment/music/news/tina-turner-death-switzerland-hits-latest-news-b2346240.html",
      urlToImage:
        "https://static.independent.co.uk/2023/05/24/21/28809c3a576a5c1f82c07a2411b581e0Y29udGVudHNlYXJjaGFwaSwxNjg1MDQ0Njgw-2.72335001.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-05-26T06:02:17Z",
      content:
        "Sign up to Roisin OConnors free weekly newsletter Now Hear This for the inside track on all things music\r\nGet our Now Hear This email for free\r\nTina Turner died of natural causes on Wednesday (24 May… [+4364 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "LAURAN NEERGAARD AP Medical Writer",
      title:
        "US study finds 1 in 10 get long COVID after omicron, starts identifying key symptoms - ABC News",
      description:
        "A U.S. study suggests 1 in 10 people are getting long COVID after an omicron infection, a lower estimate than earlier in the pandemic",
      url: "https://abcnews.go.com/Health/wireStory/us-study-finds-1-10-long-covid-after-99608525",
      urlToImage:
        "https://s.abcnews.com/images/Health/wirestory_cc9dcd473f0513e4e62aa7e24940577e_12x5_992.jpg",
      publishedAt: "2023-05-26T05:43:59Z",
      content:
        "WASHINGTON -- About 10% of people appear to suffer long COVID after an omicron infection, a lower estimate than earlier in the pandemic, according to a study of nearly 10,000 Americans that aims to h… [+2978 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "‘So happy’: Man declared innocent after 33 years in US jail - Al Jazeera English",
      description:
        "Daniel Saldana was convicted in 1990 of attempted murder, but evidence emerged that he was not even at the scene.",
      url: "https://www.aljazeera.com/news/2023/5/26/so-happy-man-declared-innocent-after-33-years-in-us-jail",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/05/AP23145862409682-1685076798.jpg?resize=1920%2C1440",
      publishedAt: "2023-05-26T05:14:16Z",
      content:
        "A California man who spent 33 years in prison for attempted murder has been declared innocent and freed after it emerged that he was not even at the scene of the attack.\r\nDaniel Saldana, now 55, was … [+2065 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Robert Lea",
      title:
        "Rocket Lab launches 2 tiny NASA hurricane-watching probes to orbit - Space.com",
      description: "The agency's TROPICS miniconstellation is complete.",
      url: "https://www.space.com/rocket-lab-second-tropics-hurricane-launch-may-2023",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/TnqxEfUEbszVVDiFPyWvEf-1200-80.jpeg",
      publishedAt: "2023-05-26T05:12:12Z",
      content:
        "A Rocket Lab Electron rocket launches the second set of TROPICS hurricane-studying cubesats for NASA on May 25, 2023. (Image credit: Rocket Lab)\r\nThe second set of NASA's TROPICS cubesats launched on… [+5095 chars]",
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Jackie Strause",
      title:
        "‘Yellowjackets’ Star Sophie Thatcher on Season 2’s Tragic Finale: “She Already Let Herself Go” - Hollywood Reporter",
      description:
        "The star who plays young Natalie on the hit Showtime series talks to The Hollywood Reporter about the gut punch viewers didn't see coming and the surprise reveal for her character.",
      url: "https://www.hollywoodreporter.com/tv/tv-features/yellowjackets-season-2-finale-death-sophie-thatcher-interview-1235497964/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Yellowjackets_209_1265_R-H-2023.jpg?w=1024",
      publishedAt: "2023-05-26T05:00:59Z",
      content:
        "[This story contains major spoilers to the season two finale of Yellowjackets, “Storytelling.”]\r\nSophie Thatcher is relieved that the season two finale of Yellowjackets has landed. It’s been buzzing … [+17219 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Jimmy Butler guarantees Heat victory over Celtics: 'We can and we will win this series' - CBS Sports",
      description:
        "Miami has lost two straight games after going up 3-0 on Boston",
      url: "https://www.cbssports.com/nba/news/jimmy-butler-guarantees-heat-victory-over-celtics-we-can-and-we-will-win-this-series/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/05/20/000a3970-5e93-4450-803a-48984b68ed4d/thumbnail/1200x675/3c0c82e3756da6f93624c9c1cc45de29/butler-3g.jpg",
      publishedAt: "2023-05-26T04:59:48Z",
      content:
        "The Miami Heat seemingly had the Eastern Conference finals won as recently as Sunday. When they won Game 3 against the Boston Celtics, they pushed their series lead up to 3-0. No NBA team has ever bl… [+2185 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "China could hack US ‘critical infrastructure’, State Dept warns - Al Jazeera English",
      description:
        "Department accused Chinese state-sponsored hacking group, Volt Typhoon, of carrying out cyber-espionage on US targets.",
      url: "https://www.aljazeera.com/news/2023/5/26/china-could-hack-us-critical-infrastructure-state-dept-warns",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/05/AP22067494068144-1685073614.jpg?resize=1200%2C675",
      publishedAt: "2023-05-26T04:32:54Z",
      content:
        "The US State Department has warned that China is capable of launching cyberattacks against critical United States infrastructure, including oil and gas pipelines as well as rail systems, after resear… [+3279 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Daniel Gilbert, Faiz Siddiqui",
      title:
        "Elon Musk's Neuralink says it has FDA approval for human trials: What to know - The Washington Post",
      description:
        "Neuralink said it has regulatory approval to conduct a clinical trial of its brain implants in people, a milestone for the company as it seeks to commercialize a device that will link human brains to computers.",
      url: "https://www.washingtonpost.com/business/2023/05/25/elon-musk-neuralink-fda-approval/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6RWP755TNJBYHKS6JFGWJOBJKE.JPG&w=1440",
      publishedAt: "2023-05-26T03:59:10Z",
      content:
        "Comment on this story\r\nComment\r\nNeuralink, Elon Musks brain-implant company, said Thursday evening that it has regulatory approval to conduct the first clinical trial of its experimental device in hu… [+4781 chars]",
    },
    {
      source: { id: null, name: "The Texas Tribune" },
      author: "James Barragán, Chuck Lindell",
      title:
        "Here are the 20 articles of impeachment filed against Ken Paxton - The Texas Tribune",
      description:
        "The Texas House will vote on accusations that include bribery, dereliction of duty, disregard of official duty and obstruction of justice.",
      url: "https://www.texastribune.org/2023/05/25/ken-paxton-20-articles-impeachment/",
      urlToImage:
        "https://thumbnails.texastribune.org/JYz9KNCjKI2mymW0YV-2TQcNb6A=/1200x630/filters:quality(95)/static.texastribune.org/media/files/c92f715cc5ef4301691fb262bb65e5dd/Paxton%20Watch%20Party%20ST%20TT%2014.jpg",
      publishedAt: "2023-05-26T03:28:26Z",
      content:
        "Sign up for The Brief, The Texas Tribunes daily newsletter that keeps readers up to speed on the most essential Texas news.\r\nThe 20 articles of impeachment against state Attorney General Ken Paxton, … [+7674 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Golden Knights @ Stars; Game 4, 5/25 | NHL Playoffs 2023 | Stanley Cup Playoffs - NHL",
      description:
        "Extended highlights of the Dallas Stars at the Vegas Golden Knights",
      url: "https://www.youtube.com/watch?v=wk88Q1rh11w",
      urlToImage: "https://i.ytimg.com/vi/wk88Q1rh11w/maxresdefault.jpg",
      publishedAt: "2023-05-26T03:17:58Z",
      content: null,
    },
  ];

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d9be7efb6214638b0068a741c715b58";

    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }

  handlingPreviousClick = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d9be7efb6214638b0068a741c715b58&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedata = await data.json();
       
      this.setState({
       page: this.state.page - 1,
       articles: parsedata.articles
    })
  };
  

  handlingNextClick = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d9be7efb6214638b0068a741c715b58&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedata = await data.json();
       
      this.setState({
       page: this.state.page + 1,
       articles: parsedata.articles
    })
  };

  render() {
    return (
      <>

    
        <div className="container my-5">
          <div className="container my-5">
            <h2 className="my-4 mx-4 fw-bold text-center">NewsCyber - Top Headlines</h2>

            {this.state.loading && <Loading/>}

            <div class="d-flex justify-content-between my-5">
              <button
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handlingPreviousClick}
              >
                {" "}
                &larr; Previous
              </button>

              <button
                className="btn btn-primary"
                onClick={this.handlingNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItems
                  title={element.title ? element.title.slice(0, 150) : ""}
                  descriptions={
                    element.description ? element.description.slice(0, 300) : ""
                  }
                  urlimage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default News;
