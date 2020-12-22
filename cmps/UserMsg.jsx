import { eventBusService } from "../services/eventBusService.js";

// const { NavLink, withRouter } = ReactRouterDOM;
const { Link } = ReactRouterDOM;


export class UserMsg extends React.Component {

    state = {
        msg: {
            type:'',
            txt:'',
            bookToShow:''
        },
        isShowMsg: false,
        
    }

    componentDidMount() {
        this.unsubscribe = eventBusService.on('addBook', (msg) => {
            this.setState({ msg, isShowMsg: true},()=>console.log(this.state));
            setTimeout(this.onCloseUserMsg, 3000);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCloseUserMsg = () => {
        this.setState({ isShowMsg: false })
    }

    render() {
        const { msg, isShowMsg } = this.state;
        if (!isShowMsg) return null;
        return <section className="user-msg">
            
        
            <button className="btn-close-modal" onClick={this.onCloseUserMsg}><i className="fa fa-window-close"></i></button>
            {msg.type === 'success' && <div className="success">
                {msg.txt}
                <Link to={`/book/${this.state.msg.bookIdToShow}`}>
                Check it Out
             </Link>
                </div>}
            {msg.type === 'error' && <div className="error">{msg.txt}</div>}
            
        </section>
    }
}

