"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PAGE = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const token = 'FcgkcfLJQVxPkNNUNAvgISmwnMzsUqhzojnoPzDSiAvgQsFbBd';
    const headers = {
      Authorization: `engguergi09ertgiojg`,
    };
    const params = {
      page: 1,
      items_per_page: 15,
      search_input: '',
      from_date: '',
      to_date: '',
      order_type: 'desc',
      order_field: 'created_date',
      active_status: '',
      product_id: '',
      batch_id: '',
      division_id: '',
    };

    axios.get(`http://192.168.29.192:8004/inventory_master_list?access_token=${token}&page=${params.page}&items_per_page=${params.search_input}&search_input=&from_date=&to_date=&order_type=${params.order_type}&order_field=${params.order_field}&active_status=&product_id=&batch_id=&division_id=`, { headers, params })
      .then((response) => {
        setDetails([response.data]);
        console.log("the dat1a in the PAGE is fetched sucessfully and it is proper.ly displaying" ,response.data.data);
        return response.data.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    {details && details.length > 0 ? (
        <ul>
          {details.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li> 
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PAGE;