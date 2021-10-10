{
   "Version": "2008-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::yourwebsite/*",
           "Condition": {
               "IpAddress": {
                   "aws:SourceIp": [
                   "0.0.0.0/32"

              ] 
            }
      } 
    }
  ] 
}