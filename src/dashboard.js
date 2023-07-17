import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Employeelist from './dashboardcomponent/employeelist';
import Employeetable from './dashboardcomponent/employeetable';
import './dashboard.css'
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaThList } from 'react-icons/fa';
import Jsondata from './dashboardcomponent/jsondata';
import Tablepagination from './dashboardcomponent/Tablepagination';
function Dashboard() {
 const[slno,setslno]=useState('')
 const[name,setname]=useState('')
 const[father,setfather]=useState('')
 const[phoneno,setphoneno]=useState('')
 const[email,setemail]=useState('')
 const[ages,setage]=useState('')
 const[department,setdepartment]=useState('')
 const[gendar,setgender]=useState('')
 const[desighn,setdesighn]=useState('')
 const[tech,settech]=useState('')
 const[adress,setadress]=useState('')
 const[_edit_data,setedit_data]=useState('')
 const[_edit_data1,setedit_data1]=useState('')
 const[_edit_data2,setedit_data2]=useState('')
 const[_edit_data3,setedit_data3]=useState('')
 const[_edit_data4,setedit_data4]=useState('')
 const[_edit_data5,setedit_data5]=useState('')
 const[_edit_data_id,setedit_data_id]=useState('')
  const tabClick = useRef(null);
  const tabClick1 = useRef(null);
 const Log_out=()=>{
  window.location.href = 'http://localhost:3000/';
 }
    const Trigger_the_button = (id,props,props1,props2,props3,props4,props5)=>{
     
      setedit_data_id(id)
      setedit_data(props)
      setedit_data1(props1)
      setedit_data2(props2)
      setedit_data3(props3)
      setedit_data4(props4)
      setedit_data5(props5)
      tabClick1.current.click()
    }
    /* const Trigger_the_button2 = ()=>{
      tabClick1.current.click()
    } */
    /* const Parentmethod_call=(slno,name,fathername,mobileno,email,age,departm,gener,designation,tech,address)=>{
      alert(' Editform')
      tabClick1.current.click()
      setslno(slno) 
      setname(name) 
      setfather(fathername) 
      setphoneno(mobileno) 
      setemail(email) 
      setage(age) 
      setdepartment(departm) 
      setgender(gener) 
      setdesighn(designation) 
      settech(tech) 
      setadress(address)     
    }  */
    return (
      <div className='dashboard_parent'>
        <Tab.Container defaultActiveKey='first' className='nav_bar_header'>     
      <Row>
        <Col sm={2} >
          <Nav variant="pills" className="flex-column">
            
            <Nav.Item>
              <Nav.Link ref={tabClick1} eventKey="first" style={{fontSize:"20px"}} className="flex-column1">Employee Form</Nav.Link>
            </Nav.Item>
          
            {/* <Nav.Item>
              <Nav.Link ref={tabClick} eventKey="second" style={{fontSize:"20px"}} className="flex-column1">Employee Details</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link  eventKey="third" style={{fontSize:"20px"}} className="flex-column1">Employee Details</Nav.Link>
            </Nav.Item>
           {/*  <Nav.Item>
              <Nav.Link  eventKey="fourth" style={{fontSize:"20px"}} className="flex-column1">table pagination</Nav.Link>
            </Nav.Item> */}       
          </Nav>
        </Col>
        <Col sm={10}>
          <div className='emplyee header'>
            <div>Employee details app</div>
            <div style={{marginLeft:"250px"}}><div style={{margin:"10px",textAlign:"end"}}> 
            <Button className='logbutton' onClick={Log_out}><BiLogOut/></Button>{' '}</div></div>
          </div>
          <div style={{margin:"10px",textAlign:"end"}}> <Button className='listbutton'><FaThList/></Button>{' '}</div>
          <Tab.Content>
            <Tab.Pane eventKey="first"><Employeelist data={_edit_data} data1={_edit_data1}
             data_id={_edit_data_id}
             data2={_edit_data2}
             data3={_edit_data3}
             data4={_edit_data4}
             data5={_edit_data5}
            
            /></Tab.Pane>
  {/*           <Tab.Pane eventKey="second"><Employeetable Parentmethod_call_one={Parentmethod_call} Trigger_the_button2={Trigger_the_button2}/></Tab.Pane> */}
            <Tab.Pane eventKey="third"><Jsondata  Editfunction={Trigger_the_button} /></Tab.Pane>
          {/*   <Tab.Pane eventKey="fourth"><Tablepagination/></Tab.Pane> */}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </div>
    );
  }
  
  export default Dashboard;
  