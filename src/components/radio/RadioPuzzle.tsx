import './radio.css'
import React, { useState, useEffect, useLayoutEffect, MouseEvent } from 'react'
const radioCase: string = './src/assets/images/radio_404_album_upd.jpg'
const radioTape: string = './src/assets/images/radio_404_tape.png'

interface RadioProps {
    radioUnlocked: boolean;
    setRadioUnlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function page({radioUnlocked, setRadioUnlocked}:RadioProps) {
    
    const [visible, setVisible] = useState(false)
    
    const [expanded, setExpanded] = useState(false)

    const [tapeArt, setTapeArt] = useState(false)

    const [marqueeScrollDuration, setMarqueeScrollDuration] = useState(10)

    const [releaseClicks,setReleaseClicks] = useState<number>(0)

    const [peekClick, setPeekClick] = useState<boolean>(false)

    const [tapeDrop, setTapeDrop] = useState<boolean>(false)

    const [tapeLoaded, setTapeLoaded] = useState<boolean>(true)

    useEffect(()=>{
        if(!!peekClick){
            setTimeout(() => {
                setPeekClick(false);
            }, 450);}
    },[peekClick])



    useEffect(()=>{
       
        setMarqueeScrollDuration(calcScrollDuration());
        
    },[])

    

    // calculates the duration of the marquee scrolling animation - produces a consistent perceived scroll rate for all tracks regardless of the text length
    const calcScrollDuration = () => {
        // the scrolling marquee element
        let marquee = document.getElementById("radioMarquee") as HTMLDivElement;
        // returns the ceiling of the marquee's width divided by 100, plus 2, to be used as the number of seconds the marquee will take to scroll for a given track
        return Math.ceil(marquee.offsetWidth / 100) + 2
    }    

    const toggle = () => {
        setVisible(!visible);

        if (!!expanded){
            setExpanded(false);
        };

        if (!!tapeArt) {
            setTapeArt(false)
        }
    }
    
    const expand = () => {
        setExpanded(!expanded)
        
        if (!!tapeArt) {
            setTapeArt(false)
        }
    }
    
    const toggleTape = () => {
        setTapeArt(!tapeArt);
    }
    
    const tapeDropCheck = () => {

        if (releaseClicks < 3) {
            setPeekClick(true);
            // console.log(releaseClicks)
            setReleaseClicks(releaseClicks + 1)
        }
        else if (!tapeDrop) {
            setTapeDrop(true)
        } 
        else {
            setExpanded(false);
            setVisible(false);
            localStorage.setItem("radioUnlocked", "true");
            setTimeout(() => {
                setRadioUnlocked(true);
            }, 700);
        }
    }


    // const handleMute = (element: HTMLMediaElement) => {
    //     console.log(element.muted)
    //     element.muted = !element.muted
    //     setAudioMuted(element.muted)
    // }

    const handleTop = () => {
        if (!!tapeArt){
            return 'top-[5rem]'
        }
        else if (!!expanded) {
            return 'top-[5rem]'
        }
        else if (!!visible) {
            return ('top-[-10.2rem]') 
        }
        else if (!visible) {
            return ('top-[-13.7rem]')
        }
    }

    return (
    <div id='radio' className={`hidden lg:flex fixed ${ handleTop() } w-96 h-fit flex-col items-center transition-top ease-in-out duration-700 z-50`}>

        <div className='w-full h-fit relative bg-slate-200' onClick={(()=>toggleTape())}>
            <img className={`absolute object-contain z-50 ${!!tapeArt ? "top-[-22.4rem]" : "top-[-37.6rem]"} transition-top ease-in-out ${!!tapeArt ? "duration-700" : 'duration-[900ms]'}`} src={radioUnlocked ? (!!tapeLoaded ? radioCase : '') : ''} alt='cover art' width={384} height={601}/>
        </div>

        <div className={`w-full h-fit relative bg-slate-200`} onClick={()=>tapeDropCheck()}>
            <div className={`${!!localStorage.getItem("radioUnlocked") ? 'hidden' : ''} h-fit w-fit fixed left-52 top-[-3rem] z-50 tape ${!!peekClick ? 'tape-peek' : (!!tapeDrop ? 'tape-drop' : '')}`}>
                <img className='h-[75%] w-[75%] shadow-[2px_2px_5px_rgba(0,0,0,0.7)]' src='./src/assets/images/radio_404_mini.jpg' alt='mini tape'/>
            </div>
            {tapeLoaded ?  
            <img className='object-contain z-40' src={ !!radioUnlocked ? radioTape : './src/assets/images/lost_note.png'} alt='current track album art' width={384} height={243}/>
            : 
            <div className='h-[242px] w-[384px]' onClick={()=>setTapeLoaded(true)}></div>
            }
        </div>
        
        <div className={`flex flex-row items-center justify-around h-14 w-96 bg-white rounded-br-lg shadow-[-2px_2px_6px_rgb(36,36,36)]`}>

            <div className='z-30'>
                <i className={`bi bi-play-fill text-4xl mx-2 text-bill-magenta drop-shadow-[-1px_1px_0px_rgb(0,0,0)]`}/>
            </div>

            <div className={`hairline text-2xl font-bold marquee w-72 z-30`}>

                <ul id="radioMarquee" className='marquee__content' style={{animationDuration: `${marqueeScrollDuration}s`}}>
                    <li>
                        <p>{"Looking for the tape..."}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                    <li>
                        <p>{"Looking for the tape..."}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                </ul>

                <ul id='hiddenMarquee' aria-hidden='true' className='marquee__content' style={{animationDuration: `${marqueeScrollDuration}s`}}>
                    <li>
                        <p>{"Looking for the tape..."}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                    <li>
                        <p>{"Looking for the tape..."}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                </ul>

            </div>
            
            
            <div className='z-30' onClick={() => expand()}>
                <i className={`bi ${!expanded ? 'bi-chevron-double-down' : 'bi-chevron-double-up'} text-2xl mx-2`}></i>
            </div>

            <div className={`absolute h-14 w-96 bg-white rounded-br-lg z-20`}></div>

        </div>

        

        <div className='relative w-96 h-5 flex justify-center'>
            
            <div className='relative w-32 flex justify-center text-lg'>
                <div className='w-fit h-fit'>
                    <i className={`bi bi-eject-fill pr-2 text-gray-500`}></i>
                </div>
            </div>

            <div className='relative w-24 rounded-b bg-white shadow-[-2px_2px_4px_rgb(36,36,36)] flex justify-center items-center' onClick={() => toggle()}><i className={`bi ${!visible ? `bi-chevron-compact-down` : `bi-chevron-compact-up`} text-2xl`}></i></div>

            <div className='relative bungee h-6 w-32 flex justify-around items-center pl-3 pt-1 select-none overflow-hidden'>
                <div id="volDown" className='w-6 text-center text-2xl'>-</div>
                <div className={`hairline w-6 text-center font-bold text-xl`}>{5}</div>
                <div id="volUp" className='w-6 text-center text-2xl'>+</div>
            </div>
        </div>
    </div>
  )
}
