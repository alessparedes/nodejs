const nodemailer = require("nodemailer");
module.exports = (formulario) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'paredesandro@gmail.com',
            clientId: '618640425566-qp9fu7gp5md1fnt33f6dri9ujva3ps4a.apps.googleusercontent.com',
            clientSecret: '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',
            refreshToken: '1//04GinbOn0DdEVCgYIARAAGAQSNwF-L9IrM47h9omma-2Yi0GVIBsTn6blcZo5y9WYNkKcat3zlH58M12Zg0eahv745jUvf1e26DA',
            accessToken: 'ya29.a0ARrdaM9je2REjs0yk-2BdtswtasF16jCAqE68n_11QXT0IG2l21Z_pvRLYfg6OSFYimgEpb1VJYymcvAkJxtzMZYxVwQ4XXCV5vxAAcrT-NUI4KjrZrVVMiNk6vOwiO3CHiSQDmK4ajx7E5Ze0DSd7kpAWBd',
            expires: 1484314697598
        }
    });
    // var transporter = nodemailer.createTransport({
    //     host: "smtp-mail.outlook.com", // hostname
    //     secureConnection: false, // TLS requires secureConnection to be false
    //     port: 587, // port for secure SMTP
    //     tls: {
    //         ciphers: 'SSLv3'
    //     },
    //     auth: {
    //         user: 'apbarenos@hotmail.com',
    //         pass: ''
    //     }
    // });
    if (formulario.telefono == null || formulario.telefono == 'undefined') {
        formulario.telefono = '';
    }
    const mailOptions = {
        from: `no-replay <paredesandro@gmail.com>`, 
        to: 'paredesandro@gmail.com',
        //     AddOther <AddOther@domain>,
        subject: 'Contacteme',
        html: "Buena tarde <strong>Pool Energy Consultores</strong>,<br> Deseo que me contacten" +
            "<br><strong>Nombre:</strong><br>" + `${formulario.nombre}` + "<br/>" +
            "<strong>Telefono:</strong><br>" + `${formulario.telefono}` + "<br/>" +
            "<strong>E-mail:</strong><br>" + `${formulario.email}` + "<br/>" +
            "<strong>Mensaje:</strong><br>" + `${formulario.asunto}` + ""

    };
    console.log("prueba antes de enviar");
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log("Error " + err);
        else
            console.log("info " + JSON.stringify(info));
    });
    console.log("prueba DESPUES de enviar " + formulario.email);
}