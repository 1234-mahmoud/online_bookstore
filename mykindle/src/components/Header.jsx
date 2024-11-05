import React,{useEffect,useState} from 'react'
import logo from '../components/imgs/books-book-svgrepo-com.svg'
import list from '../components/imgs/list-arrow-down-minimalistic-svgrepo-com.svg'
export default function Header() {
  const [showLinks,setShowLinks] = useState(false);

  const SHOWLINKS=()=>{
    setShowLinks(!showLinks)
  }
  
  //--------------------------------------------------------------
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures this runs only once when the component mounts
      
  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <div className="logo">
        <img src={logo} alt="" />
        <span>Kindle</span>
      </div>
      <div className={showLinks?'link_style':'links'}>
        <a href="">HOME</a>
        <a href="">OVERVIEW</a>
        <a href="">AUTHOR</a>
        <a href="">PRICE</a>
        <a href="">TESTIMONIALS</a>
        <a href="">CONTACT</a>
      </div>
      <div className="list_cont">
      <img className='list' src={list} alt="" onClick={SHOWLINKS}/>
      </div>
    </header>
  )
}
