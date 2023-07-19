import './App.css';
import AppBarHandle from './Components/AppBar';
import TextFieldhandle from './Components/TextField';
import TextFieldFormhandle from './Components/FormControl';
import { Toolbar, Typography } from '@mui/material';
import MenusHandle from './Components/Menu';
import CardHandle from './Components/Card';
import DialogHandle from './Components/Dialog-Modal';
import LinkHandle from './Components/Link';

function App() {
  return (
    <div className="App">
      
      <AppBarHandle></AppBarHandle>
      <div style={{marginTop:"70px",marginLeftL:"20px"}}>
    
      <DialogHandle></DialogHandle>
      <LinkHandle></LinkHandle>
      <TextFieldFormhandle></TextFieldFormhandle>
      <CardHandle></CardHandle>
      </div>
    </div>
  );
}

export default App;
