# Web App Store (AWS)

Here's a Demo of the Code : 

http://myappleappstore.s3-website-us-east-1.amazonaws.com

## Overview and History

Initially this website had all the images and JSON files in the amazon S3 bucket. And I referenced all the resources with a relative path ("./"). Finally, as a learning curve I moved the images, JSON and product information to Firebase (BaaS) whcih also makes use of Javascript.

The Website is built on 
 1. HTML5
 2. CSS3
 3. BootStrap v4
 4. AJAX
 5. Javascript

## Purpose

The purpose of this project was to become familiar with using the Cloud9 console, using Node.js to upload the files to Amazon S3 bucket, experimenting with Amazon AWS's S3 bucket storage and becoming an expert in Javascript.

[Edit 1]:

Also, the purpose was to learn other storage options (such as Firebase as BaaS).

## Uploading your website to S3

The Script "upload_website.js" script allows us to upload the website onto the Amazon Aws S3 storage facility.


Initally go to AWS Management Dashboard and the follow the steps
1. Choose Services and search for s3.
2. Choose Create bucket.
3. For Bucket name make sure you type in something unique but easy to remember. Example: er-101-2019-05-16-app-store
4. Leave Block all public access checked.
5. Choose Create bucket.
6. Once the bucket is created choose it from the S3 buckets list. 
7. Choose the Permissions tab and select Bucket Policy.
8. Refer to the policy in the file "policy.js"

### Policy.js file
{ <br>
   "Version": "2008-10-17",<br>
   "Statement": [<br>
       {<br>
           "Effect": "Allow",<br>
           "Principal": "*",<br>
           "Action": "s3:GetObject",<br>
           "Resource": "arn:aws:s3:::your_bucket_name/*",<br>
           "Condition": {<br>
               "IpAddress": {<br>
                   "aws:SourceIp": [<br>
                     "0.0.0.0/32"<br>
              ]<br>
            }<br> 
      }<br>
    } <br>
  ]<br>
}<br>

Please excuse the indentation of of the above code (It's best to refer in policy.js file)