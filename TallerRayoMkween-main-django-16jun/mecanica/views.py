from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def indexTallermlween(request):
    return render(request, 'indexTallermlween.html', {})

