import {Component} from 'react'

const userList = [
  {
    sno: 1,
    customer_name: 'John Doe',
    age: 25,
    phone: '123-456-7890',
    location: 'New York',
    created_at: '2023-01-01T02:30:00.000Z',
    created_date: '2022-12-31T18:30:00.000Z',
    created_time: '08:00:00',
  },
  {
    sno: 2,
    customer_name: 'Jane Smith',
    age: 30,
    phone: '987-654-3210',
    location: 'Los Angeles',
    created_at: '2023-01-02T05:00:00.000Z',
    created_date: '2023-01-01T18:30:00.000Z',
    created_time: '10:30:00',
  },
  {
    sno: 3,
    customer_name: 'Alice Johnson',
    age: 22,
    phone: '555-123-4567',
    location: 'Chicago',
    created_at: '2023-02-28T10:15:00.000Z',
    created_date: '2023-02-27T18:30:00.000Z',
    created_time: '15:45:00',
  },
  {
    sno: 4,
    customer_name: 'Bob White',
    age: 28,
    phone: '111-222-3333',
    location: 'San Francisco',
    created_at: '2023-03-15T06:30:00.000Z',
    created_date: '2023-03-14T18:30:00.000Z',
    created_time: '12:00:00',
  },
  {
    sno: 5,
    customer_name: 'Emily Davis',
    age: 35,
    phone: '444-555-6666',
    location: 'Miami',
    created_at: '2023-04-05T13:00:00.000Z',
    created_date: '2023-04-04T18:30:00.000Z',
    created_time: '18:30:00',
  },
  {
    sno: 6,
    customer_name: 'David Brown',
    age: 26,
    phone: '333-444-5555',
    location: 'Denver',
    created_at: '2023-05-20T08:45:00.000Z',
    created_date: '2023-05-19T18:30:00.000Z',
    created_time: '14:15:00',
  },
  {
    sno: 7,
    customer_name: 'Sophie Wilson',
    age: 32,
    phone: '666-777-8888',
    location: 'Austin',
    created_at: '2023-06-30T03:00:00.000Z',
    created_date: '2023-06-29T18:30:00.000Z',
    created_time: '08:30:00',
  },
  {
    sno: 8,
    customer_name: 'Daniel Miller',
    age: 27,
    phone: '222-333-4444',
    location: 'Boston',
    created_at: '2023-07-12T10:30:00.000Z',
    created_date: '2023-07-11T18:30:00.000Z',
    created_time: '16:00:00',
  },
  {
    sno: 9,
    customer_name: 'Olivia Harris',
    age: 31,
    phone: '999-000-1111',
    location: 'Phoenix',
    created_at: '2023-08-25T06:15:00.000Z',
    created_date: '2023-08-24T18:30:00.000Z',
    created_time: '11:45:00',
  },
  {
    sno: 10,
    customer_name: 'Zachary Turner',
    age: 29,
    phone: '777-888-9999',
    location: 'Seattle',
    created_at: '2023-12-10T04:15:00.000Z',
    created_date: '2023-12-09T18:30:00.000Z',
    created_time: '09:45:00',
  },
  {
    sno: 11,
    customer_name: 'Liam Johnson',
    age: 28,
    phone: '555-111-2222',
    location: 'Chicago',
    created_at: '2023-12-01T04:00:00.000Z',
    created_date: '2023-11-30T18:30:00.000Z',
    created_time: '09:30:00',
  },
  {
    sno: 12,
    customer_name: 'Ella Anderson',
    age: 24,
    phone: '777-222-3333',
    location: 'Los Angeles',
    created_at: '2023-12-02T09:15:00.000Z',
    created_date: '2023-12-01T18:30:00.000Z',
    created_time: '14:45:00',
  },
  {
    sno: 13,
    customer_name: 'Mason Davis',
    age: 35,
    phone: '999-333-4444',
    location: 'Dallas',
    created_at: '2023-12-03T05:45:00.000Z',
    created_date: '2023-12-02T18:30:00.000Z',
    created_time: '11:15:00',
  },
  {
    sno: 14,
    customer_name: 'Ava Wilson',
    age: 31,
    phone: '111-444-5555',
    location: 'Miami',
    created_at: '2023-12-04T12:30:00.000Z',
    created_date: '2023-12-03T18:30:00.000Z',
    created_time: '18:00:00',
  },
  {
    sno: 15,
    customer_name: 'Noah Taylor',
    age: 27,
    phone: '888-555-6666',
    location: 'Seattle',
    created_at: '2023-12-05T07:00:00.000Z',
    created_date: '2023-12-04T18:30:00.000Z',
    created_time: '12:30:00',
  },
  {
    sno: 16,
    customer_name: 'Oliver Turner',
    age: 33,
    phone: '222-777-8888',
    location: 'Phoenix',
    created_at: '2023-12-11T05:30:00.000Z',
    created_date: '2023-12-10T18:30:00.000Z',
    created_time: '11:00:00',
  },
  {
    sno: 17,
    customer_name: 'Ava Miller',
    age: 26,
    phone: '111-888-9999',
    location: 'New York',
    created_at: '2023-12-12T08:45:00.000Z',
    created_date: '2023-12-11T18:30:00.000Z',
    created_time: '14:15:00',
  },
  {
    sno: 18,
    customer_name: 'Liam Wilson',
    age: 30,
    phone: '999-000-1111',
    location: 'Austin',
    created_at: '2023-12-13T04:00:00.000Z',
    created_date: '2023-12-12T18:30:00.000Z',
    created_time: '09:30:00',
  },
  {
    sno: 19,
    customer_name: 'Sophia Brown',
    age: 32,
    phone: '555-111-2222',
    location: 'Boston',
    created_at: '2023-12-14T11:15:00.000Z',
    created_date: '2023-12-13T18:30:00.000Z',
    created_time: '16:45:00',
  },
  {
    sno: 20,
    customer_name: 'Emma Harris',
    age: 29,
    phone: '333-666-7777',
    location: 'San Francisco',
    created_at: '2023-12-10T12:15:00.000Z',
    created_date: '2023-12-09T18:30:00.000Z',
    created_time: '17:45:00',
  },
  {
    sno: 21,
    customer_name: 'Ethan Anderson',
    age: 29,
    phone: '777-111-2222',
    location: 'San Francisco',
    created_at: '2023-12-21T05:15:00.000Z',
    created_date: '2023-12-20T18:30:00.000Z',
    created_time: '10:45:00',
  },
  {
    sno: 22,
    customer_name: 'Olivia Davis',
    age: 32,
    phone: '888-222-3333',
    location: 'Los Angeles',
    created_at: '2023-12-22T10:00:00.000Z',
    created_date: '2023-12-21T18:30:00.000Z',
    created_time: '15:30:00',
  },
  {
    sno: 23,
    customer_name: 'Alexander Taylor',
    age: 27,
    phone: '555-333-4444',
    location: 'New York',
    created_at: '2023-12-23T05:45:00.000Z',
    created_date: '2023-12-22T18:30:00.000Z',
    created_time: '11:15:00',
  },
  {
    sno: 24,
    customer_name: 'Sophia Wilson',
    age: 31,
    phone: '999-444-5555',
    location: 'Miami',
    created_at: '2023-12-24T12:30:00.000Z',
    created_date: '2023-12-23T18:30:00.000Z',
    created_time: '18:00:00',
  },
  {
    sno: 25,
    customer_name: 'Logan Miller',
    age: 26,
    phone: '111-555-6666',
    location: 'Seattle',
    created_at: '2023-12-25T07:00:00.000Z',
    created_date: '2023-12-24T18:30:00.000Z',
    created_time: '12:30:00',
  },
  {
    sno: 26,
    customer_name: 'Mia Turner',
    age: 33,
    phone: '222-777-8888',
    location: 'Phoenix',
    created_at: '2023-12-31T05:30:00.000Z',
    created_date: '2023-12-30T18:30:00.000Z',
    created_time: '11:00:00',
  },
  {
    sno: 27,
    customer_name: 'Lucas Miller',
    age: 26,
    phone: '111-888-9999',
    location: 'Austin',
    created_at: '2024-01-01T08:45:00.000Z',
    created_date: '2023-12-31T18:30:00.000Z',
    created_time: '14:15:00',
  },
  {
    sno: 28,
    customer_name: 'Emma Wilson',
    age: 30,
    phone: '999-000-1111',
    location: 'Boston',
    created_at: '2024-01-02T04:00:00.000Z',
    created_date: '2024-01-01T18:30:00.000Z',
    created_time: '09:30:00',
  },
  {
    sno: 29,
    customer_name: 'Jackson Brown',
    age: 32,
    phone: '555-111-2222',
    location: 'Denver',
    created_at: '2024-01-03T11:15:00.000Z',
    created_date: '2024-01-02T18:30:00.000Z',
    created_time: '16:45:00',
  },
  {
    sno: 30,
    customer_name: 'Ava Smith',
    age: 25,
    phone: '666-333-4444',
    location: 'Portland',
    created_at: '2024-01-04T07:30:00.000Z',
    created_date: '2024-01-03T18:30:00.000Z',
    created_time: '13:00:00',
  },
  {
    sno: 31,
    customer_name: 'Grace Turner',
    age: 29,
    phone: '777-111-2222',
    location: 'San Francisco',
    created_at: '2024-01-10T05:15:00.000Z',
    created_date: '2024-01-09T18:30:00.000Z',
    created_time: '10:45:00',
  },
  {
    sno: 32,
    customer_name: 'Henry Davis',
    age: 32,
    phone: '888-222-3333',
    location: 'Los Angeles',
    created_at: '2024-01-11T10:00:00.000Z',
    created_date: '2024-01-10T18:30:00.000Z',
    created_time: '15:30:00',
  },
  {
    sno: 33,
    customer_name: 'Madison Taylor',
    age: 27,
    phone: '555-333-4444',
    location: 'New York',
    created_at: '2024-01-12T05:45:00.000Z',
    created_date: '2024-01-11T18:30:00.000Z',
    created_time: '11:15:00',
  },
  {
    sno: 34,
    customer_name: 'Isaac Wilson',
    age: 31,
    phone: '999-444-5555',
    location: 'Miami',
    created_at: '2024-01-13T12:30:00.000Z',
    created_date: '2024-01-12T18:30:00.000Z',
    created_time: '18:00:00',
  },
  {
    sno: 35,
    customer_name: 'Evelyn Miller',
    age: 26,
    phone: '111-555-6666',
    location: 'Seattle',
    created_at: '2024-01-14T07:00:00.000Z',
    created_date: '2024-01-13T18:30:00.000Z',
    created_time: '12:30:00',
  },
  {
    sno: 36,
    customer_name: 'James Turner',
    age: 33,
    phone: '222-777-8888',
    location: 'Phoenix',
    created_at: '2024-01-20T05:30:00.000Z',
    created_date: '2024-01-19T18:30:00.000Z',
    created_time: '11:00:00',
  },
  {
    sno: 37,
    customer_name: 'Chloe Miller',
    age: 26,
    phone: '111-888-9999',
    location: 'Austin',
    created_at: '2024-01-21T08:45:00.000Z',
    created_date: '2024-01-20T18:30:00.000Z',
    created_time: '14:15:00',
  },
  {
    sno: 38,
    customer_name: 'Benjamin Wilson',
    age: 30,
    phone: '999-000-1111',
    location: 'Boston',
    created_at: '2024-01-22T04:00:00.000Z',
    created_date: '2024-01-21T18:30:00.000Z',
    created_time: '09:30:00',
  },
  {
    sno: 39,
    customer_name: 'Lillian Brown',
    age: 32,
    phone: '555-111-2222',
    location: 'Denver',
    created_at: '2024-01-23T11:15:00.000Z',
    created_date: '2024-01-22T18:30:00.000Z',
    created_time: '16:45:00',
  },
  {
    sno: 40,
    customer_name: 'Carter Smith',
    age: 25,
    phone: '666-333-4444',
    location: 'Portland',
    created_at: '2024-01-24T07:30:00.000Z',
    created_date: '2024-01-23T18:30:00.000Z',
    created_time: '13:00:00',
  },
  {
    sno: 41,
    customer_name: 'Abigail Turner',
    age: 29,
    phone: '777-111-2222',
    location: 'San Francisco',
    created_at: '2024-02-01T05:15:00.000Z',
    created_date: '2024-01-31T18:30:00.000Z',
    created_time: '10:45:00',
  },
  {
    sno: 42,
    customer_name: 'Christopher Davis',
    age: 32,
    phone: '888-222-3333',
    location: 'Los Angeles',
    created_at: '2024-02-02T10:00:00.000Z',
    created_date: '2024-02-01T18:30:00.000Z',
    created_time: '15:30:00',
  },
  {
    sno: 43,
    customer_name: 'Charlotte Taylor',
    age: 27,
    phone: '555-333-4444',
    location: 'New York',
    created_at: '2024-02-03T05:45:00.000Z',
    created_date: '2024-02-02T18:30:00.000Z',
    created_time: '11:15:00',
  },
  {
    sno: 44,
    customer_name: 'Gabriel Wilson',
    age: 31,
    phone: '999-444-5555',
    location: 'Miami',
    created_at: '2024-02-04T12:30:00.000Z',
    created_date: '2024-02-03T18:30:00.000Z',
    created_time: '18:00:00',
  },
  {
    sno: 45,
    customer_name: 'Hailey Miller',
    age: 26,
    phone: '111-555-6666',
    location: 'Seattle',
    created_at: '2024-02-05T07:00:00.000Z',
    created_date: '2024-02-04T18:30:00.000Z',
    created_time: '12:30:00',
  },
  {
    sno: 46,
    customer_name: 'Elijah Turner',
    age: 33,
    phone: '222-777-8888',
    location: 'Phoenix',
    created_at: '2024-02-10T05:30:00.000Z',
    created_date: '2024-02-09T18:30:00.000Z',
    created_time: '11:00:00',
  },
  {
    sno: 47,
    customer_name: 'Scarlett Miller',
    age: 26,
    phone: '111-888-9999',
    location: 'Austin',
    created_at: '2024-02-11T08:45:00.000Z',
    created_date: '2024-02-10T18:30:00.000Z',
    created_time: '14:15:00',
  },
  {
    sno: 48,
    customer_name: 'Jack Wilson',
    age: 30,
    phone: '999-000-1111',
    location: 'Boston',
    created_at: '2024-02-12T04:00:00.000Z',
    created_date: '2024-02-11T18:30:00.000Z',
    created_time: '09:30:00',
  },
  {
    sno: 49,
    customer_name: 'Avery Brown',
    age: 32,
    phone: '555-111-2222',
    location: 'Denver',
    created_at: '2024-02-13T11:15:00.000Z',
    created_date: '2024-02-12T18:30:00.000Z',
    created_time: '16:45:00',
  },
  {
    sno: 50,
    customer_name: 'Owen Smith',
    age: 25,
    phone: '666-333-4444',
    location: 'Portland',
    created_at: '2024-02-14T07:30:00.000Z',
    created_date: '2024-02-13T18:30:00.000Z',
    created_time: '13:00:00',
  },
]

class UserDetails extends Component {
  state = {
    user: userList,
    searchInput: '',
    sortOrder: null,
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
