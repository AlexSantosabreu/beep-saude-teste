export interface CustomerService {


  id: number;
  call_id: number;
  ticket_voucher: number;
  schedule_date: string;
  product_type: string;
  modality: string;
  requester: Request;
  partner: Partner;
  products: Products[];

}


export interface Requester  {
  name: string;
  phone: string;
}

export interface Partner {
  id: number;
  name: string;
  phone: string;
  partner_address: string;
}

export interface  Products {
  quantity: number;
  product_name: string;
  product_category_name: string;

}

