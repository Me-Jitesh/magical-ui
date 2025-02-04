import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import Navbar from './components/NavBar';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Counter />
      <UserDataForm />
      <RichTextEditor />
    </>
  );
};

export default App;
