# NotesAPI

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NotesAPI.git
   cd NotesAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variable**
   Fill in your values in `.env`

4. **Start the Server**
   ```bash
   npm start
   ```

📄 Sample API Usage

// User Register  
POST /api/auth/register  
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123"
}
```

// User Login  
POST /api/auth/login  
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

🔁 Returns: `{ "token": "..." }`

📝 Notes (Authenticated - Bearer Token required)

// Create Note  
POST /api/notes  
Headers:
```
Authorization: Bearer <token>
```
Body:
```json
{
  "title": "Meeting Notes",
  "content": "Project discussion with team"
}
```

// Get Notes  
GET /api/notes  
Headers:
```
Authorization: Bearer <token>
```
Returns:
```json
[
  {
    "_id": "6875062668a3221af55be2ae",
    "title": "Cat",
    "content": "Cat is a mammal",
    "user": "6874ff9ad1b2ed47d5120ead",
    "createdAt": "2025-07-14T13:29:10.032Z",
    "updatedAt": "2025-07-14T13:29:10.032Z",
    "__v": 0
  }
]
```
