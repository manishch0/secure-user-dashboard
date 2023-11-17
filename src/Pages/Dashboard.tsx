import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setUserData } from "../redux/data";
import ApiService from "../Service/ApiService";


type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const userData = await ApiService.fetchUserData(user.id);
          dispatch(setUserData(userData));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch, user]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data || []); 
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      )}
      <div>
        {Array.isArray(data) ? (
          Object.values(data).map((user: any, index: number) => (
            <div key={index}>
              <p className="text-3xl font-bold underline">ID: {user.id}</p>
              <p  className="mt-2 text-red-600">Email: {user.email}</p>
              <p className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80 rounded-md">First Name: {user.first_name}</p>
              <p>Last Name: {user.last_name}</p>
              <img src={user.avatar} alt={`Avatar ${user.id}`} />
            </div>
          ))
        ) : (
          <p>Data is not an array</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
