export interface shipmentinterface{
    orderNo:string,
    date:string,
    customer:string,
    trackingNo:string,
    status:string,
    consignee:string
}

export interface shipstatusinterface{
    shipmentdetails:shipmentinterface[],
    status: 'idle' | 'loading' | 'failed',
}
