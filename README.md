# Angular example

angular-8-crud with laravel backend api

# lession-02: Typescript overview

### Keys result
```
- Learn abount Promise, Resolve, Reject
- Async, await
- Read https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await
```

### Setups
```
Setup environment
1. install node
	https://nodejs.org/en/download/
2. install typescript
	https://www.digitalocean.com/community/tutorials/typescript-new-project
```

# lession-03: Angular overview

### Basic command
```
1. create component
	ng g c login

2. ng serve -o
```

### Install bootstrap

```
-   npm install bootstrap jquery --save
-   angular.json file

    ...
    
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    
    ...

- If bootstrap won't work then try to import bootstrap CSS in style.css like:

    /* You can add global styles to this file, and also import other style files */

    @import '~bootstrap/dist/css/bootstrap.min.css';

    .footer {
        position: absolute;
        bottom: 0;
        width:100%;
        height: 70px;
        background-color: blue;
        text-align: center;
        color: white;
    }
```

# lession-08

``` 
Step 01.
 - Restore DB
 
 Step 02.
 - Go to laravel project folder with command (ex: cd /Users/xxx/laravel-api)
 - Start Laravel project with command: php artisan serve
 - Go to url http://127.0.0.1:8000/api/customers check example data

 Step 03.
- Go to Angular project folder with command (ex: cd /Users/xxx/angular-crud)
- Start Angular project with command: ng serve
- Go to menu EmployeeList to show list Employee
```