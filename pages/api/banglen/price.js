// 

export default async function handler(req, res) {
    const url = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2018-01-01&to_date=2018-02-28";
    let promiseA = await fetch(url);
    let data = await promiseA.json();
    // let filtered_data = data.waterlevel_data.data.filter(function (item) {
    //     return item.geocode.province_name.th == "นครปฐม";
    // });
    res.status(200).json(data);
}