import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './employeelist.css'
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

function Employeelist({data_id,data,data1,data2,data3,data4,data5}) {
  const[edit_Data,setedit_Data]=useState(data)
  const[edit_Data1,setedit_Data1]=useState(data1)
  const[edit_Data2,setedit_Data2]=useState(data2)
  const[edit_Data3,setedit_Data3]=useState(data3)
  const[edit_Data4,setedit_Data4]=useState(data4)
  const[edit_Data5,setedit_Data5]=useState(data5)
  console.log(edit_Data)
  useEffect(() => {
    setedit_Data(data)
    setedit_Data1(data1)
    setedit_Data2(data2)
    setedit_Data3(data3)
    setedit_Data4(data4)
    setedit_Data5(data5)
   
  }, [data]);
  console.log(data)
  const isGoal = data;
  const[_Name,set_Name]=useState('')
  const[father_name,setfather_name]=useState('')
  const[phone_number,setphone_number]=useState('')
  const[e_mail,sete_mail]=useState('')
  const[age,setage]=useState('')
  const[Department,setDepartment]=useState('')
  const[gender,setgender]=useState('')
  const[designation,setdesignation]=useState('')
  const[address,setaddress]=useState('') 
  const[_cal_age,set_cal_age]=useState('') 
  const[_checkboc1,set_checkboc1]=useState(true) 
  const[_checkbox2,set_checkbox2]=useState(true) 
  const[_checkboc3,set_checkboc3]=useState(true) 
  const[_checkbox_value1,set_checkbox_value1]=useState('') 
  const[_checkbox_value2,set_checkbox_value2]=useState('') 
  const[_checkbox_value3,set_checkbox_value3]=useState('') 
  // error statement
  const[name_error,setname_error]=useState('') 
  const[fathername_error,setfathername_error]=useState('') 
  const[phonenumber_error,setphonenumber_error]=useState('') 
  const[email_error,setemail_error]=useState('') 
  const[age_error,setage_error]=useState('') 
  const[depart_error,setdepart_error]=useState('') 
  const[gender_error,setgender_error]=useState('') 
  const[desigh_error,setdesigh_error]=useState('') 
  const[address_error,setaddress_error]=useState('') 
              /*    const Onupdate_method =()=>{
                  alert('update succefully')
                  window.location.reload()
                 } */
                //...................edit values
                
                
       const handle_change_name=(event)=>{
      console.log(event.target.value);
          set_Name(event.target.value)  
          setedit_Data(box.current.value)
          console.log(edit_Data)  
}
const handle_change_father_name=(event)=>{
  console.log(event.target.value);
  setfather_name(event.target.value)  
  setedit_Data1(box1.current.value)
          console.log(edit_Data1)  
     
}
const handle_change_phone_number=(event)=>{
  console.log(event.target.value);
  setphone_number(event.target.value)   
  setedit_Data2(box2.current.value)
          console.log(edit_Data2)    
}
const handle_change_e_mail=(event)=>{
  console.log(event.target.value);
  sete_mail(event.target.value)     
  setedit_Data3(box3.current.value)
          console.log(edit_Data3)  
}
const handle_change_age=(event)=>{
  console.log(event.target.value);
  setage(event.target.value) 
  const birthDate = new Date(age); 
  const difference = Date.now() - birthDate.getTime();
  const age_ = new Date(difference);
  const _fillinput_date = Math.abs(age_.getUTCFullYear() - 1970);
   console.log(_fillinput_date)
   set_cal_age(_fillinput_date)
}
const handle_set_setaddress=(event)=>{
  setaddress(event.target.value) 
  setedit_Data5(box9.current.value)
          console.log(edit_Data5)      
}
const handle_set_setDepartment=(event)=>{
  setDepartment(event.target.value)     
}
const handle_set_setgender=(event)=>{
  setgender(event.target.value)     
}      
const handle_setdesignation=(event)=>{
  setdesignation(event.target.value)     
}
/* const handle_cal_age=(event)=>{
  console.log(event.target.value);
  set_show_age(event.target.value);
   
} */
const box = useRef(0);
const box1 = useRef(0);
const box2 = useRef(0);
const box3 = useRef(0);
const box4 = useRef(0);
const box5 = useRef(0);
const box6= useRef(0);
const box7 = useRef(0);
const box8 = useRef(0);
const box9 = useRef(0);  

   const On_Submit=(e)=>{
    
    e.preventDefault();
            if(_Name.length ===0){
            box.current.style.border= "2px solid red";
            setname_error('fill tha name')
          
           } if(_Name.length !==0){
            box.current.style.border = "2px solid green";
            setname_error('')
           }
           if(father_name.length ===0){
            box1.current.style.border= "2px solid red";
            setfathername_error('fill tha father name')
           } if(father_name.length !==0){
            box1.current.style.border = "2px solid green";
            setfathername_error('')
           }
           if(phone_number.length ===0){
            box2.current.style.border= "2px solid red";
            setphonenumber_error('fill th mobile no')
           } if(phone_number.length !==0){
            box2.current.style.border = "2px solid green";
            setphonenumber_error('')
           }
           if(e_mail.length ===0){
            box3.current.style.border= "2px solid red";
            setemail_error('fill email address')
           } if(e_mail.length !==0){
            box3.current.style.border = "2px solid green";
            setemail_error('')
           }
           if(age.length ===0 ){
            box4.current.style.border= "2px solid red";
            setage_error('fill tha age')
           } if(age.length !==0){
            box4.current.style.border = "2px solid green";
            setage_error('')
           }
           if(Department.length ===0){
            box5.current.style.border= "2px solid red";
            setdepart_error('select tha department')
           } if(Department.length !==0){
            box5.current.style.border = "2px solid green";
            setdepart_error('')
           }
             if(gender.length ===0){
             setgender_error('select any one')
           } if(gender.length !==0){
            setgender_error('')
           }  
           if(designation.length ===0){
            box7.current.style.border= "2px solid red";
            setdesigh_error('select one desighnation')
           } if(designation.length !==0){
            box7.current.style.border = "2px solid green";
            setdesigh_error('')
           }
           if(address.length ===0){
            box9.current.style.border= "2px solid red";
            setaddress_error('fill tha address')
            
           } if(address.length !==0){
            box9.current.style.border = "2px solid green";
            setaddress_error('')
           }
          /*  if(_show_age.length >18){
              console.log('true')
           } else{
            console.log('false')
           } */
     
           if(_Name.length && father_name.length && phone_number.length && e_mail.length && age.length && Department.length && gender.length && designation.length &&  address.length !==0 && (_checkbox_value1.length || _checkbox_value2.length || _checkbox_value3.length !==0)){
        axios.post('http://localhost:4000/insert/formdata', {
         fullName: _Name,
           fatherName:father_name,
           phoneNumber:phone_number,
           eMail:e_mail,
           callAge:_cal_age,
           dePatment:Department,
           genDar:gender, 
           designNation:designation, 
           checkBox1:_checkbox_value1,
           checkBox2:_checkbox_value2,
           checkBox3:_checkbox_value3,
           adDress:address,
        }).then((res) => {
     console.log(res.data)
     alert(res.data)
     window.location.reload()
  }) }
   }
         const Update_Form =(id)=>{
          axios.put(`http://localhost:4000/update/formdata/${id}`, {
            edit_fullName: edit_Data,
                 edit_fatherName:edit_Data1,
                 edit_phoneNumber:edit_Data2,
                edit_eMail:edit_Data3,
                edit_adress:edit_Data5
          })
          .then(response => alert(
            response.data,
            window.location.reload()
          ))
          .catch(error => {
              console.error('There was an error!', error);
          });
         }
     const Checkbox_check_change=(data)=>{
         if(data==='javascript'){
          if(_checkbox2===true){
            set_checkbox_value1(data)
          }
          set_checkbox2(!_checkbox2)
         }
         if(data==='java'){
          if(_checkboc1===true){
            set_checkbox_value2(data)
          }
          set_checkboc1(!_checkboc1)
         }
         if(data==='python'){
          if(_checkboc3===true){
            set_checkbox_value3(data)
          }
          set_checkboc3(!_checkboc3)
         }
     }
     //.....................editform:data_id,
      /*   , */
         
  return (
                
    <div className='employee_list_parent'>
        <Form className='form_parent' onSubmit={On_Submit} action='http://localhost:4000/insert/formdata' method='post'>
        <Form.Label className='form_name' style={{fontSize:"20px"}}>Name</Form.Label>
        <Form.Control name='name' defaultValue={data}  ref={box} type="text" placeholder="Enter your name" className='form_control' onChange={handle_change_name}/>
          <div  style={{color:"red"}}>{name_error}</div>
        <Form.Label className='form_name' style={{fontSize:"20px"}}>Father name</Form.Label>
        <Form.Control  type="text" defaultValue={data1} ref={box1} placeholder="Enter your Father name" className='form_control' onChange={handle_change_father_name}/>
        <div  style={{color:"red"}}>{fathername_error}</div>
        <Form.Label style={{fontSize:"20px"}}>Phone Number </Form.Label>
        <Form.Control type="number" defaultValue={data2}  min="0" ref={box2} placeholder="Enter phone number" onChange={handle_change_phone_number} />
        <div  style={{color:"red"}}>{phonenumber_error}</div>
        <Form.Label style={{fontSize:"20px"}}> Email address</Form.Label>
        <Form.Control  type="email" defaultValue={data3} ref={box3} placeholder="Enter email address" onChange={handle_change_e_mail} />
        <div  style={{color:"red"}}>{email_error}</div>
        <Form.Label style={{fontSize:"20px"}}>Dob</Form.Label>
        <Form.Control type="date" ref={box4} placeholder="Enter your age" onChange={handle_change_age}/>
         <Form.Label style={{fontSize:"20px"}}>Age</Form.Label>
        <Form.Control  type="number" ref={box4}  defaultValue={data4}  value={_cal_age} placeholder="Enter your age"/*  onChange={handle_cal_age} *//>
        <div  style={{color:"red"}}>{age_error}</div>
        <label for="cars " style={{fontSize:"20px"}}>Department</label><br></br>
                              <select name="cars" id="cars"   ref={box5} style={{width:"250px"}} onChange={handle_set_setDepartment}>
                                <option disabled selected value> -- select an option -- </option>
                                <option >Junior developer</option>
                                <option>Senior developer</option>
                                <option >Manager</option>
                                <option>Team leader</option>
                      </select><br></br>
                      <div  style={{color:"red"}}>{depart_error}</div>
        <Form.Label style={{fontSize:"20px"}}>Gender</Form.Label>
        {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" ref={box6} onChange={handle_set_setgender}>
          <Form.Check
            label="male"
            name="group1"
            value='male'
            type={type}
            id={`inline-${type}-1`}
            checked={gender==='male'}
          />
          <Form.Check
            label="female"
            name="group1"
            value='female'
            type={type}
            id={`inline-${type}-2`}
            checked={gender==='female'}
          />
          <Form.Check
            label="others"
            value= 'others'
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            checked={gender==='others'}
          />
        </div>
      ))}  
      <div  style={{color:"red"}}>{gender_error}</div>
                    <label for="cars" style={{fontSize:"20px"}}>Designation</label><br></br>
                              <select name="cars" id="cars"  ref={box7} style={{width:"250px"}} onChange={handle_setdesignation}>
                              <option disabled selected value> -- select an option -- </option>
                                <option >Junior developer</option>
                                <option >Senior developer</option>
                                <option >Manager</option>
                                <option >Team leader</option>
                      </select><br></br>
                      <div  style={{color:"red"}}>{desigh_error}</div>
                      <label  ref={box8} style={{fontSize:"20px"}}>Technical skill</label><br></br>
        <input type="checkbox"  onChange={()=>{Checkbox_check_change('javascript')}}></input>javascript<br></br>
         <input type="checkbox"   onChange={()=>{Checkbox_check_change('java')}}></input>java<br></br>
         <input type="checkbox"   onChange={()=>{Checkbox_check_change('python')}}></input>python<br></br>
         <Form.Label style={{fontSize:"20px"}}>Address</Form.Label>            
        <Form.Control as="textarea" rows={3} defaultValue={data5} style={{resize:"none"}} ref={box9} onChange={handle_set_setaddress} />
        <div  style={{color:"red"}}>{address_error}</div>
        <div className='text-center mb-3'>
       { isGoal?<Button variant="secondary"  style={{marginTop:"20px",width:"200px"}} onClick={()=>{Update_Form(data_id)}}>update</Button>:<Button variant="primary" type='submit' style={{marginTop:"20px",width:"200px"}}>submit</Button>} 
{/*       <Button variant="warning"  onClick={Onupdate_method} style={{marginTop:"20px",marginLeft:"20px"}} >update</Button>
 */}        </div>
    </Form>
    </div>
  )
}

export default Employeelist;