const quotes = [
  {
    Quote: "Be the change that you wish to see in the world.",
    Author: "Mahatma Ghandhi",
  },

  {
    Quote: `Friendship...is born at the moment when one man says to another
        "What! You too? I thought that no one but myself..."`,
    Author: "C.S.Lewis",
  },

  {
    Quote: `I've Learned that people will forget what you said,
        people will forget what you did,
        but people will never forget how you made them feel.`,
    Author: "Maya Angelou",
  },

  {
    Quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    Author: "Oscar Wilde",
  },

  {
    Quote: "Without music, life would be a mistake.",
    Author: "Fredrich Nietzsche",
  },

  {
    Quote: `Whenever you find yourself on the side of the majority, it is time to reform.`,
    Author: "Mark Twain",
  },

  {
    Quote: "I have not failed. I've just found 10,000 ways that won't work.",
    Author: "Thomas A. Edison",
  },

  {
    Quote: "If you judge people, you have no time to love them.",
    Author: "Mother teresa",
  },

  {
    Quote: "We don't see things as they are, we see them as we are.",
    Author: "Anais Nin",
  },

  {
    Quote: `Don't judge each day by the harvest you reap
        but by the seed that you plant`,
    Author: "Robert Louis Stevenson",
  },

  {
    Quote:
      "The future belongs to those who believe in the beauty of their dream.",
    Author: "Eleanor Roosevelt",
  },

  {
    Quote: "Life is a daring adventure or nothing at all.",
    Author: "Helen Keller",
  },

  {
    Quote: `Many of life's failures are people who did not realize
      how close they were to success when they gave up.`,
    Author: "Thomas A. Edison",
  },

  {
    Quote: `Life is never fair,
      and perhaps it is a good thing for most of us that it is not.`,
    Author: "Oscar Wilde",
  },

  {
    Quote: "Success usually comes to those who are too busy looking for it",
    Author: "Henry David Thoreau",
  },

  {
    Quote: "The secret of success is to do the common thing uncommonly well",
    Author: "John D. Rockefeller",
  },

  {
    Quote: `Dont't be distracted by criticism.
      Remember - the only taste of success some people get is to take a bite out of you.`,
    Author: "Zig Ziglar",
  },

  {
    Quote: "It is better to fail in originality than to succed in imitation.",
    Author: "Herman Melville",
  },

  {
    Quote: `A successful man is one who can lay a firm foundation
      with the bricks others have thrown at him.`,
    Author: "David Brinkley",
  },

  {
    Quote: `If you are not willing to risk the usual,
      you will have to settle for the ordinary.`,
    Author: "Jim Rohn",
  },

  {
    Quote: `I've learned over the years that when one's mind is made up,
      this diminishes fear.`,
    Author: "Rosa Parks",
  },
];
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector(".quote-btn");

function showQuotes() {
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = selectedQuote.Quote;
  author.innerText = selectedQuote.Author;
}

showQuotes();

quoteBtn.addEventListener("click", showQuotes);
