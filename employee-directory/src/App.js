import React from "react";
import Header from "./components/Header";
import "./styles/Table.css"

import SearchBar from "./components/SearchBar";
import API from "./utils/api.js";

class App extends React.Component {
    state = {
        results:[],
        search: ""
    }

    componentDidMount() {
      console.log("testing");
        API.ApiSearch().then(res => {
            this.setState({ results: res.data.results })
            //console.log(this.state.results)
            console.log(res.data.results);
        }).catch(err => console.log(err))
    }
    render(){
        return <>
         <div className="container">
        <Header />     
        <SearchBar/>
        <div className="table-responsive">
          <table className="table">
            
            <tr>
              <th>Image</th>
              <th>FirstNmae</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          
          
           

        {this.state.results.map(person=>{
          return <tbody key={person.email}>  
          <tr>
            <td><img src={person.picture.thumbnail} className ="rounded-circle" alt="thumbnail"></img></td>
            <td>{person.name.first}</td>
            
            <td>{person.name.last}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
            </tr>  
          
            </tbody> 
                         
        })}
          
          </table>
        
      </div>
     
        </div>
        
        </>;
    }
}



export default App;


