import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Background.module.css'


const Background = ({ city }) => {
    const [backgroundUrl, setBackgroundUrl] = useState('');
    const [photographer, setPhotographer] = useState(null);
    const [photographerUrl, setPhotographerUrl] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [photoLocation, setPhotoLocation] = useState('');


    useEffect(() => {
        async function searchApi(city) {
            try {
                const result = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
                const randomPhoto = result.data.results[Math.floor(Math.random() * result.data.results.length)];
                setBackgroundUrl(randomPhoto.urls.regular);
                setPhotographer(randomPhoto.user.name);
                setPhotographerUrl(randomPhoto.user.links.html + '?utm_source=rain_check&utm_medium=referral');
                setPhotoUrl(randomPhoto.links.html + '?utm_source=rain_check&utm_medium=referral');

            } catch (err) {
                console.error(err)
            }
        }
        searchApi(city);
    }, [city]);


    let divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url("${backgroundUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -100,
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
    };

    return (
        <>
            <div style={divStyle}>
            </div>
            <div className={styles.footer}>
                <div className="text-white pl-24">
                    <a href="https://github.com/shedp/rain_check" target="_blank">Open Sourced</a> /
                    <a href="https://github.com/shedp" target="_blank"> Sheena Diep</a>
                </div>
                <div className="text-white text-center">
                    <a href={photoUrl} target="_blank">Photo</a> /
                    <a href={photographerUrl} target="_blank"> {photographer}</a>
                </div>
                <div></div>
            </div >
        </>);
}

export default Background;