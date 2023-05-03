import {React} from "react";
import './header.css';
import {CartButton} from './CartButton';

function Header(){
    return(
        <>
        <h1 className="mainTitle">Color Me Impressed</h1>
        <CartButton/>
        </>
    )
}

export {Header}