import React from 'react';
import Header from '../../components/header/Header'

export default function PageDefault({children}){
    return(
        <>
            <Header />
            {children}
        </>
    )        
}