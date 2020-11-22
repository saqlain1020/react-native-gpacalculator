import React from 'react';
import { Card, CardItem, Grid, Col, Text, Input, Item, Footer, Button, H2 } from 'native-base';

class Normal extends React.Component{
    state={
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        gpa: null,
    }
    onchange=(val,name)=>{
        this.setState({
            [name]: val
        })
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
    calcGpa = ()=>{
        let {s1,s2,s3,s4,s5,s6} = this.state;
        let gpa = 0;
        let hours = 0;
        s1=this.getGpaFromMarks(Number(s1))*3;
        s2=this.getGpaFromMarks(Number(s2))*3;
        s3=this.getGpaFromMarks(Number(s3))*3;
        s4=this.getGpaFromMarks(Number(s4))*3;
        s5=this.getGpaFromMarks(Number(s5))*3;
        s6=this.getGpaFromMarks(Number(s6))*3;
        gpa = s1 + s2 + s3 + s4 + s5 + s6
        let arr = [s1,s2,s3,s4,s5,s6];
        arr.forEach(item=>{
            if(item>0)
                hours+=3
        })
        gpa/=hours;
        this.setState({
            gpa: gpa.toFixed(2),
        })
    }
    render=()=>{
        const {s1,s2,s3,s4,s5,s6,gpa} = this.state;
        return(
            <Card>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 1</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s1")} value={s1} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 2</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s2")} value={s2} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 3</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s3")} value={s3} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 4</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s4")} value={s4} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 5</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s5")} value={s5} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem>
                  <Grid>
                    <Col style={{width:100,display:"flex",alignItems:"center",justifyContent:"center"}}><Text>Subject 6</Text></Col>
                    <Col ><Item><Input onChangeText={(val)=>this.onchange(val,"s6")} value={s6} placeholder="Enter Marks" keyboardType="number-pad"/></Item></Col>
                  </Grid>
                </CardItem>
                <CardItem style={{display:"flex",justifyContent:"space-between"}}>
                    <Button onPress={this.calcGpa} bordered><Text>Calculate</Text></Button>
                    <H2>{gpa}</H2>
                </CardItem>
              </Card>
        )
    }
}

export default Normal;