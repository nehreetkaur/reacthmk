import React from "react";
import SearchBar from "../components/SearchBar";
import API from "../utils/api.js";

class TableData extends React.Component {
    state = {
        results:[],
        search: ""
    }

    coponentDidMount() {
        API.ApiSearch().then(res => {
            this.setState({ results: res.data.results })
            //console.log(this.state.results)
            console.log(res.data.results);
        }).catch(err => console.log(err))
    }
    render(){
        return <>
        <p>TESTING ITS LOAD OR NOT</p>
        </>;
    }
}


// to get results from api in to results array


//to get the input from searchbar
