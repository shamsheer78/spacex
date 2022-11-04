import axios from "axios";
import React from "react";
import LaunchCard from '../Components/LaunchCard';

const baseURL = "https://api.spacexdata.com/v3/launches/";

export default function Home() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container" style={{ display: "grid" , gridTemplateColumns: 'auto auto auto', rowGap: '20px' }}>
        {post && post.length>0 && post.map((itm, index) => (
            <LaunchCard homeData = {itm} key={index} ></LaunchCard>            
        ))}
    </div>
  );
}