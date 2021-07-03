import React from 'react';
import './App.css';
import Question from './data';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Questions from './data';
import image from "./cup.jpg"

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:Question[0],
            choosenValues:[],
            submitted:false,
            marksScored:0,
            correctQuestions:0,
            wrongQuestions:0,
            alert:false,
        }
    }
    componentDidMount(){
        let arr = [];
        for( let i=0; i < Questions.length; i++ ){
            arr.push("");
        }
        this.setState({choosenValues:arr});
    }
    prev = () => {
        let cur = this.state.current["sno"];
        cur = cur - 1;
        this.setState({current:Question[cur-1]});
    }
    next = () => {
        const cur = this.state.current["sno"];
        this.setState({current:Question[cur]});
    }
    onclick = (val) => {
        let values = this.state.choosenValues;
        values[this.state.current["sno"]-1] = val;
        this.setState({choosenValues:values});
    }
    onsubmit = () => {
        let marksScored = 0, correctQuestions = 0, wrongQuestions = 0;
        for( let i=0; i < Questions.length; i++ ){
            if(this.state.choosenValues[i] == Questions[i].correctAnswer){
                marksScored += 2;
                correctQuestions++;
            }
            else if(this.state.choosenValues[i] != ""){
                marksScored -= 1;
                wrongQuestions++;
            }
        }
        this.setState({marksScored:marksScored , correctQuestions:correctQuestions, wrongQuestions:wrongQuestions ,submitted:true});
    }
    submit = () => {
        this.setState({alert:true});
        // confirmAlert({
        //   title: 'Confirmation',
        //   message: 'Are you sure you want to submit the test?\nPlease Understand you can\'t come back',
        //   buttons: [
        //     {
        //       label: 'Yes',
        //       onClick:()=> this.onsubmit()
        //     },
        //     {
        //       label: 'No',
        //       onClick: () => alert('Click No')
        //     }
        //   ]
        // });
    }
    dismissAlert = () =>{
        this.setState({alert:false});
    }
    render(){
        if( this.state.submitted ){
            return(
                <div>
                    <div className="header">
                        <img src="" alt="logo" className="mr-auto"></img>
                        <p className="ml-auto"></p>
                        </div>
                        <div className="heading">
                        <p className="mt"></p>
                        </div>
                        <div className="row middle">
                            <div className="col-4 "></div>
                            <div className="col-4">
                                <div className="card container center">
                                    <b>Overall Summary</b>
                                    <img src={image} width="120px" height="130px" className="ima"></img>
                                    <p style={{color:"green"}}>You can improve</p>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Total Questions:</p>
                                                <p>Marks Scored:</p>
                                                <p>Questions Correct:</p>
                                                <p>Questions Wrong:</p>
                                            </div>
                                            <div className="col-6">
                                                <p>{Questions.length}</p>
                                                <p>{this.state.marksScored}</p>
                                                <p>{this.state.correctQuestions}</p>
                                                <p>{this.state.wrongQuestions}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p style={{color:"red"}} className="again">Practice again</p>
                                        <button className="btn danger">Home</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        
                </div>
            );
        }
        else{
            return(
                <div>
                    
                    <div className="header">
                        <img src="" alt="logo" className="mr-auto"></img>
                        <p className="ml-auto"><i class="fa fa-sign-out"></i> Exit</p>
                        </div>
                        <div className="heading">
                        <p className="mt">English > English Trek > A Daughters Love(12 Questions)</p>
                        </div>
                        <div className="row middle">
                            <div className="col-2 q"><span className="qno">{this.state.current["sno"]}.</span></div>
                            <div className="col-7">
                                <div className="card container">
                                    <p>{this.state.current.question}</p>
                                    <div>
                                        {
                                            this.state.current.answers.map((val)=>
                                                
                                            <div className="card an" onClick={()=>this.onclick(val.option)} style={{ backgroundColor: this.state.choosenValues[this.state.current["sno"]-1] == val.option? 'rgb(160, 157, 157)': 'white'}} > A. {val.optionVal} </div> 
                                            
                                            )
                                        }
                                        {/* {
                                        "a" in this.state.current.answers  ? 
                                        <div className="card an" onClick={()=>this.onclick("a")} style={{ backgroundColor: this.state.choosenValues[this.state.current["sno"]-1] == "a"? 'rgb(160, 157, 157)': 'white'}} > A. {this.state.current.answers["a"]} </div> : <div></div> }
                                        {"b" in this.state.current.answers  ? 
                                            <div className="card an" onClick={()=>this.onclick("b")} style={{ backgroundColor: this.state.choosenValues[this.state.current["sno"]-1] == "b"? 'rgb(160, 157, 157)': 'white'}}>B. {this.state.current.answers["b"]} </div> : <div></div> }
                                        {"c" in this.state.current.answers  ? 
                                            <div className="card an" onClick={()=>this.onclick("c")} style={{ backgroundColor: this.state.choosenValues[this.state.current["sno"]-1] == "c"? 'rgb(160, 157, 157)': 'white'}}>C. {this.state.current.answers["c"]} </div> : <div></div> }
                                        {"d" in this.state.current.answers  ? 
                                            <div className="card an" onClick={()=>this.onclick("d")} style={{ backgroundColor: this.state.choosenValues[this.state.current["sno"]-1] == "d"? 'rgb(160, 157, 157)': 'white'}}>D. {this.state.current.answers["d"]} </div> : <div></div> } */}
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <footer>
                        <div className="row border">
                            <div className="col-2"></div>
                            <div className="col-6">
                            <button className="btn button" disabled={this.state.current["sno"] == 1 ? true : false} onClick={this.prev}>Prev</button>
                            <button className="btn button" disabled={this.state.current["sno"] == Questions.length ? true : false} onClick={this.next}>Next</button>
                            <button className="btn submit" onClick={this.submit}>Submit</button>
                            {/* <div id="popup1" class="overlay">
                                    <div class="popup">
                                        <h2>Here i am</h2>
                                        <a class="close" href="#">&times;</a>
                                        <div class="content">
                                            Thank to pop me out of that button, but now i'm done so you can close this window.
                                        </div>
                                    </div>
                                </div>  */}
                            </div>
                            <div className="col-4"></div>
                        </div>
                        </footer>
                        {
                                this.state.alert == true ? 
                                <div id="popup1" class="overlay">
                                    <div class="popup">
                                    <p><i className="fa fa-exclamation-circle icon"></i> Confirmation</p>
                                    <p className="b"></p>
                                        <div class="content">
                                            Are you sure you want to submit the test? <b>Please Understand you can't come back to the test once submitted</b>
                                            <br></br>
                                            <br></br>
                                            <button className="btn yes" onClick={this.onsubmit}>YES, SUBMIT</button>
                                            <button className="btn button" onClick={this.dismissAlert}>NO</button>
                                        </div>
                                    </div>
                                </div> : <div></div>
                            }
                </div>
            );
        }
        
    }
}

export default Comp;