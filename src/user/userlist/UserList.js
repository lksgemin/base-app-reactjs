import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../services/UserService';
import LoadingIndicator  from '../../common/LoadingIndicator';
import './UserList.css';
import NotFound from '../../common/NotFound';
import ServerError from '../../common/ServerError';
import { List, Button } from 'antd';


class UserList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: false,
          users: null
      }
      this.loadAllUsers = this.loadAllUsers.bind(this);
  }

  loadAllUsers(){
    this.setState({
      isLoading: true
    });

    getAllUsers()
    .then(response => {
      this.setState({
        users: response,
        isLoading: false
      });
    }).catch(error => {
      if(error.status === 404) {
            this.setState({
                notFound: true,
                isLoading: false
            });
        } else {
            this.setState({
                serverError: true,
                isLoading: false
            });        
        }
    });
  }

  componentDidMount() {
      this.loadAllUsers();
  }
  
  render() {
     if(this.state.isLoading) {
          return <LoadingIndicator />;
      }

      if(this.state.notFound) {
          return <NotFound />;
      }

      if(this.state.serverError) {
          return <ServerError />;
      }
    return (
      <div className="userlist">
          { 
              this.state.users ? (
                  <List
                    itemLayout="horizontal"
                    dataSource={this.state.users}
                    renderItem={item => (
                      <List.Item actions={[<Link to={`/user/${item.id}`}><Button type="primary" icon="edit">Edit</Button></Link>]}>
                        <List.Item.Meta
                          title={<a href="https://ant.design">{item.name}</a>}
                          description={item.email}
                        />
                      </List.Item>
                    )}
                  />  
              ): null               
          }
      </div>
    )
  }
}

export default UserList;