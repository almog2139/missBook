
import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, onRemove }) {
    // console.log('books', books);
    return (

        <div className="books-continar">
           { books.map(book => {
                return <BookPreview key={book.id} book={book} onRemove={onRemove} />;

                })}
        </div>

    )


}