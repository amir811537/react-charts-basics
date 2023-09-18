import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
  const [phoneData, setPhonedata] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")

      .then((data) => {
        const phonedata1 = data.data.data;
        const phonesWithfakeData = phonedata1.map((phone) => {
          const object = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return object;
        })
        console.log(phoneData)

        setPhonedata(phonesWithfakeData)
      });
  }, []);

  return  <div className=" justify-center items-center h-screen">
  <div>
    <h2>Phones: {phoneData.length}</h2>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={phoneData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
};

export default Phones;
