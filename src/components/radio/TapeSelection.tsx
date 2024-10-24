import React, { useState, useEffect } from 'react'

interface selectionProps {
    setTapeLoaded: React.Dispatch<React.SetStateAction<boolean>>;
    setAudioCanPlay: React.Dispatch<React.SetStateAction<boolean>>;
    setJsonAudioLibrary: React.Dispatch<React.SetStateAction<string>>;
    setLibraryShuffle: React.Dispatch<React.SetStateAction<boolean>>;
    setTapeArt: React.Dispatch<React.SetStateAction<string>>;
    setCaseArt: React.Dispatch<React.SetStateAction<string>>;
}


export default function TapeSelection({setTapeLoaded,setJsonAudioLibrary,setLibraryShuffle,setTapeArt,setCaseArt}:selectionProps) {


    
    const radio404 = {
        title: "404fm: Bootleg Radio",
        shuffle: true,
        caseArt: './src/assets/images/radio_404_album_upd.jpg',
        tapeArt: './src/assets/images/radio_404_tape.png',
        audioLibrary: [
        {
            title: 'Tony Hawk\'s Pro Skater OST: "Main Menu Loop"',
            artist: 'Brian Bright',
            url: "https://od.lk/s/OTFfMjgxMzAyMjFf/thps_loop_neater.mp3",
            loop: true
        },
        {
            title:'"Oblivion (Double Bill Mix)"',
            artist: 'Grimes ft. Astrophysics',
            url: "https://od.lk/s/OTFfMjgxMzA1OTZf/grimes-miku%20oblivion%20mix.mp3",
            loop: false
        },
        {
            title: 'Tony Hawk\'s Pro Skater 2 OST: "Main Menu Loop"',
            artist: 'Brian Bright',
            url: "https://od.lk/s/OTFfMjgxMzA1OTdf/Brian%20Bright%20-%20THPS%202%20Menu%20Music.mp3",
            loop: true
        },
        {
            title: '"Midnight Specimen"',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMjgxMzA2MDBf/Disconscious%20-%20Hologram%20Plaza%20-%2009%20Midnight%20Specimen.mp3",
            loop: false
        },
        {
            title: '"Self-Discovery"',
            artist: 'Luxury Elite',
            url: "https://od.lk/s/OTFfMjgxMzA2MTdf/Self-Discovery.mp3",
            loop: false
        },
        {
            title: '"Ain\'t Got Time to Waste"',
            artist: 'Aim ft. YZ',
            url: "https://od.lk/s/OTFfMjgxMzA2NDVf/Ain%27t%20Got%20Time%20to%20Waste%20-%20Aim%20ft.%20YZ.mp3",
            loop: false
        },
        {
            title: '"Aquasky"',
            artist: 'Blue Thunder',
            url: "https://od.lk/s/OTFfMjgxMzA2NDdf/Aquasky%20-%20Blue%20Thunder.mp3",
            loop: false
        },
        {
            title: '"Le Hot \'99"',
            artist: 'Grand Unified',
            url: "https://od.lk/s/OTFfMjgxMzA2NDlf/Grand%20Unified%20-%20Le%20Hot%20%2799.mp3",
            loop: false
        },
        {
            title: '"SimpsonWave1995"',
            artist: 'Frank Contreras',
            url: "https://od.lk/s/OTFfMjgxMzc2Njdf/FrankJavCee%20-%20SimpsonWave1995.mp3",
            loop: false
        },
        {
            title: '"Domino Line"',
            artist: 'Casiopea',
            url: "https://od.lk/s/OTFfMjgxNDkxMjBf/Casiopea%20-%20Domino%20line.mp3",
            loop: false
        },
        {
            title: '"Ode to an African Violet"',
            artist: 'Mort Garson',
            url: "https://od.lk/s/OTFfMjgxNDkxMjVf/Ode%20to%20an%20African%20Violet.mp3",
            loop: false
        },
        {
            title: 'Tekken 2 OST: "Jun Kazama (Morning Field)"',
            artist: 'Yoshie Arakawa',
            url: "https://od.lk/s/OTFfMjgxNDkxMjdf/Tekken%202%20-%20Jun%20Kazama%20Theme%20%28Morning%20Field%29.mp3",
            loop: false
        },
        {
            title: '"Escape from New York: Main Theme"',
            artist: 'John Carpenter',
            url: "https://od.lk/s/OTFfMjgxNDkxNjlf/Escape%20From%20New%20York%20Theme.mp3",
            loop: false
        },
        {
            title: 'Streets of Rage 2 OST: "Slow Moon"',
            artist: 'Yuzo Koshiro',
            url:"https://od.lk/s/OTFfMjgxNDkxNzBf/Streets%20Of%20Rage%202%20-%20Slow%20Moon.mp3",
            loop: false
        },
        {
            title: 'Metal Gear Solid 2 OST: "Plant Sneaking Theme"',
            artist: 'Norihiko Hibino & Harry Gregson-Williams',
            url: "https://od.lk/s/OTFfMjgxNDkxNzFf/Metal%20Gear%20Solid%202%20Soundtrack%20-%20Plant%20Sneaking%20Theme.mp3",
            loop: false
        },
        {
            title: 'Tekken 3 OST: "Dr. Bosconovich"',
            artist: 'Nobuyoshi Sano & Keiichi Okabe',
            url: "https://od.lk/s/OTFfMjgxNDkxNzJf/Tekken%203%20Arranged%20OST%20Dr.%20Boskonovitch.mp3",
            loop: false
        },
        {
            title: '"The Concept of Love"',
            artist: 'Hideki Naganuma',
            url: 'https://od.lk/s/OTFfMjgxNDk1OThf/The%20Concept%20of%20Love.mp3',
            loop: false
        },{
            title: '"New Wave Hookers"',
            artist: 'Vestron Vulture',
            url: 'https://od.lk/s/OTFfMjgxNDk1OTlf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20New%20Wave%20Hookers.mp3',
            loop: false
        },{
            title: '"Rust"',
            artist: 'El Huervo',
            url: 'https://od.lk/s/OTFfMjgxNDk2MDBf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20Rust.mp3',
            loop: false
        },{
            title: '"Sexualizer"',
            artist: 'Perturbator',
            url: 'https://od.lk/s/OTFfMjgxNDk2MDFf/Hotline%20Miami%202%20Wrong%20Number%20Soundtrack%20-%20Sexualizer.mp3',
            loop: false
        },
        {
            title: '"Damn Fine Coffee"',
            artist: 'mtbrd',
            url: 'https://od.lk/s/OTFfMjgxNDk2NDRf/mtbrd%20-%20Damn%20Fine%20Coffee.mp3',
            loop: false
        },
    ]}

    const strider = {
        title:"Strider 2: OST",
        shuffle: false,
        caseArt: '/src/assets/images/sample/strider.jpg',
        tapeArt: '/src/assets/images/sample/strider_tape.jpg',
        audioLibrary:[
        {
            title: 'Theme / Mission Select / Mission Briefing"',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNDlf/Strider%20Hiryu%202%20OST%20-%2001%20Theme%2002%20Mission%20Select%2003%20Mission.mp3",
            loop: false
        },
        {
            title: 'Destroy the Terrorists in the Occupied City',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNjVf/Strider%20Hiryu%202%20OST%20-%2008%20Destroy%20the%20Terrorists%20in%20the%20Occupied%20City%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Dash',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNjhf/Strider%20Hiryu%202%20OST%20-%2009%20Dash%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'The Skies of Neo Hong Kong City',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNzBf/Strider%20Hiryu%202%20OST%20-%2010%20The%20Skies%20of%20Neo%20Hong%20Kong%20City%20%28Boss%29.mp3",
            loop: false
        },
        {
            title: 'Pet Dog',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNzFf/Strider%20Hiryu%202%20OST%20-%2011%20Pet%20Dog%20%28Event%29.mp3",
            loop: false
        },
        {
            title: 'Armed Fortress Invasion 1',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNTJf/Strider%20Hiryu%202%20OST%20-%2004%20Armed%20Fortress%20Invasion%201%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Armed Fortress Invasion 2',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNTVf/Strider%20Hiryu%202%20OST%20-%2005%20Armed%20Fortress%20Invasion%202%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Madness Lurking in the Underground Cavern',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNThf/Strider%20Hiryu%202%20OST%20-%2006%20Madness%20Lurking%20in%20the%20Underground%20Cavern%20%28Boss%29.mp3",
            loop: false
        },
        {
            title: 'Dying Phrase',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNjBf/Strider%20Hiryu%202%20OST%20-%2007%20Dying%20Phrase%20%28Event%29.mp3",
            loop: false
        },
        {
            title: 'South Pole Research Facility',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNzRf/Strider%20Hiryu%202%20OST%20-%2012%20South%20Pole%20Research%20Facility%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'The Resurrected Ancient Creature',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyNzZf/Strider%20Hiryu%202%20OST%20-%2013%20The%20Resurrected%20Ancient%20Creature%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Rotating Room',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyODFf/Strider%20Hiryu%202%20OST%20-%2014%20Rotating%20Room%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'The End of All Beings',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyODdf/Strider%20Hiryu%202%20OST%20-%2015%20The%20End%20of%20All%20Beings%20%28Boss%29%20-%20YouTube.mp3",
            loop: false
        },
        {
            title: 'Round Table Conference',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMyOTBf/Strider%20Hiryu%202%20OST%20-%2016%20Round%20Table%20Conference%20%28Event%29.mp3",
            loop: false
        },
        {
            title: 'Pursuit of the Air Battleship 1',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMDJf/Strider%20Hiryu%202%20OST%20-%2017%20Pursuit%20of%20the%20Air%20Battleship%201%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Pursuit of the Air Battleship 2',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMTNf/Strider%20Hiryu%202%20OST%20-%2018%20Pursuit%20of%20the%20Air%20Battleship%202%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Duel on Top of the Escape Ship',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMThf/Strider%20Hiryu%202%20OST%20-%2019%20Duel%20on%20Top%20of%20the%20Escape%20Ship%20%28Boss%29.mp3",
            loop: false
        },
        {
            title: 'Nightmare',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMjBf/Strider%20Hiryu%202%20OST%20-%2020%20Nightmare%20%28Event%29.mp3",
            loop: false
        },
        {
            title: 'The Third Moon',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMjlf/Strider%20Hiryu%202%20OST%20-%2021%20The%20Third%20Moon%20%28Stage%29.mp3",
            loop: false
        },
        {
            title: 'Grand Master',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMzJf/Strider%20Hiryu%202%20OST%20-%2022%20Grand%20Master%20%28Boss%29.mp3",
            loop: false
        },
        {
            title: 'Throne of the God',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMzZf/Strider%20Hiryu%202%20OST%20-%2023%20Throne%20of%20the%20God%20%28Boss%29.mp3",
            loop: false
        },
        {
            title: 'Unexplored Region of El Dorado',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzNDRf/Strider%20Hiryu%20OST%20-%2031%20Unexplored%20Region%20of%20El%20Dorado%20%28Stage%20for%20PS%29.mp3",
            loop: false
        },
        {
            title: 'Coffin',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzNDNf/Strider%20Hiryu%202%20OST%20-%2032%20Coffin%20%28Boss%20for%20PS%29.mp3",
            loop: false
        },
        {
            title: 'Comrade in Arms',
            artist: "Strider 2 OST: Setsuo Yamamoto & Etsuko Yoneda",
            url: "https://od.lk/s/OTFfMzEyNDMzMzhf/Strider%20Hiryu%202%20OST%20-%2030%20Comrade%20in%20Arms%20%28Event%20for%20PS%29.mp3",
            loop: false
        },
    ]}

    const plaza = {
        title:"Hologram Plaza",
        shuffle: false,
        caseArt: '/src/assets/images/sample/holo.jpg',
        tapeArt: '/src/assets/images/sample/holo_tape.jpg',
        audioLibrary:[
        {
            title: 'Elevator Up',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM3Nzhf/Disconscious%20-%20Hologram%20Plaza%20-%2001%20Elevator%20Up.mp3",
            loop: false
        },
        {
            title: 'Enter Through the Lobby',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4MDBf/Disconscious%20-%20Hologram%20Plaza%20-%2002%20Enter%20Through%20the%20Lobby.mp3",
            loop: false
        },
        {
            title: 'Mattress Store',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4MTRf/Disconscious%20-%20Hologram%20Plaza%20-%2003%20Mattress%20Store.mp3",
            loop: false
        },
        {
            title: 'Endless Escalation',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4MjJf/Disconscious%20-%20Hologram%20Plaza%20-%2004%20Endless%20Escalation.mp3",
            loop: false
        },
        {
            title: 'Lunar Food Court',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4MzBf/Disconscious%20-%20Hologram%20Plaza%20-%2005%20Lunar%20Food%20Court.mp3",
            loop: false
        },
        {
            title: 'Shopping Delirium',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4Mzlf/Disconscious%20-%20Hologram%20Plaza%20-%2006%20Shopping%20Delirium.mp3",
            loop: false
        },
        {
            title: 'Fountain Plaza',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4NTNf/Disconscious%20-%20Hologram%20Plaza%20-%2007%20Fountain%20Plaza.mp3",
            loop: false
        },
        {
            title: 'Absent Interlude',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4NTlf/Disconscious%20-%20Hologram%20Plaza%20-%2008%20Absent%20Interlude.mp3",
            loop: false
        },
        {
            title: 'Midnight Specimen',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4Njhf/Disconscious%20-%20Hologram%20Plaza%20-%2009%20Midnight%20Specimen.mp3",
            loop: false
        },
        {
            title: 'Elevator Down',
            artist: 'Disconscious',
            url: "https://od.lk/s/OTFfMzEyNDM4ODNf/Disconscious%20-%20Hologram%20Plaza%20-%2010%20Elevator%20Down.mp3",
            loop: false
        },
    ]}

    const dreamEmulator = {
        title:"Lucy in the Sky with Dynamites",
        shuffle: false,
        caseArt: '/src/assets/images/sample/lsd.jpg',
        tapeArt: '/src/assets/images/sample/lsd_tape.jpg',
        audioLibrary:[
        {
            title: 'Lucy in the Sky with Dynamites',
            artist: 'Osamu Sato',
            url: "https://od.lk/s/OTFfMzEyNjA5MDFf/Osamu%20Sato%20%26%20Out%20Ass%20Mao%20-%20Lucy%20In%20The%20Sky%20With%20Dynamites.mp3",
            loop: false
        },
    ]}

    const snatcher = {
        title:"Snatcher OST",
        shuffle: false,
        caseArt: '/src/assets/images/sample/snatcher.jpg',
        tapeArt: '/src/assets/images/sample/snatcher_tape.jpg',
        audioLibrary:[
        {
            title: 'Team Metal Slave',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwMzJf/01%20Team%20Metal%20Slave.mp3",
            loop: false
        },
        {
            title: 'Bio Hazard (Part 1)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwMzNf/02%20Bio%20Hazard%20Snatcher%20%28Part%20A%29.mp3",
            loop: false
        },
        {
            title: 'Bio Hazard (Part 2)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwMzdf/03%20Bio%20Hazard%20Snatcher%20%28Part%20B%29.mp3",
            loop: false
        },
        {
            title: 'Squeak!!',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwMzhf/04%20Squeak%21%21.mp3",
            loop: false
        },
        {
            title: 'Twilight of Neo Kobe City',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDBf/05%20Twilight%20of%20Neo%20Kobe%20City.mp3",
            loop: false
        },
        {
            title: 'Evil Ripple',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDFf/06%20Evil%20Ripple.mp3",
            loop: false
        },
        {
            title: 'Theme of Tara',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDJf/07%20Theme%20of%20Tara.mp3",
            loop: false
        },
        {
            title: 'Pleasure of Tension',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDNf/08%20Pleasure%20of%20Tension.mp3",
            loop: false
        },
        {
            title: 'Theme of Snatcher (Part 1)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDRf/09%20Theme%20of%20Snatcher%20%28Part%201%29.mp3",
            loop: false
        },
        {
            title: 'Creeping Silence',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDVf/10%20Creeping%20Silence.mp3",
            loop: false
        },
        {
            title: 'Evidence',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDZf/11%20Evidence.mp3",
            loop: false
        },
        {
            title: 'Criminal Omen',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDdf/12%20Criminal%20Omen.mp3",
            loop: false
        },
        {
            title: 'Shocked',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDhf/13%20Shocked.mp3",
            loop: false
        },
        {
            title: 'Endless Pursuer',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNDlf/14%20Endless%20Pursuer.mp3",
            loop: false
        },
        {
            title: 'Danger Dance 1',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTBf/15%20Danger%20Dance...%20and%20Justice%20for%20All%20%28Type%201%29.mp3",
            loop: false
        },
        {
            title: 'Danger Dance 2',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTFf/16%20Danger%20Dance...%20and%20Justice%20for%20All%20%28Type%202%29.mp3",
            loop: false
        },
        {
            title: 'Lament for the Dead',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTJf/17%20Lament%20for%20the%20Death.mp3",
            loop: false
        },
        {
            title: 'Innocent Girl',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTNf/18%20Innocent%20Girl.mp3",
            loop: false
        },
        {
            title: 'Theme of Jaime',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTRf/19%20Theme%20of%20Jaime.mp3",
            loop: false
        },
        {
            title: 'Merry Xmas Neo Kobe City (Jingle Bell 2042)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTVf/20%20Jingle%20Bell%202042.mp3",
            loop: false
        },
        {
            title: 'Decadence Beat (Outside)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTZf/21%20Decadance%20Beat%20%28Outside%29.mp3",
            loop: false
        },
        {
            title: 'Decadence Beat',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTdf/22%20Decadance%20Beat.mp3",
            loop: false
        },
        {
            title: 'The Entrance to Hell (Outside)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNThf/23%20The%20Entrance%20to%20Hell%20%28Outside%29.mp3",
            loop: false
        },
        {
            title: 'The Entrance to Hell',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNTlf/24%20The%20Entrance%20to%20Hell.mp3",
            loop: false
        },
        {
            title: 'Theme of Isabella',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjBf/25%20Theme%20of%20Isabella.mp3",
            loop: false
        },
        {
            title: 'Theme of Snatcher (Part 2)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjFf/26%20Theme%20of%20Snatcher%20%28Part%202%29.mp3",
            loop: false
        },
        {
            title: 'Axia',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjJf/27%20Axia.mp3",
            loop: false
        },
        {
            title: 'Midnight Science (Part 1)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjNf/28%20Midnight%20Science%20%28Part%201%29.mp3",
            loop: false
        },
        {
            title: 'Midnight Science (Part 2)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjRf/29%20Midnight%20Science%20%28Part%202%29.mp3",
            loop: false
        },
        {
            title: 'Amazed',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjVf/30%20Amazed.mp3",
            loop: false
        },
        {
            title: 'Faded Memories',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjZf/31%20Faded%20Memories.mp3",
            loop: false
        },
        {
            title: 'Theme of Snatcher (Part 3)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjdf/32%20Theme%20of%20Snatcher%20%28Part%203%29.mp3",
            loop: false
        },
        {
            title: 'Theme of Katherine (Bathroom)',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjhf/33%20Theme%20of%20Katherine%20%28Bathroom%29.mp3",
            loop: false
        },
        {
            title: 'Theme of Katherine',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNjlf/34%20Theme%20of%20Katherine.mp3",
            loop: false
        },
        {
            title: 'Theme of Junker',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzBf/35%20Theme%20of%20Junker.mp3",
            loop: false
        },
        {
            title: 'Goodbye Harry',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzFf/36%20Goodbye%20Harry.mp3",
            loop: false
        },
        {
            title: 'Blow Up Turbocycle',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzJf/37%20Blow%20Up%20Tricycle.mp3",
            loop: false
        },
        {
            title: 'Morgue',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzRf/38%20Morg.mp3",
            loop: false
        },
        {
            title: 'Spreading Diehard',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzVf/39%20Spreading%20Diehard.mp3",
            loop: false
        },
        {
            title: 'Restoration',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzZf/40%20Restoration.mp3",
            loop: false
        },
        {
            title: 'Theme of Random',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzdf/41%20Theme%20of%20Randam.mp3",
            loop: false
        },
        {
            title: 'Eternal Promise',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwNzlf/42%20Eternal%20Promise.mp3",
            loop: false
        },
        {
            title: 'Beyond Sorrows',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwODBf/43%20Beyond%20Sorrows.mp3",
            loop: false
        },
        {
            title: 'Master of Puppets Among the Disease',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwODFf/44%20Master%20of%20Puppets%20Among%20the%20Disease.mp3",
            loop: false
        },
        {
            title: 'We Have to Struggle for Our Future Against Doubt',
            artist: 'Konami Kukeiha Club',
            url: "https://od.lk/s/OTFfMzEyNjEwODVf/45%20We%20Have%20to%20Struggle%20for%20Our%20Future%20Against%20Our%20Doubt.mp3",
            loop: false
        },
        
    ]}

    const yellowEyes = {
        title:"Ol' Yellow Eyes is Back",
        shuffle: false,
        caseArt: '/src/assets/images/sample/yelloweyes.jpg',
        tapeArt: '/src/assets/images/sample/yelloweyes_tape.jpg',
        audioLibrary:[
        {
            title: 'Time After Time',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MDhf/01_Time_After_Time.mp3",
            loop: false
        },
        {
            title: 'The Very Thought of You',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MDlf/02_The_Very_Thought_Of_You.mp3",
            loop: false
        },
        {
            title: 'More Than You Know',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MTFf/03_More_Than_You_Know.mp3",
            loop: false
        },
        {
            title: 'Toot Toot Tootsie',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MTJf/04_Toot_Toot_Tootsie.mp3",
            loop: false
        },
        {
            title: 'Embraceable You',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MTRf/05_Embraceable_You.mp3",
            loop: false
        },
        {
            title: "It's a Sin to Tell a Lie",
            artist: 'Brent Spiner & Patrick Stewart',
            url: "https://od.lk/s/OTFfMzEyNjA3MThf/06_It_s_a_Sin_To_Tell_A_Lie_.mp3",
            loop: false
        },
        {
            title: 'Long Long Time',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MjBf/07_Long_Long_Time.mp3",
            loop: false
        },
        {
            title: 'Carolina in the Morning',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MjNf/08_Carolina_In_The_Morning.mp3",
            loop: false
        },
        {
            title: 'Marie',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MjZf/09_Marie.mp3",
            loop: false
        },
        {
            title: 'Zing Went the Strings of My Heart',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3Mjlf/10_Zing_Went_The_Strings_Of_My_Heart.mp3",
            loop: false
        },
        {
            title: 'When I Fall in Love',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MzFf/11_When_I_Fall_In_Love.mp3",
            loop: false
        },
        {
            title: 'Goodnight Sweetheart',
            artist: 'Brent Spiner',
            url: "https://od.lk/s/OTFfMzEyNjA3MzNf/12_Goodnight_Sweetheart.mp3",
            loop: false
        },
    ]}

    let collection = [radio404, strider, plaza, dreamEmulator, snatcher, yellowEyes]

    const [prev, setPrev] = useState<number>(collection.length-1)

    const [current, setCurrent] = useState<number>(0)

    const [next,setNext] = useState<number>(current+1)

    const currentSet = [collection[prev],collection[current],collection[next]]

    const handlePrev = () => {
        const lastIndex: number = collection.length - 1

        if (current === 1) {
            setPrev(lastIndex)
            setCurrent(0)
            setNext(1)

        }
        else if (current === 0) {
            setPrev(lastIndex - 1)
            setCurrent(lastIndex)
            setNext(0)
        }
        else if (current === lastIndex){
            setPrev(current-2)
            setCurrent(current-1)
            setNext(lastIndex)
        }
        else {
            setPrev(current-2);
            setCurrent(current-1);
            setNext(current)
        }
    }; 
    
    const handleSelect = () => {
        console.log("tape loaded")
        // console.log(JSON.stringify(collection[current].audioLibrary))
        setJsonAudioLibrary(JSON.stringify(collection[current].audioLibrary))
        setLibraryShuffle(collection[current].shuffle)
        setCaseArt(collection[current].caseArt)
        setTapeArt(collection[current].tapeArt)
        setTapeLoaded(true);
    }; 
    
    const handleNext = () => {
        const lastIndex: number = collection.length - 1

        if (current === lastIndex-1) {
            setPrev(current)
            setCurrent(current+1)
            setNext(0)

        }
        else if (current === lastIndex) {
            setPrev(lastIndex)
            setCurrent(0)
            setNext(1)
        }
        else if (current === 0){
            setPrev(0)
            setCurrent(1)
            setNext(2)
        }
        else {
            setPrev(current);
            setCurrent(current+1);
            setNext(current+2)
        }
    };

    useEffect(() => {
      console.log(currentSet)
    }, [])
    


  return (
    <div className='flex flex-row items-center justify-around h-full w-full bg-white'>
        {currentSet.map((tape, index) => (
            <>
            { index < 1 ? 
                <div key={index} className='w-16 h-fit border-2 rounded-sm bg-black text-white text-center' onClick={()=>handlePrev()}>
                    <img src={tape.caseArt} alt='previous tape' />
                </div> 
            : index == 1 ? 
                <div key={index} className='w-32 h-fit border-2 rounded-sm bg-black text-white text-center' onClick={()=>handleSelect()}>
                    {/* {tape.title} */}
                    <img src={tape.caseArt} alt='currently focused music tape' />
                </div>
            : 
                <div key={index} className='w-16 h-fit border-2 rounded-sm bg-black text-white text-center' onClick={()=>handleNext()}>
                    <img src={tape.caseArt} alt='next tape' />
                </div>
            }
            </>
        )
        )}
    </div>
  )
}
