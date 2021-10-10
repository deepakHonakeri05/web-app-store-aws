import os

path = './'
counter = 1
for f in os.listdir(path):
    suffix = f.split('.')[-1]
    #if suffix == 'jpg' or suffix == 'png' or suffix == 'JPG'or suffix == 'jpeg':
    if suffix == 'png':
        new = '{}.{}'.format(str(counter), 'jpg')
        os.rename(path + f, path + new)
        counter = int(counter) + 1
