import requests

f=open("pomurskaUtf-16.txt",'r',encoding="utf-16")


i=1;
for line in f.readlines():
    print(line[:-1])
    obj={"name":line[:-1],"id":i,"regionId":11};
    req=requests.post("http://localhost:3333/api/municipality/add",data=obj);
    i+=1








