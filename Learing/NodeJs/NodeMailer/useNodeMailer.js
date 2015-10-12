var nodemailer = require('nodemailer');

//使用SMTP协议发送邮件
//支持的服务 
//'1und1' 'AOL' 'DebugMail.io' 'DynectEmail' 'FastMail'
//'GandiMail' 'Gmail' 'Godaddy' 'GodaddyAsia' 'GodaddyEurope'
//'hot.ee' 'Hotmail' 'iCloud' 'mail.ee' 'Mail.ru' 'Mailgun'
//'Mailjet' 'Mandrill' 'Naver' 'Postmark' 'QQ' 'QQex' 'SendCloud'
//'SendGrid' 'SES' 'Sparkpost' 'Yahoo' 'Yandex' 'Zoho'

var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: '781397320@qq.com',
        pass: 'sun19930902'
    }
});

//邮件的内容
var mailOptions = {
    from: 'Fred Foo <781397320@qq.com>', 	//发件人地址
    to: '1498282352@qq.com', 				//收件人地址
    subject: 'Hello(Subject)', 				//邮件的标题
    text: 'Hello world(text)', 				//邮件的内容
    html: '<b>Hello world(html)</b>' 		//html body
};

//发送邮件
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});