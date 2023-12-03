
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from data import views
from rest_framework import routers


router=routers.DefaultRouter()

#when you register a viewset with a router, it automatically generates URL patterns for various actions 
#(e.g., list, create, retrieve, update, delete). The basename is used to name these URL patterns.
# basename is used to name these URLs.
# In a view
#reverse('posts-list')   # Returns '/posts/' (the list endpoint)

router.register('posts',views.PostViewSets,basename='posts') 
router.register('user',views.UserViewSets,basename='user') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]

#serve media files 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)