import { useEffect, useState } from 'react';
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import './Photo.css';
import photosArr from '../../photos';

function Photo() {
    let [index, setIndex] = useState(0);
    let [colorLeft, setColorLeft] = useState('transparent');
    let [colorRight, setColorRight] = useState('var(--secondary-color)');
    let [cursorLeft, setCursorLeft] = useState('auto');
    let [cursorRight, setCursorRight] = useState('pointer');

    let styleLeft = { color: colorLeft, cursor: cursorLeft };
    let styleRight = { color: colorRight, cursor: cursorRight };
    let styleScreen = { backgroundImage: 'url(' + photosArr[index] + ')' };

    useEffect(() => {
        changeColorAndPointer()
    }, [ index ])

    let increaseIndex = () => {
        if(index < photosArr.length - 1) {
            setIndex(index + 1)
        };
    }

    let decreaseIndex = () => {
        if(index > 0) {
            setIndex(index - 1)
        };
    }

    let changeColorAndPointer = () => {
        if(index === 0) {
            setColorLeft('transparent');
            setColorRight('var(--secondary-color)');
            setCursorLeft('auto');
            setCursorRight('pointer');
        } else if (index > 0 && index < photosArr.length - 2) {
            setColorLeft('var(--secondary-color)');
            setColorRight('var(--secondary-color)');
            setCursorLeft('pointer');
            setCursorRight('pointer');
        } else {
            setColorLeft('var(--secondary-color)');
            setColorRight('transparent');
            setCursorLeft('pointer');
            setCursorRight('auto');
        }
    }

    return (
        <IconContext.Provider
            value={{ size: '30px' }}
        >
        <div className="photo">
            <div className="iphone">
            <div className="camera"></div>
            <div className="speaker"></div>
            <div className="screen" style={ styleScreen }></div>
            <div className="home1"></div>
            <div className="home2"></div>
            <div className="line"></div>
            <div className="left" onClick={ decreaseIndex }>
                <BsFillArrowLeftCircleFill style={ styleLeft } />
            </div>
            <div className="right"  onClick={ increaseIndex }>
                <BsFillArrowRightCircleFill style={ styleRight } />
            </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Photo;