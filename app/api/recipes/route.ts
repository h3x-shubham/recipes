import { NextRequest } from "next/server";


const url = process.env.APIurl;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':process.env.APIKey,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

type prop = {
    count: number;
    results: string[];
};
export async function GET(request:NextRequest) {
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        // const res= response.json();
        // const result = res

        return new Response(result,{status:200})
    } catch (error) {
        return new Response(JSON.stringify({error}),{status:500})
    }

}