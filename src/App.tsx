// hooks
import { useState } from 'react'

// css imports
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fontsource/bungee"
import "@fontsource/bungee-hairline"
import "@fontsource/permanent-marker"
import './App.css'

// component imports
import Radio from './components/radio/Radio'
import { Routes, Route, NavLink } from 'react-router-dom'

// page imports
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import About from './pages/about/About'

function App() {

  const [radioUnlocked,setRadioUnlocked] = useState<boolean>(true)

  const hiddenLinks: string = "h-16"

  const shownLinks: string = "h-72"

  // const deskLinks: string = 'hidden lg:w-[50vw] lg:max-w-fit lg:h-fit lg:flex lg:justify-evenly lg:pr-4 lg:text-xl text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'

  const deskLinkStyle: string = "mx-6 transition ease-in-out hover:text-bill-yellow"

  // const mobLinks: string = 'lg:hidden flex flex-col text-xl py-4 text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'
  
  const [navState,setNavState] = useState(hiddenLinks)


  const toggle = () => {
    navState === hiddenLinks ? setNavState(shownLinks) : setNavState(hiddenLinks)
  }

  

  return (
    
      <>
        <div className='bungee w-screen fixed flex flex-col lg:flex-row justify-center items-between lg:justify-between lg:items-center lg:h-20 bg-bill-cyan shadow-md z-[9999]'>
        
          <div className='w-fit h-20 lg:h-full pl-3 pt-1 lg:pl-4 lg:pb-1 flex flex-col items-center select-none'>
            <p className='text-3xl lg:text-4xl text-bill-yellow drop-shadow-[0_7px_1px_#ff2273ff]'>BOOTLEG BILL'S</p>
            <p className={`marker text-lg lg:text-2xl`}>Unofficial Audio Rarities</p>
          </div>
        
          {/* mobile view */}
        
          <div className='lg:hidden w-full items-center flex px-4'>
        
            <div id="overflow" className={`${navState} w-full overflow-hidden transition-height ease duration-[700ms]`}>
        
              <div className='w-full flex items-center justify-between'>
                <button className='h-12 w-12 flex justify-center items-center border-solid border-2 border-slate-600 shadow-[0_0_5px_black] rounded pt-1' onClick={() => toggle()}>
                  <div className='absolute left-0 h-12 w-12 text-slate-600'>
                    <i className={`absolute text-slate-600 bi-eject-fill z-30 ${navState === hiddenLinks ? 'opacity-0' : 'opacity-1' } transition-opacity ease duration-300`} style={{fontSize: '2em'}}></i>
                    <i className={`absolute text-slate-600 bi-eject z-40`} style={{fontSize: '2em'}}></i>
                  </div>
                </button>
                <div>
                  <i className='bi-cart4'></i>
                </div>
              </div>
        
        
              <div className='lg:hidden flex flex-col text-xl py-4 text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'>
                <NavLink to={"/"} className='mx-6 my-1'>Home</NavLink>
                <NavLink to={"/store"} className='mx-6 my-1'>Store</NavLink>
                <div className='mx-6 my-1'>Services</div>
                <NavLink to={"/about"} className='mx-6 my-1'>About</NavLink>
                <div className='mx-6 my-1'>Contact</div>
                <div className='mx-6 my-1'>Log In</div>
              </div>
        
            </div>
        
          </div>
        
          {/* desktop view */}
        
          <div className='hidden lg:w-[60vw] lg:max-w-fit lg:h-fit lg:flex lg:flex-wrap lg:justify-evenly lg:pr-4 lg:text-xl text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'>
            <NavLink to={"/"} className={deskLinkStyle}>Home</NavLink>
            <NavLink to={"/store"} className={deskLinkStyle}>Store</NavLink>
            <div className={deskLinkStyle}>Services</div>
            <NavLink to={"/about"} className={deskLinkStyle}>About</NavLink>
            <div className={deskLinkStyle}>Contact</div>
            <div className={deskLinkStyle}>Log In</div>
          </div>
          
        </div>

        <Radio radioUnlocked={radioUnlocked} setRadioUnlocked={setRadioUnlocked}></Radio>
        
        <div id='routing' className='pt-36 lg:pt-20 min-h-screen flex justify-center min-w-fit'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </>
  
  )
}

export default App
