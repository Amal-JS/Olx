from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10)
  
    def __str__(self) -> str:
        return f"{self.username} {self.phone}"

class Post(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    name = models.CharField(max_length=40)
    brand =models.CharField(max_length=40)
    description = models.TextField()
    place = models.CharField(max_length=100)
    timespan = models.CharField(max_length=30)
    image = models.ImageField(upload_to='post_images',null=True,blank=True)

    def __str__(self) -> str:
        return f"{self.user} : {self.name}"
    


