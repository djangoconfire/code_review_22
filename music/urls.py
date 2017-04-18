from django.conf.urls import url
from music import views
from views import MusicApiView

urlpatterns=[
    url(r'api/music/$',MusicApiView.as_view(),name="music-list")



]