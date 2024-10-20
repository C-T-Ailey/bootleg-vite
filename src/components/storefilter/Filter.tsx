// imports

import React from "react";

interface FilterProps {
  selectedSource: string;
  setSelectedSource: React.Dispatch<React.SetStateAction<string>>;
  selectedFormat: string;
  setSelectedFormat: React.Dispatch<React.SetStateAction<string>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filter({selectedSource, setSelectedSource, selectedFormat, setSelectedFormat, selectedSort, setSelectedSort}:FilterProps) {

  const buttonStyle: string = 'bungee p-1 text-bill-magenta transition ease-in-out duration-400 hover:bg-bill-magenta hover:text-white border-bill-magenta disabled:bg-bill-magenta disabled:text-white'
  const leftEndButtonStyle: string = 'border-y-2 border-l-2 rounded-l-md'
  const midButtonStyle: string = 'border-y-2 border-l-2'
  const rightEndButtonStyle: string = 'border-y-2 border-x-2 rounded-r-md'
  const categoryStyle: string = 'mb-2'

  return (
    <div id="filter-wrapper" className="text-center">
      <div id='toggle'>Filter</div>
      <div id="filter-source" className={categoryStyle}>
        <button className={`${buttonStyle} ${leftEndButtonStyle}`} disabled={selectedSource === 'All'} onClick={() => setSelectedSource("All")}>All</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedSource === 'Film/TV'} onClick={() => setSelectedSource("Film/TV")}>Film/TV</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedSource === 'Video Game'} onClick={() => setSelectedSource("Video Game")}>Video Game</button>
        <button className={`${buttonStyle} ${rightEndButtonStyle}`} disabled={selectedSource === 'Original Release'} onClick={() => setSelectedSource("Original Release")}>Original</button>
      </div>
      <div id="filter-format" className={categoryStyle}>
        <button className={`${buttonStyle} ${leftEndButtonStyle}`} disabled={selectedFormat === 'All'} onClick={() => setSelectedFormat("All")}>All</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedFormat === 'Cassette'} onClick={() => setSelectedFormat("Cassette")}>Cassette</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedFormat === 'Vinyl'} onClick={() => setSelectedFormat("Vinyl")}>Vinyl</button>
        <button className={`${buttonStyle} ${rightEndButtonStyle}`} disabled={selectedFormat === 'Apparel'} onClick={() => setSelectedFormat("Apparel")}>Apparel</button>
      </div>
      <div id="filter-sort" className={categoryStyle}>
        <button className={`${buttonStyle} ${leftEndButtonStyle}`} disabled={selectedSort === 'Alpha AZ'} onClick={()=>{setSelectedSort("Alpha AZ")}}>Name<br/>(A-Z)</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedSort === 'Alpha ZA'} onClick={()=>{setSelectedSort("Alpha ZA")}}>Name<br/>(Z-A)</button>
        <button className={`${buttonStyle} ${midButtonStyle}`} disabled={selectedSort === 'Date Desc'} onClick={()=>{setSelectedSort("Date Desc")}}>Added<br/>(Recent)</button>
        <button className={`${buttonStyle} ${rightEndButtonStyle}`} disabled={selectedSort === 'Date Asc'} onClick={()=>{setSelectedSort("Date Asc")}}>Added<br/>(Oldest)</button>
      </div>
    </div>
  )
}
