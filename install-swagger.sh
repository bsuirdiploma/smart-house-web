#!/usr/bin/env bash

cd ${PWD}/src/app/modules/swagger

rm -rf generated

if [ ! -f openapi-generator-cli.jar ]; then
    wget http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/3.2.2/openapi-generator-cli-3.2.2.jar -O openapi-generator-cli.jar
fi

generate() {
  java -jar openapi-generator-cli.jar generate -g typescript-angular -c openapi-config.json -i $1 -o $2
  find $2 -regextype posix-egrep -regex '.*/(index|api|models|api.module).ts' -exec rm {} +
}

generate ../../../../../watering-api/target/swagger.json    generated/watering
generate ../../../../../climate-api/target/swagger.json     generated/climate
generate ../../../../../user-api/target/swagger.json        generated/user
generate ../../../../../ctv-api/target/swagger.json         generated/ctv
