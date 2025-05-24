
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(100) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME,
  location VARCHAR(150),
  signup_link TEXT,
  signup_deadline DATE,
  priority VARCHAR(20),
  category_id INTEGER REFERENCES categories(id),
  user_id UUID REFERENCES users(id)
);

CREATE TABLE event_requirements (
  id SERIAL PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  description TEXT NOT NULL
);

CREATE TABLE event_reminders (
  id SERIAL PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  remind_at TIMESTAMP NOT NULL
);
