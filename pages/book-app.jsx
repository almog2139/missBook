import { bookService } from "../services/book-service.js";
import { BookList } from "../cmps/book-app/book-list.jsx"
import { BookFilter } from "../cmps/book-app/book-filter.jsx"
// import { BookDetails } from "../cmps/book-app/book-details.jsx"
export class BookApp extends React.Component {
    state = {
        books: [],
        // selectedBook: null,
        filterBy: {
            title: '',
            fromPrice: 0,
            toPrice: 500,
        },
        currPage: 'books'
        // filter: ''
    }
    componentDidMount() {
        this.loadBooks();
    }
    loadBooks = () => {
         bookService.query().then(books=>{
              console.log('books', books);
        this.setState({ books })
         });
       
    }
    getBooksToShow = () => {
        const { books } = this.state;
        return books;
    }
    onRemovePet = (petId) => {
        bookService.remove(petId).then(() => {
            this.loadBooks()
        })
    }
    // onSelectBook = (book) => {
     
    //     this.setState({ selectedBook: book ,currPage:'modal'})

    // }
    // onUnSelectBook=()=>{
    //     this.setState({ selectedBook: null ,currPage:'books'})
    // }
    getBookForDisplay = () => {
        const { filterBy } = this.state;
        //Another way of doing filter
        // const filterRegex = new RegExp(filterBy.name,'i');
        // return this.state.pets.filter(pet=> filterRegex.test(pet.name));

        return this.state.books.filter(book => {

            return book.title.toLowerCase().includes(filterBy.title.toLowerCase());
        }).filter(book => {
            return book.listPrice.amount >= filterBy.fromPrice && book.listPrice.amount <= filterBy.toPrice
        })
    
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    render() {
        const booksToShow = this.getBooksToShow()
        const { selectedBook } = this.state
        return (
            <section className="book-app">
        
                {/* <BookFilter onSetFilter={this.onSetFilter} /> */}
                {this.state.currPage === 'books' &&<BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />}
                {this.state.currPage === 'books' && <BookList books={this.getBookForDisplay()}  onRemove={this.onRemovePet}/>}
                {/* {this.state.selectedBook && this.state.currPage === 'modal' &&<BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} />} */}
            </section>
        );
    }



}