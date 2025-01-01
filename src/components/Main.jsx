import { useEffect, useState } from "react"

export default function Main() {

    const [getMeme, setGetMeme] = useState({
        imgUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []);

    function inputTxt(e) {
        const {value, name} = e.currentTarget
        setGetMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                        value={getMeme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={inputTxt}
                        value={getMeme.bottomText}
                    />
                </label>
                <button>Get your own mere 🖼</button>
            </div>
            <div className="meme">
                <img src={getMeme.imgUrl} alt="generated-meme" />
                <span className="top">{getMeme.topText}</span>
                <span className="bottom">{getMeme.bottomText}</span>
            </div>
        </main>
    );
}