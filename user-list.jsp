<!DOCTYPE html>
<html>
<head>
    <title>Users List</title>
</head>
<body>
    <h2>All Registered Users</h2>
    <table>
        <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        <c:forEach var="user" items="${users}">
            <tr>
                <td>${user.userId}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phoneNumber}</td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>

