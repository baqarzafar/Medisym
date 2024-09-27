import React, { useContext, useState  , useEffect} from "react";
import { Button, Text, View , TouchableOpacity, Image , StyleSheet , TextInput , ScrollView} from "react-native";
import StateProvider from "./components/store/contextprovider";
import Mycontext from "./components/store/context";

import ArrayofMedicines from "./components/store/localdata";




















// this is Menu commpoent 

function Menu(){










   let { initialState , updateState , Navelooks  }  =  useContext(Mycontext)
return(
<View style={{
  width: Navelooks.width,
  backgroundColor: Navelooks.backgroundColor,
  justifyContent: Navelooks.justifyContent,
  height: Navelooks.height,
  transition: "width 10s ease" ,
  position:"absolute",
  top:40
}}>

   

        <View  style={{flexDirection:"row" , justifyContent:"space-evenly"}} >
          <Text style={{color:"red" , fontSize:30}}>MEDIFSYM</Text> 
          <View style={{
      backgroundColor: 'white',

      

       width:"15%",
       height:40,
       borderRadius:100

    }}>
    </View>
         
        </View> 

       <TouchableOpacity>
         <View>
          <Text   style={{fontSize:20 , color:"white"}} >About Us </Text>
         </View>
        </TouchableOpacity>   

       <TouchableOpacity>
         <View>
          <Text  style={{fontSize:20 , color:"white"}} >About MEDIFSYM</Text>
         </View>
        </TouchableOpacity>   

       <TouchableOpacity>
         <View>
          <Text  style={{fontSize:20 , color:"white"}}  >T&C</Text>
         </View>
        </TouchableOpacity>   
      <View  style={{width:"50%" , height:"60%" , color:"white"}}   ><Button title="Log in "  color={"red"}   ></Button></View>
  </View>
)



}
















//  this is header component 

function Header() {
  const [initialState, updateState] = useState(0);
  const { Navelooks, updateNavelook } = useContext(Mycontext);
  

  const menu = () => {
    if (initialState === 0) {
      updateState(1);
      updateNavelook({ ...Navelooks, width: "0%" });
    } else {
      updateState(0);
      updateNavelook({ ...Navelooks, width: "80%" , });
    }
  };

  return (
    <View style={{ width: '100%', flexDirection: 'row', borderColor: 'red' }}>
      <View>
       <Button title="Menu"  color="black" onPress={()=>{menu()}}></Button>
      </View>
      <View style={{ marginLeft: '11%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', fontFamily: 'serif' }}>MEDIFSYM</Text>
      </View>
      <View style={{ marginLeft: '10%' }}>
        <Button title="Home" color="black" />
      </View>
    </View>
  );
}










//  this is navigational  footers 

const PagesButtons = () => {
  const avator = require("./components/assets/avator.png");
  const search = require("./components/assets/search.png");
  const scan = require("./components/assets/scan.png");


  let { upuserinterface , userinterface} = useContext(Mycontext)




let changeUserinterface = (n)=>{

   upuserinterface(n)
   console.log(userinterface)


}
  return (
      <View  >
          <View style={styles.container}>
      <TouchableOpacity onPress={()=>{changeUserinterface(0)}}>
      <View style={styles.buttonContainer}  >
        <Image source={scan} style={styles.image}    />
      </View>
      </TouchableOpacity>
   <TouchableOpacity   onPress={()=>{changeUserinterface(1)}}      >

   <View style={styles.buttonContainer}>
        <Image source={avator} style={styles.image} />
      </View>

   </TouchableOpacity>
     <TouchableOpacity  onPress={()=>changeUserinterface(2)}       >


     <View style={styles.buttonContainer}>
        <Image source={search} style={styles.image} />
      </View>
     </TouchableOpacity>
      {/* Add your third button here */}
    </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  
  },
  buttonContainer: {
    // You can adjust the width and height values as needed
    width: 50,
    height: 50,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});








 //this search commponent which search the medicine by name 

 function Search() {
  let { mytext1, updatemytext1   , founder , updatefound} = useContext(Mycontext);
 
  let data 
  let findingmedicine = (val) => {
    updatemytext1(val);

    let found = false;
    for (let x = 0; x < ArrayofMedicines.length; x++) {
      if (ArrayofMedicines[x].name === val) {
        z
        updatefound(ArrayofMedicines[x])
        console.log(founder.name)
        console.log(founder.precaution)
        console.log(founder.uses)
        found = true;
        break; // Exit loop once found
      }
    }

    if (!found) {
      console.log("No result"); // Log if medicine not found
    }
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <TextInput
        maxLength={100}
        style={{ borderColor: 'black', borderWidth: 1, borderRadius: 40, margin: 20, width: '80%' }}
        placeholder="Enter the name of medicine"
        onChangeText={(val) => { findingmedicine(val) }}
        value={mytext1}
      />

      <View style={{ width: '100%', height: '100%', borderColor: 'grey', borderWidth: 1, backgroundColor: 'black' }}>
        <Text style={{ fontSize: 30, color: 'white' }}>Name of medicine</Text>
        <Text style={{ color: 'white' }}>{founder.name}</Text>
        <Text style={{ fontSize: 30, color: 'white' }}>Usage</Text>
        <ScrollView>
        <Text style={{ color: 'white' }}>{founder.uses}</Text>
        </ScrollView>
        <Text style={{ fontSize: 30, color: 'red' }}>Precaution</Text>
       <ScrollView>

       <Text style={{ color: 'white' }}>{founder.precaution}</Text>
       </ScrollView>
      </View>
    </View>
  );
};















// this  is    avator  which able to listen and answer 

const Avator = () => {
  const robot = require('./components/robotpic/closeeyerobot.png'); // Import the robot image
  const robot1 = require('./components/robotpic/opeyerobot.png'); // Import the robot image
  const microphone = require("./components/assets/microphone.png");
  const redmicrophone = require("./components/assets/redmicrophone.png");

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2 , setIndex2] = useState(0)
  
  const speaking = () => {

    
 if(index1 === 0){
  setIndex1(1)
  setIndex2(1)
 }
 else {
   setIndex1(0)
   setIndex2(0)
 }


  };
  


   let message = ""
   let message1 = "Tell Me What Happened My Dear "


  const robotArray = [robot, robot1];
  const microphonearray = [microphone , redmicrophone ]
  const arrayofmessage = [message,message1]

  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={robotArray[index1]} style={{ width: 200, height: 200 }} />
      </View>

      <View style={{ alignItems: 'center' }}>
        {/* Use TouchableOpacity to make the image clickable */}
        <TouchableOpacity onPress={()=>{speaking()}}>
          <Image source={microphonearray[index1]} style={{ width: 25 , height: 25 }} />
        </TouchableOpacity>
      </View>


      <View style={{alignItems:"center",        }}>

       
       <Text>

{arrayofmessage[index2]}

       </Text>

      </View>
    </>
  );
};





// this is the scanner which can able to  scane doctor prscription 


let Scanner = ()=>{

  return(
    <Text>
      this is Scanner
    </Text>
  )

}



















// array of ui  commponents 

let uiarray = [Search , Avator, Scanner  ].reverse()







let Userinterface = ()=>{

  let {userinterface } = useContext(Mycontext)



  return(

    <View style={{height:"85%"}}>

      {
        uiarray[userinterface]()
      }
    </View>
  )
}













 // this is the main components 


function App() {


 
 
  return (


<StateProvider>
  
<View  style={{backgroundColor:"#f5f6fa" , height:"100%"}} >
  <View style={{paddingTop:"1%"}}> 
    <Header />
  </View>


        <Menu></Menu>



 <View>
 <Userinterface></Userinterface>


 </View>


  <View >
    <PagesButtons />
  </View>
</View>
</StateProvider>
  );
}

export default App;
