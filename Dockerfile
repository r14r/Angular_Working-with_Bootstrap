FROM node:alpine
ENV HOME=/home/node
RUN  ["yarn","global","add","@angular/cli@latest"]     

ADD  package.json \
     yarn.lock \
     .angular-cli.json \
     CHANGELOG.md \
     README.md \
     tsconfig.json \
     tslint.json \
     karma.conf.js $HOME/working-with-bootstrap/

ADD src/ $HOME/angular-material-demo/src

RUN chown -R node:node $HOME/*

USER node
WORKDIR $HOME/working-with-bootstrap

RUN ["yarn","install"]
EXPOSE 4200
ENTRYPOINT ["ng", "serve", "-H", "0.0.0.0"]
