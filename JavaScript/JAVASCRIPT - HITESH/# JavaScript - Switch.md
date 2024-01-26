# JavaScript - Switch

https://www.youtube.com/watch?v=_wyPpPlFwrI&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=12

- if / else case works perfect
- here is a better way using switch / case

*exercise*

create an application with the following roles:
admin - gets full access
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - gets access to consume content 

```javascript

var user = "testprep";

switch (key) {  //evaluation
    case value: //cases
        //run code
        break; //stop
    default:
        break;
}

switch (user) {
    case 'admin':
        console.log('full access');
        break; //have to add the breaks, or esle it will fall through
    case 'subadmin':
        console.log('subadmin access');
        break;
    case 'testprep':
        console.log('testprep access');
        break;
    case 'testprep':
        console.log('consume content');
        break;
    default: //defaults to default user
        console.log('trial user');
    break;
}

```


