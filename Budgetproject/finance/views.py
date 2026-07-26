from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm


def home(request):
    return render(request, 'finance/home.html')


def register(request):

    if request.method == 'POST':

        form = RegisterForm(request.POST)

        if form.is_valid():

            user = form.save()

            login(request, user)

            return redirect('home')

    else:

        form = RegisterForm()

    return render(
        request,
        'finance/registration/register.html',
        {'form': form}
    )