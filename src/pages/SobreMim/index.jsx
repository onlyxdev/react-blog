import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './SobreMim.module.css';
import TittleDocs from 'components/TittleDocs';
import BigCards from 'components/BigCards';

function SobreMim () {

    return(
        <>
           <TittleDocs/>
           <BigCards temp='1' img='./assets/minha-foto.jpg'/>
           <BigCards temp='2'/>
           <BigCards temp='3'/>
        </>
    );
}

export default SobreMim;