import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

 
        const searchApi = async (searchTerm) => {
            //console.log("hi there!");
            try{
            const responce = await yelp.get("/search",{
                param:{
                    limit:50,
                    term:searchTerm,
                    location:'san jose'
                },
            });
       
            setResult(response.data.business);
        }catch(err){
            // console.log(err);
            setErrorMessage("Somthing went wrong!");
        }
        };
    
        useEffect(() => {
            searchApi('pasta');
        }, []);

        return [searchApi, result, errorMessage];
};