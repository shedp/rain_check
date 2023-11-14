import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Background.module.css'


const Background = ({ city }) => {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [photographer, setPhotographer] = useState(null);
    const [photographerUrl, setPhotographerUrl] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [photo, setPhoto] = useState(null);


    useEffect(() => {
        async function searchApi(city) {
            try {
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)];
                setBackgroundUrl(randomPhoto.urls.regular);
                setPhotographer(randomPhoto.user.name);
                setPhotographerUrl(randomPhoto.user.links.html + '?utm_source=rain_check&utm_medium=referral');
                setPhotoUrl(randomPhoto.links.html + '?utm_source=rain_check&utm_medium=referral');
                randomPhoto.description.length < 24 ? setPhoto(randomPhoto.description) : setPhoto("Photo")

            } catch (err) {
                console.error(err)
            }
        }
        searchApi(city);
    }, [city]);


    let bgStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url("${backgroundUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -100,
        width: '100%',
        height: "100%",
        padding: 0,
        margin: 0,
    };

    return (
        <>
            <div style={bgStyle}>
            </div>
            <div className={styles.footer}>
                <div className="text-white">
                    <a href="https://github.com/shedp/rain_check" target="_blank" rel="noreferrer">Open Sourced</a> /
                    <a href="https://github.com/shedp" target="_blank" rel="noreferrer"> Sheena Diep</a>
                </div>
                <div className="text-white text-center capitalize">
                    <a href={photoUrl} target="_blank" rel="noreferrer">{photo}</a> /
                    <a href={photographerUrl} target="_blank" rel="noreferrer"> {photographer}</a>
                </div>
                <div></div>
            </div >
        </>);
}

export default Background;