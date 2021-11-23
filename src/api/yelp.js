import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization:'Bearer RIneZwbjTgCXHHTgvo9A6fpapEva7L102QUzbunBhMZjAsSj_MeHOCSfK5tbU6GYLQa1W9Lma-brHPEKRrNuXkQC3_0qKe9NvZIC18oBl1anP_0ZOz2XR-EUp-6cYXYx'
    }
});

