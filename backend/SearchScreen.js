import React from 'react';
//axios import해주기. 물론 npm install axios 나 yarn add axios는 해줘야겠지
import axios from 'axios';
import {
  Container,
  Header,
  Text,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Separator,
  Label,
  List,
  Item,
  CheckBox,
  Input,
} from 'native-base';
import { Image, Alert ,StatusBar } from 'react-native';

class SearchScreen extends React.Component {
  state = {
    data: [],
    searchKey: '',
    showId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
//loadItem 함수와 componentDidMount 함수 적당히 추가해주면됌.
  loadItem = async () => {
    axios
      .get("http://localhost:3000/api/benefit2")
      .then(({ api }) => {
        this.setState({ 
          //loading: true,
          data: api
        });
      })
      .catch(e => {  // API 호출이 실패한 경우
        console.error(e);  // 에러표시
        //this.setState({  
        //  loading: false
        //});
      });
  };

  componentDidMount() {
    this.loadItem();  // loadItem 호출
  }

  search = () => {
    const newShowId=[];
    for(const item of this.state.data){
      if(item.keyWord.indexOf(this.state.searchKey)>-1){
        newShowId.push(item.id);
      }
    }
    this.setState({showId: newShowId});
  };

  itemSelected = (item) => {
    const datamap = this.state.data;
    this.setState({
      data: datamap.map((e) => (e === item ? { ...e, liked: !item.liked } : e)),
    });
  };

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#2c6e49"
          style={{ backgroundColor: '#2c6e49' }}>
          <Left>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../web_hi_res_512.png')}></Image>
          </Left>
          <Body>
            <Text style={{ color: '#fefee3', fontSize: 18 }}>군복</Text>
          </Body>
          <Right></Right>
        </Header>
        <Header searchBar rounded style={{ backgroundColor: '#2c6e49' }}>
          <Item>
            <Button transparent onPress={this.search}>
              <Icon name={'ios-search'} style={{ color: '#2c6e49' }} />
            </Button>
            <Input
              placeholder="검색어를 입력해주세요"
              onChangeText={(text) =>
                this.setState({ searchKey: text })
              }></Input>
            <Icon name="filter-outline" />
          </Item>
        </Header>
        <Content style={{ backgroundColor: '#fffffc' }}>
          <Separator bordered>
            <Text style={{ fontSize: 12 }}>검색 결과</Text>
          </Separator>
          <List
            dataArray={this.state.showId}
            renderRow={(item) => (
              <ListItem>
                <Icon
                  name={this.state.data[item].liked ? 'ios-star' : 'ios-star-outline'}
                  style={{ color: 'gold', paddingRight: 10 }}
                  onPress={() => this.itemSelected(this.state.data[item])}></Icon>
                <Image
                //이미지 경로 바꿔줍시다. banner에는 "/img/a.png" 이런 식으로 저장되어 있습니다.
                  source={"http//localhost:3000"+this.state.data[item].banner}
                  style={{
                    flex: 1,
                    resizeMode: 'stretch',
                    aspectRatio: 4 / 1,
                  }}></Image>
              </ListItem>
            )}></List>
        </Content>
        <StatusBar backgroundColor='#2c6e49' />
      </Container>
    );
  }
}

export default SearchScreen;