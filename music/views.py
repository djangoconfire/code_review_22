from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework import generics
from serializers import MusicSerializer
from models import Music


from rest_framework.generics import (
    ListAPIView, 
    )


# music list api view <post list view>
class MusicApiView(ListAPIView):
    queryset=Music.objects.all()
    serializer_class=MusicSerializer

