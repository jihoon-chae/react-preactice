import React from "react"; // 안해도 되는데 리액트 할때 습관처럼
import AppLayout from '../components/AppLayout';
const Home = () => {
  return(
    <AppLayout>
    <div>Hello, Next</div>
   </AppLayout> // 감싸진 것들이 children이 됨
  )
}

export default Home;