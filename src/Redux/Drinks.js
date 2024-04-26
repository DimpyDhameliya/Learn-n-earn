import React, { useEffect } from "react";
import { getAllDrinks } from "./DrinkSlice";
import { useDispatch, useSelector } from "react-redux";

function Drinks() {
  
  const { drinks } = useSelector((state) => state.drink);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllDrinks());
  }, []);
  
  return (
    <div className="container  p-5 ">
      
      {
        drinks.map((item, index) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.strDrinkThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.strDrink}</h5>
              <p className="card-text">{item.strInstructions}</p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
