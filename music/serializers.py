from rest_framework import serializers

from models import Music

from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)

class MusicSerializer(ModelSerializer):
    class Meta:
        model=Music
        fields='__all__'