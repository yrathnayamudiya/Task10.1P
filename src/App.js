import React from 'react';
import { Component } from 'react';
import {TopBar,Describe,TaskSetup,Footer} from './components/top'
import Axios from 'axios';
import $ from 'jquery'
import './App.css';

class App extends Component {
 constructor(props){
   super(props)
  this.state = {
    todo:0,
    title:null,
    description:null,
    date:null,
    sentence:null,
    headphone:false,
    hardDisk:false,
    myplace:false,
    yourplace:false,
    what:false,
    master:false,
    reward:0,
    number:0

}


}

descriptionUpdateTask(changes){
  console.log(changes)
  if(changes.what===1){
    this.setState({headphone:changes.headephone},(res)=>{
      this.setState({hardDisk:changes.HardDisk},(res)=>{
        this.setState({what:changes.what})
      })
    })

  }else if(changes.what===2){
    this.setState({myplace:changes.place},(res)=>{
      this.setState({what:changes.what})
    })

  }else if(changes.what===3){
    this.setState({sentence:changes.sentence},(res)=>{
      this.setState({what:changes.what})
    })
  }
}

descriptionUpdate(changes){
  this.setState({title:changes.title},(res)=>{
    this.setState({date:changes.date},(res)=>{
      this.setState({description:changes.description},(res)=>{
        console.log(this.state);
      })
    })
  })
}

footerUpdate(changes){
  this.setState({master:changes.master},(res)=>{
    this.setState({reward:changes.award},(res)=>{
      this.setState({number:changes.number},(res)=>{
        console.log(this.state);
      })
    })
  })
}

PrintAllUpdate(){
console.log(this.state)
Axios.post("http://localhost:3001/api/insert",this.state).then((res)=>{
  if(res.data.affectedRows===1){
    $("#success").html("Data storing successful");
    $("#success").show('slow');
    setTimeout(()=>{
      $("#success").hide('slow');
    },3000)
  }else{
    $("#error").html("Data storing Failed  ");
    $("#error").show('slow');
    setTimeout(()=>{
      $("#error").hide('slow');
    },3000)
  }
})
}


  render(){
    return (
      <div className="App row">
       <div className="container">
       <div style={{paddingTop:"2%"}} className="col-lg-12">
        <div id="error" style={{display:"none"}} className="alert alert-danger">

        </div>

        <div id="success" style={{display:"none"}} className="alert alert-success">

        </div>
        </div>
       </div>
        <TopBar handleClick={(res)=>{
          this.setState({todo:res})
        }}/>
        <Describe descriptionUpdate={this.descriptionUpdate.bind(this)}/>
        <TaskSetup descriptionUpdateTask={this.descriptionUpdateTask.bind(this)} what={this.state.todo}/>
        <Footer changes={this.footerUpdate.bind(this)}/>
        <div style={{padding:"3%"}} className="col-lg-12">
        <div className="container">
        <button className="btn btn-success col-lg-12" onClick={this.PrintAllUpdate.bind(this)}>Check</button>
        </div>
        </div>
      </div>
    )
  }
}




export default App;
