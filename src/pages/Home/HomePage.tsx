import { useState } from "react";
import JoinForm from "../../components/Forms/JoinForm";
import CreateForm from "../../components/Forms/CreateForm";
import "./HomePage.scss";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const [selectStatus, setSelectStatus] = useState<string>("join");
  
  return (
    <div className="main">
      <div className="wrapper">
        <div className="formBox">
          {
            selectStatus === "join" ? 
            <>
              <JoinForm />
              <p>or...</p>
              <Button onClick={() => setSelectStatus("create")}>HOST YOUR OWN GAME!</Button>
            </> : 
            <>
              <CreateForm/>
              <p>or...</p>
              <Button onClick={() => setSelectStatus("join")}>JOIN YOUR FRIENDS!</Button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage;