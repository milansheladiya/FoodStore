import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

 
        const searchApi = async (searchTerm) => {
            //console.log("hi there!");
            try{
            const response = await yelp.get("/search",{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'san jose'
                },
            });
            setResult(response.data.businesses);
        }catch(err){
            setErrorMessage("Somthing went wrong!");
        }
        };
    
        useEffect(() => {
            searchApi('meat');
        }, []);
        return [searchApi, result, errorMessage];
};