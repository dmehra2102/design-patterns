interface Notification {
  notify(message: string): void;
}

class SMSNotification implements Notification {
  notify(message: string): void {
    console.log("SMS : ", message);
  }
}

class EmailNotification implements Notification {
  notify(message: string): void {
    console.log("Email : ", message);
  }
}

class WhatsAppNotification implements Notification {
  notify(message: string): void {
    console.log("Whatsapp : ", message);
  }
}

class NotificationFactory {
  static createNotification(type: "SMS" | "EMAIL" | "WHATSAPP"): Notification {
    switch (type) {
      case "SMS":
        return new SMSNotification();

      case "EMAIL":
        return new EmailNotification();

      case "WHATSAPP":
        return new WhatsAppNotification();
    }
  }
}

const smsNotification = NotificationFactory.createNotification("SMS");
smsNotification.notify("You have next techical round on 27th January.");

const emailNotificaion = NotificationFactory.createNotification("EMAIL");
emailNotificaion.notify(
  "Congratualtion Deepanshu ! You have next technical round on 27th Januray"
);

const whatsappNotification = NotificationFactory.createNotification("WHATSAPP");
whatsappNotification.notify(
  "Hey Deepanshu, we are happy to inform you that you have cleared for round 2 which has been scheduled for 27th Januray. See you there."
);
