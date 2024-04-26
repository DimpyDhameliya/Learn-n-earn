import React from "react";
import MovieCard from "./components/MoviesCard";
import { movies } from "./data";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import UseReducer from "./Hooks/UseReducer";
import UserForm from "./CRUD/UserForm";
import Users from "./CRUD/Users";
import NumberComp from "./Redux/NumberComp";
import DrinkSlice from "./Redux/DrinkSlice";
import Drinks from "./Redux/Drinks";

function App() {
  return (
    // <div className="d-flex gap-3 container justify-content-center align-items-center">

    // {movies.map((item, index) => {
    //   return (
    //    <MovieCard
    //        name={item.name}
    //        ratings={item.ratings}
    //        poster={item.imgURL}
    //     />
    //   );
    //})}
    //</div>

    //<Form/>
    <>
      {/* <Navbar /> */}
      {/* <UseReducer />  */}
      {/* <Routes>
         <Route path="/login" element={<SignIn />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>  */}

      {/* <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
      </Routes> */}
      <Drinks />
    </>
  );
}

export default App;
