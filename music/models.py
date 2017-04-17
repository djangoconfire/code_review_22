from __future__ import unicode_literals

from django.db import models

class Language(models.Model):
    name    =models.CharField(max_length=100)

    class Meta:
        app_label='language_model'

class Genre(models.Model):
    name            =models.CharField(max_length=200)

    def __unicode__(self):
        return self.name


    class Meta:
        app_label='genre'

class Music(models.Model):
    app_url         =models.URLField()
    app_name        =models.CharField(max_length=200)
    date_created    = models.DateTimeField()
    genre           =models.ForeignKey(Genre)
    languages       =models.ForeignKey(Language)
    currency        =models.DecimalField(decimal_places=2,max_digits=8)
    screenshots     =models.CharField(max_length=200)

    def __unicode__(self):
        return self.name

    class Meta:
        app_label='music_app'
