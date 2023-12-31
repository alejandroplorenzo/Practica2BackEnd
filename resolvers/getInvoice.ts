import { Request, Response } from "npm:express@4.18.2";
import InvoiceModel from "../db/invoice.ts";

const getInvoice = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const invoice = await InvoiceModel.findById(id).exec();
        if (!invoice) {
            res.status(404).send("Invoice not found");
            return;
        }
        res.status(200).send(invoice);
    }catch(error){
        res.status(404).send(error.message);
        return;
    }
}

export default getInvoice;