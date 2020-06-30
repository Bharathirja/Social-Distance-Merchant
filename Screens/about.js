import * as React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {  
	constructor(){
		super();
		this.state={
			About_us:"ssdfkskkdjksjsjkdskjfdaksijkllskdjksldkaldkjadksjdkljewiutoipwrufjsk;djgjskdfoieruopisjdkchdkjv;czxvkldsjfoiupirupoeirutpiosdfjkg;cdkjhs;kjdhfgskjhdfjgsh;dirupsoeruij;lfkdsj;lvkdjg;lksdf;gsjroiuepoiturpwoiutrpojs;lkfjglskjdfl;ksjlkdfjl;skjdflkfjlksjdl;kfj;lksjdlf;kjs;klfj;lgskjfd;lkgjs;lkdfjmdsnjks;aid;soaidfjslkcjlksdj;lkfjs;dkfj;lskdjcl;kvjd;lkfjs;lkjfksdj;lkfcjslkdjf;gsduroiwuepufs;kldjfcksljfkljsdlkfjs;jdrf;oisuddksjdlkajesiouawioeuisjkda;ljsdfklasjclvaj;ksfiaurufiuadihjaschljasdkfhajksdhfjlafdsgdsrytdsfdf;lsjdrlteosiru;lsjdfjalksjdkfajeiuioruaoiweruoiajwdlkfjalkdjklfajsdkljfaslkdjfklasjeiowuroirutieudhsjkchklnvjsdfherutpiuroiuwiodjfasdvmnxczkjvsuiosureouiosafjsdfajsdckjsdiufeusfaoieuasioudjcaskdiuorpewiuoeijfldkjfslkdvmc,vlakmsdlkfasjeiourwaoiueoruawoieurasdcjxmvieejsdkjfklsdjlkfasjdlkfjalksdj;lkajf;ldkjalf;ksdjl;kafjsd;lkjfalksdjlakjsdlkfjalksdjlkajsdkdjlfksjdlkajsl;dkjlafksdjlkajlk;sdjfalksdjlk;ajs;ldkjfal;ksdjf;lksjfd;lksdjfkajsdflkajsdflkjas;lkdjf;lakjf;ldkjflkjdslkfja;lkdj;lakjf;ldkja;lkjdf;lkajf;klsdjf;kaj;ldkjl;akjdl;kaj;lkdjf;lkaj;dlkjaf;lksdjf;alkjd;lkfja;lkdjf;alkjfd;lkajf;ladskjf;laksdfj;lkdfjsl;akdfj;laksjdklajflkdjflk;asjdlkajf;lkdsjf;lakjsd;lfkaj;lkdjf;aklsdjf;lakfj;laskdjfaklsjf;lksadjf;laskfjl;skdfjas;klfjas;klfj;aslkfj;asklfj;aslkfj;lskfj;aslkfj;slkfj;slkfjl;skdfjslakdfj;lskadjf;lksajfl;skfjs;lkdfj;lksadjflkasdjf;laksjf;lkasdjf;lsakdjfa;lllllllllllljhlgkhgfkjhgkjghgkhjglllllllllllllllllllllllll;;;;;;;kkfjaskldjf;alskjdf;lkaskjffksjf;akl"
		}
	}
    render() {
      return(
        <View style={{flex:1}}>

          <View style={styles.topbar}>

            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity>
                <Icon name="arrow-left"  size={25} style={{color:'green'}} />
              </TouchableOpacity>
            </View>

            <View style={{flex:7,alignItems:'flex-end',justifyContent:'center',paddingEnd:25}}>
              <Text style={{fontFamily:'Arial',fontSize: 25,color:'green'}}>
                About us
              </Text>
            </View>
            
		      </View>

          <ScrollView>
		        <View>

			        <Text style={styles.text}>
				        { this.state.About_us }
			        </Text>

		        </View>
	        </ScrollView>
                        
          <TouchableOpacity style={styles.write}>
            <Icon name="pencil" size={25} color={'white'} />
          </TouchableOpacity>

        </View>
      )
    }  
}

const styles=StyleSheet.create({
	topbar: {
    flex:1,
    flexDirection: 'row',
    height: 100,
		backgroundColor: 'lightgreen',
		//borderBottomLeftRadius: 6,
		//borderBottomRightRadius: 6
	},
	text: {
    backgroundColor: 'white',
		color: '#463883',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    fontFamily: 'Arial'
	},
  write: {
    position: "absolute",
    height:60,
    width:60,
    backgroundColor:'grey',
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center',
    right:'8%',
    bottom:40,
    //zIndex:1,
    //flexDirection: 'row',
  },
})
