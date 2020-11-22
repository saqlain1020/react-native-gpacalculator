import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tabs, Tab, H1, Card, CardItem, H2, H3, Input, Item, Grid, Col } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Normal from './Components/Normal';
import Advance from './Components/Advance';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container >
        <Header style={{display:"flex",alignItems:"center",backgroundColor:'#1e3799'}}>
          <Body>
          <H1 style={{fontWeight:"bold",color:"white"}}>GPA Calculator</H1>
          </Body>
        </Header>
        <Content>
          <Tabs>
            <Tab heading="Normal">
              <Normal/>
            </Tab>
            <Tab heading="Advance">
              <Advance/>
            </Tab>
          </Tabs>
          </Content>
          <Footer style={{height:30,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Text>Developed by Saqlain</Text>
          </Footer>
      </Container>
    );
  }
}