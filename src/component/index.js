import React,{useState} from 'react';
import './index.css';

export default function AgeCounting(){
    const [year,setYear]=useState(null);
    const [month,setMonth]=useState(1);
    const [date,setDate]=useState(1);
    const [birthdate,setBirthdate]=useState(null);
    const [currentDate,setCurrentdate]=useState(null);
    const handleChange=(e)=>{
        setBirthdate(e.target.value);
    }
    const handleCurrentdate=(e)=>{
        setCurrentdate(e.target.value);
    }
   function Calculate(){
    const birthDate=new Date(birthdate);
    const currentdate=new Date(currentDate);
    if(birthDate>currentDate){
        alert("birthday cannot be in the future")
        return;
    }
    const diffInMilliseconds=currentdate-birthDate;
    const ageDate=new Date(diffInMilliseconds);

    setYear(ageDate.getUTCFullYear()-1970);
    setMonth(ageDate.getUTCMonth());
    setDate(ageDate.getUTCDate());
   }

    return (
        <div className='Component'>
            <header id='title'>
            <h2 style={{textAlign:'center'}}>Age Calculator</h2>
            </header>
               <div className='Components'> 
                    <label id='userBd'>Select Your Date of Birth</label><br></br>
                    <input id='userBda' type='date'onChange={handleChange} /><br></br>
                    <label id='currentDate'>Select Current Date</label><br></br>
                    <input id='currentDatea' type='date' onChange={handleCurrentdate} /><br></br>
                    <button onClick={Calculate} id='button'>Calculate</button>
                    <div className='age-box'>
                        <span>{year}</span>
                        <p>years</p>
                    </div>
                    <div className='age-box'>
                        <span>{month}</span>
                        <p>Months</p>
                    </div>
                    <div className='age-box'>
                        <span>{date}</span>
                        <p>days</p>
                    </div>
                </div>

            
        </div>
    )
}
