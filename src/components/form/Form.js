import {useState} from 'react';
import { countries } from '../../constants/countryData';
import './form.css';

export default function Form() {
   
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [userId, setUserId] = useState('');
    const [radioName, setRadioName] = useState('');
    const [checkboxName,setCheckboxName ] = useState('');
    const onSubmitHandler = (e) =>{
        if (email==="") {
            alert("Please enter a valid email");
            return;
        }
        if(name===""){
            alert("Please enter a valid name");
            return;
        }
        if(password===""){
            alert("Please enter password");
            return;
        }
        if(zipCode===""){
            alert("Please enter zip code");
            return;
        }
        if(country===""){
            alert("Please select country");
            return;
        }
        if(userId===""){
            alert("Please enter user id");
            return;
        }
        if(radioName===""){
            alert("Please select gender");
            return;
        }
        if(checkboxName===""){
            alert("Please select language");
            return;
        }
    let user = {
        userId: userId,
        name: name,
        email: email,
        password: password,
        zipCode: zipCode,
        country: country,
        radioName: radioName,
        checkboxName: checkboxName,
    }
    e.preventDefault();
    console.log(user)
};


    const onChangeNameHandler = (e)=>{
        setName(e.target.value); 
        console.log(e.target.value);
    }
    const onChangePasswordHandler = (e)=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const onChangeEmailHandler = (e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const onChangeZipCodeHandler = (e)=>{
        setZipCode(e.target.value);
        console.log(e.target.value);
    }
    const onChangeCountryHandler = (e)=>{
        setCountry(e.target.value);
        console.log(e.target.value);
    }
    const onChangeUserIdHandler = (e)=>{
        setUserId(e.target.value);
        console.log(e.target.value);
    }
    const onChangeRadioHandler = (e)=>{
        setRadioName(e.target.id);
        console.log(e.target.id);
    }
    const onChangeCheckboxHandler = (e)=>{
        setCheckboxName(e.target.id);
        console.log(e.target.id);
    }

   
  return (
    <form className='form-container'>
    <h1 style={{textAlign:'centre',color:'white'}}>{name}</h1>
    <div className='input-container'>
      <label htmlFor='ID' className='input-label'  style={{margin:'0px 0px 0px 55px',}}>User ID:</label>
      <input id='ID' className='input-field' required  placeholder="Enter ID" type='number' onChange={onChangeUserIdHandler} />
    </div>
    <div className='input-container'>
      <label htmlFor='userName' className='input-label' style={{margin:'0px 0px 0px 65px',}}>Name:</label>
      <input id='userName' className='input-field' required  placeholder="Enter Your Name" type='text' onChange={onChangeNameHandler} />
    </div>
    <div className='input-container'>
      <label htmlFor='userEmail' className='input-label' style={{margin:'0px 0px 0px 68px',}}>Email:</label>
      <input id='userEmail' className='input-field' required  placeholder="Enter Your Email" type='email' onChange={onChangeEmailHandler} />
    </div>
    <div className='input-container'>
      <label htmlFor='userPassword' className='input-label' style={{margin:'0px 0px 0px 33px',}}>Password:</label>
      <input id='userPassword' className='input-field' required  placeholder="Enter Password" type='password' onChange={onChangePasswordHandler} />
    </div>
    <div className='input-container'>
      <label htmlFor='userZipCode' className='input-label' style={{margin:'0px 0px 0px 33px',}}>ZIP Code:</label>
      <input id='userZipCode' className='input-field' required  placeholder="Enter ZIP Code" type='number' onChange={onChangeZipCodeHandler} />
    </div>
    <div className='radio-container'>
      <label htmlFor='gender' className='input-label'>Gender:</label>
      <div id='gender' style={{display:'flex',gap:'23px'}}>
      <div>
      <input className='radio-input'  id='male' name='gender'   type='radio'onChange={onChangeRadioHandler} />
      <label className='input-label' htmlFor='male'>Male</label>
      </div>
      <div>
      <input className='radio-input' id='female' name='gender'   type='radio' onChange={onChangeRadioHandler} />
      <label className='input-label' htmlFor='female'>Female</label>
      </div>
      </div>
    </div>
    <div className='radio-container'>
      <span className='input-label'>Language:</span>
      <div style={{display:'flex',gap:'40px'}}>
      <div>

      <input className='radio-input' id='english' name='language'   type='checkbox' onChange={onChangeCheckboxHandler} />
      <label className='input-label' htmlFor='english'>English</label>
      </div>
      <div>
      <input className='radio-input' id='other' name='language'   type='checkbox' onChange={onChangeCheckboxHandler} />
      <label className='input-label' htmlFor='other'>Other</label>
      </div>
      </div>
    </div>
    <div className='selection-container'>
    <span>Country:</span>
    <select value={country}  className='selection-field' required onChange={onChangeCountryHandler}>
            <option value="" disabled>Please select a country</option>
             {countries.map((value, index) => (
              <option  key={index} value={value.country}>{value.country}</option>
             ))}
    
    </select>
    </div>
    <button className='btn' onClick={onSubmitHandler}>Submit</button>
   </form>
  )
}

