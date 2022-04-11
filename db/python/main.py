import requests

f=open("pomurska.txt",'r',encoding="utf-8")


i=1;
for line in f.readlines():
    print(line[:-1])
    obj={"name":line[:-1],"id":i,"regionId":11};
    req=requests.post("http://localhost:3333/api/municipality/add",data=obj);
    i+=1








