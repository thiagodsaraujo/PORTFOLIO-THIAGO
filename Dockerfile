# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project and copy assets manually
RUN npm run build && \
    mkdir -p dist/attached_assets && \
    cp -r attached_assets/* dist/attached_assets/ 2>/dev/null || true && \
    cp script.js dist/ 2>/dev/null || true && \
    cp project-detail.js dist/ 2>/dev/null || true

# Production stage  
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Simple nginx config
RUN echo 'server { listen 80; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]