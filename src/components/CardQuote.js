import React, { useState, useEffect } from "react";
import "./CardQuote.css";

export const CardQuote = () => {

  const [quotes, setQuotes] = useState([])
  

  let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  let colorRandom = parseInt(
    Math.random() * (0 - colors.length) + colors.length
  );

  const random = (length) => {
    return parseInt(Math.random() * (0 - length) + length)
  }


  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) =>  {
      setQuotes([...data.quotes])
      document.querySelector(".text-cite").innerText = data.quotes[random(data.quotes.length)].quote
      document.querySelector(".author").innerText = data.quotes[random(data.quotes.length)].author
    })

    document.querySelector(".background").style.setProperty("background-color", colors[colorRandom]);
    document.querySelector(".tweet-content i").style.setProperty("color", colors[colorRandom]);
    document.querySelector(".new-quote").style.setProperty("background-color", colors[colorRandom]);
    document.querySelector(".background").style.setProperty("color", colors[colorRandom]);
    document.querySelector(".text-cite").style.setProperty("color", colors[colorRandom]);
    document.querySelector(".cite i").style.setProperty("color", colors[colorRandom]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const quoteTempalte = () => {

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) =>  {

      colorRandom = parseInt(
        Math.random() * (0 - colors.length) + colors.length
      );

      document.querySelector(".background").style.setProperty("background-color", colors[colorRandom]);
      document.querySelector(".tweet-content i").style.setProperty("color", colors[colorRandom]);
      document.querySelector(".new-quote").style.setProperty("background-color", colors[colorRandom]);
      document.querySelector(".background").style.setProperty("color", colors[colorRandom]);
      document.querySelector(".text-cite").style.setProperty("color", colors[colorRandom]);
      document.querySelector(".cite i").style.setProperty("color", colors[colorRandom]);

      document.querySelector(".text-cite").innerText = quotes[random(quotes.length)].quote
      document.querySelector(".author").innerText = quotes[random(quotes.length)].author
    } )
    .catch((err) => console.log(err))
  }

  const changeCite = () => {
    quoteTempalte()
  };

  return (
    <article id="quote-box" className="quote-container">
      <div className="cite-content">
        <blockquote id="text" className="cite">
          <i className="fas fa-quote-left"></i>
          <span className="text-cite"></span>
        </blockquote>
        <cite id="author" className="author">
        </cite>
      </div>
      <div className="button-content">
        <span className="tweet-content">
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </span>
        <button id="new-quote" className="new-quote" onClick={changeCite}>
          New quote
        </button>
      </div>
    </article>
  );
};
