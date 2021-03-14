import React from "react";
import Header from "./components/Header";
import "./styles/Table.css"

import SearchBar from "./components/SearchBar";
import API from "./utils/api.js";

class App extends React.Component {
  state = {
    results: [],               //   hold filter results
    search: "",
    sortAction:"ASC",
    
    allResults:[]                //  for read only.
  }

  componentDidMount() {
    console.log("testing");
    API.ApiSearch().then(res => {
      this.setState({ results: res.data.results ,allResults:res.data.results})
      //console.log(this.state.results)
      console.log(res.data.results);
    }).catch(err => console.log(err))
  }




// for input in searchbar
handleInputChange=event=>{
  //  if(event.target==="search"){
    let searchResult=event.target.value.toLowerCase();
    console.log(searchResult);
    

   let newEmployees =this.state.allResults.filter(person=>`${person.name.first.toLowerCase()} ${person.name.last.toLowerCase()}`.includes(searchResult))
   
if (!searchResult){
  this.setState({
    search:searchResult,

    results:this.state.allResults
    
  })

}
else{
  this.setState({
    search:searchResult,

    results:newEmployees
    
  })

}



  }



// sort by firstname
// sortName=()=>{
//   const finalSorted=this.state.results.sort()=>{

//   }
// }
sortName=()=>{
  const sortedEmp=this.state.results.sort((a,b)=>{
    if(a.name.first < b.name.first){
      return -1;
    }
    if (a.name.first > b.name.first){
      return 1
    }
    
      return 0
    
  });
  if(!this.stateAction){
    this.setState({sortAction:this.state.allResults})
  }
  else{
    this.setState({results:sortedEmp})
  }
} 







// render function.
  render() {
    return <>
      <div className="container">
        <Header />
        <SearchBar handleInputChange={this.handleInputChange}/>
        <button className="btn"onClick={this.sortName}>ASC-ORDER</button>
        <div className="table-responsive">
          <table className="table">
            <thead>
            
              <th>Image</th>
              <th>FirstNmae</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
        
            </thead>
           


            {this.state.results.map(person => {
              return <tr key={person.email}>
            
                  <td><img src={person.picture.thumbnail} className="circle" alt="thumbnail"></img></td>
                  <td>{person.name.first}</td>

                  <td>{person.name.last}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                </tr>

           

            })}

          </table>

        </div>


      </div>



    </>;
  }
}



export default App;


