FROM node:12.15.0-alpine

LABEL maintainer="ProntoPro <devops@prontopro.it>"

ENV NODE_ENV production
ENV PORT 3000

WORKDIR /srv/app

ADD package.json yarn.lock ./

RUN yarn --frozen-lockfile --production

ADD . ./

EXPOSE ${PORT}

CMD ["yarn", "start"]
