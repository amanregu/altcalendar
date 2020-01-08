# AltCalendar

## About AltCalendar

AltCalendar is an app that helps to schedule manage/your appointments better. This app will be synced to your calendar to manage appointments more efficiently. This solves the problem of communicating back and forth when appointments are scheduled on emails. This app allows users to select your free time slots and the other party will schedule the appointment based on that. The user can choose to manually confirm the appointment, reschedule or cancel their appointments.

Every time one party makes a change to the appointment the other party would be notified using an automatically triggered email. Users will have the option to create multiple types of appointments. For example, free, paid or with different time periods.

## How to launch the app locally?

- STEP 1-- Fork the project repo and clone it in your local repository.

- STEP 2-- Download and install [Node](https://nodejs.org/en/)

```
verify with the following command:
>>>node -v
```

- Make sure you run all your commands from inside cloned /orbit folder.

- STEP 3-- Install the npm modules from the package.json

```
>>> npm install
this command installs all the node related packages required to run the app locally in
/node_modules folder. You can see this folder inside /orbit folder after running npm install
```

- STEP 4-- Launch the application using below command:

```

Below command will start as full web application(Backend+Frontend)
>>> npm install -g nodemon
>>> npm start
The application will be running at http://localhost:3000
if not then please check if you have set any default PORT in your environment/path variable
i.e http://localhost:<your_env_port_variable>
```