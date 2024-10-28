const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const API_KEY = process.env.API_KEY; 

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('requestWeatherUpdate', async (city) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},BR&appid=${API_KEY}&units=metric`);
            const data = response.data;

            const weatherData = {
                currentDate: new Date().toLocaleString(),
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                weatherDescription: data.weather[0].description,
            };

            socket.emit('weatherUpdate', weatherData);
        } catch (error) {
            socket.emit('weatherUpdate', { error: 'Erro ao obter dados' });
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
