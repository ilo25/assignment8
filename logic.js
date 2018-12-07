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
                <img id="logo" src="https://image.flaticon.com/icons/svg/951/951971.svg"/>
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
                arrayItem: [],
                done: []
            }
        this.saveItem = this.saveItem.bind(this);
        this.printItem = this.printItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // this.printDoneList = this.printDoneList.bind(this);
    }
    saveItem(input) {
        this.textInput = input
    }

    printItem() {
        this.state.arrayItem.push(this.textInput.value)
        this.setState({
            arrayItem: this.state.arrayItem,
        })
        this.textInput.value = ""
    }
    // printDoneList(event) {
    //     this.state.done.push(event.target.value)
    //     this.setState({
    //         done: this.state.done
    //     })
    //     console.log(this.state.done)
    // }
    deleteItem(e){
        var item = e.target.parentElement
        item.remove();
    }
    render() {
        var result = this.state.arrayItem.map(
            x => <Item handleClick={this.printDoneList} handleClick2={this.deleteItem} key={`item${x}`} value={x} />
        )

        var done = this.state.done.map(
            x => <Item key={`item${x}`} value={x} />
        )
        return (
            <div className="main">
                <div className="page"> </div>
                <div className="image">
                <div className="container">
                    <input id="text1" type="text" placeholder="Add your task" ref={this.saveItem}  />
                    <img id="add-btn" onClick={this.printItem} src="https://image.flaticon.com/icons/svg/149/149156.svg"/>
                    </div>
                    <ul>{result}</ul>
                </div>
                <div className="done">
                    <ul>
                        {done}
                    </ul>
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
    //    this.printDoneList = this.printDoneList.bind(this)
       this.deleteItem = this.deleteItem.bind(this);
    }
    checked(e) {
        this.setState({
            check: e.target.checked
        })
    }
//    printDoneList(){
//        this.props.handleClick(); 
//    }
   deleteItem(e){
    this.props.handleClick2(e); 
}
    render() {
        return (
            <div className={this.state.check ? "text" : "todo"}>

                <li key={this.props.key}>{this.props.value}</li><input className="checkbox" onChange={this.checked} onClick={this.printDoneList} type="checkbox" value={this.props.value}></input><img id="trash" onClick={this.deleteItem} src="https://image.flaticon.com/icons/svg/1214/1214926.svg"/>

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