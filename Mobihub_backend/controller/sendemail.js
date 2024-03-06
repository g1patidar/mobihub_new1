var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pankeshmeena977@gmail.com',
        pass: 'vhkc dcpi uvrv gmnx'
    },
    secure: true,
    tls: {
        rejectUnauthorized: false
    }
});


var mailOptions = {
    from: 'pankeshmeena977@gmail.com',
    to: 'yashnigam1801@gmail.com',
    subject: 'Email Sent by Node JS towards gmail',
    html: `
        <div style="max-width: 400px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; text-align: center;">eCommerce Form</h2>
            <div style="margin-bottom: 20px;">
                <label for="name" style="display: block; font-weight: bold; margin-bottom: 5px;">Name:</label>
                <input type="text" id="name" name="name" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div style="margin-bottom: 20px;">
                <label for="email" style="display: block; font-weight: bold; margin-bottom: 5px;">Email:</label>
                <input type="email" id="email" name="email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;">
            </div>
            <div style="margin-bottom: 20px;">
                <label for="message" style="display: block; font-weight: bold; margin-bottom: 5px;">Message:</label>
                <textarea id="message" name="message" style="width: 100%; height: 100px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;"></textarea>
            </div>
            <button type="submit" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; display: block; margin: 0 auto;">Submit</button>
        </div>
        <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" style="display: block; margin: 20px auto; width: 50%">
    `
};


transporter.sendMail(mailOptions, function(error , info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Email Send:'+ info.response);
    }
})

