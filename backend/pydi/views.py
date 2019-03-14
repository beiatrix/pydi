from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post

# Create your views here.
class PostView(viewsets.ModelViewSet):
  # The viewsets base class provides the implementation for CRUD operations by default, what we had to do was specify the serializer class and the query set.
  serializer_class = PostSerializer
  queryset = Post.objects.all()