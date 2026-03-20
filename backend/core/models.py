# backend/core/models.py
from django.db import models

class District(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Taluka(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE, related_name='talukas')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Village(models.Model):
    taluka = models.ForeignKey(Taluka, on_delete=models.CASCADE, related_name='villages')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class LandRecord(models.Model):
    survey_no = models.CharField(max_length=20)
    owner_name = models.CharField(max_length=100)
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    taluka = models.ForeignKey(Taluka, on_delete=models.CASCADE)
    village = models.ForeignKey(Village, on_delete=models.CASCADE)