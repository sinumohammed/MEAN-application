module.exports = {
    port: process.env.PORT || 3000,
    db:{
      //local url
      url:'mongodb://localhost:27017/contactlist',

      // M Lab url
      //url:'mongodb://admin:admin@ds259079.mlab.com:59079/contactlists'
    }
  }