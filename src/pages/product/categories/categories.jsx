import React from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';
import  ChilliPaste  from './Chilli-Paste.png';
import  GingerPaste  from "./Ginger-Paste.png";
import  MangoPickle from "./Mango-Pickle.png";
import  DalRasoi from "./Dal-Rasoi_.png";
export const Categories = () => {
    const navigate = useNavigate();
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="items">
        <div className="buttons" onClick={() => navigate("/category/CHILLI")}>
          <div>
            <img src={ChilliPaste} />
          </div>
          <h2>Chilli pastes</h2>
        </div>
        <div className="buttons" onClick={() => navigate("/category/GINGER")}>
          <div>
            <img src={GingerPaste} />
          </div>
          <h2>Ginger pastes</h2>
        </div>
        <div className="buttons" onClick={() => navigate("/category/PICKLE")}>
          <div>
            <img src={MangoPickle} />
          </div>
          <h2>Pickles</h2>
        </div>
        <div className="buttons" onClick={() => navigate("/category/OTHERS")}>
          <div>
            <img src={DalRasoi} />
          </div>
          <h2>Others</h2>
        </div>
      </div>
    </div>
  );
}
