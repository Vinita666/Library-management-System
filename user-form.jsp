<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>
    <h2>Register User</h2>
    <form action="UserServlet" method="post">
        <input type="hidden" name="action" value="add" />
        Username: <input type="text" name="username" required /><br/>
        Password: <input type="password" name="password" required /><br/>
        Email: <input type="email" name="email" required /><br/>
        Phone Number: <input type="text" name="phone_number" required /><br/>
        <input type="submit" value="Register" />
    </form>
</body>
</html>
