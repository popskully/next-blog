import data from './data'
import type { NextApiRequest, NextApiResponse } from 'next'

// api/trending
export default function handler(  req: NextApiRequest,
    res: NextApiResponse){
    
    const {Trending} =data;
    if(Trending) return res.status(200).json(Trending)
    return res.status(404).json({ error: "Data not found" })
}