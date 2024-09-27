// import React, { useState } from "react";
// import { View, TextInput, Text } from "react-native";
// function Search(){
//   const [text, setText] = useState('');

//   return (
//     <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         maxLength={100}
//         style={{ borderColor: 'black', borderWidth: 1, borderRadius: 40, margin: 20, width: '80%' }}
//         placeholder="Enter the name of medicine"
//         value={text}
//         onChangeText={(inputText) => setText(inputText)}
//       />

//       <View style={{ width: '100%', height: '80%', borderColor: 'grey', borderWidth: 1, backgroundColor: 'black' }}>
//         <Text style={{ fontSize: 30, color: 'white' }}>Name of medicine</Text>
//         <Text style={{ color: 'white' }}>{text}</Text>
//         <Text style={{ fontSize: 30, color: 'green' }}>Usage</Text>
//         <Text style={{ color: 'white' }}>{/* Display usage information */}</Text>
//         <Text style={{ fontSize: 30, color: 'red' }}>Precaution</Text>
//         <Text style={{ color: 'white' }}>{/* Display precaution information */}</Text>
//       </View>
//     </View>
//   );
// };

// export default Search;
