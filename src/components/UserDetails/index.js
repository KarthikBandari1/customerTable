import {Component} from 'react'

class UserDetails extends Component {
  state = {
    user: userList,
    searchInput: '',
    sortOrder: null,
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch('http://localhost:3000/customers', options)
      if (response.ok) {
        const fetchedData = await response.json()
        this.setState({
          user: fetchedData,
        })
      } else {
        console.error('Failed to fetch data:', response.statusText)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  searchChanged = event => {
    this.setState({searchInput: event.target.value})
  }

  search = event => {
    event.preventDefault()
    const {user, searchInput} = this.state
    const updatedUserList = user.filter(obj =>
      obj.customer_name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({user: updatedUserList})
  }

  clearSearch = () => {
    this.setState({user: userList, searchInput: ''})
  }

  sortUserList = (sortBy, sortOrder) => {
    const {user} = this.state
    const sortedList = [...user].sort((a, b) => {
      let result = 0
      if (a[sortBy] < b[sortBy]) {
        result = -1
      } else if (a[sortBy] > b[sortBy]) {
        result = 1
      }
      return sortOrder === 'asc' ? result : -result
    })

    this.setState({user: sortedList, sortOrder})
  }

  changedSort = event => {
    const {sortOrder} = this.state
    this.setState(
      {sortOrder: event.target.value},
      this.sortUserList('created_at', sortOrder),
    )
  }

  render() {
    const {user, searchInput, sortOrder} = this.state
    return (
      <div>
        <h1>Customer Data</h1>
        <div>
          <form>
            <input
              type="search"
              value={searchInput}
              onChange={this.searchChanged}
            />
            <button type="submit" onClick={this.search}>
              Search
            </button>
            <button type="button" onClick={this.clearSearch}>
              Clear Search
            </button>
            <label htmlFor="sort">Sort by</label>
            <select id="sort" value={sortOrder} onChange={this.changedSort}>
              <option value="null">None</option>
              <option value="asc">New to Old</option>
              <option value="desc">Old to New</option>
            </select>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Customer Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {user.map(customer => (
              <tr key={customer.sno}>
                <td>{customer.sno}</td>
                <td>{customer.customer_name}</td>
                <td>{customer.age}</td>
                <td>{customer.phone}</td>
                <td>{customer.location}</td>
                <td>{customer.created_date}</td>
                <td>{customer.created_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default UserDetails
