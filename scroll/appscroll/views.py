from django.shortcuts import render
import time
from django.http import JsonResponse

# Create your views here.

def index(req):
    return render(req, 'appscroll/index.html')

def posts(req):
    start = int(req.GET.get("start") or 0)
    end = int(req.GET.get("end") or (start + 9))

    data = []
    for i in range(start, end + 1):
        data.append(f'Post #{i}')
    
    time.sleep(1)

    return JsonResponse({
        "posts":data
    })

