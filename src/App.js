import  * as API from "./launches"
import { useState, useEffect } from "react";
import './App.css';
import logo from './assets/share.jpg';
import { Heading, Box, Flex, Text, Image, Spacer, Tag } from '@chakra-ui/react';

function App() {
  const [launches,setLaunches] = useState([]);

  useEffect (()=> {
    API.getAllLaunches().then(setLaunches);
  },[]);



  return (
    <div className="caja">
      <img src={logo} width={300}/> 
       <Heading as="h1" size="lg" m={4}> SpaceX launches</Heading>

       {launches.map((launch) =>(
      <Box key={launch.flight_number} 
      bg='gray.100'
       p={4} 
       m={4} 
      borderRadius="lg" 
      color='black'
      >
      <Box display="flex">
<text fontSize="2xl">
  Mission <strong>{launch.mission_name}</strong>
  ({launch.launch_year})
</text>
<Spacer/>
<Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>{launch.launch_success ? "Success" : "Failure" }</Tag>
      </Box>
     
          {launch.mission_name} ({launch.launch_year})
          </Box>
        ))}

      </div>
  );
}

export default App;
