
from . models import Post,CustomUser
from . serializers import PostSerializer,UserSerializer
from rest_framework import viewsets 
from rest_framework.response import Response


class PostViewSets(viewsets.ModelViewSet):
    queryset = Post.objects.all()  
    serializer_class = PostSerializer


    def create(self,request):

        print(request, request.data)
        image_file = request.FILES.get('image')
        
        # Extract other fields from request.data
        user = request.data.get('user')
        name = request.data.get('name')
        brand = request.data.get('brand')
        price = request.data.get('price')
        timespan = request.data.get('timespan')
        place = request.data.get('place')
        price = request.data.get('price')
        description = request.data.get('description')

        try:
             user = CustomUser.objects.get(username=user)
        except:
             
                pass
        # Create a dictionary with the extracted data
        data = {
            'user': user.id,
            'name': name,
            'brand': brand,
            'price': price,
            'timespan': timespan,
            'place': place,
            'price':price,
            'description': description,
            'image': image_file,
        }


        # Pass the data to the serializer
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
       
            
            return Response({'postCreated':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        if pk is not None:
            try:
                queryset = Post.objects.get(pk=pk)
                
                user_instance = CustomUser.objects.get(username=queryset.user.username)
                user_username = user_instance.username
                serializer = self.get_serializer(queryset)
                serialized_data = serializer.data

                # # Include the username in the serialized data
                serialized_data['user_username'] = user_username

                return Response(serialized_data)
            except Post.DoesNotExist:
                return Response({'msg': 'Provide a valid id'})
           

    


        
class UserViewSets(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()  
    serializer_class = UserSerializer


    def create(self,request):

        print(request, request.data)
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
       
            
            return Response({'userCreation':True})
        else:
             print(serializer.errors)
        return Response(serializer.errors,status=200)
    
    def retrieve(self,request,pk=None):
            print(request.data)
            username=request.GET.get('username','') 
            password= request.GET.get('password','') 
            try:
                user = CustomUser.objects.get(username=username)
                print(f"username : {user.username == username} , password : {user.password == password}  ,{user.password} , {password}")
                if user.password == password:
                    return Response({'validUser':True,'username':username})
            except CustomUser.DoesNotExist:
                return Response({'validUser':False})
            
            return Response({'validUser':False})
    
