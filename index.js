const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let posts = [];

// Crear un usuario (POST)
app.post('/users', (req, res) => {
    const { id, name, bio } = req.body;
    if (users.find(user => user.id === id)) return res.status(400).json({ message: 'Usuario ya existe' });
    users.push({ id, name, bio, following: [] });
    res.status(201).json({ message: 'Usuario creado' });
});

// Obtener información de un usuario (GET)
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
});

// Actualizar biografía de un usuario (PUT)
app.put('/users/:id/bio', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    user.bio = req.body.bio;
    res.json({ message: 'Biografía actualizada' });
});

// Eliminar un usuario (DELETE)
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    posts = posts.filter(p => p.userId != req.params.id);
    res.json({ message: 'Usuario eliminado' });
});

// Crear una publicación para un usuario (POST)
app.post('/users/:id/posts', (req, res) => {
    const { id, content } = req.body;
    const userId = req.params.id;
    
    if (!users.find(u => u.id === userId)) return res.status(404).json({ message: 'Usuario no encontrado' });

    const postId = posts.length + 1; // O cualquier lógica para generar un ID único
    posts.push({ id: postId, userId, content });
    
    res.status(201).json({ message: 'Publicación creada' });
});


// Obtener publicaciones de un usuario (GET)
app.get('/users/:id/posts', (req, res) => {
    const userPosts = posts.filter(p => p.userId == req.params.id);
    res.json(userPosts);
});

// Eliminar una publicación (DELETE)
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.json({ message: 'Publicación eliminada' });
});

// Seguir a otro usuario (POST)
app.post('/users/:id/follow', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    const targetUser = users.find(u => u.id == req.body.targetId);
    if (!user || !targetUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    if (!user.following.includes(targetUser.id)) user.following.push(targetUser.id);
    res.json({ message: `Ahora sigues a ${targetUser.name}` });
});

app.listen(3000, () => console.log('API en http://localhost:3000'));
