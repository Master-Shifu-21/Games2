FROM node:18

WORKDIR /application

COPY package*.json ./

ENV DATABASE_URL=postgres://postgres.owublelrjcelahtrlygv:PmNQLsy6999LBKs5@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]