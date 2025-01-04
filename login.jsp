<!DOCTYPE html>
<html>
<head>
    <title>User Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form action="UserServlet" method="post">
        <input type="hidden" name="action" value="login" />
        Username: <input type="text" name="username" required /><br/>
        Password: <input type="password" name="password" required /><br/>
        <input type="submit" value="Login" />
    </form>

    <c:if test="${param.error == 'invalid'}">
        <p style="color:red;">Invalid username or password!</p>
    </c:if>
</body>
</html>
