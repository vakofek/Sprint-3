import { utilService } from '../util-service.js'

export const mailData = {
    getMails
}

function getMails() {
    return mails;
}
const names = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney", "Destiny", "Morgan", "Jennifer", "Jasmine", "Haley", "Julia", "Kaitlyn", "Nicole", "Amanda", "Katherine", "Natalie", "Hailey", "Alexandra", "Savannah", "Chloe", "Rebecca", "Stephanie", "Maria", "Sophia", "Mackenzie", "Allison", "Isabella", "Amber", "Mary", "Danielle", "Gabrielle", "Jordan", "Brooke", "Michelle", "Sierra", "Katelyn", "Andrea"]
const emailUrls = ['@gmail.com', '@walla.com', '@gov.co.il', '@yahoo.com', '@net.com', '@aero.com', '@biz.com', '@info.com']


function _createOrigin() {
    var name = names[utilService.getRandomInt(0, names.length - 1)];
    return { mail: `${name}${emailUrls[utilService.getRandomInt(0, emailUrls.length - 1)]}`, name }
}

const mails = [
    {
        mailId: utilService.makeId(),
        subject: "You're Invited: Get to Know Zoom Chat",
        body: `Zoom Chat can be used for instant collaboration, file sharing, group messaging, and much more! In this webinar, your Zoom host will walk through the key Zoom Chat features and tips for successful team collaboration. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Zoom',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'webinars@e.zoom.us', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "JOIN A LIVE ZOOM DEMO",
        body: `JOIN A LIVE ZOOM DEMO
        Drop in for one of our daily Live Demos with Zoom expert, Raul Montes for an overview of how to schedule, host, and join Zoom meetings. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Zoom',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'webinars@e.zoom.us', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "Why not treat yourself to new Car Tools",
        body: `
        Wish is a marketplace that lets you discover items from thousands of merchants around the world. Check out these merchants' deals! (Product Listings, including images, reference prices, and related discounts or savings are provided by merchants)
        You are receiving this email because you subscribed at wish.com. To opt-out of receiving future emails, you may do so here. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Wish',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'offers@wish.com‏', name: 'Wish' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "עדכון מספר הנוסעים לנסיעה במונית",
        body: `דכון משרד הבריאות לנסיעה במונית
        חשוב לנו לעדכן אותך
        החל ממחר (חמישי 6.5.21) ב-7:00 בבוקר יבוטלו מגבלות התפוסה במונית, משמע תותר ישיבה גם במושב הקדמי.
        אנו מזכירים כי יש להמשיך להקפיד על ההנחיות הקיימות
        ולעטות מסיכה במהלך כל הנסיעה.
        מאחלים לכם נסיעה בטוחה!
        `,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Get-Taxi',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'no-reply@gett.com', name: 'Get-Taxi' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "2021 Tool Festival Comes! $9.9 Snap up + Extra 16% OFF For U Only! Xiaomi Mi 11 Lite 128GB $289! Buy Now!",
        body: `This commercial email was sent to you by Banggood Company.

        Exclusive Newsletter prices are valid for 5 days and only on products stocked in our Chinese warehouse.
        
        You received this email because you registered, accepted an invitation, or have shopped from our company. And this is to let you be informed of our new arrivals and discounts. We respect and will protect well your privacy. You can update your newsletters settings here. And if you don't want to receive our email or received in error, you can easily unsubscribe here.
        
        If you have any questions, Please feel free to contact us .
        
        Contact Address:
        Room 38, 11/F, Meeco Industrial Building, 53-55 Au Pui Wan Street, Fotan, Shatin, N.T., Hong Kong`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Banggood',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'newsletter@deals.banggood.com', name: 'Banggood' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "אנחנו ממשיכים באווירת הפסטיבל עם סגנונות חדשים שרק הגיעו! | פרסומת",
        body: `קיבלת הודעה זו מכיוון שרשמת או קיבלה את ההזמנה שלנו לקבלת הודעות דוא"ל מ- SHEIN, או שביצעת רכישה מ- S﻿H﻿E﻿I﻿N﻿.﻿c﻿o﻿m﻿.
        אם אינך מעונין להמשיך לקבל חדשות אופנה והצעות חדשות,
        לחץ כאן להסרה. (אנו נתגעגע אליך!)
        אנא צור קשר עם שירות לקוחותשלנו אם יש לך שאלות.`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Shein',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'shein@edm.shein.com', name: 'Shein' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "אומייגאד 😱 אצלנו יש Black Friday גם במאי - פרסומת",
        body: `לא, לא התבלבלנו: חגיגת Black Friday ע-כ-ש-י-ו באתר`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Groo',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'noreply@gcommerce.co.il', name: 'Groo' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "מחפשים לשמח את הבייבי הכי אהוב עליכם?🍼 | פרסומת",
        body: `חגיגות ה-Baby day הבינלאומי
        עוד סיבה לפנק את הקטנטנים
        רוצים לפנק את הזאטוטים שלכם, של הבת דודה או של החברים? הנה כמה רעיונות לדברים שתוכלו לשלוח להם: בגדים שכבר קטנים על הבייבי שלכם, 
        מתנה מהחנות האהובה עליהם, את השמיכי שתמיד תהיה להם אצל הסבתא ועוד ועוד ועוד..`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Get-Taxi',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'no-reply@gett.com', name: 'Get-Taxi' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "LAST CHANCE ⚡️ Save with these discount coupons",
        body: `
        Who are we?
        
        Miscota has been developped for a company with great experience in the e-commerce world and online business, together with the greatest wholesale suppliers and manufacturers for dog food, veterinarian consultants who are experts in the animal industry...
        
        To provide a good service, we count on a solid structure composed of offices, a warehouse of 3000 m2, with more than 1000 references of only dog food with a permanent stock and a logistic supplier who guarantees the arrival of each of our products.
        
        What we do
        
        We love animals of each breed and colour. We want to pass on this passion and love through the net, offering to our clients unbeateable prices in a place where web surfing is easy, and where everything has been specially design for user comfort.
        
        We want to make the shopping time of your loyal friend to be easier, quicker and more efficient, so you can use your time to be with your pet. 
        
        We want you to save money in your orders, so you can spend it on whatever you like.`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Miscota ',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'info@sls.miscota.com', name: 'Miscota ' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "You're Invited: Get to Know Zoom Chat",
        body: `Zoom Chat can be used for instant collaboration, file sharing, group messaging, and much more! In this webinar, your Zoom host will walk through the key Zoom Chat features and tips for successful team collaboration. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Zoom',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'webinars@e.zoom.us', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "JOIN A LIVE ZOOM DEMO",
        body: `JOIN A LIVE ZOOM DEMO
        Drop in for one of our daily Live Demos with Zoom expert, Raul Montes for an overview of how to schedule, host, and join Zoom meetings. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Zoom',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'webinars@e.zoom.us', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "Why not treat yourself to new Car Tools",
        body: `
        Wish is a marketplace that lets you discover items from thousands of merchants around the world. Check out these merchants' deals! (Product Listings, including images, reference prices, and related discounts or savings are provided by merchants)
        You are receiving this email because you subscribed at wish.com. To opt-out of receiving future emails, you may do so here. `,
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Wish',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'offers@wish.com‏', name: 'Wish' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "עדכון מספר הנוסעים לנסיעה במונית",
        body: `דכון משרד הבריאות לנסיעה במונית
        חשוב לנו לעדכן אותך
        החל ממחר (חמישי 6.5.21) ב-7:00 בבוקר יבוטלו מגבלות התפוסה במונית, משמע תותר ישיבה גם במושב הקדמי.
        אנו מזכירים כי יש להמשיך להקפיד על ההנחיות הקיימות
        ולעטות מסיכה במהלך כל הנסיעה.
        מאחלים לכם נסיעה בטוחה!
        `,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Get-Taxi',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'no-reply@gett.com', name: 'Get-Taxi' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "2021 Tool Festival Comes! $9.9 Snap up + Extra 16% OFF For U Only! Xiaomi Mi 11 Lite 128GB $289! Buy Now!",
        body: `This commercial email was sent to you by Banggood Company.

        Exclusive Newsletter prices are valid for 5 days and only on products stocked in our Chinese warehouse.
        
        You received this email because you registered, accepted an invitation, or have shopped from our company. And this is to let you be informed of our new arrivals and discounts. We respect and will protect well your privacy. You can update your newsletters settings here. And if you don't want to receive our email or received in error, you can easily unsubscribe here.
        
        If you have any questions, Please feel free to contact us .
        
        Contact Address:
        Room 38, 11/F, Meeco Industrial Building, 53-55 Au Pui Wan Street, Fotan, Shatin, N.T., Hong Kong`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Banggood',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'newsletter@deals.banggood.com', name: 'Banggood' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "אנחנו ממשיכים באווירת הפסטיבל עם סגנונות חדשים שרק הגיעו! | פרסומת",
        body: `קיבלת הודעה זו מכיוון שרשמת או קיבלה את ההזמנה שלנו לקבלת הודעות דוא"ל מ- SHEIN, או שביצעת רכישה מ- S﻿H﻿E﻿I﻿N﻿.﻿c﻿o﻿m﻿.
        אם אינך מעונין להמשיך לקבל חדשות אופנה והצעות חדשות,
        לחץ כאן להסרה. (אנו נתגעגע אליך!)
        אנא צור קשר עם שירות לקוחותשלנו אם יש לך שאלות.`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Shein',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'shein@edm.shein.com', name: 'Shein' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "אומייגאד 😱 אצלנו יש Black Friday גם במאי - פרסומת",
        body: `לא, לא התבלבלנו: חגיגת Black Friday ע-כ-ש-י-ו באתר`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Groo',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'noreply@gcommerce.co.il', name: 'Groo' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "מחפשים לשמח את הבייבי הכי אהוב עליכם?🍼 | פרסומת",
        body: `חגיגות ה-Baby day הבינלאומי
        עוד סיבה לפנק את הקטנטנים
        רוצים לפנק את הזאטוטים שלכם, של הבת דודה או של החברים? הנה כמה רעיונות לדברים שתוכלו לשלוח להם: בגדים שכבר קטנים על הבייבי שלכם, 
        מתנה מהחנות האהובה עליהם, את השמיכי שתמיד תהיה להם אצל הסבתא ועוד ועוד ועוד..`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Get-Taxi',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'no-reply@gett.com', name: 'Get-Taxi' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: "LAST CHANCE ⚡️ Save with these discount coupons",
        body: `
        Who are we?
        
        Miscota has been developped for a company with great experience in the e-commerce world and online business, together with the greatest wholesale suppliers and manufacturers for dog food, veterinarian consultants who are experts in the animal industry...
        
        To provide a good service, we count on a solid structure composed of offices, a warehouse of 3000 m2, with more than 1000 references of only dog food with a permanent stock and a logistic supplier who guarantees the arrival of each of our products.
        
        What we do
        
        We love animals of each breed and colour. We want to pass on this passion and love through the net, offering to our clients unbeateable prices in a place where web surfing is easy, and where everything has been specially design for user comfort.
        
        We want to make the shopping time of your loyal friend to be easier, quicker and more efficient, so you can use your time to be with your pet. 
        
        We want you to save money in your orders, so you can spend it on whatever you like.`,
        sentAt: utilService.randomDate(),
        state: 'received',
        isStarred: Math.random() > 0.5,
        isDraft: false,
        name: 'Miscota ',
        origin: {
            to: { mail: 'App-Sus@gmail.com', name: 'App-Sus' },
            from: { mail: 'info@sls.miscota.com', name: 'Miscota ' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
    {
        mailId: utilService.makeId(),
        subject: utilService.makeLorem(10),
        body: utilService.makeLorem(utilService.getRandomInt(20, 80)),
        isRead: Math.random() > 0.5,
        sentAt: utilService.randomDate(),
        state: 'sent',
        isStarred: Math.random() > 0.5,
        isDraft: Math.random() > 0.5,
        name: 'App-Sus',
        origin: {
            to: _createOrigin(),
            from: { mail: 'App-Sus@gmail.com', name: 'AppSus' }
        }
    },
]
