import { useState } from "react";
import Editprofile from "./editprofile";
import Userprofile from "./Userprofile";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Wasis");
  const [email, setEmail] = useState("mat@.com");
  const [password, setPassword] = useState("123456      ");
  const stored = { name, email, password };

  console.log(name, email, password, "+++++++");

  const handleEditComplete = (result) => {
    console.log("handleEditComplete", result);
    if ((result = !null)) {
      setName(result.name);
      setEmail(result.email);
      setPassword(result.password);
    }
    setEditMode(false);
  };

  return (
    <div className="log_container">
      <div className="app">
        {editMode ? (
          <>
            <Editprofile
              stored={stored}
              editCompleteCallback={handleEditComplete}
            />
          </>
        ) : (
          <>
            <Userprofile
              stored={stored}
              startEditCallback={() => setEditMode(true)}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Profile;
