import React, { useEffect, useState } from 'react'

function Home() {
    const [listBooks, setListBooks] = useState([]);

    useEffect(() => {
        setListBooks(JSON.parse(localStorage.getItem("books")));
    }, [])

    const addQuantity = (book) => {
        setListBooks(
            listBooks.map((e) => 
                book.id === e.id ? { ...e, quantity: parseInt(e.quantity) + 1} : e,
            ),
        );
    }

    const removeQuantity = (book) => {
        if (book.quantity != 0) {
            setListBooks(
                listBooks.map((e) => 
                    book.id === e.id ? { ...e, quantity: parseInt(e.quantity) - 1} : e,
                ),
            );
        }
    }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(listBooks));
    }, [listBooks])

  return (
    <>
        <div>Accueil</div>
        {listBooks != null ? listBooks.map((book, i) => (
            <div key={`${book.title} - ${book.quantity.toString()} - ${i}`}>
                <div className={book.quantity > 0 ? "available" : "unavailable"}>
                    <p>{book.title}</p>
                    <p>{book.quantity}</p>
                    <button onClick={() => {removeQuantity(book)}}>-</button>
                    <span>  </span>
                    <button onClick={() => addQuantity(book)}>+</button>
                </div>
                <hr></hr>
            </div>
        )) : (<h3>Aucun livre</h3>)}
    </>
  )
}

export default Home