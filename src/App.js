import "./App.css";
import Login from "./MyComponents/Login";
import ProductForm from "./MyComponents/ProductForm";
import Dashboard from "./MyComponents/Dashboard";
import NoPage from "./MyComponents/NoPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const loginDetails = [
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "user@gmail.com", password: "user123", role: "user" },
  ];
  const [currentUser, setCurrentUser] = useState("");
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("DhruvilTest"));
    localData !== null && localData.length !== 0 && setData([...localData])
  }, []);

  useEffect(() => {
    localStorage.setItem("DhruvilTest", JSON.stringify(data));
  }, [data]);

  const checkLogin = (obj) => {
    loginDetails.forEach((detail) => {
      if (detail.email === obj.email && detail.password === obj.password) {
        setCurrentUser(obj.email);
        if (detail.role === "admin") {
          setAdmin(true);
          setUser(false);
          navigate("/Dashboard");
        } else if (detail.role === "user") {
          setUser(true);
          setAdmin(false);
          navigate("/ProductForm");
        }
      }
    });
  };

  const handleLogout = () => {
    setCurrentUser("");
    setAdmin(false);
    navigate("/");
  };

  const addProduct = (obj) => {
    setData((prevState) => [...prevState, obj]);
  };

  return (
    <div className="mainBody">
      <Routes>
        <Route path="/" element={<Login checkLogin={checkLogin} />} />
        {user && (
          <Route
            path="ProductForm"
            element={
              <ProductForm
                addProduct={addProduct}
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            }
          />
        )}
        {admin && (
          <Route
            path="Dashboard"
            element={
              <Dashboard
                data={data}
                currentUser={currentUser}
                handleLogout={handleLogout}
              />
            }
          />
        )}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
