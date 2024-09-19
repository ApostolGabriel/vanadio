import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailData } from '../../../models/email-data';
import { environment } from '../../../../environments/environment';
import { SendEmailResponse } from '../../../models/send-email-response';

@Component({
  selector: 'app-contact-registration',
  templateUrl: './contact-registration.component.html',
  styleUrl: './contact-registration.component.css'
})
export class ContactRegistrationComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  errorField: boolean[] = [ false, false, false ];
  responseMessage: string = '';

  constructor(private httpClient: HttpClient
  ) {}

  sendEmail() {
    
    let emailData: EmailData = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      })
    };
    this.httpClient.post<SendEmailResponse>(
      environment.be_url + environment.send_email_endpoint,
      emailData,
      httpOptions
    )
    .subscribe({
      error: (e) => {
        this.handleError(e)
      },
      next: (r) => {
        this.addParagraphsToContent([r.message])
        this.openOrCloseModal(true);
      }
    });
    
      
  }

  handleError(httpError: HttpErrorResponse) {
    this.addParagraphsToContent(httpError.error.errors);
    this.openOrCloseModal(true);
  }


  onClose() {
   this.openOrCloseModal(false); 
  }

  addParagraphsToContent(phrases: string[]) {
    const responseDiv = document.getElementById("response");
    for (let i in phrases) {
      const paragraph = document.createElement("p");
      paragraph.textContent = phrases[i];
      paragraph.style.paddingLeft = '1rem';
      paragraph.style.paddingRight = '1rem';
      responseDiv?.appendChild(paragraph);
    }
  }

  openOrCloseModal(open: boolean) {
    const modal = document.getElementById("send-email-dialog");
    const responseDiv = document.getElementById("response");
    if(open) {
      modal!.style.display = 'flex';
    } else {
      do {
        responseDiv?.removeChild(responseDiv?.lastChild!);
      } while (responseDiv?.children.length !== 0)
      modal!.style.display = 'none';
      
    }
  }


  // updateBackgroundErrorField(response: SendEmailResponse) {
  //   const nameField = document.getElementById('name')
  //   const emailField = document.getElementById('email')
  //   const messageField = document.getElementById('message')
  //   let nameColor = '#ffffff';
  //   let emailColor = '#ffffff';
  //   let messageColor = '#ffffff';
  //   if (response.errors !== null) {
  //     for (let error in response.errors){
  //       switch (error) {
  //         case 'Email-ul nu este valid': {
  //           emailColor = '#fc7575';
  //           break;
  //         }
  //         case 'Numele este obligatoriu': {
  //           nameColor = '#fc7575';
  //           break;
  //         }
  //         case 'Mesajul este obligatoriu': {
  //           messageColor = '#fc7575';
  //           break;
  //         }
  //       }
  //     }
  //   }
  //   nameField!.style.backgroundColor = nameColor;
  //   emailField!.style.backgroundColor = emailColor;
  //   messageField!.style.backgroundColor = messageColor;
  // }
  

}
