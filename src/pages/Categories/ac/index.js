import React, { useEffect, useState } from "react";
import TitlePage from "../../../components/UI/Title/TitlePage";
import authService from "../../../services/auth.service";
import Input from "../../../components/UI/Input/Input";
import MainLayout from '../../../components/layouts/MainLayout';
import styles from "./index.module.scss";
import Message from "../../../components/UI/Message/Message";
import withAuth from "../../../HOC/withAuth";




const Index = () => {
    const [user, setUser] = useState({});
      const [success, setSuccess] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      authService
        .updateUser(token, user)
          .then((data) => {
              console.log(data);
              setSuccess(true);
              setUser(data.user);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {    const token = localStorage.getItem("token");
      authService
        .getUser(token)
        .then((data) => {
          setUser(data);
        })
        .catch((err) => console.log(err));
    }, []);
      return (
        <MainLayout>

        <div>
        dfdfdf    
        </div>
        </MainLayout>

    );
}

export default Index;
