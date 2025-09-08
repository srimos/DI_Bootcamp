from django.shortcuts import render
from .models import Student
from .serialisers import StudentSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

# Create your views here.
@csrf_exempt
def post_view(request):
    if request.method == "GET":
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return JsonResponse(data=serializer.data, safe=False)    

    if request.method == "POST":
        article_data = JSONParser.parse(request)
        serializer = StudentSerializer(data=article_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def student_detail(request, article_pk):
    try:
        article = Student.objects.get(pk=article_pk)
    except Student.DoesNotExist:
        return HttpResponse(status=404) # Not found

    if request.method == 'GET':
       serializer = StudentSerializer(article)
       return JsonResponse(data=serializer.data)
    elif request.method == 'PUT':
        new_article = JSONParser(request)
        serializer = StudentSerializer(article, data=new_article)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)
    
@csrf_exempt
def post_detail(request, article_pk):
    try:
        article = Student.objects.get(pk=article_pk)
    except Student.DoesNotExist:
        return HttpResponse(status=404) # Not found

    if request.method == 'GET':
       serializer = StudentSerializer(article)
       return JsonResponse(data=serializer.data)
    elif request.method == 'PUT':
        new_article = JSONParser(request)
        serializer = StudentSerializer(article, data=new_article)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)
    elif request.method == 'DELETE':
       article.delete()
       return HttpResponse(status=204) # Successfully deleted