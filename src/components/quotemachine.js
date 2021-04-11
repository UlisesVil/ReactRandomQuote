import React from 'react';

  class QuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        randomIndex: Math.floor(Math.random() * 50)
      }
      this.ask = this.ask.bind(this);
    }

    ask() {      
      this.setState({
        randomIndex: Math.floor(Math.random() * 50),
      });
    }

    render() {
      const possibleAnswers = [
        {quote: "“If life was fair, Elvis would be alive and all the impersonators would be dead.”", author: " – Johnny Carson"},
        {quote: "“Flattery is like cologne water, to be smelt, not swallowed.”", author: " – Josh Billings"},
        {quote: "“The greatest thief this world has ever produced is procrastination, and he is still at large.”", author: " – Josh Billings"},
        {quote: "“I know that there are people who do not love their fellow man, and I hate people like that!”", author: " – Tom Lehrer"},
        {quote: "“The only mystery in life is why the kamikaze pilots wore helmets.”", author: " – Al McGuire"},
        {quote: "“All the things I really like to do are either immoral, illegal or fattening.”", author: " – Alexander Woollcott"},
        {quote: "“My opinions may have changed, but not the fact that I’m right.”", author: " – Ashleigh Brilliant"},
        {quote: "“He who laughs last didn’t get the joke.”", author: " – Charles de Gaulle"},
        {quote: "“Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.”", author: " – Cullen Hightower"},
        {quote: "“Remember, today is the tomorrow you worried about yesterday.”", author: " – Dale Carnegie"},
        {quote: "“Education is learning what you didn’t even know you didn’t know.”", author: " – Daniel J. Boorstin"},
        {quote: "“Never under any circumstances take a sleeping pill and a laxative on the same night.”", author: " – Dave Barry"},
        {quote: "“I used to jog but the ice cubes kept falling out of my glass.”", author: " – David Lee Roth"},
        {quote: "“Everyone has a purpose in life. Perhaps yours is watching television.”", author: " – David Letterman"},
        {quote: "“The digital camera is a great invention because it allows us to reminisce. Instantly.”", author: " – Demetri Martin"},
        {quote: "“How many people here have telekenetic powers? Raise my hand.”", author: " – Emo Philips"},
        {quote: "“Leave something for someone but dont leave someone for something.”", author: " – Enid Blyton"},
        {quote: "“Never go to a doctor whose office plants have died.”", author: " – Erma Bombeck"},
        {quote: "“You’re only as good as your last haircut.”", author: " – Fran Lebowitz"},
        {quote: "“Marriage is the only war in which you sleep with the enemy.”", author: " – Francois de La Rochefoucauld"},
        {quote: "“The first time I sang in the church choir; two hundred people changed their religion.”", author: " – Fred Allen"},
        {quote: "“Happiness is having a large, loving, caring, close-knit family in another city.”", author: " – George Burns"},
        {quote: "“You know you’re getting old when you stoop to tie your shoelaces and wonder what else you could do while you’re down there.”", author: " – George Burns"},
        {quote: "“I was married by a judge. I should have asked for a jury.”", author: " – Groucho Marx"},
        {quote: "“The two most common elements in the universe are hydrogen and stupidity.”", author: " – Harlan Ellison"},
        {quote: "“I’ve got all the money I’ll ever need, if I die by four o’clock.”", author: " – Henny Youngman"},
        {quote: "“You tried your best and you failed miserably. The lesson is ‘never try.'”", author: " – Homer Simpson"},
        {quote: "“I’d rather have 1% of the effort of 100 men than 100% of my own effort.”", author: " – J. Paul Getty"},
        {quote: "“Money is not the most important thing in the world. Love is. Fortunately, I love money.”", author: " – Jackie Mason"},
        {quote: "“Here’s something to think about: How come you never see a headline like ‘Psychic Wins Lottery’?”", author: " – Jay Leno"},
        {quote: "“Avoid fruits and nuts. You are what you eat.”", author: " – Jim Davis"},
        {quote: "“Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.”", author: " – Mark Twain"},
        {quote: "“I am an old man and have known a great many troubles, but most of them never happened.”", author: " – Mark Twain"},
        {quote: "“The only time a woman really succeeds in changing a man is when he is a baby.”", author: " – Natalie Wood"},
        {quote: "“What the world needs is more geniuses with humility; there are so few of us left.”", author: " – Oscar Levant"},
        {quote: "“Women are meant to be loved, not to be understood.”", author: " – Oscar Wilde"},
        {quote: "“When you’re in love it’s the most glorious two and a half days of your life.”", author: " – Richard Lewis"},
        {quote: "“I have tried to know absolutely nothing about a great many things, and I have succeeded fairly well.”", author: " – Robert Benchley"},
        {quote: "“A verbal contract isn’t worth the paper it’s written on.”", author: " – Samuel Goldwyn"},
        {quote: "“I live by my own rules (reviewed, revised, and approved by my wife).. but still my own.”", author: " – Si Robertson"},
        {quote: "“A day without sunshine is like, you know, night.”", author: " – Steve Martin"},
        {quote: "“You can’t have everything. Where would you put it?”", author: " – Steven Wright"},
        {quote: "“It takes considerable knowledge just to realize the extent of your own ignorance.”", author: " – Thomas Sowell"},
        {quote: "“Always carry a flagon of whiskey in case of snakebite and furthermore always carry a small snake.”", author: " – W. C. Fields"},
        {quote: "“A great pleasure in life is doing what people say you cannot do.”", author: " – Walter Bagehot"},
        {quote: "“Always go to other people’s funerals, otherwise they won’t come to yours.”", author: " – Yogi Berra"},
        {quote: "“If you’re going through hell, keep going.”", author: " – Winston Churchill"},
        {quote: "“I don’t want to achieve immortality through my work. I want to achieve it through not dying.”", author: " – Woody Allen"},
        {quote: "“Everybody laughs the same in every language because laughter is a universal connection.”", author: " – Yakov Smirnoff"},
        {quote: "“You’ve got to be very careful if you don’t know where you are going, because you might not get there.”", author: " – Yogi Berra"}
      ];

      const quoteText = possibleAnswers[this.state.randomIndex].quote;
      const authorText = possibleAnswers[this.state.randomIndex].author;
    
      return (
        <div id="quote-box">
          <h2>Random Quote:</h2>
          <div id="cont">
            <div id="cont2">
              <p id="text">
                {quoteText}          
              </p>
              <p id="author">
                {authorText}          
              </p>
            </div>
            <div id="randomB">
              <button id="new-quote" onClick={this.ask}>
                Random Quote!
              </button>
            </div>
          </div> 
          <div id="social">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=https://ulisesvil.github.io/ReactRandomQuote/" target="_blank">
              <img class="twitter" alt ="twitter ico"src="https://image.flaticon.com/icons/svg/733/733635.svg" />
            </a>
            <a id="facebook-quote" href="https://www.facebook.com/sharer/sharer.php?u=https://ulisesvil.github.io/ReactRandomQuote/" target="_blank">
              <img class="face" alt="facebook ico"src="https://image.flaticon.com/icons/svg/733/733605.svg" />
            </a>
          </div>
        </div>
      );
    }
  };
export default QuoteMachine;