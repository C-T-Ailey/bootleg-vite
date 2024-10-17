// hooks
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { decode } from 'jwt-js-decode'

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
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ProductModal from './pages/store/ProductModal'

function App() {

  const location = useLocation();

  const previousLocation = location.state?.previousLocation

  const [modalOpen, setModalOpen] = useState<Boolean>(false)

  const [user, setUser] = useState<string>("none")

  const [navPath, setNavPath] = useState<string>("/")

  useEffect(() => {
    if (!!localStorage.getItem("radioUnlocked")){
      setRadioUnlocked(true)
    };

    // getKirk('62e3ab42aa1145047e6c0bab');

  }, [])

  useEffect(()=>{
    console.log(navPath)
    authenticate()
  },[navPath])
  

  const authenticate = async () => {
    let token = localStorage.getItem("token");
    if (!!token) {
      let now = Math.floor(new Date().getTime() / 1000);
      let decodeToken = decode(token).payload;
      const sessionDuration = decodeToken.exp - decodeToken.iat;
      const lastLogin = Math.floor(decodeToken.user.timestamp);
      const timeDifference = now - lastLogin;
      const userStillActive = timeDifference < sessionDuration;
        // console.log("Authenticated user", userId)
        // console.log("time between lastLogin and now:", now - lastLogin)
        // console.log("is this user still valid?", timeDifference < sessionDuration)
      if (!!userStillActive){
          let res = await axios.post(`http://localhost:4000/auth/refresh`, {data:token});
          localStorage.setItem("token", res.data.token);
          setUser("yes")
          console.log("user session refreshed");
      }
      else {
        localStorage.removeItem("token");
        setUser("none");
        console.log("session invalid, cleared token and user")
      }
    }
  }
  
  const clearLogin = () => {
    localStorage.removeItem("token");
    setUser("none")
  }

  // const getKirk = async (id: string) => {
  //   try {
  //     let res = await axios.get(`http://localhost:4000/product/detail?id=${id}`);
  //     console.log(res.data.product)
  //     console.log("Kirk!")
  //   } catch (err) {
  //     console.log(err);
  //     console.log("Oops! The DB isn't connected.")
  //   }
  // }  
  
  const [radioUnlocked,setRadioUnlocked] = useState<boolean>(false)
  
  const hiddenLinks: string = "h-16"

  const shownLinks: string = "h-72"

  // const deskLinks: string = 'hidden lg:w-[50vw] lg:max-w-fit lg:h-fit lg:flex lg:justify-evenly lg:pr-4 lg:text-xl text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'

  const deskLinkStyle: string = "mx-6 transition ease-in-out hover:text-bill-yellow"

  // const mobLinks: string = 'lg:hidden flex flex-col text-xl py-4 text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'
  
  const [navState,setNavState] = useState(hiddenLinks)


  const toggle = () => { 
    navState === hiddenLinks ? setNavState(shownLinks) : setNavState(hiddenLinks)
  }

  const resetRadio = () => {
    setRadioUnlocked(false)
    localStorage.removeItem('radioUnlocked')
    setTimeout(() => {
      window.location.reload()
    }, 100);
  }

  return (
    
      <>
        <div className='bungee w-screen fixed flex flex-col lg:flex-row justify-center items-between lg:justify-between lg:items-center lg:h-20 bg-bill-cyan shadow-md z-[9999]'>

          {/* <div className='w-12 h-12 absolute top-[90vh] right-10 bg-bill-magenta rounded-xl flex items-center justify-center text-2xl' onClick={()=>resetRadio()}>X</div> */}
        
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
                <NavLink to={"/"} className='mx-6 my-1' onClick={()=>toggle()}>Home</NavLink>
                <NavLink to={"/store"} className='mx-6 my-1' onClick={()=>toggle()}>Store</NavLink>
                <div className='mx-6 my-1' onClick={()=>toggle()}>Services</div>
                <NavLink to={"/about"} className='mx-6 my-1' onClick={()=>toggle()}>About</NavLink>
                <div className='mx-6 my-1' onClick={()=>toggle()}>Contact</div>
                <div className='mx-6 my-1' onClick={()=>toggle()}>Log In</div>
              </div>
        
            </div>
        
          </div>
        
          {/* desktop view */}
        
          <div className='hidden lg:w-[60vw] lg:max-w-fit lg:h-fit lg:flex lg:flex-wrap lg:justify-evenly lg:pr-4 lg:text-xl text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'>
            <NavLink to={"/"} className={deskLinkStyle} onClick={() => setNavPath("/")}>Home</NavLink>
            <NavLink to={"/store"} className={deskLinkStyle} onClick={() => setNavPath("/store")}>Store</NavLink>
            <div className={deskLinkStyle}>Services</div>
            <NavLink to={"/about"} className={deskLinkStyle} onClick={() => setNavPath("/about")}>About</NavLink>
            <div className={deskLinkStyle}>Contact</div>
            {user !== "none" ? 
            <></>
            :
            <NavLink to={"/login"} className={deskLinkStyle} onClick={() => setNavPath("/login")}>Log In</NavLink>
            }
            {user !== "none" ? 
            <NavLink to={"/"} className={deskLinkStyle} onClick={() => clearLogin()}>Sign Out</NavLink>
            :
            <></>
            }
          </div>
          
        </div>

        <Radio radioUnlocked={radioUnlocked} setRadioUnlocked={setRadioUnlocked}></Radio>
        
        <div id='routing' className='pt-36 lg:pt-20 min-h-screen max-w-screen flex justify-center'>
          <Routes location={previousLocation || location}>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<Store/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
            <Route path='/signup' element={<Signup user={user} setUser={setUser}/>} />
          </Routes>
          {previousLocation && (
            <Routes>
              <Route path='/store/product/:id' element={<ProductModal />} />
            </Routes>
          )}
        </div>
      </>
  
  )
}

export default App
