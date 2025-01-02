import { useEffect, useState } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        imgUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    });

    const [apiMemes, setApiMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setApiMemes(data.data.memes))
    }, []);

    function inputTxt(e) {
        const {value, name} = e.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function getMeme() {
        const randomNum = Math.floor(Math.random() * apiMemes.length)
        const genMeme = apiMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: genMeme
        }));
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={inputTxt}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={inputTxt}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMeme}>Get your own mere 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} alt="generated-meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}