import Cookies from 'cookies'
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method == "POST"){
    // const cookies = new Cookies(req, res)
    // cookies.set('username', '45ni34nkweq')
    // res.redirect("/")
    const password = req.body['password']
    const passwordagain = req.body['passwordagain']
    const client = await clientPromise;
    const db = client.db("Users");
    // that works
    // await db.collection("Profiles").insertOne({"Test": 1});
    res.redirect("/")
  } else {
    res.redirect("/")
  }
}