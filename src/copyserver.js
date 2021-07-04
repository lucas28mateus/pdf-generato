/*const express = require('express')
const ejs = require('ejs')
const path = require('path')
const pdf = require('html-pdf')
const app = express()

const passengers = [
    {
        name: "Joyce",
        flightNumber: "7859",
        time: "18h00",
    }, 
     {
        name: "Brock",
        flightNumber: "7859",
        time: "18h00",
    },
    {
        name: "Eve",
        flightNumber: "7859",
        time: "18h30",
    },
    {
        name: "Luck",
        flightNumber: "2828",
        time: "20h00",
    },
];

app.get('/', (request, response) => {
   const filePath = path.join(__dirname, "print.ejs") 
   ejs.renderFile(filePath, {passengers}, (err, html) => {
       if(err) {
           return response.send('erro no arquivo')
       }

       const options = {
           height: "11.25in",
           width: "8.5in",
           header: {
            heught: "20mm"
           },
           footer: {
               height: "20mm"
           }
       }

       pdf.create(html, options).toFile("report.PDF", (err, data) => {
           if (err) {
               return response.send("erro ao gerar pdf")
           }

           return response.send(html)
       })


       
   })
}) 

app.listen(3000)*/