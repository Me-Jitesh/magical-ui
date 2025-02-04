import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';


const App: React.FC = () => {
  return (
    <>
      <Counter />
      <UserDataForm />
      <RichTextEditor />
    </>
  );
};

export default App;
