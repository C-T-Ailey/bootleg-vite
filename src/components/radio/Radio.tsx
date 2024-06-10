import './radio.css'
import { useState, useEffect, useLayoutEffect, MouseEvent } from 'react'
import './radio.css'

export default function page() {
    
    const audioLibrary = [
        {
            title: 'Tony Hawk\'s Pro Skater OST: "Main Menu Loop"',
            artist: 'Brian Bright',
            url: "https://od.lk/s/OTFfMjgxMzAyMjFf/thps_loop_neater.mp3"
        },
        {
            title:'"Oblivion (Double Bill Mix)"',
            artist: 'Grimes ft. Astrophysics',
            url: "https://od.lk/s/OTFfMjgxMzA1OTZf/grimes-miku%20oblivion%20mix.mp3"
        },
        {
            title: 'Tony Hawk\'s Pro Skater 2 OST: "Main Menu Loop"',
            artist: 'Brian Bright',
            url: "https://od.lk/s/OTFfMjgxMzA1OTdf/Brian%20Bright%20-%20THPS%202%20Menu%20Music.mp3"
        },
        {
            title: '"Midnight Specimen"',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMjgxMzA2MDBf/Disconscious%20-%20Hologram%20Plaza%20-%2009%20Midnight%20Specimen.mp3"
        },
        {
            title: '"Self-Discovery"',
            artist: 'Luxury Elite',
            url: "https://od.lk/s/OTFfMjgxMzA2MTdf/Self-Discovery.mp3"
        },
        {
            title: '"Ain\'t Got Time to Waste"',
            artist: 'Aim ft. YZ',
            url: "https://od.lk/s/OTFfMjgxMzA2NDVf/Ain%27t%20Got%20Time%20to%20Waste%20-%20Aim%20ft.%20YZ.mp3"
        },
        {
            title: '"Aquasky"',
            artist: 'Blue Thunder',
            url: "https://od.lk/s/OTFfMjgxMzA2NDdf/Aquasky%20-%20Blue%20Thunder.mp3"
        },
        {
            title: '"Le Hot \'99"',
            artist: 'Grand Unified',
            url: "https://od.lk/s/OTFfMjgxMzA2NDlf/Grand%20Unified%20-%20Le%20Hot%20%2799.mp3"
        },
        {
            title: '"SimpsonWave1995"',
            artist: 'Frank Contreras',
            url: "https://od.lk/s/OTFfMjgxMzc2Njdf/FrankJavCee%20-%20SimpsonWave1995.mp3"
        },
        {
            title: '"Domino Line"',
            artist: 'Casiopea',
            url: "https://od.lk/s/OTFfMjgxNDkxMjBf/Casiopea%20-%20Domino%20line.mp3"
        },
        {
            title: '"Ode to an African Violet"',
            artist: 'Mort Garson',
            url: "https://od.lk/s/OTFfMjgxNDkxMjVf/Ode%20to%20an%20African%20Violet.mp3"
        },
        {
            title: 'Tekken 2 OST: "Jun Kazama (Morning Field)"',
            artist: 'Yoshie Arakawa',
            url: "https://od.lk/s/OTFfMjgxNDkxMjdf/Tekken%202%20-%20Jun%20Kazama%20Theme%20%28Morning%20Field%29.mp3"
        },
        {
            title: '"Escape from New York: Main Theme"',
            artist: 'John Carpenter',
            url: "https://od.lk/s/OTFfMjgxNDkxNjlf/Escape%20From%20New%20York%20Theme.mp3"
        },
        {
            title: 'Streets of Rage 2 OST: "Slow Moon"',
            artist: 'Yuzo Koshiro',
            url:"https://od.lk/s/OTFfMjgxNDkxNzBf/Streets%20Of%20Rage%202%20-%20Slow%20Moon.mp3"
        },
        {
            title: 'Metal Gear Solid 2 OST: "Plant Sneaking Theme"',
            artist: 'Norihiko Hibino & Harry Gregson-Williams',
            url: "https://od.lk/s/OTFfMjgxNDkxNzFf/Metal%20Gear%20Solid%202%20Soundtrack%20-%20Plant%20Sneaking%20Theme.mp3"
        },
        {
            title: 'Tekken 3 OST: "Dr. Bosconovich"',
            artist: 'Nobuyoshi Sano & Keiichi Okabe',
            url: "https://od.lk/s/OTFfMjgxNDkxNzJf/Tekken%203%20Arranged%20OST%20Dr.%20Boskonovitch.mp3"
        },
        {
            title: '"The Concept of Love"',
            artist: 'Hideki Naganuma',
            url: 'https://od.lk/s/OTFfMjgxNDk1OThf/The%20Concept%20of%20Love.mp3'
        },{
            title: '"New Wave Hookers"',
            artist: 'Vestron Vulture',
            url: 'https://od.lk/s/OTFfMjgxNDk1OTlf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20New%20Wave%20Hookers.mp3'
        },{
            title: '"Rust"',
            artist: 'El Huervo',
            url: 'https://od.lk/s/OTFfMjgxNDk2MDBf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20Rust.mp3'
        },{
            title: '"Sexualizer"',
            artist: 'Perturbator',
            url: 'https://od.lk/s/OTFfMjgxNDk2MDFf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20Sexualizer.mp3'
        },
        {
            title: '"Damn Fine Coffee"',
            artist: 'mtbrd',
            url: 'https://od.lk/s/OTFfMjgxNDk2NDRf/mtbrd%20-%20Damn%20Fine%20Coffee.mp3'
        },
    ]
    
    const [visible, setVisible] = useState(false)
    
    const [expanded, setExpanded] = useState(false)

    const [tapeArt, setTapeArt] = useState(false)
    
    const [playing, setPlaying] = useState(false)
    
    const [playlist, setPlaylist] = useState<number[]>([])  // playlist is an array of numbers; each number corresponds to the index of a track object within audioLibrary

    const [selectedTrack, setSelectedTrack] = useState<number>(0)
    
    const [audioMuted, setAudioMuted] = useState(false)

    const [volume, setVolume] = useState(5)
    
    const [audioCanPlay, setAudioCanPlay] = useState(false)

    const [firstPlay,setFirstPlay] = useState(false)

    const [marqueeScrollDuration, setMarqueeScrollDuration] = useState(10)

    const [currentSrc, setCurrentSrc] = useState<string>("")

    const getRadios = () => {
        let audio = document.getElementById("audioPlayer") as HTMLMediaElement;
        let hiss = document.getElementById("hiss") as HTMLMediaElement;
        let players = {
            audio: audio,
            hiss: hiss,
        }
        return players
    }
    
    useLayoutEffect(() => {
        shufflePlaylist();
        getRadios().audio.volume = volume / 10;
        getRadios().hiss.volume = volume / 10;
    }, [])

    useEffect(()=>{        
        console.log("current track:",audioLibrary[selectedTrack].title,"library track index:",selectedTrack)
        console.log(playlist.length - 1)
        console.log("Next track is end of playlist:", playlist.indexOf(selectedTrack) + 1 === playlist.length - 1)
        if(!!firstPlay){
            let players = getRadios();
            if(!!playing){
                players.audio.play();
                players.hiss.play();
            }
        
        }
        // else if (playlist.length && playlist.indexOf(selectedTrack) === playlist.length - 1) {
        //     console.log("end of playlist")
        //     shufflePlaylist();
        // }

    },[selectedTrack])

    useEffect(()=>{
        if (!!audioCanPlay){
            setMarqueeScrollDuration(calcScrollDuration());
    }
    },[audioCanPlay, selectedTrack])

    
    const calcScrollDuration = () => {
        let marquee = document.getElementById("radioMarquee") as HTMLDivElement;
        let hiddenMarquee = document.getElementById("hiddenMarquee") as HTMLDivElement;
        console.log(marquee.style.animationDuration, hiddenMarquee.style.animationDuration)
        return Math.ceil(marquee.offsetWidth / 100) + 2
    }
    
    const randInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const shufflePlaylist = () => {
        let libraryIndices: number[] = []
        
        audioLibrary.forEach(track => {
            while (libraryIndices.length !== audioLibrary.length) {
                let newTrackIndex: number = randInt(0,audioLibrary.length-1);
                if (!libraryIndices.includes(newTrackIndex)) {
                    libraryIndices.push(newTrackIndex)
                }
            }
        });
        
        setPlaylist(libraryIndices);
        setSelectedTrack(libraryIndices[0]);
        setCurrentSrc(audioLibrary[libraryIndices[0]].url)
    }
    
    const nextTrack =  () => {

        let playlistTrackIndex = playlist.indexOf(selectedTrack)
        let nextTrackIndex = playlistTrackIndex + 1
        let nextTrack = playlist[nextTrackIndex]
        let atEndOfPlaylist: boolean = playlistTrackIndex === playlist.length - 1

        // console.log(`Track upon clicking: ${audioLibrary[selectedTrack].title}, ${nextTrackIndex} in the playlist, ${selectedTrack} in the audio library; next up should be ${!atEndOfPlaylist ? audioLibrary[nextTrack].title : 'a reshuffled playlist'}`)

        if (atEndOfPlaylist){
            console.log("end of playlist")
            shufflePlaylist()
        }
        else {
            setSelectedTrack(nextTrack);
            setCurrentSrc(audioLibrary[nextTrack].url)
        }
    }

    const handlePlay = async (element: HTMLMediaElement) => {
        if(!!audioCanPlay){
            setFirstPlay(true)
            const click = new Audio('/audio/tape_click.ogg');
            try {
                if(!playing){
                    
                    let players = getRadios();
                    
                    setPlaying(true);

                    click.play();
                    
                    players.hiss.play();
                    
                    if (!firstPlay) {
                        var timeout = setTimeout(()=>{players.audio.play();},1000)
                    } else {
                        players.audio.play()
                    }
                    
                    return () => clearTimeout(timeout);
                    
                } else {
                    let players = getRadios();
                    players.audio.pause();
                    players.hiss.pause();
                    setPlaying(false)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    }
    
    const handleVolume = (event: MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLDivElement
        console.log(element)
        let players = getRadios();
        if (element.id === "volUp" && volume < 10) {
            players.audio.volume = (volume + 1) / 10;
            players.hiss.volume = (volume + 1) / 10;
            console.log(players.audio.volume)
            setVolume(volume + 1);
        }
        else if (element.id === "volDown" && volume > 0) {
            players.audio.volume = (volume - 1) / 10;
            players.hiss.volume = (volume - 1) / 10;
            console.log(players.audio.volume)
            setVolume(volume - 1);
        }
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
        setTapeArt(!tapeArt)
    }

    const handleMute = (element: HTMLMediaElement) => {
        console.log(element.muted)
        element.muted = !element.muted
        setAudioMuted(element.muted)
    }

    const handleTop = () => {
        if (!!tapeArt){
            return 'top-[27.4rem]'
        }
        else if (!!expanded) {
            return 'top-[5rem]'
        }
        else if (!!visible) {
            return 'top-[-10.2rem]'
        }
        else if (!visible) {
            return 'top-[-13.7rem]'
        }
    }

    return (
    <div id='radio' className={`hidden absolute lg:flex fixed ${ handleTop() } w-96 h-fit flex-col items-center transition-top ease-in-out duration-700`}>

        <audio id="hiss" autoPlay={false} src='/audio/tapehiss.wav' loop/>
        <audio id="audioPlayer" autoPlay={false} src={currentSrc} onCanPlay={() => setAudioCanPlay(true)} onEnded={() => nextTrack()}/>

        <div className='w-full h-fit relative bg-slate-200' onClick={(()=>toggleTape())}>
            <img className={`absolute object-contain z-50 ${!!tapeArt ? "top-[-22.4rem]" : "top-[-37.6rem]"} transition-top ease-in-out ${!!tapeArt ? "duration-700" : 'duration-[900ms]'}`} src={'/radio_404_album.jpg'} alt='cover art' width={384} height={601}/>
        </div>

        <div className={`w-full h-fit relative bg-slate-200`} onClick={()=>toggleTape()}>
            <img className='object-contain z-40' src={'/radio_404_tape.png'} alt='current track album art' width={384} height={243}/>
        </div>
        
        <div className={`flex flex-row items-center justify-around h-14 w-96 bg-white rounded-br-lg shadow-[-2px_2px_6px_rgb(36,36,36)]`}>

            <div className='z-30' onClick={()=>handlePlay(getRadios().audio)}>
                <i className={`bi ${!playing ? `bi-play-fill` : `bi-pause-fill`} text-4xl mx-2 text-bill-magenta drop-shadow-[-1px_1px_0px_rgb(0,0,0)]`}/>
            </div>

            <div className={`hairline text-2xl font-semibold marquee w-72 z-30`} onClick={() => nextTrack()}>

                <ul id="radioMarquee" className='marquee__content' style={{animationDuration: `${marqueeScrollDuration}s`}}>
                    <li>
                        <p>{ !audioCanPlay ? "Looking for the tape..." : audioLibrary[selectedTrack].title}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                    <li>
                        <p>{ !audioCanPlay ? "Looking for the tape..." : audioLibrary[selectedTrack].artist}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                </ul>

                <ul id='hiddenMarquee' aria-hidden='true' className='marquee__content' style={{animationDuration: `${marqueeScrollDuration}s`}}>
                    <li>
                        <p>{ !audioCanPlay ? "Looking for the tape..." : audioLibrary[selectedTrack].title}</p>
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill text-bill-magenta drop-shadow-bill-black-flat"></i>
                    </li>
                    <li>
                        <p>{ !audioCanPlay ? "Looking for the tape..." : audioLibrary[selectedTrack].artist}</p>
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
            <div className='relative w-32'></div>

            <div className='relative w-24 rounded-b bg-white shadow-[-2px_2px_4px_rgb(36,36,36)] flex justify-center items-center' onClick={() => toggle()}><i className={`bi ${!visible ? `bi-chevron-compact-down` : `bi-chevron-compact-up`} text-2xl`}></i></div>

            <div className='relative w-32 flex justify-around items-center pl-3 pt-1 select-none'>
                <div id="volDown" className='w-6 text-center text-2xl hover:text-bill-magenta hover:drop-shadow-[-2px_2px_0_rgba(0,0,0,1)] cursor-pointer' onClick={(event) => handleVolume(event)}>-</div>
                <div className={`hairline w-6 text-center font-bold text-xl`}>{volume}</div>
                <div id="volUp" className='w-6 text-center text-2xl hover:text-bill-magenta hover:drop-shadow-[-2px_2px_0_rgba(0,0,0,1)] cursor-pointer' onClick={(event) => handleVolume(event)}>+</div>
            </div>
        </div>
    </div>
  )
}
