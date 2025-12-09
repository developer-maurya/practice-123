import BoxMo from "./component/boxMo"
import Me from "./assets/ME.jpg"
import MeC from "./assets/CHITRANJAN PHOTO.jpg"
import Mep from "./assets/Passport_Photograph.jpg"

 

function App() {

  return (
    <>
    <div className="box-head" id="main"> 
     <BoxMo name="Chitranjan" desc="desc1" image={Me}/>
     <BoxMo name="ravi" desc="desc2" image={MeC}/>
     <BoxMo name="shatyam" desc="desc3" image={Mep}/>
     </div>
    </>
  )
}

export default App


