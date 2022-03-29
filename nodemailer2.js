// server.js

const { createServer } = require('http')
const nodemailer = require('nodemailer')
const port = 3100
const server = createServer()

server.on('request', requestHandler)

server.on('error', (err) => console.log(err.stack))

function requestHandler(req, res) {
    let { url, method } = req
    console.log('requestHandler res:' + res);
    if (method === 'POST' && url === '/formulario/') return sendEmail(res)

    res.statusCode = 404
    res.end(':(')
}

function sendEmail(res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'paredesandro@gmail.com',
            clientId: '618640425566-qp9fu7gp5md1fnt33f6dri9ujva3ps4a.apps.googleusercontent.com',
            clientSecret: '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',
            refreshToken: '1/8tAdSQw9eARxKyEo7t456Y5nThaOWUmVhwBPCbyAA5UwhgecnGvrmrbS9JtaVViO',
            accessToken: 'ya29.GlsxB0FquhpBRTMFDRqJd-x03dLW2qH7ArwwOafT4aoBjE5P1uyqf8gePAgcON5vd9x16pRQOLutGI0Z6lzeAw45QLKzIVg3w9MbmP4iM_44fIZV09zUHaTb-Tfr',
            expires: 1484314697598
        }
    });

    const mailOptions = {
        from: `no-replay <paredesandro@gmail.com>`, //`”${formulario.nombre} 👻” <${formulario.email}>`
        to: `apbarenos@hotmail.com`, //${formulario.email}
        subject: 'Contacteme',
        html: "Buena tarde <strong>Pool Energy Consultores</strong>,<br> Deseo que me contacten"
            /*+
                       "<br><strong>Nombre:</strong><br>" + `${formulario.nombre}` + "<br/>" +
                       "<strong>Telefono:</strong><br>" + `${formulario.telefono}` + "<br/>" +
                       "<strong>E-mail:</strong><br>" + `${formulario.email}` + "<br/>" +
                       "<strong>Mensaje:</strong><br>" + `${formulario.asunto}` + ""*/

    };

    transporter.sendMail(mailOptions, (err, info) => {
        console.log('sendMail');
        if (err) throw new Error(err)

        res.statusCode = 200
        res.end('Email sent!')
    })
}

server.listen(port, () => console.log(`Server is listening on ${port}`))