import React from 'react';
import PageDefault from '../../components/pageDefault/PageDefault';
import ImgDoces from '../../assets/doces-1.jpeg';
import {FaArrowRight} from 'react-icons/fa'
import './Homepage.css';

export default function Homepage(){
    return(
        <PageDefault>
            <div className="home__container">
                <FaArrowRight className="home__arrow"/>
                <input id="home-open__aside" type="checkbox"/>
                <aside className="produtos__lista">
                    <ul>
                        <li>Salgados</li>
                        <li>Doces</li>
                        <li>Bebidas</li>
                        <li>Bolos</li>
                        <li>Tortas</li>
                        <li>Pizzas</li>
                    </ul>
                </aside>
                <div className="home__produtos">
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                    <div className="home__produto">
                        <img src={ImgDoces} alt="Doce" />
                        <div>
                            <p>Docinhos Variados</p>
                            <p>R$: 10,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageDefault>
    )
}