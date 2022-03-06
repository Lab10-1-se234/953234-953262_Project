const products = [{
    "id":"1",
    "title":"ผัดกะเพรา",
    "price":70,
    "imageURL":"https://sls-prod.api-onscene.com/partner_files/trueidintrend/6410/New%20Project.jpg",
    "description":"the new one",
},
{
    "id":"2",
    "title":"หมูกระเทียม",
    "price":60,
    "imageURL":"http://www.naibann.com/wp-content/uploads/2020/08/garlic-pork-recipe-1.jpg",
    "description":"the new one",
},
{
    "id":"3",
    "title":"ผัดผงกะหรี่",
    "price":300,
    "imageURL":"https://img-global.cpcdn.com/recipes/1c6340f33ad66d63/1200x630cq70/photo.jpg",
    "description":"the new one",
},
{
    "id":"4",
    "title":"ผัดน้ำมันหอย",
    "price":90,
    "imageURL":"https://food.mthai.com/app/uploads/2019/06/Stir-Fried-Beef-with-Oyster-Sauce-28.jpg",
    "description":"the new one",
},
{
    "id":"5",
    "title":"ผัดพริกเผา",
    "price":70,
    "imageURL":"https://img.wongnai.com/p/1968x0/2018/06/13/89ebd97287654f5e946470f91a6e4a6a.jpg",
    "description":"the new one",
},
{
    "id":"6",
    "title":"Spiced Pineapple Cooler ",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015433_original.jpg",
    "description":"เครื่องดื่มแก้วนี้ทำจากน้ำสับปะรด มีกลิ่นหอมๆ จากอบเชยและกานพลู ไม่มีแอลกอฮอล์ เหมาะสำหรับผู้สูงวัย",
},
{
    "id":"7",
    "title":"Lychee Spritzer",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015447_original.jpg",
    "description":"เครื่องดื่มง่ายๆ ดื่มได้ทุกเพศทุกวัย ผสมรวมกันในกระบอกเชก แค่เขย่าๆ ก็ได้เครื่องดื่มเย็นกลิ่นหอมๆ จากลิ้นจี่",
},
{
    "id":"8",
    "title":"Bahamas Punch",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015505_original.jpg",
    "description":"แก้วนี้เป็นพันช์น้ำผลไม้รสเปรี้ยว มีกลิ่นรัมอ่อนๆ ถ้ามีเด็กดื่มด้วยก็ไม่ต้องใส่แอลกอฮอร์",
},
{
    "id":"9",
    "title":"Pomegranate Sparkle ",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015520_original.jpg",
    "description":"the new one",
},
{
    "id":"10",
    "title":" Honey Red Fruits Sangria",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015534_original.jpg",
    "description":"the new one",
},
{
    "id":"11",
    "title":" กล้วยบวชชี",
    "price":70,
    "imageURL":"https://static.thairath.co.th/media/PZnhTOtr5D3rd9ocJNvSQhUkNzkfl5GsghoipKW9Bxhui9G.webp",
    "description":"กล้วยบวชชีเป็นขนมไทยโบราณที่เกิดจากการคิดค้นนำผลไม้พื้นบ้าน ที่ปลูกกันทุกครัวเรือนมาดัดแปลงรสชาติเป็นขนมหวานราดกะทิหอมๆ นิยมนำกล้วยน้ำว้าทั้งลูกไปต้มทั้งเปลือก เพื่อไม่ให้ผลกล้วยฝาด หลังจากนั้นนำมาปอก ต้มกับน้ำตาลปี๊บ หางกะทิ ถ้าอยากให้หอมก็ใส่ใบเตยเข้าไปต้มด้วย",
},
{
    "id":"12",
    "title":"ทองหยอด",
    "price":70,
    "imageURL":"https://static.thairath.co.th/media/PZnhTOtr5D3rd9ocJNvSQhUkNzkfl5GsgME1acK9YAK9vGT.webp",
    "description":"ทองหยอด เป็นขนมไทยตระกูลทองที่ขึ้นชื่อว่าเป็นขนมมงคล ใช้ไข่เป็ดแยกเฉพาะไข่แดง กรองผ้าขาวบางให้ฟู จากนั้นคนแป้งให้เข้ากันกับไข่แดง นำไปหยอดในน้ำเชื่อมที่ตั้งอยู่บนเตา เมื่อทองหยอดสุกแล้วจะลอยขึ้นมาจากน้ำ จึงตักขึ้นมาพักให้เย็น",
},
{
    "id":"13",
    "title":" ทองหยิบ",
    "price":70,
    "imageURL":"https://static.thairath.co.th/media/Dtbezn3nNUxytg04N1N2TfUADVrObGjDBbbolMJvYSkmmI.webp",
    "description":"ทองหยิบ เป็นอีกหนึ่งขนมมงคลตระกูลทอง ใช้ส่วนผสมและวิธีทำเหมือนทองหยอด แต่ตีเนื้อให้แบนก่อนลงน้ำเชื่อมในกระทะ ใช้วิธีจับจีบขนมที่ลอยขึ้นมาก่อนตั้งพักไว้ให้เย็น เพื่อให้มีรูปทรงเป็นกลีบดอกไม้",
},
{
    "id":"14",
    "title":" ลูกชุบ",
    "price":70,
    "imageURL":"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20200102015534_original.jpg",
    "description":"ลูกชุบ เป็นขนมไทยที่ทำจากถั่วเขียว ไส้ทำมาจากถั่วเขียวเลาะเปลือกนึ่งปั่นกับหัวกะทิและน้ำตาลทราย นำมาปั้นพักเสียบไม้ไว้ เพื่อนำมาจุ่มกับสีผสมอาหาร และเคลือบด้วยวุ้น ปักด้วยใบไม้ให้สมจริง เพิ่มสีสันความสวยงาม",
},
{
    "id":"15",
    "title":" ขนมต้ม",
    "price":70,
    "imageURL":"https://static.thairath.co.th/media/PZnhTOtr5D3rd9ocJNvSQhUkNzkfl5GsgoK4EGWy1VePrG0.webp",
    "description":"ขนมต้ม เป็นขนมที่มีไส้และห่อด้วยแป้งคลุกมะพร้าวขูด วิธีทำผัดไส้ก่อนด้วยมะพร้าวขูด น้ำตาลปี๊บ เกลือ น้ำใบเตย เมื่อเคี่ยวแห้งแล้วนำมาตั้งให้หายร้อน นวดแป้งข้าวเหนียวกับกะทินำมาห่อไส้ขนม แล้วต้มในน้ำเดือด แป้งที่สุกแล้วจะลอยน้ำขึ้นมา จากนั้นนำลูกขนมมาคลุกกับเนื้อมะพร้าวขูด",
},
];

class Product {

    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
    }

    save() {
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
    }
   

    static findfood() {
        const food = [products[0],products[1],products[2],products[3],products[4]]
        return food;
    }
    static findbeverage() {
        const beverage= [products[5],products[6],products[7],products[8],products[9]]
        return beverage;
    }
    static finddessert(){
        const dessert = [products[10],products[11],products[12],products[13],products[14]]
        return dessert;
    }

    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }

    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }

}

module.exports = Product;