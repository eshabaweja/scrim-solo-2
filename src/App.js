import React from 'react';
import Header from './components/Header';
import Entry from './components/Entry';
import data from './components/data';
import './App.css';

function App() {

  const entries = data.map(item => {
    
    return(
        <Entry 
        name = {item.title}
        place = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        started = {item.startDate}
        ended = {item.endDate}
        description = {item.description}
        imageUrl = {item.imageUrl}
        />
    )
})

  return (
    <div className="App">
      <Header/>
      {entries}
    </div>
  );
}

export default App;
