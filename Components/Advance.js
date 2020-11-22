import React from 'react';
import { Item, Card, CardItem, H1, Button, Text, H2, Grid, Col, Input } from 'native-base';

class Advance extends React.Component{
    state={
        subjects: [],
        gpa: null,
    }

    marksEntered=(val,index)=>{
        let subjects = this.state.subjects;
        subjects[index].marks = Number(val);
        this.setState({subjects,});
    }

    creditHoursEntered=(val,index)=>{
        let subjects = this.state.subjects;
        subjects[index].hours = val;
        this.setState({subjects,});
    }

    removeSubject=(ind)=>{
        let subjects = this.state.subjects;
        subjects = subjects.filter((item,index)=>{
            if(index!==ind){
                return true;
            }
        })
        this.setState({subjects:subjects,});
    }

    getGpaFromMarks = (marks)=>{
        if (marks>=85)
            return 4.0;
        if (marks>=85)
            return 4.0;
        if (marks>=80)
            return 3.8;
        if (marks>=75)
            return 3.4;
        if (marks>=71)
            return 3.0;
        if (marks>=68)
            return 2.8;
        if (marks>=64)
            return 2.4;
        if (marks>=61)
            return 2.0;
        if (marks>=57)
            return 1.8;
        if (marks>=53)
            return 1.4;
        if (marks>=50)
            return 1.0;
        return 0;
    }

    calculate = ()=>{
        let total = 0;
        let totalHours = 0;
        this.state.subjects.forEach(item=>{
            total+=(this.getGpaFromMarks(Number(item.marks)) * Number(item.hours));
            totalHours+=Number(item.hours);
        })
        let gpa = total/totalHours;
        if(isNaN(gpa))
            this.setState({gpa:"Err",});
        else
            this.setState({gpa:gpa.toFixed(2),});
    }

    render=()=>{
        const {subjects} = this.state;     
        return(
            <Card>
                <CardItem>
                    <Grid >
                        <Col size={1} style={{paddingRight:5}} ><Text style={{width:"100%",textAlign:"center"}}>Subject Marks</Text></Col>
                        <Col size={1} style={{paddingLeft:5}}><Text style={{width:"100%",textAlign:"center"}}>Credit Hours</Text></Col>
                    </Grid>
                </CardItem>
                {subjects.map((item,index)=>{
                    return(
                        <CardItem key={index}>
                            <Grid >
                                <Col size={1} style={{paddingRight:5}} ><Item><Input value={`${item.marks}`} onChangeText={(val)=>this.marksEntered(val,index)} style={{textAlign:"center"}} keyboardType="numeric" placeholder="Enter Marks"/></Item></Col>
                                <Col size={1} style={{paddingLeft:5}}><Item><Input value={`${item.hours}`} onChangeText={(val)=>this.creditHoursEntered(val,index)} style={{textAlign:"center"}} keyboardType="numeric" placeholder="Credit Hours"/></Item></Col>
                                <Col style={{width:40,display:"flex",alignItems:"center",justifyContent:"center"}}><Text onPress={()=>this.removeSubject(index)} style={{color:"red",fontWeight:"bold",fontSize:35}}>-</Text></Col>
                            </Grid>
                        </CardItem>
                    )
                })} 
                <CardItem >
                    <Button onPress={()=>this.setState({subjects:[...subjects,{marks:0,hours:0}]})} bordered style={{width:"100%"}}><Text style={{ fontSize:20, width:"100%",textAlign:"center"}}>+</Text></Button>
                </CardItem>
                <CardItem>
                    <Card style={{width:"100%"}}>
                        <CardItem style={{display:"flex",justifyContent:"space-between"}}>
                            <Button primary onPress={this.calculate}><Text>Calculate</Text></Button>
                            <H2>{this.state.gpa}</H2>
                        </CardItem>
                    </Card>
                </CardItem>
            </Card>
        )
    }
}

export default Advance