import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

function Add() {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState("");

    const handleForm = () => {
        if (quantity >= 0) {
            const booksData = JSON.parse(localStorage.getItem('books'));
    
            if (booksData != null) {
                localStorage.setItem('books', JSON.stringify([
                    ...booksData,
                    { title: title, quantity: parseInt(quantity), id: uuidv4() }
                ]));
            }
            else {
                localStorage.setItem('books', JSON.stringify([
                    { title: title, quantity: parseInt(quantity), id: uuidv4() }
                ]));
            }

            setError("");

            Swal.fire({
                icon: "success",
                title: "Le livre a bien été enregistré",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else
        {
            setError("La quantité doit être supérieure ou égale à 10");
        }
    }

  return (
    <>
        <div>Ajout d'un livre</div>
        <p style={{color: "red"}}>{error}</p>
        <form>
            <label>Titre du livre : </label>
            <input type='text' placeholder='Titre du livre' value={title} onChange={(e) => setTitle(e.target.value)} />
            <br></br>
            <label>Quantité en stock : </label>
            <input value={quantity} type='number' placeholder='Stock' onChange={(e) => setQuantity(e.target.value)} />
            <br></br>
            <button type='button' onClick={() => {
                handleForm()
            }}>Ajouter</button>
        </form>
    </>
  )
}

export default Add