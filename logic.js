class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Page />
            </div>

        );
    }
}
class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img id="logo" src="https://image.flaticon.com/icons/svg/951/951971.svg" />
                <h1 className="title">My ToDo list</h1>
            </div>
        )
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = "",
            this.state = {
                arrayItem: []
            }
        this.saveItem = this.saveItem.bind(this);
        this.printItem = this.printItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    saveItem(input) {
        this.textInput = input
    }
    printItem() {
        this.state.arrayItem.push(this.textInput.value)
        this.setState({
            arrayItem: this.state.arrayItem
        })
        this.textInput.value = ""
    }
    deleteItem(e) {
        var item = e.target.parentElement
        item.remove();
    }
    render() {
        var result = this.state.arrayItem.map(
            x => <Item handleClick={this.deleteItem} key={`item${x}`} value={x} />
        )

        return (
            <div className="main">
                <div className="container">
                    <input id="text" type="text" placeholder="Add your task" ref={this.saveItem} />
                    <img id="add-btn" onClick={this.printItem} src="https://image.flaticon.com/icons/svg/149/149156.svg" />
                </div>
                <ul>{result}</ul>
                <div className="div"></div>
            </div>
        )
    }
}
class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
        this.checked = this.checked.bind(this)
        this.deleteItem = this.deleteItem.bind(this);
    }
    checked(e) {
        this.setState({
            check: e.target.checked
        })
    }
    deleteItem(e) {
        this.props.handleClick(e);
    }
    render() {
        return (
            <div className={this.state.check ? "done" : "todo"}>

                <li key={this.props.key}>{this.props.value}</li><input className="checkbox" onChange={this.checked} onClick={this.printDoneList} type="checkbox" value={this.props.value}></input><img id="trash" onClick={this.deleteItem} src="https://image.flaticon.com/icons/svg/1214/1214926.svg" />

            </div>
        )
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();