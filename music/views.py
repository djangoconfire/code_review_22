from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework import generics
from serializers import MusicSerializer
from models import Music

def index(request):
    return render(request,'base.html',{})

@csrf_exempt
def MusicData(request):
    form_data=request.POST.get('form_data','')
    form_data=json.loads(form_data)

# music list api view <post list view>
class MusicApiView(generics.ListCreateAPIView):
    queryset=Music.objects.all()
    serializer_class=MusicSerializer

