const express = require("express");
const router = express.Router();

const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

router.post('/documentopdf',(req,res,next)=>{
    //res.send('PDF');
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    
    /* Seria usada de la siguiente manera */
    /*getBase64FromFile(file, function(base64){
    console.log(base64)
    });*/


    /*var dd = {
        content: [
        {
            image: '',
            width: 150,
			height: 150,
		}
        ],        
    };*/

    var dd = {
        background: function (page) {
            if (page !== 2) {
                return [
                    'Background paragraph on page ' + page,
                    'Another background paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
                    {
                        image: 'bee',
                        width: 200
                    }
                ];
            }
        },
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
            '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
            'Another Page',
            '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
            'Another Page'
        ],
    
        images: {
        }
    };

    const pdfDoc = pdfMake.createPdf(dd);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200,{
            'Content-Type':'application/pdf',
            'Content-Disposition':'attachment;filename="doc.pdf"'
        });
        const download = Buffer.from(data.toString('utf-8'),'base64');
        res.end(download);
    });
});

/*
* @param { img }: File
* @param { callback }: function 
*/
/*function getBase64FromFile(img, callback){
    let fileReader = new FileReader();
    fileReader.addEventListener('load', function(evt){
      callback(fileReader.result);
    });
    fileReader.readAsDataURL(img);
  }*/
module.exports = router;

