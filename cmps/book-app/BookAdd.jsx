import { bookService } from "../../services/book-service.js";
import { eventBusService } from "../../services/eventBusService.js";
export class BookAdd extends React.Component {

    state = {
        bookSearch: '',
        booksApiFromSearch: []
    };

    refInput = React.createRef();



    onInputChange = (ev) => {//on input change
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ bookSearch: value }, () => console.log(this.state))
        bookService.getNetworkBooks(value).then(books => {
            this.setState({ booksApiFromSearch: books })


        }, () => console.log(this.state.booksApiFromSearch))
    };
    onAddBook = (book) => {
        console.log(book.id);
        bookService.findBook(book.id, this.state.booksApiFromSearch)
        eventBusService.emit('addBook', { type: 'success', txt: `Book ${book.volumeInfo.title} was successfully added`,bookToShow:book.id})

    }



    render() {
        const { booksApiFromSearch } = this.state
        return (
            <div className="book-add">
                <input value={this.state.bookSearch} ref={this.refInput}
                    placeholder="search for a book" type="text" name="bookName"
                    onChange={this.onInputChange} />
                {/* {this.state.booksApiFromSearch&& */}
                <ul className="list-book-from-api">
                    {booksApiFromSearch.map((book, idx) => {
                        // console.log(book);

                        return <li key={book.id}>{book.volumeInfo.title}
                            <button className="add-btn" onClick={() => { this.onAddBook(book) }}>
                                <i className="fa fa-plus-circle"></i>
                            </button>
                        </li>

                    })}
                </ul>
            </div>

        );
    }
}