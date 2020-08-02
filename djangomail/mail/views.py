from django.shortcuts import render
from djangomail.settings import EMAIL_HOST_USER
from . import forms
from django.core.mail import send_mail
# Create your views here.
#DataFlair #Send Email
def mail(request):
    sub = forms.Mail()
    if request.method == 'POST':
        sub = forms.Mail(request.POST)
        subject = 'Surprise '
        message = 'This email from bhuwan pandeya and i have build the email sending system from django!!! '
        recepient = str(sub['Email'].value())
        send_mail(subject, 
            message, EMAIL_HOST_USER, [recepient], fail_silently = False)
        return render(request, 'success.html', {'recepient': recepient})
    return render(request, 'index.html', {'form':sub})