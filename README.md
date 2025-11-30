# 🎨 Frontend - Nuxt.js приложение

## 📁 Структура

```
frontend/
├── pages/               # Страницы приложения
│   ├── index.vue       # Главная страница
│   ├── login.vue       # Логин
│   ├── register.vue    # Регистрация
│   └── account/        # Личный кабинет
├── layouts/            # Макеты
├── plugins/            # Плагины (API, auth)
├── assets/             # Стили и изображения
├── static/             # Статические файлы
├── nuxt.config.js      # Конфигурация Nuxt
├── package.json        # Зависимости
└── .env.local          # Переменные окружения
```

## 🚀 Запуск

```bash
cd frontend
npm install
npm run dev
```

Приложение откроется на **http://localhost:3000**

## 🔗 Конфигурация API

Создай файл `frontend/.env.local`:

```env
API_URL=http://localhost:3001
```

## 📄 Страницы

- `/` - Главная страница с моделями
- `/register` - Регистрация
- `/login` - Логин
- `/account` - Личный кабинет
- `/account/billing` - Биллинг

## 🎯 Команды

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build

# Запуск production версии
npm start
```

## 🔗 Связь с бэкендом

Бэкенд находится в папке `../backend/api-server` и должен работать на `http://localhost:3001`

## 📖 Документация

Смотри `/docs` в корне проекта
