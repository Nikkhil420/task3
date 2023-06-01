import { useEffect, useState } from "react";
import "./App.css";
import { resolve } from "path";
import { rejects } from "assert";

function App() {
  const [Username, setUsername] = useState<string>("N");
 const [UserAge, setUserAge] = useState<number>(25);
 const [UserCity, setUserCity] = useState<string>("Nagpur");


  const UsernameApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
        resolve({ name: " Nikhil " });
      }, 1000);
    });
  };
  const UserAgeApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
        resolve({ age: 20 });
      }, 1500);
    });
  };
  const UserCityApi = () => {
    return new Promise<any>((resolve, reject) => {
      return setTimeout(() => {
        resolve({ city: " Mumbai " });
      }, 1500);
    });
  };



  const getUsername = async () => {
    
    const username = await UsernameApi();
    console.log("username", username);
    const { name } = username;
     setUsername(name);
  };

  const getUserAge = async () => {
    
    const UserAge = await UserAgeApi();
    console.log("UserAge", UserAge);
    const { age} = UserAge;
     setUserAge(age);
  };

  const getUserCity = async () => {
    
    const UserCity = await UserCityApi();
    console.log("UserCity", UserCity);
    const { city } = UserCity;
     setUserCity(city);
  };


  useEffect(() => {
    getUsername()
  }, []);

  useEffect(() => {
    getUserAge();
  }, []);

  useEffect(() => {
    getUserCity();
  }, []);


  return <div>

 <h1>Username = {Username}</h1>
 <h1>Age = {UserAge}</h1>
 <h1>City = {UserCity}</h1>


  </div>;
}

export default App;
