from django.shortcuts import render
from .models import Problem
from .serializers import ProblemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def getAllProblems(request):

    problems = Problem.objects.all()
    ser = ProblemSerializer(problems, many=True)

    return Response(ser.data)
