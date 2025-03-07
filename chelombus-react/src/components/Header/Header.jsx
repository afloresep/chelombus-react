import React from 'react';
import './Header.css';
import headerImg from '../../assets/headerImg.png';

function Header() {
  return (
    <div className='header'>
      <div className="text-container">
        <div className='header-text'>
          <div className='title'>
            <h2>Chelombus</h2>
          </div>
          <b> Chelombus is an interactive visualization platform designed to intuitively explore large-scale chemical databases.
             By organizing billions of molecules into chemically meaningful clusters and visualizing them via 
             hierarchical Topological Maps (TMAPs), Chelombus enables rapid and insightful navigation across multiple popular chemical datasets.
          </b>
          <div className='discover-btn'>READ THE PAPER</div>
        </div>
      </div>
      
      <div className='header-img'>
        <img src={headerImg} alt="" />
      </div>
      
    </div>
  )
}

export default Header