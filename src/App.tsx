import { DialogComponent,PositionDataModel} from '@syncfusion/ej2-react-popups';
import { useState } from 'react';
import './App.css';

function App() {
  let animation: any={effect:'FlipXUp'}
  let position:PositionDataModel={X:'center',Y:'center'}
  const[visibility,setDialogVisibility]=useState(true);
 const buttons: object|any=[
  {
    buttonModel:{
      content:'cancel'
    },
    click:()=>{
      setDialogVisibility(false);
    }
  }
 ]
 function handleClick(){
  setDialogVisibility(true);
 }
  return (
   <div>
    <button className='e-control e-btn' onClick={handleClick}>Open Dialog</button>
    <DialogComponent
    height="160px"
    width="350px"
    header='Dialog'
    content='This is a Dialog with content'
    buttons={buttons}
    visible={visibility}
    showCloseIcon={true}
    position={position}
    allowDragging={true}
    enableResize={true}
    resizeHandles={['All']}
    isModal={true}
    >
      
    </DialogComponent>
    </div>
  );
}

export default App;
