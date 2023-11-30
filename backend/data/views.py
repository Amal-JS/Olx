
from . models import Post,CustomUser
from . serializers import PostSerializer,UserSerializer
from rest_framework import viewsets 
from rest_framework.response import Response


class PostViewSets(viewsets.ModelViewSet):
    queryset = Post.objects.all()  
    serializer_class = PostSerializer


    def create(self,request):

        print(request, request.data)
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
       
            msg='Data saved'
            return Response({'msg':msg})
        return Response(serializer.errors,status=400)
    
    def retrieve(self,request,pk=None):
            
            if pk is not None:
                  
                  try:
                    queryset = Post.objects.get(pk=pk)
                    serializer = self.get_serializer(queryset)
                  except Post.DoesNotExist:
                        return Response({'msg':'Provide a valid id'})
                  return Response(serializer.data)
           

    


        
class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer


    def create(self,request):

        print(request, request.data)
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
       
            
            return Response({'userCreation':True})
        return Response(serializer.errors,status=400)
    
    def retrieve(self,request):
            
            data = request.data     
            try:
                user = CustomUser.objects.get(username=data.username)

                if user.password == data.password:
                    return Response({'validUser':True})
            except CustomUser.DoesNotExist:
                return Response({'validUser':False})
            
            return Response({'validUser':False})
    
