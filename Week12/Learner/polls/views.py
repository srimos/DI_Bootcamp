from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Helloworld. You're at the polls index.")

def test(request):
    return render(request, "Week12/Learner/template/test.html", {})

def month_archive(self, season, month):
    context = {
        'season':season,
        'month':month
    }
    return render(request, 'index.html', context)