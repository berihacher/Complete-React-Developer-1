import React from 'react'
import './App.css';
import { SearchBox } from './components/search/search-box.component';
import { CardList } from './components/card-list/card-list.component';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            keywords: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(v) {

        this.setState({ keywords: v }, () => { console.log('search', this.state) })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users: users }))
    }
    render() {
        const { users, keywords } = this.state;
        let filteredUsers = users.filter(u => u.name.includes(keywords))
        return (
            <div>
                <SearchBox handleSearch={this.handleSearch} keywords={this.state.keywords} />
                <CardList users={filteredUsers} />
            </div>
        )
    }
}
export default App;
