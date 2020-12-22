
import { bookService } from "../../services/book-service.js";
import { ReviewAdd } from "./review-add.jsx";
import { LongTxt } from "./long-txt.jsx";
// import { storageService } from "./service-storage.js";
import { ReviewDetails } from "./review-details.jsx"
const { Link } = ReactRouterDOM;



export class BookDetails extends React.Component {
    state = {
        isLongTxtShown: false,
        book: null
    }
    componentDidUpdate(prevProps) {
        console.log('UPDATE', this.props);
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }
    loadBook() {
        const { bookId } = this.props.match.params;
        bookService.getById(bookId).then(book => {
            this.setState({ book });
        });
    }

    componentDidMount() {
        const { bookId } = this.props.match.params;
        bookService.getById(bookId).then(book => {
            this.setState({ book });
        });
    }


    checkPageCount = () => {
        var book = this.state.book
        let text;
        if (book.pageCount < 100) text = 'Light Reading'
        else if (book.pageCount > 200) text = 'Decent Reading'
        else if (book.pageCount > 500) text = 'Long reading'
        return text
    }
    checkPublishedDate = () => {
        var book = this.state.book
        let currYear = new Date().getFullYear()
        let year;
        if (currYear - book.publishedDate < 1) year = 'New!'
        else if (currYear - book.publishedDate > 10) year = 'Veteran Book'
        return year
    }
    checkPrice = () => {
        var book = this.state.book
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 20) return 'green'
    }
    toggleTxt = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }
    onCloseModal = () => {
        this.props.history.push('/book');
    }
    addReview = (reviewToAdd) => {
        console.log(reviewToAdd);
        bookService.save(this.state.book, reviewToAdd).then(book => this.setState({ book }))
        // this.loadBook()
    }


    render() {
        if (!this.state.book) return <div>Loading..</div>;
        var book = this.state.book //state
        const { isLongTxtShown } = this.state
        let btnText = isLongTxtShown ? 'show less' : 'show more';
        // let txtButton = isLongTxtShown ? 'show less' : 'show more'
        const { reviews } = this.state.book

        return (

            <div className="modal">
                {book.listPrice.isOnSale && <img className="sale-img" src="../assets/img/sale.png" />}
                <h1>title: {book.title}</h1>
                <h2>subtitle: {book.subtitle}</h2>
                <h3>{this.checkPageCount()}</h3>
                <img src={book.thumbnail} alt="" />
                <p>authors: {book.authors}</p>
                <p>publishedDate: {book.publishedDate} </p>
                <p>pageCount: {book.pageCount} type:{this.checkPublishedDate()}</p>

                <LongTxt text={book.description} isLongTxtShown={isLongTxtShown} />
                <button onClick={this.toggleTxt}>{btnText}</button>
                <p>description:</p>
                <p>categories: {book.categories}</p>
                <p className={this.checkPrice()}>{book.listPrice.amount}<i className={`fa fa-${bookService.getCurrency(book.listPrice.currencyCode)}-sign`}></i></p>
                <button onClick={this.getReview}> add review</button>
                <ReviewAdd addReview={this.addReview} />
                {/* <ReviewDetails book={book}/> */}
                {reviews && <ReviewDetails book={book} />}
                <Link to={`/book/${bookService.getPrevBook(book.id)}`}>
                    Prev Book
                 </Link>
                <Link to={`/book/${bookService.getNextBook(book.id)}`}>
                    Next Book
                 </Link>




                <button className="btn-close-modal" onClick={this.onCloseModal}><i className="fa fa-window-close"></i></button>

            </div>
        )

    }

}
