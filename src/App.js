import React, { useEffect, useState } from 'react';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';

import Preloader from './assets/Preloader.png';
import RegSuccess from './assets/success-image.svg';

import './App.scss';



function App() {
  const [users, setUsers] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [isRegistred, setIsRegistred] = useState(false);

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        setNextUrl(data.links.next_url)
      })
      .catch(err => console.log(err))
  },[isRegistred])

  const checkForm = () => {
    setIsRegistred(true)
  }

  const onShowMoreUsers = (link) => {
    fetch(link)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
        setNextUrl(data.links.next_url)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className='app-container'>
        <div className='app-container__img-el'>
          <div className='app-container__img-el__content'>
            <h1>Test assignment for front-end developer</h1>
            <p>What defines a good front-end developer is one that has skilled knowledge of HTML, 
              CSS, JS with a vast understanding of User design thinking as they'll be 
              building web interfaces with accessibility in mind. They should also be excited to learn, as the world of 
              Front-End Development keeps evolving.</p>
              <Button label='Sign up' />
          </div>
        </div>
        <div className='app-container__get-block-el'>
          <h1>Working with GET request</h1>
          {users.length ? 
          <div className='app-container__get-block-el__users'>
            {users.map(item => <Card key={item.id} user={item} />)}
          </div> 
          : 
          <div>
            <div className='preloader'>
              <img src={Preloader} alt='preloader' />
            </div>
          </div>
          }
          <div onClick={() => onShowMoreUsers(nextUrl)}>
            {!nextUrl ?
            <div></div>
            :
            <Button label='Show more' />
            }
          </div>
        </div>
        <div className='app-container__form-el'>
          {isRegistred ? 
            <div className='app-container__form-el__registred'>
              <h1>User successfully registered</h1>
              <img src={RegSuccess} alt='registration done' />
            </div>
            :
            <div>
              <Form checkForm={checkForm} />
            </div>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
