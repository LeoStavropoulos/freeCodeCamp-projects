import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faTumblr} from "@fortawesome/free-brands-svg-icons";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import "./QuoteBox.css"
import "../quotes"
import quotes from "../quotes";

const QuoteBox = () => {
    const [quote, setQuote] = useState({});
    const [color, setColor] = useState("#333");

    useEffect(() => {
        setColor(getColor())
        setQuote(getQuote())
    }, []);

    const getQuote = () => {
        return getRandom(quotes)
    }

    const getColor = () => {
        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ]

        return getRandom(colors)
    }

    const getRandom = arr => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    const handleClick = () => {
        setQuote(getQuote())
        setColor(getColor())
        document.documentElement.style.setProperty("--accent-color", color)
    }

    return(
        <div id="quote-box">
            <div className="quote-text">
                <FontAwesomeIcon className="quote-text-icon" icon={faQuoteLeft}/>
                <span id="text">
                    {quote.quote}
                </span>
            </div>
            <div className="quote-author">
                -<span id="author"> {quote.author}</span>
            </div>
            <div className="buttons">
                <a
                    className="button"
                    id="tweet-quote"
                    title="Tweet this quote!"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + quote.quote + '" ' + quote.author)}`}
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    className="button"
                    id="tumblr-quote"
                    title="Post this quote on tumblr!"
                    target="_blank"
                    href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent('"' + quote.quote + '" ' + quote.author)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faTumblr} />
                </a>
                <button className="button" id="new-quote" onClick={handleClick}>New Quote</button>
            </div>
        </div>
    )
}

export default QuoteBox;