const AWS = require('aws-sdk');

// Configure the region and set DynamoDB endpoint (optional, for local development)
AWS.config.update({
  region: 'us-west-1', // replace with your region
  // endpoint: 'http://localhost:8000' // uncomment this if you're using DynamoDB Local
});

// Create DynamoDB service object
const ddb = new AWS.DynamoDB.DocumentClient();

// Define multiple project objects
let projects = [
    {
       
                        "projectId": "9000",
                        "title": "Academy of Pop",
                        "description": "Academy of Pop performing art school makes its grand debut...",
                        "slug": "Academy-of-Pop",
                        "tags": [
                            "Branding",
                            "3D-Rendering",
                            "Graphic Design"
                        ],
                        "dateCreated": new Date("2024-01-05").toISOString(),
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/02-Academy+of+Pop/Thumbnail+Academy+of+Pop.png"
                        ],
                        "logo": "A",
                        "status":"100%",
                    
                        "budget": {
                            "total": "20,700",
                            "date": new Date("2024-01-05").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate": new Date("2024-01-05").toISOString(),
                        
                        
                        
                        "milestone": "100",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": new Date("2024-01-05").toISOString(),
    
                        "location": {
                            "lat": 34.09021401042611,
                            "lng": -118.38789923281713}, 
                            "address": "9000 Sunset Bd, Los Angeles, CA",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2024-01-05").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                       
                    },

                    {
                        "projectId": "4259",
                        "slug": "elf-Makeup",
                        "date": new Date("2022-12-10").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Immersive Digital"
                        ],
                        "title": "e.l.f. Makeup",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby delivered a unique custom brand activation at one of Art Basel Miami's premier events, Nylon House, located at the picturesque Strawberry Moon Hotel",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/08-elf+Makeup/Thumbnail+elf+makeup.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/01+elf+makeup.jpg"
                        ],
                        "status":"20%",
                    
                        "budget": {
                            "total": "15,100",
                            "date": new Date("2022-12-10").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate":new Date("2022-12-10").toISOString(),
                        
                        
                        
                        "milestone": "90",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": new Date("2022-12-10").toISOString(),
    
    
                        "location": {
                            "lat": 25.775812998862712,
                            "lng": -80.13369807010459}, 
                            "address": "Strawberry Moon, Miami, FL",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2022-12-10").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                      
    
                    },

                    {
                        "projectId": "4271",
                        "slug": "Keys-Soulcare",
                        "date": new Date("2023-01-17").toISOString(),
                        "tags": [
                            "Immersive Digital",
                            "3d Rendering"
                        ],
                        "title": "Keys Soulcare",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby collaborated with Keys Soulcare in Hamburg, Germany. Guests were welcomed into the iconic Haller 6 venue where they could explore new rituals and offerings...",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/19-Keys+Soulcare/Thumbnail+Keys+Soulcare.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/01+Keys+Soulcare.jpg"
                        ],"status":"60%",
                    
                        "budget": {
                            "total": "20,500",
                            "date": new Date("2023-01-17").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate": new Date("2023-01-17").toISOString(),
    
                        "location": {
                            "lat": 53.572110550540124,
                            "lng": 9.980045148357336}, 
                            "address": "Haller 6, Hamburg, DE",
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": new Date("2023-01-17").toISOString(),
    
                      
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2023-01-17").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                    
                        
                    
                    },
    
    
    
    
                    {
                        "projectId": "4272",
                        "slug": "Keys-Art-Basel",
                        "date": new Date("2023-01-17").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Video & Animation"
                        ],
                        "title": "Keys Art Basel",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby crafts designs for Keys Soulcare during a special pop-up event at Nylon House during Art Basel Miami. This captivating experience unfolded at the scenic Strawberry Moon Hotel",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/20-Keys+Art+Basel/Thumbnail+Keys+Art+Basel.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/20-Keys+Art+Basel/01+Keys+Art+Basel-.jpg"
                        ],
                        "status":"80%",
                    
                        "budget": {
                            "total": "7,500",
                            "date": new Date("2023-01-17").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate":new Date("2023-01-17").toISOString(),
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": new Date("2023-01-17").toISOString(),
    
                        "location": {
                            "lat": 25.775812998862712,
                            "lng": -80.13369807010459}, 
                            "address": "Strawberry Moon, Miami, FL",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2023-01-17").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                    
                        
                        
                    },
    
    
    
                    {
                        "projectId": "4260",
                        "slug": "elf-Studio",
                        "date": new Date("2023-03-24").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Immersive Digital"
                        ],
                        "title": "e.l.f. Studio",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby designs passionately for an elite disco club experience. E.l.f. studio takes center stage, pulsating with all things astoundinglye.l.f.ing amazing! ",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/09-elf-studio/Thumbnail+elf+studio.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/09-elf-studio/01+elf+studio.jpg"
                        ],
                        "status":"90%",
                    
                        "budget": {
                            "total": "5,200",
                            "date": new Date("2023-03-24").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate":new Date("2023-03-24").toISOString(),
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": "23-03-24",
    
                        "location": {
                            "lat": 32.32792976081814,
                            "lng": -110.85011913585079}, 
                            "address": "Canyon Resort, Tucson, AZ",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2023-01-20").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                      
                      
                        
                    },
    
    
                    {
                        "projectId": "4267",
                        "slug": "Gucci-Aria",
                        "date": new Date("2021-12-05").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Prop Design"
                        ],
                        "title": "Gucci Aria",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby celebrates Gucci’s 10th anniversary with a pop-up at the Webster Miami. The highlight? A grand, custom-made cake adorned in iconic Gucci style.",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/16-Gucci+Aria/Thumbnail+Gucci.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/16-Gucci+Aria/01+Gucci+Aria+.jpg"
                        ],
                        "status":"100%",
                    
                        "budget": {
                            "total": "2,500",
                            "date": new Date("2021-12-05").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate":new Date("2021-12-05").toISOString(),
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": "21-12-05",
    
                        "location": {
                            "lat": 32.32792976081814,
                            "lng": -110.85011913585079}, 
                            "address": "The Webster, Miami, FL",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2021-12-05").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                      
                       
                        
                    },


                    {
                        "projectId": "4261",
                        "slug": "elf-Makeup-Hollywood-Bowl",
                        "date": new Date("2022-10-20").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Immersive Digital"
                        ],
                        "title": "e.l.f. Makeup Hollywood Bowl",
                        "subtitle": "Mokibaby",
                        "description": "Mokibaby designs for E.l.f., joining hands with Audacy’s 9th Annual ‘We Can Survive’ gala at the legendary Hollywood Bowl supporting the American Foundation for Suicide Prevention.”",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/Thumbnail+elf+hollywood+bowl-.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/10-elf+Makeup+hollywood+bowl/01+elf+hollywood+bowl-.jpg"
                        ],
                        "status":"100%",
                    
                        "budget": {
                            "total": "1,500",
                            "date": new Date("2022-10-20").toISOString(),
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate": new Date("2022-10-20").toISOString(),
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": "22-10-20",
    
                        "location": {
                            "lat": 34.112392579403576, 
                            "lng": -118.33906351721298}, 
                            "address": "Hollywood Bowl, Los Angeles, CA",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": new Date("2022-10-20").toISOString(),
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                      
                       
                        
                    },

                    {
                        "projectId": "4279",
                        "slug": "Now-United",
                        "date": new Date("2023-07-28").toISOString(),
                        "tags": [
                            "3D-Rendering",
                            "Graphic Design"
                        ],
                        "title": "Now United",
                        "subtitle": "Mokibaby",
                        "description": "Branding transformation alert! Mokibaby revamps the logo for the global pop band, Now United. Presenting a fresh and modern design that’s soon to become ubiquitous",
                        "thumbnails": [
                            "https://mylgcontent.s3.us-west-1.amazonaws.com/27-Now+United/Thumbnail+Now+United.png"
                        ],
                        "images": [
                            "https://d2qb21tb4meex0.cloudfront.net/27-Now+United/01+Now+United.jpg"
                        ],
                        "status":"100%",
                    
                        "budget": {
                            "total": "7,500",
                            "date": new Date("2023-07-28").toISOString()
                          },
                    
                        "uploads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "downloads": [
                            {
                                "fileName": "01.jpg",
                                "url": "https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.jpg"
                            }
                        ],
                        "gallery": "/works/Academy-of-Pop",
                        "invoices":"/mokibaby/invoices",
                        "invoiceDate":new Date("2023-07-28").toISOString(),
                        
                        
                        
                        "milestone": "80",
                            
                        "team": [
                            {
                                "userId": "Jaz",
                                "role": "3d Designer",
                                "Icon": ""
                            },
                            {
                                "userId": "Leah",
                                "role": "Project Manager",
                                "Icon": ""
                            }
                        ],
                        "finishline": new Date("2023-07-28").toISOString(),
    
                        "location": {
                            "lat": 34.09021401042611,
                            "lng": -118.38789923281713}, 
                            "address": "9000 Sunset Bd, Los Angeles, CA",
                        
                        "revisionHistory": [
                            {
                                "revisionDate": "2023-01-20",
                                "description": "Updated logo design",
                                "author": "John Doe"
                            }
                        ],
    
                        
                        "contact": {
                            "name": "Veronica Gessa",
                            "contact": "sup@mokibaby.com",
                            "phone": "123-456-7890"
                        }
                      
                        
                      
                       
                        
                    }

]
    
    
                


// Prepare batch write parameters
let params = {
  RequestItems: {
    'Projects': projects.map(project => ({
      PutRequest: {
        Item: project
      }
    }))
  }
};

// Perform the batch write operation
ddb.batchWrite(params, function(err, data) {
  if (err) {
    console.log('Batch write error', err);
  } else {
    console.log('Batch write success', data);
  }
});
