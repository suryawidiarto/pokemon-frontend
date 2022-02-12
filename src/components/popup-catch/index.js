import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PopupCatch = (props) => {
  const myPokemonData = useSelector((state) => state.myPokemonData);
  const { catchPokemon } = myPokemonData;

  const [pokemonName, setPokemonName] = useState("");

  const pokemonAddHandler = (pokemon_name) => {
    props.addPokemonHandler(pokemon_name);
  };

  useEffect(() => {
    if (catchPokemon) {
      setPokemonName(catchPokemon.pokemonName);
    }
  }, [catchPokemon]);

  return catchPokemon && catchPokemon.catch === "failed" ? (
    <Dialog
      open={props.showAlert}
      onClose={() => props.closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Catch Failed</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <strong>Aw... Sorry :(</strong> <br /> You fail catching{" "}
          <strong>{catchPokemon.pokemonName}</strong>. Don't worry you can try catching it again !{" "}
          <br /> Your Catch Probability :{" "}
          <strong>{(catchPokemon.probability * 100).toFixed(2)}%</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.closeHandler()} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  ) : catchPokemon && catchPokemon.catch === "success" ? (
    <Dialog
      open={props.showAlert}
      onClose={() => props.closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Catch Successful</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <strong>Congratulation !</strong> <br /> You have successfully catching{" "}
          <strong>{catchPokemon.pokemonName}</strong>. Now you can give it a name ! <br /> Your
          Catch Probability : <strong>{(catchPokemon.probability * 100).toFixed(2)}%</strong>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="pokemonName"
          label="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => pokemonAddHandler(pokemonName)} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <></>
  );
};

export default PopupCatch;
