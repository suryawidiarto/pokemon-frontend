import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PopupRelease = (props) => {
  const myPokemonData = useSelector((state) => state.myPokemonData);
  const { myDetailPokemon, releaseStatus } = myPokemonData;

  return releaseStatus && releaseStatus.isPrime === "false" ? (
    <Dialog
      open={props.showAlert}
      onClose={() => props.closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Release Failed</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <strong>Aw... Sorry :(</strong> <br /> You failed to release{" "}
          <strong>{myDetailPokemon.pokemon.name}</strong>. Don't worry you can try release it again
          ! <br /> Your Random Number : <strong>{releaseStatus.randNumber}</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.closeHandler()} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  ) : releaseStatus && releaseStatus.isPrime === "true" ? (
    <Dialog
      open={props.showAlert}
      onClose={() => props.closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Release Successful</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <strong>Congratulation !</strong> <br /> You have successfully release{" "}
          <strong>{myDetailPokemon.pokemon.name}</strong>. They now get freedom ! <br /> Your Random
          Number : <strong>{releaseStatus.randNumber}</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.closeHandler()} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <></>
  );
};

export default PopupRelease;
