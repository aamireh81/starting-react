import React from "react";
import './App.css';
import pokemon from "./pokemon.json";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

const PokemonRow = ({ pokemon1 }) => (
  <tr key={pokemon1.id}>
    <td>{pokemon1.name.english}</td>
    <td>{pokemon1.type.join(",")}</td>
  </tr>

);

// PokemonRow.propTypes={
//   pokemon1: PropTypes.shape({
//     name:PropTypes.shape({
//     english: PropTypes.string
//   }),
//   type:PropTypes.arrayOf(PropTypes.string),

//   }),
// };

function App() {
  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem"
    }

    }>

      <h1 className="title">Pokemon Search</h1>
      <table width="1000" >
        <thead>
          <tr>
            <th>Nmae</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0,20).map((pokemon) => (
            <PokemonRow pokemon1={pokemon} key={pokemon.id} /> 

     
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
