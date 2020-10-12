import React from 'react';
import { Component } from 'react';


class TopBar extends Component{

    render(){
        return(

            <div className="container">
                <div className="p-3 mb-2 bg-primary text-white col-lg-12">New Requester Task <span style={{marginLeft:"100px"}}>Worker Task</span></div>
                <div className="col-lg-12">
                    <span>Select Task Type</span>:  <input onClick={()=>{this.props.handleClick(1)}} style={{marginLeft:"5%"}} type="radio" name="work_type"/> <span style={{fontSize:"18px"}}>Choice Task</span> <input  onClick={()=>{this.props.handleClick(2)}}  style={{marginLeft:"5%"}} type="radio" name="work_type"/> Decision Making Task <input  onClick={()=>{this.props.handleClick(3)}}  style={{marginLeft:"5%"}} type="radio" name="work_type"/> Sentence Level Task
                </div>
            </div>

        )
    }
}

class Describe extends Component{
    constructor(props){
        super(props)
       this.state = {
        title:null,
        date:null,
        description:null
       }

    }

    Updates(event,property,data){
        console.log(data.target.value)
        this.setState({[event]:data.target.value},(res)=>{
            this.props.descriptionUpdate(this.state)

        })


    }


    render(){
        return(
            // style={{borderWidth: 2, borderColor: 'black', borderStyle:'solid'}}
            <div style={{marginTop:"2%"}} className="container">
                <div className="p-3 mb-2 bg-primary text-white col-lg-12">Describe your Worker to your task</div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <label>Title</label>
                            </div>

                            <div className="col-lg-8">
                                <input  onChange={this.Updates.bind(this,"title",true)} placeholder="Title" type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <label>Description</label>
                            </div>

                            <div className="col-lg-8">
                                <input  onChange={this.Updates.bind(this,"description",true)}  placeholder="Description" type="text" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <label>Date</label>
                            </div>

                            <div className="col-lg-8">
                                <input  onChange={this.Updates.bind(this,"date",true)} placeholder="Title" type="date" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class TaskSetup extends Component{
    constructor(props){
        super(props)
       this.state = {
        what:1,
        headephone:false,
        HardDisk:false,
        place:1,
        sentence:null

       }

    }
    checkBoxSeen(property,e){
        console.log(property)
       this.setState({[property]: e.target.checked},(res)=>{
           console.log(this.state)
        this.setState({what: this.props.what},(res)=>{
            this.props.descriptionUpdateTask(this.state)
        })
       })
    }

    RadioButtonSeen(property,e){

        this.setState({[property]: e.target.value},(res)=>{
            this.setState({what: this.props.what},(res)=>{
            this.props.descriptionUpdateTask(this.state)
            })
        })
     }


     Describe(property,e){

        this.setState({[property]: e.target.value},(res)=>{
            this.setState({what: this.props.what},(res)=>{
                this.props.descriptionUpdateTask(this.state)
                })
        })
     }

    render(){

       if(this.props.what===1){

        return(

            <div style={{marginTop:"2%"}} className="container">
             <div className="p-3 mb-2 bg-primary text-white col-lg-12">Setting Up Your Task</div>
             <div className="col-lg-12">
                 <span>Needed Tools:</span> <span style={{marginLeft:"5%"}}>Head Phones</span> <input onChange={e => this.checkBoxSeen("headephone",e)} style={{marginLeft:"5%"}} type="checkbox"/> <span style={{marginLeft:"5%"}}>HardDisk:</span><input onChange={e => this.checkBoxSeen("HardDisk",e)} style={{marginLeft:"5%"}} type="checkbox"/>
             </div>
            </div>

        )
       }else if(this.props.what===2){

        return(

            <div style={{marginTop:"2%"}} className="container">
            <div className="p-3 mb-2 bg-primary text-white col-lg-12">Setting Up Your Task</div>
            <div className="col-lg-12">
                <span>I will do the job IN :</span> <span style={{marginLeft:"5%"}}>In My Place</span> <input onChange={e => this.RadioButtonSeen("place",e)} value="1" style={{marginLeft:"5%"}} name="place" type="radio"/> <span style={{marginLeft:"5%"}}>In your Place:</span><input onChange={e => this.RadioButtonSeen("place",e)} value="2"  name="place" style={{marginLeft:"5%"}} type="radio"/>
            </div>
           </div>

        )
       }else if(this.props.what===3){

        return(

            <div style={{marginTop:"2%"}} className="container">
            <div className="p-3 mb-2 bg-primary text-white col-lg-12">Setting Up Your Task</div>
            <div className="col-lg-12">
            <span>Please Describe what your going to do :</span> <textarea onChange={e => this.Describe("sentence",e)} cols="58" rows="2"></textarea>
            </div>
           </div>

        )
       }else{
        return(

            <div style={{marginTop:"2%"}} className="container">
            <div className="p-3 mb-2 bg-primary text-white col-lg-12">Setting Up Your Task</div>
            <div className="col-lg-12">
            <center>Please select Work Type</center>
            </div>
           </div>

        )
       }
    }
}

class Footer extends Component{
    constructor(props){
        super(props)
       this.state = {
        master:null,
        award:null,
        number:null
       }

    }

    Updates(event,property,data){
        console.log(data.target.value)
        this.setState({[event]:data.target.value},(res)=>{
            this.props.changes(this.state)
        })


    }


    UpdatesRadio(event,property,data){
        console.log(data.target.value)
        this.setState({[event]:property},(res)=>{
            this.props.changes(this.state)
        })


    }



    render(){
        return(
            <div style={{marginTop:"2%"}} className="container">
            <div className="p-3 mb-2 bg-primary text-white col-lg-12">Work Requirement </div>
            <div className="form-group">
            <div className="row">
                <div className="col-lg-2">
                    <label>Require Master Workers</label>
                </div>

                <div className="col-lg-8">
                 <span style={{marginLeft:"5%"}}>yes</span>
                  <input onChange={this.UpdatesRadio.bind(this,"master",true)}  name="master"  style={{marginLeft:"5%"}} type="radio"/>

                  <span style={{marginLeft:"5%"}}>No:</span>
                  <input onChange={this.UpdatesRadio.bind(this,"master",false)} state='false' name="master" style={{marginLeft:"5%"}} type="radio"/>

                </div>
            </div>
        </div>

        <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <label>Reword Per Person</label>
                            </div>

                            <div className="col-lg-8">
                                <input onChange={this.Updates.bind(this,"award",true)} placeholder="Reward Per Person" type="number" className="form-control"></input>
                            </div>
                        </div>
            </div>

            <div className="form-group">
                        <div className="row">
                            <div className="col-lg-2">
                                <label>Number of Workers</label>
                            </div>

                            <div className="col-lg-8">
                                <input onChange={this.Updates.bind(this,"number",true)} placeholder="Number of workers" type="number" className="form-control"></input>
                            </div>
                        </div>
                    </div>
        </div>
        )
    }
}

export { TopBar,Describe,TaskSetup,Footer};

