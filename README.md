<div align="center">
  
<img src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683397609/Screenshot_2023-05-06_at_8.25.08_PM_auqlcq.png" width="30%" height="15%" />

### Find your dream job, one application at a time

# JobTrackr

### Built by: **[Anthony Khong](https://www.linkedin.com/in/anthonykhong956/)**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

  
**_Click the following link to be redirected to the live version of the code!_**

## [JobTrackr](https://jobtrackr.herokuapp.com/)

### Description:

Introducing **JobTrackr** - the ultimate job tracking platform for job seekers! With our Full-Stack Web Application, users can easily keep track of their job applications, view their pending and declined jobs, and see upcoming interviews all in one place. Our website offers a clean and intuitive user interface that allows you to stay organized and informed throughout your job search.
<br />
But that's not all! JobTrackr also offers a comprehensive library of videos that cover a range of topics related to job interviews. With our seamless integration of YouTube API, users can access these videos at any time to learn how to ace their job interviews and land their dream job.
<br />
Don't miss out on this amazing opportunity to stay on top of your job search and improve your interview skills. Sign up now for JobTrackr and take your job search to the next level!

## :link: Associated Links:

Click the following links to be redirected to the planning board of the code! 
<br />
[Trello](https://trello.com/b/EYU8eGUK/project-4)
<br />
[Whimsical](https://whimsical.com/jobtrackr-K43wREoMvzW5YiP1i6UcoE)
  
</div>

## :camera_flash: Visuals and Helpful Insight (Getting Started):

### Sign Up/ Login Page

![login page](https://github.com/anthonykhong/job_trackr/assets/116925227/15b2e809-f4ab-4490-be02-fedae76694d3)

Log in to get started! If you don't have an account yet, don't worry, sign up is available!

### Home Page

![home page](https://github.com/anthonykhong/job_trackr/assets/116925227/8847e6c0-df0d-484a-a24e-ceb052e352a1)

### Dashboard

![dashboard](https://github.com/anthonykhong/job_trackr/assets/116925227/8ae29b23-dc2b-4779-8757-038ae365f72d)

View all the jobs which you applied for and sort them according to your favorites!

### Add the Jobs you Apply to!

![Screenshot 2023-05-14 at 6 42 52 PM](https://github.com/anthonykhong/job_trackr/assets/116925227/e4ee768c-5dbb-48dd-8d85-09651ad357e9)

Found an interesting opportunity? Don't forget to add it to your dashboard!

### Keep Track of your applications

![Screenshot 2023-05-14 at 6 43 00 PM](https://github.com/anthonykhong/job_trackr/assets/116925227/160fb3a0-5b9e-4dab-b2c4-957064681c99)

Oversee the status of your jobs and the number of jobs to which you apply to daily! Helpful for ISA students!

### Prepare for Interviews with Embedded Youtube API

![youtube](https://github.com/anthonykhong/job_trackr/assets/116925227/66cdb270-9580-4148-91ad-acb02a0e7739)

No need to open a new tab for Youtube, search directly for videos that will be helpful towards your job search directly within this app!


## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
- ![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## The Code Behind The Program:

```javascript

  function getStatusClassName(status) {
    if (status === "applied") {
      return "bg-yellow-500";
    } else if (status === "interview") {
      return "bg-green-500";
    } else if (status === "declined") {
      return "bg-red-500";
    }
    return "";
  }

```


### The preceding code snippet displays the sort functionality on the job application cards. It allows users to differentiate the status of their job application with more ease.

## :chart_with_upwards_trend: Looking Forward

- [ ] Add mobile responsive design
- [ ] Add dark/light mode
- [ ] Add new sorting categories
