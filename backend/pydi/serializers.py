# We need serializers to convert model instances to JSON so that the frontend can work with the received data easily.

from rest_framework import serializers
from .models import Post

# specify model to work with and fields we want to be converted to JSON
class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('id', 'title', 'content')