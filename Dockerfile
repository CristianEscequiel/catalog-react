FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Vite hornea VITE_* en el bundle (no es un secreto). Llega como build-arg desde el CI.
ARG VITE_CLIENT_ID
ENV VITE_CLIENT_ID=$VITE_CLIENT_ID
RUN npm run build

FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
