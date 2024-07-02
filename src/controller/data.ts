import { Request, Response } from "express";

const data = (req: Request, res: Response) => {
    res.status(200).json({
        title: "P Balap"
    })
}

export default data;