import data from '../data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(  req: NextApiRequest,
    res: NextApiResponse){
    
    const {Posts} =data;
    if(Posts) return res.status(200).json(Posts); //if post exists

    return res.status(404).json({ error: "Data not found" })
} 