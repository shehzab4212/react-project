// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { ScreenStack } from "react-native-screens";
// import CoinsList from "./screens/CoinsList";
// import Coin from "./screens/Coin";
// import ChatsScreen from "./screens/Chats";
// import DrawerNavigator from "./navigation/drawer";
// import colors from "./constants/colors";


// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//       <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //     <Stack.Screen component={ChatsScreen} name="ChatsScreen" />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { useState } from "react";





const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter first name'),
  lastName: Yup.string().required('Enter last name'),
  email: Yup.string().email('Invalid email').required('Enter email address'),
  password: Yup.string().required('Enter Password'),
});

export default function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (

          <View>
            <View style={styles.subcontainer}>
             <TextInput
                name="firstName"
                placeholder="First Name"
                style={[
                  { borderColor: errors.firstName  && touched.firstName ? 'red' : !touched.firstName  ? 'black' : 'green' },
                  styles.input,
                ]}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                
              />
              {
                touched.firstName && (
                  <Icon
                  style={{marginLeft:10}}
                  name={errors.firstName ? 'times-circle':'check-circle'}
                  size={15}
                  color={errors.firstName ? 'red':'green'}
                />
                )
              }
               
            </View>
            {errors.firstName && touched.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
            )}

          <View style={styles.subcontainer}>
             <TextInput
                name="lastName"
                placeholder="Last Name"
                style={[
                  { borderColor: errors.lastName  && touched.lastName ? 'red' : !touched.lastName  ? 'black' : 'green' },
                  styles.input,
                ]}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                
              />
                 {
                touched.lastName && (
                  <Icon
                  style={{marginLeft:10}}
                  name={errors.lastName ? 'times-circle':'check-circle'}
                  size={15}
                  color={errors.lastName ? 'red':'green'}
                />
                )
              }
            </View>

            {errors.lastName && touched.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
            )}


          <View style={styles.subcontainer}>
             <TextInput
                name="email"
                placeholder="Email Address"
                style={[
                  { borderColor: errors.email  && touched.email ? 'red' : !touched.email  ? 'black' : 'green' },
                  styles.input,
                ]}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                
              />
              {
                touched.email && (
                  <Icon
                  style={{marginLeft:10}}
                  name={errors.email ? 'times-circle':'check-circle'}
                  size={15}
                  color={errors.email ? 'red':'green'}
                />
                )
              }
            </View>

            {errors.email && touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
            )}

            <View style={styles.subcontainer}>
             <TextInput
                secureTextEntry={passwordShown ? false : true} 
                name="password"
                placeholder="Password"
                style={[
                  { borderColor: errors.password  && touched.password ? 'red' : !touched.password  ? 'black' : 'green' },
                  styles.input,
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                
              />
 {
                touched.password && (
                  <Icon
                  style={{marginLeft:10}}
                  name={passwordShown ? 'eye':'eye-slash'}
                  size={15}
                  color={'black'}
                  onPress={() => togglePassword()}    
                />
                )
              }
            </View>

            {errors.password && touched.password && (
                <Text style={styles.error}>{errors.password}</Text>
            )}


            {/* <TextInput
              name="lastName"
              placeholder="Last Name"
              style={[
                { borderColor: errors.lastName && touched.lastName ? 'red' : !touched.lastName  ? 'black' : 'green' },
                styles.input,
              ]}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <Text style={styles.error}>{errors.lastName}</Text>
            )}
            <TextInput
              name="email"
              placeholder="Email"
              style={[
                { borderColor: errors.email && touched.email ? 'red' : !touched.email  ? 'black' : 'green' },
                styles.input,
              ]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              name="phoneNumber"
              placeholder="Phone Number"
              style={[
                { borderColor: errors.phoneNumber && touched.phoneNumber ? 'red' : !touched.phoneNumber  ? 'black' : 'green' },
                styles.input,
              ]}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            )}
            <View style={{ marginTop: 20 }}>
              <Button
                disabled={!isValid}
                onPress={handleSubmit}
                title="Submit"
              />
            </View> */}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginVertical: 50,
    marginHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },

  subcontainer:
  {
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:10,
    flexDirection:'row',
     marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width:400,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent:'center',
    // marginTop: 20,
    borderRadius: 5,
  },
  error: {
    color: 'red',
  },
});
