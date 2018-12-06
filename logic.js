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
            <div className="degrade">
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
    }
    saveItem(input) {
        this.textInput = input
    }

    printItem() {
        this.state.arrayItem.push(this.textInput.value)
        this.setState({
            arrayItem: this.state.arrayItem
        })
    }
    render() {
        var result = this.state.arrayItem.map(
            x => <Item key={`item${x}`} value={x} />
        )
        return (
            <div>
                <div className="page"> </div>
                <div className="image">
                    <input id="text1" type="text" placeholder="+ Add your task" ref={this.saveItem} />
                    <button onClick={this.printItem}>Add</button>
                    <ul>{result}</ul>
                </div>
            </div >
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
    }
    checked(e) {
        this.setState({
            check: e.target.checked
        })
    }
    render() {
        return (
            <div className={this.state.check ? "text" : ""}>

                <li key={this.props.key}>{this.props.value}</li><input onChange={this.checked} type="checkbox"></input>

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
