from django.shortcuts import render
from django.http import HttpResponse
from app.constants import COLOR_CODE, LOGIN_DATA
from app.models import UserData
import random

# Create your views here.
def home(request):
    if UserData.objects.all():
        UserData.objects.all().delete()
    return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email_id')
        color = request.POST.get('color')
        color_code = COLOR_CODE[color]
        password = request.POST.get('password')
        userData = UserData(
            name=name,
            email=email,
            color=color_code,
            password=password
        )
        userData.save()
    return render(request, 'register.html')

def verify(request):
    email_id = UserData.objects.values()[0]['email']
    parameter = {'email_id': email_id}
    if request.method == "POST":
        email_address = request.POST.get("email")
        parameter = {'email_id':email_id, 'email_address':email_address}
    return render(request, 'verify.html', parameter)

def login(request):
    if request.method == 'POST':
        password = request.POST.get("password")
        LOGIN_DATA["password"] = password
    LOGIN_DATA["register_password"] = UserData.objects.values()[0]['password']
    LOGIN_DATA["register_color"] = UserData.objects.values()[0]['color']
    special_characters = LOGIN_DATA["special_characters"]
    alphabets = LOGIN_DATA["alphabets"]
    colors = LOGIN_DATA['colors']
    random.shuffle(special_characters)
    random.shuffle(alphabets)
    random.shuffle(colors)
    LOGIN_DATA['special_characters'] = special_characters
    LOGIN_DATA['alphabets'] = alphabets
    LOGIN_DATA['colors'] = colors
    return render(request, 'login.html', LOGIN_DATA)

def dashboard(request):
    return render(request, 'dashboard.html')