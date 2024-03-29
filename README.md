# Open Jira App

This application presents a dashboard, where the user can create, update, delete tasks and move them between different status columns (to do, in progress, complete). The application works with Next JS 13.

## Installation

Get code using

```
git clone https://github.com/baguilar6174/next-openjira-app.git
```

Step 2:

Install the necessary libraries (make sure you have node >= 16 and yarn)

```
yarn
```

Step 3:

Configure and start Database

```
docker-compose up -d
```

**Mongo DB URL Local**: `mongodb://localhost:27017/jiradb`

Step 4:

Configure environment variables, you need to rename **.env.template** to **.env** file

Step 5 (optional):

You can creata fake data using the endpoint:

GET: [http://localhost:3000/api/seed](http://localhost:3000/api/seed)

Step 6:

Runs the app in the development mode

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My process

### Build with

- Next JS 13
- React 18
- Typescript
- Material UI
- Context API
- MongoDB & Mongoose
- Handle Mongoose schema
- Next JS Restfull API
- Server Side Rendering

### What I learned

- Using beta app dir
- Custom MUI themes
- Context management
- Drag and Drop (without third party libraries)

## Open Jira App

<table>
  <tr>
    <td align="center" valign="center"><img src="./media/1.png" width="80%"></td>
    <td align="center" valign="center"><img src="./media/2.png" width="100%"></td>
  </tr>
  <tr>
    <td align="center" valign="center"><img src="./media/3.png" width="100%"></td>
    <td align="center" valign="center"><img src="./media/4.png" width="100%"></td>
  </tr>
 </table>

## Stay in touch

- Website - [www.bryan-aguilar.com](https://www.bryan-aguilar.com/)
- Medium - [baguilar6174](https://baguilar6174.medium.com/)
- LinkeIn - [baguilar6174](https://www.linkedin.com/in/baguilar6174)
