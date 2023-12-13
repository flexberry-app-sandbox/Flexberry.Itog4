docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itog4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itog4-java/app ../../..
