# UNDERSTOCK PICTURE SERVICE
Imagine, when you deploy your online shopping service and suddenly, you have A LOT of request. (Of course we are happy because we have a lot of customer).
But, What If your server cannot handle your requests? This project is mostly focused on the Systems design for my Service, designer brands & home goods online shopping platform. The service is to displaying the Picture to the customers. 

## Database
In this case, I choose PostgreSQL for my Database of Choice. It supports my data model to serve the client side. 
Currently, my Primary data (which is Items) handles 10 millions data. Every Primary data has 9 Pictures of thumbnail and 9 big pictures for the front-end presentation. The schema and visualization will be updated soon!

## Built With
* [PostgreSQL](https://www.postgresql.org/)
* [Express](http://expressjs.com/)
* [Node JS](http://nodejs.org/)
* [AWS EC2](https://aws.amazon.com/ec2/)
* [New Relic](https://newrelic.com/)
* [k6](https://k6.io/)
* [NGINX Load Balancer](http://nginx.org/)

## Implementation and performance report
Current design for the deployment is: 
<br />
***1 DB Instance*** ----> ***3 ec2 Instance services*** ----> ***NGINX LOAD BALANCER*** ----> Customer's request
<br />
Current Performance for the deployment:
<br />
Around 50,000 REQUEST per MINUTE, No downtime and No error

## Contact

Christoffel Angga - chris.ang.dev@gmail.com
<br/>
Project Link: [https://github.com/J-EQUAL-MC-SQUARED/Picture-Service](https://github.com/J-EQUAL-MC-SQUARED/Picture-Service)
<br/>
Linkedin: [https://www.linkedin.com/in/christoffelangga/](https://www.linkedin.com/in/christoffelangga/) 
