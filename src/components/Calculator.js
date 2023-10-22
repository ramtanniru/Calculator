import React, { useState,useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import darkThemeImage from '../images/darktheme.jpg';


export function Calculator(){
    const [input,setInput]=useState('');
    const [result,setResult]=useState('');
    const inputUpdate=(event)=>{
        var x =input +event.target.textContent;
        setInput(x);
    }
    const getResult=()=>{
        try{
            var y=eval(input);
            setResult(y);
        }
        catch(error){
            setResult("Invalid")
        }
    }
    const reset=()=>{
        setResult('');
        setInput('')
    }
    return(
        <div>
        <div class="col-lg-3 col-sm-6 col-10 container mt-5 rounded-top-5 shadow" style={{backgroundColor:"#172d67",height:300}} data-bs-theme='light'>
            <div class='row rounded-top-4'>
                <div class='m-3 btn' style={{width: '26px',height: '26px',borderRadius: '50%',backgroundColor: 'white'}}></div>
                <div class='mt-3 col-2' onClick={()=>console.log("hi")}><img class="img-fluid" src={darkThemeImage} style={{width:'30px',height:'30px',borderRadius:'55%'}}/></div>
            </div>
            <div >
                <div class='text-end text-light pe-2' style={{fontSize:24}}>
                    {input}
                </div>
                <div class='text-end text-light pe-2' style={{fontSize:24}}>
                    {result}
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-10 container rounded-bottom-5 shadow" style={{backgroundColor:'#030c26',height:300}}>
                <div class="row pt-4 px-1">
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>7</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>8</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>9</div>
                    <div class="col-3 container text-light btn border" style={{fontSize:28}} onClick={reset}>X</div>
                </div>
                <div class="row py-1 px-1">
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>4</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>5</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>6</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>/</div>
                </div>
                <div class="row py-1 px-1">
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>1</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>2</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>3</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>*</div>
                </div>
                <div class="row py-1 px-1">
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>0</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>.</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={getResult}>=</div>
                    <div class="col-3 container text-light btn" style={{fontSize:28}} onClick={inputUpdate}>+</div>
                </div>
            </div>
        </div>
    )
}