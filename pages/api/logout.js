import Cookies from 'cookies'

export default async function handler(req, res) {
  if (req.method == "POST"){
    const cookies = new Cookies(req, res)
    cookies.set('username')
    res.redirect("/")
  } else {
    res.redirect("/")
  }
}