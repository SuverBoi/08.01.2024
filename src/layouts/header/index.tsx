import Link from 'next/link';
import './header.css';
import Search from '@/img/Search.png';
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header className="header">
        <Link href="/" className="logo">Logo</Link>

        
        <svg xmlns="http://www.w3.org/2000/svg" width="346" height="42" viewBox="0 0 346 42" fill="none">
          <path d="M0 15C0 6.71573 6.71573 0 15 0H331C339.284 0 346 6.71573 346 15V27C346 35.2843 339.284 42 331 42H15C6.71573 42 0 35.2843 0 27V15Z" fill="#EBEBEB" />
          <foreignObject x="10" y="7" width="24" height="24">
          <Image src={Search} alt="Search-icon" width="24" height="24" />
          </foreignObject>
          <foreignObject x="45" y="10" width="290" height="20">
          <input type="text" style={{ width: '100%', height: '100%' }} className="input" />
          </foreignObject>
        </svg>

        


        <select id="tovar" name="tovar" className='tovar'>
        <option value="tovar">Товари</option>
        <option value=".....">.....</option>
        <option value=".....">.....</option>
        <option value=".....">.....</option>
        </select> 


        <li>
        <Link href="/about" className='about'>Про нас</Link>
        </li>        

        <li>
        <Link href="/FAQ" className='about'>Контакти</Link>
        </li>  

        <select id="tovar" name="tovar" className='tovar'>
        <option value="tovar">UA</option>
        <option value=".....">.....</option>
        <option value=".....">.....</option>
        <option value=".....">.....</option>
        </select> 

        <li>
        <Link href="/open" className='open'>Вхід</Link>
        </li> 

        

        
      </header>
    </>
  );
};

export default Header;