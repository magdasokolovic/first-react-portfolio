import React from "react"
import {BooksData} from './BooksData'
import Book from './Book'


export default function Books() {
    const bookContainerStyle={
        display: 'flex',
        flexWrap: 'no-wrap',
        width: '1280px',
        minWidth: '1280px',
        margin: '60px 0',
        
    }
    return (
            <div className='container'>
                <div className='wrapper'> 
 
            
                    <p>Books that I recommend:</p>
                    <div className="books-container" style={bookContainerStyle}>
                        {BooksData.map(book => (
                            <Book 
                                key={book.id}
                                Author={book.author}
                                Title={book.title}
                                Image={book.image}
                            />
                        ))}
                    </div>
                </div>
        </div>
           
           
    )
    
  }