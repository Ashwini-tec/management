
import ejs from 'ejs';
import pdf from 'html-pdf';
import config from '../lib/config.js';
import AWS from 'aws-sdk';

async function createInvoicePdf(invoiceData, qr) {
    try {
        // Configure AWS SDK
        AWS.config.update({
            accessKeyId: config.AWS.accessKeyId,
            secretAccessKey: config.AWS.secretAccessKey,
        });

        const s3 = new AWS.S3();
        const bucketName = config.AWS.BucketName;

        const html =  new Promise((resolve, reject) => {
            ejs.renderFile('./public/invoice.ejs', { body:invoiceData, qr },function (err, pdfTemplateData) {
                if (err){
                    reject(err);
                }
                else {
                    resolve(pdfTemplateData);
                }
            });
        });
        const options = { format: 'Letter' };
        const fileName = `Invoice-${invoiceData.order_Id}.pdf`;
        // pdf.create(await html, options).toFile(fileName, async function(err, res) {
        //     if (err) return console.error(err);
        // });

        // eslint-disable-next-line no-async-promise-executor
        const buffer = await new Promise(async(resolve, reject) => {
            pdf.create(await html, options).toBuffer(function (err, buffer) {
                if (err) {
                    console.error('Error creating PDF:', err);
                    reject(err);
                } else {
                    resolve(buffer);
                }
            });
        });

        // Set parameters for S3 upload
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: buffer,
            ContentType: 'application/pdf',
        };

        const uploadResult = await new Promise((resolve, reject) => {
            // Upload the file to S3
            s3.upload(params, (err, data) => {
                if (err) {
                    console.error('Error uploading file:', err);
                    reject(err);
                } else {
                    resolve(data.Location);
                }
            });
        });
        return { fileName, pdfURL: uploadResult };
    } catch (error) {
        console.error(error);
    }
}

export default createInvoicePdf;