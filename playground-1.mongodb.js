// /* global use, db */
// // MongoDB Playground
// // To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// // Make sure you are connected to enable completions and to be able to run a playground.
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// // The result of the last command run in a playground is shown on the results panel.
// // By default the first 20 documents will be returned with a cursor.
// // Use 'console.log()' to print to the debug output.
// // For more documentation on playgrounds please refer to
// // https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// // Select the database to use.
// use('mongodbVSCodePlaygroundDB');

// // Insert a few documents into the sales collection.
// db.getCollection('sales').insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);

use("tokoonline");

// //membuat collection
// db.createCollection("produk");

// db.createCollection("pelanggan");

// db.createCollection("pesanan");

// //membuat document
// db.produk.insertMany([
//     {
//     nama_produk: "teh gelas", 
//     deskripsi_produk: "minuman teh",
//     harga_produk: 1000,
//     stok_produk: 30
//     },
//     {
//     nama_produk: "mie ayam", 
//     deskripsi_produk: "mie ayam",
//     harga_produk: 16000,
//     stok_produk: 30
//     },
// ])

// db.pelanggan.insertMany([
//     {
//     nama_pelanggan: "Budi", 
//     alamat_pelanggan: "Jakarta barat",
//     nomor_telpon_pelanggan: "0899999999",
//     email_pelanggan: "budi@test.com"
//     },
//     {
//     nama_pelanggan: "Sinta", 
//     alamat_pelanggan: "Bogor barat",
//     nomor_telpon_pelanggan: "0888888888",
//     email_pelanggan: "sinta@test.com"
//     },
// ])

// db.pesanan.insertMany([
//     {
//     nomor_pesanan: 1, 
//     tanggal_pesanan: new Date(),
//     produk_dipesan: 1,
//     jumlah_dipesan: 10,
//     total_harga: 10000,
//     }
// ])

// db.produk.insertMany([
//     {
//     nama_produk: "Laptop", 
//     deskripsi_produk: "laptop untuk kebutuhan kerja",
//     harga_produk: 5000000,
//     stok_produk: 40
//     },
//     {
//     nama_produk: "Mouse", 
//     deskripsi_produk: "mouse komputer dan laptop",
//     harga_produk: 100000,
//     stok_produk: 20
//     },
//     {
//     nama_produk: "Monitor", 
//     deskripsi_produk: "monitor pc 24inch",
//     harga_produk: 4000000,
//     stok_produk: 25
//     },
// ])

// db.produk.update(
//     {nama_produk: "teh gelas"},
//     {$set:{stok_produk: 28}}
// )

// db.produk.find({harga_produk : {$lt : 100000}})

// db.pelanggan.insertMany([
//     {
//     nama_pelanggan: "Joko", 
//     alamat_pelanggan: "Jakarta Selatan",
//     nomor_telpon_pelanggan: "08212132131",
//     email_pelanggan: "joko@test.com"
//     },
//     {
//     nama_pelanggan: "Putri", 
//     alamat_pelanggan: "Palembang",
//     nomor_telpon_pelanggan: "088776785",
//     email_pelanggan: "putri@test.com"
//     },
//     {
//     nama_pelanggan: "Fina", 
//     alamat_pelanggan: "Bandung",
//     nomor_telpon_pelanggan: "088655646436",
//     email_pelanggan: "fina@test.com"
//     },
// ])

// db.pelanggan.update(
//     {nama_pelanggan: "Budi"},
//     {$set: {alamat_pelanggan: "Australia"}}
// )

// db.pesanan.insertMany([
//     {
//     nomor_pesanan: 5, 
//     tanggal_pesanan: new Date(),
//     produk_dipesan: 5,
//     jumlah_dipesan: 100,
//     total_harga: 10000000,
//     status : "selesai",
//     },
//     {
//     nomor_pesanan: 6, 
//     tanggal_pesanan: new Date(),
//     produk_dipesan: 3,
//     jumlah_dipesan: 16,
//     total_harga: 20030000,
//     status : "selesai",
//     }
// ])

// db.pesanan.deleteMany({status: "selesai"})

// db.pesanan.createIndex(
//     {"tanggal_pesanan":1}, 
//     {expireAfterSecond: 120}
// )

// db.produk.find({stok_produk : {$gt: 0}})

// db.pelanggan.find(
//     {nomor_telpon_pelanggan : {$in : ["0899999999"]}}
// )

// db.pesanan.insertMany([
//     {
//     nomor_pesanan: 7, 
//     tanggal_pesanan: new Date(),
//     produk_dipesan: 1,
//     jumlah_dipesan: 100,
//     total_harga: 546677700,
//     status : "diproses",
//     },
//     {
//     nomor_pesanan: 8, 
//     tanggal_pesanan: new Date(),
//     produk_dipesan: 3,
//     jumlah_dipesan: 160,
//     total_harga: 2003000000,
//     status : "diproses",
//     }
// ])

// db.pesanan.find({status : {$in : ["diproses"]}})